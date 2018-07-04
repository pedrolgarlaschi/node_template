'use strict'

const soap 	= require('soap');
const url 	= 'https://de-beloxx.tanmode.com/cgi-bin/SOAPservice.exe/soap';

class Beloxx{

	constructor(){

		this.SessionID = '';

		soap.createClient(url,(err,client) => {
			if(err)
				return console.log('create client error: ' , err);		
			
			this.client = client;
		});
	}

	login(){
		const params = {UserName: this.soapUserName ,Password:this.soapPassword};
		this.client.Login(params ,(err, result) => {
			if(result.Result.ErrorCode == 0	)
				this.SessionID = result.Result.SessionID;
			else
				return console.log('login error: ' , err);
	   	});
	}

	createLockuser(callback){
		const params = {
			SessionID: this.SessionID,
			Params:{
				LockUserNumber:	'',
				FirstName:'Pedro',	
				FamilyName:'Sousa',	
				Street:'Barrier Point Road',	
				PostCode:'E16 2SF',	
				City:'London',	
				FederalState:'London',	
				Country:'UK',	
				PhoneNumber:'',	
				MobileNumber:'+447411959454',	
				Email:'pedro@neutral.gs',	
				LockUserLanguage:'EN',	
				Delivery:4
			}
		}

		console.log(params);

		this.client.createLockuser(params ,(err, result) => {
			console.log('result: ' , result);

			callback(err);
	   	});
	}

	selectLockusers(){
		const params = {SessionID: this.SessionID};
		this.client.selectLockusers(params ,(err, result) => {
			
			console.log('result.Result: ' , result.Result.Lockusers.TResultLockuser);
	   	});
	}

	selectLocks(){
		const params = {SessionID: this.SessionID};
		this.client.selectLocks(params ,(err, result) => {
			
			console.log('result.Result: ' , result.Result.Locks);
	   	});
	}

	get soapUserName(){
		return 'soap-neutral';
	}

	get soapPassword(){
		return 'C74xL#hG';
	}

}


module.exports = Beloxx;







