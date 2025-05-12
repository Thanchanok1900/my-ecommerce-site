const express = require('express');
const router = express.Router();

/*
1. read existing JSON file
2. parse it into array
3. add new data in array
4. write array in file
*/

const fs = require('fs');
const path = require('path');

router.post('/' , (req , res) => {
    const {email} = req.body;
    const subscribe = { subscribeAt : new Date() , email};

    const filePath = path.join(__dirname,"..","data","subscribe.json");
    // step 1-2 : read the existing file and parse it into an array

    let subscribes = []
    if(fs.existsSync(filePath)){
       let data = fs.readFileSync(filePath,"utf-8");
        subscribes = JSON.parse(data);
        // step 3 : add new data in array
        subscribes.push(subscribe)
        //step 4 :  write array back into file
        fs.writeFileSync(filePath , JSON.stringify(subscribes, null, 2));
        res.status(200).json({message : 'Email Received', subscribe});
    }else{
        fs.writeFileSync(filePath , JSON.stringify(subscribe, null, 2));
        res.status(200).json({message : 'Email Received', subscribe});
    }


    
});

module.exports = router;