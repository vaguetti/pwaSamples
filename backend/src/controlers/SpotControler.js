const Spot = require('../models/Spot');

// index, show, store, update e destroy
module.exports = {
 async store(req, res){ 

    console.log(req.body);
    console.log(req.file);
    //const spot = req.body;

       // spot = await User.create({spot});
    


    return res.json({'ok': true});
 }

};