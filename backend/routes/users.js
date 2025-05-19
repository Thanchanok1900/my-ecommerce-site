const express = require('express');
const router  = express.Router();
const userServices = require('.../service/userServices');

router.post('/' , (req,res) => {
    const response = userServices.login(req.body)
})

module.exports = router;