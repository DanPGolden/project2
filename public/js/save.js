console.log("Save page connected")

$('#save-review-btn').on('click', function(e) { 
    e.preventDefault();
    var newReview = {
        game_name: $('#game-selection option:selected').text(),
        game_id: $('#game-selection option:selected').val(),
        title: $("#new-review-title").val(),
        description: $('#new-review-description').val()               
    }
    console.log('ABOUT TO SEND THIS TO SAVE! review', newReview)
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