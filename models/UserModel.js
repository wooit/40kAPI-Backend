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
        return db.execute('SELECT id, username, email, is_admin FROM user');
    }

    static checkIfAdmin(id){
        return db.execute('SELECT is_admin FROM user WHERE user.id = ?', [id]);
    }

    static findOne(email){
        return db.execute('SELECT * FROM user WHERE user.email = ?', [email]);
    }

    static findOneById(id){
        return db.execute('SELECT * FROM user WHERE user.id = ?', [id]);
    }

    static fetchUserCredentialsWithoutPassword(id){
        return db.execute('SELECT id, username, email, is_admin FROM user WHERE user.id = ?', [id]);
    }

     static saveUser(username, email, password, is_admin){
        return db.execute(
            'INSERT INTO user (username, email, password, is_admin) VALUES (?,?,?,?)',
            [username, email, password, is_admin]

        )
    }
}
