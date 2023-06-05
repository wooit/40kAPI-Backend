const db = require('../database');

module.exports = class User {
    constructor(id, username, email, password, is_admin) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = is_admin;
    }
    static fetchAll(){
        return db.execute('SELECT * FROM user');
    }
}