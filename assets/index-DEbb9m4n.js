function Xc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zu={exports:{}},mi={},wu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Jc=Symbol.for("react.portal"),ed=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),id=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),ad=Symbol.for("react.memo"),ud=Symbol.for("react.lazy"),ra=Symbol.iterator;function od(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,Eu={};function ft(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Au}ft.prototype.isReactComponent={};ft.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ft.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pu(){}Pu.prototype=ft.prototype;function ss(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Au}var as=ss.prototype=new Pu;as.constructor=ss;Nu(as,ft.prototype);as.isPureReactComponent=!0;var ia=Array.isArray,Du=Object.prototype.hasOwnProperty,us={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Wu(e,n,t){var r,i={},l=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(l=""+n.key),n)Du.call(n,r)&&!ju.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){for(var o=Array(u),d=0;d<u;d++)o[d]=arguments[d+2];i.children=o}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:lr,type:e,key:l,ref:a,props:i,_owner:us.current}}function cd(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function dd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var la=/\/+/g;function Li(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dd(""+e.key):n.toString(36)}function Br(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lr:case Jc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Li(a,0):r,ia(i)?(t="",e!=null&&(t=e.replace(la,"$&/")+"/"),Br(i,n,t,"",function(d){return d})):i!=null&&(os(i)&&(i=cd(i,t+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(la,"$&/")+"/")+e)),n.push(i)),1;if(a=0,r=r===""?".":r+":",ia(e))for(var u=0;u<e.length;u++){l=e[u];var o=r+Li(l,u);a+=Br(l,n,t,o,i)}else if(o=od(e),typeof o=="function")for(e=o.call(e),u=0;!(l=e.next()).done;)l=l.value,o=r+Li(l,u++),a+=Br(l,n,t,o,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function mr(e,n,t){if(e==null)return e;var r=[],i=0;return Br(e,r,"","",function(l){return n.call(t,l,i++)}),r}function hd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Mr={transition:null},gd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:us};function Bu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=ft;B.Fragment=ed;B.Profiler=td;B.PureComponent=ss;B.StrictMode=nd;B.Suspense=sd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gd;B.act=Bu;B.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nu({},e.props),i=e.key,l=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,a=us.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(o in n)Du.call(n,o)&&!ju.hasOwnProperty(o)&&(r[o]=n[o]===void 0&&u!==void 0?u[o]:n[o])}var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){u=Array(o);for(var d=0;d<o;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:lr,type:e.type,key:i,ref:l,props:r,_owner:a}};B.createContext=function(e){return e={$$typeof:id,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rd,_context:e},e.Consumer=e};B.createElement=Wu;B.createFactory=function(e){var n=Wu.bind(null,e);return n.type=e,n};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:ld,render:e}};B.isValidElement=os;B.lazy=function(e){return{$$typeof:ud,_payload:{_status:-1,_result:e},_init:hd}};B.memo=function(e,n){return{$$typeof:ad,type:e,compare:n===void 0?null:n}};B.startTransition=function(e){var n=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=n}};B.unstable_act=Bu;B.useCallback=function(e,n){return ce.current.useCallback(e,n)};B.useContext=function(e){return ce.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};B.useEffect=function(e,n){return ce.current.useEffect(e,n)};B.useId=function(){return ce.current.useId()};B.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};B.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};B.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};B.useMemo=function(e,n){return ce.current.useMemo(e,n)};B.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};B.useRef=function(e){return ce.current.useRef(e)};B.useState=function(e){return ce.current.useState(e)};B.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};B.useTransition=function(){return ce.current.useTransition()};B.version="18.3.1";wu.exports=B;var z=wu.exports;const Mu=qc(z),fd=Xc({__proto__:null,default:Mu},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=z,pd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),Sd=Object.prototype.hasOwnProperty,xd=md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yd={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,n,t){var r,i={},l=null,a=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Sd.call(n,r)&&!yd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:pd,type:e,key:l,ref:a,props:i,_owner:xd.current}}mi.Fragment=kd;mi.jsx=Cu;mi.jsxs=Cu;zu.exports=mi;var s=zu.exports,cl={},Iu={exports:{}},ve={},Lu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,j){var W=N.length;N.push(j);e:for(;0<W;){var H=W-1>>>1,X=N[H];if(0<i(X,j))N[H]=j,N[W]=X,W=H;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],W=N.pop();if(W!==j){N[0]=W;e:for(var H=0,X=N.length,gr=X>>>1;H<gr;){var zn=2*(H+1)-1,Ii=N[zn],wn=zn+1,fr=N[wn];if(0>i(Ii,W))wn<X&&0>i(fr,Ii)?(N[H]=fr,N[wn]=W,H=wn):(N[H]=Ii,N[zn]=W,H=zn);else if(wn<X&&0>i(fr,W))N[H]=fr,N[wn]=W,H=wn;else break e}}return j}function i(N,j){var W=N.sortIndex-j.sortIndex;return W!==0?W:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var o=[],d=[],p=1,h=null,m=3,k=!1,S=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var j=t(d);j!==null;){if(j.callback===null)r(d);else if(j.startTime<=N)r(d),j.sortIndex=j.expirationTime,n(o,j);else break;j=t(d)}}function x(N){if(y=!1,g(N),!S)if(t(o)!==null)S=!0,Mi(w);else{var j=t(d);j!==null&&Ci(x,j.startTime-N)}}function w(N,j){S=!1,y&&(y=!1,f(D),D=-1),k=!0;var W=m;try{for(g(j),h=t(o);h!==null&&(!(h.expirationTime>j)||N&&!De());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var X=H(h.expirationTime<=j);j=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(o)&&r(o),g(j)}else r(o);h=t(o)}if(h!==null)var gr=!0;else{var zn=t(d);zn!==null&&Ci(x,zn.startTime-j),gr=!1}return gr}finally{h=null,m=W,k=!1}}var E=!1,P=null,D=-1,U=5,M=-1;function De(){return!(e.unstable_now()-M<U)}function kt(){if(P!==null){var N=e.unstable_now();M=N;var j=!0;try{j=P(!0,N)}finally{j?St():(E=!1,P=null)}}else E=!1}var St;if(typeof c=="function")St=function(){c(kt)};else if(typeof MessageChannel<"u"){var ta=new MessageChannel,Yc=ta.port2;ta.port1.onmessage=kt,St=function(){Yc.postMessage(null)}}else St=function(){b(kt,0)};function Mi(N){P=N,E||(E=!0,St())}function Ci(N,j){D=b(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,Mi(w))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var W=m;m=j;try{return N()}finally{m=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=m;m=N;try{return j()}finally{m=W}},e.unstable_scheduleCallback=function(N,j,W){var H=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?H+W:H):W=H,N){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=W+X,N={id:p++,callback:j,priorityLevel:N,startTime:W,expirationTime:X,sortIndex:-1},W>H?(N.sortIndex=W,n(d,N),t(o)===null&&N===t(d)&&(y?(f(D),D=-1):y=!0,Ci(x,W-H))):(N.sortIndex=X,n(o,N),S||k||(S=!0,Mi(w))),N},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(N){var j=m;return function(){var W=m;m=j;try{return N.apply(this,arguments)}finally{m=W}}}})(Ru);Lu.exports=Ru;var vd=Lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=z,ye=vd;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fu=new Set,Tt={};function Rn(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(Tt[e]=n,e=0;e<n.length;e++)Fu.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa={},aa={};function wd(e){return dl.call(aa,e)?!0:dl.call(sa,e)?!1:zd.test(e)?aa[e]=!0:(sa[e]=!0,!1)}function Ad(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nd(e,n,t,r){if(n===null||typeof n>"u"||Ad(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,i,l,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Nd(n,t,i,r)&&(t=null),r||i===null?wd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var qe=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),_n=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),gs=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Tu=Symbol.for("react.context"),fs=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),ua=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,Ri;function Et(e){if(Ri===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ri=n&&n[1]||""}return`
`+Ri+e}var Fi=!1;function Ki(e,n){if(!e||Fi)return"";Fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,u=l.length-1;1<=a&&0<=u&&i[a]!==l[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==l[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==l[u]){var o=`
`+i[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=u);break}}}finally{Fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Et(e):""}function Ed(e){switch(e.tag){case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return Et("Suspense");case 19:return Et("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case _n:return"Portal";case hl:return"Profiler";case gs:return"StrictMode";case gl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tu:return(e.displayName||"Context")+".Consumer";case Ku:return(e._context.displayName||"Context")+".Provider";case fs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return n=e.displayName||null,n!==null?n:ml(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return ml(e(n))}catch{}}return null}function Pd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(n);case 8:return n===gs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dd(e){var n=Ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){e._valueTracker||(e._valueTracker=Dd(e))}function _u(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,n){var t=n.checked;return O({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function oa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Uu(e,n){n=n.checked,n!=null&&hs(e,"checked",n,!1)}function kl(e,n){Uu(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Sl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Sl(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ca(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Sl(e,n,t){(n!=="number"||Ur(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function nt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function xl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return O({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(Pt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function Hu(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,Zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Vt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jd=["Webkit","ms","Moz","O"];Object.keys(Wt).forEach(function(e){jd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wt[n]=Wt[e]})});function Qu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wt.hasOwnProperty(e)&&Wt[e]?(""+n).trim():n+"px"}function $u(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Qu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Wd=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,n){if(n){if(Wd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function bl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zl=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,tt=null,rt=null;function ga(e){if(e=ur(e)){if(typeof wl!="function")throw Error(v(280));var n=e.stateNode;n&&(n=yi(n),wl(e.stateNode,e.type,n))}}function Yu(e){tt?rt?rt.push(e):rt=[e]:tt=e}function Xu(){if(tt){var e=tt,n=rt;if(rt=tt=null,ga(e),n)for(e=0;e<n.length;e++)ga(n[e])}}function qu(e,n){return e(n)}function Ju(){}var Ti=!1;function eo(e,n,t){if(Ti)return e(n,t);Ti=!0;try{return qu(e,n,t)}finally{Ti=!1,(tt!==null||rt!==null)&&(Ju(),Xu())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=yi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var Al=!1;if(Qe)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){Al=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{Al=!1}function Bd(e,n,t,r,i,l,a,u,o){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(p){this.onError(p)}}var Bt=!1,Hr=null,Gr=!1,Nl=null,Md={onError:function(e){Bt=!0,Hr=e}};function Cd(e,n,t,r,i,l,a,u,o){Bt=!1,Hr=null,Bd.apply(Md,arguments)}function Id(e,n,t,r,i,l,a,u,o){if(Cd.apply(this,arguments),Bt){if(Bt){var d=Hr;Bt=!1,Hr=null}else throw Error(v(198));Gr||(Gr=!0,Nl=d)}}function Fn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function no(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fa(e){if(Fn(e)!==e)throw Error(v(188))}function Ld(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return fa(i),e;if(l===r)return fa(i),n;l=l.sibling}throw Error(v(188))}if(t.return!==r.return)t=i,r=l;else{for(var a=!1,u=i.child;u;){if(u===t){a=!0,t=i,r=l;break}if(u===r){a=!0,r=i,t=l;break}u=u.sibling}if(!a){for(u=l.child;u;){if(u===t){a=!0,t=l,r=i;break}if(u===r){a=!0,r=l,t=i;break}u=u.sibling}if(!a)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function to(e){return e=Ld(e),e!==null?ro(e):null}function ro(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ro(e);if(n!==null)return n;e=e.sibling}return null}var io=ye.unstable_scheduleCallback,ma=ye.unstable_cancelCallback,Rd=ye.unstable_shouldYield,Fd=ye.unstable_requestPaint,G=ye.unstable_now,Kd=ye.unstable_getCurrentPriorityLevel,ks=ye.unstable_ImmediatePriority,lo=ye.unstable_UserBlockingPriority,Zr=ye.unstable_NormalPriority,Td=ye.unstable_LowPriority,so=ye.unstable_IdlePriority,pi=null,Te=null;function Vd(e){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:Ud,Od=Math.log,_d=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Od(e)/_d|0)|0}var xr=64,yr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=t&268435455;if(a!==0){var u=a&~i;u!==0?r=Dt(u):(l&=a,l!==0&&(r=Dt(l)))}else a=t&~i,a!==0?r=Dt(a):l!==0&&(r=Dt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ce(n),i=1<<t,r|=e[t],n&=~i;return r}function Hd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Ce(l),u=1<<a,o=i[a];o===-1?(!(u&t)||u&r)&&(i[a]=Hd(u,n)):o<=n&&(e.expiredLanes|=u),l&=~u}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ao(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ce(n),e[n]=t}function Zd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Ce(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ss(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ce(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var I=0;function uo(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oo,xs,co,ho,go,Pl=!1,vr=[],un=null,on=null,cn=null,_t=new Map,Ut=new Map,tn=[],Qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":_t.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ut.delete(n.pointerId)}}function vt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&xs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function $d(e,n,t,r,i){switch(n){case"focusin":return un=vt(un,e,n,t,r,i),!0;case"dragenter":return on=vt(on,e,n,t,r,i),!0;case"mouseover":return cn=vt(cn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return _t.set(l,vt(_t.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ut.set(l,vt(Ut.get(l)||null,e,n,t,r,i)),!0}return!1}function fo(e){var n=En(e.target);if(n!==null){var t=Fn(n);if(t!==null){if(n=t.tag,n===13){if(n=no(t),n!==null){e.blockedOn=n,go(e.priority,function(){co(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);zl=r,t.target.dispatchEvent(r),zl=null}else return n=ur(t),n!==null&&xs(n),e.blockedOn=t,!1;n.shift()}return!0}function ka(e,n,t){Cr(e)&&t.delete(n)}function Yd(){Pl=!1,un!==null&&Cr(un)&&(un=null),on!==null&&Cr(on)&&(on=null),cn!==null&&Cr(cn)&&(cn=null),_t.forEach(ka),Ut.forEach(ka)}function bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Pl||(Pl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Yd)))}function Ht(e){function n(i){return bt(i,e)}if(0<vr.length){bt(vr[0],e);for(var t=1;t<vr.length;t++){var r=vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&bt(un,e),on!==null&&bt(on,e),cn!==null&&bt(cn,e),_t.forEach(n),Ut.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)fo(t),t.blockedOn===null&&tn.shift()}var it=qe.ReactCurrentBatchConfig,$r=!0;function Xd(e,n,t,r){var i=I,l=it.transition;it.transition=null;try{I=1,ys(e,n,t,r)}finally{I=i,it.transition=l}}function qd(e,n,t,r){var i=I,l=it.transition;it.transition=null;try{I=4,ys(e,n,t,r)}finally{I=i,it.transition=l}}function ys(e,n,t,r){if($r){var i=Dl(e,n,t,r);if(i===null)Xi(e,n,r,Yr,t),pa(e,r);else if($d(i,e,n,t,r))r.stopPropagation();else if(pa(e,r),n&4&&-1<Qd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&oo(l),l=Dl(e,n,t,r),l===null&&Xi(e,n,r,Yr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Xi(e,n,r,null,t)}}var Yr=null;function Dl(e,n,t,r){if(Yr=null,e=ps(r),e=En(e),e!==null)if(n=Fn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=no(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function mo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case ks:return 1;case lo:return 4;case Zr:case Td:return 16;case so:return 536870912;default:return 16}default:return 16}}var ln=null,vs=null,Ir=null;function po(){if(Ir)return Ir;var e,n=vs,t=n.length,r,i="value"in ln?ln.value:ln.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===i[l-r];r++);return Ir=i.slice(e,1<r?1-r:void 0)}function Lr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Sa(){return!1}function be(e){function n(t,r,i,l,a){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:Sa,this.isPropagationStopped=Sa,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=be(mt),ar=O({},mt,{view:0,detail:0}),Jd=be(ar),Oi,_i,zt,ki=O({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(Oi=e.screenX-zt.screenX,_i=e.screenY-zt.screenY):_i=Oi=0,zt=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),xa=be(ki),eh=O({},ki,{dataTransfer:0}),nh=be(eh),th=O({},ar,{relatedTarget:0}),Ui=be(th),rh=O({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=be(rh),lh=O({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=be(lh),ah=O({},mt,{data:0}),ya=be(ah),uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ch[e])?!!n[e]:!1}function zs(){return dh}var hh=O({},ar,{key:function(e){if(e.key){var n=uh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?Lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=be(hh),fh=O({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),va=be(fh),mh=O({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),ph=be(mh),kh=O({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=be(kh),xh=O({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yh=be(xh),vh=[9,13,27,32],ws=Qe&&"CompositionEvent"in window,Mt=null;Qe&&"documentMode"in document&&(Mt=document.documentMode);var bh=Qe&&"TextEvent"in window&&!Mt,ko=Qe&&(!ws||Mt&&8<Mt&&11>=Mt),ba=" ",za=!1;function So(e,n){switch(e){case"keyup":return vh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function zh(e,n){switch(e){case"compositionend":return xo(n);case"keypress":return n.which!==32?null:(za=!0,ba);case"textInput":return e=n.data,e===ba&&za?null:e;default:return null}}function wh(e,n){if(Hn)return e==="compositionend"||!ws&&So(e,n)?(e=po(),Ir=vs=ln=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ko&&n.locale!=="ko"?null:n.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ah[e.type]:n==="textarea"}function yo(e,n,t,r){Yu(r),n=Xr(n,"onChange"),0<n.length&&(t=new bs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Ct=null,Gt=null;function Nh(e){Wo(e,0)}function Si(e){var n=Qn(e);if(_u(n))return e}function Eh(e,n){if(e==="change")return n}var vo=!1;if(Qe){var Hi;if(Qe){var Gi="oninput"in document;if(!Gi){var Aa=document.createElement("div");Aa.setAttribute("oninput","return;"),Gi=typeof Aa.oninput=="function"}Hi=Gi}else Hi=!1;vo=Hi&&(!document.documentMode||9<document.documentMode)}function Na(){Ct&&(Ct.detachEvent("onpropertychange",bo),Gt=Ct=null)}function bo(e){if(e.propertyName==="value"&&Si(Gt)){var n=[];yo(n,Gt,e,ps(e)),eo(Nh,n)}}function Ph(e,n,t){e==="focusin"?(Na(),Ct=n,Gt=t,Ct.attachEvent("onpropertychange",bo)):e==="focusout"&&Na()}function Dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Gt)}function jh(e,n){if(e==="click")return Si(n)}function Wh(e,n){if(e==="input"||e==="change")return Si(n)}function Bh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Le=typeof Object.is=="function"?Object.is:Bh;function Zt(e,n){if(Le(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!dl.call(n,i)||!Le(e[i],n[i]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,n){var t=Ea(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ea(t)}}function zo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wo(){for(var e=window,n=Ur();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ur(e.document)}return n}function As(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mh(e){var n=wo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zo(t.ownerDocument.documentElement,t)){if(r!==null&&As(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Pa(t,l);var a=Pa(t,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=Qe&&"documentMode"in document&&11>=document.documentMode,Gn=null,jl=null,It=null,Wl=!1;function Da(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wl||Gn==null||Gn!==Ur(r)||(r=Gn,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),It&&Zt(It,r)||(It=r,r=Xr(jl,"onSelect"),0<r.length&&(n=new bs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Gn)))}function zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zn={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionend:zr("Transition","TransitionEnd")},Zi={},Ao={};Qe&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function xi(e){if(Zi[e])return Zi[e];if(!Zn[e])return e;var n=Zn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ao)return Zi[e]=n[t];return e}var No=xi("animationend"),Eo=xi("animationiteration"),Po=xi("animationstart"),Do=xi("transitionend"),jo=new Map,ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){jo.set(e,n),Rn(n,[e])}for(var Qi=0;Qi<ja.length;Qi++){var $i=ja[Qi],Ih=$i.toLowerCase(),Lh=$i[0].toUpperCase()+$i.slice(1);xn(Ih,"on"+Lh)}xn(No,"onAnimationEnd");xn(Eo,"onAnimationIteration");xn(Po,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Do,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function Wa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Id(r,n,void 0,e),e.currentTarget=null}function Wo(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var a=r.length-1;0<=a;a--){var u=r[a],o=u.instance,d=u.currentTarget;if(u=u.listener,o!==l&&i.isPropagationStopped())break e;Wa(i,u,d),l=o}else for(a=0;a<r.length;a++){if(u=r[a],o=u.instance,d=u.currentTarget,u=u.listener,o!==l&&i.isPropagationStopped())break e;Wa(i,u,d),l=o}}}if(Gr)throw e=Nl,Gr=!1,Nl=null,e}function R(e,n){var t=n[Ll];t===void 0&&(t=n[Ll]=new Set);var r=e+"__bubble";t.has(r)||(Bo(n,e,2,!1),t.add(r))}function Yi(e,n,t){var r=0;n&&(r|=4),Bo(t,e,r,n)}var wr="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[wr]){e[wr]=!0,Fu.forEach(function(t){t!=="selectionchange"&&(Rh.has(t)||Yi(t,!1,e),Yi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wr]||(n[wr]=!0,Yi("selectionchange",!1,n))}}function Bo(e,n,t,r){switch(mo(n)){case 1:var i=Xd;break;case 4:i=qd;break;default:i=ys}t=i.bind(null,n,t,e),i=void 0,!Al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Xi(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;a=a.return}for(;u!==null;){if(a=En(u),a===null)return;if(o=a.tag,o===5||o===6){r=l=a;continue e}u=u.parentNode}}r=r.return}eo(function(){var d=l,p=ps(t),h=[];e:{var m=jo.get(e);if(m!==void 0){var k=bs,S=e;switch(e){case"keypress":if(Lr(t)===0)break e;case"keydown":case"keyup":k=gh;break;case"focusin":S="focus",k=Ui;break;case"focusout":S="blur",k=Ui;break;case"beforeblur":case"afterblur":k=Ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=ph;break;case No:case Eo:case Po:k=ih;break;case Do:k=Sh;break;case"scroll":k=Jd;break;case"wheel":k=yh;break;case"copy":case"cut":case"paste":k=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=va}var y=(n&4)!==0,b=!y&&e==="scroll",f=y?m!==null?m+"Capture":null:m;y=[];for(var c=d,g;c!==null;){g=c;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,f!==null&&(x=Ot(c,f),x!=null&&y.push($t(c,x,g)))),b)break;c=c.return}0<y.length&&(m=new k(m,S,null,t,p),h.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&t!==zl&&(S=t.relatedTarget||t.fromElement)&&(En(S)||S[$e]))break e;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(S=t.relatedTarget||t.toElement,k=d,S=S?En(S):null,S!==null&&(b=Fn(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(k=null,S=d),k!==S)){if(y=xa,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=va,x="onPointerLeave",f="onPointerEnter",c="pointer"),b=k==null?m:Qn(k),g=S==null?m:Qn(S),m=new y(x,c+"leave",k,t,p),m.target=b,m.relatedTarget=g,x=null,En(p)===d&&(y=new y(f,c+"enter",S,t,p),y.target=g,y.relatedTarget=b,x=y),b=x,k&&S)n:{for(y=k,f=S,c=0,g=y;g;g=Vn(g))c++;for(g=0,x=f;x;x=Vn(x))g++;for(;0<c-g;)y=Vn(y),c--;for(;0<g-c;)f=Vn(f),g--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break n;y=Vn(y),f=Vn(f)}y=null}else y=null;k!==null&&Ba(h,m,k,y,!1),S!==null&&b!==null&&Ba(h,b,S,y,!0)}}e:{if(m=d?Qn(d):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var w=Eh;else if(wa(m))if(vo)w=Wh;else{w=Dh;var E=Ph}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(w=jh);if(w&&(w=w(e,d))){yo(h,w,t,p);break e}E&&E(e,m,d),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Sl(m,"number",m.value)}switch(E=d?Qn(d):window,e){case"focusin":(wa(E)||E.contentEditable==="true")&&(Gn=E,jl=d,It=null);break;case"focusout":It=jl=Gn=null;break;case"mousedown":Wl=!0;break;case"contextmenu":case"mouseup":case"dragend":Wl=!1,Da(h,t,p);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":Da(h,t,p)}var P;if(ws)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Hn?So(e,t)&&(D="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(ko&&t.locale!=="ko"&&(Hn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Hn&&(P=po()):(ln=p,vs="value"in ln?ln.value:ln.textContent,Hn=!0)),E=Xr(d,D),0<E.length&&(D=new ya(D,e,null,t,p),h.push({event:D,listeners:E}),P?D.data=P:(P=xo(t),P!==null&&(D.data=P)))),(P=bh?zh(e,t):wh(e,t))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(p=new ya("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:d}),p.data=P))}Wo(h,n)})}function $t(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ot(e,t),l!=null&&r.unshift($t(e,l,i)),l=Ot(e,n),l!=null&&r.push($t(e,l,i))),e=e.return}return r}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,n,t,r,i){for(var l=n._reactName,a=[];t!==null&&t!==r;){var u=t,o=u.alternate,d=u.stateNode;if(o!==null&&o===r)break;u.tag===5&&d!==null&&(u=d,i?(o=Ot(t,l),o!=null&&a.unshift($t(t,o,u))):i||(o=Ot(t,l),o!=null&&a.push($t(t,o,u)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Fh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(Fh,`
`).replace(Kh,"")}function Ar(e,n,t){if(n=Ma(n),Ma(e)!==n&&t)throw Error(v(425))}function qr(){}var Bl=null,Ml=null;function Cl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,Th=typeof clearTimeout=="function"?clearTimeout:void 0,Ca=typeof Promise=="function"?Promise:void 0,Vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ca<"u"?function(e){return Ca.resolve(null).then(e).catch(Oh)}:Il;function Oh(e){setTimeout(function(){throw e})}function qi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ht(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ht(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ia(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+pt,Yt="__reactProps$"+pt,$e="__reactContainer$"+pt,Ll="__reactEvents$"+pt,_h="__reactListeners$"+pt,Uh="__reactHandles$"+pt;function En(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$e]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ia(e);e!==null;){if(t=e[Ke])return t;e=Ia(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[Ke]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function yi(e){return e[Yt]||null}var Rl=[],$n=-1;function yn(e){return{current:e}}function F(e){0>$n||(e.current=Rl[$n],Rl[$n]=null,$n--)}function L(e,n){$n++,Rl[$n]=e.current,e.current=n}var Sn={},se=yn(Sn),fe=yn(!1),Bn=Sn;function ut(e,n){var t=e.type.contextTypes;if(!t)return Sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Jr(){F(fe),F(se)}function La(e,n,t){if(se.current!==Sn)throw Error(v(168));L(se,n),L(fe,t)}function Mo(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(v(108,Pd(e)||"Unknown",i));return O({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Bn=se.current,L(se,e),L(fe,fe.current),!0}function Ra(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=Mo(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(se),L(se,e)):F(fe),L(fe,t)}var _e=null,vi=!1,Ji=!1;function Co(e){_e===null?_e=[e]:_e.push(e)}function Hh(e){vi=!0,Co(e)}function vn(){if(!Ji&&_e!==null){Ji=!0;var e=0,n=I;try{var t=_e;for(I=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_e=null,vi=!1}catch(i){throw _e!==null&&(_e=_e.slice(e+1)),io(ks,vn),i}finally{I=n,Ji=!1}}return null}var Yn=[],Xn=0,ni=null,ti=0,ze=[],we=0,Mn=null,Ue=1,He="";function An(e,n){Yn[Xn++]=ti,Yn[Xn++]=ni,ni=e,ti=n}function Io(e,n,t){ze[we++]=Ue,ze[we++]=He,ze[we++]=Mn,Mn=e;var r=Ue;e=He;var i=32-Ce(r)-1;r&=~(1<<i),t+=1;var l=32-Ce(n)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ue=1<<32-Ce(n)+i|t<<i|r,He=l+e}else Ue=1<<l|t<<i|r,He=e}function Ns(e){e.return!==null&&(An(e,1),Io(e,1,0))}function Es(e){for(;e===ni;)ni=Yn[--Xn],Yn[Xn]=null,ti=Yn[--Xn],Yn[Xn]=null;for(;e===Mn;)Mn=ze[--we],ze[we]=null,He=ze[--we],ze[we]=null,Ue=ze[--we],ze[we]=null}var xe=null,Se=null,K=!1,Me=null;function Lo(e,n){var t=Ae(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,Se=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:Ue,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ae(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,Se=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(K){var n=Se;if(n){var t=n;if(!Fa(e,n)){if(Fl(e))throw Error(v(418));n=dn(t.nextSibling);var r=xe;n&&Fa(e,n)?Lo(r,t):(e.flags=e.flags&-4097|2,K=!1,xe=e)}}else{if(Fl(e))throw Error(v(418));e.flags=e.flags&-4097|2,K=!1,xe=e}}}function Ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Nr(e){if(e!==xe)return!1;if(!K)return Ka(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Cl(e.type,e.memoizedProps)),n&&(n=Se)){if(Fl(e))throw Ro(),Error(v(418));for(;n;)Lo(e,n),n=dn(n.nextSibling)}if(Ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=xe?dn(e.stateNode.nextSibling):null;return!0}function Ro(){for(var e=Se;e;)e=dn(e.nextSibling)}function ot(){Se=xe=null,K=!1}function Ps(e){Me===null?Me=[e]:Me.push(e)}var Gh=qe.ReactCurrentBatchConfig;function wt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(a){var u=i.refs;a===null?delete u[l]:u[l]=a},n._stringRef=l,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function Er(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ta(e){var n=e._init;return n(e._payload)}function Fo(e){function n(f,c){if(e){var g=f.deletions;g===null?(f.deletions=[c],f.flags|=16):g.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=mn(f,c),f.index=0,f.sibling=null,f}function l(f,c,g){return f.index=g,e?(g=f.alternate,g!==null?(g=g.index,g<c?(f.flags|=2,c):g):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,c,g,x){return c===null||c.tag!==6?(c=sl(g,f.mode,x),c.return=f,c):(c=i(c,g),c.return=f,c)}function o(f,c,g,x){var w=g.type;return w===Un?p(f,c,g.props.children,x,g.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===en&&Ta(w)===c.type)?(x=i(c,g.props),x.ref=wt(f,c,g),x.return=f,x):(x=_r(g.type,g.key,g.props,null,f.mode,x),x.ref=wt(f,c,g),x.return=f,x)}function d(f,c,g,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=al(g,f.mode,x),c.return=f,c):(c=i(c,g.children||[]),c.return=f,c)}function p(f,c,g,x,w){return c===null||c.tag!==7?(c=Wn(g,f.mode,x,w),c.return=f,c):(c=i(c,g),c.return=f,c)}function h(f,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,g),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pr:return g=_r(c.type,c.key,c.props,null,f.mode,g),g.ref=wt(f,null,c),g.return=f,g;case _n:return c=al(c,f.mode,g),c.return=f,c;case en:var x=c._init;return h(f,x(c._payload),g)}if(Pt(c)||xt(c))return c=Wn(c,f.mode,g,null),c.return=f,c;Er(f,c)}return null}function m(f,c,g,x){var w=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:u(f,c,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pr:return g.key===w?o(f,c,g,x):null;case _n:return g.key===w?d(f,c,g,x):null;case en:return w=g._init,m(f,c,w(g._payload),x)}if(Pt(g)||xt(g))return w!==null?null:p(f,c,g,x,null);Er(f,g)}return null}function k(f,c,g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(g)||null,u(c,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pr:return f=f.get(x.key===null?g:x.key)||null,o(c,f,x,w);case _n:return f=f.get(x.key===null?g:x.key)||null,d(c,f,x,w);case en:var E=x._init;return k(f,c,g,E(x._payload),w)}if(Pt(x)||xt(x))return f=f.get(g)||null,p(c,f,x,w,null);Er(c,x)}return null}function S(f,c,g,x){for(var w=null,E=null,P=c,D=c=0,U=null;P!==null&&D<g.length;D++){P.index>D?(U=P,P=null):U=P.sibling;var M=m(f,P,g[D],x);if(M===null){P===null&&(P=U);break}e&&P&&M.alternate===null&&n(f,P),c=l(M,c,D),E===null?w=M:E.sibling=M,E=M,P=U}if(D===g.length)return t(f,P),K&&An(f,D),w;if(P===null){for(;D<g.length;D++)P=h(f,g[D],x),P!==null&&(c=l(P,c,D),E===null?w=P:E.sibling=P,E=P);return K&&An(f,D),w}for(P=r(f,P);D<g.length;D++)U=k(P,f,D,g[D],x),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?D:U.key),c=l(U,c,D),E===null?w=U:E.sibling=U,E=U);return e&&P.forEach(function(De){return n(f,De)}),K&&An(f,D),w}function y(f,c,g,x){var w=xt(g);if(typeof w!="function")throw Error(v(150));if(g=w.call(g),g==null)throw Error(v(151));for(var E=w=null,P=c,D=c=0,U=null,M=g.next();P!==null&&!M.done;D++,M=g.next()){P.index>D?(U=P,P=null):U=P.sibling;var De=m(f,P,M.value,x);if(De===null){P===null&&(P=U);break}e&&P&&De.alternate===null&&n(f,P),c=l(De,c,D),E===null?w=De:E.sibling=De,E=De,P=U}if(M.done)return t(f,P),K&&An(f,D),w;if(P===null){for(;!M.done;D++,M=g.next())M=h(f,M.value,x),M!==null&&(c=l(M,c,D),E===null?w=M:E.sibling=M,E=M);return K&&An(f,D),w}for(P=r(f,P);!M.done;D++,M=g.next())M=k(P,f,D,M.value,x),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?D:M.key),c=l(M,c,D),E===null?w=M:E.sibling=M,E=M);return e&&P.forEach(function(kt){return n(f,kt)}),K&&An(f,D),w}function b(f,c,g,x){if(typeof g=="object"&&g!==null&&g.type===Un&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pr:e:{for(var w=g.key,E=c;E!==null;){if(E.key===w){if(w=g.type,w===Un){if(E.tag===7){t(f,E.sibling),c=i(E,g.props.children),c.return=f,f=c;break e}}else if(E.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===en&&Ta(w)===E.type){t(f,E.sibling),c=i(E,g.props),c.ref=wt(f,E,g),c.return=f,f=c;break e}t(f,E);break}else n(f,E);E=E.sibling}g.type===Un?(c=Wn(g.props.children,f.mode,x,g.key),c.return=f,f=c):(x=_r(g.type,g.key,g.props,null,f.mode,x),x.ref=wt(f,c,g),x.return=f,f=x)}return a(f);case _n:e:{for(E=g.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){t(f,c.sibling),c=i(c,g.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=al(g,f.mode,x),c.return=f,f=c}return a(f);case en:return E=g._init,b(f,c,E(g._payload),x)}if(Pt(g))return S(f,c,g,x);if(xt(g))return y(f,c,g,x);Er(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(t(f,c.sibling),c=i(c,g),c.return=f,f=c):(t(f,c),c=sl(g,f.mode,x),c.return=f,f=c),a(f)):t(f,c)}return b}var ct=Fo(!0),Ko=Fo(!1),ri=yn(null),ii=null,qn=null,Ds=null;function js(){Ds=qn=ii=null}function Ws(e){var n=ri.current;F(ri),e._currentValue=n}function Tl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ii=e,Ds=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(ii===null)throw Error(v(308));qn=e,ii.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var Pn=null;function Bs(e){Pn===null?Pn=[e]:Pn.push(e)}function To(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Bs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vo(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,C&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ye(e,t)}return i=r.interleaved,i===null?(n.next=n,Bs(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ye(e,t)}function Rr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ss(e,t)}}function Va(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=a:l=l.next=a,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,r){var i=e.updateQueue;nn=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var o=u,d=o.next;o.next=null,a===null?l=d:a.next=d,a=o;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==a&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=o))}if(l!==null){var h=i.baseState;a=0,p=d=o=null,u=l;do{var m=u.lane,k=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,y=u;switch(m=n,k=t,y.tag){case 1:if(S=y.payload,typeof S=="function"){h=S.call(k,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,m=typeof S=="function"?S.call(k,h,m):S,m==null)break e;h=O({},h,m);break e;case 2:nn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[u]:m.push(u))}else k={eventTime:k,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=k,o=h):p=p.next=k,a|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;m=u,u=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(o=h),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do a|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);In|=a,e.lanes=a,e.memoizedState=h}}function Oa(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var or={},Ve=yn(or),Xt=yn(or),qt=yn(or);function Dn(e){if(e===or)throw Error(v(174));return e}function Cs(e,n){switch(L(qt,n),L(Xt,e),L(Ve,or),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:yl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=yl(n,e)}F(Ve),L(Ve,n)}function dt(){F(Ve),F(Xt),F(qt)}function Oo(e){Dn(qt.current);var n=Dn(Ve.current),t=yl(n,e.type);n!==t&&(L(Xt,e),L(Ve,t))}function Is(e){Xt.current===e&&(F(Ve),F(Xt))}var T=yn(0);function si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var el=[];function Ls(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Fr=qe.ReactCurrentDispatcher,nl=qe.ReactCurrentBatchConfig,Cn=0,V=null,$=null,q=null,ai=!1,Lt=!1,Jt=0,Zh=0;function re(){throw Error(v(321))}function Rs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Le(e[t],n[t]))return!1;return!0}function Fs(e,n,t,r,i,l){if(Cn=l,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Fr.current=e===null||e.memoizedState===null?Xh:qh,e=t(r,i),Lt){l=0;do{if(Lt=!1,Jt=0,25<=l)throw Error(v(301));l+=1,q=$=null,n.updateQueue=null,Fr.current=Jh,e=t(r,i)}while(Lt)}if(Fr.current=ui,n=$!==null&&$.next!==null,Cn=0,q=$=V=null,ai=!1,n)throw Error(v(300));return e}function Ks(){var e=Jt!==0;return Jt=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Pe(){if($===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var n=q===null?V.memoizedState:q.next;if(n!==null)q=n,$=e;else{if(e===null)throw Error(v(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function er(e,n){return typeof n=="function"?n(e):n}function tl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=$,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var u=a=null,o=null,d=l;do{var p=d.lane;if((Cn&p)===p)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(u=o=h,a=r):o=o.next=h,V.lanes|=p,In|=p}d=d.next}while(d!==null&&d!==l);o===null?a=r:o.next=u,Le(r,n.memoizedState)||(ge=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=o,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,In|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function rl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Le(l,n.memoizedState)||(ge=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function _o(){}function Uo(e,n){var t=V,r=Pe(),i=n(),l=!Le(r.memoizedState,i);if(l&&(r.memoizedState=i,ge=!0),r=r.queue,Ts(Zo.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,nr(9,Go.bind(null,t,r,i,n),void 0,null),J===null)throw Error(v(349));Cn&30||Ho(t,n,i)}return i}function Ho(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Go(e,n,t,r){n.value=t,n.getSnapshot=r,Qo(n)&&$o(e)}function Zo(e,n,t){return t(function(){Qo(n)&&$o(e)})}function Qo(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Le(e,t)}catch{return!0}}function $o(e){var n=Ye(e,1);n!==null&&Ie(n,e,1,-1)}function _a(e){var n=Fe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},n.queue=e,e=e.dispatch=Yh.bind(null,V,e),[n.memoizedState,e]}function nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=V.updateQueue,n===null?(n={lastEffect:null,stores:null},V.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Yo(){return Pe().memoizedState}function Kr(e,n,t,r){var i=Fe();V.flags|=e,i.memoizedState=nr(1|n,t,void 0,r===void 0?null:r)}function bi(e,n,t,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if($!==null){var a=$.memoizedState;if(l=a.destroy,r!==null&&Rs(r,a.deps)){i.memoizedState=nr(n,t,l,r);return}}V.flags|=e,i.memoizedState=nr(1|n,t,l,r)}function Ua(e,n){return Kr(8390656,8,e,n)}function Ts(e,n){return bi(2048,8,e,n)}function Xo(e,n){return bi(4,2,e,n)}function qo(e,n){return bi(4,4,e,n)}function Jo(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ec(e,n,t){return t=t!=null?t.concat([e]):null,bi(4,4,Jo.bind(null,n,e),t)}function Vs(){}function nc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Rs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function tc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Rs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function rc(e,n,t){return Cn&21?(Le(t,n)||(t=ao(),V.lanes|=t,In|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=t)}function Qh(e,n){var t=I;I=t!==0&&4>t?t:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),n()}finally{I=t,nl.transition=r}}function ic(){return Pe().memoizedState}function $h(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},lc(e))sc(n,t);else if(t=To(e,n,t,r),t!==null){var i=oe();Ie(t,e,r,i),ac(t,n,r)}}function Yh(e,n,t){var r=fn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(lc(e))sc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var a=n.lastRenderedState,u=l(a,t);if(i.hasEagerState=!0,i.eagerState=u,Le(u,a)){var o=n.interleaved;o===null?(i.next=i,Bs(n)):(i.next=o.next,o.next=i),n.interleaved=i;return}}catch{}finally{}t=To(e,n,i,r),t!==null&&(i=oe(),Ie(t,e,r,i),ac(t,n,r))}}function lc(e){var n=e.alternate;return e===V||n!==null&&n===V}function sc(e,n){Lt=ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ac(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ss(e,t)}}var ui={readContext:Ee,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Xh={readContext:Ee,useCallback:function(e,n){return Fe().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Ua,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kr(4194308,4,Jo.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kr(4,2,e,n)},useMemo:function(e,n){var t=Fe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Fe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=$h.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var n=Fe();return e={current:e},n.memoizedState=e},useState:_a,useDebugValue:Vs,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=_a(!1),n=e[0];return e=Qh.bind(null,e[1]),Fe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=V,i=Fe();if(K){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),J===null)throw Error(v(349));Cn&30||Ho(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ua(Zo.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Go.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Fe(),n=J.identifierPrefix;if(K){var t=He,r=Ue;t=(r&~(1<<32-Ce(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qh={readContext:Ee,useCallback:nc,useContext:Ee,useEffect:Ts,useImperativeHandle:ec,useInsertionEffect:Xo,useLayoutEffect:qo,useMemo:tc,useReducer:tl,useRef:Yo,useState:function(){return tl(er)},useDebugValue:Vs,useDeferredValue:function(e){var n=Pe();return rc(n,$.memoizedState,e)},useTransition:function(){var e=tl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:_o,useSyncExternalStore:Uo,useId:ic,unstable_isNewReconciler:!1},Jh={readContext:Ee,useCallback:nc,useContext:Ee,useEffect:Ts,useImperativeHandle:ec,useInsertionEffect:Xo,useLayoutEffect:qo,useMemo:tc,useReducer:rl,useRef:Yo,useState:function(){return rl(er)},useDebugValue:Vs,useDeferredValue:function(e){var n=Pe();return $===null?n.memoizedState=e:rc(n,$.memoizedState,e)},useTransition:function(){var e=rl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:_o,useSyncExternalStore:Uo,useId:ic,unstable_isNewReconciler:!1};function We(e,n){if(e&&e.defaultProps){n=O({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Vl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:O({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zi={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),i=fn(e),l=Ge(r,i);l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Ie(n,e,i,r),Rr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),i=fn(e),l=Ge(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Ie(n,e,i,r),Rr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=fn(e),i=Ge(t,r);i.tag=2,n!=null&&(i.callback=n),n=hn(e,i,r),n!==null&&(Ie(n,e,r,t),Rr(n,e,r))}};function Ha(e,n,t,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(i,l):!0}function uc(e,n,t){var r=!1,i=Sn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=me(n)?Bn:se.current,r=n.contextTypes,l=(r=r!=null)?ut(e,i):Sn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ga(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&zi.enqueueReplaceState(n,n.state,null)}function Ol(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ms(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=me(n)?Bn:se.current,i.context=ut(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&zi.enqueueReplaceState(i,i.state,null),li(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ht(e,n){try{var t="",r=n;do t+=Ed(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function _l(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function oc(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,Jl=r),_l(e,n)},t}function cc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){_l(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){_l(e,n),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Za(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new eg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=fg.bind(null,e,n,t),n.then(e,e))}function Qa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $a(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var ng=qe.ReactCurrentOwner,ge=!1;function ae(e,n,t,r){n.child=e===null?Ko(n,null,t,r):ct(n,e.child,t,r)}function Ya(e,n,t,r,i){t=t.render;var l=n.ref;return lt(n,i),r=Fs(e,n,t,r,l,i),t=Ks(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(K&&t&&Ns(n),n.flags|=1,ae(e,n,r,i),n.child)}function Xa(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!$s(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,dc(e,n,l,r,i)):(e=_r(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(a,r)&&e.ref===n.ref)return Xe(e,n,i)}return n.flags|=1,e=mn(l,r),e.ref=n.ref,e.return=n,n.child=e}function dc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Zt(l,r)&&e.ref===n.ref)if(ge=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,Xe(e,n,i)}return Ul(e,n,t,r,i)}function hc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(et,ke),ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,L(et,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,L(et,ke),ke|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,L(et,ke),ke|=r;return ae(e,n,i,t),n.child}function gc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ul(e,n,t,r,i){var l=me(t)?Bn:se.current;return l=ut(n,l),lt(n,i),t=Fs(e,n,t,r,l,i),r=Ks(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(K&&r&&Ns(n),n.flags|=1,ae(e,n,t,i),n.child)}function qa(e,n,t,r,i){if(me(t)){var l=!0;ei(n)}else l=!1;if(lt(n,i),n.stateNode===null)Tr(e,n),uc(n,t,r),Ol(n,t,r,i),r=!0;else if(e===null){var a=n.stateNode,u=n.memoizedProps;a.props=u;var o=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ee(d):(d=me(t)?Bn:se.current,d=ut(n,d));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||o!==d)&&Ga(n,a,r,d),nn=!1;var m=n.memoizedState;a.state=m,li(n,r,a,i),o=n.memoizedState,u!==r||m!==o||fe.current||nn?(typeof p=="function"&&(Vl(n,t,p,r),o=n.memoizedState),(u=nn||Ha(n,t,u,r,m,o,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=o),a.props=r,a.state=o,a.context=d,r=u):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Vo(e,n),u=n.memoizedProps,d=n.type===n.elementType?u:We(n.type,u),a.props=d,h=n.pendingProps,m=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ee(o):(o=me(t)?Bn:se.current,o=ut(n,o));var k=t.getDerivedStateFromProps;(p=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==h||m!==o)&&Ga(n,a,r,o),nn=!1,m=n.memoizedState,a.state=m,li(n,r,a,i);var S=n.memoizedState;u!==h||m!==S||fe.current||nn?(typeof k=="function"&&(Vl(n,t,k,r),S=n.memoizedState),(d=nn||Ha(n,t,d,r,m,S,o)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),a.props=r,a.state=S,a.context=o,r=d):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Hl(e,n,t,r,l,i)}function Hl(e,n,t,r,i,l){gc(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return i&&Ra(n,t,!1),Xe(e,n,l);r=n.stateNode,ng.current=n;var u=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=ct(n,e.child,null,l),n.child=ct(n,null,u,l)):ae(e,n,u,l),n.memoizedState=r.state,i&&Ra(n,t,!0),n.child}function fc(e){var n=e.stateNode;n.pendingContext?La(e,n.pendingContext,n.pendingContext!==n.context):n.context&&La(e,n.context,!1),Cs(e,n.containerInfo)}function Ja(e,n,t,r,i){return ot(),Ps(i),n.flags|=256,ae(e,n,t,r),n.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,n,t){var r=n.pendingProps,i=T.current,l=!1,a=(n.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),L(T,i&1),e===null)return Kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,l?(r=n.mode,l=n.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Ni(a,r,0,null),e=Wn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Zl(t),n.memoizedState=Gl,e):Os(n,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return tg(e,n,a,r,u,i,t);if(l){l=r.fallback,a=n.mode,i=e.child,u=i.sibling;var o={mode:"hidden",children:r.children};return!(a&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=o,n.deletions=null):(r=mn(i,o),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=mn(u,l):(l=Wn(l,a,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,a=e.child.memoizedState,a=a===null?Zl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~t,n.memoizedState=Gl,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Os(e,n){return n=Ni({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pr(e,n,t,r){return r!==null&&Ps(r),ct(n,e.child,null,t),e=Os(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tg(e,n,t,r,i,l,a){if(t)return n.flags&256?(n.flags&=-257,r=il(Error(v(422))),Pr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ni({mode:"visible",children:r.children},i,0,null),l=Wn(l,i,a,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ct(n,e.child,null,a),n.child.memoizedState=Zl(a),n.memoizedState=Gl,l);if(!(n.mode&1))return Pr(e,n,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(v(419)),r=il(l,r,void 0),Pr(e,n,a,r)}if(u=(a&e.childLanes)!==0,ge||u){if(r=J,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Ie(r,e,i,-1))}return Qs(),r=il(Error(v(421))),Pr(e,n,a,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=mg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Se=dn(i.nextSibling),xe=n,K=!0,Me=null,e!==null&&(ze[we++]=Ue,ze[we++]=He,ze[we++]=Mn,Ue=e.id,He=e.overflow,Mn=n),n=Os(n,r.children),n.flags|=4096,n)}function eu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Tl(e.return,n,t)}function ll(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function pc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,n,r.children,t),r=T.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,t,n);else if(e.tag===19)eu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(T,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&si(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ll(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ll(n,!0,t,null,l);break;case"together":ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),In|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function rg(e,n,t){switch(n.tag){case 3:fc(n),ot();break;case 5:Oo(n);break;case 1:me(n.type)&&ei(n);break;case 4:Cs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;L(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(L(T,T.current&1),n.flags|=128,null):t&n.child.childLanes?mc(e,n,t):(L(T,T.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);L(T,T.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return pc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),L(T,T.current),r)break;return null;case 22:case 23:return n.lanes=0,hc(e,n,t)}return Xe(e,n,t)}var kc,Ql,Sc,xc;kc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ql=function(){};Sc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dn(Ve.current);var l=null;switch(t){case"input":i=pl(e,i),r=pl(e,r),l=[];break;case"select":i=O({},i,{value:void 0}),r=O({},r,{value:void 0}),l=[];break;case"textarea":i=xl(e,i),r=xl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}vl(t,r);var a;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var u=i[d];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tt.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var o=r[d];if(u=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&o!==u&&(o!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(l||(l=[]),l.push(d,t)),t=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(l=l||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(l=l||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tt.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&R("scroll",e),l||u===o||(l=[])):(l=l||[]).push(d,o))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};xc=function(e,n,t,r){t!==r&&(n.flags|=4)};function At(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ig(e,n,t){var r=n.pendingProps;switch(Es(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return me(n.type)&&Jr(),ie(n),null;case 3:return r=n.stateNode,dt(),F(fe),F(se),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(ts(Me),Me=null))),Ql(e,n),ie(n),null;case 5:Is(n);var i=Dn(qt.current);if(t=n.type,e!==null&&n.stateNode!=null)Sc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return ie(n),null}if(e=Dn(Ve.current),Nr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ke]=n,r[Yt]=l,e=(n.mode&1)!==0,t){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(i=0;i<jt.length;i++)R(jt[i],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":oa(r,l),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},R("invalid",r);break;case"textarea":da(r,l),R("invalid",r)}vl(t,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,u,e),i=["children",""+u]):Tt.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&R("scroll",r)}switch(t){case"input":kr(r),ca(r,l,!0);break;case"textarea":kr(r),ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=qr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ke]=n,e[Yt]=r,kc(e,n,!1,!1),n.stateNode=e;e:{switch(a=bl(t,r),t){case"dialog":R("cancel",e),R("close",e),i=r;break;case"iframe":case"object":case"embed":R("load",e),i=r;break;case"video":case"audio":for(i=0;i<jt.length;i++)R(jt[i],e);i=r;break;case"source":R("error",e),i=r;break;case"img":case"image":case"link":R("error",e),R("load",e),i=r;break;case"details":R("toggle",e),i=r;break;case"input":oa(e,r),i=pl(e,r),R("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=O({},r,{value:void 0}),R("invalid",e);break;case"textarea":da(e,r),i=xl(e,r),R("invalid",e);break;default:i=r}vl(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var o=u[l];l==="style"?$u(e,o):l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Zu(e,o)):l==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Vt(e,o):typeof o=="number"&&Vt(e,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Tt.hasOwnProperty(l)?o!=null&&l==="onScroll"&&R("scroll",e):o!=null&&hs(e,l,o,a))}switch(t){case"input":kr(e),ca(e,r,!1);break;case"textarea":kr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nt(e,!!r.multiple,l,!1):r.defaultValue!=null&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=qr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)xc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=Dn(qt.current),Dn(Ve.current),Nr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(l=r.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return ie(n),null;case 13:if(F(T),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Se!==null&&n.mode&1&&!(n.flags&128))Ro(),ot(),n.flags|=98560,l=!1;else if(l=Nr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Ke]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Me!==null&&(ts(Me),Me=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||T.current&1?Y===0&&(Y=3):Qs())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return dt(),Ql(e,n),e===null&&Qt(n.stateNode.containerInfo),ie(n),null;case 10:return Ws(n.type._context),ie(n),null;case 17:return me(n.type)&&Jr(),ie(n),null;case 19:if(F(T),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)At(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=si(e),a!==null){for(n.flags|=128,At(l,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return L(T,T.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>gt&&(n.flags|=128,r=!0,At(l,!1),n.lanes=4194304)}else{if(!r)if(e=si(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),At(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!K)return ie(n),null}else 2*G()-l.renderingStartTime>gt&&t!==1073741824&&(n.flags|=128,r=!0,At(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(t=l.last,t!==null?t.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=T.current,L(T,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Zs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function lg(e,n){switch(Es(n),n.tag){case 1:return me(n.type)&&Jr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(),F(fe),F(se),Ls(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Is(n),null;case 13:if(F(T),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return F(T),null;case 4:return dt(),null;case 10:return Ws(n.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Dr=!1,le=!1,sg=typeof WeakSet=="function"?WeakSet:Set,A=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){_(e,n,r)}else t.current=null}function $l(e,n,t){try{t()}catch(r){_(e,n,r)}}var nu=!1;function ag(e,n){if(Bl=$r,e=wo(),As(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var a=0,u=-1,o=-1,d=0,p=0,h=e,m=null;n:for(;;){for(var k;h!==t||i!==0&&h.nodeType!==3||(u=a+i),h!==l||r!==0&&h.nodeType!==3||(o=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break n;if(m===t&&++d===i&&(u=a),m===l&&++p===r&&(o=a),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ml={focusedElem:e,selectionRange:t},$r=!1,A=n;A!==null;)if(n=A,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,A=e;else for(;A!==null;){n=A;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,b=S.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?y:We(n.type,y),b);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(x){_(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,A=e;break}A=n.return}return S=nu,nu=!1,S}function Rt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&$l(n,t,l)}i=i.next}while(i!==r)}}function wi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Yl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function yc(e){var n=e.alternate;n!==null&&(e.alternate=null,yc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[Yt],delete n[Ll],delete n[_h],delete n[Uh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vc(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,n,t),e=e.sibling;e!==null;)Xl(e,n,t),e=e.sibling}function ql(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,n,t),e=e.sibling;e!==null;)ql(e,n,t),e=e.sibling}var ee=null,Be=!1;function Je(e,n,t){for(t=t.child;t!==null;)bc(e,n,t),t=t.sibling}function bc(e,n,t){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(pi,t)}catch{}switch(t.tag){case 5:le||Jn(t,n);case 6:var r=ee,i=Be;ee=null,Je(e,n,t),ee=r,Be=i,ee!==null&&(Be?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Be?(e=ee,t=t.stateNode,e.nodeType===8?qi(e.parentNode,t):e.nodeType===1&&qi(e,t),Ht(e)):qi(ee,t.stateNode));break;case 4:r=ee,i=Be,ee=t.stateNode.containerInfo,Be=!0,Je(e,n,t),ee=r,Be=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&$l(t,n,a),i=i.next}while(i!==r)}Je(e,n,t);break;case 1:if(!le&&(Jn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){_(t,n,u)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,Je(e,n,t),le=r):Je(e,n,t);break;default:Je(e,n,t)}}function ru(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sg),n.forEach(function(r){var i=pg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function je(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,a=n,u=a;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Be=!1;break e;case 3:ee=u.stateNode.containerInfo,Be=!0;break e;case 4:ee=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(ee===null)throw Error(v(160));bc(l,a,i),ee=null,Be=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(d){_(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zc(n,e),n=n.sibling}function zc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(n,e),Re(e),r&4){try{Rt(3,e,e.return),wi(3,e)}catch(y){_(e,e.return,y)}try{Rt(5,e,e.return)}catch(y){_(e,e.return,y)}}break;case 1:je(n,e),Re(e),r&512&&t!==null&&Jn(t,t.return);break;case 5:if(je(n,e),Re(e),r&512&&t!==null&&Jn(t,t.return),e.flags&32){var i=e.stateNode;try{Vt(i,"")}catch(y){_(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=t!==null?t.memoizedProps:l,u=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&Uu(i,l),bl(u,a);var d=bl(u,l);for(a=0;a<o.length;a+=2){var p=o[a],h=o[a+1];p==="style"?$u(i,h):p==="dangerouslySetInnerHTML"?Zu(i,h):p==="children"?Vt(i,h):hs(i,p,h,d)}switch(u){case"input":kl(i,l);break;case"textarea":Hu(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?nt(i,!!l.multiple,k,!1):m!==!!l.multiple&&(l.defaultValue!=null?nt(i,!!l.multiple,l.defaultValue,!0):nt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Yt]=l}catch(y){_(e,e.return,y)}}break;case 6:if(je(n,e),Re(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){_(e,e.return,y)}}break;case 3:if(je(n,e),Re(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(y){_(e,e.return,y)}break;case 4:je(n,e),Re(e);break;case 13:je(n,e),Re(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Hs=G())),r&4&&ru(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(le=(d=le)||p,je(n,e),le=d):je(n,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(A=e,p=e.child;p!==null;){for(h=A=p;A!==null;){switch(m=A,k=m.child,m.tag){case 0:case 11:case 14:case 15:Rt(4,m,m.return);break;case 1:Jn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(y){_(r,t,y)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){lu(h);continue}}k!==null?(k.return=m,A=k):lu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=h.stateNode,o=h.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=Qu("display",a))}catch(y){_(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){_(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:je(n,e),Re(e),r&4&&ru(e);break;case 21:break;default:je(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vc(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vt(i,""),r.flags&=-33);var l=tu(e);ql(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=tu(e);Xl(e,u,a);break;default:throw Error(v(161))}}catch(o){_(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e,n,t){A=e,wc(e)}function wc(e,n,t){for(var r=(e.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Dr;if(!a){var u=i.alternate,o=u!==null&&u.memoizedState!==null||le;u=Dr;var d=le;if(Dr=a,(le=o)&&!d)for(A=i;A!==null;)a=A,o=a.child,a.tag===22&&a.memoizedState!==null?su(i):o!==null?(o.return=a,A=o):su(i);for(;l!==null;)A=l,wc(l),l=l.sibling;A=i,Dr=u,le=d}iu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,A=l):iu(e)}}function iu(e){for(;A!==null;){var n=A;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||wi(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:We(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Oa(n,l,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Oa(n,a,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ht(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}le||n.flags&512&&Yl(n)}catch(m){_(n,n.return,m)}}if(n===e){A=null;break}if(t=n.sibling,t!==null){t.return=n.return,A=t;break}A=n.return}}function lu(e){for(;A!==null;){var n=A;if(n===e){A=null;break}var t=n.sibling;if(t!==null){t.return=n.return,A=t;break}A=n.return}}function su(e){for(;A!==null;){var n=A;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{wi(4,n)}catch(o){_(n,t,o)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(o){_(n,i,o)}}var l=n.return;try{Yl(n)}catch(o){_(n,l,o)}break;case 5:var a=n.return;try{Yl(n)}catch(o){_(n,a,o)}}}catch(o){_(n,n.return,o)}if(n===e){A=null;break}var u=n.sibling;if(u!==null){u.return=n.return,A=u;break}A=n.return}}var og=Math.ceil,oi=qe.ReactCurrentDispatcher,_s=qe.ReactCurrentOwner,Ne=qe.ReactCurrentBatchConfig,C=0,J=null,Z=null,ne=0,ke=0,et=yn(0),Y=0,tr=null,In=0,Ai=0,Us=0,Ft=null,he=null,Hs=0,gt=1/0,Oe=null,ci=!1,Jl=null,gn=null,jr=!1,sn=null,di=0,Kt=0,es=null,Vr=-1,Or=0;function oe(){return C&6?G():Vr!==-1?Vr:Vr=G()}function fn(e){return e.mode&1?C&2&&ne!==0?ne&-ne:Gh.transition!==null?(Or===0&&(Or=ao()),Or):(e=I,e!==0||(e=window.event,e=e===void 0?16:mo(e.type)),e):1}function Ie(e,n,t,r){if(50<Kt)throw Kt=0,es=null,Error(v(185));sr(e,t,r),(!(C&2)||e!==J)&&(e===J&&(!(C&2)&&(Ai|=t),Y===4&&rn(e,ne)),pe(e,r),t===1&&C===0&&!(n.mode&1)&&(gt=G()+500,vi&&vn()))}function pe(e,n){var t=e.callbackNode;Gd(e,n);var r=Qr(e,e===J?ne:0);if(r===0)t!==null&&ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ma(t),n===1)e.tag===0?Hh(au.bind(null,e)):Co(au.bind(null,e)),Vh(function(){!(C&6)&&vn()}),t=null;else{switch(uo(r)){case 1:t=ks;break;case 4:t=lo;break;case 16:t=Zr;break;case 536870912:t=so;break;default:t=Zr}t=Bc(t,Ac.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ac(e,n){if(Vr=-1,Or=0,C&6)throw Error(v(327));var t=e.callbackNode;if(st()&&e.callbackNode!==t)return null;var r=Qr(e,e===J?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=hi(e,r);else{n=r;var i=C;C|=2;var l=Ec();(J!==e||ne!==n)&&(Oe=null,gt=G()+500,jn(e,n));do try{hg();break}catch(u){Nc(e,u)}while(!0);js(),oi.current=l,C=i,Z!==null?n=0:(J=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=El(e),i!==0&&(r=i,n=ns(e,i))),n===1)throw t=tr,jn(e,0),rn(e,r),pe(e,G()),t;if(n===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cg(i)&&(n=hi(e,r),n===2&&(l=El(e),l!==0&&(r=l,n=ns(e,l))),n===1))throw t=tr,jn(e,0),rn(e,r),pe(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:Nn(e,he,Oe);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=Hs+500-G(),10<n)){if(Qr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Il(Nn.bind(null,e,he,Oe),n);break}Nn(e,he,Oe);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var a=31-Ce(r);l=1<<a,a=n[a],a>i&&(i=a),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*og(r/1960))-r,10<r){e.timeoutHandle=Il(Nn.bind(null,e,he,Oe),r);break}Nn(e,he,Oe);break;case 5:Nn(e,he,Oe);break;default:throw Error(v(329))}}}return pe(e,G()),e.callbackNode===t?Ac.bind(null,e):null}function ns(e,n){var t=Ft;return e.current.memoizedState.isDehydrated&&(jn(e,n).flags|=256),e=hi(e,n),e!==2&&(n=he,he=t,n!==null&&ts(n)),e}function ts(e){he===null?he=e:he.push.apply(he,e)}function cg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Le(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Us,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ce(n),r=1<<t;e[t]=-1,n&=~r}}function au(e){if(C&6)throw Error(v(327));st();var n=Qr(e,0);if(!(n&1))return pe(e,G()),null;var t=hi(e,n);if(e.tag!==0&&t===2){var r=El(e);r!==0&&(n=r,t=ns(e,r))}if(t===1)throw t=tr,jn(e,0),rn(e,n),pe(e,G()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Nn(e,he,Oe),pe(e,G()),null}function Gs(e,n){var t=C;C|=1;try{return e(n)}finally{C=t,C===0&&(gt=G()+500,vi&&vn())}}function Ln(e){sn!==null&&sn.tag===0&&!(C&6)&&st();var n=C;C|=1;var t=Ne.transition,r=I;try{if(Ne.transition=null,I=1,e)return e()}finally{I=r,Ne.transition=t,C=n,!(C&6)&&vn()}}function Zs(){ke=et.current,F(et)}function jn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Th(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:dt(),F(fe),F(se),Ls();break;case 5:Is(r);break;case 4:dt();break;case 13:F(T);break;case 19:F(T);break;case 10:Ws(r.type._context);break;case 22:case 23:Zs()}t=t.return}if(J=e,Z=e=mn(e.current,null),ne=ke=n,Y=0,tr=null,Us=Ai=In=0,he=Ft=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}t.pending=r}Pn=null}return e}function Nc(e,n){do{var t=Z;try{if(js(),Fr.current=ui,ai){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Cn=0,q=$=V=null,Lt=!1,Jt=0,_s.current=null,t===null||t.return===null){Y=1,tr=n,Z=null;break}e:{var l=e,a=t.return,u=t,o=n;if(n=ne,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,p=u,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Qa(a);if(k!==null){k.flags&=-257,$a(k,a,u,l,n),k.mode&1&&Za(l,d,n),n=k,o=d;var S=n.updateQueue;if(S===null){var y=new Set;y.add(o),n.updateQueue=y}else S.add(o);break e}else{if(!(n&1)){Za(l,d,n),Qs();break e}o=Error(v(426))}}else if(K&&u.mode&1){var b=Qa(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),$a(b,a,u,l,n),Ps(ht(o,u));break e}}l=o=ht(o,u),Y!==4&&(Y=2),Ft===null?Ft=[l]:Ft.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=oc(l,o,n);Va(l,f);break e;case 1:u=o;var c=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gn===null||!gn.has(g)))){l.flags|=65536,n&=-n,l.lanes|=n;var x=cc(l,u,n);Va(l,x);break e}}l=l.return}while(l!==null)}Dc(t)}catch(w){n=w,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function Ec(){var e=oi.current;return oi.current=ui,e===null?ui:e}function Qs(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(In&268435455)&&!(Ai&268435455)||rn(J,ne)}function hi(e,n){var t=C;C|=2;var r=Ec();(J!==e||ne!==n)&&(Oe=null,jn(e,n));do try{dg();break}catch(i){Nc(e,i)}while(!0);if(js(),C=t,oi.current=r,Z!==null)throw Error(v(261));return J=null,ne=0,Y}function dg(){for(;Z!==null;)Pc(Z)}function hg(){for(;Z!==null&&!Rd();)Pc(Z)}function Pc(e){var n=Wc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Dc(e):Z=n,_s.current=null}function Dc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lg(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Z=null;return}}else if(t=ig(t,n,ke),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);Y===0&&(Y=5)}function Nn(e,n,t){var r=I,i=Ne.transition;try{Ne.transition=null,I=1,gg(e,n,t,r)}finally{Ne.transition=i,I=r}return null}function gg(e,n,t,r){do st();while(sn!==null);if(C&6)throw Error(v(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Zd(e,l),e===J&&(Z=J=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||jr||(jr=!0,Bc(Zr,function(){return st(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var a=I;I=1;var u=C;C|=4,_s.current=null,ag(e,t),zc(t,e),Mh(Ml),$r=!!Bl,Ml=Bl=null,e.current=t,ug(t),Fd(),C=u,I=a,Ne.transition=l}else e.current=t;if(jr&&(jr=!1,sn=e,di=i),l=e.pendingLanes,l===0&&(gn=null),Vd(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=Jl,Jl=null,e;return di&1&&e.tag!==0&&st(),l=e.pendingLanes,l&1?e===es?Kt++:(Kt=0,es=e):Kt=0,vn(),null}function st(){if(sn!==null){var e=uo(di),n=Ne.transition,t=I;try{if(Ne.transition=null,I=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,di=0,C&6)throw Error(v(331));var i=C;for(C|=4,A=e.current;A!==null;){var l=A,a=l.child;if(A.flags&16){var u=l.deletions;if(u!==null){for(var o=0;o<u.length;o++){var d=u[o];for(A=d;A!==null;){var p=A;switch(p.tag){case 0:case 11:case 15:Rt(8,p,l)}var h=p.child;if(h!==null)h.return=p,A=h;else for(;A!==null;){p=A;var m=p.sibling,k=p.return;if(yc(p),p===d){A=null;break}if(m!==null){m.return=k,A=m;break}A=k}}}var S=l.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}A=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,A=a;else e:for(;A!==null;){if(l=A,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Rt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,A=f;break e}A=l.return}}var c=e.current;for(A=c;A!==null;){a=A;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,A=g;else e:for(a=c;A!==null;){if(u=A,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:wi(9,u)}}catch(w){_(u,u.return,w)}if(u===a){A=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,A=x;break e}A=u.return}}if(C=i,vn(),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{I=t,Ne.transition=n}}return!1}function uu(e,n,t){n=ht(t,n),n=oc(e,n,1),e=hn(e,n,1),n=oe(),e!==null&&(sr(e,1,n),pe(e,n))}function _(e,n,t){if(e.tag===3)uu(e,e,t);else for(;n!==null;){if(n.tag===3){uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=ht(t,e),e=cc(n,e,1),n=hn(n,e,1),e=oe(),n!==null&&(sr(n,1,e),pe(n,e));break}}n=n.return}}function fg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>G()-Hs?jn(e,0):Us|=t),pe(e,n)}function jc(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=oe();e=Ye(e,n),e!==null&&(sr(e,n,t),pe(e,t))}function mg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),jc(e,t)}function pg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),jc(e,t)}var Wc;Wc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||fe.current)ge=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ge=!1,rg(e,n,t);ge=!!(e.flags&131072)}else ge=!1,K&&n.flags&1048576&&Io(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Tr(e,n),e=n.pendingProps;var i=ut(n,se.current);lt(n,t),i=Fs(null,n,r,e,i,t);var l=Ks();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(l=!0,ei(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ms(n),i.updater=zi,n.stateNode=i,i._reactInternals=n,Ol(n,r,e,t),n=Hl(null,n,r,!0,l,t)):(n.tag=0,K&&l&&Ns(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Tr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Sg(r),e=We(r,e),i){case 0:n=Ul(null,n,r,e,t);break e;case 1:n=qa(null,n,r,e,t);break e;case 11:n=Ya(null,n,r,e,t);break e;case 14:n=Xa(null,n,r,We(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ul(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),qa(e,n,r,i,t);case 3:e:{if(fc(n),e===null)throw Error(v(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Vo(e,n),li(n,r,null,t);var a=n.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ht(Error(v(423)),n),n=Ja(e,n,r,t,i);break e}else if(r!==i){i=ht(Error(v(424)),n),n=Ja(e,n,r,t,i);break e}else for(Se=dn(n.stateNode.containerInfo.firstChild),xe=n,K=!0,Me=null,t=Ko(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),r===i){n=Xe(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Oo(n),e===null&&Kl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,Cl(r,i)?a=null:l!==null&&Cl(r,l)&&(n.flags|=32),gc(e,n),ae(e,n,a,t),n.child;case 6:return e===null&&Kl(n),null;case 13:return mc(e,n,t);case 4:return Cs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ct(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Ya(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,a=i.value,L(ri,r._currentValue),r._currentValue=a,l!==null)if(Le(l.value,a)){if(l.children===i.children&&!fe.current){n=Xe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var u=l.dependencies;if(u!==null){a=l.child;for(var o=u.firstContext;o!==null;){if(o.context===r){if(l.tag===1){o=Ge(-1,t&-t),o.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?o.next=o:(o.next=p.next,p.next=o),d.pending=o}}l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),Tl(l.return,t,n),u.lanes|=t;break}o=o.next}}else if(l.tag===10)a=l.type===n.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(v(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),Tl(a,t,n),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===n){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lt(n,t),i=Ee(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=We(r,n.pendingProps),i=We(r.type,i),Xa(e,n,r,i,t);case 15:return dc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:We(r,i),Tr(e,n),n.tag=1,me(r)?(e=!0,ei(n)):e=!1,lt(n,t),uc(n,r,i),Ol(n,r,i,t),Hl(null,n,r,!0,e,t);case 19:return pc(e,n,t);case 22:return hc(e,n,t)}throw Error(v(156,n.tag))};function Bc(e,n){return io(e,n)}function kg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,n,t,r){return new kg(e,n,t,r)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return $s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fs)return 11;if(e===ms)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=Ae(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,r,i,l){var a=2;if(r=e,typeof e=="function")$s(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Un:return Wn(t.children,i,l,n);case gs:a=8,i|=8;break;case hl:return e=Ae(12,t,n,i|2),e.elementType=hl,e.lanes=l,e;case gl:return e=Ae(13,t,n,i),e.elementType=gl,e.lanes=l,e;case fl:return e=Ae(19,t,n,i),e.elementType=fl,e.lanes=l,e;case Vu:return Ni(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ku:a=10;break e;case Tu:a=9;break e;case fs:a=11;break e;case ms:a=14;break e;case en:a=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Ae(a,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Wn(e,n,t,r){return e=Ae(7,e,r,n),e.lanes=t,e}function Ni(e,n,t,r){return e=Ae(22,e,r,n),e.elementType=Vu,e.lanes=t,e.stateNode={isHidden:!1},e}function sl(e,n,t){return e=Ae(6,e,null,n),e.lanes=t,e}function al(e,n,t){return n=Ae(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function xg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ys(e,n,t,r,i,l,a,u,o){return e=new xg(e,n,t,u,o),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Ae(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(l),e}function yg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_n,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Mc(e){if(!e)return Sn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(me(t))return Mo(e,t,n)}return n}function Cc(e,n,t,r,i,l,a,u,o){return e=Ys(t,r,!0,e,i,l,a,u,o),e.context=Mc(null),t=e.current,r=oe(),i=fn(t),l=Ge(r,i),l.callback=n??null,hn(t,l,i),e.current.lanes=i,sr(e,i,r),pe(e,r),e}function Ei(e,n,t,r){var i=n.current,l=oe(),a=fn(i);return t=Mc(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(l,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(i,n,a),e!==null&&(Ie(e,i,a,l),Rr(e,i,a)),a}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xs(e,n){ou(e,n),(e=e.alternate)&&ou(e,n)}function vg(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function qs(e){this._internalRoot=e}Pi.prototype.render=qs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));Ei(e,n,null,null)};Pi.prototype.unmount=qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ln(function(){Ei(null,e,null,null)}),n[$e]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ho();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&fo(e)}};function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function bg(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=gi(a);l.call(d)}}var a=Cc(n,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=a,e[$e]=a.current,Qt(e.nodeType===8?e.parentNode:e),Ln(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var d=gi(o);u.call(d)}}var o=Ys(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=o,e[$e]=o.current,Qt(e.nodeType===8?e.parentNode:e),Ln(function(){Ei(n,o,t,r)}),o}function ji(e,n,t,r,i){var l=t._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var u=i;i=function(){var o=gi(a);u.call(o)}}Ei(n,a,e,i)}else a=bg(t,n,e,i,r);return gi(a)}oo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(Ss(n,t|1),pe(n,G()),!(C&6)&&(gt=G()+500,vn()))}break;case 13:Ln(function(){var r=Ye(e,1);if(r!==null){var i=oe();Ie(r,e,1,i)}}),Xs(e,1)}};xs=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=oe();Ie(n,e,134217728,t)}Xs(e,134217728)}};co=function(e){if(e.tag===13){var n=fn(e),t=Ye(e,n);if(t!==null){var r=oe();Ie(t,e,n,r)}Xs(e,n)}};ho=function(){return I};go=function(e,n){var t=I;try{return I=e,n()}finally{I=t}};wl=function(e,n,t){switch(n){case"input":if(kl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(v(90));_u(r),kl(r,i)}}}break;case"textarea":Hu(e,t);break;case"select":n=t.value,n!=null&&nt(e,!!t.multiple,n,!1)}};qu=Gs;Ju=Ln;var zg={usingClientEntryPoint:!1,Events:[ur,Qn,yi,Yu,Xu,Gs]},Nt={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wg={bundleType:Nt.bundleType,version:Nt.version,rendererPackageName:Nt.rendererPackageName,rendererConfig:Nt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=to(e),e===null?null:e.stateNode},findFiberByHostInstance:Nt.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{pi=Wr.inject(wg),Te=Wr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zg;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Js(n))throw Error(v(200));return yg(e,n,null,t)};ve.createRoot=function(e,n){if(!Js(e))throw Error(v(299));var t=!1,r="",i=Ic;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ys(e,1,!1,null,null,t,!1,r,i),e[$e]=n.current,Qt(e.nodeType===8?e.parentNode:e),new qs(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=to(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Ln(e)};ve.hydrate=function(e,n,t){if(!Di(n))throw Error(v(200));return ji(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!Js(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",a=Ic;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Cc(n,null,e,1,t??null,i,!1,l,a),e[$e]=n.current,Qt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Pi(n)};ve.render=function(e,n,t){if(!Di(n))throw Error(v(200));return ji(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!Di(e))throw Error(v(40));return e._reactRootContainer?(Ln(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};ve.unstable_batchedUpdates=Gs;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return ji(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function Lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc)}catch(e){console.error(e)}}Lc(),Iu.exports=ve;var Ag=Iu.exports,du=Ag;cl.createRoot=du.createRoot,cl.hydrateRoot=du.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(null,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const hu="popstate";function Ng(e){e===void 0&&(e={});function n(i,l){let{pathname:a="/",search:u="",hash:o=""}=Kn(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),rs("",{pathname:a,search:u,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let a=i.document.querySelector("base"),u="";if(a&&a.getAttribute("href")){let o=i.location.href,d=o.indexOf("#");u=d===-1?o:o.slice(0,d)}return u+"#"+(typeof l=="string"?l:fi(l))}function r(i,l){Wi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Pg(n,t,r,e)}function Q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Wi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Eg(){return Math.random().toString(36).substr(2,8)}function gu(e,n){return{usr:e.state,key:e.key,idx:n}}function rs(e,n,t,r){return t===void 0&&(t=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Kn(n):n,{state:t,key:n&&n.key||r||Eg()})}function fi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Kn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Pg(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,a=i.history,u=an.Pop,o=null,d=p();d==null&&(d=0,a.replaceState(rr({},a.state,{idx:d}),""));function p(){return(a.state||{idx:null}).idx}function h(){u=an.Pop;let b=p(),f=b==null?null:b-d;d=b,o&&o({action:u,location:y.location,delta:f})}function m(b,f){u=an.Push;let c=rs(y.location,b,f);t&&t(c,b),d=p()+1;let g=gu(c,d),x=y.createHref(c);try{a.pushState(g,"",x)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;i.location.assign(x)}l&&o&&o({action:u,location:y.location,delta:1})}function k(b,f){u=an.Replace;let c=rs(y.location,b,f);t&&t(c,b),d=p();let g=gu(c,d),x=y.createHref(c);a.replaceState(g,"",x),l&&o&&o({action:u,location:y.location,delta:0})}function S(b){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof b=="string"?b:fi(b);return c=c.replace(/ $/,"%20"),Q(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return u},get location(){return e(i,a)},listen(b){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(hu,h),o=b,()=>{i.removeEventListener(hu,h),o=null}},createHref(b){return n(i,b)},createURL:S,encodeLocation(b){let f=S(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:k,go(b){return a.go(b)}};return y}var fu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fu||(fu={}));function Dg(e,n,t){return t===void 0&&(t="/"),jg(e,n,t)}function jg(e,n,t,r){let i=typeof n=="string"?Kn(n):n,l=ea(i.pathname||"/",t);if(l==null)return null;let a=Rc(e);Wg(a);let u=null,o=_g(l);for(let d=0;u==null&&d<a.length;++d)u=Tg(a[d],o);return u}function Rc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,a,u)=>{let o={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};o.relativePath.startsWith("/")&&(Q(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let d=pn([r,o.relativePath]),p=t.concat(o);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Rc(l.children,n,p,d)),!(l.path==null&&!l.index)&&n.push({path:d,score:Fg(d,l.index),routesMeta:p})};return e.forEach((l,a)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,a);else for(let o of Fc(l.path))i(l,a,o)}),n}function Fc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let a=Fc(r.join("/")),u=[];return u.push(...a.map(o=>o===""?l:[l,o].join("/"))),i&&u.push(...a),u.map(o=>e.startsWith("/")&&o===""?"/":o)}function Wg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Kg(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Bg=/^:[\w-]+$/,Mg=3,Cg=2,Ig=1,Lg=10,Rg=-2,mu=e=>e==="*";function Fg(e,n){let t=e.split("/"),r=t.length;return t.some(mu)&&(r+=Rg),n&&(r+=Cg),t.filter(i=>!mu(i)).reduce((i,l)=>i+(Bg.test(l)?Mg:l===""?Ig:Lg),r)}function Kg(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Tg(e,n,t){let{routesMeta:r}=e,i={},l="/",a=[];for(let u=0;u<r.length;++u){let o=r[u],d=u===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",h=Vg({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},p),m=o.route;if(!h)return null;Object.assign(i,h.params),a.push({params:i,pathname:pn([l,h.pathname]),pathnameBase:Qg(pn([l,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(l=pn([l,h.pathnameBase]))}return a}function Vg(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Og(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],a=l.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((d,p,h)=>{let{paramName:m,isOptional:k}=p;if(m==="*"){let y=u[h]||"";a=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const S=u[h];return k&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:a,pattern:e}}function Og(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Wi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,o)=>(r.push({paramName:u,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function _g(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Wi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ea(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hg=e=>Ug.test(e);function Gg(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e,l;if(t)if(Hg(t))l=t;else{if(t.includes("//")){let a=t;t=Vc(t),Wi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?l=pu(t.substring(1),"/"):l=pu(t,n)}else l=n;return{pathname:l,search:$g(r),hash:Yg(i)}}function pu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ul(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Kc(e,n){let t=Zg(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Tc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=rr({},e),Q(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let l=e===""||i.pathname==="",a=l?"/":i.pathname,u;if(a==null)u=t;else{let h=n.length-1;if(!r&&a.startsWith("..")){let m=a.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}u=h>=0?n[h]:"/"}let o=Gg(i,u),d=a&&a!=="/"&&a.endsWith("/"),p=(l||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(d||p)&&(o.pathname+="/"),o}const Vc=e=>e.replace(/\/\/+/g,"/"),pn=e=>Vc(e.join("/")),Qg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oc=["post","put","patch","delete"];new Set(Oc);const qg=["get",...Oc];new Set(qg);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(null,arguments)}const na=z.createContext(null),Jg=z.createContext(null),Tn=z.createContext(null),Bi=z.createContext(null),bn=z.createContext({outlet:null,matches:[],isDataRoute:!1}),_c=z.createContext(null);function ef(e,n){let{relative:t}=n===void 0?{}:n;cr()||Q(!1);let{basename:r,navigator:i}=z.useContext(Tn),{hash:l,pathname:a,search:u}=Gc(e,{relative:t}),o=a;return r!=="/"&&(o=a==="/"?r:pn([r,a])),i.createHref({pathname:o,search:u,hash:l})}function cr(){return z.useContext(Bi)!=null}function dr(){return cr()||Q(!1),z.useContext(Bi).location}function Uc(e){z.useContext(Tn).static||z.useLayoutEffect(e)}function nf(){let{isDataRoute:e}=z.useContext(bn);return e?mf():tf()}function tf(){cr()||Q(!1);let e=z.useContext(na),{basename:n,future:t,navigator:r}=z.useContext(Tn),{matches:i}=z.useContext(bn),{pathname:l}=dr(),a=JSON.stringify(Kc(i,t.v7_relativeSplatPath)),u=z.useRef(!1);return Uc(()=>{u.current=!0}),z.useCallback(function(d,p){if(p===void 0&&(p={}),!u.current)return;if(typeof d=="number"){r.go(d);return}let h=Tc(d,JSON.parse(a),l,p.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:pn([n,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[n,r,a,l,e])}function Hc(){let{matches:e}=z.useContext(bn),n=e[e.length-1];return n?n.params:{}}function Gc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=z.useContext(Tn),{matches:i}=z.useContext(bn),{pathname:l}=dr(),a=JSON.stringify(Kc(i,r.v7_relativeSplatPath));return z.useMemo(()=>Tc(e,JSON.parse(a),l,t==="path"),[e,a,l,t])}function rf(e,n){return lf(e,n)}function lf(e,n,t,r){cr()||Q(!1);let{navigator:i}=z.useContext(Tn),{matches:l}=z.useContext(bn),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let d=dr(),p;if(n){var h;let b=typeof n=="string"?Kn(n):n;o==="/"||(h=b.pathname)!=null&&h.startsWith(o)||Q(!1),p=b}else p=d;let m=p.pathname||"/",k=m;if(o!=="/"){let b=o.replace(/^\//,"").split("/");k="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=Dg(e,{pathname:k}),y=cf(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},u,b.params),pathname:pn([o,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?o:pn([o,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,r);return n&&y?z.createElement(Bi.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:an.Pop}},y):y}function sf(){let e=ff(),n=Xg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},n),t?z.createElement("pre",{style:i},t):null,null)}const af=z.createElement(sf,null);class uf extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?z.createElement(bn.Provider,{value:this.props.routeContext},z.createElement(_c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function of(e){let{routeContext:n,match:t,children:r}=e,i=z.useContext(na);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),z.createElement(bn.Provider,{value:n},r)}function cf(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,u=(i=t)==null?void 0:i.errors;if(u!=null){let p=a.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);p>=0||Q(!1),a=a.slice(0,Math.min(a.length,p+1))}let o=!1,d=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let h=a[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=p),h.route.id){let{loaderData:m,errors:k}=t,S=h.route.loader&&m[h.route.id]===void 0&&(!k||k[h.route.id]===void 0);if(h.route.lazy||S){o=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,h,m)=>{let k,S=!1,y=null,b=null;t&&(k=u&&h.route.id?u[h.route.id]:void 0,y=h.route.errorElement||af,o&&(d<0&&m===0?(pf("route-fallback"),S=!0,b=null):d===m&&(S=!0,b=h.route.hydrateFallbackElement||null)));let f=n.concat(a.slice(0,m+1)),c=()=>{let g;return k?g=y:S?g=b:h.route.Component?g=z.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=p,z.createElement(of,{match:h,routeContext:{outlet:p,matches:f,isDataRoute:t!=null},children:g})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?z.createElement(uf,{location:t.location,revalidation:t.revalidation,component:y,error:k,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var Zc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zc||{}),Qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qc||{});function df(e){let n=z.useContext(na);return n||Q(!1),n}function hf(e){let n=z.useContext(Jg);return n||Q(!1),n}function gf(e){let n=z.useContext(bn);return n||Q(!1),n}function $c(e){let n=gf(),t=n.matches[n.matches.length-1];return t.route.id||Q(!1),t.route.id}function ff(){var e;let n=z.useContext(_c),t=hf(),r=$c();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function mf(){let{router:e}=df(Zc.UseNavigateStable),n=$c(Qc.UseNavigateStable),t=z.useRef(!1);return Uc(()=>{t.current=!0}),z.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:n},l)))},[e,n])}const ku={};function pf(e,n,t){ku[e]||(ku[e]=!0)}function kf(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function On(e){Q(!1)}function Sf(e){let{basename:n="/",children:t=null,location:r,navigationType:i=an.Pop,navigator:l,static:a=!1,future:u}=e;cr()&&Q(!1);let o=n.replace(/^\/*/,"/"),d=z.useMemo(()=>({basename:o,navigator:l,static:a,future:ir({v7_relativeSplatPath:!1},u)}),[o,u,l,a]);typeof r=="string"&&(r=Kn(r));let{pathname:p="/",search:h="",hash:m="",state:k=null,key:S="default"}=r,y=z.useMemo(()=>{let b=ea(p,o);return b==null?null:{location:{pathname:b,search:h,hash:m,state:k,key:S},navigationType:i}},[o,p,h,m,k,S,i]);return y==null?null:z.createElement(Tn.Provider,{value:d},z.createElement(Bi.Provider,{children:t,value:y}))}function xf(e){let{children:n,location:t}=e;return rf(is(n),t)}new Promise(()=>{});function is(e,n){n===void 0&&(n=[]);let t=[];return z.Children.forEach(e,(r,i)=>{if(!z.isValidElement(r))return;let l=[...n,i];if(r.type===z.Fragment){t.push.apply(t,is(r.props.children,l));return}r.type!==On&&Q(!1),!r.props.index||!r.props.children||Q(!1);let a={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=is(r.props.children,l)),t.push(a)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ls.apply(null,arguments)}function yf(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function vf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bf(e,n){return e.button===0&&(!n||n==="_self")&&!vf(e)}const zf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wf="6";try{window.__reactRouterVersion=wf}catch{}const Af="startTransition",Su=fd[Af];function Nf(e){let{basename:n,children:t,future:r,window:i}=e,l=z.useRef();l.current==null&&(l.current=Ng({window:i,v5Compat:!0}));let a=l.current,[u,o]=z.useState({action:a.action,location:a.location}),{v7_startTransition:d}=r||{},p=z.useCallback(h=>{d&&Su?Su(()=>o(h)):o(h)},[o,d]);return z.useLayoutEffect(()=>a.listen(p),[a,p]),z.useEffect(()=>kf(r),[r]),z.createElement(Sf,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:a,future:r})}const Ef=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=z.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:a,state:u,target:o,to:d,preventScrollReset:p,viewTransition:h}=n,m=yf(n,zf),{basename:k}=z.useContext(Tn),S,y=!1;if(typeof d=="string"&&Pf.test(d)&&(S=d,Ef))try{let g=new URL(window.location.href),x=d.startsWith("//")?new URL(g.protocol+d):new URL(d),w=ea(x.pathname,k);x.origin===g.origin&&w!=null?d=w+x.search+x.hash:y=!0}catch{}let b=ef(d,{relative:i}),f=Df(d,{replace:a,state:u,target:o,preventScrollReset:p,relative:i,viewTransition:h});function c(g){r&&r(g),g.defaultPrevented||f(g)}return z.createElement("a",ls({},m,{href:S||b,onClick:y||l?r:c,ref:t,target:o}))});var xu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xu||(xu={}));var yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yu||(yu={}));function Df(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:a,viewTransition:u}=n===void 0?{}:n,o=nf(),d=dr(),p=Gc(e,{relative:a});return z.useCallback(h=>{if(bf(h,t)){h.preventDefault();let m=r!==void 0?r:fi(d)===fi(p);o(e,{replace:m,state:i,preventScrollReset:l,relative:a,viewTransition:u})}},[d,o,p,r,i,t,e,l,a,u])}function jf(){const[e,n]=z.useState(!1),{pathname:t}=dr(),r=[{to:"/",label:"Dashboard"},{to:"/fortschritt",label:"Fortschritt"},{to:"/karteikarten",label:"Karteikarten"}];return s.jsx("nav",{className:"bg-blue-800 text-white shadow-lg",children:s.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[s.jsxs("div",{className:"flex items-center justify-between h-16",children:[s.jsxs(ue,{to:"/",className:"flex items-center gap-2 font-bold text-xl",children:[s.jsx("span",{children:"⚡"}),s.jsx("span",{className:"hidden sm:block",children:"Automatiker Lern-App"}),s.jsx("span",{className:"sm:hidden",children:"Automatiker"})]}),s.jsx("div",{className:"hidden md:flex items-center gap-6",children:r.map(i=>s.jsx(ue,{to:i.to,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors ${t===i.to?"bg-blue-900 text-white":"text-blue-100 hover:bg-blue-700"}`,children:i.label},i.to))}),s.jsx("button",{className:"md:hidden p-2 rounded text-blue-100 hover:bg-blue-700",onClick:()=>n(i=>!i),children:e?"✕":"☰"})]}),e&&s.jsx("div",{className:"md:hidden pb-3 space-y-1",children:r.map(i=>s.jsx(ue,{to:i.to,onClick:()=>n(!1),className:`block px-3 py-2 rounded-md text-sm font-medium ${t===i.to?"bg-blue-900 text-white":"text-blue-100 hover:bg-blue-700"}`,children:i.label},i.to))})]})})}const Ze=[{id:"elektrotechnik",titel:"Elektrotechnik",icon:"⚡",farbe:"blue",beschreibung:"Grundlagen der Elektrotechnik: Ohm, Kirchhoff, AC/DC, Leistung",lektionen:[{id:"ohm",diagramId:"ohm",titel:"Ohmsches Gesetz",inhalt:`Das Ohmsche Gesetz ist das Fundament der Elektrotechnik und beschreibt den Zusammenhang zwischen elektrischer Spannung (U), Widerstand (R) und Stromstärke (I).

## Grundformel
U = R × I

- U = Spannung in Volt [V]
- R = Widerstand in Ohm [Ω]
- I = Stromstärke in Ampere [A]

## Umgestellte Formeln
- R = U / I  (Widerstand berechnen)
- I = U / R  (Strom berechnen)

## Beispiel 1 – Strom berechnen
Eine Lampe hat einen Widerstand von 100 Ω und wird an 230 V betrieben.
I = U / R = 230 V / 100 Ω = 2,3 A

## Beispiel 2 – Widerstand berechnen
Durch ein Bauteil fliessen 0,5 A bei einer Spannung von 12 V.
R = U / I = 12 V / 0,5 A = 24 Ω

## Merkhilfe (Dreieck)
Schreibe U oben, R unten links, I unten rechts. Decke die gesuchte Grösse ab – die verbleibenden zeigen die Rechenoperation.

## Wichtig für den Automatiker
In der Automatisierungstechnik begegnest du dem Ohmschen Gesetz täglich: Bei der Auslegung von Sicherungen, der Berechnung von Vorwiderständen für Sensoren oder der Analyse von Stromkreisen in Steuerungsanlagen.`},{id:"kirchhoff",diagramId:"kirchhoff",titel:"Kirchhoffsche Gesetze",inhalt:`Die Kirchhoffschen Gesetze ermöglichen die Berechnung komplexer elektrischer Netzwerke mit mehreren Maschen und Knoten.

## 1. Kirchhoffsches Gesetz – Knotensatz
An jedem Knoten ist die Summe aller zufliessenden Ströme gleich der Summe aller abfliessenden Ströme.

ΣI_zu = ΣI_ab  oder  ΣI = 0

Beispiel: In einen Knoten fliessen I1 = 3 A und I2 = 2 A ein. Der abfliessende Strom I3 = 5 A.

## 2. Kirchhoffsches Gesetz – Maschensatz
In jeder geschlossenen Masche ist die Summe aller Spannungsabfälle gleich der Summe aller Quellenspannungen.

ΣU = 0  oder  ΣU_Quellen = ΣU_Verbraucher

Beispiel: Eine Masche mit Batterie U0 = 12 V, Widerstand R1 mit U1 = 4 V und R2 mit U2 = 8 V:
12 V = 4 V + 8 V ✓

## Reihenschaltung (Maschensatz anwenden)
- Gesamtwiderstand: R_ges = R1 + R2 + R3
- Strom überall gleich: I = I1 = I2 = I3
- Spannung teilt sich auf: U = U1 + U2 + U3

## Parallelschaltung (Knotensatz anwenden)
- Spannung überall gleich: U = U1 = U2 = U3
- Strom teilt sich auf: I = I1 + I2 + I3
- Gesamtwiderstand: 1/R_ges = 1/R1 + 1/R2 + 1/R3

## Praxisbeispiel
In einer Steuerungsanlage werden mehrere Magnetventile parallel an 24 V DC betrieben. Mit dem Knotensatz kann die gesamte Stromaufnahme berechnet werden, um die richtige Sicherung zu dimensionieren.`},{id:"ac-dc",diagramId:"wechselstrom",titel:"Gleich- und Wechselstrom",inhalt:`Elektrischer Strom tritt in zwei grundlegenden Formen auf: Gleichstrom (DC) und Wechselstrom (AC). Im Berufsalltag eines Automatikers begegnest du beiden Formen ständig.

## Gleichstrom (DC – Direct Current)
Der Gleichstrom fliesst immer in dieselbe Richtung. Die Spannung ist konstant.

Typische Anwendungen:
- Steuerkreise: 24 V DC (Standard in der Automatisierung)
- Akkus und Batterien
- Elektronische Bauteile (SPS-Eingänge, Sensoren)
- Gleichstromantriebe

## Wechselstrom (AC – Alternating Current)
Der Wechselstrom wechselt periodisch seine Richtung. Die Spannung schwankt sinusförmig.

Wichtige Kennwerte:
- Frequenz f = 50 Hz (in Europa, d.h. 50 Schwingungen pro Sekunde)
- Periodendauer T = 1/f = 1/50 = 0,02 s = 20 ms
- Spitzenspannung: û = U_eff × √2 = 230 × 1,414 = 325 V
- Effektivwert: U_eff = 230 V (Netzspannung Schweiz)

## Effektivwert
Der Effektivwert ist die Spannung, die dieselbe Wärmeleistung erzeugt wie der entsprechende Gleichstrom.
U_eff = û / √2

## Drehstrom (3-Phasenwechselstrom)
In der Industrie wird Drehstrom (3 Phasen, je 230 V gegen Null = 400 V zwischen Phasen) für Motoren verwendet.
- Strangspannung: 230 V
- Verkettete Spannung (Leiterspannung): U_L = √3 × 230 = 400 V

## Praxistipp
Steuerungen arbeiten fast immer mit 24 V DC, die Leistungskreise (Motoren, Heizungen) mit 400 V AC Drehstrom.`},{id:"leistung",diagramId:"leistung",titel:"Elektrische Leistung",inhalt:`Die elektrische Leistung gibt an, wie viel Energie pro Zeiteinheit umgesetzt wird. Für den Automatiker ist sie wichtig bei der Auslegung von Antrieben, Sicherungen und Transformatoren.

## Gleichstrom-Leistung
P = U × I

- P = Leistung in Watt [W]
- U = Spannung in Volt [V]
- I = Stromstärke in Ampere [A]

Mit dem Ohmschen Gesetz ergibt sich auch:
- P = U² / R
- P = I² × R

## Wechselstrom-Leistung
Bei Wechselstrom muss der Leistungsfaktor cos φ (Phasenwinkel zwischen Strom und Spannung) berücksichtigt werden.

Wirkleistung:   P = U × I × cos φ  [W]
Scheinleistung: S = U × I           [VA]
Blindleistung:  Q = U × I × sin φ  [var]

S² = P² + Q²

## Leistungsfaktor cos φ
- Ohmscher Verbraucher (Heizung): cos φ = 1
- Elektromotor: cos φ ≈ 0,75–0,9
- Schlechter cos φ belastet das Netz → Blindstromkompensation

## Energie
W = P × t

- W = Energie in Wattstunden [Wh] oder Joule [J]
- 1 kWh = 3 600 000 J

## Beispiel – Motorauslegung
Ein Antriebsmotor benötigt 5,5 kW Wirkleistung bei cos φ = 0,8.
Scheinleistung: S = P / cos φ = 5500 / 0,8 = 6875 VA
Strom bei 400 V Drehstrom: I = S / (√3 × U) = 6875 / (1,732 × 400) ≈ 9,9 A`},{id:"kondensator-spule",diagramId:"brueckengleichrichter",titel:"Kondensatoren und Spulen",inhalt:`Kondensatoren und Spulen sind reaktive Bauteile, die Energie speichern und in der Automatisierungstechnik vielseitig eingesetzt werden.

## Kondensator
Ein Kondensator speichert elektrische Energie in einem elektrischen Feld.

Kapazität: C = Q / U  [Farad, F]
Energie:   W = ½ × C × U²

Typische Einheiten: µF (Mikrofarad), nF (Nanofarad), pF (Pikofarad)

Anwendungen:
- Entstörung von Steuersignalen
- Pufferkondensatoren in Netzteilen
- Blindstromkompensation
- Zeitglieder (RC-Glieder)

Im Wechselstromkreis: kapazitiver Widerstand Xc = 1 / (2π × f × C)
Strom eilt der Spannung um 90° voraus.

## Spule (Induktivität)
Eine Spule speichert Energie in einem magnetischen Feld.

Induktivität: L  [Henry, H]
Energie:      W = ½ × L × I²

Anwendungen:
- Relais und Schütze (Elektromagnet)
- Motoren (Statorwicklung)
- Drosseln zur Entstörung
- Transformatoren

Im Wechselstromkreis: induktiver Widerstand XL = 2π × f × L
Spannung eilt dem Strom um 90° voraus.

## Reihenschwingkreis
Kondensator + Spule in Reihe → Resonanzfrequenz:
f0 = 1 / (2π × √(L × C))

## Praxisrelevanz
Beim Schalten induktiver Lasten (Relais, Magnetventile) entstehen Abschaltspannungsspitzen (Induktionsstösse). Zum Schutz werden Freilaufdioden parallel zur Last geschaltet.`}]},{id:"sps",titel:"SPS-Programmierung",icon:"🖥️",farbe:"green",beschreibung:"Siemens S7, TIA Portal, KOP, FUP, Ablaufsteuerungen",lektionen:[{id:"sps-grundlagen",titel:"Was ist eine SPS?",inhalt:`Eine Speicherprogrammierbare Steuerung (SPS) ist das Herzstück moderner Automatisierungsanlagen. Sie ersetzt klassische Relaissteuerungen und ermöglicht flexible, änderbare Programme.

## Aufbau einer SPS
Eine SPS besteht aus folgenden Hauptkomponenten:

1. Zentraleinheit (CPU): Verarbeitet das Programm
2. Netzteil: Versorgt die SPS mit Spannung
3. Eingabe-Baugruppen (I): Digitale/analoge Eingänge (Sensoren, Taster)
4. Ausgabe-Baugruppen (Q): Digitale/analoge Ausgänge (Aktoren, Ventile, Motoren)
5. Kommunikationsschnittstellen: Profibus, Profinet, Ethernet

## Arbeitsweise (zyklische Verarbeitung)
1. Eingänge einlesen (Prozessabbild der Eingänge PAE)
2. Programm ausführen (Benutzerlogik)
3. Ausgänge schreiben (Prozessabbild der Ausgänge PAA)
Zykluszeit: typisch 1–50 ms

## Siemens SIMATIC S7-Familie
- S7-300: Klassische Mittelklasse-SPS (wird abgelöst)
- S7-400: Hochleistungs-SPS für grosse Anlagen
- S7-1200: Kompakte SPS für kleine bis mittlere Anwendungen
- S7-1500: Moderne Hochleistungs-SPS (Nachfolger S7-300/400)

## TIA Portal (Totally Integrated Automation)
TIA Portal ist die Programmiersoftware von Siemens für S7-1200 und S7-1500. Es vereint:
- Programmiereditor (KOP, FUP, AWL, SCL, Graph)
- Hardware-Konfiguration
- Visualisierung (SIMATIC WinCC)
- Netzwerkkonfiguration

## Adressierung
Eingänge: I0.0, I0.1, ... I0.7, I1.0 ...
Ausgänge: Q0.0, Q0.1, ... Q0.7, Q1.0 ...
Merker:   M0.0, M0.1 ... (interne Hilfsgrössen)
Datenbaustein: DB1.DBX0.0, DB1.DBW2 ...`},{id:"kop",titel:"Kontaktplan (KOP/LAD)",inhalt:`Der Kontaktplan (KOP, engl. Ladder Diagram LAD) ist die am weitesten verbreitete SPS-Programmiersprache. Er ist angelehnt an Stromlaufpläne mit Relaistechnik.

## Grundelemente des KOP

### Öffner (Normally Open Contact) – Schliesser
Symbol: --| |--
Schaltverhalten: Durchgang wenn Bit = 1
Adresse: I0.0, M5.3, Q1.2 etc.

### Schliesser (Normally Closed Contact) – Öffner
Symbol: --|/|--
Schaltverhalten: Durchgang wenn Bit = 0

### Ausgangs-Spule (Output Coil)
Symbol: --( )--
Funktion: Setzt das zugeordnete Bit auf 1 wenn Strom fliesst

### Setz-Spule (Set)
Symbol: --(S)--
Funktion: Setzt Bit auf 1, bleibt gesetzt bis Reset

### Rücksetz-Spule (Reset)
Symbol: --(R)--
Funktion: Setzt Bit zurück auf 0

## Beispiel: Motorsteuerung mit Selbsthaltung
Netzwerk 1: Einschalten
I0.0 (Einschalttaster) UND NICHT I0.1 (Ausschalttaster) → Q0.0 (Motor)
Selbsthaltung: Q0.0 parallel zu I0.0

## Timer in KOP
TON (Timer On-Delay): Einschaltverzögerung
TOF (Timer Off-Delay): Ausschaltverzögerung
TP  (Timer Pulse): Impulsgeber

Beispiel TON:
Wenn I0.0 = 1 für t ≥ 5 s → Q0.0 = 1

## Zähler in KOP
CTU: Aufwärtszähler
CTD: Abwärtszähler
CTUD: Auf-/Abwärtszähler

## Praxistipp
In der Schweiz wird KOP (deutsch) oder LAD (englisch) am häufigsten in Aufzügen, Verpackungsmaschinen und Fertigungsanlagen verwendet.`},{id:"fup",titel:"Funktionsplan (FUP/FBD)",inhalt:`Der Funktionsplan (FUP, engl. Function Block Diagram FBD) verwendet logische Gatter-Symbole ähnlich der Digitaltechnik. Er eignet sich gut für Regelungsaufgaben.

## Grundgatter im FUP

### AND-Gatter
Ausgabe = 1 nur wenn ALLE Eingänge = 1
Anwendung: Sicherheitsverriegelungen (alle Schutztüren müssen geschlossen sein)

### OR-Gatter
Ausgabe = 1 wenn MINDESTENS EIN Eingang = 1
Anwendung: Mehrere Starttaster können Anlage starten

### NOT (Negation)
Ausgabe = Invertierter Eingang
Anwendung: Umwandlung von Öffnersignalen

### NAND, NOR, XOR
- NAND = Negiertes AND
- NOR = Negiertes OR
- XOR = Exklusives OR (Ausgabe 1 wenn Eingänge VERSCHIEDEN)

## Bausteine im FUP
Zusätzlich zu Gattern können komplexe Bausteine (Function Blocks) verwendet werden:
- Zeitbausteine (TON, TOF, TP)
- Zähler (CTU, CTD)
- Arithmetik (ADD, SUB, MUL, DIV)
- Vergleicher (CMP: ==, <>, >, <, >=, <=)
- Datentransfer (MOVE)

## Beispiel: Temperaturüberwachung
Analogeingang IW64 (Temperatursensor 0–100°C):
1. MOVE: IW64 → MD10 (Istwert speichern)
2. CMP >: MD10 > MD20 (Sollwert) → M0.0
3. AND: M0.0 UND I0.0 (Anlage läuft) → Q0.5 (Kühlung ein)

## Vergleich KOP vs FUP
- KOP: Intuitiv für Elektriker (ähnlich Stromlaufplan)
- FUP: Intuitiv für Elektroniker/Ingenieure (ähnlich Schaltbild)
- Beide erzeugen dasselbe ausführbare Programm`},{id:"ablaufsteuerung",titel:"Ablaufsteuerung (GRAPH/SFC)",inhalt:`Die Ablaufsteuerung (Sequential Function Chart, SFC) ist ideal für schrittweise ablaufende Prozesse wie Produktionsmaschinen oder Dosieranlagen.

## Grundstruktur einer Ablaufsteuerung
Eine SFC besteht aus:
- Schritten (Steps): Zustände der Anlage
- Transitionen: Bedingungen zum Weiterschaltenr
- Aktionen: Was in einem Schritt ausgeführt wird

## Beispiel: Befüllanlage

Schritt 0: Grundstellung (Anlage leer, alle Ventile zu)
  ↓ Transition: Starttaste gedrückt (I0.0 = 1)
Schritt 1: Einlassventil öffnen (Q0.0 = 1)
  ↓ Transition: Füllstand OK (I1.0 = 1) ODER Zeit 30s abgelaufen
Schritt 2: Einlassventil schliessen, Pumpe ein (Q0.1 = 1)
  ↓ Transition: Zieldruck erreicht (I1.1 = 1)
Schritt 3: Pumpe aus, Auslassventil öffnen (Q0.2 = 1)
  ↓ Transition: Tank leer (I1.2 = 1)
Schritt 0: Zurück zu Grundstellung

## Aktionstypen
- N (Non-stored): Aktion aktiv solange Schritt aktiv
- S (Set): Aktion einschalten, bleibt aktiv
- R (Reset): Aktion ausschalten

## Aktive Schritte
Der aktive Schritt wird im TIA Portal farblich hervorgehoben – ideal für Inbetriebnahme und Fehlersuche.

## Parallelzweige
Mehrere Zweige können gleichzeitig aktiv sein (Simultanverzweigung), z.B. wenn zwei Achsen gleichzeitig verfahren.

## Praxishinweis
In der Schweizer Industrie (Pharma, Lebensmittel, Verpackung) sind Ablaufsteuerungen sehr häufig. SIMATIC GRAPH ist das entsprechende Tool im TIA Portal.`},{id:"tia-portal",titel:"TIA Portal Grundlagen",inhalt:`TIA Portal (Totally Integrated Automation Portal) ist die zentrale Softwareumgebung von Siemens für die Programmierung, Konfiguration und Diagnose von Automatisierungsanlagen.

## Projektstruktur im TIA Portal
Ein TIA-Projekt enthält:
- Geräte & Netzwerke: Hardware-Konfiguration der SPS und I/O
- Programmblöcke: Anwenderprogramm
- PLC-Variablen: Adressierung aller Signale
- Technologieobjekte: Achsen, Regler etc.

## Wichtige Programmbausteine

### OB (Organisationsbausteine)
- OB1: Hauptprogramm (zyklisch aufgerufen)
- OB30–OB38: Zeitgesteuert (z.B. alle 100 ms)
- OB100: Anlauforganisationsbaustein (einmalig beim Start)
- OB80, OB82...: Fehler-OBs

### FC (Funktionen)
- Haben kein statisches Gedächtnis
- Werden mit aktuellen Parametern aufgerufen
- Beispiel: FC_Motorsteuerung

### FB (Funktionsbausteine)
- Haben statisches Gedächtnis (Instanz-Datenbaustein)
- Speichern Zustände zwischen Aufrufen
- Beispiel: FB_Ventilsteuerung mit DB1

### DB (Datenbausteine)
- Globale DB: Allen Bausteinen zugänglich
- Instanz-DB: Gehört zu einem FB

## Hardware-Konfiguration
1. CPU auswählen (z.B. CPU 1515-2 PN)
2. I/O-Baugruppen hinzufügen
3. Adressen zuweisen
4. In SPS laden

## Online-Betrieb und Diagnose
- Online gehen: Verbindung zur SPS herstellen
- Signalzustände beobachten (Monitoring)
- Variable forcen (für Tests)
- Diagnosepuffer auslesen (Fehlerliste)

## Upload vs. Download
- Download: PC → SPS (Programm übertragen)
- Upload: SPS → PC (Programm sichern)`}]},{id:"pneumatik",titel:"Pneumatik & Hydraulik",icon:"💨",farbe:"cyan",beschreibung:"Druckluft, Wegeventile, Zylinder, Hydraulik-Grundlagen",lektionen:[{id:"pneumatik-grundlagen",diagramId:"frl",titel:"Grundlagen der Pneumatik",inhalt:`Pneumatik nutzt Druckluft als Energieträger zur Erzeugung von Kräften und Bewegungen. In der Schweizer Fertigungs- und Automatisierungsindustrie ist Pneumatik unverzichtbar.

## Physikalische Grundlagen

### Druck
p = F / A

- p = Druck [Pa] oder [bar]
- F = Kraft [N]
- A = Fläche [m²]

Umrechnungen:
- 1 bar = 100 000 Pa = 100 kPa
- 1 bar ≈ 1 kgf/cm²

Betriebsdruck in der Pneumatik: typisch 6–8 bar

### Boyles Gesetz (isotherm)
p1 × V1 = p2 × V2
(bei konstanter Temperatur)

## Druckluft-Aufbereitung (Wartungseinheit FRL)
Filter → Regler → Öler (F-R-L-Einheit)

1. Filter: Entfernt Schmutz, Wasser, Öl
2. Druckregler (Manoreduktionsventil): Stellt Arbeitsdruck ein (z.B. 6 bar)
3. Öler: Dosiert Schmieröl für ältere Pneumatikkomponenten (moderne Systeme oft ölfrei)

## Leitungsberechnung
Zu kleine Leitungen → Druckverlust, langsamere Aktuatoren
Faustregel: v_Luft ≤ 15 m/s in Leitungen

## Energieeinsparung
Druckluft ist teuer! 1 m³ Druckluft kostet ca. 2–3 Rappen in der Schweiz.
Massnahmen:
- Leckverluste minimieren (akustische Lecksuche)
- Betriebsdruck nur so hoch wie nötig
- Abschaltung bei Stillstand`},{id:"ventile",titel:"Pneumatische Ventile",inhalt:`Wegeventile steuern die Richtung des Druckluftstroms und damit die Bewegungsrichtung und -position von Zylindern und Motoren.

## Ventilbezeichnung (Wege/Stellungen)
Format: Wege / Normalstellungen

Beispiele:
- 3/2-Wegeventil: 3 Anschlüsse, 2 Schaltstellungen
- 4/2-Wegeventil: 4 Anschlüsse, 2 Schaltstellungen
- 5/2-Wegeventil: 5 Anschlüsse, 2 Schaltstellungen
- 5/3-Wegeventil: 5 Anschlüsse, 3 Schaltstellungen (Mittelstellung!)

## Anschlussbezeichnungen (ISO 5599)
- 1: Druckluft (P)
- 2, 4: Arbeitsanschlüsse (A, B)
- 3, 5: Entlüftung (R, S)
- 12, 14: Steueranschlüsse (Pilot)

## 5/2-Wegeventil (am häufigsten)
Schaltzustand 1: 1→2 offen, 4→5 offen (Zylinder fährt aus)
Schaltzustand 2: 1→4 offen, 2→3 offen (Zylinder fährt ein)

## Betätigung von Ventilen
- Elektromagnetisch (Magnetventil/Solenoid): 24 V DC, schnell, fernsteuerbar → Standard in SPS-Anlagen
- Mechanisch: Endschalter, Roller
- Manuell: Hebel, Druckknopf
- Pneumatisch: Vorsteuerventil

## Sperrventile
- Rückschlagventil: Strömung nur in eine Richtung
- Drosselrückschlagventil: Drosselt in einer Richtung, freier Durchgang in andere Richtung → Geschwindigkeitsregelung von Zylindern

## Druckventile
- Druckbegrenzungsventil: Schutzt System vor Überdruck
- Druckregelventil: Hält Ausgangsdruck konstant
- Drucksequenzventil: Schaltet bei Druckanstieg`},{id:"zylinder",diagramId:"zylinder",titel:"Pneumatische Zylinder",inhalt:`Pneumatische Zylinder wandeln Druckluftenergie in eine geradlinige Bewegung um. Sie sind die häufigsten Aktoren in der Automatisierungstechnik.

## Einfachwirkender Zylinder (Single Acting)
- Druckluft nur auf einer Seite
- Rückstellung durch Federkraft
- Anschlüsse: 1 Druckluft + 1 Entlüftung
- Einsatz: Klemmvorrichtungen, Hebebühnen (sicherer Grundzustand)

## Doppeltwirkender Zylinder (Double Acting)
- Druckluft auf beiden Seiten (Anschluss 2 und 4)
- Ausfahren: Druck auf Seite A
- Einfahren: Druck auf Seite B
- Höhere Kräfte in beiden Richtungen
- Standard in der Industrie

## Kraftberechnung
F = p × A × η

- F = Kraft [N]
- p = Druck [Pa oder N/m²]
- A = Kolbenfläche [m²] = π × d² / 4
- η = Wirkungsgrad (ca. 0,85–0,95)

Beispiel: d = 63 mm, p = 6 bar
A = π × 0,063² / 4 = 0,00312 m²
F = 600 000 × 0,00312 × 0,9 = 1685 N ≈ 172 kgf

## Wichtige Bauformen
- Kompaktzylinder: kurzer Hub, wenig Bauraum
- Führungszylinder: verhindert Verdrehung
- Schwenkzylinder: Drehbewegung (z.B. Greifer)
- Rodless Cylinder: Kolben ohne sichtbare Kolbenstange
- Tandemzylinder: Doppelte Kraft, gleicher Durchmesser

## Endlagendämpfung
Zylinder haben einstellbare pneumatische Dämpfer am Hubende, um harte Aufschläge zu vermeiden und die Lebensdauer zu erhöhen.

## Positionsmessung
- Reed-Kontakte: Magnetischer Endschalter aussen am Zylinder
- Analoges Wegmesssystem: Kontinuierliche Position (Potentiometer, Linearpotentiometer)`},{id:"hydraulik",titel:"Hydraulik Grundlagen",inhalt:`Hydraulik nutzt Flüssigkeit (Hydrauliköl) als Energieträger und ermöglicht deutlich höhere Kräfte als Pneumatik bei kompakten Abmessungen.

## Pascalsches Prinzip
Druck, der auf eine eingeschlossene Flüssigkeit ausgeübt wird, pflanzt sich gleichmässig in alle Richtungen fort.

p = F1/A1 = F2/A2

Hydraulische Kraftverstärkung:
F2 = F1 × (A2/A1)

Beispiel: Hydraulikpresse
A1 = 1 cm², A2 = 100 cm², F1 = 100 N
F2 = 100 × (100/1) = 10 000 N = 1 Tonne!

## Vergleich Pneumatik vs. Hydraulik

| Merkmal         | Pneumatik       | Hydraulik        |
|-----------------|-----------------|------------------|
| Druck           | 6–10 bar        | 100–350 bar      |
| Kräfte          | bis ca. 50 kN   | bis mehrere MN   |
| Geschwindigkeit | sehr schnell    | langsamer        |
| Positionierung  | schwierig       | gut möglich      |
| Leckage         | unkritisch (Luft)| Umweltproblem    |
| Wartung         | einfach         | aufwendig        |

## Hydraulische Komponenten
- Hydraulikpumpe: Erzeugt Volumenstrom (Zahnradpumpe, Kolbenpumpe)
- Hydraulikzylinder: Linear-Aktor (sehr hohe Kräfte)
- Hydraulikmotor: Drehbewegung
- Proportionalventil: Stufenlose Regelung von Druck/Strom
- Hydraulikspeicher: Druckspeicher (Blase, Kolben)
- Wärmetauscher: Ölkühlung

## Sicherheit
Hydrauliksysteme stehen unter sehr hohem Druck! Niemals auf Leckagen zeigen (Ölstrahl kann Haut durchdringen). Anlage immer drucklos schalten vor Wartungsarbeiten. PSA: Schutzbrille, Handschuhe obligatorisch!`}]},{id:"antriebstechnik",titel:"Antriebstechnik",icon:"⚙️",farbe:"orange",beschreibung:"Elektromotoren, Frequenzumrichter, Getriebe, Servosysteme",lektionen:[{id:"motoren",diagramId:"sterndreieck",titel:"Elektromotoren",inhalt:`Elektromotoren sind die wichtigsten Aktoren in der Automatisierungstechnik. Sie wandeln elektrische Energie in mechanische Bewegung um.

## Drehstrom-Asynchronmotor (AM)
Der Asynchronmotor ist der Standardmotor in der Industrie. Er ist robust, wartungsarm und günstig.

Funktionsprinzip:
- Drehstrom erzeugt ein rotierendes Magnetfeld im Stator
- Das Magnetfeld induziert Ströme im Rotor (Kurzschlussläufer)
- Rotor wird mitgenommen (mit Schlupf: n_Rotor < n_Magnetfeld)

Synchrondrehzahl: n_s = 60 × f / p
- f = Frequenz [Hz]
- p = Polpaarzahl
- Bei 50 Hz, p=2: n_s = 60 × 50 / 2 = 1500 U/min
- Tatsächliche Drehzahl ca. 1450 U/min (3,3% Schlupf)

Nenngrössen auf dem Typenschild:
- P_N = Nennleistung [kW]
- n_N = Nenndrehzahl [U/min]
- M_N = Nennmoment [Nm]  → M_N = P_N × 9550 / n_N
- η_N = Wirkungsgrad (IE3-Klasse > 90%)
- U_N = Nennspannung (400 V Δ oder 690 V Y)

## Schaltung: Stern-Dreieck
Anlauf im Stern (Y): Spannung am Motor = 230 V, geringerer Anlaufstrom
Betrieb im Dreieck (Δ): Spannung am Motor = 400 V, volle Leistung
Umschaltung nach ca. 3–5 Sekunden

## Motorschutz
- Motorschutzschalter: Thermischer Schutz (Bimetall) + magnetischer Kurzschlussschutz
- Kaltleiterfühler (PTC): Temperaturüberwachung der Wicklung
- Thermistor: Meldet Übertemperatur an SPS`},{id:"frequenzumrichter",diagramId:"fu",titel:"Frequenzumrichter (FU)",inhalt:`Der Frequenzumrichter (auch VFD – Variable Frequency Drive oder Umrichter) ermöglicht die stufenlose Drehzahlregelung von Asynchronmotoren und spart erheblich Energie.

## Funktionsprinzip
1. Gleichrichter: AC (400 V) → DC (Zwischenkreis ca. 560 V)
2. Zwischenkreis: Kondensatoren glätten die Spannung
3. Wechselrichter (Inverter): DC → AC mit variabler Frequenz und Spannung (IGBT-Transistoren, PWM)

## Vorteile des Frequenzumrichters
- Stufenlose Drehzahlregelung (0 bis über Nenndrehzahl)
- Sanftanlauf: Kein hoher Anlaufstrom (statt 6×I_N nur ca. 1,5×I_N)
- Energiesparen: Lüfter/Pumpen: P ~ n³ → halbierte Drehzahl = 1/8 Leistung!
- Motorschutzfunktionen integriert
- Bremsenergie rückspeisbar (regenerativ)

## Wichtige Parameter
- Ausgangsfrequenz f: 0–50 Hz (0–100% Drehzahl)
- Hochlaufzeit (Rampe): Zeit von 0 auf Nenndrehzahl (z.B. 5 s)
- Tieflaufzeit: Zeit von Nenndrehzahl auf 0
- Boostspannung: Erhöht Drehmoment bei niedriger Drehzahl

## Steuermethoden
- U/f-Steuerung: Spannung proportional zur Frequenz, einfach, robust
- Vektorregelung (FOC): Hohe Dynamik, gutes Drehmoment auch bei Stillstand
- Sensorless Vector: Ohne Drehgeber, guter Kompromiss

## Siemens SINAMICS
- G120: Standard-Umrichter für Pumpen, Lüfter, Förderbänder
- S120: Servo-/Mehrachsantrieb für CNC und Robotic
- V20: Einfacher Basisumrichter

## EMV-Massnahmen
Frequenzumrichter erzeugen elektromagnetische Störungen (PWM)!
- Abgeschirmte Motorleitungen verwenden
- EMV-Filter einbauen
- Erdung sorgfältig ausführen`},{id:"getriebe",titel:"Getriebe und Kupplungen",inhalt:`Getriebe passen Drehzahl und Drehmoment zwischen Motor und Arbeitsmaschine an. Kupplungen verbinden Wellen und können Stösse dämpfen.

## Übersetzungsverhältnis
i = n_1 / n_2 = M_2 / M_1 = z_2 / z_1

- i > 1: Untersetzung (Drehzahl sinkt, Drehmoment steigt)
- i < 1: Übersetzung (Drehzahl steigt, Drehmoment sinkt)
- z = Zähnezahl

Beispiel: Motor n_1 = 1450 U/min, i = 10
Abtriebsdrehzahl n_2 = 1450 / 10 = 145 U/min
Abtriebsmoment M_2 = M_1 × i × η = 10 Nm × 10 × 0,95 = 95 Nm

## Getriebetypen

### Stirnradgetriebe
- Einfach und günstig
- Hoher Wirkungsgrad (η ≈ 0,98 pro Stufe)
- Gerade oder schräge Verzahnung

### Schneckengetriebe
- Grosse Übersetzung in einer Stufe (i = 5–100)
- Selbsthemmend (kein Rücktreiben möglich)
- Schlechterer Wirkungsgrad (η ≈ 0,5–0,9)
- Kompakte Bauform (90° Achswinkel)

### Planetengetriebe
- Sehr kompakt bei hohem Übersetzungsverhältnis
- Hoher Wirkungsgrad
- Häufig in Servoantrieben

## Kupplungstypen

### Starre Kupplung
Keine Dämpfung, hohe Präzision, kein Winkelversatz erlaubt

### Elastische Kupplung (Klauenkupplung)
Gummiring dämpft Stösse, toleriert geringen Versatz

### Oldham-Kupplung
Toleriert axialen und seitlichen Versatz gut

### Magnetkupplung
Berührungslose Kraftübertragung durch Magneten (z.B. in Pumpen)

### Sicherheitskupplung
Trennt bei Überlast (Rutschkupplung) – schützt Maschine`},{id:"servo",titel:"Servo- und Schrittmotoren",inhalt:`Servo- und Schrittmotoren ermöglichen präzise Positionierung und werden in CNC-Maschinen, Robotern und Handling-Systemen eingesetzt.

## Schrittmotor (Stepper Motor)
Bewegt sich in diskreten Schritten (Winkelinkrementen).

Typische Schrittwinkel:
- 1,8° pro Schritt → 200 Schritte / Umdrehung (Standardmotor)
- Mit Mikroschritt-Treiber: bis 1/256 Schritte → 51 200 Schritte / Umdrehung

Vorteile:
- Preisgünstig
- Kein Encoder nötig (open-loop)
- Einfache Steuerung

Nachteile:
- Verliert Schritte bei Überlast
- Verliert Drehmoment bei hoher Drehzahl
- Hoher Energieverbrauch im Stillstand

Anwendung: 3D-Drucker, CNC-Graviermaschinen, Dosiereinheiten

## Servomotor
Permanentmagnet-Synchronmotor mit Drehgeber (Encoder), geregelt durch Servoumrichter.

Regelprinzip (Kaskadenregelung):
Lageregeler → Drehzahlregler → Stromregler → Motor

Vorteile:
- Hochdynamisch (schnelle Positionierung)
- Hohes Drehmoment auch bei niedriger Drehzahl
- Exakte Positionierung (Positioniergenauigkeit < 0,01°)
- Energieeffizient (nur Energie wenn Drehmoment gefordert)

Komponenten:
- Servomotor mit Encoder (Absolutwertgeber oder Inkrementalgeber)
- Servoverstärker/Regler (z.B. Siemens SINAMICS S120, Beckhoff AX5000)

## Encoder-Typen
- Inkrementalgeber: Zählt Pulse, braucht Referenzfahrt
- Absolutwertgeber (SSI, EnDat): Kennt Position immer, kein Referenzieren nötig
- Resolver: Analog, sehr robust (Hochtemperatur, Vibration)

## Anwendungen Servosysteme
- CNC-Werkzeugmaschinen (Drehen, Fräsen)
- Industrieroboter (6-Achsen)
- Verpackungsmaschinen
- Spritzgiessmaschinen`}]},{id:"messtechnik",titel:"Messtechnik",icon:"📏",farbe:"purple",beschreibung:"Sensoren, Aktoren, Temperatur, Druck, Signalverarbeitung",lektionen:[{id:"messung-grundlagen",titel:"Grundlagen der Messtechnik",inhalt:`Messtechnik ist die Wissenschaft des Messens. Für den Automatiker ist sie entscheidend für die Erfassung von Prozessgrössen wie Temperatur, Druck, Füllstand und Durchfluss.

## Grundbegriffe

### Messbereich
Der Bereich, innerhalb dem ein Sensor zuverlässig messen kann.
Beispiel: Temperatursensor -20°C bis +200°C

### Messbereichsendwert und Anfangswert
MBE = obere Grenze, MBA = untere Grenze
Messbereichsbreite = MBE - MBA

### Auflösung
Kleinste erkennbare Änderung des Messwerts.
Beispiel: Drucktransmitter mit 0,01 bar Auflösung

### Genauigkeit / Messabweichung
Systematische Abweichung (Linearitätsfehler, Offsetfehler)
Zufällige Abweichung (Rauschen, Wiederholbarkeit)

Angabe oft in % vom Messbereichsendwert (%MBE)
Beispiel: ±0,5%MBE bei 100 bar → Fehler ±0,5 bar

### Reproduzierbarkeit (Wiederholbarkeit)
Streuung bei wiederholter Messung unter gleichen Bedingungen.

### Hysterese
Unterschiedlicher Messwert bei steigendem vs. sinkendem Eingangssignal.

## Messkette
Prozess → Aufnehmer (Sensor) → Wandler → Signal → Auswertung (SPS)

## Standardsignale in der Industrie
- 4–20 mA: Analoges Stromsignal (störsicher, Leitungsbrucherkennung bei 0 mA)
- 0–10 V: Analoges Spannungssignal (günstiger, empfindlicher für Störungen)
- 0/24 V: Digitales Signal (Grenzwertschalter)
- HART: Digitale Kommunikation über 4-20mA-Leitung
- Profibus PA, Foundation Fieldbus: Digitale Feldbussysteme`},{id:"sensoren",titel:"Sensoren und Aktoren",inhalt:`Sensoren erfassen physikalische Grössen und wandeln sie in elektrische Signale um. Aktoren bewirken physikalische Aktionen aufgrund elektrischer Signale.

## Näherungsschalter (Proximity Switches)

### Induktiver Näherungsschalter
- Erkennt metallische Objekte (ohne Berührung)
- Wirkprinzip: Wirbelstromverluste im Magnetfeld der Spule
- Schaltabstand: 1–50 mm (je nach Bauform und Material)
- Ausgang: PNP oder NPN (Transistorausgang), 24 V DC
- Anwendung: Zählen von Teilen, Endlagen von Zylindern

### Kapazitiver Näherungsschalter
- Erkennt alle Materialien (Metall, Kunststoff, Flüssigkeiten)
- Wirkprinzip: Kapazitätsänderung des elektrischen Feldes
- Empfindlichkeit einstellbar (Potentiometer)
- Anwendung: Füllstandserkennung in Tanks, Papierdetektion

### Optischer Sensor (Lichtschranke)
- Einweg-Lichtschranke: Sender und Empfänger getrennt
- Reflexions-Lichtschranke: Sender+Empfänger + Reflektor
- Tastschalter: Direktreflexion vom Objekt
- Reichweite: mm bis 100 m
- Licht: Rot, Infrarot, Laser

## Encoder / Drehgeber
- Inkrementalgeber: Ausgabe von Pulsen pro Umdrehung (z.B. 1000 PPR)
- Absolutwertgeber: Gibt absolute Position aus (12-bit = 4096 Positionen)

## Aktoren
- Magnetventil: Elektrisch geschaltetes Wegeventil
- Schütz: Leistungsschalter (Motorsteuerung)
- Proportionalventil: Stufenlose Druckluft-/Hydraulikregelung
- Heizung: Heizpatrone, Halbleiterheizelement (SSR-gesteuert)
- Alarmhorn / Signalleuchte: Optische/akustische Meldung`},{id:"temperaturmessung",diagramId:"pt100",titel:"Temperaturmessung",inhalt:`Temperatur ist eine der häufigsten Messgrössen in der Industrie. Verschiedene Messprinzipien decken unterschiedliche Temperaturbereiche ab.

## PT100 / PT1000 (Widerstandsthermometer RTD)
Funktionsprinzip: Elektrischer Widerstand von Platin ändert sich linear mit der Temperatur.

PT100: R = 100 Ω bei 0°C
PT1000: R = 1000 Ω bei 0°C

Kennlinie: R(T) = R0 × (1 + A×T + B×T²)
Vereinfacht: ΔR/°C ≈ 0,385 Ω bei PT100

Messbereich: -200°C bis +850°C
Genauigkeit: Klasse A: ±0,15°C bei 0°C, Klasse B: ±0,3°C

Anschluss:
- 2-Leiter: Einfach, Leitungswiderstand verfälscht Messung
- 3-Leiter: Kompensiert Leitungswiderstand einseitig
- 4-Leiter: Vollständige Leitungskompensation (beste Genauigkeit)

## Thermoelement (Thermocouple)
Funktionsprinzip: Seebeck-Effekt – zwei verschiedene Metalle erzeugen Thermospannung an der Messstelle.

Häufige Typen:
- Typ K (NiCr-Ni): -200°C bis 1300°C, robust, günstig (Standard)
- Typ J (Fe-CuNi): 0°C bis 700°C
- Typ T (Cu-CuNi): -200°C bis 350°C, sehr genau
- Typ S (Pt10Rh-Pt): 0°C bis 1750°C, sehr hohe Temperaturen

Thermospannung: ca. 40 µV/°C (Typ K)
Braucht Referenzstellenkompensation (Kaltstellenkompensation)

## NTC/PTC Thermistoren
- NTC (Negativer Temperaturkoeffizient): Widerstand sinkt bei Temperaturerhöhung → Motorschutzfühler
- PTC (Positiver Temperaturkoeffizient): Widerstand steigt stark an bei Übertemperatur → Sicherheitsabschaltung

## Infrarot-Pyrometer
Kontaktlose Temperaturmessung durch Wärmestrahlung
Anwendung: Metallverarbeitung, bewegte Teile, aggressive Medien`},{id:"druckmessung",titel:"Druckmessung",inhalt:`Druckmessung ist in der Pneumatik, Hydraulik und Prozessautomatisierung allgegenwärtig.

## Druckarten

### Absolutdruck
Gemessen gegenüber dem absoluten Vakuum (0 bar abs)
Verwendung: Gas- und Dampfanwendungen

### Relativdruck (Überdruck)
Gemessen gegenüber dem Atmosphärendruck (0 bar ist Umgebungsdruck)
Anzeige auf Manometern, bei Pneumatik

### Differenzdruck
Druckunterschied zwischen zwei Messpunkten
Anwendung: Durchflussmessung (Blende), Filterwächter

Umrechnung: p_abs = p_rel + p_atm (p_atm ≈ 1,013 bar)

## Messgeräte

### Rohrfedermanometer
- Mechanisch, kein Strom nötig
- Bourdon-Rohr: Ovales Rohr, das sich bei Druck begradigt
- Genauigkeit: Klasse 1 oder 2,5 (1% oder 2,5% vom Endwert)
- Anwendung: Lokale Druckanzeige (nicht für SPS)

### Drucktransmitter (elektronisch)
- Piezoelektrisch: Quarz erzeugt Ladung bei Druckänderung (dynamisch)
- Piezoresistiv: Dehnmessstreifen auf Siliziummembran (statisch + dynamisch)
- Ausgangssignal: 4–20 mA oder 0–10 V

### Druckschalter (Pressostaat)
- Schaltet digital bei eingestelltem Druck
- Einstellbar: Schaltpunkt und Hysterese

## Typische Druckbereiche
- Pneumatik: 0–16 bar
- Hydraulik: 0–400 bar (Hochdruck bis 700 bar)
- Kältetechnik: -1 bis 30 bar (Vakuum bis Überdruck)

## Auswahl eines Drucktransmitters
Kriterien: Medium, Messbereich, Genauigkeit, Temperaturbereich, Prozessanschluss, Ausgangssignal, Ex-Schutz`}]},{id:"mechanik",titel:"Mechanik",icon:"🔧",farbe:"red",beschreibung:"Maschinenelemente, Toleranzen, Kräfte, Materialkunde",lektionen:[{id:"maschinenelemente",titel:"Maschinenelemente",inhalt:`Maschinenelemente sind standardisierte Bauteile, die in Maschinen und Anlagen häufig verwendet werden. Kenntnisse darüber sind für den Automatiker bei Montage, Wartung und Instandhaltung unerlässlich.

## Schrauben und Verbindungen

### Schraubentypen
- Zylinderschraube (DIN 912): Innensechskant, für präzise Verbindungen
- Sechskantschraube (DIN 933/931): Aussenantrieb, universell
- Senkschraube (DIN 7991): Bündig mit Oberfläche
- Gewindestift (DIN 913): Befestigung ohne Kopf

### Festigkeitsklassen
Format: X.Y → Zugfestigkeit = X×100 MPa, Streckgrenze = X×Y×10 MPa
- 8.8: 800 MPa Zugfestigkeit (Standard maschinenbau)
- 10.9: 1000 MPa (hochbeansprucht)
- 12.9: 1200 MPa (sehr hoch, Schraubenköpfe oft schwarz)

### Anzugsdrehmoment
Muss eingehalten werden! Zu fest = Bruch/Streckung, zu locker = Lockerung
Werkzeug: Drehmomentschlüssel

## Wälzlager

### Kugellager (Rillenkugellager DIN 625)
- Radiale und geringe axiale Lasten
- Niedrige Reibung, hohe Drehzahl
- Kennzeichnung: 6204 → Kugellager, Baureihe 2, d=20mm

### Zylinderrollenlager
- Hohe radiale Lasten
- Kein Ausgleich von Winkelfehlern

### Kegelrollenlager
- Hohe radiale und axiale Lasten
- Immer paarweise einbauen

### Einbau und Montage
Lager niemals mit Hammer einschlagen! Induktives Lagerheizgerät oder hydraulische Presse verwenden.

## Federn
- Schraubendruckfeder: Aufnahme von Druckkräften
- Schraubenzugfeder: Aufnahme von Zugkräften
- Tellerfeder: Hohe Kraft auf kleinem Raum

Hookesches Gesetz: F = c × x  (c = Federkonstante [N/mm])`},{id:"toleranzen",titel:"Toleranzen und Passungen",inhalt:`Toleranzen definieren die zulässige Abweichung von Nennmassen. Passungen beschreiben das Spiel oder die Überdeckung zwischen zusammengebauten Teilen.

## ISO-Toleranzsystem (DIN ISO 286)

### Toleranzfeld
Definiert durch:
- Grundabmass (Position relativ zu Nulllinie): Buchstabe
  - Grossbuchstaben: Bohrung (z.B. H, F, G)
  - Kleinbuchstaben: Welle (z.B. h, f, g, k, n, p)
- Toleranzgrad (Breite): Zahl IT1–IT18 (IT5–IT11 üblich im Maschinenbau)

### Häufige Toleranzfelder
Bohrung:
- H7: Enge Toleranz, Standard-Passbohrung
- H8, H9: Etwas weiter

Welle:
- h6: Enge Toleranz (Schiebesitz)
- f7: Spielpassung (Gleitlager)
- k6: Leichte Übergangspassung
- p6: Leichte Presspassung

## Passungsarten

### Spielpassung
Bohrung immer grösser als Welle → Spiel vorhanden
Beispiel: H7/f7, H8/e8
Anwendung: Gleitlager, leicht demontierbare Verbindungen

### Übergangspassung
Kann Spiel oder Überdeckung haben → ungewiss
Beispiel: H7/k6, H7/m6
Anwendung: Wälzlager-Einbau, Zentrierverbindungen

### Presspassung (Überdeckungspassung)
Welle immer grösser als Bohrung → Fügemuss mit Kraft/Wärme
Beispiel: H7/p6, H7/s6
Anwendung: Permanente, hochbeanspruchte Verbindungen (Zahnräder auf Wellen)

## Messen und Prüfen
- Schieblehre (Messschieber): ±0,05 mm Genauigkeit
- Mikrometerschraube: ±0,01 mm Genauigkeit
- Rachenlehren / Grenzlehrdorne: schnelle Gut/Ausschuss-Prüfung
- Messuhr: Formabweichungen, Rundlauffehler`},{id:"kraefte",titel:"Kräfte und Momente",inhalt:`Die Mechanik beschreibt das Verhalten von Körpern unter dem Einfluss von Kräften und Momenten. Für die Auslegung von Maschinen und Komponenten ist dieses Wissen grundlegend.

## Newtonsche Gesetze

### 1. Gesetz (Trägheitsgesetz)
Ein Körper bleibt in Ruhe oder gleichförmiger Bewegung, solange keine Kraft wirkt.

### 2. Gesetz (Aktionsgesetz)
F = m × a
- F = Kraft [N]
- m = Masse [kg]
- a = Beschleunigung [m/s²]

### 3. Gesetz (Reaktionsgesetz)
Actio = Reactio: Jede Kraft erzeugt eine gleich grosse, entgegengesetzte Gegenkraft.

## Gewichtskraft
G = m × g  (g = 9,81 m/s² ≈ 10 m/s²)
Beispiel: m = 50 kg → G = 50 × 9,81 = 490,5 N

## Drehmoment (Moment)
M = F × r (senkrecht)
- M = Drehmoment [Nm]
- F = Kraft [N]
- r = Hebelarm [m]

Beispiel: Schrauben mit F = 100 N, Schlüssellänge r = 0,2 m
M = 100 × 0,2 = 20 Nm

## Hebelgesetz
F1 × l1 = F2 × l2

Anwendung: Einachsige Gleichgewichtsbedingung für Maschinenteile

## Reibung
Haftreibung: F_R = µ_H × F_N (vor der Bewegung)
Gleitreibung: F_R = µ_G × F_N (während der Bewegung)
µ = Reibungskoeffizient (Stahl auf Stahl trocken: µ ≈ 0,15)

## Maschinendynamik
Leistung: P = F × v = M × ω
- v = Geschwindigkeit [m/s]
- ω = Winkelgeschwindigkeit [rad/s] = 2π × n/60

Wirkungsgrad: η = P_ab / P_zu
P_ab = P_zu × η  (immer < P_zu durch Verluste)`},{id:"materialien",titel:"Materialkunde und Werkzeuge",inhalt:`Kenntnisse über Werkstoffe helfen dem Automatiker bei der Auswahl geeigneter Materialien und beim Erkennen von Verschleiss und Schäden.

## Wichtige Werkstoffe

### Baustahl (S235, S355)
- S235: Streckgrenze ≥ 235 MPa, gut schweissbar
- S355: Streckgrenze ≥ 355 MPa, höhere Festigkeit
- Anwendung: Maschinengestelle, Halterungen, Konsolen

### Vergütungsstahl (42CrMo4)
- Hohe Zugfestigkeit (bis 1100 MPa) nach Vergüten
- Wellen, Zahnräder, hochbelastete Maschinenteile

### Edelstahl (1.4301 / V2A, 1.4404 / V4A)
- 1.4301 (AISI 304): Lebensmittel, allgemein korrosiv
- 1.4404 (AISI 316L): Chemie, Meeresklima (Molybdänzusatz)
- Anwendung: Lebensmittelindustrie, Pharmaindustrie, Aussen

### Aluminium (AlMgSi1 / EN AW-6082)
- Leicht (ρ = 2,7 g/cm³ vs. Stahl 7,85 g/cm³)
- Gut bearbeitbar, korrosionsbeständig
- Anwendung: Gehäuse, Halterungen, Profillsysteme

### Kunststoffe
- PA (Polyamid): Gleitlager, Zahnräder (gut Selbstschmierend)
- POM (Delrin): Präzisionsteile, gute Masshaltigkeit
- PTFE (Teflon): Chemisch resistent, niedrigster Reibwert

## Wichtige Werkzeuge

### Messwerkzeuge
- Messschieber/Schieblehre: Längen, Breiten, Tiefen (±0,05 mm)
- Mikrometerschraube: Aussen-/Innen-/Tiefenmessung (±0,01 mm)
- Messuhr: Formtoleranzen, Rundlauf (±0,01 mm)
- Bügelmessschraube: Wanddicken

### Handwerkzeuge
- Drehmomentschlüssel: Vorgeschriebene Anzugsmomente einhalten
- Ringmaulschlüssel, Steckschlüssel
- Inbusschlüssel (Imbus): Zylinderschrauben
- Torx: Sternförmiger Antrieb`}]},{id:"digitaltechnik",titel:"Digitaltechnik",icon:"💻",farbe:"indigo",beschreibung:"Zahlensysteme, Logikgatter, Boolesche Algebra, Flipflops",lektionen:[{id:"zahlensysteme",titel:"Zahlensysteme",inhalt:`In der Digitaltechnik und SPS-Programmierung arbeitet man mit verschiedenen Zahlensystemen. Das Verständnis von Binär, Hexadezimal und BCD ist für jeden Automatiker wichtig.

## Dezimalsystem (Basis 10)
Stellenwerte: ..., 1000, 100, 10, 1
Ziffern: 0–9

## Binärsystem (Basis 2)
Stellenwerte: ..., 8, 4, 2, 1 (Potenzen von 2: 2³, 2², 2¹, 2⁰)
Ziffern: 0, 1 (entspricht Aus/Ein, LOW/HIGH, Falsch/Wahr)

Umrechnung Dezimal → Binär (Beispiel: 13):
13 ÷ 2 = 6 Rest 1
6 ÷ 2 = 3 Rest 0
3 ÷ 2 = 1 Rest 1
1 ÷ 2 = 0 Rest 1
Ergebnis (von unten nach oben): 1101₂

Prüfung: 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13 ✓

## Hexadezimalsystem (Basis 16)
Ziffern: 0–9 und A(10), B(11), C(12), D(13), E(14), F(15)
Stellenwerte: 4096, 256, 16, 1

Beispiel: 0xFF = 15×16 + 15 = 255

4 Binärstellen entsprechen 1 Hexadezimalstelle:
0000=0, 0001=1, ..., 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F

Beispiel: 1101 0110₂ = D6₁₆ = 214₁₀

## Datengrössen
- 1 Bit: Kleinste Einheit (0 oder 1)
- 1 Byte = 8 Bit: Wertebereich 0–255 (00–FF)
- 1 Word = 16 Bit: Wertebereich 0–65535 (0000–FFFF)
- 1 DWord = 32 Bit
- 1 kB = 1024 Byte, 1 MB = 1024 kB

## In der SPS
- Eingangsbyte IB0: Enthält Bits I0.0 bis I0.7
- Merkerwort MW10: Enthält MB10 und MB11 (2 Bytes = 16 Bits)
- Reale Zahlen werden als REAL (32-Bit IEEE 754) gespeichert`},{id:"logikgatter",diagramId:"logik",titel:"Logikgatter",inhalt:`Logikgatter sind die Grundbausteine der Digitaltechnik. Sie verarbeiten binäre Signale und liefern einen binären Ausgang.

## Grundgatter

### AND-Gatter (UND)
Ausgang = 1 nur wenn ALLE Eingänge = 1

Wahrheitstabelle (2 Eingänge):
A=0, B=0 → Y=0
A=0, B=1 → Y=0
A=1, B=0 → Y=0
A=1, B=1 → Y=1

Boolesche Formel: Y = A AND B = A · B

### OR-Gatter (ODER)
Ausgang = 1 wenn MINDESTENS EIN Eingang = 1

A=0, B=0 → Y=0
A=0, B=1 → Y=1
A=1, B=0 → Y=1
A=1, B=1 → Y=1

Formel: Y = A OR B = A + B

### NOT-Gatter (NICHT)
Ausgang = Invertierter Eingang (Negation)

A=0 → Y=1
A=1 → Y=0

Formel: Y = NOT A = Ā

### NAND-Gatter (Nicht-UND)
Ausgang = Negiertes AND
Y = NOT(A AND B) = Ā·B̄

NAND ist universell: Alle anderen Gatter können nur mit NAND gebaut werden!

### NOR-Gatter (Nicht-ODER)
Y = NOT(A OR B)

NOR ist ebenfalls universell!

### XOR-Gatter (Exklusives ODER)
Ausgang = 1 wenn Eingänge VERSCHIEDEN sind

A=0, B=0 → Y=0
A=0, B=1 → Y=1
A=1, B=0 → Y=1
A=1, B=1 → Y=0

Anwendung: Paritätsprüfung, Halbaddierer

## Anwendung in der SPS
In KOP entsprechen:
- Schliesser in Reihe = AND
- Schliesser parallel = OR
- Öffner = NOT

In FUP werden direkt AND/OR/NOT-Gatter gezeichnet.`},{id:"boolesche-algebra",titel:"Boolesche Algebra",inhalt:`Die Boolesche Algebra ermöglicht die mathematische Beschreibung und Vereinfachung logischer Schaltungen.

## Grundregeln

### Identitätsgesetze
A AND 1 = A
A OR 0 = A

### Nullgesetze
A AND 0 = 0
A OR 1 = 1

### Idempotenzgesetze
A AND A = A
A OR A = A

### Komplementgesetze
A AND Ā = 0  (Variable UND ihre Negation = immer 0)
A OR Ā = 1   (Variable ODER ihre Negation = immer 1)

### Kommutativgesetze
A AND B = B AND A
A OR B = B OR A

### Assoziativgesetze
(A AND B) AND C = A AND (B AND C)
(A OR B) OR C = A OR (B OR C)

### Distributivgesetze
A AND (B OR C) = (A AND B) OR (A AND C)
A OR (B AND C) = (A OR B) AND (A OR C)

### De Morgansche Gesetze (sehr wichtig!)
NOT(A AND B) = NOT A OR NOT B
NOT(A OR B) = NOT A AND NOT B

## Vereinfachungsbeispiel
Y = A·B + A·B̄
  = A·(B + B̄)    (Distributivgesetz)
  = A·1            (Komplementgesetz)
  = A

## Karnaugh-Veitch-Diagramm (KV-Diagramm)
Grafische Methode zur Vereinfachung boolescher Funktionen.
Benachbarte Felder mit 1en werden zu Gruppen zusammengefasst (Gruppen: 1, 2, 4, 8, ...).
Je grösser die Gruppe, desto einfacher der Term.`},{id:"flipflops",titel:"Flipflops und Schaltwerke",inhalt:`Flipflops sind bistabile Kippstufen – sie können zwei stabile Zustände annehmen und sind die Grundbausteine von Speichern und Schaltwerken.

## RS-Flipflop (Set-Reset)
Eingänge: S (Set), R (Reset)
Ausgang: Q und Q̄

S=1, R=0 → Q=1 (gesetzt)
S=0, R=1 → Q=0 (rückgesetzt)
S=0, R=0 → Q=Q (Zustand gespeichert)
S=1, R=1 → Verboten! (undefiniert)

Anwendung in der SPS: SET/RESET-Spulen im KOP entsprechen einem RS-Flipflop.

## D-Flipflop (Data/Delay)
Eingang: D (Daten), Takt CLK
Bei steigender Taktflanke wird D-Eingang in Q übernommen.

Anwendung: Datenregister, Schieberegister, Zähler

## JK-Flipflop (Jack-Kilby)
J=0, K=0 → Q unverändert
J=1, K=0 → Q=1 (Set)
J=0, K=1 → Q=0 (Reset)
J=1, K=1 → Q togglet (wechselt Zustand)

## Schaltwerk vs. Schaltnetz
- Schaltnetz: Ausgang hängt nur vom aktuellen Eingang ab (kombinatorisch)
- Schaltwerk: Ausgang hängt von aktuellem Eingang UND gespeichertem Zustand ab (sequenziell)

SPS-Ablaufsteuerungen sind Schaltwerke!

## Register und Zähler
- Schieberegister: Bits werden bei jedem Takt eine Position weitergeschoben
- Binärzähler: Zählt Taktimpulse (4-Bit-Zähler: 0–15)
- Dezimalzähler (BCD): 0–9, dann Übertrag

## Praxisrelevanz
Flipflops und Schaltwerke sind die theoretische Grundlage für:
- SPS-Merker und gesetzte Ausgänge
- Zeitglieder und Zähler
- Busprotokolle (RS232, SPI, I2C)`}]},{id:"arbeitssicherheit",titel:"Arbeitssicherheit",icon:"🦺",farbe:"yellow",beschreibung:"NIN, SUVA, Schutzklassen, Erste Hilfe, PSA, Brandschutz",lektionen:[{id:"nin-normen",titel:"NIN und SUVA – Schweizer Normen",inhalt:`In der Schweiz regeln klare Normen und Vorschriften die elektrische Sicherheit. Diese zu kennen ist für jeden Automatiker Pflicht.

## NIN – Niederspannungs-Installations-Norm
Die NIN (Ausgabe 2020) ist die Schweizer Norm für elektrische Niederspannungsinstallationen. Sie basiert auf IEC 60364 und enthält schweizspezifische Ergänzungen.

Herausgeber: Electrosuisse (ehemals SEV)
Verbindlichkeit: In der Schweiz gesetzlich vorgeschrieben

Wichtige Kapitel:
- NIN 4: Schutz gegen elektrischen Schlag (Basisschutz, Fehlerschutz)
- NIN 5: Auswahl und Errichtung von Betriebsmitteln
- NIN 7: Räume und Anlagen besonderer Art (z.B. Bäder, Medizin)

## SUVA – Unfallverhütungsvorschriften
Die SUVA ist die Schweizerische Unfallversicherungsanstalt und gibt Vorschriften zur Unfallverhütung aus.

Wichtige Dokumente:
- SUVA 2153: Elektrische Gefährdungen am Arbeitsplatz
- BGV A3 (deutsch): Elektrische Anlagen und Betriebsmittel

## 5 Sicherheitsregeln (Freischalten)
Vor Arbeiten an elektrischen Anlagen MÜSSEN folgende Schritte in dieser Reihenfolge durchgeführt werden:

1. Freischalten (Anlage stromlos schalten)
2. Gegen Wiedereinschalten sichern (Schloss, Schild)
3. Spannungsfreiheit feststellen (Spannungsprüfer)
4. Erden und Kurzschliessen (Hochspannung)
5. Benachbarte spannungsführende Teile abdecken/abschranken

Diese Regeln können Leben retten!

## Schutzklassen
- Schutzklasse I: Schutzleiter (geerdet, normaler Schutzkontaktstecker)
- Schutzklasse II: Schutzisolierung (doppelte Isolierung, kein Schutzleiter)
- Schutzklasse III: Schutzkleinspannung (SELV ≤ 50 V AC / 120 V DC)`},{id:"schutz-erdung",diagramId:"pe_pruefung",titel:"Schutzmassnähmen und Erdung",inhalt:`Schutzmassnähmen verhindern den elektrischen Schlag durch automatische Abschaltung oder durch Isolation vor gefährlichen Spannungen.

## Basisschutz (Direktberührungsschutz)
Schutz bei normalem Betrieb:
- Isolierung spannungsführender Teile (Isolierung nach EN/IEC)
- Abdeckungen und Gehäuse (IP-Schutzgrad)
- Abstände (Kriechstrecken und Luftstrecken)

## IP-Schutzgrad (IEC 60529)
Format: IP XY
- X = Schutz gegen feste Fremdkörper (0–6)
- Y = Schutz gegen Wasser (0–9)

Häufige IP-Grade:
- IP20: Schutz vor Berührung, kein Schutz vor Wasser (Schaltschrank innen)
- IP44: Spritzwasserschutz (Schaltschrank aussen)
- IP54: Staubdicht, Spritzwasser (Feldgeräte)
- IP67: Staubdicht, Kurzzeit-Eintauchen bis 1m/30min

## Fehlerschutz (indirekter Berührungsschutz)
Schutz bei Isolationsfehler:

### Schutzleiter (PE – Protective Earth)
Gehäuse werden mit Schutzleiter (grün-gelb) geerdet.
Bei Isolationsfehler → Fehlerstrom fliesst über Schutzleiter → Sicherung löst aus.

### FI-Schutzschalter (RCD – Residual Current Device)
Misst Differenz zwischen L und N.
Summenstrom ≠ 0 → Fehlerstrom → Auslösung in < 40 ms
Auslösestrom: 30 mA (Personenschutz), 300 mA (Brandschutz)

In der Industrie: FI/LS-Schalter (kombinierter FI + Leitungsschutzschalter)

## Erdung im Schaltschrank
- PE-Sammelpunkt (Erdungsschiene): Alle Gehäuse, Kabelschirme
- Schutzleiter (grün-gelb): Mindestquerschnitt = Querschnitt Aussenleiter bis 16mm²
- EMV-Erdung: Flächige Verbindung (nicht dünn und lang!)

## Berührungsspannung und Körperstrom
Gefährlicher Strom: > 10 mA (Muskelkrampf), > 80 mA (Herzkammerflimmern)
Widerstand Menschenkörper: 1000–100 000 Ω (nass viel weniger!)
Gefährliche Spannung: > 50 V AC (trockene Haut), > 25 V in feuchter Umgebung`},{id:"erste-hilfe",titel:"Erste Hilfe bei Stromunfällen",inhalt:`Elektrounfälle können lebensbedrohlich sein. Schnelles, richtiges Handeln kann Leben retten. Jeder Automatiker muss die Grundmassnahmen kennen und regelmässig Erste-Hilfe-Kurse besuchen (Schweiz: alle 2 Jahre).

## Verhalten bei einem Elektrounfall

### STOPP – Selbstschutz zuerst!
Niemals die verunfallte Person direkt anfassen, wenn sie noch unter Strom steht!
Erst Anlage freischalten (Hauptschalter, Sicherung)!

Falls kein Freischalten möglich: Mit nicht leitendem Gegenstand (Holz, Kunststoff) Kontakt unterbrechen. Auf trockenem Untergrund stehen.

## LAABC-Schema (Reanimation)

L – LAGE prüfen: Umgebung sicher? (Stromgefahr gebannt?)
A – ANSPRECHEN: Person laut ansprechen, sachte schütteln
A – ALARMIEREN: Sofort Notruf 144 alarmieren (oder rufen lassen)
B – BEATMEN: Wenn keine Atmung → Atemwege freimachen, 2 Beatmungen (CPR-trainiert) oder nur Herzdruckmassage (Laie)
C – CIRCULATION (Herzdruckmassage):

Herzdruckmassage:
- 100–120 Mal pro Minute
- Drucktiefe: 5–6 cm
- Mitte des Brustkorbs
- 30 Kompressionen : 2 Beatmungen (wenn trainiert)

Bis Rettungsdienst übernimmt, nicht aufhören!

## AED – Automatischer Externer Defibrillator
In vielen Betrieben und öffentlichen Gebäuden vorhanden.
Gerät einschalten und Anweisungen befolgen – AED gibt Anweisungen, kann nicht falsch angewendet werden!

## Verbrennungen durch Strom
- Elektrische Verbrennung: Strom verbrennt Haut und tiefes Gewebe
- Lichtbogenverbrennung: Sehr heiss (> 10 000°C), schwerste Verletzungen
- Kühl mit Wasser (15–20°C, 10–15 min), steril abdecken

## Tetanuskrampf
Stromopfer können feststeckende Muskeln haben (Loskrampf nicht möglich).
Mögliche Sturzverletzungen beachten!`},{id:"psa-brandschutz",titel:"PSA und Brandschutz",inhalt:`Persönliche Schutzausrüstung (PSA) und Brandschutz sind zentrale Elemente der Arbeitssicherheit in der Industrie.

## Persönliche Schutzausrüstung (PSA)

### Für Elektriker/Automatiker zwingend
- Sicherheitsschuhe S1P/S3: Antistatisch, Stahlkappe, Durchstichsichle Sohle
- Schutzbrille: Bei Funkenflug, Metallarbeiten, Schaltschrankarbeiten
- Helm: Bei Überkopfarbeiten oder Montage
- Gehörschutz: Bei lärmendem Umfeld (> 85 dB Dauerschall)

### Für Elektrische Arbeiten an spannungsführenden Teilen
- Isolierende Handschuhe (Klasse 00 bis 4, je nach Spannung):
  - Klasse 00: bis 500 V AC
  - Klasse 0:  bis 1000 V AC
  - Klasse 1:  bis 7500 V AC
- ARC-Flash-Schutzanzug: Bei Lichtbogengefahr in Schaltanlagen
- Isolierende Unterlage/Matte: Bei Arbeiten am spannungsführenden Teil

### Wann ist PSA anzuwenden?
Gemäss Gefährdungsbeurteilung. Im Zweifelsfall: IMMER!

## Brandschutz

### Brandklassen
A: Feste Stoffe (Holz, Papier, Kohle) → Wasser, Pulver, CO₂
B: Flüssigkeiten (Öl, Benzin, Lacke) → Schaum, Pulver, CO₂ (KEIN Wasser!)
C: Gase (Methan, Propan) → Pulver, Absperren
D: Metallbrand (Magnesium, Natrium) → Spezialpulver (KEIN Wasser!)
F: Speisefette → Speziallöscher

### Feuerlöscher
- ABC-Pulverlöscher: Universell, hinterlässt Rückstände (beschädigt Elektronik!)
- CO₂-Löscher: Für Elektronik/EDV, kein Rückstand, geringe Löschleistung
- Wasserlöscher: Nur Klasse A
- Schaumlöscher: Klasse A und B

NIEMALS Wasserlöscher bei elektrischen Anlagen! (Leitfähigkeit → Stromschlag)

### Brandschutz im Schaltschrank
- Schaltschränke regelmässig auf Kabelschäden/Überhitzung prüfen
- Kabeleinführungen abdichten (Brandabschottung)
- Keine brennbaren Materialien im Schaltschrank lagern
- Temperaturfühler/Thermostat überwachen Schranktemperatur

### Evakuierung
Sammelplatz kennen, Fluchtwege freihalten, im Brandfall: Aufzug verboten!`}]},{id:"elektriker",titel:"Elektriker Grundlagen",icon:"🔌",farbe:"teal",beschreibung:"Stromlaufpläne, Kabel, Schutzeinrichtungen, Schaltgeräte, Schaltschrankbau",lektionen:[{id:"stromlaufplaene",diagramId:"selbsthaltung",titel:"Stromlaufpläne lesen",inhalt:`Stromlaufpläne (auch Schaltpläne) sind die «Sprache» des Elektrikers und Automatikers. Sie zeigen, wie elektrische Schaltungen aufgebaut sind, und sind Grundlage für Installation, Inbetriebnahme und Fehlersuche.

## Normen für Schaltzeichen
Elektrische Schaltzeichen sind nach DIN EN 60617 normiert. So sind Pläne international verständlich.

## Wichtige Schaltzeichen

### Betriebsmittel-Kennzeichen (BMK)
Jedes Bauteil erhält ein eindeutiges Kürzel:
- -K1: Schütz oder Relais Nummer 1
- -Q1: Leistungsschalter (Motorschutzschalter)
- -F1: Sicherung oder Leitungsschutzschalter
- -M1: Motor Nummer 1
- -H1: Lampe / Signalleuchte
- -S1: Schalter / Taster
- -T1: Transformator

### Leitungsfarben (DIN VDE 0100)
- L1, L2, L3: Aussenleiter (Phasen) – braun, schwarz, grau
- N: Neutralleiter – blau
- PE: Schutzleiter – grün-gelb
- Steuerleitung: oft schwarz oder blau (24 V DC)

## Stromlaufplan (Schaltplan)
Ein Stromlaufplan hat zwei Bereiche:

### Hauptstromkreis (Leistungsteil)
Zeigt Leistungsfluss: Netz → Schutzschalter → Schütz → Motor
Dicke Linien, hohe Spannungen (400 V AC)

### Steuerstromkreis (Sekundärstromkreis)
Zeigt Steuerlogik: Taster, Relaiskontakte, SPS-E/A
Dünne Linien, niedrige Spannung (24 V DC oder 230 V AC)

## Stromlaufplan vs. Installationsplan
- Stromlaufplan (funktional): Zeigt WIE die Schaltung funktioniert
- Installationsplan (topografisch): Zeigt WO Kabel verlegt werden

## Lesen eines Stromlaufplans
1. Oben: Einspeisepunkt (Netz/Trafo)
2. Unten: Rückleiter (N/PE)
3. Strom fliesst von oben nach unten, von links nach rechts
4. Geöffnete Kontakte = Ruhezustand (nicht betätigt)

## Kreuzungszeichen
- Leitungen kreuzen sich ohne Verbindung: einfache Kreuzung
- Leitungen verbunden: Punkt an der Kreuzung`},{id:"kabel-leitungen",titel:"Leitungen und Kabel",inhalt:`Die richtige Kabelauswahl ist entscheidend für Sicherheit, Zuverlässigkeit und Langlebigkeit einer elektrischen Anlage.

## Kabelbezeichnung (Aufbau NYM-J 5×2,5)
- N: Normleitung (VDE-Norm)
- Y: PVC-Isolierung
- M: Mantelleitung
- J: Mit Schutzleiter (ohne J = kein PE)
- 5×2,5: 5 Adern, Querschnitt 2,5 mm²

## Wichtige Kabeltypen

### NYM-J (Mantelleitung)
Verwendung: Festinstallation in Gebäuden, Maschinen
Spannung: bis 300/500 V
Adern: 2, 3, 4, 5 Adern (J = mit PE)
Farben: je nach Norm (blau=N, grün-gelb=PE, andere=L)

### NYY-J (Erdkabel)
Verwendung: Erdverlegung, Nassräume, Ausseninstallation
PVC-Aussenmantel, robuster als NYM

### LIYCY (Steuerlitze, geschirmt)
Verwendung: Steuerleitungen, Signalkabel in Schaltschränken
Schirm (CY): Abschirmung gegen elektromagnetische Störungen (EMV)

### LAPP ÖLFLEX (Schleppkette)
Verwendung: Kabelführungen an beweglichen Maschinenteilen
Sehr flexibel, hohe Biegewechselfestigkeit

## Querschnittsberechnung
Nach VDE 0100 / NIN muss der Querschnitt nach zulässiger Strombelastung und Spannungsabfall gewählt werden.

Faustformel (Kupferleiter, Verlegeart B2):
- 1,5 mm²: bis 16 A (Beleuchtung, Steckdosen)
- 2,5 mm²: bis 20 A (Standard-Steckdosenkreis)
- 4 mm²: bis 25 A
- 6 mm²: bis 32 A
- 10 mm²: bis 40 A

Korrekturfaktoren beachten:
- Häufung (mehrere Kabel zusammen): Strom reduzieren
- Hohe Umgebungstemperatur: Strom reduzieren

## Spannungsabfall
ΔU = √3 × I × l × (R × cos φ + X × sin φ) [V] (Drehstrom)
Vereinfacht: ΔU [%] = I × l / (κ × A × U_N) × 100
κ (Kupfer) = 56 m/(Ω·mm²)
Zulässig: max. 4% im Verbraucher (nach NIN)

## Aderidentifikation
Einzeladern werden mit Aderendhülsen und Beschriftungsclips versehen.
Kabeleinführungen in Schaltschränke mit Kabelverschraubungen (IP-dicht) ausführen.`},{id:"schutzeinrichtungen",titel:"Schutzeinrichtungen",inhalt:`Schutzeinrichtungen schützen Personen vor elektrischem Schlag und Anlagen vor Überstrom, Kurzschluss und Fehlerströmen.

## Leitungsschutzschalter (LSS / MCB)
Schutz vor: Überlast und Kurzschluss

### Kennbuchstaben (Auslösecharakteristik)
- B (3–5 × In): Leitungs- und Geräteschutz (Beleuchtung, Steckdosen)
- C (5–10 × In): Standard für Motoren, Transformatoren
- D (10–20 × In): Hohe Anlaufströme (grosse Motoren, Transformatoren)

### Nennströme nach DIN
1, 2, 3, 4, 6, 10, 13, 16, 20, 25, 32, 40, 50, 63 A

Auslösung:
- Thermisch: Bei Überlast (Bimetall, träge Auslösung)
- Magnetisch: Bei Kurzschluss (sofortige Auslösung)

## FI-Schutzschalter (RCD)
Schutz vor: Personenschutz (Fehlerstrom) und Brandschutz

Typen:
- Typ A: AC-Fehlerströme + gepulste DC-Fehlerströme (Standard)
- Typ B: Alle Fehlerströme inkl. glatter DC (Frequenzumrichter!)
- Typ F: Frequenzumrichter ohne Typ B

Nennfehlerströme:
- 10 mA: Zusatzschutz in Badezimmern
- 30 mA: Personenschutz (Pflicht in Wohn-/Schlafräumen, Baustellen)
- 100 mA: Selektiv (vorgelagert)
- 300 mA: Brandschutz

## Motorschutzschalter (MSS / MMS)
Kombiniert: Leitungsschutz + thermischer Motorschutz (einstellbar)
Stellt Auslösebereich ein: z.B. 4–6,3 A für 1,5-kW-Motor
Manuell zurücksetzbar nach Auslösung

## Schmelzsicherung (NH-Sicherung)
Für Hauptverteilungen, hohe Kurzschlussleistungen
Kennzeichen: gG (general gängig, Kabelschutz), gM (Motorschutz)
Einmal verwendbar → nach Auslösung ersetzen

## Überspannungsschutz (SPD – Surge Protective Device)
- Typ 1 (B): Blitzstromableiter am Hausanschluss
- Typ 2 (C): Überspannungsschutz in Unterverteilung
- Typ 3 (D): Geräteschutz an Steckdose/Klemmleiste

## Selektivität
Vorgelagerte Sicherungen müssen grösser sein als nachgelagerte → Fehler schaltet nur betroffenen Kreis ab, nicht die übergeordnete Einspeisung.`},{id:"schaltgeraete",diagramId:"motorkreis",titel:"Schaltgeräte: Schütze und Relais",inhalt:`Schütze und Relais sind elektromechanische Schalter, die durch eine Steuerspannung betätigt werden und Lasten ein- und ausschalten.

## Schütz (Leistungsschütz / Contactor)
Ein Schütz ist ein elektromagnetisch betätigter Leistungsschalter für wiederholtes Ein- und Ausschalten.

### Aufbau
- Spule (Elektromagnet): Zieht den Anker an (Steuerkreis 24V DC oder 230V AC)
- Hauptkontakte: Schalten den Laststrom (400V, bis mehrere 100A)
- Hilfskontakte: Für Steuerstromkreis (oft 1 NO + 1 NC inklusive)

### Bezeichnung (z.B. Siemens 3RT)
- 3RT2016-1AB02: Schütz 9A, Spule 24V AC, 1 NO + 1 NC Hilfskontakte

### Stern-Dreieck-Schaltung mit Schützen
Benötigt 3 Schütze:
- K1M: Hauptschütz (immer in Betrieb)
- K3M: Sternschütz (Anlauf)
- K2M: Dreieckschütz (Betrieb)
Verriegelung: K3M und K2M dürfen nie gleichzeitig einschalten!

## Relais (Hilfsschütz / Relay)
Kleineres Schaltgerät, nur für Steuerströme (keine Leistungslasten).

Typen:
- Koppelrelais: Trennt SPS-Ausgänge von höheren Spannungen
- Zeitrelais: Schaltet nach einstellbarer Zeit
- Thermisches Relais: Motorschutz (Bimetall)
- Sicherheitsrelais: Zwangsgeführte Kontakte für Not-Aus-Kreis

## Motorschutzrelais
Einstellbarer Überlastschutz für Motoren (thermische Auslösung).
Stellt Nennstrom des Motors ein (z.B. 6 A für 2,2-kW-Motor).
Bei Auslösung: LED-Anzeige, manuelle Rückstellung erforderlich.

## Sanftanlasser (Soft Starter)
Begrenzt Anlaufstrom durch schrittweises Hochfahren der Spannung.
Einfacher und günstiger als Frequenzumrichter.
Nur für Anlauf und Auslauf – keine Drehzahlregelung im Betrieb.

## Schaltgerätekombinationen
In der Praxis werden kombiniert:
Leitungsschutzschalter + Motorschutzschalter + Schütz + FI = komplette Motorsteuerung`},{id:"schaltschrankbau",titel:"Schaltschrankbau",inhalt:`Der Schaltschrank ist die zentrale Steuerzentrale einer Anlage. Sein Aufbau muss normgerecht, übersichtlich und wartungsfreundlich sein.

## Normvorschriften
- IEC 61439 / DIN EN 61439: Niederspannungs-Schaltgerätekombinationen
- IP-Schutzgrad nach IEC 60529 (min. IP54 für Maschinenumgebung)
- Betriebstemperatur beachten: Standard 35°C Maximaltemperatur innen

## Mechanischer Aufbau

### Hutschiene (DIN-Schiene, EN 50022)
35 mm breite Profilschiene für Reiheneinbaugeräte (LSS, Schütze, Reihenklemmen)

### Kabelkanal (Verdrahtungskanal)
Führt Kabel geordnet und zugänglich. Deckel abnehmbar für Verdrahtungsarbeiten.

### Schaltschrankgrössen (Rittal, Siemens SIVACON)
Breite × Höhe × Tiefe: z.B. 600×800×300 mm
Schutzart aussen: IP54 oder IP65 (Maschinenschutzgehäuse)

## Elektrischer Aufbau

### Einspeisung oben
L1, L2, L3, N, PE → Hauptleitungsschutzschalter (HLSS)
Anschliessend: Phasenverteilung auf Unterkreise

### Busbarsystem (Sammelschienen)
PE-Schiene: Alle Schutzleiter verbunden (grün-gelb)
N-Schiene: Alle Neutralleiter (blau)

### Reihenklemmen
Klemmenleiste trennt Aussen- von Innenverdrahtung.
Bezeichnung der Klemmen entspricht Schaltplan (X1:1, X1:2, ...)
Klemmenarten: Durchgangsklemme, Trennklemme, Messtrennklemme, PE-Klemme

## Verdrahtungsregeln
- Mindestbiegeradius der Kabel einhalten
- Steuer- und Leistungskabel GETRENNT verlegen (EMV!)
- Kabel in Kabelkanälen zu max. 60% füllen
- Jede Ader mit Aderendhülse und Beschriftung versehen
- Leeradern beschriften (z.B. «Reserve»)

## Thermische Auslegung
Verlustleistung aller Komponenten berechnen → Kühlung dimensionieren
Wärmetauscher oder Klimagerät bei hoher Verlustleistung.
Ohne Kühlung: max. 35°C Innentemperatur (Korrekturfaktor auf Nennwerte!)

## Dokumentation (Pflicht!)
- Stromlaufplan (aktuell!)
- Klemmenplan
- Kabelliste / Leitungsverzeichnis
- Stückliste aller Komponenten
- CE-Kennzeichnung und Konformitätserklärung`},{id:"klemmen-verbindungen",titel:"Klemmen und Verbindungstechnik",inhalt:`Verbindungstechnik ist das A und O einer zuverlässigen elektrischen Anlage. Schlechte Verbindungen sind eine der häufigsten Ursachen für Maschinenausfälle.

## Aderendhülsen
Aderendhülsen (nach DIN 46228) werden vor dem Einlegen in Klemmen auf flexible Litzen gecrimpt.

Farben (DIN 46228-4):
- 0,25 mm²: weiss
- 0,5 mm²: weiss
- 0,75 mm²: grau
- 1,0 mm²: rot
- 1,5 mm²: schwarz
- 2,5 mm²: blau
- 4,0 mm²: grau
- 6,0 mm²: gelb
- 10 mm²: rot (doppelt isoliert)

Wichtig: Korrekte Grösse wählen! Zu grosse oder zu kleine Hülsen = schlechter Kontakt!

## Klemmenarten

### Schraubklemme
Klassische Klemme mit Schraubenverbindung.
Anzugsmoment einhalten (steht auf Klemme, z.B. 0,5 Nm bei 2,5 mm²).
Regelmässig nachziehen (Vibrationen lockern Schrauben).

### Federkraftklemme (WAGO, Phoenix PUSH IN)
Kein Werkzeug nötig zum Einlegen (Drücker für Lösen).
Vibrationsfest, schnelle Montage.
WAGO 221: Universell für 0,2–6 mm², wird oft für Feldinstallation verwendet.

### Crimpverbindung
Unlösbare Pressverbindung mit Crimpzange.
Steckverbinder, Kabelschuhe, Aderendhülsen.
Qualitätsmerkmal: Crimp nach DIN EN 60352 zertifiziert.

### Schraubverbinder (Lüsterklemme)
Nur für feste Adern, nicht für flexible Litzen ohne Aderendhülse!
Im professionellen Schaltschrankbau selten verwendet.

## Steckverbinder

### M12-Steckverbinder (Rundstecker)
4-polig: Sensoren/Aktoren (Näherungsschalter, Ventile)
5-polig: mit PE (Feldgeräte, Motor)
8-polig: Profinet/Ethernet-Feldbus
IP67 möglich

### HAN-Steckverbinder (Harting)
Industriesteckverbinder für häufige Steckverbindungen.
Für Wartungseinheiten, die oft ab- und angesteckt werden.

## Kabelverlegung im Schaltschrank
- Getrennte Kabelkanäle für Leistung (≥230V) und Steuerung (24V)
- Schirme einseitig oder beidseitig erden (je nach EMV-Konzept)
- Mindestbiegeradius einhalten (meist 5–10× Aussendurchmesser)

## Prüfungen vor Inbetriebnahme
1. Durchgangsprüfung: Alle Verbindungen korrekt?
2. Isolationswiderstand: > 1 MΩ (Prüfspannung 500 V DC)
3. Schutzleiterprüfung: Widerstand < 0,3 Ω
4. FI-Prüfung: Auslösung bei 30 mA (Prüfgerät oder Test-Taste)`}]},{id:"schaltplaene",titel:"Schaltpläne & Symbole",icon:"📋",farbe:"pink",beschreibung:"Schaltzeichen lesen, Stromlaufpläne, Klemmenplan, Pneumatikschaltplan",lektionen:[{id:"schaltzeichen",titel:"Elektrische Schaltzeichen (DIN EN 60617)",inhalt:`Schaltzeichen sind die Sprache des Elektrikers. Wer Schaltzeichen liest, versteht jeden Stromlaufplan – unabhängig von Hersteller oder Land.

## Passive Bauelemente

### Widerstand
  ─┤├─  oder  ─/\\/\\─
Begrenzt den Stromfluss. Einheit: Ohm [Ω].
Anwendung: Vorwiderstände für LEDs, Messwiderstände, Spannungsteiler.

### Kondensator (unpolar)
  ─┤├─  (zwei parallele Linien)
Speichert elektrische Energie. Sperrt Gleichstrom, lässt Wechselstrom durch.
Anwendung: Entstörung, Zeitglieder, Pufferkondensatoren.

### Kondensator (polar, Elko)
  ─┤+├─  (Plus-Seite gekennzeichnet)
Muss richtig gepolt werden (Plus an höheres Potential).

### Spule / Induktivität
  ─(~~~)─  oder  ─(UUU)─
Speichert magnetische Energie. Widerstand steigt mit Frequenz.
Anwendung: Transformatoren, Relais, Drosseln.

## Schaltelemente

### Schliesser (Normally Open, NO)
  ─ / ─  oder  ─| |─
Offen im Ruhezustand. Schliesst bei Betätigung.
Symbol: Lücke in der Linie mit Schalterbrücke.

### Öffner (Normally Closed, NC)
  ─|/|─
Geschlossen im Ruhezustand. Öffnet bei Betätigung.
Symbol: Verbindung mit Schrägstrich (Unterbrechung).

### Schliesser mit Verzögerung (TON)
  ─| |─   (mit Verzögerungssymbol oben)
Schliesst erst nach Ablauf einer eingestellten Zeit.

### Taster (Drucktaster, nicht rastend)
  ─[/]─
Federt zurück nach Loslassen.
Grün = Start, Rot = Stop (Norm).

## Spulen / Magnete

### Relais- oder Schützspule
  ─(M)─  oder  ─(K1)─
Zieht Kontakte an wenn Spannung anliegt.

### Motor
  ─(M)─  mit 3 Anschlüssen
Drehstrommotor: 3 Phasen, Dreieck- oder Sternschaltung.

## Schutz- und Schaltgeräte

### Sicherung
  ─[─]─  (Kasten mit Linie)
Schmelzsicherung: Bricht bei Überstrom.

### Leitungsschutzschalter (LSS)
  ─[B16]─
Automatisch, thermisch + magnetisch. B, C, D-Charakteristik.

### FI-Schutzschalter (RCD)
  ─[FI]─  mit Kreis
Schaltet bei Fehlerstrom > 30 mA ab.

### Motorschutzschalter (MSS)
  ─[Q1]─
Kombination: thermischer Schutz + manuelles Schalten.

## Weitere Symbole

### Lampe / Leuchte
  ─(X)─  (Kreis mit Kreuz)
Signalleuchte, Betriebsmeldung.

### Klemme / Verbindungspunkt
  ─●─
Verbindung zweier Leiter.

### Kreuzung ohne Verbindung
  ─X─ (ohne Punkt)
Leitungen kreuzen sich, sind aber NICHT verbunden.

## Farbnormen für Taster (EN 60204-1)
- Grün: EIN / Start
- Rot: AUS / Stop
- Gelb: Quittierung / Rücksetzen
- Blau: Zweck frei wählbar
- Schwarz/Grau: allgemein`},{id:"stromlaufplan",diagramId:"wendeschaltung",titel:"Stromlaufplan lesen – Schritt für Schritt",inhalt:`Ein Stromlaufplan zeigt die elektrische Funktion einer Anlage – nicht wo die Kabel liegen, sondern WIE die Schaltung funktioniert.

## Aufbau eines Stromlaufplans

### Hauptstromkreis (Leistungsteil)
- Oben: Netzeinspeisung L1, L2, L3 (400 V AC)
- Dicke Linien, hohe Ströme
- Schutz- und Schaltgeräte in Reihe

### Steuerstromkreis (Signalkreis)
- Unten oder separat
- 24 V DC (oder 230 V AC)
- Taster, Relais, SPS-Ausgänge

## Beispiel: Direktanlauf Motor mit Start/Stop

\`\`\`
HAUPTSTROMKREIS (400 V AC):

       L1    L2    L3
        |     |     |
      [F1]  [F1]  [F1]   <- Sicherungen (16 A, Char. C)
        |     |     |
      [Q1]  [Q1]  [Q1]   <- Motorschutzschalter
        |     |     |
      [K1]  [K1]  [K1]   <- Schütz K1 Hauptkontakte
        |     |     |
       [M]                <- Drehstrommotor
\`\`\`

\`\`\`
STEUERSTROMKREIS (24 V DC):

+24V -+--[S1 Stop/NC]--+--[S2 Start/NO]--+--(K1)--+-- 0V
      |                 |                 |
      |                 +---[K1 Hilfs]----+
      |                     Selbsthaltung
      +--[Q1 Therm./NC]-- (Motorschutz-Öffner)
\`\`\`

## Schritt-für-Schritt-Erklärung

### Schritt 1: Starttaster S2 drücken
- S2 (Schliesser) schliesst
- Strom fliesst: +24V → S1 (NC, geschlossen) → S2 (NO, jetzt geschlossen) → Spule K1 → 0V
- K1 zieht an

### Schritt 2: Selbsthaltung
- K1-Hilfskontakt (parallel zu S2) schliesst
- K1 bleibt angezogen auch nach Loslassen von S2

### Schritt 3: Motor läuft
- K1-Hauptkontakte (im Hauptstromkreis) geschlossen
- Motor dreht

### Schritt 4: Stoptaster S1 drücken
- S1 (NC-Kontakt) öffnet
- Strom zu K1-Spule unterbrochen
- K1 fällt ab, alle K1-Kontakte öffnen
- Motor stoppt

### Schritt 5: Motorschutz-Auslösung
- Q1 thermisch ausgelöst → Q1-NC-Kontakt im Steuerstromkreis öffnet
- K1 kann nicht mehr anziehen (Störungsverriegelung)

## Leserichtung im Stromlaufplan
1. Netzeinspeisung oben
2. Von oben nach unten lesen
3. Strom fliesst von L (links) nach N/0V (rechts)
4. Jede Zeile = ein Strompfad (Netzplannummer)
5. Querbezüge: Kontakt hier → Spule auf Seite X

## Wichtige Begriffe
- Ruhestrom-Kreis (RS): Strom fliesst bei Normalbetrieb (Öffner im Pfad)
- Arbeitsstrom-Kreis (AS): Strom fliesst nur bei Betätigung (Schliesser im Pfad)
- NOT-AUS ist immer Öffner (Ruhestromkreis) für höhere Sicherheit!`},{id:"klemmenplan",titel:"Klemmenplan und Leitungsverzeichnis",inhalt:`Der Klemmenplan verbindet den Schaltschrank (innen) mit der Anlage (aussen) und ist das zentrale Dokument für die Verdrahtung.

## Warum Klemmenpläne?

Kabel zwischen Schaltschrank und Maschine werden auf Klemmenleisten aufgelegt. Jede Klemme hat eine Nummer. Der Plan zeigt:
- Welches Gerät innen mit welcher Klemme verbunden ist
- Welches Feldgerät aussen an welcher Klemme liegt
- Welcher Leiterquerschnitt und welche Leiterbezeichnung verwendet werden

## Aufbau einer Klemmenleiste

\`\`\`
Klemmenleiste X1 (Motorverdrahtung):
+-------+----------+-----------------+----------+-----+
| Kl.   | Von      | Bezeichnung     | Nach     | mm2 |
+-------+----------+-----------------+----------+-----+
| X1:1  | -F1:2    | L1 Motor        | -K1:1    | 2.5 |
| X1:2  | -F1:4    | L2 Motor        | -K1:3    | 2.5 |
| X1:3  | -Q1:T3   | L3 Motor        | -K1:5    | 2.5 |
+-------+----------+-----------------+----------+-----+

Klemmenleiste X2 (Steuerung):
+-------+----------+-----------------+----------+-----+
| Kl.   | Von      | Bezeichnung     | Nach     | mm2 |
+-------+----------+-----------------+----------+-----+
| X2:1  | -T1:2    | +24V DC         | -S1:1    | 1.5 |
| X2:2  | 0V       | 0V Steuerung    | -K1:A2   | 1.5 |
| X2:3  | -K1:A1   | Schütz K1 Plus  | -S2:1    | 1.5 |
| X2:4  | -Q1:95   | Motorschutz NC  | -S1:2    | 1.5 |
+-------+----------+-----------------+----------+-----+
\`\`\`

## Spalten-Erklärung

| Spalte | Bedeutung |
|--------|-----------|
| Kl.    | Klemmennummer (X1:1 = Leiste X1, Klemme 1) |
| Von    | Anschluss des Geräts im Schaltschrank |
| Bezeichnung | Leiterfunktion / Kabelbezeichnung |
| Nach   | Anschluss am Feldgerät oder Klemme |
| mm²   | Leiterquerschnitt |

## Leitungsverzeichnis (Kabelplan)

Ergänzt den Klemmenplan um Kabelinformationen:

\`\`\`
Leitungsverzeichnis:
+--------+--------+-------+-------+------+--------+----------+
| Kab.Nr | Von    | Nach  | Typ   | Adern| mm2    | Länge(m) |
+--------+--------+-------+-------+------+--------+----------+
| W01    | X1:1-3 | M1    | NYYÖ  | 4G   | 2.5    | 12       |
| W02    | X2:1-4 | S1/S2 | LIYY  | 4x   | 0.75   | 8        |
| W03    | X2:5-6 | Q1    | H07V  | 2x   | 1.5    | 5        |
+--------+--------+-------+-------+------+--------+----------+
\`\`\`

## Kabeltypen (Auswahl)
- NYY: Kunststoffkabel, fest verlegt (Erdkabel)
- NYYÖ: NYY mit Schirm (EMV-geschützt)
- LIYY: Steuerleitung, flexibel, für Schleppketten
- H07V-K: Einzelader, flexibel, für Schaltschrank
- ÖLFLEX: Markenname für Steuer-/Schleppkabel

## Aderendhülsen und Leiterfarben
Nach DIN VDE 0293-308:
- Braun/Schwarz/Grau: L1, L2, L3
- Blau: Neutralleiter N
- Grün-Gelb: Schutzleiter PE
- Violett/Orange/Rosa: Steuerleitung verschiedener Potentiale

## Praxistipp: Klemme belegen
1. Klemmenplan öffnen → Klemme finden
2. "Von" lesen → Gerät innen anschliessen
3. "Nach" lesen → Kabel zum Feldgerät belegen
4. Leiterbezeichnung aufkleben (Klemmenschilder)
5. Im Klemmenplan abhaken`},{id:"pneumatikschaltplan",titel:"Pneumatikschaltplan lesen (ISO 1219)",inhalt:`Pneumatikschaltpläne werden nach ISO 1219 gezeichnet. Die Symbole sind international genormt und zeigen die Funktion – nicht die Baugrösse oder den Einbauort.

## Grundregeln ISO 1219

- Alle Ventile werden in Ruhestellung gezeichnet
- Strömungsrichtung: Dreieck zeigt Flussrichtung
- Anschlussbezeichnung: 1=Druck, 2+4=Arbeit, 3+5=Entlüftung

## Wichtige Grundsymbole

### Druckluftquelle
  (Kreis mit Dreieck nach oben)
Druckluftnetz oder Kompressor.

### Filter
  (Rechteck mit Kurve)
Entfernt Schmutz und Wasser.

### Druckregler
  (Rechteck mit Pfeil und Feder)
Stellt Arbeitsdruck ein.

### Öler
  (Rechteck mit Öltropfen)
Fügt Schmieröl zur Druckluft hinzu.

### FRL-Einheit (Filter-Regler-Öler)
  [F]--[R]--[L]
Wird am Eingang jeder Pneumatikanlage montiert.

## Wegeventile

### 3/2-Wegeventil (Einfachwirkend)
\`\`\`
      Y1 (Magnet)
      |
  +---+---+
  | 1>2   |  Stellung 1 (stromlos): 2-3 verbunden (Entlüftung)
  |   3   |  Stellung 2 (Magnet): 1-2 verbunden (Druck zu A)
  +-------+
  1   2   3
 (P) (A) (R)
\`\`\`

### 5/2-Wegeventil (Doppeltwirkend)
\`\`\`
      Y1         Y2
      |           |
  +---+-----------+---+
  | 1>2    |   4>5    |  Stellung 1: P->A, B->Auspuff
  |        |          |  Stellung 2: P->B, A->Auspuff
  +---+-----------+---+
  1   2   3   4   5
 (P) (A) (E1)(B) (E2)
\`\`\`

## Vollständiges Beispiel: Doppeltwirkender Zylinder

\`\`\`
Druckluft 6 bar
      |
    [FRL]          <- Filter-Regler-Öler
      |
   +--+--+
   | 5/2 | <-- Magnet Y1 (Ausfahren), Y2 (Einfahren)
   +--+--+
   A  |  B
   |  |  |
   +--+--+        <- Pneumatikzylinder doppeltwirkend
   Kolbenboden    Kolbenstangenseite
\`\`\`

## Drosselrückschlagventil (Geschwindigkeitsregelung)

\`\`\`
Ausfahrgeschwindigkeit regeln (Abluftdrosselung):

Ventilausgang B --> [->|<-] --> Zylinder A-Seite
                  Drossel + Rückschlagventil

Pfeilrichtung: Durchfluss gedrosselt
Gegenrichtung: Durchfluss frei (Rückschlagventil öffnet)
\`\`\`

## Anschlussbezeichnungen nach ISO 1219
| Nr. | Buchstabe | Bedeutung |
|-----|-----------|-----------|
| 1   | P         | Druckluft (Versorgung) |
| 2   | A         | Arbeitsanschluss 1 |
| 3   | R / T     | Entlüftung 1 |
| 4   | B         | Arbeitsanschluss 2 |
| 5   | S         | Entlüftung 2 |
| 12  | Z         | Pilotanschluss |

## Schaltplan lesen – Vorgehen
1. Druckluftquelle oben suchen
2. FRL-Einheit identifizieren
3. Wegeventile: Anzahl Anschlüsse/Stellungen lesen
4. Zylinder: ein- oder doppeltwirkend?
5. Steuersignale: elektrisch (Magnet) oder pneumatisch (Pilot)?
6. Hilfsfunktionen: Drossel, Schnellentlüftung, Druckspeicher?

## Häufige Fehlerquellen
- Rückschlagventil falsch eingebaut (Pfeilrichtung beachten!)
- FRL-Einheit nicht regelmässig entleert (Wasseransammlung)
- Druckregler nicht eingestellt → Zylinder zu schnell oder zu langsam`},{id:"sps-verdrahtung",titel:"SPS-Verdrahtungsplan und E/A-Liste",inhalt:`Die E/A-Liste (auch I/O-Liste) ist die Schnittstelle zwischen Elektroplanung, SPS-Programmierung und Verdrahtung. Sie definiert welche SPS-Adresse zu welchem Feldgerät gehört.

## Was ist eine E/A-Liste?

Die E/A-Liste ordnet jeder SPS-Adresse ein physisches Feldgerät zu:
- Adresse (z.B. I0.0): Bezeichnung, Feldgerät, Klemme, Kabelfarbe
- Basis für Programmerstellung UND Verdrahtung
- Erzeugt im Engineering-Tool (TIA Portal, EPLAN usw.)

## Beispiel E/A-Liste Motorsteuerung

\`\`\`
EINGÄNGE (Digitale Inputs - 24V DC):
+--------+----------------------+------------------+--------+
|Adresse | Bezeichnung          | Feldgerät        | Klemme |
+--------+----------------------+------------------+--------+
| I0.0   | Starttaster EIN      | S2 (Schliesser)  | X2:3   |
| I0.1   | Stoptaster AUS       | S1 (Öffner)      | X2:4   |
| I0.2   | Motorschutz-Auslösg. | Q1 NC-Kontakt    | X2:5   |
| I0.3   | Endlage vorne        | B1 induktiv      | X3:1   |
| I0.4   | Endlage hinten       | B2 induktiv      | X3:2   |
| I0.5   | Not-Halt             | S0 (Öffner/NC)   | X2:2   |
+--------+----------------------+------------------+--------+

AUSGÄNGE (Digitale Outputs - 24V DC):
+--------+----------------------+------------------+--------+
|Adresse | Bezeichnung          | Feldgerät        | Klemme |
+--------+----------------------+------------------+--------+
| Q0.0   | Schütz Motor EIN     | K1-Spule (A1/A2) | X2:6   |
| Q0.1   | Meldeleuchte grün    | H1 (RUN)         | X2:7   |
| Q0.2   | Störungsleuchte rot  | H2 (FAULT)       | X2:8   |
| Q0.3   | Magnetventil Y1      | Y1 Ausfahren     | X3:3   |
+--------+----------------------+------------------+--------+

ANALOGE EINGÄNGE (4–20 mA):
+--------+----------------------+------------------+--------+
| IW64   | Drucktransmitter     | B10 (0–16 bar)   | X4:1/2 |
| IW66   | Temperaturfühler PT100| B11 (-20..80°C) | X4:3/4 |
+--------+----------------------+------------------+--------+
\`\`\`

## SPS-Anschlussschema (Verdrahtungsprinzip)

\`\`\`
Digitaler Eingang (Source/PNP):

+24V ─────────────────────────────────── SPS COM+
                    |
                [Sensor PNP]  (z.B. B1 Näherungsschalter)
                    |
SPS I0.3 ──────────┘        Sensor schaltet +24V auf Eingang

Digitaler Ausgang (Source):

SPS Q0.0 ──── [Last / Relais-Spule K1] ──── 0V
                                    |
+24V ─────────────────────────────────── SPS COM+
(SPS schaltet den + durch, 0V kommt direkt)
\`\`\`

## SPS-Adressierung Siemens S7

\`\`\`
I = Eingang (Input)       Q = Ausgang (Output)
M = Merker (intern)       DB = Datenbaustein

Adresse:  I [Byte] . [Bit]
Beispiel: I0.0 = Eingangsbyte 0, Bit 0
          I0.7 = Eingangsbyte 0, Bit 7
          I1.0 = Eingangsbyte 1, Bit 0

Analog:   IW64 = Eingangswort (16 Bit) Adresse 64
\`\`\`

## Vom Schaltplan zur SPS – Arbeitsablauf

1. E/A-Liste erstellen (mit Kunde / Auftraggeber)
2. Hardware konfigurieren (TIA Portal: CPU, Baugruppen)
3. Adressen vergeben und Symboltabelle anlegen
4. Verdrahtungsplan zeichnen (Klemmen an SPS-Baugruppe)
5. Programm schreiben (Symbole aus Symboltabelle verwenden)
6. Simulation / Test am Schaltschrank
7. Inbetriebnahme an der Maschine

## Typische Fehler beim Anschliessen
- PNP und NPN verwechselt (Sensor schaltet, SPS reagiert nicht)
- COM-Klemme vergessen (Ausgang gibt Signal, aber Gerät reagiert nicht)
- 24V und 0V vertauscht an Ausgang (Kurzschluss!)
- Schirmung nicht geerdet (EMV-Probleme, falsche Messwerte)

## Wichtig: Querschnitte
- Analogsignal-Leitungen: 0,25–0,75 mm² abgeschirmt
- Digitale 24V-Signale: 0,5–1,5 mm²
- Leistungskreise (230/400 V): nach Absicherung dimensionieren`}]}],vu="automatiker_progress",ol={completedLessons:{},quizScores:{},flashcardProgress:{},lastActivity:null};function hr(){const[e,n]=z.useState(()=>{try{const h=localStorage.getItem(vu);return h?JSON.parse(h):ol}catch{return ol}});z.useEffect(()=>{localStorage.setItem(vu,JSON.stringify(e))},[e]);const t=(h,m)=>{n(k=>({...k,completedLessons:{...k.completedLessons,[`${h}:${m}`]:!0},lastActivity:new Date().toISOString()}))},r=(h,m)=>!!e.completedLessons[`${h}:${m}`];return{progress:e,markLessonComplete:t,isLessonComplete:r,getModuleProgress:(h,m)=>{const k=m.filter(S=>r(h,S.id)).length;return{completed:k,total:m.length,percent:Math.round(k/m.length*100)}},saveQuizScore:(h,m,k)=>{n(S=>({...S,quizScores:{...S.quizScores,[h]:{score:m,total:k,percent:Math.round(m/k*100),date:new Date().toISOString()}},lastActivity:new Date().toISOString()}))},getQuizScore:h=>e.quizScores[h]||null,markFlashcard:(h,m)=>{n(k=>({...k,flashcardProgress:{...k.flashcardProgress,[h]:m?"known":"repeat"}}))},getFlashcardStatus:h=>e.flashcardProgress[h]||null,getOverallStats:h=>{const m=h.reduce((b,f)=>b+f.lektionen.length,0),k=Object.keys(e.completedLessons).length,S=Object.keys(e.quizScores).length,y=S>0?Math.round(Object.values(e.quizScores).reduce((b,f)=>b+f.percent,0)/S):0;return{totalLessons:m,completedLessons:k,lessonPercent:Math.round(k/m*100),quizCount:S,avgQuizScore:y}},resetProgress:()=>{n(ol)}}}const Wf={blue:"bg-blue-100 border-blue-300 hover:border-blue-500",green:"bg-green-100 border-green-300 hover:border-green-500",cyan:"bg-cyan-100 border-cyan-300 hover:border-cyan-500",orange:"bg-orange-100 border-orange-300 hover:border-orange-500",purple:"bg-purple-100 border-purple-300 hover:border-purple-500",red:"bg-red-100 border-red-300 hover:border-red-500",indigo:"bg-indigo-100 border-indigo-300 hover:border-indigo-500",yellow:"bg-yellow-100 border-yellow-300 hover:border-yellow-500",teal:"bg-teal-100 border-teal-300 hover:border-teal-500",pink:"bg-pink-100 border-pink-300 hover:border-pink-500"},Bf={blue:"bg-blue-500",green:"bg-green-500",cyan:"bg-cyan-500",orange:"bg-orange-500",purple:"bg-purple-500",red:"bg-red-500",indigo:"bg-indigo-500",yellow:"bg-yellow-500",teal:"bg-teal-500",pink:"bg-pink-500"};function Mf(){const{getModuleProgress:e,getOverallStats:n,getQuizScore:t}=hr(),r=n(Ze);return s.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[s.jsxs("div",{className:"mb-8",children:[s.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"🇨🇭 Automatiker EFZ Lernplattform"}),s.jsx("p",{className:"text-gray-600 text-lg",children:"Alle Themen für die Berufslehre als Automatiker in der Schweiz – kompakt und interaktiv."})]}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[{label:"Lektionen gelernt",value:`${r.completedLessons} / ${r.totalLessons}`,icon:"📚"},{label:"Fortschritt",value:`${r.lessonPercent}%`,icon:"📈"},{label:"Quiz abgeschlossen",value:`${r.quizCount} / ${Ze.length}`,icon:"✅"},{label:"Ø Quiz-Score",value:r.quizCount>0?`${r.avgQuizScore}%`:"–",icon:"🏆"}].map(i=>s.jsxs("div",{className:"bg-white rounded-xl shadow p-4 text-center",children:[s.jsx("div",{className:"text-2xl mb-1",children:i.icon}),s.jsx("div",{className:"text-2xl font-bold text-blue-700",children:i.value}),s.jsx("div",{className:"text-xs text-gray-500 mt-1",children:i.label})]},i.label))}),s.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Lernmodule"}),s.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:Ze.map(i=>{const{completed:l,total:a,percent:u}=e(i.id,i.lektionen),o=t(i.id);return s.jsxs("div",{className:`border-2 rounded-xl p-4 transition-all cursor-pointer ${Wf[i.farbe]}`,children:[s.jsx("div",{className:"text-3xl mb-2",children:i.icon}),s.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:i.titel}),s.jsx("p",{className:"text-xs text-gray-600 mb-3 leading-relaxed",children:i.beschreibung}),s.jsxs("div",{className:"mb-2",children:[s.jsxs("div",{className:"flex justify-between text-xs text-gray-600 mb-1",children:[s.jsxs("span",{children:[l," / ",a," Lektionen"]}),s.jsxs("span",{children:[u,"%"]})]}),s.jsx("div",{className:"h-2 bg-white rounded-full overflow-hidden",children:s.jsx("div",{className:`h-full rounded-full transition-all ${Bf[i.farbe]}`,style:{width:`${u}%`}})})]}),o&&s.jsxs("div",{className:"text-xs text-gray-600 mb-3",children:["Quiz: ",o.percent,"% (",o.score,"/",o.total," richtig)"]}),s.jsxs("div",{className:"flex gap-2 mt-3",children:[s.jsx(ue,{to:`/module/${i.id}`,className:"flex-1 text-center text-xs font-medium bg-white rounded-lg py-1.5 border border-gray-200 hover:bg-gray-50 transition-colors",children:"Lernen"}),s.jsx(ue,{to:`/quiz/${i.id}`,className:"flex-1 text-center text-xs font-medium bg-blue-600 text-white rounded-lg py-1.5 hover:bg-blue-700 transition-colors",children:"Quiz"})]})]},i.id)})})]})}function Cf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"220",height:"200",viewBox:"0 0 220 200",className:"drop-shadow",children:[s.jsx("polygon",{points:"110,10 10,180 210,180",fill:"#dbeafe",stroke:"#2563eb",strokeWidth:"2.5"}),s.jsx("line",{x1:"110",y1:"95",x2:"10",y2:"95",stroke:"#2563eb",strokeWidth:"2",strokeDasharray:"6,3"}),s.jsx("line",{x1:"110",y1:"95",x2:"210",y2:"95",stroke:"#2563eb",strokeWidth:"2",strokeDasharray:"6,3"}),s.jsx("line",{x1:"110",y1:"10",x2:"110",y2:"95",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("text",{x:"110",y:"70",textAnchor:"middle",fontSize:"26",fontWeight:"bold",fill:"#1d4ed8",children:"U"}),s.jsx("text",{x:"110",y:"85",textAnchor:"middle",fontSize:"11",fill:"#3b82f6",children:"Spannung [V]"}),s.jsx("text",{x:"55",y:"148",textAnchor:"middle",fontSize:"26",fontWeight:"bold",fill:"#1d4ed8",children:"R"}),s.jsx("text",{x:"55",y:"162",textAnchor:"middle",fontSize:"11",fill:"#3b82f6",children:"Widerstand [Ω]"}),s.jsx("text",{x:"165",y:"148",textAnchor:"middle",fontSize:"26",fontWeight:"bold",fill:"#1d4ed8",children:"I"}),s.jsx("text",{x:"165",y:"162",textAnchor:"middle",fontSize:"11",fill:"#3b82f6",children:"Strom [A]"}),s.jsx("text",{x:"110",y:"105",textAnchor:"middle",fontSize:"14",fill:"#6b7280",children:"×"})]}),s.jsxs("div",{className:"flex gap-6 mt-2 text-sm",children:[s.jsx("span",{className:"bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800",children:"U = R × I"}),s.jsx("span",{className:"bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800",children:"R = U / I"}),s.jsx("span",{className:"bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800",children:"I = U / R"})]})]})}function If(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"280",height:"160",viewBox:"0 0 280 160",className:"drop-shadow",children:[s.jsx("rect",{x:"20",y:"20",width:"240",height:"120",rx:"8",fill:"#f0fdf4",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("polygon",{points:"40,130 40,40 230,130",fill:"#dcfce7",stroke:"#16a34a",strokeWidth:"2.5"}),s.jsx("rect",{x:"40",y:"110",width:"14",height:"14",fill:"none",stroke:"#16a34a",strokeWidth:"1.5"}),s.jsx("text",{x:"35",y:"88",textAnchor:"middle",fontSize:"18",fontWeight:"bold",fill:"#15803d",children:"P"}),s.jsx("text",{x:"35",y:"103",textAnchor:"middle",fontSize:"10",fill:"#16a34a",children:"Wirkl. [W]"}),s.jsx("text",{x:"138",y:"148",textAnchor:"middle",fontSize:"18",fontWeight:"bold",fill:"#15803d",children:"Q"}),s.jsx("text",{x:"138",y:"160",textAnchor:"middle",fontSize:"10",fill:"#16a34a",children:"Blindl. [var]"}),s.jsx("text",{x:"148",y:"82",textAnchor:"middle",fontSize:"18",fontWeight:"bold",fill:"#15803d",children:"S"}),s.jsx("text",{x:"148",y:"96",textAnchor:"middle",fontSize:"10",fill:"#16a34a",children:"Scheinl. [VA]"}),s.jsx("path",{d:"M 40 130 A 30 30 0 0 1 63 107",fill:"none",stroke:"#f59e0b",strokeWidth:"2"}),s.jsx("text",{x:"72",y:"120",fontSize:"14",fill:"#d97706",fontStyle:"italic",children:"φ"})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-2 mt-2 text-xs text-center",children:[s.jsx("span",{className:"bg-green-100 px-2 py-1 rounded font-mono text-green-800",children:"S² = P² + Q²"}),s.jsx("span",{className:"bg-green-100 px-2 py-1 rounded font-mono text-green-800",children:"cos φ = P/S"}),s.jsx("span",{className:"bg-green-100 px-2 py-1 rounded font-mono text-green-800",children:"P = S·cos φ"})]})]})}function Lf(){return s.jsxs("div",{className:"my-4 grid sm:grid-cols-2 gap-4",children:[s.jsxs("div",{className:"flex flex-col items-center bg-blue-50 rounded-xl p-4",children:[s.jsx("h4",{className:"font-bold text-blue-800 mb-3",children:"⭐ Stern-Schaltung (Y)"}),s.jsxs("svg",{width:"160",height:"160",viewBox:"0 0 160 160",children:[s.jsx("circle",{cx:"80",cy:"80",r:"5",fill:"#2563eb"}),s.jsx("line",{x1:"80",y1:"80",x2:"80",y2:"15",stroke:"#2563eb",strokeWidth:"3"}),s.jsx("line",{x1:"80",y1:"80",x2:"15",y2:"140",stroke:"#ef4444",strokeWidth:"3"}),s.jsx("line",{x1:"80",y1:"80",x2:"145",y2:"140",stroke:"#1a1a1a",strokeWidth:"3"}),[[[75,15],[75,55]],[[15,140],[50,110]],[[145,140],[110,110]]].map(([e,n],t)=>null),s.jsx("rect",{x:"70",y:"20",width:"20",height:"45",rx:"4",fill:"white",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("text",{x:"80",y:"47",textAnchor:"middle",fontSize:"10",fill:"#2563eb",children:"U1"}),s.jsx("rect",{x:"22",y:"98",width:"40",height:"20",rx:"4",fill:"white",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"42",y:"112",textAnchor:"middle",fontSize:"10",fill:"#ef4444",children:"V1"}),s.jsx("rect",{x:"98",y:"98",width:"40",height:"20",rx:"4",fill:"white",stroke:"#1a1a1a",strokeWidth:"2"}),s.jsx("text",{x:"118",y:"112",textAnchor:"middle",fontSize:"10",fill:"#1a1a1a",children:"W1"}),s.jsx("text",{x:"80",y:"12",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#2563eb",children:"L1"}),s.jsx("text",{x:"8",y:"155",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"L2"}),s.jsx("text",{x:"152",y:"155",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#1a1a1a",children:"L3"}),s.jsx("text",{x:"90",y:"82",fontSize:"11",fontWeight:"bold",fill:"#6b7280",children:"N"})]}),s.jsxs("div",{className:"text-xs text-blue-700 mt-2 space-y-1 text-center",children:[s.jsxs("div",{children:["U_Strang = ",s.jsx("strong",{children:"230 V"})]}),s.jsx("div",{children:"Anlaufstrom ÷ 3"})]})]}),s.jsxs("div",{className:"flex flex-col items-center bg-orange-50 rounded-xl p-4",children:[s.jsx("h4",{className:"font-bold text-orange-800 mb-3",children:"🔺 Dreieck-Schaltung (Δ)"}),s.jsxs("svg",{width:"160",height:"160",viewBox:"0 0 160 160",children:[s.jsx("polygon",{points:"80,15 10,140 150,140",fill:"none",stroke:"#9a3412",strokeWidth:"2",strokeDasharray:"4,2"}),s.jsx("rect",{x:"70",y:"20",width:"20",height:"40",rx:"4",fill:"white",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("text",{x:"80",y:"44",textAnchor:"middle",fontSize:"10",fill:"#2563eb",children:"U1"}),s.jsx("rect",{x:"22",y:"95",width:"38",height:"20",rx:"4",fill:"white",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"41",y:"109",textAnchor:"middle",fontSize:"10",fill:"#ef4444",children:"V1"}),s.jsx("rect",{x:"100",y:"95",width:"38",height:"20",rx:"4",fill:"white",stroke:"#1a1a1a",strokeWidth:"2"}),s.jsx("text",{x:"119",y:"109",textAnchor:"middle",fontSize:"10",fill:"#1a1a1a",children:"W1"}),s.jsx("line",{x1:"80",y1:"15",x2:"80",y2:"20",stroke:"#2563eb",strokeWidth:"3"}),s.jsx("line",{x1:"10",y1:"140",x2:"22",y2:"115",stroke:"#ef4444",strokeWidth:"3"}),s.jsx("line",{x1:"150",y1:"140",x2:"138",y2:"115",stroke:"#1a1a1a",strokeWidth:"3"}),s.jsx("text",{x:"80",y:"12",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#2563eb",children:"L1"}),s.jsx("text",{x:"3",y:"155",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"L2"}),s.jsx("text",{x:"157",y:"155",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#1a1a1a",children:"L3"})]}),s.jsxs("div",{className:"text-xs text-orange-700 mt-2 space-y-1 text-center",children:[s.jsxs("div",{children:["U_Strang = ",s.jsx("strong",{children:"400 V"})]}),s.jsx("div",{children:"Volle Leistung im Betrieb"})]})]}),s.jsxs("div",{className:"sm:col-span-2 bg-yellow-50 rounded-lg p-3 text-xs text-center text-yellow-800",children:[s.jsx("strong",{children:"Ablauf:"})," Anlauf im Stern (3–5 s) → Umschalten → Betrieb im Dreieck"]})]})}function Rf(){const e=[];for(let t=0;t<=360;t+=5){const r=20+t/360*340,i=80-Math.sin(t*Math.PI/180)*55;e.push(`${r},${i}`)}const n=`M ${e.join(" L ")}`;return s.jsxs("div",{className:"my-4 bg-gray-50 rounded-xl p-4",children:[s.jsxs("svg",{width:"380",height:"160",viewBox:"0 0 380 160",className:"w-full",children:[[0,1,2,3,4].map(t=>s.jsx("line",{x1:20+t*85,y1:"10",x2:20+t*85,y2:"150",stroke:"#e5e7eb",strokeWidth:"1"},t)),s.jsx("line",{x1:"20",y1:"80",x2:"365",y2:"80",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("line",{x1:"20",y1:"10",x2:"20",y2:"150",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("path",{d:n,fill:"none",stroke:"#2563eb",strokeWidth:"2.5"}),s.jsx("path",{d:`M 20,80 ${e.slice(0,37).join(" L ")} L 190,80 Z`,fill:"#dbeafe",opacity:"0.5"}),s.jsx("text",{x:"370",y:"84",fontSize:"11",fill:"#6b7280",children:"t"}),s.jsx("text",{x:"5",y:"14",fontSize:"11",fill:"#6b7280",children:"u"}),s.jsx("text",{x:"22",y:"35",fontSize:"10",fill:"#2563eb",children:"+û"}),s.jsx("text",{x:"22",y:"128",fontSize:"10",fill:"#2563eb",children:"-û"}),s.jsx("text",{x:"22",y:"77",fontSize:"10",fill:"#6b7280",children:"0"}),s.jsx("text",{x:"95",y:"155",fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:"T/4"}),s.jsx("text",{x:"190",y:"155",fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:"T/2"}),s.jsx("text",{x:"275",y:"155",fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:"3T/4"}),s.jsx("text",{x:"360",y:"155",fontSize:"10",fill:"#6b7280",textAnchor:"middle",children:"T"}),s.jsx("line",{x1:"20",y1:"41",x2:"365",y2:"41",stroke:"#f59e0b",strokeWidth:"1.5",strokeDasharray:"6,3"}),s.jsx("text",{x:"200",y:"38",fontSize:"10",fill:"#d97706",textAnchor:"middle",children:"U_eff = û / √2 = 230 V"}),s.jsx("line",{x1:"110",y1:"25",x2:"110",y2:"80",stroke:"#2563eb",strokeWidth:"1.5",strokeDasharray:"4,2"}),s.jsx("text",{x:"115",y:"50",fontSize:"10",fill:"#2563eb",children:"û ≈ 325 V"})]}),s.jsxs("div",{className:"flex justify-center gap-6 text-xs mt-1",children:[s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"inline-block w-6 h-1 bg-blue-500 rounded"}),"Momentanwert u(t)"]}),s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"inline-block w-6 h-0.5 bg-yellow-500 rounded border-dashed border"}),"U_eff = 230 V"]})]})]})}function Ff(){const e=["#2563eb","#ef4444","#1a1a1a"],n=["L1","L2","L3"],r=[0,120,240].map(i=>{const l=[];for(let a=0;a<=360;a+=5){const u=15+a/360*330,o=70-Math.sin((a+i)*Math.PI/180)*45;l.push(`${u},${o}`)}return l});return s.jsxs("div",{className:"my-4 bg-gray-50 rounded-xl p-4",children:[s.jsx("h4",{className:"text-sm font-semibold text-gray-700 mb-2 text-center",children:"Drehstrom – 3 Phasen je 120° versetzt"}),s.jsxs("svg",{width:"360",height:"140",viewBox:"0 0 360 140",className:"w-full",children:[s.jsx("line",{x1:"15",y1:"70",x2:"350",y2:"70",stroke:"#d1d5db",strokeWidth:"1"}),r.map((i,l)=>s.jsx("path",{d:`M ${i.join(" L ")}`,fill:"none",stroke:e[l],strokeWidth:"2"},l)),n.map((i,l)=>s.jsx("text",{x:"345",y:52+l*16,fontSize:"11",fontWeight:"bold",fill:e[l],children:i},l)),s.jsx("text",{x:"15",y:"135",fontSize:"10",fill:"#6b7280",children:"0°"}),s.jsx("text",{x:"95",y:"135",fontSize:"10",fill:"#6b7280",children:"90°"}),s.jsx("text",{x:"178",y:"135",fontSize:"10",fill:"#6b7280",children:"180°"}),s.jsx("text",{x:"261",y:"135",fontSize:"10",fill:"#6b7280",children:"270°"}),s.jsx("text",{x:"332",y:"135",fontSize:"10",fill:"#6b7280",children:"360°"})]}),s.jsx("div",{className:"flex justify-center gap-4 text-xs mt-1",children:n.map((i,l)=>s.jsxs("span",{className:"flex items-center gap-1",children:[s.jsx("span",{className:"inline-block w-5 h-1 rounded",style:{backgroundColor:e[l]}}),i," (230 V)"]},l))})]})}function Kf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"320",height:"130",viewBox:"0 0 320 130",className:"drop-shadow-sm",children:[s.jsx("defs",{children:s.jsx("marker",{id:"arr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:s.jsx("path",{d:"M0,0 L0,6 L8,3 z",fill:"#374151"})})}),s.jsx("line",{x1:"10",y1:"65",x2:"45",y2:"65",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#arr)"}),s.jsx("text",{x:"5",y:"55",fontSize:"10",fill:"#374151",children:"6 bar"}),s.jsx("rect",{x:"45",y:"40",width:"60",height:"50",rx:"8",fill:"#dbeafe",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("text",{x:"75",y:"67",textAnchor:"middle",fontSize:"16",fontWeight:"bold",fill:"#1d4ed8",children:"F"}),s.jsx("text",{x:"75",y:"104",textAnchor:"middle",fontSize:"10",fill:"#2563eb",children:"Filter"}),s.jsx("line",{x1:"105",y1:"65",x2:"120",y2:"65",stroke:"#374151",strokeWidth:"2"}),s.jsx("rect",{x:"120",y:"40",width:"60",height:"50",rx:"8",fill:"#dcfce7",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("text",{x:"150",y:"67",textAnchor:"middle",fontSize:"16",fontWeight:"bold",fill:"#15803d",children:"R"}),s.jsx("text",{x:"150",y:"104",textAnchor:"middle",fontSize:"10",fill:"#16a34a",children:"Druckregler"}),s.jsx("line",{x1:"180",y1:"65",x2:"195",y2:"65",stroke:"#374151",strokeWidth:"2"}),s.jsx("rect",{x:"195",y:"40",width:"60",height:"50",rx:"8",fill:"#fef9c3",stroke:"#ca8a04",strokeWidth:"2"}),s.jsx("text",{x:"225",y:"67",textAnchor:"middle",fontSize:"16",fontWeight:"bold",fill:"#854d0e",children:"L"}),s.jsx("text",{x:"225",y:"104",textAnchor:"middle",fontSize:"10",fill:"#ca8a04",children:"Öler"}),s.jsx("line",{x1:"255",y1:"65",x2:"305",y2:"65",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#arr)"}),s.jsx("text",{x:"275",y:"55",fontSize:"10",fill:"#374151",children:"sauber"}),s.jsx("text",{x:"270",y:"80",fontSize:"10",fill:"#374151",children:"geregelt"}),s.jsx("circle",{cx:"150",cy:"28",r:"12",fill:"white",stroke:"#16a34a",strokeWidth:"1.5"}),s.jsx("text",{x:"150",y:"32",textAnchor:"middle",fontSize:"9",fill:"#15803d",children:"bar"})]}),s.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"FRL-Wartungseinheit: immer am Eingang der Pneumatikanlage"})]})}function Tf(){return s.jsx("div",{className:"my-4 flex flex-col items-center",children:s.jsxs("svg",{width:"340",height:"160",viewBox:"0 0 340 160",children:[s.jsx("rect",{x:"40",y:"55",width:"200",height:"60",rx:"4",fill:"#e5e7eb",stroke:"#374151",strokeWidth:"2"}),s.jsx("rect",{x:"155",y:"58",width:"15",height:"54",fill:"#6b7280",stroke:"#374151",strokeWidth:"2"}),s.jsx("rect",{x:"170",y:"76",width:"100",height:"18",fill:"#9ca3af",stroke:"#374151",strokeWidth:"2"}),s.jsx("text",{x:"270",y:"89",textAnchor:"middle",fontSize:"11",fill:"#374151",children:"→"}),s.jsx("rect",{x:"35",y:"50",width:"12",height:"70",rx:"2",fill:"#374151"}),s.jsx("rect",{x:"235",y:"50",width:"12",height:"70",rx:"2",fill:"#374151"}),s.jsx("line",{x1:"80",y1:"55",x2:"80",y2:"30",stroke:"#2563eb",strokeWidth:"2.5"}),s.jsx("circle",{cx:"80",cy:"26",r:"6",fill:"#2563eb"}),s.jsx("text",{x:"80",y:"18",textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"#2563eb",children:"A"}),s.jsx("line",{x1:"200",y1:"55",x2:"200",y2:"30",stroke:"#ef4444",strokeWidth:"2.5"}),s.jsx("circle",{cx:"200",cy:"26",r:"6",fill:"#ef4444"}),s.jsx("text",{x:"200",y:"18",textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"#ef4444",children:"B"}),s.jsx("text",{x:"120",y:"92",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Kolben"}),s.jsx("text",{x:"220",y:"107",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Kolbenstange"}),s.jsx("text",{x:"40",y:"145",fontSize:"10",fill:"#2563eb",children:"Druck auf A → Ausfahren ▶"}),s.jsx("text",{x:"40",y:"158",fontSize:"10",fill:"#ef4444",children:"Druck auf B → Einfahren ◀"})]})})}function Vf(){return s.jsx("div",{className:"my-4 flex flex-col items-center",children:s.jsxs("svg",{width:"380",height:"110",viewBox:"0 0 380 110",children:[s.jsx("defs",{children:s.jsx("marker",{id:"a2",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3",orient:"auto",children:s.jsx("path",{d:"M0,0 L0,6 L7,3 z",fill:"#374151"})})}),s.jsx("rect",{x:"5",y:"30",width:"55",height:"50",rx:"6",fill:"#fee2e2",stroke:"#dc2626",strokeWidth:"1.5"}),s.jsx("text",{x:"32",y:"52",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#dc2626",children:"Netz"}),s.jsx("text",{x:"32",y:"65",textAnchor:"middle",fontSize:"9",fill:"#dc2626",children:"400V"}),s.jsx("text",{x:"32",y:"77",textAnchor:"middle",fontSize:"9",fill:"#dc2626",children:"50 Hz AC"}),s.jsx("line",{x1:"60",y1:"55",x2:"80",y2:"55",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#a2)"}),s.jsx("rect",{x:"80",y:"30",width:"65",height:"50",rx:"6",fill:"#dbeafe",stroke:"#2563eb",strokeWidth:"1.5"}),s.jsx("text",{x:"112",y:"52",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#2563eb",children:"Gleich-"}),s.jsx("text",{x:"112",y:"64",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#2563eb",children:"richter"}),s.jsx("text",{x:"112",y:"76",textAnchor:"middle",fontSize:"9",fill:"#2563eb",children:"AC→DC"}),s.jsx("line",{x1:"145",y1:"55",x2:"165",y2:"55",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#a2)"}),s.jsx("rect",{x:"165",y:"30",width:"65",height:"50",rx:"6",fill:"#f0fdf4",stroke:"#16a34a",strokeWidth:"1.5"}),s.jsx("text",{x:"197",y:"52",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#15803d",children:"Zwischen-"}),s.jsx("text",{x:"197",y:"64",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#15803d",children:"kreis"}),s.jsx("text",{x:"197",y:"76",textAnchor:"middle",fontSize:"9",fill:"#15803d",children:"~560V DC"}),s.jsx("line",{x1:"230",y1:"55",x2:"250",y2:"55",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#a2)"}),s.jsx("rect",{x:"250",y:"30",width:"65",height:"50",rx:"6",fill:"#fef9c3",stroke:"#ca8a04",strokeWidth:"1.5"}),s.jsx("text",{x:"282",y:"52",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#854d0e",children:"Wechsel-"}),s.jsx("text",{x:"282",y:"64",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#854d0e",children:"richter"}),s.jsx("text",{x:"282",y:"76",textAnchor:"middle",fontSize:"9",fill:"#854d0e",children:"DC→AC"}),s.jsx("line",{x1:"315",y1:"55",x2:"335",y2:"55",stroke:"#374151",strokeWidth:"2",markerEnd:"url(#a2)"}),s.jsx("rect",{x:"335",y:"30",width:"40",height:"50",rx:"6",fill:"#ede9fe",stroke:"#7c3aed",strokeWidth:"1.5"}),s.jsx("text",{x:"355",y:"52",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#7c3aed",children:"Mo-"}),s.jsx("text",{x:"355",y:"64",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#7c3aed",children:"tor"}),s.jsx("text",{x:"355",y:"76",textAnchor:"middle",fontSize:"9",fill:"#7c3aed",children:"0-50Hz"}),s.jsx("text",{x:"190",y:"102",textAnchor:"middle",fontSize:"10",fill:"#6b7280",children:"Frequenz variabel → Drehzahl variabel"})]})})}function Of(){return s.jsx("div",{className:"my-4 grid grid-cols-3 gap-3",children:[{title:"2-Leiter",color:"#ef4444",desc:"Leitungswiderstand verfälscht Messung",wires:2},{title:"3-Leiter",color:"#f59e0b",desc:"Einseitige Kompensation",wires:3},{title:"4-Leiter",color:"#16a34a",desc:"Vollständige Kompensation (beste Genauigkeit)",wires:4}].map(({title:e,color:n,desc:t,wires:r})=>s.jsxs("div",{className:"flex flex-col items-center bg-gray-50 rounded-xl p-3",children:[s.jsx("div",{className:"font-semibold text-sm mb-2",style:{color:n},children:e}),s.jsxs("svg",{width:"90",height:"90",viewBox:"0 0 90 90",children:[s.jsx("rect",{x:"30",y:"50",width:"30",height:"30",rx:"4",fill:"#dbeafe",stroke:"#2563eb",strokeWidth:"1.5"}),s.jsx("text",{x:"45",y:"69",textAnchor:"middle",fontSize:"9",fontWeight:"bold",fill:"#1d4ed8",children:"PT100"}),r>=2&&s.jsxs(s.Fragment,{children:[s.jsx("line",{x1:"35",y1:"50",x2:"20",y2:"10",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"50",x2:"70",y2:"10",stroke:"#1a1a1a",strokeWidth:"2"}),s.jsx("circle",{cx:"20",cy:"8",r:"4",fill:"#ef4444"}),s.jsx("circle",{cx:"70",cy:"8",r:"4",fill:"#1a1a1a"})]}),r>=3&&s.jsxs(s.Fragment,{children:[s.jsx("line",{x1:"45",y1:"50",x2:"45",y2:"10",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("circle",{cx:"45",cy:"8",r:"4",fill:"#16a34a"})]}),r>=4&&s.jsxs(s.Fragment,{children:[s.jsx("line",{x1:"40",y1:"50",x2:"27",y2:"10",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("circle",{cx:"27",cy:"8",r:"4",fill:"#2563eb"})]})]}),s.jsx("p",{className:"text-xs text-gray-600 text-center mt-1",children:t})]},e))})}function _f(){const e=[{name:"AND",symbol:"&",color:"#2563eb",bg:"#dbeafe",truth:[["0","0","0"],["0","1","0"],["1","0","0"],["1","1","1"]],desc:"Alle=1 → 1"},{name:"OR",symbol:"≥1",color:"#16a34a",bg:"#dcfce7",truth:[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","1"]],desc:"Eines=1 → 1"},{name:"NOT",symbol:"1",color:"#7c3aed",bg:"#ede9fe",truth:[["0","1"],["1","0"]],desc:"Invertierung"},{name:"XOR",symbol:"=1",color:"#d97706",bg:"#fef9c3",truth:[["0","0","0"],["0","1","1"],["1","0","1"],["1","1","0"]],desc:"Verschieden → 1"}];return s.jsx("div",{className:"my-4 grid grid-cols-2 sm:grid-cols-4 gap-3",children:e.map(n=>s.jsxs("div",{className:"rounded-xl p-3 text-center",style:{background:n.bg,border:`1.5px solid ${n.color}`},children:[s.jsx("div",{className:"font-bold text-sm mb-2",style:{color:n.color},children:n.name}),s.jsxs("svg",{width:"60",height:"44",viewBox:"0 0 60 44",className:"mx-auto mb-2",children:[s.jsx("rect",{x:"10",y:"2",width:"40",height:"40",rx:"6",fill:"white",stroke:n.color,strokeWidth:"2"}),s.jsx("text",{x:"30",y:"26",textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:n.color,children:n.symbol}),s.jsx("line",{x1:"0",y1:"14",x2:"10",y2:"14",stroke:n.color,strokeWidth:"1.5"}),n.truth[0].length>2&&s.jsx("line",{x1:"0",y1:"30",x2:"10",y2:"30",stroke:n.color,strokeWidth:"1.5"}),s.jsx("line",{x1:"50",y1:"22",x2:"60",y2:"22",stroke:n.color,strokeWidth:"1.5"})]}),s.jsxs("table",{className:"text-xs mx-auto border-collapse",children:[s.jsx("thead",{children:s.jsx("tr",{children:n.truth[0].map((t,r)=>s.jsx("th",{className:"px-1.5 font-medium",style:{color:n.color},children:r<n.truth[0].length-1?String.fromCharCode(65+r):"Y"},r))})}),s.jsx("tbody",{children:n.truth.map((t,r)=>s.jsx("tr",{children:t.map((i,l)=>s.jsx("td",{className:`px-1.5 rounded ${i==="1"?"font-bold":"text-gray-400"}`,style:{color:i==="1"?n.color:void 0},children:i},l))},r))})]}),s.jsx("div",{className:"text-xs mt-1 text-gray-500",children:n.desc})]},n.name))})}function Uf(){return s.jsx("div",{className:"my-4 flex flex-col items-center",children:s.jsxs("svg",{width:"280",height:"180",viewBox:"0 0 280 180",children:[s.jsx("circle",{cx:"140",cy:"90",r:"10",fill:"#2563eb"}),s.jsx("line",{x1:"30",y1:"40",x2:"133",y2:"83",stroke:"#16a34a",strokeWidth:"2.5",markerEnd:"url(#a3)"}),s.jsx("line",{x1:"30",y1:"90",x2:"130",y2:"90",stroke:"#16a34a",strokeWidth:"2.5",markerEnd:"url(#a3)"}),s.jsx("line",{x1:"147",y1:"97",x2:"220",y2:"150",stroke:"#ef4444",strokeWidth:"2.5",markerEnd:"url(#a3)"}),s.jsx("line",{x1:"150",y1:"90",x2:"260",y2:"90",stroke:"#ef4444",strokeWidth:"2.5",markerEnd:"url(#a3)"}),s.jsx("line",{x1:"147",y1:"83",x2:"230",y2:"40",stroke:"#ef4444",strokeWidth:"2.5",markerEnd:"url(#a3)"}),s.jsx("defs",{children:s.jsx("marker",{id:"a3",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:s.jsx("path",{d:"M0,0 L0,6 L8,3 z",fill:"currentColor"})})}),s.jsx("text",{x:"20",y:"35",fontSize:"12",fontWeight:"bold",fill:"#16a34a",children:"I₁"}),s.jsx("text",{x:"15",y:"88",fontSize:"12",fontWeight:"bold",fill:"#16a34a",children:"I₂"}),s.jsx("text",{x:"225",y:"158",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"I₃"}),s.jsx("text",{x:"262",y:"88",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"I₄"}),s.jsx("text",{x:"232",y:"35",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"I₅"}),s.jsx("rect",{x:"60",y:"155",width:"160",height:"22",rx:"4",fill:"#dbeafe"}),s.jsx("text",{x:"140",y:"170",textAnchor:"middle",fontSize:"12",fill:"#1d4ed8",children:"I₁ + I₂ = I₃ + I₄ + I₅"}),s.jsx("line",{x1:"35",y1:"168",x2:"55",y2:"168",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("text",{x:"38",y:"178",fontSize:"9",fill:"#16a34a",children:"zufliessend"})]})})}function Hf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"300",height:"130",viewBox:"0 0 300 130",children:[s.jsx("rect",{x:"10",y:"10",width:"120",height:"80",rx:"6",fill:"#f3f4f6",stroke:"#374151",strokeWidth:"2"}),s.jsx("text",{x:"70",y:"35",textAnchor:"middle",fontSize:"11",fontWeight:"bold",fill:"#374151",children:"Schaltschrank"}),s.jsx("rect",{x:"20",y:"50",width:"90",height:"12",rx:"2",fill:"#fef08a",stroke:"#ca8a04",strokeWidth:"1.5"}),s.jsx("text",{x:"65",y:"60",textAnchor:"middle",fontSize:"9",fill:"#854d0e",children:"PE-Schiene"}),s.jsx("line",{x1:"70",y1:"90",x2:"70",y2:"110",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"110",x2:"85",y2:"110",stroke:"#374151",strokeWidth:"2.5"}),s.jsx("line",{x1:"60",y1:"115",x2:"80",y2:"115",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"65",y1:"120",x2:"75",y2:"120",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("rect",{x:"190",y:"30",width:"80",height:"55",rx:"6",fill:"#dbeafe",stroke:"#2563eb",strokeWidth:"1.5"}),s.jsx("text",{x:"230",y:"50",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#1d4ed8",children:"Prüfgerät"}),s.jsx("text",{x:"230",y:"63",textAnchor:"middle",fontSize:"9",fill:"#2563eb",children:"R < 0,3 Ω"}),s.jsx("text",{x:"230",y:"76",textAnchor:"middle",fontSize:"9",fill:"#2563eb",children:"oder PASS ✓"}),s.jsx("line",{x1:"130",y1:"56",x2:"190",y2:"56",stroke:"#16a34a",strokeWidth:"2",strokeDasharray:"6,3"}),s.jsx("circle",{cx:"130",cy:"56",r:"4",fill:"#16a34a"}),s.jsx("circle",{cx:"190",cy:"56",r:"4",fill:"#16a34a"}),s.jsx("text",{x:"158",y:"50",textAnchor:"middle",fontSize:"9",fill:"#15803d",children:"Messleitungen"})]}),s.jsx("p",{className:"text-xs text-gray-500",children:"Schutzleiterprüfung: Widerstand PE-Schiene → Gehäuse/Schutzleiter-Anschluss muss < 0,3 Ω sein"})]})}function Gf(){return s.jsxs("div",{className:"my-4 bg-gray-50 rounded-xl p-4",children:[s.jsx("h4",{className:"text-sm font-semibold text-gray-700 mb-3 text-center",children:"Stern-Dreieck Anlauf – Zeitdiagramm"}),s.jsxs("svg",{width:"360",height:"120",viewBox:"0 0 360 120",className:"w-full",children:[s.jsx("line",{x1:"30",y1:"100",x2:"345",y2:"100",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("text",{x:"350",y:"104",fontSize:"10",fill:"#6b7280",children:"t"}),s.jsx("text",{x:"5",y:"22",fontSize:"10",fill:"#374151",children:"K1"}),s.jsx("line",{x1:"30",y1:"20",x2:"60",y2:"20",stroke:"#d1d5db",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"20",x2:"60",y2:"10",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"10",x2:"340",y2:"10",stroke:"#2563eb",strokeWidth:"2"}),s.jsx("text",{x:"5",y:"47",fontSize:"10",fill:"#374151",children:"K3 Y"}),s.jsx("line",{x1:"30",y1:"45",x2:"60",y2:"45",stroke:"#d1d5db",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"45",x2:"60",y2:"35",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"35",x2:"180",y2:"35",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("line",{x1:"180",y1:"35",x2:"180",y2:"45",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("line",{x1:"180",y1:"45",x2:"340",y2:"45",stroke:"#d1d5db",strokeWidth:"2"}),s.jsx("text",{x:"5",y:"72",fontSize:"10",fill:"#374151",children:"K2 Δ"}),s.jsx("line",{x1:"30",y1:"70",x2:"195",y2:"70",stroke:"#d1d5db",strokeWidth:"2"}),s.jsx("line",{x1:"195",y1:"70",x2:"195",y2:"60",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("line",{x1:"195",y1:"60",x2:"340",y2:"60",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"5",y:"88",fontSize:"9",fill:"#374151",children:"I"}),s.jsx("path",{d:"M 30 90 Q 75 78 120 86 Q 150 89 180 87 Q 185 87 190 82 Q 210 72 250 84 Q 290 90 340 87",fill:"none",stroke:"#f59e0b",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"100",x2:"60",y2:"95",stroke:"#6b7280",strokeWidth:"1"}),s.jsx("text",{x:"60",y:"112",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Start"}),s.jsx("line",{x1:"180",y1:"100",x2:"180",y2:"95",stroke:"#6b7280",strokeWidth:"1"}),s.jsx("text",{x:"180",y:"112",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"~3–5s"}),s.jsx("line",{x1:"195",y1:"100",x2:"195",y2:"95",stroke:"#6b7280",strokeWidth:"1"}),s.jsx("text",{x:"250",y:"112",textAnchor:"middle",fontSize:"9",fill:"#6b7280",children:"Betrieb (Δ)"}),s.jsx("text",{x:"120",y:"30",textAnchor:"middle",fontSize:"9",fill:"#15803d",children:"Stern-Anlauf"}),s.jsx("text",{x:"270",y:"55",textAnchor:"middle",fontSize:"9",fill:"#dc2626",children:"Dreieck-Betrieb"})]})]})}function Zf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"300",height:"270",viewBox:"0 0 300 270",className:"drop-shadow-sm",children:[s.jsx("line",{x1:"75",y1:"10",x2:"75",y2:"45",stroke:"#ef4444",strokeWidth:"2.5"}),s.jsx("line",{x1:"150",y1:"10",x2:"150",y2:"45",stroke:"#ca8a04",strokeWidth:"2.5"}),s.jsx("line",{x1:"225",y1:"10",x2:"225",y2:"45",stroke:"#3b82f6",strokeWidth:"2.5"}),s.jsx("text",{x:"75",y:"8",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#ef4444",children:"L1"}),s.jsx("text",{x:"150",y:"8",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#ca8a04",children:"L2"}),s.jsx("text",{x:"225",y:"8",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:"#3b82f6",children:"L3"}),s.jsx("rect",{x:"60",y:"45",width:"30",height:"23",rx:"1",fill:"white",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"75",y1:"45",x2:"75",y2:"68",stroke:"#374151",strokeWidth:"1"}),s.jsx("rect",{x:"135",y:"45",width:"30",height:"23",rx:"1",fill:"white",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"150",y1:"45",x2:"150",y2:"68",stroke:"#374151",strokeWidth:"1"}),s.jsx("rect",{x:"210",y:"45",width:"30",height:"23",rx:"1",fill:"white",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"225",y1:"45",x2:"225",y2:"68",stroke:"#374151",strokeWidth:"1"}),s.jsx("text",{x:"160",y:"57",fontSize:"10",fill:"#374151",fontWeight:"bold",children:"F1"}),s.jsx("line",{x1:"75",y1:"68",x2:"75",y2:"88",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"150",y1:"68",x2:"150",y2:"88",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"225",y1:"68",x2:"225",y2:"88",stroke:"#374151",strokeWidth:"2"}),s.jsx("circle",{cx:"75",cy:"92",r:"3.5",fill:"#1d4ed8"}),s.jsx("circle",{cx:"150",cy:"92",r:"3.5",fill:"#1d4ed8"}),s.jsx("circle",{cx:"225",cy:"92",r:"3.5",fill:"#1d4ed8"}),s.jsx("line",{x1:"75",y1:"92",x2:"68",y2:"118",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("line",{x1:"150",y1:"92",x2:"143",y2:"118",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("line",{x1:"225",y1:"92",x2:"218",y2:"118",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("circle",{cx:"68",cy:"118",r:"3.5",fill:"#1d4ed8"}),s.jsx("circle",{cx:"143",cy:"118",r:"3.5",fill:"#1d4ed8"}),s.jsx("circle",{cx:"218",cy:"118",r:"3.5",fill:"#1d4ed8"}),s.jsx("text",{x:"240",y:"108",fontSize:"10",fill:"#1d4ed8",fontWeight:"bold",children:"K1"}),s.jsx("line",{x1:"68",y1:"118",x2:"68",y2:"135",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"143",y1:"118",x2:"143",y2:"135",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"218",y1:"118",x2:"218",y2:"135",stroke:"#374151",strokeWidth:"2"}),s.jsx("rect",{x:"53",y:"135",width:"30",height:"22",rx:"2",fill:"#fff7ed",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("path",{d:"M55 146 Q63 140 71 146 Q79 152 83 146",fill:"none",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("rect",{x:"128",y:"135",width:"30",height:"22",rx:"2",fill:"#fff7ed",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("path",{d:"M130 146 Q138 140 146 146 Q154 152 158 146",fill:"none",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("rect",{x:"203",y:"135",width:"30",height:"22",rx:"2",fill:"#fff7ed",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("path",{d:"M205 146 Q213 140 221 146 Q229 152 233 146",fill:"none",stroke:"#ea580c",strokeWidth:"1.5"}),s.jsx("text",{x:"240",y:"148",fontSize:"10",fill:"#ea580c",fontWeight:"bold",children:"Q1"}),s.jsx("line",{x1:"68",y1:"157",x2:"68",y2:"185",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"143",y1:"157",x2:"143",y2:"185",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"218",y1:"157",x2:"218",y2:"185",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"68",y1:"185",x2:"218",y2:"185",stroke:"#374151",strokeWidth:"2.5"}),s.jsx("line",{x1:"143",y1:"185",x2:"143",y2:"204",stroke:"#374151",strokeWidth:"2"}),s.jsx("circle",{cx:"143",cy:"232",r:"28",fill:"#fef3c7",stroke:"#d97706",strokeWidth:"2"}),s.jsx("text",{x:"143",y:"228",textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:"#92400e",children:"M"}),s.jsx("text",{x:"143",y:"244",textAnchor:"middle",fontSize:"10",fill:"#92400e",children:"3~"}),s.jsx("line",{x1:"143",y1:"260",x2:"143",y2:"265",stroke:"#16a34a",strokeWidth:"1.5"}),s.jsx("line",{x1:"133",y1:"265",x2:"153",y2:"265",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("line",{x1:"136",y1:"268",x2:"150",y2:"268",stroke:"#16a34a",strokeWidth:"1.5"}),s.jsx("line",{x1:"139",y1:"271",x2:"147",y2:"271",stroke:"#16a34a",strokeWidth:"1"})]}),s.jsxs("div",{className:"flex flex-wrap gap-2 mt-2 justify-center text-xs",children:[s.jsx("span",{className:"bg-gray-100 px-2 py-1 rounded border",children:"F1 Sicherung"}),s.jsx("span",{className:"bg-blue-100 px-2 py-1 rounded border border-blue-300 text-blue-800",children:"K1 Schütz-Hauptkontakt"}),s.jsx("span",{className:"bg-orange-100 px-2 py-1 rounded border border-orange-300 text-orange-800",children:"Q1 Motorschutzschalter"}),s.jsx("span",{className:"bg-yellow-100 px-2 py-1 rounded border border-yellow-400 text-yellow-800",children:"M Drehstrommotor"})]})]})}function Qf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"520",height:"130",viewBox:"0 0 520 130",className:"w-full drop-shadow-sm",children:[s.jsx("line",{x1:"25",y1:"5",x2:"25",y2:"125",stroke:"#ef4444",strokeWidth:"3"}),s.jsx("text",{x:"25",y:"3",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#ef4444",children:"+24V"}),s.jsx("line",{x1:"495",y1:"5",x2:"495",y2:"125",stroke:"#374151",strokeWidth:"3"}),s.jsx("text",{x:"495",y:"3",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#374151",children:"0V"}),s.jsx("line",{x1:"25",y1:"45",x2:"60",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"35",x2:"60",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"80",y1:"35",x2:"80",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"60",y1:"35",x2:"80",y2:"35",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"70",y:"31",textAnchor:"middle",fontSize:"8",fill:"#ef4444",children:"S0"}),s.jsx("text",{x:"70",y:"64",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"Notaus"}),s.jsx("line",{x1:"80",y1:"45",x2:"110",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"110",y1:"35",x2:"110",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"130",y1:"35",x2:"130",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"110",y1:"35",x2:"130",y2:"35",stroke:"#ea580c",strokeWidth:"2"}),s.jsx("text",{x:"120",y:"31",textAnchor:"middle",fontSize:"8",fill:"#ea580c",children:"Q1"}),s.jsx("text",{x:"120",y:"64",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"Motorschutz"}),s.jsx("line",{x1:"130",y1:"45",x2:"160",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"160",y1:"35",x2:"160",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"180",y1:"35",x2:"180",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"160",y1:"35",x2:"180",y2:"35",stroke:"#374151",strokeWidth:"2"}),s.jsx("text",{x:"170",y:"31",textAnchor:"middle",fontSize:"8",fill:"#374151",children:"S1"}),s.jsx("text",{x:"170",y:"64",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"Stop"}),s.jsx("line",{x1:"180",y1:"45",x2:"210",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("circle",{cx:"210",cy:"45",r:"3",fill:"#374151"}),s.jsx("line",{x1:"210",y1:"35",x2:"210",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"230",y1:"35",x2:"230",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"212",y1:"53",x2:"228",y2:"37",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("text",{x:"220",y:"31",textAnchor:"middle",fontSize:"8",fill:"#16a34a",children:"S2"}),s.jsx("text",{x:"220",y:"64",textAnchor:"middle",fontSize:"8",fill:"#16a34a",children:"Start"}),s.jsx("line",{x1:"230",y1:"45",x2:"340",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"210",y1:"45",x2:"210",y2:"90",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"210",y1:"90",x2:"250",y2:"90",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"250",y1:"80",x2:"250",y2:"100",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"270",y1:"80",x2:"270",y2:"100",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"252",y1:"98",x2:"268",y2:"82",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"260",y:"76",textAnchor:"middle",fontSize:"8",fill:"#1d4ed8",children:"K1"}),s.jsx("text",{x:"260",y:"109",textAnchor:"middle",fontSize:"8",fill:"#1d4ed8",children:"Selbsthalt."}),s.jsx("line",{x1:"270",y1:"90",x2:"340",y2:"90",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("line",{x1:"340",y1:"90",x2:"340",y2:"45",stroke:"#374151",strokeWidth:"1.5"}),s.jsx("circle",{cx:"340",cy:"45",r:"3",fill:"#374151"}),s.jsx("line",{x1:"340",y1:"45",x2:"377",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("ellipse",{cx:"405",cy:"45",rx:"28",ry:"14",fill:"#eff6ff",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"405",y:"42",textAnchor:"middle",fontSize:"9",fontWeight:"bold",fill:"#1d4ed8",children:"K1"}),s.jsx("text",{x:"405",y:"53",textAnchor:"middle",fontSize:"8",fill:"#1d4ed8",children:"Spule"}),s.jsx("line",{x1:"433",y1:"45",x2:"495",y2:"45",stroke:"#374151",strokeWidth:"2"}),s.jsx("text",{x:"260",y:"120",textAnchor:"middle",fontSize:"9",fill:"#1d4ed8",fontWeight:"bold",children:"Selbsthaltung"})]}),s.jsx("p",{className:"text-xs text-gray-600 mt-2 text-center max-w-md",children:"Wenn K1 anzieht → K1-Hilfskontakt schliesst → K1 bleibt angezogen auch nach Loslassen des Starttasters"})]})}function $f(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"520",height:"180",viewBox:"0 0 520 180",className:"w-full drop-shadow-sm",children:[s.jsx("line",{x1:"25",y1:"5",x2:"25",y2:"175",stroke:"#ef4444",strokeWidth:"3"}),s.jsx("text",{x:"25",y:"3",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#ef4444",children:"+24V"}),s.jsx("line",{x1:"495",y1:"5",x2:"495",y2:"175",stroke:"#374151",strokeWidth:"3"}),s.jsx("text",{x:"495",y:"3",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#374151",children:"0V"}),s.jsx("text",{x:"30",y:"48",fontSize:"9",fill:"#16a34a",fontWeight:"bold",children:"→ Rechtslauf"}),s.jsx("line",{x1:"25",y1:"55",x2:"55",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"46",x2:"55",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"72",y1:"46",x2:"72",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"46",x2:"72",y2:"46",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"63",y:"43",textAnchor:"middle",fontSize:"7.5",fill:"#ef4444",children:"S0 NC"}),s.jsx("line",{x1:"72",y1:"55",x2:"100",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"100",y1:"46",x2:"100",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"117",y1:"46",x2:"117",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"100",y1:"46",x2:"117",y2:"46",stroke:"#dc2626",strokeWidth:"2"}),s.jsx("text",{x:"108",y:"43",textAnchor:"middle",fontSize:"7.5",fill:"#dc2626",children:"K2-NC"}),s.jsx("text",{x:"108",y:"70",textAnchor:"middle",fontSize:"7",fill:"#dc2626",children:"Verrieg."}),s.jsx("line",{x1:"117",y1:"55",x2:"150",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"150",y1:"46",x2:"150",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"167",y1:"46",x2:"167",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"152",y1:"62",x2:"165",y2:"48",stroke:"#16a34a",strokeWidth:"2"}),s.jsx("text",{x:"158",y:"43",textAnchor:"middle",fontSize:"7.5",fill:"#16a34a",children:"S1 NO"}),s.jsx("line",{x1:"167",y1:"55",x2:"215",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"215",y1:"46",x2:"215",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"232",y1:"46",x2:"232",y2:"64",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"217",y1:"62",x2:"230",y2:"48",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"223",y:"43",textAnchor:"middle",fontSize:"7.5",fill:"#1d4ed8",children:"K1-Hilfs"}),s.jsx("line",{x1:"232",y1:"55",x2:"350",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("ellipse",{cx:"378",cy:"55",rx:"28",ry:"14",fill:"#eff6ff",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"378",y:"52",textAnchor:"middle",fontSize:"9",fontWeight:"bold",fill:"#1d4ed8",children:"K1"}),s.jsx("text",{x:"378",y:"62",textAnchor:"middle",fontSize:"8",fill:"#1d4ed8",children:"Spule"}),s.jsx("line",{x1:"406",y1:"55",x2:"495",y2:"55",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"378",y1:"69",x2:"378",y2:"130",stroke:"#1d4ed8",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("line",{x1:"378",y1:"130",x2:"100",y2:"130",stroke:"#1d4ed8",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("line",{x1:"100",y1:"130",x2:"100",y2:"116",stroke:"#1d4ed8",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("text",{x:"30",y:"118",fontSize:"9",fill:"#dc2626",fontWeight:"bold",children:"← Linkslauf"}),s.jsx("line",{x1:"25",y1:"125",x2:"55",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"116",x2:"55",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"72",y1:"116",x2:"72",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"55",y1:"116",x2:"72",y2:"116",stroke:"#ef4444",strokeWidth:"2"}),s.jsx("text",{x:"63",y:"113",textAnchor:"middle",fontSize:"7.5",fill:"#ef4444",children:"S0 NC"}),s.jsx("line",{x1:"72",y1:"125",x2:"100",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"100",y1:"116",x2:"100",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"117",y1:"116",x2:"117",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"100",y1:"116",x2:"117",y2:"116",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"108",y:"113",textAnchor:"middle",fontSize:"7.5",fill:"#1d4ed8",children:"K1-NC"}),s.jsx("text",{x:"108",y:"140",textAnchor:"middle",fontSize:"7",fill:"#1d4ed8",children:"Verrieg."}),s.jsx("line",{x1:"117",y1:"125",x2:"150",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"150",y1:"116",x2:"150",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"167",y1:"116",x2:"167",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"152",y1:"132",x2:"165",y2:"118",stroke:"#dc2626",strokeWidth:"2"}),s.jsx("text",{x:"158",y:"113",textAnchor:"middle",fontSize:"7.5",fill:"#dc2626",children:"S2 NO"}),s.jsx("line",{x1:"167",y1:"125",x2:"215",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"215",y1:"116",x2:"215",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"232",y1:"116",x2:"232",y2:"134",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"217",y1:"132",x2:"230",y2:"118",stroke:"#dc2626",strokeWidth:"2"}),s.jsx("text",{x:"223",y:"113",textAnchor:"middle",fontSize:"7.5",fill:"#dc2626",children:"K2-Hilfs"}),s.jsx("line",{x1:"232",y1:"125",x2:"350",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("ellipse",{cx:"378",cy:"125",rx:"28",ry:"14",fill:"#fef2f2",stroke:"#dc2626",strokeWidth:"2"}),s.jsx("text",{x:"378",y:"122",textAnchor:"middle",fontSize:"9",fontWeight:"bold",fill:"#dc2626",children:"K2"}),s.jsx("text",{x:"378",y:"132",textAnchor:"middle",fontSize:"8",fill:"#dc2626",children:"Spule"}),s.jsx("line",{x1:"406",y1:"125",x2:"495",y2:"125",stroke:"#374151",strokeWidth:"2"}),s.jsx("line",{x1:"350",y1:"125",x2:"340",y2:"125",stroke:"#dc2626",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("line",{x1:"340",y1:"125",x2:"340",y2:"60",stroke:"#dc2626",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("line",{x1:"340",y1:"60",x2:"108",y2:"60",stroke:"#dc2626",strokeWidth:"1",strokeDasharray:"5,3"}),s.jsx("line",{x1:"108",y1:"60",x2:"108",y2:"69",stroke:"#dc2626",strokeWidth:"1",strokeDasharray:"5,3"})]}),s.jsx("p",{className:"text-xs text-gray-600 mt-2 text-center max-w-md",children:"K1-NC sperrt K2 | K2-NC sperrt K1 – verhindert gleichzeitiges Einschalten → Kurzschlussschutz"})]})}function Yf(){return s.jsxs("div",{className:"my-4 flex flex-col items-center",children:[s.jsxs("svg",{width:"340",height:"230",viewBox:"0 0 340 230",className:"drop-shadow-sm",children:[s.jsxs("defs",{children:[s.jsx("marker",{id:"arr-blue-bg",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:s.jsx("path",{d:"M0,0 L0,6 L8,3 z",fill:"#1d4ed8"})}),s.jsx("marker",{id:"arr-red-bg",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:s.jsx("path",{d:"M0,0 L0,6 L8,3 z",fill:"#dc2626"})})]}),s.jsx("rect",{x:"5",y:"95",width:"30",height:"40",rx:"4",fill:"#f3f4f6",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("text",{x:"20",y:"112",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"AC"}),s.jsx("text",{x:"20",y:"123",textAnchor:"middle",fontSize:"8",fill:"#6b7280",children:"Trafo"}),s.jsx("line",{x1:"35",y1:"103",x2:"60",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("line",{x1:"35",y1:"127",x2:"60",y2:"115",stroke:"#6b7280",strokeWidth:"1.5"}),s.jsx("line",{x1:"60",y1:"115",x2:"165",y2:"30",stroke:"#1d4ed8",strokeWidth:"2",markerEnd:"url(#arr-blue-bg)"}),s.jsx("text",{x:"95",y:"65",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#1d4ed8",children:"D1"}),s.jsx("line",{x1:"280",y1:"115",x2:"175",y2:"30",stroke:"#1d4ed8",strokeWidth:"2",markerEnd:"url(#arr-blue-bg)"}),s.jsx("text",{x:"245",y:"65",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#1d4ed8",children:"D2"}),s.jsx("line",{x1:"170",y1:"205",x2:"65",y2:"120",stroke:"#dc2626",strokeWidth:"2",markerEnd:"url(#arr-red-bg)"}),s.jsx("text",{x:"95",y:"175",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#dc2626",children:"D3"}),s.jsx("line",{x1:"170",y1:"205",x2:"275",y2:"120",stroke:"#dc2626",strokeWidth:"2",markerEnd:"url(#arr-red-bg)"}),s.jsx("text",{x:"245",y:"175",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#dc2626",children:"D4"}),s.jsx("circle",{cx:"170",cy:"25",r:"5",fill:"#1d4ed8"}),s.jsx("circle",{cx:"60",cy:"115",r:"5",fill:"#6b7280"}),s.jsx("circle",{cx:"280",cy:"115",r:"5",fill:"#6b7280"}),s.jsx("circle",{cx:"170",cy:"205",r:"5",fill:"#dc2626"}),s.jsx("text",{x:"170",y:"18",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#1d4ed8",children:"DC+"}),s.jsx("text",{x:"48",y:"115",textAnchor:"end",fontSize:"10",fill:"#6b7280",children:"AC1"}),s.jsx("text",{x:"292",y:"115",textAnchor:"start",fontSize:"10",fill:"#6b7280",children:"AC2"}),s.jsx("text",{x:"170",y:"218",textAnchor:"middle",fontSize:"10",fontWeight:"bold",fill:"#dc2626",children:"DC-"}),s.jsx("line",{x1:"170",y1:"25",x2:"305",y2:"25",stroke:"#1d4ed8",strokeWidth:"2"}),s.jsx("text",{x:"315",y:"29",fontSize:"10",fontWeight:"bold",fill:"#1d4ed8",children:"+"}),s.jsx("line",{x1:"170",y1:"205",x2:"305",y2:"205",stroke:"#dc2626",strokeWidth:"2"}),s.jsx("text",{x:"315",y:"209",fontSize:"10",fontWeight:"bold",fill:"#dc2626",children:"-"}),s.jsx("line",{x1:"305",y1:"25",x2:"305",y2:"100",stroke:"#1d4ed8",strokeWidth:"1.5"}),s.jsx("line",{x1:"291",y1:"100",x2:"319",y2:"100",stroke:"#1d4ed8",strokeWidth:"2.5"}),s.jsx("line",{x1:"291",y1:"107",x2:"319",y2:"107",stroke:"#dc2626",strokeWidth:"2.5"}),s.jsx("line",{x1:"305",y1:"107",x2:"305",y2:"205",stroke:"#dc2626",strokeWidth:"1.5"}),s.jsx("text",{x:"328",y:"108",fontSize:"9",fill:"#374151",children:"C1"})]}),s.jsx("p",{className:"text-xs text-gray-600 mt-2 text-center max-w-md",children:"D1+D2 leiten positive Halbwelle | D3+D4 leiten negative Halbwelle | C1 glättet Restwelligkeit"})]})}const bu={ohm:Cf,leistung:If,sterndreieck:Lf,sterndreieckzeit:Gf,wechselstrom:Rf,drehstrom:Ff,frl:Kf,zylinder:Tf,fu:Vf,pt100:Of,logik:_f,kirchhoff:Uf,pe_pruefung:Hf,motorkreis:Zf,selbsthaltung:Qf,wendeschaltung:$f,brueckengleichrichter:Yf};function Xf(){const{id:e}=Hc(),n=Ze.find(k=>k.id===e),[t,r]=z.useState(0),{markLessonComplete:i,isLessonComplete:l,getModuleProgress:a}=hr();if(!n)return s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 text-center",children:[s.jsx("p",{className:"text-gray-500",children:"Modul nicht gefunden."}),s.jsx(ue,{to:"/",className:"text-blue-600 hover:underline mt-4 block",children:"← Zurück zum Dashboard"})]});const u=n.lektionen[t],{completed:o,total:d,percent:p}=a(n.id,n.lektionen),h=l(n.id,u.id),m=k=>k.split(`
`).map((S,y)=>S.startsWith("## ")?s.jsx("h2",{className:"text-lg font-bold text-gray-900 mt-5 mb-2 border-b pb-1",children:S.slice(3)},y):S.startsWith("### ")?s.jsx("h3",{className:"font-semibold text-gray-800 mt-4 mb-1",children:S.slice(4)},y):S.startsWith("- ")?s.jsx("li",{className:"ml-4 text-gray-700 list-disc",children:S.slice(2)},y):S===""?s.jsx("div",{className:"my-1"},y):s.jsx("p",{className:"text-gray-700 leading-relaxed",children:S},y));return s.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-6",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4 text-sm text-gray-500",children:[s.jsx(ue,{to:"/",className:"hover:text-blue-600",children:"Dashboard"}),s.jsx("span",{children:"›"}),s.jsxs("span",{className:"text-gray-800 font-medium",children:[n.icon," ",n.titel]})]}),s.jsxs("div",{className:"grid md:grid-cols-4 gap-6",children:[s.jsx("aside",{className:"md:col-span-1",children:s.jsxs("div",{className:"bg-white rounded-xl shadow p-4 sticky top-4",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[s.jsx("span",{className:"text-2xl",children:n.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"font-bold text-sm text-gray-900",children:n.titel}),s.jsxs("div",{className:"text-xs text-gray-500",children:[o,"/",d," gelernt"]})]})]}),s.jsx("div",{className:"h-1.5 bg-gray-200 rounded-full mb-4 overflow-hidden",children:s.jsx("div",{className:"h-full bg-blue-500 rounded-full transition-all",style:{width:`${p}%`}})}),s.jsx("nav",{className:"space-y-1",children:n.lektionen.map((k,S)=>{const y=l(n.id,k.id);return s.jsxs("button",{onClick:()=>r(S),className:`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${S===t?"bg-blue-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[s.jsx("span",{className:`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-xs ${y?"bg-green-500 border-green-500 text-white":"border-gray-300"}`,children:y?"✓":""}),s.jsx("span",{className:"truncate",children:k.titel})]},k.id)})}),s.jsx("div",{className:"mt-4 pt-4 border-t",children:s.jsx(ue,{to:`/quiz/${n.id}`,className:"block w-full text-center text-sm font-medium bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors",children:"Quiz starten →"})})]})}),s.jsx("main",{className:"md:col-span-3",children:s.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[s.jsxs("div",{className:"flex items-start justify-between mb-4",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:u.titel}),h&&s.jsx("span",{className:"bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full",children:"✓ Gelernt"})]}),s.jsx("div",{className:"prose prose-sm max-w-none space-y-1",children:m(u.inhalt)}),u.diagramId&&bu[u.diagramId]&&s.jsxs("div",{className:"mt-6 pt-4 border-t",children:[s.jsx("div",{className:"text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3",children:"Visualisierung"}),bu[u.diagramId]()]}),s.jsxs("div",{className:"mt-8 pt-4 border-t flex items-center justify-between",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsx("button",{onClick:()=>r(k=>Math.max(0,k-1)),disabled:t===0,className:"px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50",children:"← Zurück"}),s.jsx("button",{onClick:()=>r(k=>Math.min(n.lektionen.length-1,k+1)),disabled:t===n.lektionen.length-1,className:"px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50",children:"Weiter →"})]}),s.jsx("button",{onClick:()=>i(n.id,u.id),disabled:h,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${h?"bg-green-100 text-green-700 cursor-default":"bg-blue-600 text-white hover:bg-blue-700"}`,children:h?"✓ Gelernt":"Als gelernt markieren"})]})]})})]})]})}const qf={elektrotechnik:{titel:"Elektrotechnik Quiz",fragen:[{id:1,frage:"Wie lautet das Ohmsche Gesetz?",optionen:["U = R × I","U = R / I","U = I / R","U = R + I"],richtig:0,erklaerung:"Das Ohmsche Gesetz lautet U = R × I: Spannung = Widerstand × Stromstärke."},{id:2,frage:"Ein Widerstand von 470 Ω liegt an 9 V. Wie gross ist der Strom?",optionen:["ca. 19 mA","ca. 52 mA","ca. 0,5 A","ca. 4,2 A"],richtig:0,erklaerung:"I = U / R = 9 / 470 = 0,0191 A ≈ 19 mA."},{id:3,frage:"Was besagt der Knotensatz (1. Kirchhoffsches Gesetz)?",optionen:["Die Summe aller Ströme am Knoten ist null","Die Summe aller Spannungen in einer Masche ist null","Der Strom ist überall gleich","Die Spannung teilt sich auf"],richtig:0,erklaerung:"Am Knoten gilt: Summe der zufliessenden Ströme = Summe der abfliessenden Ströme, also ΣI = 0."},{id:4,frage:"Welche Frequenz hat das Wechselstromnetz in der Schweiz?",optionen:["50 Hz","60 Hz","100 Hz","16,7 Hz"],richtig:0,erklaerung:"In der Schweiz (und ganz Europa) beträgt die Netzfrequenz 50 Hz (50 Schwingungen pro Sekunde)."},{id:5,frage:"Wie lautet die Formel für elektrische Leistung bei Gleichstrom?",optionen:["P = U × I","P = U / I","P = I / U","P = U + I"],richtig:0,erklaerung:"Elektrische Leistung bei DC: P = U × I (Watt = Volt × Ampere)."},{id:6,frage:"Was ist der Effektivwert der Netzspannung in der Schweiz?",optionen:["230 V","325 V","120 V","400 V"],richtig:0,erklaerung:"230 V ist der Effektivwert (RMS). Der Spitzenwert beträgt 230 × √2 ≈ 325 V."},{id:7,frage:"Wie verhalten sich Widerstände in einer Reihenschaltung?",optionen:["Sie addieren sich: R_ges = R1 + R2 + ...","Kehrwerte addieren sich","Sie sind alle gleich","Sie halbieren sich"],richtig:0,erklaerung:"Bei Reihenschaltung: R_ges = R1 + R2 + ... Der Strom ist durch alle Widerstände gleich."},{id:8,frage:"Ein Kondensator sperrt...",optionen:["Gleichstrom","Wechselstrom","Hochfrequenzsignale","Alle Signale"],richtig:0,erklaerung:"Ein Kondensator lässt Wechselstrom durch, sperrt aber Gleichstrom (kapazitiver Widerstand → unendlich bei f=0)."},{id:9,frage:"Was beschreibt der Leistungsfaktor cos φ?",optionen:["Verhältnis von Wirkleistung zu Scheinleistung","Verhältnis von Strom zu Spannung","Wirkungsgrad des Motors","Phasenverschebung in Grad"],richtig:0,erklaerung:"cos φ = P / S (Wirkleistung / Scheinleistung). Bei rein ohmscher Last ist cos φ = 1."},{id:10,frage:"Welche Spannung liegt zwischen zwei Phasen (L1-L2) im Drehstromnetz?",optionen:["400 V","230 V","690 V","115 V"],richtig:0,erklaerung:"Die Leiterspannung (verkettete Spannung) beträgt U_L = √3 × 230 ≈ 400 V."},{id:11,frage:"Wie lautet die Formel für den Wirkungsgrad η?",optionen:["η = P_ab / P_zu (Abgabeleistung / Zugeführte Leistung)","η = P_zu / P_ab","η = U × I","η = P_ab × P_zu"],richtig:0,erklaerung:"Wirkungsgrad η = P_ab / P_zu. Wert zwischen 0 und 1 (0–100%). Verlustleistung: P_V = P_zu - P_ab."},{id:12,frage:"Was ist ein Kurzschluss?",optionen:["Niederohmige Verbindung zwischen Plus und Minus, sehr grosser Strom fliesst","Offener Stromkreis ohne Verbraucher","Kurzfristiger Stromausfall","Überspannung im Netz"],richtig:0,erklaerung:"Kurzschluss: R ≈ 0 Ω, daher I = U/R → sehr grosser Strom. Sicherung oder Kurzschlussschutz löst aus."},{id:13,frage:"Was ist das Funktionsprinzip eines Transformators?",optionen:["Elektromagnetische Induktion zwischen zwei Spulen auf gemeinsamen Eisenkern","Gleichstromwandlung durch Gleichrichter","Mechanische Energieübertragung","Kapazitive Kopplung"],richtig:0,erklaerung:"Trafo: Wechselstrom in Primärspule erzeugt Wechselfeld → induziert Spannung in Sekundärspule. U1/U2 = N1/N2."},{id:14,frage:"Was bewirkt ein Dielektrikum im Kondensator?",optionen:["Erhöht die Kapazität durch grössere Dielektrizitätskonstante","Verringert die Kapazität","Erhöht den Widerstand","Hat keinen Einfluss"],richtig:0,erklaerung:"Dielektrikum (Isolierstoff zwischen den Platten) erhöht die Kapazität: C = ε_r × ε_0 × A / d. Beispiel: Keramik, Folie."},{id:15,frage:"Was besagt die Lenzsche Regel bei Induktion?",optionen:["Induzierter Strom wirkt seiner eigenen Entstehungsursache entgegen","Induktionsspannung ist proportional zur Frequenz","Magnetfeld verstärkt die Bewegung","Induktionsspannung ist immer positiv"],richtig:0,erklaerung:"Lenzsche Regel: Der induzierte Strom erzeugt ein Feld, das der Ursache (Bewegung/Feldänderung) entgegenwirkt. Basis für Bremseffekt."}]},sps:{titel:"SPS-Programmierung Quiz",fragen:[{id:1,frage:"Was bedeutet die Abkürzung SPS?",optionen:["Speicherprogrammierbare Steuerung","Schnelle Prozess-Steuerung","Seriell Programmierbare Software","Standard Programm System"],richtig:0,erklaerung:"SPS steht für Speicherprogrammierbare Steuerung (engl. PLC – Programmable Logic Controller)."},{id:2,frage:"Was ist der OB1 in einer Siemens-SPS?",optionen:["Das zyklisch aufgerufene Hauptprogramm","Ein Datenbaustein","Ein Fehlerorganisationsbaustein","Ein Funktionsbaustein für Zähler"],richtig:0,erklaerung:"OB1 (Organisationsbaustein 1) ist das Hauptprogramm, das vom Betriebssystem zyklisch aufgerufen wird."},{id:3,frage:"In KOP entspricht ein Kontakt mit --| |-- ...",optionen:["Einem Schliesser (Öffner öffnet bei 0)","Einem Öffner (Schliesser öffnet bei 1)","Einer Ausgangs-Spule","Einem Timer"],richtig:0,erklaerung:"--| |-- ist ein Schliesser (Normally Open): Durchgang wenn das zugeordnete Bit = 1 ist."},{id:4,frage:"Welches Adresspräfix haben digitale Eingänge bei Siemens-SPS?",optionen:["I (z.B. I0.0)","Q (z.B. Q0.0)","M (z.B. M0.0)","E (z.B. E0.0)"],richtig:0,erklaerung:"Digitale Eingänge werden mit I adressiert (z.B. I0.0 bis I0.7 für das erste Eingangsbyte). Q steht für Ausgänge."},{id:5,frage:"Was ist ein Funktionsbaustein (FB) im Vergleich zu einer Funktion (FC)?",optionen:["Ein FB hat ein Gedächtnis (Instanz-DB), eine FC nicht","Eine FC hat ein Gedächtnis, ein FB nicht","Beide sind identisch","FB ist schneller als FC"],richtig:0,erklaerung:"FBs haben einen zugehörigen Instanz-Datenbaustein (DB), der Zustände zwischen Aufrufen speichert. FCs haben kein statisches Gedächtnis."},{id:6,frage:"Was macht ein TON-Timer?",optionen:["Einschaltverzögerung: Ausgang nach Ablauf der Zeit = 1","Ausschaltverzögerung: Ausgang nach Ablauf der Zeit = 0","Gibt einen Puls aus","Zählt Impulse"],richtig:0,erklaerung:"TON (Timer On-Delay): Der Ausgang Q wird auf 1 gesetzt, wenn der Eingang IN für die eingestellte Zeit PT aktiv war."},{id:7,frage:"Was ist Profinet?",optionen:["Industrieller Ethernet-Standard von Siemens","Serielles Feldbus-Protokoll","SPS-Programmiersprache","Energiesparstandard"],richtig:0,erklaerung:"Profinet ist ein industrieller Ethernet-Standard (100 Mbit/s) für die Kommunikation zwischen SPS, I/O-Geräten und HMI."},{id:8,frage:"Welche Programmiersprache nach IEC 61131-3 ist textbasiert und ähnelt Pascal?",optionen:["SCL (Structured Control Language)","KOP (Kontaktplan)","FUP (Funktionsplan)","GRAPH (Ablaufsprache)"],richtig:0,erklaerung:"SCL (Structured Control Language) ist eine hochsprachliche Textsprache, ähnlich Pascal oder C. Ideal für komplexe Berechnungen."},{id:9,frage:"Was bewirkt eine SET-Spule --(S)-- im KOP?",optionen:["Setzt Bit dauerhaft auf 1 (auch wenn Bedingung wegfällt)","Setzt Bit nur wenn Bedingung aktiv ist","Setzt Bit auf 0","Startet einen Timer"],richtig:0,erklaerung:"Die SET-Spule setzt das zugeordnete Bit auf 1 und hält es dort, bis eine RESET-Spule es auf 0 setzt."},{id:10,frage:"Was ist die typische Zykluszeit einer industriellen SPS?",optionen:["1–50 ms","1–50 s","100–500 ms","< 0,1 ms"],richtig:0,erklaerung:"Typische SPS-Zykluszeiten liegen zwischen 1 und 50 ms. Zeitkritische Anwendungen (Safety, CNC) können < 1 ms erfordern."},{id:11,frage:"Was ist OPC UA?",optionen:["Offener Kommunikationsstandard für sichere Maschinen-zu-Maschinen-Kommunikation","Eine Siemens-spezifische Schnittstelle","Ein Feldbus für Pneumatik","Ein SPS-Programmierstandard"],richtig:0,erklaerung:"OPC UA (Unified Architecture): herstellerunabhängiger, sicherer Kommunikationsstandard (IEC 62541). Basis für Industrie 4.0 / IIoT."},{id:12,frage:"Was ist der Unterschied zwischen PAE und PAA?",optionen:["PAE = Prozessabbild Eingänge (Snapshot beim Zyklusstart), PAA = Prozessabbild Ausgänge (wird am Zyklusende ausgegeben)","PAE = Permanenter Ausgang, PAA = Permanenter Eingang","Beide sind identisch","PAE ist schneller als PAA"],richtig:0,erklaerung:"PAE: SPS liest alle Eingänge zu Zyklusbeginn. PAA: SPS schreibt alle Ausgänge am Zyklusende. Sorgt für konsistenten Zyklus."},{id:13,frage:"Was macht der NORM-Baustein (FC105) in STEP 7?",optionen:["Skaliert einen Rohwert (z.B. 0–27648) auf physikalischen Messwert (z.B. 0–100 bar)","Normiert die Netzspannung","Setzt alle Merker zurück","Kalibriert Analogeingänge"],richtig:0,erklaerung:"FC105 NORM: Wandelt Analogrohwert (z.B. 0–27648 bei S7-300) linear in einen physikalischen Wert um (z.B. 0,0 bis 100,0 bar)."},{id:14,frage:"Was ist ein Watchdog in der SPS?",optionen:["Überwacht die maximale Zykluszeit und löst Fehler aus wenn überschritten","Ein Sicherheitsbaustein für Not-Aus","Eine Funktion zur Zeitüberwachung in Anlagen","Ein Antivirenprogramm für SPS"],richtig:0,erklaerung:"Watchdog: Überwacht die SPS-Zykluszeit. Überschreitet der Zyklus die max. Zeit (z.B. 150 ms), geht die SPS in STOP. Schutz vor Endlosschleifen."},{id:15,frage:"Welche OBs haben höhere Priorität als OB1?",optionen:["Alarm-OBs (z.B. OB35 Zeitalarme, OB40 Prozessalarme) unterbrechen OB1","Alle OBs haben gleiche Priorität","Nur OB100 (Anlauforganisationsbaustein)","Kein OB hat höhere Priorität als OB1"],richtig:0,erklaerung:"Alarm-OBs (OB35, OB40 usw.) haben höhere Priorität als OB1 und können ihn unterbrechen (präemptives Multitasking)."}]},pneumatik:{titel:"Pneumatik & Hydraulik Quiz",fragen:[{id:1,frage:"Welcher Betriebsdruck ist in der Pneumatik typisch?",optionen:["6–8 bar","0,5–1 bar","100–350 bar","10–20 bar"],richtig:0,erklaerung:"Pneumatische Anlagen arbeiten typischerweise bei 6–8 bar Betriebsdruck."},{id:2,frage:"Was bedeutet ein 5/2-Wegeventil?",optionen:["5 Anschlüsse, 2 Schaltstellungen","5 Ventile, 2 Drücke","5 bar, 2 Zylinder","Ventil für 2 Zylinder"],richtig:0,erklaerung:"5/2-Wegeventil: 5 Anschlüsse (1 Druck, 2 Arbeitsanschlüsse, 2 Entlüftungen), 2 Schaltstellungen."},{id:3,frage:"Welches Bauteil entfernt Wasser und Schmutz aus der Druckluft?",optionen:["Filter (F der FRL-Einheit)","Druckregler (R)","Öler (L)","Magnetventil"],richtig:0,erklaerung:"Der Filter (F) der FRL-Wartungseinheit entfernt Schmutz, Kondenswasser und Öl aus der Druckluft."},{id:4,frage:"Was ist der Unterschied zwischen einfach- und doppeltwirkendem Zylinder?",optionen:["Einfachwirkend: Feder zurück; Doppeltwirkend: Luft in beide Richtungen","Einfachwirkend: Mehr Kraft; Doppeltwirkend: schneller","Kein Unterschied","Einfachwirkend hat zwei Kolben"],richtig:0,erklaerung:"Einfachwirkend: Druckluft nur auf einer Seite, Rückstellung per Federkraft. Doppeltwirkend: Druckluft auf beide Seiten."},{id:5,frage:"Was beschreibt das Pascal'sche Prinzip in der Hydraulik?",optionen:["Druck pflanzt sich gleichmässig in alle Richtungen fort","Hydraulikdruck ist immer konstant","Flüssigkeit fliesst von hoch nach tief","Druck verdoppelt sich mit Temperatur"],richtig:0,erklaerung:"Das Pascalsche Prinzip: Druck in einer eingeschlossenen Flüssigkeit wirkt gleichmässig in alle Richtungen. Grundlage für hydraulische Kraftverstärkung."},{id:6,frage:"Welche Formel berechnet die Kraft eines Pneumatikzylinders?",optionen:["F = p × A × η","F = p / A","F = A / p","F = p + A"],richtig:0,erklaerung:"F = p × A × η (Kraft = Druck × Kolbenfläche × Wirkungsgrad). A = π × d² / 4."},{id:7,frage:"Welche Farbe hat der Druckluft-Anschluss (1/P) am Wegeventil nach ISO 5599?",optionen:["Rot","Blau","Schwarz","Gelb"],richtig:0,erklaerung:"Nach ISO 5599 ist Anschluss 1 (Versorgungsdruck/P) rot gekennzeichnet."},{id:8,frage:"Wozu dient ein Drosselrückschlagventil?",optionen:["Geschwindigkeitsregelung des Zylinders in einer Richtung","Notaus-Funktion","Druckbegrenzung","Luftfilterung"],richtig:0,erklaerung:"Drosselrückschlagventil: In einer Richtung gedrosselt (Geschwindigkeitsregelung), in der anderen Richtung freier Durchgang."},{id:9,frage:"Wie ist Druck definiert?",optionen:["p = F / A (Kraft pro Fläche)","p = A × F","p = F × A²","p = m × a"],richtig:0,erklaerung:"Druck p = F / A: Kraft [N] geteilt durch Fläche [m²], Einheit Pascal [Pa] oder bar."},{id:10,frage:"Was ist ein wesentlicher Vorteil der Hydraulik gegenüber Pneumatik?",optionen:["Sehr viel höhere Kräfte möglich (100–350 bar)","Günstigere Energiekosten","Keine Leckagegefahr","Schnellere Schaltzeiten"],richtig:0,erklaerung:"Hydraulik erlaubt durch sehr hohe Drücke (bis 350 bar) enorm grosse Kräfte bei kompakten Abmessungen."},{id:11,frage:"Was ist ein Tandemzylinder?",optionen:["Zwei Kolben auf einer Kolbenstange in Reihe – doppelte Kraft bei gleichem Durchmesser","Zwei Zylinder parallel geschaltet","Zylinder mit zwei Kolbenstangen","Zylinder mit eingebautem Ventil"],richtig:0,erklaerung:"Tandemzylinder: Zwei Zylinder axial hintereinander auf gemeinsamer Kolbenstange. Doppelte Kraft ohne grösseren Durchmesser."},{id:12,frage:"Wozu dient ein Druckspeicher (Hydrospeicher)?",optionen:["Puffert Energie, dämpft Druckstösse, liefert kurzzeitig hohe Durchflüsse","Erhöht den Systemdruck dauerhaft","Filtert Hydrauliköl","Kühlt das Hydraulikmedium"],richtig:0,erklaerung:"Hydrospeicher (Blasenspeicher): Speichert Energie unter Druck (Stickstoff als Federmedium). Puffert Spitzenlasten, dämpft Druckspitzen."},{id:13,frage:"Was ist Kavitation in Hydrauliksystemen?",optionen:["Bildung und Kollaps von Dampfblasen bei Druckabfall unter Dampfdruck, verursacht Schäden","Überhitzung des Hydrauliköls","Lufteinschlüsse im System","Dichtungsverschleiss durch Druck"],richtig:0,erklaerung:"Kavitation: Lokaler Druckabfall unter Dampfdruck → Dampfblasen entstehen → Blasen kollabieren mit Druckwelle → Schäden an Pumpen, Ventilen."},{id:14,frage:"Wofür wird ein Schnellentlüftungsventil eingesetzt?",optionen:["Erhöht die Ausfahrgeschwindigkeit durch direkte Entlüftung am Zylinder","Reduziert den Arbeitsdruck","Schützt vor Überdruck","Schaltet den Zylinder elektrisch"],richtig:0,erklaerung:"Schnellentlüftungsventil sitzt direkt am Zylinder. Abluft entweicht sofort ohne Umweg durch das Wegeventil → deutlich höhere Kolbengeschwindigkeit."},{id:15,frage:"Was ist der Hauptunterschied zwischen Proportionalventil und einfachem Wegeventil?",optionen:["Proportionalventil regelt Durchfluss/Druck stufenlos, Wegeventil schaltet nur auf/zu","Proportionalventil ist immer elektrisch, Wegeventil mechanisch","Beide sind funktionsgleich","Proportionalventil ist nur für Hydraulik"],richtig:0,erklaerung:"Proportionalventil: Stufenlose Einstellung von Öffnung, Druck oder Durchfluss per elektrischem Signal (0–10 V oder 4–20 mA)."}]},antriebstechnik:{titel:"Antriebstechnik Quiz",fragen:[{id:1,frage:"Was ist die Synchrondrehzahl eines 4-poligen (2 Polpaare) Motors bei 50 Hz?",optionen:["1500 U/min","3000 U/min","750 U/min","1000 U/min"],richtig:0,erklaerung:"n_s = 60 × f / p = 60 × 50 / 2 = 1500 U/min. p = Polpaarzahl (bei 4 Polen = 2 Polpaare)."},{id:2,frage:"Was macht ein Frequenzumrichter?",optionen:["Regelt Drehzahl durch variable Ausgangsfrequenz","Erhöht die Netzspannung","Wandelt DC in AC um","Schützt Motor vor Übertemperatur"],richtig:0,erklaerung:"Ein FU wandelt Netzstrom (AC) in DC um und erzeugt daraus AC mit variabler Frequenz zur Drehzahlregelung."},{id:3,frage:"Wie lautet die Formel für das Nennmoment eines Motors?",optionen:["M_N = P_N × 9550 / n_N","M_N = P_N × n_N","M_N = U × I","M_N = P / U²"],richtig:0,erklaerung:"M_N [Nm] = P_N [kW] × 9550 / n_N [U/min]. Dies ist die Grundformel der Maschinendynamik."},{id:4,frage:"Was bedeutet Energieeffizienzklasse IE3?",optionen:["Premium-Effizienz (> 90% Wirkungsgrad)","Standard-Effizienz","Super-Premium-Effizienz","Mittlere Effizienz"],richtig:0,erklaerung:"IE3 = Premium Efficiency. In Europa seit 2015 für die meisten Motoren vorgeschrieben. Wirkungsgrad > 90%."},{id:5,frage:"Welcher Vorteil hat die Stern-Dreieck-Schaltung beim Anlauf?",optionen:["Anlaufstrom wird auf ca. 1/3 reduziert","Motor läuft mit Volldrehzahl sofort an","Energie wird gespart","Motor dreht in beide Richtungen"],richtig:0,erklaerung:"Im Stern-Anlauf liegt nur U/√3 = 230 V an den Wicklungen → Anlaufstrom ≈ 1/3 des Dreieck-Anlaufstroms."},{id:6,frage:"Was ist das Übersetzungsverhältnis i = 5 bei einem Getriebe?",optionen:["Abtriebsdrehzahl = Antriebsdrehzahl / 5, Moment × 5","Antriebsdrehzahl × 5, Moment / 5","Gleiche Drehzahl, 5× Moment","Beide × 5"],richtig:0,erklaerung:"i = n1/n2: Drehzahl sinkt (n2 = n1/5), Drehmoment steigt (M2 = M1 × i × η = M1 × 5 × η)."},{id:7,frage:"Was ist ein Schrittmotor?",optionen:["Motor mit diskreten Winkelschritten, ohne Encoder","Motor mit Encoder für Positionsregelung","Hydraulikmotor","Motor für Hochspannung"],richtig:0,erklaerung:"Schrittmotor: Bewegt sich in definierten Winkelschritten (z.B. 1,8° = 200 Schritte/U), kein Encoder nötig (open-loop)."},{id:8,frage:"Welcher Motortyp braucht zwingend einen Drehgeber (Encoder)?",optionen:["Servomotor (geregelter Antrieb)","Schrittmotor (open-loop)","Asynchronmotor (ungeregelt)","Gleichstrommotor"],richtig:0,erklaerung:"Servomotoren werden im geschlossenen Regelkreis betrieben und benötigen Lageerfassung durch Encoder oder Resolver."},{id:9,frage:"Welche Kupplung ist selbsthemmend (kann nicht zurückgetrieben werden)?",optionen:["Schneckengetriebe-Kupplung","Stirnradgetriebe","Elastische Kupplung","Magnetkupplung"],richtig:0,erklaerung:"Schneckengetriebe sind typischerweise selbsthemmend (bei kleinen Steigungswinkeln) – Abtrieb kann Antrieb nicht zurückdrehen."},{id:10,frage:"Was bewirkt ein Frequenzumrichter bei halber Nenndrehzahl bei einer Pumpe?",optionen:["Leistungsaufnahme sinkt auf ca. 1/8 (Affinsätzgesetze)","Leistungsaufnahme halbiert sich","Leistungsaufnahme bleibt gleich","Leistungsaufnahme steigt"],richtig:0,erklaerung:"Affine Gesetze: P ~ n³. Bei halber Drehzahl: P = P_N × (0,5)³ = P_N / 8. Enormes Einsparpotenzial!"},{id:11,frage:"Was ist Schlupf beim Asynchronmotor?",optionen:["Differenz zwischen Synchrondrehzahl und Rotordrehzahl in Prozent","Mechanisches Durchrutschen der Kupplung","Spannungsabfall am Stator","Wärmeverlust im Rotor"],richtig:0,erklaerung:"Schlupf s = (n_s - n) / n_s × 100%. Typisch: 2–8% bei Nennlast. Ohne Schlupf kein Drehmoment (kein Induktionseffekt)."},{id:12,frage:"Wie gross ist das Nennmoment eines 11 kW Motors bei 1450 U/min?",optionen:["ca. 72 Nm","ca. 720 Nm","ca. 7,2 Nm","ca. 145 Nm"],richtig:0,erklaerung:"M_N = P × 9550 / n = 11 × 9550 / 1450 ≈ 72,5 Nm. Formel: M [Nm] = P [kW] × 9550 / n [U/min]."},{id:13,frage:"Was ist Feldschwächung beim Frequenzumrichter?",optionen:["Betrieb oberhalb der Nennfrequenz: Spannung konstant, Frequenz steigt → Drehmoment sinkt","Reduzierung der Motorspannung unter Nennlast","Verringerung der Polzahl","Abschalten einzelner Statorwicklungen"],richtig:0,erklaerung:"Feldschwächbereich: Frequenz > Nennfrequenz, Spannung bleibt bei U_N. Magnetfluss sinkt, Drehmoment sinkt, Drehzahl steigt."},{id:14,frage:"Was ist der Hauptunterschied zwischen Synchron- und Asynchronmotor?",optionen:["Synchronmotor dreht exakt mit Netzfrequenz (kein Schlupf), Asynchronmotor hat Schlupf","Synchronmotor ist immer schneller","Asynchronmotor braucht DC-Erregung","Kein wesentlicher Unterschied"],richtig:0,erklaerung:"Synchronmotor: n = n_s (kein Schlupf), DC-Erregung oder Permanentmagnet. Asynchronmotor: n < n_s durch Schlupf, keine Erregung nötig."},{id:15,frage:"Welche Drehzahl hat ein Motor mit 3 Polpaaren bei 50 Hz (Synchrondrehzahl)?",optionen:["1000 U/min","1500 U/min","3000 U/min","750 U/min"],richtig:0,erklaerung:"n_s = 60 × f / p = 60 × 50 / 3 = 1000 U/min. Mit p = Polpaarzahl. 2 Polpaare → 1500 U/min, 1 Polpaar → 3000 U/min."}]},messtechnik:{titel:"Messtechnik Quiz",fragen:[{id:1,frage:"Was ist das Standardsignal für analoge Messumformer in der Industrie?",optionen:["4–20 mA","0–10 V","0–20 mA","±10 V"],richtig:0,erklaerung:"4-20 mA ist der Standard: 4 mA = Messbereichsanfang, 20 mA = Messbereichsende. Leitungsbruch erkennbar (Signal < 4 mA)."},{id:2,frage:"Welcher Sensor eignet sich für die Erkennung von Kunststoffteilen ohne Berührung?",optionen:["Kapazitiver Näherungsschalter","Induktiver Näherungsschalter","Drucktransmitter","Thermoelement"],richtig:0,erklaerung:"Kapazitiver Näherungsschalter erkennt alle Materialien (Metall, Kunststoff, Flüssigkeiten) über Kapazitätsänderung."},{id:3,frage:"Welchen Widerstand hat ein PT100 bei 0°C?",optionen:["100 Ω","1000 Ω","0 Ω","470 Ω"],richtig:0,erklaerung:"PT100 = Platin-Widerstandsthermometer mit 100 Ω bei 0°C. PT1000 hat 1000 Ω bei 0°C."},{id:4,frage:"Was ist ein induktiver Näherungsschalter?",optionen:["Erkennt metallische Objekte kontaktlos über Wirbelstrome","Misst Abstände mit Ultraschall","Schaltet bei Lichtunterbrechung","Misst Temperaturen"],richtig:0,erklaerung:"Induktiver Näherungsschalter: Das Spulenfeld erzeugt Wirbelströme im Metall, die das Feld dämpfen → Schaltung."},{id:5,frage:"Was bedeutet Messabweichung ±0,5% MBE bei einem 100 bar Drucktransmitter?",optionen:["Fehler von ±0,5 bar","Fehler von ±0,5%","Fehler von ±5 bar","Fehler von 0,5 Pa"],richtig:0,erklaerung:"±0,5% MBE (Messbereichsendwert): 0,5% von 100 bar = ±0,5 bar absoluter Fehler."},{id:6,frage:"Für welchen Temperaturbereich ist ein Typ-K Thermoelement geeignet?",optionen:["-200°C bis 1300°C","0°C bis 200°C","-50°C bis 400°C","0°C bis 50°C"],richtig:0,erklaerung:"Thermoelement Typ K (NiCr-Ni): -200°C bis +1300°C. Günstig, robust, in der Industrie am weitesten verbreitet."},{id:7,frage:"Was ist der Schutzgrad IP67?",optionen:["Staubdicht + Eintauchen bis 1m/30 min","Spritzwasser + staubgeschützt","Kein Schutz + Tropfwasserschutz","Vollständig wasserdicht + staubfrei"],richtig:0,erklaerung:"IP67: Erste Ziffer 6 = staubdicht, zweite Ziffer 7 = Schutz gegen Eintauchen (1 m, 30 min)."},{id:8,frage:"Was ist Hysterese bei einem Sensor?",optionen:["Unterschied zwischen Mess- und Rückschaltwert","Maximale Messabweichung","Reaktionszeit des Sensors","Drift über die Zeit"],richtig:0,erklaerung:"Hysterese: Unterschied zwischen dem Wert beim Ansteigen und beim Abfallen des Messsignals (z.B. bei Druckschaltern)."},{id:9,frage:"Welchen Ausgang haben die meisten industriellen digitalen Näherungsschalter?",optionen:["PNP Transistorausgang (24 V DC)","Relaisausgang","Spannungsausgang 0–10 V","Stromausgang 4–20 mA"],richtig:0,erklaerung:"Standard in der Industrie: PNP-Transistorausgang (schaltet 24 V DC). NPN ist möglich, PNP ist europäischer Standard."},{id:10,frage:"Was ist eine Messkette?",optionen:["Alle Komponenten vom Sensor bis zur Auswertung (SPS)","Eine Reihe von Messgeräten","Mehrere Sensoren in Reihe","Kalibriervorschrift"],richtig:0,erklaerung:"Messkette: Prozess → Sensor → Messumformer → Signal → Auswerteeinheit (SPS/PC). Jede Stufe kann Fehler einbringen."},{id:11,frage:"Was ist eine Wheatstone-Brücke?",optionen:["Messschaltung mit 4 Widerständen zur präzisen Widerstandsmessung (Brückenspannung = 0 bei Abgleich)","Eine Brückenkonstruktion aus Widerständen","Transformatorschaltung für Messgeräte","Parallelschaltung von Messgeräten"],richtig:0,erklaerung:"Wheatstone-Brücke: 4 Widerstände in Brückenschaltung. Abgeglichen wenn R1/R2 = R3/R4. Anwendung: DMS, PT100, Präzisionsmessungen."},{id:12,frage:"Was ist der Hauptvorteil von 4–20 mA gegenüber 0–10 V?",optionen:["Leitungsbrucherkennung (0 mA = Fehler), störsicherer bei langen Leitungen","4–20 mA ist einfacher zu messen","Geringerer Energieverbrauch","0–10 V ist veraltet"],richtig:0,erklaerung:"4–20 mA: 0 mA = Kabelbruch erkennbar, Stromsignal ist störsicher (keine Spannungsabfälle durch Leitungswiderstand)."},{id:13,frage:"Was ist der Unterschied zwischen Messgenauigkeit und Auflösung?",optionen:["Genauigkeit = Abweichung vom wahren Wert; Auflösung = kleinste unterscheidbare Änderung","Beide Begriffe bedeuten dasselbe","Auflösung ist immer grösser als Genauigkeit","Genauigkeit ist immer besser als Auflösung"],richtig:0,erklaerung:"Auflösung: kleinste messbare Änderung (z.B. 0,01 bar). Genauigkeit: Abweichung vom wahren Wert (z.B. ±0,5% MBE). Hohe Auflösung ≠ hohe Genauigkeit!"},{id:14,frage:"Was versteht man unter Drift bei Sensoren?",optionen:["Langsame Veränderung des Ausgangssignals über Zeit ohne Änderung der Messgrösse","Schwankungen des Signals durch Vibration","Abweichung bei verschiedenen Temperaturen","Schnelle Signaländerungen (Rauschen)"],richtig:0,erklaerung:"Drift: Langsame, systematische Verschiebung des Nullpunkts oder der Empfindlichkeit über Zeit oder Temperatur. Kalibrierung nötig."},{id:15,frage:"Ein Encoder hat 1000 PPR (Pulse per Revolution). Der Motor dreht bei 300 U/min. Wie viele Impulse pro Sekunde?",optionen:["5000 Impulse/s","300 Impulse/s","1000 Impulse/s","30000 Impulse/s"],richtig:0,erklaerung:"300 U/min ÷ 60 s = 5 U/s. 5 U/s × 1000 PPR = 5000 Impulse/s. Die SPS muss diese Frequenz erfassen können."}]},mechanik:{titel:"Mechanik Quiz",fragen:[{id:1,frage:"Was bedeutet Festigkeitsklasse 8.8 bei einer Schraube?",optionen:["Zugfestigkeit 800 MPa, Streckgrenze 640 MPa","Gewinde M8, 8 mm Länge","Härtegrad 8","Anzugsmoment 8 Nm"],richtig:0,erklaerung:"Klasse 8.8: Zugfestigkeit = 8×100 = 800 MPa, Streckgrenze = 8×8×10 = 640 MPa."},{id:2,frage:"Was beschreibt eine Spielpassung (z.B. H7/f7)?",optionen:["Bohrung immer grösser als Welle → freies Spiel","Welle grösser als Bohrung → Presspassung","Gleich gross → Übergangspassung","Zufällig Spiel oder Überdeckung"],richtig:0,erklaerung:"Spielpassung: Die Bohrung ist immer grösser als die Welle. Die Teile können relativ leicht zusammen- und ausgebaut werden."},{id:3,frage:"Was beschreibt das Hookesche Gesetz?",optionen:["F = c × x (Federkraft proportional zur Auslenkung)","F = m × a","F = p × A","F = U × I"],richtig:0,erklaerung:"Hookesches Gesetz: Federkraft F [N] = Federkonstante c [N/mm] × Auslenkung x [mm]. Gilt im elastischen Bereich."},{id:4,frage:"Welche Genauigkeit hat eine Mikrometerschraube typischerweise?",optionen:["±0,01 mm","±0,5 mm","±0,1 mm","±1 mm"],richtig:0,erklaerung:"Eine Mikrometerschraube hat eine Messgenauigkeit von ±0,01 mm (10 µm). Besser als ein Messschieber (±0,05 mm)."},{id:5,frage:"Wie berechnet sich das Drehmoment M?",optionen:["M = F × r (Kraft × Hebelarm)","M = F / r","M = F × v","M = m × a × r²"],richtig:0,erklaerung:"Drehmoment M [Nm] = Kraft F [N] × Hebelarm r [m] (senkrechter Abstand zur Drehachse)."},{id:6,frage:"Warum soll ein Wälzlager NIE mit dem Hammer eingebaut werden?",optionen:["Schläge beschädigen Laufbahnen und Kugeln","Hammer ist zu schwach","Lager könnte rosten","Vorschrift ohne technischen Grund"],richtig:0,erklaerung:"Hammerschläge erzeugen Brinelling (Eindrücke in Laufbahnen durch Kugeln), was zu frühzeitigem Ausfall führt."},{id:7,frage:"Was ist ein wesentlicher Vorteil von Edelstahl V4A (1.4404) gegenüber V2A (1.4301)?",optionen:["Beständig gegen Chloride (Meerwasser, Chemikalien)","Höhere Festigkeit","Günstiger in der Herstellung","Besser schweissbar"],richtig:0,erklaerung:"V4A enthält Molybdän (Mo), das die Beständigkeit gegen Chloride (Meerwasser, Salze) erheblich verbessert."},{id:8,frage:"Was ist die Gewichtskraft einer Masse von 100 kg?",optionen:["981 N (≈ 1 kN)","100 N","9,81 N","10 000 N"],richtig:0,erklaerung:"G = m × g = 100 kg × 9,81 m/s² = 981 N ≈ 1 kN. Faustformel: 1 kg ≈ 10 N."},{id:9,frage:"Welcher Querschnitt hat Polyamid (PA) als Maschinenelement?",optionen:["Gleitlager und Zahnräder (selbstschmierend)","Strukturteile und Gehäuse","Dichtungen und O-Ringe","Elektrische Isolation"],richtig:0,erklaerung:"PA (Polyamid) hat gute Gleiteigenschaften und ist selbstschmierend, ideal für Gleitlager, Führungen und Zahnräder."},{id:10,frage:"Was bedeutet Toleranzfeld H7 bei einer Bohrung?",optionen:["Enge Toleranz, Nulllinie am Grundabmass, Standard-Passbohrung","Weite Toleranz mit Überdeckung","Enge Toleranz für Wellen","Zufällige Toleranz"],richtig:0,erklaerung:"H7: Grossbuchstabe = Bohrung, H bedeutet Grundabmass = 0 (Null oben), 7 = Toleranzgrad (eng). Standardbohrung für Passungen."},{id:11,frage:"Was ist Brinelling bei Wälzlagern?",optionen:["Eindrücke in den Laufbahnen durch Kugeln bei statischer Überlast oder Schlägen","Korrosion der Lagerringe","Verschleiss durch Mangelschmierung","Thermische Überlastung des Lagers"],richtig:0,erklaerung:"Brinelling (falsches Brinelling): Eindrücke in Laufbahnen durch Kugeln bei Vibrationen ohne Rotation oder durch Schläge beim Einbau."},{id:12,frage:"Wie berechnet sich die Schnittgeschwindigkeit v_c beim Drehen?",optionen:["v_c = π × d × n / 1000 [m/min]","v_c = d × n","v_c = π × d² / n","v_c = n / d"],richtig:0,erklaerung:"v_c = π × d [mm] × n [U/min] / 1000 = Schnittgeschwindigkeit in m/min. Beispiel: d=50 mm, n=800 U/min → v_c = 125,6 m/min."},{id:13,frage:"Was beschreibt die Streckgrenze R_e eines Werkstoffs?",optionen:["Die Spannung, ab der plastische (bleibende) Verformung einsetzt","Die maximale Bruchspannung","Die Elastizitätsgrenze für Federn","Der Härtewert nach Brinell"],richtig:0,erklaerung:"Streckgrenze R_e: Bis hierhin elastisch (Hookesches Gesetz), ab hier plastisch. Bei Schrauben: Anzugsmoment darf R_e nicht überschreiten."},{id:14,frage:"Was beschreibt die Kerbwirkungszahl β_k?",optionen:["Verminderung der Dauerfestigkeit durch Kerben (Nuten, Bohrungen, Absätze)","Härte des Werkstoffs im Kerbbereich","Maximale zulässige Kerbtiefe","Biegesteifigkeit bei Kerbschlag"],richtig:0,erklaerung:"Kerbwirkungszahl β_k = 1,5–3: Kerben erhöhen lokale Spannungen. σ_lokal = β_k × σ_nenn. Grosse Radien und polierte Oberflächen reduzieren Kerbwirkung."},{id:15,frage:"Welche Funktion hat eine Passfeder?",optionen:["Überträgt Drehmoment zwischen Welle und Nabe (formschlüssige Verbindung)","Sichert die Axiallage der Nabe","Gleicht Winkelversatz aus","Verhindert Lagerversagen"],richtig:0,erklaerung:"Passfeder: Liegt in einer Nut in Welle und Nabe, überträgt Drehmoment formschlüssig. DIN 6885. Keine Axialsicherung (dafür Sicherungsringe)."}]},digitaltechnik:{titel:"Digitaltechnik Quiz",fragen:[{id:1,frage:"Was ist der Dezimalwert von Binärzahl 1010?",optionen:["10","5","12","8"],richtig:0,erklaerung:"1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10₁₀."},{id:2,frage:"Was ergibt 0xFF in Dezimal?",optionen:["255","16","256","128"],richtig:0,erklaerung:"0xFF: F=15, F=15. 15×16 + 15×1 = 240 + 15 = 255."},{id:3,frage:"Wann hat ein AND-Gatter mit 3 Eingängen Ausgang = 1?",optionen:["Wenn alle 3 Eingänge = 1 sind","Wenn mindestens 1 Eingang = 1","Wenn genau 2 Eingänge = 1","Wenn alle 3 = 0"],richtig:0,erklaerung:"AND: Ausgang = 1 nur wenn ALLE Eingänge = 1. Bei 3 Eingängen: A AND B AND C = 1."},{id:4,frage:"Wie viele verschiedene Kombinationen hat ein 4-Bit-Binärwort?",optionen:["16 (0–15)","8 (0–7)","32 (0–31)","4 (0–3)"],richtig:0,erklaerung:"4 Bits: 2⁴ = 16 Kombinationen (0000 bis 1111 = 0 bis 15)."},{id:5,frage:"Was besagt das De Morgansche Gesetz NOT(A AND B) = ?",optionen:["NOT A OR NOT B","NOT A AND NOT B","A OR B","NOT(A OR B)"],richtig:0,erklaerung:"De Morgan: NOT(A AND B) = NOT A OR NOT B. Entsprechend: NOT(A OR B) = NOT A AND NOT B."},{id:6,frage:"Was ist ein D-Flipflop?",optionen:["Übernimmt D-Eingang bei Taktflanke in den Ausgang","Gibt kontinuierlich D-Eingang aus","Invertiert D bei jedem Takt","Zähler mit D-Eingang"],richtig:0,erklaerung:"D-Flipflop: Bei steigender Taktflanke wird der D-Eingang als neuer Zustand Q gespeichert (Data-Flipflop)."},{id:7,frage:"Was ist ein NAND-Gatter?",optionen:["Negiertes AND: Ausgang = 0 nur wenn alle Eingänge = 1","Gatter mit n Eingängen","Gleiches wie AND","Nur 2 Eingänge erlaubt"],richtig:0,erklaerung:"NAND = NOT AND. Y = NOT(A AND B). Ausgang = 0 nur wenn ALLE Eingänge = 1, sonst = 1."},{id:8,frage:"Wie viele Bytes hat ein 16-Bit-Datenwort?",optionen:["2 Bytes","1 Byte","4 Bytes","8 Bytes"],richtig:0,erklaerung:"1 Byte = 8 Bit. 16 Bit / 8 Bit = 2 Bytes. In der SPS: Merkerwort MW10 = MB10 (High-Byte) + MB11 (Low-Byte)."},{id:9,frage:"Was unterscheidet ein Schaltnetz von einem Schaltwerk?",optionen:["Schaltwerk speichert Zustände (Flipflops), Schaltnetz nicht","Schaltnetz ist schneller","Schaltwerk hat mehr Eingänge","Kein Unterschied"],richtig:0,erklaerung:"Schaltnetz: Ausgang nur von aktuellen Eingängen abhängig. Schaltwerk: Ausgang hängt auch vom gespeicherten Zustand ab."},{id:10,frage:"Was ist XOR (Exklusives ODER)?",optionen:["Ausgang = 1 wenn Eingänge verschieden sind","Ausgang = 1 wenn beide Eingänge = 1","Ausgang = NOT(A OR B)","Ausgang immer = 1"],richtig:0,erklaerung:"XOR: Ausgang = 1 wenn Eingänge VERSCHIEDEN sind (A=0,B=1 oder A=1,B=0). Bei gleichen Eingängen: Ausgang = 0."},{id:11,frage:"Was ist ein Multiplexer (MUX)?",optionen:["Wählt einen von mehreren Eingängen aus und leitet ihn zum Ausgang weiter","Verstärkt digitale Signale","Wandelt seriell in parallel","Addiert mehrere Signale"],richtig:0,erklaerung:"Multiplexer (n:1): Wählt über Steuerleitungen S einen von 2^n Eingängen aus. Demultiplexer macht das Gegenteil (1:n)."},{id:12,frage:"Was ist der Vorteil des Gray-Codes gegenüber dem normalen Binärcode?",optionen:["Zwischen zwei benachbarten Werten ändert sich immer nur 1 Bit → kein Fehler bei Übergängen","Gray-Code ist kompakter","Gray-Code erlaubt grössere Zahlen","Gray-Code ist einfacher zu berechnen"],richtig:0,erklaerung:"Gray-Code: Pro Zähltick immer nur 1 Bit-Änderung. Verhindert Fehler beim Lesen von Drehgebern bei Übergangszuständen."},{id:13,frage:"Was ist ein Schieberegister?",optionen:["Flipflop-Kette, die Daten taktsynchron um eine Position verschiebt","Register mit variabler Bitbreite","Speicher für Dezimalzahlen","Pufferverstärker für Signale"],richtig:0,erklaerung:"Schieberegister: Flipflops in Reihe. Jeder Takt schiebt Daten um 1 Position. Anwendung: Serien-Parallel-Wandlung, Verzögerung, CRC."},{id:14,frage:"Wozu dient eine CRC-Prüfsumme?",optionen:["Erkennt Übertragungsfehler in Datenpaketen (Fehlererkennung, kein Korrektur)","Verschlüsselt Daten","Komprimiert Daten","Prüft die Spannungsversorgung"],richtig:0,erklaerung:"CRC (Cyclic Redundancy Check): Mathematisch berechnete Prüfsumme. Empfänger berechnet CRC neu – stimmt sie nicht → Übertragungsfehler erkannt."},{id:15,frage:"Was ist der Hauptunterschied zwischen RISC und CISC Prozessoren?",optionen:["RISC: Wenige einfache Befehle, schnelle Ausführung; CISC: Viele komplexe Befehle, mehr Flexibilität","RISC ist immer schneller","CISC hat weniger Transistoren","Kein praktischer Unterschied mehr"],richtig:0,erklaerung:"RISC (z.B. ARM): Wenige, einfache Befehle, 1 Takt pro Befehl, viele Register. CISC (z.B. x86): Komplexe Befehle, mehr Mikrocode."}]},arbeitssicherheit:{titel:"Arbeitssicherheit Quiz",fragen:[{id:1,frage:"Was ist der erste Schritt der 5 Sicherheitsregeln beim Arbeiten an Elektroanlagen?",optionen:["Freischalten (Anlage stromlos machen)","Gegen Wiedereinschalten sichern","Spannungsfreiheit feststellen","Erden und Kurzschliessen"],richtig:0,erklaerung:"Reihenfolge: 1. Freischalten, 2. Gegen Wiedereinschalten sichern, 3. Spannungsfreiheit feststellen, 4. Erden und Kurzschliessen, 5. Abschranken."},{id:2,frage:"Welcher Fehlerstrom löst einen 30-mA FI-Schalter (Personenschutz) aus?",optionen:["≥ 30 mA Differenzstrom zwischen L und N","≥ 30 A Überstrom","≥ 300 mA","≥ 10 mA"],richtig:0,erklaerung:"FI-Schalter misst Differenz zwischen L- und N-Leiter. Bei Differenz ≥ 30 mA (Fehlerstrom) Auslösung in < 40 ms."},{id:3,frage:"Was bedeutet Schutzklasse II?",optionen:["Schutzisolierung (doppelte Isolierung), kein Schutzleiter","Geerdet mit Schutzleiter","Schutzkleinspannung < 50 V","Kein Berührungsschutz"],richtig:0,erklaerung:"Schutzklasse II: Schutzisolierung – doppelte oder verstärkte Isolierung ersetzt den Schutzleiter. Symbol: □ im Quadrat."},{id:4,frage:"Was bedeutet IP54?",optionen:["Staubgeschützt + Spritzwasserschutz","Staubdicht + Tauchschutz","Kein Staub- + kein Wasserschutz","Berührungsschutz + Regenschutz"],richtig:0,erklaerung:"IP54: Erste Ziffer 5 = staubgeschützt (nicht vollständig dicht), Zweite Ziffer 4 = Spritzwasserschutz aus allen Richtungen."},{id:5,frage:"Was ist bei einem Elektrounfall ALS ERSTES zu tun?",optionen:["Anlage freischalten und Selbstschutz sicherstellen","Sofort Person anfassen und wegziehen","Notruf 144 anrufen","Person mit Wasser kühlen"],richtig:0,erklaerung:"Selbstschutz zuerst! Niemals spannungsführende Person direkt anfassen. Erst Strom abschalten, dann helfen."},{id:6,frage:"Welcher Feuerlöscher ist für brennende Elektronik geeignet?",optionen:["CO₂-Löscher","Wasserlöscher","Schaumlöscher","ABC-Pulverlöscher"],richtig:0,erklaerung:"CO₂-Löscher hinterlässt keine Rückstände und ist elektrisch nicht leitfähig – ideal für Elektronik und Schaltschränke."},{id:7,frage:"Was ist die NIN in der Schweiz?",optionen:["Niederspannungs-Installations-Norm (Electrosuisse)","Norm für Industrienetzwerke","Vorschrift der SUVA","Normierung für Industrienormen"],richtig:0,erklaerung:"NIN = Niederspannungs-Installations-Norm. Herausgegeben von Electrosuisse, verbindlich für alle elektrischen Installationen in der Schweiz."},{id:8,frage:"Ab welchem Körperstrom beginnt Muskelkrampf (Loslassstrom)?",optionen:["> 10 mA (Wechselstrom)","> 50 mA","> 1 mA","> 100 mA"],richtig:0,erklaerung:"Bei Wechselstrom: ~1 mA spürbar, >10 mA Muskelkrampf (kann nicht loslassen!), >80 mA Herzkammerflimmern möglich."},{id:9,frage:"Was ist Brandklasse B?",optionen:["Flüssigkeitsbrand (Öl, Benzin, Lacke)","Feste Stoffe (Holz, Papier)","Gase (Propan, Erdgas)","Metallebrand (Magnesium)"],richtig:0,erklaerung:"Brandklasse B = Flüssigkeitsbrände und flüssig werdende Stoffe. Keinen Wasserlöscher verwenden! → Verpuffungsgefahr."},{id:10,frage:"Welche Schutzhandschuhe sind für Arbeiten unter 1000 V AC geeignet?",optionen:["Klasse 0 (bis 1000 V AC)","Klasse 00 (bis 500 V)","Klasse 1 (bis 7500 V)","Normale Arbeitshandschuhe"],richtig:0,erklaerung:"Isolierende Handschuhe Klasse 0: geprüft bis 1000 V AC / 1500 V DC. Für Niederspannungsarbeiten bis 1 kV."},{id:11,frage:"Was ist eine Betriebsanweisung?",optionen:["Schriftliche Anweisung für sicheres Arbeiten mit Gefahrstoffen oder an Maschinen (nach GefStoffV/BetrSichV)","Eine allgemeine Arbeitsanweisung des Vorgesetzten","Technische Dokumentation einer Maschine","Ein Wartungsplan"],richtig:0,erklaerung:"Betriebsanweisung (BA): Pflichtdokument für Arbeitsplätze mit Gefahrstoffen oder gefährlichen Maschinen. Enthält: Gefahren, Schutzmassnahmen, Verhalten bei Unfall."},{id:12,frage:"Welche Mindestbreite muss ein Fluchtweg haben?",optionen:["Mindestens 0,9 m (lichte Breite) nach Arbeitsstättenverordnung","Mindestens 1,5 m","Mindestens 0,5 m","Keine gesetzliche Vorschrift"],richtig:0,erklaerung:"Fluchtwege: Mindest-lichte Breite 0,9 m (bei mehr als 5 Personen empfohlen 1,0 m). Freizuhalten, keine Hindernisse. ASR A2.3."},{id:13,frage:"Welche Farbe kennzeichnet explosive Gefahrstoffe (GHS)?",optionen:["Orangefarbenes Piktogramm (Bombe/Explosion) auf weissem Grund","Rotes Piktogramm","Gelbes Dreieck mit Ausrufezeichen","Blaues Schild"],richtig:0,erklaerung:"GHS01 (explosive Stoffe): Schwarze Bombe auf weiss-orangem Piktogramm (GHS-System). Farbe ist orange/rotes Rahmensymbol."},{id:14,frage:"Was bedeutet SIL 2 (Safety Integrity Level 2)?",optionen:["Wahrscheinlichkeit eines gefährlichen Ausfalls: 10⁻⁷ bis 10⁻⁶ pro Stunde (mittlere Anforderung)","Sicherheitsstufe für einfache Schutzfunktionen","Höchste Sicherheitsstufe","Standard für normale Maschinen ohne Sicherheitsfunktion"],richtig:0,erklaerung:"SIL 2: PFH = 10⁻⁷ bis 10⁻⁶/h. Typisch für Lichtvorhänge, Schutztüren, zweikanalige Not-Aus. SIL 3 für die höchsten Anforderungen."},{id:15,frage:"Wie oft müssen PSA (Persönliche Schutzausrüstung) geprüft werden?",optionen:["Vor jeder Benutzung (Sichtprüfung) + periodisch nach Herstellerangabe","Nur bei sichtbaren Schäden","Einmal jährlich reicht immer","PSA muss nicht geprüft werden"],richtig:0,erklaerung:"PSA-Prüfung: Vor jeder Nutzung Sichtprüfung. Intervall je nach PSA-Typ (z.B. Isolierhandschuhe: 6 Monate, Gurte: 1 Jahr). Herstellerangabe massgebend."}]},elektriker:{titel:"Elektriker Grundlagen Quiz",fragen:[{id:1,frage:"Was bedeutet das Kürzel «-K1» in einem Stromlaufplan?",optionen:["Schütz oder Relais Nummer 1","Kabel Nummer 1","Klemme 1","Kondensator 1"],richtig:0,erklaerung:"Im BMK-System (Betriebsmittel-Kennzeichen) steht -K für Schütz oder Relais. -K1 ist das erste Schütz/Relais im Plan."},{id:2,frage:"Welche Farbe hat der Schutzleiter (PE) nach DIN VDE 0100?",optionen:["Grün-Gelb","Blau","Braun","Schwarz"],richtig:0,erklaerung:"Der Schutzleiter (PE – Protective Earth) ist immer grün-gelb gestreift. Blau = Neutralleiter N."},{id:3,frage:"Was ist der Unterschied zwischen Stromlaufplan und Installationsplan?",optionen:["Stromlaufplan zeigt Funktion, Installationsplan zeigt Kabelwege","Beide sind identisch","Installationsplan zeigt Funktion, Stromlaufplan zeigt Kabelwege","Nur Stromlaufplan ist normiert"],richtig:0,erklaerung:"Stromlaufplan (funktional): WIE funktioniert die Schaltung. Installationsplan (topografisch): WO werden Kabel verlegt."},{id:4,frage:"Welchen maximalen Strom kann ein 2,5 mm² Kupferkabel (Verlegeart B2) führen?",optionen:["ca. 20 A","ca. 10 A","ca. 32 A","ca. 40 A"],richtig:0,erklaerung:"2,5 mm² Kupfer, Verlegeart B2 (in Rohr in Wand): ca. 20 A. Faustformel: 1,5mm²=16A, 2,5mm²=20A, 4mm²=25A."},{id:5,frage:"Was bedeutet Auslösecharakteristik «C» bei einem Leitungsschutzschalter?",optionen:["Magnetische Auslösung bei 5–10× Nennstrom","Bei 3–5× Nennstrom","Bei 10–20× Nennstrom","Nur thermische Auslösung"],richtig:0,erklaerung:"C-Charakteristik: magnetische Auslösung bei 5–10× In. Standard für Motoren und Transformatoren (mässige Anlaufströme)."},{id:6,frage:"Was ist der Vorteil einer Federkraftklemme (z.B. WAGO) gegenüber einer Schraubklemme?",optionen:["Vibrationsfest, kein Nachziehen nötig, werkzeuglos","Günstiger in der Anschaffung","Für höhere Ströme geeignet","Einfacher zu lösen unter Last"],richtig:0,erklaerung:"Federkraftklemmen sind vibrationssicher (kein Lockern durch Vibrationen), schnell zu montieren und benötigen kein Werkzeug."},{id:7,frage:"Was zeigt ein Schaltplan im Hauptstromkreis?",optionen:["Den Leistungsfluss: Netz → Schutzschalter → Schütz → Motor","Nur die SPS-Eingänge und -Ausgänge","Die Kabelverlegung im Gebäude","Nur die Steuerlogik (Taster, Relais)"],richtig:0,erklaerung:"Hauptstromkreis = Leistungsteil mit dicken Linien, hohe Spannungen (400 V). Zeigt Leistungsfluss vom Netz bis zur Last."},{id:8,frage:"Welcher FI-Schutzschalter-Typ ist bei Frequenzumrichtern erforderlich?",optionen:["Typ B (erkennt auch glatte DC-Fehlerströme)","Typ A (Standard)","Typ F reicht immer","FI ist bei FU nicht nötig"],richtig:0,erklaerung:"Frequenzumrichter können glatte DC-Fehlerströme erzeugen, die Typ A nicht erkennt. Typ B oder Typ F (für FU) ist erforderlich."},{id:9,frage:"Was bedeutet IP54 bei einem Schaltschrank?",optionen:["Staubgeschützt + Spritzwasserschutz aus allen Richtungen","Staubdicht + Eintauchen","Vollständig dicht","Kein Berührungsschutz + Regenschutz"],richtig:0,erklaerung:"IP54: 5=staubgeschützt (kein vollständiger Staubschutz), 4=Spritzwasser aus allen Richtungen. Standard für Maschinen-Schaltschränke."},{id:10,frage:"Warum müssen Steuer- und Leistungskabel getrennt im Schaltschrank verlegt werden?",optionen:["EMV: Leistungskabel erzeugen Störfelder, die Steuersignale verfälschen","Zur besseren Übersicht","Wegen unterschiedlicher Kabelfarben","Nur Vorschrift ohne technischen Grund"],richtig:0,erklaerung:"Elektromagnetische Verträglichkeit (EMV): Leistungskabel mit schnell schaltenden Strömen induziieren Störspannungen in benachbarten Steuerleitungen."},{id:11,frage:"Was ist der Zweck der Selektivität bei Schutzeinrichtungen?",optionen:["Nur der betroffene Kreis schaltet ab, nicht übergeordnete Einspeisung","Alle Kreise schalten gleichzeitig ab","Schutzgeräte lösen nie aus","Schnellere Auslösung bei Fehler"],richtig:0,erklaerung:"Selektivität: Bei Fehler löst nur die dem Fehlerort nächste Schutzeinrichtung aus. Höhere Ebenen bleiben in Betrieb."},{id:12,frage:"Welche Prüfung ist vor der Inbetriebnahme einer elektrischen Anlage zwingend?",optionen:["Isolationsmessung (>1 MΩ) und Schutzleiterprüfung (<0,3 Ω)","Nur Sichtprüfung","Betriebstest unter Vollast","Nur FI-Test"],richtig:0,erklaerung:"Pflichtprüfungen nach NIN/VDE 0100: Durchgangsprüfung, Isolationswiderstand (>1 MΩ), Schutzleiterwiderstand (<0,3 Ω), FI-Auslösung."},{id:13,frage:"Was ist der Unterschied zwischen Aussenleiter L und Neutralleiter N?",optionen:["L führt 230 V gegenüber PE (spannungsführend), N ist der Rückleiter (nahe 0 V)","Beide führen 230 V","N ist der Schutzleiter","L führt Gleichstrom, N Wechselstrom"],richtig:0,erklaerung:"L (Phase): 230 V gegenüber Erde, spannungsführend und gefährlich. N (Null/Neutralleiter): Rückleiter, geerdet am Trafo, nahe 0 V gegen PE."},{id:14,frage:"Welchen maximalen Strom kann ein 1,5 mm² Kupferkabel (Verlegeart B1: in Rohr auf Wand) führen?",optionen:["ca. 16 A","ca. 10 A","ca. 20 A","ca. 25 A"],richtig:0,erklaerung:"1,5 mm² Kupfer, Verlegeart B1: ca. 16 A. Faustformel: 1,5 mm² ≈ 16 A, 2,5 mm² ≈ 20 A, 4 mm² ≈ 25 A (B1/B2)."},{id:15,frage:"Wann ist ein FI-Schutzschalter Typ B zwingend erforderlich?",optionen:["Bei Frequenzumrichtern und Gleichstromgeräten, die glatte DC-Fehlerströme erzeugen können","In jedem Haushalt als Standard","Nur in Nassräumen","Bei Ausseninstallationen"],richtig:0,erklaerung:"Typ B: Erkennt alle Fehlerströme (AC, pulsierend DC, glatter DC). Pflicht bei FU, Solarwechselrichtern, E-Ladeinfrastruktur."},{id:16,frage:"Was ist eine Messtrennklemme?",optionen:["Klemme die Stromwandler-Sekundärkreise sicher trennen lässt ohne offenen Sekundärkreis","Klemme zum Trennen von Messkabeln","Klemme mit integriertem Messinstrument","Sicherungsklemme für Messstromkreise"],richtig:0,erklaerung:"Messtrennklemme: Erlaubt Trennung des Stromwandler-Sekundärkreises. Wichtig: Sekundärkreis darf nie offen sein → Kurzschlussbrücke integriert."},{id:17,frage:"Warum wird bei PT100-Temperaturfühlern eine 4-Leiter-Schaltung verwendet?",optionen:["Vollständige Kompensation des Leitungswiderstands → höchste Messgenauigkeit","Für grössere Entfernungen","Erhöhte Betriebssicherheit durch Redundanz","Günstiger in der Installation"],richtig:0,erklaerung:"4-Leiter: Zwei Adern führen Messstrom, zwei Adern messen Spannung direkt am Sensor. Leitungswiderstand hat keinen Einfluss."},{id:18,frage:"Wie viele Hauptkontakte hat ein Drehstrom-Schütz und warum?",optionen:["3 Hauptkontakte (einen pro Phase L1/L2/L3) + Hilfskontakte","1 Hauptkontakt für alle Phasen","2 Hauptkontakte (L und N)","4 Hauptkontakte"],richtig:0,erklaerung:"Drehstrom-Schütz: 3 Hauptkontakte (NO) schalten L1, L2, L3 gleichzeitig. Hilfskontakte (NO und NC) für Steuerstromkreis und Signalisierung."},{id:19,frage:'Was bedeutet "elektrische Verriegelung" bei Schützpaaren?',optionen:["NC-Kontakt des einen Schützes liegt in der Spulenleitung des anderen → gegenseitiges Sperren","Beide Schütze sind mit einem Schloss gesichert","Nur ein Schütz kann bestromt werden (physikalisch)","Elektronische Sperrung über SPS"],richtig:0,erklaerung:"Elektrische Verriegelung: K1-NC in K2-Spulenkreis und K2-NC in K1-Spulenkreis. Solange K1 angezogen ist, kann K2 nicht anziehen und umgekehrt."},{id:20,frage:"Was zeigt der Hauptstromkreis im Unterschied zum Steuerstromkreis?",optionen:["Den Leistungsfluss (400V, dicke Leiter, F1→K1→Q1→Motor), nicht die Steuerlogik","Die SPS-Ein-/Ausgänge","Die Kabelquerschnitte und -längen","Nur die Sicherungen"],richtig:0,erklaerung:"Hauptstromkreis (Leistungsteil): 400V 3-phasig, dicke Leitungen. Steuerstromkreis: 24V DC, dünne Leitungen, Taster/Relais/SPS-Logik."}]},schaltplaene:{titel:"Schaltpläne & Symbole Quiz",fragen:[{id:1,frage:"Was bedeutet das Symbol --| |-- in einem SPS-Kontaktplan (KOP)?",optionen:["Schliesser-Kontakt: Durchgang wenn Bit = 1","Öffner-Kontakt: Durchgang wenn Bit = 0","Ausgangs-Spule","Timer-Kontakt"],richtig:0,erklaerung:"--| |-- ist ein Schliesser (Normally Open, NO): Stromfluss wenn zugehöriges Bit = 1. Öffner ist --|\\/|-- oder --|/|--."},{id:2,frage:"Was zeigt das Betriebsmittelkennzeichen -K1 in einem Stromlaufplan?",optionen:["Schütz oder Relais Nummer 1","Kabel Nr. 1","Klemme Nr. 1","Kondensator Nr. 1"],richtig:0,erklaerung:"Im BMK-System: -K = Schütz/Relais, -F = Schutzeinrichtung, -M = Motor, -S = Schalter/Taster, -X = Klemmenleiste."},{id:3,frage:"Was ist der Unterschied zwischen Hauptstromkreis und Steuerstromkreis?",optionen:["Hauptstromkreis: Leistungskreis (400 V, dicker); Steuerstromkreis: Logik-/Signalkreis (24 V DC)","Beide führen gleiche Spannung","Steuerstromkreis ist grösser","Hauptstromkreis wird nie geschaltet"],richtig:0,erklaerung:"Hauptstromkreis: 400 V AC, dicker Leiter, Motorschütz-Hauptkontakte. Steuerstromkreis: 24 V DC, Taster, Relais, SPS-E/A."},{id:4,frage:"Was ist ein Selbsthaltekontakt?",optionen:["Hilfskontakt des Schützes parallel zum Starttaster – hält Schütz auch nach Loslassen des Tasters angezogen","Kontakt der sich selbst öffnet","Endschalter","Thermischer Schutz"],richtig:0,erklaerung:"Selbsthaltung: Schütz K1 zieht an → Hilfskontakt K1 schliesst parallel zum Starttaster → K1 bleibt angezogen ohne Dauerdrücken."},{id:5,frage:"Was bedeutet ein 5/2-Wegeventil im Pneumatikschaltplan?",optionen:["5 Anschlüsse, 2 Schaltstellungen","5 bar Druck, 2 Zylinder","5 Zustände, 2 Eingänge","Ventilgrösse 5×2 mm"],richtig:0,erklaerung:"5/2-Ventil: 5 Anschlüsse (1=Druck, 2+4=Arbeitsanschlüsse, 3+5=Entlüftung), 2 Schaltstellungen. Für doppeltwirkende Zylinder."},{id:6,frage:"Was gibt eine E/A-Liste (I/O-Liste) an?",optionen:["Zuordnung von SPS-Adressen zu Feldgeräten (Sensoren und Aktoren)","Liste aller elektrischen Verbraucher","Fehler- und Alarmliste der Anlage","Liste der Kabeltypen"],richtig:0,erklaerung:"E/A-Liste: I0.0 = Starttaster S2, Q0.0 = Schütz K1-Spule usw. Basis für Verdrahtung und SPS-Programmierung."},{id:7,frage:"Wozu dient der Klemmenplan (Klemmenleiste)?",optionen:["Zeigt Verbindungen zwischen Schaltschrank-Innengeräten und Feldgeräten über genormte Klemmenleisten","Zeigt die mechanische Anordnung im Schaltschrank","Ersetzt den Stromlaufplan","Dokumentiert nur Kabeltypen"],richtig:0,erklaerung:"Klemmenplan: Klemme X1:1 verbindet z.B. -F1:2 (Sicherung) mit -K1:1 (Schütz). Jede Verbindung ist mit Leiterbezeichnung dokumentiert."},{id:8,frage:"Was bedeutet das FRL-Symbol im Pneumatikschaltplan?",optionen:["Filter-Regler-Öler: Druckluftaufbereitung (reinigen, druckreguliern, schmieren)","Federrückstell-Logikventil","Flussbegrenzer-Regelventil-Leitventil","Fehlererfassungs-Rückmelde-Logik"],richtig:0,erklaerung:"FRL-Wartungseinheit: F=Filter (Reinigung), R=Druckregler, L=Öler (Schmierung). Steht am Eingang jeder Pneumatikanlage."},{id:9,frage:"Welche Lese-Reihenfolge gilt im Stromlaufplan?",optionen:["Von oben nach unten, von links nach rechts (Strom fliesst von L1 zu N)","Von unten nach oben","Von rechts nach links","Keine festgelegte Reihenfolge"],richtig:0,erklaerung:"Stromlaufplan: Spannungsversorgung L1 links oben, N/0V rechts. Strom fliesst von links nach rechts. Zeilenweise von oben nach unten lesen."},{id:10,frage:"Was unterscheidet einen Stromlaufplan vom Installationsplan?",optionen:["Stromlaufplan zeigt Funktion (schematisch), Installationsplan zeigt reale Kabelwege (topografisch)","Stromlaufplan ist für Hydraulik, Installationsplan für Elektrik","Beide sind identisch, nur andere Bezeichnung","Installationsplan zeigt nur Klemmen"],richtig:0,erklaerung:"Stromlaufplan (funktional): WIE funktioniert es. Installationsplan (topografisch): WO verlaufen die Kabel, Leitungslängen, Querschnitte."},{id:11,frage:"Welche Funktion hat der K1-Hilfskontakt in einer Selbsthaltungsschaltung?",optionen:["Er hält K1 angezogen auch nach Loslassen des Starttasters","Er schaltet den Motor direkt ein","Er schützt vor Überstrom","Er begrenzt die Anlaufzeit"],richtig:0,erklaerung:"Selbsthaltung: K1-Hilfskontakt (NO) liegt parallel zum Starttaster. Wenn K1 anzieht, schliesst dieser Kontakt und hält K1 bis der Stopp-Kontakt öffnet."},{id:12,frage:"Warum hat eine Wendeschaltung elektrische Verriegelungskontakte (K1-NC in K2-Kreis und K2-NC in K1-Kreis)?",optionen:["Verhindert gleichzeitiges Einschalten von K1 und K2 → kein Kurzschluss L1-L2-L3","Zur Drehzahlregelung","Um Energie zu sparen","Als Anzeigelampen-Steuerung"],richtig:0,erklaerung:"Würden K1 und K2 gleichzeitig anziehen, käme es zu einem 3-phasigen Kurzschluss. Die NC-Kontakte verhindern dies hardwareseitig."},{id:13,frage:"In welcher Reihenfolge sind im Motor-Hauptstromkreis die Schutzorgane angeordnet?",optionen:["Sicherung F1 → Schütz K1 → Motorschutzschalter Q1 → Motor","Motor → Q1 → K1 → F1","K1 → F1 → Q1 → Motor","F1 → Q1 → K1 → Motor"],richtig:0,erklaerung:"Korrekte Reihenfolge: F1 schützt vor Kurzschluss der gesamten Zuleitung, K1 schaltet, Q1 schützt den Motor vor thermischer Überlast."},{id:14,frage:"Was passiert in der Selbsthaltungsschaltung wenn Q1 (Motorschutzschalter) wegen Überlast auslöst?",optionen:["Q1-Öffnerkontakt im Steuerstromkreis öffnet → K1 fällt ab → Motor stoppt","Sicherung F1 löst aus","Motor bremst auf Halbdrehzahl","Nichts, Motor läuft weiter"],richtig:0,erklaerung:"Q1 hat Öffner-Hilfskontakte im Steuerstromkreis. Bei thermischem Auslösen öffnet dieser Kontakt → K1-Spule wird stromlos → K1 fällt ab → Motor aus."},{id:15,frage:"Wie ändert man die Drehrichtung eines Drehstrommotors?",optionen:["Zwei Aussenleiter (z.B. L1 und L3) vertauschen","Spannung verringern","Frequenz erhöhen","Motorschutzschalter verstellen"],richtig:0,erklaerung:"Drehfeld dreht sich durch Phasenfolge. Zwei Phasen tauschen (z.B. L1↔L3) kehrt die Drehfeldrichtung um → Motor dreht rückwärts."}]}};function Jf(){const{id:e}=Hc(),n=Ze.find(c=>c.id===e),t=qf[e],{saveQuizScore:r,getQuizScore:i}=hr(),[l,a]=z.useState(0),[u,o]=z.useState(null),[d,p]=z.useState([]),[h,m]=z.useState(!1);if(!n||!t)return s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 text-center",children:[s.jsx("p",{className:"text-gray-500",children:"Quiz nicht gefunden."}),s.jsx(ue,{to:"/",className:"text-blue-600 hover:underline mt-4 block",children:"← Dashboard"})]});const k=t.fragen[l],S=Math.round((l+(u!==null?1:0))/t.fragen.length*100),y=c=>{u===null&&o(c)},b=()=>{const c=[...d,{correct:u===k.richtig}];if(l+1>=t.fragen.length){const g=c.filter(x=>x.correct).length;r(e,g,t.fragen.length),p(c),m(!0)}else p(c),a(g=>g+1),o(null)},f=()=>{a(0),o(null),p([]),m(!1)};if(h){const c=d.filter(x=>x.correct).length,g=Math.round(c/t.fragen.length*100);return i(e),s.jsx("div",{className:"max-w-2xl mx-auto px-4 py-12",children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 text-center",children:[s.jsx("div",{className:"text-6xl mb-4",children:g>=80?"🏆":g>=60?"👍":"📚"}),s.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Quiz abgeschlossen!"}),s.jsxs("p",{className:"text-gray-500 mb-6",children:[n.icon," ",n.titel]}),s.jsxs("div",{className:"text-5xl font-bold text-blue-600 mb-2",children:[g,"%"]}),s.jsxs("p",{className:"text-gray-600 mb-8",children:[c," von ",t.fragen.length," Fragen richtig"]}),g>=80&&s.jsx("p",{className:"text-green-600 font-medium mb-4",children:"Ausgezeichnet! Du hast dieses Thema gut verstanden."}),g>=60&&g<80&&s.jsx("p",{className:"text-yellow-600 font-medium mb-4",children:"Gut gemacht! Wiederhole noch einige Lektionen."}),g<60&&s.jsx("p",{className:"text-red-600 font-medium mb-4",children:"Lerne die Lektionen nochmals durch und versuche es erneut."}),s.jsxs("div",{className:"flex gap-3 justify-center",children:[s.jsx("button",{onClick:f,className:"px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700",children:"Nochmals"}),s.jsx(ue,{to:`/module/${e}`,className:"px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50",children:"Lektionen wiederholen"}),s.jsx(ue,{to:"/",className:"px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50",children:"Dashboard"})]})]})})}return s.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-6 text-sm text-gray-500",children:[s.jsx(ue,{to:"/",className:"hover:text-blue-600",children:"Dashboard"}),s.jsx("span",{children:"›"}),s.jsx(ue,{to:`/module/${e}`,className:"hover:text-blue-600",children:n.titel}),s.jsx("span",{children:"›"}),s.jsx("span",{children:"Quiz"})]}),s.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[s.jsxs("div",{className:"bg-blue-600 px-6 py-4 text-white",children:[s.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[s.jsxs("span",{children:[n.icon," ",t.titel]}),s.jsxs("span",{children:["Frage ",l+1," / ",t.fragen.length]})]}),s.jsx("div",{className:"h-2 bg-blue-800 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-white rounded-full transition-all duration-500",style:{width:`${S}%`}})})]}),s.jsxs("div",{className:"p-6",children:[s.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-6 leading-relaxed",children:k.frage}),s.jsx("div",{className:"space-y-3 mb-6",children:k.optionen.map((c,g)=>{let x="border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";return u!==null&&(g===k.richtig?x="border-green-500 bg-green-50":g===u&&u!==k.richtig?x="border-red-400 bg-red-50":x="border-gray-200 opacity-60"),s.jsxs("button",{onClick:()=>y(g),className:`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${x}`,children:[s.jsxs("span",{className:"font-medium text-gray-500 mr-2",children:[String.fromCharCode(65+g),"."]}),c]},g)})}),u!==null&&s.jsxs("div",{className:`rounded-xl p-4 mb-4 text-sm ${u===k.richtig?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[s.jsx("p",{className:`font-semibold mb-1 ${u===k.richtig?"text-green-700":"text-red-700"}`,children:u===k.richtig?"✓ Richtig!":"✗ Falsch!"}),s.jsx("p",{className:"text-gray-700",children:k.erklaerung})]}),s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("span",{className:"text-sm text-gray-400",children:[d.filter(c=>c.correct).length," richtig bisher"]}),s.jsx("button",{onClick:b,disabled:u===null,className:"px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium disabled:opacity-40 hover:bg-blue-700 transition-colors",children:l+1>=t.fragen.length?"Auswertung anzeigen":"Nächste Frage →"})]})]})]})]})}const em={blue:"bg-blue-500",green:"bg-green-500",cyan:"bg-cyan-500",orange:"bg-orange-500",purple:"bg-purple-500",red:"bg-red-500",indigo:"bg-indigo-500",yellow:"bg-yellow-500",teal:"bg-teal-500",pink:"bg-pink-500"},nm=[{id:"elektro",label:"Elektro-Profi",icon:"⚡",moduleId:"elektrotechnik",threshold:80},{id:"sps",label:"SPS-Experte",icon:"🖥️",moduleId:"sps",threshold:80},{id:"pneumatik",label:"Pneumatik-Ass",icon:"💨",moduleId:"pneumatik",threshold:80},{id:"antrieb",label:"Antriebsprofi",icon:"⚙️",moduleId:"antriebstechnik",threshold:80},{id:"messen",label:"Meistermesser",icon:"📏",moduleId:"messtechnik",threshold:80},{id:"mechanik",label:"Mechanik-Meister",icon:"🔧",moduleId:"mechanik",threshold:80},{id:"digital",label:"Digitaltechniker",icon:"💻",moduleId:"digitaltechnik",threshold:80},{id:"sicherheit",label:"Sicherheitsprofi",icon:"🦺",moduleId:"arbeitssicherheit",threshold:80},{id:"elektriker",label:"Elektriker-Profi",icon:"🔌",moduleId:"elektriker",threshold:80},{id:"schaltplaene",label:"Schaltplan-Profi",icon:"📋",moduleId:"schaltplaene",threshold:80}];function tm(){const{getModuleProgress:e,getOverallStats:n,getQuizScore:t,resetProgress:r}=hr(),i=n(Ze),l=()=>{window.confirm("Gesamten Fortschritt zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.")&&r()};return s.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Mein Fortschritt"}),s.jsx("button",{onClick:l,className:"text-sm text-red-500 hover:text-red-700 hover:underline",children:"Zurücksetzen"})]}),s.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-6",children:[s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"text-3xl font-bold",children:[i.lessonPercent,"%"]}),s.jsx("div",{className:"text-blue-200 text-sm",children:"Gesamtfortschritt"})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"text-3xl font-bold",children:[i.completedLessons,"/",i.totalLessons]}),s.jsx("div",{className:"text-blue-200 text-sm",children:"Lektionen"})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"text-3xl font-bold",children:[i.quizCount,"/",Ze.length]}),s.jsx("div",{className:"text-blue-200 text-sm",children:"Quiz gemacht"})]}),s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl font-bold",children:i.quizCount>0?i.avgQuizScore+"%":"–"}),s.jsx("div",{className:"text-blue-200 text-sm",children:"Ø Quiz-Score"})]})]}),s.jsx("div",{className:"mt-4",children:s.jsx("div",{className:"h-3 bg-blue-900 rounded-full overflow-hidden",children:s.jsx("div",{className:"h-full bg-white rounded-full transition-all",style:{width:`${i.lessonPercent}%`}})})})]}),s.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Module im Detail"}),s.jsx("div",{className:"space-y-3 mb-8",children:Ze.map(a=>{const{completed:u,total:o,percent:d}=e(a.id,a.lektionen),p=t(a.id);return s.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"text-xl",children:a.icon}),s.jsx("span",{className:"font-medium text-gray-900",children:a.titel})]}),s.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500",children:[s.jsxs("span",{children:[u,"/",o," Lektionen"]}),p&&s.jsxs("span",{className:`font-medium ${p.percent>=80?"text-green-600":p.percent>=60?"text-yellow-600":"text-red-500"}`,children:["Quiz: ",p.percent,"%"]})]})]}),s.jsx("div",{className:"h-2 bg-gray-100 rounded-full overflow-hidden",children:s.jsx("div",{className:`h-full rounded-full transition-all ${em[a.farbe]}`,style:{width:`${d}%`}})}),s.jsxs("div",{className:"flex gap-2 mt-3",children:[s.jsx(ue,{to:`/module/${a.id}`,className:"text-xs text-blue-600 hover:underline",children:"Lernen →"}),s.jsx("span",{className:"text-gray-300",children:"|"}),s.jsx(ue,{to:`/quiz/${a.id}`,className:"text-xs text-blue-600 hover:underline",children:"Quiz →"})]})]},a.id)})}),s.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Abzeichen"}),s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:nm.map(a=>{const u=t(a.moduleId),o=u&&u.percent>=a.threshold;return s.jsxs("div",{className:`rounded-xl p-4 text-center border-2 ${o?"border-yellow-400 bg-yellow-50":"border-gray-200 bg-gray-50 opacity-50"}`,children:[s.jsx("div",{className:"text-3xl mb-1",children:a.icon}),s.jsx("div",{className:"text-xs font-medium text-gray-700",children:a.label}),o&&s.jsx("div",{className:"text-xs text-yellow-600 mt-1",children:"✓ Erreicht"}),!o&&s.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Quiz ≥ ",a.threshold,"%"]})]},a.id)})})]})}const rm=[{id:1,modul:"elektrotechnik",vorderseite:"Ohmsches Gesetz",rueckseite:`U = R × I

Spannung [V] = Widerstand [Ω] × Stromstärke [A]

Umgestellt:
R = U / I
I = U / R`},{id:2,modul:"elektrotechnik",vorderseite:"Elektrische Leistung (DC)",rueckseite:`P = U × I

Auch:
P = U² / R
P = I² × R

Einheit: Watt [W]`},{id:3,modul:"elektrotechnik",vorderseite:"Knotensatz (1. Kirchhoff)",rueckseite:`ΣI = 0

Am Knoten: Summe aller zufliessenden Ströme = Summe aller abfliessenden Ströme`},{id:4,modul:"elektrotechnik",vorderseite:"Maschensatz (2. Kirchhoff)",rueckseite:`ΣU = 0

In einer Masche: Summe aller Spannungsquellen = Summe aller Spannungsabfälle`},{id:5,modul:"elektrotechnik",vorderseite:"Netzspannung Schweiz (Wechselstrom)",rueckseite:`Effektivwert: 230 V
Frequenz: 50 Hz
Spitzenwert: û = 230 × √2 ≈ 325 V
Drehstrom (L-L): 400 V`},{id:6,modul:"elektrotechnik",vorderseite:"Reihenschaltung Widerstände",rueckseite:`R_ges = R1 + R2 + R3
Strom I überall gleich
Spannung teilt sich auf: U = U1 + U2 + U3`},{id:7,modul:"elektrotechnik",vorderseite:"Parallelschaltung Widerstände",rueckseite:`1/R_ges = 1/R1 + 1/R2 + 1/R3
Spannung U überall gleich
Strom teilt sich auf: I = I1 + I2 + I3`},{id:8,modul:"sps",vorderseite:"SPS-Adressierung (Siemens)",rueckseite:`Eingänge: I0.0 – I0.7 (Byte I0)
Ausgänge: Q0.0 – Q0.7 (Byte Q0)
Merker: M0.0 – M0.7
Datenbaustein: DB1.DBX0.0`},{id:9,modul:"sps",vorderseite:"KOP-Elemente",rueckseite:`--| |--  Schliesser (NO): Durchgang wenn Bit=1
--|/|-- Öffner (NC): Durchgang wenn Bit=0
--( )-- Ausgangs-Spule: Setzt Bit
--(S)-- Set-Spule: Dauerhaft setzen
--(R)-- Reset-Spule: Zurücksetzen`},{id:10,modul:"sps",vorderseite:"SPS-Bausteintypen",rueckseite:`OB (Organisationsbaustein): Aufgerufen vom BS
FC (Funktion): Kein Gedächtnis
FB (Funktionsbaustein): Mit Instanz-DB (Gedächtnis)
DB (Datenbaustein): Datenspeicher`},{id:11,modul:"sps",vorderseite:"Timer-Typen in der SPS",rueckseite:`TON: Einschaltverzögerung (On-Delay)
TOF: Ausschaltverzögerung (Off-Delay)
TP: Puls (Impulsgeber, monostabil)`},{id:12,modul:"sps",vorderseite:"5 SPS-Programmiersprachen (IEC 61131-3)",rueckseite:`KOP – Kontaktplan (Ladder)
FUP – Funktionsplan (FBD)
AWL – Anweisungsliste (IL)
SCL – Strukturierter Text (ST)
AS/GRAPH – Ablaufsprache (SFC)`},{id:13,modul:"pneumatik",vorderseite:"Druckformel",rueckseite:`p = F / A

Druck [Pa oder bar] = Kraft [N] / Fläche [m²]

1 bar = 100 000 Pa
Typ. Betriebsdruck: 6–8 bar`},{id:14,modul:"pneumatik",vorderseite:"Ventilbezeichnung",rueckseite:`Format: Wege / Schaltstellungen

5/2-Wegeventil:
- 5 Anschlüsse
- 2 Schaltstellungen

Anschlüsse: 1(P), 2(A), 3(R), 4(B), 5(S)`},{id:15,modul:"pneumatik",vorderseite:"FRL-Wartungseinheit",rueckseite:`F – Filter: Schmutz und Wasser entfernen
R – Regler (Druckminderer): Betriebsdruck einstellen
L – Öler: Schmierung (bei modernen Anlagen oft entfallen)`},{id:16,modul:"pneumatik",vorderseite:"Kraft Pneumatikzylinder",rueckseite:`F = p × A × η

A = π × d² / 4 (Kolbenfläche)
η = Wirkungsgrad ≈ 0,85–0,95

Beispiel: d=63mm, p=6bar:
F ≈ 1700 N`},{id:17,modul:"pneumatik",vorderseite:"Pascalsches Prinzip (Hydraulik)",rueckseite:`Druck pflanzt sich gleichmässig fort

p = F1/A1 = F2/A2
F2 = F1 × (A2/A1)

Basis für hydraulische Kraftverstärkung!`},{id:18,modul:"antriebstechnik",vorderseite:"Synchrondrehzahl Asynchronmotor",rueckseite:`n_s = 60 × f / p

f = Frequenz [Hz]
p = Polpaarzahl

Beispiel: 50 Hz, p=2:
n_s = 1500 U/min
Läuferdrehzahl ≈ 1450 U/min (Schlupf!)`},{id:19,modul:"antriebstechnik",vorderseite:"Nennmoment Elektromotor",rueckseite:`M_N = P_N × 9550 / n_N

P_N [kW], n_N [U/min]
M_N [Nm]

Beispiel: 4 kW, 1450 U/min:
M = 4 × 9550 / 1450 = 26,3 Nm`},{id:20,modul:"antriebstechnik",vorderseite:"Übersetzungsverhältnis Getriebe",rueckseite:`i = n1 / n2 = M2 / M1

n2 = n1 / i  (Drehzahl sinkt)
M2 = M1 × i × η  (Moment steigt)

Beispiel i=10: n1=1500→n2=150 U/min
M steigt um Faktor ~10`},{id:21,modul:"antriebstechnik",vorderseite:"Frequenzumrichter Vorteile",rueckseite:`✓ Stufenlose Drehzahlregelung
✓ Sanftanlauf (kein Anlaufstromstoss)
✓ Energiesparen: P ~ n³
  (halbierte Drehzahl = 1/8 Leistung!)
✓ Motorschutz integriert`},{id:22,modul:"messtechnik",vorderseite:"Analoges Standardsignal",rueckseite:`4–20 mA Stromschnittstelle

4 mA = Messbereichsanfang
20 mA = Messbereichsende
0 mA = Leitungsbruch!

Vorteil: Störsicher, Leitungsbrucherkennung`},{id:23,modul:"messtechnik",vorderseite:"PT100 Widerstandsthermometer",rueckseite:`PT100 = Platin, 100Ω bei 0°C
PT1000 = 1000Ω bei 0°C

Änderung: ≈ 0,385 Ω/°C (PT100)
Messbereich: -200°C bis +850°C

4-Leiter-Messung für höchste Genauigkeit!`},{id:24,modul:"messtechnik",vorderseite:"Sensortypen für Näherung",rueckseite:`Induktiv: Metall erkennen (Wirbelstrom)
Kapazitiv: Alle Materialien (Kapazität)
Optisch: Lichtschranke, Reflex, Taster
Ultraschall: Grosse Reichweite, alle Materialien`},{id:25,modul:"messtechnik",vorderseite:"IP-Schutzgrad",rueckseite:`Format: IP XY
X = Schutz gegen Berührung/Fremdkörper (0–6)
Y = Schutz gegen Wasser (0–9K)

IP20: Schaltsschrankinnenleben
IP44: Spritzwasser
IP54: Staubgeschützt + Spritzwasser
IP67: Staubdicht + Eintauchen`},{id:26,modul:"mechanik",vorderseite:"Schrauben Festigkeitsklassen",rueckseite:`Format X.Y:
Zugfestigkeit = X × 100 MPa
Streckgrenze = X×Y × 10 MPa

4.6: 400 MPa / 240 MPa (weich)
8.8: 800 MPa / 640 MPa (Standard)
10.9: 1000 MPa / 900 MPa
12.9: 1200 MPa / 1080 MPa (hart)`},{id:27,modul:"mechanik",vorderseite:"Passungsarten",rueckseite:`Spielpassung (H7/f7):
Bohrung > Welle, freies Spiel

Übergangspassung (H7/k6):
Kann Spiel oder Überdeckung haben

Presspassung (H7/p6):
Welle > Bohrung, Fügen mit Kraft/Wärme`},{id:28,modul:"mechanik",vorderseite:"Drehmoment",rueckseite:`M = F × r

M = Drehmoment [Nm]
F = Kraft [N]
r = Hebelarm [m]

Beispiel: Drehmomentschlüssel
F=100N, l=0,3m → M=30 Nm`},{id:29,modul:"digitaltechnik",vorderseite:"Binär → Dezimal Umrechnung",rueckseite:`Stellenwerte: ...8, 4, 2, 1

1011₂ = 1×8 + 0×4 + 1×2 + 1×1
       = 8 + 0 + 2 + 1 = 11₁₀

1111₂ = 15₁₀
1000 0000₂ = 128₁₀`},{id:30,modul:"digitaltechnik",vorderseite:"Logikgatter Übersicht",rueckseite:`AND: Y=1 wenn ALLE Eingänge=1
OR:  Y=1 wenn EIN Eingang=1
NOT: Y=1 wenn Eingang=0
NAND: Y=NOT(AND)
NOR: Y=NOT(OR)
XOR: Y=1 wenn Eingänge VERSCHIEDEN`},{id:31,modul:"digitaltechnik",vorderseite:"De Morgansche Gesetze",rueckseite:`NOT(A AND B) = NOT A OR NOT B
NOT(A OR B) = NOT A AND NOT B

Anwendung: Vereinfachung logischer Schaltungen und Umformung von Ausdrücken`},{id:32,modul:"digitaltechnik",vorderseite:"Datengrössen",rueckseite:`1 Bit: 0 oder 1
1 Byte = 8 Bit (0–255)
1 Word = 16 Bit (0–65535)
1 DWord = 32 Bit

In SPS:
I0.0 = 1 Bit
IB0 = 1 Byte (I0.0–I0.7)
IW0 = 1 Word (IB0+IB1)`},{id:33,modul:"arbeitssicherheit",vorderseite:"5 Sicherheitsregeln (Reihenfolge!)",rueckseite:`1. FREISCHALTEN
2. Gegen WIEDEREINSCHALTEN sichern
3. SPANNUNGSFREIHEIT feststellen
4. ERDEN und Kurzschliessen
5. Benachbarte Teile ABSCHRANKEN

NIE überspringen!`},{id:34,modul:"arbeitssicherheit",vorderseite:"Brandklassen",rueckseite:`A: Feste Stoffe (Holz, Papier)
B: Flüssigkeiten (Öl, Benzin)
C: Gase (Propan, Methan)
D: Metalle (Mg, Na)
F: Speisefette

Bei Elektrobrand: CO₂-Löscher!!
NIE Wasser bei B oder Strom!`},{id:35,modul:"arbeitssicherheit",vorderseite:"FI-Schutzschalter (RCD)",rueckseite:`Misst Differenz I_L - I_N
Bei Differenz ≥ Auslösestrom → Abschaltung

30 mA: Personenschutz
300 mA: Brandschutz

Auslösezeit: < 40 ms

Pflicht in Feuchträumen, Baustellen!`},{id:36,modul:"arbeitssicherheit",vorderseite:"Schutzklassen (elektrisch)",rueckseite:`SK I: Schutzleiter (geerdet, PE grün-gelb)
SK II: Schutzisolierung (□ im Quadrat)
SK III: Schutzkleinspannung SELV ≤50V AC / 120V DC

SK I = Normale Geräte mit Schukostecker
SK II = Elektrowerkzeug (doppelt isoliert)`},{id:37,modul:"arbeitssicherheit",vorderseite:"Notrufnummer Schweiz",rueckseite:`144 – Sanität (Rettungsdienst)
117 – Polizei
118 – Feuerwehr
145 – Toxikologisches Zentrum

Euro-Notruf: 112
(funktioniert EU-weit, auch ohne SIM)`},{id:38,modul:"arbeitssicherheit",vorderseite:"Leiterbauliche Schutzmassnähmen",rueckseite:`Basisschutz (Direktberührung):
- Isolierung
- Abdeckung / Gehäuse
- Abstände

Fehlerschutz (indirekter Kontakt):
- Schutzleiter (PE)
- FI-Schalter
- Schutzkleinspannung`},{id:39,modul:"elektrotechnik",vorderseite:"Drehstrom – Stern vs. Dreieck",rueckseite:`Stern (Y):
U_Strang = U_Netz / √3 = 400/1,73 = 230 V
I_Strang = I_Leiter

Dreieck (Δ):
U_Strang = U_Netz = 400 V
I_Leiter = I_Strang × √3

Motor-Anlauf: Stern → nach 3–5 s → Dreieck`},{id:40,modul:"elektrotechnik",vorderseite:"Transformator – Übersetzungsverhältnis",rueckseite:`ü = U1 / U2 = N1 / N2 = I2 / I1

U1 = Primärspannung, U2 = Sekundärspannung
N = Windungszahl

Beispiel: 400V → 24V
ü = 400/24 = 16,7
Scheinleistung: S = U × I [VA]`},{id:41,modul:"elektrotechnik",vorderseite:"Widerstand und Temperatur",rueckseite:`Metalle (Kupfer, Aluminium):
Widerstand steigt mit Temperatur
R_T = R_20 × (1 + α × ΔT)
α(Kupfer) = 0,00393 /K

Halbleiter (NTC):
Widerstand SINKT mit Temperatur`},{id:42,modul:"sps",vorderseite:"Profibus vs. Profinet",rueckseite:`Profibus DP:
- Serielle Feldbus-Technologie (RS-485)
- bis 12 Mbit/s
- 9-poliger Sub-D Stecker
- Ältere Anlagen

Profinet:
- Industrielles Ethernet
- 100 Mbit/s (Echtzeit)
- RJ45 / M12-Stecker
- Neuere Anlagen (Standard heute)`},{id:43,modul:"sps",vorderseite:"Analoge SPS-Signale",rueckseite:`Eingang (AIW): analoges Signal → Zahlenwert
0–10 V → 0–27648 (Siemens S7)
4–20 mA → 5530–27648

Ausgang (AQW): Zahlenwert → analoges Signal
0–10 V oder 4–20 mA

Auflösung typisch: 12–16 Bit`},{id:44,modul:"sps",vorderseite:"Zähler-Typen SPS",rueckseite:`CTU – Count Up: Aufwärtszähler
CTD – Count Down: Abwärtszähler
CTUD – Count Up/Down: Auf-/Abwärts

Parameter:
CU/CD: Zähleingang
R: Reset
PV: Vorwahlwert
Q: Ausgang (1 wenn CV≥PV)
CV: Aktueller Zählwert`},{id:45,modul:"pneumatik",vorderseite:"Boyles Gesetz (Pneumatik)",rueckseite:`p1 × V1 = p2 × V2
(bei konstanter Temperatur)

Beispiel:
p1=1bar, V1=10L → p2=6bar
V2 = 1×10/6 = 1,67 L

Anwendung: Druckluftbehälter, Kompressorauslegung`},{id:46,modul:"pneumatik",vorderseite:"Druckluftqualität (ISO 8573)",rueckseite:`Druckluft nach ISO 8573 wird in Klassen eingeteilt:

Reststaub: Klasse 1 (Feinst) bis 9
Restfeuchte: Drucktaupunkt -70°C bis +10°C
Restöl: < 0,01 mg/m³ (Klasse 1)

Lackanwendungen, Pharma → höhere Klassen nötig`},{id:47,modul:"pneumatik",vorderseite:"Hydraulikpumpentypen",rueckseite:`Zahnradpumpe:
- Günstig, robust, für mittlere Drücke (bis ~250 bar)
- Konstante Förderleistung

Kolbenpumpe:
- Sehr hohe Drücke (bis 700 bar)
- Variable Fördermenge möglich

Flügelzellenpumpe:
- Leise, gleichmässige Förderung`},{id:48,modul:"antriebstechnik",vorderseite:"Motorschutz – Thermisches Relais",rueckseite:`Schützt Motor vor Überlast (Übertemperatur der Wicklung)

Einstellung: Auf Motornennstrom I_N einstellen!
Auslösezeit: Sekunden bis Minuten (Bimetall)

Nach Auslösung:
→ Manuelle Rückstellung erforderlich
→ Ursache suchen! (Überlast? Klemme? Blockierung?)`},{id:49,modul:"antriebstechnik",vorderseite:"Energieeffizienz IE-Klassen",rueckseite:`IE1: Standard Efficiency (veraltet)
IE2: High Efficiency
IE3: Premium Efficiency (> 90%)
IE4: Super Premium Efficiency

EU-Pflicht seit 2015: IE3 ab 0,75–375 kW
EU seit 2023: IE3 ab 0,12 kW

IE3 spart 3–10% Energie vs. IE2!`},{id:50,modul:"antriebstechnik",vorderseite:"Leistungsformel Drehbewegung",rueckseite:`P = M × ω

ω = Winkelgeschwindigkeit [rad/s]
ω = 2π × n / 60

P = M × 2π × n / 60

Umgestellt: M = P × 60 / (2π × n) = P × 9550 / n

P [W], M [Nm], n [U/min]`},{id:51,modul:"messtechnik",vorderseite:"Durchflussmessung – Methoden",rueckseite:`Magnetisch-Induktiv (MID):
- Leitfähige Flüssigkeiten
- Kein Druckverlust, keine beweglichen Teile

Coriolis:
- Massendurchfluss direkt
- Auch für Gase, sehr genau

Ultraschall:
- Nicht-invasiv (clamp-on)

Blende/Venturi:
- Differenzdruckmessung`},{id:52,modul:"messtechnik",vorderseite:"Signalarten in der Automatisierung",rueckseite:`Digital (binär):
0 V = AUS, 24 V = EIN
Näherungsschalter, Endschalter

Analog:
4–20 mA: Strom, störsicher
0–10 V: Spannung, günstiger
±10 V: Bidirektionale Werte

Feldbus:
Profinet, Profibus, IO-Link`},{id:53,modul:"messtechnik",vorderseite:"Füllstandsmessung – Methoden",rueckseite:`Schwimmer: Mechanisch, einfach
Druckmessung: p = ρ × g × h (hydrostatisch)
Ultraschall: Berührungslos, Schallreflexion
Radar (VEGAPULS): Berührungslos, auch bei Schaum
Leitfähigkeitssonde: Leitfähige Medien
Vibrationsgrenzschalter: Grenzwert`},{id:54,modul:"mechanik",vorderseite:"Wälzlagerbezeichnung (z.B. 6204)",rueckseite:`6204:
6 = Rillenkugellager (Bauart)
2 = Breitenreihe
04 = Bohrungszahl → d = 04 × 5 = 20 mm

Bohrung:
00=10mm, 01=12mm, 02=15mm, 03=17mm
Ab 04: Zahl × 5 = Innendurchmesser

Suffix: C3 = erweitertes Radialspiel`},{id:55,modul:"mechanik",vorderseite:"Oberfläche und Rauheit (Ra)",rueckseite:`Ra = arithmetischer Mittenrauwert [µm]

Ra 0,8: Feinschliff (Lagerflächen)
Ra 1,6: Schleifen/Drehen fein
Ra 3,2: Drehen normal
Ra 6,3: Fräsen normal
Ra 12,5: Sägen, grobes Drehen

Symbol im Zeichnung: ∇ = unbearbeitet
∇∇ = bearbeitet, Ra Angabe nötig`},{id:56,modul:"mechanik",vorderseite:"Materialdehnung (Wärmeausdehnung)",rueckseite:`ΔL = L0 × α × ΔT

α = Längenausdehnungskoeffizient
Stahl: α ≈ 12 × 10⁻⁶ /K
Aluminium: α ≈ 23 × 10⁻⁶ /K

Beispiel: 5m Stahlrohr, ΔT=50°C:
ΔL = 5000 × 12×10⁻⁶ × 50 = 3 mm
→ Dehnfugen nötig!`},{id:57,modul:"digitaltechnik",vorderseite:"ASCII-Code",rueckseite:`ASCII = American Standard Code for Information Interchange

Zeichen werden als 7-Bit-Zahlen codiert:
A = 65 = 0x41
Z = 90 = 0x5A
a = 97 = 0x61
0 = 48 = 0x30

Bedeutung in der SPS: Textanzeigen, Barcode-Scanner`},{id:58,modul:"digitaltechnik",vorderseite:"Halbaddierer und Volladdierer",rueckseite:`Halbaddierer (1 Bit + 1 Bit):
Summe S = A XOR B
Übertrag C = A AND B

Volladdierer (+ Eingangsübertrag Cin):
S = A XOR B XOR Cin
Cout = (A AND B) OR (Cin AND (A XOR B))

Grundlage der Arithmetik in Prozessoren`},{id:59,modul:"digitaltechnik",vorderseite:"Zwei-Komplement (negative Zahlen)",rueckseite:`Darstellung negativer Zahlen in Binär:

8-Bit Beispiel: -5 darstellen
1. +5 = 0000 0101
2. Invertieren: 1111 1010
3. +1: 1111 1011 = -5

Wertebereich 8-Bit:
-128 bis +127
MSB=1 → negative Zahl`},{id:60,modul:"elektriker",vorderseite:"Kabelbezeichnung NYM-J 5×2,5",rueckseite:`N = Normleitung (VDE)
Y = PVC-Isolierung
M = Mantelleitung
J = mit Schutzleiter (PE)
5 = 5 Adern
2,5 = Querschnitt 2,5 mm²

Verwendung: Festinstallation, Schaltschrankbau`},{id:61,modul:"elektriker",vorderseite:"LSS-Auslösecharakteristiken",rueckseite:`B (3–5× In): Leitungsschutz, Beleuchtung, Steckdosen
C (5–10× In): Standard, Motoren, Transformatoren
D (10–20× In): Hohe Anlaufströme, grosse Motoren

Thermisch: träge (Überlast, Bimetall)
Magnetisch: sofort (Kurzschluss, Elektromagnet)`},{id:62,modul:"elektriker",vorderseite:"Schütz – Aufbau und Funktion",rueckseite:`Elektromagnetisch betätigter Leistungsschalter

Teile:
- Spule: zieht Anker an (Steuerspannung 24V/230V)
- Hauptkontakte: schalten Last (400V, bis 100A+)
- Hilfskontakte: im Steuerstromkreis

Anwendung: Motorsteuerung, Ein/Aus-Betrieb
Betätigungen: >1 Mio. Schaltspiele möglich`},{id:63,modul:"elektriker",vorderseite:"Aderendhülsen-Farben (DIN 46228)",rueckseite:`0,5 mm²: weiss
0,75 mm²: grau
1,0 mm²: rot
1,5 mm²: schwarz
2,5 mm²: blau
4,0 mm²: grau (doppeltisoliert)
6,0 mm²: gelb
10 mm²: rot (doppeltisoliert)

Grösse muss zum Leiterquerschnitt passen!`},{id:64,modul:"elektriker",vorderseite:"Querschnitte und Stromtragfähigkeit (Cu)",rueckseite:`1,5 mm² → 16 A (Beleuchtung)
2,5 mm² → 20 A (Steckdosen)
4 mm²   → 25 A
6 mm²   → 32 A
10 mm²  → 40 A
16 mm²  → 53 A
25 mm²  → 70 A

Faustformel: 6 A/mm² (Kupfer, Normalbetrieb)`},{id:65,modul:"elektriker",vorderseite:"Selektivität Schutzeinrichtungen",rueckseite:`Selektivität = Nur die dem Fehler nächste Sicherung löst aus

Bedingung:
Vorgelagerte Sicherung >> nachgelagerte Sicherung
(Mindestens 1 Nennstromstufe Unterschied)

Ziel: Fehler in einem Kreis schaltet NICHT die gesamte Anlage ab
→ Restbetrieb erhalten!`},{id:66,modul:"elektriker",vorderseite:"Schaltschranktemperatur – Grenzwert",rueckseite:`Maximal-Innentemperatur: 35°C
(Basis-Nennwerte der Bauteile)

Bei höherer Temperatur:
→ Korrekturfaktoren auf Ströme anwenden
→ Wärmetauscher oder Klimagerät einbauen

Verlustleistung berechnen:
P_V = Summe aller Bauteilwärmen
Lüftungsquerschnitt: A = P_V / (α × ΔT)`},{id:67,modul:"elektriker",vorderseite:"Pflichtprüfungen Elektroanlagen (NIN)",rueckseite:`Vor Inbetriebnahme zwingend:

1. Sichtprüfung (Vollständigkeit, Schäden)
2. Durchgangsprüfung (alle Verbindungen)
3. Isolationsmessung ≥ 1 MΩ (500 V DC)
4. Schutzleiterwiderstand < 0,3 Ω
5. FI-Prüfung: Auslösung bei I_FI
6. Spannungsprüfung (Messung unter Last)`},{id:68,modul:"elektriker",vorderseite:"Betriebsmittelkennzeichen (BMK)",rueckseite:`-F: Schutzeinrichtung (LSS, FI, Sicherung)
-K: Schütz, Relais
-M: Motor
-Q: Leistungsschalter, Motorschutz
-R: Widerstand
-S: Schalter, Taster
-T: Transformator
-H: Leuchte, Signalgeber
-X: Klemmenleiste
-C: Kondensator
-L: Spule`},{id:69,modul:"elektrotechnik",vorderseite:"RC-Zeitkonstante τ",rueckseite:`τ = R × C

- τ = Zeitkonstante [s]
- R = Widerstand [Ω]
- C = Kapazität [F]

Nach 1τ: Kondensator zu 63% geladen
Nach 5τ: Kondensator zu 99% geladen (praktisch voll)

Anwendung: Zeitglieder, Filter, Entprellschaltungen`},{id:70,modul:"elektrotechnik",vorderseite:"Leistungsdreieck (Wechselstrom)",rueckseite:`S² = P² + Q²

S = Scheinleistung [VA]
P = Wirkleistung [W]  → cos φ = P/S
Q = Blindleistung [var]

P = S × cos φ
Q = S × sin φ

Ziel: cos φ möglichst nahe 1 (rein ohmsch)`},{id:71,modul:"elektrotechnik",vorderseite:"Spannungsteiler (Reihenschaltung)",rueckseite:`U2 = U_ges × R2 / (R1 + R2)

Beispiel:
U=12V, R1=2kΩ, R2=1kΩ
U2 = 12 × 1/(2+1) = 4 V

Anwendung:
- Referenzspannungen
- Pegelanpassung für SPS-Eingänge
- Messbrücken`},{id:72,modul:"elektrotechnik",vorderseite:"Elektrische Arbeit (Energie)",rueckseite:`W = P × t

W = Energie [Wh oder J]
P = Leistung [W]
t = Zeit [h oder s]

1 kWh = 3 600 000 J

Stromkosten: ca. 25 Rp./kWh (Schweiz)
Beispiel: 2 kW Heizung, 8h/Tag:
→ 16 kWh/Tag = ca. 4 Franken`},{id:73,modul:"elektrotechnik",vorderseite:"Wheatstone-Brücke",rueckseite:`Messschaltung für präzise Widerstandsmessung

Abgeglichen wenn: R1/R2 = R3/R4
→ Brückenspannung = 0

Anwendung:
- Dehnmessstreifen (DMS)
- PT100-Messung (Brückenschaltung)
- Präzisions-Temperaturmessung`},{id:74,modul:"elektrotechnik",vorderseite:"Überspannungskategorien (CAT)",rueckseite:`CAT I: Geräte, die nicht am Netz hängen
CAT II: Haushaltsgeräte (230V-Steckdose)
CAT III: Verteiler, Industrie-Festinstallation
CAT IV: Netzeinspeisepunkt, Zähler

Höhere CAT = mehr Überspannungsschutz nötig!
Multimeter für Industrieeinsatz: min. CAT III`},{id:75,modul:"sps",vorderseite:"Zykluszeit SPS – Einflussfaktoren",rueckseite:`Typische Zykluszeit: 1–50 ms

Ablauf pro Zyklus:
1. PAE einlesen (Prozessabbild Eingänge)
2. Programm abarbeiten (OB1)
3. PAA ausgeben (Prozessabbild Ausgänge)

Zykluszeit steigt mit:
- Programmlänge
- Anzahl Bausteine
- Kommunikationsaufgaben`},{id:76,modul:"sps",vorderseite:"MOVE-Baustein in SPS",rueckseite:`MOVE kopiert Wert von IN nach OUT

Beispiel:
MOVE IN=100 → OUT=MD10
→ MD10 enthält jetzt den Wert 100

Typische Anwendung:
- Analogwerte speichern
- Sollwerte übernehmen
- Register initialisieren`},{id:77,modul:"sps",vorderseite:"Vergleicher (CMP) in SPS",rueckseite:`Vergleicht zwei Werte und liefert binären Ausgang

Operatoren:
==  gleich
<>  ungleich
>   grösser als
<   kleiner als
>=  grösser gleich
<=  kleiner gleich

Beispiel: MD10 > MD20 → M0.0 = 1
→ Temperatur überschreitet Sollwert`},{id:78,modul:"sps",vorderseite:"Globaler DB vs. Instanz-DB",rueckseite:`Globaler DB:
- Gehört zu keinem Baustein
- Alle Bausteine können darauf zugreifen
- Für gemeinsame Daten (Rezepte, Parameter)

Instanz-DB:
- Gehört zu einem FB
- Wird automatisch erstellt
- Speichert FB-interne Variablen (Timerwert etc.)`},{id:79,modul:"sps",vorderseite:"Safety SPS (Fail-Safe)",rueckseite:`Fail-Safe SPS für funktionale Sicherheit
(SIL – Safety Integrity Level)

SIL 1–3: Je höher, desto sicherer

Besonderheiten:
- Redundante Prozessoren
- Zwangsgeführte Kontakte
- Spezielle F-CPU (z.B. Siemens S7-1500F)
- Für Not-Aus, Schutztüren, Lichtvorhänge`},{id:80,modul:"sps",vorderseite:"IO-Link",rueckseite:`Punkt-zu-Punkt Kommunikation Sensor→SPS

Merkmale:
- Standard 3-Leiter M12-Kabel
- Bidirektional (Daten + Parametrierung)
- Bis 230 kBaud
- Geräteparameter über SPS lesbar/schreibbar

Vorteil: Sensor liefert Diagnose + Messwert
Beispiel: Füllstand + Temperatur in einem Kabel`},{id:81,modul:"pneumatik",vorderseite:"Kompressortypen",rueckseite:`Kolbenkompressor:
- Günstig, für kleine Anlagen
- Druck: bis 15 bar, ölig

Schraubenkompressor:
- Leise, kontinuierlich, grosse Anlagen
- Druck: 6–13 bar

Zentrifugalkompressor:
- Sehr grosse Fördermengen
- Ölfreie Druckluft

Faustregel: < 30 kW → Kolben, > 30 kW → Schraube`},{id:82,modul:"pneumatik",vorderseite:"Pneumatik-Wartungsplan",rueckseite:`Täglich:
- Kondenswasser aus Filter ablassen
- Druckluftdruck prüfen

Wöchentlich:
- Leckagen kontrollieren (Hören/Seifen)
- Ölerstand prüfen (bei geölten Anlagen)

Jährlich:
- Filtereinsatz wechseln
- Zylinderdichtungen prüfen
- Ventilschieber reinigen`},{id:83,modul:"pneumatik",vorderseite:"Ausfahrkraft vs. Einfahrkraft Zylinder",rueckseite:`Ausfahren (Kolbenboden):
F_aus = p × (π × d²/4) × η

Einfahren (Ringseite, Kolbenstange reduziert Fläche):
F_ein = p × (π/4 × (d² - dk²)) × η
dk = Kolbenstangendurchmesser

Einfahrkraft < Ausfahrkraft!
Typ: 10–30% weniger`},{id:84,modul:"pneumatik",vorderseite:"ISO 1219 – Pneumatiksymbole",rueckseite:`Normierte Symbole nach ISO 1219:

□ mit Linien = Wegeventil
(Anzahl Felder = Stellungen, Linien = Wege)

Dreieck = Strömungsrichtung
Feder = Federrückstellung
Elektromagnet = Spulensymbol

Rückschlagventil: Kreis mit Kegel
Drossel: Pfeil durch Kanal`},{id:85,modul:"pneumatik",vorderseite:"Druckluftkosten und Leckagen",rueckseite:`Druckluft ist teurer als man denkt!

1 m³ Druckluft ≈ 2–3 Rappen (CH)
Kompressor: 6–8 kWh pro m³

Leckagen:
- 1 mm Loch bei 6 bar: ~2 l/min Verlust
- Typische Anlage: 20–30% Verluste!

Leckagensuche:
→ Ultraschalldetektor
→ Seifenwasser
→ Nacht-Druckabfalltest`},{id:86,modul:"antriebstechnik",vorderseite:"Drehfeld umkehren (Linkslauf)",rueckseite:`Drehrichtungsumkehr eines Drehstrommotors:

Zwei Phasen tauschen:
L1-L2-L3 → L2-L1-L3 (oder andere Kombination)

In der Praxis: Wendeschütz-Schaltung
(2 Schütze mit Verriegelung)

Bei FU: Parameter "Drehrichtung" oder
Steuereingang REV (Reverse)`},{id:87,modul:"antriebstechnik",vorderseite:"Motorbremsverfahren",rueckseite:`Elektrodynamisches Bremsen:
- Gleichstrom auf Stator → Bremsmoment
- Sanft, verschleissfrei

Gegenstrombremsung:
- Phasen tauschen während Lauf
- Sehr stark, aber ruckartig

Freilauf (mechanisch):
- Federbremse: im stromlosen Zustand bremst Feder
- Sicherheitsbremse bei Ausfall

FU-Bremsrampe:
- Rampenverzögerung programmierbar`},{id:88,modul:"antriebstechnik",vorderseite:"Wirkungsgrad Antriebskette",rueckseite:`Gesamtwirkungsgrad:
η_ges = η_Motor × η_Getriebe × η_Kupplung

Typische Werte:
η_Motor (IE3): 0,92
η_Getriebe (Stirnrad): 0,97 pro Stufe
η_Kupplung: 0,99

Beispiel 2-stufig:
η_ges = 0,92 × 0,97² × 0,99 ≈ 0,86

P_ab = P_el × η_ges`},{id:89,modul:"antriebstechnik",vorderseite:"Anlaufverfahren Vergleich",rueckseite:`Direktanlauf: Einfach, I_Anlauf = 5–7× I_N
→ Netzbeanspruchung, Schaltschläge

Stern-Dreieck: I_Anlauf ÷ 3
→ Schaltruck bei Umschalten

Sanftanlasser: I_Anlauf ÷ 3–4
→ Stufenlos, günstiger als FU

Frequenzumrichter: I_Anlauf ≤ 1,5× I_N
→ Teuerster, drehzahlregelbar, energiesparend`},{id:90,modul:"antriebstechnik",vorderseite:"Absolutwertgeber (Resolver/Encoder)",rueckseite:`Absolutwertgeber:
- Liefert sofort absolute Position nach Einschalten
- Kein Referenzfahrt nötig
- Typen: SSI, EnDat, BiSS, Hiperface
- Auflösung: bis 26 Bit (67 Mio. Positionen)

Inkrementalgeber:
- Liefert nur Positionsänderungen
- Referenzfahrt nach Einschalten nötig
- Günstiger, simpler
- Signal: A, B (Richtung), Z (Nullimpuls)`},{id:91,modul:"messtechnik",vorderseite:"Kalibrieren vs. Justieren",rueckseite:`Kalibrieren:
→ Abweichung MESSEN und dokumentieren
(Kalibrierzertifikat, keine Änderung am Gerät)

Justieren (Einstellen):
→ Gerät auf richtigen Wert EINSTELLEN
(Abweichung korrigieren)

Nach dem Justieren → wieder kalibrieren!
In der Praxis oft verwechselt!`},{id:92,modul:"messtechnik",vorderseite:"HART-Protokoll",rueckseite:`Highway Addressable Remote Transducer

- Digitales Signal auf 4–20 mA-Leitung
- Gleichzeitig: Analogwert + Digitalkomm.
- Frequenz: 1200 Hz (Bit 1) / 2200 Hz (Bit 0)
- Parametrierung über Handheld oder PC

Vorteil: Bestehende 4-20mA-Kabel nutzbar
Neu: HART 7 (WirelessHART)`},{id:93,modul:"messtechnik",vorderseite:"Temperatursensor-Vergleich",rueckseite:`PT100/PT1000:
+ Genau, stabil, linearisierbar
− Langsam, teurer, Leitungskorrektur nötig
Bereich: -200 bis +850°C

Thermoelement Typ K:
+ Günstig, robuster, bis 1300°C
− Referenzstellenkompensation nötig
− Drift über Zeit

NTC:
+ Sehr günstig, empfindlich
− Nichtlinear, kleiner Messbereich`},{id:94,modul:"messtechnik",vorderseite:"Schallgeschwindigkeit Ultraschallsensor",rueckseite:`Schallgeschwindigkeit Luft:
c ≈ 343 m/s (bei 20°C)

Abstandsmessung:
d = c × t / 2
(t = Laufzeit Hin + Rück)

Problem: Temperaturabhängig!
c(T) = 331 + 0,6 × T [°C] m/s

Lösung: Temperaturkompensation oder
Mikrowellen-Radar verwenden`},{id:95,modul:"messtechnik",vorderseite:"Zweipunkt-Regelung",rueckseite:`Einfachste Regelart (Ein/Aus)

Istwert < Sollwert - Hysterese → EIN
Istwert > Sollwert + Hysterese → AUS

Beispiel: Thermostat
Sollwert 70°C, Hysterese ±2°C
→ EIN bei 68°C, AUS bei 72°C

Nachteil: Dauerndes Takten
Vorteil: Sehr einfach
Häufig: Heizungen, Klimaanlagen`},{id:96,modul:"messtechnik",vorderseite:"PID-Regler Grundbegriffe",rueckseite:`P = Proportional: sofortige Reaktion auf Abweichung
I = Integral: beseitigt bleibende Regelabweichung
D = Differenzial: dämpft Überschwingen

e(t) = Sollwert - Istwert (Regelabweichung)

P-Anteil: y = Kp × e
I-Anteil: y = Ki × ∫e dt
D-Anteil: y = Kd × de/dt

Anwendung: Temperatur, Druck, Drehzahl`},{id:97,modul:"mechanik",vorderseite:"Metrisches Gewinde (M-Gewinde)",rueckseite:`Bezeichnung: M [Durchmesser] × [Steigung]
M8 = Aussendurchmesser 8 mm
M8 × 1,25 (Regelgewinde, Standard)
M8 × 1,0 (Feingewinde)

Gewindetiefe ≈ 0,6 × Durchmesser
Einschraubtiefe Stahl: 1,0 × d
Einschraubtiefe Aluminium: 1,5 × d

Schlüsselweite: SW = ca. 1,5 × d (Faustregel)`},{id:98,modul:"mechanik",vorderseite:"Presspassung – Fügeverfahren",rueckseite:`Bei Presspassung: Welle > Bohrung
→ Fügen braucht Kraft oder Wärme

Kaltfügen: Hydraulikpresse

Wärmefügen:
- Nabe erwärmen (ca. +150°C bis +200°C)
- oder Welle kühlen (Trockeneis -78°C, Stickstoff -196°C)
→ Wärmeausdehnung nutzen

Vorteil Wärmefügen: Keine Druckkräfte
Nachteil: Oxidation, Ölrückstände vermeiden!`},{id:99,modul:"mechanik",vorderseite:"Kerbwirkung und Dauerfestigkeit",rueckseite:`Kerben (Nuten, Bohrungen, Absätze) schwächen Bauteile!

Kerbwirkungszahl β_k: 1,5–3,0 (je nach Kerbe)

Zulässige Spannung sinkt:
σ_zul = σ_b / (S × β_k)

Massnahmen:
- Grosse Übergangsradien
- Keine scharfen Ecken
- Oberflächenverfestigung (Kugelstrahlen)
- Schmierstoffrillen nicht quer zur Last`},{id:100,modul:"mechanik",vorderseite:"Schweissnahtsymbole",rueckseite:`Nahtform (Grundsymbol):
─ = Stumpfnaht (I-Naht)
△ = Kehlnaht
○ = Lochschweissnaht

Auf der Linie = Naht auf Pfeilseite
Unter der Linie = Naht auf Gegenseite

Angaben:
a = Nahtdicke [mm]
z = Schenkellänge
l = Nahtlänge

Norm: ISO 2553 / EN ISO 2553`},{id:101,modul:"mechanik",vorderseite:"Drehmomenten-Anzugsschlüssel",rueckseite:`Anzugsmoment nach Festigkeitsklasse und Gewinde:

M8 / 8.8:   25 Nm
M10 / 8.8:  49 Nm
M12 / 8.8:  85 Nm
M8 / 10.9:  35 Nm

Faustregel: M [mm] ≈ M_A / 2 Nm (8.8)

Mit Gewindesicherung (Loctite): 20% weniger
Geschmiert: 20% weniger
Immer Herstellerangabe beachten!`},{id:102,modul:"digitaltechnik",vorderseite:"RS-232 vs. RS-485",rueckseite:`RS-232:
- 1 Sender, 1 Empfänger (Punkt zu Punkt)
- Spannungen: ±3V bis ±15V
- Max. Länge: 15 m bei 9600 Baud
- Typisch: PC-Serielle Schnittstelle

RS-485:
- Bus: bis 32 Teilnehmer
- Differenzsignal: störsicher
- Max. Länge: 1200 m
- Typisch: Profibus, Modbus RTU, SPS`},{id:103,modul:"digitaltechnik",vorderseite:"PWM – Pulsweitenmodulation",rueckseite:`Digitales Signal mit variablem Tastverhältnis

Tastverhältnis D = t_ein / T × 100%

D = 0%:   Ausgabe = 0 (immer aus)
D = 50%:  Ausgabe = 50% des Maximalwerts
D = 100%: Ausgabe = Maximum

Anwendung:
- LED-Helligkeit dimmen
- Motorgeschwindigkeit (FU, Servo)
- D/A-Wandlung mit RC-Filter`},{id:104,modul:"digitaltechnik",vorderseite:"SPI-Protokoll",rueckseite:`Serial Peripheral Interface
4-Leiter-Bus:
SCLK: Takt (Master)
MOSI: Daten Master→Slave
MISO: Daten Slave→Master
CS/SS: Chip Select (pro Slave)

- Synchron, vollduplex
- Sehr schnell (bis 100 MHz)
- Kurze Distanzen (< 30 cm)

Anwendung: Display, SD-Karte, ADC/DAC`},{id:105,modul:"digitaltechnik",vorderseite:"I²C-Protokoll",rueckseite:`Inter-Integrated Circuit
2-Leiter-Bus:
SCL: Takt
SDA: Daten (bidirektional)

- Halbduplex, bis 127 Adressen
- Geschwindigkeit: 100 kHz / 400 kHz / 1 MHz
- Für kurze Distanzen auf PCB
- Open-Drain: Pull-up-Widerstände nötig

Anwendung:
Temperatursensor, EEPROM, RTC, Display`},{id:106,modul:"digitaltechnik",vorderseite:"Floating Point (IEEE 754)",rueckseite:`Darstellung von Dezimalzahlen in 32 Bit

Aufbau:
1 Bit Vorzeichen
8 Bit Exponent (bias 127)
23 Bit Mantisse

Beispiel in SPS: REAL-Datentyp
3,14 ≈ 0 10000000 10010001...

Genauigkeit: ca. 7 Dezimalstellen

Problem: 0,1 + 0,2 ≠ 0,3 exakt!
→ Nie auf == vergleichen!`},{id:107,modul:"arbeitssicherheit",vorderseite:"Gefährdungsbeurteilung (GBU)",rueckseite:`Pflichtdokument für jeden Arbeitsplatz!

5 Schritte:
1. Gefährdungen ERMITTELN
2. Gefährdungen BEWERTEN (Risiko = Eintritt × Schwere)
3. Schutzmassnahmen FESTLEGEN
4. Massnahmen UMSETZEN
5. Wirksamkeit ÜBERPRÜFEN

Dokumentiert und regelmässig aktualisiert!
Basis: Betriebssicherheitsverordnung`},{id:108,modul:"arbeitssicherheit",vorderseite:"Not-Halt vs. Not-Aus",rueckseite:`Not-Halt (gelb):
- Stoppt gefährliche Bewegung
- Anlage bleibt unter Spannung
- Muss manuell quittiert werden
- Für Maschinen mit Nachlaufgefahr

Not-Aus (rot):
- Schaltet alle Energien ab
- Anlage komplett spannungsfrei
- Für Elektro-Notfälle

Nach IEC 60204-1 und EN ISO 13850`},{id:109,modul:"arbeitssicherheit",vorderseite:"Sicherheitskategorie (PL / SIL)",rueckseite:`Performance Level (PL) nach EN ISO 13849:
PL a–e (a = niedrigste, e = höchste Anforderung)

Safety Integrity Level (SIL) nach IEC 62061:
SIL 1–3

PL e ≈ SIL 3: Not-Halt, Zweihandbedienung
PL d ≈ SIL 2: Lichtvorhänge, Schutztüren
PL c ≈ SIL 1: Einfache Sicherheitsfunktion`},{id:110,modul:"arbeitssicherheit",vorderseite:"Lärm und Gehörschutz",rueckseite:`Grenzwerte am Arbeitsplatz (EU-Richtlinie):

80 dB(A): Gehörschutz zur Verfügung stellen
85 dB(A): Gehörschutz PFLICHT
87 dB(A): Absoluter Grenzwert

Verdoppelung der Lautstärke = +3 dB

Materialien:
Gehörschutzstöpsel: SNR 20–37 dB
Gekapselter Gehörschutz: SNR 20–35 dB

Montage von Druckluftanlagen: oft > 90 dB!`},{id:111,modul:"arbeitssicherheit",vorderseite:"CE-Kennzeichnung Maschinen",rueckseite:`CE = Conformité Européenne

Pflicht für alle Maschinen auf dem EU-Markt!

Dokumente die benötigt werden:
- Risikobeurteilung
- Technische Dokumentation
- Betriebsanleitung (Landessprache)
- Konformitätserklärung

Normen: Maschinenrichtlinie 2006/42/EG
EN ISO 12100 (Risikobeurteilung)

Ohne CE: Anlage darf nicht in Betrieb!`},{id:112,modul:"elektriker",vorderseite:"Spannungsfall-Berechnung",rueckseite:`ΔU = (2 × I × l × cos φ) / (κ × A)

Für Einphas-Wechselstrom oder DC.
Für Drehstrom: Faktor 2 entfällt (√3)

κ(Kupfer) = 56 m/(Ω·mm²)
Zulässig: max. 3% Beleuchtung
             max. 5% Kraft

Beispiel: 16A, 30m, 2,5mm², 1-phasig:
ΔU = (2×16×30) / (56×2,5) = 6,86 V
→ 6,86/230 = 3% → gerade ok`},{id:113,modul:"elektriker",vorderseite:"Potentialausgleich (PA)",rueckseite:`Verbindet alle leitfähigen Teile auf gleiches Potential
→ Verhindert Berührungsspannungen

Hauptpotentialausgleich (HPA):
- Wasserrohre, Gasrohre, Heizung, Stahlbau
- An Haupterdungsschiene (HES)

Zusatzpotentialausgleich (ZPA):
- In Nassräumen (Bäder: ≤ 50V Differenz)
- Gleichstromwiderstände < 0,2 Ω (neu) / < 1 Ω (alt)

Messung: Durchgangsprüfer (< 0,2 Ω)`},{id:114,modul:"elektriker",vorderseite:"Trenntrafo vs. Sicherheitstrafo",rueckseite:`Trenntrafo:
- Galvanische Trennung vom Netz
- Ausgang: 230V (gleiche Spannung)
- Zweck: Personenschutz bei Reparaturen
- Ein Pol kann berührt werden (kein Stromfluss)

Sicherheitstrafo (SELV):
- Ausgang: ≤ 50V AC / ≤ 120V DC
- Zweck: Schutzkleinspannung
- Kein FI nötig
- Anwendung: Klingel, Gartenpumpe, Bäder`},{id:115,modul:"elektriker",vorderseite:"Kabeltrag-Systeme",rueckseite:`Kabelpritschen (Kabelbühnen):
- Offen, gut belüftet
- Für grosse Kabelbündel
- Bis 60% füllen!

Kabelkanal (Kunststoff/Metall):
- Geschlossen, im Schaltschrank
- Deckel abnehmbar
- Bis 60% füllen!

Kabelrohr (Leerrohr):
- Schutz in Wänden/Boden
- Nachziehbar
- Max. Füllung 40%

Kabelleiter: Wie Pritsche, günstiger`},{id:116,modul:"elektriker",vorderseite:"Thermische Überlast – Korrekturfaktoren",rueckseite:`Nennstrom aus Tabelle gilt für Normbedingungen:
- 25°C Umgebungstemperatur
- 1 Kabel allein verlegt

Korrekturfaktoren:
Temperatur 35°C: × 0,94
Temperatur 45°C: × 0,87

Häufung (3 Kabel):  × 0,70
Häufung (6 Kabel):  × 0,57
Häufung (9 Kabel):  × 0,50

Beispiel: 20A Kabel bei 45°C, 3 Häufung:
20 × 0,87 × 0,70 = 12,2 A maximal!`},{id:117,modul:"schaltplaene",vorderseite:"BMK – Betriebsmittelkennzeichen",rueckseite:`Systemkennzeichen für Betriebsmittel im Stromlaufplan:

-F: Schutzeinrichtung (Sicherung, LSS, FI)
-K: Schütz, Relais
-M: Motor
-Q: Leistungsschalter, Motorschutz
-S: Schalter, Taster, Not-Halt
-H: Leuchte, Signalgeber, Horn
-X: Klemmenleiste
-T: Transformator
-Y: Magnetventil, Elektromagnet
-B: Sensor, Messumformer

Beispiel: -K1 = erstes Schütz/Relais`},{id:118,modul:"schaltplaene",vorderseite:"Schliesser vs. Öffner (Schaltzeichen)",rueckseite:`Schliesser (NO = Normally Open):
  ─ / ─  oder  ─| |─
Ruhezustand: OFFEN
Betätigt: geschlossen

Öffner (NC = Normally Closed):
  ─|/|─
Ruhezustand: GESCHLOSSEN
Betätigt: offen

Merkhilfe:
"Schliesser schliesst bei Betätigung"
"Öffner öffnet bei Betätigung"

Not-Halt IMMER als Öffner (Ruhestromkreis)!`},{id:119,modul:"schaltplaene",vorderseite:"Hauptstrom- vs. Steuerstromkreis",rueckseite:`Hauptstromkreis (Leistungsteil):
- 400 V AC (3-phasig) oder 230 V AC
- Dicke Linien, hohe Ströme
- Komponenten: Sicherung, MSS, Schütz-Hauptkontakte, Motor
- Oben im Plan

Steuerstromkreis:
- 24 V DC (Standard Automatisierung)
- Dünne Linien, kleine Ströme
- Komponenten: Taster, Relais, SPS-Ausgänge, Spulen
- Unten im Plan oder auf separatem Blatt

Trennung: galvanisch durch Trafo oder SMPS`},{id:120,modul:"schaltplaene",vorderseite:"Selbsthalteschaltung",rueckseite:`Schützsteuerung mit Selbsthaltung:

+24V → [S1 Stop/NC] → [S2 Start/NO] → (K1-Spule) → 0V
                           |
                     [K1-Hilfs/NO] <- parallel zu S2

Funktion:
1. S2 drücken → K1 zieht an
2. K1-Hilfskontakt schliesst (parallel S2)
3. S2 loslassen → K1 bleibt (Selbsthaltung)
4. S1 drücken → K1 fällt ab

Anwendung: Motorstart/Stop, Pumpensteuerung`},{id:121,modul:"schaltplaene",vorderseite:"Klemmenplan lesen",rueckseite:`Klemme X1:3 bedeutet:
→ Klemmenleiste X1, Klemme Nummer 3

Spalten:
| Von   | = Anschluss des Innengeräts
| Kl.   | = Klemmennummer
| Nach  | = Anschluss Feldgerät aussen
| mm²  | = Leiterquerschnitt

Beispiel:
X1:1 | -F1:2 | L1 Motor | -K1:1 | 2.5 mm²
→ Von Sicherung F1 Klemme 2
→ über Klemme X1:1
→ nach Schütz K1 Eingang 1
→ mit 2,5 mm² Leiter`},{id:122,modul:"schaltplaene",vorderseite:"ISO 1219 – Pneumatik-Anschlüsse",rueckseite:`Ventil-Anschlussbezeichnung nach ISO 1219:

1 (P): Druckluft (Pressure)
2 (A): Arbeitsanschluss 1
3 (R): Entlüftung 1 (Release)
4 (B): Arbeitsanschluss 2
5 (S): Entlüftung 2

5/2-Ventil Stellung 1: 1→2 offen, 4→5 offen
5/2-Ventil Stellung 2: 1→4 offen, 2→3 offen

Regel: Alle Ventile in RUHESTELLUNG zeichnen!`},{id:123,modul:"schaltplaene",vorderseite:"E/A-Liste (I/O-Liste) SPS",rueckseite:`E/A-Liste = Zuordnung SPS-Adresse zu Feldgerät

Eingänge:
I0.0 = Starttaster S2 (Schliesser)
I0.1 = Stoptaster S1 (Öffner)
I0.2 = Motorschutz Q1 (Öffner)
I0.3 = Endlage B1 (induktiv)

Ausgänge:
Q0.0 = Schütz K1 (Spule)
Q0.1 = Meldeleuchte H1 grün
Q0.2 = Störleuchte H2 rot

Analog:
IW64 = Drucktransmitter (0–16 bar)

Basis für: Verdrahtung UND Programmierung!`},{id:124,modul:"schaltplaene",vorderseite:"Leserichtung Stromlaufplan",rueckseite:`Stromlaufplan lesen:

1. Oben: Netzeinspeisung (L1, L2, L3 oder +24V)
2. Unten: Rückleiter (N / 0V / PE)
3. Von LINKS nach RECHTS: Strom fliesst
4. Von OBEN nach UNTEN: Netzplan-Reihenfolge
5. Jede Zeile = ein Strompfad

Querbezüge:
Kontakt K1 oben → Spule K1 auf Seite 3
(Kontaktspiegel: zeigt alle Kontakte einer Spule)

Not-Halt: Öffner, immer im Ruhestromkreis
Selbsthaltung: Schliesser parallel zum Starttaster`},{id:125,modul:"elektrotechnik",vorderseite:"Induktionsgesetz (Faraday)",rueckseite:`u_i = -N × dΦ/dt

u_i = induzierte Spannung [V]
N = Windungszahl
Φ = magnetischer Fluss [Wb]

Praktisch:
- Je schneller die Feldänderung, desto grösser u_i
- Basis für: Transformator, Generator, Elektromotor
- Lenz: Induzierter Strom wirkt der Ursache entgegen

Anwendung:
Freilaufdiode bei Schützen verhindert Spannungsspitzen`},{id:126,modul:"sps",vorderseite:"TIA Portal – Projektstruktur",rueckseite:`TIA Portal (Totally Integrated Automation):

Projektbaum:
├── CPU (z.B. S7-1500 CPU 1511)
│   ├── Gerätekonfiguration (Hardware)
│   ├── OB1 (Hauptprogramm)
│   ├── FC1, FB1 (Bausteine)
│   └── DB1, DB2 (Daten)
├── HMI (KTP700)
└── Netzwerk (Profinet)

Workflow:
1. Hardware konfigurieren
2. Symboltabelle anlegen
3. Bausteine erstellen
4. Laden und testen`},{id:127,modul:"messtechnik",vorderseite:"Analogsignal skalieren (SPS)",rueckseite:`Rohwert → physikalischer Wert:

Siemens S7: 0–27648 = 0–100% Messbereich

Formel:
Messwert = (Rohwert - 0) × (MBO - MBU) / 27648 + MBU

Beispiel: Drucksensor 0–16 bar, Rohwert = 13824
Messwert = 13824 × 16 / 27648 + 0 = 8 bar
(= 50% des Messbereichs)

In TIA: FC NORM_X und SCALE_X
In S7-300: FC105/FC106`}];function im(){const[e,n]=z.useState("alle"),[t,r]=z.useState(!1),[i,l]=z.useState(0),[a,u]=z.useState("alle"),{markFlashcard:o,getFlashcardStatus:d}=hr(),p=rm.filter(c=>{const g=e==="alle"||c.modul===e,x=a==="alle"||d(c.id)===a||a==="wiederholen"&&!d(c.id);return g&&x}),h=Math.min(i,Math.max(0,p.length-1)),m=p[h],k=()=>{r(!1),setTimeout(()=>l(c=>Math.min(p.length-1,c+1)),150)},S=()=>{r(!1),setTimeout(()=>l(c=>Math.max(0,c-1)),150)},y=c=>{m&&o(m.id,c),k()},b=p.filter(c=>d(c.id)==="known").length,f=p.filter(c=>d(c.id)!=="known").length;return s.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[s.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Karteikarten"}),s.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[s.jsxs("select",{value:e,onChange:c=>{n(c.target.value),l(0),r(!1)},className:"px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white",children:[s.jsx("option",{value:"alle",children:"Alle Module"}),Ze.map(c=>s.jsxs("option",{value:c.id,children:[c.icon," ",c.titel]},c.id))]}),s.jsx("div",{className:"flex rounded-xl overflow-hidden border border-gray-200",children:[{val:"alle",label:"Alle"},{val:"wiederholen",label:`Wiederholen (${f})`},{val:"known",label:`Gewusst (${b})`}].map(c=>s.jsx("button",{onClick:()=>{u(c.val),l(0),r(!1)},className:`px-3 py-2 text-sm transition-colors ${a===c.val?"bg-blue-600 text-white":"bg-white text-gray-600 hover:bg-gray-50"}`,children:c.label},c.val))})]}),p.length===0?s.jsxs("div",{className:"text-center py-12 text-gray-400",children:[s.jsx("div",{className:"text-4xl mb-3",children:"🎉"}),s.jsx("p",{children:"Keine Karteikarten für diese Auswahl."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex justify-between text-sm text-gray-500 mb-3",children:[s.jsxs("span",{children:["Karte ",h+1," von ",p.length]}),s.jsxs("span",{children:["✓ ",b," gewusst · 🔄 ",f," wiederholen"]})]}),s.jsx("div",{className:"cursor-pointer mb-4",onClick:()=>r(c=>!c),style:{perspective:"1000px"},children:s.jsxs("div",{style:{transition:"transform 0.4s",transformStyle:"preserve-3d",transform:t?"rotateY(180deg)":"rotateY(0deg)",position:"relative",height:"220px"},children:[s.jsxs("div",{style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"},className:"absolute inset-0 bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white",children:[s.jsx("div",{className:"text-xs uppercase tracking-widest text-blue-200 mb-4",children:"Frage / Begriff"}),s.jsx("p",{className:"text-xl font-bold text-center",children:m==null?void 0:m.vorderseite}),s.jsx("div",{className:"text-xs text-blue-200 mt-6",children:"Klicken zum Umdrehen"})]}),s.jsxs("div",{style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"rotateY(180deg)"},className:"absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-blue-200",children:[s.jsx("div",{className:"text-xs uppercase tracking-widest text-blue-400 mb-4",children:"Antwort"}),s.jsx("pre",{className:"text-sm text-gray-800 font-sans text-center whitespace-pre-wrap leading-relaxed",children:m==null?void 0:m.rueckseite})]})]})}),s.jsxs("div",{className:"flex gap-2 justify-center mb-4",children:[s.jsx("button",{onClick:S,disabled:h===0,className:"px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50",children:"← Zurück"}),s.jsx("button",{onClick:k,disabled:h>=p.length-1,className:"px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50",children:"Weiter →"})]}),t&&s.jsxs("div",{className:"flex gap-3 justify-center",children:[s.jsx("button",{onClick:()=>y(!1),className:"flex-1 max-w-[160px] py-3 bg-red-100 text-red-700 rounded-xl font-medium text-sm hover:bg-red-200 transition-colors",children:"🔄 Wiederholen"}),s.jsx("button",{onClick:()=>y(!0),className:"flex-1 max-w-[160px] py-3 bg-green-100 text-green-700 rounded-xl font-medium text-sm hover:bg-green-200 transition-colors",children:"✓ Gewusst!"})]})]})]})}function lm(){return s.jsxs("div",{className:"min-h-screen bg-gray-50",children:[s.jsx(jf,{}),s.jsx("main",{children:s.jsxs(xf,{children:[s.jsx(On,{path:"/",element:s.jsx(Mf,{})}),s.jsx(On,{path:"/module/:id",element:s.jsx(Xf,{})}),s.jsx(On,{path:"/quiz/:id",element:s.jsx(Jf,{})}),s.jsx(On,{path:"/fortschritt",element:s.jsx(tm,{})}),s.jsx(On,{path:"/karteikarten",element:s.jsx(im,{})})]})})]})}cl.createRoot(document.getElementById("root")).render(s.jsx(Mu.StrictMode,{children:s.jsx(Nf,{children:s.jsx(lm,{})})}));
