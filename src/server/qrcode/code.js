const QRCode = require('qrcode')
const uniqid = require('uniqid');


class CodeGenerator{

	constructor(){

	}

	generateCode(){
		return uniqid();
	}

	generateQRCode(id){
		
		QRCode.toFile('./' + id +  '.png', 'Some text', {
		  color: {
		    dark: '#000', 
		    light: '#FFF'
		  }
		},  (err) => {
		  if (err) throw err
		  console.log('done')
		})
	}

}

