(function(t){function e(e){for(var i,s,r=e[0],l=e[1],c=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plugin-helios-header-footer",attrs:{"data-fplugin":"local-data"}},[a("div",{staticClass:"helios-header helios-special-elements",attrs:{id:"helios-header"}},[a("nav",{staticClass:"top-nav"},[a("ul",{staticClass:"module-container",attrs:{"data-fplugin":"expand-menu","data-fopts":'{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'}},t._l(t.topNavigation,(function(e,i){return a("li",{key:i,staticClass:"padding-left-5"},[a("a",{staticClass:" gtm-button ",attrs:{"data-tracking-name":t.topNavIndexClass,"data-tracking-location":"Menu top navigation",href:e.url,title:"",target:"_self",rel:"nofollow noreferrer"}},[a("span",[e.meta.bold?a("span",{style:e.meta.yellow?"color: #000 !important; background-color: #efdf00;":""},[a("b",[t._v(t._s(e.title))])]):a("span",{style:e.meta.yellow?"color: #000 !important; background-color: #efdf00;":""},[t._v(t._s(e.title))])])])])})),0)]),a("div",{attrs:{"data-fplugin":"picture-lazy-loading","data-fopts":'{"imagesLoadingTrigger":".expand-box", "eventToLoadImages":"mouseenter", "event": "loadOnEvent"}'}},[a("div",{attrs:{"data-fplugin":"expand-menu","data-fopts":'{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'}},[a("div",{staticClass:"page-header--helios",attrs:{"data-fplugin":"menu"}},[a("header",{staticClass:"module-container"},[a("div",{staticClass:"header-part brand-logo"},[a("a",{attrs:{href:"index.html",title:"Renault BiH"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"79"}},[a("path",{attrs:{d:"M48.006 39.5L26.994 79h-5.997L0 39.5 20.997 0h5.997L6.011 39.5l17.992 33.857L41.994 39.5 31.496 19.757l3.005-5.643L48.006 39.5zM39.003 0h-5.997L12.008 39.5l13.504 25.386 3.006-5.643-10.499-19.757L36.011 5.63l17.992 33.857L33.006 79h5.997L60 39.5 39.003 0z",fill:"#FFF"}})])])]),a("div",{staticClass:"header-part menu-trigger ico-before-menu",on:{click:t.toggleMobileDropdown}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20"}},[a("defs",[a("filter",{attrs:{id:"a"}},[a("feColorMatrix",{attrs:{in:"SourceGraphic",values:"0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"}})],1)]),a("g",{attrs:{filter:"url(#a)",transform:"translate(-280 -20)"}},[a("g",{attrs:{transform:"translate(280 20)"}},[a("rect",{attrs:{width:"24",height:"2",rx:"1"}}),a("rect",{attrs:{width:"16",height:"2",y:"9",rx:"1"}}),a("rect",{attrs:{width:"20",height:"2",y:"18",rx:"1"}})])])])]),a("nav",{staticClass:"header-part menu hidden-xs"},[a("ul",{staticClass:"main-navigation"},[t._m(0),t._l(t.mainNavigation,(function(e,i){return a("Dropdown",{key:i,attrs:{item:e,itemIndex:i},on:{showModal:t.toggleCarCategory}})}))],2)])]),a("nav",{class:["mobile-menu",{"is-active":t.mobileDropdown}],style:t.mobileDropdown?"display: block;":"display: none;"},[a("div",{staticClass:"close-button menu-trigger",attrs:{"data-phf-ico-active-after":""},on:{click:t.toggleMobileDropdown}}),a("ul",{staticClass:"main-navigation"},[t._m(1),t._l(t.mainNavigation,(function(e,i){return a("Dropdown",{key:i,attrs:{item:e,itemIndex:i},on:{showModal:t.toggleCarCategory}})}))],2),a("div",{staticClass:"navigation-top-mobile"},[a("ul",{staticClass:"module-container"},t._l(t.topNavigation,(function(e,i){return a("li",{key:i,staticClass:"padding-left-5"},[a("a",{staticClass:" gtm-button ",attrs:{"data-tracking-name":t.topNavIndexClass,"data-tracking-location":"Menu top navigation",href:e.url,title:"",target:"_self",rel:"nofollow noreferrer"}},[a("span",[a("span",[t._v(t._s(e.title))])])])])})),0)])]),a("div",{staticClass:"nav-mask"})]),a("nav",{class:["menu-popup",{"is-active":Number.isInteger(t.activeCarCategory)}],staticStyle:{"min-height":"938px"}},[a("div",{staticClass:"menu-popup_close"},[t._v("Zatvori")]),0!=t.mainNavFirst?a("div",{staticClass:"menu-popup_inner"},t._l(t.mainNavFirst,(function(e,i){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.activeCarCategory===i,expression:"activeCarCategory === carPickerIndex"}],key:i,staticClass:"menu-popup_vehicles-container  is-active",staticStyle:{left:"327px"},attrs:{"data-popup":"595468798"}},[a("a",{staticClass:"menu-popup_vehicle-block menu-popup_range",attrs:{href:e.url}},[a("span",{staticClass:"menu-popup_icon",attrs:{"data-phf-ico-after":e.icon}}),a("span",{staticClass:"menu-popup_vehicle-name"},[t._v(t._s(e.title))])]),t._l(e.children,(function(e,i){return a("a",{key:i,staticClass:"menu-popup_vehicle-block",attrs:{href:e.url,target:"_self"}},[a("span",{staticClass:"menu-popup_img"},[a("img",{attrs:{src:e.icon}})]),a("span",{staticClass:"menu-popup_vehicle-name"},[t._v(t._s(e.title))])])}))],2)})),0):t._e()]),a("div",{staticClass:"menu-popup_mask"})]),a("nav",{staticClass:"progress-nav helios-special-elements"})])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"visible-xs visible-sm"},[a("a",{staticClass:"header-icon header-icon-home",attrs:{href:"index.html"}},[a("span",[t._v("Renault")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"visible-xs visible-sm"},[a("a",{staticClass:"header-icon header-icon-home",attrs:{href:"index.html"}},[a("span",[t._v("Renault")])])])}],s=a("bc3a"),r=a.n(s),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{"expand-box":!t.item.url}},[a("a",{class:["dropdown","ico--text",{"is-active":t.dropdownActive}],attrs:{href:t.item.url?t.item.url:"#","data-phf-ico-after":t.item.url?"":t.item.icon,"data-phf-ico-active-after":"",title:"Nova vozila",target:"_self"},on:{click:t.toggleDropdown}},[a("span",[t._v(t._s(t.item.title))])]),0===t.itemIndex&&0!=t.item?a("div",{class:["expand-container",{"is-active":t.dropdownActive}]},[a("div",{staticClass:"expand grid-row"},[a("div",{staticClass:"sub-nav sub-nav--expandable "},[a("ul",t._l(t.item.children,(function(e,i){return a("li",{key:i},[a("a",{staticClass:"sub-nav_link-expandable",attrs:{"data-popup":"595468798","data-phf-ico-after":"",href:"#",target:"_self",title:e.title},on:{click:function(e){return t.toggleCarCategory(i)}}},[a("span",[t._v(t._s(e.title))])])])})),0)])])]):t._e(),0===t.itemIndex||t.item.url||0==t.item?t._e():a("div",{class:["expand-container",{"is-active":t.dropdownActive}]},[a("div",{staticClass:"expand grid-row"},[a("div",{staticClass:"sub-nav  "},[a("ul",t._l(t.item.children,(function(e,i){return a("li",{key:i},[a("a",{staticClass:"sub-nav_link",attrs:{href:e.url,target:"_self",title:"Renault SELECTION"}},[a("span",[t._v(t._s(e.title))])])])})),0)])])])])},c=[],d=(a("a9e3"),{name:"Dropdown",props:{item:Object,itemIndex:Number},data:function(){return{dropdownActive:!1}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{toggleCarCategory:function(t){this.$emit("showModal",t)},closeDropdown:function(){this.dropdownActive=!1},toggleDropdown:function(){this.dropdownActive=!this.dropdownActive,this.$emit("showModal",null)},close:function(t){this.$el.contains(t.target)||(this.dropdownActive&&this.$emit("showModal",null),this.dropdownActive=!1)}}}),u=d,p=a("2877"),f=Object(p["a"])(u,l,c,!1,null,null,null),v=f.exports,h={components:{Dropdown:v},name:"Header",created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url),window.addEventListener("click",this.del)},data:function(){return{expanded:!1,mobileDropdown:!1,activeCarCategory:null,topNavigation:[],mainNavigation:[]}},beforeDestroy:function(){window.removeEventListener("click",this.del)},computed:{topNavIndexClass:function(){return!0},mainNavFirst:function(){return this.mainNavigation&&this.mainNavigation[0]&&this.mainNavigation[0].children}},methods:{fetchNavigation:function(t){var e=this;r.a.get(t).then((function(t){e.topNavigation=t.data.top_navigation.schema,e.mainNavigation=t.data.main_navigation.schema}))},toggleMobileDropdown:function(){this.mobileDropdown=!this.mobileDropdown},toggleCarCategory:function(t){console.log(t),this.activeCarCategory===t?this.activeCarCategory=null:this.activeCarCategory=t,null===t&&(this.activeCarCategory=null)},del:function(t){this.$el.contains(t.target)||(this.mobileDropdown=!1)}}},m=h,g=(a("e6bc"),Object(p["a"])(m,n,o,!1,null,"d659f0be",null)),_=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plugin-helios-header-footer"},[a("div",{staticClass:"helios-footer helios-special-elements",attrs:{id:"helios-footer"}},[a("div",{staticClass:"page-footer"},[a("footer",[a("div",{staticClass:"module-container"},[a("div",{staticClass:"container-fluid"},[0!=t.mainFooter?a("ul",{staticClass:"row footer-menu",attrs:{"data-fplugin":"expand-content","data-fres":'["xs"]',"data-fopts":'{"expandTriggerClass": "open", "collapsedDisplay" : "", "grouped" : "true", "collapsedDisplay" : ""}'}},[t._l(t.mainFooter,(function(e,i){return a("li",{key:i,staticClass:"col-xs-12 col-sm-4 col-md-3 expand-box",on:{click:function(e){return e.preventDefault(),t.toggle(i)}}},[a("div",{class:["menu-group-name","trigger",{open:t.isVisible(i)}]},[t._v(t._s(e.title))]),a("ul",{class:["footer-menu","container-show",{displayBlock:t.isVisible(i)}]},t._l(e.children,(function(e,i){return a("li",{key:i},[a("a",{attrs:{title:e.title,href:e.url}},[a("span",[t._v(t._s(e.title))])])])})),0)])})),0!=t.socialNavigation[0]?a("li",{staticClass:"col-xs-12 col-sm-12 col-md-3 social-menu"},[a("div",{staticClass:"menu-group-name"},[t._v(t._s(t.socialNavigation[0].title))]),a("div",{staticClass:"social-links"},t._l(t.socialNavigation[0].children,(function(t,e){return a("a",{key:e,staticClass:"ico-before",attrs:{href:t.url,"data-phf-ico-before":t.icon,title:t.title,target:"_blank",rel:"nofollow"}})})),0)]):t._e()],2):t._e()])]),0!=t.passion?a("div",{staticClass:"black-separator visible-md visible-lg"},[a("p",[t._v(t._s(t.passion))])]):t._e(),a("div",{staticClass:"bottom-menu"},[a("div",{staticClass:"module-container row"},[0!=t.legalNavigation?a("ul",{staticClass:"footer-links footer-options col-xs-12 col-md-6 "},t._l(t.legalNavigation,(function(e,i){return a("li",{key:i},[a("a",{attrs:{title:e.title,href:e.url}},[a("span",[t._v(" "+t._s(e.title)+" ")])])])})),0):t._e(),a("ul",{staticClass:"footer-links footer-legal col-xs-12 col-md-6 "},[a("li",{staticClass:"footer-legal_item"},[a("span",{staticClass:"copyright",attrs:{title:"© Renault 2021"}},[t._v(t._s(t.footer_trademark))])])])])])])])])])},C=[],w={name:"Footer",created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url)},data:function(){return{visibleIndex:null,mainFooter:[],basicInformation:[],socialNavigation:[],legalNavigation:[]}},computed:{footer_trademark:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.footer_trademark},passion:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.passion}},methods:{fetchNavigation:function(t){var e=this;r.a.get(t).then((function(t){e.basicInformation=t.data,e.mainFooter=t.data.mainfooter.schema,e.socialNavigation=t.data.social_navigation.schema,e.legalNavigation=t.data.legal_navigation.schema}))},isVisible:function(t){return this.visibleIndex===t},toggle:function(t){this.visibleIndex===t?this.visibleIndex=null:this.visibleIndex=Number(t)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},x=w,y=(a("7510"),Object(p["a"])(x,b,C,!1,null,"35e51077",null)),k=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(_)}}).$mount("#rna-header"),new i["a"]({render:function(t){return t(k)}}).$mount("#rna-footer")},7510:function(t,e,a){"use strict";a("e018")},e018:function(t,e,a){},e6bc:function(t,e,a){"use strict";a("e89d")},e89d:function(t,e,a){}});
//# sourceMappingURL=app.js.map