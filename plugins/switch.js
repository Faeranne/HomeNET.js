//---------------------------------
//HomeNET.js: Switch Control
//========
//type: input
//version: 0.0.0
//---------------------------------
//Allows controlling switch items.
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


module.exports.module = function(id,router){
		this.inputs = {
			On:function(){
				//device.send(1);
				console.log('recieved an on command')
			},
			Off:function(){
				//device.send(0);
				console.log('recieved an off command')
			}
		}
		this.outputs = {
			On:function(){
				myself.send('On');
			},
			Off:function(){
				myself.send('Off');
			}
		}
		//include the following lines in each device.  They make it work.
		//TODO: move these to a seperate, inheritable file.
		this.watching=[]
		this.id=id;
		this.router=router;
		var myself = this;
		router.on('send',function(event){
			console.log(myself.watching.indexOf(event.from))
			if(myself.watching.indexOf(event.from)>=0||event.to==myself.id){
				try{
					myself.inputs[event.command]()//we dont nessesarly understand the command.  if we dont have it, throw it away.
				}catch(e){
				}
			}
		})
		this.send=function(command){
			myself.router.emit('send',{from:myself.id,command:command});
		}
	}

module.exports.name = 'wall_switch'

	
		
