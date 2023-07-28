const db = require('../database');

module.exports = class Faction {
    constructor(id, name, lore, imgUrl) {
        this.id = id;
        this.name = name;
        this.lore = lore;
        this.imgUrl = imgUrl;
    }
    static fetchAllFactions(){
        return db.execute('SELECT * FROM faction');
    }
    static fetchAllFactionsName(){
        return db.execute('SELECT name FROM faction')
    }
    static fetchFactionById(id){
        return db.execute('SELECT * FROM faction  WHERE faction.id = ?', [id]);
    }
    static fetchAFactionByName(name){
        return db.execute('SELECT * FROM faction  WHERE faction.name = ?', [name]);
    }
    static createNewFaction(name, lore, imgUrl){
        return db.execute(
            'INSERT INTO faction (name, lore, img_url) VALUES (?,?,?)',
            [name, lore, imgUrl]
        )
    }
    static deleteFactionById(id){
        return db.execute('DELETE FROM faction  WHERE faction.id = ?', [id]);
    }
    static updateFaction(name, lore, imgUrl, id){
        return db.execute('UPDATE faction SET name=?, lore=?, img_url=? WHERE id=?', [name, lore, imgUrl, id]);

    }
}