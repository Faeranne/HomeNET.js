//---------------------------------
//HomeNET.js: Light Control
//========
//type: output
//version: 0.0.0
//---------------------------------
//Allows access to light devices
//---------------------------------
//TODO: Needs to be attached to the device item, not as a seperate item.
//---------------------------------

//Copyright (C) 2013 Blixa Morgan <blixa@projectmakeit.com>

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

function Light(){
	var myself = this;
	
	this.features={
		"kind":'output', //we're an output.
		"state":2
	}
	//set some variables that we will use to talk to lights.
	this.setup = function(id,cb){
		//do some stuff to make sure we are trying to access a light.
		
		if(!server.device[id]=null){
			//somewhere this endpoint has been defined already.
			var err = 'node has already been defined.  please unset before trying to re-init.'
			cb(err);
			return;
		}
		
		server.device[id] = {
			'type':'light',//should equal our type. that way the server knows we can control it.
			'state':0//start with the light off.
		}
		cb(null);
	}
	
	this.setState = function(id,state,cb){
		//do some stuff to turn on or off the light
		
		//mark the light as on or off.
		server.device[id].state=state;
		cb(null);
	}
	
	this.getState = function(id,cb){
		var state = server.device[id].state;
		cb(null,state);
	}
	
	//icon for status indicators.
	//return a path for the icon we want to show.
	this.icon = function(id){
		return "/default.png"
	}
}

module.exports = function(server){
	server.control['light']=new Light();
}	
	
		
