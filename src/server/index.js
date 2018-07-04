'use strict'

const Beloxx = require('./beloxx/beloxx');
const Router = require('./router');

class App{

	constructor(){
		this.router = new Router();
		this.belox = new Beloxx();
	}
}


module.exports = App;