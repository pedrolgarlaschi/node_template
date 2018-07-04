'use strict'

const express 			   = require('express')
const bodyParser           = require('body-parser');

const ApplicationPath      = require('./utils/applicationpath')


class Router {

    constructor() {

    	this.app = express();
        this.app.use(express.static(ApplicationPath.PUBLIC));
        this.app.use( bodyParser.json() ); 

        this.http               = require('http').Server(this.app);

    	this.getRouts = []

        this.postRouts = []     

    	this.getRouts.forEach((r) =>  {
    		this.app.get(r.url, this[r.callback].bind(this));    		
    	});

        this.postRouts.forEach((r) =>  {
            this.app.post(r.url, this[r.callback].bind(this));           
        });

    	this.http.listen(3000, () => console.log('start listen on port 3000'));
    }
}
module.exports = Router;