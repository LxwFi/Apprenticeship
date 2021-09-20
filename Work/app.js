const Author = require("./author");
const Book = require("./book");



let author1 = new Author("Timothy", 1994);
let book1 = new Book("Bookson", author1);
book1.newEdition();


console.log(book1);
console.log(book1.author.name);
