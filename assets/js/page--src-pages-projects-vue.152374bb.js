(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{310:function(t,e,n){},311:function(t,e){},326:function(t,e,n){"use strict";var s=n(5),i=n(75).filter,r=n(50),a=n(33),c=r("filter"),o=a("filter");s({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},327:function(t,e,n){"use strict";var s=n(310);n.n(s).a},328:function(t,e,n){"use strict";var s=n(311),i=n.n(s);e.default=i.a},400:function(t,e,n){"use strict";n.r(e);n(326),n(131),n(49),n(20),n(76);var s=n(112),i={metaInfo:{title:"Projects"},data:function(){return{selectedTags:[1,2],tags:[],loading:!1,search:"",selected:[]}},computed:{allSelected:function(){return!1},selections:function(){var t,e=[],n=Object(s.a)(this.selected);try{for(n.s();!(t=n.n()).done;){var i=t.value;e.push(i)}}catch(t){n.e(t)}finally{n.f()}return e},categories:function(){var t=this.search.toLowerCase();return t?this.tags.filter((function(e){return e.title.toLowerCase().indexOf(t)>-1})):this.tags},experiences:function(){var t=this.$page.experiences.edges,e=[];if(0==this.selections.length)return t;for(var n=0;n<t.length;n++)for(var s=t[n].node.tags,i=0;i<s.length;i++)if(-1!=this.selections.map((function(t){return t.title})).indexOf(s[i].title)){e.push(t[n]);break}return e}},watch:{selected:function(){this.search=""},search:function(){}},methods:{},mounted:function(){for(var t=this.$page.experiences.edges,e=0;e<t.length;e++)for(var n=t[e].node.tags,s=0;s<n.length;s++)-1==this.tags.map((function(t){return t.title})).indexOf(n[s].title)&&this.tags.push(n[s])}},r=(n(327),n(4)),a=n(328),c=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("v-container",{staticClass:"section"},[n("v-row",[n("v-col",[n("v-chip-group",[t._l(t.selections,(function(e,s){return[n("v-chip",{key:e.title,attrs:{outlined:"",close:""},on:{"click:close":function(e){return t.selected.splice(s,1)}}},[t._v(t._s(e.title))])]}))],2)],1)],1),n("v-row",[t.allSelected?t._e():n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{ref:"search",staticClass:"py-0",attrs:{"full-width":"","hide-details":"",label:"Search tags","single-line":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),n("v-row",[n("v-col",[t.allSelected?t._e():n("v-chip-group",[t._l(t.categories,(function(e){return[t.selected.includes(e)?t._e():n("v-chip",{key:e.title,attrs:{outlined:"",disabled:t.loading},on:{click:function(n){return t.selected.push(e)}}},[t._v(t._s(e.title))])]}))],2)],1)],1),n("v-row",{staticClass:"my-auto",attrs:{dense:"",align:"stretch","align-content":"stretch"}},t._l(t.experiences,(function(e){return n("v-col",{key:e.id,staticClass:"d-flex",attrs:{cols:"12",sm:"4","align-self":"stretch"}},[n("v-hover",{attrs:{"close-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(s){var i=s.hover;return[n("v-card",{staticClass:"transition-swing d-flex flex-column",class:t.$vuetify.theme.dark?i?"light-elevation-16":"":i?"elevation-24":"elevation-2"},[n("v-card-title",[n("g-link",{staticClass:"g-link",staticStyle:{color:"inherit"},attrs:{to:e.node.path}},[t._v(t._s(e.node.title))])],1),n("v-card-text",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.excerpt)}}),n("v-spacer"),n("v-card-text",[n("v-chip-group",{attrs:{"show-arrows":!1}},t._l(e.node.tags,(function(e){return n("v-chip",{key:e.id,attrs:{to:e.path}},[t._v("\n                              "+t._s(e.title)+"\n                          ")])})),1)],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",to:e.node.path}},[t._v("\n                          Learn More\n                      ")]),n("v-spacer"),e.node.github?n("v-btn",{attrs:{href:e.node.github,target:"_blank",icon:""}},[n("v-icon",[t._v("$vuetify.icons.github")])],1):t._e(),e.node.website?n("v-btn",{attrs:{href:e.node.website,target:"_blank",icon:""}},[n("v-icon",[t._v("$vuetify.icons.website")])],1):t._e(),e.node.devpost?n("v-btn",{attrs:{href:e.node.devpost,target:"_blank",icon:""}},[n("v-icon",[t._v("$vuetify.icons.devpost")])],1):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)],1)}),[],!1,null,null,null);"function"==typeof a.default&&Object(a.default)(c);e.default=c.exports}}]);