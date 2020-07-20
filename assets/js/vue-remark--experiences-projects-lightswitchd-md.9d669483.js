(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{172:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},386:function(t,e,o){"use strict";o.r(e);var n=o(4),i=o(172),a=o(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.default.config.optionMergeStrategies;var h={VueRemarkRoot:i.a},c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(h).forEach((function(t){"object"===r(h[t])&&"function"==typeof h[t].render?e[t]=h[t]:o[t]=function(){return h[t]}}))},s=a.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:"Lightswitchd is a home automation solution for anything that hooks into the wall.",top:2,title:"Lightswitchd",date:"2017-08-02T00:00:00.000Z",endDate:"2017-08-03T00:00:00.000Z",subtitle:"Smart Switch for Anything",vid:"lightswitchd.mp4",thumbnail:"lightswitchd.jpg",tags:["python","flask","react","raspberry-pi","iot","homekit","electronics","embedded","hackthehome","hackathon"]};var p=function(t){t.options[u]&&(t.options[u]=l),a.default.util.defineReactive(t.options,u,l),t.options.computed=s.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("p",[this._v("Items like Amazon’s Echo and Phillips Hue lights are limited by the fact that they are at the mercy of the physical light switch.  If you switch off the light using the switch, then you cannot turn the light back on with the Echo or any other smart device on the market.  In our solution, the switch is smart rather than the light.  The physical switch box is replaced with a power supply and voltage regulator, which is then connected to a Raspberry Pi.  The Pi runs a http server that keeps track of the states of the devices.  Clients can query the server to obtain and modify the state.  A listener also reads the states and drives the correct GPIO output to the voltage regulator, which then switches the light, fan, or whatever device you want to have connected.  This method allows Lightswitchd to stand alone, and it allows for a large number of devices to interface with the switch.  Lightswitchd can be currently controlled via a web browser connected to the Pi, a touch screen on the switch, a gesture detecting device on the switch, and by POSTing via curl.  The server can also support Amazon Echo, Homekit, and any other device that can do REST API calls.")])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof p&&p(d);e.default=d.exports}}]);