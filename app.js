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

var express = require('express');
var app = express();
var io = require('socket.io').listen(require('http').createServer(app))

var server = {control:{},device:{}}

require('./plugins/light.js')(server);

//var config = require('./config.js');

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.send('Hello World');
});

io.sockets.on('connection', function(socket){
	socket.on('RegServerList',function(data,cb){
		cb(server);
	});
});
app.listen(process.env.PORT||8080);

