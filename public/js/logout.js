console.log("logout page connected")

$("#logout").on("click", function() { // change based on handlebars
    fetch('/users/logout', { 
        method: 'GET', 
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
    })
})