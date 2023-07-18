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
}