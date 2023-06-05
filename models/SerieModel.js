const db = require('../database');

module.exports = class Serie {
    constructor(id, name, summary) {
        this.id = id;
        this.name = name;
        this.summary = summary;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM serie');
    }
}