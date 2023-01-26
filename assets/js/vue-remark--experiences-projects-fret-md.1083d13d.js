(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{C7hP:function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("UQSp"),i=o("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.default.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===r(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},c=i.default.config.optionMergeStrategies,h="__vueRemarkFrontMatter",u={excerpt:"An interactive tool for visualizing the physics of Förster Resonance Energy Transfer (FRET).",title:"FRET Visualizer",date:"2014-05-01T00:00:00.000Z",endDate:"2014-08-01T00:00:00.000Z",subtitle:"An interactive tool for visualizing the physics of Förster Resonance Energy Transfer (FRET).",img:"fret3.png",thumbnail:"fret8.png",github:"https://github.com/TheRobotCarlson/fret",tags:["mathematica","data-visualization","wku-physics-research"]};var f=function(t){t.options[h]&&(t.options[h]=u),i.default.util.defineReactive(t.options,h,u),t.options.computed=c.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},p=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("VueRemarkRoot",[e("h2",{attrs:{id:"inspiration"}},[e("a",{attrs:{href:"#inspiration","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Inspiration")]),e("p",[t._v("When dealing with "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/F%C3%B6rster_resonance_energy_transfer",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Förster Resonance Energy Transfer")]),t._v(", often the physics around the orientation factor, κ"),e("sup",[t._v("2")]),t._v(", is misunderstood. This leads to most people following the advice of "),e("a",{attrs:{href:"https://onlinelibrary.wiley.com/doi/abs/10.1560/IJC.49.3-4.313",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Yang (2010)")]),t._v(" and estimating it as 2/3, accepting a relative error of up to 10%. This can lead to larger errors if these calculations are used in later copmutations. For example, a research group out of Duke University explored the idea of using FRET calculations to create logic gates for a light-based computer. Only by understanding the orientation factor correctly would they be able make computations accurately.")]),e("p",[t._v("To help alleviate this issue, I built a tool that allows the user to visualize how the orientation factor affects the efficiency of energy transfer and the probability distribution relating to the orientation of chromophores involved.")]),e("h2",{attrs:{id:"what-it-does"}},[e("a",{attrs:{href:"#what-it-does","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What it does")]),e("p",[t._v("This tool allows the user to change variables relating to the two chromophores involved in Förster Resonance Energy Transfer and see the resultant geometry / probability distributions as well as the efficiency of energy transfer.")]),e("h2",{attrs:{id:"how-i-built-it"}},[e("a",{attrs:{href:"#how-i-built-it","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("How I built it")]),e("p",[t._v("Mathematica has a range of tools that make it really easy to make and deploy interactive visualizations. At the time of making this, Mathematica was my primary programming language.")]),e("h2",{attrs:{id:"challenges-i-ran-into"}},[e("a",{attrs:{href:"#challenges-i-ran-into","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Challenges I ran into")]),e("p",[t._v("Being in high school when I first made this, I didn't really know anything about the messy math or physics needed. I've since learned, but now I rarely need it. Weird how things work out.")]),e("h2",{attrs:{id:"accomplishments-that-im-proud-of"}},[e("a",{attrs:{href:"#accomplishments-that-im-proud-of","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Accomplishments that I'm proud of")]),e("p",[t._v("I actually came to understand the research during my time working on this project and it's stuck with me many years (5 years at the time of writing!) later.")]),e("h2",{attrs:{id:"what-i-learned"}},[e("a",{attrs:{href:"#what-i-learned","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What I learned")]),e("p",[t._v("A lot of physics that I knew nothing about before. And that Mathematica makes it extremely easy to make demos for just about anything.")]),e("h2",{attrs:{id:"whats-next-for-fret"}},[e("a",{attrs:{href:"#whats-next-for-fret","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What's next for FRET")]),e("p",[t._v("Nothing! This project was a long time ago. If anyone wants me to get the tools back up and running again, email me at "),e("a",{attrs:{href:"mailto:briancarlson6174@gmail.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("briancarlson6174@gmail.com")]),t._v(".")])])}),[],!1,null,null,null);"function"==typeof l&&l(p),"function"==typeof f&&f(p);e.default=p.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render(t){return t("div",null,this.$slots.default)}}}}]);