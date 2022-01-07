console.log("nav js connected")

$("#login-btn").on("click", function() {
    var login = {
        userName: $("#login-username").val(), 
        email: $("#login-email").val(), 
        password: $("#login-password").val() 
    }
    console.log("Login data", login)

    fetch('/users/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log("outgoing data from backend", data)
    })
})