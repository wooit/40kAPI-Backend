const db = require('../database');

module.exports = class User {
    constructor(id, author, summary, releaseDate, releaseOrder, imgUrl, readingOrder, period, multipleStories, serieId) {
        this.id = id;
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
}