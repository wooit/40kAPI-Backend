const db = require('../database');

module.exports = class AuthorBooks {
    constructor(id, author, book) {
        this.id = id;
        this.author = author;
        this.book = book;
    }
    static fetchAllAuthorsBooksRelations(){
        // return db.execute('SELECT * FROM authors_books')
        return db.execute('SELECT authors_books.id, authors_books.author AS authorId, author.name AS authorName, authors_books.book AS bookId, book.title AS bookTitle FROM authors_books JOIN author ON authors_books.author = author.id JOIN book ON authors_books.book = book.id;')
    }
    static fetchAllBooksFromAuthorId(authorId){
        return db.execute('SELECT * FROM book JOIN authors_books ON book.id = authors_books.book WHERE authors_books.author = ?', [authorId])
    }

    static createAuthorBookRelation(authorId, bookId){
        return db.execute(
            'INSERT INTO authors_books (author, book) VALUES (?,?)',
            [authorId, bookId]
        )
    }
    static fetchAuthorBookById(id){
        return db.execute('SELECT * FROM authors_books  WHERE authors_books.id = ?', [id]);
    }
    static deleteRelation(id){
        return db.execute('DELETE FROM authors_books  WHERE authors_books.id = ?', [id]);
    }
    static fetchAllAuthorsFromBookId(bookId){
        return db.execute('SELECT * FROM author JOIN authors_books ON author.id = authors_books.author WHERE authors_books.book = ?', [bookId])
    }
}