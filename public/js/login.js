console.log("login page connected")

$("#login").on("click", function() {
    var login = {
        userName: $("#name").val(), // change based on handlebars
        email: $("#email").val(), // change based on handlebars
        password: $("#password").val() // change based on handlebars
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
    })
})

$("#signup").on("click", function() { // change based on handlebars
    console.log("signup click")
    var signup = {
        name: $("#name-signup").val(),
        email: $("#email-signup").val(),
        password: $("#password-signup").val()
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