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

//TODO: do some stuff to turn on or off the light
//TODO: do some stuff to make sure we are trying to access a light and not another kind of device.

class light {
    /**
     * Light
     */
    constructor() {
        this.listeners = {}; //well call these with the new info every time we change something.

        this.features = {
            'kind': 'output', //we're an output.
            'switches': 1 //we have 1 two-position state.
        };
    }

    /**
     * 
     * @param {boolean} state Wich State should it be?
     * @param {Function} [cb] Callback
     * @returns {void}
     */
    setState(state, cb = () => {}) {
        for (const callback in this.listeners) {
            callback(state); //tell everyone who is listening that we are changing our state
        }
        //mark the light as on or off.
        this.state = state;
        cb();
    }

    /**
     * Get One State
     * @returns {boolean} Returns the State
     */
    getState() {
        return this.state;
    }

    /**
     * Add a Listener
     * @param {function} onChange 
     * @param {string} id 
     * @param {function} [cb] 
     * @returns {void}
     */
    addListener(onChange, id, cb = () => {}) {
        this.listeners[id](onChange);
        cb();
    }

    /**
     * remove a Listener
     * @param {string} id 
     * @param {function} [cb] 
     * @returns {void}
     */
    removeListener(id, cb = () => {}) {
        delete this.listeners[id];
        cb();
    }
}

module.exports = {
    name: 'light',
    module: light
};