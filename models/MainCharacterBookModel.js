const db = require('../database');

module.exports = class MainCharacterBook {
    constructor(id, main_character, book) {
        this.id = id;
        this.main_character = main_character;
        this.book = book;
    }
    static fetchAllMainCharactersBooksRelations(){
        return db.execute('SELECT main_characters_books.id, main_characters_books.main_character AS mainCharacterId, main_character.name AS mainCharacterName, main_characters_books.book AS bookId, book.title AS bookTitle FROM main_characters_books JOIN main_character ON main_characters_books.main_character = main_character.id JOIN book ON main_characters_books.book = book.id');

    }
    static fetchMainCharacterBookById(id){
        return db.execute('SELECT * FROM main_characters_books  WHERE main_characters_books.id = ?', [id]);
    }
    static fetchAllMainCharactersFromBookId(bookId){
        return db.execute('SELECT * FROM main_character JOIN main_characters_books ON main_character.id = main_characters_books.main_character WHERE main_characters_books.book  = ?', [bookId])

    }
    static fetchAllBooksFromMainCharacterId(mainCharacterId){
        return db.execute('SELECT book.id, book.title, book.author, book.summary, book.release_date, book.reading_order, book.img_url, book.period, serie.name AS serieName,  main_characters_books.main_character, main_characters_books.book FROM book LEFT JOIN main_characters_books ON book.id = main_characters_books.book LEFT JOIN serie ON serie.id = book.serie_id WHERE main_characters_books.main_character = ?', [mainCharacterId])

    }
    static deleteRelation(id){
        return db.execute('DELETE FROM main_characters_books  WHERE main_characters_books.id = ?', [id]);
    }
    static createMainCharacterBookRelation(mainCharacterId, bookId){
        return db.execute(
            'INSERT INTO main_characters_books (main_character, book) VALUES (?,?)',
            [mainCharacterId, bookId]
        )
    }
}