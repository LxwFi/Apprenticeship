const Author = require("./author");
const Book = require("./book");

let author1 = new Author("Timothy", 1994);
let book1 = new Book("Bookson", author1)
let book2 = new Book("", "")

test("Testing author", () => {
    expect(author1).toEqual({ name: 'Timothy', YearOfBirth: 1994 });
});

test("Testing author name", () => {
    expect(author1.name).toEqual("Timothy");
});

test("Testing Book", () => {
    expect(book1).toEqual({title: 'Bookson',author:{ name: 'Timothy', YearOfBirth: 1994 },latestEdition: 1});
});


test("Testing empty author field in book", () => {
    expect(book2.author).toEqual("");
});

test("Testing empty name field in book", () => {
    expect(book2.title).toEqual("");
});