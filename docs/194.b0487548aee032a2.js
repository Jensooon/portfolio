"use strict";(self.webpackChunkjenson_wintle_dev=self.webpackChunkjenson_wintle_dev||[]).push([[194],{194:(_t,U,Z)=>{Z.r(U),Z.d(U,{default:()=>zt});const C=function ft(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},k=function vt(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(C);if(C(e))return[e];if(function lt(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||C(e[0]))}(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var r=t.querySelectorAll(e);return Array.prototype.slice.call(r)}catch{return[]}return[]};function I(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=y();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function y(){for(var e=[],t=0;t<16;t++)e.push(t%5==0?1:0);return e}function ht(e,t){for(var r=I(e),i=I(t),o=[],n=0;n<4;n++)for(var a=[r[n],r[n+4],r[n+8],r[n+12]],l=0;l<4;l++){var h=4*l,s=[i[h],i[h+1],i[h+2],i[h+3]];o[n+h]=a[0]*s[0]+a[1]*s[1]+a[2]*s[2]+a[3]*s[3]}return o}function pt(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return I(t[2].split(", ").map(parseFloat))}return y()}var e,V=(e=Date.now(),function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout(function(){return V(t)},0)});const Et=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V;var J={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},R_success=function jt(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},R_failure=function Tt(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}};function x(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function f(e,t){if(x(e))return Object.keys(e).forEach(function(i){return t(e[i],i,e)});if(e instanceof Array)return e.forEach(function(i,o){return t(i,o,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(o){return i+="\n \u2014 "+o}),console.log(i,"color: #ea654b;")}}function K(){var e=this,r={active:[],stale:[]},i={active:[],stale:[]},o={active:[],stale:[]};try{f(k("[data-sr-id]"),function(n){var a=parseInt(n.getAttribute("data-sr-id"));r.active.push(a)})}catch(n){throw n}f(this.store.elements,function(n){-1===r.active.indexOf(n.id)&&r.stale.push(n.id)}),f(r.stale,function(n){return delete e.store.elements[n]}),f(this.store.elements,function(n){-1===o.active.indexOf(n.containerId)&&o.active.push(n.containerId),n.hasOwnProperty("sequence")&&-1===i.active.indexOf(n.sequence.id)&&i.active.push(n.sequence.id)}),f(this.store.containers,function(n){-1===o.active.indexOf(n.id)&&o.stale.push(n.id)}),f(o.stale,function(n){var a=e.store.containers[n].node;a.removeEventListener("scroll",e.delegate),a.removeEventListener("resize",e.delegate),delete e.store.containers[n]}),f(this.store.sequences,function(n){-1===i.active.indexOf(n.id)&&i.stale.push(n.id)}),f(i.stale,function(n){return delete e.store.sequences[n]})}var Q=function(){var e={},t=document.documentElement.style;function r(i,o){if(void 0===o&&(o=t),i&&"string"==typeof i){if(e[i])return e[i];if("string"==typeof o[i])return e[i]=i;if("string"==typeof o["-webkit-"+i])return e[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return r.clearCache=function(){return e={}},r}();function Ot(e){var t=window.getComputedStyle(e.node),r=t.position,i=e.config,o={},a=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];o.computed=a?a.map(function(m){return m.trim()}).join("; ")+";":"",o.generated=a.some(function(m){return m.match(/visibility\s?:\s?visible/i)})?o.computed:a.concat(["visibility: visible"]).map(function(m){return m.trim()}).join("; ")+";";var l=parseFloat(t.opacity),h=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),s={computed:l!==h?"opacity: "+l+";":"",generated:l!==h?"opacity: "+h+";":""},d=[];if(parseFloat(i.distance)){var u="top"===i.origin||"bottom"===i.origin?"Y":"X",v=i.distance;("top"===i.origin||"left"===i.origin)&&(v=/^-/.test(v)?v.substr(1):"-"+v);var b=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),c=b[0];switch(b[1]){case"em":v=parseInt(t.fontSize)*c;break;case"px":v=c;break;case"%":v="Y"===u?e.node.getBoundingClientRect().height*c/100:e.node.getBoundingClientRect().width*c/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}d.push("Y"===u?function mt(e){var t=y();return t[13]=e,t}(v):function bt(e){var t=y();return t[12]=e,t}(v))}i.rotate.x&&d.push(function yt(e){var t=Math.PI/180*e,r=y();return r[5]=r[10]=Math.cos(t),r[6]=r[9]=Math.sin(t),r[9]*=-1,r}(i.rotate.x)),i.rotate.y&&d.push(function gt(e){var t=Math.PI/180*e,r=y();return r[0]=r[10]=Math.cos(t),r[2]=r[8]=Math.sin(t),r[2]*=-1,r}(i.rotate.y)),i.rotate.z&&d.push(function B(e){var t=Math.PI/180*e,r=y();return r[0]=r[5]=Math.cos(t),r[1]=r[4]=Math.sin(t),r[4]*=-1,r}(i.rotate.z)),1!==i.scale&&d.push(function G(e,t){var r=y();return r[0]=e,r[5]="number"==typeof t?t:e,r}(0===i.scale?2e-4:i.scale));var g={};if(d.length){g.property=Q("transform"),g.computed={raw:t[g.property],matrix:pt(t[g.property])},d.unshift(g.computed.matrix);var Dt=d.reduce(ht);g.generated={initial:g.property+": matrix3d("+Dt.join(", ")+");",final:g.property+": matrix3d("+g.computed.matrix.join(", ")+");"}}else g.generated={initial:"",final:""};var p={};if(s.generated||g.generated.initial){p.property=Q("transition"),p.computed=t[p.property],p.fragments=[];var st=i.delay,A=i.duration,L=i.easing;s.generated&&p.fragments.push({delayed:"opacity "+A/1e3+"s "+L+" "+st/1e3+"s",instant:"opacity "+A/1e3+"s "+L+" 0s"}),g.generated.initial&&p.fragments.push({delayed:g.property+" "+A/1e3+"s "+L+" "+st/1e3+"s",instant:g.property+" "+A/1e3+"s "+L+" 0s"}),p.computed&&!p.computed.match(/all 0s|none 0s/)&&p.fragments.unshift({delayed:p.computed,instant:p.computed});var ct=p.fragments.reduce(function(m,N,ut){return m.delayed+=0===ut?N.delayed:", "+N.delayed,m.instant+=0===ut?N.instant:", "+N.instant,m},{delayed:"",instant:""});p.generated={delayed:p.property+": "+ct.delayed+";",instant:p.property+": "+ct.instant+";"}}else p.generated={delayed:"",instant:""};return{inline:o,opacity:s,position:r,transform:g,transition:p}}function O(e,t){t.split(";").forEach(function(r){var i=r.split(":"),o=i[0],n=i.slice(1);o&&n&&(e.style[o.trim()]=n.join(":"))})}function $(e){var r,t=this;try{f(k(e),function(i){var o=i.getAttribute("data-sr-id");if(null!==o){r=!0;var n=t.store.elements[o];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),O(n.node,n.styles.inline.generated),i.removeAttribute("data-sr-id"),delete t.store.elements[o]}})}catch(i){return E.call(this,"Clean failed.",i.message)}if(r)try{K.call(this)}catch(i){return E.call(this,"Clean failed.",i.message)}}function kt(){var e=this;f(this.store.elements,function(t){O(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),f(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.removeEventListener("scroll",e.delegate),r.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function M(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];if(x(e))return f(t,function(i){f(i,function(o,n){x(o)?((!e[n]||!x(e[n]))&&(e[n]={}),M(e[n],o)):e[n]=o})}),e;throw new TypeError("Target must be an object literal.")}function S(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var z=function(){var e=0;return function(){return e++}}();function tt(){var e=this;K.call(this),f(this.store.elements,function(t){var r=[t.styles.inline.generated];t.visible?(r.push(t.styles.opacity.computed),r.push(t.styles.transform.generated.final),t.revealed=!0):(r.push(t.styles.opacity.generated),r.push(t.styles.transform.generated.initial),t.revealed=!1),O(t.node,r.filter(function(i){return""!==i}).join(" "))}),f(this.store.containers,function(t){var r=t.node===document.documentElement?window:t.node;r.addEventListener("scroll",e.delegate),r.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function P(e,t){void 0===t&&(t={});var n=!e.visible&&e.revealed&&e.config.reset;return t.reveal||e.visible&&!e.revealed?It.call(this,e,"always"===e.config.useDelay||"onload"===e.config.useDelay&&(t.pristine||this.pristine)||"once"===e.config.useDelay&&!e.seen):t.reset||n?Rt.call(this,e):void 0}function It(e,t){var r=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];r.push(t?e.styles.transition.generated.delayed:e.styles.transition.generated.instant),e.revealed=e.seen=!0,O(e.node,r.filter(function(i){return""!==i}).join(" ")),et.call(this,e,t)}function Rt(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,O(e.node,t.filter(function(r){return""!==r}).join(" ")),et.call(this,e)}function et(e,t){var r=this,i=t?e.config.duration+e.config.delay:e.config.duration,o=e.revealed?e.config.beforeReveal:e.config.beforeReset,n=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),o(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&$.call(r,e.node)},i-a)}}function rt(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return P.call(this,e,{reset:!0});var r=this.store.sequences[e.sequence.id],i=e.sequence.index;if(r){var o=new it(r,"visible",this.store),n=new it(r,"revealed",this.store);if(r.models={visible:o,revealed:n},!n.body.length){var l=this.store.elements[r.members[o.body[0]]];if(l)return q.call(this,r,o.body[0],-1,t),q.call(this,r,o.body[0],1,t),P.call(this,l,{reveal:!0,pristine:t})}if(!r.blocked.head&&i===[].concat(n.head).pop()&&i>=[].concat(o.body).shift())return q.call(this,r,i,-1,t),P.call(this,e,{reveal:!0,pristine:t});if(!r.blocked.foot&&i===[].concat(n.foot).shift()&&i<=[].concat(o.body).pop())return q.call(this,r,i,1,t),P.call(this,e,{reveal:!0,pristine:t})}}function Mt(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=z(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function it(e,t,r){var i=this;this.head=[],this.body=[],this.foot=[],f(e.members,function(o,n){var a=r.elements[o];a&&a[t]&&i.body.push(n)}),this.body.length&&f(e.members,function(o,n){var a=r.elements[o];a&&!a[t]&&(n<i.body[0]?i.head.push(n):i.foot.push(n))})}function q(e,t,r,i){var o=this,n=["head",null,"foot"][1+r],l=this.store.elements[e.members[t+r]];e.blocked[n]=!0,setTimeout(function(){e.blocked[n]=!1,l&&rt.call(o,l,i)},e.interval)}function nt(e,t,r){var i=this;void 0===t&&(t={}),void 0===r&&(r=!1);var n,o=[],a=t.interval||J.interval;try{a&&(n=new Mt(a));var l=k(e);if(!l.length)throw new Error("Invalid reveal target.");var h=l.reduce(function(s,d){var u={},v=d.getAttribute("data-sr-id");v?(M(u,i.store.elements[v]),O(u.node,u.styles.inline.computed)):(u.id=z(),u.node=d,u.seen=!1,u.revealed=!1,u.visible=!1);var b=M({},u.config||i.defaults,t);if(!b.mobile&&S()||!b.desktop&&!S())return v&&$.call(i,u),s;var j,c=k(b.container)[0];if(!c)throw new Error("Invalid container.");return c.contains(d)?(j=function Pt(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var i=null;return f(t,function(o){f(o,function(n){null===i&&n.node===e&&(i=n.id)})}),i}(c,o,i.store.containers),null===j&&(j=z(),o.push({id:j,node:c})),u.config=b,u.containerId=j,u.styles=Ot(u),n&&(u.sequence={id:n.id,index:n.members.length},n.members.push(u.id)),s.push(u),s):s},[]);f(h,function(s){i.store.elements[s.id]=s,s.node.setAttribute("data-sr-id",s.id)})}catch(s){return E.call(this,"Reveal failed.",s.message)}f(o,function(s){i.store.containers[s.id]={id:s.id,node:s.node}}),n&&(this.store.sequences[n.id]=n),!0!==r&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(tt.bind(this),0))}function xt(){var e=this;f(this.store.history,function(t){nt.call(e,t.target,t.options,!0)}),tt.call(this)}var D,F,_,X,W,w,Y,H,ot=Math.sign||function(e){return(e>0)-(e<0)||+e};function at(e,t){var r=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,o=0,n=0,a=e.node;do{isNaN(a.offsetTop)||(o+=a.offsetTop),isNaN(a.offsetLeft)||(n+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:o,right:n+i,bottom:o+r,left:n},height:r,width:i}}function qt(e){var t,r;return e.node===document.documentElement?(t=window.pageYOffset,r=window.pageXOffset):(t=e.node.scrollTop,r=e.node.scrollLeft),{top:t,left:r}}function At(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var r=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,o={top:e.geometry.bounds.top+e.geometry.height*r,right:e.geometry.bounds.right-e.geometry.width*r,bottom:e.geometry.bounds.bottom-e.geometry.height*r,left:e.geometry.bounds.left+e.geometry.width*r},n={top:t.geometry.bounds.top+t.scroll.top+i.top,right:t.geometry.bounds.right+t.scroll.left-i.right,bottom:t.geometry.bounds.bottom+t.scroll.top-i.bottom,left:t.geometry.bounds.left+t.scroll.left+i.left};return o.top<n.bottom&&o.right>n.left&&o.bottom>n.top&&o.left<n.right||"fixed"===e.styles.position}}function Lt(e,t){var r=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),Et(function(){var i="init"===e.type||"resize"===e.type;f(r.store.containers,function(o){i&&(o.geometry=at.call(r,o,!0));var n=qt.call(r,o);o.scroll&&(o.direction={x:ot(n.left-o.scroll.left),y:ot(n.top-o.scroll.top)}),o.scroll=n}),f(t,function(o){(i||void 0===o.geometry)&&(o.geometry=at.call(r,o)),o.visible=At.call(r,o)}),f(t,function(o){o.sequence?rt.call(r,o):P.call(r,o)}),r.pristine=!1})}function T(e){var r;if(void 0===e&&(e={}),typeof this>"u"||Object.getPrototypeOf(this)!==T.prototype)return new T(e);if(!T.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),R_failure();try{r=M({},w||J,e)}catch(o){return E.call(this,"Invalid configuration.",o.message),R_failure()}try{if(!k(r.container)[0])throw new Error("Invalid container.")}catch(o){return E.call(this,o.message),R_failure()}return!(w=r).mobile&&S()||!w.desktop&&!S()?(E.call(this,"This device is disabled.","desktop: "+w.desktop,"mobile: "+w.mobile),R_failure()):(R_success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,D=D||Lt.bind(this),F=F||kt.bind(this),_=_||nt.bind(this),X=X||$.bind(this),W=W||xt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return D}}),Object.defineProperty(this,"destroy",{get:function(){return F}}),Object.defineProperty(this,"reveal",{get:function(){return _}}),Object.defineProperty(this,"clean",{get:function(){return X}}),Object.defineProperty(this,"sync",{get:function(){return W}}),Object.defineProperty(this,"defaults",{get:function(){return w}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),H||(H=this))}T.isSupported=function(){return function Nt(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function Ct(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(T,"debug",{get:function(){return Y||!1},set:function(e){return Y="boolean"==typeof e?e:Y}}),T();const zt=T}}]);