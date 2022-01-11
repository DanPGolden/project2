console.log('Delete page connected')

$(".delete-btn").on("click", function() {
    fetch("/api/delete/" + $(this).attr("name"), {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        window.location.reload()
    })
})