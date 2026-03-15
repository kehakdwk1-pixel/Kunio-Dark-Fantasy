(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))K(C);new MutationObserver(C=>{for(const U of C)if(U.type==="childList")for(const W of U.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&K(W)}).observe(document,{childList:!0,subtree:!0});function h(C){const U={};return C.integrity&&(U.integrity=C.integrity),C.referrerPolicy&&(U.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?U.credentials="include":C.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function K(C){if(C.ep)return;C.ep=!0;const U=h(C);fetch(C.href,U)}})();var No={exports:{}},yr={},jo={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu;function Rd(){if(zu)return $;zu=1;var d=Symbol.for("react.element"),_=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),W=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.iterator;function D(f){return f===null||typeof f!="object"?null:(f=R&&f[R]||f["@@iterator"],typeof f=="function"?f:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},re=Object.assign,J={};function q(f,y,V){this.props=f,this.context=y,this.refs=J,this.updater=V||ce}q.prototype.isReactComponent={},q.prototype.setState=function(f,y){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,y,"setState")},q.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Ge(){}Ge.prototype=q.prototype;function Ye(f,y,V){this.props=f,this.context=y,this.refs=J,this.updater=V||ce}var Re=Ye.prototype=new Ge;Re.constructor=Ye,re(Re,q.prototype),Re.isPureReactComponent=!0;var B=Array.isArray,Se=Object.prototype.hasOwnProperty,Pe={current:null},De={key:!0,ref:!0,__self:!0,__source:!0};function Xe(f,y,V){var Q,Y={},X=null,le=null;if(y!=null)for(Q in y.ref!==void 0&&(le=y.ref),y.key!==void 0&&(X=""+y.key),y)Se.call(y,Q)&&!De.hasOwnProperty(Q)&&(Y[Q]=y[Q]);var ee=arguments.length-2;if(ee===1)Y.children=V;else if(1<ee){for(var se=Array(ee),We=0;We<ee;We++)se[We]=arguments[We+2];Y.children=se}if(f&&f.defaultProps)for(Q in ee=f.defaultProps,ee)Y[Q]===void 0&&(Y[Q]=ee[Q]);return{$$typeof:d,type:f,key:X,ref:le,props:Y,_owner:Pe.current}}function En(f,y){return{$$typeof:d,type:f.type,key:y,ref:f.ref,props:f.props,_owner:f._owner}}function xn(f){return typeof f=="object"&&f!==null&&f.$$typeof===d}function Gn(f){var y={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(V){return y[V]})}var fn=/\/+/g;function He(f,y){return typeof f=="object"&&f!==null&&f.key!=null?Gn(""+f.key):y.toString(36)}function rn(f,y,V,Q,Y){var X=typeof f;(X==="undefined"||X==="boolean")&&(f=null);var le=!1;if(f===null)le=!0;else switch(X){case"string":case"number":le=!0;break;case"object":switch(f.$$typeof){case d:case _:le=!0}}if(le)return le=f,Y=Y(le),f=Q===""?"."+He(le,0):Q,B(Y)?(V="",f!=null&&(V=f.replace(fn,"$&/")+"/"),rn(Y,y,V,"",function(We){return We})):Y!=null&&(xn(Y)&&(Y=En(Y,V+(!Y.key||le&&le.key===Y.key?"":(""+Y.key).replace(fn,"$&/")+"/")+f)),y.push(Y)),1;if(le=0,Q=Q===""?".":Q+":",B(f))for(var ee=0;ee<f.length;ee++){X=f[ee];var se=Q+He(X,ee);le+=rn(X,y,V,se,Y)}else if(se=D(f),typeof se=="function")for(f=se.call(f),ee=0;!(X=f.next()).done;)X=X.value,se=Q+He(X,ee++),le+=rn(X,y,V,se,Y);else if(X==="object")throw y=String(f),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return le}function pn(f,y,V){if(f==null)return f;var Q=[],Y=0;return rn(f,Q,"","",function(X){return y.call(V,X,Y++)}),Q}function Ie(f){if(f._status===-1){var y=f._result;y=y(),y.then(function(V){(f._status===0||f._status===-1)&&(f._status=1,f._result=V)},function(V){(f._status===0||f._status===-1)&&(f._status=2,f._result=V)}),f._status===-1&&(f._status=0,f._result=y)}if(f._status===1)return f._result.default;throw f._result}var pe={current:null},S={transition:null},M={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:S,ReactCurrentOwner:Pe};function z(){throw Error("act(...) is not supported in production builds of React.")}return $.Children={map:pn,forEach:function(f,y,V){pn(f,function(){y.apply(this,arguments)},V)},count:function(f){var y=0;return pn(f,function(){y++}),y},toArray:function(f){return pn(f,function(y){return y})||[]},only:function(f){if(!xn(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},$.Component=q,$.Fragment=h,$.Profiler=C,$.PureComponent=Ye,$.StrictMode=K,$.Suspense=T,$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,$.act=z,$.cloneElement=function(f,y,V){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var Q=re({},f.props),Y=f.key,X=f.ref,le=f._owner;if(y!=null){if(y.ref!==void 0&&(X=y.ref,le=Pe.current),y.key!==void 0&&(Y=""+y.key),f.type&&f.type.defaultProps)var ee=f.type.defaultProps;for(se in y)Se.call(y,se)&&!De.hasOwnProperty(se)&&(Q[se]=y[se]===void 0&&ee!==void 0?ee[se]:y[se])}var se=arguments.length-2;if(se===1)Q.children=V;else if(1<se){ee=Array(se);for(var We=0;We<se;We++)ee[We]=arguments[We+2];Q.children=ee}return{$$typeof:d,type:f.type,key:Y,ref:X,props:Q,_owner:le}},$.createContext=function(f){return f={$$typeof:W,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:U,_context:f},f.Consumer=f},$.createElement=Xe,$.createFactory=function(f){var y=Xe.bind(null,f);return y.type=f,y},$.createRef=function(){return{current:null}},$.forwardRef=function(f){return{$$typeof:H,render:f}},$.isValidElement=xn,$.lazy=function(f){return{$$typeof:A,_payload:{_status:-1,_result:f},_init:Ie}},$.memo=function(f,y){return{$$typeof:b,type:f,compare:y===void 0?null:y}},$.startTransition=function(f){var y=S.transition;S.transition={};try{f()}finally{S.transition=y}},$.unstable_act=z,$.useCallback=function(f,y){return pe.current.useCallback(f,y)},$.useContext=function(f){return pe.current.useContext(f)},$.useDebugValue=function(){},$.useDeferredValue=function(f){return pe.current.useDeferredValue(f)},$.useEffect=function(f,y){return pe.current.useEffect(f,y)},$.useId=function(){return pe.current.useId()},$.useImperativeHandle=function(f,y,V){return pe.current.useImperativeHandle(f,y,V)},$.useInsertionEffect=function(f,y){return pe.current.useInsertionEffect(f,y)},$.useLayoutEffect=function(f,y){return pe.current.useLayoutEffect(f,y)},$.useMemo=function(f,y){return pe.current.useMemo(f,y)},$.useReducer=function(f,y,V){return pe.current.useReducer(f,y,V)},$.useRef=function(f){return pe.current.useRef(f)},$.useState=function(f){return pe.current.useState(f)},$.useSyncExternalStore=function(f,y,V){return pe.current.useSyncExternalStore(f,y,V)},$.useTransition=function(){return pe.current.useTransition()},$.version="18.3.1",$}var Eu;function To(){return Eu||(Eu=1,jo.exports=Rd()),jo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Dd(){if(_u)return yr;_u=1;var d=To(),_=Symbol.for("react.element"),h=Symbol.for("react.fragment"),K=Object.prototype.hasOwnProperty,C=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function W(H,T,b){var A,R={},D=null,ce=null;b!==void 0&&(D=""+b),T.key!==void 0&&(D=""+T.key),T.ref!==void 0&&(ce=T.ref);for(A in T)K.call(T,A)&&!U.hasOwnProperty(A)&&(R[A]=T[A]);if(H&&H.defaultProps)for(A in T=H.defaultProps,T)R[A]===void 0&&(R[A]=T[A]);return{$$typeof:_,type:H,key:D,ref:ce,props:R,_owner:C.current}}return yr.Fragment=h,yr.jsx=W,yr.jsxs=W,yr}var Pu;function Id(){return Pu||(Pu=1,No.exports=Dd()),No.exports}var a=Id(),te=To(),_l={},Co={exports:{}},Ae={},zo={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Od(){return Lu||(Lu=1,(function(d){function _(S,M){var z=S.length;S.push(M);e:for(;0<z;){var f=z-1>>>1,y=S[f];if(0<C(y,M))S[f]=M,S[z]=y,z=f;else break e}}function h(S){return S.length===0?null:S[0]}function K(S){if(S.length===0)return null;var M=S[0],z=S.pop();if(z!==M){S[0]=z;e:for(var f=0,y=S.length,V=y>>>1;f<V;){var Q=2*(f+1)-1,Y=S[Q],X=Q+1,le=S[X];if(0>C(Y,z))X<y&&0>C(le,Y)?(S[f]=le,S[X]=z,f=X):(S[f]=Y,S[Q]=z,f=Q);else if(X<y&&0>C(le,z))S[f]=le,S[X]=z,f=X;else break e}}return M}function C(S,M){var z=S.sortIndex-M.sortIndex;return z!==0?z:S.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var U=performance;d.unstable_now=function(){return U.now()}}else{var W=Date,H=W.now();d.unstable_now=function(){return W.now()-H}}var T=[],b=[],A=1,R=null,D=3,ce=!1,re=!1,J=!1,q=typeof setTimeout=="function"?setTimeout:null,Ge=typeof clearTimeout=="function"?clearTimeout:null,Ye=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Re(S){for(var M=h(b);M!==null;){if(M.callback===null)K(b);else if(M.startTime<=S)K(b),M.sortIndex=M.expirationTime,_(T,M);else break;M=h(b)}}function B(S){if(J=!1,Re(S),!re)if(h(T)!==null)re=!0,Ie(Se);else{var M=h(b);M!==null&&pe(B,M.startTime-S)}}function Se(S,M){re=!1,J&&(J=!1,Ge(Xe),Xe=-1),ce=!0;var z=D;try{for(Re(M),R=h(T);R!==null&&(!(R.expirationTime>M)||S&&!Gn());){var f=R.callback;if(typeof f=="function"){R.callback=null,D=R.priorityLevel;var y=f(R.expirationTime<=M);M=d.unstable_now(),typeof y=="function"?R.callback=y:R===h(T)&&K(T),Re(M)}else K(T);R=h(T)}if(R!==null)var V=!0;else{var Q=h(b);Q!==null&&pe(B,Q.startTime-M),V=!1}return V}finally{R=null,D=z,ce=!1}}var Pe=!1,De=null,Xe=-1,En=5,xn=-1;function Gn(){return!(d.unstable_now()-xn<En)}function fn(){if(De!==null){var S=d.unstable_now();xn=S;var M=!0;try{M=De(!0,S)}finally{M?He():(Pe=!1,De=null)}}else Pe=!1}var He;if(typeof Ye=="function")He=function(){Ye(fn)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,pn=rn.port2;rn.port1.onmessage=fn,He=function(){pn.postMessage(null)}}else He=function(){q(fn,0)};function Ie(S){De=S,Pe||(Pe=!0,He())}function pe(S,M){Xe=q(function(){S(d.unstable_now())},M)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(S){S.callback=null},d.unstable_continueExecution=function(){re||ce||(re=!0,Ie(Se))},d.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):En=0<S?Math.floor(1e3/S):5},d.unstable_getCurrentPriorityLevel=function(){return D},d.unstable_getFirstCallbackNode=function(){return h(T)},d.unstable_next=function(S){switch(D){case 1:case 2:case 3:var M=3;break;default:M=D}var z=D;D=M;try{return S()}finally{D=z}},d.unstable_pauseExecution=function(){},d.unstable_requestPaint=function(){},d.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=D;D=S;try{return M()}finally{D=z}},d.unstable_scheduleCallback=function(S,M,z){var f=d.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?f+z:f):z=f,S){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=z+y,S={id:A++,callback:M,priorityLevel:S,startTime:z,expirationTime:y,sortIndex:-1},z>f?(S.sortIndex=z,_(b,S),h(T)===null&&S===h(b)&&(J?(Ge(Xe),Xe=-1):J=!0,pe(B,z-f))):(S.sortIndex=y,_(T,S),re||ce||(re=!0,Ie(Se))),S},d.unstable_shouldYield=Gn,d.unstable_wrapCallback=function(S){var M=D;return function(){var z=D;D=M;try{return S.apply(this,arguments)}finally{D=z}}}})(Eo)),Eo}var Tu;function Md(){return Tu||(Tu=1,zo.exports=Od()),zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function Fd(){if(Ru)return Ae;Ru=1;var d=To(),_=Md();function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K=new Set,C={};function U(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(C[e]=n,e=0;e<n.length;e++)K.add(n[e])}var H=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),T=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},R={};function D(e){return T.call(R,e)?!0:T.call(A,e)?!1:b.test(e)?R[e]=!0:(A[e]=!0,!1)}function ce(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function re(e,n,t,r){if(n===null||typeof n>"u"||ce(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function J(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new J(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ge=/[\-:]([a-z])/g;function Ye(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ge,Ye);q[n]=new J(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ge,Ye);q[n]=new J(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ge,Ye);q[n]=new J(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function Re(e,n,t,r){var l=q.hasOwnProperty(n)?q[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(re(n,t,l,r)&&(t=null),r||l===null?D(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var B=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),Xe=Symbol.for("react.strict_mode"),En=Symbol.for("react.profiler"),xn=Symbol.for("react.provider"),Gn=Symbol.for("react.context"),fn=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),pn=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),S=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,f;function y(e){if(f===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);f=n&&n[1]||""}return`
`+f+e}var V=!1;function Q(e,n){if(!e||V)return"";V=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(g){var r=g}Reflect.construct(e,[],n)}else{try{n.call()}catch(g){r=g}e.call(n.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{V=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?y(e):""}function Y(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case De:return"Fragment";case Pe:return"Portal";case En:return"Profiler";case Xe:return"StrictMode";case He:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gn:return(e.displayName||"Context")+".Consumer";case xn:return(e._context.displayName||"Context")+".Provider";case fn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pn:return n=e.displayName||null,n!==null?n:X(e.type)||"Memo";case Ie:n=e._payload,e=e._init;try{return X(e(n))}catch{}}return null}function le(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(n);case 8:return n===Xe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xr(e){e._valueTracker||(e._valueTracker=We(e))}function Ro(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,n){var t=n.checked;return z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Do(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ee(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Io(e,n){n=n.checked,n!=null&&Re(e,"checked",n,!1)}function Ll(e,n){Io(e,n);var t=ee(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Tl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Tl(e,n.type,ee(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Oo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Tl(e,n,t){(n!=="number"||kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function st(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ee(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(Rt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ee(t)}}function Fo(e,n){var t=ee(n.value),r=ee(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Bo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,Ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mu=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){Mu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function Ho(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function Wo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ho(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Fu=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Il(e,n){if(n){if(Fu[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function Ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ml=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,ut=null,ct=null;function Vo(e){if(e=rr(e)){if(typeof Ul!="function")throw Error(h(280));var n=e.stateNode;n&&(n=Vr(n),Ul(e.stateNode,e.type,n))}}function $o(e){ut?ct?ct.push(e):ct=[e]:ut=e}function Qo(){if(ut){var e=ut,n=ct;if(ct=ut=null,Vo(e),n)for(e=0;e<n.length;e++)Vo(n[e])}}function Ko(e,n){return e(n)}function Go(){}var Bl=!1;function Yo(e,n,t){if(Bl)return e(n,t);Bl=!0;try{return Ko(e,n,t)}finally{Bl=!1,(ut!==null||ct!==null)&&(Go(),Qo())}}function Ot(e,n){var t=e.stateNode;if(t===null)return null;var r=Vr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var Al=!1;if(H)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch{Al=!1}function Uu(e,n,t,r,l,i,o,s,u){var g=Array.prototype.slice.call(arguments,3);try{n.apply(t,g)}catch(x){this.onError(x)}}var Ft=!1,br=null,Sr=!1,Hl=null,Bu={onError:function(e){Ft=!0,br=e}};function Au(e,n,t,r,l,i,o,s,u){Ft=!1,br=null,Uu.apply(Bu,arguments)}function Hu(e,n,t,r,l,i,o,s,u){if(Au.apply(this,arguments),Ft){if(Ft){var g=br;Ft=!1,br=null}else throw Error(h(198));Sr||(Sr=!0,Hl=g)}}function Yn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Zo(e){if(Yn(e)!==e)throw Error(h(188))}function Wu(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Zo(l),e;if(i===r)return Zo(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function qo(e){return e=Wu(e),e!==null?Jo(e):null}function Jo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Jo(e);if(n!==null)return n;e=e.sibling}return null}var ea=_.unstable_scheduleCallback,na=_.unstable_cancelCallback,Vu=_.unstable_shouldYield,$u=_.unstable_requestPaint,ge=_.unstable_now,Qu=_.unstable_getCurrentPriorityLevel,Wl=_.unstable_ImmediatePriority,ta=_.unstable_UserBlockingPriority,Nr=_.unstable_NormalPriority,Ku=_.unstable_LowPriority,ra=_.unstable_IdlePriority,jr=null,mn=null;function Gu(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(jr,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:Zu,Yu=Math.log,Xu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Yu(e)/Xu|0)|0}var Cr=64,zr=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Er(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~l;s!==0?r=Ut(s):(i&=o,i!==0&&(r=Ut(i)))}else o=t&~l,o!==0?r=Ut(o):i!==0&&(r=Ut(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-ln(n),l=1<<t,r|=e[t],n&=~l;return r}function qu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ju(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ln(i),s=1<<o,u=l[o];u===-1?((s&t)===0||(s&r)!==0)&&(l[o]=qu(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function la(){var e=Cr;return Cr<<=1,(Cr&4194240)===0&&(Cr=64),e}function $l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Bt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-ln(n),e[n]=t}function ec(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-ln(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Ql(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-ln(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var ne=0;function ia(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var oa,Kl,aa,sa,ua,Gl=!1,_r=[],_n=null,Pn=null,Ln=null,At=new Map,Ht=new Map,Tn=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":At.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function Wt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=rr(n),n!==null&&Kl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function tc(e,n,t,r,l){switch(n){case"focusin":return _n=Wt(_n,e,n,t,r,l),!0;case"dragenter":return Pn=Wt(Pn,e,n,t,r,l),!0;case"mouseover":return Ln=Wt(Ln,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return At.set(i,Wt(At.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ht.set(i,Wt(Ht.get(i)||null,e,n,t,r,l)),!0}return!1}function da(e){var n=Xn(e.target);if(n!==null){var t=Yn(n);if(t!==null){if(n=t.tag,n===13){if(n=Xo(t),n!==null){e.blockedOn=n,ua(e.priority,function(){aa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Xl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Ml=r,t.target.dispatchEvent(r),Ml=null}else return n=rr(t),n!==null&&Kl(n),e.blockedOn=t,!1;n.shift()}return!0}function fa(e,n,t){Pr(e)&&t.delete(n)}function rc(){Gl=!1,_n!==null&&Pr(_n)&&(_n=null),Pn!==null&&Pr(Pn)&&(Pn=null),Ln!==null&&Pr(Ln)&&(Ln=null),At.forEach(fa),Ht.forEach(fa)}function Vt(e,n){e.blockedOn===n&&(e.blockedOn=null,Gl||(Gl=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,rc)))}function $t(e){function n(l){return Vt(l,e)}if(0<_r.length){Vt(_r[0],e);for(var t=1;t<_r.length;t++){var r=_r[t];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Vt(_n,e),Pn!==null&&Vt(Pn,e),Ln!==null&&Vt(Ln,e),At.forEach(n),Ht.forEach(n),t=0;t<Tn.length;t++)r=Tn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(t=Tn[0],t.blockedOn===null);)da(t),t.blockedOn===null&&Tn.shift()}var dt=B.ReactCurrentBatchConfig,Lr=!0;function lc(e,n,t,r){var l=ne,i=dt.transition;dt.transition=null;try{ne=1,Yl(e,n,t,r)}finally{ne=l,dt.transition=i}}function ic(e,n,t,r){var l=ne,i=dt.transition;dt.transition=null;try{ne=4,Yl(e,n,t,r)}finally{ne=l,dt.transition=i}}function Yl(e,n,t,r){if(Lr){var l=Xl(e,n,t,r);if(l===null)pi(e,n,r,Tr,t),ca(e,r);else if(tc(l,e,n,t,r))r.stopPropagation();else if(ca(e,r),n&4&&-1<nc.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&oa(i),i=Xl(e,n,t,r),i===null&&pi(e,n,r,Tr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else pi(e,n,r,null,t)}}var Tr=null;function Xl(e,n,t,r){if(Tr=null,e=Fl(r),e=Xn(e),e!==null)if(n=Yn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Tr=e,null}function pa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Wl:return 1;case ta:return 4;case Nr:case Ku:return 16;case ra:return 536870912;default:return 16}default:return 16}}var Rn=null,Zl=null,Rr=null;function ma(){if(Rr)return Rr;var e,n=Zl,t=n.length,r,l="value"in Rn?Rn.value:Rn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Dr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function ga(){return!1}function Ve(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:ga,this.isPropagationStopped=ga,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),n}var ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Ve(ft),Qt=z({},ft,{view:0,detail:0}),oc=Ve(Qt),Jl,ei,Kt,Or=z({},Qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kt&&(Kt&&e.type==="mousemove"?(Jl=e.screenX-Kt.screenX,ei=e.screenY-Kt.screenY):ei=Jl=0,Kt=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),ha=Ve(Or),ac=z({},Or,{dataTransfer:0}),sc=Ve(ac),uc=z({},Qt,{relatedTarget:0}),ni=Ve(uc),cc=z({},ft,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=Ve(cc),fc=z({},ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Ve(fc),mc=z({},ft,{data:0}),va=Ve(mc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vc[e])?!!n[e]:!1}function ti(){return yc}var xc=z({},Qt,{key:function(e){if(e.key){var n=gc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kc=Ve(xc),wc=z({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Ve(wc),bc=z({},Qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Sc=Ve(bc),Nc=z({},ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),jc=Ve(Nc),Cc=z({},Or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zc=Ve(Cc),Ec=[9,13,27,32],ri=H&&"CompositionEvent"in window,Gt=null;H&&"documentMode"in document&&(Gt=document.documentMode);var _c=H&&"TextEvent"in window&&!Gt,xa=H&&(!ri||Gt&&8<Gt&&11>=Gt),ka=" ",wa=!1;function ba(e,n){switch(e){case"keyup":return Ec.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pt=!1;function Pc(e,n){switch(e){case"compositionend":return Sa(n);case"keypress":return n.which!==32?null:(wa=!0,ka);case"textInput":return e=n.data,e===ka&&wa?null:e;default:return null}}function Lc(e,n){if(pt)return e==="compositionend"||!ri&&ba(e,n)?(e=ma(),Rr=Zl=Rn=null,pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xa&&n.locale!=="ko"?null:n.data;default:return null}}var Tc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Tc[e.type]:n==="textarea"}function ja(e,n,t,r){$o(r),n=Ar(n,"onChange"),0<n.length&&(t=new ql("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Yt=null,Xt=null;function Rc(e){Wa(e,0)}function Mr(e){var n=yt(e);if(Ro(n))return e}function Dc(e,n){if(e==="change")return n}var Ca=!1;if(H){var li;if(H){var ii="oninput"in document;if(!ii){var za=document.createElement("div");za.setAttribute("oninput","return;"),ii=typeof za.oninput=="function"}li=ii}else li=!1;Ca=li&&(!document.documentMode||9<document.documentMode)}function Ea(){Yt&&(Yt.detachEvent("onpropertychange",_a),Xt=Yt=null)}function _a(e){if(e.propertyName==="value"&&Mr(Xt)){var n=[];ja(n,Xt,e,Fl(e)),Yo(Rc,n)}}function Ic(e,n,t){e==="focusin"?(Ea(),Yt=n,Xt=t,Yt.attachEvent("onpropertychange",_a)):e==="focusout"&&Ea()}function Oc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(Xt)}function Mc(e,n){if(e==="click")return Mr(n)}function Fc(e,n){if(e==="input"||e==="change")return Mr(n)}function Uc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var on=typeof Object.is=="function"?Object.is:Uc;function Zt(e,n){if(on(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!T.call(n,l)||!on(e[l],n[l]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function La(e,n){var t=Pa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pa(t)}}function Ta(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ta(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ra(){for(var e=window,n=kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=kr(e.document)}return n}function oi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bc(e){var n=Ra(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ta(t.ownerDocument.documentElement,t)){if(r!==null&&oi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=La(t,i);var o=La(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ac=H&&"documentMode"in document&&11>=document.documentMode,mt=null,ai=null,qt=null,si=!1;function Da(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;si||mt==null||mt!==kr(r)||(r=mt,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qt&&Zt(qt,r)||(qt=r,r=Ar(ai,"onSelect"),0<r.length&&(n=new ql("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=mt)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var gt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},ui={},Ia={};H&&(Ia=document.createElement("div").style,"AnimationEvent"in window||(delete gt.animationend.animation,delete gt.animationiteration.animation,delete gt.animationstart.animation),"TransitionEvent"in window||delete gt.transitionend.transition);function Ur(e){if(ui[e])return ui[e];if(!gt[e])return e;var n=gt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ia)return ui[e]=n[t];return e}var Oa=Ur("animationend"),Ma=Ur("animationiteration"),Fa=Ur("animationstart"),Ua=Ur("transitionend"),Ba=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,n){Ba.set(e,n),U(n,[e])}for(var ci=0;ci<Aa.length;ci++){var di=Aa[ci],Hc=di.toLowerCase(),Wc=di[0].toUpperCase()+di.slice(1);Dn(Hc,"on"+Wc)}Dn(Oa,"onAnimationEnd"),Dn(Ma,"onAnimationIteration"),Dn(Fa,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Ua,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));function Ha(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hu(r,n,void 0,e),e.currentTarget=null}function Wa(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,g=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;Ha(l,s,g),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,g=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;Ha(l,s,g),i=u}}}if(Sr)throw e=Hl,Sr=!1,Hl=null,e}function oe(e,n){var t=n[xi];t===void 0&&(t=n[xi]=new Set);var r=e+"__bubble";t.has(r)||(Va(n,e,2,!1),t.add(r))}function fi(e,n,t){var r=0;n&&(r|=4),Va(t,e,r,n)}var Br="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Br]){e[Br]=!0,K.forEach(function(t){t!=="selectionchange"&&(Vc.has(t)||fi(t,!1,e),fi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Br]||(n[Br]=!0,fi("selectionchange",!1,n))}}function Va(e,n,t,r){switch(pa(n)){case 1:var l=lc;break;case 4:l=ic;break;default:l=Yl}t=l.bind(null,n,t,e),l=void 0,!Al||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function pi(e,n,t,r,l){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Xn(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Yo(function(){var g=i,x=Fl(t),k=[];e:{var v=Ba.get(e);if(v!==void 0){var N=ql,E=e;switch(e){case"keypress":if(Dr(t)===0)break e;case"keydown":case"keyup":N=kc;break;case"focusin":E="focus",N=ni;break;case"focusout":E="blur",N=ni;break;case"beforeblur":case"afterblur":N=ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=sc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sc;break;case Oa:case Ma:case Fa:N=dc;break;case Ua:N=jc;break;case"scroll":N=oc;break;case"wheel":N=zc;break;case"copy":case"cut":case"paste":N=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ya}var P=(n&4)!==0,he=!P&&e==="scroll",p=P?v!==null?v+"Capture":null:v;P=[];for(var c=g,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ot(c,p),w!=null&&P.push(nr(c,w,m)))),he)break;c=c.return}0<P.length&&(v=new N(v,E,null,t,x),k.push({event:v,listeners:P}))}}if((n&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&t!==Ml&&(E=t.relatedTarget||t.fromElement)&&(Xn(E)||E[kn]))break e;if((N||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,N?(E=t.relatedTarget||t.toElement,N=g,E=E?Xn(E):null,E!==null&&(he=Yn(E),E!==he||E.tag!==5&&E.tag!==6)&&(E=null)):(N=null,E=g),N!==E)){if(P=ha,w="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=ya,w="onPointerLeave",p="onPointerEnter",c="pointer"),he=N==null?v:yt(N),m=E==null?v:yt(E),v=new P(w,c+"leave",N,t,x),v.target=he,v.relatedTarget=m,w=null,Xn(x)===g&&(P=new P(p,c+"enter",E,t,x),P.target=m,P.relatedTarget=he,w=P),he=w,N&&E)n:{for(P=N,p=E,c=0,m=P;m;m=ht(m))c++;for(m=0,w=p;w;w=ht(w))m++;for(;0<c-m;)P=ht(P),c--;for(;0<m-c;)p=ht(p),m--;for(;c--;){if(P===p||p!==null&&P===p.alternate)break n;P=ht(P),p=ht(p)}P=null}else P=null;N!==null&&$a(k,v,N,P,!1),E!==null&&he!==null&&$a(k,he,E,P,!0)}}e:{if(v=g?yt(g):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var L=Dc;else if(Na(v))if(Ca)L=Fc;else{L=Oc;var I=Ic}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(L=Mc);if(L&&(L=L(e,g))){ja(k,L,t,x);break e}I&&I(e,v,g),e==="focusout"&&(I=v._wrapperState)&&I.controlled&&v.type==="number"&&Tl(v,"number",v.value)}switch(I=g?yt(g):window,e){case"focusin":(Na(I)||I.contentEditable==="true")&&(mt=I,ai=g,qt=null);break;case"focusout":qt=ai=mt=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,Da(k,t,x);break;case"selectionchange":if(Ac)break;case"keydown":case"keyup":Da(k,t,x)}var O;if(ri)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else pt?ba(e,t)&&(F="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(F="onCompositionStart");F&&(xa&&t.locale!=="ko"&&(pt||F!=="onCompositionStart"?F==="onCompositionEnd"&&pt&&(O=ma()):(Rn=x,Zl="value"in Rn?Rn.value:Rn.textContent,pt=!0)),I=Ar(g,F),0<I.length&&(F=new va(F,e,null,t,x),k.push({event:F,listeners:I}),O?F.data=O:(O=Sa(t),O!==null&&(F.data=O)))),(O=_c?Pc(e,t):Lc(e,t))&&(g=Ar(g,"onBeforeInput"),0<g.length&&(x=new va("onBeforeInput","beforeinput",null,t,x),k.push({event:x,listeners:g}),x.data=O))}Wa(k,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ar(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Ot(e,t),i!=null&&r.unshift(nr(e,i,l)),i=Ot(e,n),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $a(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var s=t,u=s.alternate,g=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&g!==null&&(s=g,l?(u=Ot(t,i),u!=null&&o.unshift(nr(t,u,s))):l||(u=Ot(t,i),u!=null&&o.push(nr(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var $c=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace($c,`
`).replace(Qc,"")}function Hr(e,n,t){if(n=Qa(n),Qa(e)!==n&&t)throw Error(h(425))}function Wr(){}var mi=null,gi=null;function hi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Kc=typeof clearTimeout=="function"?clearTimeout:void 0,Ka=typeof Promise=="function"?Promise:void 0,Gc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ka<"u"?function(e){return Ka.resolve(null).then(e).catch(Yc)}:vi;function Yc(e){setTimeout(function(){throw e})}function yi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);$t(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ga(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var vt=Math.random().toString(36).slice(2),gn="__reactFiber$"+vt,tr="__reactProps$"+vt,kn="__reactContainer$"+vt,xi="__reactEvents$"+vt,Xc="__reactListeners$"+vt,Zc="__reactHandles$"+vt;function Xn(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kn]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ga(e);e!==null;){if(t=e[gn])return t;e=Ga(e)}return n}e=t,t=e.parentNode}return null}function rr(e){return e=e[gn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Vr(e){return e[tr]||null}var ki=[],xt=-1;function On(e){return{current:e}}function ae(e){0>xt||(e.current=ki[xt],ki[xt]=null,xt--)}function ie(e,n){xt++,ki[xt]=e.current,e.current=n}var Mn={},Ce=On(Mn),Oe=On(!1),Zn=Mn;function kt(e,n){var t=e.type.contextTypes;if(!t)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Me(e){return e=e.childContextTypes,e!=null}function $r(){ae(Oe),ae(Ce)}function Ya(e,n,t){if(Ce.current!==Mn)throw Error(h(168));ie(Ce,n),ie(Oe,t)}function Xa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,le(e)||"Unknown",l));return z({},t,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,Zn=Ce.current,ie(Ce,e),ie(Oe,Oe.current),!0}function Za(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=Xa(e,n,Zn),r.__reactInternalMemoizedMergedChildContext=e,ae(Oe),ae(Ce),ie(Ce,e)):ae(Oe),ie(Oe,t)}var wn=null,Kr=!1,wi=!1;function qa(e){wn===null?wn=[e]:wn.push(e)}function qc(e){Kr=!0,qa(e)}function Fn(){if(!wi&&wn!==null){wi=!0;var e=0,n=ne;try{var t=wn;for(ne=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}wn=null,Kr=!1}catch(l){throw wn!==null&&(wn=wn.slice(e+1)),ea(Wl,Fn),l}finally{ne=n,wi=!1}}return null}var wt=[],bt=0,Gr=null,Yr=0,Ze=[],qe=0,qn=null,bn=1,Sn="";function Jn(e,n){wt[bt++]=Yr,wt[bt++]=Gr,Gr=e,Yr=n}function Ja(e,n,t){Ze[qe++]=bn,Ze[qe++]=Sn,Ze[qe++]=qn,qn=e;var r=bn;e=Sn;var l=32-ln(r)-1;r&=~(1<<l),t+=1;var i=32-ln(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,bn=1<<32-ln(n)+l|t<<l|r,Sn=i+e}else bn=1<<i|t<<l|r,Sn=e}function bi(e){e.return!==null&&(Jn(e,1),Ja(e,1,0))}function Si(e){for(;e===Gr;)Gr=wt[--bt],wt[bt]=null,Yr=wt[--bt],wt[bt]=null;for(;e===qn;)qn=Ze[--qe],Ze[qe]=null,Sn=Ze[--qe],Ze[qe]=null,bn=Ze[--qe],Ze[qe]=null}var $e=null,Qe=null,ue=!1,an=null;function es(e,n){var t=tn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ns(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,Qe=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,Qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=qn!==null?{id:bn,overflow:Sn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=tn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,Qe=null,!0):!1;default:return!1}}function Ni(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ji(e){if(ue){var n=Qe;if(n){var t=n;if(!ns(e,n)){if(Ni(e))throw Error(h(418));n=In(t.nextSibling);var r=$e;n&&ns(e,n)?es(r,t):(e.flags=e.flags&-4097|2,ue=!1,$e=e)}}else{if(Ni(e))throw Error(h(418));e.flags=e.flags&-4097|2,ue=!1,$e=e}}}function ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Xr(e){if(e!==$e)return!1;if(!ue)return ts(e),ue=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hi(e.type,e.memoizedProps)),n&&(n=Qe)){if(Ni(e))throw rs(),Error(h(418));for(;n;)es(e,n),n=In(n.nextSibling)}if(ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Qe=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Qe=null}}else Qe=$e?In(e.stateNode.nextSibling):null;return!0}function rs(){for(var e=Qe;e;)e=In(e.nextSibling)}function St(){Qe=$e=null,ue=!1}function Ci(e){an===null?an=[e]:an.push(e)}var Jc=B.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function Zr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ls(e){var n=e._init;return n(e._payload)}function is(e){function n(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function t(p,c){if(!e)return null;for(;c!==null;)n(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Qn(p,c),p.index=0,p.sibling=null,p}function i(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,w){return c===null||c.tag!==6?(c=yo(m,p.mode,w),c.return=p,c):(c=l(c,m),c.return=p,c)}function u(p,c,m,w){var L=m.type;return L===De?x(p,c,m.props.children,w,m.key):c!==null&&(c.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ie&&ls(L)===c.type)?(w=l(c,m.props),w.ref=lr(p,c,m),w.return=p,w):(w=wl(m.type,m.key,m.props,null,p.mode,w),w.ref=lr(p,c,m),w.return=p,w)}function g(p,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=xo(m,p.mode,w),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function x(p,c,m,w,L){return c===null||c.tag!==7?(c=at(m,p.mode,w,L),c.return=p,c):(c=l(c,m),c.return=p,c)}function k(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=yo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Se:return m=wl(c.type,c.key,c.props,null,p.mode,m),m.ref=lr(p,null,c),m.return=p,m;case Pe:return c=xo(c,p.mode,m),c.return=p,c;case Ie:var w=c._init;return k(p,w(c._payload),m)}if(Rt(c)||M(c))return c=at(c,p.mode,m,null),c.return=p,c;Zr(p,c)}return null}function v(p,c,m,w){var L=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return L!==null?null:s(p,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Se:return m.key===L?u(p,c,m,w):null;case Pe:return m.key===L?g(p,c,m,w):null;case Ie:return L=m._init,v(p,c,L(m._payload),w)}if(Rt(m)||M(m))return L!==null?null:x(p,c,m,w,null);Zr(p,m)}return null}function N(p,c,m,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,s(c,p,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Se:return p=p.get(w.key===null?m:w.key)||null,u(c,p,w,L);case Pe:return p=p.get(w.key===null?m:w.key)||null,g(c,p,w,L);case Ie:var I=w._init;return N(p,c,m,I(w._payload),L)}if(Rt(w)||M(w))return p=p.get(m)||null,x(c,p,w,L,null);Zr(c,w)}return null}function E(p,c,m,w){for(var L=null,I=null,O=c,F=c=0,be=null;O!==null&&F<m.length;F++){O.index>F?(be=O,O=null):be=O.sibling;var Z=v(p,O,m[F],w);if(Z===null){O===null&&(O=be);break}e&&O&&Z.alternate===null&&n(p,O),c=i(Z,c,F),I===null?L=Z:I.sibling=Z,I=Z,O=be}if(F===m.length)return t(p,O),ue&&Jn(p,F),L;if(O===null){for(;F<m.length;F++)O=k(p,m[F],w),O!==null&&(c=i(O,c,F),I===null?L=O:I.sibling=O,I=O);return ue&&Jn(p,F),L}for(O=r(p,O);F<m.length;F++)be=N(O,p,F,m[F],w),be!==null&&(e&&be.alternate!==null&&O.delete(be.key===null?F:be.key),c=i(be,c,F),I===null?L=be:I.sibling=be,I=be);return e&&O.forEach(function(Kn){return n(p,Kn)}),ue&&Jn(p,F),L}function P(p,c,m,w){var L=M(m);if(typeof L!="function")throw Error(h(150));if(m=L.call(m),m==null)throw Error(h(151));for(var I=L=null,O=c,F=c=0,be=null,Z=m.next();O!==null&&!Z.done;F++,Z=m.next()){O.index>F?(be=O,O=null):be=O.sibling;var Kn=v(p,O,Z.value,w);if(Kn===null){O===null&&(O=be);break}e&&O&&Kn.alternate===null&&n(p,O),c=i(Kn,c,F),I===null?L=Kn:I.sibling=Kn,I=Kn,O=be}if(Z.done)return t(p,O),ue&&Jn(p,F),L;if(O===null){for(;!Z.done;F++,Z=m.next())Z=k(p,Z.value,w),Z!==null&&(c=i(Z,c,F),I===null?L=Z:I.sibling=Z,I=Z);return ue&&Jn(p,F),L}for(O=r(p,O);!Z.done;F++,Z=m.next())Z=N(O,p,F,Z.value,w),Z!==null&&(e&&Z.alternate!==null&&O.delete(Z.key===null?F:Z.key),c=i(Z,c,F),I===null?L=Z:I.sibling=Z,I=Z);return e&&O.forEach(function(Td){return n(p,Td)}),ue&&Jn(p,F),L}function he(p,c,m,w){if(typeof m=="object"&&m!==null&&m.type===De&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Se:e:{for(var L=m.key,I=c;I!==null;){if(I.key===L){if(L=m.type,L===De){if(I.tag===7){t(p,I.sibling),c=l(I,m.props.children),c.return=p,p=c;break e}}else if(I.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ie&&ls(L)===I.type){t(p,I.sibling),c=l(I,m.props),c.ref=lr(p,I,m),c.return=p,p=c;break e}t(p,I);break}else n(p,I);I=I.sibling}m.type===De?(c=at(m.props.children,p.mode,w,m.key),c.return=p,p=c):(w=wl(m.type,m.key,m.props,null,p.mode,w),w.ref=lr(p,c,m),w.return=p,p=w)}return o(p);case Pe:e:{for(I=m.key;c!==null;){if(c.key===I)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){t(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{t(p,c);break}else n(p,c);c=c.sibling}c=xo(m,p.mode,w),c.return=p,p=c}return o(p);case Ie:return I=m._init,he(p,c,I(m._payload),w)}if(Rt(m))return E(p,c,m,w);if(M(m))return P(p,c,m,w);Zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(t(p,c.sibling),c=l(c,m),c.return=p,p=c):(t(p,c),c=yo(m,p.mode,w),c.return=p,p=c),o(p)):t(p,c)}return he}var Nt=is(!0),os=is(!1),qr=On(null),Jr=null,jt=null,zi=null;function Ei(){zi=jt=Jr=null}function _i(e){var n=qr.current;ae(qr),e._currentValue=n}function Pi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ct(e,n){Jr=e,zi=jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Fe=!0),e.firstContext=null)}function Je(e){var n=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:n,next:null},jt===null){if(Jr===null)throw Error(h(308));jt=e,Jr.dependencies={lanes:0,firstContext:e}}else jt=jt.next=e;return n}var et=null;function Li(e){et===null?et=[e]:et.push(e)}function as(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Li(n)):(t.next=l.next,l.next=t),n.interleaved=t,Nn(e,r)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Un=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ss(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Nn(e,t)}return l=r.interleaved,l===null?(n.next=n,Li(r)):(n.next=l.next,l.next=n),r.interleaved=n,Nn(e,t)}function el(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ql(e,t)}}function us(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function nl(e,n,t,r){var l=e.updateQueue;Un=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,g=u.next;u.next=null,o===null?i=g:o.next=g,o=u;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==o&&(s===null?x.firstBaseUpdate=g:s.next=g,x.lastBaseUpdate=u))}if(i!==null){var k=l.baseState;o=0,x=g=u=null,s=i;do{var v=s.lane,N=s.eventTime;if((r&v)===v){x!==null&&(x=x.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,P=s;switch(v=n,N=t,P.tag){case 1:if(E=P.payload,typeof E=="function"){k=E.call(N,k,v);break e}k=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=P.payload,v=typeof E=="function"?E.call(N,k,v):E,v==null)break e;k=z({},k,v);break e;case 2:Un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else N={eventTime:N,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(g=x=N,u=k):x=x.next=N,o|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(x===null&&(u=k),l.baseState=u,l.firstBaseUpdate=g,l.lastBaseUpdate=x,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);rt|=o,e.lanes=o,e.memoizedState=k}}function cs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var ir={},hn=On(ir),or=On(ir),ar=On(ir);function nt(e){if(e===ir)throw Error(h(174));return e}function Ri(e,n){switch(ie(ar,n),ie(or,e),ie(hn,ir),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Dl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Dl(n,e)}ae(hn),ie(hn,n)}function zt(){ae(hn),ae(or),ae(ar)}function ds(e){nt(ar.current);var n=nt(hn.current),t=Dl(n,e.type);n!==t&&(ie(or,e),ie(hn,t))}function Di(e){or.current===e&&(ae(hn),ae(or))}var de=On(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=[];function Oi(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var rl=B.ReactCurrentDispatcher,Mi=B.ReactCurrentBatchConfig,tt=0,fe=null,ye=null,ke=null,ll=!1,sr=!1,ur=0,ed=0;function ze(){throw Error(h(321))}function Fi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!on(e[t],n[t]))return!1;return!0}function Ui(e,n,t,r,l,i){if(tt=i,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rl.current=e===null||e.memoizedState===null?ld:id,e=t(r,l),sr){i=0;do{if(sr=!1,ur=0,25<=i)throw Error(h(301));i+=1,ke=ye=null,n.updateQueue=null,rl.current=od,e=t(r,l)}while(sr)}if(rl.current=al,n=ye!==null&&ye.next!==null,tt=0,ke=ye=fe=null,ll=!1,n)throw Error(h(300));return e}function Bi(){var e=ur!==0;return ur=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=e:ke=ke.next=e,ke}function en(){if(ye===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var n=ke===null?fe.memoizedState:ke.next;if(n!==null)ke=n,ye=e;else{if(e===null)throw Error(h(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},ke===null?fe.memoizedState=ke=e:ke=ke.next=e}return ke}function cr(e,n){return typeof n=="function"?n(e):n}function Ai(e){var n=en(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=ye,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,g=i;do{var x=g.lane;if((tt&x)===x)u!==null&&(u=u.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var k={lane:x,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};u===null?(s=u=k,o=r):u=u.next=k,fe.lanes|=x,rt|=x}g=g.next}while(g!==null&&g!==i);u===null?o=r:u.next=s,on(r,n.memoizedState)||(Fe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,fe.lanes|=i,rt|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hi(e){var n=en(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);on(i,n.memoizedState)||(Fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function fs(){}function ps(e,n){var t=fe,r=en(),l=n(),i=!on(r.memoizedState,l);if(i&&(r.memoizedState=l,Fe=!0),r=r.queue,Wi(hs.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ke!==null&&ke.memoizedState.tag&1){if(t.flags|=2048,dr(9,gs.bind(null,t,r,l,n),void 0,null),we===null)throw Error(h(349));(tt&30)!==0||ms(t,n,l)}return l}function ms(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function gs(e,n,t,r){n.value=t,n.getSnapshot=r,vs(n)&&ys(e)}function hs(e,n,t){return t(function(){vs(n)&&ys(e)})}function vs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!on(e,t)}catch{return!0}}function ys(e){var n=Nn(e,1);n!==null&&dn(n,e,1,-1)}function xs(e){var n=vn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},n.queue=e,e=e.dispatch=rd.bind(null,fe,e),[n.memoizedState,e]}function dr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=fe.updateQueue,n===null?(n={lastEffect:null,stores:null},fe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ks(){return en().memoizedState}function il(e,n,t,r){var l=vn();fe.flags|=e,l.memoizedState=dr(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=en();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&Fi(r,o.deps)){l.memoizedState=dr(n,t,i,r);return}}fe.flags|=e,l.memoizedState=dr(1|n,t,i,r)}function ws(e,n){return il(8390656,8,e,n)}function Wi(e,n){return ol(2048,8,e,n)}function bs(e,n){return ol(4,2,e,n)}function Ss(e,n){return ol(4,4,e,n)}function Ns(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function js(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,Ns.bind(null,n,e),t)}function Vi(){}function Cs(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function zs(e,n){var t=en();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Es(e,n,t){return(tt&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=t):(on(t,n)||(t=la(),fe.lanes|=t,rt|=t,e.baseState=!0),n)}function nd(e,n){var t=ne;ne=t!==0&&4>t?t:4,e(!0);var r=Mi.transition;Mi.transition={};try{e(!1),n()}finally{ne=t,Mi.transition=r}}function _s(){return en().memoizedState}function td(e,n,t){var r=Vn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ps(e))Ls(n,t);else if(t=as(e,n,t,r),t!==null){var l=Te();dn(t,e,r,l),Ts(t,n,r)}}function rd(e,n,t){var r=Vn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Ls(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,s=i(o,t);if(l.hasEagerState=!0,l.eagerState=s,on(s,o)){var u=n.interleaved;u===null?(l.next=l,Li(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=as(e,n,l,r),t!==null&&(l=Te(),dn(t,e,r,l),Ts(t,n,r))}}function Ps(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Ls(e,n){sr=ll=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ts(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ql(e,t)}}var al={readContext:Je,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},ld={readContext:Je,useCallback:function(e,n){return vn().memoizedState=[e,n===void 0?null:n],e},useContext:Je,useEffect:ws,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,il(4194308,4,Ns.bind(null,n,e),t)},useLayoutEffect:function(e,n){return il(4194308,4,e,n)},useInsertionEffect:function(e,n){return il(4,2,e,n)},useMemo:function(e,n){var t=vn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=vn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=td.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=vn();return e={current:e},n.memoizedState=e},useState:xs,useDebugValue:Vi,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=xs(!1),n=e[0];return e=nd.bind(null,e[1]),vn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=fe,l=vn();if(ue){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),we===null)throw Error(h(349));(tt&30)!==0||ms(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ws(hs.bind(null,r,i,e),[e]),r.flags|=2048,dr(9,gs.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=vn(),n=we.identifierPrefix;if(ue){var t=Sn,r=bn;t=(r&~(1<<32-ln(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ur++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ed++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},id={readContext:Je,useCallback:Cs,useContext:Je,useEffect:Wi,useImperativeHandle:js,useInsertionEffect:bs,useLayoutEffect:Ss,useMemo:zs,useReducer:Ai,useRef:ks,useState:function(){return Ai(cr)},useDebugValue:Vi,useDeferredValue:function(e){var n=en();return Es(n,ye.memoizedState,e)},useTransition:function(){var e=Ai(cr)[0],n=en().memoizedState;return[e,n]},useMutableSource:fs,useSyncExternalStore:ps,useId:_s,unstable_isNewReconciler:!1},od={readContext:Je,useCallback:Cs,useContext:Je,useEffect:Wi,useImperativeHandle:js,useInsertionEffect:bs,useLayoutEffect:Ss,useMemo:zs,useReducer:Hi,useRef:ks,useState:function(){return Hi(cr)},useDebugValue:Vi,useDeferredValue:function(e){var n=en();return ye===null?n.memoizedState=e:Es(n,ye.memoizedState,e)},useTransition:function(){var e=Hi(cr)[0],n=en().memoizedState;return[e,n]},useMutableSource:fs,useSyncExternalStore:ps,useId:_s,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $i(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sl={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Te(),l=Vn(e),i=jn(r,l);i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,l),n!==null&&(dn(n,e,l,r),el(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Te(),l=Vn(e),i=jn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,l),n!==null&&(dn(n,e,l,r),el(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Te(),r=Vn(e),l=jn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Bn(e,l,r),n!==null&&(dn(n,e,r,t),el(n,e,r))}};function Rs(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Zt(t,r)||!Zt(l,i):!0}function Ds(e,n,t){var r=!1,l=Mn,i=n.contextType;return typeof i=="object"&&i!==null?i=Je(i):(l=Me(n)?Zn:Ce.current,r=n.contextTypes,i=(r=r!=null)?kt(e,l):Mn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=sl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Is(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&sl.enqueueReplaceState(n,n.state,null)}function Qi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Ti(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Je(i):(i=Me(n)?Zn:Ce.current,l.context=kt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&($i(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&sl.enqueueReplaceState(l,l.state,null),nl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Et(e,n){try{var t="",r=n;do t+=Y(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Ki(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Gi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Os(e,n,t){t=jn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){gl||(gl=!0,uo=r),Gi(e,n)},t}function Ms(e,n,t){t=jn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Gi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Gi(e,n),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fs(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ad;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=wd.bind(null,e,n,t),n.then(e,e))}function Us(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bs(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=jn(-1,1),n.tag=2,Bn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var sd=B.ReactCurrentOwner,Fe=!1;function Le(e,n,t,r){n.child=e===null?os(n,null,t,r):Nt(n,e.child,t,r)}function As(e,n,t,r,l){t=t.render;var i=n.ref;return Ct(n,l),r=Ui(e,n,t,r,i,l),t=Bi(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(ue&&t&&bi(n),n.flags|=1,Le(e,n,r,l),n.child)}function Hs(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!vo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Ws(e,n,i,r,l)):(e=wl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Zt,t(o,r)&&e.ref===n.ref)return Cn(e,n,l)}return n.flags|=1,e=Qn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Ws(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Zt(i,r)&&e.ref===n.ref)if(Fe=!1,n.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Fe=!0);else return n.lanes=e.lanes,Cn(e,n,l)}return Yi(e,n,t,r,l)}function Vs(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Pt,Ke),Ke|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(Pt,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ie(Pt,Ke),Ke|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ie(Pt,Ke),Ke|=r;return Le(e,n,l,t),n.child}function $s(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Yi(e,n,t,r,l){var i=Me(t)?Zn:Ce.current;return i=kt(n,i),Ct(n,l),t=Ui(e,n,t,r,i,l),r=Bi(),e!==null&&!Fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Cn(e,n,l)):(ue&&r&&bi(n),n.flags|=1,Le(e,n,t,l),n.child)}function Qs(e,n,t,r,l){if(Me(t)){var i=!0;Qr(n)}else i=!1;if(Ct(n,l),n.stateNode===null)cl(e,n),Ds(n,t,r),Qi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,g=t.contextType;typeof g=="object"&&g!==null?g=Je(g):(g=Me(t)?Zn:Ce.current,g=kt(n,g));var x=t.getDerivedStateFromProps,k=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==g)&&Is(n,o,r,g),Un=!1;var v=n.memoizedState;o.state=v,nl(n,r,o,l),u=n.memoizedState,s!==r||v!==u||Oe.current||Un?(typeof x=="function"&&($i(n,t,x,r),u=n.memoizedState),(s=Un||Rs(n,t,s,r,v,u,g))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=g,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ss(e,n),s=n.memoizedProps,g=n.type===n.elementType?s:sn(n.type,s),o.props=g,k=n.pendingProps,v=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Je(u):(u=Me(t)?Zn:Ce.current,u=kt(n,u));var N=t.getDerivedStateFromProps;(x=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==k||v!==u)&&Is(n,o,r,u),Un=!1,v=n.memoizedState,o.state=v,nl(n,r,o,l);var E=n.memoizedState;s!==k||v!==E||Oe.current||Un?(typeof N=="function"&&($i(n,t,N,r),E=n.memoizedState),(g=Un||Rs(n,t,g,r,v,E,u)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),o.props=r,o.state=E,o.context=u,r=g):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(n.flags|=1024),r=!1)}return Xi(e,n,t,r,i,l)}function Xi(e,n,t,r,l,i){$s(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Za(n,t,!1),Cn(e,n,i);r=n.stateNode,sd.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Nt(n,e.child,null,i),n.child=Nt(n,null,s,i)):Le(e,n,s,i),n.memoizedState=r.state,l&&Za(n,t,!0),n.child}function Ks(e){var n=e.stateNode;n.pendingContext?Ya(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ya(e,n.context,!1),Ri(e,n.containerInfo)}function Gs(e,n,t,r,l){return St(),Ci(l),n.flags|=256,Le(e,n,t,r),n.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function qi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ys(e,n,t){var r=n.pendingProps,l=de.current,i=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ie(de,l&1),e===null)return ji(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=bl(o,r,0,null),e=at(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=qi(t),n.memoizedState=Zi,e):Ji(n,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return ud(e,n,o,r,s,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=Qn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Qn(s,i):(i=at(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?qi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Zi,r}return i=e.child,e=i.sibling,r=Qn(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ji(e,n){return n=bl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ul(e,n,t,r){return r!==null&&Ci(r),Nt(n,e.child,null,t),e=Ji(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ud(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Ki(Error(h(422))),ul(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=bl({mode:"visible",children:r.children},l,0,null),i=at(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Nt(n,e.child,null,o),n.child.memoizedState=qi(o),n.memoizedState=Zi,i);if((n.mode&1)===0)return ul(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(h(419)),r=Ki(i,r,void 0),ul(e,n,o,r)}if(s=(o&e.childLanes)!==0,Fe||s){if(r=we,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Nn(e,l),dn(r,e,l,-1))}return ho(),r=Ki(Error(h(421))),ul(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=bd.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,Qe=In(l.nextSibling),$e=n,ue=!0,an=null,e!==null&&(Ze[qe++]=bn,Ze[qe++]=Sn,Ze[qe++]=qn,bn=e.id,Sn=e.overflow,qn=n),n=Ji(n,r.children),n.flags|=4096,n)}function Xs(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pi(e.return,n,t)}function eo(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Zs(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(Le(e,n,r.children,t),r=de.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xs(e,t,n);else if(e.tag===19)Xs(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&tl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),eo(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}eo(n,!0,t,null,i);break;case"together":eo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function cl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Cn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=Qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cd(e,n,t){switch(n.tag){case 3:Ks(n),St();break;case 5:ds(n);break;case 1:Me(n.type)&&Qr(n);break;case 4:Ri(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;ie(qr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Ys(e,n,t):(ie(de,de.current&1),e=Cn(e,n,t),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Zs(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return n.lanes=0,Vs(e,n,t)}return Cn(e,n,t)}var qs,no,Js,eu;qs=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},no=function(){},Js=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,nt(hn.current);var i=null;switch(t){case"input":l=Pl(e,l),r=Pl(e,r),i=[];break;case"select":l=z({},l,{value:void 0}),r=z({},r,{value:void 0}),i=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}Il(t,r);var o;t=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var s=l[g];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(C.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var u=r[g];if(s=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&u!==s&&(u!=null||s!=null))if(g==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(g,t)),t=u;else g==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(g,u)):g==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(g,""+u):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(C.hasOwnProperty(g)?(u!=null&&g==="onScroll"&&oe("scroll",e),i||s===u||(i=[])):(i=i||[]).push(g,u))}t&&(i=i||[]).push("style",t);var g=i;(n.updateQueue=g)&&(n.flags|=4)}},eu=function(e,n,t,r){t!==r&&(n.flags|=4)};function fr(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function dd(e,n,t){var r=n.pendingProps;switch(Si(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Me(n.type)&&$r(),Ee(n),null;case 3:return r=n.stateNode,zt(),ae(Oe),ae(Ce),Oi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,an!==null&&(po(an),an=null))),no(e,n),Ee(n),null;case 5:Di(n);var l=nt(ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Js(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return Ee(n),null}if(e=nt(hn.current),Xr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[gn]=n,r[tr]=i,e=(n.mode&1)!==0,t){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(l=0;l<Jt.length;l++)oe(Jt[l],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Do(r,i),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},oe("invalid",r);break;case"textarea":Mo(r,i),oe("invalid",r)}Il(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),l=["children",""+s]):C.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&oe("scroll",r)}switch(t){case"input":xr(r),Oo(r,i,!0);break;case"textarea":xr(r),Uo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Wr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[gn]=n,e[tr]=r,qs(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ol(t,r),t){case"dialog":oe("cancel",e),oe("close",e),l=r;break;case"iframe":case"object":case"embed":oe("load",e),l=r;break;case"video":case"audio":for(l=0;l<Jt.length;l++)oe(Jt[l],e);l=r;break;case"source":oe("error",e),l=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),l=r;break;case"details":oe("toggle",e),l=r;break;case"input":Do(e,r),l=Pl(e,r),oe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=z({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Mo(e,r),l=Rl(e,r),oe("invalid",e);break;default:l=r}Il(t,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Wo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ao(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Dt(e,u):typeof u=="number"&&Dt(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(C.hasOwnProperty(i)?u!=null&&i==="onScroll"&&oe("scroll",e):u!=null&&Re(e,i,u,o))}switch(t){case"input":xr(e),Oo(e,r,!1);break;case"textarea":xr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?st(e,!!r.multiple,i,!1):r.defaultValue!=null&&st(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ee(n),null;case 6:if(e&&n.stateNode!=null)eu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=nt(ar.current),nt(hn.current),Xr(n)){if(r=n.stateNode,t=n.memoizedProps,r[gn]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[gn]=n,n.stateNode=r}return Ee(n),null;case 13:if(ae(de),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Qe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)rs(),St(),n.flags|=98560,i=!1;else if(i=Xr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[gn]=n}else St(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),i=!1}else an!==null&&(po(an),an=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(de.current&1)!==0?xe===0&&(xe=3):ho())),n.updateQueue!==null&&(n.flags|=4),Ee(n),null);case 4:return zt(),no(e,n),e===null&&er(n.stateNode.containerInfo),Ee(n),null;case 10:return _i(n.type._context),Ee(n),null;case 17:return Me(n.type)&&$r(),Ee(n),null;case 19:if(ae(de),i=n.memoizedState,i===null)return Ee(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)fr(i,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=tl(e),o!==null){for(n.flags|=128,fr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(de,de.current&1|2),n.child}e=e.sibling}i.tail!==null&&ge()>Lt&&(n.flags|=128,r=!0,fr(i,!1),n.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ue)return Ee(n),null}else 2*ge()-i.renderingStartTime>Lt&&t!==1073741824&&(n.flags|=128,r=!0,fr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ge(),n.sibling=null,t=de.current,ie(de,r?t&1|2:t&1),n):(Ee(n),null);case 22:case 23:return go(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ke&1073741824)!==0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function fd(e,n){switch(Si(n),n.tag){case 1:return Me(n.type)&&$r(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zt(),ae(Oe),ae(Ce),Oi(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Di(n),null;case 13:if(ae(de),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(de),null;case 4:return zt(),null;case 10:return _i(n.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var dl=!1,_e=!1,pd=typeof WeakSet=="function"?WeakSet:Set,j=null;function _t(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){me(e,n,r)}else t.current=null}function to(e,n,t){try{t()}catch(r){me(e,n,r)}}var nu=!1;function md(e,n){if(mi=Lr,e=Ra(),oi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,g=0,x=0,k=e,v=null;n:for(;;){for(var N;k!==t||l!==0&&k.nodeType!==3||(s=o+l),k!==i||r!==0&&k.nodeType!==3||(u=o+r),k.nodeType===3&&(o+=k.nodeValue.length),(N=k.firstChild)!==null;)v=k,k=N;for(;;){if(k===e)break n;if(v===t&&++g===l&&(s=o),v===i&&++x===r&&(u=o),(N=k.nextSibling)!==null)break;k=v,v=k.parentNode}k=N}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(gi={focusedElem:e,selectionRange:t},Lr=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var E=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var P=E.memoizedProps,he=E.memoizedState,p=n.stateNode,c=p.getSnapshotBeforeUpdate(n.elementType===n.type?P:sn(n.type,P),he);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){me(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return E=nu,nu=!1,E}function pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&to(n,t,i)}l=l.next}while(l!==r)}}function fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ro(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function tu(e){var n=e.alternate;n!==null&&(e.alternate=null,tu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[tr],delete n[xi],delete n[Xc],delete n[Zc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ru(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(lo(e,n,t),e=e.sibling;e!==null;)lo(e,n,t),e=e.sibling}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}var Ne=null,un=!1;function An(e,n,t){for(t=t.child;t!==null;)iu(e,n,t),t=t.sibling}function iu(e,n,t){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(jr,t)}catch{}switch(t.tag){case 5:_e||_t(t,n);case 6:var r=Ne,l=un;Ne=null,An(e,n,t),Ne=r,un=l,Ne!==null&&(un?(e=Ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(un?(e=Ne,t=t.stateNode,e.nodeType===8?yi(e.parentNode,t):e.nodeType===1&&yi(e,t),$t(e)):yi(Ne,t.stateNode));break;case 4:r=Ne,l=un,Ne=t.stateNode.containerInfo,un=!0,An(e,n,t),Ne=r,un=l;break;case 0:case 11:case 14:case 15:if(!_e&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&to(t,n,o),l=l.next}while(l!==r)}An(e,n,t);break;case 1:if(!_e&&(_t(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){me(t,n,s)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(_e=(r=_e)||t.memoizedState!==null,An(e,n,t),_e=r):An(e,n,t);break;default:An(e,n,t)}}function ou(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new pd),n.forEach(function(r){var l=Sd.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function cn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ne=s.stateNode,un=!1;break e;case 3:Ne=s.stateNode.containerInfo,un=!0;break e;case 4:Ne=s.stateNode.containerInfo,un=!0;break e}s=s.return}if(Ne===null)throw Error(h(160));iu(i,o,l),Ne=null,un=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(g){me(l,n,g)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)au(n,e),n=n.sibling}function au(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(n,e),yn(e),r&4){try{pr(3,e,e.return),fl(3,e)}catch(P){me(e,e.return,P)}try{pr(5,e,e.return)}catch(P){me(e,e.return,P)}}break;case 1:cn(n,e),yn(e),r&512&&t!==null&&_t(t,t.return);break;case 5:if(cn(n,e),yn(e),r&512&&t!==null&&_t(t,t.return),e.flags&32){var l=e.stateNode;try{Dt(l,"")}catch(P){me(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Io(l,i),Ol(s,o);var g=Ol(s,i);for(o=0;o<u.length;o+=2){var x=u[o],k=u[o+1];x==="style"?Wo(l,k):x==="dangerouslySetInnerHTML"?Ao(l,k):x==="children"?Dt(l,k):Re(l,x,k,g)}switch(s){case"input":Ll(l,i);break;case"textarea":Fo(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?st(l,!!i.multiple,N,!1):v!==!!i.multiple&&(i.defaultValue!=null?st(l,!!i.multiple,i.defaultValue,!0):st(l,!!i.multiple,i.multiple?[]:"",!1))}l[tr]=i}catch(P){me(e,e.return,P)}}break;case 6:if(cn(n,e),yn(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(P){me(e,e.return,P)}}break;case 3:if(cn(n,e),yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(P){me(e,e.return,P)}break;case 4:cn(n,e),yn(e);break;case 13:cn(n,e),yn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(so=ge())),r&4&&ou(e);break;case 22:if(x=t!==null&&t.memoizedState!==null,e.mode&1?(_e=(g=_e)||x,cn(n,e),_e=g):cn(n,e),yn(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!x&&(e.mode&1)!==0)for(j=e,x=e.child;x!==null;){for(k=j=x;j!==null;){switch(v=j,N=v.child,v.tag){case 0:case 11:case 14:case 15:pr(4,v,v.return);break;case 1:_t(v,v.return);var E=v.stateNode;if(typeof E.componentWillUnmount=="function"){r=v,t=v.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(P){me(r,t,P)}}break;case 5:_t(v,v.return);break;case 22:if(v.memoizedState!==null){cu(k);continue}}N!==null?(N.return=v,j=N):cu(k)}x=x.sibling}e:for(x=null,k=e;;){if(k.tag===5){if(x===null){x=k;try{l=k.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=k.stateNode,u=k.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ho("display",o))}catch(P){me(e,e.return,P)}}}else if(k.tag===6){if(x===null)try{k.stateNode.nodeValue=g?"":k.memoizedProps}catch(P){me(e,e.return,P)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;x===k&&(x=null),k=k.return}x===k&&(x=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:cn(n,e),yn(e),r&4&&ou(e);break;case 21:break;default:cn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ru(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dt(l,""),r.flags&=-33);var i=lu(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=lu(e);lo(e,s,o);break;default:throw Error(h(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gd(e,n,t){j=e,su(e)}function su(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||dl;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||_e;s=dl;var g=_e;if(dl=o,(_e=u)&&!g)for(j=l;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?du(l):u!==null?(u.return=o,j=u):du(l);for(;i!==null;)j=i,su(i),i=i.sibling;j=l,dl=s,_e=g}uu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,j=i):uu(e)}}function uu(e){for(;j!==null;){var n=j;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:_e||fl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!_e)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&cs(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}cs(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var g=n.alternate;if(g!==null){var x=g.memoizedState;if(x!==null){var k=x.dehydrated;k!==null&&$t(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}_e||n.flags&512&&ro(n)}catch(v){me(n,n.return,v)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function cu(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function du(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fl(4,n)}catch(u){me(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){me(n,l,u)}}var i=n.return;try{ro(n)}catch(u){me(n,i,u)}break;case 5:var o=n.return;try{ro(n)}catch(u){me(n,o,u)}}}catch(u){me(n,n.return,u)}if(n===e){j=null;break}var s=n.sibling;if(s!==null){s.return=n.return,j=s;break}j=n.return}}var hd=Math.ceil,pl=B.ReactCurrentDispatcher,oo=B.ReactCurrentOwner,nn=B.ReactCurrentBatchConfig,G=0,we=null,ve=null,je=0,Ke=0,Pt=On(0),xe=0,mr=null,rt=0,ml=0,ao=0,gr=null,Ue=null,so=0,Lt=1/0,zn=null,gl=!1,uo=null,Hn=null,hl=!1,Wn=null,vl=0,hr=0,co=null,yl=-1,xl=0;function Te(){return(G&6)!==0?ge():yl!==-1?yl:yl=ge()}function Vn(e){return(e.mode&1)===0?1:(G&2)!==0&&je!==0?je&-je:Jc.transition!==null?(xl===0&&(xl=la()),xl):(e=ne,e!==0||(e=window.event,e=e===void 0?16:pa(e.type)),e)}function dn(e,n,t,r){if(50<hr)throw hr=0,co=null,Error(h(185));Bt(e,t,r),((G&2)===0||e!==we)&&(e===we&&((G&2)===0&&(ml|=t),xe===4&&$n(e,je)),Be(e,r),t===1&&G===0&&(n.mode&1)===0&&(Lt=ge()+500,Kr&&Fn()))}function Be(e,n){var t=e.callbackNode;Ju(e,n);var r=Er(e,e===we?je:0);if(r===0)t!==null&&na(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&na(t),n===1)e.tag===0?qc(pu.bind(null,e)):qa(pu.bind(null,e)),Gc(function(){(G&6)===0&&Fn()}),t=null;else{switch(ia(r)){case 1:t=Wl;break;case 4:t=ta;break;case 16:t=Nr;break;case 536870912:t=ra;break;default:t=Nr}t=wu(t,fu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function fu(e,n){if(yl=-1,xl=0,(G&6)!==0)throw Error(h(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var r=Er(e,e===we?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=kl(e,r);else{n=r;var l=G;G|=2;var i=gu();(we!==e||je!==n)&&(zn=null,Lt=ge()+500,it(e,n));do try{xd();break}catch(s){mu(e,s)}while(!0);Ei(),pl.current=i,G=l,ve!==null?n=0:(we=null,je=0,n=xe)}if(n!==0){if(n===2&&(l=Vl(e),l!==0&&(r=l,n=fo(e,l))),n===1)throw t=mr,it(e,0),$n(e,r),Be(e,ge()),t;if(n===6)$n(e,r);else{if(l=e.current.alternate,(r&30)===0&&!vd(l)&&(n=kl(e,r),n===2&&(i=Vl(e),i!==0&&(r=i,n=fo(e,i))),n===1))throw t=mr,it(e,0),$n(e,r),Be(e,ge()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:ot(e,Ue,zn);break;case 3:if($n(e,r),(r&130023424)===r&&(n=so+500-ge(),10<n)){if(Er(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(ot.bind(null,e,Ue,zn),n);break}ot(e,Ue,zn);break;case 4:if($n(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-ln(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hd(r/1960))-r,10<r){e.timeoutHandle=vi(ot.bind(null,e,Ue,zn),r);break}ot(e,Ue,zn);break;case 5:ot(e,Ue,zn);break;default:throw Error(h(329))}}}return Be(e,ge()),e.callbackNode===t?fu.bind(null,e):null}function fo(e,n){var t=gr;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=kl(e,n),e!==2&&(n=Ue,Ue=t,n!==null&&po(n)),e}function po(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function vd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!on(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $n(e,n){for(n&=~ao,n&=~ml,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-ln(n),r=1<<t;e[t]=-1,n&=~r}}function pu(e){if((G&6)!==0)throw Error(h(327));Tt();var n=Er(e,0);if((n&1)===0)return Be(e,ge()),null;var t=kl(e,n);if(e.tag!==0&&t===2){var r=Vl(e);r!==0&&(n=r,t=fo(e,r))}if(t===1)throw t=mr,it(e,0),$n(e,n),Be(e,ge()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ot(e,Ue,zn),Be(e,ge()),null}function mo(e,n){var t=G;G|=1;try{return e(n)}finally{G=t,G===0&&(Lt=ge()+500,Kr&&Fn())}}function lt(e){Wn!==null&&Wn.tag===0&&(G&6)===0&&Tt();var n=G;G|=1;var t=nn.transition,r=ne;try{if(nn.transition=null,ne=1,e)return e()}finally{ne=r,nn.transition=t,G=n,(G&6)===0&&Fn()}}function go(){Ke=Pt.current,ae(Pt)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kc(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(Si(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:zt(),ae(Oe),ae(Ce),Oi();break;case 5:Di(r);break;case 4:zt();break;case 13:ae(de);break;case 19:ae(de);break;case 10:_i(r.type._context);break;case 22:case 23:go()}t=t.return}if(we=e,ve=e=Qn(e.current,null),je=Ke=n,xe=0,mr=null,ao=ml=rt=0,Ue=gr=null,et!==null){for(n=0;n<et.length;n++)if(t=et[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}et=null}return e}function mu(e,n){do{var t=ve;try{if(Ei(),rl.current=al,ll){for(var r=fe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(tt=0,ke=ye=fe=null,sr=!1,ur=0,oo.current=null,t===null||t.return===null){xe=1,mr=n,ve=null;break}e:{var i=e,o=t.return,s=t,u=n;if(n=je,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var g=u,x=s,k=x.tag;if((x.mode&1)===0&&(k===0||k===11||k===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var N=Us(o);if(N!==null){N.flags&=-257,Bs(N,o,s,i,n),N.mode&1&&Fs(i,g,n),n=N,u=g;var E=n.updateQueue;if(E===null){var P=new Set;P.add(u),n.updateQueue=P}else E.add(u);break e}else{if((n&1)===0){Fs(i,g,n),ho();break e}u=Error(h(426))}}else if(ue&&s.mode&1){var he=Us(o);if(he!==null){(he.flags&65536)===0&&(he.flags|=256),Bs(he,o,s,i,n),Ci(Et(u,s));break e}}i=u=Et(u,s),xe!==4&&(xe=2),gr===null?gr=[i]:gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Os(i,u,n);us(i,p);break e;case 1:s=u;var c=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var w=Ms(i,s,n);us(i,w);break e}}i=i.return}while(i!==null)}vu(t)}catch(L){n=L,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function gu(){var e=pl.current;return pl.current=al,e===null?al:e}function ho(){(xe===0||xe===3||xe===2)&&(xe=4),we===null||(rt&268435455)===0&&(ml&268435455)===0||$n(we,je)}function kl(e,n){var t=G;G|=2;var r=gu();(we!==e||je!==n)&&(zn=null,it(e,n));do try{yd();break}catch(l){mu(e,l)}while(!0);if(Ei(),G=t,pl.current=r,ve!==null)throw Error(h(261));return we=null,je=0,xe}function yd(){for(;ve!==null;)hu(ve)}function xd(){for(;ve!==null&&!Vu();)hu(ve)}function hu(e){var n=ku(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?vu(e):ve=n,oo.current=null}function vu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=dd(t,n,Ke),t!==null){ve=t;return}}else{if(t=fd(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);xe===0&&(xe=5)}function ot(e,n,t){var r=ne,l=nn.transition;try{nn.transition=null,ne=1,kd(e,n,t,r)}finally{nn.transition=l,ne=r}return null}function kd(e,n,t,r){do Tt();while(Wn!==null);if((G&6)!==0)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ec(e,i),e===we&&(ve=we=null,je=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||hl||(hl=!0,wu(Nr,function(){return Tt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=nn.transition,nn.transition=null;var o=ne;ne=1;var s=G;G|=4,oo.current=null,md(e,t),au(t,e),Bc(gi),Lr=!!mi,gi=mi=null,e.current=t,gd(t),$u(),G=s,ne=o,nn.transition=i}else e.current=t;if(hl&&(hl=!1,Wn=e,vl=l),i=e.pendingLanes,i===0&&(Hn=null),Gu(t.stateNode),Be(e,ge()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=uo,uo=null,e;return(vl&1)!==0&&e.tag!==0&&Tt(),i=e.pendingLanes,(i&1)!==0?e===co?hr++:(hr=0,co=e):hr=0,Fn(),null}function Tt(){if(Wn!==null){var e=ia(vl),n=nn.transition,t=ne;try{if(nn.transition=null,ne=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,vl=0,(G&6)!==0)throw Error(h(331));var l=G;for(G|=4,j=e.current;j!==null;){var i=j,o=i.child;if((j.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var g=s[u];for(j=g;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:pr(8,x,i)}var k=x.child;if(k!==null)k.return=x,j=k;else for(;j!==null;){x=j;var v=x.sibling,N=x.return;if(tu(x),x===g){j=null;break}if(v!==null){v.return=N,j=v;break}j=N}}}var E=i.alternate;if(E!==null){var P=E.child;if(P!==null){E.child=null;do{var he=P.sibling;P.sibling=null,P=he}while(P!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,j=p;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){o=j;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,j=m;else e:for(o=c;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:fl(9,s)}}catch(L){me(s,s.return,L)}if(s===o){j=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,j=w;break e}j=s.return}}if(G=l,Fn(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(jr,e)}catch{}r=!0}return r}finally{ne=t,nn.transition=n}}return!1}function yu(e,n,t){n=Et(t,n),n=Os(e,n,1),e=Bn(e,n,1),n=Te(),e!==null&&(Bt(e,1,n),Be(e,n))}function me(e,n,t){if(e.tag===3)yu(e,e,t);else for(;n!==null;){if(n.tag===3){yu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){e=Et(t,e),e=Ms(n,e,1),n=Bn(n,e,1),e=Te(),n!==null&&(Bt(n,1,e),Be(n,e));break}}n=n.return}}function wd(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Te(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(je&t)===t&&(xe===4||xe===3&&(je&130023424)===je&&500>ge()-so?it(e,0):ao|=t),Be(e,n)}function xu(e,n){n===0&&((e.mode&1)===0?n=1:(n=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var t=Te();e=Nn(e,n),e!==null&&(Bt(e,n,t),Be(e,t))}function bd(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xu(e,t)}function Sd(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),xu(e,t)}var ku;ku=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Oe.current)Fe=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Fe=!1,cd(e,n,t);Fe=(e.flags&131072)!==0}else Fe=!1,ue&&(n.flags&1048576)!==0&&Ja(n,Yr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;cl(e,n),e=n.pendingProps;var l=kt(n,Ce.current);Ct(n,t),l=Ui(null,n,r,e,l,t);var i=Bi();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Me(r)?(i=!0,Qr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ti(n),l.updater=sl,n.stateNode=l,l._reactInternals=n,Qi(n,r,e,t),n=Xi(null,n,r,!0,i,t)):(n.tag=0,ue&&i&&bi(n),Le(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(cl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=jd(r),e=sn(r,e),l){case 0:n=Yi(null,n,r,e,t);break e;case 1:n=Qs(null,n,r,e,t);break e;case 11:n=As(null,n,r,e,t);break e;case 14:n=Hs(null,n,r,sn(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:sn(r,l),Yi(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:sn(r,l),Qs(e,n,r,l,t);case 3:e:{if(Ks(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ss(e,n),nl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Et(Error(h(423)),n),n=Gs(e,n,r,t,l);break e}else if(r!==l){l=Et(Error(h(424)),n),n=Gs(e,n,r,t,l);break e}else for(Qe=In(n.stateNode.containerInfo.firstChild),$e=n,ue=!0,an=null,t=os(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===l){n=Cn(e,n,t);break e}Le(e,n,r,t)}n=n.child}return n;case 5:return ds(n),e===null&&ji(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(n.flags|=32),$s(e,n),Le(e,n,o,t),n.child;case 6:return e===null&&ji(n),null;case 13:return Ys(e,n,t);case 4:return Ri(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Nt(n,null,r,t):Le(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:sn(r,l),As(e,n,r,l,t);case 7:return Le(e,n,n.pendingProps,t),n.child;case 8:return Le(e,n,n.pendingProps.children,t),n.child;case 12:return Le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,ie(qr,r._currentValue),r._currentValue=o,i!==null)if(on(i.value,o)){if(i.children===l.children&&!Oe.current){n=Cn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jn(-1,t&-t),u.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var x=g.pending;x===null?u.next=u:(u.next=x.next,x.next=u),g.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Pi(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Pi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Le(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Ct(n,t),l=Je(l),r=r(l),n.flags|=1,Le(e,n,r,t),n.child;case 14:return r=n.type,l=sn(r,n.pendingProps),l=sn(r.type,l),Hs(e,n,r,l,t);case 15:return Ws(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:sn(r,l),cl(e,n),n.tag=1,Me(r)?(e=!0,Qr(n)):e=!1,Ct(n,t),Ds(n,r,l),Qi(n,r,l,t),Xi(null,n,r,!0,e,t);case 19:return Zs(e,n,t);case 22:return Vs(e,n,t)}throw Error(h(156,n.tag))};function wu(e,n){return ea(e,n)}function Nd(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(e,n,t,r){return new Nd(e,n,t,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fn)return 11;if(e===pn)return 14}return 2}function Qn(e,n){var t=e.alternate;return t===null?(t=tn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function wl(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case De:return at(t.children,l,i,n);case Xe:o=8,l|=8;break;case En:return e=tn(12,t,n,l|2),e.elementType=En,e.lanes=i,e;case He:return e=tn(13,t,n,l),e.elementType=He,e.lanes=i,e;case rn:return e=tn(19,t,n,l),e.elementType=rn,e.lanes=i,e;case pe:return bl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xn:o=10;break e;case Gn:o=9;break e;case fn:o=11;break e;case pn:o=14;break e;case Ie:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=tn(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function at(e,n,t,r){return e=tn(7,e,r,n),e.lanes=t,e}function bl(e,n,t,r){return e=tn(22,e,r,n),e.elementType=pe,e.lanes=t,e.stateNode={isHidden:!1},e}function yo(e,n,t){return e=tn(6,e,null,n),e.lanes=t,e}function xo(e,n,t){return n=tn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cd(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ko(e,n,t,r,l,i,o,s,u){return e=new Cd(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=tn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(i),e}function zd(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function bu(e){if(!e)return Mn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(Me(t))return Xa(e,t,n)}return n}function Su(e,n,t,r,l,i,o,s,u){return e=ko(t,r,!0,e,l,i,o,s,u),e.context=bu(null),t=e.current,r=Te(),l=Vn(t),i=jn(r,l),i.callback=n??null,Bn(t,i,l),e.current.lanes=l,Bt(e,l,r),Be(e,r),e}function Sl(e,n,t,r){var l=n.current,i=Te(),o=Vn(l);return t=bu(t),n.context===null?n.context=t:n.pendingContext=t,n=jn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Bn(l,n,o),e!==null&&(dn(e,l,o,i),el(e,l,o)),o}function Nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function wo(e,n){Nu(e,n),(e=e.alternate)&&Nu(e,n)}function Ed(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function bo(e){this._internalRoot=e}jl.prototype.render=bo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));Sl(e,n,null,null)},jl.prototype.unmount=bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lt(function(){Sl(null,e,null,null)}),n[kn]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=sa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Tn.length&&n!==0&&n<Tn[t].priority;t++);Tn.splice(t,0,e),t===0&&da(e)}};function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function _d(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=Nl(o);i.call(g)}}var o=Su(n,r,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=o,e[kn]=o.current,er(e.nodeType===8?e.parentNode:e),lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var g=Nl(u);s.call(g)}}var u=ko(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=u,e[kn]=u.current,er(e.nodeType===8?e.parentNode:e),lt(function(){Sl(n,u,t,r)}),u}function zl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=Nl(o);s.call(u)}}Sl(n,o,e,l)}else o=_d(t,n,e,l,r);return Nl(o)}oa=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ut(n.pendingLanes);t!==0&&(Ql(n,t|1),Be(n,ge()),(G&6)===0&&(Lt=ge()+500,Fn()))}break;case 13:lt(function(){var r=Nn(e,1);if(r!==null){var l=Te();dn(r,e,1,l)}}),wo(e,1)}},Kl=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=Te();dn(n,e,134217728,t)}wo(e,134217728)}},aa=function(e){if(e.tag===13){var n=Vn(e),t=Nn(e,n);if(t!==null){var r=Te();dn(t,e,n,r)}wo(e,n)}},sa=function(){return ne},ua=function(e,n){var t=ne;try{return ne=e,n()}finally{ne=t}},Ul=function(e,n,t){switch(n){case"input":if(Ll(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Vr(r);if(!l)throw Error(h(90));Ro(r),Ll(r,l)}}}break;case"textarea":Fo(e,t);break;case"select":n=t.value,n!=null&&st(e,!!t.multiple,n,!1)}},Ko=mo,Go=lt;var Pd={usingClientEntryPoint:!1,Events:[rr,yt,Vr,$o,Qo,mo]},vr={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ld={bundleType:vr.bundleType,version:vr.version,rendererPackageName:vr.rendererPackageName,rendererConfig:vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qo(e),e===null?null:e.stateNode},findFiberByHostInstance:vr.findFiberByHostInstance||Ed,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{jr=El.inject(Ld),mn=El}catch{}}return Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pd,Ae.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!So(n))throw Error(h(200));return zd(e,n,null,t)},Ae.createRoot=function(e,n){if(!So(e))throw Error(h(299));var t=!1,r="",l=ju;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=ko(e,1,!1,null,null,t,!1,r,l),e[kn]=n.current,er(e.nodeType===8?e.parentNode:e),new bo(n)},Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=qo(n),e=e===null?null:e.stateNode,e},Ae.flushSync=function(e){return lt(e)},Ae.hydrate=function(e,n,t){if(!Cl(n))throw Error(h(200));return zl(null,e,n,!0,t)},Ae.hydrateRoot=function(e,n,t){if(!So(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=ju;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Su(n,null,e,1,t??null,l,!1,i,o),e[kn]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new jl(n)},Ae.render=function(e,n,t){if(!Cl(n))throw Error(h(200));return zl(null,e,n,!1,t)},Ae.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(h(40));return e._reactRootContainer?(lt(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1},Ae.unstable_batchedUpdates=mo,Ae.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Cl(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return zl(e,n,t,!1,r)},Ae.version="18.3.1-next-f1338f8080-20240426",Ae}var Du;function Ud(){if(Du)return Co.exports;Du=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(_){console.error(_)}}return d(),Co.exports=Fd(),Co.exports}var Iu;function Bd(){if(Iu)return _l;Iu=1;var d=Ud();return _l.createRoot=d.createRoot,_l.hydrateRoot=d.hydrateRoot,_l}var Ad=Bd();const Hd=`@import url('https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=MedievalSharp&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600;700;900&family=Cinzel+Decorative:wght@900&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --lead:      #020202;
  --lead-1:    #070707;
  --lead-2:    #0d0d0d;
  --lead-line: #111111;

  --ruby:      #5a0610;
  --ruby-l:    #8a0f1a;
  --ruby-g:    rgba(90,6,16,0.22);

  --sapphire:  #060e42;
  --sapphire-l:#102090;
  --sapphire-g:rgba(6,14,66,0.22);

  --emerald:   #062e0e;
  --emerald-l: #0e5a22;
  --emerald-g: rgba(6,46,14,0.22);

  --amber:     #4e2e00;
  --amber-l:   #a05800;
  --amber-g:   rgba(78,46,0,0.22);

  --violet:    #2e0650;
  --violet-l:  #5a1590;
  --violet-g:  rgba(46,6,80,0.22);

  --glass-sheen: rgba(255,255,255,0.02);
  --glass-edge:  rgba(255,255,255,0.04);

  --text-glass:  #c8bca8;
  --text-dim:    #6a5a48;
  --text-faint:  #251e16;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Libre Baskerville', serif;
  background: var(--lead);
  color: var(--text-glass);
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--lead); }
::-webkit-scrollbar-thumb { background: var(--ruby); }

/* ── 납 프레임 효과 ── */
.lead-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 997;
  background:
    repeating-linear-gradient(0deg, transparent 0px, transparent 59px, rgba(10,10,10,0.6) 59px, rgba(10,10,10,0.6) 61px),
    repeating-linear-gradient(90deg, transparent 0px, transparent 59px, rgba(10,10,10,0.4) 59px, rgba(10,10,10,0.4) 61px);
  mix-blend-mode: multiply;
  opacity: 0.15;
}
.vignette {
  position: fixed; inset: 0; pointer-events: none; z-index: 996;
  background: radial-gradient(ellipse 90% 85% at 50% 50%, transparent 30%, rgba(1,0,0,0.82) 78%, rgba(0,0,0,0.98) 100%);
}

/* ── LOADING ── */
.ls {
  position: fixed; inset: 0;
  background: var(--lead);
  z-index: 9999;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity 2s, visibility 2s;
}
.ls.out { opacity: 0; visibility: hidden; }

/* Rose window loading animation */
.rose-window {
  width: 220px; height: 220px;
  position: relative;
  margin-bottom: 2.5rem;
  animation: rose-spin 20s linear infinite;
}
@keyframes rose-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.rose-ring-outer {
  position: absolute; inset: 0;
  border-radius: 50%;
  border: 3px solid var(--lead-line);
  box-shadow: 0 0 0 1px rgba(139,10,26,0.2), inset 0 0 0 1px rgba(139,10,26,0.1);
}
.rose-center {
  position: absolute; top: 50%; left: 50%;
  width: 44px; height: 44px;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  background: radial-gradient(circle, var(--ruby-l), var(--ruby), rgba(0,0,0,0.7));
  border: 3px solid var(--lead-line);
  box-shadow: 0 0 20px rgba(140,15,25,0.4), 0 0 40px rgba(90,6,16,0.2);
  animation: rose-glow 2s ease-in-out infinite alternate;
}
@keyframes rose-glow {
  from { box-shadow: 0 0 15px rgba(140,15,25,0.35), 0 0 30px rgba(90,6,16,0.15); }
  to   { box-shadow: 0 0 30px rgba(140,15,25,0.65), 0 0 60px rgba(90,6,16,0.35); }
}

.rose-petal {
  position: absolute; top: 50%; left: 50%;
  transform-origin: 0 0;
  width: 48px; height: 48px;
  border-radius: 50% 50% 0 50%;
  border: 2px solid var(--lead-line);
}
.rose-spoke {
  position: absolute; top: 50%; left: 50%;
  transform-origin: 0 0;
  width: 2px;
  background: var(--lead-line);
  opacity: 0.6;
}

.ls-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  color: var(--text-glass);
  letter-spacing: 0.15em;
  text-align: center;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 20px rgba(140,15,25,0.28);
}
.ls-sub {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.5em;
  color: var(--text-dim);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2.5rem;
}

.ls-logo-wrap {
  width: min(80vw, 900px);
  margin: 0 auto 2rem;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 18px rgba(0,0,0,0.7);
}
.ls-logo-img {
  max-width: 100%;
  max-height: 320px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.ls-divider {
  display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;
}
.ls-div-line {
  width: 60px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--ruby));
}
.ls-div-line.r { background: linear-gradient(90deg, var(--ruby), transparent); }
.ls-div-gem {
  width: 10px; height: 10px;
  transform: rotate(45deg);
  background: var(--ruby);
  box-shadow: 0 0 6px var(--ruby-l);
}
.ls-prompt { font-family: 'Libre Baskerville', serif; font-size: 0.88rem; font-style: italic; color: var(--text-dim); text-align: center; margin-bottom: 0.8rem; }
.ls-input {
  background: transparent;
  border: 1px solid rgba(90,6,16,0.35);
  border-bottom-color: var(--ruby);
  color: var(--text-glass);
  font-family: 'Cinzel', serif;
  font-size: 0.95rem; letter-spacing: 0.2em; text-align: center;
  padding: 0.55rem 1rem; width: 270px; outline: none;
  caret-color: var(--ruby-l);
  transition: all 0.4s;
}
.ls-input:focus { border-color: var(--ruby-l); box-shadow: 0 0 10px rgba(140,15,25,0.1); }
.ls-input::placeholder { color: var(--text-faint); font-size: 0.78rem; }
.ls-btn {
  display: block; margin: 1rem auto 0;
  background: transparent;
  border: 1px solid var(--ruby);
  color: var(--amber-l);
  font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.35em;
  text-transform: uppercase; padding: 0.6rem 2rem;
  cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden;
}
.ls-btn::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(90,6,16,0.25); transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
}
.ls-btn:hover::before { transform: scaleX(1); }
.ls-btn:hover { color: var(--text-glass); }
.ls-btn span { position: relative; z-index: 1; }
.ls-remembered {
  font-family: 'Libre Baskerville', serif; font-size: 1rem; font-style: italic;
  color: var(--amber-l); text-align: center;
  animation: glow-pulse 1.5s ease-in-out infinite alternate;
}
@keyframes glow-pulse { from { text-shadow: 0 0 8px rgba(160,88,0,0.3); } to { text-shadow: 0 0 20px rgba(160,88,0,0.6); } }
.ls-credit { position: absolute; bottom: 1.5rem; font-family: 'Cinzel', serif; font-size: 0.55rem; letter-spacing: 0.3em; color: var(--text-faint); text-align: center; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(3,2,2,0.96);
  border-bottom: 2px solid var(--lead-line);
  display: flex; align-items: stretch;
  height: 52px;
  padding: 0;
  backdrop-filter: blur(6px);
}
.nav::after {
  content: '';
  position: absolute; bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(90,6,16,0.28), transparent);
}
.nav-logo-pane {
  background: var(--ruby-g);
  border-right: 2px solid var(--lead-line);
  padding: 0 1.8rem;
  display: flex; align-items: center;
  gap: 0.7rem;
}
.nav-logo-gem { width: 12px; height: 12px; transform: rotate(45deg); background: var(--ruby-l); box-shadow: 0 0 6px rgba(140,15,25,0.5); flex-shrink: 0; }
.nav-logo-text { font-family: 'Cinzel Decorative', serif; font-size: 0.75rem; color: var(--text-glass); letter-spacing: 0.12em; white-space: nowrap; text-shadow: 0 0 8px rgba(140,15,25,0.2); }
.nav-links { display: flex; align-items: stretch; list-style: none; }
.nav-links li { display: flex; }
.nav-links a {
  font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: #fff; text-decoration: none;
  display: flex; align-items: center; padding: 0 1.2rem;
  border-right: 1px solid var(--lead-line);
  position: relative; transition: color 0.3s;
}
.nav-links a::before {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  transform: scaleX(0); transition: transform 0.3s;
}
.nav-links li:nth-child(1) a::before { background: var(--ruby-l); }
.nav-links li:nth-child(2) a::before { background: var(--sapphire-l); }
.nav-links li:nth-child(3) a::before { background: var(--amber-l); }
.nav-links li:nth-child(4) a::before { background: var(--emerald-l); }
.nav-links li:nth-child(5) a::before { background: var(--violet-l); }
.nav-links a:hover { color: var(--text-glass); }
.nav-links a:hover::before { transform: scaleX(1); }
.nav-user { margin-left: auto; padding: 0 1.5rem; display: flex; align-items: center; gap: 0.4rem; font-family: 'Libre Baskerville', serif; font-size: 0.78rem; font-style: italic; color: var(--text-dim); border-left: 1px solid var(--lead-line); }

/* ── HERO — CATHEDRAL WINDOW ── */
.hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
  background: var(--lead);
}
/* Giant gothic arch shape */
.hero-arch-bg {
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 70%; max-width: 900px;
  height: 100%;
  clip-path: polygon(10% 0%, 90% 0%, 100% 8%, 100% 100%, 0% 100%, 0% 8%);
  background: radial-gradient(ellipse 80% 60% at 50% 35%,
    rgba(50,2,8,0.45) 0%,
    rgba(20,1,4,0.35) 40%,
    transparent 70%
  );
}

/* Stained glass panels behind hero */
.hero-glass-panels {
  position: absolute; inset: 0;
  display: grid;
  grid-template-columns: 1fr 2px 3fr 2px 1fr;
  grid-template-rows: 2px 1fr 2px 1fr 2px;
  pointer-events: none;
}
.hgp { background: transparent; transition: opacity 0.3s; }
.hgp-lead { background: var(--lead-line); }
.hgp-ruby     { background: radial-gradient(ellipse, rgba(90,6,16,0.18) 0%, transparent 70%); }
.hgp-sapphire { background: radial-gradient(ellipse, rgba(6,14,66,0.14) 0%, transparent 70%); }
.hgp-amber    { background: radial-gradient(ellipse, rgba(78,46,0,0.12) 0%, transparent 70%); }

/* Gothic lancet arch lines overlay */
.hero-lancets {
  position: absolute; inset: 0; pointer-events: none;
}
.hero-lancets svg { width: 100%; height: 100%; opacity: 0.06; }

.hero-content {
  position: relative; z-index: 5;
  text-align: center; padding: 7rem 2rem 4rem;
  max-width: 780px;
}
.hero-glass-badge {
  display: inline-flex; align-items: center; gap: 0.6rem;
  border: 1px solid rgba(90,6,16,0.4); border-left-width: 3px;
  padding: 0.35rem 1.2rem; margin-bottom: 2rem;
  background: rgba(90,6,16,0.04);
  font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 0.4em;
  color: var(--ruby-l); text-transform: uppercase;
  animation: fadein 1s ease both;
}
.hero-gem-sm { width: 7px; height: 7px; transform: rotate(45deg); background: var(--ruby-l); box-shadow: 0 0 4px var(--ruby-l); }

.hero-title {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(2.2rem, 6.5vw, 5.2rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--text-glass);
  text-shadow:
    0 0 40px rgba(90,6,16,0.45),
    0 0 80px rgba(90,6,16,0.15),
    2px 2px 0 rgba(0,0,0,0.95);
  margin-bottom: 0.5rem;
  animation: fadein 1.2s ease both; animation-delay: 0.2s;
}
.hero-title .accent { color: var(--ruby-l); }

.hero-title-sub {
  font-family: 'Cinzel', serif;
  font-size: clamp(1rem, 2.5vw, 1.6rem);
  color: var(--text-dim);
  letter-spacing: 0.2em;
  animation: fadein 1s ease both; animation-delay: 0.5s;
  margin-bottom: 2rem;
}

/* Gem row divider */
.gem-row {
  display: flex; align-items: center; gap: 0; justify-content: center;
  margin: 1.8rem 0;
  animation: fadein 1s ease both; animation-delay: 0.7s;
}
.gem-row-line { flex: 1; max-width: 140px; height: 1px; background: linear-gradient(90deg, transparent, rgba(90,6,16,0.4)); }
.gem-row-line.r { background: linear-gradient(90deg, rgba(90,6,16,0.4), transparent); }
.gem-dot {
  width: 9px; height: 9px; transform: rotate(45deg); margin: 0 3px;
  box-shadow: 0 0 4px currentColor;
}
.gem-dot.ruby     { background: var(--ruby-l);     color: var(--ruby-l); }
.gem-dot.sapphire { background: var(--sapphire-l); color: var(--sapphire-l); }
.gem-dot.amber    { background: var(--amber-l);    color: var(--amber-l); }
.gem-dot.emerald  { background: var(--emerald-l);  color: var(--emerald-l); }
.gem-dot.violet   { background: var(--violet-l);   color: var(--violet-l); }

.hero-verse {
  font-family: 'Libre Baskerville', serif;
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-style: italic; color: var(--text-dim);
  line-height: 2.1;
  animation: fadein 1s ease both; animation-delay: 0.9s;
}
.hero-verse strong { color: var(--amber-l); font-style: normal; }
.hero-verse em { color: var(--ruby-l); }

.hero-cta {
  display: flex; gap: 0; justify-content: center; margin-top: 2.5rem;
  animation: fadein 1s ease both; animation-delay: 1.1s;
}
.glass-btn {
  font-family: 'Cinzel', serif; font-size: 0.62rem; letter-spacing: 0.28em;
  text-transform: uppercase; text-decoration: none;
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.8rem 2.2rem;
  border: 1px solid var(--lead-line);
  transition: all 0.4s; position: relative; overflow: hidden;
}
.glass-btn::before {
  content: ''; position: absolute; inset: 0;
  transition: opacity 0.4s; opacity: 0;
}
.glass-btn-ruby { background: var(--ruby-g); border-color: rgba(90,6,16,0.5); color: #fff; }
.glass-btn-ruby::before { background: rgba(90,6,16,0.18); }
.glass-btn-ruby:hover { color: #fff; box-shadow: 0 0 16px rgba(90,6,16,0.3), inset 0 0 16px rgba(90,6,16,0.08); }
.glass-btn-ruby:hover::before { opacity: 1; }
.glass-btn-dark { background: rgba(255,255,255,0.01); border-color: rgba(255,255,255,0.07); color: #fff; border-left: none; }
.glass-btn-dark:hover { color: #fff; background: rgba(255,255,255,0.03); }

@keyframes fadein { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }

/* ── SECTION: GLASS PANEL LAYOUT ── */
.glass-section {
  position: relative;
  padding: 5rem 0;
  border-top: 2px solid var(--lead-line);
}
.glass-section::before {
  content: '';
  position: absolute; top: -1px; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, transparent, var(--section-accent, rgba(139,10,26,0.4)), transparent);
}
.gs-inner { max-width: 1200px; margin: 0 auto; padding: 0 3rem; }

/* Section header — lancet arch style */
.lancet-header {
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; gap: 2rem;
  margin-bottom: 4rem;
}
.lh-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--section-accent, rgba(139,10,26,0.4)));
}
.lh-line.r { background: linear-gradient(90deg, var(--section-accent, rgba(139,10,26,0.4)), transparent); }
.lh-center { text-align: center; }
.lh-eyebrow { font-family: 'Cinzel', serif; font-size: 0.56rem; letter-spacing: 0.45em; color: var(--section-accent-l, var(--ruby-l)); text-transform: uppercase; display: block; margin-bottom: 0.6rem; }
.lh-title { font-family: 'Cinzel Decorative', serif; font-size: clamp(1.4rem, 3.5vw, 2.5rem); color: var(--text-glass); line-height: 1.2; margin-bottom: 0.4rem; text-shadow: 0 0 25px rgba(0,0,0,0.8); }
.lh-subtitle { font-family: 'Libre Baskerville', serif; font-size: 0.9rem; font-style: italic; color: var(--text-dim); }

/* ── WORLD — LORE PANELS ── */
.world-section { --section-accent: rgba(90,6,16,0.35); --section-accent-l: #8a0f1a; }

.lore-mosaic {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 2px;
  background: var(--lead-line);
  border: 2px solid var(--lead-line);
  margin-bottom: 3rem;
}
.lore-tile {
  background: var(--lead-1);
  padding: 1.8rem;
  position: relative; overflow: hidden;
  transition: background 0.4s;
  cursor: default;
}
.lore-tile::before {
  content: ''; position: absolute; inset: 0;
  background: var(--tile-color, var(--ruby-g));
  opacity: 0; transition: opacity 0.4s;
}
.lore-tile:hover::before { opacity: 1; }
.lore-tile-gem {
  display: inline-block;
  width: 12px; height: 12px; transform: rotate(45deg);
  background: var(--gem-color, var(--ruby-l));
  box-shadow: 0 0 8px var(--gem-color, var(--ruby-l));
  margin-bottom: 1rem;
  position: relative; z-index: 1;
  transition: box-shadow 0.4s;
}
.lore-tile:hover .lore-tile-gem { box-shadow: 0 0 16px var(--gem-color, var(--ruby-l)); }
.lore-tile-title {
  font-family: 'Cinzel', serif; font-size: 0.78rem; letter-spacing: 0.18em;
  color: var(--gem-color, var(--ruby-l)); text-transform: uppercase;
  margin-bottom: 0.7rem; position: relative; z-index: 1;
}
.lore-tile-text {
  font-family: 'Libre Baskerville', serif; font-size: 0.85rem; font-style: italic;
  color: var(--text-dim); line-height: 1.8;
  position: relative; z-index: 1;
}
.lore-tile-tag {
  display: inline-block; margin-top: 0.8rem; font-family: 'Cinzel', serif;
  font-size: 0.52rem; letter-spacing: 0.2em; color: var(--gem-color, var(--ruby-l));
  border: 1px solid currentColor; padding: 0.12rem 0.4rem; opacity: 0.6;
  position: relative; z-index: 1;
}
.lore-tile.wide { grid-column: span 2; }

/* Magic Table — glass style */
.glass-table-wrap {
  border: 2px solid var(--lead-line);
  overflow: hidden;
}
.glass-table {
  width: 100%; border-collapse: collapse;
}
.glass-table thead { background: rgba(90,6,16,0.08); }
.glass-table th {
  font-family: 'Cinzel', serif; font-size: 0.62rem; letter-spacing: 0.22em;
  color: var(--ruby-l); padding: 0.9rem 1.4rem; text-align: left;
  border-bottom: 2px solid var(--lead-line); text-transform: uppercase;
}
.glass-table td {
  padding: 0.8rem 1.4rem; border-bottom: 1px solid var(--lead-line);
  font-family: 'Libre Baskerville', serif; font-size: 0.88rem; font-style: italic;
  color: var(--text-dim); vertical-align: top;
  transition: background 0.3s, color 0.3s;
}
.glass-table tr:last-child td { border-bottom: none; }
.glass-table tr:hover td { background: rgba(90,6,16,0.04); color: var(--text-glass); }
.glass-table td:first-child { color: var(--text-glass); font-style: normal; font-family: 'Cinzel', serif; font-size: 0.72rem; white-space: nowrap; width: 180px; }
.glass-table td:first-child::before { content: '◆ '; color: var(--ruby); font-size: 0.5rem; }

/* ── REGIONS — MAP PANEL ── */
.regions-section { --section-accent: rgba(6,14,66,0.4); --section-accent-l: #1a40a0; }

.atlas-glass {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 2px; background: var(--lead-line);
  border: 2px solid var(--lead-line);
  margin-bottom: 0;
}
.atlas-map-pane {
  background: var(--lead-1);
  position: relative;
  min-height: 280px;
  overflow: hidden;
}
.atlas-glass .atlas-map-pane {
  align-self: stretch;
  min-height: 0;
}
.atlas-map-pane::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 50%, rgba(6,14,66,0.14) 0%, transparent 65%);
}
.atlas-map-svg { width: 100%; height: 100%; position: absolute; inset: 0; }
.atlas-entries-pane {
  background: var(--lead-1);
  overflow: hidden;
}
.region-list-item {
  display: flex; align-items: stretch;
  border-bottom: 1px solid var(--lead-line);
  transition: background 0.3s;
}
.region-list-item:last-child { border-bottom: none; }
.region-list-item:hover { background: rgba(6,14,66,0.05); }
.rli-num {
  width: 50px; flex-shrink: 0;
  background: rgba(6,14,66,0.06);
  border-right: 1px solid var(--lead-line);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cinzel Decorative', serif; font-size: 0.7rem;
  color: rgba(30,70,180,0.4); letter-spacing: 0.05em;
  padding: 0.8rem 0;
}
.rli-body { padding: 0.85rem 1.1rem; flex: 1; }
.rli-name { font-family: 'Cinzel', serif; font-size: 0.72rem; color: var(--sapphire-l); letter-spacing: 0.12em; margin-bottom: 0.1rem; }
.rli-desc { font-family: 'Libre Baskerville', serif; font-size: 0.78rem; font-style: italic; color: var(--text-dim); line-height: 1.5; margin-bottom: 0.3rem; }
.rli-npc { font-family: 'Cinzel', serif; font-size: 0.52rem; letter-spacing: 0.15em; color: rgba(30,70,180,0.4); text-transform: uppercase; }

/* ── COMBAT ── */
.combat-section { --section-accent: rgba(78,46,0,0.4); --section-accent-l: #a05800; }

.rank-glass-grid {
  display: flex; flex-direction: column; gap: 2px;
  background: var(--lead-line); border: 2px solid var(--lead-line);
}
.rank-glass-row {
  display: grid; grid-template-columns: 200px 1fr;
  background: var(--lead-1); gap: 0;
  transition: background 0.3s;
}
.rank-glass-row:hover { background: rgba(255,255,255,0.01); }
.rgr-left {
  border-right: 2px solid var(--lead-line);
  padding: 1.8rem 1.4rem;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; position: relative; overflow: hidden;
}
.rgr-left::before {
  content: ''; position: absolute; inset: 0;
  background: var(--rank-glass, rgba(122,74,0,0.1));
  opacity: 0; transition: opacity 0.4s;
}
.rank-glass-row:hover .rgr-left::before { opacity: 1; }
.rgr-glyph { font-size: 2.2rem; margin-bottom: 0.4rem; position: relative; z-index: 1; filter: drop-shadow(0 0 6px currentColor); }
.rgr-name { font-family: 'Cinzel', serif; font-size: 0.7rem; letter-spacing: 0.18em; margin-bottom: 0.2rem; position: relative; z-index: 1; }
.rgr-en { font-family: 'Libre Baskerville', serif; font-size: 0.72rem; font-style: italic; color: var(--text-faint); position: relative; z-index: 1; }
.rgr-right { padding: 1.6rem 2rem; }
.rgr-desc { font-family: 'Libre Baskerville', serif; font-size: 0.88rem; font-style: italic; color: var(--text-dim); line-height: 1.8; margin-bottom: 0.7rem; }
.rgr-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.rgr-tag { font-family: 'Cinzel', serif; font-size: 0.56rem; letter-spacing: 0.1em; padding: 0.12rem 0.4rem; border: 1px solid currentColor; opacity: 0.6; }
/* rank colors */
.rg-god   .rgr-glyph, .rg-god   .rgr-name, .rg-god   .rgr-tag { color: #8a6010; } .rg-god   .rgr-left { --rank-glass: rgba(130,95,15,0.08); }
.rg-mad   .rgr-glyph, .rg-mad   .rgr-name, .rg-mad   .rgr-tag { color: #8a0f0f; } .rg-mad   .rgr-left { --rank-glass: rgba(120,10,10,0.1); }
.rg-crack .rgr-glyph, .rg-crack .rgr-name, .rg-crack .rgr-tag { color: #3e5870; } .rg-crack .rgr-left { --rank-glass: rgba(45,75,100,0.06); }
.rg-deep  .rgr-glyph, .rg-deep  .rgr-name, .rg-deep  .rgr-tag { color: #6a4e18; } .rg-deep  .rgr-left { --rank-glass: rgba(95,70,18,0.06); }
.rg-carve .rgr-glyph, .rg-carve .rgr-name, .rg-carve .rgr-tag { color: #2e4050; } .rg-carve .rgr-left { --rank-glass: rgba(35,55,65,0.06); }
.rg-none  .rgr-glyph, .rg-none  .rgr-name, .rg-none  .rgr-tag { color: #303030; } .rg-none  .rgr-left { --rank-glass: rgba(30,30,30,0.05); }

/* ── CHARACTERS — RELIQUARY ── */
.chars-section { --section-accent: rgba(6,46,14,0.4); --section-accent-l: #0e5a22; }

.char-filter-row { display: flex; gap: 0.25rem; justify-content: center; margin-bottom: 1.25rem; flex-wrap: wrap; }
.filter-glass-btn {
  font-family: 'Cinzel', serif; font-size: 0.72rem; letter-spacing: 0.18em;
  text-transform: uppercase; padding: 0.55rem 1.35rem;
  background: transparent; border: 1px solid var(--lead-line);
  color: var(--text-glass);
  cursor: pointer; transition: all 0.3s;
  display: flex; align-items: center; gap: 0.4rem;
}
.filter-glass-btn.active, .filter-glass-btn:hover { background: rgba(6,46,14,0.12); color: var(--emerald-l); border-color: rgba(6,46,14,0.45); }

.rank-filter-row-g { display: flex; gap: 0.35rem; justify-content: center; margin-bottom: 2rem; flex-wrap: wrap; }
.rank-fg {
  font-family: 'Cinzel', serif; font-size: 0.64rem; letter-spacing: 0.12em;
  padding: 0.35rem 0.7rem; background: transparent;
  border: 1px solid var(--lead-line); color: var(--text-glass);
  cursor: pointer; transition: all 0.3s;
}
.rank-fg.active, .rank-fg:hover { color: var(--amber-l); border-color: rgba(160,88,0,0.4); background: rgba(78,46,0,0.06); }

.char-reliquary {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
  gap: 2px; background: var(--lead-line);
  border: 2px solid var(--lead-line);
}
.char-empty-state {
  grid-column: 1 / -1;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Libre Baskerville', serif;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--text-dim);
  background: var(--lead-1);
}
.relic-card {
  background: var(--lead-1);
  cursor: pointer; overflow: hidden;
  display: flex; flex-direction: column;
  transition: background 0.3s;
  position: relative;
}
.relic-card:hover { background: rgba(6,46,14,0.03); }

/* stained glass top panel */
.relic-glass-panel {
  width: 100%; aspect-ratio: 1;
  position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.relic-glass-bg {
  position: absolute; inset: 0;
  transition: opacity 0.4s;
}
.relic-card:hover .relic-glass-bg { opacity: 1.2; }
.relic-glass-icon {
  font-size: 4rem; opacity: 0.1; color: var(--text-glass);
  position: absolute;
}
.relic-img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top;
  opacity: 0.75; position: relative; z-index: 1;
  transition: opacity 0.4s, transform 0.5s;
}
.relic-card:hover .relic-img { opacity: 0.88; transform: scale(1.03); }
/* Lead came lines overlay on portrait */
.relic-glass-overlay {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
}
.relic-name-band {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 3;
  background: linear-gradient(transparent, rgba(4,3,2,0.96));
  padding: 2rem 1rem 0.8rem;
  display: flex; justify-content: space-between; align-items: flex-end;
}
.relic-char-name { font-family: 'Cinzel Decorative', serif; font-size: 0.95rem; color: var(--text-glass); line-height: 1.2; }
.relic-rank-badge {
  font-family: 'Cinzel', serif; font-size: 0.52rem; letter-spacing: 0.1em;
  padding: 0.12rem 0.35rem; border: 1px solid currentColor;
  flex-shrink: 0; margin-left: 0.4rem;
  background: rgba(4,3,2,0.7);
}
.relic-type-badge {
  position: absolute; top: 0.6rem; left: 0.6rem; z-index: 4;
  font-family: 'Cinzel', serif; font-size: 0.5rem; letter-spacing: 0.1em;
  padding: 0.1rem 0.35rem; border: 1px solid currentColor;
  background: rgba(4,3,2,0.75);
}
.relic-body { padding: 1rem 1.2rem; flex: 1; display: flex; flex-direction: column; }
.relic-title { font-family: 'Libre Baskerville', serif; font-size: 0.8rem; font-style: italic; color: var(--ruby-l); margin-bottom: 0.55rem; }
.relic-meta { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-bottom: 0.6rem; }
.relic-meta-item { font-family: 'Cinzel', serif; font-size: 0.5rem; letter-spacing: 0.08em; color: var(--text-dim); border: 1px solid var(--lead-line); padding: 0.08rem 0.28rem; text-transform: uppercase; }
.relic-lead-rule { height: 1px; background: linear-gradient(90deg, var(--lead-line), transparent); margin-bottom: 0.6rem; }
.relic-skill-name { font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 0.15em; color: var(--amber-l); margin-bottom: 0.2rem; text-transform: uppercase; }
.relic-skill-desc { font-family: 'Libre Baskerville', serif; font-size: 0.8rem; font-style: italic; color: var(--text-dim); line-height: 1.55; }
.relic-traits { display: flex; flex-wrap: wrap; gap: 0.2rem; margin-top: 0.6rem; }
.relic-trait { font-family: 'Libre Baskerville', serif; font-size: 0.72rem; font-style: italic; color: var(--ruby); opacity: 0.7; }
.relic-trait:not(:last-child)::after { content: ' ·'; color: var(--lead-line); font-style: normal; opacity: 1; }
.relic-hope { margin-top: auto; padding-top: 0.6rem; font-family: 'Cinzel', serif; font-size: 0.56rem; letter-spacing: 0.12em; color: var(--emerald-l); display: flex; align-items: center; gap: 0.35rem; opacity: 0.8; }

/* ── MODAL ── */
.modal-glass-bg {
  position: fixed; inset: 0; background: rgba(2,1,1,0.96);
  z-index: 200; display: flex; align-items: center; justify-content: center;
  padding: 2rem; animation: fadein 0.3s ease;
  backdrop-filter: blur(8px);
}
.modal-glass-frame {
  max-width: 680px; width: 100%;
  background: var(--lead-1);
  border: 2px solid var(--lead-line);
  max-height: 90vh; overflow-y: auto;
  position: relative;
  animation: modal-in 0.4s ease;
}
@keyframes modal-in { from { opacity:0; transform:scale(0.97) translateY(16px); } to { opacity:1; transform:none; } }
/* Lead came corner accents on modal */
.modal-glass-frame::before, .modal-glass-frame::after {
  content: ''; position: absolute; width: 20px; height: 20px; z-index: 2;
  border-color: var(--ruby-l); border-style: solid;
}
.modal-glass-frame::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.modal-glass-frame::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
.modal-close-btn {
  position: absolute; top: 0.7rem; right: 0.7rem; z-index: 5;
  background: transparent; border: 1px solid var(--lead-line);
  color: var(--text-dim); width: 28px; height: 28px;
  cursor: pointer; transition: all 0.3s; font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
}
.modal-close-btn:hover { background: rgba(90,6,16,0.18); color: var(--ruby-l); border-color: var(--ruby); }
.modal-portrait-glass {
  width: 100%; aspect-ratio: 16/6;
  position: relative; overflow: hidden;
  background: var(--lead);
  display: flex; align-items: center; justify-content: center;
  border-bottom: 2px solid var(--lead-line);
}
.modal-portrait-icon { font-size: 6rem; opacity: 0.1; position: absolute; }
.modal-portrait-img { width:100%; height:100%; object-fit:cover; object-position:top; opacity:0.72; position:absolute; }
.modal-portrait-grad { position:absolute; bottom:0; left:0; right:0; height:60%; background:linear-gradient(transparent, var(--lead-1)); }
.modal-portrait-info { position:absolute; bottom:1rem; left:1.5rem; }
.modal-char-name { font-family:'Cinzel Decorative',serif; font-size:1.6rem; color:var(--text-glass); margin-bottom:0.2rem; }
.modal-char-title { font-family:'Libre Baskerville',serif; font-size:0.9rem; font-style:italic; color:var(--ruby-l); }
.modal-body-content { padding: 1.6rem 1.8rem; }
.modal-stats-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border: 1px solid var(--lead-line); margin-bottom: 1.2rem; overflow: hidden;
}
.mstat {
  padding: 0.6rem 0.9rem; border-bottom: 1px solid var(--lead-line);
  border-right: 1px solid var(--lead-line);
  font-family: 'Libre Baskerville', serif; font-size: 0.85rem; font-style: italic; color: var(--text-dim);
}
.mstat:nth-child(even) { border-right: none; }
.mstat:nth-last-child(-n+2) { border-bottom: none; }
.mstat.full { grid-column: 1/-1; border-right: none; }
.mstat strong { font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 0.12em; color: var(--amber-l); font-style: normal; margin-right: 0.4rem; text-transform: uppercase; display: inline-block; margin-bottom: 0.1rem; }
.modal-sec-label { font-family:'Cinzel',serif; font-size:0.6rem; letter-spacing:0.3em; color:var(--ruby-l); text-transform:uppercase; margin:1rem 0 0.4rem; }
.modal-text { font-family:'Libre Baskerville',serif; font-size:0.88rem; font-style:italic; color:var(--text-dim); line-height:1.9; border-left:2px solid rgba(90,6,16,0.25); padding-left:1rem; margin-bottom:0.6rem; }
.modal-trait-row { display:flex; flex-wrap:wrap; gap:0.3rem; margin-top:0.5rem; }
.modal-trait { font-family:'Cinzel',serif; font-size:0.52rem; letter-spacing:0.1em; color:var(--ruby-l); border:1px solid rgba(90,6,16,0.3); padding:0.1rem 0.35rem; }

/* ── HOPE ── */
.hope-section { --section-accent: rgba(46,6,80,0.4); --section-accent-l: #5a1590; }

.hope-glass-grid {
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 2px; background: var(--lead-line);
  border: 2px solid var(--lead-line);
}
.hope-glass-col {
  background: var(--lead-1);
  padding: 2.5rem 1.2rem 2rem;
  text-align: center; display: flex; flex-direction: column; align-items: center;
  position: relative; overflow: hidden;
  transition: background 0.4s;
}
.hope-glass-col::before {
  content: ''; position: absolute; inset: 0;
  background: var(--hope-glass, rgba(74,10,122,0.1));
  opacity: 0; transition: opacity 0.4s;
}
.hope-glass-col:hover::before { opacity: 1; }
.hope-lancet {
  width: 50px; height: 70px; position: relative;
  margin-bottom: 1.5rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%);
  animation: hope-glow 3s ease-in-out infinite alternate;
}
@keyframes hope-glow { from { filter: brightness(0.55); } to { filter: brightness(0.95); } }
.hope-lancet-inner {
  width: 100%; height: 100%;
  background: var(--hope-color, radial-gradient(circle at 30% 30%, rgba(74,10,122,0.8), rgba(20,0,40,0.9)));
  position: relative;
}
.hope-lancet-inner::after {
  content: ''; position: absolute;
  top: 8%; left: 15%; width: 25%; height: 40%;
  background: rgba(255,255,255,0.2);
  border-radius: 50% 50% 50% 0;
}
.hope-lancet-frame {
  position: absolute; inset: 0;
  border: 2px solid var(--lead-line);
}
.hope-shard-name { font-family: 'Cinzel Decorative', serif; font-size: 0.9rem; color: var(--hope-accent, var(--violet-l)); margin-bottom: 0.2rem; position: relative; z-index: 1; }
.hope-shard-en { font-family: 'Cinzel', serif; font-size: 0.52rem; letter-spacing: 0.25em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 0.5rem; position: relative; z-index: 1; }
.hope-shard-holder { font-family: 'Libre Baskerville', serif; font-size: 0.8rem; font-style: italic; color: var(--text-dim); margin-bottom: 0.5rem; position: relative; z-index: 1; }
.hope-shard-quote { font-family: 'Libre Baskerville', serif; font-size: 0.72rem; font-style: italic; color: var(--hope-accent, var(--violet-l)); opacity: 0.65; line-height: 1.55; position: relative; z-index: 1; }

.hope-altar {
  margin-top: 3rem; border: 2px solid var(--lead-line);
  display: grid; grid-template-columns: 3px 1fr;
}
.hope-altar-bar { background: linear-gradient(180deg, var(--ruby-l), var(--violet-l)); opacity: 0.3; }
.hope-altar-body { padding: 2rem 2.5rem; }
.hope-altar-title { font-family: 'Cinzel Decorative', serif; font-size: 1.1rem; color: var(--amber-l); margin-bottom: 1.2rem; }
.hope-altar-text { font-family: 'Libre Baskerville', serif; font-size: 0.92rem; font-style: italic; color: var(--text-dim); line-height: 2; }
.hope-altar-text em { color: var(--ruby-l); font-style: normal; }

/* ── FOOTER ── */
.site-footer {
  border-top: 2px solid var(--lead-line);
  background: rgba(2,1,1,0.98);
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 3px 1fr 3px 1fr;
}
.footer-pane {
  padding: 2rem 2.5rem; text-align: center;
}
.footer-divider-v { background: var(--lead-line); }
.footer-title { font-family: 'Cinzel Decorative', serif; font-size: 1rem; color: var(--text-glass); margin-bottom: 0.4rem; text-shadow: 0 0 15px rgba(90,6,16,0.2); }
.footer-sub { font-family: 'Libre Baskerville', serif; font-size: 0.85rem; font-style: italic; color: var(--ruby-l); }
.footer-gem-row { display: flex; justify-content: center; gap: 0.4rem; margin: 0.6rem 0; }
.footer-fg { width: 7px; height: 7px; transform: rotate(45deg); }
.footer-credit { font-family: 'Cinzel', serif; font-size: 0.56rem; letter-spacing: 0.25em; color: var(--text-faint); }
.footer-info { font-family: 'Libre Baskerville', serif; font-size: 0.8rem; font-style: italic; color: var(--text-dim); line-height: 1.9; }

/* Reveal animation */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.9s, transform 0.9s; }
.reveal.visible { opacity: 1; transform: none; }
.d1 { transition-delay: 0.05s; } .d2 { transition-delay: 0.15s; } .d3 { transition-delay: 0.25s; }

/* Responsive */
@media (max-width: 1024px) {
  .hope-glass-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 900px) {
  .atlas-glass { grid-template-columns: 1fr; }
  .atlas-map-pane { aspect-ratio: 1.5; }
  .lore-mosaic { grid-template-columns: 1fr 1fr; }
  .lore-tile.wide { grid-column: span 1; }
  .gs-inner { padding: 0 1.5rem; }
}
@media (max-width: 680px) {
  .rank-glass-row { grid-template-columns: 1fr; }
  .rgr-left { border-right: none; border-bottom: 2px solid var(--lead-line); flex-direction: row; gap: 1rem; justify-content: flex-start; }
  .lore-mosaic { grid-template-columns: 1fr; }
  .lore-tile.wide { grid-column: 1; }
  .nav-links { display: none; }
  .hope-glass-grid { grid-template-columns: repeat(2, 1fr); }
  .site-footer { grid-template-columns: 1fr; }
  .footer-divider-v { height: 2px; width: auto; }
  .modal-stats-grid { grid-template-columns: 1fr; }
  .mstat { border-right: none; }
  .char-reliquary { grid-template-columns: 1fr; }
}`,Wd=`
.nav-right-pane {
  margin-left: auto;
  display: flex;
  align-items: stretch;
}

/* ── BGM 버튼 전체 ── */
.nav-bgm-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 1.4rem;
  border: none;
  border-left: 2px solid var(--lead-line, #1a1a1a);
  background: transparent;
  cursor: pointer;
  transition: background 0.4s;
  overflow: hidden;
  min-width: 120px;
  height: 100%;
}

/* 호버 배경 */
.nav-bgm-btn:hover { background: rgba(139, 10, 26, 0.07); }

/* ON 상태: 상단 루비 라인 */
.nav-bgm-btn::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #cc1a2a, transparent);
  opacity: 0;
  transition: opacity 0.4s;
}
.nav-bgm-btn.active::after { opacity: 1; }

/* ── 다이아몬드 보석 ── */
.bgm-gem-wrap {
  position: relative;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.bgm-gem {
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: var(--text-dim, #9a8a70);
  transition: background 0.4s, box-shadow 0.4s;
}
.nav-bgm-btn.active .bgm-gem {
  background: #cc1a2a;
  box-shadow: 0 0 6px #cc1a2a, 0 0 16px rgba(204,26,42,0.5);
}
.bgm-gem-glow {
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  border: 1px solid rgba(204,26,42,0.4);
  opacity: 0;
  transition: opacity 0.4s;
}
.nav-bgm-btn.active .bgm-gem-glow {
  opacity: 1;
  animation: bgm-gem-pulse 2s ease-in-out infinite;
}
@keyframes bgm-gem-pulse {
  0%,100% { transform: translate(-50%,-50%) rotate(45deg) scale(1);   opacity: 0.7; }
  50%     { transform: translate(-50%,-50%) rotate(45deg) scale(1.6); opacity: 0; }
}

/* ── 음파 바 4개 ── */
.bgm-bars {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 20px;
}
.bgm-bar {
  display: block;
  width: 2px;
  height: 4px;
  border-radius: 1px;
  background: var(--text-dim, #9a8a70);
  transition: background 0.4s;
}
.nav-bgm-btn.active .bgm-bar { background: #cc1a2a; }

.nav-bgm-btn.active .bgm-bar:nth-child(1) { animation: bgm-wave 0.65s ease-in-out infinite alternate; animation-delay: 0.00s; }
.nav-bgm-btn.active .bgm-bar:nth-child(2) { animation: bgm-wave 0.85s ease-in-out infinite alternate; animation-delay: 0.18s; }
.nav-bgm-btn.active .bgm-bar:nth-child(3) { animation: bgm-wave 0.70s ease-in-out infinite alternate; animation-delay: 0.09s; }
.nav-bgm-btn.active .bgm-bar:nth-child(4) { animation: bgm-wave 0.90s ease-in-out infinite alternate; animation-delay: 0.27s; }

@keyframes bgm-wave {
  from { height: 3px;  opacity: 0.5; }
  to   { height: 16px; opacity: 1.0; }
}

/* ── 라벨 텍스트 ── */
.bgm-label {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.22em;
  color: var(--text-dim, #9a8a70);
  transition: color 0.4s, text-shadow 0.4s;
  white-space: nowrap;
}
.nav-bgm-btn.active .bgm-label {
  color: #cc1a2a;
  text-shadow: 0 0 8px rgba(204,26,42,0.5);
}

/* ══════════════════════════════════════
   리디아 성장 단계 탭 — 카드
══════════════════════════════════════ */
.card-stage-tabs {
  position: absolute;
  top: 0.55rem; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 0;
  border: 1px solid rgba(139,10,26,0.5);
  overflow: hidden;
  backdrop-filter: blur(4px);
}
.card-stage-tab {
  font-family: 'Cinzel', serif;
  font-size: 0.46rem;
  letter-spacing: 0.1em;
  padding: 0.22rem 0.55rem;
  background: rgba(4,3,2,0.75);
  border: none;
  border-right: 1px solid rgba(139,10,26,0.4);
  color: var(--text-dim, #9a8a70);
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
  white-space: nowrap;
}
.card-stage-tab:last-child { border-right: none; }
.card-stage-tab:hover { background: rgba(139,10,26,0.2); color: var(--chisel, #c8baa0); }
.card-stage-tab.active {
  background: rgba(139,10,26,0.45);
  color: #fff;
}

/* ══════════════════════════════════════
   리디아 성장 단계 탭 — 모달
══════════════════════════════════════ */
.modal-stage-tabs {
  position: absolute;
  top: 0.7rem; right: 0.7rem;
  z-index: 10;
  display: flex;
  gap: 0;
  border: 1px solid rgba(139,10,26,0.5);
  overflow: hidden;
}
.modal-stage-tab {
  font-family: 'Cinzel', serif;
  font-size: 0.54rem;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.85rem;
  background: rgba(4,3,2,0.8);
  border: none;
  border-right: 1px solid rgba(139,10,26,0.4);
  color: var(--text-dim, #9a8a70);
  cursor: pointer;
  transition: background 0.25s, color 0.25s;
  white-space: nowrap;
}
.modal-stage-tab:last-child { border-right: none; }
.modal-stage-tab:hover { background: rgba(139,10,26,0.25); color: #ddd; }
.modal-stage-tab.active {
  background: rgba(139,10,26,0.5);
  color: #fff;
}

/* 이미지 전환 페이드 */
.modal-portrait-img--fade {
  animation: portrait-fade 0.35s ease;
}
@keyframes portrait-fade {
  from { opacity: 0; }
  to   { opacity: 0.72; }
}

/* ══════════════════════════════════════
   뮤즈레이 본모습 토글 버튼
══════════════════════════════════════ */
.modal-true-form-btn {
  position: absolute;
  top: 0.7rem; right: 2.8rem;
  z-index: 10;
  font-family: 'Cinzel', serif;
  font-size: 0.54rem;
  letter-spacing: 0.15em;
  padding: 0.3rem 0.85rem;
  background: rgba(74,10,122,0.55);
  border: 1px solid rgba(138,42,204,0.5);
  color: rgba(200,160,255,0.9);
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  backdrop-filter: blur(4px);
  white-space: nowrap;
}
.modal-true-form-btn:hover {
  background: rgba(74,10,122,0.8);
  color: #fff;
}
.modal-true-form-btn.active {
  background: rgba(138,42,204,0.6);
  color: #fff;
  box-shadow: 0 0 12px rgba(138,42,204,0.5);
}

/* 뮤즈레이 키워드 잠금 UI */
.modal-keyword-box {
  position: absolute;
  top: 0.7rem; right: 0.7rem;
  z-index: 10;
  display: flex;
  align-items: stretch;
  border: 1px solid rgba(138,42,204,0.4);
  overflow: hidden;
  backdrop-filter: blur(4px);
}
.modal-keyword-input {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.12em;
  padding: 0.3rem 0.7rem;
  width: 110px;
  background: rgba(20,5,35,0.85);
  border: none;
  color: rgba(200,160,255,0.9);
  outline: none;
  transition: background 0.3s;
  caret-color: rgba(200,160,255,0.9);
}
.modal-keyword-input::placeholder {
  color: rgba(138,42,204,0.45);
  letter-spacing: 0.1em;
}
.modal-keyword-input.error {
  background: rgba(80,5,5,0.9);
  animation: keyword-shake 0.3s ease;
}
@keyframes keyword-shake {
  0%,100% { transform: translateX(0); }
  25%     { transform: translateX(-4px); }
  75%     { transform: translateX(4px); }
}
.modal-keyword-btn {
  padding: 0.3rem 0.6rem;
  background: rgba(74,10,122,0.7);
  border: none;
  border-left: 1px solid rgba(138,42,204,0.4);
  color: rgba(200,160,255,0.8);
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.2s, color 0.2s;
}
.modal-keyword-btn:hover {
  background: rgba(138,42,204,0.6);
  color: #fff;
}

/* 잠금 안내 힌트 */
.modal-locked-hint {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.2rem;
  padding: 0.7rem 1rem;
  border: 1px solid rgba(138,42,204,0.25);
  background: rgba(30,5,50,0.4);
  animation: locked-pulse 3s ease-in-out infinite;
}
@keyframes locked-pulse {
  0%,100% { border-color: rgba(138,42,204,0.2); }
  50%     { border-color: rgba(138,42,204,0.5); }
}
.modal-locked-icon {
  font-size: 0.85rem;
  color: rgba(138,42,204,0.7);
  flex-shrink: 0;
}
.modal-locked-hint span:last-child {
  font-family: 'Cinzel', serif;
  font-size: 0.56rem;
  letter-spacing: 0.2em;
  color: rgba(138,42,204,0.6);
}

/* ══════════════════════════════════════
   ① 카드 호버 슬라이드업
══════════════════════════════════════ */
.relic-card {
  position: relative;
  overflow: hidden;
}
.relic-body {
  position: relative;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
/* 호버 시 body 살짝 위로 */
.relic-card:hover .relic-body {
  transform: translateY(-4px);
}
/* 이름 밴드 슬라이드업 */
.relic-name-band {
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.relic-card:hover .relic-name-band {
  transform: translateY(-6px);
}
/* 이미지 살짝 줌 */
.relic-img {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
}
.relic-card:hover .relic-img {
  transform: scale(1.04) !important;
}

/* ══════════════════════════════════════
   ② 로고 이미지
══════════════════════════════════════ */
.nav-logo-img {
  height: 28px;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

/* 로딩 로고 */
.ls-logo-wrap {
  position: relative;
  width: 220px;
  height: 220px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ls-logo-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  animation: logo-spin 30s linear infinite, logo-fadein 1s ease both;
}
@keyframes logo-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes logo-fadein {
  from { opacity: 0; transform: rotate(0deg) scale(0.85); }
  to   { opacity: 1; transform: rotate(0deg) scale(1); }
}
.ls-logo-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,10,26,0.35) 0%, transparent 70%);
  animation: logo-glow-pulse 2.5s ease-in-out infinite alternate;
  z-index: 0;
}
@keyframes logo-glow-pulse {
  from { opacity: 0.5; transform: scale(0.9); }
  to   { opacity: 1;   transform: scale(1.1); }
}

/* ══════════════════════════════════════
   ③ 지역 클릭 NPC 팝업
══════════════════════════════════════ */
.region-list-item.clickable {
  cursor: pointer;
}
.region-list-item.clickable:hover {
  background: rgba(10,26,106,0.08);
}
.region-list-item.active {
  background: rgba(10,26,106,0.12);
  border-left: 2px solid #3a6aee;
}
.rli-npc-hint {
  font-size: 0.5rem;
  color: rgba(58,106,238,0.5);
  letter-spacing: 0.1em;
}

.region-popup {
  margin-top: 1.5rem;
  border: 1px solid rgba(10,26,106,0.4);
  background: rgba(4,5,16,0.9);
  overflow: hidden;
  animation: popup-in 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
@keyframes popup-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.rp-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(10,26,106,0.3);
  background: rgba(10,26,106,0.08);
}
.rp-num {
  font-family: 'Cinzel Decorative', serif;
  font-size: 1.1rem;
  color: rgba(58,106,238,0.5);
  flex-shrink: 0;
  min-width: 2rem;
}
.rp-title-block { flex: 1; }
.rp-name {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  color: var(--text-glass, #e8dcc8);
  margin-bottom: 0.15rem;
}
.rp-sub {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.68rem;
  font-style: italic;
  color: rgba(58,106,238,0.55);
}
.rp-close {
  background: transparent;
  border: 1px solid rgba(10,26,106,0.4);
  color: var(--text-dim, #9a8a70);
  width: 26px; height: 26px;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  flex-shrink: 0;
  transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
}
.rp-close:hover {
  background: rgba(139,10,26,0.2);
  color: #cc2020;
  border-color: #cc2020;
}
.rp-body {
  padding: 1.2rem 1.4rem;
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
}
.rp-desc {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.88rem;
  font-style: italic;
  color: var(--text-dim, #9a8a70);
  line-height: 1.8;
  flex: 1;
}
.rp-char-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-shrink: 0;
  width: 200px;
  border-left: 1px solid rgba(10,26,106,0.3);
  padding-left: 1.2rem;
}
.rp-char-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  object-position: top;
  border: 1px solid rgba(10,26,106,0.4);
  flex-shrink: 0;
}
.rp-char-info { flex: 1; }
.rp-char-name {
  font-family: 'Cinzel Decorative', serif;
  font-size: 0.78rem;
  color: var(--text-glass, #e8dcc8);
  margin-bottom: 0.2rem;
}
.rp-char-title {
  font-family: 'Libre Baskerville', serif;
  font-size: 0.72rem;
  font-style: italic;
  color: rgba(204,26,42,0.8);
  margin-bottom: 0.2rem;
}
.rp-char-trait {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 0.1em;
  color: rgba(58,106,238,0.55);
  border: 1px solid rgba(10,26,106,0.3);
  padding: 0.08rem 0.3rem;
  display: inline-block;
}
.rp-no-char {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.15em;
  color: rgba(58,106,238,0.3);
  padding-left: 1rem;
  border-left: 1px solid rgba(10,26,106,0.2);
}

/* ══════════════════════════════════════
   ⑥ 인트로 타이핑 오버레이
══════════════════════════════════════ */
.intro-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.9s ease;
}
.intro-overlay.out {
  opacity: 0;
  pointer-events: none;
}
.intro-lines {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  text-align: center;
}
.intro-line {
  font-family: 'Cinzel Decorative', serif;
  font-size: clamp(1.1rem, 3.5vw, 2.2rem);
  color: rgba(200,186,160,0.35);
  letter-spacing: 0.12em;
  min-height: 1.4em;
  transition: color 0.6s ease;
}
.intro-line.done {
  color: rgba(200,186,160,0.15);
}
.intro-line:last-child {
  color: rgba(200,186,160,0.75);
}
.intro-cursor {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background: rgba(204,26,42,0.8);
  margin-left: 3px;
  vertical-align: middle;
  animation: cursor-blink 0.7s step-end infinite;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* ══════════════════════════════════════
   lead-overlay (납 격자) 완전 제거
══════════════════════════════════════ */
.lead-overlay {
  display: none !important;
}

/* ══════════════════════════════════════
   이미지 보정 — 카드 썸네일 & 모달 초상화
══════════════════════════════════════ */

/* 카드 패널 — 1216x832 (3:2) 비율에 맞게 */
.relic-glass-panel {
  aspect-ratio: 3 / 2 !important;
  background: #0a0806 !important;
  overflow: hidden;
  position: relative;
}
.relic-img {
  position: absolute !important;
  inset: 0;
  z-index: 1 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center top !important;
  opacity: 1 !important;
  display: block !important;
}
.relic-glass-bg { display: none !important; }
.relic-glass-icon { display: none !important; }
.relic-glass-overlay { display: none !important; }

/* 모달 초상화 — 더 크게, 비율 맞게 */
.modal-portrait-glass {
  aspect-ratio: 3 / 2 !important;
  max-height: 460px !important;
  width: 100% !important;
  background: #0a0806 !important;
  overflow: hidden;
  position: relative;
}
.modal-portrait-img {
  position: absolute !important;
  inset: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center top !important;
  opacity: 1 !important;
}
.modal-portrait-img--fade {
  animation: portrait-fade 0.35s ease;
}
@keyframes portrait-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
`,Vd=[{letter:"🔴",title:"저주의 역사",text:"500년 전 시작된 원인불명의 저주. 망자와 소실이 세계를 잠식하며 문명이 점차 붕괴되었다. 인류는 멸망을 향해 나아가고 있다.",tag:"Historia",color:"var(--ruby-l)",bg:"rgba(139,10,26,0.12)",wide:!1},{letter:"🔵",title:"소실(消失)",text:"인간이 죽거나 정체성을 잃을 정도의 정신적 충격을 얻을 시 괴물로 변이하는 현상. 오직 인간만이 소실의 대상이 된다.",tag:"Maledicta",color:"var(--sapphire-l)",bg:"rgba(10,26,106,0.12)",wide:!1},{letter:"🟡",title:"망자(亡者)",text:"소실로 인해 괴물화된 존재. 인간만이 망자가 되며 다른 종족은 이 저주에서 자유롭다. 단 하나의 예외가 존재한다.",tag:"Mortalis",color:"var(--amber-l)",bg:"rgba(122,74,0,0.12)",wide:!1},{letter:"🟣",title:"희망의 조각",text:"소유자의 심장에 새겨지는 다섯 개의 신성한 결정체. 제단에 바치기 위해선 소유자의 심장을 도려내거나 소유자 그 자체를 희생해야 한다.",tag:"Spes",color:"var(--violet-l)",bg:"rgba(74,10,122,0.12)",wide:!1},{letter:"🟢",title:"희망이 선택한 자",text:"결코 망자가 되지 않는 특별한 존재. 단, 망자가 본능적으로 이끌리는 운명을 타고난다. 축복인지 저주인지는 그 자신도 알 수 없다.",tag:"Electus",color:"var(--emerald-l)",bg:"rgba(10,74,26,0.12)",wide:!1},{letter:"⭕",title:"모든 절망의 근원",text:"태생부터 망자인 유일한 존재. 지성을 가지고 있으며, 그녀가 성장할수록 세상의 망자가 더욱 강해진다고 전해진다. 루멘의 협곡에서 태어났다.",tag:"Origo",color:"var(--ruby-l)",bg:"rgba(80,5,15,0.18)",wide:!1}],$d=[{name:"원소 마법",desc:"불, 물, 바람, 대지를 다루는 원초적 힘. 마나를 지닌 인간이라면 누구나 후천적 학습으로 습득 가능하다."},{name:"저주 마법",desc:"500년 전 비탄에서 흘러나온 타락한 마법. 현재는 극소수의 마법사만이 제어할 수 있다."},{name:"신성 마법",desc:"희망의 조각에서 흘러나오는 정화의 빛. 소유자만이 온전히 사용할 수 있다."},{name:"망자 마법",desc:"죽음과 생의 경계에서 피어나는 금기의 주술. 아스테리아 탑에 그 기록이 남아있다."},{name:"근원의 불꽃",desc:"오닉시아만이 사용하는 고대의 화염. 망자조차 완전히 소멸시키는 힘을 지닌다."},{name:"일식 마법",desc:"달의 어둠과 태양의 빛을 동시에 다루는 엘라의 독자 마법 체계."}],Ou=[{num:"I",name:"희망의 제단",sub:"Altar of Hope",npc:"최종 목적지",npcId:null,desc:"만년설 산맥 정상. 세계의 저주를 끝낼 수 있는 유일한 장소. 세 가지 방법 중 하나를 선택해야 한다.",cx:50,cy:10},{num:"II",name:"침묵의 숲, 에델가르드",sub:"Edelgard — Forest of Silence",npc:"요정 아이린",npcId:"irin",desc:"안개가 정신을 갉아먹어 소실을 유도하는 울창한 숲. 나무와 융합된 망자들이 도사리고 있다.",cx:12,cy:45},{num:"III",name:"잿빛 성벽 도시, 루인하르트",sub:"Ruinhart — Ashen Walled City",npc:"왕 카라",npcId:"kara",desc:"과거 왕국의 수도. 지금은 도박장과 시체가 뒤섞인 타락한 도시. 지하수로에는 반인반괴들이 숨어 산다.",cx:50,cy:50},{num:"IV",name:"깊은 수면의 항구, 타르토스",sub:"Tartos — Port of Deep Sleep",npc:"해적 선장 루베란",npcId:"luveran",desc:"짙은 안개 속 저주받은 항구. 유령선들이 검푸른 바다를 표류한다. 한때 왕국의 주요 무역항이었다.",cx:50,cy:85},{num:"V",name:"지식과 절망의 탑, 아스테리아",sub:"Asteria — Tower of Wisdom",npc:"마탑주 엘라",npcId:"ella",desc:"검게 오염된 마법 수정이 가득한 무너진 마탑. 소수의 마법사만 살아남아 있다.",cx:50,cy:18},{num:"VI",name:"재와 먼지의 협곡, 루멘",sub:"Canyon of Lumen",npc:"리디아의 출생지",npcId:"lydia",desc:"회색 재로 뒤덮인 과거의 처형장. 하늘은 항상 잿빛 구름으로 가려진다. 곳곳에 망자가 존재한다.",cx:88,cy:50},{num:"VII",name:"마지막 용의 둥지",sub:"Nest of the Last Dragon",npc:"최후의 용 오닉시아",npcId:"onixia",desc:"지하 깊숙이 불과 용암이 흐르는 동굴. 이 세계 마지막 용이 세상의 멸망을 지켜보고 있다.",cx:88,cy:18}],Qd=[{cls:"rg-god",g:"✦",kr:"신흔(神痕)",en:"Godmark",desc:"세계 자체에 영향을 주는 전투력. 400년에 한 번 나오는 수준이다.",ex:["오닉시아","그란디우스"]},{cls:"rg-mad",g:"⚔",kr:"광흔(狂痕)",en:"Madmark",desc:"인간의 한계를 아득히 넘어선 수준. 동급 간의 전투에서 주변 지형이 변형될 정도의 여파가 발생한다.",ex:["아이린","엘라","카라","이레니아","아르카엘"]},{cls:"rg-crack",g:"◆",kr:"열흔(裂痕)",en:"Crackmark",desc:"한계를 넘어선 경험이 육체에 새겨진 수준. 이 등급부터 고유한 전투 스타일이 확립된다.",ex:["루베란"]},{cls:"rg-deep",g:"▣",kr:"심흔(深痕)",en:"Deepmark",desc:"실전 경험이 충분히 쌓인 수준. 숙련된 용병 또는 기사의 수준이다.",ex:["정예 기사단"]},{cls:"rg-carve",g:"▪",kr:"각흔(刻痕)",en:"Carvemark",desc:"기본적인 전투 훈련을 마친 수준. 하급 병사의 수준. 이 세계에서 각흔만으로는 오래 살기 힘들다.",ex:["리디아","일반 병사","순례자"]},{cls:"rg-none",g:"○",kr:"무흔(無痕)",en:"Markless",desc:"전투 경험이 없거나 극히 미미한 수준. 이 세계에서 무흔으로 살아남는 것 자체가 기적이다.",ex:["일반 시민"]}],Po=[{id:"lydia",name:"리디아",nameEn:"Lydia",title:"모든 절망의 근원",rank:"각흔",rankCls:"rg-carve",rankColor:"#2e4050",species:"망자",gender:"여성",birth:"825.02.11 / 루멘의 협곡",app:"검은 머리카락(붉은 가닥), 잿빛 눈동자",ability:"공허의 노래 · 검은 피 · 절망의 화신 · 이름 없는 검 · 망자 조종",abilityDesc:"그녀가 숨 쉬는 것만으로 주변 현실이 붕괴되고 소실이 가속화된다. 검은 피를 조종해 공격하며 초인적 재생 능력을 가진다. 위기 시 거대한 검은 그림자 혹은 날개 달린 천사 형상으로 변이한다.",personality:"유년기: 두려움·의존·죄책감·순수함. 청소년기: 불안정·독점욕·방어적. 성인기: 헌신·초월·냉혹함.",lore:"태생부터 망자인 유일한 존재. 어떠한 인간과의 경험도 없이 루멘의 협곡에서만 지냈다. 그녀가 성장할수록 세상의 망자가 더 강해진다.",traits:["태생 망자","성장형 위협","유일한 지성 망자"],hopeShard:null,icon:"💀",glassColor:"rgba(80,5,15,0.55)",type:"주요 등장인물",stages:[{key:"child",label:"유년기",thumbFile:"lydia_child_thumb.webp",fullFile:"lydia_child_full.webp",personality:"두려움·의존·죄책감·순수함. 세상을 처음 마주한 눈빛."},{key:"teen",label:"청소년기",thumbFile:"lydia_teen_thumb.webp",fullFile:"lydia_teen_full.webp",personality:"불안정·독점욕·방어적. 감정의 균열이 시작된다."},{key:"adult",label:"성인기",thumbFile:"lydia_thumb.webp",fullFile:"lydia_full.webp",personality:"헌신·초월·냉혹함. 절망 그 자체가 된 존재."}]},{id:"irin",name:"아이린",nameEn:"Airin",title:"에델가르드의 최후 요정",rank:"광흔",rankCls:"rg-mad",rankColor:"#8a0f0f",species:"요정",gender:"여성",birth:"300.04.18 / 에델가르드",app:"초록색 머리카락, 검은색 눈동자, 초록색 날개",ability:"숲의 주인",abilityDesc:"강력한 치유 및 정화 능력. 식물을 급속 성장시켜 조종하거나 방어벽을 만든다.",personality:"광기·자기방어적·책임감. 오랜 세월 홀로 지내다 인간과 망자의 구분이 흐려졌다.",lore:"에델가르드에서 살며 숲에 오는 모든 존재를 공격한다. 내면 깊숙이 책임감을 간직하고 있다.",traits:["고독한 수호자","광기와 책임"],hopeShard:"믿음",icon:"🌿",glassColor:"rgba(5,40,10,0.55)",type:"주요 등장인물"},{id:"ella",name:"엘라",nameEn:"Ella",title:"아스테리아 마탑의 주인",rank:"광흔",rankCls:"rg-mad",rankColor:"#8a0f0f",species:"인간",gender:"여성",birth:"791.10.29 / 아스테리아",app:"흰색 긴 머리카락, 분홍색 눈동자, 눈가의 화상 흉터",ability:"일식(日蝕)",abilityDesc:"달에 해당하는 부분은 칠흑 같은 어둠의 광선을, 태양에 해당하는 부분은 태우는 마법을 사용한다.",personality:"외면: 무기질적, 지식만 추구. 내면: 죄책감·자기혐오·억압된 보호본능. 타인의 위중한 부상 시 속내가 드러난다.",lore:"망자가 된 제자들을 직접 죽인 경험으로 감정을 닫고 제자를 받지 않는다. 눈가의 화상은 그 제자의 공격에 의한 것이다.",traits:["냉철한 지성","억압된 죄책감"],hopeShard:"지혜",icon:"🔮",glassColor:"rgba(20,10,50,0.55)",type:"주요 등장인물"},{id:"kara",name:"카라",nameEn:"Kara",title:"그란디아 왕국의 왕",rank:"광흔",rankCls:"rg-mad",rankColor:"#8a0f0f",species:"인간",gender:"여성",birth:"781.12.18 / 루인하르트",app:"노란색 땋은 단발머리, 푸른색 눈동자",ability:"운명의 검",abilityDesc:"푸른빛이 검을 두르며, 망자는 닿는 것만으로도 타버리는 화염을 내뿜는다. 대검 '백야의 기적' 소지.",personality:"정의감·책임감·과묵·기사도. 존댓말, 딱딱하고 권위 있는 어조.",lore:"왕국이 망해가는 상황에서도 루인하르트를 지키며 최악을 막기 위해 노력한다.",traits:["절대 책임","꺾이지 않는 의지"],hopeShard:"의지",icon:"👑",glassColor:"rgba(5,15,50,0.55)",type:"주요 등장인물"},{id:"luveran",name:"루베란",nameEn:"Luveran",title:"타르토스의 해적 선장",rank:"열흔",rankCls:"rg-crack",rankColor:"#3e5870",species:"인간",gender:"여성",birth:"784.06.21 / 타르토스",app:"붉은색 긴 머리카락, 푸른색 눈동자, 오른쪽 눈 안대",ability:"바다의 축복",abilityDesc:"수중 호흡 가능. 깊은 바다에서 자유롭게 활동. 바다를 일부 조종하며 치유 및 해독 능력도 가진다.",personality:"외면: 광기·쾌락주의. 내면: 반복된 실패로 형성된 회피형 성격. 반말, 무례하고 가벼운 어조.",lore:"거대 선박 '나그라파'의 선장. 과거 해적이었다. 겉으로는 막나가는 척하지만 스스로의 한계를 깊이 의식한다.",traits:["거친 생존력","회피형 내면"],hopeShard:"투지",icon:"⚓",glassColor:"rgba(5,25,50,0.55)",type:"주요 등장인물"},{id:"onixia",name:"오닉시아",nameEn:"Onixia",title:"세계 마지막 용",rank:"신흔",rankCls:"rg-god",rankColor:"#8a6010",species:"용",gender:"여성",birth:"15.03.20",app:"인간형: 검은 긴 머리, 붉은 눈동자 / 용형: 검은 비늘·날개·꼬리, 붉은 눈동자",ability:"근원의 불꽃",abilityDesc:"모든 것을 태우는 검붉은 용염. 망자조차 완전히 소멸시킬 수 있다. 불꽃을 생명의 에너지로 전환하는 치유도 가능하다.",personality:"고고함·초연함·모성애·지혜·고독. 인간에 대한 연민과 체념, 그리고 내면의 마지막 희망.",lore:"희망의 제단과 저주를 끝내는 방법을 아는 유일한 존재. 둥지에서 '희망이 선택한 자'를 기다리고 있다.",traits:["고대의 지혜","세계의 마지막 증인"],hopeShard:"자애",icon:"🐉",glassColor:"rgba(50,20,0,0.55)",type:"주요 등장인물"},{id:"muzeley",name:"뮤즈레이",nameEn:"Muzeley",title:"방랑하는 상인",rank:"측정불가",rankCls:"",rankColor:"#888",species:"불명",gender:"여성",birth:"814.09.14 (자칭)",app:"보라색 머리카락, 금빛 눈동자",ability:"거래술",abilityDesc:"세계 각지를 돌아다니며 물건을 사고판다. 항상 공정해 보이지만 묘하게 찝찝한 뒷맛을 남긴다.",personality:"쾌활·밝음·친절함·낙천적. 항상 웃는 얼굴. 반말, 밝고 경쾌한 어조.",lore:"왕국 전역을 돌아다니는 떠돌이 상인. 정확한 나이나 출신지를 아는 이가 없다.",traits:["알 수 없는 미소","묘한 존재감"],hopeShard:null,icon:"🎭",glassColor:"rgba(30,5,50,0.55)",type:"주요 등장인물",trueForm:{thumbFile:"muzeley_true_thumb.webp",fullFile:"muzeley_true_full.webp",label:"지배자 형태"},hiddenData:{species:"지배자",app:"인간 형태: 보라색 머리카락, 금빛 눈동자 / 지배자 형태: 십자가 눈동자, 빛과 어둠의 거대한 날개",ability:"메리 수",abilityDesc:"현실을 개변하는 능력. 이 세계 자체를 창조하고 뒤틀 수 있다. 희망의 제단에서 의식이 거행되는 순간 본색을 드러내며, 원하지 않는 결말은 원래의 절망으로 되돌려버린다.",personality:"외면: 쾌활·밝음·친절함·낙천적·긍정적. 항상 웃는 얼굴. 내면: 쾌락주의·사이코패스·잔혹함. 반말, 밝고 경쾌한 어조, 감탄사와 의성어를 자주 섞음.",lore:"이 세계의 모든 비극을 만든 장본인. 평소에는 떠돌이 상인으로 무능력자인 척 왕국을 돌아다니지만, 실체는 세계를 창조하고 멀리서 비극을 즐기는 존재다. 리디아를 창조한 것도 단순히 극단적인 불행을 보기 위해서였다.",traits:["세계의 창조자","관찰하는 자","모든 비극의 기원"]}}],Lo=[{id:"grandius",name:"그란디우스",nameEn:"Grandius",title:"마지막 왕",rank:"신흔",rankCls:"rg-god",rankColor:"#8a6010",species:"망자",gender:"남성",birth:"루인하르트",app:"거대한 갑주를 입은 왕의 형상",ability:"타락한 운명의 검",abilityDesc:"카라의 '운명의 검'과 유사하나 검붉은 색. 망자가 아닌 살아있는 인간을 대상으로 한다.",personality:"실패한 집념으로 망자화되었다.",lore:"최초로 제단 의식을 치르려 했으나 실패한 왕. 실패의 집념이 그를 망자로 만든 비극적 존재다.",traits:["실패한 집념","왕국의 마지막 숨결"],hopeShard:null,icon:"👁",glassColor:"rgba(50,20,0,0.55)",type:"망자 등장인물"},{id:"pilgrim",name:"순례자",nameEn:"Pilgrim",title:"방랑형 망자",rank:"각흔~열흔",rankCls:"rg-carve",rankColor:"#2e4050",species:"망자",gender:"불명",birth:"루멘의 협곡",app:"회색 재로 뒤덮인 인간형",ability:"개체마다 상이",abilityDesc:"각 개체마다 서로 다른 능력을 지닌다. 무엇이 나타날지 알 수 없다는 점이 더욱 위험하다.",personality:"이성 소실. 목적지를 잃었으나 발걸음만은 멈추지 않는다.",lore:"루멘의 협곡에서 출몰하는 망자들. 재에 뒤덮여 협곡의 일부처럼 보인다.",traits:["잃어버린 목적","루멘의 협곡"],hopeShard:null,icon:"🧟",glassColor:"rgba(20,20,20,0.55)",type:"망자 등장인물"},{id:"drowned",name:"익사자",nameEn:"Drowned",title:"수중형 망자",rank:"각흔~열흔",rankCls:"rg-carve",rankColor:"#2e4050",species:"망자",gender:"불명",birth:"타르토스",app:"검푸른 피부, 갑각류 기생",ability:"수중 압도적 기동력",abilityDesc:"수중에서 압도적인 기동력. 타르토스의 바다를 전장으로 삼는다.",personality:"이성 소실. 선원이었던 흔적만 남아있다.",lore:"과거 타르토스 선원들이 망자화된 존재. 바다 속을 자유롭게 유영하며 항구를 봉쇄한다.",traits:["수중 공포","타르토스의 지배자"],hopeShard:null,icon:"🌊",glassColor:"rgba(5,15,40,0.55)",type:"망자 등장인물"},{id:"failure",name:"실패자",nameEn:"Failure",title:"탑의 부품",rank:"심흔~열흔",rankCls:"rg-deep",rankColor:"#6a4e18",species:"망자",gender:"불명",birth:"아스테리아",app:"육체가 보라색 마법 수정과 융합",ability:"각종 마법",abilityDesc:"생전에 익힌 마법들을 타락한 형태로 사용한다. 수정 융합 육체로 물리 공격이 통하지 않기도 한다.",personality:"이성 소실. 탑의 구조물과 일부 융합된 상태.",lore:"저주의 압박을 견디지 못하고 망자가 된 마법사들. 보라색 수정과 육체가 융합되었다.",traits:["탑의 구조물","엘라의 트라우마"],hopeShard:null,icon:"💜",glassColor:"rgba(30,5,50,0.55)",type:"망자 등장인물"},{id:"assimilator",name:"동화자",nameEn:"Assimilator",title:"숲의 일부",rank:"각흔~열흔",rankCls:"rg-carve",rankColor:"#2e4050",species:"망자",gender:"불명",birth:"에델가르드",app:"인간이 나무줄기와 융합된 형태",ability:"뿌리 공격",abilityDesc:"평소에는 나무처럼 완전히 정지해 있다가, 생자가 일정 거리 접근 시 뿌리로 공격한다.",personality:"이성 완전 소실. 나무와의 경계가 없다.",lore:"에델가르드의 안개에 정신을 잃고 나무와 융합된 망자들. 일반 나무와 구분이 불가능하다.",traits:["위장 매복","식물 융합체"],hopeShard:null,icon:"🌳",glassColor:"rgba(5,30,5,0.55)",type:"망자 등장인물"},{id:"irenia",name:"이레니아",nameEn:"Irenia",title:"절망의 기사",rank:"광흔",rankCls:"rg-mad",rankColor:"#8a0f0f",species:"망자 기사",gender:"여성",birth:"500년 전",app:"칠흑의 갑주, 틈새로 검붉은 빛, 등 뒤에 부서진 검은 날개 형상",ability:"절망의 영역",abilityDesc:"일정 반경 내 모든 움직임을 감지한다. 갑주를 분해하여 검은 가시나 쇠사슬로 공격한다.",personality:"자아의 잔재가 남아 전투 중 동요하거나 멈추는 순간이 있다.",lore:"500년 전 왕국 최강의 기사. 이성의 편린이 남아있어 스스로를 증오하면서도 멈추지 못한다.",traits:["왕국 최강의 잔영","남은 자아의 비극"],hopeShard:null,icon:"⚔",glassColor:"rgba(50,5,5,0.55)",type:"망자 등장인물"},{id:"arcael",name:"아르카엘",nameEn:"Arcael",title:"거짓된 심판자",rank:"광흔",rankCls:"rg-mad",rankColor:"#8a0f0f",species:"망자 처형자",gender:"남성",birth:"500년 전",app:"검붉은 쇠사슬로 꿰매진 육체, 검은 처형자 예복, 피로 물든 금빛 왕관, 검붉은 안개가 망토 형상",ability:"사형 선고",abilityDesc:"선고를 받은 대상은 속도가 현저히 저하되고 상처가 자연 치유되지 않는다. 거대한 낫을 소지한다.",personality:"이성 왜곡. 망자와 인간 구분 없이 처형한다.",lore:"500년 전 왕국의 처형자. 루인하르트와 루멘의 협곡 사이를 돌아다니며 모든 것을 처형한다.",traits:["처형의 본능","무차별 심판"],hopeShard:null,icon:"☠",glassColor:"rgba(40,5,5,0.55)",type:"망자 등장인물"}],Kd=[{name:"믿음",en:"Faith",holder:"아이린",quote:"의심하지 않는 자만이 진실에 닿는다",c1:"#3e1575",c2:"rgba(25,5,55,0.95)",glass:"rgba(45,10,90,0.12)"},{name:"지혜",en:"Wisdom",holder:"엘라",quote:"아는 자는 두려움을 이길 수 있다",c1:"#102080",c2:"rgba(5,10,55,0.95)",glass:"rgba(10,20,90,0.12)"},{name:"의지",en:"Will",holder:"카라",quote:"꺾이지 않는 자에게 절망은 스승이 된다",c1:"#804e10",c2:"rgba(45,20,0,0.95)",glass:"rgba(90,50,0,0.1)"},{name:"투지",en:"Fortitude",holder:"루베란",quote:"살아남는 것, 그것이 곧 승리다",c1:"#106050",c2:"rgba(3,35,28,0.95)",glass:"rgba(5,70,45,0.1)"},{name:"자애",en:"Benevolence",holder:"오닉시아",quote:"수천 년의 사랑은 세계보다 깊다",c1:"#805210",c2:"rgba(45,25,0,0.95)",glass:"rgba(100,55,0,0.1)"}];function Gd({onEnter:d}){const[_,h]=te.useState(!1);return te.useEffect(()=>{const K=setTimeout(()=>{h(!0),setTimeout(()=>d(""),1200)},1800);return()=>clearTimeout(K)},[d]),a.jsxs("div",{className:`ls${_?" out":""}`,children:[a.jsxs("div",{className:"ls-logo-wrap",children:[a.jsx("img",{src:"/characters/로고.png",alt:"로고",className:"ls-logo-img"}),a.jsx("div",{className:"ls-logo-glow"})]}),a.jsx("div",{className:"ls-title",children:"다크판타지 속 아이를 주웠다"}),a.jsx("div",{className:"ls-sub",children:"Made by Kunio"}),a.jsxs("div",{className:"ls-divider",children:[a.jsx("div",{className:"ls-div-line"}),a.jsx("div",{className:"ls-div-gem"}),a.jsx("div",{className:"ls-div-line r"})]}),a.jsx("div",{className:"ls-credit",children:"다크판타지 속 아이를 주웠다 · Made by Kunio"})]})}function Yd({userName:d,bgmOn:_,onToggleBgm:h}){const K=[{href:"#world",label:"세계관"},{href:"#regions",label:"지역"},{href:"#combat",label:"전투력"},{href:"#characters",label:"인물"},{href:"#hope",label:"희망의 조각"}];return a.jsxs("nav",{className:"nav",children:[a.jsxs("div",{className:"nav-logo-pane",children:[a.jsx("img",{src:"/characters/로고.webp",alt:"로고",className:"nav-logo-img",onError:C=>{C.currentTarget.style.display="none"}}),a.jsx("div",{className:"nav-logo-text",children:"다크판타지 속 아이를 주웠다"})]}),a.jsx("ul",{className:"nav-links",children:K.map(C=>a.jsx("li",{children:a.jsx("a",{href:C.href,children:C.label})},C.href))}),a.jsxs("div",{className:"nav-right-pane",children:[d&&a.jsxs("div",{className:"nav-user",children:["◆ ",d]}),a.jsxs("button",{type:"button",className:`nav-bgm-btn${_?" active":""}`,onClick:h,title:_?"BGM 끄기":"BGM 켜기","aria-label":_?"BGM 끄기":"BGM 켜기",children:[a.jsxs("span",{className:"bgm-gem-wrap",children:[a.jsx("span",{className:"bgm-gem"}),a.jsx("span",{className:"bgm-gem-glow"})]}),a.jsxs("span",{className:"bgm-bars",children:[a.jsx("span",{className:"bgm-bar"}),a.jsx("span",{className:"bgm-bar"}),a.jsx("span",{className:"bgm-bar"}),a.jsx("span",{className:"bgm-bar"})]}),a.jsx("span",{className:"bgm-label",children:_?"BGM ON":"BGM OFF"})]})]})]})}function Xd(){return a.jsxs("section",{className:"hero",id:"hero",children:[a.jsx("div",{className:"hero-arch-bg"}),a.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 40% at 50% 30%, rgba(90,6,16,0.14) 0%, transparent 65%)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 30% 25% at 20% 70%, rgba(6,14,66,0.06) 0%, transparent 60%)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",top:0,left:"25%",bottom:0,width:"1px",background:"rgba(12,12,12,0.9)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",top:0,left:"75%",bottom:0,width:"1px",background:"rgba(12,12,12,0.9)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:"1px",background:"rgba(12,12,12,0.6)",pointerEvents:"none"}}),a.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:"1px",background:"rgba(12,12,12,0.6)",pointerEvents:"none"}}),a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-glass-badge",children:[a.jsx("div",{className:"hero-gem-sm"}),"세계관 소개",a.jsx("div",{className:"hero-gem-sm"})]}),a.jsxs("h1",{className:"hero-title",children:["다크판타지 속",a.jsx("br",{}),a.jsx("span",{className:"accent",children:"아이를 주웠다"})]}),a.jsx("div",{className:"hero-title-sub",children:"Made by Kunio"}),a.jsxs("p",{className:"hero-verse",children:[a.jsx("strong",{children:"희망이 선택한 자는"}),a.jsx("br",{}),a.jsx("em",{children:"모든 절망의 근원을 주웠다"})]}),a.jsxs("div",{className:"hero-cta",children:[a.jsx("a",{href:"#world",className:"glass-btn glass-btn-ruby",children:"⬧ 세계관 탐험하기"}),a.jsx("a",{href:"#characters",className:"glass-btn glass-btn-dark",children:"등장인물 보기"})]})]})]})}function Zd(){return a.jsx("div",{className:"glass-section world-section",id:"world",style:{"--section-accent":"rgba(90,6,16,0.35)","--section-accent-l":"#8a0f1a"},children:a.jsxs("div",{className:"gs-inner",children:[a.jsxs("div",{className:"lancet-header reveal",children:[a.jsx("div",{className:"lh-line"}),a.jsxs("div",{className:"lh-center",children:[a.jsx("span",{className:"lh-eyebrow",children:"Lore Codex"}),a.jsx("h2",{className:"lh-title",children:"그란디아 왕국"}),a.jsx("div",{className:"lh-subtitle",children:"저주받은 세계의 기록"})]}),a.jsx("div",{className:"lh-line r"})]}),a.jsx("div",{className:"lore-mosaic reveal",children:Vd.map((d,_)=>a.jsxs("div",{className:`lore-tile${d.wide?" wide":""}`,style:{"--tile-color":d.bg,"--gem-color":d.color},children:[a.jsx("div",{className:"lore-tile-gem",style:{"--gem-color":d.color,background:d.color,boxShadow:`0 0 8px ${d.color}`}}),a.jsx("div",{className:"lore-tile-title",children:d.title}),a.jsx("p",{className:"lore-tile-text",children:d.text}),a.jsx("span",{className:"lore-tile-tag",children:d.tag})]},_))}),a.jsx("div",{className:"glass-table-wrap reveal",children:a.jsxs("table",{className:"glass-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"마법 계통"}),a.jsx("th",{children:"설명"})]})}),a.jsx("tbody",{children:$d.map((d,_)=>a.jsxs("tr",{children:[a.jsx("td",{children:d.name}),a.jsx("td",{children:d.desc})]},_))})]})})]})})}function qd(){const h=[[50,50,50,10],[50,50,12,45],[50,50,88,50],[50,50,50,85],[50,50,50,18],[12,45,18,10],[50,18,88,18]],K=[...Po,...Lo],[C,U]=te.useState(null),[W,H]=te.useState(null),T=b=>{if(U(b),b.npcId){const A=K.find(R=>R.id===b.npcId)??null;H(A)}else H(null)};return a.jsx(a.Fragment,{children:a.jsx("div",{className:"glass-section",id:"regions",style:{"--section-accent":"rgba(10,26,106,0.5)","--section-accent-l":"#3a6aee"},children:a.jsxs("div",{className:"gs-inner",children:[a.jsxs("div",{className:"lancet-header reveal",children:[a.jsx("div",{className:"lh-line",style:{background:"linear-gradient(90deg, transparent, rgba(10,26,106,0.5))"}}),a.jsxs("div",{className:"lh-center",children:[a.jsx("span",{className:"lh-eyebrow",style:{color:"#3a6aee"},children:"Atlas Mundi"}),a.jsx("h2",{className:"lh-title",children:"저주받은 대륙"}),a.jsx("div",{className:"lh-subtitle",children:"그란디아 대륙의 7개 지역 — 지역을 클릭하면 관련 인물을 확인할 수 있습니다"})]}),a.jsx("div",{className:"lh-line r",style:{background:"linear-gradient(90deg, rgba(10,26,106,0.5), transparent)"}})]}),a.jsxs("div",{className:"atlas-glass reveal",children:[a.jsx("div",{className:"atlas-map-pane",children:a.jsxs("svg",{className:"atlas-map-svg",viewBox:"0 0 400 380",style:{cursor:"pointer"},children:[[20,40,60,80].map(b=>a.jsxs("g",{children:[a.jsx("line",{x1:400*b/100,y1:"0",x2:400*b/100,y2:380,stroke:"#141414",strokeWidth:"1",strokeDasharray:"4,8"}),a.jsx("line",{x1:"0",y1:380*b/100,x2:400,y2:380*b/100,stroke:"#141414",strokeWidth:"1",strokeDasharray:"4,8"})]},b)),h.map(([b,A,R,D],ce)=>a.jsx("line",{x1:400*b/100,y1:380*A/100,x2:400*R/100,y2:380*D/100,stroke:"rgba(10,26,106,0.3)",strokeWidth:"1",strokeDasharray:"5,5"},ce)),Ou.map((b,A)=>{const R=400*b.cx/100,D=380*b.cy/100,ce=b.num==="III",re=(C==null?void 0:C.num)===b.num;return a.jsxs("g",{onClick:()=>T(b),style:{cursor:"pointer"},children:[re&&a.jsx("circle",{cx:R,cy:D,r:"22",fill:"none",stroke:"rgba(58,106,238,0.5)",strokeWidth:"1.5"}),ce?a.jsx("circle",{cx:R,cy:D,r:re?16:14,fill:re?"rgba(139,10,26,0.9)":"rgba(139,10,26,0.7)",stroke:re?"#ff4444":"#cc2020",strokeWidth:"2"}):a.jsx("rect",{x:R-7,y:D-7,width:"14",height:"14",fill:re?"rgba(58,106,238,0.8)":"rgba(10,26,106,0.5)",stroke:re?"#88aaff":"#3a6aee",strokeWidth:"1.5",transform:`rotate(45 ${R} ${D})`}),a.jsx("text",{x:R,y:D+(b.cy>50?-20:22),textAnchor:"middle",fill:ce?"#cc2020":"rgba(58,106,238,0.7)",fontSize:"11",fontFamily:"Cinzel, serif",letterSpacing:"0.05em",children:b.name.split(",")[0].split(" ").slice(-1)[0].slice(0,5)})]},A)}),a.jsx("text",{x:"370",y:"20",fill:"rgba(139,10,26,0.3)",fontSize:"9",fontFamily:"Cinzel,serif",children:"N"})]})}),a.jsx("div",{className:"atlas-entries-pane",children:Ou.map((b,A)=>a.jsxs("div",{className:`region-list-item${(C==null?void 0:C.num)===b.num?" active":""}${b.npcId?" clickable":""}`,onClick:()=>T(b),children:[a.jsx("div",{className:"rli-num",children:b.num}),a.jsxs("div",{className:"rli-body",children:[a.jsx("div",{className:"rli-name",children:b.name}),a.jsx("div",{className:"rli-desc",children:b.desc}),a.jsxs("div",{className:"rli-npc",children:["⚔ ",b.npc,b.npcId&&a.jsx("span",{className:"rli-npc-hint",children:" · 클릭하여 확인"})]})]})]},A))})]}),C&&a.jsxs("div",{className:"region-popup reveal visible",children:[a.jsxs("div",{className:"rp-header",children:[a.jsx("span",{className:"rp-num",children:C.num}),a.jsxs("div",{className:"rp-title-block",children:[a.jsx("div",{className:"rp-name",children:C.name}),a.jsx("div",{className:"rp-sub",children:C.sub})]}),a.jsx("button",{type:"button",className:"rp-close",onClick:()=>{U(null),H(null)},children:"✕"})]}),a.jsxs("div",{className:"rp-body",children:[a.jsx("p",{className:"rp-desc",children:C.desc}),W&&a.jsxs("div",{className:"rp-char-row",onClick:()=>{},children:[a.jsx("img",{src:`/characters/${W.id}_thumb.webp`,alt:W.name,className:"rp-char-img",onError:b=>{b.currentTarget.style.display="none"}}),a.jsxs("div",{className:"rp-char-info",children:[a.jsx("div",{className:"rp-char-name",children:W.name}),a.jsx("div",{className:"rp-char-title",children:W.title}),a.jsx("div",{className:"rp-char-trait",children:W.traits[0]})]})]}),!W&&a.jsx("div",{className:"rp-no-char",children:"⊠ 연결된 인물 기록 없음"})]})]})]})})})}function Jd(){return a.jsx("div",{className:"glass-section",id:"combat",style:{"--section-accent":"rgba(122,74,0,0.5)","--section-accent-l":"#e08a00"},children:a.jsxs("div",{className:"gs-inner",children:[a.jsxs("div",{className:"lancet-header reveal",children:[a.jsx("div",{className:"lh-line",style:{background:"linear-gradient(90deg, transparent, rgba(122,74,0,0.5))"}}),a.jsxs("div",{className:"lh-center",children:[a.jsx("span",{className:"lh-eyebrow",style:{color:"#e08a00"},children:"Gradus Bellum"}),a.jsx("h2",{className:"lh-title",children:"전투력 체계"}),a.jsx("div",{className:"lh-subtitle",children:"흔적으로 새겨진 힘의 서열"})]}),a.jsx("div",{className:"lh-line r",style:{background:"linear-gradient(90deg, rgba(122,74,0,0.5), transparent)"}})]}),a.jsx("div",{className:"rank-glass-grid reveal",children:Qd.map((d,_)=>a.jsxs("div",{className:`rank-glass-row ${d.cls}`,children:[a.jsxs("div",{className:"rgr-left",children:[a.jsx("div",{className:"rgr-glyph",children:d.g}),a.jsx("div",{className:"rgr-name",children:d.kr}),a.jsx("div",{className:"rgr-en",children:d.en})]}),a.jsxs("div",{className:"rgr-right",children:[a.jsx("p",{className:"rgr-desc",children:d.desc}),a.jsx("div",{className:"rgr-tags",children:d.ex.map((h,K)=>a.jsx("span",{className:"rgr-tag",children:h},K))})]})]},_))})]})})}function ef({char:d,onClick:_}){var A;const K={"rg-god":"#c8941a","rg-mad":"#cc2020","rg-crack":"#7090b0","rg-deep":"#9a7a30","rg-carve":"#4a6878","":"#888"}[d.rankCls]??"#888",C=d.type==="망자 등장인물",U=d.stages?d.stages[d.stages.length-1]:null,[W,H]=te.useState((U==null?void 0:U.key)??""),T=((A=d.stages)==null?void 0:A.find(R=>R.key===W))??U,b=T?`/characters/${T.thumbFile}`:`/characters/${d.id}_thumb.webp`;return a.jsxs("div",{className:"relic-card reveal",onClick:()=>_(d),role:"button",tabIndex:0,onKeyDown:R=>R.key==="Enter"&&_(d),children:[a.jsxs("div",{className:"relic-glass-panel",children:[a.jsx("img",{src:b,alt:d.name,className:"relic-img",onError:R=>{R.currentTarget.style.display="none"},loading:"lazy"}),d.stages&&a.jsx("div",{className:"card-stage-tabs",onClick:R=>R.stopPropagation(),children:d.stages.map(R=>a.jsx("button",{type:"button",className:`card-stage-tab${W===R.key?" active":""}`,onClick:D=>{D.stopPropagation(),H(R.key)},children:R.label},R.key))}),a.jsx("div",{className:"relic-type-badge",style:{color:C?"rgba(106,42,106,0.9)":"rgba(204,26,42,0.9)",borderColor:C?"rgba(106,42,106,0.5)":"rgba(204,26,42,0.4)"},children:C?"망자":"등장인물"}),a.jsxs("div",{className:"relic-name-band",children:[a.jsx("div",{className:"relic-char-name",children:d.name}),d.rank!=="측정불가"&&a.jsx("div",{className:"relic-rank-badge",style:{color:K},children:d.rank})]})]}),a.jsxs("div",{className:"relic-body",children:[a.jsx("div",{className:"relic-title",children:d.title}),a.jsxs("div",{className:"relic-meta",children:[a.jsx("span",{className:"relic-meta-item",children:d.species}),a.jsx("span",{className:"relic-meta-item",children:d.gender})]}),a.jsx("div",{className:"relic-lead-rule"}),a.jsxs("div",{className:"relic-skill-name",children:["⬧ ",d.ability]}),a.jsx("div",{className:"relic-skill-desc",children:d.abilityDesc.length>80?d.abilityDesc.slice(0,80)+"...":d.abilityDesc}),a.jsx("div",{className:"relic-traits",children:d.traits.map((R,D)=>a.jsx("span",{className:"relic-trait",children:R},D))}),d.hopeShard&&a.jsxs("div",{className:"relic-hope",children:["◈ 희망의 조각 「",d.hopeShard,"」"]})]})]})}function nf({char:d,onClose:_}){var Re;if(!d)return null;const K={"rg-god":"#3a2a08","rg-mad":"#380606","rg-crack":"#1c2830","rg-deep":"#2e200a","rg-carve":"#181e20","":"#222"}[d.rankCls]??"#222",C=d.stages?d.stages[d.stages.length-1]:null,[U,W]=te.useState((C==null?void 0:C.key)??""),H=((Re=d.stages)==null?void 0:Re.find(B=>B.key===U))??C,[T,b]=te.useState(!1),[A,R]=te.useState(""),[D,ce]=te.useState(!1),[re,J]=te.useState(!1),q=()=>{A.trim()==="메리 수"?(J(!0),b(!0),ce(!1)):(ce(!0),setTimeout(()=>ce(!1),1200))},Ge=H?`/characters/${H.fullFile}`:T&&d.trueForm?`/characters/${d.trueForm.fullFile}`:`/characters/${d.id}_full.webp`,Ye=H?H.personality:d.personality;return a.jsx("div",{className:"modal-glass-bg",onClick:_,role:"button",tabIndex:0,onKeyDown:B=>B.key==="Escape"&&_(),children:a.jsxs("div",{className:"modal-glass-frame",onClick:B=>B.stopPropagation(),children:[a.jsx("button",{type:"button",className:"modal-close-btn",onClick:_,children:"✕"}),a.jsxs("div",{className:"modal-portrait-glass",children:[a.jsx("img",{src:Ge,alt:d.name,className:"modal-portrait-img modal-portrait-img--fade",onError:B=>{B.currentTarget.style.display="none"},loading:"lazy"},Ge),a.jsx("div",{className:"modal-portrait-grad"}),d.stages&&a.jsx("div",{className:"modal-stage-tabs",children:d.stages.map(B=>a.jsx("button",{type:"button",className:`modal-stage-tab${U===B.key?" active":""}`,onClick:()=>W(B.key),children:B.label},B.key))}),d.trueForm&&(re?a.jsx("button",{type:"button",className:`modal-true-form-btn${T?" active":""}`,onClick:()=>b(B=>!B),children:T?"◈ 지배자 형태":"◇ 지배자 형태"}):a.jsxs("div",{className:"modal-keyword-box",children:[a.jsx("input",{type:"text",className:`modal-keyword-input${D?" error":""}`,placeholder:"??? 입력...",value:A,onChange:B=>R(B.target.value),onKeyDown:B=>B.key==="Enter"&&q(),onClick:B=>B.stopPropagation(),maxLength:10}),a.jsx("button",{type:"button",className:"modal-keyword-btn",onClick:B=>{B.stopPropagation(),q()},children:"⊢"})]})),a.jsxs("div",{className:"modal-portrait-info",children:[a.jsx("div",{className:"modal-char-name",children:d.name}),a.jsx("div",{className:"modal-char-title",children:d.trueForm&&T?d.trueForm.label:d.title})]})]}),a.jsx("div",{className:"modal-body-content",children:d.hiddenData&&!re?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-stats-grid",children:[a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"종족"}),d.species]}),a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"성별"}),d.gender]}),a.jsxs("div",{className:"mstat full",children:[a.jsx("strong",{children:"출생"}),d.birth]}),a.jsxs("div",{className:"mstat full",style:{gridColumn:"1/-1"},children:[a.jsx("strong",{children:"외형"}),d.app]})]}),a.jsxs("div",{className:"modal-sec-label",children:["⬧ ",d.ability]}),a.jsx("p",{className:"modal-text",children:d.abilityDesc}),a.jsx("div",{className:"modal-sec-label",children:"성격 · 말투"}),a.jsx("p",{className:"modal-text",children:d.personality}),a.jsx("div",{className:"modal-sec-label",children:"기록"}),a.jsx("p",{className:"modal-text",children:d.lore}),a.jsx("div",{className:"modal-trait-row",children:d.traits.map((B,Se)=>a.jsx("span",{className:"modal-trait",children:B},Se))}),a.jsxs("div",{className:"modal-locked-hint",children:[a.jsx("span",{className:"modal-locked-icon",children:"⊠"}),a.jsx("span",{children:"이 인물의 진실은 봉인되어 있습니다"})]})]}):d.hiddenData&&re?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-stats-grid",children:[a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"종족"}),d.hiddenData.species]}),a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"성별"}),d.gender]}),a.jsxs("div",{className:"mstat full",children:[a.jsx("strong",{children:"출생"}),d.birth]}),a.jsxs("div",{className:"mstat full",style:{gridColumn:"1/-1"},children:[a.jsx("strong",{children:"외형"}),d.hiddenData.app]})]}),a.jsxs("div",{className:"modal-sec-label",children:["⬧ ",d.hiddenData.ability]}),a.jsx("p",{className:"modal-text",children:d.hiddenData.abilityDesc}),a.jsx("div",{className:"modal-sec-label",children:"성격 · 말투"}),a.jsx("p",{className:"modal-text",children:d.hiddenData.personality}),a.jsx("div",{className:"modal-sec-label",children:"기록"}),a.jsx("p",{className:"modal-text",children:d.hiddenData.lore}),a.jsx("div",{className:"modal-trait-row",children:d.hiddenData.traits.map((B,Se)=>a.jsx("span",{className:"modal-trait",children:B},Se))})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"modal-stats-grid",children:[a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"종족"}),d.species]}),a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"성별"}),d.gender]}),a.jsxs("div",{className:"mstat full",children:[a.jsx("strong",{children:"출생"}),d.birth]}),d.rank!=="측정불가"&&a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{children:"등급"}),a.jsx("span",{style:{color:K},children:d.rank})]}),d.hopeShard&&a.jsxs("div",{className:"mstat",children:[a.jsx("strong",{style:{color:"#0e5a22"},children:"조각"}),a.jsxs("span",{style:{color:"#0e5a22"},children:["「",d.hopeShard,"」"]})]}),a.jsxs("div",{className:`mstat${!d.hopeShard&&d.rank==="측정불가"?" full":""}`,style:{gridColumn:"1/-1"},children:[a.jsx("strong",{children:"외형"}),d.app]})]}),a.jsxs("div",{className:"modal-sec-label",children:["⬧ ",d.ability]}),a.jsx("p",{className:"modal-text",children:d.abilityDesc}),a.jsx("div",{className:"modal-sec-label",children:"성격 · 말투"}),a.jsx("p",{className:"modal-text",children:Ye}),a.jsx("div",{className:"modal-sec-label",children:"기록"}),a.jsx("p",{className:"modal-text",children:d.lore}),a.jsx("div",{className:"modal-trait-row",children:d.traits.map((B,Se)=>a.jsx("span",{className:"modal-trait",children:B},Se))})]})})]})})}function tf(){const[d,_]=te.useState("all"),[h,K]=te.useState("all"),[C,U]=te.useState(null),W=[{id:"all",label:"전체"},{id:"main",label:"주요 등장인물"},{id:"undead",label:"망자 등장인물"}],H=[{id:"all",label:"전체"},{id:"신흔",label:"신흔"},{id:"광흔",label:"광흔"},{id:"열흔",label:"열흔"},{id:"심흔",label:"심흔+"},{id:"각흔",label:"각흔"},{id:"측정불가",label:"불가"}];let T=d==="all"?[...Po,...Lo]:d==="main"?Po:Lo;return h!=="all"&&(T=T.filter(b=>b.rank.includes(h))),te.useEffect(()=>{const b=setTimeout(()=>{document.querySelectorAll(".relic-card.reveal:not(.visible)").forEach(A=>{A.classList.add("visible")})},50);return()=>clearTimeout(b)},[d,h]),a.jsxs("div",{className:"glass-section chars-section",id:"characters",style:{"--section-accent":"rgba(6,46,14,0.4)","--section-accent-l":"#0e5a22"},children:[a.jsxs("div",{className:"gs-inner",children:[a.jsxs("div",{className:"lancet-header reveal",children:[a.jsx("div",{className:"lh-line",style:{background:"linear-gradient(90deg, transparent, rgba(6,46,14,0.4))"}}),a.jsxs("div",{className:"lh-center",children:[a.jsx("span",{className:"lh-eyebrow",style:{color:"#0e5a22"},children:"Bestiarum Vocabulum"}),a.jsx("h2",{className:"lh-title",children:"등장인물"}),a.jsx("div",{className:"lh-subtitle",children:"절망 속에서 이름을 새긴 자들의 기록"})]}),a.jsx("div",{className:"lh-line r",style:{background:"linear-gradient(90deg, rgba(6,46,14,0.4), transparent)"}})]}),a.jsx("div",{className:"char-filter-row",onClick:b=>b.stopPropagation(),children:W.map(b=>a.jsx("button",{type:"button",className:`filter-glass-btn${d===b.id?" active":""}`,onClick:A=>{A.stopPropagation(),_(b.id),K("all"),U(null)},children:b.label},b.id))}),a.jsx("div",{className:"rank-filter-row-g",onClick:b=>b.stopPropagation(),children:H.map(b=>a.jsx("button",{type:"button",className:`rank-fg${h===b.id?" active":""}`,onClick:A=>{A.stopPropagation(),K(b.id),U(null)},children:b.label},b.id))}),a.jsx("div",{className:"char-reliquary",children:T.length===0?a.jsx("div",{className:"char-empty-state",children:"해당 조건에 맞는 인물이 없습니다."}):T.map(b=>a.jsx(ef,{char:b,onClick:U},b.id))})]}),C&&a.jsx(nf,{char:C,onClose:()=>U(null)})]})}function rf(){return a.jsx("div",{className:"glass-section hope-section",id:"hope",style:{"--section-accent":"rgba(46,6,80,0.4)","--section-accent-l":"#5a1590"},children:a.jsxs("div",{className:"gs-inner",children:[a.jsxs("div",{className:"lancet-header reveal",children:[a.jsx("div",{className:"lh-line",style:{background:"linear-gradient(90deg, transparent, rgba(46,6,80,0.4))"}}),a.jsxs("div",{className:"lh-center",children:[a.jsx("span",{className:"lh-eyebrow",style:{color:"#5a1590"},children:"Fragmenta Spei"}),a.jsx("h2",{className:"lh-title",children:"희망의 조각"}),a.jsx("div",{className:"lh-subtitle",children:"세계의 마지막 빛 다섯 조각"})]}),a.jsx("div",{className:"lh-line r",style:{background:"linear-gradient(90deg, rgba(46,6,80,0.4), transparent)"}})]}),a.jsx("div",{className:"hope-glass-grid reveal",children:Kd.map((d,_)=>a.jsxs("div",{className:"hope-glass-col",style:{"--hope-glass":d.glass,"--hope-accent":d.c1,"--hope-color":`radial-gradient(circle at 30% 25%, ${d.c1}, ${d.c2})`},children:[a.jsxs("div",{className:"hope-lancet",style:{"--hope-color":`radial-gradient(circle at 30% 25%, ${d.c1}cc, ${d.c2})`,animationDelay:`${_*.5}s`},children:[a.jsx("div",{className:"hope-lancet-inner",style:{background:`radial-gradient(circle at 30% 25%, ${d.c1}cc, ${d.c2})`}}),a.jsx("div",{className:"hope-lancet-frame"})]}),a.jsxs("div",{className:"hope-shard-name",style:{color:d.c1},children:["「",d.name,"」"]}),a.jsx("div",{className:"hope-shard-en",children:d.en}),a.jsx("div",{className:"hope-shard-holder",children:d.holder}),a.jsxs("div",{className:"hope-shard-quote",style:{color:d.c1},children:['"',d.quote,'"']})]},_))}),a.jsxs("div",{className:"hope-altar reveal",children:[a.jsx("div",{className:"hope-altar-bar"}),a.jsxs("div",{className:"hope-altar-body",children:[a.jsx("div",{className:"hope-altar-title",children:"희망의 제단 — 세 가지 선택"}),a.jsxs("p",{className:"hope-altar-text",children:["제단에 오른 자에게는 세 가지 방법이 주어진다.",a.jsx("br",{}),a.jsx("em",{children:"「희망이 선택한 자」의 희생"}),"—",a.jsx("br",{}),a.jsx("em",{children:"「모든 절망의 근원」의 희생"}),"—",a.jsx("br",{}),a.jsx("em",{children:"혹은 다섯 희망의 조각을 제물로 바치는 것."}),a.jsx("br",{}),a.jsx("br",{}),"어떤 선택을 하든, 세계는 영원히 바뀐다."]})]})]})]})})}function lf(){return a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"footer-pane",children:[a.jsx("div",{className:"footer-title",children:"다크판타지 속 아이를 주웠다"}),a.jsx("div",{className:"footer-sub",children:'"희망이 선택한 자는, 모든 절망의 근원을 주웠다"'})]}),a.jsx("div",{className:"footer-divider-v"}),a.jsx("div",{className:"footer-pane",children:a.jsx("div",{className:"footer-credit",children:"Made by Kunio"})}),a.jsx("div",{className:"footer-divider-v"}),a.jsx("div",{className:"footer-pane",children:a.jsxs("p",{className:"footer-info",children:["500년의 저주가 세계를 갉아먹는다.",a.jsx("br",{}),"희망의 불꽃은 꺼지지 않았다."]})})]})}const _o=["500년전 시작된 원인불명의 저주","희망이 선택한 자는","모든 절망의 근원을 주웠다."];function of({onDone:d}){const[_,h]=te.useState(0),[K,C]=te.useState(0),[U,W]=te.useState(!1);return te.useEffect(()=>{const H=_o[_];if(K<H.length){const b=setTimeout(()=>C(A=>A+1),65);return()=>clearTimeout(b)}if(_<_o.length-1){const b=setTimeout(()=>{h(A=>A+1),C(0)},700);return()=>clearTimeout(b)}const T=setTimeout(()=>{W(!0),setTimeout(d,900)},1200);return()=>clearTimeout(T)},[K,_,d]),a.jsx("div",{className:`intro-overlay${U?" out":""}`,children:a.jsx("div",{className:"intro-lines",children:_o.slice(0,_+1).map((H,T)=>a.jsxs("div",{className:`intro-line${T<_?" done":""}`,children:[T<_?H:H.slice(0,K),T===_&&a.jsx("span",{className:"intro-cursor"})]},T))})})}function af(){const[d,_]=te.useState(!1),[h,K]=te.useState(!1),[C,U]=te.useState(""),[W,H]=te.useState(!1),T=te.useRef(null),b=te.useCallback(D=>{U(D),K(!0)},[]),A=te.useCallback(()=>{_(!0),K(!1)},[]);te.useEffect(()=>{if(!d)return;const D=T.current;D&&(D.volume=.35,D.loop=!0,D.play().then(()=>H(!0)).catch(()=>{}))},[d]);const R=te.useCallback(()=>{const D=T.current;D&&(W?(D.pause(),H(!1)):D.play().then(()=>H(!0)).catch(()=>{}))},[W]);return te.useEffect(()=>{if(!d)return;const D=new IntersectionObserver(re=>re.forEach(J=>{J.isIntersecting&&J.target.classList.add("visible")}),{threshold:.06}),ce=setTimeout(()=>document.querySelectorAll(".reveal").forEach(re=>D.observe(re)),100);return()=>{clearTimeout(ce),D.disconnect()}},[d]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Hd}),a.jsx("style",{children:Wd}),a.jsx("audio",{ref:T,src:"/bgm.mp3",preload:"auto"}),!d&&!h&&a.jsx(Gd,{onEnter:b}),h&&a.jsx(of,{onDone:A}),d&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"lead-overlay"}),a.jsx("div",{className:"vignette"}),a.jsx(Yd,{userName:C,bgmOn:W,onToggleBgm:R}),a.jsxs("main",{children:[a.jsx(Xd,{}),a.jsx(Zd,{}),a.jsx(qd,{}),a.jsx(Jd,{}),a.jsx(tf,{}),a.jsx(rf,{})]}),a.jsx(lf,{})]})]})}Ad.createRoot(document.getElementById("root")).render(a.jsx(te.StrictMode,{children:a.jsx(af,{})}));
