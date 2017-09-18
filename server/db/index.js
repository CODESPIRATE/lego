var mongo = require("mongodb");
const host = "localhost"
const port = 27017
const server = new mongo.Server(host,port,{auto_reconnect:true})
const db = new mongo.Db("mydb",server,{safe:true});
exports.createDbServer = function() {
	db.open(function(err,db) {
		if(err) 
			throw err;
		else {
			console.log("connect success!")
		}
	})
	db.on("close",function(err,db){
		if(err) 
			throw err;
		else {
			console.log("connect close!")
		}
	})
}
exports.insert = function(_collection,_documents,_callback) {
	if(!_collection || !_documents) {
		_callback && _callback(false);
		return;
	}
	db.collection(_collection,function(err,collection){
		collection.insert(_documents,function(err,docs){
			if(err) 
				throw err;
			else if(_callback){
				collection.find({}).toArray(function(err,docs){
					_callback(docs);
				})
			}	
			else 
				console("insert success");
			
		})
	})
}
exports.find = function(_collection,_selector,_callback) {
	if(!_collection || !_selector) {
		_callback && _callback(false);
		return;
	}
	db.collection(_collection,function(err,collection){
		collection.find(_selector).toArray(function(err,docs){
			if(err) 
				throw err;
			else if(_callback)
				_callback(docs);
			else 
				console.log("insert success");
		})
	})
}
exports.update = function(_collection,_selector,_documents,_callback) {
	if(!_collection || !_selector) {
		_callback && _callback(false);
		return;
	}
	db.collection(_collection,function(err,collection){
		collection.findAndModify(_selector,{id:1},_documents,function(err,docs){
			if(err) 
				throw err;
			else if(_callback)
				collection.find({}).toArray(function(err,docs){
					_callback(docs);
				})
			else 
				console("insert success");
		})
	})
}
exports.remove = function(_collection,_selector,_callback) {
	if(!_collection || !_selector) {
		_callback && _callback(false);
		return;
	};
	db.collection(_collection,function(err,collection){
		collection.remove(_selector,function(err,result){
			if(err) 
				throw err;
			else if(_callback)
				collection.find({}).toArray(function(err,docs){
					_callback(docs);
				})
			else 
				console("insert success");
		})
	})
}