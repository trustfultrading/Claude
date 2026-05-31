function Yc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Xc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bu={exports:{}},mi={},wu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),Jc=Symbol.for("react.portal"),qc=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),rd=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),sd=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),ra=Symbol.iterator;function ud(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xu=Object.assign,Eu={};function gt(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Au}gt.prototype.isReactComponent={};gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nu(){}Nu.prototype=gt.prototype;function ss(e,n,t){this.props=e,this.context=n,this.refs=Eu,this.updater=t||Au}var as=ss.prototype=new Nu;as.constructor=ss;xu(as,gt.prototype);as.isPureReactComponent=!0;var ia=Array.isArray,Pu=Object.prototype.hasOwnProperty,us={current:null},Du={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,n,t){var r,i={},l=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(l=""+n.key),n)Pu.call(n,r)&&!Du.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lr,type:e,key:l,ref:s,props:i,_owner:us.current}}function od(e,n){return{$$typeof:lr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function cd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var la=/\/+/g;function Ti(e,n){return typeof e=="object"&&e!==null&&e.key!=null?cd(""+e.key):n.toString(36)}function Ir(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case Jc:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ti(s,0):r,ia(i)?(t="",e!=null&&(t=e.replace(la,"$&/")+"/"),Ir(i,n,t,"",function(c){return c})):i!=null&&(os(i)&&(i=od(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(la,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",ia(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Ti(l,a);s+=Ir(l,n,t,u,i)}else if(u=ud(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Ti(l,a++),s+=Ir(l,n,t,u,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,n,t){if(e==null)return e;var r=[],i=0;return Ir(e,r,"","",function(l){return n.call(t,l,i++)}),r}function dd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Br={transition:null},hd={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Br,ReactCurrentOwner:us};function Mu(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=gt;I.Fragment=qc;I.Profiler=nd;I.PureComponent=ss;I.StrictMode=ed;I.Suspense=ld;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hd;I.act=Mu;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xu({},e.props),i=e.key,l=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,s=us.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)Pu.call(n,u)&&!Du.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:i,ref:l,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:rd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:td,_context:e},e.Consumer=e};I.createElement=Cu;I.createFactory=function(e){var n=Cu.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:id,render:e}};I.isValidElement=os;I.lazy=function(e){return{$$typeof:ad,_payload:{_status:-1,_result:e},_init:dd}};I.memo=function(e,n){return{$$typeof:sd,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=Br.transition;Br.transition={};try{e()}finally{Br.transition=n}};I.unstable_act=Mu;I.useCallback=function(e,n){return ce.current.useCallback(e,n)};I.useContext=function(e){return ce.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};I.useEffect=function(e,n){return ce.current.useEffect(e,n)};I.useId=function(){return ce.current.useId()};I.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return ce.current.useMemo(e,n)};I.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};I.useRef=function(e){return ce.current.useRef(e)};I.useState=function(e){return ce.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return ce.current.useTransition()};I.version="18.3.1";wu.exports=I;var w=wu.exports;const Iu=Xc(w),fd=Yc({__proto__:null,default:Iu},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=w,md=Symbol.for("react.element"),pd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,vd=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sd={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,n,t){var r,i={},l=null,s=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)kd.call(n,r)&&!Sd.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:md,type:e,key:l,ref:s,props:i,_owner:vd.current}}mi.Fragment=pd;mi.jsx=Bu;mi.jsxs=Bu;bu.exports=mi;var d=bu.exports,cl={},Ru={exports:{}},ze={},Fu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,C){var M=E.length;E.push(C);e:for(;0<M;){var H=M-1>>>1,X=E[H];if(0<i(X,C))E[H]=C,E[M]=X,M=H;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var C=E[0],M=E.pop();if(M!==C){E[0]=M;e:for(var H=0,X=E.length,fr=X>>>1;H<fr;){var wn=2*(H+1)-1,Fi=E[wn],An=wn+1,gr=E[An];if(0>i(Fi,M))An<X&&0>i(gr,Fi)?(E[H]=gr,E[An]=M,H=An):(E[H]=Fi,E[wn]=M,H=wn);else if(An<X&&0>i(gr,M))E[H]=gr,E[An]=M,H=An;else break e}}return C}function i(E,C){var M=E.sortIndex-C.sortIndex;return M!==0?M:E.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],p=1,h=null,m=3,k=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,o=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var C=t(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=E)r(c),C.sortIndex=C.expirationTime,n(u,C);else break;C=t(c)}}function S(E){if(y=!1,f(E),!v)if(t(u)!==null)v=!0,Bi(A);else{var C=t(c);C!==null&&Ri(S,C.startTime-E)}}function A(E,C){v=!1,y&&(y=!1,g(D),D=-1),k=!0;var M=m;try{for(f(C),h=t(u);h!==null&&(!(h.expirationTime>C)||E&&!De());){var H=h.callback;if(typeof H=="function"){h.callback=null,m=h.priorityLevel;var X=H(h.expirationTime<=C);C=e.unstable_now(),typeof X=="function"?h.callback=X:h===t(u)&&r(u),f(C)}else r(u);h=t(u)}if(h!==null)var fr=!0;else{var wn=t(c);wn!==null&&Ri(S,wn.startTime-C),fr=!1}return fr}finally{h=null,m=M,k=!1}}var N=!1,P=null,D=-1,U=5,B=-1;function De(){return!(e.unstable_now()-B<U)}function kt(){if(P!==null){var E=e.unstable_now();B=E;var C=!0;try{C=P(!0,E)}finally{C?vt():(N=!1,P=null)}}else N=!1}var vt;if(typeof o=="function")vt=function(){o(kt)};else if(typeof MessageChannel<"u"){var ta=new MessageChannel,Qc=ta.port2;ta.port1.onmessage=kt,vt=function(){Qc.postMessage(null)}}else vt=function(){b(kt,0)};function Bi(E){P=E,N||(N=!0,vt())}function Ri(E,C){D=b(function(){E(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||k||(v=!0,Bi(A))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(E){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var M=m;m=C;try{return E()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,C){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=m;m=E;try{return C()}finally{m=M}},e.unstable_scheduleCallback=function(E,C,M){var H=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?H+M:H):M=H,E){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=M+X,E={id:p++,callback:C,priorityLevel:E,startTime:M,expirationTime:X,sortIndex:-1},M>H?(E.sortIndex=M,n(c,E),t(u)===null&&E===t(c)&&(y?(g(D),D=-1):y=!0,Ri(S,M-H))):(E.sortIndex=X,n(u,E),v||k||(v=!0,Bi(A))),E},e.unstable_shouldYield=De,e.unstable_wrapCallback=function(E){var C=m;return function(){var M=m;m=C;try{return E.apply(this,arguments)}finally{m=M}}}})(Tu);Fu.exports=Tu;var yd=Fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=w,ye=yd;function z(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lu=new Set,_t={};function Ln(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for(_t[e]=n,e=0;e<n.length;e++)Lu.add(n[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dl=Object.prototype.hasOwnProperty,bd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa={},aa={};function wd(e){return dl.call(aa,e)?!0:dl.call(sa,e)?!1:bd.test(e)?aa[e]=!0:(sa[e]=!0,!1)}function Ad(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xd(e,n,t,r){if(n===null||typeof n>"u"||Ad(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,i,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var cs=/[\-:]([a-z])/g;function ds(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(cs,ds);te[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,n,t,r){var i=te.hasOwnProperty(n)?te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xd(n,t,i,r)&&(t=null),r||i===null?wd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Je=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pr=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Ku=Symbol.for("react.context"),gs=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),ms=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),ua=Symbol.iterator;function St(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Li;function Nt(e){if(Li===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Li=n&&n[1]||""}return`
`+Li+e}var Wi=!1;function Ki(e,n){if(!e||Wi)return"";Wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nt(e):""}function Ed(e){switch(e.tag){case 5:return Nt(e.type);case 16:return Nt("Lazy");case 13:return Nt("Suspense");case 19:return Nt("SuspenseList");case 0:case 2:case 15:return e=Ki(e.type,!1),e;case 11:return e=Ki(e.type.render,!1),e;case 1:return e=Ki(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case jn:return"Portal";case hl:return"Profiler";case fs:return"StrictMode";case fl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ku:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case gs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ms:return n=e.displayName||null,n!==null?n:ml(e.type)||"Memo";case en:n=e._payload,e=e._init;try{return ml(e(n))}catch{}}return null}function Nd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(n);case 8:return n===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pd(e){var n=Ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){e._valueTracker||(e._valueTracker=Pd(e))}function Vu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ou(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function oa(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=kn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ju(e,n){n=n.checked,n!=null&&hs(e,"checked",n,!1)}function kl(e,n){ju(e,n);var t=kn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?vl(e,n.type,t):n.hasOwnProperty("defaultValue")&&vl(e,n.type,kn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ca(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function vl(e,n,t){(n!=="number"||Ur(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pt=Array.isArray;function nt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+kn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Sl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(z(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(z(92));if(Pt(t)){if(1<t.length)throw Error(z(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:kn(t)}}function Uu(e,n){var t=kn(n.value),r=kn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dd=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(e){Dd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mt[n]=Mt[e]})});function Zu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Mt.hasOwnProperty(e)&&Mt[e]?(""+n).trim():n+"px"}function $u(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Zu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Cd=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,n){if(n){if(Cd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(z(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(z(61))}if(n.style!=null&&typeof n.style!="object")throw Error(z(62))}}function bl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,tt=null,rt=null;function fa(e){if(e=ur(e)){if(typeof Al!="function")throw Error(z(280));var n=e.stateNode;n&&(n=yi(n),Al(e.stateNode,e.type,n))}}function Qu(e){tt?rt?rt.push(e):rt=[e]:tt=e}function Yu(){if(tt){var e=tt,n=rt;if(rt=tt=null,fa(e),n)for(e=0;e<n.length;e++)fa(n[e])}}function Xu(e,n){return e(n)}function Ju(){}var _i=!1;function qu(e,n,t){if(_i)return e(n,t);_i=!0;try{return Xu(e,n,t)}finally{_i=!1,(tt!==null||rt!==null)&&(Ju(),Yu())}}function Vt(e,n){var t=e.stateNode;if(t===null)return null;var r=yi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(z(231,n,typeof t));return t}var xl=!1;if($e)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){xl=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{xl=!1}function Md(e,n,t,r,i,l,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(p){this.onError(p)}}var It=!1,Hr=null,Gr=!1,El=null,Id={onError:function(e){It=!0,Hr=e}};function Bd(e,n,t,r,i,l,s,a,u){It=!1,Hr=null,Md.apply(Id,arguments)}function Rd(e,n,t,r,i,l,s,a,u){if(Bd.apply(this,arguments),It){if(It){var c=Hr;It=!1,Hr=null}else throw Error(z(198));Gr||(Gr=!0,El=c)}}function Wn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function eo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ga(e){if(Wn(e)!==e)throw Error(z(188))}function Fd(e){var n=e.alternate;if(!n){if(n=Wn(e),n===null)throw Error(z(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ga(i),e;if(l===r)return ga(i),n;l=l.sibling}throw Error(z(188))}if(t.return!==r.return)t=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=l;break}if(a===r){s=!0,r=i,t=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===t){s=!0,t=l,r=i;break}if(a===r){s=!0,r=l,t=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(t.alternate!==r)throw Error(z(190))}if(t.tag!==3)throw Error(z(188));return t.stateNode.current===t?e:n}function no(e){return e=Fd(e),e!==null?to(e):null}function to(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=to(e);if(n!==null)return n;e=e.sibling}return null}var ro=ye.unstable_scheduleCallback,ma=ye.unstable_cancelCallback,Td=ye.unstable_shouldYield,Ld=ye.unstable_requestPaint,G=ye.unstable_now,Wd=ye.unstable_getCurrentPriorityLevel,ks=ye.unstable_ImmediatePriority,io=ye.unstable_UserBlockingPriority,Zr=ye.unstable_NormalPriority,Kd=ye.unstable_LowPriority,lo=ye.unstable_IdlePriority,pi=null,_e=null;function _d(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:jd,Od=Math.log,Vd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Od(e)/Vd|0)|0}var Sr=64,yr=4194304;function Dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=Dt(a):(l&=s,l!==0&&(r=Dt(l)))}else s=t&~i,s!==0?r=Dt(s):l!==0&&(r=Dt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Re(n),i=1<<t,r|=e[t],n&=~i;return r}function Ud(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Re(l),a=1<<s,u=i[s];u===-1?(!(a&t)||a&r)&&(i[s]=Ud(a,n)):u<=n&&(e.expiredLanes|=a),l&=~a}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function so(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function Oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Re(n),e[n]=t}function Gd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Re(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function vs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Re(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var F=0;function ao(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uo,Ss,oo,co,ho,Pl=!1,zr=[],un=null,on=null,cn=null,jt=new Map,Ut=new Map,tn=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ut.delete(n.pointerId)}}function zt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&Ss(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function $d(e,n,t,r,i){switch(n){case"focusin":return un=zt(un,e,n,t,r,i),!0;case"dragenter":return on=zt(on,e,n,t,r,i),!0;case"mouseover":return cn=zt(cn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return jt.set(l,zt(jt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ut.set(l,zt(Ut.get(l)||null,e,n,t,r,i)),!0}return!1}function fo(e){var n=Nn(e.target);if(n!==null){var t=Wn(n);if(t!==null){if(n=t.tag,n===13){if(n=eo(t),n!==null){e.blockedOn=n,ho(e.priority,function(){oo(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Dl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);wl=r,t.target.dispatchEvent(r),wl=null}else return n=ur(t),n!==null&&Ss(n),e.blockedOn=t,!1;n.shift()}return!0}function ka(e,n,t){Rr(e)&&t.delete(n)}function Qd(){Pl=!1,un!==null&&Rr(un)&&(un=null),on!==null&&Rr(on)&&(on=null),cn!==null&&Rr(cn)&&(cn=null),jt.forEach(ka),Ut.forEach(ka)}function bt(e,n){e.blockedOn===n&&(e.blockedOn=null,Pl||(Pl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Qd)))}function Ht(e){function n(i){return bt(i,e)}if(0<zr.length){bt(zr[0],e);for(var t=1;t<zr.length;t++){var r=zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&bt(un,e),on!==null&&bt(on,e),cn!==null&&bt(cn,e),jt.forEach(n),Ut.forEach(n),t=0;t<tn.length;t++)r=tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(t=tn[0],t.blockedOn===null);)fo(t),t.blockedOn===null&&tn.shift()}var it=Je.ReactCurrentBatchConfig,Qr=!0;function Yd(e,n,t,r){var i=F,l=it.transition;it.transition=null;try{F=1,ys(e,n,t,r)}finally{F=i,it.transition=l}}function Xd(e,n,t,r){var i=F,l=it.transition;it.transition=null;try{F=4,ys(e,n,t,r)}finally{F=i,it.transition=l}}function ys(e,n,t,r){if(Qr){var i=Dl(e,n,t,r);if(i===null)Xi(e,n,r,Yr,t),pa(e,r);else if($d(i,e,n,t,r))r.stopPropagation();else if(pa(e,r),n&4&&-1<Zd.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&uo(l),l=Dl(e,n,t,r),l===null&&Xi(e,n,r,Yr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Xi(e,n,r,null,t)}}var Yr=null;function Dl(e,n,t,r){if(Yr=null,e=ps(r),e=Nn(e),e!==null)if(n=Wn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=eo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yr=e,null}function go(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case ks:return 1;case io:return 4;case Zr:case Kd:return 16;case lo:return 536870912;default:return 16}default:return 16}}var ln=null,zs=null,Fr=null;function mo(){if(Fr)return Fr;var e,n=zs,t=n.length,r,i="value"in ln?ln.value:ln.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[l-r];r++);return Fr=i.slice(e,1<r?1-r:void 0)}function Tr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function va(){return!1}function be(e){function n(t,r,i,l,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?br:va,this.isPropagationStopped=va,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),n}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=be(mt),ar=V({},mt,{view:0,detail:0}),Jd=be(ar),Vi,ji,wt,ki=V({},ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wt&&(wt&&e.type==="mousemove"?(Vi=e.screenX-wt.screenX,ji=e.screenY-wt.screenY):ji=Vi=0,wt=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Sa=be(ki),qd=V({},ki,{dataTransfer:0}),eh=be(qd),nh=V({},ar,{relatedTarget:0}),Ui=be(nh),th=V({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),rh=be(th),ih=V({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=be(ih),sh=V({},mt,{data:0}),ya=be(sh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ch(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oh[e])?!!n[e]:!1}function ws(){return ch}var dh=V({},ar,{key:function(e){if(e.key){var n=ah[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(e){return e.type==="keypress"?Tr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=be(dh),fh=V({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=be(fh),gh=V({},ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),mh=be(gh),ph=V({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=be(ph),vh=V({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=be(vh),yh=[9,13,27,32],As=$e&&"CompositionEvent"in window,Bt=null;$e&&"documentMode"in document&&(Bt=document.documentMode);var zh=$e&&"TextEvent"in window&&!Bt,po=$e&&(!As||Bt&&8<Bt&&11>=Bt),ba=" ",wa=!1;function ko(e,n){switch(e){case"keyup":return yh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function bh(e,n){switch(e){case"compositionend":return vo(n);case"keypress":return n.which!==32?null:(wa=!0,ba);case"textInput":return e=n.data,e===ba&&wa?null:e;default:return null}}function wh(e,n){if(Hn)return e==="compositionend"||!As&&ko(e,n)?(e=mo(),Fr=zs=ln=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return po&&n.locale!=="ko"?null:n.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ah[e.type]:n==="textarea"}function So(e,n,t,r){Qu(r),n=Xr(n,"onChange"),0<n.length&&(t=new bs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Rt=null,Gt=null;function xh(e){Co(e,0)}function vi(e){var n=$n(e);if(Vu(n))return e}function Eh(e,n){if(e==="change")return n}var yo=!1;if($e){var Hi;if($e){var Gi="oninput"in document;if(!Gi){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),Gi=typeof xa.oninput=="function"}Hi=Gi}else Hi=!1;yo=Hi&&(!document.documentMode||9<document.documentMode)}function Ea(){Rt&&(Rt.detachEvent("onpropertychange",zo),Gt=Rt=null)}function zo(e){if(e.propertyName==="value"&&vi(Gt)){var n=[];So(n,Gt,e,ps(e)),qu(xh,n)}}function Nh(e,n,t){e==="focusin"?(Ea(),Rt=n,Gt=t,Rt.attachEvent("onpropertychange",zo)):e==="focusout"&&Ea()}function Ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi(Gt)}function Dh(e,n){if(e==="click")return vi(n)}function Ch(e,n){if(e==="input"||e==="change")return vi(n)}function Mh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Te=typeof Object.is=="function"?Object.is:Mh;function Zt(e,n){if(Te(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!dl.call(n,i)||!Te(e[i],n[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pa(e,n){var t=Na(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Na(t)}}function bo(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bo(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function wo(){for(var e=window,n=Ur();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ur(e.document)}return n}function xs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ih(e){var n=wo(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&bo(t.ownerDocument.documentElement,t)){if(r!==null&&xs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Pa(t,l);var s=Pa(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=$e&&"documentMode"in document&&11>=document.documentMode,Gn=null,Cl=null,Ft=null,Ml=!1;function Da(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ml||Gn==null||Gn!==Ur(r)||(r=Gn,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ft&&Zt(Ft,r)||(Ft=r,r=Xr(Cl,"onSelect"),0<r.length&&(n=new bs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Gn)))}function wr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zn={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Zi={},Ao={};$e&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Si(e){if(Zi[e])return Zi[e];if(!Zn[e])return e;var n=Zn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ao)return Zi[e]=n[t];return e}var xo=Si("animationend"),Eo=Si("animationiteration"),No=Si("animationstart"),Po=Si("transitionend"),Do=new Map,Ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){Do.set(e,n),Ln(n,[e])}for(var $i=0;$i<Ca.length;$i++){var Qi=Ca[$i],Rh=Qi.toLowerCase(),Fh=Qi[0].toUpperCase()+Qi.slice(1);Sn(Rh,"on"+Fh)}Sn(xo,"onAnimationEnd");Sn(Eo,"onAnimationIteration");Sn(No,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Po,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ct="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Th=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ct));function Ma(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Rd(r,n,void 0,e),e.currentTarget=null}function Co(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;Ma(i,a,c),l=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;Ma(i,a,c),l=u}}}if(Gr)throw e=El,Gr=!1,El=null,e}function L(e,n){var t=n[Tl];t===void 0&&(t=n[Tl]=new Set);var r=e+"__bubble";t.has(r)||(Mo(n,e,2,!1),t.add(r))}function Yi(e,n,t){var r=0;n&&(r|=4),Mo(t,e,r,n)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function $t(e){if(!e[Ar]){e[Ar]=!0,Lu.forEach(function(t){t!=="selectionchange"&&(Th.has(t)||Yi(t,!1,e),Yi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ar]||(n[Ar]=!0,Yi("selectionchange",!1,n))}}function Mo(e,n,t,r){switch(go(n)){case 1:var i=Yd;break;case 4:i=Xd;break;default:i=ys}t=i.bind(null,n,t,e),i=void 0,!xl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Xi(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}a=a.parentNode}}r=r.return}qu(function(){var c=l,p=ps(t),h=[];e:{var m=Do.get(e);if(m!==void 0){var k=bs,v=e;switch(e){case"keypress":if(Tr(t)===0)break e;case"keydown":case"keyup":k=hh;break;case"focusin":v="focus",k=Ui;break;case"focusout":v="blur",k=Ui;break;case"beforeblur":case"afterblur":k=Ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=mh;break;case xo:case Eo:case No:k=rh;break;case Po:k=kh;break;case"scroll":k=Jd;break;case"wheel":k=Sh;break;case"copy":case"cut":case"paste":k=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=za}var y=(n&4)!==0,b=!y&&e==="scroll",g=y?m!==null?m+"Capture":null:m;y=[];for(var o=c,f;o!==null;){f=o;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,g!==null&&(S=Vt(o,g),S!=null&&y.push(Qt(o,S,f)))),b)break;o=o.return}0<y.length&&(m=new k(m,v,null,t,p),h.push({event:m,listeners:y}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",m&&t!==wl&&(v=t.relatedTarget||t.fromElement)&&(Nn(v)||v[Qe]))break e;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(v=t.relatedTarget||t.toElement,k=c,v=v?Nn(v):null,v!==null&&(b=Wn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(k=null,v=c),k!==v)){if(y=Sa,S="onMouseLeave",g="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(y=za,S="onPointerLeave",g="onPointerEnter",o="pointer"),b=k==null?m:$n(k),f=v==null?m:$n(v),m=new y(S,o+"leave",k,t,p),m.target=b,m.relatedTarget=f,S=null,Nn(p)===c&&(y=new y(g,o+"enter",v,t,p),y.target=f,y.relatedTarget=b,S=y),b=S,k&&v)n:{for(y=k,g=v,o=0,f=y;f;f=On(f))o++;for(f=0,S=g;S;S=On(S))f++;for(;0<o-f;)y=On(y),o--;for(;0<f-o;)g=On(g),f--;for(;o--;){if(y===g||g!==null&&y===g.alternate)break n;y=On(y),g=On(g)}y=null}else y=null;k!==null&&Ia(h,m,k,y,!1),v!==null&&b!==null&&Ia(h,b,v,y,!0)}}e:{if(m=c?$n(c):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var A=Eh;else if(Aa(m))if(yo)A=Ch;else{A=Ph;var N=Nh}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=Dh);if(A&&(A=A(e,c))){So(h,A,t,p);break e}N&&N(e,m,c),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&vl(m,"number",m.value)}switch(N=c?$n(c):window,e){case"focusin":(Aa(N)||N.contentEditable==="true")&&(Gn=N,Cl=c,Ft=null);break;case"focusout":Ft=Cl=Gn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Da(h,t,p);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Da(h,t,p)}var P;if(As)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Hn?ko(e,t)&&(D="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(D="onCompositionStart");D&&(po&&t.locale!=="ko"&&(Hn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Hn&&(P=mo()):(ln=p,zs="value"in ln?ln.value:ln.textContent,Hn=!0)),N=Xr(c,D),0<N.length&&(D=new ya(D,e,null,t,p),h.push({event:D,listeners:N}),P?D.data=P:(P=vo(t),P!==null&&(D.data=P)))),(P=zh?bh(e,t):wh(e,t))&&(c=Xr(c,"onBeforeInput"),0<c.length&&(p=new ya("onBeforeInput","beforeinput",null,t,p),h.push({event:p,listeners:c}),p.data=P))}Co(h,n)})}function Qt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Vt(e,t),l!=null&&r.unshift(Qt(e,l,i)),l=Vt(e,n),l!=null&&r.push(Qt(e,l,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ia(e,n,t,r,i){for(var l=n._reactName,s=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Vt(t,l),u!=null&&s.unshift(Qt(t,u,a))):i||(u=Vt(t,l),u!=null&&s.push(Qt(t,u,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Lh=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function Ba(e){return(typeof e=="string"?e:""+e).replace(Lh,`
`).replace(Wh,"")}function xr(e,n,t){if(n=Ba(n),Ba(e)!==n&&t)throw Error(z(425))}function Jr(){}var Il=null,Bl=null;function Rl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Oh)}:Fl;function Oh(e){setTimeout(function(){throw e})}function Ji(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ht(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ht(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Ke="__reactFiber$"+pt,Yt="__reactProps$"+pt,Qe="__reactContainer$"+pt,Tl="__reactEvents$"+pt,Vh="__reactListeners$"+pt,jh="__reactHandles$"+pt;function Nn(e){var n=e[Ke];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Ke]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Fa(e);e!==null;){if(t=e[Ke])return t;e=Fa(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[Ke]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function yi(e){return e[Yt]||null}var Ll=[],Qn=-1;function yn(e){return{current:e}}function W(e){0>Qn||(e.current=Ll[Qn],Ll[Qn]=null,Qn--)}function T(e,n){Qn++,Ll[Qn]=e.current,e.current=n}var vn={},se=yn(vn),ge=yn(!1),In=vn;function ut(e,n){var t=e.type.contextTypes;if(!t)return vn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function qr(){W(ge),W(se)}function Ta(e,n,t){if(se.current!==vn)throw Error(z(168));T(se,n),T(ge,t)}function Io(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(z(108,Nd(e)||"Unknown",i));return V({},t,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vn,In=se.current,T(se,e),T(ge,ge.current),!0}function La(e,n,t){var r=e.stateNode;if(!r)throw Error(z(169));t?(e=Io(e,n,In),r.__reactInternalMemoizedMergedChildContext=e,W(ge),W(se),T(se,e)):W(ge),T(ge,t)}var je=null,zi=!1,qi=!1;function Bo(e){je===null?je=[e]:je.push(e)}function Uh(e){zi=!0,Bo(e)}function zn(){if(!qi&&je!==null){qi=!0;var e=0,n=F;try{var t=je;for(F=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}je=null,zi=!1}catch(i){throw je!==null&&(je=je.slice(e+1)),ro(ks,zn),i}finally{F=n,qi=!1}}return null}var Yn=[],Xn=0,ni=null,ti=0,we=[],Ae=0,Bn=null,Ue=1,He="";function xn(e,n){Yn[Xn++]=ti,Yn[Xn++]=ni,ni=e,ti=n}function Ro(e,n,t){we[Ae++]=Ue,we[Ae++]=He,we[Ae++]=Bn,Bn=e;var r=Ue;e=He;var i=32-Re(r)-1;r&=~(1<<i),t+=1;var l=32-Re(n)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ue=1<<32-Re(n)+i|t<<i|r,He=l+e}else Ue=1<<l|t<<i|r,He=e}function Es(e){e.return!==null&&(xn(e,1),Ro(e,1,0))}function Ns(e){for(;e===ni;)ni=Yn[--Xn],Yn[Xn]=null,ti=Yn[--Xn],Yn[Xn]=null;for(;e===Bn;)Bn=we[--Ae],we[Ae]=null,He=we[--Ae],we[Ae]=null,Ue=we[--Ae],we[Ae]=null}var Se=null,ve=null,K=!1,Be=null;function Fo(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Wa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,ve=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Bn!==null?{id:Ue,overflow:He}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,ve=null,!0):!1;default:return!1}}function Wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Kl(e){if(K){var n=ve;if(n){var t=n;if(!Wa(e,n)){if(Wl(e))throw Error(z(418));n=dn(t.nextSibling);var r=Se;n&&Wa(e,n)?Fo(r,t):(e.flags=e.flags&-4097|2,K=!1,Se=e)}}else{if(Wl(e))throw Error(z(418));e.flags=e.flags&-4097|2,K=!1,Se=e}}}function Ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Er(e){if(e!==Se)return!1;if(!K)return Ka(e),K=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Rl(e.type,e.memoizedProps)),n&&(n=ve)){if(Wl(e))throw To(),Error(z(418));for(;n;)Fo(e,n),n=dn(n.nextSibling)}if(Ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=Se?dn(e.stateNode.nextSibling):null;return!0}function To(){for(var e=ve;e;)e=dn(e.nextSibling)}function ot(){ve=Se=null,K=!1}function Ps(e){Be===null?Be=[e]:Be.push(e)}var Hh=Je.ReactCurrentBatchConfig;function At(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(z(309));var r=t.stateNode}if(!r)throw Error(z(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var a=i.refs;s===null?delete a[l]:a[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(z(284));if(!t._owner)throw Error(z(290,e))}return e}function Nr(e,n){throw e=Object.prototype.toString.call(n),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function _a(e){var n=e._init;return n(e._payload)}function Lo(e){function n(g,o){if(e){var f=g.deletions;f===null?(g.deletions=[o],g.flags|=16):f.push(o)}}function t(g,o){if(!e)return null;for(;o!==null;)n(g,o),o=o.sibling;return null}function r(g,o){for(g=new Map;o!==null;)o.key!==null?g.set(o.key,o):g.set(o.index,o),o=o.sibling;return g}function i(g,o){return g=mn(g,o),g.index=0,g.sibling=null,g}function l(g,o,f){return g.index=f,e?(f=g.alternate,f!==null?(f=f.index,f<o?(g.flags|=2,o):f):(g.flags|=2,o)):(g.flags|=1048576,o)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,o,f,S){return o===null||o.tag!==6?(o=sl(f,g.mode,S),o.return=g,o):(o=i(o,f),o.return=g,o)}function u(g,o,f,S){var A=f.type;return A===Un?p(g,o,f.props.children,S,f.key):o!==null&&(o.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===en&&_a(A)===o.type)?(S=i(o,f.props),S.ref=At(g,o,f),S.return=g,S):(S=jr(f.type,f.key,f.props,null,g.mode,S),S.ref=At(g,o,f),S.return=g,S)}function c(g,o,f,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==f.containerInfo||o.stateNode.implementation!==f.implementation?(o=al(f,g.mode,S),o.return=g,o):(o=i(o,f.children||[]),o.return=g,o)}function p(g,o,f,S,A){return o===null||o.tag!==7?(o=Mn(f,g.mode,S,A),o.return=g,o):(o=i(o,f),o.return=g,o)}function h(g,o,f){if(typeof o=="string"&&o!==""||typeof o=="number")return o=sl(""+o,g.mode,f),o.return=g,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case pr:return f=jr(o.type,o.key,o.props,null,g.mode,f),f.ref=At(g,null,o),f.return=g,f;case jn:return o=al(o,g.mode,f),o.return=g,o;case en:var S=o._init;return h(g,S(o._payload),f)}if(Pt(o)||St(o))return o=Mn(o,g.mode,f,null),o.return=g,o;Nr(g,o)}return null}function m(g,o,f,S){var A=o!==null?o.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:a(g,o,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case pr:return f.key===A?u(g,o,f,S):null;case jn:return f.key===A?c(g,o,f,S):null;case en:return A=f._init,m(g,o,A(f._payload),S)}if(Pt(f)||St(f))return A!==null?null:p(g,o,f,S,null);Nr(g,f)}return null}function k(g,o,f,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(f)||null,a(o,g,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pr:return g=g.get(S.key===null?f:S.key)||null,u(o,g,S,A);case jn:return g=g.get(S.key===null?f:S.key)||null,c(o,g,S,A);case en:var N=S._init;return k(g,o,f,N(S._payload),A)}if(Pt(S)||St(S))return g=g.get(f)||null,p(o,g,S,A,null);Nr(o,S)}return null}function v(g,o,f,S){for(var A=null,N=null,P=o,D=o=0,U=null;P!==null&&D<f.length;D++){P.index>D?(U=P,P=null):U=P.sibling;var B=m(g,P,f[D],S);if(B===null){P===null&&(P=U);break}e&&P&&B.alternate===null&&n(g,P),o=l(B,o,D),N===null?A=B:N.sibling=B,N=B,P=U}if(D===f.length)return t(g,P),K&&xn(g,D),A;if(P===null){for(;D<f.length;D++)P=h(g,f[D],S),P!==null&&(o=l(P,o,D),N===null?A=P:N.sibling=P,N=P);return K&&xn(g,D),A}for(P=r(g,P);D<f.length;D++)U=k(P,g,D,f[D],S),U!==null&&(e&&U.alternate!==null&&P.delete(U.key===null?D:U.key),o=l(U,o,D),N===null?A=U:N.sibling=U,N=U);return e&&P.forEach(function(De){return n(g,De)}),K&&xn(g,D),A}function y(g,o,f,S){var A=St(f);if(typeof A!="function")throw Error(z(150));if(f=A.call(f),f==null)throw Error(z(151));for(var N=A=null,P=o,D=o=0,U=null,B=f.next();P!==null&&!B.done;D++,B=f.next()){P.index>D?(U=P,P=null):U=P.sibling;var De=m(g,P,B.value,S);if(De===null){P===null&&(P=U);break}e&&P&&De.alternate===null&&n(g,P),o=l(De,o,D),N===null?A=De:N.sibling=De,N=De,P=U}if(B.done)return t(g,P),K&&xn(g,D),A;if(P===null){for(;!B.done;D++,B=f.next())B=h(g,B.value,S),B!==null&&(o=l(B,o,D),N===null?A=B:N.sibling=B,N=B);return K&&xn(g,D),A}for(P=r(g,P);!B.done;D++,B=f.next())B=k(P,g,D,B.value,S),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?D:B.key),o=l(B,o,D),N===null?A=B:N.sibling=B,N=B);return e&&P.forEach(function(kt){return n(g,kt)}),K&&xn(g,D),A}function b(g,o,f,S){if(typeof f=="object"&&f!==null&&f.type===Un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case pr:e:{for(var A=f.key,N=o;N!==null;){if(N.key===A){if(A=f.type,A===Un){if(N.tag===7){t(g,N.sibling),o=i(N,f.props.children),o.return=g,g=o;break e}}else if(N.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===en&&_a(A)===N.type){t(g,N.sibling),o=i(N,f.props),o.ref=At(g,N,f),o.return=g,g=o;break e}t(g,N);break}else n(g,N);N=N.sibling}f.type===Un?(o=Mn(f.props.children,g.mode,S,f.key),o.return=g,g=o):(S=jr(f.type,f.key,f.props,null,g.mode,S),S.ref=At(g,o,f),S.return=g,g=S)}return s(g);case jn:e:{for(N=f.key;o!==null;){if(o.key===N)if(o.tag===4&&o.stateNode.containerInfo===f.containerInfo&&o.stateNode.implementation===f.implementation){t(g,o.sibling),o=i(o,f.children||[]),o.return=g,g=o;break e}else{t(g,o);break}else n(g,o);o=o.sibling}o=al(f,g.mode,S),o.return=g,g=o}return s(g);case en:return N=f._init,b(g,o,N(f._payload),S)}if(Pt(f))return v(g,o,f,S);if(St(f))return y(g,o,f,S);Nr(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,o!==null&&o.tag===6?(t(g,o.sibling),o=i(o,f),o.return=g,g=o):(t(g,o),o=sl(f,g.mode,S),o.return=g,g=o),s(g)):t(g,o)}return b}var ct=Lo(!0),Wo=Lo(!1),ri=yn(null),ii=null,Jn=null,Ds=null;function Cs(){Ds=Jn=ii=null}function Ms(e){var n=ri.current;W(ri),e._currentValue=n}function _l(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lt(e,n){ii=e,Ds=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:n,next:null},Jn===null){if(ii===null)throw Error(z(308));Jn=e,ii.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return n}var Pn=null;function Is(e){Pn===null?Pn=[e]:Pn.push(e)}function Ko(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Is(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nn=!1;function Bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _o(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ye(e,t)}return i=r.interleaved,i===null?(n.next=n,Is(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ye(e,t)}function Lr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}function Oa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function li(e,n,t,r){var i=e.updateQueue;nn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?l=c:s.next=c,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;s=0,p=c=u=null,a=l;do{var m=a.lane,k=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(m=n,k=t,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(k,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,m=typeof v=="function"?v.call(k,h,m):v,m==null)break e;h=V({},h,m);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=k,u=h):p=p.next=k,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=p,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Fn|=s,e.lanes=s,e.memoizedState=h}}function Va(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var or={},Oe=yn(or),Xt=yn(or),Jt=yn(or);function Dn(e){if(e===or)throw Error(z(174));return e}function Rs(e,n){switch(T(Jt,n),T(Xt,e),T(Oe,or),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:yl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=yl(n,e)}W(Oe),T(Oe,n)}function dt(){W(Oe),W(Xt),W(Jt)}function Oo(e){Dn(Jt.current);var n=Dn(Oe.current),t=yl(n,e.type);n!==t&&(T(Xt,e),T(Oe,t))}function Fs(e){Xt.current===e&&(W(Oe),W(Xt))}var _=yn(0);function si(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var el=[];function Ts(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Wr=Je.ReactCurrentDispatcher,nl=Je.ReactCurrentBatchConfig,Rn=0,O=null,Q=null,J=null,ai=!1,Tt=!1,qt=0,Gh=0;function re(){throw Error(z(321))}function Ls(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Te(e[t],n[t]))return!1;return!0}function Ws(e,n,t,r,i,l){if(Rn=l,O=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Wr.current=e===null||e.memoizedState===null?Yh:Xh,e=t(r,i),Tt){l=0;do{if(Tt=!1,qt=0,25<=l)throw Error(z(301));l+=1,J=Q=null,n.updateQueue=null,Wr.current=Jh,e=t(r,i)}while(Tt)}if(Wr.current=ui,n=Q!==null&&Q.next!==null,Rn=0,J=Q=O=null,ai=!1,n)throw Error(z(300));return e}function Ks(){var e=qt!==0;return qt=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?O.memoizedState=J=e:J=J.next=e,J}function Pe(){if(Q===null){var e=O.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var n=J===null?O.memoizedState:J.next;if(n!==null)J=n,Q=e;else{if(e===null)throw Error(z(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},J===null?O.memoizedState=J=e:J=J.next=e}return J}function er(e,n){return typeof n=="function"?n(e):n}function tl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var r=Q,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,u=null,c=l;do{var p=c.lane;if((Rn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,s=r):u=u.next=h,O.lanes|=p,Fn|=p}c=c.next}while(c!==null&&c!==l);u===null?s=r:u.next=a,Te(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,O.lanes|=l,Fn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function rl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(z(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);Te(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Vo(){}function jo(e,n){var t=O,r=Pe(),i=n(),l=!Te(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,_s(Go.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,nr(9,Ho.bind(null,t,r,i,n),void 0,null),q===null)throw Error(z(349));Rn&30||Uo(t,n,i)}return i}function Uo(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ho(e,n,t,r){n.value=t,n.getSnapshot=r,Zo(n)&&$o(e)}function Go(e,n,t){return t(function(){Zo(n)&&$o(e)})}function Zo(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Te(e,t)}catch{return!0}}function $o(e){var n=Ye(e,1);n!==null&&Fe(n,e,1,-1)}function ja(e){var n=We();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:e},n.queue=e,e=e.dispatch=Qh.bind(null,O,e),[n.memoizedState,e]}function nr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=O.updateQueue,n===null?(n={lastEffect:null,stores:null},O.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Qo(){return Pe().memoizedState}function Kr(e,n,t,r){var i=We();O.flags|=e,i.memoizedState=nr(1|n,t,void 0,r===void 0?null:r)}function bi(e,n,t,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(Q!==null){var s=Q.memoizedState;if(l=s.destroy,r!==null&&Ls(r,s.deps)){i.memoizedState=nr(n,t,l,r);return}}O.flags|=e,i.memoizedState=nr(1|n,t,l,r)}function Ua(e,n){return Kr(8390656,8,e,n)}function _s(e,n){return bi(2048,8,e,n)}function Yo(e,n){return bi(4,2,e,n)}function Xo(e,n){return bi(4,4,e,n)}function Jo(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qo(e,n,t){return t=t!=null?t.concat([e]):null,bi(4,4,Jo.bind(null,n,e),t)}function Os(){}function ec(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ls(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function nc(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ls(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function tc(e,n,t){return Rn&21?(Te(t,n)||(t=so(),O.lanes|=t,Fn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function Zh(e,n){var t=F;F=t!==0&&4>t?t:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),n()}finally{F=t,nl.transition=r}}function rc(){return Pe().memoizedState}function $h(e,n,t){var r=gn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ic(e))lc(n,t);else if(t=Ko(e,n,t,r),t!==null){var i=oe();Fe(t,e,r,i),sc(t,n,r)}}function Qh(e,n,t){var r=gn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ic(e))lc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,a=l(s,t);if(i.hasEagerState=!0,i.eagerState=a,Te(a,s)){var u=n.interleaved;u===null?(i.next=i,Is(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Ko(e,n,i,r),t!==null&&(i=oe(),Fe(t,e,r,i),sc(t,n,r))}}function ic(e){var n=e.alternate;return e===O||n!==null&&n===O}function lc(e,n){Tt=ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,vs(e,t)}}var ui={readContext:Ne,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Yh={readContext:Ne,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Ua,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Kr(4194308,4,Jo.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Kr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Kr(4,2,e,n)},useMemo:function(e,n){var t=We();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=We();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=$h.bind(null,O,e),[r.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:ja,useDebugValue:Os,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ja(!1),n=e[0];return e=Zh.bind(null,e[1]),We().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=O,i=We();if(K){if(t===void 0)throw Error(z(407));t=t()}else{if(t=n(),q===null)throw Error(z(349));Rn&30||Uo(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ua(Go.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Ho.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=We(),n=q.identifierPrefix;if(K){var t=He,r=Ue;t=(r&~(1<<32-Re(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Gh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Xh={readContext:Ne,useCallback:ec,useContext:Ne,useEffect:_s,useImperativeHandle:qo,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:nc,useReducer:tl,useRef:Qo,useState:function(){return tl(er)},useDebugValue:Os,useDeferredValue:function(e){var n=Pe();return tc(n,Q.memoizedState,e)},useTransition:function(){var e=tl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Vo,useSyncExternalStore:jo,useId:rc,unstable_isNewReconciler:!1},Jh={readContext:Ne,useCallback:ec,useContext:Ne,useEffect:_s,useImperativeHandle:qo,useInsertionEffect:Yo,useLayoutEffect:Xo,useMemo:nc,useReducer:rl,useRef:Qo,useState:function(){return rl(er)},useDebugValue:Os,useDeferredValue:function(e){var n=Pe();return Q===null?n.memoizedState=e:tc(n,Q.memoizedState,e)},useTransition:function(){var e=rl(er)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Vo,useSyncExternalStore:jo,useId:rc,unstable_isNewReconciler:!1};function Me(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ol(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wi={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),i=gn(e),l=Ge(r,i);l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Fe(n,e,i,r),Lr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),i=gn(e),l=Ge(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=hn(e,l,i),n!==null&&(Fe(n,e,i,r),Lr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=gn(e),i=Ge(t,r);i.tag=2,n!=null&&(i.callback=n),n=hn(e,i,r),n!==null&&(Fe(n,e,r,t),Lr(n,e,r))}};function Ha(e,n,t,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(i,l):!0}function ac(e,n,t){var r=!1,i=vn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ne(l):(i=me(n)?In:se.current,r=n.contextTypes,l=(r=r!=null)?ut(e,i):vn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ga(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&wi.enqueueReplaceState(n,n.state,null)}function Vl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Bs(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ne(l):(l=me(n)?In:se.current,i.context=ut(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Ol(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&wi.enqueueReplaceState(i,i.state,null),li(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ht(e,n){try{var t="",r=n;do t+=Ed(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function il(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function jl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var qh=typeof WeakMap=="function"?WeakMap:Map;function uc(e,n,t){t=Ge(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ci||(ci=!0,ql=r),jl(e,n)},t}function oc(e,n,t){t=Ge(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){jl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){jl(e,n),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Za(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new qh;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=gf.bind(null,e,n,t),n.then(e,e))}function $a(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qa(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Ge(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var ef=Je.ReactCurrentOwner,fe=!1;function ae(e,n,t,r){n.child=e===null?Wo(n,null,t,r):ct(n,e.child,t,r)}function Ya(e,n,t,r,i){t=t.render;var l=n.ref;return lt(n,i),r=Ws(e,n,t,r,l,i),t=Ks(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(K&&t&&Es(n),n.flags|=1,ae(e,n,r,i),n.child)}function Xa(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Qs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,cc(e,n,l,r,i)):(e=jr(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(s,r)&&e.ref===n.ref)return Xe(e,n,i)}return n.flags|=1,e=mn(l,r),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Zt(l,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Xe(e,n,i)}return Ul(e,n,t,r,i)}function dc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},T(et,ke),ke|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,T(et,ke),ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,T(et,ke),ke|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,T(et,ke),ke|=r;return ae(e,n,i,t),n.child}function hc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ul(e,n,t,r,i){var l=me(t)?In:se.current;return l=ut(n,l),lt(n,i),t=Ws(e,n,t,r,l,i),r=Ks(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Xe(e,n,i)):(K&&r&&Es(n),n.flags|=1,ae(e,n,t,i),n.child)}function Ja(e,n,t,r,i){if(me(t)){var l=!0;ei(n)}else l=!1;if(lt(n,i),n.stateNode===null)_r(e,n),ac(n,t,r),Vl(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var u=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=me(t)?In:se.current,c=ut(n,c));var p=t.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ga(n,s,r,c),nn=!1;var m=n.memoizedState;s.state=m,li(n,r,s,i),u=n.memoizedState,a!==r||m!==u||ge.current||nn?(typeof p=="function"&&(Ol(n,t,p,r),u=n.memoizedState),(a=nn||Ha(n,t,a,r,m,u,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,_o(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Me(n.type,a),s.props=c,h=n.pendingProps,m=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ne(u):(u=me(t)?In:se.current,u=ut(n,u));var k=t.getDerivedStateFromProps;(p=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||m!==u)&&Ga(n,s,r,u),nn=!1,m=n.memoizedState,s.state=m,li(n,r,s,i);var v=n.memoizedState;a!==h||m!==v||ge.current||nn?(typeof k=="function"&&(Ol(n,t,k,r),v=n.memoizedState),(c=nn||Ha(n,t,c,r,m,v,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,u)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),s.props=r,s.state=v,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Hl(e,n,t,r,l,i)}function Hl(e,n,t,r,i,l){hc(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&La(n,t,!1),Xe(e,n,l);r=n.stateNode,ef.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=ct(n,e.child,null,l),n.child=ct(n,null,a,l)):ae(e,n,a,l),n.memoizedState=r.state,i&&La(n,t,!0),n.child}function fc(e){var n=e.stateNode;n.pendingContext?Ta(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ta(e,n.context,!1),Rs(e,n.containerInfo)}function qa(e,n,t,r,i){return ot(),Ps(i),n.flags|=256,ae(e,n,t,r),n.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function gc(e,n,t){var r=n.pendingProps,i=_.current,l=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),T(_,i&1),e===null)return Kl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,l?(r=n.mode,l=n.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ei(s,r,0,null),e=Mn(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Zl(t),n.memoizedState=Gl,e):Vs(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return nf(e,n,s,r,a,i,t);if(l){l=r.fallback,s=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=mn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=mn(a,l):(l=Mn(l,s,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,s=e.child.memoizedState,s=s===null?Zl(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=Gl,r}return l=e.child,e=l.sibling,r=mn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Vs(e,n){return n=Ei({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Pr(e,n,t,r){return r!==null&&Ps(r),ct(n,e.child,null,t),e=Vs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nf(e,n,t,r,i,l,s){if(t)return n.flags&256?(n.flags&=-257,r=il(Error(z(422))),Pr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Ei({mode:"visible",children:r.children},i,0,null),l=Mn(l,i,s,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&ct(n,e.child,null,s),n.child.memoizedState=Zl(s),n.memoizedState=Gl,l);if(!(n.mode&1))return Pr(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(z(419)),r=il(l,r,void 0),Pr(e,n,s,r)}if(a=(s&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Fe(r,e,i,-1))}return $s(),r=il(Error(z(421))),Pr(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=mf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,ve=dn(i.nextSibling),Se=n,K=!0,Be=null,e!==null&&(we[Ae++]=Ue,we[Ae++]=He,we[Ae++]=Bn,Ue=e.id,He=e.overflow,Bn=n),n=Vs(n,r.children),n.flags|=4096,n)}function eu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),_l(e.return,n,t)}function ll(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function mc(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ae(e,n,r.children,t),r=_.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eu(e,t,n);else if(e.tag===19)eu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(T(_,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&si(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),ll(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&si(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}ll(n,!0,t,null,l);break;case"together":ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Fn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(z(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function tf(e,n,t){switch(n.tag){case 3:fc(n),ot();break;case 5:Oo(n);break;case 1:me(n.type)&&ei(n);break;case 4:Rs(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;T(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(T(_,_.current&1),n.flags|=128,null):t&n.child.childLanes?gc(e,n,t):(T(_,_.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);T(_,_.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return mc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),T(_,_.current),r)break;return null;case 22:case 23:return n.lanes=0,dc(e,n,t)}return Xe(e,n,t)}var pc,$l,kc,vc;pc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$l=function(){};kc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Dn(Oe.current);var l=null;switch(t){case"input":i=pl(e,i),r=pl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=Sl(e,i),r=Sl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}zl(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_t.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_t.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&L("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};vc=function(e,n,t,r){t!==r&&(n.flags|=4)};function xt(e,n){if(!K)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function rf(e,n,t){var r=n.pendingProps;switch(Ns(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(n),null;case 1:return me(n.type)&&qr(),ie(n),null;case 3:return r=n.stateNode,dt(),W(ge),W(se),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(ts(Be),Be=null))),$l(e,n),ie(n),null;case 5:Fs(n);var i=Dn(Jt.current);if(t=n.type,e!==null&&n.stateNode!=null)kc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(z(166));return ie(n),null}if(e=Dn(Oe.current),Er(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Ke]=n,r[Yt]=l,e=(n.mode&1)!==0,t){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(i=0;i<Ct.length;i++)L(Ct[i],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":oa(r,l),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},L("invalid",r);break;case"textarea":da(r,l),L("invalid",r)}zl(t,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&xr(r.textContent,a,e),i=["children",""+a]):_t.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&L("scroll",r)}switch(t){case"input":kr(r),ca(r,l,!0);break;case"textarea":kr(r),ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Ke]=n,e[Yt]=r,pc(e,n,!1,!1),n.stateNode=e;e:{switch(s=bl(t,r),t){case"dialog":L("cancel",e),L("close",e),i=r;break;case"iframe":case"object":case"embed":L("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ct.length;i++)L(Ct[i],e);i=r;break;case"source":L("error",e),i=r;break;case"img":case"image":case"link":L("error",e),L("load",e),i=r;break;case"details":L("toggle",e),i=r;break;case"input":oa(e,r),i=pl(e,r),L("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),L("invalid",e);break;case"textarea":da(e,r),i=Sl(e,r),L("invalid",e);break;default:i=r}zl(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?$u(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gu(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ot(e,u):typeof u=="number"&&Ot(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_t.hasOwnProperty(l)?u!=null&&l==="onScroll"&&L("scroll",e):u!=null&&hs(e,l,u,s))}switch(t){case"input":kr(e),ca(e,r,!1);break;case"textarea":kr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nt(e,!!r.multiple,l,!1):r.defaultValue!=null&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ie(n),null;case 6:if(e&&n.stateNode!=null)vc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(z(166));if(t=Dn(Jt.current),Dn(Oe.current),Er(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ke]=n,(l=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:xr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ke]=n,n.stateNode=r}return ie(n),null;case 13:if(W(_),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ve!==null&&n.mode&1&&!(n.flags&128))To(),ot(),n.flags|=98560,l=!1;else if(l=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(z(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(z(317));l[Ke]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ie(n),l=!1}else Be!==null&&(ts(Be),Be=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||_.current&1?Y===0&&(Y=3):$s())),n.updateQueue!==null&&(n.flags|=4),ie(n),null);case 4:return dt(),$l(e,n),e===null&&$t(n.stateNode.containerInfo),ie(n),null;case 10:return Ms(n.type._context),ie(n),null;case 17:return me(n.type)&&qr(),ie(n),null;case 19:if(W(_),l=n.memoizedState,l===null)return ie(n),null;if(r=(n.flags&128)!==0,s=l.rendering,s===null)if(r)xt(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=si(e),s!==null){for(n.flags|=128,xt(l,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return T(_,_.current&1|2),n.child}e=e.sibling}l.tail!==null&&G()>ft&&(n.flags|=128,r=!0,xt(l,!1),n.lanes=4194304)}else{if(!r)if(e=si(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),xt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!K)return ie(n),null}else 2*G()-l.renderingStartTime>ft&&t!==1073741824&&(n.flags|=128,r=!0,xt(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(t=l.last,t!==null?t.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=G(),n.sibling=null,t=_.current,T(_,r?t&1|2:t&1),n):(ie(n),null);case 22:case 23:return Zs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?ke&1073741824&&(ie(n),n.subtreeFlags&6&&(n.flags|=8192)):ie(n),null;case 24:return null;case 25:return null}throw Error(z(156,n.tag))}function lf(e,n){switch(Ns(n),n.tag){case 1:return me(n.type)&&qr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dt(),W(ge),W(se),Ts(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Fs(n),null;case 13:if(W(_),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(z(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(_),null;case 4:return dt(),null;case 10:return Ms(n.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Dr=!1,le=!1,sf=typeof WeakSet=="function"?WeakSet:Set,x=null;function qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){j(e,n,r)}else t.current=null}function Ql(e,n,t){try{t()}catch(r){j(e,n,r)}}var nu=!1;function af(e,n){if(Il=Qr,e=wo(),xs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,a=-1,u=-1,c=0,p=0,h=e,m=null;n:for(;;){for(var k;h!==t||i!==0&&h.nodeType!==3||(a=s+i),h!==l||r!==0&&h.nodeType!==3||(u=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(k=h.firstChild)!==null;)m=h,h=k;for(;;){if(h===e)break n;if(m===t&&++c===i&&(a=s),m===l&&++p===r&&(u=s),(k=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=k}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bl={focusedElem:e,selectionRange:t},Qr=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,g=n.stateNode,o=g.getSnapshotBeforeUpdate(n.elementType===n.type?y:Me(n.type,y),b);g.__reactInternalSnapshotBeforeUpdate=o}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){j(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return v=nu,nu=!1,v}function Lt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ql(n,t,l)}i=i.next}while(i!==r)}}function Ai(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Yl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Sc(e){var n=e.alternate;n!==null&&(e.alternate=null,Sc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ke],delete n[Yt],delete n[Tl],delete n[Vh],delete n[jh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,n,t),e=e.sibling;e!==null;)Xl(e,n,t),e=e.sibling}function Jl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,n,t),e=e.sibling;e!==null;)Jl(e,n,t),e=e.sibling}var ee=null,Ie=!1;function qe(e,n,t){for(t=t.child;t!==null;)zc(e,n,t),t=t.sibling}function zc(e,n,t){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(pi,t)}catch{}switch(t.tag){case 5:le||qn(t,n);case 6:var r=ee,i=Ie;ee=null,qe(e,n,t),ee=r,Ie=i,ee!==null&&(Ie?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Ie?(e=ee,t=t.stateNode,e.nodeType===8?Ji(e.parentNode,t):e.nodeType===1&&Ji(e,t),Ht(e)):Ji(ee,t.stateNode));break;case 4:r=ee,i=Ie,ee=t.stateNode.containerInfo,Ie=!0,qe(e,n,t),ee=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ql(t,n,s),i=i.next}while(i!==r)}qe(e,n,t);break;case 1:if(!le&&(qn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){j(t,n,a)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,qe(e,n,t),le=r):qe(e,n,t);break;default:qe(e,n,t)}}function ru(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new sf),n.forEach(function(r){var i=pf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ce(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Ie=!1;break e;case 3:ee=a.stateNode.containerInfo,Ie=!0;break e;case 4:ee=a.stateNode.containerInfo,Ie=!0;break e}a=a.return}if(ee===null)throw Error(z(160));zc(l,s,i),ee=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){j(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bc(n,e),n=n.sibling}function bc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(n,e),Le(e),r&4){try{Lt(3,e,e.return),Ai(3,e)}catch(y){j(e,e.return,y)}try{Lt(5,e,e.return)}catch(y){j(e,e.return,y)}}break;case 1:Ce(n,e),Le(e),r&512&&t!==null&&qn(t,t.return);break;case 5:if(Ce(n,e),Le(e),r&512&&t!==null&&qn(t,t.return),e.flags&32){var i=e.stateNode;try{Ot(i,"")}catch(y){j(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=t!==null?t.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ju(i,l),bl(a,s);var c=bl(a,l);for(s=0;s<u.length;s+=2){var p=u[s],h=u[s+1];p==="style"?$u(i,h):p==="dangerouslySetInnerHTML"?Gu(i,h):p==="children"?Ot(i,h):hs(i,p,h,c)}switch(a){case"input":kl(i,l);break;case"textarea":Uu(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?nt(i,!!l.multiple,k,!1):m!==!!l.multiple&&(l.defaultValue!=null?nt(i,!!l.multiple,l.defaultValue,!0):nt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Yt]=l}catch(y){j(e,e.return,y)}}break;case 6:if(Ce(n,e),Le(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(y){j(e,e.return,y)}}break;case 3:if(Ce(n,e),Le(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(y){j(e,e.return,y)}break;case 4:Ce(n,e),Le(e);break;case 13:Ce(n,e),Le(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Hs=G())),r&4&&ru(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(le=(c=le)||p,Ce(n,e),le=c):Ce(n,e),Le(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(x=e,p=e.child;p!==null;){for(h=x=p;x!==null;){switch(m=x,k=m.child,m.tag){case 0:case 11:case 14:case 15:Lt(4,m,m.return);break;case 1:qn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(y){j(r,t,y)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){lu(h);continue}}k!==null?(k.return=m,x=k):lu(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,u=h.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zu("display",s))}catch(y){j(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){j(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ce(n,e),Le(e),r&4&&ru(e);break;case 21:break;default:Ce(n,e),Le(e)}}function Le(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yc(t)){var r=t;break e}t=t.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ot(i,""),r.flags&=-33);var l=tu(e);Jl(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=tu(e);Xl(e,a,s);break;default:throw Error(z(161))}}catch(u){j(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function uf(e,n,t){x=e,wc(e)}function wc(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var i=x,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Dr;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||le;a=Dr;var c=le;if(Dr=s,(le=u)&&!c)for(x=i;x!==null;)s=x,u=s.child,s.tag===22&&s.memoizedState!==null?su(i):u!==null?(u.return=s,x=u):su(i);for(;l!==null;)x=l,wc(l),l=l.sibling;x=i,Dr=a,le=c}iu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,x=l):iu(e)}}function iu(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ai(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Me(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Va(n,l,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Va(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Ht(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}le||n.flags&512&&Yl(n)}catch(m){j(n,n.return,m)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function lu(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function su(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ai(4,n)}catch(u){j(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){j(n,i,u)}}var l=n.return;try{Yl(n)}catch(u){j(n,l,u)}break;case 5:var s=n.return;try{Yl(n)}catch(u){j(n,s,u)}}}catch(u){j(n,n.return,u)}if(n===e){x=null;break}var a=n.sibling;if(a!==null){a.return=n.return,x=a;break}x=n.return}}var of=Math.ceil,oi=Je.ReactCurrentDispatcher,js=Je.ReactCurrentOwner,Ee=Je.ReactCurrentBatchConfig,R=0,q=null,Z=null,ne=0,ke=0,et=yn(0),Y=0,tr=null,Fn=0,xi=0,Us=0,Wt=null,he=null,Hs=0,ft=1/0,Ve=null,ci=!1,ql=null,fn=null,Cr=!1,sn=null,di=0,Kt=0,es=null,Or=-1,Vr=0;function oe(){return R&6?G():Or!==-1?Or:Or=G()}function gn(e){return e.mode&1?R&2&&ne!==0?ne&-ne:Hh.transition!==null?(Vr===0&&(Vr=so()),Vr):(e=F,e!==0||(e=window.event,e=e===void 0?16:go(e.type)),e):1}function Fe(e,n,t,r){if(50<Kt)throw Kt=0,es=null,Error(z(185));sr(e,t,r),(!(R&2)||e!==q)&&(e===q&&(!(R&2)&&(xi|=t),Y===4&&rn(e,ne)),pe(e,r),t===1&&R===0&&!(n.mode&1)&&(ft=G()+500,zi&&zn()))}function pe(e,n){var t=e.callbackNode;Hd(e,n);var r=$r(e,e===q?ne:0);if(r===0)t!==null&&ma(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ma(t),n===1)e.tag===0?Uh(au.bind(null,e)):Bo(au.bind(null,e)),_h(function(){!(R&6)&&zn()}),t=null;else{switch(ao(r)){case 1:t=ks;break;case 4:t=io;break;case 16:t=Zr;break;case 536870912:t=lo;break;default:t=Zr}t=Mc(t,Ac.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ac(e,n){if(Or=-1,Vr=0,R&6)throw Error(z(327));var t=e.callbackNode;if(st()&&e.callbackNode!==t)return null;var r=$r(e,e===q?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=hi(e,r);else{n=r;var i=R;R|=2;var l=Ec();(q!==e||ne!==n)&&(Ve=null,ft=G()+500,Cn(e,n));do try{hf();break}catch(a){xc(e,a)}while(!0);Cs(),oi.current=l,R=i,Z!==null?n=0:(q=null,ne=0,n=Y)}if(n!==0){if(n===2&&(i=Nl(e),i!==0&&(r=i,n=ns(e,i))),n===1)throw t=tr,Cn(e,0),rn(e,r),pe(e,G()),t;if(n===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!cf(i)&&(n=hi(e,r),n===2&&(l=Nl(e),l!==0&&(r=l,n=ns(e,l))),n===1))throw t=tr,Cn(e,0),rn(e,r),pe(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(z(345));case 2:En(e,he,Ve);break;case 3:if(rn(e,r),(r&130023424)===r&&(n=Hs+500-G(),10<n)){if($r(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fl(En.bind(null,e,he,Ve),n);break}En(e,he,Ve);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-Re(r);l=1<<s,s=n[s],s>i&&(i=s),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*of(r/1960))-r,10<r){e.timeoutHandle=Fl(En.bind(null,e,he,Ve),r);break}En(e,he,Ve);break;case 5:En(e,he,Ve);break;default:throw Error(z(329))}}}return pe(e,G()),e.callbackNode===t?Ac.bind(null,e):null}function ns(e,n){var t=Wt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=hi(e,n),e!==2&&(n=he,he=t,n!==null&&ts(n)),e}function ts(e){he===null?he=e:he.push.apply(he,e)}function cf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Te(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rn(e,n){for(n&=~Us,n&=~xi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Re(n),r=1<<t;e[t]=-1,n&=~r}}function au(e){if(R&6)throw Error(z(327));st();var n=$r(e,0);if(!(n&1))return pe(e,G()),null;var t=hi(e,n);if(e.tag!==0&&t===2){var r=Nl(e);r!==0&&(n=r,t=ns(e,r))}if(t===1)throw t=tr,Cn(e,0),rn(e,n),pe(e,G()),t;if(t===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,En(e,he,Ve),pe(e,G()),null}function Gs(e,n){var t=R;R|=1;try{return e(n)}finally{R=t,R===0&&(ft=G()+500,zi&&zn())}}function Tn(e){sn!==null&&sn.tag===0&&!(R&6)&&st();var n=R;R|=1;var t=Ee.transition,r=F;try{if(Ee.transition=null,F=1,e)return e()}finally{F=r,Ee.transition=t,R=n,!(R&6)&&zn()}}function Zs(){ke=et.current,W(et)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kh(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qr();break;case 3:dt(),W(ge),W(se),Ts();break;case 5:Fs(r);break;case 4:dt();break;case 13:W(_);break;case 19:W(_);break;case 10:Ms(r.type._context);break;case 22:case 23:Zs()}t=t.return}if(q=e,Z=e=mn(e.current,null),ne=ke=n,Y=0,tr=null,Us=xi=Fn=0,he=Wt=null,Pn!==null){for(n=0;n<Pn.length;n++)if(t=Pn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}t.pending=r}Pn=null}return e}function xc(e,n){do{var t=Z;try{if(Cs(),Wr.current=ui,ai){for(var r=O.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Rn=0,J=Q=O=null,Tt=!1,qt=0,js.current=null,t===null||t.return===null){Y=1,tr=n,Z=null;break}e:{var l=e,s=t.return,a=t,u=n;if(n=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=$a(s);if(k!==null){k.flags&=-257,Qa(k,s,a,l,n),k.mode&1&&Za(l,c,n),n=k,u=c;var v=n.updateQueue;if(v===null){var y=new Set;y.add(u),n.updateQueue=y}else v.add(u);break e}else{if(!(n&1)){Za(l,c,n),$s();break e}u=Error(z(426))}}else if(K&&a.mode&1){var b=$a(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qa(b,s,a,l,n),Ps(ht(u,a));break e}}l=u=ht(u,a),Y!==4&&(Y=2),Wt===null?Wt=[l]:Wt.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var g=uc(l,u,n);Oa(l,g);break e;case 1:a=u;var o=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof o.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(fn===null||!fn.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var S=oc(l,a,n);Oa(l,S);break e}}l=l.return}while(l!==null)}Pc(t)}catch(A){n=A,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function Ec(){var e=oi.current;return oi.current=ui,e===null?ui:e}function $s(){(Y===0||Y===3||Y===2)&&(Y=4),q===null||!(Fn&268435455)&&!(xi&268435455)||rn(q,ne)}function hi(e,n){var t=R;R|=2;var r=Ec();(q!==e||ne!==n)&&(Ve=null,Cn(e,n));do try{df();break}catch(i){xc(e,i)}while(!0);if(Cs(),R=t,oi.current=r,Z!==null)throw Error(z(261));return q=null,ne=0,Y}function df(){for(;Z!==null;)Nc(Z)}function hf(){for(;Z!==null&&!Td();)Nc(Z)}function Nc(e){var n=Cc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,n===null?Pc(e):Z=n,js.current=null}function Pc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=lf(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Z=null;return}}else if(t=rf(t,n,ke),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);Y===0&&(Y=5)}function En(e,n,t){var r=F,i=Ee.transition;try{Ee.transition=null,F=1,ff(e,n,t,r)}finally{Ee.transition=i,F=r}return null}function ff(e,n,t,r){do st();while(sn!==null);if(R&6)throw Error(z(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Gd(e,l),e===q&&(Z=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Cr||(Cr=!0,Mc(Zr,function(){return st(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var s=F;F=1;var a=R;R|=4,js.current=null,af(e,t),bc(t,e),Ih(Bl),Qr=!!Il,Bl=Il=null,e.current=t,uf(t),Ld(),R=a,F=s,Ee.transition=l}else e.current=t;if(Cr&&(Cr=!1,sn=e,di=i),l=e.pendingLanes,l===0&&(fn=null),_d(t.stateNode),pe(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=ql,ql=null,e;return di&1&&e.tag!==0&&st(),l=e.pendingLanes,l&1?e===es?Kt++:(Kt=0,es=e):Kt=0,zn(),null}function st(){if(sn!==null){var e=ao(di),n=Ee.transition,t=F;try{if(Ee.transition=null,F=16>e?16:e,sn===null)var r=!1;else{if(e=sn,sn=null,di=0,R&6)throw Error(z(331));var i=R;for(R|=4,x=e.current;x!==null;){var l=x,s=l.child;if(x.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(x=c;x!==null;){var p=x;switch(p.tag){case 0:case 11:case 15:Lt(8,p,l)}var h=p.child;if(h!==null)h.return=p,x=h;else for(;x!==null;){p=x;var m=p.sibling,k=p.return;if(Sc(p),p===c){x=null;break}if(m!==null){m.return=k,x=m;break}x=k}}}var v=l.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}x=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,x=s;else e:for(;x!==null;){if(l=x,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Lt(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,x=g;break e}x=l.return}}var o=e.current;for(x=o;x!==null;){s=x;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,x=f;else e:for(s=o;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ai(9,a)}}catch(A){j(a,a.return,A)}if(a===s){x=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,x=S;break e}x=a.return}}if(R=i,zn(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{F=t,Ee.transition=n}}return!1}function uu(e,n,t){n=ht(t,n),n=uc(e,n,1),e=hn(e,n,1),n=oe(),e!==null&&(sr(e,1,n),pe(e,n))}function j(e,n,t){if(e.tag===3)uu(e,e,t);else for(;n!==null;){if(n.tag===3){uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=ht(t,e),e=oc(n,e,1),n=hn(n,e,1),e=oe(),n!==null&&(sr(n,1,e),pe(n,e));break}}n=n.return}}function gf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(Y===4||Y===3&&(ne&130023424)===ne&&500>G()-Hs?Cn(e,0):Us|=t),pe(e,n)}function Dc(e,n){n===0&&(e.mode&1?(n=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):n=1);var t=oe();e=Ye(e,n),e!==null&&(sr(e,n,t),pe(e,t))}function mf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Dc(e,t)}function pf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(n),Dc(e,t)}var Cc;Cc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,tf(e,n,t);fe=!!(e.flags&131072)}else fe=!1,K&&n.flags&1048576&&Ro(n,ti,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var i=ut(n,se.current);lt(n,t),i=Ws(null,n,r,e,i,t);var l=Ks();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(l=!0,ei(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bs(n),i.updater=wi,n.stateNode=i,i._reactInternals=n,Vl(n,r,e,t),n=Hl(null,n,r,!0,l,t)):(n.tag=0,K&&l&&Es(n),ae(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=vf(r),e=Me(r,e),i){case 0:n=Ul(null,n,r,e,t);break e;case 1:n=Ja(null,n,r,e,t);break e;case 11:n=Ya(null,n,r,e,t);break e;case 14:n=Xa(null,n,r,Me(r.type,e),t);break e}throw Error(z(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Ul(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Ja(e,n,r,i,t);case 3:e:{if(fc(n),e===null)throw Error(z(387));r=n.pendingProps,l=n.memoizedState,i=l.element,_o(e,n),li(n,r,null,t);var s=n.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=ht(Error(z(423)),n),n=qa(e,n,r,t,i);break e}else if(r!==i){i=ht(Error(z(424)),n),n=qa(e,n,r,t,i);break e}else for(ve=dn(n.stateNode.containerInfo.firstChild),Se=n,K=!0,Be=null,t=Wo(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),r===i){n=Xe(e,n,t);break e}ae(e,n,r,t)}n=n.child}return n;case 5:return Oo(n),e===null&&Kl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,Rl(r,i)?s=null:l!==null&&Rl(r,l)&&(n.flags|=32),hc(e,n),ae(e,n,s,t),n.child;case 6:return e===null&&Kl(n),null;case 13:return gc(e,n,t);case 4:return Rs(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ct(n,null,r,t):ae(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),Ya(e,n,r,i,t);case 7:return ae(e,n,n.pendingProps,t),n.child;case 8:return ae(e,n,n.pendingProps.children,t),n.child;case 12:return ae(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,s=i.value,T(ri,r._currentValue),r._currentValue=s,l!==null)if(Te(l.value,s)){if(l.children===i.children&&!ge.current){n=Xe(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ge(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),_l(l.return,t,n),a.lanes|=t;break}u=u.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(z(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),_l(s,t,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ae(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lt(n,t),i=Ne(i),r=r(i),n.flags|=1,ae(e,n,r,t),n.child;case 14:return r=n.type,i=Me(r,n.pendingProps),i=Me(r.type,i),Xa(e,n,r,i,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Me(r,i),_r(e,n),n.tag=1,me(r)?(e=!0,ei(n)):e=!1,lt(n,t),ac(n,r,i),Vl(n,r,i,t),Hl(null,n,r,!0,e,t);case 19:return mc(e,n,t);case 22:return dc(e,n,t)}throw Error(z(156,n.tag))};function Mc(e,n){return ro(e,n)}function kf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new kf(e,n,t,r)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vf(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gs)return 11;if(e===ms)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function jr(e,n,t,r,i,l){var s=2;if(r=e,typeof e=="function")Qs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Un:return Mn(t.children,i,l,n);case fs:s=8,i|=8;break;case hl:return e=xe(12,t,n,i|2),e.elementType=hl,e.lanes=l,e;case fl:return e=xe(13,t,n,i),e.elementType=fl,e.lanes=l,e;case gl:return e=xe(19,t,n,i),e.elementType=gl,e.lanes=l,e;case _u:return Ei(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:s=10;break e;case Ku:s=9;break e;case gs:s=11;break e;case ms:s=14;break e;case en:s=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return n=xe(s,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Mn(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function Ei(e,n,t,r){return e=xe(22,e,r,n),e.elementType=_u,e.lanes=t,e.stateNode={isHidden:!1},e}function sl(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function al(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Sf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oi(0),this.expirationTimes=Oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ys(e,n,t,r,i,l,s,a,u){return e=new Sf(e,n,t,a,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=xe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bs(l),e}function yf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ic(e){if(!e)return vn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(z(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(z(171))}if(e.tag===1){var t=e.type;if(me(t))return Io(e,t,n)}return n}function Bc(e,n,t,r,i,l,s,a,u){return e=Ys(t,r,!0,e,i,l,s,a,u),e.context=Ic(null),t=e.current,r=oe(),i=gn(t),l=Ge(r,i),l.callback=n??null,hn(t,l,i),e.current.lanes=i,sr(e,i,r),pe(e,r),e}function Ni(e,n,t,r){var i=n.current,l=oe(),s=gn(i);return t=Ic(t),n.context===null?n.context=t:n.pendingContext=t,n=Ge(l,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=hn(i,n,s),e!==null&&(Fe(e,i,s,l),Lr(e,i,s)),s}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xs(e,n){ou(e,n),(e=e.alternate)&&ou(e,n)}function zf(){return null}var Rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}Pi.prototype.render=Js.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(z(409));Ni(e,n,null,null)};Pi.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tn(function(){Ni(null,e,null,null)}),n[Qe]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=co();e={blockedOn:null,target:e,priority:n};for(var t=0;t<tn.length&&n!==0&&n<tn[t].priority;t++);tn.splice(t,0,e),t===0&&fo(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cu(){}function bf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=fi(s);l.call(c)}}var s=Bc(n,r,e,0,null,!1,!1,"",cu);return e._reactRootContainer=s,e[Qe]=s.current,$t(e.nodeType===8?e.parentNode:e),Tn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=fi(u);a.call(c)}}var u=Ys(e,0,!1,null,null,!1,!1,"",cu);return e._reactRootContainer=u,e[Qe]=u.current,$t(e.nodeType===8?e.parentNode:e),Tn(function(){Ni(n,u,t,r)}),u}function Ci(e,n,t,r,i){var l=t._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var u=fi(s);a.call(u)}}Ni(n,s,e,i)}else s=bf(t,n,e,i,r);return fi(s)}uo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Dt(n.pendingLanes);t!==0&&(vs(n,t|1),pe(n,G()),!(R&6)&&(ft=G()+500,zn()))}break;case 13:Tn(function(){var r=Ye(e,1);if(r!==null){var i=oe();Fe(r,e,1,i)}}),Xs(e,1)}};Ss=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=oe();Fe(n,e,134217728,t)}Xs(e,134217728)}};oo=function(e){if(e.tag===13){var n=gn(e),t=Ye(e,n);if(t!==null){var r=oe();Fe(t,e,n,r)}Xs(e,n)}};co=function(){return F};ho=function(e,n){var t=F;try{return F=e,n()}finally{F=t}};Al=function(e,n,t){switch(n){case"input":if(kl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=yi(r);if(!i)throw Error(z(90));Vu(r),kl(r,i)}}}break;case"textarea":Uu(e,t);break;case"select":n=t.value,n!=null&&nt(e,!!t.multiple,n,!1)}};Xu=Gs;Ju=Tn;var wf={usingClientEntryPoint:!1,Events:[ur,$n,yi,Qu,Yu,Gs]},Et={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Af={bundleType:Et.bundleType,version:Et.version,rendererPackageName:Et.rendererPackageName,rendererConfig:Et.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=no(e),e===null?null:e.stateNode},findFiberByHostInstance:Et.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{pi=Mr.inject(Af),_e=Mr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wf;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(n))throw Error(z(200));return yf(e,n,null,t)};ze.createRoot=function(e,n){if(!qs(e))throw Error(z(299));var t=!1,r="",i=Rc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ys(e,1,!1,null,null,t,!1,r,i),e[Qe]=n.current,$t(e.nodeType===8?e.parentNode:e),new Js(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=no(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Tn(e)};ze.hydrate=function(e,n,t){if(!Di(n))throw Error(z(200));return Ci(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!qs(e))throw Error(z(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",s=Rc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Bc(n,null,e,1,t??null,i,!1,l,s),e[Qe]=n.current,$t(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Pi(n)};ze.render=function(e,n,t){if(!Di(n))throw Error(z(200));return Ci(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!Di(e))throw Error(z(40));return e._reactRootContainer?(Tn(function(){Ci(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ze.unstable_batchedUpdates=Gs;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ci(e,n,t,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Ru.exports=ze;var xf=Ru.exports,du=xf;cl.createRoot=du.createRoot,cl.hydrateRoot=du.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},rr.apply(null,arguments)}var an;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(an||(an={}));const hu="popstate";function Ef(e){e===void 0&&(e={});function n(i,l){let{pathname:s="/",search:a="",hash:u=""}=Kn(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),rs("",{pathname:s,search:a,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");a=c===-1?u:u.slice(0,c)}return a+"#"+(typeof l=="string"?l:gi(l))}function r(i,l){Mi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Pf(n,t,r,e)}function $(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Mi(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Nf(){return Math.random().toString(36).substr(2,8)}function fu(e,n){return{usr:e.state,key:e.key,idx:n}}function rs(e,n,t,r){return t===void 0&&(t=null),rr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Kn(n):n,{state:t,key:n&&n.key||r||Nf()})}function gi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Kn(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function Pf(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,s=i.history,a=an.Pop,u=null,c=p();c==null&&(c=0,s.replaceState(rr({},s.state,{idx:c}),""));function p(){return(s.state||{idx:null}).idx}function h(){a=an.Pop;let b=p(),g=b==null?null:b-c;c=b,u&&u({action:a,location:y.location,delta:g})}function m(b,g){a=an.Push;let o=rs(y.location,b,g);t&&t(o,b),c=p()+1;let f=fu(o,c),S=y.createHref(o);try{s.pushState(f,"",S)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(S)}l&&u&&u({action:a,location:y.location,delta:1})}function k(b,g){a=an.Replace;let o=rs(y.location,b,g);t&&t(o,b),c=p();let f=fu(o,c),S=y.createHref(o);s.replaceState(f,"",S),l&&u&&u({action:a,location:y.location,delta:0})}function v(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,o=typeof b=="string"?b:gi(b);return o=o.replace(/ $/,"%20"),$(g,"No window.location.(origin|href) available to create URL for href: "+o),new URL(o,g)}let y={get action(){return a},get location(){return e(i,s)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hu,h),u=b,()=>{i.removeEventListener(hu,h),u=null}},createHref(b){return n(i,b)},createURL:v,encodeLocation(b){let g=v(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:k,go(b){return s.go(b)}};return y}var gu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gu||(gu={}));function Df(e,n,t){return t===void 0&&(t="/"),Cf(e,n,t)}function Cf(e,n,t,r){let i=typeof n=="string"?Kn(n):n,l=ea(i.pathname||"/",t);if(l==null)return null;let s=Tc(e);Mf(s);let a=null,u=jf(l);for(let c=0;a==null&&c<s.length;++c)a=_f(s[c],u);return a}function Tc(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(l,s,a)=>{let u={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};u.relativePath.startsWith("/")&&($(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=pn([r,u.relativePath]),p=t.concat(u);l.children&&l.children.length>0&&($(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Tc(l.children,n,p,c)),!(l.path==null&&!l.index)&&n.push({path:c,score:Wf(c,l.index),routesMeta:p})};return e.forEach((l,s)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,s);else for(let u of Lc(l.path))i(l,s,u)}),n}function Lc(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let s=Lc(r.join("/")),a=[];return a.push(...s.map(u=>u===""?l:[l,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Mf(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Kf(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const If=/^:[\w-]+$/,Bf=3,Rf=2,Ff=1,Tf=10,Lf=-2,mu=e=>e==="*";function Wf(e,n){let t=e.split("/"),r=t.length;return t.some(mu)&&(r+=Lf),n&&(r+=Rf),t.filter(i=>!mu(i)).reduce((i,l)=>i+(If.test(l)?Bf:l===""?Ff:Tf),r)}function Kf(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function _f(e,n,t){let{routesMeta:r}=e,i={},l="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=l==="/"?n:n.slice(l.length)||"/",h=Of({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),m=u.route;if(!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:pn([l,h.pathname]),pathnameBase:$f(pn([l,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(l=pn([l,h.pathnameBase]))}return s}function Of(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Vf(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let l=i[0],s=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:m,isOptional:k}=p;if(m==="*"){let y=a[h]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[h];return k&&!v?c[m]=void 0:c[m]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:s,pattern:e}}function Vf(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Mi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function jf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Mi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ea(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Uf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hf=e=>Uf.test(e);function Gf(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?Kn(e):e,l;if(t)if(Hf(t))l=t;else{if(t.includes("//")){let s=t;t=_c(t),Mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+t))}t.startsWith("/")?l=pu(t.substring(1),"/"):l=pu(t,n)}else l=n;return{pathname:l,search:Qf(r),hash:Yf(i)}}function pu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ul(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zf(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Wc(e,n){let t=Zf(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Kc(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kn(e):(i=rr({},e),$(!i.pathname||!i.pathname.includes("?"),ul("?","pathname","search",i)),$(!i.pathname||!i.pathname.includes("#"),ul("#","pathname","hash",i)),$(!i.search||!i.search.includes("#"),ul("#","search","hash",i)));let l=e===""||i.pathname==="",s=l?"/":i.pathname,a;if(s==null)a=t;else{let h=n.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?n[h]:"/"}let u=Gf(i,a),c=s&&s!=="/"&&s.endsWith("/"),p=(l||s===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}const _c=e=>e.replace(/\/\/+/g,"/"),pn=e=>_c(e.join("/")),$f=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oc=["post","put","patch","delete"];new Set(Oc);const Jf=["get",...Oc];new Set(Jf);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ir.apply(null,arguments)}const na=w.createContext(null),qf=w.createContext(null),_n=w.createContext(null),Ii=w.createContext(null),bn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=w.createContext(null);function eg(e,n){let{relative:t}=n===void 0?{}:n;cr()||$(!1);let{basename:r,navigator:i}=w.useContext(_n),{hash:l,pathname:s,search:a}=Hc(e,{relative:t}),u=s;return r!=="/"&&(u=s==="/"?r:pn([r,s])),i.createHref({pathname:u,search:a,hash:l})}function cr(){return w.useContext(Ii)!=null}function dr(){return cr()||$(!1),w.useContext(Ii).location}function jc(e){w.useContext(_n).static||w.useLayoutEffect(e)}function ng(){let{isDataRoute:e}=w.useContext(bn);return e?gg():tg()}function tg(){cr()||$(!1);let e=w.useContext(na),{basename:n,future:t,navigator:r}=w.useContext(_n),{matches:i}=w.useContext(bn),{pathname:l}=dr(),s=JSON.stringify(Wc(i,t.v7_relativeSplatPath)),a=w.useRef(!1);return jc(()=>{a.current=!0}),w.useCallback(function(c,p){if(p===void 0&&(p={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Kc(c,JSON.parse(s),l,p.relative==="path");e==null&&n!=="/"&&(h.pathname=h.pathname==="/"?n:pn([n,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[n,r,s,l,e])}function Uc(){let{matches:e}=w.useContext(bn),n=e[e.length-1];return n?n.params:{}}function Hc(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=w.useContext(_n),{matches:i}=w.useContext(bn),{pathname:l}=dr(),s=JSON.stringify(Wc(i,r.v7_relativeSplatPath));return w.useMemo(()=>Kc(e,JSON.parse(s),l,t==="path"),[e,s,l,t])}function rg(e,n){return ig(e,n)}function ig(e,n,t,r){cr()||$(!1);let{navigator:i}=w.useContext(_n),{matches:l}=w.useContext(bn),s=l[l.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=dr(),p;if(n){var h;let b=typeof n=="string"?Kn(n):n;u==="/"||(h=b.pathname)!=null&&h.startsWith(u)||$(!1),p=b}else p=c;let m=p.pathname||"/",k=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");k="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=Df(e,{pathname:k}),y=og(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:pn([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:pn([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,t,r);return n&&y?w.createElement(Ii.Provider,{value:{location:ir({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:an.Pop}},y):y}function lg(){let e=fg(),n=Xf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},n),t?w.createElement("pre",{style:i},t):null,null)}const sg=w.createElement(lg,null);class ag extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?w.createElement(bn.Provider,{value:this.props.routeContext},w.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ug(e){let{routeContext:n,match:t,children:r}=e,i=w.useContext(na);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),w.createElement(bn.Provider,{value:n},r)}function og(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var l;if(!t)return null;if(t.errors)e=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let s=e,a=(i=t)==null?void 0:i.errors;if(a!=null){let p=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);p>=0||$(!1),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,c=-1;if(t&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:m,errors:k}=t,v=h.route.loader&&m[h.route.id]===void 0&&(!k||k[h.route.id]===void 0);if(h.route.lazy||v){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,h,m)=>{let k,v=!1,y=null,b=null;t&&(k=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||sg,u&&(c<0&&m===0?(mg("route-fallback"),v=!0,b=null):c===m&&(v=!0,b=h.route.hydrateFallbackElement||null)));let g=n.concat(s.slice(0,m+1)),o=()=>{let f;return k?f=y:v?f=b:h.route.Component?f=w.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=p,w.createElement(ug,{match:h,routeContext:{outlet:p,matches:g,isDataRoute:t!=null},children:f})};return t&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?w.createElement(ag,{location:t.location,revalidation:t.revalidation,component:y,error:k,children:o(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):o()},null)}var Gc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gc||{}),Zc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zc||{});function cg(e){let n=w.useContext(na);return n||$(!1),n}function dg(e){let n=w.useContext(qf);return n||$(!1),n}function hg(e){let n=w.useContext(bn);return n||$(!1),n}function $c(e){let n=hg(),t=n.matches[n.matches.length-1];return t.route.id||$(!1),t.route.id}function fg(){var e;let n=w.useContext(Vc),t=dg(),r=$c();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function gg(){let{router:e}=cg(Gc.UseNavigateStable),n=$c(Zc.UseNavigateStable),t=w.useRef(!1);return jc(()=>{t.current=!0}),w.useCallback(function(i,l){l===void 0&&(l={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ir({fromRouteId:n},l)))},[e,n])}const ku={};function mg(e,n,t){ku[e]||(ku[e]=!0)}function pg(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Vn(e){$(!1)}function kg(e){let{basename:n="/",children:t=null,location:r,navigationType:i=an.Pop,navigator:l,static:s=!1,future:a}=e;cr()&&$(!1);let u=n.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:l,static:s,future:ir({v7_relativeSplatPath:!1},a)}),[u,a,l,s]);typeof r=="string"&&(r=Kn(r));let{pathname:p="/",search:h="",hash:m="",state:k=null,key:v="default"}=r,y=w.useMemo(()=>{let b=ea(p,u);return b==null?null:{location:{pathname:b,search:h,hash:m,state:k,key:v},navigationType:i}},[u,p,h,m,k,v,i]);return y==null?null:w.createElement(_n.Provider,{value:c},w.createElement(Ii.Provider,{children:t,value:y}))}function vg(e){let{children:n,location:t}=e;return rg(is(n),t)}new Promise(()=>{});function is(e,n){n===void 0&&(n=[]);let t=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let l=[...n,i];if(r.type===w.Fragment){t.push.apply(t,is(r.props.children,l));return}r.type!==Vn&&$(!1),!r.props.index||!r.props.children||$(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=is(r.props.children,l)),t.push(s)}),t}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ls.apply(null,arguments)}function Sg(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function yg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function zg(e,n){return e.button===0&&(!n||n==="_self")&&!yg(e)}const bg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wg="6";try{window.__reactRouterVersion=wg}catch{}const Ag="startTransition",vu=fd[Ag];function xg(e){let{basename:n,children:t,future:r,window:i}=e,l=w.useRef();l.current==null&&(l.current=Ef({window:i,v5Compat:!0}));let s=l.current,[a,u]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},p=w.useCallback(h=>{c&&vu?vu(()=>u(h)):u(h)},[u,c]);return w.useLayoutEffect(()=>s.listen(p),[s,p]),w.useEffect(()=>pg(r),[r]),w.createElement(kg,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:s,future:r})}const Eg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ng=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ue=w.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:l,replace:s,state:a,target:u,to:c,preventScrollReset:p,viewTransition:h}=n,m=Sg(n,bg),{basename:k}=w.useContext(_n),v,y=!1;if(typeof c=="string"&&Ng.test(c)&&(v=c,Eg))try{let f=new URL(window.location.href),S=c.startsWith("//")?new URL(f.protocol+c):new URL(c),A=ea(S.pathname,k);S.origin===f.origin&&A!=null?c=A+S.search+S.hash:y=!0}catch{}let b=eg(c,{relative:i}),g=Pg(c,{replace:s,state:a,target:u,preventScrollReset:p,relative:i,viewTransition:h});function o(f){r&&r(f),f.defaultPrevented||g(f)}return w.createElement("a",ls({},m,{href:v||b,onClick:y||l?r:o,ref:t,target:u}))});var Su;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Su||(Su={}));var yu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yu||(yu={}));function Pg(e,n){let{target:t,replace:r,state:i,preventScrollReset:l,relative:s,viewTransition:a}=n===void 0?{}:n,u=ng(),c=dr(),p=Hc(e,{relative:s});return w.useCallback(h=>{if(zg(h,t)){h.preventDefault();let m=r!==void 0?r:gi(c)===gi(p);u(e,{replace:m,state:i,preventScrollReset:l,relative:s,viewTransition:a})}},[c,u,p,r,i,t,e,l,s,a])}function Dg(){const[e,n]=w.useState(!1),{pathname:t}=dr(),r=[{to:"/",label:"Dashboard"},{to:"/fortschritt",label:"Fortschritt"},{to:"/karteikarten",label:"Karteikarten"}];return d.jsx("nav",{className:"bg-blue-800 text-white shadow-lg",children:d.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[d.jsxs("div",{className:"flex items-center justify-between h-16",children:[d.jsxs(ue,{to:"/",className:"flex items-center gap-2 font-bold text-xl",children:[d.jsx("span",{children:"⚡"}),d.jsx("span",{className:"hidden sm:block",children:"Automatiker Lern-App"}),d.jsx("span",{className:"sm:hidden",children:"Automatiker"})]}),d.jsx("div",{className:"hidden md:flex items-center gap-6",children:r.map(i=>d.jsx(ue,{to:i.to,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors ${t===i.to?"bg-blue-900 text-white":"text-blue-100 hover:bg-blue-700"}`,children:i.label},i.to))}),d.jsx("button",{className:"md:hidden p-2 rounded text-blue-100 hover:bg-blue-700",onClick:()=>n(i=>!i),children:e?"✕":"☰"})]}),e&&d.jsx("div",{className:"md:hidden pb-3 space-y-1",children:r.map(i=>d.jsx(ue,{to:i.to,onClick:()=>n(!1),className:`block px-3 py-2 rounded-md text-sm font-medium ${t===i.to?"bg-blue-900 text-white":"text-blue-100 hover:bg-blue-700"}`,children:i.label},i.to))})]})})}const Ze=[{id:"elektrotechnik",titel:"Elektrotechnik",icon:"⚡",farbe:"blue",beschreibung:"Grundlagen der Elektrotechnik: Ohm, Kirchhoff, AC/DC, Leistung",lektionen:[{id:"ohm",titel:"Ohmsches Gesetz",inhalt:`Das Ohmsche Gesetz ist das Fundament der Elektrotechnik und beschreibt den Zusammenhang zwischen elektrischer Spannung (U), Widerstand (R) und Stromstärke (I).

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
In der Automatisierungstechnik begegnest du dem Ohmschen Gesetz täglich: Bei der Auslegung von Sicherungen, der Berechnung von Vorwiderständen für Sensoren oder der Analyse von Stromkreisen in Steuerungsanlagen.`},{id:"kirchhoff",titel:"Kirchhoffsche Gesetze",inhalt:`Die Kirchhoffschen Gesetze ermöglichen die Berechnung komplexer elektrischer Netzwerke mit mehreren Maschen und Knoten.

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
In einer Steuerungsanlage werden mehrere Magnetventile parallel an 24 V DC betrieben. Mit dem Knotensatz kann die gesamte Stromaufnahme berechnet werden, um die richtige Sicherung zu dimensionieren.`},{id:"ac-dc",titel:"Gleich- und Wechselstrom",inhalt:`Elektrischer Strom tritt in zwei grundlegenden Formen auf: Gleichstrom (DC) und Wechselstrom (AC). Im Berufsalltag eines Automatikers begegnest du beiden Formen ständig.

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
Steuerungen arbeiten fast immer mit 24 V DC, die Leistungskreise (Motoren, Heizungen) mit 400 V AC Drehstrom.`},{id:"leistung",titel:"Elektrische Leistung",inhalt:`Die elektrische Leistung gibt an, wie viel Energie pro Zeiteinheit umgesetzt wird. Für den Automatiker ist sie wichtig bei der Auslegung von Antrieben, Sicherungen und Transformatoren.

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
Strom bei 400 V Drehstrom: I = S / (√3 × U) = 6875 / (1,732 × 400) ≈ 9,9 A`},{id:"kondensator-spule",titel:"Kondensatoren und Spulen",inhalt:`Kondensatoren und Spulen sind reaktive Bauteile, die Energie speichern und in der Automatisierungstechnik vielseitig eingesetzt werden.

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
- Upload: SPS → PC (Programm sichern)`}]},{id:"pneumatik",titel:"Pneumatik & Hydraulik",icon:"💨",farbe:"cyan",beschreibung:"Druckluft, Wegeventile, Zylinder, Hydraulik-Grundlagen",lektionen:[{id:"pneumatik-grundlagen",titel:"Grundlagen der Pneumatik",inhalt:`Pneumatik nutzt Druckluft als Energieträger zur Erzeugung von Kräften und Bewegungen. In der Schweizer Fertigungs- und Automatisierungsindustrie ist Pneumatik unverzichtbar.

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
- Drucksequenzventil: Schaltet bei Druckanstieg`},{id:"zylinder",titel:"Pneumatische Zylinder",inhalt:`Pneumatische Zylinder wandeln Druckluftenergie in eine geradlinige Bewegung um. Sie sind die häufigsten Aktoren in der Automatisierungstechnik.

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
Hydrauliksysteme stehen unter sehr hohem Druck! Niemals auf Leckagen zeigen (Ölstrahl kann Haut durchdringen). Anlage immer drucklos schalten vor Wartungsarbeiten. PSA: Schutzbrille, Handschuhe obligatorisch!`}]},{id:"antriebstechnik",titel:"Antriebstechnik",icon:"⚙️",farbe:"orange",beschreibung:"Elektromotoren, Frequenzumrichter, Getriebe, Servosysteme",lektionen:[{id:"motoren",titel:"Elektromotoren",inhalt:`Elektromotoren sind die wichtigsten Aktoren in der Automatisierungstechnik. Sie wandeln elektrische Energie in mechanische Bewegung um.

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
- Thermistor: Meldet Übertemperatur an SPS`},{id:"frequenzumrichter",titel:"Frequenzumrichter (FU)",inhalt:`Der Frequenzumrichter (auch VFD – Variable Frequency Drive oder Umrichter) ermöglicht die stufenlose Drehzahlregelung von Asynchronmotoren und spart erheblich Energie.

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
- Alarmhorn / Signalleuchte: Optische/akustische Meldung`},{id:"temperaturmessung",titel:"Temperaturmessung",inhalt:`Temperatur ist eine der häufigsten Messgrössen in der Industrie. Verschiedene Messprinzipien decken unterschiedliche Temperaturbereiche ab.

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
- Reale Zahlen werden als REAL (32-Bit IEEE 754) gespeichert`},{id:"logikgatter",titel:"Logikgatter",inhalt:`Logikgatter sind die Grundbausteine der Digitaltechnik. Sie verarbeiten binäre Signale und liefern einen binären Ausgang.

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
- Schutzklasse III: Schutzkleinspannung (SELV ≤ 50 V AC / 120 V DC)`},{id:"schutz-erdung",titel:"Schutzmassnähmen und Erdung",inhalt:`Schutzmassnähmen verhindern den elektrischen Schlag durch automatische Abschaltung oder durch Isolation vor gefährlichen Spannungen.

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
Sammelplatz kennen, Fluchtwege freihalten, im Brandfall: Aufzug verboten!`}]},{id:"elektriker",titel:"Elektriker Grundlagen",icon:"🔌",farbe:"teal",beschreibung:"Stromlaufpläne, Kabel, Schutzeinrichtungen, Schaltgeräte, Schaltschrankbau",lektionen:[{id:"stromlaufplaene",titel:"Stromlaufpläne lesen",inhalt:`Stromlaufpläne (auch Schaltpläne) sind die «Sprache» des Elektrikers und Automatikers. Sie zeigen, wie elektrische Schaltungen aufgebaut sind, und sind Grundlage für Installation, Inbetriebnahme und Fehlersuche.

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
Vorgelagerte Sicherungen müssen grösser sein als nachgelagerte → Fehler schaltet nur betroffenen Kreis ab, nicht die übergeordnete Einspeisung.`},{id:"schaltgeraete",titel:"Schaltgeräte: Schütze und Relais",inhalt:`Schütze und Relais sind elektromechanische Schalter, die durch eine Steuerspannung betätigt werden und Lasten ein- und ausschalten.

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
4. FI-Prüfung: Auslösung bei 30 mA (Prüfgerät oder Test-Taste)`}]}],zu="automatiker_progress",ol={completedLessons:{},quizScores:{},flashcardProgress:{},lastActivity:null};function hr(){const[e,n]=w.useState(()=>{try{const h=localStorage.getItem(zu);return h?JSON.parse(h):ol}catch{return ol}});w.useEffect(()=>{localStorage.setItem(zu,JSON.stringify(e))},[e]);const t=(h,m)=>{n(k=>({...k,completedLessons:{...k.completedLessons,[`${h}:${m}`]:!0},lastActivity:new Date().toISOString()}))},r=(h,m)=>!!e.completedLessons[`${h}:${m}`];return{progress:e,markLessonComplete:t,isLessonComplete:r,getModuleProgress:(h,m)=>{const k=m.filter(v=>r(h,v.id)).length;return{completed:k,total:m.length,percent:Math.round(k/m.length*100)}},saveQuizScore:(h,m,k)=>{n(v=>({...v,quizScores:{...v.quizScores,[h]:{score:m,total:k,percent:Math.round(m/k*100),date:new Date().toISOString()}},lastActivity:new Date().toISOString()}))},getQuizScore:h=>e.quizScores[h]||null,markFlashcard:(h,m)=>{n(k=>({...k,flashcardProgress:{...k.flashcardProgress,[h]:m?"known":"repeat"}}))},getFlashcardStatus:h=>e.flashcardProgress[h]||null,getOverallStats:h=>{const m=h.reduce((b,g)=>b+g.lektionen.length,0),k=Object.keys(e.completedLessons).length,v=Object.keys(e.quizScores).length,y=v>0?Math.round(Object.values(e.quizScores).reduce((b,g)=>b+g.percent,0)/v):0;return{totalLessons:m,completedLessons:k,lessonPercent:Math.round(k/m*100),quizCount:v,avgQuizScore:y}},resetProgress:()=>{n(ol)}}}const Cg={blue:"bg-blue-100 border-blue-300 hover:border-blue-500",green:"bg-green-100 border-green-300 hover:border-green-500",cyan:"bg-cyan-100 border-cyan-300 hover:border-cyan-500",orange:"bg-orange-100 border-orange-300 hover:border-orange-500",purple:"bg-purple-100 border-purple-300 hover:border-purple-500",red:"bg-red-100 border-red-300 hover:border-red-500",indigo:"bg-indigo-100 border-indigo-300 hover:border-indigo-500",yellow:"bg-yellow-100 border-yellow-300 hover:border-yellow-500",teal:"bg-teal-100 border-teal-300 hover:border-teal-500"},Mg={blue:"bg-blue-500",green:"bg-green-500",cyan:"bg-cyan-500",orange:"bg-orange-500",purple:"bg-purple-500",red:"bg-red-500",indigo:"bg-indigo-500",yellow:"bg-yellow-500",teal:"bg-teal-500"};function Ig(){const{getModuleProgress:e,getOverallStats:n,getQuizScore:t}=hr(),r=n(Ze);return d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"🇨🇭 Automatiker EFZ Lernplattform"}),d.jsx("p",{className:"text-gray-600 text-lg",children:"Alle Themen für die Berufslehre als Automatiker in der Schweiz – kompakt und interaktiv."})]}),d.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[{label:"Lektionen gelernt",value:`${r.completedLessons} / ${r.totalLessons}`,icon:"📚"},{label:"Fortschritt",value:`${r.lessonPercent}%`,icon:"📈"},{label:"Quiz abgeschlossen",value:`${r.quizCount} / ${Ze.length}`,icon:"✅"},{label:"Ø Quiz-Score",value:r.quizCount>0?`${r.avgQuizScore}%`:"–",icon:"🏆"}].map(i=>d.jsxs("div",{className:"bg-white rounded-xl shadow p-4 text-center",children:[d.jsx("div",{className:"text-2xl mb-1",children:i.icon}),d.jsx("div",{className:"text-2xl font-bold text-blue-700",children:i.value}),d.jsx("div",{className:"text-xs text-gray-500 mt-1",children:i.label})]},i.label))}),d.jsx("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Lernmodule"}),d.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:Ze.map(i=>{const{completed:l,total:s,percent:a}=e(i.id,i.lektionen),u=t(i.id);return d.jsxs("div",{className:`border-2 rounded-xl p-4 transition-all cursor-pointer ${Cg[i.farbe]}`,children:[d.jsx("div",{className:"text-3xl mb-2",children:i.icon}),d.jsx("h3",{className:"font-bold text-gray-900 mb-1",children:i.titel}),d.jsx("p",{className:"text-xs text-gray-600 mb-3 leading-relaxed",children:i.beschreibung}),d.jsxs("div",{className:"mb-2",children:[d.jsxs("div",{className:"flex justify-between text-xs text-gray-600 mb-1",children:[d.jsxs("span",{children:[l," / ",s," Lektionen"]}),d.jsxs("span",{children:[a,"%"]})]}),d.jsx("div",{className:"h-2 bg-white rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full rounded-full transition-all ${Mg[i.farbe]}`,style:{width:`${a}%`}})})]}),u&&d.jsxs("div",{className:"text-xs text-gray-600 mb-3",children:["Quiz: ",u.percent,"% (",u.score,"/",u.total," richtig)"]}),d.jsxs("div",{className:"flex gap-2 mt-3",children:[d.jsx(ue,{to:`/module/${i.id}`,className:"flex-1 text-center text-xs font-medium bg-white rounded-lg py-1.5 border border-gray-200 hover:bg-gray-50 transition-colors",children:"Lernen"}),d.jsx(ue,{to:`/quiz/${i.id}`,className:"flex-1 text-center text-xs font-medium bg-blue-600 text-white rounded-lg py-1.5 hover:bg-blue-700 transition-colors",children:"Quiz"})]})]},i.id)})})]})}function Bg(){const{id:e}=Uc(),n=Ze.find(k=>k.id===e),[t,r]=w.useState(0),{markLessonComplete:i,isLessonComplete:l,getModuleProgress:s}=hr();if(!n)return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 text-center",children:[d.jsx("p",{className:"text-gray-500",children:"Modul nicht gefunden."}),d.jsx(ue,{to:"/",className:"text-blue-600 hover:underline mt-4 block",children:"← Zurück zum Dashboard"})]});const a=n.lektionen[t],{completed:u,total:c,percent:p}=s(n.id,n.lektionen),h=l(n.id,a.id),m=k=>k.split(`
`).map((v,y)=>v.startsWith("## ")?d.jsx("h2",{className:"text-lg font-bold text-gray-900 mt-5 mb-2 border-b pb-1",children:v.slice(3)},y):v.startsWith("### ")?d.jsx("h3",{className:"font-semibold text-gray-800 mt-4 mb-1",children:v.slice(4)},y):v.startsWith("- ")?d.jsx("li",{className:"ml-4 text-gray-700 list-disc",children:v.slice(2)},y):v===""?d.jsx("div",{className:"my-1"},y):d.jsx("p",{className:"text-gray-700 leading-relaxed",children:v},y));return d.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-6",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-4 text-sm text-gray-500",children:[d.jsx(ue,{to:"/",className:"hover:text-blue-600",children:"Dashboard"}),d.jsx("span",{children:"›"}),d.jsxs("span",{className:"text-gray-800 font-medium",children:[n.icon," ",n.titel]})]}),d.jsxs("div",{className:"grid md:grid-cols-4 gap-6",children:[d.jsx("aside",{className:"md:col-span-1",children:d.jsxs("div",{className:"bg-white rounded-xl shadow p-4 sticky top-4",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[d.jsx("span",{className:"text-2xl",children:n.icon}),d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-sm text-gray-900",children:n.titel}),d.jsxs("div",{className:"text-xs text-gray-500",children:[u,"/",c," gelernt"]})]})]}),d.jsx("div",{className:"h-1.5 bg-gray-200 rounded-full mb-4 overflow-hidden",children:d.jsx("div",{className:"h-full bg-blue-500 rounded-full transition-all",style:{width:`${p}%`}})}),d.jsx("nav",{className:"space-y-1",children:n.lektionen.map((k,v)=>{const y=l(n.id,k.id);return d.jsxs("button",{onClick:()=>r(v),className:`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${v===t?"bg-blue-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[d.jsx("span",{className:`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-xs ${y?"bg-green-500 border-green-500 text-white":"border-gray-300"}`,children:y?"✓":""}),d.jsx("span",{className:"truncate",children:k.titel})]},k.id)})}),d.jsx("div",{className:"mt-4 pt-4 border-t",children:d.jsx(ue,{to:`/quiz/${n.id}`,className:"block w-full text-center text-sm font-medium bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors",children:"Quiz starten →"})})]})}),d.jsx("main",{className:"md:col-span-3",children:d.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4",children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:a.titel}),h&&d.jsx("span",{className:"bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full",children:"✓ Gelernt"})]}),d.jsx("div",{className:"prose prose-sm max-w-none space-y-1",children:m(a.inhalt)}),d.jsxs("div",{className:"mt-8 pt-4 border-t flex items-center justify-between",children:[d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>r(k=>Math.max(0,k-1)),disabled:t===0,className:"px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50",children:"← Zurück"}),d.jsx("button",{onClick:()=>r(k=>Math.min(n.lektionen.length-1,k+1)),disabled:t===n.lektionen.length-1,className:"px-4 py-2 text-sm border rounded-lg disabled:opacity-40 hover:bg-gray-50",children:"Weiter →"})]}),d.jsx("button",{onClick:()=>i(n.id,a.id),disabled:h,className:`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${h?"bg-green-100 text-green-700 cursor-default":"bg-blue-600 text-white hover:bg-blue-700"}`,children:h?"✓ Gelernt":"Als gelernt markieren"})]})]})})]})]})}const Rg={elektrotechnik:{titel:"Elektrotechnik Quiz",fragen:[{id:1,frage:"Wie lautet das Ohmsche Gesetz?",optionen:["U = R × I","U = R / I","U = I / R","U = R + I"],richtig:0,erklaerung:"Das Ohmsche Gesetz lautet U = R × I: Spannung = Widerstand × Stromstärke."},{id:2,frage:"Ein Widerstand von 470 Ω liegt an 9 V. Wie gross ist der Strom?",optionen:["ca. 19 mA","ca. 52 mA","ca. 0,5 A","ca. 4,2 A"],richtig:0,erklaerung:"I = U / R = 9 / 470 = 0,0191 A ≈ 19 mA."},{id:3,frage:"Was besagt der Knotensatz (1. Kirchhoffsches Gesetz)?",optionen:["Die Summe aller Ströme am Knoten ist null","Die Summe aller Spannungen in einer Masche ist null","Der Strom ist überall gleich","Die Spannung teilt sich auf"],richtig:0,erklaerung:"Am Knoten gilt: Summe der zufliessenden Ströme = Summe der abfliessenden Ströme, also ΣI = 0."},{id:4,frage:"Welche Frequenz hat das Wechselstromnetz in der Schweiz?",optionen:["50 Hz","60 Hz","100 Hz","16,7 Hz"],richtig:0,erklaerung:"In der Schweiz (und ganz Europa) beträgt die Netzfrequenz 50 Hz (50 Schwingungen pro Sekunde)."},{id:5,frage:"Wie lautet die Formel für elektrische Leistung bei Gleichstrom?",optionen:["P = U × I","P = U / I","P = I / U","P = U + I"],richtig:0,erklaerung:"Elektrische Leistung bei DC: P = U × I (Watt = Volt × Ampere)."},{id:6,frage:"Was ist der Effektivwert der Netzspannung in der Schweiz?",optionen:["230 V","325 V","120 V","400 V"],richtig:0,erklaerung:"230 V ist der Effektivwert (RMS). Der Spitzenwert beträgt 230 × √2 ≈ 325 V."},{id:7,frage:"Wie verhalten sich Widerstände in einer Reihenschaltung?",optionen:["Sie addieren sich: R_ges = R1 + R2 + ...","Kehrwerte addieren sich","Sie sind alle gleich","Sie halbieren sich"],richtig:0,erklaerung:"Bei Reihenschaltung: R_ges = R1 + R2 + ... Der Strom ist durch alle Widerstände gleich."},{id:8,frage:"Ein Kondensator sperrt...",optionen:["Gleichstrom","Wechselstrom","Hochfrequenzsignale","Alle Signale"],richtig:0,erklaerung:"Ein Kondensator lässt Wechselstrom durch, sperrt aber Gleichstrom (kapazitiver Widerstand → unendlich bei f=0)."},{id:9,frage:"Was beschreibt der Leistungsfaktor cos φ?",optionen:["Verhältnis von Wirkleistung zu Scheinleistung","Verhältnis von Strom zu Spannung","Wirkungsgrad des Motors","Phasenverschebung in Grad"],richtig:0,erklaerung:"cos φ = P / S (Wirkleistung / Scheinleistung). Bei rein ohmscher Last ist cos φ = 1."},{id:10,frage:"Welche Spannung liegt zwischen zwei Phasen (L1-L2) im Drehstromnetz?",optionen:["400 V","230 V","690 V","115 V"],richtig:0,erklaerung:"Die Leiterspannung (verkettete Spannung) beträgt U_L = √3 × 230 ≈ 400 V."}]},sps:{titel:"SPS-Programmierung Quiz",fragen:[{id:1,frage:"Was bedeutet die Abkürzung SPS?",optionen:["Speicherprogrammierbare Steuerung","Schnelle Prozess-Steuerung","Seriell Programmierbare Software","Standard Programm System"],richtig:0,erklaerung:"SPS steht für Speicherprogrammierbare Steuerung (engl. PLC – Programmable Logic Controller)."},{id:2,frage:"Was ist der OB1 in einer Siemens-SPS?",optionen:["Das zyklisch aufgerufene Hauptprogramm","Ein Datenbaustein","Ein Fehlerorganisationsbaustein","Ein Funktionsbaustein für Zähler"],richtig:0,erklaerung:"OB1 (Organisationsbaustein 1) ist das Hauptprogramm, das vom Betriebssystem zyklisch aufgerufen wird."},{id:3,frage:"In KOP entspricht ein Kontakt mit --| |-- ...",optionen:["Einem Schliesser (Öffner öffnet bei 0)","Einem Öffner (Schliesser öffnet bei 1)","Einer Ausgangs-Spule","Einem Timer"],richtig:0,erklaerung:"--| |-- ist ein Schliesser (Normally Open): Durchgang wenn das zugeordnete Bit = 1 ist."},{id:4,frage:"Welches Adresspräfix haben digitale Eingänge bei Siemens-SPS?",optionen:["I (z.B. I0.0)","Q (z.B. Q0.0)","M (z.B. M0.0)","E (z.B. E0.0)"],richtig:0,erklaerung:"Digitale Eingänge werden mit I adressiert (z.B. I0.0 bis I0.7 für das erste Eingangsbyte). Q steht für Ausgänge."},{id:5,frage:"Was ist ein Funktionsbaustein (FB) im Vergleich zu einer Funktion (FC)?",optionen:["Ein FB hat ein Gedächtnis (Instanz-DB), eine FC nicht","Eine FC hat ein Gedächtnis, ein FB nicht","Beide sind identisch","FB ist schneller als FC"],richtig:0,erklaerung:"FBs haben einen zugehörigen Instanz-Datenbaustein (DB), der Zustände zwischen Aufrufen speichert. FCs haben kein statisches Gedächtnis."},{id:6,frage:"Was macht ein TON-Timer?",optionen:["Einschaltverzögerung: Ausgang nach Ablauf der Zeit = 1","Ausschaltverzögerung: Ausgang nach Ablauf der Zeit = 0","Gibt einen Puls aus","Zählt Impulse"],richtig:0,erklaerung:"TON (Timer On-Delay): Der Ausgang Q wird auf 1 gesetzt, wenn der Eingang IN für die eingestellte Zeit PT aktiv war."},{id:7,frage:"Was ist Profinet?",optionen:["Industrieller Ethernet-Standard von Siemens","Serielles Feldbus-Protokoll","SPS-Programmiersprache","Energiesparstandard"],richtig:0,erklaerung:"Profinet ist ein industrieller Ethernet-Standard (100 Mbit/s) für die Kommunikation zwischen SPS, I/O-Geräten und HMI."},{id:8,frage:"Welche Programmiersprache nach IEC 61131-3 ist textbasiert und ähnelt Pascal?",optionen:["SCL (Structured Control Language)","KOP (Kontaktplan)","FUP (Funktionsplan)","GRAPH (Ablaufsprache)"],richtig:0,erklaerung:"SCL (Structured Control Language) ist eine hochsprachliche Textsprache, ähnlich Pascal oder C. Ideal für komplexe Berechnungen."},{id:9,frage:"Was bewirkt eine SET-Spule --(S)-- im KOP?",optionen:["Setzt Bit dauerhaft auf 1 (auch wenn Bedingung wegfällt)","Setzt Bit nur wenn Bedingung aktiv ist","Setzt Bit auf 0","Startet einen Timer"],richtig:0,erklaerung:"Die SET-Spule setzt das zugeordnete Bit auf 1 und hält es dort, bis eine RESET-Spule es auf 0 setzt."},{id:10,frage:"Was ist die typische Zykluszeit einer industriellen SPS?",optionen:["1–50 ms","1–50 s","100–500 ms","< 0,1 ms"],richtig:0,erklaerung:"Typische SPS-Zykluszeiten liegen zwischen 1 und 50 ms. Zeitkritische Anwendungen (Safety, CNC) können < 1 ms erfordern."}]},pneumatik:{titel:"Pneumatik & Hydraulik Quiz",fragen:[{id:1,frage:"Welcher Betriebsdruck ist in der Pneumatik typisch?",optionen:["6–8 bar","0,5–1 bar","100–350 bar","10–20 bar"],richtig:0,erklaerung:"Pneumatische Anlagen arbeiten typischerweise bei 6–8 bar Betriebsdruck."},{id:2,frage:"Was bedeutet ein 5/2-Wegeventil?",optionen:["5 Anschlüsse, 2 Schaltstellungen","5 Ventile, 2 Drücke","5 bar, 2 Zylinder","Ventil für 2 Zylinder"],richtig:0,erklaerung:"5/2-Wegeventil: 5 Anschlüsse (1 Druck, 2 Arbeitsanschlüsse, 2 Entlüftungen), 2 Schaltstellungen."},{id:3,frage:"Welches Bauteil entfernt Wasser und Schmutz aus der Druckluft?",optionen:["Filter (F der FRL-Einheit)","Druckregler (R)","Öler (L)","Magnetventil"],richtig:0,erklaerung:"Der Filter (F) der FRL-Wartungseinheit entfernt Schmutz, Kondenswasser und Öl aus der Druckluft."},{id:4,frage:"Was ist der Unterschied zwischen einfach- und doppeltwirkendem Zylinder?",optionen:["Einfachwirkend: Feder zurück; Doppeltwirkend: Luft in beide Richtungen","Einfachwirkend: Mehr Kraft; Doppeltwirkend: schneller","Kein Unterschied","Einfachwirkend hat zwei Kolben"],richtig:0,erklaerung:"Einfachwirkend: Druckluft nur auf einer Seite, Rückstellung per Federkraft. Doppeltwirkend: Druckluft auf beide Seiten."},{id:5,frage:"Was beschreibt das Pascal'sche Prinzip in der Hydraulik?",optionen:["Druck pflanzt sich gleichmässig in alle Richtungen fort","Hydraulikdruck ist immer konstant","Flüssigkeit fliesst von hoch nach tief","Druck verdoppelt sich mit Temperatur"],richtig:0,erklaerung:"Das Pascalsche Prinzip: Druck in einer eingeschlossenen Flüssigkeit wirkt gleichmässig in alle Richtungen. Grundlage für hydraulische Kraftverstärkung."},{id:6,frage:"Welche Formel berechnet die Kraft eines Pneumatikzylinders?",optionen:["F = p × A × η","F = p / A","F = A / p","F = p + A"],richtig:0,erklaerung:"F = p × A × η (Kraft = Druck × Kolbenfläche × Wirkungsgrad). A = π × d² / 4."},{id:7,frage:"Welche Farbe hat der Druckluft-Anschluss (1/P) am Wegeventil nach ISO 5599?",optionen:["Rot","Blau","Schwarz","Gelb"],richtig:0,erklaerung:"Nach ISO 5599 ist Anschluss 1 (Versorgungsdruck/P) rot gekennzeichnet."},{id:8,frage:"Wozu dient ein Drosselrückschlagventil?",optionen:["Geschwindigkeitsregelung des Zylinders in einer Richtung","Notaus-Funktion","Druckbegrenzung","Luftfilterung"],richtig:0,erklaerung:"Drosselrückschlagventil: In einer Richtung gedrosselt (Geschwindigkeitsregelung), in der anderen Richtung freier Durchgang."},{id:9,frage:"Wie ist Druck definiert?",optionen:["p = F / A (Kraft pro Fläche)","p = A × F","p = F × A²","p = m × a"],richtig:0,erklaerung:"Druck p = F / A: Kraft [N] geteilt durch Fläche [m²], Einheit Pascal [Pa] oder bar."},{id:10,frage:"Was ist ein wesentlicher Vorteil der Hydraulik gegenüber Pneumatik?",optionen:["Sehr viel höhere Kräfte möglich (100–350 bar)","Günstigere Energiekosten","Keine Leckagegefahr","Schnellere Schaltzeiten"],richtig:0,erklaerung:"Hydraulik erlaubt durch sehr hohe Drücke (bis 350 bar) enorm grosse Kräfte bei kompakten Abmessungen."}]},antriebstechnik:{titel:"Antriebstechnik Quiz",fragen:[{id:1,frage:"Was ist die Synchrondrehzahl eines 4-poligen (2 Polpaare) Motors bei 50 Hz?",optionen:["1500 U/min","3000 U/min","750 U/min","1000 U/min"],richtig:0,erklaerung:"n_s = 60 × f / p = 60 × 50 / 2 = 1500 U/min. p = Polpaarzahl (bei 4 Polen = 2 Polpaare)."},{id:2,frage:"Was macht ein Frequenzumrichter?",optionen:["Regelt Drehzahl durch variable Ausgangsfrequenz","Erhöht die Netzspannung","Wandelt DC in AC um","Schützt Motor vor Übertemperatur"],richtig:0,erklaerung:"Ein FU wandelt Netzstrom (AC) in DC um und erzeugt daraus AC mit variabler Frequenz zur Drehzahlregelung."},{id:3,frage:"Wie lautet die Formel für das Nennmoment eines Motors?",optionen:["M_N = P_N × 9550 / n_N","M_N = P_N × n_N","M_N = U × I","M_N = P / U²"],richtig:0,erklaerung:"M_N [Nm] = P_N [kW] × 9550 / n_N [U/min]. Dies ist die Grundformel der Maschinendynamik."},{id:4,frage:"Was bedeutet Energieeffizienzklasse IE3?",optionen:["Premium-Effizienz (> 90% Wirkungsgrad)","Standard-Effizienz","Super-Premium-Effizienz","Mittlere Effizienz"],richtig:0,erklaerung:"IE3 = Premium Efficiency. In Europa seit 2015 für die meisten Motoren vorgeschrieben. Wirkungsgrad > 90%."},{id:5,frage:"Welcher Vorteil hat die Stern-Dreieck-Schaltung beim Anlauf?",optionen:["Anlaufstrom wird auf ca. 1/3 reduziert","Motor läuft mit Volldrehzahl sofort an","Energie wird gespart","Motor dreht in beide Richtungen"],richtig:0,erklaerung:"Im Stern-Anlauf liegt nur U/√3 = 230 V an den Wicklungen → Anlaufstrom ≈ 1/3 des Dreieck-Anlaufstroms."},{id:6,frage:"Was ist das Übersetzungsverhältnis i = 5 bei einem Getriebe?",optionen:["Abtriebsdrehzahl = Antriebsdrehzahl / 5, Moment × 5","Antriebsdrehzahl × 5, Moment / 5","Gleiche Drehzahl, 5× Moment","Beide × 5"],richtig:0,erklaerung:"i = n1/n2: Drehzahl sinkt (n2 = n1/5), Drehmoment steigt (M2 = M1 × i × η = M1 × 5 × η)."},{id:7,frage:"Was ist ein Schrittmotor?",optionen:["Motor mit diskreten Winkelschritten, ohne Encoder","Motor mit Encoder für Positionsregelung","Hydraulikmotor","Motor für Hochspannung"],richtig:0,erklaerung:"Schrittmotor: Bewegt sich in definierten Winkelschritten (z.B. 1,8° = 200 Schritte/U), kein Encoder nötig (open-loop)."},{id:8,frage:"Welcher Motortyp braucht zwingend einen Drehgeber (Encoder)?",optionen:["Servomotor (geregelter Antrieb)","Schrittmotor (open-loop)","Asynchronmotor (ungeregelt)","Gleichstrommotor"],richtig:0,erklaerung:"Servomotoren werden im geschlossenen Regelkreis betrieben und benötigen Lageerfassung durch Encoder oder Resolver."},{id:9,frage:"Welche Kupplung ist selbsthemmend (kann nicht zurückgetrieben werden)?",optionen:["Schneckengetriebe-Kupplung","Stirnradgetriebe","Elastische Kupplung","Magnetkupplung"],richtig:0,erklaerung:"Schneckengetriebe sind typischerweise selbsthemmend (bei kleinen Steigungswinkeln) – Abtrieb kann Antrieb nicht zurückdrehen."},{id:10,frage:"Was bewirkt ein Frequenzumrichter bei halber Nenndrehzahl bei einer Pumpe?",optionen:["Leistungsaufnahme sinkt auf ca. 1/8 (Affinsätzgesetze)","Leistungsaufnahme halbiert sich","Leistungsaufnahme bleibt gleich","Leistungsaufnahme steigt"],richtig:0,erklaerung:"Affine Gesetze: P ~ n³. Bei halber Drehzahl: P = P_N × (0,5)³ = P_N / 8. Enormes Einsparpotenzial!"}]},messtechnik:{titel:"Messtechnik Quiz",fragen:[{id:1,frage:"Was ist das Standardsignal für analoge Messumformer in der Industrie?",optionen:["4–20 mA","0–10 V","0–20 mA","±10 V"],richtig:0,erklaerung:"4-20 mA ist der Standard: 4 mA = Messbereichsanfang, 20 mA = Messbereichsende. Leitungsbruch erkennbar (Signal < 4 mA)."},{id:2,frage:"Welcher Sensor eignet sich für die Erkennung von Kunststoffteilen ohne Berührung?",optionen:["Kapazitiver Näherungsschalter","Induktiver Näherungsschalter","Drucktransmitter","Thermoelement"],richtig:0,erklaerung:"Kapazitiver Näherungsschalter erkennt alle Materialien (Metall, Kunststoff, Flüssigkeiten) über Kapazitätsänderung."},{id:3,frage:"Welchen Widerstand hat ein PT100 bei 0°C?",optionen:["100 Ω","1000 Ω","0 Ω","470 Ω"],richtig:0,erklaerung:"PT100 = Platin-Widerstandsthermometer mit 100 Ω bei 0°C. PT1000 hat 1000 Ω bei 0°C."},{id:4,frage:"Was ist ein induktiver Näherungsschalter?",optionen:["Erkennt metallische Objekte kontaktlos über Wirbelstrome","Misst Abstände mit Ultraschall","Schaltet bei Lichtunterbrechung","Misst Temperaturen"],richtig:0,erklaerung:"Induktiver Näherungsschalter: Das Spulenfeld erzeugt Wirbelströme im Metall, die das Feld dämpfen → Schaltung."},{id:5,frage:"Was bedeutet Messabweichung ±0,5% MBE bei einem 100 bar Drucktransmitter?",optionen:["Fehler von ±0,5 bar","Fehler von ±0,5%","Fehler von ±5 bar","Fehler von 0,5 Pa"],richtig:0,erklaerung:"±0,5% MBE (Messbereichsendwert): 0,5% von 100 bar = ±0,5 bar absoluter Fehler."},{id:6,frage:"Für welchen Temperaturbereich ist ein Typ-K Thermoelement geeignet?",optionen:["-200°C bis 1300°C","0°C bis 200°C","-50°C bis 400°C","0°C bis 50°C"],richtig:0,erklaerung:"Thermoelement Typ K (NiCr-Ni): -200°C bis +1300°C. Günstig, robust, in der Industrie am weitesten verbreitet."},{id:7,frage:"Was ist der Schutzgrad IP67?",optionen:["Staubdicht + Eintauchen bis 1m/30 min","Spritzwasser + staubgeschützt","Kein Schutz + Tropfwasserschutz","Vollständig wasserdicht + staubfrei"],richtig:0,erklaerung:"IP67: Erste Ziffer 6 = staubdicht, zweite Ziffer 7 = Schutz gegen Eintauchen (1 m, 30 min)."},{id:8,frage:"Was ist Hysterese bei einem Sensor?",optionen:["Unterschied zwischen Mess- und Rückschaltwert","Maximale Messabweichung","Reaktionszeit des Sensors","Drift über die Zeit"],richtig:0,erklaerung:"Hysterese: Unterschied zwischen dem Wert beim Ansteigen und beim Abfallen des Messsignals (z.B. bei Druckschaltern)."},{id:9,frage:"Welchen Ausgang haben die meisten industriellen digitalen Näherungsschalter?",optionen:["PNP Transistorausgang (24 V DC)","Relaisausgang","Spannungsausgang 0–10 V","Stromausgang 4–20 mA"],richtig:0,erklaerung:"Standard in der Industrie: PNP-Transistorausgang (schaltet 24 V DC). NPN ist möglich, PNP ist europäischer Standard."},{id:10,frage:"Was ist eine Messkette?",optionen:["Alle Komponenten vom Sensor bis zur Auswertung (SPS)","Eine Reihe von Messgeräten","Mehrere Sensoren in Reihe","Kalibriervorschrift"],richtig:0,erklaerung:"Messkette: Prozess → Sensor → Messumformer → Signal → Auswerteeinheit (SPS/PC). Jede Stufe kann Fehler einbringen."}]},mechanik:{titel:"Mechanik Quiz",fragen:[{id:1,frage:"Was bedeutet Festigkeitsklasse 8.8 bei einer Schraube?",optionen:["Zugfestigkeit 800 MPa, Streckgrenze 640 MPa","Gewinde M8, 8 mm Länge","Härtegrad 8","Anzugsmoment 8 Nm"],richtig:0,erklaerung:"Klasse 8.8: Zugfestigkeit = 8×100 = 800 MPa, Streckgrenze = 8×8×10 = 640 MPa."},{id:2,frage:"Was beschreibt eine Spielpassung (z.B. H7/f7)?",optionen:["Bohrung immer grösser als Welle → freies Spiel","Welle grösser als Bohrung → Presspassung","Gleich gross → Übergangspassung","Zufällig Spiel oder Überdeckung"],richtig:0,erklaerung:"Spielpassung: Die Bohrung ist immer grösser als die Welle. Die Teile können relativ leicht zusammen- und ausgebaut werden."},{id:3,frage:"Was beschreibt das Hookesche Gesetz?",optionen:["F = c × x (Federkraft proportional zur Auslenkung)","F = m × a","F = p × A","F = U × I"],richtig:0,erklaerung:"Hookesches Gesetz: Federkraft F [N] = Federkonstante c [N/mm] × Auslenkung x [mm]. Gilt im elastischen Bereich."},{id:4,frage:"Welche Genauigkeit hat eine Mikrometerschraube typischerweise?",optionen:["±0,01 mm","±0,5 mm","±0,1 mm","±1 mm"],richtig:0,erklaerung:"Eine Mikrometerschraube hat eine Messgenauigkeit von ±0,01 mm (10 µm). Besser als ein Messschieber (±0,05 mm)."},{id:5,frage:"Wie berechnet sich das Drehmoment M?",optionen:["M = F × r (Kraft × Hebelarm)","M = F / r","M = F × v","M = m × a × r²"],richtig:0,erklaerung:"Drehmoment M [Nm] = Kraft F [N] × Hebelarm r [m] (senkrechter Abstand zur Drehachse)."},{id:6,frage:"Warum soll ein Wälzlager NIE mit dem Hammer eingebaut werden?",optionen:["Schläge beschädigen Laufbahnen und Kugeln","Hammer ist zu schwach","Lager könnte rosten","Vorschrift ohne technischen Grund"],richtig:0,erklaerung:"Hammerschläge erzeugen Brinelling (Eindrücke in Laufbahnen durch Kugeln), was zu frühzeitigem Ausfall führt."},{id:7,frage:"Was ist ein wesentlicher Vorteil von Edelstahl V4A (1.4404) gegenüber V2A (1.4301)?",optionen:["Beständig gegen Chloride (Meerwasser, Chemikalien)","Höhere Festigkeit","Günstiger in der Herstellung","Besser schweissbar"],richtig:0,erklaerung:"V4A enthält Molybdän (Mo), das die Beständigkeit gegen Chloride (Meerwasser, Salze) erheblich verbessert."},{id:8,frage:"Was ist die Gewichtskraft einer Masse von 100 kg?",optionen:["981 N (≈ 1 kN)","100 N","9,81 N","10 000 N"],richtig:0,erklaerung:"G = m × g = 100 kg × 9,81 m/s² = 981 N ≈ 1 kN. Faustformel: 1 kg ≈ 10 N."},{id:9,frage:"Welcher Querschnitt hat Polyamid (PA) als Maschinenelement?",optionen:["Gleitlager und Zahnräder (selbstschmierend)","Strukturteile und Gehäuse","Dichtungen und O-Ringe","Elektrische Isolation"],richtig:0,erklaerung:"PA (Polyamid) hat gute Gleiteigenschaften und ist selbstschmierend, ideal für Gleitlager, Führungen und Zahnräder."},{id:10,frage:"Was bedeutet Toleranzfeld H7 bei einer Bohrung?",optionen:["Enge Toleranz, Nulllinie am Grundabmass, Standard-Passbohrung","Weite Toleranz mit Überdeckung","Enge Toleranz für Wellen","Zufällige Toleranz"],richtig:0,erklaerung:"H7: Grossbuchstabe = Bohrung, H bedeutet Grundabmass = 0 (Null oben), 7 = Toleranzgrad (eng). Standardbohrung für Passungen."}]},digitaltechnik:{titel:"Digitaltechnik Quiz",fragen:[{id:1,frage:"Was ist der Dezimalwert von Binärzahl 1010?",optionen:["10","5","12","8"],richtig:0,erklaerung:"1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10₁₀."},{id:2,frage:"Was ergibt 0xFF in Dezimal?",optionen:["255","16","256","128"],richtig:0,erklaerung:"0xFF: F=15, F=15. 15×16 + 15×1 = 240 + 15 = 255."},{id:3,frage:"Wann hat ein AND-Gatter mit 3 Eingängen Ausgang = 1?",optionen:["Wenn alle 3 Eingänge = 1 sind","Wenn mindestens 1 Eingang = 1","Wenn genau 2 Eingänge = 1","Wenn alle 3 = 0"],richtig:0,erklaerung:"AND: Ausgang = 1 nur wenn ALLE Eingänge = 1. Bei 3 Eingängen: A AND B AND C = 1."},{id:4,frage:"Wie viele verschiedene Kombinationen hat ein 4-Bit-Binärwort?",optionen:["16 (0–15)","8 (0–7)","32 (0–31)","4 (0–3)"],richtig:0,erklaerung:"4 Bits: 2⁴ = 16 Kombinationen (0000 bis 1111 = 0 bis 15)."},{id:5,frage:"Was besagt das De Morgansche Gesetz NOT(A AND B) = ?",optionen:["NOT A OR NOT B","NOT A AND NOT B","A OR B","NOT(A OR B)"],richtig:0,erklaerung:"De Morgan: NOT(A AND B) = NOT A OR NOT B. Entsprechend: NOT(A OR B) = NOT A AND NOT B."},{id:6,frage:"Was ist ein D-Flipflop?",optionen:["Übernimmt D-Eingang bei Taktflanke in den Ausgang","Gibt kontinuierlich D-Eingang aus","Invertiert D bei jedem Takt","Zähler mit D-Eingang"],richtig:0,erklaerung:"D-Flipflop: Bei steigender Taktflanke wird der D-Eingang als neuer Zustand Q gespeichert (Data-Flipflop)."},{id:7,frage:"Was ist ein NAND-Gatter?",optionen:["Negiertes AND: Ausgang = 0 nur wenn alle Eingänge = 1","Gatter mit n Eingängen","Gleiches wie AND","Nur 2 Eingänge erlaubt"],richtig:0,erklaerung:"NAND = NOT AND. Y = NOT(A AND B). Ausgang = 0 nur wenn ALLE Eingänge = 1, sonst = 1."},{id:8,frage:"Wie viele Bytes hat ein 16-Bit-Datenwort?",optionen:["2 Bytes","1 Byte","4 Bytes","8 Bytes"],richtig:0,erklaerung:"1 Byte = 8 Bit. 16 Bit / 8 Bit = 2 Bytes. In der SPS: Merkerwort MW10 = MB10 (High-Byte) + MB11 (Low-Byte)."},{id:9,frage:"Was unterscheidet ein Schaltnetz von einem Schaltwerk?",optionen:["Schaltwerk speichert Zustände (Flipflops), Schaltnetz nicht","Schaltnetz ist schneller","Schaltwerk hat mehr Eingänge","Kein Unterschied"],richtig:0,erklaerung:"Schaltnetz: Ausgang nur von aktuellen Eingängen abhängig. Schaltwerk: Ausgang hängt auch vom gespeicherten Zustand ab."},{id:10,frage:"Was ist XOR (Exklusives ODER)?",optionen:["Ausgang = 1 wenn Eingänge verschieden sind","Ausgang = 1 wenn beide Eingänge = 1","Ausgang = NOT(A OR B)","Ausgang immer = 1"],richtig:0,erklaerung:"XOR: Ausgang = 1 wenn Eingänge VERSCHIEDEN sind (A=0,B=1 oder A=1,B=0). Bei gleichen Eingängen: Ausgang = 0."}]},arbeitssicherheit:{titel:"Arbeitssicherheit Quiz",fragen:[{id:1,frage:"Was ist der erste Schritt der 5 Sicherheitsregeln beim Arbeiten an Elektroanlagen?",optionen:["Freischalten (Anlage stromlos machen)","Gegen Wiedereinschalten sichern","Spannungsfreiheit feststellen","Erden und Kurzschliessen"],richtig:0,erklaerung:"Reihenfolge: 1. Freischalten, 2. Gegen Wiedereinschalten sichern, 3. Spannungsfreiheit feststellen, 4. Erden und Kurzschliessen, 5. Abschranken."},{id:2,frage:"Welcher Fehlerstrom löst einen 30-mA FI-Schalter (Personenschutz) aus?",optionen:["≥ 30 mA Differenzstrom zwischen L und N","≥ 30 A Überstrom","≥ 300 mA","≥ 10 mA"],richtig:0,erklaerung:"FI-Schalter misst Differenz zwischen L- und N-Leiter. Bei Differenz ≥ 30 mA (Fehlerstrom) Auslösung in < 40 ms."},{id:3,frage:"Was bedeutet Schutzklasse II?",optionen:["Schutzisolierung (doppelte Isolierung), kein Schutzleiter","Geerdet mit Schutzleiter","Schutzkleinspannung < 50 V","Kein Berührungsschutz"],richtig:0,erklaerung:"Schutzklasse II: Schutzisolierung – doppelte oder verstärkte Isolierung ersetzt den Schutzleiter. Symbol: □ im Quadrat."},{id:4,frage:"Was bedeutet IP54?",optionen:["Staubgeschützt + Spritzwasserschutz","Staubdicht + Tauchschutz","Kein Staub- + kein Wasserschutz","Berührungsschutz + Regenschutz"],richtig:0,erklaerung:"IP54: Erste Ziffer 5 = staubgeschützt (nicht vollständig dicht), Zweite Ziffer 4 = Spritzwasserschutz aus allen Richtungen."},{id:5,frage:"Was ist bei einem Elektrounfall ALS ERSTES zu tun?",optionen:["Anlage freischalten und Selbstschutz sicherstellen","Sofort Person anfassen und wegziehen","Notruf 144 anrufen","Person mit Wasser kühlen"],richtig:0,erklaerung:"Selbstschutz zuerst! Niemals spannungsführende Person direkt anfassen. Erst Strom abschalten, dann helfen."},{id:6,frage:"Welcher Feuerlöscher ist für brennende Elektronik geeignet?",optionen:["CO₂-Löscher","Wasserlöscher","Schaumlöscher","ABC-Pulverlöscher"],richtig:0,erklaerung:"CO₂-Löscher hinterlässt keine Rückstände und ist elektrisch nicht leitfähig – ideal für Elektronik und Schaltschränke."},{id:7,frage:"Was ist die NIN in der Schweiz?",optionen:["Niederspannungs-Installations-Norm (Electrosuisse)","Norm für Industrienetzwerke","Vorschrift der SUVA","Normierung für Industrienormen"],richtig:0,erklaerung:"NIN = Niederspannungs-Installations-Norm. Herausgegeben von Electrosuisse, verbindlich für alle elektrischen Installationen in der Schweiz."},{id:8,frage:"Ab welchem Körperstrom beginnt Muskelkrampf (Loslassstrom)?",optionen:["> 10 mA (Wechselstrom)","> 50 mA","> 1 mA","> 100 mA"],richtig:0,erklaerung:"Bei Wechselstrom: ~1 mA spürbar, >10 mA Muskelkrampf (kann nicht loslassen!), >80 mA Herzkammerflimmern möglich."},{id:9,frage:"Was ist Brandklasse B?",optionen:["Flüssigkeitsbrand (Öl, Benzin, Lacke)","Feste Stoffe (Holz, Papier)","Gase (Propan, Erdgas)","Metallebrand (Magnesium)"],richtig:0,erklaerung:"Brandklasse B = Flüssigkeitsbrände und flüssig werdende Stoffe. Keinen Wasserlöscher verwenden! → Verpuffungsgefahr."},{id:10,frage:"Welche Schutzhandschuhe sind für Arbeiten unter 1000 V AC geeignet?",optionen:["Klasse 0 (bis 1000 V AC)","Klasse 00 (bis 500 V)","Klasse 1 (bis 7500 V)","Normale Arbeitshandschuhe"],richtig:0,erklaerung:"Isolierende Handschuhe Klasse 0: geprüft bis 1000 V AC / 1500 V DC. Für Niederspannungsarbeiten bis 1 kV."}]},elektriker:{titel:"Elektriker Grundlagen Quiz",fragen:[{id:1,frage:"Was bedeutet das Kürzel «-K1» in einem Stromlaufplan?",optionen:["Schütz oder Relais Nummer 1","Kabel Nummer 1","Klemme 1","Kondensator 1"],richtig:0,erklaerung:"Im BMK-System (Betriebsmittel-Kennzeichen) steht -K für Schütz oder Relais. -K1 ist das erste Schütz/Relais im Plan."},{id:2,frage:"Welche Farbe hat der Schutzleiter (PE) nach DIN VDE 0100?",optionen:["Grün-Gelb","Blau","Braun","Schwarz"],richtig:0,erklaerung:"Der Schutzleiter (PE – Protective Earth) ist immer grün-gelb gestreift. Blau = Neutralleiter N."},{id:3,frage:"Was ist der Unterschied zwischen Stromlaufplan und Installationsplan?",optionen:["Stromlaufplan zeigt Funktion, Installationsplan zeigt Kabelwege","Beide sind identisch","Installationsplan zeigt Funktion, Stromlaufplan zeigt Kabelwege","Nur Stromlaufplan ist normiert"],richtig:0,erklaerung:"Stromlaufplan (funktional): WIE funktioniert die Schaltung. Installationsplan (topografisch): WO werden Kabel verlegt."},{id:4,frage:"Welchen maximalen Strom kann ein 2,5 mm² Kupferkabel (Verlegeart B2) führen?",optionen:["ca. 20 A","ca. 10 A","ca. 32 A","ca. 40 A"],richtig:0,erklaerung:"2,5 mm² Kupfer, Verlegeart B2 (in Rohr in Wand): ca. 20 A. Faustformel: 1,5mm²=16A, 2,5mm²=20A, 4mm²=25A."},{id:5,frage:"Was bedeutet Auslösecharakteristik «C» bei einem Leitungsschutzschalter?",optionen:["Magnetische Auslösung bei 5–10× Nennstrom","Bei 3–5× Nennstrom","Bei 10–20× Nennstrom","Nur thermische Auslösung"],richtig:0,erklaerung:"C-Charakteristik: magnetische Auslösung bei 5–10× In. Standard für Motoren und Transformatoren (mässige Anlaufströme)."},{id:6,frage:"Was ist der Vorteil einer Federkraftklemme (z.B. WAGO) gegenüber einer Schraubklemme?",optionen:["Vibrationsfest, kein Nachziehen nötig, werkzeuglos","Günstiger in der Anschaffung","Für höhere Ströme geeignet","Einfacher zu lösen unter Last"],richtig:0,erklaerung:"Federkraftklemmen sind vibrationssicher (kein Lockern durch Vibrationen), schnell zu montieren und benötigen kein Werkzeug."},{id:7,frage:"Was zeigt ein Schaltplan im Hauptstromkreis?",optionen:["Den Leistungsfluss: Netz → Schutzschalter → Schütz → Motor","Nur die SPS-Eingänge und -Ausgänge","Die Kabelverlegung im Gebäude","Nur die Steuerlogik (Taster, Relais)"],richtig:0,erklaerung:"Hauptstromkreis = Leistungsteil mit dicken Linien, hohe Spannungen (400 V). Zeigt Leistungsfluss vom Netz bis zur Last."},{id:8,frage:"Welcher FI-Schutzschalter-Typ ist bei Frequenzumrichtern erforderlich?",optionen:["Typ B (erkennt auch glatte DC-Fehlerströme)","Typ A (Standard)","Typ F reicht immer","FI ist bei FU nicht nötig"],richtig:0,erklaerung:"Frequenzumrichter können glatte DC-Fehlerströme erzeugen, die Typ A nicht erkennt. Typ B oder Typ F (für FU) ist erforderlich."},{id:9,frage:"Was bedeutet IP54 bei einem Schaltschrank?",optionen:["Staubgeschützt + Spritzwasserschutz aus allen Richtungen","Staubdicht + Eintauchen","Vollständig dicht","Kein Berührungsschutz + Regenschutz"],richtig:0,erklaerung:"IP54: 5=staubgeschützt (kein vollständiger Staubschutz), 4=Spritzwasser aus allen Richtungen. Standard für Maschinen-Schaltschränke."},{id:10,frage:"Warum müssen Steuer- und Leistungskabel getrennt im Schaltschrank verlegt werden?",optionen:["EMV: Leistungskabel erzeugen Störfelder, die Steuersignale verfälschen","Zur besseren Übersicht","Wegen unterschiedlicher Kabelfarben","Nur Vorschrift ohne technischen Grund"],richtig:0,erklaerung:"Elektromagnetische Verträglichkeit (EMV): Leistungskabel mit schnell schaltenden Strömen induziieren Störspannungen in benachbarten Steuerleitungen."},{id:11,frage:"Was ist der Zweck der Selektivität bei Schutzeinrichtungen?",optionen:["Nur der betroffene Kreis schaltet ab, nicht übergeordnete Einspeisung","Alle Kreise schalten gleichzeitig ab","Schutzgeräte lösen nie aus","Schnellere Auslösung bei Fehler"],richtig:0,erklaerung:"Selektivität: Bei Fehler löst nur die dem Fehlerort nächste Schutzeinrichtung aus. Höhere Ebenen bleiben in Betrieb."},{id:12,frage:"Welche Prüfung ist vor der Inbetriebnahme einer elektrischen Anlage zwingend?",optionen:["Isolationsmessung (>1 MΩ) und Schutzleiterprüfung (<0,3 Ω)","Nur Sichtprüfung","Betriebstest unter Vollast","Nur FI-Test"],richtig:0,erklaerung:"Pflichtprüfungen nach NIN/VDE 0100: Durchgangsprüfung, Isolationswiderstand (>1 MΩ), Schutzleiterwiderstand (<0,3 Ω), FI-Auslösung."}]}};function Fg(){const{id:e}=Uc(),n=Ze.find(o=>o.id===e),t=Rg[e],{saveQuizScore:r,getQuizScore:i}=hr(),[l,s]=w.useState(0),[a,u]=w.useState(null),[c,p]=w.useState([]),[h,m]=w.useState(!1);if(!n||!t)return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12 text-center",children:[d.jsx("p",{className:"text-gray-500",children:"Quiz nicht gefunden."}),d.jsx(ue,{to:"/",className:"text-blue-600 hover:underline mt-4 block",children:"← Dashboard"})]});const k=t.fragen[l],v=Math.round((l+(a!==null?1:0))/t.fragen.length*100),y=o=>{a===null&&u(o)},b=()=>{const o=[...c,{correct:a===k.richtig}];if(l+1>=t.fragen.length){const f=o.filter(S=>S.correct).length;r(e,f,t.fragen.length),p(o),m(!0)}else p(o),s(f=>f+1),u(null)},g=()=>{s(0),u(null),p([]),m(!1)};if(h){const o=c.filter(S=>S.correct).length,f=Math.round(o/t.fragen.length*100);return i(e),d.jsx("div",{className:"max-w-2xl mx-auto px-4 py-12",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-8 text-center",children:[d.jsx("div",{className:"text-6xl mb-4",children:f>=80?"🏆":f>=60?"👍":"📚"}),d.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-2",children:"Quiz abgeschlossen!"}),d.jsxs("p",{className:"text-gray-500 mb-6",children:[n.icon," ",n.titel]}),d.jsxs("div",{className:"text-5xl font-bold text-blue-600 mb-2",children:[f,"%"]}),d.jsxs("p",{className:"text-gray-600 mb-8",children:[o," von ",t.fragen.length," Fragen richtig"]}),f>=80&&d.jsx("p",{className:"text-green-600 font-medium mb-4",children:"Ausgezeichnet! Du hast dieses Thema gut verstanden."}),f>=60&&f<80&&d.jsx("p",{className:"text-yellow-600 font-medium mb-4",children:"Gut gemacht! Wiederhole noch einige Lektionen."}),f<60&&d.jsx("p",{className:"text-red-600 font-medium mb-4",children:"Lerne die Lektionen nochmals durch und versuche es erneut."}),d.jsxs("div",{className:"flex gap-3 justify-center",children:[d.jsx("button",{onClick:g,className:"px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700",children:"Nochmals"}),d.jsx(ue,{to:`/module/${e}`,className:"px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50",children:"Lektionen wiederholen"}),d.jsx(ue,{to:"/",className:"px-6 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50",children:"Dashboard"})]})]})})}return d.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-6 text-sm text-gray-500",children:[d.jsx(ue,{to:"/",className:"hover:text-blue-600",children:"Dashboard"}),d.jsx("span",{children:"›"}),d.jsx(ue,{to:`/module/${e}`,className:"hover:text-blue-600",children:n.titel}),d.jsx("span",{children:"›"}),d.jsx("span",{children:"Quiz"})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[d.jsxs("div",{className:"bg-blue-600 px-6 py-4 text-white",children:[d.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[d.jsxs("span",{children:[n.icon," ",t.titel]}),d.jsxs("span",{children:["Frage ",l+1," / ",t.fragen.length]})]}),d.jsx("div",{className:"h-2 bg-blue-800 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-white rounded-full transition-all duration-500",style:{width:`${v}%`}})})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("h2",{className:"text-lg font-semibold text-gray-900 mb-6 leading-relaxed",children:k.frage}),d.jsx("div",{className:"space-y-3 mb-6",children:k.optionen.map((o,f)=>{let S="border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";return a!==null&&(f===k.richtig?S="border-green-500 bg-green-50":f===a&&a!==k.richtig?S="border-red-400 bg-red-50":S="border-gray-200 opacity-60"),d.jsxs("button",{onClick:()=>y(f),className:`w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm ${S}`,children:[d.jsxs("span",{className:"font-medium text-gray-500 mr-2",children:[String.fromCharCode(65+f),"."]}),o]},f)})}),a!==null&&d.jsxs("div",{className:`rounded-xl p-4 mb-4 text-sm ${a===k.richtig?"bg-green-50 border border-green-200":"bg-red-50 border border-red-200"}`,children:[d.jsx("p",{className:`font-semibold mb-1 ${a===k.richtig?"text-green-700":"text-red-700"}`,children:a===k.richtig?"✓ Richtig!":"✗ Falsch!"}),d.jsx("p",{className:"text-gray-700",children:k.erklaerung})]}),d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsxs("span",{className:"text-sm text-gray-400",children:[c.filter(o=>o.correct).length," richtig bisher"]}),d.jsx("button",{onClick:b,disabled:a===null,className:"px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium disabled:opacity-40 hover:bg-blue-700 transition-colors",children:l+1>=t.fragen.length?"Auswertung anzeigen":"Nächste Frage →"})]})]})]})]})}const Tg={blue:"bg-blue-500",green:"bg-green-500",cyan:"bg-cyan-500",orange:"bg-orange-500",purple:"bg-purple-500",red:"bg-red-500",indigo:"bg-indigo-500",yellow:"bg-yellow-500",teal:"bg-teal-500"},Lg=[{id:"elektro",label:"Elektro-Profi",icon:"⚡",moduleId:"elektrotechnik",threshold:80},{id:"sps",label:"SPS-Experte",icon:"🖥️",moduleId:"sps",threshold:80},{id:"pneumatik",label:"Pneumatik-Ass",icon:"💨",moduleId:"pneumatik",threshold:80},{id:"antrieb",label:"Antriebsprofi",icon:"⚙️",moduleId:"antriebstechnik",threshold:80},{id:"messen",label:"Meistermesser",icon:"📏",moduleId:"messtechnik",threshold:80},{id:"mechanik",label:"Mechanik-Meister",icon:"🔧",moduleId:"mechanik",threshold:80},{id:"digital",label:"Digitaltechniker",icon:"💻",moduleId:"digitaltechnik",threshold:80},{id:"sicherheit",label:"Sicherheitsprofi",icon:"🦺",moduleId:"arbeitssicherheit",threshold:80},{id:"elektriker",label:"Elektriker-Profi",icon:"🔌",moduleId:"elektriker",threshold:80}];function Wg(){const{getModuleProgress:e,getOverallStats:n,getQuizScore:t,resetProgress:r}=hr(),i=n(Ze),l=()=>{window.confirm("Gesamten Fortschritt zurücksetzen? Diese Aktion kann nicht rückgängig gemacht werden.")&&r()};return d.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-8",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Mein Fortschritt"}),d.jsx("button",{onClick:l,className:"text-sm text-red-500 hover:text-red-700 hover:underline",children:"Zurücksetzen"})]}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white mb-6",children:[d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"text-3xl font-bold",children:[i.lessonPercent,"%"]}),d.jsx("div",{className:"text-blue-200 text-sm",children:"Gesamtfortschritt"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-3xl font-bold",children:[i.completedLessons,"/",i.totalLessons]}),d.jsx("div",{className:"text-blue-200 text-sm",children:"Lektionen"})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"text-3xl font-bold",children:[i.quizCount,"/",Ze.length]}),d.jsx("div",{className:"text-blue-200 text-sm",children:"Quiz gemacht"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-3xl font-bold",children:i.quizCount>0?i.avgQuizScore+"%":"–"}),d.jsx("div",{className:"text-blue-200 text-sm",children:"Ø Quiz-Score"})]})]}),d.jsx("div",{className:"mt-4",children:d.jsx("div",{className:"h-3 bg-blue-900 rounded-full overflow-hidden",children:d.jsx("div",{className:"h-full bg-white rounded-full transition-all",style:{width:`${i.lessonPercent}%`}})})})]}),d.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Module im Detail"}),d.jsx("div",{className:"space-y-3 mb-8",children:Ze.map(s=>{const{completed:a,total:u,percent:c}=e(s.id,s.lektionen),p=t(s.id);return d.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"text-xl",children:s.icon}),d.jsx("span",{className:"font-medium text-gray-900",children:s.titel})]}),d.jsxs("div",{className:"flex items-center gap-3 text-sm text-gray-500",children:[d.jsxs("span",{children:[a,"/",u," Lektionen"]}),p&&d.jsxs("span",{className:`font-medium ${p.percent>=80?"text-green-600":p.percent>=60?"text-yellow-600":"text-red-500"}`,children:["Quiz: ",p.percent,"%"]})]})]}),d.jsx("div",{className:"h-2 bg-gray-100 rounded-full overflow-hidden",children:d.jsx("div",{className:`h-full rounded-full transition-all ${Tg[s.farbe]}`,style:{width:`${c}%`}})}),d.jsxs("div",{className:"flex gap-2 mt-3",children:[d.jsx(ue,{to:`/module/${s.id}`,className:"text-xs text-blue-600 hover:underline",children:"Lernen →"}),d.jsx("span",{className:"text-gray-300",children:"|"}),d.jsx(ue,{to:`/quiz/${s.id}`,className:"text-xs text-blue-600 hover:underline",children:"Quiz →"})]})]},s.id)})}),d.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-4",children:"Abzeichen"}),d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:Lg.map(s=>{const a=t(s.moduleId),u=a&&a.percent>=s.threshold;return d.jsxs("div",{className:`rounded-xl p-4 text-center border-2 ${u?"border-yellow-400 bg-yellow-50":"border-gray-200 bg-gray-50 opacity-50"}`,children:[d.jsx("div",{className:"text-3xl mb-1",children:s.icon}),d.jsx("div",{className:"text-xs font-medium text-gray-700",children:s.label}),u&&d.jsx("div",{className:"text-xs text-yellow-600 mt-1",children:"✓ Erreicht"}),!u&&d.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:["Quiz ≥ ",s.threshold,"%"]})]},s.id)})})]})}const Kg=[{id:1,modul:"elektrotechnik",vorderseite:"Ohmsches Gesetz",rueckseite:`U = R × I

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
20 × 0,87 × 0,70 = 12,2 A maximal!`}];function _g(){const[e,n]=w.useState("alle"),[t,r]=w.useState(!1),[i,l]=w.useState(0),[s,a]=w.useState("alle"),{markFlashcard:u,getFlashcardStatus:c}=hr(),p=Kg.filter(o=>{const f=e==="alle"||o.modul===e,S=s==="alle"||c(o.id)===s||s==="wiederholen"&&!c(o.id);return f&&S}),h=Math.min(i,Math.max(0,p.length-1)),m=p[h],k=()=>{r(!1),setTimeout(()=>l(o=>Math.min(p.length-1,o+1)),150)},v=()=>{r(!1),setTimeout(()=>l(o=>Math.max(0,o-1)),150)},y=o=>{m&&u(m.id,o),k()},b=p.filter(o=>c(o.id)==="known").length,g=p.filter(o=>c(o.id)!=="known").length;return d.jsxs("div",{className:"max-w-2xl mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Karteikarten"}),d.jsxs("div",{className:"flex flex-wrap gap-3 mb-6",children:[d.jsxs("select",{value:e,onChange:o=>{n(o.target.value),l(0),r(!1)},className:"px-3 py-2 border border-gray-200 rounded-xl text-sm bg-white",children:[d.jsx("option",{value:"alle",children:"Alle Module"}),Ze.map(o=>d.jsxs("option",{value:o.id,children:[o.icon," ",o.titel]},o.id))]}),d.jsx("div",{className:"flex rounded-xl overflow-hidden border border-gray-200",children:[{val:"alle",label:"Alle"},{val:"wiederholen",label:`Wiederholen (${g})`},{val:"known",label:`Gewusst (${b})`}].map(o=>d.jsx("button",{onClick:()=>{a(o.val),l(0),r(!1)},className:`px-3 py-2 text-sm transition-colors ${s===o.val?"bg-blue-600 text-white":"bg-white text-gray-600 hover:bg-gray-50"}`,children:o.label},o.val))})]}),p.length===0?d.jsxs("div",{className:"text-center py-12 text-gray-400",children:[d.jsx("div",{className:"text-4xl mb-3",children:"🎉"}),d.jsx("p",{children:"Keine Karteikarten für diese Auswahl."})]}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"flex justify-between text-sm text-gray-500 mb-3",children:[d.jsxs("span",{children:["Karte ",h+1," von ",p.length]}),d.jsxs("span",{children:["✓ ",b," gewusst · 🔄 ",g," wiederholen"]})]}),d.jsx("div",{className:"cursor-pointer mb-4",onClick:()=>r(o=>!o),style:{perspective:"1000px"},children:d.jsxs("div",{style:{transition:"transform 0.4s",transformStyle:"preserve-3d",transform:t?"rotateY(180deg)":"rotateY(0deg)",position:"relative",height:"220px"},children:[d.jsxs("div",{style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden"},className:"absolute inset-0 bg-blue-600 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white",children:[d.jsx("div",{className:"text-xs uppercase tracking-widest text-blue-200 mb-4",children:"Frage / Begriff"}),d.jsx("p",{className:"text-xl font-bold text-center",children:m==null?void 0:m.vorderseite}),d.jsx("div",{className:"text-xs text-blue-200 mt-6",children:"Klicken zum Umdrehen"})]}),d.jsxs("div",{style:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",transform:"rotateY(180deg)"},className:"absolute inset-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-blue-200",children:[d.jsx("div",{className:"text-xs uppercase tracking-widest text-blue-400 mb-4",children:"Antwort"}),d.jsx("pre",{className:"text-sm text-gray-800 font-sans text-center whitespace-pre-wrap leading-relaxed",children:m==null?void 0:m.rueckseite})]})]})}),d.jsxs("div",{className:"flex gap-2 justify-center mb-4",children:[d.jsx("button",{onClick:v,disabled:h===0,className:"px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50",children:"← Zurück"}),d.jsx("button",{onClick:k,disabled:h>=p.length-1,className:"px-4 py-2 border rounded-xl text-sm disabled:opacity-40 hover:bg-gray-50",children:"Weiter →"})]}),t&&d.jsxs("div",{className:"flex gap-3 justify-center",children:[d.jsx("button",{onClick:()=>y(!1),className:"flex-1 max-w-[160px] py-3 bg-red-100 text-red-700 rounded-xl font-medium text-sm hover:bg-red-200 transition-colors",children:"🔄 Wiederholen"}),d.jsx("button",{onClick:()=>y(!0),className:"flex-1 max-w-[160px] py-3 bg-green-100 text-green-700 rounded-xl font-medium text-sm hover:bg-green-200 transition-colors",children:"✓ Gewusst!"})]})]})]})}function Og(){return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(Dg,{}),d.jsx("main",{children:d.jsxs(vg,{children:[d.jsx(Vn,{path:"/",element:d.jsx(Ig,{})}),d.jsx(Vn,{path:"/module/:id",element:d.jsx(Bg,{})}),d.jsx(Vn,{path:"/quiz/:id",element:d.jsx(Fg,{})}),d.jsx(Vn,{path:"/fortschritt",element:d.jsx(Wg,{})}),d.jsx(Vn,{path:"/karteikarten",element:d.jsx(_g,{})})]})})]})}cl.createRoot(document.getElementById("root")).render(d.jsx(Iu.StrictMode,{children:d.jsx(xg,{children:d.jsx(Og,{})})}));
