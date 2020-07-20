(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{172:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},396:function(t,e,o){"use strict";o.r(e);var a=o(4),n=o(172),r=o(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.default.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===i(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:o[t]=function(){return s[t]}}))},c=r.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:"A google cloud based cryptocurrency trading framework.",title:"Factorem",date:"2018-07-02T00:00:00.000Z",endDate:"2018-07-03T00:00:00.000Z",subtitle:"A google cloud based cryptocurrency trading framework",img:"factorem.jpg",thumbnail:"factorem.jpg",devpost:"https://devpost.com/software/pecunia-factorem",tags:["python","google-cloud","firestore","google-pubsub","hackathon"]};var h=function(t){t.options[u]&&(t.options[u]=d),r.default.util.defineReactive(t.options,u,d),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},p=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h2",{attrs:{id:"inspiration"}},[o("a",{attrs:{href:"#inspiration","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Inspiration")]),o("p",[t._v("I gave a talk in spring 2018 to a group of business majors about how technology could be used in the financial industry. For that talk, I put together a small demo of automated trading. Much to my surprise, the bot worked well, "),o("em",[t._v("really")]),t._v(" well.\nAt the time I was just using simulated money, but it was still remarkable that it had the potential to make that much money that quickly. Fast forward past a busy semester and an action and internship packed summer and we get to my first open weekend to finally build a full platform from scratch.")]),o("h2",{attrs:{id:"what-it-does"}},[o("a",{attrs:{href:"#what-it-does","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("What it does")]),o("p",[t._v("Primarily, this is a trading bot platform. The focus is on cryptocurrency, but it's been setup to be usable with any kind of API with buy/sell and price queries. The platform has a simulation mode for evaluating the performance of bots using simulated funds, but with mirror market buy/sell rates. ")]),o("h2",{attrs:{id:"how-we-built-it"}},[o("a",{attrs:{href:"#how-we-built-it","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("How we built it")]),o("p",[t._v("This was built in Google Cloud using Firestore, PubSub, Compute Engine, and Python 3.7. ")]),o("p",[t._v("Our code running in vms in Google Compute Engine poll exchanges to retrieve pricing and order data. Orders are published into PubSub streams by bots running on the framework and recorded in the Firestore database, other code running on a VM in Google Compute Engine subscribes to the order topics, checking account balances and permissions before placing the order. This allows the bot to only need read access to price data and publish access to the order topics per exchange. This allows for a more fine-grained permissions control should other people run bots on the framework. Another Google Compute engine VM polls exchanges to check when orders are completed so money can be reallocated to each bot running on the framework based on the orders placed.")]),o("h2",{attrs:{id:"challenges-we-ran-into"}},[o("a",{attrs:{href:"#challenges-we-ran-into","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Challenges we ran into")]),o("p",[t._v("Google Cloud can be really fickle when you're playing around with beta features. Firestore documentation is bad. Those things together often made it hard to figure out if I was the problem or it was. ")]),o("p",[t._v('I have a nasty habit of prematurely optimizing and I was constantly having to stop myself from doing things the "best way" in favor of the "quick and dirty way" in the traditional style of a hackathon due to time constraints.')]),o("h2",{attrs:{id:"accomplishments-that-were-proud-of"}},[o("a",{attrs:{href:"#accomplishments-that-were-proud-of","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Accomplishments that we're proud of")]),o("p",[t._v("We got it all working! So many complex parts all working together. It's amazing that we were able to make them all work so flawlessly.")]),o("h2",{attrs:{id:"whats-next-for-pecunia-factorem"}},[o("a",{attrs:{href:"#whats-next-for-pecunia-factorem","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("What's next for Pecunia Factorem")]),o("ul",[o("li",[t._v("Better error reporting and handling")]),o("li",[t._v("Chat interface for feedback")])])])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof h&&h(p);e.default=p.exports}}]);