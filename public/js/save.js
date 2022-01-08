console.log("Save page connected")

$('#save-review-btn').on('click', function(e) { 
    e.preventDefault();
    var newReview = {
        game_name: $('#new-review-game').val(),
        title: $("new-review-title").val(),
        description: $('#new-review-description').val()               
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
        console.log("new post data", data)
        window.location.reload()
    })
})