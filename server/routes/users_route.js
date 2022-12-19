const { Router } = require('express');
const express = require('express')
const userBL = require('../bl/usersBL')
const router = express.Router()


router.get('/users', async (req,res,next) => {
    let data = await userBL.getAllUsers()
    return res.json(data)
})


module.exports = router;