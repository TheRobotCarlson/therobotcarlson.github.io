(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{UQSp:function(t,o,n){"use strict";o.a={name:"VueRemarkRoot",render(t){return t("div",null,this.$slots.default)}}},fV6a:function(t,o,n){"use strict";n.r(o);var e=n("KHd+"),i=n("UQSp"),a=n("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.default.config.optionMergeStrategies;var p={VueRemarkRoot:i.a},u=function(t){var o=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===r(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?o[t]=p[t]:n[t]=function(){return p[t]}}))},c=a.default.config.optionMergeStrategies,s="__vueRemarkFrontMatter",f={excerpt:"Playing Pokémon with Interactive Learning in Large State Space",title:"Pokébot",date:"2018-07-02T00:00:00.000Z",endDate:"2018-08-02T00:00:00.000Z",subtitle:"Interactive Machine Learning Pokémon agent",img:"pokebot.png",thumbnail:"pokebot.png",github:"https://github.com/TheRobotCarlson/pokebot",tags:["python","reinforcement-learning","interactive"]};var l=function(t){t.options[s]&&(t.options[s]=f),a.default.util.defineReactive(t.options,s,f),t.options.computed=c.computed({$frontmatter:function(){return t.options[s]}},t.options.computed)},m=Object(e.a)({},(function(){var t=this._self._c;return t("VueRemarkRoot",[t("p",[this._v("Built an agent to automatically login, pick a team, setup a match, and play matches on pokemonshowdown.com. Interactive machine learning tools allow it to learn optimal gameplay from demonstration and positive/negative reward.")])])}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof l&&l(m);o.default=m.exports}}]);