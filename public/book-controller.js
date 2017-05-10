function BookController () {
    var bookService = new BookService()

    this.createBook = function(e) {
        e.preventDefault()

        var book = {
            title: e.target.title.value,
            author: e.target.author.value,
            published: e.target.published.value,
            rating: e.target.rating.value
        }

        bookService.createBook(book)
            
        bookService.getBook() 
            .then(function(data) {
                drawBooks(data)
            })
    }

    function drawBooks(data) {
      //  debugger
        var elem = document.getElementById("books")
        var template = "";
        for(var i = 0; i < data.length; i++) {
            var b = data[i];
             template += `
                <div class="col-xs-12 col-md-4">
                <h2>${b.title}</h2>
                <h3>${b.author}</h3>
                <h4>Published: ${b.published}</h4>
                <h5>Rating: ${b.rating}</h5>
                </div>
        `
        }
        return elem.innerHTML = template
    }
}