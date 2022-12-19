const { Router } = require('express');
const express = require('express')
const userBL = require('../bl/usersBL')
const router = express.Router()


Router.get('/users', (req,res,next) => {
    return res.json('data data data')
})


module.exports = router;