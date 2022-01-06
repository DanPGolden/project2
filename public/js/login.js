console.log("login page connected")

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

$("#signup-btn").on("click", function() { 
    console.log("signup click")
    var signup = {
        name: $("#signup-username").val(),
        email: $("#signup-email").val(),
        password: $("#signup-password").val()
    }
    console.log("signup data", signup)

    fetch('/users/signup', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(signup)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
    })
})