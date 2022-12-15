const {
    pool
} = require("../config/config");

// const retrieveUser = async (username) => {


//     try {
//         const res = await pool.query(`select * from "user" WHERE username = '${username}';`);
//         return res.rows
//     } catch (error) {
//         return error;
//     }
// }

const retrieveUserByUsername = (username) => {

    const query = {
        name: "fetch-user-by-username",
        text: `SELECT * FROM "user" WHERE username = $1`,
        values: [username]
    }

    return new Promise((resolve, reject) => {
        res = pool.query(query, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.rows)
            }
        });
    })
}



const retrieveUserByID = (id) => {

    const query = {
        name: "fetch-user-by-id",
        text: `SELECT * FROM "user" WHERE id = $1`,
        values: [id]
    }

    return new Promise((resolve, reject) => {
        res = pool.query(query, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.rows)
            }
        });
    })
}






module.exports = {
    retrieveUserByUsername,
    retrieveUserByID
}