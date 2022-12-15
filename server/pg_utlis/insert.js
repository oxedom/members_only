const {
    pool
} = require("../config/config");

const addUser = (newUser) => {
    const {
        username,
        fname,
        lname,
        email,
        gender,
        birthday,
        hash,
        salt
    } = newUser

    let text = 'INSERT INTO "user"(username, fname, lname, hash, salt) VALUES($1, $2, $3, $4, $5) RETURNING *'
    let values = [username, fname, lname, hash, salt]
    return new Promise((resolve, reject) => {
        pool.query(text, values, (err, res) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Added a User with the username ${username}`);
                resolve(res.rows[0]);
            }
        })
    });
}


module.exports = {
    addUser
}