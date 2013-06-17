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
event = require('events').EventEmitter;
router = new event();
router.setMaxListeners(0)

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


//Give us a repl to do some testing stuffs
var repl = require('repl');
repl.start({useGlobal:true});
