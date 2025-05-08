const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());



app.use('/api/subject' , require('./routes/subject.js'));
app.use('/api/subject' , require('./routes/contact.js'));

app.listen(PORT, ()  => {
    console.log("Server running at http://loclhost:" + PORT);
})
