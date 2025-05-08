const express = require('express');
const router = express.Router();

//const subject_text = '{"contactSubject": ["General Enquery","Classes","Schedules","Instructor","Prices","Other","Aim", "Thanchanok", "Aim" ]}'
const subject_file = require('../data/contact_subject.json');

router.get('/', (req , res) => {
    //res.end(subject_text);
    res.json(subject_file);

});

module.exports = router