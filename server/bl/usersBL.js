const pool = require('../config')

const getAllUsers = () => 
{

    return new Promise((resolve, reject) => 
    {
        try {
            console.log(pool);
            pool.query(query, (err, res) => 
            {
                if(err) { reject(err)}
                else { resolve(res.rows)}
            })
        } catch (error) {
            reject(error)
        }
        
    })
}

module.exports = { getAllUsers}