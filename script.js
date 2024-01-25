console.log("Hej från JS");

 fetch("https://api.github.com/users/brainztew/repos")
.then(function(response){
    return response.json();
})
.then(function(json) {
    console.log("github API", json);
    
     var githubrepos = document.getElementById("githubrepos");

    for(i=0; i<json.length; i++) {
        githubrepos.insertAdjacentHTML("beforeEnd", "<a href='" + json[i].html_url + "' target='_blank'><div class'githubrepo'>" + json[i].name + "</div></a>");
    }  
}); 