const db = require('../database');

module.exports = class Book {
    constructor(id, title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.releaseDate = releaseDate;
        this.imgUrl = imgUrl;
        this.readingOrder = readingOrder;
        this.period = period;
        this.multipleStories = multipleStories;
        this.serieId = serieId;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM book');
    }
    // WARNING, I NEED TO ADD OTHER FIELDS LATER WHEN I WILL NEED THEM
    static fetchAllBooksWithSerieName(){
        return db.execute('SELECT book.id, book.title, book.author, book.summary, book.img_url, book.period, serie.name AS serie FROM book LEFT JOIN serie ON serie.id = book.serie_id')
    }

    static fetchABookById(id){
        return db.execute('SELECT * FROM book  WHERE book.id = ?', [id]);
    }

    static fetchAllTitles(){
        return db.execute('SELECT title FROM book')
    }

    static fetchABookByTitle(title){
        return db.execute('SELECT * FROM book  WHERE book.title = ?', [title]);
    }

    static createANewBook(title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId){
        return db.execute(
            'INSERT INTO book (title, author, summary, release_date, release_order, img_url, reading_order, period, multiple_stories, serie_id) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId]

        )
    }
    static updateBook(title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId,id){
        return db.execute('Update book SET title=?, author=?, summary=?, release_date=?, release_order=?, img_url=?, reading_order=?, period=?, multiple_stories=?, serie_id=?  WHERE id=?', [title, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId, id]);

    }

    static deleteABookById(id){
        return db.execute('DELETE FROM book  WHERE book.id = ?', [id]);
    }
}