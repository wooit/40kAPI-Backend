const db = require('../database');

module.exports = class MainCharacterFaction {
    constructor(id, faction, book) {
        this.id = id;
        this.main_character = main_character;
        this.faction = faction;
    }
    static fetchAllMainCharactersFactionsRelations(){
        return db.execute('SELECT main_characters_factions.id, main_characters_factions.faction AS factionId, faction.name AS factionName, main_characters_factions.main_character AS mainCharacterId, main_character.name AS mainCharacterName FROM main_characters_factions JOIN faction ON main_characters_factions.faction = faction.id JOIN main_character ON main_characters_factions.main_character = main_character.id');
    }
    static fetchMainCharacterFactionById(id){
        return db.execute('SELECT * FROM main_characters_factions  WHERE main_characters_factions.id = ?', [id]);
    }
    static deleteRelation(id){
        return db.execute('DELETE FROM main_characters_factions  WHERE main_characters_factions.id = ?', [id]);
    }
    static createMainCharacterFactionRelation(mainCharacterId, factionId){
        return db.execute(
            'INSERT INTO main_characters_factions (main_character, faction) VALUES (?,?)',
            [mainCharacterId, factionId]
        )
    }
    static fetchAllMainCharactersFromFactionId(factionId){
        return db.execute('SELECT main_character.id, main_character.name, main_character.lore, main_character.img_url, main_character.is_primarch, main_character.is_important, main_character.is_leader, main_characters_factions.main_character, main_characters_factions.faction FROM main_character LEFT JOIN main_characters_factions ON main_character.id = main_characters_factions.main_character WHERE main_characters_factions.faction =  ?', [factionId])
    }
    static fetchAllFactionsFromMainCharacterId(mainCharacterId){
        return db.execute('SELECT * FROM faction JOIN main_characters_factions ON faction.id = main_characters_factions.faction WHERE main_characters_factions.main_character  = ?', [mainCharacterId])
    }
}