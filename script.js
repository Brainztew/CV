console.log("Hej från JS");

 fetch("https://api.github.com/users/brainztew/repos")
 .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    json.sort(function(a, b) {
      return new Date(a.created_at) - new Date(b.created_at);
    });

    console.log("github API", json);

    var githubrepos = document.getElementById("githubrepos");

    for (var i = 0; i < json.length; i++) {
      githubrepos.insertAdjacentHTML(
        "beforeEnd",
        "<a href='" +
          json[i].html_url +
          "' target='_blank' class='githubrepo-link'><div class='githubrepo'>" +
          json[i].name +
          "</div></a>"
      );
    }
  });


