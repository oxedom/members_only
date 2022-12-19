const pool = require('../config')

const getAllUsers = () => 
{
    const query = {
        name: 'Fetch All users',
        text: 'SELECT * FROM users'
    }

    return new Promise((resolve, reject) => 
    {
        try {
            res = pool.query(query, (err, res) => 
            {
                if(err) { reject(err)}
                else { resolve(
                    res.rows)}
            })
        } catch (error) {
            reject(error)
        }
        
    })
}

module.exports = { getAllUsers}