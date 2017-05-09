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
    }
}