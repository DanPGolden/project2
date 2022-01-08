console.log("Save page connected")

$('#save').on('click', function(e) { // change based on handlebars buttons
    e.preventDefault();
    var newReview = {
        title: $('#title').val(),
        description: $('#description').val(), // need to change the #values based on handlebars
                                              // and decide on review parameters to see what should go here
    }
    fetch('/api/save', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        window.location.reload()
    })
})