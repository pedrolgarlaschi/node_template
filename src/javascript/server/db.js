//Exported the variable to our environment
//export MONGOLAB_URI="mongodb://localhost:27017/books"
//var url =  "mongodb://localhost:27017/books";

var url =  process.env.MONGOLAB_URI;
var mongoose = require('mongoose');

function DB()
{
    mongoose.connect(url , function(err){

    if (!err)
        this.connected = true;
    else
        console.log('db error: ' , err);    

    });
}

DB.prototype = {
    init:function()
    {
        
    }
}
DB.prototype.connected = false;

module.exports = DB;