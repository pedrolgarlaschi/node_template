var path = require('path');
var bodyParser = require('body-parser');

function Server(app){
	this.app = app;
	this.app.use( bodyParser.json() ); 
}

Server.prototype  = {
	getRouts : [
		{name:'/' , handler:'getIndex'}
	],
	postRouts : [
	],
	handlers : {
		getIndex:function(req , res){
			console.log('get index');

			res.sendFile(path.resolve('./www/index.html'));
		},
	},
	init:function()
	{
		this.getRouts.forEach(function(r) {
             this.app.get(r.name , this.handlers[r.handler].bind(this));
        }, this);

        this.postRouts.forEach(function(r) {
             this.app.post(r.name , this.handlers[r.handler].bind(this));
        }, this);
	}
}
Server.prototype.constructor = Server;
module.exports = Server;