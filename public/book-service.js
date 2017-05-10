function BookService() {
var url = 'http://localhost:9003/books'

    this.createBook = function(book){
        $.post(url, book).then(function(res) {
            console.log(res)
        })
    }

    this.getBook = function(){
        return new Promise(function(resolve, reject) {
            $.get(url).then(
                function(data) {
                resolve(data);
              //  console.log(data)
            },
        function(error) {
          reject(error);
        }
      );
    });
		// $.get(url, function(data) {
        //     console.log(data)
        // })
	}
}