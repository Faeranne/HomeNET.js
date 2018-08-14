/*
Copyright (C) 2013 Blixa Morgan <blixa@projectmakeit.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

const fs = require('fs'),
    repl = require('repl'),
    Modules = getPlugins();

var Devices = {},
    router = new require('events').EventEmitter();

router.setMaxListeners(0);
router.send = (command, from) => {
    this.emit('send', { command: command, from: from });
};
router.tell = (command, to) => {
    this.emit('send', { command: command, to: to });
};
router.listenTo = (reciever /*, sender*/ ) => {
    Devices[reciever].startListen(id); // where should id be specified?
};

/**
 * Get all plugins in ./plugins
 * @returns {object} returns thew output
 */
function getPlugins() {
    let output = {};
    fs.readdirSync('./plugins').forEach((file) => {
        if (file.endsWith('.js')) {
            const temp = require('./plugins/' + file);
            console.log('loading plugin ' + file);
            output[temp.name] = temp.module;
        }
    });
    return output;
}

/**
 * Connect a Device
 * @param {string} id ID of the Device
 * @param {string} type Type of the Device
 * @returns {void | string} returns void, or when failed an error string
 */
function ConnectDevice(id, type) { // where should this be used?
    if (Devices[id])
        return 'Failed. Device already exists';
    Devices[id] = new Modules[type](id, router);
}

//Give us a repl to do some testing stuffs
repl.start({ useGlobal: true });
var kit = new Modules.wall_switch('5', router); // where should this be used?