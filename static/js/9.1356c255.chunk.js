(this.webpackJsonpmartalaa=this.webpackJsonpmartalaa||[]).push([[9],{113:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(125);function i(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(113);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},125:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},146:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(219);function o(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var a=o(r);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?d(t):e}function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return m(this,n)}}var v={decimal:".",delay:null,prefix:"",suffix:"",start:0},y=function(t,e){var n=e.decimal,r=e.decimals,o=e.duration,a=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,p=e.separator,f=e.start,h=e.suffix,d=e.useEasing;return new i.CountUp(t,s,{startVal:f,duration:o,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:u,numerals:l,separator:p,prefix:c,suffix:h,useEasing:d,useGrouping:!!p})},g=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,t);var e,n,r,i=b(o);function o(){var t;l(this,o);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return p(d(t=i.call.apply(i,[this].concat(n))),"instance",void 0),p(d(t),"timeoutId",void 0),p(d(t),"checkProps",(function(e){var n=t.props,r=n.start,i=n.suffix,o=n.prefix,a=n.redraw,s=n.duration,u=n.separator,l=n.decimals,c=n.decimal,p=n.className,f=n.formattingFn;return s!==e.duration||r!==e.start||i!==e.suffix||o!==e.prefix||u!==e.separator||l!==e.decimals||c!==e.decimal||p!==e.className||f!==e.formattingFn||a})),p(d(t),"createInstance",(function(){if("function"!==typeof t.props.children||t.containerRef.current instanceof Element)return y(t.containerRef.current,t.props);console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')})),p(d(t),"pauseResume",(function(){var e,n=d(t),r=n.reset,i=n.restart,o=n.update,a=t.props.onPauseResume;null===(e=t.instance)||void 0===e||e.pauseResume(),null===a||void 0===a||a({reset:r,start:i,update:o})})),p(d(t),"reset",(function(){var e,n=d(t),r=n.pauseResume,i=n.restart,o=n.update,a=t.props.onReset;null===(e=t.instance)||void 0===e||e.reset(),null===a||void 0===a||a({pauseResume:r,start:i,update:o})})),p(d(t),"restart",(function(){t.reset(),t.start()})),p(d(t),"start",(function(){var e=d(t),n=e.pauseResume,r=e.reset,i=e.restart,o=e.update,a=t.props,s=a.delay,u=a.onEnd,l=a.onStart,c=function(){var e;return null===(e=t.instance)||void 0===e?void 0:e.start((function(){return null===u||void 0===u?void 0:u({pauseResume:n,reset:r,start:i,update:o})}))};s&&s>0?t.timeoutId=setTimeout(c,1e3*s):c(),null===l||void 0===l||l({pauseResume:n,reset:r,update:o})})),p(d(t),"update",(function(e){var n,r=d(t),i=r.pauseResume,o=r.reset,a=r.restart,s=t.props.onUpdate;null===(n=t.instance)||void 0===n||n.update(e),null===s||void 0===s||s({pauseResume:i,reset:o,start:a})})),p(d(t),"containerRef",a.default.createRef()),t}return e=o,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.children,n=t.delay;this.instance=this.createInstance(),"function"===typeof e&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(t){var e=this.props.end;return this.checkProps(t)||e!==t.end}},{key:"componentDidUpdate",value:function(t){var e,n,r,i=this.props,o=i.end,a=i.preserveValue;(this.checkProps(t)&&(null===(e=this.instance)||void 0===e||e.reset(),this.instance=this.createInstance(),this.start()),o!==t.end)&&(a||null===(r=this.instance)||void 0===r||r.reset(),null===(n=this.instance)||void 0===n||n.update(o))}},{key:"componentWillUnmount",value:function(){var t;this.timeoutId&&clearTimeout(this.timeoutId),null===(t=this.instance)||void 0===t||t.reset()}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,r=t.style,i=this.containerRef,o=this.pauseResume,s=this.reset,u=this.restart,l=this.update;return"function"===typeof e?e({countUpRef:i,pauseResume:o,reset:s,start:u,update:l}):a.default.createElement("span",{className:n,ref:i,style:r})}}])&&c(e.prototype,n),r&&c(e,r),o}(r.Component);p(g,"defaultProps",u(u({},v),{},{redraw:!1,style:void 0,preserveValue:!1}));var V=u(u({},v),{},{startOnMount:!0});e.default=g,e.useCountUp=function(t){var e=u(u({},V),t),n=e.ref,i=r.useRef(),o=r.useRef(),a=function(t){var r=i.current;if(r&&!t)return r;var o=y("string"===typeof n?n:n.current,e);return i.current=o,o},s=function(){var t=e.onReset;a().reset(),null===t||void 0===t||t({pauseResume:c,start:l,update:p})},l=function t(){var n=e.onStart,r=e.onEnd;a().reset(),null===n||void 0===n||n({pauseResume:c,reset:s,update:p}),a().start((function(){null===r||void 0===r||r({pauseResume:c,reset:s,start:t,update:p})}))},c=function(){var t=e.onPauseResume;a().pauseResume(),null===t||void 0===t||t({reset:s,start:l,update:p})},p=function(t){var n=e.onUpdate;a().update(t),null===n||void 0===n||n({pauseResume:c,reset:s,start:l})};return r.useEffect((function(){var t=e.delay,n=e.onStart,r=e.onEnd;return e.startOnMount&&(o.current=setTimeout((function(){null===n||void 0===n||n({pauseResume:c,reset:s,update:p}),a(!0).start((function(){o.current&&clearTimeout(o.current),null===r||void 0===r||r({pauseResume:c,reset:s,start:l,update:p})}))}),t?1e3*t:0)),function(){o.current&&clearTimeout(o.current),s()}}),[e]),{start:l,pauseResume:c,reset:s,update:p}}},147:function(t,e,n){var r;r=function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=n(5)()},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=function(t,e,n){var r=t.direction,i=t.value;switch(r){case"top":return n.top+i<e.top&&n.bottom>e.bottom&&n.left<e.left&&n.right>e.right;case"left":return n.left+i<e.left&&n.bottom>e.bottom&&n.top<e.top&&n.right>e.right;case"bottom":return n.bottom-i>e.bottom&&n.left<e.left&&n.right>e.right&&n.top<e.top;case"right":return n.right-i>e.right&&n.left<e.left&&n.top<e.top&&n.bottom>e.bottom}}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n(1),i=n.n(r),o=n(2),a=n.n(o),s=n(0),u=n.n(s),l=n(3),c=n.n(l);function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function e(t){var n,r,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,i=h(e).call(this,t),n=!i||"object"!==p(i)&&"function"!==typeof i?d(r):i,b(d(n),"getContainer",(function(){return n.props.containment||window})),b(d(n),"addEventListener",(function(t,e,r,i){var o;n.debounceCheck||(n.debounceCheck={});var a=function(){o=null,n.check()},s={target:t,fn:i>-1?function(){o||(o=setTimeout(a,i||0))}:function(){clearTimeout(o),o=setTimeout(a,r||0)},getLastTimeout:function(){return o}};t.addEventListener(e,s.fn),n.debounceCheck[e]=s})),b(d(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(d(n),"stopWatching",(function(){if(n.debounceCheck)for(var t in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(t)){var e=n.debounceCheck[t];clearTimeout(e.getLastTimeout()),e.target.removeEventListener(t,e.fn),n.debounceCheck[t]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(d(n),"check",(function(){var t,e,r=n.node;if(!r)return n.state;if(t=function(t){return void 0===t.width&&(t.width=t.right-t.left),void 0===t.height&&(t.height=t.bottom-t.top),t}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var i=n.props.containment.getBoundingClientRect();e={top:i.top,left:i.left,bottom:i.bottom,right:i.right}}else e={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var o=n.props.offset||{};"object"===p(o)&&(e.top+=o.top||0,e.left+=o.left||0,e.bottom-=o.bottom||0,e.right-=o.right||0);var a={top:t.top>=e.top,left:t.left>=e.left,bottom:t.bottom<=e.bottom,right:t.right<=e.right},s=t.height>0&&t.width>0,u=s&&a.top&&a.left&&a.bottom&&a.right;if(s&&n.props.partialVisibility){var l=t.top<=e.bottom&&t.bottom>=e.top&&t.left<=e.right&&t.right>=e.left;"string"===typeof n.props.partialVisibility&&(l=a[n.props.partialVisibility]),u=n.props.minTopValue?l&&t.top<=e.bottom-n.props.minTopValue:l}"string"===typeof o.direction&&"number"===typeof o.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",o.direction,o.value),u=c()(o,t,e));var f=n.state;return n.state.isVisible!==u&&(f={isVisible:u,visibilityRect:a},n.setState(f),n.props.onChange&&n.props.onChange(u)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,o;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(t){this.node=a.a.findDOMNode(this),this.props.active&&!t.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(t){return{top:Math.floor(t.top),left:Math.floor(t.left),bottom:Math.floor(t.bottom),right:Math.floor(t.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):i.a.Children.only(this.props.children)}}])&&f(n.prototype,r),o&&f(n,o),e}(i.a.Component);b(v,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:i.a.createElement("span",null)}),b(v,"propTypes",{onChange:u.a.func,active:u.a.bool,partialVisibility:u.a.oneOfType([u.a.bool,u.a.oneOf(["top","right","bottom","left"])]),delayedCall:u.a.bool,offset:u.a.oneOfType([u.a.shape({top:u.a.number,left:u.a.number,bottom:u.a.number,right:u.a.number}),u.a.shape({direction:u.a.oneOf(["top","right","bottom","left"]),value:u.a.number})]),scrollCheck:u.a.bool,scrollDelay:u.a.number,scrollThrottle:u.a.number,resizeCheck:u.a.bool,resizeDelay:u.a.number,resizeThrottle:u.a.number,intervalCheck:u.a.bool,intervalDelay:u.a.number,containment:"undefined"!==typeof window?u.a.instanceOf(window.Element):u.a.any,children:u.a.oneOfType([u.a.element,u.a.func]),minTopValue:u.a.number})},function(t,e,n){"use strict";var r=n(6);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},t.exports=r(n(0),n(14))},219:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return i}));var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,o,a=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){o="";for(var u=0,l=n.length;u<l;++u)0!==u&&u%3==0&&(o=i.options.separator+o),o=n[l-u-1]+o;n=o}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()}}]);
//# sourceMappingURL=9.1356c255.chunk.js.map