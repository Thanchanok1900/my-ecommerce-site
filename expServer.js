const express = require('express');
const path  = require('path');
const app = express();

// serve static files from current project folder
app.use(express.static(__dirname));


app.get("/", (req , res) =>{
    res.sendFile(path.join(__dirname ));
});

app.listen(3000,() => {
    console.log('server running at http://localhost:3000');
});