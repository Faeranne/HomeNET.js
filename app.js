//---------------------------------
//HomeNET.js
//========
//type: core
//version: 0.0.0
//---------------------------------

//Copyright (C) 2013 Blixa Morgan <blixa@projectmakeit.com>
//
//This program is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program. If not, see <http://www.gnu.org/licenses/>.


Modules = getPlugins();
Devices = {};
event = require('events').EventEmitter;
router = new event();
router.setMaxListeners(0)
router.send=function(command,from){
	this.emit('send',{command:command,from:from});
}
router.tell=function(command,to){
	this.emit('send',{command:command,to:to});
}
router.listenTo=function(reciever,sender){
	Devices[reciever].startListen(id);
}

function getPlugins(){
	var output = {}
	require("fs").readdirSync("./plugins").forEach(function(file) {
		if(file.split('.').pop()=='js'){
			var temp = require("./plugins/" + file);
			console.log('loading plugin '+file);
			output[temp.name]=temp.module
		}
	});
	return output;
}

ConnectDevice = function(id,type){
	if(Devices[id]){
		return "Failed. Device already exists"
	}
	Devices[id]=new Modules[type](id,router);
}
//Give us a repl to do some testing stuffs
var repl = require('repl');
repl.start({useGlobal:true});
kit = new Modules.wall_switch('5',router)
