const db = require('../database');

module.exports = class Author {
    constructor(id, name, country, biography, imgUrl) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.biography = biography;
        this.imgUrl = imgUrl;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM author');
    }

    static fetchAllNames(){
        return db.execute('SELECT name FROM author')
    }

    static fetchAuthorById(id){
        return db.execute('SELECT * FROM author  WHERE author.id = ?', [id]);
    }

    static fetchAuthorByName(name){
        return db.execute('SELECT * FROM author  WHERE author.name = ?', [name]);
    }

    static createNewAuthor(name, country, biography, imgUrl){
        return db.execute(
            'INSERT INTO author (name, country, biography, img_url) VALUES (?,?,?,?)',
            [name, country, biography, imgUrl]
        )
    }

    static updateAuthor(name, country, biography, imgUrl, id){
        return db.execute('UPDATE author SET name=?, country=?, biography=?, img_url=?  WHERE id=?', [name, country, biography, imgUrl, id]);
    }

    static deleteAuthorById(id){
        return db.execute('DELETE FROM author  WHERE author.id = ?', [id]);
    }
}
