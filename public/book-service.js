function BookService() {
var url = 'http://localhost:9003/books'

    this.createBook = function(book){
        $.post(url, book).then(function(res) {
            console.log(res)
        })
    }
}