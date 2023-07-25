const db = require('../database');

module.exports = class Serie {
    constructor(id, name, summary) {
        this.id = id;
        this.name = name;
        this.summary = summary;
    }
    static fetchAllSeries(){
        return db.execute('SELECT * FROM serie');
    }

    static fetchSerieById(id){
        return db.execute('SELECT * FROM serie  WHERE serie.id = ?', [id]);
    }

    static createSerie(name, summary){
        return db.execute(
            'INSERT INTO serie (name, summary) VALUES (?,?)',
            [name, summary]
        )
    }

    static deleteSerie(id){
        return db.execute('DELETE FROM serie WHERE serie.id = ?', [id]);
    }

    static fetchAllSeriesName(){
        return db.execute('SELECT name FROM serie')
    }

    static updateSerie(name, summary, id){
        return db.execute('UPDATE serie SET name=?, summary=? WHERE id=?', [name, summary, id])
    }
}