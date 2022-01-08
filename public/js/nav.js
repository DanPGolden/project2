console.log("nav js connected")

$(".review-btn").on("click", function() {
    console.log("what this", $(this).attr('name'))  
    // not using this code because we want to change the URL, if we wanted to replace the content
    // on the page we would use lines 8-14

    // fetch('/gameReviews/' + $(this).attr('name') , {
    //     method: 'GET',
    // }).then(function(response) {
    //     return response.json()
    // }).then(function(data) {
    //     console.log("outgoing data from backend", data)
    // })
    window.location.replace('/gameReviews/' + $(this).attr('name'))
})