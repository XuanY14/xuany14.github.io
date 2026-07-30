(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var $m={exports:{}},Gl={},Km={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),K_=Symbol.for("react.portal"),Z_=Symbol.for("react.fragment"),j_=Symbol.for("react.strict_mode"),Q_=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),ev=Symbol.for("react.context"),tv=Symbol.for("react.forward_ref"),nv=Symbol.for("react.suspense"),iv=Symbol.for("react.memo"),rv=Symbol.for("react.lazy"),Nh=Symbol.iterator;function sv(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jm=Object.assign,Qm={};function Gs(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Zm}Gs.prototype.isReactComponent={};Gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=Gs.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Zm}var rd=id.prototype=new Jm;rd.constructor=id;jm(rd,Gs.prototype);rd.isPureReactComponent=!0;var Ih=Array.isArray,e0=Object.prototype.hasOwnProperty,sd={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ka,type:t,key:s,ref:a,props:r,_owner:sd.current}}function av(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ov(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case K_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hc(a,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),qo(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=av(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ih(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+hc(s,o);a+=qo(s,e,n,l,r)}else if(l=sv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+hc(s,o++),a+=qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ro(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function lv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},$o={transition:null},cv={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:$o,ReactCurrentOwner:sd};function i0(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Gs;Ve.Fragment=Z_;Ve.Profiler=Q_;Ve.PureComponent=id;Ve.StrictMode=j_;Ve.Suspense=nv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cv;Ve.act=i0;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J_,_context:t},t.Consumer=t};Ve.createElement=n0;Ve.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:tv,render:t}};Ve.isValidElement=ad;Ve.lazy=function(t){return{$$typeof:rv,_payload:{_status:-1,_result:t},_init:lv}};Ve.memo=function(t,e){return{$$typeof:iv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};Ve.unstable_act=i0;Ve.useCallback=function(t,e){return un.current.useCallback(t,e)};Ve.useContext=function(t){return un.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return un.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return un.current.useEffect(t,e)};Ve.useId=function(){return un.current.useId()};Ve.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return un.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};Ve.useRef=function(t){return un.current.useRef(t)};Ve.useState=function(t){return un.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return un.current.useTransition()};Ve.version="18.3.1";Km.exports=Ve;var Dn=Km.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=Dn,fv=Symbol.for("react.element"),dv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,pv=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mv={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)hv.call(e,i)&&!mv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fv,type:t,key:s,ref:a,props:r,_owner:pv.current}}Gl.Fragment=dv;Gl.jsx=r0;Gl.jsxs=r0;$m.exports=Gl;var re=$m.exports,vu={},s0={exports:{}},Cn={},a0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var J=F.length;F.push(X);e:for(;0<J;){var te=J-1>>>1,oe=F[te];if(0<r(oe,X))F[te]=X,F[J]=oe,J=te;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],J=F.pop();if(J!==X){F[0]=J;e:for(var te=0,oe=F.length,He=oe>>>1;te<He;){var Je=2*(te+1)-1,Ye=F[Je],K=Je+1,ae=F[K];if(0>r(Ye,J))K<oe&&0>r(ae,Ye)?(F[te]=ae,F[K]=J,te=K):(F[te]=Ye,F[Je]=J,te=Je);else if(K<oe&&0>r(ae,J))F[te]=ae,F[K]=J,te=K;else break e}}return X}function r(F,X){var J=F.sortIndex-X.sortIndex;return J!==0?J:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=F)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function y(F){if(M=!1,S(F),!v)if(n(l)!==null)v=!0,$(T);else{var X=n(c);X!==null&&V(y,X.startTime-F)}}function T(F,X){v=!1,M&&(M=!1,f(g),g=-1),p=!0;var J=u;try{for(S(X),h=n(l);h!==null&&(!(h.expirationTime>X)||F&&!P());){var te=h.callback;if(typeof te=="function"){h.callback=null,u=h.priorityLevel;var oe=te(h.expirationTime<=X);X=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&i(l),S(X)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var Je=n(c);Je!==null&&V(y,Je.startTime-X),He=!1}return He}finally{h=null,u=J,p=!1}}var w=!1,R=null,g=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function N(){if(R!==null){var F=t.unstable_now();b=F;var X=!0;try{X=R(!0,F)}finally{X?W():(w=!1,R=null)}}else w=!1}var W;if(typeof m=="function")W=function(){m(N)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,k=Z.port2;Z.port1.onmessage=N,W=function(){k.postMessage(null)}}else W=function(){_(N,0)};function $(F){R=F,w||(w=!0,W())}function V(F,X){g=_(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,$(T))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(u){case 1:case 2:case 3:var X=3;break;default:X=u}var J=u;u=X;try{return F()}finally{u=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=u;u=F;try{return X()}finally{u=J}},t.unstable_scheduleCallback=function(F,X,J){var te=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?te+J:te):J=te,F){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=J+oe,F={id:d++,callback:X,priorityLevel:F,startTime:J,expirationTime:oe,sortIndex:-1},J>te?(F.sortIndex=J,e(c,F),n(l)===null&&F===n(c)&&(M?(f(g),g=-1):M=!0,V(y,J-te))):(F.sortIndex=oe,e(l,F),v||p||(v=!0,$(T))),F},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(F){var X=u;return function(){var J=u;u=X;try{return F.apply(this,arguments)}finally{u=J}}}})(o0);a0.exports=o0;var gv=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=Dn,Rn=gv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Ca={};function Gr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Ca[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},Oh={};function xv(t){return xu.call(Oh,t)?!0:xu.call(Fh,t)?!1:vv.test(t)?Oh[t]=!0:(Fh[t]=!0,!1)}function yv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sv(t,e,n,i){if(e===null||typeof e>"u"||yv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ld);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ld);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ld);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sv(e,n,r,i)&&(n=null),i||r===null?xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Bi=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),f0=Symbol.for("react.offscreen"),kh=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,pc;function ua(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function Mv(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case fs:return"Portal";case yu:return"Profiler";case ud:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function Ev(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function d0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wv(t){var e=d0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=wv(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=d0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Tu(t,e){p0(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fa=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(fa(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function m0(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,_0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tv=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){Tv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function v0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function x0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Av=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(Av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,ws=null,Ts=null;function Gh(t){if(t=Qa(t)){if(typeof Du!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=$l(e),Du(t.stateNode,t.type,e))}}function y0(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function S0(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function M0(t,e){return t(e)}function E0(){}var _c=!1;function w0(t,e,n){if(_c)return t(e,n);_c=!0;try{return M0(t,e,n)}finally{_c=!1,(ws!==null||Ts!==null)&&(E0(),S0())}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Nu=!1;if(Di)try{var js={};Object.defineProperty(js,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Nu=!1}function Rv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var _a=!1,dl=null,hl=!1,Iu=null,Cv={onError:function(t){_a=!0,dl=t}};function bv(t,e,n,i,r,s,a,o,l){_a=!1,dl=null,Rv.apply(Cv,arguments)}function Pv(t,e,n,i,r,s,a,o,l){if(bv.apply(this,arguments),_a){if(_a){var c=dl;_a=!1,dl=null}else throw Error(ne(198));hl||(hl=!0,Iu=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Wr(t)!==t)throw Error(ne(188))}function Lv(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function A0(t){return t=Lv(t),t!==null?R0(t):null}function R0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=R0(t);if(e!==null)return e;t=t.sibling}return null}var C0=Rn.unstable_scheduleCallback,Xh=Rn.unstable_cancelCallback,Dv=Rn.unstable_shouldYield,Nv=Rn.unstable_requestPaint,Rt=Rn.unstable_now,Iv=Rn.unstable_getCurrentPriorityLevel,pd=Rn.unstable_ImmediatePriority,b0=Rn.unstable_UserBlockingPriority,pl=Rn.unstable_NormalPriority,Uv=Rn.unstable_LowPriority,P0=Rn.unstable_IdlePriority,Wl=null,hi=null;function Fv(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Bv,Ov=Math.log,kv=Math.LN2;function Bv(t){return t>>>=0,t===0?32:31-(Ov(t)/kv|0)|0}var lo=64,co=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=da(o):(s&=a,s!==0&&(i=da(s)))}else a=n&~r,a!==0?i=da(a):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function zv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=zv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L0(){var t=lo;return lo<<=1,!(lo&4194240)&&(lo=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Za(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function Hv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function D0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N0,gd,I0,U0,F0,Fu=!1,uo=[],rr=null,sr=null,ar=null,La=new Map,Da=new Map,Qi=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Wv(t,e,n,i,r){switch(e){case"focusin":return rr=Qs(rr,t,e,n,i,r),!0;case"dragenter":return sr=Qs(sr,t,e,n,i,r),!0;case"mouseover":return ar=Qs(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return La.set(s,Qs(La.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Qs(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function O0(t){var e=br(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=T0(n),e!==null){t.blockedOn=e,F0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=Qa(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function qh(t,e,n){Ko(t)&&n.delete(e)}function Xv(){Fu=!1,rr!==null&&Ko(rr)&&(rr=null),sr!==null&&Ko(sr)&&(sr=null),ar!==null&&Ko(ar)&&(ar=null),La.forEach(qh),Da.forEach(qh)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,Xv)))}function Na(t){function e(r){return Js(r,t)}if(0<uo.length){Js(uo[0],t);for(var n=1;n<uo.length;n++){var i=uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&Js(rr,t),sr!==null&&Js(sr,t),ar!==null&&Js(ar,t),La.forEach(e),Da.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&Qi.shift()}var As=Bi.ReactCurrentBatchConfig,gl=!0;function Yv(t,e,n,i){var r=nt,s=As.transition;As.transition=null;try{nt=1,_d(t,e,n,i)}finally{nt=r,As.transition=s}}function qv(t,e,n,i){var r=nt,s=As.transition;As.transition=null;try{nt=4,_d(t,e,n,i)}finally{nt=r,As.transition=s}}function _d(t,e,n,i){if(gl){var r=Ou(t,e,n,i);if(r===null)Cc(t,e,i,_l,n),Yh(t,i);else if(Wv(r,t,e,n,i))i.stopPropagation();else if(Yh(t,i),e&4&&-1<Gv.indexOf(t)){for(;r!==null;){var s=Qa(r);if(s!==null&&N0(s),s=Ou(t,e,n,i),s===null&&Cc(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var _l=null;function Ou(t,e,n,i){if(_l=null,t=hd(i),t=br(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iv()){case pd:return 1;case b0:return 4;case pl:case Uv:return 16;case P0:return 536870912;default:return 16}default:return 16}}var tr=null,vd=null,Zo=null;function B0(){if(Zo)return Zo;var t,e=vd,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function $h(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fo:$h,this.isPropagationStopped=$h,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=bn(Ws),ja=vt({},Ws,{view:0,detail:0}),$v=bn(ja),xc,yc,ea,Xl=vt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(xc=t.screenX-ea.screenX,yc=t.screenY-ea.screenY):yc=xc=0,ea=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Kh=bn(Xl),Kv=vt({},Xl,{dataTransfer:0}),Zv=bn(Kv),jv=vt({},ja,{relatedTarget:0}),Sc=bn(jv),Qv=vt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Jv=bn(Qv),ex=vt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=bn(ex),nx=vt({},Ws,{data:0}),Zh=bn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function yd(){return ax}var ox=vt({},ja,{key:function(t){if(t.key){var e=ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=bn(ox),cx=vt({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=bn(cx),ux=vt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),fx=bn(ux),dx=vt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=bn(dx),px=vt({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=bn(px),gx=[9,13,27,32],Sd=Di&&"CompositionEvent"in window,va=null;Di&&"documentMode"in document&&(va=document.documentMode);var _x=Di&&"TextEvent"in window&&!va,z0=Di&&(!Sd||va&&8<va&&11>=va),Qh=" ",Jh=!1;function V0(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function vx(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(Jh=!0,Qh);case"textInput":return t=e.data,t===Qh&&Jh?null:t;default:return null}}function xx(t,e){if(hs)return t==="compositionend"||!Sd&&V0(t,e)?(t=B0(),Zo=vd=tr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yx[t.type]:e==="textarea"}function G0(t,e,n,i){y0(i),e=vl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Ia=null;function Sx(t){eg(t,0)}function Yl(t){var e=gs(t);if(h0(e))return t}function Mx(t,e){if(t==="change")return e}var W0=!1;if(Di){var Mc;if(Di){var Ec="oninput"in document;if(!Ec){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Ec=typeof tp.oninput=="function"}Mc=Ec}else Mc=!1;W0=Mc&&(!document.documentMode||9<document.documentMode)}function np(){xa&&(xa.detachEvent("onpropertychange",X0),Ia=xa=null)}function X0(t){if(t.propertyName==="value"&&Yl(Ia)){var e=[];G0(e,Ia,t,hd(t)),w0(Sx,e)}}function Ex(t,e,n){t==="focusin"?(np(),xa=e,Ia=n,xa.attachEvent("onpropertychange",X0)):t==="focusout"&&np()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Ia)}function Tx(t,e){if(t==="click")return Yl(e)}function Ax(t,e){if(t==="input"||t==="change")return Yl(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Rx;function Ua(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function Y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cx(t){var e=q0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Y0(n.ownerDocument.documentElement,n)){if(i!==null&&Md(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var a=rp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bx=Di&&"documentMode"in document&&11>=document.documentMode,ps=null,ku=null,ya=null,Bu=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||ps==null||ps!==fl(i)||(i=ps,"selectionStart"in i&&Md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&Ua(ya,i)||(ya=i,i=vl(ku,"onSelect"),0<i.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function ho(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},wc={},$0={};Di&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function ql(t){if(wc[t])return wc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $0)return wc[t]=e[n];return t}var K0=ql("animationend"),Z0=ql("animationiteration"),j0=ql("animationstart"),Q0=ql("transitionend"),J0=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){J0.set(t,e),Gr(e,[t])}for(var Tc=0;Tc<ap.length;Tc++){var Ac=ap[Tc],Px=Ac.toLowerCase(),Lx=Ac[0].toUpperCase()+Ac.slice(1);mr(Px,"on"+Lx)}mr(K0,"onAnimationEnd");mr(Z0,"onAnimationIteration");mr(j0,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Q0,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function op(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Pv(i,e,void 0,t),t.currentTarget=null}function eg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;op(r,o,c),s=l}}}if(hl)throw t=Iu,hl=!1,Iu=null,t}function ut(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(tg(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),tg(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[po]){t[po]=!0,l0.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Rc("selectionchange",!1,e))}}function tg(t,e,n,i){switch(k0(e)){case 1:var r=Yv;break;case 4:r=qv;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=br(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}w0(function(){var c=s,d=hd(n),h=[];e:{var u=J0.get(t);if(u!==void 0){var p=xd,v=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":p=lx;break;case"focusin":v="focus",p=Sc;break;case"focusout":v="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fx;break;case K0:case Z0:case j0:p=Jv;break;case Q0:p=hx;break;case"scroll":p=$v;break;case"wheel":p=mx;break;case"copy":case"cut":case"paste":p=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jh}var M=(e&4)!==0,_=!M&&t==="scroll",f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,S;m!==null;){S=m;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,f!==null&&(y=Pa(m,f),y!=null&&M.push(Oa(m,y,S)))),_)break;m=m.return}0<M.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Lu&&(v=n.relatedTarget||n.fromElement)&&(br(v)||v[Ni]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?br(v):null,v!==null&&(_=Wr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(M=Kh,y="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=jh,y="onPointerLeave",f="onPointerEnter",m="pointer"),_=p==null?u:gs(p),S=v==null?u:gs(v),u=new M(y,m+"leave",p,n,d),u.target=_,u.relatedTarget=S,y=null,br(d)===c&&(M=new M(f,m+"enter",v,n,d),M.target=S,M.relatedTarget=_,y=M),_=y,p&&v)t:{for(M=p,f=v,m=0,S=M;S;S=qr(S))m++;for(S=0,y=f;y;y=qr(y))S++;for(;0<m-S;)M=qr(M),m--;for(;0<S-m;)f=qr(f),S--;for(;m--;){if(M===f||f!==null&&M===f.alternate)break t;M=qr(M),f=qr(f)}M=null}else M=null;p!==null&&lp(h,u,p,M,!1),v!==null&&_!==null&&lp(h,_,v,M,!0)}}e:{if(u=c?gs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=Mx;else if(ep(u))if(W0)T=Ax;else{T=wx;var w=Ex}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=Tx);if(T&&(T=T(t,c))){G0(h,T,n,d);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&Au(u,"number",u.value)}switch(w=c?gs(c):window,t){case"focusin":(ep(w)||w.contentEditable==="true")&&(ps=w,ku=c,ya=null);break;case"focusout":ya=ku=ps=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,sp(h,n,d);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":sp(h,n,d)}var R;if(Sd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else hs?V0(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(z0&&n.locale!=="ko"&&(hs||g!=="onCompositionStart"?g==="onCompositionEnd"&&hs&&(R=B0()):(tr=d,vd="value"in tr?tr.value:tr.textContent,hs=!0)),w=vl(c,g),0<w.length&&(g=new Zh(g,t,null,n,d),h.push({event:g,listeners:w}),R?g.data=R:(R=H0(n),R!==null&&(g.data=R)))),(R=_x?vx(t,n):xx(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(d=new Zh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=R))}eg(h,e)})}function Oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pa(t,n),s!=null&&i.unshift(Oa(t,s,r)),s=Pa(t,e),s!=null&&i.push(Oa(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Pa(n,s),l!=null&&a.unshift(Oa(n,l,o))):r||(l=Pa(n,s),l!=null&&a.push(Oa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Nx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(Nx,`
`).replace(Ix,"")}function mo(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(ne(425))}function xl(){}var zu=null,Vu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(Ox)}:Gu;function Ox(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),ci="__reactFiber$"+Xs,ka="__reactProps$"+Xs,Ni="__reactContainer$"+Xs,Wu="__reactEvents$"+Xs,kx="__reactListeners$"+Xs,Bx="__reactHandles$"+Xs;function br(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[ci])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[ci]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function $l(t){return t[ka]||null}var Xu=[],_s=-1;function gr(t){return{current:t}}function ft(t){0>_s||(t.current=Xu[_s],Xu[_s]=null,_s--)}function ct(t,e){_s++,Xu[_s]=t.current,t.current=e}var hr={},nn=gr(hr),gn=gr(!1),Fr=hr;function Ns(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function yl(){ft(gn),ft(nn)}function dp(t,e,n){if(nn.current!==hr)throw Error(ne(168));ct(nn,e),ct(gn,n)}function ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Ev(t)||"Unknown",r));return vt({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Fr=nn.current,ct(nn,t),ct(gn,gn.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=ng(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,ft(gn),ft(nn),ct(nn,t)):ft(gn),ct(gn,n)}var wi=null,Kl=!1,Pc=!1;function ig(t){wi===null?wi=[t]:wi.push(t)}function zx(t){Kl=!0,ig(t)}function _r(){if(!Pc&&wi!==null){Pc=!0;var t=0,e=nt;try{var n=wi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}wi=null,Kl=!1}catch(r){throw wi!==null&&(wi=wi.slice(t+1)),C0(pd,_r),r}finally{nt=e,Pc=!1}}return null}var vs=[],xs=0,Ml=null,El=0,In=[],Un=0,Or=null,Ai=1,Ri="";function wr(t,e){vs[xs++]=El,vs[xs++]=Ml,Ml=t,El=e}function rg(t,e,n){In[Un++]=Ai,In[Un++]=Ri,In[Un++]=Or,Or=t;var i=Ai;t=Ri;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ai=1<<32-Kn(e)+r|n<<r|i,Ri=s+t}else Ai=1<<s|n<<r|i,Ri=t}function Ed(t){t.return!==null&&(wr(t,1),rg(t,1,0))}function wd(t){for(;t===Ml;)Ml=vs[--xs],vs[xs]=null,El=vs[--xs],vs[xs]=null;for(;t===Or;)Or=In[--Un],In[Un]=null,Ri=In[--Un],In[Un]=null,Ai=In[--Un],In[Un]=null}var An=null,Tn=null,dt=!1,Yn=null;function sg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ai,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(dt){var e=Tn;if(e){var n=e;if(!pp(t,e)){if(Yu(t))throw Error(ne(418));e=or(n.nextSibling);var i=An;e&&pp(t,e)?sg(i,n):(t.flags=t.flags&-4097|2,dt=!1,An=t)}}else{if(Yu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,An=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function go(t){if(t!==An)return!1;if(!dt)return mp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=Tn)){if(Yu(t))throw ag(),Error(ne(418));for(;e;)sg(t,e),e=or(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?or(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=Tn;t;)t=or(t.nextSibling)}function Is(){Tn=An=null,dt=!1}function Td(t){Yn===null?Yn=[t]:Yn.push(t)}var Vx=Bi.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function og(t){function e(f,m){if(t){var S=f.deletions;S===null?(f.deletions=[m],f.flags|=16):S.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=fr(f,m),f.index=0,f.sibling=null,f}function s(f,m,S){return f.index=S,t?(S=f.alternate,S!==null?(S=S.index,S<m?(f.flags|=2,m):S):(f.flags|=2,m)):(f.flags|=1048576,m)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,m,S,y){return m===null||m.tag!==6?(m=Oc(S,f.mode,y),m.return=f,m):(m=r(m,S),m.return=f,m)}function l(f,m,S,y){var T=S.type;return T===ds?d(f,m,S.props.children,y,S.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&gp(T)===m.type)?(y=r(m,S.props),y.ref=ta(f,m,S),y.return=f,y):(y=rl(S.type,S.key,S.props,null,f.mode,y),y.ref=ta(f,m,S),y.return=f,y)}function c(f,m,S,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=kc(S,f.mode,y),m.return=f,m):(m=r(m,S.children||[]),m.return=f,m)}function d(f,m,S,y,T){return m===null||m.tag!==7?(m=Ur(S,f.mode,y,T),m.return=f,m):(m=r(m,S),m.return=f,m)}function h(f,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Oc(""+m,f.mode,S),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return S=rl(m.type,m.key,m.props,null,f.mode,S),S.ref=ta(f,null,m),S.return=f,S;case fs:return m=kc(m,f.mode,S),m.return=f,m;case Zi:var y=m._init;return h(f,y(m._payload),S)}if(fa(m)||Zs(m))return m=Ur(m,f.mode,S,null),m.return=f,m;_o(f,m)}return null}function u(f,m,S,y){var T=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return T!==null?null:o(f,m,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case so:return S.key===T?l(f,m,S,y):null;case fs:return S.key===T?c(f,m,S,y):null;case Zi:return T=S._init,u(f,m,T(S._payload),y)}if(fa(S)||Zs(S))return T!==null?null:d(f,m,S,y,null);_o(f,S)}return null}function p(f,m,S,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(S)||null,o(m,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case so:return f=f.get(y.key===null?S:y.key)||null,l(m,f,y,T);case fs:return f=f.get(y.key===null?S:y.key)||null,c(m,f,y,T);case Zi:var w=y._init;return p(f,m,S,w(y._payload),T)}if(fa(y)||Zs(y))return f=f.get(S)||null,d(m,f,y,T,null);_o(m,y)}return null}function v(f,m,S,y){for(var T=null,w=null,R=m,g=m=0,A=null;R!==null&&g<S.length;g++){R.index>g?(A=R,R=null):A=R.sibling;var b=u(f,R,S[g],y);if(b===null){R===null&&(R=A);break}t&&R&&b.alternate===null&&e(f,R),m=s(b,m,g),w===null?T=b:w.sibling=b,w=b,R=A}if(g===S.length)return n(f,R),dt&&wr(f,g),T;if(R===null){for(;g<S.length;g++)R=h(f,S[g],y),R!==null&&(m=s(R,m,g),w===null?T=R:w.sibling=R,w=R);return dt&&wr(f,g),T}for(R=i(f,R);g<S.length;g++)A=p(R,f,g,S[g],y),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?g:A.key),m=s(A,m,g),w===null?T=A:w.sibling=A,w=A);return t&&R.forEach(function(P){return e(f,P)}),dt&&wr(f,g),T}function M(f,m,S,y){var T=Zs(S);if(typeof T!="function")throw Error(ne(150));if(S=T.call(S),S==null)throw Error(ne(151));for(var w=T=null,R=m,g=m=0,A=null,b=S.next();R!==null&&!b.done;g++,b=S.next()){R.index>g?(A=R,R=null):A=R.sibling;var P=u(f,R,b.value,y);if(P===null){R===null&&(R=A);break}t&&R&&P.alternate===null&&e(f,R),m=s(P,m,g),w===null?T=P:w.sibling=P,w=P,R=A}if(b.done)return n(f,R),dt&&wr(f,g),T;if(R===null){for(;!b.done;g++,b=S.next())b=h(f,b.value,y),b!==null&&(m=s(b,m,g),w===null?T=b:w.sibling=b,w=b);return dt&&wr(f,g),T}for(R=i(f,R);!b.done;g++,b=S.next())b=p(R,f,g,b.value,y),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?g:b.key),m=s(b,m,g),w===null?T=b:w.sibling=b,w=b);return t&&R.forEach(function(N){return e(f,N)}),dt&&wr(f,g),T}function _(f,m,S,y){if(typeof S=="object"&&S!==null&&S.type===ds&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case so:e:{for(var T=S.key,w=m;w!==null;){if(w.key===T){if(T=S.type,T===ds){if(w.tag===7){n(f,w.sibling),m=r(w,S.props.children),m.return=f,f=m;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&gp(T)===w.type){n(f,w.sibling),m=r(w,S.props),m.ref=ta(f,w,S),m.return=f,f=m;break e}n(f,w);break}else e(f,w);w=w.sibling}S.type===ds?(m=Ur(S.props.children,f.mode,y,S.key),m.return=f,f=m):(y=rl(S.type,S.key,S.props,null,f.mode,y),y.ref=ta(f,m,S),y.return=f,f=y)}return a(f);case fs:e:{for(w=S.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(f,m.sibling),m=r(m,S.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=kc(S,f.mode,y),m.return=f,f=m}return a(f);case Zi:return w=S._init,_(f,m,w(S._payload),y)}if(fa(S))return v(f,m,S,y);if(Zs(S))return M(f,m,S,y);_o(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,S),m.return=f,f=m):(n(f,m),m=Oc(S,f.mode,y),m.return=f,f=m),a(f)):n(f,m)}return _}var Us=og(!0),lg=og(!1),wl=gr(null),Tl=null,ys=null,Ad=null;function Rd(){Ad=ys=Tl=null}function Cd(t){var e=wl.current;ft(wl),t._currentValue=e}function $u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Tl=t,Ad=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Tl===null)throw Error(ne(308));ys=t,Tl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Pr=null;function bd(t){Pr===null?Pr=[t]:Pr.push(t)}function cg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}function _p(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var u=o.lane,p=o.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(u=e,p=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){h=v.call(p,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(p,h,u):v,u==null)break e;h=vt({},h,u);break e;case 2:ji=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[o]:u.push(o))}else p={eventTime:p,lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=u;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;u=o,o=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=a,t.lanes=a,t.memoizedState=h}}function vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Ja={},pi=gr(Ja),Ba=gr(Ja),za=gr(Ja);function Lr(t){if(t===Ja)throw Error(ne(174));return t}function Ld(t,e){switch(ct(za,e),ct(Ba,t),ct(pi,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}ft(pi),ct(pi,e)}function Fs(){ft(pi),ft(Ba),ft(za)}function fg(t){Lr(za.current);var e=Lr(pi.current),n=Cu(e,t.type);e!==n&&(ct(Ba,t),ct(pi,n))}function Dd(t){Ba.current===t&&(ft(pi),ft(Ba))}var mt=gr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function Nd(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Jo=Bi.ReactCurrentDispatcher,Dc=Bi.ReactCurrentBatchConfig,kr=0,_t=null,It=null,zt=null,Cl=!1,Sa=!1,Va=0,Hx=0;function Kt(){throw Error(ne(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Ud(t,e,n,i,r,s){if(kr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?Yx:qx,t=n(i,r),Sa){s=0;do{if(Sa=!1,Va=0,25<=s)throw Error(ne(301));s+=1,zt=It=null,e.updateQueue=null,Jo.current=$x,t=n(i,r)}while(Sa)}if(Jo.current=bl,e=It!==null&&It.next!==null,kr=0,zt=It=_t=null,Cl=!1,e)throw Error(ne(300));return t}function Fd(){var t=Va!==0;return Va=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?_t.memoizedState=zt=t:zt=zt.next=t,zt}function Bn(){if(It===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?_t.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(ne(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?_t.memoizedState=zt=t:zt=zt.next=t}return zt}function Ha(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((kr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,_t.lanes|=d,Br|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Qn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function dg(){}function hg(t,e){var n=_t,i=Bn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Od(gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Ga(9,mg.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ne(349));kr&30||pg(n,e,r)}return r}function pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mg(t,e,n,i){e.value=n,e.getSnapshot=i,_g(e)&&vg(t)}function gg(t,e,n){return n(function(){_g(e)&&vg(t)})}function _g(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function vg(t){var e=Ii(t,1);e!==null&&Zn(e,t,1,-1)}function xp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,_t,t),[e.memoizedState,t]}function Ga(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function xg(){return Bn().memoizedState}function el(t,e,n,i){var r=oi();_t.flags|=t,r.memoizedState=Ga(1|e,n,void 0,i===void 0?null:i)}function Zl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=Ga(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Ga(1|e,n,s,i)}function yp(t,e){return el(8390656,8,t,e)}function Od(t,e){return Zl(2048,8,t,e)}function yg(t,e){return Zl(4,2,t,e)}function Sg(t,e){return Zl(4,4,t,e)}function Mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eg(t,e,n){return n=n!=null?n.concat([t]):null,Zl(4,4,Mg.bind(null,e,t),n)}function kd(){}function wg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ag(t,e,n){return kr&21?(Qn(n,e)||(n=L0(),_t.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function Gx(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{nt=n,Dc.transition=i}}function Rg(){return Bn().memoizedState}function Wx(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))bg(e,n);else if(n=cg(t,e,n,i),n!==null){var r=ln();Zn(n,t,i,r),Pg(n,e,i)}}function Xx(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))bg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cg(t,e,r,i),n!==null&&(r=ln(),Zn(n,t,i,r),Pg(n,e,i))}}function Cg(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function bg(t,e){Sa=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}var bl={readContext:kn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Yx={readContext:kn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,Mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wx.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:kd,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=Gx.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=oi();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Vt===null)throw Error(ne(349));kr&30||pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(gg.bind(null,i,s,t),[t]),i.flags|=2048,Ga(9,mg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Vt.identifierPrefix;if(dt){var n=Ri,i=Ai;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qx={readContext:kn,useCallback:wg,useContext:kn,useEffect:Od,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Nc,useRef:xg,useState:function(){return Nc(Ha)},useDebugValue:kd,useDeferredValue:function(t){var e=Bn();return Ag(e,It.memoizedState,t)},useTransition:function(){var t=Nc(Ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:Rg,unstable_isNewReconciler:!1},$x={readContext:kn,useCallback:wg,useContext:kn,useEffect:Od,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Ic,useRef:xg,useState:function(){return Ic(Ha)},useDebugValue:kd,useDeferredValue:function(t){var e=Bn();return It===null?e.memoizedState=t:Ag(e,It.memoizedState,t)},useTransition:function(){var t=Ic(Ha)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:dg,useSyncExternalStore:hg,useId:Rg,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ur(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Zn(e,t,r,i),Qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=ur(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Zn(e,t,r,i),Qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=ur(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Zn(e,t,i,n),Qo(e,t,i))}};function Sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,i)||!Ua(r,s):!0}function Lg(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=_n(e)?Fr:nn.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=_n(e)?Fr:nn.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=Mv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kx=typeof WeakMap=="function"?WeakMap:Map;function Dg(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,lf=i),ju(t,e)},n}function Ng(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Kx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cy.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Zx=Bi.ReactCurrentOwner,mn=!1;function on(t,e,n,i){e.child=t===null?lg(e,null,n,i):Us(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=Ud(t,e,n,i,s,r),n=Fd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(dt&&n&&Ed(e),e.flags|=1,on(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ig(t,e,s,i,r)):(t=rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(a,i)&&t.ref===e.ref)return Ui(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ig(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ua(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ui(t,e,r)}return Qu(t,e,n,i,r)}function Ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(Ms,Mn),Mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(Ms,Mn),Mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(Ms,Mn),Mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(Ms,Mn),Mn|=i;return on(t,e,r,n),e.child}function Fg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qu(t,e,n,i,r){var s=_n(n)?Fr:nn.current;return s=Ns(e,s),Rs(e,r),n=Ud(t,e,n,i,s,r),i=Fd(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ui(t,e,r)):(dt&&i&&Ed(e),e.flags|=1,on(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(_n(n)){var s=!0;Sl(e)}else s=!1;if(Rs(e,r),e.stateNode===null)tl(t,e),Lg(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=_n(n)?Fr:nn.current,c=Ns(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Mp(e,a,i,c),ji=!1;var u=e.memoizedState;a.state=u,Al(e,i,a,r),l=e.memoizedState,o!==i||u!==l||gn.current||ji?(typeof d=="function"&&(Ku(e,n,d,i),l=e.memoizedState),(o=ji||Sp(e,n,o,i,u,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ug(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Wn(e.type,o),a.props=c,h=e.pendingProps,u=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=_n(n)?Fr:nn.current,l=Ns(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||u!==l)&&Mp(e,a,i,l),ji=!1,u=e.memoizedState,a.state=u,Al(e,i,a,r);var v=e.memoizedState;o!==h||u!==v||gn.current||ji?(typeof p=="function"&&(Ku(e,n,p,i),v=e.memoizedState),(c=ji||Sp(e,n,c,i,u,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){Fg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hp(e,n,!1),Ui(t,e,s);i=e.stateNode,Zx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,o,s)):on(t,e,o,s),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function Og(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Ld(t,e.containerInfo)}function bp(t,e,n,i,r){return Is(),Td(r),e.flags|=256,on(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function kg(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(mt,r&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Bd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return jx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Ur(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?tf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&Td(i),Us(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(ne(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=tf(a),e.memoizedState=ef,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Uc(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Zn(i,t,r,-1))}return Xd(),i=Uc(Error(ne(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=or(r.nextSibling),An=e,dt=!0,Yn=null,t!==null&&(In[Un++]=Ai,In[Un++]=Ri,In[Un++]=Or,Ai=t.id,Ri=t.overflow,Or=e),e=Bd(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$u(t.return,e,n)}function Fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(on(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,s);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qx(t,e,n){switch(e.tag){case 3:Og(e),Is();break;case 5:fg(e);break;case 1:_n(e.type)&&Sl(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?kg(t,e,n):(ct(mt,mt.current&1),t=Ui(t,e,n),t!==null?t.sibling:null);ct(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ug(t,e,n)}return Ui(t,e,n)}var zg,nf,Vg,Hg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};Vg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(pi.current);var s=null;switch(n){case"input":r=wu(t,r),i=wu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Ru(t,r),i=Ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}bu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Hg=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jx(t,e,n){var i=e.pendingProps;switch(wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return _n(e.type)&&yl(),Zt(e),null;case 3:return i=e.stateNode,Fs(),ft(gn),ft(nn),Nd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(ff(Yn),Yn=null))),nf(t,e),Zt(e),null;case 5:Dd(e);var r=Lr(za.current);if(n=e.type,t!==null&&e.stateNode!=null)Vg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Zt(e),null}if(t=Lr(pi.current),go(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)ut(ha[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Bh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Vh(i,s),ut("invalid",i)}bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&mo(i.textContent,o,t),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":ao(i),zh(i,s,!0);break;case"textarea":ao(i),Hh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[ka]=i,zg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Pu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)ut(ha[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Bh(t,i),r=wu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Vh(t,i),r=Ru(t,i),ut("invalid",t);break;default:r=i}bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?x0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&cd(t,s,l,a))}switch(n){case"input":ao(t),zh(t,i,!1);break;case"textarea":ao(t),Hh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)Hg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Lr(za.current),Lr(pi.current),go(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Zt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Tn!==null&&e.mode&1&&!(e.flags&128))ag(),Is(),e.flags|=98560,s=!1;else if(s=go(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ci]=e}else Is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Yn!==null&&(ff(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Ut===0&&(Ut=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Fs(),nf(t,e),t===null&&Fa(e.stateNode.containerInfo),Zt(e),null;case 10:return Cd(e.type._context),Zt(e),null;case 17:return _n(e.type)&&yl(),Zt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)na(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,na(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>ks&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Zt(e),null}else 2*Rt()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=mt.current,ct(mt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Mn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ey(t,e){switch(wd(e),e.tag){case 1:return _n(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),ft(gn),ft(nn),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return Fs(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var xo=!1,Jt=!1,ty=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Lp=!1;function ny(t,e){if(zu=gl,t=q0(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(o=a),u===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},gl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,_=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:Wn(e.type,M),_);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){Mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=Lp,Lp=!1,v}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rf(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gg(t){var e=t.alternate;e!==null&&(t.alternate=null,Gg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[ka],delete e[Wu],delete e[kx],delete e[Bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wg(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var Wt=null,Xn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Xg(t,e,n),n=n.sibling}function Xg(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Jt||Ss(n,e);case 6:var i=Wt,r=Xn;Wt=null,Gi(t,e,n),Wt=i,Xn=r,Wt!==null&&(Xn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Xn?(t=Wt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Na(t)):bc(Wt,n.stateNode));break;case 4:i=Wt,r=Xn,Wt=n.stateNode.containerInfo,Xn=!0,Gi(t,e,n),Wt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rf(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Jt&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,Gi(t,e,n),Jt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ty),e.forEach(function(i){var r=fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Wt=o.stateNode,Xn=!1;break e;case 3:Wt=o.stateNode.containerInfo,Xn=!0;break e;case 4:Wt=o.stateNode.containerInfo,Xn=!0;break e}o=o.return}if(Wt===null)throw Error(ne(160));Xg(s,a,r),Wt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yg(e,t),e=e.sibling}function Yg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ii(t),i&4){try{Ma(3,t,t.return),Ql(3,t)}catch(M){Mt(t,t.return,M)}try{Ma(5,t,t.return)}catch(M){Mt(t,t.return,M)}}break;case 1:zn(e,t),ii(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(zn(e,t),ii(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{ba(r,"")}catch(M){Mt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),Pu(o,a);var c=Pu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?x0(r,h):d==="dangerouslySetInnerHTML"?_0(r,h):d==="children"?ba(r,h):cd(r,d,h,c)}switch(o){case"input":Tu(r,s);break;case"textarea":m0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Es(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(M){Mt(t,t.return,M)}}break;case 6:if(zn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Mt(t,t.return,M)}}break;case 3:if(zn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(M){Mt(t,t.return,M)}break;case 4:zn(e,t),ii(t);break;case 13:zn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=Rt())),i&4&&Np(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||d,zn(e,t),Jt=c):zn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(h=Se=d;Se!==null;){switch(u=Se,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ma(4,u,u.return);break;case 1:Ss(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){Mt(i,n,M)}}break;case 5:Ss(u,u.return);break;case 22:if(u.memoizedState!==null){Up(h);continue}}p!==null?(p.return=u,Se=p):Up(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=v0("display",a))}catch(M){Mt(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Mt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,t),ii(t),i&4&&Np(t);break;case 21:break;default:zn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wg(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=Dp(t);of(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Dp(t);af(t,o,a);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iy(t,e,n){Se=t,qg(t)}function qg(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||xo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Jt;o=xo;var c=Jt;if(xo=a,(Jt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Fp(r):l!==null?(l.return=a,Se=l):Fp(r);for(;s!==null;)Se=s,qg(s),s=s.sibling;Se=r,xo=o,Jt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Ip(t)}}function Ip(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Jt||e.flags&512&&sf(e)}catch(u){Mt(e,e.return,u)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Up(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Fp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{sf(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{sf(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var ry=Math.ceil,Pl=Bi.ReactCurrentDispatcher,zd=Bi.ReactCurrentOwner,On=Bi.ReactCurrentBatchConfig,je=0,Vt=null,Dt=null,Yt=0,Mn=0,Ms=gr(0),Ut=0,Wa=null,Br=0,Jl=0,Vd=0,Ea=null,pn=null,Hd=0,ks=1/0,Ei=null,Ll=!1,lf=null,cr=null,yo=!1,nr=null,Dl=0,wa=0,cf=null,nl=-1,il=0;function ln(){return je&6?Rt():nl!==-1?nl:nl=Rt()}function ur(t){return t.mode&1?je&2&&Yt!==0?Yt&-Yt:Vx.transition!==null?(il===0&&(il=L0()),il):(t=nt,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function Zn(t,e,n,i){if(50<wa)throw wa=0,cf=null,Error(ne(185));Za(t,n,i),(!(je&2)||t!==Vt)&&(t===Vt&&(!(je&2)&&(Jl|=n),Ut===4&&Ji(t,Yt)),vn(t,i),n===1&&je===0&&!(e.mode&1)&&(ks=Rt()+500,Kl&&_r()))}function vn(t,e){var n=t.callbackNode;Vv(t,e);var i=ml(t,t===Vt?Yt:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?zx(Op.bind(null,t)):ig(Op.bind(null,t)),Fx(function(){!(je&6)&&_r()}),n=null;else{switch(D0(i)){case 1:n=pd;break;case 4:n=b0;break;case 16:n=pl;break;case 536870912:n=P0;break;default:n=pl}n=t_(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(nl=-1,il=0,je&6)throw Error(ne(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var i=ml(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=je;je|=2;var s=Zg();(Vt!==t||Yt!==e)&&(Ei=null,ks=Rt()+500,Ir(t,e));do try{oy();break}catch(o){Kg(t,o)}while(!0);Rd(),Pl.current=s,je=r,Dt!==null?e=0:(Vt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=Uu(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=Wa,Ir(t,0),Ji(t,i),vn(t,Rt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!sy(r)&&(e=Nl(t,i),e===2&&(s=Uu(t),s!==0&&(i=s,e=uf(t,s))),e===1))throw n=Wa,Ir(t,0),Ji(t,i),vn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Tr(t,pn,Ei);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Hd+500-Rt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gu(Tr.bind(null,t,pn,Ei),e);break}Tr(t,pn,Ei);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ry(i/1960))-i,10<i){t.timeoutHandle=Gu(Tr.bind(null,t,pn,Ei),i);break}Tr(t,pn,Ei);break;case 5:Tr(t,pn,Ei);break;default:throw Error(ne(329))}}}return vn(t,Rt()),t.callbackNode===n?$g.bind(null,t):null}function uf(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=pn,pn=n,e!==null&&ff(e)),t}function ff(t){pn===null?pn=t:pn.push.apply(pn,t)}function sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Vd,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Op(t){if(je&6)throw Error(ne(327));Cs();var e=ml(t,0);if(!(e&1))return vn(t,Rt()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Uu(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=Wa,Ir(t,0),Ji(t,e),vn(t,Rt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,pn,Ei),vn(t,Rt()),null}function Gd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(ks=Rt()+500,Kl&&_r())}}function zr(t){nr!==null&&nr.tag===0&&!(je&6)&&Cs();var e=je;je|=1;var n=On.transition,i=nt;try{if(On.transition=null,nt=1,t)return t()}finally{nt=i,On.transition=n,je=e,!(je&6)&&_r()}}function Wd(){Mn=Ms.current,ft(Ms)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ux(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Fs(),ft(gn),ft(nn),Nd();break;case 5:Dd(i);break;case 4:Fs();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:Cd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(Vt=t,Dt=t=fr(t.current,null),Yt=Mn=e,Ut=0,Wa=null,Vd=Jl=Br=0,pn=Ea=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Pr=null}return t}function Kg(t,e){do{var n=Dt;try{if(Rd(),Jo.current=bl,Cl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(kr=0,zt=It=_t=null,Sa=!1,Va=0,zd.current=null,n===null||n.return===null){Ut=1,Wa=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=wp(a);if(p!==null){p.flags&=-257,Tp(p,a,o,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){Ep(s,c,e),Xd();break e}l=Error(ne(426))}}else if(dt&&o.mode&1){var _=wp(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Tp(_,a,o,s,e),Td(Os(l,o));break e}}s=l=Os(l,o),Ut!==4&&(Ut=2),Ea===null?Ea=[s]:Ea.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Dg(s,l,e);_p(s,f);break e;case 1:o=l;var m=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(cr===null||!cr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Ng(s,o,e);_p(s,y);break e}}s=s.return}while(s!==null)}Qg(n)}catch(T){e=T,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Zg(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function Xd(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(Br&268435455)&&!(Jl&268435455)||Ji(Vt,Yt)}function Nl(t,e){var n=je;je|=2;var i=Zg();(Vt!==t||Yt!==e)&&(Ei=null,Ir(t,e));do try{ay();break}catch(r){Kg(t,r)}while(!0);if(Rd(),je=n,Pl.current=i,Dt!==null)throw Error(ne(261));return Vt=null,Yt=0,Ut}function ay(){for(;Dt!==null;)jg(Dt)}function oy(){for(;Dt!==null&&!Dv();)jg(Dt)}function jg(t){var e=e_(t.alternate,t,Mn);t.memoizedProps=t.pendingProps,e===null?Qg(t):Dt=e,zd.current=null}function Qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ey(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Dt=null;return}}else if(n=Jx(n,e,Mn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Tr(t,e,n){var i=nt,r=On.transition;try{On.transition=null,nt=1,ly(t,e,n,i)}finally{On.transition=r,nt=i}return null}function ly(t,e,n,i){do Cs();while(nr!==null);if(je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hv(t,s),t===Vt&&(Dt=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,t_(pl,function(){return Cs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=nt;nt=1;var o=je;je|=4,zd.current=null,ny(t,n),Yg(n,t),Cx(Vu),gl=!!zu,Vu=zu=null,t.current=n,iy(n),Nv(),je=o,nt=a,On.transition=s}else t.current=n;if(yo&&(yo=!1,nr=t,Dl=r),s=t.pendingLanes,s===0&&(cr=null),Fv(n.stateNode),vn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=lf,lf=null,t;return Dl&1&&t.tag!==0&&Cs(),s=t.pendingLanes,s&1?t===cf?wa++:(wa=0,cf=t):wa=0,_r(),null}function Cs(){if(nr!==null){var t=D0(Dl),e=On.transition,n=nt;try{if(On.transition=null,nt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Dl=0,je&6)throw Error(ne(331));var r=je;for(je|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:Ma(8,d,s)}var h=d.child;if(h!==null)h.return=d,Se=h;else for(;Se!==null;){d=Se;var u=d.sibling,p=d.return;if(Gg(d),d===c){Se=null;break}if(u!==null){u.return=p,Se=u;break}Se=p}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var _=M.sibling;M.sibling=null,M=_}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var m=t.current;for(Se=m;Se!==null;){a=Se;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Se=S;else e:for(a=m;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ql(9,o)}}catch(T){Mt(o,o.return,T)}if(o===a){Se=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Se=y;break e}Se=o.return}}if(je=r,_r(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{nt=n,On.transition=e}}return!1}function kp(t,e,n){e=Os(n,e),e=Dg(t,e,1),t=lr(t,e,1),e=ln(),t!==null&&(Za(t,1,e),vn(t,e))}function Mt(t,e,n){if(t.tag===3)kp(t,t,n);else for(;e!==null;){if(e.tag===3){kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Os(n,t),t=Ng(e,t,1),e=lr(e,t,1),t=ln(),e!==null&&(Za(e,1,t),vn(e,t));break}}e=e.return}}function cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>Rt()-Hd?Ir(t,0):Vd|=n),vn(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=co,co<<=1,!(co&130023424)&&(co=4194304)):e=1);var n=ln();t=Ii(t,e),t!==null&&(Za(t,e,n),vn(t,n))}function uy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Jg(t,n)}var e_;e_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Qx(t,e,n);mn=!!(t.flags&131072)}else mn=!1,dt&&e.flags&1048576&&rg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tl(t,e),t=e.pendingProps;var r=Ns(e,nn.current);Rs(e,n),r=Ud(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=Ju(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Ed(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hy(i),t=Wn(i,t),r){case 0:e=Qu(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,Wn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Cp(t,e,i,r,n);case 3:e:{if(Og(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ug(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(ne(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(ne(424)),e),e=bp(t,e,i,n,r);break e}else for(Tn=or(e.stateNode.containerInfo.firstChild),An=e,dt=!0,Yn=null,n=lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Is(),i===r){e=Ui(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return fg(e),t===null&&qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hu(i,r)?a=null:s!==null&&Hu(i,s)&&(e.flags|=32),Fg(t,e),on(t,e,a,n),e.child;case 6:return t===null&&qu(e),null;case 13:return kg(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Ap(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(wl,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!gn.current){e=Ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$u(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$u(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=kn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Rp(t,e,i,r,n);case 15:return Ig(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),tl(t,e),e.tag=1,_n(i)?(t=!0,Sl(e)):t=!1,Rs(e,n),Lg(e,i,r),Zu(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return Bg(t,e,n);case 22:return Ug(t,e,n)}throw Error(ne(156,e.tag))};function t_(t,e){return C0(t,e)}function dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new dy(t,e,n,i)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hy(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===dd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ds:return Ur(n.children,r,s,e);case ud:a=8,r|=8;break;case yu:return t=Fn(12,n,e,r|2),t.elementType=yu,t.lanes=s,t;case Su:return t=Fn(13,n,e,r),t.elementType=Su,t.lanes=s,t;case Mu:return t=Fn(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case f0:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:a=10;break e;case u0:a=9;break e;case fd:a=11;break e;case dd:a=14;break e;case Zi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=f0,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function py(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,i,r,s,a,o,l){return t=new py(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function my(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function n_(t){if(!t)return hr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(_n(n))return ng(t,n,e)}return e}function i_(t,e,n,i,r,s,a,o,l){return t=qd(n,i,!0,t,r,s,a,o,l),t.context=n_(null),n=t.current,i=ln(),r=ur(n),s=bi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,Za(t,r,i),vn(t,i),t}function tc(t,e,n,i){var r=e.current,s=ln(),a=ur(r);return n=n_(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(Zn(t,r,a,s),Qo(t,r,a)),a}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function gy(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}nc.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));tc(t,e,null,null)};nc.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){tc(null,t,null,null)}),e[Ni]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&O0(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function _y(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(a);s.call(c)}}var a=i_(e,i,t,0,null,!1,!1,"",zp);return t._reactRootContainer=a,t[Ni]=a.current,Fa(t.nodeType===8?t.parentNode:t),zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Il(l);o.call(c)}}var l=qd(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[Ni]=l.current,Fa(t.nodeType===8?t.parentNode:t),zr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Il(a);o.call(l)}}tc(e,a,t,r)}else a=_y(n,e,t,r,i);return Il(a)}N0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(md(e,n|1),vn(e,Rt()),!(je&6)&&(ks=Rt()+500,_r()))}break;case 13:zr(function(){var i=Ii(t,1);if(i!==null){var r=ln();Zn(i,t,1,r)}}),$d(t,1)}};gd=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=ln();Zn(e,t,134217728,n)}$d(t,134217728)}};I0=function(t){if(t.tag===13){var e=ur(t),n=Ii(t,e);if(n!==null){var i=ln();Zn(n,t,e,i)}$d(t,e)}};U0=function(){return nt};F0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Du=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(ne(90));h0(i),Tu(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};M0=Gd;E0=zr;var vy={usingClientEntryPoint:!1,Events:[Qa,gs,$l,y0,S0,Gd]},ia={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A0(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{Wl=So.inject(xy),hi=So}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(ne(200));return my(t,e,null,n)};Cn.createRoot=function(t,e){if(!Zd(t))throw Error(ne(299));var n=!1,i="",r=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,Fa(t.nodeType===8?t.parentNode:t),new Kd(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=A0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return zr(t)};Cn.hydrate=function(t,e,n){if(!ic(e))throw Error(ne(200));return rc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=r_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=i_(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};Cn.render=function(t,e,n){if(!ic(e))throw Error(ne(200));return rc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(ne(40));return t._reactRootContainer?(zr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Cn.unstable_batchedUpdates=Gd;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return rc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),s0.exports=Cn;var yy=s0.exports,Vp=yy;vu.createRoot=Vp.createRoot,vu.hydrateRoot=Vp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="185",Sy=0,Hp=1,My=2,sl=1,a_=2,pa=3,pr=0,cn=1,ui=2,Pi=0,bs=1,Gp=2,Wp=3,Xp=4,Ey=5,Rr=100,wy=101,Ty=102,Ay=103,Ry=104,Cy=200,by=201,Py=202,Ly=203,df=204,hf=205,Dy=206,Ny=207,Iy=208,Uy=209,Fy=210,Oy=211,ky=212,By=213,zy=214,pf=0,mf=1,gf=2,Bs=3,_f=4,vf=5,xf=6,yf=7,o_=0,Vy=1,Hy=2,mi=0,l_=1,c_=2,u_=3,Qd=4,f_=5,d_=6,h_=7,p_=300,Vr=301,zs=302,Bc=303,zc=304,sc=306,Ul=1e3,Ci=1001,Sf=1002,Xt=1003,Gy=1004,Mo=1005,en=1006,Vc=1007,Dr=1008,wn=1009,m_=1010,g_=1011,Xa=1012,Jd=1013,_i=1014,fi=1015,Fi=1016,eh=1017,th=1018,Ya=1020,__=35902,v_=35899,x_=1021,y_=1022,$n=1023,Oi=1026,Nr=1027,S_=1028,nh=1029,Hr=1030,ih=1031,rh=1033,al=33776,ol=33777,ll=33778,cl=33779,Mf=35840,Ef=35841,wf=35842,Tf=35843,Af=36196,Rf=37492,Cf=37496,bf=37488,Pf=37489,Fl=37490,Lf=37491,Df=37808,Nf=37809,If=37810,Uf=37811,Ff=37812,Of=37813,kf=37814,Bf=37815,zf=37816,Vf=37817,Hf=37818,Gf=37819,Wf=37820,Xf=37821,Yf=36492,qf=36494,$f=36495,Kf=36283,Zf=36284,Ol=36285,jf=36286,Wy=3200,Qf=0,Xy=1,er="",hn="srgb",kl="srgb-linear",Bl="linear",tt="srgb",$r=7680,Yp=519,Yy=512,qy=513,$y=514,sh=515,Ky=516,Zy=517,ah=518,jy=519,qp=35044,$p="300 es",di=2e3,qa=2001;function Qy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Jy(){const t=zl("canvas");return t.style.display="block",t}const Kp={};function Zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function M_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=M_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ps(...t){const e=t.join(" ");e in Kp||(Kp[e]=!0,Le(...t))}function eS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const tS={[pf]:mf,[gf]:xf,[_f]:yf,[Bs]:vf,[mf]:pf,[xf]:gf,[yf]:_f,[vf]:Bs};class vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const Ta=Math.PI/180,$a=180/Math.PI;function Ys(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function oh(t,e){return(t%e+e)%e}function nS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function iS(t,e,n){return t!==e?(n-t)/(e-t):0}function Aa(t,e,n){return(1-n)*t+n*e}function rS(t,e,n,i){return Aa(t,e,1-Math.exp(-n*i))}function sS(t,e=1){return e-Math.abs(oh(t,e*2)-e)}function aS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function oS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function lS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cS(t,e){return t+Math.random()*(e-t)}function uS(t){return t*(.5-Math.random())}function fS(t){t!==void 0&&(jp=t);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dS(t){return t*Ta}function hS(t){return t*$a}function pS(t){return(t&t-1)===0&&t!==0}function mS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function gS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _S(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*u,o*c);break;case"YZY":t.set(l*u,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*u,o*d,o*c);break;case"XZX":t.set(o*d,l*v,l*p,o*c);break;case"YXY":t.set(l*p,o*d,l*v,o*c);break;case"ZYZ":t.set(l*v,l*p,o*d,o*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ri={DEG2RAD:Ta,RAD2DEG:$a,generateUUID:Ys,clamp:We,euclideanModulo:oh,mapLinear:nS,inverseLerp:iS,lerp:Aa,damp:rS,pingpong:sS,smoothstep:aS,smootherstep:oS,randInt:lS,randFloat:cS,randFloatSpread:uS,seededRandom:fS,degToRad:dS,radToDeg:hS,isPowerOfTwo:pS,ceilPowerOfTwo:mS,floorPowerOfTwo:gS,setQuaternionFromProperEuler:_S,normalize:sn,denormalize:us},xh=class xh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let Be=xh;class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(h!==M||l!==u||c!==p||d!==v){let _=l*u+c*p+d*v+h*M;_<0&&(u=-u,p=-p,v=-v,M=-M,_=-_);let f=1-o;if(_<.9995){const m=Math.acos(_),S=Math.sin(m);f=Math.sin(f*m)/S,o=Math.sin(o*m)/S,l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+M*o}else{l=l*f+u*o,c=c*f+p*o,d=d*f+v*o,h=h*f+M*o;const m=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=m,c*=m,d*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],u=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*p-c*u,e[n+1]=l*v+d*u+c*h-o*p,e[n+2]=c*v+d*p+o*u-l*h,e[n+3]=d*v-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yh=class yh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yh.prototype.isVector3=!0;let L=yh;const Hc=new L,Qp=new qs,Sh=class Sh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],M=r[0],_=r[3],f=r[6],m=r[1],S=r[4],y=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*M+o*m+l*T,s[3]=a*_+o*S+l*w,s[6]=a*f+o*y+l*R,s[1]=c*M+d*m+h*T,s[4]=c*_+d*S+h*w,s[7]=c*f+d*y+h*R,s[2]=u*M+p*m+v*T,s[5]=u*_+p*S+v*w,s[8]=u*f+p*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*s,p=c*s-a*l,v=n*h+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gc.makeScale(e,n)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gc.makeRotation(-e)),this}translate(e,n){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let Ne=Sh;const Gc=new Ne,Jp=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const t={enabled:!0,workingColorSpace:kl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Bl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[kl]:{primaries:e,whitePoint:i,transfer:Bl,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Jp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),t}const qe=vS();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class xS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Kr===void 0&&(Kr=zl("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yS=0;class lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wc(r[a].image)):s.push(Wc(r[a]))}else s=Wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let SS=0;const Xc=new L;class tn extends vr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Ci,r=Ci,s=en,a=Dr,o=$n,l=wn,c=tn.DEFAULT_ANISOTROPY,d=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=Ys(),this.name="",this.source=new lh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ul:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ul:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=p_;tn.DEFAULT_ANISOTROPY=1;const Mh=class Mh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],M=l[2],_=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+M)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,T=(f+1)/2,w=(d+u)/4,R=(h+M)/4,g=(v+_)/4;return S>y&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=R/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=g/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=g/s),this.set(i,r,s,n),this}let m=Math.sqrt((_-v)*(_-v)+(h-M)*(h-M)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(_-v)/m,this.y=(h-M)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Mh.prototype.isVector4=!0;let gt=Mh;class MS extends vr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new tn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends MS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E_ extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=class Hl{constructor(e,n,i,r,s,a,o,l,c,d,h,u,p,v,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,u,p,v,M,_)}set(e,n,i,r,s,a,o,l,c,d,h,u,p,v,M,_){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=M,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=a*d,p=a*h,v=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,v=c*d,M=c*h;n[0]=u+M*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-v,n[6]=M+u*o,n[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,v=c*d,M=c*h;n[0]=u-M*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*d,n[9]=M-u*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,v=o*d,M=o*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,v=o*l,M=o*c;n[0]=l*d,n[4]=M-u*h,n[8]=v*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-M*h}else if(e.order==="XZY"){const u=a*l,p=a*c,v=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+M,n[5]=a*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,TS)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Wi.crossVectors(i,yn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Wi.crossVectors(i,yn)),Wi.normalize(),Eo.crossVectors(yn,Wi),r[0]=Wi.x,r[4]=Eo.x,r[8]=yn.x,r[1]=Wi.y,r[5]=Eo.y,r[9]=yn.y,r[2]=Wi.z,r[6]=Eo.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],M=i[6],_=i[10],f=i[14],m=i[3],S=i[7],y=i[11],T=i[15],w=r[0],R=r[4],g=r[8],A=r[12],b=r[1],P=r[5],N=r[9],W=r[13],Z=r[2],k=r[6],$=r[10],V=r[14],F=r[3],X=r[7],J=r[11],te=r[15];return s[0]=a*w+o*b+l*Z+c*F,s[4]=a*R+o*P+l*k+c*X,s[8]=a*g+o*N+l*$+c*J,s[12]=a*A+o*W+l*V+c*te,s[1]=d*w+h*b+u*Z+p*F,s[5]=d*R+h*P+u*k+p*X,s[9]=d*g+h*N+u*$+p*J,s[13]=d*A+h*W+u*V+p*te,s[2]=v*w+M*b+_*Z+f*F,s[6]=v*R+M*P+_*k+f*X,s[10]=v*g+M*N+_*$+f*J,s[14]=v*A+M*W+_*V+f*te,s[3]=m*w+S*b+y*Z+T*F,s[7]=m*R+S*P+y*k+T*X,s[11]=m*g+S*N+y*$+T*J,s[15]=m*A+S*W+y*V+T*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],v=e[3],M=e[7],_=e[11],f=e[15],m=l*p-c*u,S=o*p-c*h,y=o*u-l*h,T=a*p-c*d,w=a*u-l*d,R=a*h-o*d;return n*(M*m-_*S+f*y)-i*(v*m-_*T+f*w)+r*(v*S-M*T+f*R)-s*(v*y-M*w+_*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],v=e[12],M=e[13],_=e[14],f=e[15],m=n*o-i*a,S=n*l-r*a,y=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,g=d*M-h*v,A=d*_-u*v,b=d*f-p*v,P=h*_-u*M,N=h*f-p*M,W=u*f-p*_,Z=m*W-S*N+y*P+T*b-w*A+R*g;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Z;return e[0]=(o*W-l*N+c*P)*k,e[1]=(r*N-i*W-s*P)*k,e[2]=(M*R-_*w+f*T)*k,e[3]=(u*w-h*R-p*T)*k,e[4]=(l*b-a*W-c*A)*k,e[5]=(n*W-r*b+s*A)*k,e[6]=(_*y-v*R-f*S)*k,e[7]=(d*R-u*y+p*S)*k,e[8]=(a*N-o*b+c*g)*k,e[9]=(i*b-n*N-s*g)*k,e[10]=(v*w-M*y+f*m)*k,e[11]=(h*y-d*w-p*m)*k,e[12]=(o*A-a*P-l*g)*k,e[13]=(n*P-i*A+r*g)*k,e[14]=(M*S-v*T-_*m)*k,e[15]=(d*T-h*S+u*m)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,u=s*c,p=s*d,v=s*h,M=a*d,_=a*h,f=o*h,m=l*c,S=l*d,y=l*h,T=i.x,w=i.y,R=i.z;return r[0]=(1-(M+f))*T,r[1]=(p+y)*T,r[2]=(v-S)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(u+f))*w,r[6]=(_+m)*w,r[7]=0,r[8]=(v+S)*R,r[9]=(_-m)*R,r[10]=(1-(u+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Vn.copy(this);const c=1/a,d=1/o,h=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,n.setFromRotationMatrix(Vn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===di)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===qa)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===di)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===qa)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hl.prototype.isMatrix4=!0;let ht=Hl;const Zr=new L,Vn=new ht,wS=new L(0,0,0),TS=new L(1,1,1),Wi=new L,Eo=new L,yn=new L,tm=new ht,nm=new qs;class ki{constructor(e=0,n=0,i=0,r=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AS=0;const im=new L,jr=new qs,vi=new ht,wo=new L,ra=new L,RS=new L,CS=new qs,rm=new L(1,0,0),sm=new L(0,1,0),am=new L(0,0,1),om={type:"added"},bS={type:"removed"},Qr={type:"childadded",child:null},Yc={type:"childremoved",child:null};class Ht extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=Ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new L,n=new ki,i=new qs,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ra,wo,this.up):vi.lookAt(wo,ra,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(vi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bS),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const _=n.getJointPose(M,i),f=this._getHandJoint(c,M);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},To={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=oh(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return qe.workingToColorSpace(Qt.copy(this),e),Math.round(We(Qt.r*255,0,255))*65536+Math.round(We(Qt.g*255,0,255))*256+Math.round(We(Qt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=hn){qe.workingToColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(To);const i=Aa(Xi.h,To.h,n),r=Aa(Xi.s,To.s,n),s=Aa(Xi.l,To.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Xe;Xe.NAMES=w_;class uh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class LS extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hn=new L,xi=new L,Kc=new L,yi=new L,Jr=new L,es=new L,lm=new L,Zc=new L,jc=new L,Qc=new L,Jc=new gt,eu=new gt,tu=new gt;class qn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),xi.subVectors(i,n),Kc.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(xi),l=Hn.dot(Kc),c=xi.dot(xi),d=xi.dot(Kc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,v=(a*d-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Jc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Jc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jc,s.x),a.addScaledVector(eu,s.y),a.addScaledVector(tu,s.z),a}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),xi.subVectors(e,n),Hn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Hn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),Zc.subVectors(e,i);const l=Jr.dot(Zc),c=es.dot(Zc);if(l<=0&&c<=0)return n.copy(i);jc.subVectors(e,r);const d=Jr.dot(jc),h=es.dot(jc);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Jr,a);Qc.subVectors(e,s);const p=Jr.dot(Qc),v=es.dot(Qc);if(v>=0&&p<=v)return n.copy(s);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const _=d*v-p*h;if(_<=0&&h-d>=0&&p-v>=0)return lm.subVectors(s,r),o=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(lm,o);const f=1/(_+M+u);return a=M*f,o=u*f,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ao.copy(i.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),Ro.subVectors(this.max,sa),ts.subVectors(e.a,sa),ns.subVectors(e.b,sa),is.subVectors(e.c,sa),Yi.subVectors(ns,ts),qi.subVectors(is,ns),yr.subVectors(ts,is);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-yr.z,yr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,yr.z,0,-yr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-yr.y,yr.x,0];return!nu(n,ts,ns,is,Ro)||(n=[1,0,0,0,1,0,0,0,1],!nu(n,ts,ns,is,Ro))?!1:(Co.crossVectors(Yi,qi),n=[Co.x,Co.y,Co.z],nu(n,ts,ns,is,Ro))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Ao=new eo,ts=new L,ns=new L,is=new L,Yi=new L,qi=new L,yr=new L,sa=new L,Ro=new L,Co=new L,Sr=new L;function nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Sr.fromArray(t,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),d=i.dot(Sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pt=new L,bo=new Be;let DS=0;class jn extends vr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=qp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pt extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const NS=new eo,aa=new L,iu=new L;class ac{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const n=aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(iu)),this.expandByPoint(aa.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IS=0;const Ln=new ht,ru=new Ht,rs=new L,Sn=new eo,oa=new eo,Bt=new L;class rn extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qy(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,oa.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,oa.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(oa.min),Sn.expandByPoint(oa.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Bt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Bt.add(rs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new L,l[g]=new L;const c=new L,d=new L,h=new L,u=new Be,p=new Be,v=new Be,M=new L,_=new L;function f(g,A,b){c.fromBufferAttribute(i,g),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(s,g),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,b),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),_.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(P),o[g].add(M),o[A].add(M),o[b].add(M),l[g].add(_),l[A].add(_),l[b].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let g=0,A=m.length;g<A;++g){const b=m[g],P=b.start,N=b.count;for(let W=P,Z=P+N;W<Z;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new L,y=new L,T=new L,w=new L;function R(g){T.fromBufferAttribute(r,g),w.copy(T);const A=o[g];S.copy(A),S.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(w,A);const P=y.dot(l[g])<0?-1:1;a.setXYZW(g,S.x,S.y,S.z,P)}for(let g=0,A=m.length;g<A;++g){const b=m[g],P=b.start,N=b.count;for(let W=P,Z=P+N;W<Z;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),M=e.getX(u+1),_=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,_),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new jn(u,d,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let US=0;class $s extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=Ys(),this.name="",this.type="Material",this.blending=bs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=hf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==df&&(i.blendSrc=this.blendSrc),this.blendDst!==hf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new L,su=new L,Po=new L,$i=new L,au=new L,Lo=new L,ou=new L;class fh{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){su.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(su);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Po),o=$i.dot(this.direction),l=-$i.dot(Po),c=$i.lengthSq(),d=Math.abs(1-a*a);let h,u,p,v;if(d>0)if(h=a*l-o,u=a*o-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const M=1/d;h*=M,u*=M,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-a*s+o)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(a*s+o)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=a>0?-s:s,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(su).addScaledVector(Po,u),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){au.subVectors(n,e),Lo.subVectors(i,e),ou.crossVectors(au,Lo);let a=this.direction.dot(ou),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,e);const l=o*this.direction.dot(Lo.crossVectors($i,Lo));if(l<0)return null;const c=o*this.direction.dot(au.cross($i));if(c<0||l+c>a)return null;const d=-o*$i.dot(ou);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ra extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cm=new ht,Mr=new fh,Do=new ac,um=new L,No=new L,Io=new L,Uo=new L,lu=new L,Fo=new L,fm=new L,Oo=new L;class ze extends Ht{constructor(e=new rn,n=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(lu.fromBufferAttribute(h,e),a?Fo.addScaledVector(lu,d):Fo.addScaledVector(lu.sub(n),d))}n.add(Fo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Do.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Do,um)===null||Mr.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(cm.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(cm),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=u.length;v<M;v++){const _=u[v],f=a[_.materialIndex],m=Math.max(_.start,p.start),S=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let y=m,T=S;y<T;y+=3){const w=o.getX(y),R=o.getX(y+1),g=o.getX(y+2);r=ko(this,f,e,i,c,d,h,w,R,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let _=v,f=M;_<f;_+=3){const m=o.getX(_),S=o.getX(_+1),y=o.getX(_+2);r=ko(this,a,e,i,c,d,h,m,S,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=u.length;v<M;v++){const _=u[v],f=a[_.materialIndex],m=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=m,T=S;y<T;y+=3){const w=y,R=y+1,g=y+2;r=ko(this,f,e,i,c,d,h,w,R,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let _=v,f=M;_<f;_+=3){const m=_,S=_+1,y=_+2;r=ko(this,a,e,i,c,d,h,m,S,y),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function FS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===pr,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function ko(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,No),t.getVertexPosition(l,Io),t.getVertexPosition(c,Uo);const d=FS(t,e,n,i,No,Io,Uo,fm);if(d){const h=new L;qn.getBarycoord(fm,No,Io,Uo,h),r&&(d.uv=qn.getInterpolatedAttribute(r,o,l,c,h,new Be)),s&&(d.uv1=qn.getInterpolatedAttribute(s,o,l,c,h,new Be)),a&&(d.normal=qn.getInterpolatedAttribute(a,o,l,c,h,new L),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};qn.getNormal(No,Io,Uo,u.normal),d.face=u,d.barycoord=h}return d}class OS extends tn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Xt,d=Xt,h,u){super(null,a,o,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=new L,kS=new L,BS=new Ne;class Ar{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cu.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(cu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BS.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new ac,zS=new Be(.5,.5),Bo=new L;class dh{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,a=new Ar){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],M=s[9],_=s[10],f=s[11],m=s[12],S=s[13],y=s[14],T=s[15];if(r[0].setComponents(c-a,p-d,f-v,T-m).normalize(),r[1].setComponents(c+a,p+d,f+v,T+m).normalize(),r[2].setComponents(c+o,p+h,f+M,T+S).normalize(),r[3].setComponents(c-o,p-h,f-M,T-S).normalize(),i)r[4].setComponents(l,u,_,y).normalize(),r[5].setComponents(c-l,p-u,f-_,T-y).normalize();else if(r[4].setComponents(c-l,p-u,f-_,T-y).normalize(),n===di)r[5].setComponents(c+l,p+u,f+_,T+y).normalize();else if(n===qa)r[5].setComponents(l,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=zS.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bo.x=r.normal.x>0?e.max.x:e.min.x,Bo.y=r.normal.y>0?e.max.y:e.min.y,Bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R_ extends $s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new ht,Jf=new fh,zo=new ac,Vo=new L;class VS extends Ht{constructor(e=new rn,n=new R_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;dm.copy(r).invert(),Jf.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=u,M=p;v<M;v++){const _=c.getX(v);Vo.fromBufferAttribute(h,_),hm(Vo,_,l,r,e,n,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=u,M=p;v<M;v++)Vo.fromBufferAttribute(h,v),hm(Vo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hm(t,e,n,i,r,s,a){const o=Jf.distanceSqToPoint(t);if(o<n){const l=new L;Jf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class C_ extends tn{constructor(e=[],n=Vr,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HS extends tn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vs extends tn{constructor(e,n,i=_i,r,s,a,o=Xt,l=Xt,c,d=Oi,h=1){if(d!==Oi&&d!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class GS extends Vs{constructor(e,n=_i,i=Vr,r,s,a=Xt,o=Xt,l,c=Oi){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class b_ extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lt extends rn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(h,2));function v(M,_,f,m,S,y,T,w,R,g,A){const b=y/R,P=T/g,N=y/2,W=T/2,Z=w/2,k=R+1,$=g+1;let V=0,F=0;const X=new L;for(let J=0;J<$;J++){const te=J*P-W;for(let oe=0;oe<k;oe++){const He=oe*b-N;X[M]=He*m,X[_]=te*S,X[f]=Z,c.push(X.x,X.y,X.z),X[M]=0,X[_]=0,X[f]=w>0?1:-1,d.push(X.x,X.y,X.z),h.push(oe/R),h.push(1-J/g),V+=1}}for(let J=0;J<g;J++)for(let te=0;te<R;te++){const oe=u+te+k*J,He=u+te+k*(J+1),Je=u+(te+1)+k*(J+1),Ye=u+(te+1)+k*J;l.push(oe,He,Ye),l.push(He,Je,Ye),F+=6}o.addGroup(p,F,A),p+=F,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hh extends rn{constructor(e=1,n=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:i,radialSegments:r,heightSegments:s},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],d=n/2,h=Math.PI/2*e,u=n,p=2*h+u,v=i*2+s,M=r+1,_=new L,f=new L;for(let m=0;m<=v;m++){let S=0,y=0,T=0,w=0;if(m<=i){const A=m/i,b=A*Math.PI/2;y=-d-e*Math.cos(b),T=e*Math.sin(b),w=-e*Math.cos(b),S=A*h}else if(m<=i+s){const A=(m-i)/s;y=-d+A*n,T=e,w=0,S=h+A*u}else{const A=(m-i-s)/i,b=A*Math.PI/2;y=d+e*Math.sin(b),T=e*Math.cos(b),w=e*Math.sin(b),S=h+u+A*h}const R=Math.max(0,Math.min(1,S/p));let g=0;m===0?g=.5/r:m===v&&(g=-.5/r);for(let A=0;A<=r;A++){const b=A/r,P=b*Math.PI*2,N=Math.sin(P),W=Math.cos(P);f.x=-T*W,f.y=y,f.z=T*N,o.push(f.x,f.y,f.z),_.set(-T*W,w,T*N),_.normalize(),l.push(_.x,_.y,_.z),c.push(b+g,R)}if(m>0){const A=(m-1)*M;for(let b=0;b<r;b++){const P=A+b,N=A+b+1,W=m*M+b,Z=m*M+b+1;a.push(P,N,W),a.push(N,Z,W)}}}this.setIndex(a),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ti extends rn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],u=[],p=[];let v=0;const M=[],_=i/2;let f=0;m(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(p,2));function m(){const y=new L,T=new L;let w=0;const R=(n-e)/i;for(let g=0;g<=s;g++){const A=[],b=g/s,P=b*(n-e)+e;for(let N=0;N<=r;N++){const W=N/r,Z=W*l+o,k=Math.sin(Z),$=Math.cos(Z);T.x=P*k,T.y=-b*i+_,T.z=P*$,h.push(T.x,T.y,T.z),y.set(k,R,$).normalize(),u.push(y.x,y.y,y.z),p.push(W,1-b),A.push(v++)}M.push(A)}for(let g=0;g<r;g++)for(let A=0;A<s;A++){const b=M[A][g],P=M[A+1][g],N=M[A+1][g+1],W=M[A][g+1];(e>0||A!==0)&&(d.push(b,P,W),w+=3),(n>0||A!==s-1)&&(d.push(P,N,W),w+=3)}c.addGroup(f,w,0),f+=w}function S(y){const T=v,w=new Be,R=new L;let g=0;const A=y===!0?e:n,b=y===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,_*b,0),u.push(0,b,0),p.push(.5,.5),v++;const P=v;for(let N=0;N<=r;N++){const Z=N/r*l+o,k=Math.cos(Z),$=Math.sin(Z);R.x=A*$,R.y=_*b,R.z=A*k,h.push(R.x,R.y,R.z),u.push(0,b,0),w.x=k*.5+.5,w.y=$*.5*b+.5,p.push(w.x,w.y),v++}for(let N=0;N<r;N++){const W=T+N,Z=P+N;y===!0?d.push(Z,Z+1,W):d.push(Z+1,Z,W),g+=3}c.addGroup(f,g,y===!0?1:2),f+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ph extends Ti{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ph(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mh extends rn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const S=new L,y=new L,T=new L;for(let w=0;w<n.length;w+=3)p(n[w+0],S),p(n[w+1],y),p(n[w+2],T),l(S,y,T,m)}function l(m,S,y,T){const w=T+1,R=[];for(let g=0;g<=w;g++){R[g]=[];const A=m.clone().lerp(y,g/w),b=S.clone().lerp(y,g/w),P=w-g;for(let N=0;N<=P;N++)N===0&&g===w?R[g][N]=A:R[g][N]=A.clone().lerp(b,N/P)}for(let g=0;g<w;g++)for(let A=0;A<2*(w-g)-1;A++){const b=Math.floor(A/2);A%2===0?(u(R[g][b+1]),u(R[g+1][b]),u(R[g][b])):(u(R[g][b+1]),u(R[g+1][b+1]),u(R[g+1][b]))}}function c(m){const S=new L;for(let y=0;y<s.length;y+=3)S.x=s[y+0],S.y=s[y+1],S.z=s[y+2],S.normalize().multiplyScalar(m),s[y+0]=S.x,s[y+1]=S.y,s[y+2]=S.z}function d(){const m=new L;for(let S=0;S<s.length;S+=3){m.x=s[S+0],m.y=s[S+1],m.z=s[S+2];const y=_(m)/2/Math.PI+.5,T=f(m)/Math.PI+.5;a.push(y,1-T)}v(),h()}function h(){for(let m=0;m<a.length;m+=6){const S=a[m+0],y=a[m+2],T=a[m+4],w=Math.max(S,y,T),R=Math.min(S,y,T);w>.9&&R<.1&&(S<.2&&(a[m+0]+=1),y<.2&&(a[m+2]+=1),T<.2&&(a[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,S){const y=m*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function v(){const m=new L,S=new L,y=new L,T=new L,w=new Be,R=new Be,g=new Be;for(let A=0,b=0;A<s.length;A+=9,b+=6){m.set(s[A+0],s[A+1],s[A+2]),S.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),w.set(a[b+0],a[b+1]),R.set(a[b+2],a[b+3]),g.set(a[b+4],a[b+5]),T.copy(m).add(S).add(y).divideScalar(3);const P=_(T);M(w,b+0,m,P),M(R,b+2,S,P),M(g,b+4,y,P)}}function M(m,S,y,T){T<0&&m.x===1&&(a[S]=m.x-1),y.x===0&&y.z===0&&(a[S]=T/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mh(e.vertices,e.indices,e.radius,e.detail)}}class gh extends mh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gh(e.radius,e.detail)}}class to extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,u=n/l,p=[],v=[],M=[],_=[];for(let f=0;f<d;f++){const m=f*u-a;for(let S=0;S<c;S++){const y=S*h-s;v.push(y,-m,0),M.push(0,0,1),_.push(S/o),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const S=m+c*f,y=m+c*(f+1),T=m+1+c*(f+1),w=m+1+c*f;p.push(S,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(M,3)),this.setAttribute("uv",new pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vl extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],v=[],M=[],_=[];for(let f=0;f<=i;f++){const m=[],S=f/i,y=a+S*o,T=e*Math.cos(y),w=Math.sqrt(e*e-T*T);let R=0;f===0&&a===0?R=.5/n:f===i&&l===Math.PI&&(R=-.5/n);for(let g=0;g<=n;g++){const A=g/n,b=r+A*s;h.x=-w*Math.cos(b),h.y=T,h.z=w*Math.sin(b),v.push(h.x,h.y,h.z),u.copy(h).normalize(),M.push(u.x,u.y,u.z),_.push(A+R,1-S),m.push(c++)}d.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const S=d[f][m+1],y=d[f][m],T=d[f+1][m],w=d[f+1][m+1];(f!==0||a>0)&&p.push(S,y,w),(f!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new pt(v,3)),this.setAttribute("normal",new pt(M,3)),this.setAttribute("uv",new pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _h extends rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],h=[],u=new L,p=new L,v=new L;for(let M=0;M<=i;M++){const _=a+M/i*o;for(let f=0;f<=r;f++){const m=f/r*s;p.x=(e+n*Math.cos(_))*Math.cos(m),p.y=(e+n*Math.cos(_))*Math.sin(m),p.z=n*Math.sin(_),c.push(p.x,p.y,p.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),v.subVectors(p,u).normalize(),d.push(v.x,v.y,v.z),h.push(f/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let _=1;_<=r;_++){const f=(r+1)*M+_-1,m=(r+1)*(M-1)+_-1,S=(r+1)*(M-1)+_,y=(r+1)*M+_;l.push(f,m,y),l.push(m,S,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(pm(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(pm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function pm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function WS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function P_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const L_={clone:Hs,merge:an};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=WS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ht().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qS extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class At extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KS extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oc extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class ZS extends oc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const uu=new ht,mm=new L,gm=new L;class D_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dh,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gm),n.updateMatrixWorld(),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===qa||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ho=new L,Go=new qs,si=new L;class N_ extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ho,Go,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new L,_m=new Be,vm=new Be;class En extends N_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,_m,vm),n.subVectors(vm,_m)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ta*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class jS extends D_{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0}}class QS extends oc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class vh extends N_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class JS extends D_{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eM extends oc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new JS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class tM extends oc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ss=-90,as=1;class nM extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new En(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new En(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new En(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new En(ss,as,e,n);l.layers=this.layers,this.add(l);const c=new En(ss,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class iM extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xm=new ht;class Wo{constructor(e,n,i=0,r=1/0){this.ray=new fh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new ch,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):$e("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return xm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xm),this}intersectObject(e,n=!0,i=[]){return ed(e,this,i,n),i.sort(ym),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ed(e[r],this,i,n);return i.sort(ym),i}}function ym(t,e){return t.distance-e.distance}function ed(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)ed(s[a],e,n,!0)}}class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Eh=class Eh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Eh.prototype.isMatrix2=!0;let Sm=Eh;class sM extends vr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Le("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Mm(t,e,n,i){const r=aM(i);switch(n){case x_:return t*e;case S_:return t*e/r.components*r.byteLength;case nh:return t*e/r.components*r.byteLength;case Hr:return t*e*2/r.components*r.byteLength;case ih:return t*e*2/r.components*r.byteLength;case y_:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case rh:return t*e*4/r.components*r.byteLength;case al:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case Tf:return Math.max(t,16)*Math.max(e,8)/4;case Mf:case wf:return Math.max(t,8)*Math.max(e,8)/2;case Af:case Rf:case bf:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Fl:case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Yf:case qf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ol:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aM(t){switch(t){case wn:case m_:return{byteLength:1,components:1};case Xa:case g_:case Fi:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case _i:case Jd:case fi:return{byteLength:4,components:1};case __:case v_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oM(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],M=h[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const M=h[p];t.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ME=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,n1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,m1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,g1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,b1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:fM,alphatest_fragment:dM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:bM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:NM,displacementmap_pars_vertex:IM,displacementmap_vertex:UM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:kM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:VM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eE,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:YM,fog_fragment:qM,fog_pars_fragment:$M,gradientmap_pars_fragment:KM,lightmap_pars_fragment:ZM,lights_lambert_fragment:jM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:aE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:cE,lightprobes_pars_fragment:uE,logdepthbuf_fragment:fE,logdepthbuf_pars_fragment:dE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:pE,map_fragment:mE,map_pars_fragment:gE,map_particle_fragment:_E,map_particle_pars_fragment:vE,metalnessmap_fragment:xE,metalnessmap_pars_fragment:yE,morphinstance_vertex:SE,morphcolor_vertex:ME,morphnormal_vertex:EE,morphtarget_pars_vertex:wE,morphtarget_vertex:TE,normal_fragment_begin:AE,normal_fragment_maps:RE,normal_pars_fragment:CE,normal_pars_vertex:bE,normal_vertex:PE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:NE,clearcoat_pars_fragment:IE,iridescence_pars_fragment:UE,opaque_fragment:FE,packing:OE,premultiplied_alpha_fragment:kE,project_vertex:BE,dithering_fragment:zE,dithering_pars_fragment:VE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:WE,shadowmap_pars_vertex:XE,shadowmap_vertex:YE,shadowmask_pars_fragment:qE,skinbase_vertex:$E,skinning_pars_vertex:KE,skinning_vertex:ZE,skinnormal_vertex:jE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:e1,tonemapping_pars_fragment:t1,transmission_fragment:n1,transmission_pars_fragment:i1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:a1,worldpos_vertex:o1,background_vert:l1,background_frag:c1,backgroundCube_vert:u1,backgroundCube_frag:f1,cube_vert:d1,cube_frag:h1,depth_vert:p1,depth_frag:m1,distance_vert:g1,distance_frag:_1,equirect_vert:v1,equirect_frag:x1,linedashed_vert:y1,linedashed_frag:S1,meshbasic_vert:M1,meshbasic_frag:E1,meshlambert_vert:w1,meshlambert_frag:T1,meshmatcap_vert:A1,meshmatcap_frag:R1,meshnormal_vert:C1,meshnormal_frag:b1,meshphong_vert:P1,meshphong_frag:L1,meshphysical_vert:D1,meshphysical_frag:N1,meshtoon_vert:I1,meshtoon_frag:U1,points_vert:F1,points_frag:O1,shadow_vert:k1,shadow_frag:B1,sprite_vert:z1,sprite_frag:V1},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},li={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};li.physical={uniforms:an([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Xo={r:0,b:0,g:0},H1=new ht,U_=new Ne;U_.set(-1,0,0,0,1,0,0,0,1);function G1(t,e,n,i,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,d=null,h=0,u=null;function p(m){let S=m.isScene===!0?m.background:null;if(S&&S.isTexture){const y=m.backgroundBlurriness>0;S=e.get(S,y)}return S}function v(m){let S=!1;const y=p(m);y===null?_(a,o):y&&y.isColor&&(_(y,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===sc)?(c===void 0&&(c=new ze(new Lt(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Hs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(U_),c.material.toneMapped=qe.getTransfer(y.colorSpace)!==tt,(d!==y||h!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,u=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ze(new to(2,2),new Jn({name:"BackgroundMaterial",uniforms:Hs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,u=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,S){m.getRGB(Xo,P_(t)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,S,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,S=1){a.set(m),o=S,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,_(a,o)},render:v,addToRenderList:M,dispose:f}}function W1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(P,N,W,Z,k){let $=!1;const V=h(P,Z,W,N);s!==V&&(s=V,c(s.object)),$=p(P,Z,W,k),$&&v(P,Z,W,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(P,N,W,Z),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function h(P,N,W,Z){const k=Z.wireframe===!0;let $=i[N.id];$===void 0&&($={},i[N.id]=$);const V=P.isInstancedMesh===!0?P.id:0;let F=$[V];F===void 0&&(F={},$[V]=F);let X=F[W.id];X===void 0&&(X={},F[W.id]=X);let J=X[k];return J===void 0&&(J=u(l()),X[k]=J),J}function u(P){const N=[],W=[],Z=[];for(let k=0;k<n;k++)N[k]=0,W[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Z,object:P,attributes:{},index:null}}function p(P,N,W,Z){const k=s.attributes,$=N.attributes;let V=0;const F=W.getAttributes();for(const X in F)if(F[X].location>=0){const te=k[X];let oe=$[X];if(oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;V++}return s.attributesNum!==V||s.index!==Z}function v(P,N,W,Z){const k={},$=N.attributes;let V=0;const F=W.getAttributes();for(const X in F)if(F[X].location>=0){let te=$[X];te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),k[X]=oe,V++}s.attributes=k,s.attributesNum=V,s.index=Z}function M(){const P=s.newAttributes;for(let N=0,W=P.length;N<W;N++)P[N]=0}function _(P){f(P,0)}function f(P,N){const W=s.newAttributes,Z=s.enabledAttributes,k=s.attributeDivisors;W[P]=1,Z[P]===0&&(t.enableVertexAttribArray(P),Z[P]=1),k[P]!==N&&(t.vertexAttribDivisor(P,N),k[P]=N)}function m(){const P=s.newAttributes,N=s.enabledAttributes;for(let W=0,Z=N.length;W<Z;W++)N[W]!==P[W]&&(t.disableVertexAttribArray(W),N[W]=0)}function S(P,N,W,Z,k,$,V){V===!0?t.vertexAttribIPointer(P,N,W,k,$):t.vertexAttribPointer(P,N,W,Z,k,$)}function y(P,N,W,Z){M();const k=Z.attributes,$=W.getAttributes(),V=N.defaultAttributeValues;for(const F in $){const X=$[F];if(X.location>=0){let J=k[F];if(J===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const te=J.normalized,oe=J.itemSize,He=e.get(J);if(He===void 0)continue;const Je=He.buffer,Ye=He.type,K=He.bytesPerElement,ae=Ye===t.INT||Ye===t.UNSIGNED_INT||J.gpuType===Jd;if(J.isInterleavedBufferAttribute){const ie=J.data,De=ie.stride,Ie=J.offset;if(ie.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)f(X.location+be,ie.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let be=0;be<X.locationSize;be++)_(X.location+be);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let be=0;be<X.locationSize;be++)S(X.location+be,oe/X.locationSize,Ye,te,De*K,(Ie+oe/X.locationSize*be)*K,ae)}else{if(J.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)f(X.location+ie,J.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ie=0;ie<X.locationSize;ie++)_(X.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let ie=0;ie<X.locationSize;ie++)S(X.location+ie,oe/X.locationSize,Ye,te,oe*K,oe/X.locationSize*ie*K,ae)}}else if(V!==void 0){const te=V[F];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(X.location,te);break;case 3:t.vertexAttrib3fv(X.location,te);break;case 4:t.vertexAttrib4fv(X.location,te);break;default:t.vertexAttrib1fv(X.location,te)}}}}m()}function T(){A();for(const P in i){const N=i[P];for(const W in N){const Z=N[W];for(const k in Z){const $=Z[k];for(const V in $)d($[V].object),delete $[V];delete Z[k]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const W in N){const Z=N[W];for(const k in Z){const $=Z[k];for(const V in $)d($[V].object),delete $[V];delete Z[k]}}delete i[P.id]}function R(P){for(const N in i){const W=i[N];for(const Z in W){const k=W[Z];if(k[P.id]===void 0)continue;const $=k[P.id];for(const V in $)d($[V].object),delete $[V];delete k[P.id]}}}function g(P){for(const N in i){const W=i[N],Z=P.isInstancedMesh===!0?P.id:0,k=W[Z];if(k!==void 0){for(const $ in k){const V=k[$];for(const F in V)d(V[F].object),delete V[F];delete k[$]}delete W[Z],Object.keys(W).length===0&&delete i[N]}}}function A(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:_,disableUnusedAttributes:m}}function X1(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Y1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==$n&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!g)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:w}}function q1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ar,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,M=h.clipIntersection,_=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!_)s?d(null):c();else{const m=s?0:i,S=m*4;let y=f.clippingState||null;l.value=y,y=d(v,u,S,p);for(let T=0;T!==S;++T)y[T]=n[T];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,v){const M=h!==null?h.length:0;let _=null;if(M!==0){if(_=l.value,v!==!0||_===null){const f=p+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(_===null||_.length<f)&&(_=new Float32Array(f));for(let S=0,y=p;S!==M;++S,y+=4)a.copy(h[S]).applyMatrix4(m,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}const ir=4,Em=[.125,.215,.35,.446,.526,.582],Cr=20,$1=256,la=new vh,wm=new Xe;let fu=null,du=0,hu=0,pu=!1;const K1=new L;class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=K1}=s;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,du,hu),this._renderer.xr.enabled=pu,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:Fi,format:$n,colorSpace:kl,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z1(s)),this._blurMaterial=Q1(s,e,n),this._ggxMaterial=j1(s,e,n)}return r}_compileMaterial(e){const n=new ze(new rn,e);this._renderer.compile(n,la)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(wm),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Lt,new Ra({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let f=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,f=!0):(_.color.copy(wm),f=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const T=this._cubeSize;os(r,y*T,S>2?T:0,T,T),h.setRenderTarget(r),f&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;os(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,la)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,M=this._sizeLods[i],_=3*M*(i>v-ir?i-v+ir:0),f=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,os(s,_,f,3*M,2*M),r.setRenderTarget(s),r.render(o,la),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,os(e,_,f,3*M,2*M),r.setRenderTarget(e),r.render(o,la)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),M=s/v,_=isFinite(s)?1+Math.floor(d*M):Cr;_>Cr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Cr}`);const f=[];let m=0;for(let R=0;R<Cr;++R){const g=R/M,A=Math.exp(-g*g/2);f.push(A),R===0?m+=A:R<_&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=v,u.mipInt.value=S-i;const y=this._sizeLods[r],T=3*y*(r>S-ir?r-S+ir:0),w=4*(this._cubeSize-y);os(n,T,w,3*y,2*y),l.setRenderTarget(n),l.render(h,la)}}function Z1(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+Em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=Em[a-t+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,M=3,_=2,f=1,m=new Float32Array(M*v*p),S=new Float32Array(_*v*p),y=new Float32Array(f*v*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,g=w>2?0:-1,A=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];m.set(A,M*v*w),S.set(u,_*v*w);const b=[w,w,w,w,w,w];y.set(b,f*v*w)}const T=new rn;T.setAttribute("position",new jn(m,M)),T.setAttribute("uv",new jn(S,_)),T.setAttribute("faceIndex",new jn(y,f)),i.push(new ze(T,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Am(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function j1(t,e,n){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Q1(t,e,n){const i=new Float32Array(Cr),r=new L(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Rm(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Cm(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class F_ extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new C_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lt(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Pi});s.uniforms.tEquirect.value=n;const a=new ze(r,s),o=n.minFilter;return n.minFilter===Dr&&(n.minFilter=en),new nM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function J1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Bc||p===zc)if(e.has(u)){const v=e.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const M=new F_(v.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const p=u.mapping,v=p===Bc||p===zc,M=p===Vr||p===zs;if(v||M){let _=n.get(u);const f=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Tm(t)),_=v?i.fromEquirectangular(u,_):i.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),_.texture;if(_!==void 0)return _.texture;{const m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Tm(t)),_=v?i.fromEquirectangular(u):i.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,n.set(u,_),u.addEventListener("dispose",d),_.texture):null}}}return u}function o(u,p){return p===Bc?u.mapping=Vr:p===zc&&(u.mapping=zs),u}function l(u){let p=0;const v=6;for(let M=0;M<v;M++)u[M]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ps("WebGLRenderer: "+i+" extension not supported."),r}}}function tw(t,e,n,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let S=0,y=m.length;S<y;S+=3){const T=m[S+0],w=m[S+1],R=m[S+2];u.push(T,w,w,R,R,T)}}else{const m=v.array;M=v.version;for(let S=0,y=m.length/3-1;S<y;S+=3){const T=S+0,w=S+1,R=S+2;u.push(T,w,w,R,R,T)}}const _=new(v.count>=65535?A_:T_)(u,1);_.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,_)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function nw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*a),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*a,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let M=0;for(let _=0;_<p;_++)M+=u[_];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function iw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rw(t,e,n){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let b=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),_===!0&&(y=3);let T=o.attributes.position.count*y,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*h),g=new E_(R,T,w,h);g.type=fi,g.needsUpdate=!0;const A=y*4;for(let P=0;P<h;P++){const N=f[P],W=m[P],Z=S[P],k=T*w*4*P;for(let $=0;$<N.count;$++){const V=$*A;v===!0&&(r.fromBufferAttribute(N,$),R[k+V+0]=r.x,R[k+V+1]=r.y,R[k+V+2]=r.z,R[k+V+3]=0),M===!0&&(r.fromBufferAttribute(W,$),R[k+V+4]=r.x,R[k+V+5]=r.y,R[k+V+6]=r.z,R[k+V+7]=0),_===!0&&(r.fromBufferAttribute(Z,$),R[k+V+8]=r.x,R[k+V+9]=r.y,R[k+V+10]=r.z,R[k+V+11]=Z.itemSize===4?r.w:1)}}u={count:h,texture:g,size:new Be(T,w)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function sw(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const aw={[l_]:"LINEAR_TONE_MAPPING",[c_]:"REINHARD_TONE_MAPPING",[u_]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[d_]:"AGX_TONE_MAPPING",[h_]:"NEUTRAL_TONE_MAPPING",[f_]:"CUSTOM_TONE_MAPPING"};function ow(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Vs(e,n):void 0}),o=new gi(e,n,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new rn;l.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pt([0,2,0,0,2,0],2));const c=new qS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ze(l,c),h=new vh(-1,1,1,-1,0,1);let u=null,p=null,v=!1,M,_=null,f=[],m=!1;this.setSize=function(S,y){a.setSize(S,y),o.setSize(S,y);for(let T=0;T<f.length;T++){const w=f[T];w.setSize&&w.setSize(S,y)}},this.setEffects=function(S){f=S,m=f.length>0&&f[0].isRenderPass===!0;const y=a.width,T=a.height;for(let w=0;w<f.length;w++){const R=f[w];R.setSize&&R.setSize(y,T)}},this.begin=function(S,y){if(v||S.toneMapping===mi&&f.length===0)return!1;if(_=y,y!==null){const T=y.width,w=y.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return m===!1&&S.setRenderTarget(a),M=S.toneMapping,S.toneMapping=mi,!0},this.hasRenderPass=function(){return m},this.end=function(S,y){S.toneMapping=M,v=!0;let T=a,w=o;for(let R=0;R<f.length;R++){const g=f[R];if(g.enabled!==!1&&(g.render(S,w,T,y),g.needsSwap!==!1)){const A=T;T=w,w=A}}if(u!==S.outputColorSpace||p!==S.toneMapping){u=S.outputColorSpace,p=S.toneMapping,c.defines={},qe.getTransfer(u)===tt&&(c.defines.SRGB_TRANSFER="");const R=aw[p];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(_),S.render(d,h),_=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const O_=new tn,td=new Vs(1,1),k_=new E_,B_=new ES,z_=new C_,bm=[],Pm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Nm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Nm.set(i),t.uniformMatrix2fv(this.addr,!1,Nm),Ot(n,i)}}function hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Ot(n,i)}}function pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Ot(n,i)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(td.compareFunction=n.isReversedDepthBuffer()?ah:sh,s=td):s=O_,n.setTexture2D(e||s,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||B_,r)}function Tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||z_,r)}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||k_,r)}function Rw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return _w;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Aw}}function Cw(t,e){t.uniform1fv(this.addr,e)}function bw(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Pw(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Lw(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function Dw(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Nw(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Iw(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Uw(t,e){t.uniform1iv(this.addr,e)}function Fw(t,e){t.uniform2iv(this.addr,e)}function Ow(t,e){t.uniform3iv(this.addr,e)}function kw(t,e){t.uniform4iv(this.addr,e)}function Bw(t,e){t.uniform1uiv(this.addr,e)}function zw(t,e){t.uniform2uiv(this.addr,e)}function Vw(t,e){t.uniform3uiv(this.addr,e)}function Hw(t,e){t.uniform4uiv(this.addr,e)}function Gw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=td:a=O_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Ww(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||B_,s[a])}function Xw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||z_,s[a])}function Yw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||k_,s[a])}function qw(t){switch(t){case 5126:return Cw;case 35664:return bw;case 35665:return Pw;case 35666:return Lw;case 35674:return Dw;case 35675:return Nw;case 35676:return Iw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return kw;case 5125:return Bw;case 36294:return zw;case 36295:return Vw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return Yw}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Rw(n.type)}}class Kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qw(n.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function jw(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Im(n,c===void 0?new $w(o,t,e):new Kw(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Zw(o),Im(n,h)),n=h}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);jw(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Qw=37297;let Jw=0;function eT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Fm=new Ne;function tT(t){qe._getMatrix(Fm,qe.workingColorSpace,t);const e=`mat3( ${Fm.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case Bl:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+eT(t.getShaderSource(e),o)}else return s}function nT(t,e){const n=tT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const iT={[l_]:"Linear",[c_]:"Reinhard",[u_]:"Cineon",[Qd]:"ACESFilmic",[d_]:"AgX",[h_]:"Neutral",[f_]:"Custom"};function rT(t,e){const n=iT[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yo=new L;function sT(){qe.getLuminanceCoefficients(Yo);const t=Yo.x.toFixed(4),e=Yo.y.toFixed(4),n=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function oT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ma(t){return t!==""}function km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(t){return t.replace(cT,fT)}const uT=new Map;function fT(t,e){let n=Oe[e];if(n===void 0){const i=uT.get(e);if(i!==void 0)n=Oe[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nd(n)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(dT,hT)}function hT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pT={[sl]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function mT(t){return pT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gT={[Vr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function _T(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":gT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const vT={[zs]:"ENVMAP_MODE_REFRACTION"};function xT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":vT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yT={[o_]:"ENVMAP_BLENDING_MULTIPLY",[Vy]:"ENVMAP_BLENDING_MIX",[Hy]:"ENVMAP_BLENDING_ADD"};function ST(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":yT[t.combine]||"ENVMAP_BLENDING_NONE"}function MT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ET(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=mT(n),c=_T(n),d=xT(n),h=ST(n),u=MT(n),p=aT(n),v=oT(s),M=r.createProgram();let _,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ma).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ma).join(`
`),f.length>0&&(f+=`
`)):(_=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),f=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==mi?rT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,nT("linearToOutputTexel",n.outputColorSpace),sT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ma).join(`
`)),a=nd(a),a=km(a,n),a=Bm(a,n),o=nd(o),o=km(o,n),o=Bm(o,n),a=zm(a),o=zm(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=m+_+a,y=m+f+o,T=Um(r,r.VERTEX_SHADER,S),w=Um(r,r.FRAGMENT_SHADER,y);r.attachShader(M,T),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(T)||"",Z=r.getShaderInfoLog(w)||"",k=N.trim(),$=W.trim(),V=Z.trim();let F=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,w);else{const J=Om(r,T,"vertex"),te=Om(r,w,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+J+`
`+te)}else k!==""?Le("WebGLProgram: Program Info Log:",k):($===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:F,programLog:k,vertexShader:{log:$,prefix:_},fragmentShader:{log:V,prefix:f}})}r.deleteShader(T),r.deleteShader(w),g=new ul(r,M),A=lT(r,M)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,Qw)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let wT=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AT(e),n.set(e,i)),i}}class AT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function RT(t){return t===Hr||t===Fl||t===Ol}function CT(t,e,n,i,r,s){const a=new ch,o=new TT,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function M(g,A,b,P,N,W){const Z=P.fog,k=N.geometry,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,F=e.get(g.envMap||$,V),X=F&&F.mapping===sc?F.image.height:null,J=p[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));const te=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=te!==void 0?te.length:0;let He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let Je,Ye,K,ae;if(J){const Me=li[J];Je=Me.vertexShader,Ye=Me.fragmentShader}else{Je=g.vertexShader,Ye=g.fragmentShader;const Me=o.getVertexShaderStage(g),yt=o.getFragmentShaderStage(g);o.update(g,Me,yt),K=Me.id,ae=yt.id}const ie=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Et=!!g.map,Ge=!!g.matcap,rt=!!F,Qe=!!g.aoMap,Ke=!!g.lightMap,Ct=!!g.bumpMap&&g.wireframe===!1,Nt=!!g.normalMap,kt=!!g.displacementMap,Gt=!!g.emissiveMap,xt=!!g.metalnessMap,bt=!!g.roughnessMap,I=g.anisotropy>0,dn=g.clearcoat>0,et=g.dispersion>0,C=g.iridescence>0,x=g.sheen>0,O=g.transmission>0,H=I&&!!g.anisotropyMap,Y=dn&&!!g.clearcoatMap,se=dn&&!!g.clearcoatNormalMap,ce=dn&&!!g.clearcoatRoughnessMap,q=C&&!!g.iridescenceMap,Q=C&&!!g.iridescenceThicknessMap,ue=x&&!!g.sheenColorMap,Te=x&&!!g.sheenRoughnessMap,he=!!g.specularMap,fe=!!g.specularColorMap,Ce=!!g.specularIntensityMap,Pe=O&&!!g.transmissionMap,Ue=O&&!!g.thicknessMap,D=!!g.gradientMap,le=!!g.alphaMap,j=g.alphaTest>0,de=!!g.alphaHash,ve=!!g.extensions;let ee=mi;g.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ee=t.toneMapping);const we={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:Je,fragmentShader:Ye,defines:g.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Et,matcap:Ge,envMap:rt,envMapMode:rt&&F.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:Ke,bumpMap:Ct,normalMap:Nt,displacementMap:kt,emissiveMap:Gt,normalMapObjectSpace:Nt&&g.normalMapType===Xy,normalMapTangentSpace:Nt&&g.normalMapType===Qf,packedNormalMap:Nt&&g.normalMapType===Qf&&RT(g.normalMap.format),metalnessMap:xt,roughnessMap:bt,anisotropy:I,anisotropyMap:H,clearcoat:dn,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:ce,dispersion:et,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:ue,sheenRoughnessMap:Te,specularMap:he,specularColorMap:fe,specularIntensityMap:Ce,transmission:O,transmissionMap:Pe,thicknessMap:Ue,gradientMap:D,opaque:g.transparent===!1&&g.blending===bs&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:j,alphaHash:de,combine:g.combine,mapUv:Et&&v(g.map.channel),aoMapUv:Qe&&v(g.aoMap.channel),lightMapUv:Ke&&v(g.lightMap.channel),bumpMapUv:Ct&&v(g.bumpMap.channel),normalMapUv:Nt&&v(g.normalMap.channel),displacementMapUv:kt&&v(g.displacementMap.channel),emissiveMapUv:Gt&&v(g.emissiveMap.channel),metalnessMapUv:xt&&v(g.metalnessMap.channel),roughnessMapUv:bt&&v(g.roughnessMap.channel),anisotropyMapUv:H&&v(g.anisotropyMap.channel),clearcoatMapUv:Y&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(g.sheenRoughnessMap.channel),specularMapUv:he&&v(g.specularMap.channel),specularColorMapUv:fe&&v(g.specularColorMap.channel),specularIntensityMapUv:Ce&&v(g.specularIntensityMap.channel),transmissionMapUv:Pe&&v(g.transmissionMap.channel),thicknessMapUv:Ue&&v(g.thicknessMap.channel),alphaMapUv:le&&v(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Nt||I),vertexNormals:!!k.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(Et||le),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||k.attributes.normal===void 0&&Nt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:De,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:Et&&g.map.isVideoTexture===!0&&qe.getTransfer(g.map.colorSpace)===tt,decodeVideoTextureEmissive:Gt&&g.emissiveMap.isVideoTexture===!0&&qe.getTransfer(g.emissiveMap.colorSpace)===tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ui,flipSided:g.side===cn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ve&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&g.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function _(g){const A=[];if(g.shaderID?A.push(g.shaderID):(A.push(g.customVertexShaderID),A.push(g.customFragmentShaderID)),g.defines!==void 0)for(const b in g.defines)A.push(b),A.push(g.defines[b]);return g.isRawShaderMaterial===!1&&(f(A,g),m(A,g),A.push(t.outputColorSpace)),A.push(g.customProgramCacheKey),A.join()}function f(g,A){g.push(A.precision),g.push(A.outputColorSpace),g.push(A.envMapMode),g.push(A.envMapCubeUVHeight),g.push(A.mapUv),g.push(A.alphaMapUv),g.push(A.lightMapUv),g.push(A.aoMapUv),g.push(A.bumpMapUv),g.push(A.normalMapUv),g.push(A.displacementMapUv),g.push(A.emissiveMapUv),g.push(A.metalnessMapUv),g.push(A.roughnessMapUv),g.push(A.anisotropyMapUv),g.push(A.clearcoatMapUv),g.push(A.clearcoatNormalMapUv),g.push(A.clearcoatRoughnessMapUv),g.push(A.iridescenceMapUv),g.push(A.iridescenceThicknessMapUv),g.push(A.sheenColorMapUv),g.push(A.sheenRoughnessMapUv),g.push(A.specularMapUv),g.push(A.specularColorMapUv),g.push(A.specularIntensityMapUv),g.push(A.transmissionMapUv),g.push(A.thicknessMapUv),g.push(A.combine),g.push(A.fogExp2),g.push(A.sizeAttenuation),g.push(A.morphTargetsCount),g.push(A.morphAttributeCount),g.push(A.numDirLights),g.push(A.numPointLights),g.push(A.numSpotLights),g.push(A.numSpotLightMaps),g.push(A.numHemiLights),g.push(A.numRectAreaLights),g.push(A.numDirLightShadows),g.push(A.numPointLightShadows),g.push(A.numSpotLightShadows),g.push(A.numSpotLightShadowsWithMaps),g.push(A.numLightProbes),g.push(A.shadowMapType),g.push(A.toneMapping),g.push(A.numClippingPlanes),g.push(A.numClipIntersection),g.push(A.depthPacking)}function m(g,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const A=p[g.type];let b;if(A){const P=li[A];b=L_.clone(P.uniforms)}else b=g.uniforms;return b}function y(g,A){let b=d.get(A);return b!==void 0?++b.usedTimes:(b=new ET(t,A,g,r),c.push(b),d.set(A,b)),b}function T(g){if(--g.usedTimes===0){const A=c.indexOf(g);c[A]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:S,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function bT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function PT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,M,_,f){let m=t[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:_,group:f},t[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=a(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=_,m.group=f),e++,m}function l(u,p,v,M,_,f){const m=o(u,p,v,M,_,f);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function c(u,p,v,M,_,f){const m=o(u,p,v,M,_,f);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function d(u,p,v){n.length>1&&n.sort(u||PT),i.length>1&&i.sort(p||Hm),r.length>1&&r.sort(p||Hm),v&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function LT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gm,t.set(i,[a])):r>=s.length?(a=new Gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function DT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Xe};break;case"SpotLight":n={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function NT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IT=0;function UT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function FT(t){const e=new DT,n=NT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new ht,a=new ht;function o(c){let d=0,h=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,M=0,_=0,f=0,m=0,S=0,y=0,T=0,w=0,R=0;c.sort(UT);for(let A=0,b=c.length;A<b;A++){const P=c[A],N=P.color,W=P.intensity,Z=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hr?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=N.r*W,h+=N.g*W,u+=N.b*W;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],W);R++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,F=n.get(P);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,m++}i.directional[p]=$,p++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(N).multiplyScalar(W),$.distance=Z,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[M]=$;const V=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,V.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[M]=V.matrix,P.castShadow){const F=n.get(P);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,i.spotShadow[M]=F,i.spotShadowMap[M]=k,y++}M++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(N).multiplyScalar(W),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=$,_++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const V=P.shadow,F=n.get(P);F.shadowIntensity=V.intensity,F.shadowBias=V.bias,F.shadowNormalBias=V.normalBias,F.shadowRadius=V.radius,F.shadowMapSize=V.mapSize,F.shadowCameraNear=V.camera.near,F.shadowCameraFar=V.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=P.shadow.matrix,S++}i.point[v]=$,v++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(W),$.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[f]=$,f++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const g=i.hash;(g.directionalLength!==p||g.pointLength!==v||g.spotLength!==M||g.rectAreaLength!==_||g.hemiLength!==f||g.numDirectionalShadows!==m||g.numPointShadows!==S||g.numSpotShadows!==y||g.numSpotMaps!==T||g.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=_,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,g.directionalLength=p,g.pointLength=v,g.spotLength=M,g.rectAreaLength=_,g.hemiLength=f,g.numDirectionalShadows=m,g.numPointShadows=S,g.numSpotShadows=y,g.numSpotMaps=T,g.numLightProbes=R,i.version=IT++)}function l(c,d){let h=0,u=0,p=0,v=0,M=0;const _=d.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const S=c[f];if(S.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),p++}else if(S.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(S.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),u++}else if(S.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(_),M++}}}return{setup:o,setupView:l,state:i}}function Wm(t){const e=new FT(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function OT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wm(t),e.set(r,[o])):s>=a.length?(o=new Wm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zT=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],VT=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Xm=new ht,ca=new L,gu=new L;function HT(t,e,n){let i=new dh;const r=new Be,s=new Be,a=new gt,o=new $S,l=new KS,c={},d=n.maxTextureSize,h={[pr]:cn,[cn]:pr,[ui]:ui},u=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:kT,fragmentShader:BT}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new rn;v.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ze(v,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let f=this.type;this.render=function(w,R,g){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===a_&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sl);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Pi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=f!==this.type;W&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(k=>k.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,k=w.length;Z<k;Z++){const $=w[Z],V=$.shadow;if(V===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const F=V.getFrameExtents();r.multiply(F),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,V.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pa){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gi(r.x,r.y,{format:Hr,type:Fi,minFilter:en,magFilter:en,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Vs(r.x,r.y,fi),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Oi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt}else $.isPointLight?(V.map=new F_(r.x),V.map.depthTexture=new GS(r.x,_i)):(V.map=new gi(r.x,r.y),V.map.depthTexture=new Vs(r.x,r.y,_i)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Oi,this.type===sl?(V.map.depthTexture.compareFunction=X?ah:sh,V.map.depthTexture.minFilter=en,V.map.depthTexture.magFilter=en):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt);V.camera.updateProjectionMatrix()}const J=V.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<J;te++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,te),t.clear();else{te===0&&(t.setRenderTarget(V.map),t.clear());const oe=V.getViewport(te);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),N.viewport(a)}if($.isPointLight){const oe=V.camera,He=V.matrix,Je=$.distance||oe.far;Je!==oe.far&&(oe.far=Je,oe.updateProjectionMatrix()),ca.setFromMatrixPosition($.matrixWorld),oe.position.copy(ca),gu.copy(oe.position),gu.add(zT[te]),oe.up.copy(VT[te]),oe.lookAt(gu),oe.updateMatrixWorld(),He.makeTranslation(-ca.x,-ca.y,-ca.z),Xm.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Xm,oe.coordinateSystem,oe.reversedDepth)}else V.updateMatrices($);i=V.getFrustum(),y(R,g,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===pa&&m(V,g),V.needsUpdate=!1}f=this.type,_.needsUpdate=!1,t.setRenderTarget(A,b,P)};function m(w,R){const g=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new gi(r.x,r.y,{format:Hr,type:Fi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,g,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,g,p,M,null)}function S(w,R,g,A){let b=null;const P=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=g.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=b.uuid,W=R.uuid;let Z=c[N];Z===void 0&&(Z={},c[N]=Z);let k=Z[W];k===void 0&&(k=b.clone(),Z[W]=k,R.addEventListener("dispose",T)),b=k}if(b.visible=R.visible,b.wireframe=R.wireframe,A===pa?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:h[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,g.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=t.properties.get(b);N.light=g}return b}function y(w,R,g,A,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===pa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Z=w.material;if(Array.isArray(Z)){const k=W.groups;for(let $=0,V=k.length;$<V;$++){const F=k[$],X=Z[F.materialIndex];if(X&&X.visible){const J=S(w,X,A,b);w.onBeforeShadow(t,w,R,g,W,J,F),t.renderBufferDirect(g,null,W,J,w,F),w.onAfterShadow(t,w,R,g,W,J,F)}}}else if(Z.visible){const k=S(w,Z,A,b);w.onBeforeShadow(t,w,R,g,W,k,null),t.renderBufferDirect(g,null,W,k,w,null),w.onAfterShadow(t,w,R,g,W,k,null)}}const N=w.children;for(let W=0,Z=N.length;W<Z;W++)y(N[W],R,g,A,b)}function T(w){w.target.removeEventListener("dispose",T);for(const g in c){const A=c[g],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function GT(t,e){function n(){let D=!1;const le=new gt;let j=null;const de=new gt(0,0,0,0);return{setMask:function(ve){j!==ve&&!D&&(t.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){D=ve},setClear:function(ve,ee,we,Me,yt){yt===!0&&(ve*=Me,ee*=Me,we*=Me),le.set(ve,ee,we,Me),de.equals(le)===!1&&(t.clearColor(ve,ee,we,Me),de.copy(le))},reset:function(){D=!1,j=null,de.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,j=null,de=null,ve=null;return{setReversed:function(ee){if(le!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Me=ve;ve=null,this.setClear(Me)}},getReversed:function(){return le},setTest:function(ee){ee?ie(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ee){j!==ee&&!D&&(t.depthMask(ee),j=ee)},setFunc:function(ee){if(le&&(ee=tS[ee]),de!==ee){switch(ee){case pf:t.depthFunc(t.NEVER);break;case mf:t.depthFunc(t.ALWAYS);break;case gf:t.depthFunc(t.LESS);break;case Bs:t.depthFunc(t.LEQUAL);break;case _f:t.depthFunc(t.EQUAL);break;case vf:t.depthFunc(t.GEQUAL);break;case xf:t.depthFunc(t.GREATER);break;case yf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ve!==ee&&(ve=ee,le&&(ee=1-ee),t.clearDepth(ee))},reset:function(){D=!1,j=null,de=null,ve=null,le=!1}}}function r(){let D=!1,le=null,j=null,de=null,ve=null,ee=null,we=null,Me=null,yt=null;return{setTest:function(ot){D||(ot?ie(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ot){le!==ot&&!D&&(t.stencilMask(ot),le=ot)},setFunc:function(ot,ei,ti){(j!==ot||de!==ei||ve!==ti)&&(t.stencilFunc(ot,ei,ti),j=ot,de=ei,ve=ti)},setOp:function(ot,ei,ti){(ee!==ot||we!==ei||Me!==ti)&&(t.stencilOp(ot,ei,ti),ee=ot,we=ei,Me=ti)},setLocked:function(ot){D=ot},setClear:function(ot){yt!==ot&&(t.clearStencil(ot),yt=ot)},reset:function(){D=!1,le=null,j=null,de=null,ve=null,ee=null,we=null,Me=null,yt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],M=null,_=!1,f=null,m=null,S=null,y=null,T=null,w=null,R=null,g=new Xe(0,0,0),A=0,b=!1,P=null,N=null,W=null,Z=null,k=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,F=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=F>=2);let J=null,te={};const oe=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),Je=new gt().fromArray(oe),Ye=new gt().fromArray(He);function K(D,le,j,de){const ve=new Uint8Array(4),ee=t.createTexture();t.bindTexture(D,ee),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<j;we++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(le+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ee}const ae={};ae[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Bs),Ct(!1),Nt(Hp),ie(t.CULL_FACE),Qe(Pi);function ie(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function De(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ie(D,le){return u[D]!==le?(t.bindFramebuffer(D,le),u[D]=le,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=le),!0):!1}function be(D,le){let j=v,de=!1;if(D){j=p.get(le),j===void 0&&(j=[],p.set(le,j));const ve=D.textures;if(j.length!==ve.length||j[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,we=ve.length;ee<we;ee++)j[ee]=t.COLOR_ATTACHMENT0+ee;j.length=ve.length,de=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,de=!0);de&&t.drawBuffers(j)}function Et(D){return M!==D?(t.useProgram(D),M=D,!0):!1}const Ge={[Rr]:t.FUNC_ADD,[wy]:t.FUNC_SUBTRACT,[Ty]:t.FUNC_REVERSE_SUBTRACT};Ge[Ay]=t.MIN,Ge[Ry]=t.MAX;const rt={[Cy]:t.ZERO,[by]:t.ONE,[Py]:t.SRC_COLOR,[df]:t.SRC_ALPHA,[Fy]:t.SRC_ALPHA_SATURATE,[Iy]:t.DST_COLOR,[Dy]:t.DST_ALPHA,[Ly]:t.ONE_MINUS_SRC_COLOR,[hf]:t.ONE_MINUS_SRC_ALPHA,[Uy]:t.ONE_MINUS_DST_COLOR,[Ny]:t.ONE_MINUS_DST_ALPHA,[Oy]:t.CONSTANT_COLOR,[ky]:t.ONE_MINUS_CONSTANT_COLOR,[By]:t.CONSTANT_ALPHA,[zy]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,le,j,de,ve,ee,we,Me,yt,ot){if(D===Pi){_===!0&&(De(t.BLEND),_=!1);return}if(_===!1&&(ie(t.BLEND),_=!0),D!==Ey){if(D!==f||ot!==b){if((m!==Rr||T!==Rr)&&(t.blendEquation(t.FUNC_ADD),m=Rr,T=Rr),ot)switch(D){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.ONE,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",D);break}else switch(D){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Wp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",D);break}S=null,y=null,w=null,R=null,g.set(0,0,0),A=0,f=D,b=ot}return}ve=ve||le,ee=ee||j,we=we||de,(le!==m||ve!==T)&&(t.blendEquationSeparate(Ge[le],Ge[ve]),m=le,T=ve),(j!==S||de!==y||ee!==w||we!==R)&&(t.blendFuncSeparate(rt[j],rt[de],rt[ee],rt[we]),S=j,y=de,w=ee,R=we),(Me.equals(g)===!1||yt!==A)&&(t.blendColor(Me.r,Me.g,Me.b,yt),g.copy(Me),A=yt),f=D,b=!1}function Ke(D,le){D.side===ui?De(t.CULL_FACE):ie(t.CULL_FACE);let j=D.side===cn;le&&(j=!j),Ct(j),D.blending===bs&&D.transparent===!1?Qe(Pi):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function Nt(D){D!==Sy?(ie(t.CULL_FACE),D!==N&&(D===Hp?t.cullFace(t.BACK):D===My?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),N=D}function kt(D){D!==W&&(V&&t.lineWidth(D),W=D)}function Gt(D,le,j){D?(ie(t.POLYGON_OFFSET_FILL),(Z!==le||k!==j)&&(Z=le,k=j,a.getReversed()&&(le=-le),t.polygonOffset(le,j))):De(t.POLYGON_OFFSET_FILL)}function xt(D){D?ie(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function bt(D){D===void 0&&(D=t.TEXTURE0+$-1),J!==D&&(t.activeTexture(D),J=D)}function I(D,le,j){j===void 0&&(J===null?j=t.TEXTURE0+$-1:j=J);let de=te[j];de===void 0&&(de={type:void 0,texture:void 0},te[j]=de),(de.type!==D||de.texture!==le)&&(J!==j&&(t.activeTexture(j),J=j),t.bindTexture(D,le||ae[D]),de.type=D,de.texture=le)}function dn(){const D=te[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function x(){try{t.texSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function O(){try{t.texSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Y(){try{t.compressedTexSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function se(){try{t.texStorage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function ce(){try{t.texStorage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function q(){try{t.texImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Q(){try{t.texImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function ue(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function Te(D,le){h[D]!==le&&(t.pixelStorei(D,le),h[D]=le)}function he(D){Je.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function fe(D){Ye.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function Ce(D,le){let j=c.get(le);j===void 0&&(j=new WeakMap,c.set(le,j));let de=j.get(D);de===void 0&&(de=t.getUniformBlockIndex(le,D.name),j.set(D,de))}function Pe(D,le){const de=c.get(le).get(D);l.get(le)!==de&&(t.uniformBlockBinding(le,de,D.__bindingPointIndex),l.set(le,de))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},J=null,te={},u={},p=new WeakMap,v=[],M=null,_=!1,f=null,m=null,S=null,y=null,T=null,w=null,R=null,g=new Xe(0,0,0),A=0,b=!1,P=null,N=null,W=null,Z=null,k=null,Je.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:De,bindFramebuffer:Ie,drawBuffers:be,useProgram:Et,setBlending:Qe,setMaterial:Ke,setFlipSided:Ct,setCullFace:Nt,setLineWidth:kt,setPolygonOffset:Gt,setScissorTest:xt,activeTexture:bt,bindTexture:I,unbindTexture:dn,compressedTexImage2D:et,compressedTexImage3D:C,texImage2D:q,texImage3D:Q,pixelStorei:Te,getParameter:ue,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:se,texStorage3D:ce,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:he,viewport:fe,reset:Ue}}function WT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return v?new OffscreenCanvas(C,x):zl("canvas")}function _(C,x,O){let H=1;const Y=et(C);if((Y.width>O||Y.height>O)&&(H=O/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(H*Y.width),ce=Math.floor(H*Y.height);u===void 0&&(u=M(se,ce));const q=x?M(se,ce):u;return q.width=se,q.height=ce,q.getContext("2d").drawImage(C,0,0,se,ce),Le("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+ce+")."),q}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){t.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(C,x,O,H,Y,se=!1){if(C!==null){if(t[C]!==void 0)return t[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),O===t.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),x===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),x===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),O===t.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),x===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),x===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),x===t.RGB&&(O===t.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),O===t.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),x===t.RGBA){const Q=se?Bl:qe.getTransfer(Y);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Q===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),O===t.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(C,x){let O;return C?x===null||x===_i||x===Ya?O=t.DEPTH24_STENCIL8:x===fi?O=t.DEPTH32F_STENCIL8:x===Xa&&(O=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_i||x===Ya?O=t.DEPTH_COMPONENT24:x===fi?O=t.DEPTH_COMPONENT32F:x===Xa&&(O=t.DEPTH_COMPONENT16),O}function w(C,x){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),A(x),x.isVideoTexture&&d.delete(x),x.isHTMLTexture&&h.delete(x)}function g(C){const x=C.target;x.removeEventListener("dispose",g),P(x)}function A(C){const x=i.get(C);if(x.__webglInit===void 0)return;const O=C.source,H=p.get(O);if(H){const Y=H[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(C),Object.keys(H).length===0&&p.delete(O)}i.remove(C)}function b(C){const x=i.get(C);t.deleteTexture(x.__webglTexture);const O=C.source,H=p.get(O);delete H[x.__cacheKey],a.memory.textures--}function P(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let Y=0;Y<x.__webglFramebuffer[H].length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[H][Y]);else t.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)t.deleteFramebuffer(x.__webglFramebuffer[H]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=C.textures;for(let H=0,Y=O.length;H<Y;H++){const se=i.get(O[H]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(O[H])}i.remove(C)}let N=0;function W(){N=0}function Z(){return N}function k(C){N=C}function $(){const C=N;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function F(C,x){const O=i.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const H=C.image;if(H===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{De(O,C,x);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+x)}function X(C,x){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){De(O,C,x);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+x)}function J(C,x){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){De(O,C,x);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+x)}function te(C,x){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Ie(O,C,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+x)}const oe={[Ul]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},He={[Xt]:t.NEAREST,[Gy]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[en]:t.LINEAR,[Vc]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},Je={[Yy]:t.NEVER,[jy]:t.ALWAYS,[qy]:t.LESS,[sh]:t.LEQUAL,[$y]:t.EQUAL,[ah]:t.GEQUAL,[Ky]:t.GREATER,[Zy]:t.NOTEQUAL};function Ye(C,x){if(x.type===fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Vc||x.magFilter===Mo||x.magFilter===Dr||x.minFilter===en||x.minFilter===Vc||x.minFilter===Mo||x.minFilter===Dr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,oe[x.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,He[x.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,He[x.minFilter]),x.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Je[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Mo&&x.minFilter!==Dr||x.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function K(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let Y=p.get(H);Y===void 0&&(Y={},p.set(H,Y));const se=V(x);if(se!==C.__cacheKey){Y[se]===void 0&&(Y[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[se].usedTimes++;const ce=Y[C.__cacheKey];ce!==void 0&&(Y[C.__cacheKey].usedTimes--,ce.usedTimes===0&&b(x)),C.__cacheKey=se,C.__webglTexture=Y[se].texture}return O}function ae(C,x,O){return Math.floor(Math.floor(C/O)/x)}function ie(C,x,O,H){const se=C.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,O,H,x.data);else{se.sort((Te,he)=>Te.start-he.start);let ce=0;for(let Te=1;Te<se.length;Te++){const he=se[ce],fe=se[Te],Ce=he.start+he.count,Pe=ae(fe.start,x.width,4),Ue=ae(he.start,x.width,4);fe.start<=Ce+1&&Pe===Ue&&ae(fe.start+fe.count-1,x.width,4)===Pe?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++ce,se[ce]=fe)}se.length=ce+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Te=0,he=se.length;Te<he;Te++){const fe=se[Te],Ce=Math.floor(fe.start/4),Pe=Math.ceil(fe.count/4),Ue=Ce%x.width,D=Math.floor(Ce/x.width),le=Pe,j=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ue,D,le,j,O,H,x.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function De(C,x,O){let H=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=t.TEXTURE_3D);const Y=K(C,x),se=x.source;n.bindTexture(H,C.__webglTexture,t.TEXTURE0+O);const ce=i.get(se);if(se.version!==ce.__version||Y===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=qe.getPrimaries(qe.workingColorSpace),de=x.colorSpace===er?null:qe.getPrimaries(x.colorSpace),ve=x.colorSpace===er||j===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=_(x.image,!1,r.maxTextureSize);Q=dn(x,Q);const ue=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let he=y(x.internalFormat,ue,Te,x.normalized,x.colorSpace,x.isVideoTexture);Ye(H,x);let fe;const Ce=x.mipmaps,Pe=x.isVideoTexture!==!0,Ue=ce.__version===void 0||Y===!0,D=se.dataReady,le=w(x,Q);if(x.isDepthTexture)he=T(x.format===Nr,x.type),Ue&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,he,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,he,Q.width,Q.height,0,ue,Te,null));else if(x.isDataTexture)if(Ce.length>0){Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,le,he,Ce[0].width,Ce[0].height);for(let j=0,de=Ce.length;j<de;j++)fe=Ce[j],Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,ue,Te,fe.data):n.texImage2D(t.TEXTURE_2D,j,he,fe.width,fe.height,0,ue,Te,fe.data);x.generateMipmaps=!1}else Pe?(Ue&&n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height),D&&ie(x,Q,ue,Te)):n.texImage2D(t.TEXTURE_2D,0,he,Q.width,Q.height,0,ue,Te,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Ce[0].width,Ce[0].height,Q.depth);for(let j=0,de=Ce.length;j<de;j++)if(fe=Ce[j],x.format!==$n)if(ue!==null)if(Pe){if(D)if(x.layerUpdates.size>0){const ve=Mm(fe.width,fe.height,x.format,x.type);for(const ee of x.layerUpdates){const we=fe.data.subarray(ee*ve/fe.data.BYTES_PER_ELEMENT,(ee+1)*ve/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,ee,fe.width,fe.height,1,ue,we)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Q.depth,ue,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,j,he,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,Q.depth,ue,Te,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,j,he,fe.width,fe.height,Q.depth,0,ue,Te,fe.data)}else{Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,le,he,Ce[0].width,Ce[0].height);for(let j=0,de=Ce.length;j<de;j++)fe=Ce[j],x.format!==$n?ue!==null?Pe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,ue,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,j,he,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,fe.width,fe.height,ue,Te,fe.data):n.texImage2D(t.TEXTURE_2D,j,he,fe.width,fe.height,0,ue,Te,fe.data)}else if(x.isDataArrayTexture)if(Pe){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Q.width,Q.height,Q.depth),D)if(x.layerUpdates.size>0){const j=Mm(Q.width,Q.height,x.format,x.type);for(const de of x.layerUpdates){const ve=Q.data.subarray(de*j/Q.data.BYTES_PER_ELEMENT,(de+1)*j/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ue,Te,ve)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(x.isData3DTexture)Pe?(Ue&&n.texStorage3D(t.TEXTURE_3D,le,he,Q.width,Q.height,Q.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Te,Q.data)):n.texImage3D(t.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ue,Te,Q.data);else if(x.isFramebufferTexture){if(Ue)if(Pe)n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height);else{let j=Q.width,de=Q.height;for(let ve=0;ve<le;ve++)n.texImage2D(t.TEXTURE_2D,ve,he,j,de,0,ue,Te,null),j>>=1,de>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const j=t.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),h.add(x),j.onpaint=de=>{const ve=de.changedElements;for(const ee of h)ve.includes(ee.image)&&(ee.needsUpdate=!0)},j.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ve=t.RGBA,ee=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,ee,we,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Ue){const j=et(Ce[0]);n.texStorage2D(t.TEXTURE_2D,le,he,j.width,j.height)}for(let j=0,de=Ce.length;j<de;j++)fe=Ce[j],Pe?D&&n.texSubImage2D(t.TEXTURE_2D,j,0,0,ue,Te,fe):n.texImage2D(t.TEXTURE_2D,j,he,ue,Te,fe);x.generateMipmaps=!1}else if(Pe){if(Ue){const j=et(Q);n.texStorage2D(t.TEXTURE_2D,le,he,j.width,j.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Te,Q)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,Te,Q);f(x)&&m(H),ce.__version=se.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ie(C,x,O){if(x.image.length!==6)return;const H=K(C,x),Y=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const se=i.get(Y);if(Y.version!==se.__version||H===!0){n.activeTexture(t.TEXTURE0+O);const ce=qe.getPrimaries(qe.workingColorSpace),q=x.colorSpace===er?null:qe.getPrimaries(x.colorSpace),Q=x.colorSpace===er||ce===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ue&&!Te?he[ee]=_(x.image[ee],!0,r.maxCubemapSize):he[ee]=Te?x.image[ee].image:x.image[ee],he[ee]=dn(x,he[ee]);const fe=he[0],Ce=s.convert(x.format,x.colorSpace),Pe=s.convert(x.type),Ue=y(x.internalFormat,Ce,Pe,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,le=se.__version===void 0||H===!0,j=Y.dataReady;let de=w(x,fe);Ye(t.TEXTURE_CUBE_MAP,x);let ve;if(ue){D&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ue,fe.width,fe.height);for(let ee=0;ee<6;ee++){ve=he[ee].mipmaps;for(let we=0;we<ve.length;we++){const Me=ve[we];x.format!==$n?Ce!==null?D?j&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Me.width,Me.height,Ce,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ue,Me.width,Me.height,0,Me.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Me.width,Me.height,Ce,Pe,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Ue,Me.width,Me.height,0,Ce,Pe,Me.data)}}}else{if(ve=x.mipmaps,D&&le){ve.length>0&&de++;const ee=et(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Te){D?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Ce,Pe,he[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,he[ee].width,he[ee].height,0,Ce,Pe,he[ee].data);for(let we=0;we<ve.length;we++){const yt=ve[we].image[ee].image;D?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,yt.width,yt.height,Ce,Pe,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ue,yt.width,yt.height,0,Ce,Pe,yt.data)}}else{D?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce,Pe,he[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,Ce,Pe,he[ee]);for(let we=0;we<ve.length;we++){const Me=ve[we];D?j&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Ce,Pe,Me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Ue,Ce,Pe,Me.image[ee])}}}f(x)&&m(t.TEXTURE_CUBE_MAP),se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function be(C,x,O,H,Y,se){const ce=s.convert(O.format,O.colorSpace),q=s.convert(O.type),Q=y(O.internalFormat,ce,q,O.normalized,O.colorSpace),ue=i.get(x),Te=i.get(O);if(Te.__renderTarget=x,!ue.__hasExternalTextures){const he=Math.max(1,x.width>>se),fe=Math.max(1,x.height>>se);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,se,Q,he,fe,x.depth,0,ce,q,null):n.texImage2D(Y,se,Q,he,fe,0,ce,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),bt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,Y,Te.__webglTexture,0,xt(x)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,Y,Te.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Et(C,x,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),x.depthBuffer){const H=x.depthTexture,Y=H&&H.isDepthTexture?H.type:null,se=T(x.stencilBuffer,Y),ce=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(x),se,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(x),se,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,se,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const H=x.textures;for(let Y=0;Y<H.length;Y++){const se=H[Y],ce=s.convert(se.format,se.colorSpace),q=s.convert(se.type),Q=y(se.internalFormat,ce,q,se.normalized,se.colorSpace);bt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xt(x),Q,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,xt(x),Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(C,x,O){const H=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,x.depthTexture);const ue=s.convert(x.depthTexture.format),Te=s.convert(x.depthTexture.type);let he;x.depthTexture.format===Oi?he=t.DEPTH_COMPONENT24:x.depthTexture.format===Nr&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,x.width,x.height,0,ue,Te,null)}}else F(x.depthTexture,0);const se=Y.__webglTexture,ce=xt(x),q=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,Q=x.depthTexture.format===Nr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Oi)bt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,q,se,0);else if(x.depthTexture.format===Nr)bt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,q,se,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,Q,q,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const x=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const H=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=H}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)Ge(x.__webglFramebuffer[H],C,H);else{const H=C.texture.mipmaps;H&&H.length>0?Ge(x.__webglFramebuffer[0],C,0):Ge(x.__webglFramebuffer,C,0)}else if(O){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=t.createRenderbuffer(),Et(x.__webglDepthbuffer[H],C,!1);else{const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}else{const H=C.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Et(x.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(C,x,O){const H=i.get(C);x!==void 0&&be(H.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&rt(C)}function Ke(C){const x=C.texture,O=i.get(C),H=i.get(x);C.addEventListener("dispose",g);const Y=C.textures,se=C.isWebGLCubeRenderTarget===!0,ce=Y.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=x.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[q][Q]=t.createFramebuffer()}else O.__webglFramebuffer[q]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)O.__webglFramebuffer[q]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ce)for(let q=0,Q=Y.length;q<Q;q++){const ue=i.get(Y[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&bt(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Y.length;q++){const Q=Y[q];O.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[q]);const ue=s.convert(Q.format,Q.colorSpace),Te=s.convert(Q.type),he=y(Q.internalFormat,ue,Te,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),fe=xt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,O.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Et(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)be(O.__webglFramebuffer[q][Q],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else be(O.__webglFramebuffer[q],C,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let q=0,Q=Y.length;q<Q;q++){const ue=Y[q],Te=i.get(ue);let he=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Te.__webglTexture),Ye(he,ue),be(O.__webglFramebuffer,C,ue,t.COLOR_ATTACHMENT0+q,he,0),f(ue)&&m(he)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,H.__webglTexture),Ye(q,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)be(O.__webglFramebuffer[Q],C,x,t.COLOR_ATTACHMENT0,q,Q);else be(O.__webglFramebuffer,C,x,t.COLOR_ATTACHMENT0,q,0);f(x)&&m(q),n.unbindTexture()}C.depthBuffer&&rt(C)}function Ct(C){const x=C.textures;for(let O=0,H=x.length;O<H;O++){const Y=x[O];if(f(Y)){const se=S(C),ce=i.get(Y).__webglTexture;n.bindTexture(se,ce),m(se),n.unbindTexture()}}}const Nt=[],kt=[];function Gt(C){if(C.samples>0){if(bt(C)===!1){const x=C.textures,O=C.width,H=C.height;let Y=t.COLOR_BUFFER_BIT;const se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),q=x.length>1;if(q)for(let ue=0;ue<x.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Te=i.get(x[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,O,H,0,0,O,H,Y,t.NEAREST),l===!0&&(Nt.length=0,kt.length=0,Nt.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Nt.push(se),kt.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ue=0;ue<x.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Te=i.get(x[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function xt(C){return Math.min(r.maxSamples,C.samples)}function bt(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){const x=a.render.frame;d.get(C)!==x&&(d.set(C,x),C.update())}function dn(C,x){const O=C.colorSpace,H=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==kl&&O!==er&&(qe.getTransfer(O)===tt?(H!==$n||Y!==wn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),x}function et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.getTextureUnits=Z,this.setTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=Qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function XT(t,e){function n(i,r=er){let s;const a=qe.getTransfer(r);if(i===wn)return t.UNSIGNED_BYTE;if(i===eh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===__)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===v_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===m_)return t.BYTE;if(i===g_)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===Jd)return t.INT;if(i===_i)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===Fi)return t.HALF_FLOAT;if(i===x_)return t.ALPHA;if(i===y_)return t.RGB;if(i===$n)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Nr)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===nh)return t.RED_INTEGER;if(i===Hr)return t.RG;if(i===ih)return t.RG_INTEGER;if(i===rh)return t.RGBA_INTEGER;if(i===al||i===ol||i===ll||i===cl)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===Ef||i===wf||i===Tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===Rf||i===Cf||i===bf||i===Pf||i===Fl||i===Lf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Af||i===Rf)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bf)return s.COMPRESSED_R11_EAC;if(i===Pf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fl)return s.COMPRESSED_RG11_EAC;if(i===Lf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Vf||i===Hf||i===Gf||i===Wf||i===Xf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Df)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===If)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ff)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Of)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xf)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yf||i===qf||i===$f)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yf)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kf||i===Zf||i===Ol||i===jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new b_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Jn({vertexShader:YT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ze(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends vr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",_=new $T,f={},m=n.getContextAttributes();let S=null,y=null;const T=[],w=[],R=new Be;let g=null;const A=new En;A.viewport=new gt;const b=new En;b.viewport=new gt;const P=[A,b],N=new iM;let W=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=T[K];return ae===void 0&&(ae=new qc,T[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=T[K];return ae===void 0&&(ae=new qc,T[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=T[K];return ae===void 0&&(ae=new qc,T[K]=ae),ae.getHandSpace()};function k(K){const ae=w.indexOf(K.inputSource);if(ae===-1)return;const ie=T[ae];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",V);for(let K=0;K<T.length;K++){const ae=w[K];ae!==null&&(w[K]=null,T[K].disconnect(ae))}W=null,Z=null,_.reset();for(const K in f)delete f[K];e.setRenderTarget(S),p=null,u=null,h=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,De=null,Ie=null;m.depth&&(Ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Nr:Oi,De=m.stencil?Ya:_i);const be={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(be),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new gi(u.textureWidth,u.textureHeight,{format:$n,type:wn,depthTexture:new Vs(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:$n,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(K){for(let ae=0;ae<K.removed.length;ae++){const ie=K.removed[ae],De=w.indexOf(ie);De>=0&&(w[De]=null,T[De].disconnect(ie))}for(let ae=0;ae<K.added.length;ae++){const ie=K.added[ae];let De=w.indexOf(ie);if(De===-1){for(let be=0;be<T.length;be++)if(be>=w.length){w.push(ie),De=be;break}else if(w[be]===null){w[be]=ie,De=be;break}if(De===-1)break}const Ie=T[De];Ie&&Ie.connect(ie)}}const F=new L,X=new L;function J(K,ae,ie){F.setFromMatrixPosition(ae.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const De=F.distanceTo(X),Ie=ae.projectionMatrix.elements,be=ie.projectionMatrix.elements,Et=Ie[14]/(Ie[10]-1),Ge=Ie[14]/(Ie[10]+1),rt=(Ie[9]+1)/Ie[5],Qe=(Ie[9]-1)/Ie[5],Ke=(Ie[8]-1)/Ie[0],Ct=(be[8]+1)/be[0],Nt=Et*Ke,kt=Et*Ct,Gt=De/(-Ke+Ct),xt=Gt*-Ke;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xt),K.translateZ(Gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const bt=Et+Gt,I=Ge+Gt,dn=Nt-xt,et=kt+(De-xt),C=rt*Ge/I*bt,x=Qe*Ge/I*bt;K.projectionMatrix.makePerspective(dn,et,C,x,bt,I),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,ie=K.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),N.near=b.near=A.near=ae,N.far=b.far=A.far=ie,(W!==N.near||Z!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),W=N.near,Z=N.far),N.layers.mask=K.layers.mask|6,A.layers.mask=N.layers.mask&-5,b.layers.mask=N.layers.mask&-3;const De=K.parent,Ie=N.cameras;te(N,De);for(let be=0;be<Ie.length;be++)te(Ie[be],De);Ie.length===2?J(N,A,b):N.projectionMatrix.copy(A.projectionMatrix),oe(K,N,De)};function oe(K,ae,ie){ie===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=$a*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(K){return f[K]};let He=null;function Je(K,ae){if(d=ae.getViewerPose(c||a),v=ae,d!==null){const ie=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let De=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let Ge=0;Ge<ie.length;Ge++){const rt=ie[Ge];let Qe=null;if(p!==null)Qe=p.getViewport(rt);else{const Ct=h.getViewSubImage(u,rt);Qe=Ct.viewport,Ge===0&&(e.setRenderTargetTextures(y,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(y))}let Ke=P[Ge];Ke===void 0&&(Ke=new En,Ke.layers.enable(Ge),Ke.viewport=new gt,P[Ge]=Ke),Ke.matrix.fromArray(rt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(rt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ge===0&&(N.matrix.copy(Ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Ke)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ge=h.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(Ge,r.renderState)}if(Ie&&Ie.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<ie.length;Ge++){const rt=ie[Ge].camera;if(rt){let Qe=f[rt];Qe||(Qe=new b_,f[rt]=Qe);const Ke=h.getCameraImage(rt);Qe.sourceTexture=Ke}}}}for(let ie=0;ie<T.length;ie++){const De=w[ie],Ie=T[ie];De!==null&&Ie!==void 0&&Ie.update(De,ae,c||a)}He&&He(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Ye=new I_;Ye.setAnimationLoop(Je),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}}const ZT=new ht,V_=new Ne;V_.set(-1,0,0,0,1,0,0,0,1);function jT(t,e){function n(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,P_(t)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,m,S,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(_,f):f.isMeshLambertMaterial?(s(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(_,f),h(_,f)):f.isMeshPhongMaterial?(s(_,f),d(_,f),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(_,f),u(_,f),f.isMeshPhysicalMaterial&&p(_,f,y)):f.isMeshMatcapMaterial?(s(_,f),v(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),M(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(a(_,f),f.isLineDashedMaterial&&o(_,f)):f.isPointsMaterial?l(_,f,m,S):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,n(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===cn&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,n(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===cn&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,n(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,n(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const m=e.get(f),S=m.envMap,y=m.envMapRotation;S&&(_.envMap.value=S,_.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V_),_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,_.aoMapTransform))}function a(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform))}function o(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,m,S){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*m,_.scale.value=S*.5,f.map&&(_.map.value=f.map,n(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,n(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,n(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function d(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function h(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function u(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,m){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function M(_,f){const m=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const w=T.program;i.uniformBlockBinding(y,w)}function c(y,T){let w=r[y.id];w===void 0&&(_(y),w=d(y),r[y.id]=w,y.addEventListener("dispose",m));const R=T.program;i.updateUBOMapping(y,R);const g=e.render.frame;s[y.id]!==g&&(u(y),s[y.id]=g)}function d(y){const T=h();y.__bindingPointIndex=T;const w=t.createBuffer(),R=y.__size,g=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],w=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,A=w.length;g<A;g++){const b=w[g];if(Array.isArray(b))for(let P=0,N=b.length;P<N;P++)p(b[P],g,P,R);else p(b,g,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,T,w,R){if(M(y,T,w,R)===!0){const g=y.__offset,A=y.value;if(Array.isArray(A)){let b=0;for(let P=0;P<A.length;P++){const N=A[P],W=f(N);v(N,y.__data,b),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(b+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,y.__data)}}function v(y,T,w){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,w)}function M(y,T,w,R){const g=y.value,A=T+"_"+w;if(R[A]===void 0)return typeof g=="number"||typeof g=="boolean"?R[A]=g:ArrayBuffer.isView(g)?R[A]=g.slice():R[A]=g.clone(),!0;{const b=R[A];if(typeof g=="number"||typeof g=="boolean"){if(b!==g)return R[A]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(b.equals(g)===!1)return b.copy(g),!0}}return!1}function _(y){const T=y.uniforms;let w=0;const R=16;for(let A=0,b=T.length;A<b;A++){const P=Array.isArray(T[A])?T[A]:[T[A]];for(let N=0,W=P.length;N<W;N++){const Z=P[N],k=Array.isArray(Z.value)?Z.value:[Z.value];for(let $=0,V=k.length;$<V;$++){const F=k[$],X=f(F),J=w%R,te=J%X.boundary,oe=J+te;w+=te,oe!==0&&R-oe<X.storage&&(w+=R-oe),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=X.storage}}}const g=w%R;return g>0&&(w+=R-g),y.__size=w,y.__cache={},this}function f(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",y),T}function m(y){const T=y.target;T.removeEventListener("dispose",m);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const JT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function eA(){return ai===null&&(ai=new OS(JT,16,16,Hr,Fi),ai.name="DFG_LUT",ai.minFilter=en,ai.magFilter=en,ai.wrapS=Ci,ai.wrapT=Ci,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class tA{constructor(e={}){const{canvas:n=Jy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=wn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=p,_=new Set([rh,ih,nh]),f=new Set([wn,_i,Xa,Ya,eh,th]),m=new Uint32Array(4),S=new Int32Array(4),y=new L;let T=null,w=null;const R=[],g=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,N=null,W=null,Z=null,k=null;this._outputColorSpace=hn;let $=0,V=0,F=null,X=-1,J=null;const te=new gt,oe=new gt;let He=null;const Je=new Xe(0);let Ye=0,K=n.width,ae=n.height,ie=1,De=null,Ie=null;const be=new gt(0,0,K,ae),Et=new gt(0,0,K,ae);let Ge=!1;const rt=new dh;let Qe=!1,Ke=!1;const Ct=new ht,Nt=new L,kt=new gt,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function bt(){return F===null?ie:1}let I=i;function dn(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jd}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",ei,!1),I===null){const U="webgl2";if(I=dn(U,E),I===null)throw dn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw $e("WebGLRenderer: "+E.message),E}let et,C,x,O,H,Y,se,ce,q,Q,ue,Te,he,fe,Ce,Pe,Ue,D,le,j,de,ve,ee;function we(){et=new ew(I),et.init(),de=new XT(I,et),C=new Y1(I,et,e,de),x=new GT(I,et),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=I.createFramebuffer(),Z=I.createFramebuffer(),k=I.createFramebuffer(),O=new iw(I),H=new bT,Y=new WT(I,et,x,H,C,de,O),se=new J1(b),ce=new oM(I),ve=new W1(I,ce),q=new tw(I,ce,O,ve),Q=new sw(I,q,ce,ve,O),D=new rw(I,C,Y),Ce=new q1(H),ue=new CT(b,se,et,C,ve,Ce),Te=new jT(b,H),he=new LT,fe=new OT(et),Ue=new G1(b,se,x,Q,v,l),Pe=new HT(b,Q,C),ee=new QT(I,O,C,x),le=new X1(I,et,O),j=new nw(I,et,O),O.programs=ue.programs,b.capabilities=C,b.extensions=et,b.properties=H,b.renderLists=he,b.shadowMap=Pe,b.state=x,b.info=O}we(),M!==wn&&(A=new ow(M,n.width,n.height,o,r,s));const Me=new KT(b,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(K,ae,!1))},this.getSize=function(E){return E.set(K,ae)},this.setSize=function(E,U,G=!0){if(Me.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,ae=U,n.width=Math.floor(E*ie),n.height=Math.floor(U*ie),G===!0&&(n.style.width=E+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*ie,ae*ie).floor()},this.setDrawingBufferSize=function(E,U,G){K=E,ae=U,ie=G,n.width=Math.floor(E*G),n.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(M===wn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(te)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,U,G,B){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,U,G,B),x.viewport(te.copy(be).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Et)},this.setScissor=function(E,U,G,B){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,U,G,B),x.scissor(oe.copy(Et).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(E){x.setScissorTest(Ge=E)},this.setOpaqueSort=function(E){De=E},this.setTransparentSort=function(E){Ie=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,G=!0){let B=0;if(E){let z=!1;if(F!==null){const _e=F.texture.format;z=_.has(_e)}if(z){const _e=F.texture.type,ye=f.has(_e),ge=Ue.getClearColor(),Ee=Ue.getClearAlpha(),Ae=ge.r,Fe=ge.g,ke=ge.b;ye?(m[0]=Ae,m[1]=Fe,m[2]=ke,m[3]=Ee,I.clearBufferuiv(I.COLOR,0,m)):(S[0]=Ae,S[1]=Fe,S[2]=ke,S[3]=Ee,I.clearBufferiv(I.COLOR,0,S))}else B|=I.COLOR_BUFFER_BIT}U&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",ei,!1),Ue.dispose(),he.dispose(),fe.dispose(),H.dispose(),se.dispose(),Q.dispose(),ve.dispose(),ee.dispose(),ue.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Th),Me.removeEventListener("sessionend",Ah),xr.stop()};function yt(E){E.preventDefault(),Zp("WebGLRenderer: Context Lost."),P=!0}function ot(){Zp("WebGLRenderer: Context Restored."),P=!1;const E=O.autoReset,U=Pe.enabled,G=Pe.autoUpdate,B=Pe.needsUpdate,z=Pe.type;we(),O.autoReset=E,Pe.enabled=U,Pe.autoUpdate=G,Pe.needsUpdate=B,Pe.type=z}function ei(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ti(E){const U=E.target;U.removeEventListener("dispose",ti),H_(U)}function H_(E){G_(E),H.remove(E)}function G_(E){const U=H.get(E).programs;U!==void 0&&(U.forEach(function(G){ue.releaseProgram(G)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,B,z,_e){U===null&&(U=Gt);const ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=Y_(E,U,G,B,z);x.setMaterial(B,ye);let Ee=G.index,Ae=1;if(B.wireframe===!0){if(Ee=q.getWireframeAttribute(G),Ee===void 0)return;Ae=2}const Fe=G.drawRange,ke=G.attributes.position;let Re=Fe.start*Ae,it=(Fe.start+Fe.count)*Ae;_e!==null&&(Re=Math.max(Re,_e.start*Ae),it=Math.min(it,(_e.start+_e.count)*Ae)),Ee!==null?(Re=Math.max(Re,0),it=Math.min(it,Ee.count)):ke!=null&&(Re=Math.max(Re,0),it=Math.min(it,ke.count));const wt=it-Re;if(wt<0||wt===1/0)return;ve.setup(z,B,ge,G,Ee);let St,st=le;if(Ee!==null&&(St=ce.get(Ee),st=j,st.setIndex(St)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*bt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(z.isLine){let $t=B.linewidth;$t===void 0&&($t=1),x.setLineWidth($t*bt()),z.isLineSegments?st.setMode(I.LINES):z.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else z.isPoints?st.setMode(I.POINTS):z.isSprite&&st.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const $t=z._multiDrawStarts,xe=z._multiDrawCounts,xn=z._multiDrawCount,Ze=Ee?ce.get(Ee).bytesPerElement:1,Pn=H.get(B).currentProgram.getUniforms();for(let ni=0;ni<xn;ni++)Pn.setValue(I,"_gl_DrawID",ni),st.render($t[ni]/Ze,xe[ni])}else if(z.isInstancedMesh)st.renderInstances(Re,wt,z.count);else if(G.isInstancedBufferGeometry){const $t=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,$t);st.renderInstances(Re,wt,xe)}else st.render(Re,wt)};function wh(E,U,G){E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,io(E,U,G),E.side=pr,E.needsUpdate=!0,io(E,U,G),E.side=ui):io(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),w=fe.get(G),w.init(U),g.push(w),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const B=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _e=z.material;if(_e)if(Array.isArray(_e))for(let ye=0;ye<_e.length;ye++){const ge=_e[ye];wh(ge,G,z),B.add(ge)}else wh(_e,G,z),B.add(_e)}),w=g.pop(),B},this.compileAsync=function(E,U,G=null){const B=this.compile(E,U,G);return new Promise(z=>{function _e(){if(B.forEach(function(ye){H.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){z(E);return}setTimeout(_e,10)}et.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let fc=null;function W_(E){fc&&fc(E)}function Th(){xr.stop()}function Ah(){xr.start()}const xr=new I_;xr.setAnimationLoop(W_),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(E){fc=E,Me.setAnimationLoop(E),E===null?xr.stop():xr.start()},Me.addEventListener("sessionstart",Th),Me.addEventListener("sessionend",Ah),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(E,U);const G=Me.enabled===!0&&Me.isPresenting===!0,B=A!==null&&(F===null||G)&&A.begin(b,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(U),U=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,U,F),w=fe.get(E,g.length),w.init(U),w.state.textureUnits=Y.getTextureUnits(),g.push(w),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Ct,di,U.reversedDepth),Ke=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,Ke),T=he.get(E,R.length),T.init(),R.push(T),Me.enabled===!0&&Me.isPresenting===!0){const ye=b.xr.getDepthSensingMesh();ye!==null&&dc(ye,U,-1/0,b.sortObjects)}dc(E,U,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(De,Ie,U.reversedDepth),xt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,xt&&Ue.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ce.beginShadows();const z=w.state.shadowsArray;if(Pe.render(z,E,U),Qe===!0&&Ce.endShadows(),(B&&A.hasRenderPass())===!1){const ye=T.opaque,ge=T.transmissive;if(w.setupLights(),U.isArrayCamera){const Ee=U.cameras;if(ge.length>0)for(let Ae=0,Fe=Ee.length;Ae<Fe;Ae++){const ke=Ee[Ae];Ch(ye,ge,E,ke)}xt&&Ue.render(E);for(let Ae=0,Fe=Ee.length;Ae<Fe;Ae++){const ke=Ee[Ae];Rh(T,E,ke,ke.viewport)}}else ge.length>0&&Ch(ye,ge,E,U),xt&&Ue.render(E),Rh(T,E,U)}F!==null&&V===0&&(Y.updateMultisampleRenderTarget(F),Y.updateRenderTargetMipmap(F)),B&&A.end(b),E.isScene===!0&&E.onAfterRender(b,E,U),ve.resetDefaultState(),X=-1,J=null,g.pop(),g.length>0?(w=g[g.length-1],Y.setTextureUnits(w.state.textureUnits),Qe===!0&&Ce.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,N!==null&&N.renderEnd()};function dc(E,U,G,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){B&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);const ye=Q.update(E),ge=E.material;ge.visible&&T.push(E,ye,ge,G,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){const ye=Q.update(E),ge=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),kt.copy(ye.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(ge)){const Ee=ye.groups;for(let Ae=0,Fe=Ee.length;Ae<Fe;Ae++){const ke=Ee[Ae],Re=ge[ke.materialIndex];Re&&Re.visible&&T.push(E,ye,Re,G,kt.z,ke)}}else ge.visible&&T.push(E,ye,ge,G,kt.z,null)}}const _e=E.children;for(let ye=0,ge=_e.length;ye<ge;ye++)dc(_e[ye],U,G,B)}function Rh(E,U,G,B){const{opaque:z,transmissive:_e,transparent:ye}=E;w.setupLightsView(G),Qe===!0&&Ce.setGlobalState(b.clippingPlanes,G),B&&x.viewport(te.copy(B)),z.length>0&&no(z,U,G),_e.length>0&&no(_e,U,G),ye.length>0&&no(ye,U,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ch(E,U,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new gi(1,1,{generateMipmaps:!0,type:Re?Fi:wn,minFilter:Dr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const _e=w.state.transmissionRenderTarget[B.id],ye=B.viewport||te;_e.setSize(ye.z*b.transmissionResolutionScale,ye.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(Je),Ye=b.getClearAlpha(),Ye<1&&b.setClearColor(16777215,.5),b.clear(),xt&&Ue.render(G);const Fe=b.toneMapping;b.toneMapping=mi;const ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),Qe===!0&&Ce.setGlobalState(b.clippingPlanes,B),no(E,G,B),Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let it=0,wt=U.length;it<wt;it++){const St=U[it],{object:st,geometry:$t,material:xe,group:xn}=St;if(xe.side===ui&&st.layers.test(B.layers)){const Ze=xe.side;xe.side=cn,xe.needsUpdate=!0,bh(st,G,B,$t,xe,xn),xe.side=Ze,xe.needsUpdate=!0,Re=!0}}Re===!0&&(Y.updateMultisampleRenderTarget(_e),Y.updateRenderTargetMipmap(_e))}b.setRenderTarget(ge,Ee,Ae),b.setClearColor(Je,Ye),ke!==void 0&&(B.viewport=ke),b.toneMapping=Fe}function no(E,U,G){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_e=E.length;z<_e;z++){const ye=E[z],{object:ge,geometry:Ee,group:Ae}=ye;let Fe=ye.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),ge.layers.test(G.layers)&&bh(ge,U,G,Ee,Fe,Ae)}}function bh(E,U,G,B,z,_e){E.onBeforeRender(b,U,G,B,z,_e),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,U,G,B,E,_e),z.transparent===!0&&z.side===ui&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,b.renderBufferDirect(G,U,B,z,E,_e),z.side=pr,z.needsUpdate=!0,b.renderBufferDirect(G,U,B,z,E,_e),z.side=ui):b.renderBufferDirect(G,U,B,z,E,_e),E.onAfterRender(b,U,G,B,z,_e)}function io(E,U,G){U.isScene!==!0&&(U=Gt);const B=H.get(E),z=w.state.lights,_e=w.state.shadowsArray,ye=z.state.version,ge=ue.getParameters(E,z.state,_e,U,G,w.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(ge);let Ae=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const Fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=se.get(E.envMap||B.environment,Fe),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ti),Ae=new Map,B.programs=Ae);let ke=Ae.get(Ee);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===ye)return Lh(E,ge),ke}else ge.uniforms=ue.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,G,ge),E.onBeforeCompile(ge,b),ke=ue.acquireProgram(ge,Ee),Ae.set(Ee,ke),B.uniforms=ge.uniforms;const Re=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),Lh(E,ge),B.needsLights=$_(E),B.lightsStateVersion=ye,B.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=w.state.lightProbeGridArray.length>0,B.currentProgram=ke,B.uniformsList=null,ke}function Ph(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ul.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Lh(E,U){const G=H.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function X_(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let G=0,B=E.length;G<B;G++){const z=E[G];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Y_(E,U,G,B,z){U.isScene!==!0&&(U=Gt),Y.resetTextureUnits();const _e=U.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ge=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:qe.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=se.get(B.envMap||ye,Ee),Fe=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,wt=!!G.morphAttributes.color;let St=mi;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=b.toneMapping);const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$t=st!==void 0?st.length:0,xe=H.get(B),xn=w.state.lights;if(Qe===!0&&(Ke===!0||E!==J)){const lt=E===J&&B.id===X;Ce.setState(B,E,lt)}let Ze=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==xn.state.version||xe.outputColorSpace!==ge||z.isBatchedMesh&&xe.batching===!1||!z.isBatchedMesh&&xe.batching===!0||z.isBatchedMesh&&xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&xe.instancing===!1||!z.isInstancedMesh&&xe.instancing===!0||z.isSkinnedMesh&&xe.skinning===!1||!z.isSkinnedMesh&&xe.skinning===!0||z.isInstancedMesh&&xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xe.instancingMorph===!1&&z.morphTexture!==null||xe.envMap!==Ae||B.fog===!0&&xe.fog!==_e||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ce.numPlanes||xe.numIntersection!==Ce.numIntersection)||xe.vertexAlphas!==Fe||xe.vertexTangents!==ke||xe.morphTargets!==Re||xe.morphNormals!==it||xe.morphColors!==wt||xe.toneMapping!==St||xe.morphTargetsCount!==$t||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,xe.__version=B.version);let Pn=xe.currentProgram;Ze===!0&&(Pn=io(B,U,z),N&&B.isNodeMaterial&&N.onUpdateProgram(B,Pn,xe));let ni=!1,zi=!1,Xr=!1;const at=Pn.getUniforms(),Tt=xe.uniforms;if(x.useProgram(Pn.program)&&(ni=!0,zi=!0,Xr=!0),B.id!==X&&(X=B.id,zi=!0),xe.needsLights){const lt=X_(w.state.lightProbeGridArray,z);xe.lightProbeGrid!==lt&&(xe.lightProbeGrid=lt,zi=!0)}if(ni||J!==E){x.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",E.projectionMatrix),at.setValue(I,"viewMatrix",E.matrixWorldInverse);const Hi=at.map.cameraPosition;Hi!==void 0&&Hi.setValue(I,Nt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,zi=!0,Xr=!0)}if(xe.needsLights&&(xn.state.directionalShadowMap.length>0&&at.setValue(I,"directionalShadowMap",xn.state.directionalShadowMap,Y),xn.state.spotShadowMap.length>0&&at.setValue(I,"spotShadowMap",xn.state.spotShadowMap,Y),xn.state.pointShadowMap.length>0&&at.setValue(I,"pointShadowMap",xn.state.pointShadowMap,Y)),z.isSkinnedMesh){at.setOptional(I,z,"bindMatrix"),at.setOptional(I,z,"bindMatrixInverse");const lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(I,"boneTexture",lt.boneTexture,Y))}z.isBatchedMesh&&(at.setOptional(I,z,"batchingTexture"),at.setValue(I,"batchingTexture",z._matricesTexture,Y),at.setOptional(I,z,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",z._indirectTexture,Y),at.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",z._colorsTexture,Y));const Vi=G.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&D.update(z,G,Pn),(zi||xe.receiveShadow!==z.receiveShadow)&&(xe.receiveShadow=z.receiveShadow,at.setValue(I,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(Tt.envMapIntensity.value=U.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=eA()),zi){if(at.setValue(I,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&q_(Tt,Xr),_e&&B.fog===!0&&Te.refreshFogUniforms(Tt,_e),Te.refreshMaterialUniforms(Tt,B,ie,ae,w.state.transmissionRenderTarget[E.id]),xe.needsLights&&xe.lightProbeGrid){const lt=xe.lightProbeGrid;Tt.probesSH.value=lt.texture,Tt.probesMin.value.copy(lt.boundingBox.min),Tt.probesMax.value.copy(lt.boundingBox.max),Tt.probesResolution.value.copy(lt.resolution)}ul.upload(I,Ph(xe),Tt,Y)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ul.upload(I,Ph(xe),Tt,Y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(I,"center",z.center),at.setValue(I,"modelViewMatrix",z.modelViewMatrix),at.setValue(I,"normalMatrix",z.normalMatrix),at.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const lt=B.uniformsGroups;for(let Hi=0,Yr=lt.length;Hi<Yr;Hi++){const Dh=lt[Hi];ee.update(Dh,Pn),ee.bind(Dh,Pn)}}return Pn}function q_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function $_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,U,G){const B=H.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(E.texture).__webglTexture=U,H.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const G=H.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){F=E,$=U,V=G;let B=null,z=!1,_e=!1;if(E){const ge=H.get(E);if(ge.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(E.viewport),oe.copy(E.scissor),He=E.scissorTest,x.viewport(te),x.scissor(oe),x.setScissorTest(He),X=-1;return}else if(ge.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(ge.__hasExternalTextures)Y.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(ge.__boundDepthTexture!==Fe){if(Fe!==null&&H.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ae=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?B=Ae[U][G]:B=Ae[U],z=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?B=H.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[G]:B=Ae,te.copy(E.viewport),oe.copy(E.scissor),He=E.scissorTest}else te.copy(be).multiplyScalar(ie).floor(),oe.copy(Et).multiplyScalar(ie).floor(),He=Ge;if(G!==0&&(B=W),x.bindFramebuffer(I.FRAMEBUFFER,B)&&x.drawBuffers(E,B),x.viewport(te),x.scissor(oe),x.setScissorTest(He),z){const ge=H.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,G)}else if(_e){const ge=U;for(let Ee=0;Ee<E.textures.length;Ee++){const Ae=H.get(E.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,G,ge)}}else if(E!==null&&G!==0){const ge=H.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,G)}X=-1},this.readRenderTargetPixels=function(E,U,G,B,z,_e,ye,ge=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){x.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Ae=E.textures[ge],Fe=Ae.format,ke=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(Fe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ke)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&G>=0&&G<=E.height-z&&I.readPixels(U,G,B,z,de.convert(Fe),de.convert(ke),_e)}finally{const Ae=F!==null?H.get(F).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,B,z,_e,ye,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(U>=0&&U<=E.width-B&&G>=0&&G<=E.height-z){x.bindFramebuffer(I.FRAMEBUFFER,Ee);const Ae=E.textures[ge],Fe=Ae.format,ke=Ae.type;if(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(U,G,B,z,de.convert(Fe),de.convert(ke),0);const it=F!==null?H.get(F).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,it);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await eS(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.deleteBuffer(Re),I.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,G=0){const B=Math.pow(2,-G),z=Math.floor(E.image.width*B),_e=Math.floor(E.image.height*B),ye=U!==null?U.x:0,ge=U!==null?U.y:0;Y.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,ye,ge,z,_e),x.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,B=null,z=0,_e=0){let ye,ge,Ee,Ae,Fe,ke,Re,it,wt;const St=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(G!==null)ye=G.max.x-G.min.x,ge=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,Ae=G.min.x,Fe=G.min.y,ke=G.isBox3?G.min.z:0;else{const Tt=Math.pow(2,-z);ye=Math.floor(St.width*Tt),ge=Math.floor(St.height*Tt),E.isDataArrayTexture?Ee=St.depth:E.isData3DTexture?Ee=Math.floor(St.depth*Tt):Ee=1,Ae=0,Fe=0,ke=0}B!==null?(Re=B.x,it=B.y,wt=B.z):(Re=0,it=0,wt=0);const st=de.convert(U.format),$t=de.convert(U.type);let xe;U.isData3DTexture?(Y.setTexture3D(U,0),xe=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),xe=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),xe=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const xn=x.getParameter(I.UNPACK_ROW_LENGTH),Ze=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Pn=x.getParameter(I.UNPACK_SKIP_PIXELS),ni=x.getParameter(I.UNPACK_SKIP_ROWS),zi=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),x.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Xr=E.isDataArrayTexture||E.isData3DTexture,at=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Tt=H.get(E),Vi=H.get(U),lt=H.get(Tt.__renderTarget),Hi=H.get(Vi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Yr=0;Yr<Ee;Yr++)Xr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(E).__webglTexture,z,ke+Yr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(U).__webglTexture,_e,wt+Yr)),I.blitFramebuffer(Ae,Fe,ye,ge,Re,it,ye,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||H.has(E)){const Tt=H.get(E),Vi=H.get(U);x.bindFramebuffer(I.READ_FRAMEBUFFER,Z),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<Ee;lt++)Xr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,z,ke+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,z),at?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vi.__webglTexture,_e,wt+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vi.__webglTexture,_e),z!==0?I.blitFramebuffer(Ae,Fe,ye,ge,Re,it,ye,ge,I.COLOR_BUFFER_BIT,I.NEAREST):at?I.copyTexSubImage3D(xe,_e,Re,it,wt+lt,Ae,Fe,ye,ge):I.copyTexSubImage2D(xe,_e,Re,it,Ae,Fe,ye,ge);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(xe,_e,Re,it,wt,ye,ge,Ee,st,$t,St.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,_e,Re,it,wt,ye,ge,Ee,st,St.data):I.texSubImage3D(xe,_e,Re,it,wt,ye,ge,Ee,st,$t,St):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Re,it,ye,ge,st,$t,St.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Re,it,St.width,St.height,st,St.data):I.texSubImage2D(I.TEXTURE_2D,_e,Re,it,ye,ge,st,$t,St);x.pixelStorei(I.UNPACK_ROW_LENGTH,xn),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Pn),x.pixelStorei(I.UNPACK_SKIP_ROWS,ni),x.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),_e===0&&U.generateMipmaps&&I.generateMipmap(xe),x.unbindTexture()},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),x.unbindTexture()},this.resetState=function(){$=0,V=0,F=null,x.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}const ls=new ki(0,0,0,"YXZ"),cs=new L,nA={type:"change"},iA={type:"lock"},rA={type:"unlock"},Ym=.002,qm=Math.PI/2;class sA extends sM{constructor(e,n=null){super(e,n),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=aA.bind(this),this._onPointerlockChange=oA.bind(this),this._onPointerlockError=lA.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const n=this.object;cs.setFromMatrixColumn(n.matrix,0),cs.crossVectors(n.up,cs),n.position.addScaledVector(cs,e)}moveRight(e){if(this.enabled===!1)return;const n=this.object;cs.setFromMatrixColumn(n.matrix,0),n.position.addScaledVector(cs,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function aA(t){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;ls.setFromQuaternion(e.quaternion),ls.y-=t.movementX*Ym*this.pointerSpeed,ls.x-=t.movementY*Ym*this.pointerSpeed,ls.x=Math.max(qm-this.maxPolarAngle,Math.min(qm-this.minPolarAngle,ls.x)),e.quaternion.setFromEuler(ls),this.dispatchEvent(nA)}function oA(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(iA),this.isLocked=!0):(this.dispatchEvent(rA),this.isLocked=!1)}function lA(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class uc extends ze{constructor(){const e=uc.SkyShader,n=new Jn({name:e.name,uniforms:L_.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:cn,depthWrite:!1});super(new Lt(1,1,1),n),this.isSky=!0}}uc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta ) * showSunDisc;
			L0 += ( vSunE * 19000.0 * Fex ) * sundisc;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const me={title:"OPERATION FRONTLINE",subtitle:"战术行动 · 写实第一人称射击",map:{half:130,groundSegments:120},player:{eyeHeight:1.7,radius:.4,walkSpeed:5.2,runSpeed:8.6,jumpSpeed:6.2,gravity:22,maxHealth:100,regenDelay:6,regenRate:8},classes:{assault:{name:"突击兵",color:"#d9a441",weapon:{name:"M4 突击步枪",type:"auto",mag:30,reserve:180,damage:26,fireRate:.095,spread:.012,range:320,reload:2.1,drop:6e-4,recoil:.022,auto:!0},ability:{key:"Q",name:"补给弹药",cd:25,desc:"立即补满弹匣与备弹"}},medic:{name:"医疗兵",color:"#5fb0e0",weapon:{name:"MP5 冲锋枪",type:"auto",mag:25,reserve:150,damage:19,fireRate:.08,spread:.018,range:220,reload:1.9,drop:9e-4,recoil:.018,auto:!0},ability:{key:"Q",name:"战地救治",cd:18,desc:"治疗自己及周围队友"}},engineer:{name:"工程兵",color:"#7bbf6a",weapon:{name:"M870 霰弹枪",type:"shotgun",mag:8,reserve:48,damage:14,pellets:8,fireRate:.8,spread:.06,range:70,reload:2.8,drop:.004,recoil:.06,auto:!1},ability:{key:"Q",name:"维修载具",cd:12,desc:"修复附近载具装甲"}},recon:{name:"侦察兵",color:"#c77dff",weapon:{name:"M24 狙击枪",type:"bolt",mag:5,reserve:30,damage:95,fireRate:1.1,spread:.0015,range:600,reload:2.6,drop:0,recoil:.09,auto:!1,scope:3.2},ability:{key:"Q",name:"标记敌军",cd:14,desc:"高亮显示附近敌人位置"}}},squad:{allies:3,health:80,speed:5,damage:18,fireRate:.18,range:260,color:"#3fa7ff"},enemy:{count:14,health:70,speed:3.4,damage:12,fireRate:.55,range:280,spread:.04,color:"#c0392b",tickets:250},capturePoints:[{id:"A",name:"阿尔法",pos:[-70,0,-60],radius:14},{id:"B",name:"布拉沃",pos:[0,0,0],radius:16},{id:"C",name:"查理",pos:[70,0,60],radius:14}],tickets:{player:250,captureRate:2},vehicle:{health:600,speed:26,reverse:12,turn:1.8,cannonDamage:130,cannonSplash:9,cannonCooldown:1.3,mgDamage:16,mgFireRate:.09,mgSpread:.02},weather:{clear:{label:"晴",fog:.0016,rain:0,wind:0,sun:1},rain:{label:"降雨",fog:.012,rain:1400,wind:.7,sun:.55},storm:{label:"风暴",fog:.03,rain:3200,wind:1.5,sun:.32}},props:{crates:26,walls:10,rocks:18,trees:22,sandbags:14,buildings:6}},cA=new L,_u=new L,uA=new L(0,1,0);class fA{constructor(e,{onHUD:n,onPause:i,onEnd:r,onLockChange:s}={}){this.container=e,this.onHUD=n||(()=>{}),this.onPause=i||(()=>{}),this.onEnd=r||(()=>{}),this.onLockChange=s||(()=>{}),this.classKey="assault",this.running=!1,this.paused=!1,this.inVehicle=!1,this.ended=!1,this.time=0,this.keys={},this.mouseDown=!1,this.rightDown=!1,this.fireCooldown=0,this.reloadTimer=0,this.recoil=0,this.spread=0,this.abilityCd=0,this.health=me.player.maxHealth,this.vy=0,this.onGround=!0,this.score=0,this.kills=0,this.soldiers=[],this.enemies=[],this.allies=[],this.debris=[],this.tracers=[],this.sparks=[],this.worldMeshes=[],this.solidProps=[],this.tickets={player:me.tickets.player,enemy:me.enemy.tickets},this.capturePoints=[],this._raf=null,this._listeners={}}init(){const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.renderer=new tA({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e,n),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=a_,this.renderer.toneMapping=Qd,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=hn,this.container.appendChild(this.renderer.domElement),this.scene=new LS,this.scene.fog=new uh(10135200,me.weather.clear.fog),this.camera=new En(75,e/n,.1,1200),this.camera.position.set(0,me.player.eyeHeight,90),this.controls=new sA(this.camera,this.renderer.domElement),this.controls.addEventListener("lock",()=>{this.onLockChange(!0)}),this.controls.addEventListener("unlock",()=>{this.onLockChange(!1),this.running&&!this.ended&&!this._exitingVehicle&&this.pause()}),this._buildSky(),this._buildLights(),this._buildGround(),this._buildProps(),this._buildCapturePoints(),this._buildVehicle(),this._buildEnemyTank(),this._buildSquad(),this._buildPooled(),this._setupAudio(),this._setupInput(),this.clock=new rM,this._animate=this._animate.bind(this),this._raf=requestAnimationFrame(this._animate),this.setWeather("clear")}_buildSky(){const e=new uc;e.scale.setScalar(1e4);const n=e.material.uniforms;n.turbidity.value=6,n.rayleigh.value=1.6,n.mieCoefficient.value=.005,n.mieDirectionalG.value=.8;const i=ri.degToRad(62),r=ri.degToRad(35),s=new L().setFromSphericalCoords(1,i,r);n.sunPosition.value.copy(s),this.scene.add(e),this._sunDir=s,this.scene.add(new ZS(12374240,4866096,.7))}_buildLights(){const e=new eM(16773848,2.2);e.position.copy(this._sunDir).multiplyScalar(200),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const n=me.map.half+20;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.camera.near=1,e.shadow.camera.far=600,e.shadow.bias=-4e-4,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.scene.add(new tM(4213322,.5))}_tex(e,n,i=256){const r=document.createElement("canvas");r.width=r.height=i;const s=r.getContext("2d");s.fillStyle=e,s.fillRect(0,0,i,i);for(const o of n)for(let l=0;l<(o.n||400);l++){const c=Math.random()*i,d=Math.random()*i,h=Math.random()*(o.r||3)+.5;s.fillStyle=`rgba(${o.c[0]},${o.c[1]},${o.c[2]},${o.a||.5})`,s.beginPath(),s.arc(c,d,h,0,7),s.fill()}const a=new HS(r);return a.wrapS=a.wrapT=Ul,a.colorSpace=hn,a}_buildGround(){const e=me.map.half,n=this._tex("#5b5341",[{c:[70,64,50],n:600,r:4},{c:[90,82,64],n:500,r:3},{c:[40,38,30],n:400,r:2}]);n.repeat.set(e/8,e/8);const i=new to(e*2,e*2,me.map.groundSegments,me.map.groundSegments),r=new At({map:n,roughness:.95,metalness:0,color:9077360}),s=new ze(i,r);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s),this.ground=s,this.worldMeshes.push(s)}_addSolid(e,{destructible:n=!1,hp:i=0,radius:r=1}={}){return e.castShadow=!0,e.receiveShadow=!0,e.userData.solidRef={destructible:n,hp:i,maxHp:i,alive:!0,radius:r},this.scene.add(e),this.worldMeshes.push(e),this.solidProps.push(e),e}_buildProps(){const e=me.map.half-8,n=me.props,i=this._tex("#7a5a32",[{c:[50,35,18],n:50,r:2,a:.6}]),r=this._tex("#8d8d86",[{c:[60,60,58],n:300,r:3},{c:[120,120,116],n:200,r:2}]),s=[],a=(l,c,d)=>s.every(h=>Math.hypot(h.x-l,h.z-c)>h.r+d+6),o=l=>{for(let c=0;c<40;c++){const d=(Math.random()*2-1)*e,h=(Math.random()*2-1)*e;if(a(d,h,l))return s.push({x:d,z:h,r:l}),[d,h]}return null};for(let l=0;l<n.crates;l++){const c=1.2+Math.random()*.6,d=o(c);if(!d)continue;const h=new ze(new Lt(c,c,c),new At({map:i,roughness:.9}));h.position.set(d[0],c/2,d[1]),h.rotation.y=Math.random()*Math.PI,this._addSolid(h,{destructible:!0,hp:45,radius:c*.7})}for(let l=0;l<n.walls;l++){const c=o(2);if(!c)continue;const d=4+Math.random()*3,h=2.2+Math.random(),u=new ze(new Lt(d,h,.6),new At({map:r,roughness:.95}));u.position.set(c[0],h/2,c[1]),u.rotation.y=Math.random()*Math.PI,this._addSolid(u,{destructible:!0,hp:120,radius:Math.max(d,2)*.5})}for(let l=0;l<n.rocks;l++){const c=o(1.5);if(!c)continue;const d=1+Math.random()*1.6,h=new ze(new gh(d,0),new At({color:7038560,roughness:1}));h.position.set(c[0],d*.6,c[1]),h.rotation.set(Math.random(),Math.random(),Math.random()),this._addSolid(h,{radius:d})}for(let l=0;l<n.trees;l++){const c=o(1.2);if(!c)continue;const d=new Nn,h=new ze(new Ti(.18,.25,3,6),new At({color:4863266,roughness:1}));h.position.y=1.5,h.castShadow=!0;const u=new ze(new ph(1.6,4,7),new At({color:3955246,roughness:1}));u.position.y=4.4,u.castShadow=!0,d.add(h,u),d.position.set(c[0],0,c[1]),this.scene.add(d),this._addSolid(u,{radius:1.4}).position.set(c[0],4.4,c[1]),u.userData.solidRef.radius=1.4,this.solidProps.pop(),this.solidProps.push(u)}for(let l=0;l<n.sandbags;l++){const c=o(1.5);if(!c)continue;const d=new Nn;for(let u=0;u<4;u++){const p=new ze(new hh(.35,.5,3,6),new At({color:10128730,roughness:1}));p.rotation.z=Math.PI/2,p.position.set((u-1.5)*.7,.4,0),p.castShadow=!0,p.receiveShadow=!0,d.add(p)}d.position.set(c[0],0,c[1]),d.rotation.y=Math.random()*Math.PI,this.scene.add(d);const h={destructible:!1,alive:!0,radius:1.5};d.traverse(u=>{u.isMesh&&(u.userData.solidRef=h,this.worldMeshes.push(u))}),this.solidProps.push(d.children[0]),d.children[0].userData.solidRef=h}for(let l=0;l<n.buildings;l++){const c=o(6);if(!c)continue;const d=8+Math.random()*6,h=8+Math.random()*6,u=5+Math.random()*4,p=new ze(new Lt(d,u,h),new At({map:r,roughness:.97,color:10130828}));p.position.set(c[0],u/2,c[1]),p.castShadow=!0,p.receiveShadow=!0;const v={destructible:!1,alive:!0,radius:Math.max(d,h)*.6};p.userData.solidRef=v,this.scene.add(p),this.worldMeshes.push(p),this.solidProps.push(p)}}_buildCapturePoints(){for(const e of me.capturePoints){const n=new Nn,i=new ze(new _h(e.radius,.25,8,48),new At({color:8947848,emissive:2236962}));i.rotation.x=-Math.PI/2,i.position.y=.05;const r=new ze(new Ti(.4,.4,30,12,1,!0),new Ra({color:8947848,transparent:!0,opacity:.12,side:ui}));r.position.y=15;const s=new ze(new Lt(2.4,1.4,.1),new At({color:8947848,emissive:2236962}));s.position.set(0,6,0),n.add(i,r,s),n.position.set(e.pos[0],0,e.pos[2]),this.scene.add(n),this.capturePoints.push({...e,group:n,ring:i,beam:r,flag:s,owner:"neutral",progress:0,flagMat:s.material})}}_buildVehicle(){const e=me.vehicle,n=new Nn,i=new At({color:4869946,roughness:.7,metalness:.3}),r=new ze(new Lt(3.2,1,5.4),i);r.position.y=.9,r.castShadow=!0;const s=new ze(new Lt(2.8,1,2.4),i);s.position.set(0,1.7,-.4),s.castShadow=!0;const a=new Nn;a.position.set(0,2.2,.4);const o=new ze(new Lt(1.8,.7,2.2),i);o.castShadow=!0;const l=new ze(new Ti(.12,.12,3.2,10),new At({color:2236962,metalness:.6,roughness:.4}));l.rotation.x=Math.PI/2,l.position.set(0,.1,1.8),a.add(o,l);const c=new Ti(.6,.6,.5,12),d=new At({color:1118481,roughness:.9});for(const h of[-1.5,1.5])for(const u of[-1.8,0,1.8]){const p=new ze(c,d);p.rotation.z=Math.PI/2,p.position.set(h,.6,u),n.add(p)}n.add(r,s,a),n.position.set(6,0,80),this.scene.add(n),this.vehicle={group:n,turret:a,barrel:l,health:e.health,maxHealth:e.health,heading:0,speed:0,cooldown:0,mgCd:0,alive:!0,mat:i}}_buildEnemyTank(){const e=new Nn,n=new At({color:7024426,roughness:.6,metalness:.4}),i=new ze(new Lt(4,1.2,7),n);i.position.y=1,i.castShadow=!0;const r=new Nn;r.position.y=1.9;const s=new ze(new Lt(2.4,1,3),n);s.castShadow=!0;const a=new ze(new Ti(.18,.18,4,10),new At({color:1118481}));a.rotation.x=Math.PI/2,a.position.z=2.4,r.add(s,a),e.add(i,r);const o=me.capturePoints[2];e.position.set(o.pos[0],0,o.pos[2]-6),this.scene.add(e),this.enemyTank={group:e,turret:r,barrel:a,cooldown:3,alive:!0,hp:400}}_makeSoldier(e){const n=e==="enemy"?me.enemy.color:me.squad.color,i=new Nn,r=new At({color:n,roughness:.8}),s=new ze(new Lt(.55,.8,.4),new At({color:2829099,roughness:1}));s.position.y=.4;const a=new ze(new Lt(.6,.8,.35),r);a.position.y=1.2;const o=new ze(new Lt(.32,.32,.32),new At({color:13213818,roughness:1}));o.position.y=1.78;const l=new ze(new Vl(.22,10,8,0,Math.PI*2,0,Math.PI/2),new At({color:n,roughness:.7}));l.position.y=1.9;const c=new ze(new Lt(.1,.1,.9),new At({color:1381653}));return c.position.set(.22,1.2,.5),[s,a,o,l,c].forEach(d=>{d.castShadow=!0,i.add(d)}),i.userData.parts=[s,a,o,l,c],i}_spawnSoldier(e,n){const i=this._makeSoldier(e);i.position.copy(n),this.scene.add(i);const r={team:e,root:i,alive:!0,hp:e==="enemy"?me.enemy.health:me.squad.health,maxHp:e==="enemy"?me.enemy.health:me.squad.health,vel:new L,fireCd:Math.random()*1.5,strafe:Math.random()>.5?1:-1,strafeT:1+Math.random()*2,parts:i.userData.parts,hitFlash:0};return i.userData.parts.forEach(s=>{s.userData.soldier=r}),this.soldiers.push(r),e==="enemy"?this.enemies.push(r):this.allies.push(r),r}_buildSquad(){for(let e=0;e<me.enemy.count;e++){const n=Math.random()*Math.PI*2,i=60+Math.random()*50;this._spawnSoldier("enemy",new L(Math.cos(n)*i,0,Math.sin(n)*i-20))}for(let e=0;e<me.squad.allies;e++)this._spawnSoldier("ally",new L(-3-e*2,0,84))}_buildPooled(){const e=new Ti(.025,.025,1,6),n=new Ra({color:16765567,transparent:!0,opacity:.9});for(let r=0;r<60;r++){const s=new ze(e,n.clone());s.visible=!1,this.scene.add(s),this.tracers.push({mesh:s,life:0})}const i=new Vl(.12,6,6);for(let r=0;r<40;r++){const s=new ze(i,new Ra({color:16755268,transparent:!0}));s.visible=!1,this.scene.add(s),this.sparks.push({mesh:s,life:0,vel:new L})}this.muzzleLight=new QS(16764006,0,12),this.scene.add(this.muzzleLight)}_setupAudio(){try{this.audio=new(window.AudioContext||window.webkitAudioContext),this._noiseBuf=(()=>{const e=this.audio.createBuffer(1,this.audio.sampleRate*.3,this.audio.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return e})()}catch{this.audio=null}}_sfx(e){if(!this.audio)return;const n=this.audio.currentTime;if(e==="shoot"||e==="mg"||e==="cannon"){const i=this.audio.createBufferSource();i.buffer=this._noiseBuf;const r=this.audio.createGain(),s=this.audio.createBiquadFilter();s.type="lowpass",s.frequency.value=e==="cannon"?600:1800,r.gain.setValueAtTime(e==="cannon"?.6:.25,n),r.gain.exponentialRampToValueAtTime(.001,n+(e==="cannon"?.4:.12)),i.connect(s),s.connect(r),r.connect(this.audio.destination),i.start(n),i.stop(n+.4)}else if(e==="explosion"){const i=this.audio.createOscillator(),r=this.audio.createGain();i.type="sine",i.frequency.setValueAtTime(120,n),i.frequency.exponentialRampToValueAtTime(30,n+.5),r.gain.setValueAtTime(.7,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r),r.connect(this.audio.destination),i.start(n),i.stop(n+.6)}}_setupInput(){this._listeners.keydown=e=>{this.keys[e.code]=!0,e.code==="KeyR"&&this._reload(),e.code==="KeyQ"&&this._useAbility(),e.code==="KeyF"&&this._toggleVehicle()},this._listeners.keyup=e=>{this.keys[e.code]=!1},this._listeners.mousedown=e=>{e.button===0&&(this.mouseDown=!0),e.button===2&&(this.rightDown=!0)},this._listeners.mouseup=e=>{e.button===0&&(this.mouseDown=!1),e.button===2&&(this.rightDown=!1)},this._listeners.contextmenu=e=>e.preventDefault(),this._listeners.resize=()=>this._resize(),window.addEventListener("keydown",this._listeners.keydown),window.addEventListener("keyup",this._listeners.keyup),this.renderer.domElement.addEventListener("mousedown",this._listeners.mousedown),window.addEventListener("mouseup",this._listeners.mouseup),window.addEventListener("contextmenu",this._listeners.contextmenu),window.addEventListener("resize",this._listeners.resize)}_resize(){const e=this.container.clientWidth,n=this.container.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}get weapon(){return me.classes[this.classKey].weapon}get ability(){return me.classes[this.classKey].ability}_reload(){if(this.reloadTimer>0||this.inVehicle)return;const e=this.weapon;if(this.ammo>=e.mag||this.reserve<=0)return;this.reloadTimer=e.reload;const n=e.mag-this.ammo,i=Math.min(n,this.reserve);this.ammo+=i,this.reserve-=i}_useAbility(){if(this.abilityCd>0)return;const e=this.ability;if(this.abilityCd=e.cd,this.classKey==="medic")this.health=Math.min(me.player.maxHealth,this.health+60),this.allies.forEach(n=>{n.alive&&n.root.position.distanceTo(this.camera.position)<25&&(n.hp=Math.min(n.maxHp,n.hp+50))});else if(this.classKey==="engineer")this.vehicle.alive&&this.vehicle.group.position.distanceTo(this.camera.position)<20&&(this.vehicle.health=Math.min(this.vehicle.maxHealth,this.vehicle.health+250));else if(this.classKey==="assault"){const n=this.weapon;this.ammo=n.mag,this.reserve=n.reserve}else this.classKey==="recon"&&(this._spotTimer=8)}_muzzle(){return cA.copy(this.camera.position).add(_u.copy(this._forward()).multiplyScalar(.6)).clone()}_forward(){return this.camera.getWorldDirection(_u),_u.clone()}shoot(e=!1){const n=this.weapon;if(this.reloadTimer>0||this.fireCooldown>0)return;if(this.ammo<=0){this._reload();return}this.fireCooldown=n.fireRate,this.ammo--,this.recoil=Math.min(.16,this.recoil+n.recoil),this.spread=Math.min(.12,this.spread+n.spread*1.6+(this._moving?.01:0));const i=this._muzzle(),r=this._forward(),s=this.spread+(this.onGround?0:.04);r.x+=(Math.random()-.5)*s,r.y+=(Math.random()-.5)*s,r.z+=(Math.random()-.5)*s,r.normalize();const a=n.drop*300;if(r.y-=a,r.normalize(),n.type==="shotgun")for(let o=0;o<n.pellets;o++){const l=r.clone();l.x+=(Math.random()-.5)*n.spread,l.y+=(Math.random()-.5)*n.spread,l.z+=(Math.random()-.5)*n.spread,l.normalize(),this._hitscan(i,l,n.damage,n.range,13621468)}else this._hitscan(i,r,n.damage,n.range,16765567);this._flash(i),this._sfx((n.type==="bolt","shoot"))}_hitscan(e,n,i,r,s){const a=new Wo(e,n,.1,r),o=[...this.worldMeshes];this.enemies.forEach(d=>{d.alive&&d.parts.forEach(h=>o.push(h))});const l=a.intersectObjects(o,!1);let c=e.clone().add(n.clone().multiplyScalar(r));if(l.length){const d=l[0];c=d.point.clone();const h=d.object.userData.soldier;h&&h.team==="enemy"&&h.alive?this._damageEnemy(h,i):d.object.userData.solidRef&&d.object.userData.solidRef.destructible&&this._damageProp(d.object,i),this._spark(c,s)}this._tracer(e,c,s)}_tracer(e,n,i){const r=this.tracers.find(o=>o.life<=0)||this.tracers[0],s=e.clone().add(n).multiplyScalar(.5),a=e.distanceTo(n);r.mesh.position.copy(s),r.mesh.scale.set(1,a,1),r.mesh.quaternion.setFromUnitVectors(uA,n.clone().sub(e).normalize()),r.mesh.material.color.setHex(i),r.mesh.material.opacity=.9,r.mesh.visible=!0,r.life=.06}_spark(e,n){const i=this.sparks.find(r=>r.life<=0)||this.sparks[0];i.mesh.position.copy(e),i.mesh.material.color.setHex(n),i.mesh.visible=!0,i.life=.18,i.vel.set((Math.random()-.5)*4,Math.random()*4,(Math.random()-.5)*4)}_flash(e){this.muzzleLight.position.copy(e),this.muzzleLight.intensity=3}_damageEnemy(e,n){e.hp-=n,e.hitFlash=.12,e.hp<=0&&e.alive&&(e.alive=!1,this.kills++,this.score+=100,this.tickets.enemy=Math.max(0,this.tickets.enemy-10),this._ragdoll(e))}_damageProp(e,n){const i=e.userData.solidRef;i.alive&&(i.hp-=n,i.hp<=0&&(i.alive=!1,this._shatter(e)))}_shatter(e){const n=e.position.clone(),i=e.material.color?e.material.color.getHex():8947848;this.scene.remove(e),this.worldMeshes=this.worldMeshes.filter(r=>r!==e),this.solidProps=this.solidProps.filter(r=>r!==e);for(let r=0;r<8;r++){const s=new ze(new Lt(.3,.3,.3),new At({color:i}));s.position.copy(n).add(new L((Math.random()-.5)*1.5,Math.random()*1,(Math.random()-.5)*1.5)),s.castShadow=!0,this.scene.add(s),this.debris.push({mesh:s,vel:new L((Math.random()-.5)*5,Math.random()*6+2,(Math.random()-.5)*5),life:3})}}_ragdoll(e){e.root.rotation.x=Math.PI/2,e.root.position.y=.4,setTimeout(()=>{this.scene.remove(e.root)},4e3)}_toggleVehicle(){if(this.inVehicle){this._exitVehicle();return}this.vehicle.alive&&this.vehicle.group.position.distanceTo(this.camera.position)<5&&this._enterVehicle()}_enterVehicle(){this.inVehicle=!0,this._exitingVehicle=!0,this.health=me.player.maxHealth}_exitVehicle(){this.inVehicle=!1;const e=this.vehicle.group;this.camera.position.set(e.position.x+3,me.player.eyeHeight,e.position.z+3),setTimeout(()=>{this._exitingVehicle=!1},50)}_fireCannon(){const e=this.vehicle;if(!e.alive||e.cooldown>0)return;e.cooldown=me.vehicle.cannonCooldown;const n=this._forward(),i=e.barrel.getWorldPosition(new L),r=new Wo(i,n,.1,600),s=[...this.worldMeshes];this.enemies.forEach(l=>{l.alive&&l.parts.forEach(c=>s.push(c))});const a=r.intersectObjects(s,!1);let o=i.clone().add(n.clone().multiplyScalar(400));if(a.length){o=a[0].point.clone();const l=a[0].object.userData.soldier;l&&l.alive&&this._damageEnemy(l,me.vehicle.cannonDamage)}this.enemies.forEach(l=>{l.alive&&l.root.position.distanceTo(o)<me.vehicle.cannonSplash&&this._damageEnemy(l,me.vehicle.cannonDamage*.6)}),this._tracer(i,o,16742195),this._sfx("cannon"),this._spark(o,16742195),this._sfx("explosion")}_los(e,n){const i=n.clone().sub(e),r=i.length();return i.normalize(),new Wo(e,i,.1,r-1).intersectObjects(this.worldMeshes,!1).length===0}_updateSoldier(e,n,i){if(!e.alive)return;const r=i?this._nearestOf(e,[this.playerProxy(),...this.allies.filter(s=>s.alive)]):this._nearestEnemy(e);if(e.strafeT-=n,e.strafeT<=0&&(e.strafe*=-1,e.strafeT=1.5+Math.random()*2),r){const s=r.position.clone().sub(e.root.position);s.y=0;const a=s.length();s.normalize();const o=i?38:45,l=i?me.enemy.speed:me.squad.speed;let c=new L;a>o+6?c.add(s):a<o-8?c.sub(s):c.add(new L(-s.z,0,s.x).multiplyScalar(e.strafe)),c.normalize().multiplyScalar(l*n);const d=e.root.position.clone().add(c);for(const p of this.solidProps){const v=p.userData.solidRef&&p.userData.solidRef.radius||1;d.distanceTo(p.position)<v+.6&&d.add(d.clone().sub(p.position).setY(0).normalize().multiplyScalar(.8))}d.x=ri.clamp(d.x,-130,me.map.half),d.z=ri.clamp(d.z,-130,me.map.half),e.root.position.copy(d),e.root.lookAt(r.position.x,e.root.position.y,r.position.z),e.fireCd-=n;const h=e.root.position.clone().add(new L(0,1.4,0)),u=r.position.clone().add(new L(0,1.2,0));if(a<(i?me.enemy.range:me.squad.range)&&e.fireCd<=0&&this._los(h,u)){e.fireCd=i?me.enemy.fireRate:me.squad.fireRate,this._tracer(h,u,i?16733508:6728447);const p=i?Math.max(.15,1-a/(me.enemy.range*1.4))*(1-me.enemy.spread):.7;if(Math.random()<p){const v=i?me.enemy.damage:me.squad.damage;if(i)this._damagePlayer(v);else{const M=this._nearestEnemy(e);M&&this._damageEnemy(M,v)}}}}else if(!i){const s=this.playerProxy(),a=e.root.position.clone().sub(s);a.y=0,a.length()>6&&(a.normalize().multiplyScalar(me.squad.speed*n),e.root.position.add(a))}e.hitFlash>0&&(e.hitFlash-=n,e.parts.forEach(s=>s.material.emissive&&s.material.emissive.setHex(16711680)))}_nearestEnemy(e){let n=null,i=1e9;for(const r of this.enemies){if(!r.alive)continue;const s=r.root.position.distanceTo(e.root.position);s<i&&(i=s,n=r)}return n}_nearestOf(e,n){let i=null,r=1e9;for(const s of n){if(!s||s.alive===!1)continue;const o=(s.root?s.root.position:s.position).distanceTo(e.root.position);o<r&&(r=o,i=s)}return i}playerProxy(){return{position:this.camera.position,alive:this.health>0}}_damagePlayer(e){this.inVehicle||(this.health-=e,this._lastHit=this.time,this.health<=0&&(this.health=0,this._end("defeat")))}setWeather(e){const n=me.weather[e];if(n){if(this.weatherKey=e,this.scene.fog.density=n.fog,this.sun.intensity=2.2*n.sun,!this.rain){const i=new rn,r=3500,s=new Float32Array(r*3);for(let a=0;a<r;a++)s[a*3]=(Math.random()-.5)*260,s[a*3+1]=Math.random()*80,s[a*3+2]=(Math.random()-.5)*260;i.setAttribute("position",new jn(s,3)),this.rain=new VS(i,new R_({color:11455195,size:.25,transparent:!0,opacity:.6})),this.scene.add(this.rain)}this.rain.material.opacity=n.rain>0?.6:0,this.rain.visible=n.rain>0,this.rainCount=n.rain,this.wind=n.wind}}_updateCapture(e){for(const r of this.capturePoints){let s=0,a=0;this.camera.position.distanceTo(r.group.position)<r.radius&&s++,this.allies.forEach(c=>{c.alive&&c.root.position.distanceTo(r.group.position)<r.radius&&s++}),this.enemies.forEach(c=>{c.alive&&c.root.position.distanceTo(r.group.position)<r.radius&&a++});const o=s>a?1:a>s?-1:0;o!==0&&!(s>0&&a>0)&&(r.progress=ri.clamp(r.progress+o*e*.25,-1,1)),r.progress>=1&&r.owner!=="player"&&(r.owner="player"),r.progress<=-1&&r.owner!=="enemy"&&(r.owner="enemy"),r.progress>-1&&r.progress<1&&s===0&&a===0&&(r.owner="neutral");const l=r.owner==="player"?4171775:r.owner==="enemy"?16729156:8947848;r.flagMat.color.setHex(l),r.ring.material.color.setHex(l),r.beam.material.color.setHex(l)}const n=this.capturePoints.filter(r=>r.owner==="player").length,i=this.capturePoints.filter(r=>r.owner==="enemy").length;this.tickets.player=Math.min(me.tickets.player,this.tickets.player+(n-i)*me.tickets.captureRate*e),this.tickets.enemy=Math.max(0,this.tickets.enemy-(n-i)*me.tickets.captureRate*e),this.tickets.enemy<=0&&this._end("victory"),this.tickets.player<=0&&this._end("defeat")}_end(e){if(!this.ended){this.ended=!0,this.running=!1;try{this.controls.unlock()}catch{}this.onEnd({result:e,score:this.score,kills:this.kills})}}start(e){this.classKey=e||"assault";const n=this.weapon;this.ammo=n.mag,this.reserve=n.reserve,this.health=me.player.maxHealth,this.score=0,this.kills=0,this.tickets={player:me.tickets.player,enemy:me.enemy.tickets},this.ended=!1,this.paused=!1,this.running=!0,this.abilityCd=0,this._lastHit=-99,this._spotTimer=0,this.controls.lock()}pause(){this.ended||(this.paused=!0,this.onPause())}resume(){this.paused=!1,this.controls.lock()}_animate(){this._raf=requestAnimationFrame(this._animate);const e=Math.min(.05,this.clock.getDelta());this.running&&!this.paused&&this._update(e),this.renderer.render(this.scene,this.camera)}_update(e){this.time+=e,this.fireCooldown=Math.max(0,this.fireCooldown-e),this.reloadTimer=Math.max(0,this.reloadTimer-e),this.abilityCd=Math.max(0,this.abilityCd-e),this.recoil=Math.max(0,this.recoil-e*.6),this.spread=Math.max(this.weapon.spread,this.spread-e*.05),this._spotTimer>0&&(this._spotTimer-=e),this.inVehicle?this._updateVehicle(e):this._updatePlayer(e),!this.inVehicle&&this.mouseDown&&this.fireCooldown<=0&&(this._moving=(this.keys.KeyW||this.keys.KeyA||this.keys.KeyS||this.keys.KeyD)&&this.onGround,this.shoot());const i=this.weapon.scope&&this.rightDown?75/this.weapon.scope:75;Math.abs(this.camera.fov-i)>.5&&(this.camera.fov+=(i-this.camera.fov)*.3,this.camera.updateProjectionMatrix()),this.camera.rotation.x=this.camera.rotation.x||0,this._applyRecoil(),this.enemies.forEach(r=>this._updateSoldier(r,e,!0)),this.allies.forEach(r=>this._updateSoldier(r,e,!1)),this.enemies.filter(r=>r.alive).length<4&&this._spawnReinforcements(),this._updateEnemyTank(e),this._updateWeather(e),this._updatePooled(e),this._updateCapture(e),this.health>0&&this.time-this._lastHit>me.player.regenDelay&&!this.inVehicle&&(this.health=Math.min(me.player.maxHealth,this.health+me.player.regenRate*e)),this._emitHUD()}_applyRecoil(){const e=this.recoil;e>0&&this.camera.rotateX(-e*.5)}_updatePlayer(e){const n=me.player,i=this.keys.ShiftLeft?n.runSpeed:n.walkSpeed,r=(this.keys.KeyW?1:0)-(this.keys.KeyS?1:0),s=(this.keys.KeyD?1:0)-(this.keys.KeyA?1:0);r&&this.controls.moveForward(r*i*e),s&&this.controls.moveRight(s*i*e),this.keys.Space&&this.onGround&&(this.vy=n.jumpSpeed,this.onGround=!1),this.vy-=n.gravity*e,this.camera.position.y+=this.vy*e,this.camera.position.y<=n.eyeHeight&&(this.camera.position.y=n.eyeHeight,this.vy=0,this.onGround=!0),this._collidePlayer(),this.camera.position.x=ri.clamp(this.camera.position.x,-130,me.map.half),this.camera.position.z=ri.clamp(this.camera.position.z,-130,me.map.half)}_collidePlayer(){const e=me.player.radius;for(const n of this.solidProps){const i=n.userData.solidRef;if(!i||!i.alive)continue;const r=i.radius||1,s=this.camera.position.x-n.position.x,a=this.camera.position.z-n.position.z,o=Math.hypot(s,a),l=e+r;if(o<l&&o>1e-4){const c=l-o;this.camera.position.x+=s/o*c,this.camera.position.z+=a/o*c}}}_updateVehicle(e){const n=this.vehicle;if(!n.alive)return;const i=me.vehicle;n.cooldown=Math.max(0,n.cooldown-e),n.mgCd=Math.max(0,n.mgCd-e);const r=n.group;this.keys.KeyW?n.speed+=i.speed*e:this.keys.KeyS?n.speed-=i.reverse*e:n.speed*=.92,n.speed=ri.clamp(n.speed,-12,i.speed),this.keys.KeyA&&(n.heading+=i.turn*e),this.keys.KeyD&&(n.heading-=i.turn*e),r.rotation.y=n.heading,r.position.x-=Math.sin(n.heading)*n.speed*e,r.position.z-=Math.cos(n.heading)*n.speed*e,r.position.x=ri.clamp(r.position.x,-130,me.map.half),r.position.z=ri.clamp(r.position.z,-130,me.map.half);const s=Math.atan2(this._forward().x,this._forward().z);n.turret.rotation.y=s-n.heading,r.updateMatrixWorld(!0);const a=n.turret.getWorldPosition(new L);this.camera.position.copy(a).add(new L(0,.4,0)),this.mouseDown&&(n.cooldown<=0&&this._fireCannon(),n.mgCd<=0&&(n.mgCd=i.mgFireRate,this._mgFire()))}_mgFire(){const e=this._forward(),n=this.vehicle.barrel.getWorldPosition(new L),i=e.clone();i.x+=(Math.random()-.5)*me.vehicle.mgSpread,i.y+=(Math.random()-.5)*me.vehicle.mgSpread,i.normalize();const r=new Wo(n,i,.1,300),s=[...this.worldMeshes];this.enemies.forEach(l=>{l.alive&&l.parts.forEach(c=>s.push(c))});const a=r.intersectObjects(s,!1);let o=n.clone().add(i.clone().multiplyScalar(250));if(a.length){o=a[0].point.clone();const l=a[0].object.userData.soldier;l&&l.alive&&this._damageEnemy(l,me.vehicle.mgDamage)}this._tracer(n,o,16765567),this._sfx("mg")}_updateEnemyTank(e){const n=this.enemyTank;if(!n.alive)return;const i=this.playerProxy().position,r=i.clone().sub(n.group.position),s=Math.atan2(r.x,r.z);if(n.turret.rotation.y=s-n.group.rotation.y,n.group.updateMatrixWorld(!0),n.cooldown-=e,n.cooldown<=0&&n.group.position.distanceTo(i)<200&&this._los(n.barrel.getWorldPosition(new L),i.clone().add(new L(0,1.2,0)))){n.cooldown=3.2,i.clone().add(new L(0,1.2,0)).sub(n.barrel.getWorldPosition(new L)).normalize();const a=i.clone().add(new L(0,1.2,0));this._tracer(n.barrel.getWorldPosition(new L),a,16742195),this._sfx("cannon"),this._sfx("explosion"),this.inVehicle||this._damagePlayer(28)}}_spawnReinforcements(){const e=Math.random()*Math.PI*2,n=70+Math.random()*40;this._spawnSoldier("enemy",new L(Math.cos(e)*n,0,Math.sin(e)*n-20))}_updateWeather(e){if(this.rain&&this.rain.visible){const n=this.rain.geometry.attributes.position,i=n.array,r=this.camera.position;for(let s=0;s<this.rainCount;s++)i[s*3+1]-=(40+this.wind*20)*e,i[s*3]+=this.wind*8*e,i[s*3+1]<0&&(i[s*3]=r.x+(Math.random()-.5)*260,i[s*3+1]=60+Math.random()*20,i[s*3+2]=r.z+(Math.random()-.5)*260);n.needsUpdate=!0}this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-e*30),this._spotTimer>0&&this.enemies.forEach(n=>{n.alive&&n.parts.forEach(i=>i.material.emissive&&i.material.emissive.setHex(4465152))})}_updatePooled(e){for(const n of this.tracers)n.life>0&&(n.life-=e,n.mesh.material.opacity=Math.max(0,n.life/.06*.9),n.life<=0&&(n.mesh.visible=!1));for(const n of this.sparks)n.life>0&&(n.life-=e,n.mesh.position.addScaledVector(n.vel,e),n.vel.y-=12*e,n.mesh.material.opacity=Math.max(0,n.life/.18),n.life<=0&&(n.mesh.visible=!1));for(let n=this.debris.length-1;n>=0;n--){const i=this.debris[n];i.life-=e,i.vel.y-=22*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.position.y<.15&&(i.mesh.position.y=.15,i.vel.set(0,0,0)),i.life<=0&&(this.scene.remove(i.mesh),this.debris.splice(n,1))}this.soldiers.forEach(n=>{n.alive&&n.hitFlash<=0&&n.parts.forEach(i=>i.material.emissive&&i.material.emissive.setHex(0))})}_emitHUD(){const e=this.weapon,n=[];this.enemies.forEach(i=>{i.alive&&n.push({x:i.root.position.x,z:i.root.position.z,t:"e",s:this._spotTimer>0})}),this.allies.forEach(i=>{i.alive&&n.push({x:i.root.position.x,z:i.root.position.z,t:"a"})}),this.capturePoints.forEach(i=>n.push({x:i.pos[0],z:i.pos[2],t:"c",owner:i.owner})),n.push({x:this.camera.position.x,z:this.camera.position.z,t:"p"}),this.onHUD({health:Math.round(this.health),maxHealth:me.player.maxHealth,ammo:this.ammo,mag:e.mag,reserve:this.reserve,className:me.classes[this.classKey].name,classColor:me.classes[this.classKey].color,abilityName:this.ability.name,abilityCd:this.abilityCd,abilityMax:this.ability.cd,score:this.score,kills:this.kills,tickets:this.tickets,points:this.capturePoints.map(i=>({id:i.id,name:i.name,owner:i.owner,progress:i.progress})),weather:me.weather[this.weatherKey].label,inVehicle:this.inVehicle,vehicleHealth:this.vehicle.alive?Math.round(this.vehicle.health):0,blips:n,mapHalf:me.map.half})}dispose(){this._raf&&cancelAnimationFrame(this._raf),window.removeEventListener("keydown",this._listeners.keydown),window.removeEventListener("keyup",this._listeners.keyup),this.renderer.domElement.removeEventListener("mousedown",this._listeners.mousedown),window.removeEventListener("mouseup",this._listeners.mouseup),window.removeEventListener("contextmenu",this._listeners.contextmenu),window.removeEventListener("resize",this._listeners.resize);try{this.controls.disconnect()}catch{}this.audio&&this.audio.close(),this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}}function dA({hud:t}){const e=Dn.useRef(null);if(Dn.useEffect(()=>{const l=e.current;if(!l||!t)return;const c=l.getContext("2d"),d=l.width,h=t.mapHalf;c.clearRect(0,0,d,d),c.fillStyle="rgba(10,16,12,0.55)",c.fillRect(0,0,d,d),c.strokeStyle="rgba(120,160,120,0.4)",c.strokeRect(1,1,d-2,d-2);const u=(p,v)=>[d/2+p/h*(d/2-6),d/2+v/h*(d/2-6)];for(const p of t.blips)if(p.t==="c"){const[v,M]=u(p.x,p.z);c.fillStyle=p.owner==="player"?"#3fa7ff":p.owner==="enemy"?"#ff4444":"#888",c.beginPath(),c.arc(v,M,4,0,7),c.fill()}for(const p of t.blips){const[v,M]=u(p.x,p.z);p.t==="e"?(c.fillStyle=p.s?"#ffcc00":"#ff5050",c.beginPath(),c.arc(v,M,2.5,0,7),c.fill()):p.t==="a"?(c.fillStyle="#3fa7ff",c.beginPath(),c.arc(v,M,2.5,0,7),c.fill()):p.t==="p"&&(c.fillStyle="#ffffff",c.beginPath(),c.arc(v,M,3.5,0,7),c.fill(),c.strokeStyle="#fff",c.stroke())}},[t]),!t)return null;const n=t.health/t.maxHealth*100,i=t.tickets.player,r=t.tickets.enemy,s=i/250*100,a=r/250*100,o=t.abilityMax?(1-t.abilityCd/t.abilityMax)*100:100;return re.jsxs("div",{className:"hud",children:[re.jsxs("div",{className:"crosshair",children:[re.jsx("span",{className:"ch ch-t"}),re.jsx("span",{className:"ch ch-b"}),re.jsx("span",{className:"ch ch-l"}),re.jsx("span",{className:"ch ch-r"}),re.jsx("span",{className:"ch-dot"})]}),re.jsxs("div",{className:"hud-bl",children:[re.jsxs("div",{className:"hp-wrap",children:[re.jsx("div",{className:"hp-bar",children:re.jsx("div",{className:"hp-fill",style:{width:`${n}%`,background:n>40?"#7ec850":"#e0533a"}})}),re.jsxs("div",{className:"hp-text",children:[t.health," HP"]})]}),re.jsx("div",{className:"class-tag",style:{borderColor:t.classColor,color:t.classColor},children:t.className})]}),re.jsxs("div",{className:"hud-br",children:[re.jsxs("div",{className:"ammo",children:[re.jsx("span",{className:"ammo-cur",children:t.ammo}),re.jsx("span",{className:"ammo-sep",children:"/"}),re.jsx("span",{className:"ammo-mag",children:t.mag}),re.jsxs("span",{className:"ammo-res",children:["备弹 ",t.reserve]})]}),re.jsxs("div",{className:"ability",style:{opacity:o>=100?1:.5},children:[re.jsx("span",{className:"ab-key",children:"Q"})," ",t.abilityName,re.jsx("div",{className:"ab-bar",children:re.jsx("div",{style:{width:`${o}%`}})})]}),t.inVehicle&&re.jsxs("div",{className:"veh-stat",children:["🚙 载具装甲 ",re.jsx("b",{children:t.vehicleHealth})," · 左键主炮 / 同轴机枪"]})]}),re.jsxs("div",{className:"hud-top",children:[re.jsxs("div",{className:"ticket ticket-p",children:["我方 ",re.jsx("b",{children:Math.round(i)})]}),re.jsxs("div",{className:"ticket-bars",children:[re.jsx("div",{className:"tb tb-p",style:{width:`${s}%`}}),re.jsx("div",{className:"tb tb-e",style:{width:`${a}%`}})]}),re.jsxs("div",{className:"ticket ticket-e",children:[re.jsx("b",{children:Math.round(r)})," 敌军"]})]}),re.jsx("div",{className:"points",children:t.points.map(l=>re.jsxs("div",{className:`pt pt-${l.owner}`,children:[re.jsx("span",{className:"pt-id",children:l.id})," ",l.name,re.jsx("div",{className:"pt-bar",children:re.jsx("div",{className:"pt-fill",style:{width:`${Math.abs(l.progress)*100}%`,background:l.progress>0?"#3fa7ff":"#ff4444"}})})]},l.id))}),re.jsxs("div",{className:"hud-tr",children:[re.jsxs("div",{children:["得分 ",t.score," · 击杀 ",t.kills]}),re.jsxs("div",{className:"weather",children:["天气：",t.weather]})]}),re.jsxs("div",{className:"minimap",children:[re.jsx("canvas",{ref:e,width:150,height:150}),re.jsx("div",{className:"mm-label",children:"战术地图"})]}),re.jsx("div",{className:"hud-hint",children:"WASD 移动 · 鼠标瞄准 · 左键开火 · R 换弹 · Shift 疾跑 · 空格跳 · Q 技能 · F 上下载具 · 右键(侦察)瞄准镜 · Esc 暂停"})]})}const hA=Object.entries(me.classes).map(([t,e])=>({key:t,...e})),pA=[{key:"clear",label:me.weather.clear.label,desc:"晴朗视野，弹道最稳定"},{key:"rain",label:me.weather.rain.label,desc:"降水降低能见度，湿滑"},{key:"storm",label:me.weather.storm.label,desc:"风暴浓雾，近战环境"}];function mA({view:t,selectedClass:e,setSelectedClass:n,selectedWeather:i,setSelectedWeather:r,onStart:s,onResume:a,onRestart:o,result:l}){if(t==="playing")return null;if(t==="menu")return re.jsx("div",{className:"overlay menu",children:re.jsxs("div",{className:"menu-card",children:[re.jsxs("div",{className:"brand",children:[re.jsx("h1",{children:me.title}),re.jsx("p",{className:"sub",children:me.subtitle}),re.jsx("p",{className:"tagline",children:"真实战场 · 大规模战术对抗 · 载具协同 · 据点争夺"})]}),re.jsxs("div",{className:"section",children:[re.jsx("h3",{children:"选择兵种"}),re.jsx("div",{className:"grid",children:hA.map(c=>re.jsxs("button",{className:`pick ${e===c.key?"on":""}`,style:{"--c":c.color},onClick:()=>n(c.key),children:[re.jsx("div",{className:"pick-name",children:c.name}),re.jsx("div",{className:"pick-wpn",children:c.weapon.name}),re.jsxs("div",{className:"pick-ab",children:[re.jsx("b",{children:"Q"})," ",c.ability.name]}),re.jsx("div",{className:"pick-desc",children:c.ability.desc})]},c.key))})]}),re.jsxs("div",{className:"section",children:[re.jsx("h3",{children:"战场天气"}),re.jsx("div",{className:"grid grid-3",children:pA.map(c=>re.jsxs("button",{className:`pick ${i===c.key?"on":""}`,onClick:()=>r(c.key),children:[re.jsx("div",{className:"pick-name",children:c.label}),re.jsx("div",{className:"pick-desc",children:c.desc})]},c.key))})]}),re.jsx("button",{className:"start-btn",onClick:s,children:"▶ 进入战场"}),re.jsx("div",{className:"controls-help",children:"WASD 移动 · 鼠标瞄准 · 左键开火 · R 换弹 · Shift 疾跑 · 空格跳 · Q 技能 · F 上下载具 · 右键(侦察兵)瞄准镜 · Esc 暂停"})]})});if(t==="paused")return re.jsx("div",{className:"overlay",children:re.jsxs("div",{className:"panel",children:[re.jsx("h2",{children:"已暂停"}),re.jsx("button",{className:"start-btn",onClick:a,children:"继续战斗"}),re.jsx("button",{className:"ghost-btn",onClick:o,children:"重新开始"}),re.jsx("div",{className:"controls-help",children:"提示：点击「继续战斗」会重新锁定鼠标"})]})});if(t==="ended"){const c=(l==null?void 0:l.result)==="victory";return re.jsx("div",{className:"overlay",children:re.jsxs("div",{className:"panel",children:[re.jsx("h2",{className:c?"win":"lose",children:c?"🏆 战斗胜利":"💀 任务失败"}),re.jsxs("p",{className:"stats",children:["得分 ",re.jsx("b",{children:(l==null?void 0:l.score)??0})," · 击杀 ",re.jsx("b",{children:(l==null?void 0:l.kills)??0})]}),re.jsx("button",{className:"start-btn",onClick:o,children:"再来一局"}),re.jsx("div",{className:"controls-help",children:"胜利条件：耗尽敌军兵力值或清剿敌军；失败：我方兵力值归零"})]})})}return null}function gA(){const t=Dn.useRef(null),e=Dn.useRef(null),[n,i]=Dn.useState("menu"),[r,s]=Dn.useState(null),[a,o]=Dn.useState(null),[l,c]=Dn.useState("assault"),[d,h]=Dn.useState("clear"),u=()=>{if(e.current)try{e.current.dispose()}catch{}const f=new fA(t.current,{onHUD:m=>s(m),onPause:()=>i("paused"),onEnd:m=>{o(m),i("ended")},onLockChange:m=>{!m&&n!=="ended"&&n!=="menu"&&i("paused"),m&&n==="paused"&&i("playing")}});return f.init(),e.current=f,f};Dn.useEffect(()=>(u(),()=>{e.current&&e.current.dispose()}),[]);const p=(f,m,S=!1)=>{const y=e.current||u();y.setWeather(m),y.start(f),o(null),i("playing")},v=()=>p(l,d),M=()=>p(l,d),_=()=>{var f;i("playing"),(f=e.current)==null||f.resume()};return re.jsxs("div",{className:"game-root",children:[re.jsx("div",{className:"canvas-host",ref:t}),n==="playing"&&r&&re.jsx(dA,{hud:r}),re.jsx(mA,{view:n,selectedClass:l,setSelectedClass:c,selectedWeather:d,setSelectedWeather:h,onStart:v,onResume:_,onRestart:M,result:a})]})}vu.createRoot(document.getElementById("root")).render(re.jsx(gA,{}));
