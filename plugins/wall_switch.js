/*  ---------------------------------
    Allows controlling switch items.
    ---------------------------------
    TODO: Needs to be attached to the device item, not as a seperate item.
    ---------------------------------*/

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

class wall_switch {
    /**
     * Wallswitch
     * @param {string} id
     * @param {any} router
     */
    constructor(id, router) {
        this.watching = [];
        this.id = id;
        this.router = router;
        /**
         * true = on;
         * false = off;
         */
        this.state = false;
        var myself = this;

        router.on('send', function(event) {
            if (myself.watching.indexOf(event.from) >= 0 || event.to == myself.id) {
                try {
                    myself.inputs[event.command](); //we dont nessesarly understand the command.  if we dont have it, throw it away.
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }

    /**
     * 
     * @param {string} id
     * @returns {void}
     */
    startListen(id) {
        this.watching.push(id);
    }

    /**
     * 
     * @param {string} id
     * @returns {void}
     */
    stopListen(id) {
        var index = this.watching.indexOf(event.from); //@mrmakeit: from where should it get the var "event"? (in the original code too...)
        if (index >= 0)
            this.watching.split(index, 1);
    }

    /**
     * Turn the Wallswitch On
     * @returns {boolean} returns true if succesfull
     */
    on() {
        this.state = true;
        return true; // successful done the action
    }

    /**
     * Turn the Wallswitch Off
     * @returns {boolean} returns true if succesfull
     */
    off() {
        this.state = false;
        return true; // successful done the action
    }

    /**
     * Toggle the Wallswitch
     * @returns {boolean} returns true if succesfull
     */
    toggle() {
        this.state = !this.state;
        return true; // successful done the action
    }
}

module.exports = {
    name: 'wall_switch',
    module: wall_switch
};