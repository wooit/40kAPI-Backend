const db = require('../database');

module.exports = class FactionBooks {
    constructor(id, faction, book) {
        this.id = id;
        this.faction = faction;
        this.book = book;
    }
    static fetchAllFactionsBooksRelations(){
        return db.execute('SELECT factions_books.id, factions_books.faction AS factionId, faction.name AS factionName, factions_books.book AS bookId, book.title AS bookTitle FROM factions_books JOIN faction ON factions_books.faction = faction.id JOIN book ON factions_books.book = book.id;')
        // return db.execute('SELECT * FROM factions_books')
    }
    static createFactionBookRelation(factionId, bookId){
        return db.execute(
            'INSERT INTO factions_books (faction, book) VALUES (?,?)',
            [factionId, bookId]
        )
    }
    static fetchAllFactionsFromBookId(bookId){
        return db.execute('SELECT * FROM faction JOIN factions_books ON faction.id = factions_books.faction WHERE factions_books.book  = ?', [bookId])
    }
    static fetchAllBooksFromFactionId(factionId){
        return db.execute('SELECT book.id, book.title, book.author, book.summary, book.release_date, book.reading_order, book.img_url, book.period, serie.name AS serieName, factions_books.faction, factions_books.book FROM book LEFT JOIN factions_books ON book.id = factions_books.book LEFT JOIN serie ON serie.id = book.serie_id WHERE factions_books.faction =  ?', [factionId])

    }
    static fetchFactionBookById(id){
        return db.execute('SELECT * FROM factions_books  WHERE factions_books.id = ?', [id]);
    }
    static deleteRelation(id){
        return db.execute('DELETE FROM factions_books  WHERE factions_books.id = ?', [id]);
    }
}