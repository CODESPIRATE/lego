var express = require("express");
var app = express();
app.use(express.static('./upload'))
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var db = require("./db");

var multer  = require('multer')
var util = require('util');

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

// 图片上传
var uploadFolder = './upload/';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径
    },
    filename: function (req, file, cb) {
        // 保存文件名设置
        var name = req.query.name?req.query.name:file.fieldname;
        var id = req.query.id?req.query.id:0;
        var type = /.*\.([a-z]+)$/.exec(file.originalname)[1]||'png';
        cb(null, id + '-' + name + '.' + type);
    }
});
var upload = multer({ storage: storage }).single('picture');
app.post('/pictureUpload', function(req, res, next){
  	upload(req, res, function(err,file) {
  		if (err) {
  			console.log(err)
	      	res.send(500,{code:500})
	    }else {
	    	res.send(200,{code:200,file:req.file})
	    }
  	})
});

app.listen("1639",function() {
	console.log('mock start:1639')
})
