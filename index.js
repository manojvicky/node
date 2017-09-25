console.log("Basic Http server");



// FORM DATA
// var connect = require('connect');
// var http = require('http');
// var bodyParser = require('body-parser');
// var app = connect()
// 		  .use(bodyParser.urlencoded({
// 		  	extended: true
// 		  }))

// 		  .use(function(req,res){
// 		  	var infoofuser = {};
// 		  	infoofuser.firstname = req.body.userfirstname;
// 		  	infoofuser.lastname = req.body.userlastname;
// 		  	res.end("the full name of user is "+infoofuser.firstname+" "+infoofuser.lastname)
// 		  })

// http.createServer(app).listen(8001,'localhost');
// console.log("localhost:8001 is LIVE ");
	




// HANDLERFUNCTION
// var handlerfunction = function(req ,res){
// res.end("i am responding");
// }

// http.createServer(handlerfunction).listen(8001,'localhost');
// console.log("localhost:8001 is LIVE ");






// SENDING RESPONSE BACK
// var connect = require('connect');

// var app = connect()
// 		  .use(function(req,res){

// 		  	if(req.url == "/hello"){
// 		  		console.log("plain text");
// 		  		res.end("I am hello");
// 		  	}
// 		  	else if(req.url == "/hello.json"){
// 		  		console.log("sending json");
// 		  		var data = "Hello Json data";
// 		  		var jsondata = JSON.stringify(data);
// 		  		res.setHeader('content-type', 'application/json');
// 		  		res.end(jsondata);
// 		  	}

// 		  	else if(req.url == "/pagenotfound"){
// 		  		console.log("sending 404 Status");
// 		  		res.statusCode = 404;
// 		  		res.end("page not found u moron");
// 		  	}
// 		  }).listen(8001,'localhost');

// console.log("localhost:8001 is LIVE ");


var request = require('request');

request('http://oursocialstartup.tk',function(error,response,body){
	if(!error && response.statusCode ==200 ){
		console.log(body);
	}

	if(error){
		console.log(error);
	}
});