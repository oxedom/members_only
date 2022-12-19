const { Router } = require('express');
const express = require('express')
const userBL = require('../bl/usersBL')
const router = express.Router()


Router.get('/users', (req,res,next) => {
    res.status(200).json({
        'I am matt'
    })
})


module.exports = router;