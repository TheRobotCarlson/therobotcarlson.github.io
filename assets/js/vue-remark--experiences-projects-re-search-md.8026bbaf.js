(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"0m19":function(t,e,o){"use strict";o.r(e);var i=o("KHd+"),a=o("UQSp"),n=o("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.default.config.optionMergeStrategies;var s={VueRemarkRoot:a.a},c=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===r(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},l=n.default.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:"RESearch (<u>R</u>estriction <u>E</u>nzyme <u>Search</u>) uses existing databases of genes and restriction enzymes to find the optimal way to encode arbitrary information into DNA.",top:4,title:"RESearch",date:"2018-02-18T00:00:00.000Z",endDate:"2018-02-19T00:00:00.000Z",subtitle:"RESearch is a computational tool for determining the best way to perform multiple DNA transformations.",github:"https://github.com/zsilver1/RESearch",devpost:"https://devpost.com/software/research-1osetc",tags:["python","neo4j","bioinformatics","hackathon"]};var p=function(t){t.options[u]&&(t.options[u]=h),n.default.util.defineReactive(t.options,u,h),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("VueRemarkRoot",[e("h2",{attrs:{id:"inspiration"}},[e("a",{attrs:{href:"#inspiration","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Inspiration")]),e("p",[t._v("We were inspired by recent research done by Harvard University. The researchers were able to encode a small gif in DNA, frame by frame. We thought about how we could improve this process, and make it more accessible.")]),e("h2",{attrs:{id:"what-it-does"}},[e("a",{attrs:{href:"#what-it-does","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What it does")]),e("p",[t._v("RESearch uses existing databases of genes and restriction enzymes to find the optimal way to encode arbitrary information into DNA. (Restriction enzymes are used to bread apart DNA at certain base-pair patterns.) Research essentially outputs a step by step guide for a lab scientist trying to create a specific sequence in DNA. This can be used to either store arbitrary data in DNA, or (more importantly) to easily edit existing DNA to eliminate dangerous or unwanted mutations. For example, we could edit the DNA of bacteria to eliminate their resistance to antibiotics.")]),e("h2",{attrs:{id:"how-i-built-it"}},[e("a",{attrs:{href:"#how-i-built-it","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("How I built it")]),e("p",[t._v("RESearch is built mostly in python, but utilizes neo4j for the database of enzymes, and a freely available tool called Blast to easily search for patterns in genes.")]),e("h2",{attrs:{id:"challenges-i-ran-into"}},[e("a",{attrs:{href:"#challenges-i-ran-into","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Challenges I ran into")]),e("p",[t._v("It was very hard for us to optimize the neo4j database. There were over a million enzymes that we had to search through, so we had to modify our algorithm to allow it to run in a reasonable amount of time.")]),e("h2",{attrs:{id:"accomplishments-that-im-proud-of"}},[e("a",{attrs:{href:"#accomplishments-that-im-proud-of","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Accomplishments that I'm proud of")]),e("ul",[e("li",[t._v("Learning new technologies, and using them to create a relatively finished project.")]),e("li",[t._v("Working efficiently as a team to finish the project in time.")])]),e("h2",{attrs:{id:"what-i-learned"}},[e("a",{attrs:{href:"#what-i-learned","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What I learned")]),e("p",[t._v("We learned neo4j without any prior experience. We also learned a lot about biology and specifically bioinformatics.")]),e("h2",{attrs:{id:"whats-next-for-research"}},[e("a",{attrs:{href:"#whats-next-for-research","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("What's next for RESearch")]),e("p",[t._v("Hopefully, we can use RESearch for some future research projects, to develop it more.")])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof p&&p(d);e.default=d.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render(t){return t("div",null,this.$slots.default)}}}}]);