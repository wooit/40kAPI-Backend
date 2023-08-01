const db = require('../database');

module.exports = class MainCharacter {
    constructor(id, name, lore, imgUrl, isPrimarch, isImportant, isLeader) {
        this.id = id;
        this.name = name;
        this.lore = lore;
        this.imgUrl = imgUrl;
        this.isPrimarch = isPrimarch;
        this.isImportant = isImportant;
        this.isLeader = isLeader;
    }
    static fetchAllMainCharacters(){
        return db.execute('SELECT * FROM main_character');
    }
    static fetchMainCharacterById(id){
        return db.execute('SELECT * FROM main_character  WHERE main_character.id = ?', [id]);
    }
    static createNewAMainCharacter(name, lore, imgUrl, isPrimarch, isImportant, isLeader){
        return db.execute(
            'INSERT INTO main_character (name, lore, img_url, is_primarch, is_important, is_leader) VALUES (?,?,?,?,?,?)',
            [name, lore, imgUrl, isPrimarch, isImportant, isLeader]
        )
    }
    static deleteMainCharacterById(id){
        return db.execute('DELETE FROM main_character  WHERE main_character.id = ?', [id]);
    }
    static fetchAllMainCharactersName(){
        return db.execute('SELECT name FROM main_character')
    }
    static updateMainCharacter(name, lore, imgUrl, isPrimarch, isImportant, isLeader, id){
        return db.execute('UPDATE main_character SET name=?, lore=?, img_url=?, is_primarch=?, is_important=?, is_leader=? WHERE id=?', [name, lore, imgUrl, isPrimarch, isImportant, isLeader,id]);

    }
}


