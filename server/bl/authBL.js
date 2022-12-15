const utils = require("../lib/utlis")
const errorBL = require('../bl/errorBL')
const insertUtils = require('../pg_utlis/insert')
const queryUtils = require("../pg_utlis/query")

//Takes in loginObj username and password
const login = (loginObj) => {
  return new Promise(async (resolve, reject) => {

    const user = await queryUtils.retrieveUserByUsername(loginObj.username)
    let password = toString(loginObj.password)
    let hash = user[0].hash
    let salt = user[0].salt
    const isValid = utils.validPassword(password, hash, salt);
    if (isValid) {
      const tokenObject = utils.issueJWT(user);
      resolve({
        success: true,
        user: user,
        token: tokenObject.token,
        expiresIn: tokenObject.expires,
      })
    } else {
      resolve({
        success: false,
        msg: "you have entered the wrong password"
      })
    }

  })
}


const register = (registerObj) => {

  return new Promise((resolve, reject) => {

    //Pass length Validation
    if (registerObj.password.length < 8) {
      return resolve("Password not long enough")
    }

    const password = toString(registerObj.password)
    const saltHash = utils.genPassword(password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = {
      //User Data
      username: registerObj.username,
      fname: registerObj.fname,
      lname: registerObj.lname,

      //Password
      hash: hash,
      salt: salt,
      //App Data

    };
    resolve(insertUtils.addUser(newUser))



  })

}

module.exports = {
  login,
  register
};