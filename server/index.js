var express = require("express")
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var db = require("./db");
db.createDbServer();
app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin',"*");
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  	res.header('Access-Control-Allow-Credentials', true);
  	res.header("content-type","application/json")
  	if(req.method=="OPTIONS") res.send(200);
	else next()
});

app.get("/users/:id",function(req,res) {
	
	var params = req.params.id!=='0' ? {"id":req.params.id} : {};
	console.log("get",[req.url,params]);
	db.find('users',params,function(docs) {
		res.send(200,{code:200,users:docs})
	})
});
app.post("/users",function(req,res) {
	console.log("post",[req.url,req.body])
	db.insert('users',req.body,function(docs) {
		console.log(docs);
		res.send(200,{code:200,users:docs})
	})
});
app.put("/users/:id",function(req,res) {
	var params = req.params.id!=='0' ? {"id":req.params.id} : {};
	console.log("put",req.url,[params,req.body]);
	db.update('users',params,req.body,function(docs) {
		console.log(docs);
		res.send(200,{code:200,users:docs})
	})
});
app.delete("/users/:id",function(req,res) {
	console.log("delete",[req.url,res.params])
	var params = req.params.id!=='0' ? {"id":req.params.id} : {};
	db.remove('users',params,function(docs) {
		console.log(docs);
		res.send(200,{code:200,users:docs})
	})
});
app.listen("1639",function() {
	console.log('mock start:1639')
})