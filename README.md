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
- [x] basic device routing - the router object handels this now.

HomeNET.js is a Node.js server that manages configuring and controlling your smarthomes many avalible devices.  By using web technologies, the whole system can be controlled by your smartphone.

Plugins:
----
Plugins manage how a device is handled.  Devices can be physical, like lights or switches, or they can be virtual, like webpages or remotes.

A plugin hosts a set of inputs and outputs.  When an output is called, the device will send an event on the router.  That event will be picked up by other devices in the system, which will respond by triggering their inputs.

All devices can have inputs OR outputs.  Although they dont have to.

Current plugins:

- [ ] light
- [x] switch //Calling this done, for now.
- [ ] website


Website
----
The website interface allows you to configure the system from any pc.  You can also manage the current state of any device, and adjust it.
NOTE: code for the website does not exist yet!

TODO
====
- [ ] Write a universal device, which can be inhereted and extended on.

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


