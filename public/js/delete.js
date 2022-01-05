console.log('Delete page connected')

$('.delete').on('click', function() { // change based on handlebars
    console.log('WE GOT CLICKED!!', $(this).attr('name'))
    fetch('/api/delete/' + $(this).attr('name'), {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        window.location.reload()
    })
})