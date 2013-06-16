HomeNET.js
===============

NOTICE: 
This code is NOT ready for deployment.  Feel free to fork, under the understanding that it will change very rapidly over the next few weeks/months.  Pull requests will be accepted after the basic plugins and routing are implemented.

Get your smarthouse endpoints to talk to each other.

TODO:
---
A LOT!

- [ ] configuration pages
- [ ] control/monitor screen
- [ ] endpoint protocol
- [ ] basic plugins
- [ ] basic device routing

HomeNET.js is a Node.js server that manages configuring and controlling your smarthomes many avalible devices.  By using web technologies, the whole system can be controlled by your smartphone.

Plugins:
----
Plugins manage how a device is handled.  They can either be Input, Output or both.  They also have a list of avalible features.
For example, A light is an output device with a state feature.  That state feature supports upto 2 states.  A Switch is an input device with a state feature.  that state feature can support many states.
By using the site to link state to state, any input can control any output.  And they can be changed at any time.

Current plugins:

- [ ] light
- [ ] switch

Website
----
The website interface allows you to configure the system from any pc.  You can also manage the current state of any device, and adjust it.

Change Log:
====

core:
----
v0.0.0
Inital commit.  Does not actualy do anything yet.


plugins:
----
light.js
     v0.0.0
     Initial commit. Needs to be re-written. don't like the structor.

Licence
====

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


