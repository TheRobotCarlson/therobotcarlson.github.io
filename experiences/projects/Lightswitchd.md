---
top: 2
title: Lightswitchd
date: 2017-08-02
endDate: 2017-08-03
subtitle: Smart Switch for Anything 
excerpt: Lightswitchd is a home automation solution for anything that hooks into the wall.

vid: lightswitchd.mp4
thumbnail: lightswitchd.jpg


tags: ["raspberry-pi", "iot", "flask", "react", "homekit", "electronics", "embedded", "hackthehome", "hackathon"]
---
Items like Amazon’s Echo and Phillips Hue lights are limited by the fact that they are at the mercy of the physical light switch.  If you switch off the light using the switch, then you cannot turn the light back on with the Echo or any other smart device on the market.  In our solution, the switch is smart rather than the light.  The physical switch box is replaced with a power supply and voltage regulator, which is then connected to a Raspberry Pi.  The Pi runs a http server that keeps track of the states of the devices.  Clients can query the server to obtain and modify the state.  A listener also reads the states and drives the correct GPIO output to the voltage regulator, which then switches the light, fan, or whatever device you want to have connected.  This method allows Lightswitchd to stand alone, and it allows for a large number of devices to interface with the switch.  Lightswitchd can be currently controlled via a web browser connected to the Pi, a touch screen on the switch, a gesture detecting device on the switch, and by POSTing via curl.  The server can also support Amazon Echo, Homekit, and any other device that can do REST API calls.