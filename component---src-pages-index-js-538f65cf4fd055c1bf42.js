/*! For license information please see component---src-pages-index-js-538f65cf4fd055c1bf42.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=!("undefined"==typeof window||!window.document||!window.document.createElement);var r=void 0;function a(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),r}function l(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function i(e){this.target=e,this.events={}}i.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},i.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},i.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);l(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var a=!0;return function(){if(a){a=!1,l(r);var i=r.nextHandlers.indexOf(t);r.nextHandlers.splice(i,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};function s(e,t,n,o){e.__consolidated_events_handlers__||(e.__consolidated_events_handlers__=new i(e));var r=function(e){if(e)return a()?e:!!e.capture}(o);return e.__consolidated_events_handlers__.add(t,n,r)}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){var t,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+o?(clearTimeout(n),n=setTimeout((function(){t=r,e()}),o)):(t=r,e())}};t.default=o},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},JKwV:function(e,t,n){e.exports=n.p+"static/gomigu-2fe8f5f8e3d113e230684941ab791433.png"},KQoI:function(e,t,n){e.exports=n.p+"static/patdisplayphoto-1908b992b55fc8fc41757217a6cff825.png"},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),l=n("Bnag");e.exports=function(e){return o(e)||r(e)||a(e)||l()}},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("dI71"),r=(n("Wbzz"),n("q1tI")),a=n.n(r),l=n("TJpk"),i=n.n(l),s=n("uuth"),c=n("KQoI"),u=n.n(c),f=n("JKwV"),p=n.n(f),m=n("gGBl"),d=n.n(m),h=n("qTAc"),v=n.n(h),y=function(e){return a.a.createElement("header",{id:"header",className:"alt"},a.a.createElement("div",{className:"division"},a.a.createElement("div",{className:"division logoDivision"},a.a.createElement("img",{className:"logo",src:v.a,alt:""})),a.a.createElement("div",{className:"division nameTitleDivision"},a.a.createElement("h1",null,"Fatima Ranile"),a.a.createElement("p",null,"Software Engineer"))))},b=n("Bl7J"),E=n("YIkO"),w=n.n(E);var g=n("dwco"),S=n.n(g),_=function(e){return e.children},T=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(o.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){S.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,n=!0,o=this.props,r=o.type,a=o.element,l=o.offset,i=o.timeout;if(r&&a)switch(r){case"class":n=!!(t=document.getElementsByClassName(a)[0]);break;case"id":n=!!(t=document.getElementById(a))}n?this.scrollTo(t,l,i):console.log("Element not found: "+a)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),n):window.scroll({top:o+t,left:0,behavior:"smooth"})},n.render=function(){return a.a.createElement(_,null,"object"==typeof this.props.children?a.a.cloneElement(this.props.children,{onClick:this.handleClick}):a.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.a.Component),k=function(e){return a.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},a.a.createElement(w.a,{items:["portfolio","aboutMe","contactMe"],currentClassName:"is-active",offset:-300},a.a.createElement("li",null,a.a.createElement(T,{type:"id",element:"portfolio"},a.a.createElement("a",{href:"#"},"Portfolio"))),a.a.createElement("li",null,a.a.createElement(T,{type:"id",element:"aboutMe"},a.a.createElement("a",{href:"#"},"Know Me"))),a.a.createElement("li",null,a.a.createElement(T,{type:"id",element:"contactMe"},a.a.createElement("a",{href:"#"},"Contact Me")))))},N=function(e){function t(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(b.a,null,a.a.createElement(i.a,{title:"Fatima Ranile"}),a.a.createElement(y,null),a.a.createElement(s.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),a.a.createElement(k,{sticky:this.state.stickyNav}),a.a.createElement("div",{id:"main"},a.a.createElement("section",{id:"portfolio",className:"main special"},a.a.createElement("ul",{className:"features"},a.a.createElement("li",null,a.a.createElement("span",null,a.a.createElement("img",{className:"image projectIcon",src:d.a,alt:""})),a.a.createElement("h2",null,"FastLane Mobile Shopper"),a.a.createElement("p",null,"(Mobile Application) ",a.a.createElement("br",null),"April 2018 - Present"),a.a.createElement("p",null,"FLMS application offers another level of convenience while shopping in a store. It has the functionalities to scan item, create shopping list, locate store and mobile payment. Making life easier for shoppers. ",a.a.createElement("br",null),"There are two FLMS applications. The first one is written in C# that uses the framework Xamarin Forms. The other application uses React Native.")),a.a.createElement("li",null,a.a.createElement("span",null,a.a.createElement("img",{className:"image projectIcon",src:p.a,alt:""})),a.a.createElement("h2",null,"Gomigu "),a.a.createElement("p",null,"(Mobile Application) ",a.a.createElement("br",null),"May 2017 - Feb 2018"),a.a.createElement("p",null,"Gomigu is a free messaging application in which it can be used through web app and/or mobile phones. During the course of my involvement, the mobile application was developed using React Native as a framework, Redux to manage its state and Javascript.")))),a.a.createElement("section",{id:"aboutMe",className:"main"},a.a.createElement("div",{className:"spotlight"},a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Hi! I go by the name of Pat.")),a.a.createElement("p",null,"I write code for a living and just started doing it as a hobby. 😉 ",a.a.createElement("br",null),"As cliche as it may sound, but learning and exploring new things excite me. Lastly, I prefer doing things in a minimal way, targeting those that bring value and ensuring quality in everything I do.")),a.a.createElement("span",{className:"image"},a.a.createElement("img",{src:u.a,alt:""}))),a.a.createElement("div",{className:"details"},a.a.createElement("div",{className:"details workexperience"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Work Experience")),a.a.createElement("ul",{class:"fa-ul"},a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-bookmark"})),a.a.createElement("p",null,"Zoog Technologies, Inc. ",a.a.createElement("br",null)," May 2017 - Feb 2018 ",a.a.createElement("br",null),"Front-End Software Developer")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-bookmark"})),a.a.createElement("p",null,"NCR Corporation ",a.a.createElement("br",null)," April 2018 - Present ",a.a.createElement("br",null),"Front-End Software Developer")))),a.a.createElement("div",{className:"details skills"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Skills")),a.a.createElement("ul",{class:"fa-ul"},a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"C#")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"Javascript")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"Xamarin Forms")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"React Native")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"ReactJS")),a.a.createElement("li",null,a.a.createElement("span",{class:"fa-li"},a.a.createElement("i",{class:"fa fa-terminal"})),a.a.createElement("p",null,"Git")))))),a.a.createElement("section",{id:"contactMe",className:"main special"},a.a.createElement("div",{className:"spotlight"},a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Email me:")),a.a.createElement("a",{href:"mailto:fatimaranile@gmail.com",className:"labelStyle"},a.a.createElement("span",{className:"labelStyle"},"fatimaranile@gmail.com"))),a.a.createElement("div",{className:"content"},a.a.createElement("header",{className:"major"},a.a.createElement("h2",null,"Visit me:")),a.a.createElement("ul",{className:"icons"},a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/fatimaranile",className:"icon fa-linkedin alt"},a.a.createElement("span",{className:"label"},"LinkedIn"))),a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/fatimaranile",className:"icon fa-github alt"},a.a.createElement("span",{className:"label"},"GitHub")))))))))},t}(a.a.Component);t.default=N},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===a)for(var i in o)n.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},YIkO:function(e,t,n){"use strict";var o=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("pVnL")),a=o(n("lSNA")),l=o(n("RIqP")),i=o(n("lwsE")),s=o(n("a1gu")),c=o(n("Nsbk")),u=o(n("PJYZ")),f=o(n("W8MJ")),p=o(n("7W2i")),m=o(n("17x9")),d=o(n("q1tI")),h=o(n("TSYQ")),v=o(n("Fxm3"));var y=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.elementType]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],o=0,r=e.length;o<r;o++)n[o]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],o=[],r=e||this.state.targetItems,a=!1,i=0,s=r.length;i<s;i++){var c=r[i],u=!a&&this._isInView(c);u?(a=!0,t.push(c)):n.push(c);var f=i===s-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&f&&p&&(n.pop(),n.push.apply(n,(0,l.default)(t)),t=[c],o=this._fillArray(o,!1),u=!0),o.push(u)}return{inView:t,outView:n,viewStatusList:o,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(o)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,o=n.rootEl,r=n.offset;o&&(t=document.querySelector(o).getBoundingClientRect());var a=e.getBoundingClientRect(),l=o?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+l,c=o?a.top+i-t.top+r:a.top+i+r,u=c+e.offsetHeight;return c<s&&u>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,o=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=o}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),o=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(o)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,o=n.children,l=n.className,i=n.scrolledPastClassName,s=n.style,c=0,u=d.default.Children.map(o,(function(t,n){var o;if(!t)return null;var l=t.type,s=i&&e.state.isScrolledPast[n],u=(0,h.default)((o={},(0,a.default)(o,"".concat(t.props.className),t.props.className),(0,a.default)(o,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,a.default)(o,"".concat(e.props.scrolledPastClassName),s),o));return d.default.createElement(l,(0,r.default)({},t.props,{className:u,key:c++}),t.props.children)})),f=(0,h.default)((0,a.default)({},"".concat(l),l));return d.default.createElement(t,{className:f,style:s},u)}}]),t}(d.default.Component);t.default=y},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},dwco:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,o=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=p(this),o=n.getBoundingClientRect(),a=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+a.left-o.left,n.scrollTop+a.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function f(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function m(t){var n,o,r,l,i=(a()-t.startTime)/468;l=i=i>1?1:i,n=.5*(1-Math.cos(Math.PI*l)),o=t.startX+(t.x-t.startX)*n,r=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,r),o===t.x&&r===t.y||e.requestAnimationFrame(m.bind(e,t))}function d(n,o,l){var s,c,u,f,p=a();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=r.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,f=i),m({scrollable:s,method:f,startTime:p,startX:c,startY:u,x:o,y:l})}}}}()},gGBl:function(e,t,n){e.exports=n.p+"static/ncrflms-3288b6d6f47a112132b8cd6dfc27ddd3.jpg"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qT12:function(e,t,n){"use strict";var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,b=o?Symbol.for("react.block"):60121,E=o?Symbol.for("react.fundamental"):60117,w=o?Symbol.for("react.responder"):60118,g=o?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case p:case l:case s:case i:case d:return e;default:switch(e=e&&e.$$typeof){case u:case m:case y:case v:case c:return e;default:return t}}case a:return t}}}function _(e){return S(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=u,t.ContextProvider=c,t.Element=r,t.ForwardRef=m,t.Fragment=l,t.Lazy=y,t.Memo=v,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return _(e)||S(e)===f},t.isConcurrentMode=_,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===m},t.isFragment=function(e){return S(e)===l},t.isLazy=function(e){return S(e)===y},t.isMemo=function(e){return S(e)===v},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===s},t.isStrictMode=function(e){return S(e)===i},t.isSuspense=function(e){return S(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===p||e===s||e===i||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===c||e.$$typeof===u||e.$$typeof===m||e.$$typeof===E||e.$$typeof===w||e.$$typeof===g||e.$$typeof===b)},t.typeOf=S},qTAc:function(e,t,n){e.exports=n.p+"static/frlogo-380879b487ce3e52182060925aa905ac.png"},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var o=n("1TsT"),r=n("q1tI"),a=n.n(r),l=n("TOwV");function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function p(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"==typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"==typeof r?r*t:void 0}function m(e){return"string"==typeof e.type}var d;var h=[];function v(e){h.push(e),d||(d=setTimeout((function(){var e;for(d=null;e=h.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=h.indexOf(e);-1!==n&&(h.splice(n,1),!h.length&&d&&(clearTimeout(d),d=null))}}}var y={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},b=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,t);var n,r,s,u=f(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=u.call(this,e)).refElement=function(e){t._ref=e},t}return n=d,(r=[{key:"componentDidMount",value:function(){var e=this;d.getWindow()&&(this.cancelOnNextTick=v((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!m(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;d.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=v((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){d.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var a=window.getComputedStyle(r),l=(n?a.getPropertyValue("overflow-x"):a.getPropertyValue("overflow-y"))||a.getPropertyValue("overflow");if("auto"===l||"scroll"===l||"overlay"===l)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop==0?"invisible":e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?"inside":e.viewportBottom<e.waypointTop?"below":e.waypointTop<e.viewportTop?"above":"invisible"}(t),o=this._previousPosition,r=this.props,a=(r.debug,r.onPositionChange),l=r.onEnter,i=r.onLeave,s=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var c={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};a.call(this,c),"inside"===n?l.call(this,c):"inside"===o&&i.call(this,c),s&&("below"===o&&"above"===n||"above"===o&&"below"===n)&&(l.call(this,{currentPosition:"inside",previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),i.call(this,{currentPosition:n,previousPosition:"inside",event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),a=r.left,l=r.top,i=r.right,s=r.bottom,c=o?a:l,u=o?i:s;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var f=this.props,m=f.bottomOffset;return{waypointTop:c,waypointBottom:u,viewportTop:t+p(f.topOffset,e),viewportBottom:t+e-p(m,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?m(t)||Object(l.isForwardRef)(t)?a.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"==typeof t.ref?t.ref(n):t.ref.current=n)}}):a.a.cloneElement(t,{innerRef:this.refElement}):a.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&i(n.prototype,r),s&&i(n,s),d}(a.a.PureComponent);b.above="above",b.below="below",b.inside="inside",b.invisible="invisible",b.getWindow=function(){if("undefined"!=typeof window)return window},b.defaultProps=y,b.displayName="Waypoint"}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-538f65cf4fd055c1bf42.js.map