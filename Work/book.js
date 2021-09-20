


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.latestEdition = 1;
    }
    newEdition() {
        this.latestEdition++;
    }
};


module.exports = Book;