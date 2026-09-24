(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))d(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const S of w.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&d(S)}).observe(document,{childList:!0,subtree:!0});function a(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(m){if(m.ep)return;m.ep=!0;const w=a(m);fetch(m.href,w)}})();function ah(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var zs={exports:{}},ri={},Ps={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function ch(){if(id)return ne;id=1;var l=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),S=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),B=Symbol.iterator;function q(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function Q(x,k,Z){this.props=x,this.context=k,this.refs=W,this.updater=Z||se}Q.prototype.isReactComponent={},Q.prototype.setState=function(x,k){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,k,"setState")},Q.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function me(){}me.prototype=Q.prototype;function ce(x,k,Z){this.props=x,this.context=k,this.refs=W,this.updater=Z||se}var re=ce.prototype=new me;re.constructor=ce,K(re,Q.prototype),re.isPureReactComponent=!0;var z=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function D(x,k,Z){var J,le={},ie=null,ue=null;if(k!=null)for(J in k.ref!==void 0&&(ue=k.ref),k.key!==void 0&&(ie=""+k.key),k)X.call(k,J)&&!_.hasOwnProperty(J)&&(le[J]=k[J]);var ae=arguments.length-2;if(ae===1)le.children=Z;else if(1<ae){for(var xe=Array(ae),Ee=0;Ee<ae;Ee++)xe[Ee]=arguments[Ee+2];le.children=xe}if(x&&x.defaultProps)for(J in ae=x.defaultProps,ae)le[J]===void 0&&(le[J]=ae[J]);return{$$typeof:l,type:x,key:ie,ref:ue,props:le,_owner:U.current}}function ve(x,k){return{$$typeof:l,type:x.type,key:k,ref:x.ref,props:x.props,_owner:x._owner}}function Pe(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function oe(x){var k={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Z){return k[Z]})}var _e=/\/+/g;function Se(x,k){return typeof x=="object"&&x!==null&&x.key!=null?oe(""+x.key):k.toString(36)}function Ve(x,k,Z,J,le){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var ue=!1;if(x===null)ue=!0;else switch(ie){case"string":case"number":ue=!0;break;case"object":switch(x.$$typeof){case l:case c:ue=!0}}if(ue)return ue=x,le=le(ue),x=J===""?"."+Se(ue,0):J,z(le)?(Z="",x!=null&&(Z=x.replace(_e,"$&/")+"/"),Ve(le,k,Z,"",function(Ee){return Ee})):le!=null&&(Pe(le)&&(le=ve(le,Z+(!le.key||ue&&ue.key===le.key?"":(""+le.key).replace(_e,"$&/")+"/")+x)),k.push(le)),1;if(ue=0,J=J===""?".":J+":",z(x))for(var ae=0;ae<x.length;ae++){ie=x[ae];var xe=J+Se(ie,ae);ue+=Ve(ie,k,Z,xe,le)}else if(xe=q(x),typeof xe=="function")for(x=xe.call(x),ae=0;!(ie=x.next()).done;)ie=ie.value,xe=J+Se(ie,ae++),ue+=Ve(ie,k,Z,xe,le);else if(ie==="object")throw k=String(x),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return ue}function qe(x,k,Z){if(x==null)return x;var J=[],le=0;return Ve(x,J,"","",function(ie){return k.call(Z,ie,le++)}),J}function Qe(x){if(x._status===-1){var k=x._result;k=k(),k.then(function(Z){(x._status===0||x._status===-1)&&(x._status=1,x._result=Z)},function(Z){(x._status===0||x._status===-1)&&(x._status=2,x._result=Z)}),x._status===-1&&(x._status=0,x._result=k)}if(x._status===1)return x._result.default;throw x._result}var ye={current:null},T={transition:null},F={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:T,ReactCurrentOwner:U};function P(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:qe,forEach:function(x,k,Z){qe(x,function(){k.apply(this,arguments)},Z)},count:function(x){var k=0;return qe(x,function(){k++}),k},toArray:function(x){return qe(x,function(k){return k})||[]},only:function(x){if(!Pe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},ne.Component=Q,ne.Fragment=a,ne.Profiler=m,ne.PureComponent=ce,ne.StrictMode=d,ne.Suspense=b,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=P,ne.cloneElement=function(x,k,Z){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var J=K({},x.props),le=x.key,ie=x.ref,ue=x._owner;if(k!=null){if(k.ref!==void 0&&(ie=k.ref,ue=U.current),k.key!==void 0&&(le=""+k.key),x.type&&x.type.defaultProps)var ae=x.type.defaultProps;for(xe in k)X.call(k,xe)&&!_.hasOwnProperty(xe)&&(J[xe]=k[xe]===void 0&&ae!==void 0?ae[xe]:k[xe])}var xe=arguments.length-2;if(xe===1)J.children=Z;else if(1<xe){ae=Array(xe);for(var Ee=0;Ee<xe;Ee++)ae[Ee]=arguments[Ee+2];J.children=ae}return{$$typeof:l,type:x.type,key:le,ref:ie,props:J,_owner:ue}},ne.createContext=function(x){return x={$$typeof:S,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:w,_context:x},x.Consumer=x},ne.createElement=D,ne.createFactory=function(x){var k=D.bind(null,x);return k.type=x,k},ne.createRef=function(){return{current:null}},ne.forwardRef=function(x){return{$$typeof:L,render:x}},ne.isValidElement=Pe,ne.lazy=function(x){return{$$typeof:V,_payload:{_status:-1,_result:x},_init:Qe}},ne.memo=function(x,k){return{$$typeof:G,type:x,compare:k===void 0?null:k}},ne.startTransition=function(x){var k=T.transition;T.transition={};try{x()}finally{T.transition=k}},ne.unstable_act=P,ne.useCallback=function(x,k){return ye.current.useCallback(x,k)},ne.useContext=function(x){return ye.current.useContext(x)},ne.useDebugValue=function(){},ne.useDeferredValue=function(x){return ye.current.useDeferredValue(x)},ne.useEffect=function(x,k){return ye.current.useEffect(x,k)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(x,k,Z){return ye.current.useImperativeHandle(x,k,Z)},ne.useInsertionEffect=function(x,k){return ye.current.useInsertionEffect(x,k)},ne.useLayoutEffect=function(x,k){return ye.current.useLayoutEffect(x,k)},ne.useMemo=function(x,k){return ye.current.useMemo(x,k)},ne.useReducer=function(x,k,Z){return ye.current.useReducer(x,k,Z)},ne.useRef=function(x){return ye.current.useRef(x)},ne.useState=function(x){return ye.current.useState(x)},ne.useSyncExternalStore=function(x,k,Z){return ye.current.useSyncExternalStore(x,k,Z)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var od;function na(){return od||(od=1,Ps.exports=ch()),Ps.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function uh(){if(ld)return ri;ld=1;var l=na(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function S(L,b,G){var V,B={},q=null,se=null;G!==void 0&&(q=""+G),b.key!==void 0&&(q=""+b.key),b.ref!==void 0&&(se=b.ref);for(V in b)d.call(b,V)&&!w.hasOwnProperty(V)&&(B[V]=b[V]);if(L&&L.defaultProps)for(V in b=L.defaultProps,b)B[V]===void 0&&(B[V]=b[V]);return{$$typeof:c,type:L,key:q,ref:se,props:B,_owner:m.current}}return ri.Fragment=a,ri.jsx=S,ri.jsxs=S,ri}var sd;function dh(){return sd||(sd=1,zs.exports=uh()),zs.exports}var o=dh(),wo={},Is={exports:{}},ot={},Ls={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function ph(){return ad||(ad=1,(function(l){function c(T,F){var P=T.length;T.push(F);e:for(;0<P;){var x=P-1>>>1,k=T[x];if(0<m(k,F))T[x]=F,T[P]=k,P=x;else break e}}function a(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var F=T[0],P=T.pop();if(P!==F){T[0]=P;e:for(var x=0,k=T.length,Z=k>>>1;x<Z;){var J=2*(x+1)-1,le=T[J],ie=J+1,ue=T[ie];if(0>m(le,P))ie<k&&0>m(ue,le)?(T[x]=ue,T[ie]=P,x=ie):(T[x]=le,T[J]=P,x=J);else if(ie<k&&0>m(ue,P))T[x]=ue,T[ie]=P,x=ie;else break e}}return F}function m(T,F){var P=T.sortIndex-F.sortIndex;return P!==0?P:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var S=Date,L=S.now();l.unstable_now=function(){return S.now()-L}}var b=[],G=[],V=1,B=null,q=3,se=!1,K=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(T){for(var F=a(G);F!==null;){if(F.callback===null)d(G);else if(F.startTime<=T)d(G),F.sortIndex=F.expirationTime,c(b,F);else break;F=a(G)}}function z(T){if(W=!1,re(T),!K)if(a(b)!==null)K=!0,Qe(X);else{var F=a(G);F!==null&&ye(z,F.startTime-T)}}function X(T,F){K=!1,W&&(W=!1,me(D),D=-1),se=!0;var P=q;try{for(re(F),B=a(b);B!==null&&(!(B.expirationTime>F)||T&&!oe());){var x=B.callback;if(typeof x=="function"){B.callback=null,q=B.priorityLevel;var k=x(B.expirationTime<=F);F=l.unstable_now(),typeof k=="function"?B.callback=k:B===a(b)&&d(b),re(F)}else d(b);B=a(b)}if(B!==null)var Z=!0;else{var J=a(G);J!==null&&ye(z,J.startTime-F),Z=!1}return Z}finally{B=null,q=P,se=!1}}var U=!1,_=null,D=-1,ve=5,Pe=-1;function oe(){return!(l.unstable_now()-Pe<ve)}function _e(){if(_!==null){var T=l.unstable_now();Pe=T;var F=!0;try{F=_(!0,T)}finally{F?Se():(U=!1,_=null)}}else U=!1}var Se;if(typeof ce=="function")Se=function(){ce(_e)};else if(typeof MessageChannel!="undefined"){var Ve=new MessageChannel,qe=Ve.port2;Ve.port1.onmessage=_e,Se=function(){qe.postMessage(null)}}else Se=function(){Q(_e,0)};function Qe(T){_=T,U||(U=!0,Se())}function ye(T,F){D=Q(function(){T(l.unstable_now())},F)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){K||se||(K=!0,Qe(X))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return q},l.unstable_getFirstCallbackNode=function(){return a(b)},l.unstable_next=function(T){switch(q){case 1:case 2:case 3:var F=3;break;default:F=q}var P=q;q=F;try{return T()}finally{q=P}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=q;q=T;try{return F()}finally{q=P}},l.unstable_scheduleCallback=function(T,F,P){var x=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?x+P:x):P=x,T){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=P+k,T={id:V++,callback:F,priorityLevel:T,startTime:P,expirationTime:k,sortIndex:-1},P>x?(T.sortIndex=P,c(G,T),a(b)===null&&T===a(G)&&(W?(me(D),D=-1):W=!0,ye(z,P-x))):(T.sortIndex=k,c(b,T),K||se||(K=!0,Qe(X))),T},l.unstable_shouldYield=oe,l.unstable_wrapCallback=function(T){var F=q;return function(){var P=q;q=F;try{return T.apply(this,arguments)}finally{q=P}}}})(Rs)),Rs}var cd;function fh(){return cd||(cd=1,Ls.exports=ph()),Ls.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function hh(){if(ud)return ot;ud=1;var l=na(),c=fh();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,m={};function w(e,t){S(e,t),S(e+"Capture",t)}function S(e,t){for(m[e]=t,e=0;e<t.length;e++)d.add(t[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),b=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},B={};function q(e){return b.call(B,e)?!0:b.call(V,e)?!1:G.test(e)?B[e]=!0:(V[e]=!0,!1)}function se(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,r,n){if(t===null||typeof t=="undefined"||se(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,r,n,i,s,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=u}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,ce);Q[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,ce);Q[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,ce);Q[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,n){var i=Q.hasOwnProperty(t)?Q[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,r,i,n)&&(r=null),n||i===null?q(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var z=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Pe=Symbol.for("react.provider"),oe=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),T=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var P=Object.assign,x;function k(e){if(x===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var Z=!1;function J(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=n.stack.split(`
`),u=i.length-1,p=s.length-1;1<=u&&0<=p&&i[u]!==s[p];)p--;for(;1<=u&&0<=p;u--,p--)if(i[u]!==s[p]){if(u!==1||p!==1)do if(u--,p--,0>p||i[u]!==s[p]){var f=`
`+i[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=p);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?k(e):""}function le(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case U:return"Portal";case ve:return"Profiler";case D:return"StrictMode";case Se:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case Pe:return(e._context.displayName||"Context")+".Provider";case _e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){n=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=Ee(e))}function gr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xe(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function wt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Do(e,t){var r=t.checked;return P({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function da(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ae(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pa(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function Ao(e,t){pa(e,t);var r=ae(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fo(e,t,r){(t!=="number"||wt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function Dr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ae(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return P({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ha(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(a(92));if(gn(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ae(r)}}function ma(e,t){var r=ae(t.value),n=ae(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ga(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ga(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var di,va=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(di=di||document.createElement("div"),di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yn[t]=yn[e]})});function ya(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||yn.hasOwnProperty(e)&&yn[e]?(""+t).trim():t+"px"}function wa(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=ya(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var pp=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,t){if(t){if(pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $o=null;function Vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,Ar=null,Fr=null;function ka(e){if(e=Wn(e)){if(typeof Qo!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Ri(t),Qo(e.stateNode,e.type,t))}}function ja(e){Ar?Fr?Fr.push(e):Fr=[e]:Ar=e}function Na(){if(Ar){var e=Ar,t=Fr;if(Fr=Ar=null,ka(e),t)for(e=0;e<t.length;e++)ka(t[e])}}function Sa(e,t){return e(t)}function Ca(){}var Yo=!1;function Ea(e,t,r){if(Yo)return e(t,r);Yo=!0;try{return Sa(e,t,r)}finally{Yo=!1,(Ar!==null||Fr!==null)&&(Ca(),Na())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ri(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,t,typeof r));return r}var Go=!1;if(L)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Go=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Go=!1}function fp(e,t,r,n,i,s,u,p,f){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(N){this.onError(N)}}var jn=!1,pi=null,fi=!1,Ko=null,hp={onError:function(e){jn=!0,pi=e}};function mp(e,t,r,n,i,s,u,p,f){jn=!1,pi=null,fp.apply(hp,arguments)}function xp(e,t,r,n,i,s,u,p,f){if(mp.apply(this,arguments),jn){if(jn){var y=pi;jn=!1,pi=null}else throw Error(a(198));fi||(fi=!0,Ko=y)}}function vr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(vr(e)!==e)throw Error(a(188))}function gp(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ta(i),e;if(s===n)return Ta(i),t;s=s.sibling}throw Error(a(188))}if(r.return!==n.return)r=i,n=s;else{for(var u=!1,p=i.child;p;){if(p===r){u=!0,r=i,n=s;break}if(p===n){u=!0,n=i,r=s;break}p=p.sibling}if(!u){for(p=s.child;p;){if(p===r){u=!0,r=s,n=i;break}if(p===n){u=!0,n=s,r=i;break}p=p.sibling}if(!u)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:t}function _a(e){return e=gp(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var Pa=c.unstable_scheduleCallback,Ia=c.unstable_cancelCallback,vp=c.unstable_shouldYield,yp=c.unstable_requestPaint,Ie=c.unstable_now,wp=c.unstable_getCurrentPriorityLevel,Xo=c.unstable_ImmediatePriority,La=c.unstable_UserBlockingPriority,hi=c.unstable_NormalPriority,kp=c.unstable_LowPriority,Ra=c.unstable_IdlePriority,mi=null,zt=null;function jp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Cp,Np=Math.log,Sp=Math.LN2;function Cp(e){return e>>>=0,e===0?32:31-(Np(e)/Sp|0)|0}var xi=64,gi=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,u=r&268435455;if(u!==0){var p=u&~i;p!==0?n=Nn(p):(s&=u,s!==0&&(n=Nn(s)))}else u=r&~i,u!==0?n=Nn(u):s!==0&&(n=Nn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-kt(t),i=1<<r,n|=e[r],t&=~i;return n}function Ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var u=31-kt(s),p=1<<u,f=i[u];f===-1?((p&r)===0||(p&n)!==0)&&(i[u]=Ep(p,t)):f<=t&&(e.expiredLanes|=p),s&=~p}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oa(){var e=xi;return xi<<=1,(xi&4194240)===0&&(xi=64),e}function Zo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function Tp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-kt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Jo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-kt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function Ma(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Da,el,Aa,Fa,Ba,tl=!1,yi=[],Kt=null,Xt=null,qt=null,Cn=new Map,En=new Map,Zt=[],_p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,t){switch(e){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":En.delete(t.pointerId)}}function bn(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Wn(t),t!==null&&el(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zp(e,t,r,n,i){switch(t){case"focusin":return Kt=bn(Kt,e,t,r,n,i),!0;case"dragenter":return Xt=bn(Xt,e,t,r,n,i),!0;case"mouseover":return qt=bn(qt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return Cn.set(s,bn(Cn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,En.set(s,bn(En.get(s)||null,e,t,r,n,i)),!0}return!1}function Ua(e){var t=yr(e.target);if(t!==null){var r=vr(t);if(r!==null){if(t=r.tag,t===13){if(t=ba(r),t!==null){e.blockedOn=t,Ba(e.priority,function(){Aa(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);$o=n,r.target.dispatchEvent(n),$o=null}else return t=Wn(r),t!==null&&el(t),e.blockedOn=r,!1;t.shift()}return!0}function Ha(e,t,r){wi(e)&&r.delete(t)}function Pp(){tl=!1,Kt!==null&&wi(Kt)&&(Kt=null),Xt!==null&&wi(Xt)&&(Xt=null),qt!==null&&wi(qt)&&(qt=null),Cn.forEach(Ha),En.forEach(Ha)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Pp)))}function _n(e){function t(i){return Tn(i,e)}if(0<yi.length){Tn(yi[0],e);for(var r=1;r<yi.length;r++){var n=yi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Kt!==null&&Tn(Kt,e),Xt!==null&&Tn(Xt,e),qt!==null&&Tn(qt,e),Cn.forEach(t),En.forEach(t),r=0;r<Zt.length;r++)n=Zt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Zt.length&&(r=Zt[0],r.blockedOn===null);)Ua(r),r.blockedOn===null&&Zt.shift()}var Br=z.ReactCurrentBatchConfig,ki=!0;function Ip(e,t,r,n){var i=ge,s=Br.transition;Br.transition=null;try{ge=1,rl(e,t,r,n)}finally{ge=i,Br.transition=s}}function Lp(e,t,r,n){var i=ge,s=Br.transition;Br.transition=null;try{ge=4,rl(e,t,r,n)}finally{ge=i,Br.transition=s}}function rl(e,t,r,n){if(ki){var i=nl(e,t,r,n);if(i===null)wl(e,t,n,ji,r),Wa(e,n);else if(zp(i,e,t,r,n))n.stopPropagation();else if(Wa(e,n),t&4&&-1<_p.indexOf(e)){for(;i!==null;){var s=Wn(i);if(s!==null&&Da(s),s=nl(e,t,r,n),s===null&&wl(e,t,n,ji,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else wl(e,t,n,null,r)}}var ji=null;function nl(e,t,r,n){if(ji=null,e=Vo(n),e=yr(e),e!==null)if(t=vr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ba(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ji=e,null}function $a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case Xo:return 1;case La:return 4;case hi:case kp:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var Jt=null,il=null,Ni=null;function Va(){if(Ni)return Ni;var e,t=il,r=t.length,n,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var u=r-e;for(n=1;n<=u&&t[r-n]===i[s-n];n++);return Ni=i.slice(e,1<n?1-n:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Qa(){return!1}function st(e){function t(r,n,i,s,u){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ci:Qa,this.isPropagationStopped=Qa,this}return P(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=st(Wr),zn=P({},Wr,{view:0,detail:0}),Rp=st(zn),ll,sl,Pn,Ei=P({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(ll=e.screenX-Pn.screenX,sl=e.screenY-Pn.screenY):sl=ll=0,Pn=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Ya=st(Ei),Op=P({},Ei,{dataTransfer:0}),Mp=st(Op),Dp=P({},zn,{relatedTarget:0}),al=st(Dp),Ap=P({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=st(Ap),Bp=P({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=st(Bp),Up=P({},Wr,{data:0}),Ga=st(Up),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function cl(){return Qp}var Yp=P({},zn,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cl,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gp=st(Yp),Kp=P({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=st(Kp),Xp=P({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cl}),qp=st(Xp),Zp=P({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=st(Zp),ef=P({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=st(ef),rf=[9,13,27,32],ul=L&&"CompositionEvent"in window,In=null;L&&"documentMode"in document&&(In=document.documentMode);var nf=L&&"TextEvent"in window&&!In,Xa=L&&(!ul||In&&8<In&&11>=In),qa=" ",Za=!1;function Ja(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function of(e,t){switch(e){case"compositionend":return ec(t);case"keypress":return t.which!==32?null:(Za=!0,qa);case"textInput":return e=t.data,e===qa&&Za?null:e;default:return null}}function lf(e,t){if(Ur)return e==="compositionend"||!ul&&Ja(e,t)?(e=Va(),Ni=il=Jt=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xa&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function rc(e,t,r,n){ja(n),t=Pi(t,"onChange"),0<t.length&&(r=new ol("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ln=null,Rn=null;function af(e){wc(e,0)}function bi(e){var t=Yr(e);if(gr(t))return e}function cf(e,t){if(e==="change")return t}var nc=!1;if(L){var dl;if(L){var pl="oninput"in document;if(!pl){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),pl=typeof ic.oninput=="function"}dl=pl}else dl=!1;nc=dl&&(!document.documentMode||9<document.documentMode)}function oc(){Ln&&(Ln.detachEvent("onpropertychange",lc),Rn=Ln=null)}function lc(e){if(e.propertyName==="value"&&bi(Rn)){var t=[];rc(t,Rn,e,Vo(e)),Ea(af,t)}}function uf(e,t,r){e==="focusin"?(oc(),Ln=t,Rn=r,Ln.attachEvent("onpropertychange",lc)):e==="focusout"&&oc()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Rn)}function pf(e,t){if(e==="click")return bi(t)}function ff(e,t){if(e==="input"||e==="change")return bi(t)}function hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:hf;function On(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!b.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var r=sc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=sc(r)}}function cc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=wt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=wt(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mf(e){var t=uc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&cc(r.ownerDocument.documentElement,r)){if(n!==null&&fl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=ac(r,s);var u=ac(r,n);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=L&&"documentMode"in document&&11>=document.documentMode,Hr=null,hl=null,Mn=null,ml=!1;function dc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ml||Hr==null||Hr!==wt(n)||(n=Hr,"selectionStart"in n&&fl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mn&&On(Mn,n)||(Mn=n,n=Pi(hl,"onSelect"),0<n.length&&(t=new ol("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Hr)))}function Ti(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var $r={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},xl={},pc={};L&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function _i(e){if(xl[e])return xl[e];if(!$r[e])return e;var t=$r[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in pc)return xl[e]=t[r];return e}var fc=_i("animationend"),hc=_i("animationiteration"),mc=_i("animationstart"),xc=_i("transitionend"),gc=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(e,t){gc.set(e,t),w(t,[e])}for(var gl=0;gl<vc.length;gl++){var vl=vc[gl],gf=vl.toLowerCase(),vf=vl[0].toUpperCase()+vl.slice(1);er(gf,"on"+vf)}er(fc,"onAnimationEnd"),er(hc,"onAnimationIteration"),er(mc,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(xc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function yc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,xp(n,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var u=n.length-1;0<=u;u--){var p=n[u],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==s&&i.isPropagationStopped())break e;yc(i,p,y),s=f}else for(u=0;u<n.length;u++){if(p=n[u],f=p.instance,y=p.currentTarget,p=p.listener,f!==s&&i.isPropagationStopped())break e;yc(i,p,y),s=f}}}if(fi)throw e=Ko,fi=!1,Ko=null,e}function ke(e,t){var r=t[El];r===void 0&&(r=t[El]=new Set);var n=e+"__bubble";r.has(n)||(kc(t,e,2,!1),r.add(n))}function yl(e,t,r){var n=0;t&&(n|=4),kc(r,e,n,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function An(e){if(!e[zi]){e[zi]=!0,d.forEach(function(r){r!=="selectionchange"&&(yf.has(r)||yl(r,!1,e),yl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,yl("selectionchange",!1,t))}}function kc(e,t,r,n){switch($a(t)){case 1:var i=Ip;break;case 4:i=Lp;break;default:i=rl}r=i.bind(null,t,r,e),i=void 0,!Go||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function wl(e,t,r,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(u===4)for(u=n.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;u=u.return}for(;p!==null;){if(u=yr(p),u===null)return;if(f=u.tag,f===5||f===6){n=s=u;continue e}p=p.parentNode}}n=n.return}Ea(function(){var y=s,N=Vo(r),C=[];e:{var j=gc.get(e);if(j!==void 0){var I=ol,O=e;switch(e){case"keypress":if(Si(r)===0)break e;case"keydown":case"keyup":I=Gp;break;case"focusin":O="focus",I=al;break;case"focusout":O="blur",I=al;break;case"beforeblur":case"afterblur":I=al;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=qp;break;case fc:case hc:case mc:I=Fp;break;case xc:I=Jp;break;case"scroll":I=Rp;break;case"wheel":I=tf;break;case"copy":case"cut":case"paste":I=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ka}var M=(t&4)!==0,Le=!M&&e==="scroll",g=M?j!==null?j+"Capture":null:j;M=[];for(var h=y,v;h!==null;){v=h;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=wn(h,g),E!=null&&M.push(Fn(h,E,v)))),Le)break;h=h.return}0<M.length&&(j=new I(j,O,null,r,N),C.push({event:j,listeners:M}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",j&&r!==$o&&(O=r.relatedTarget||r.fromElement)&&(yr(O)||O[Mt]))break e;if((I||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,I?(O=r.relatedTarget||r.toElement,I=y,O=O?yr(O):null,O!==null&&(Le=vr(O),O!==Le||O.tag!==5&&O.tag!==6)&&(O=null)):(I=null,O=y),I!==O)){if(M=Ya,E="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(M=Ka,E="onPointerLeave",g="onPointerEnter",h="pointer"),Le=I==null?j:Yr(I),v=O==null?j:Yr(O),j=new M(E,h+"leave",I,r,N),j.target=Le,j.relatedTarget=v,E=null,yr(N)===y&&(M=new M(g,h+"enter",O,r,N),M.target=v,M.relatedTarget=Le,E=M),Le=E,I&&O)t:{for(M=I,g=O,h=0,v=M;v;v=Vr(v))h++;for(v=0,E=g;E;E=Vr(E))v++;for(;0<h-v;)M=Vr(M),h--;for(;0<v-h;)g=Vr(g),v--;for(;h--;){if(M===g||g!==null&&M===g.alternate)break t;M=Vr(M),g=Vr(g)}M=null}else M=null;I!==null&&jc(C,j,I,M,!1),O!==null&&Le!==null&&jc(C,Le,O,M,!0)}}e:{if(j=y?Yr(y):window,I=j.nodeName&&j.nodeName.toLowerCase(),I==="select"||I==="input"&&j.type==="file")var A=cf;else if(tc(j))if(nc)A=ff;else{A=df;var H=uf}else(I=j.nodeName)&&I.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(A=pf);if(A&&(A=A(e,y))){rc(C,A,r,N);break e}H&&H(e,j,y),e==="focusout"&&(H=j._wrapperState)&&H.controlled&&j.type==="number"&&Fo(j,"number",j.value)}switch(H=y?Yr(y):window,e){case"focusin":(tc(H)||H.contentEditable==="true")&&(Hr=H,hl=y,Mn=null);break;case"focusout":Mn=hl=Hr=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,dc(C,r,N);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":dc(C,r,N)}var $;if(ul)e:{switch(e){case"compositionstart":var Y="onCompositionStart";break e;case"compositionend":Y="onCompositionEnd";break e;case"compositionupdate":Y="onCompositionUpdate";break e}Y=void 0}else Ur?Ja(e,r)&&(Y="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Y="onCompositionStart");Y&&(Xa&&r.locale!=="ko"&&(Ur||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&Ur&&($=Va()):(Jt=N,il="value"in Jt?Jt.value:Jt.textContent,Ur=!0)),H=Pi(y,Y),0<H.length&&(Y=new Ga(Y,e,null,r,N),C.push({event:Y,listeners:H}),$?Y.data=$:($=ec(r),$!==null&&(Y.data=$)))),($=nf?of(e,r):lf(e,r))&&(y=Pi(y,"onBeforeInput"),0<y.length&&(N=new Ga("onBeforeInput","beforeinput",null,r,N),C.push({event:N,listeners:y}),N.data=$))}wc(C,t)})}function Fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Pi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wn(e,r),s!=null&&n.unshift(Fn(e,s,i)),s=wn(e,t),s!=null&&n.push(Fn(e,s,i))),e=e.return}return n}function Vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,r,n,i){for(var s=t._reactName,u=[];r!==null&&r!==n;){var p=r,f=p.alternate,y=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&y!==null&&(p=y,i?(f=wn(r,s),f!=null&&u.unshift(Fn(r,f,p))):i||(f=wn(r,s),f!=null&&u.push(Fn(r,f,p)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var wf=/\r\n?/g,kf=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(wf,`
`).replace(kf,"")}function Ii(e,t,r){if(t=Nc(t),Nc(e)!==t&&r)throw Error(a(425))}function Li(){}var kl=null,jl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,jf=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Nf=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc!="undefined"?function(e){return Sc.resolve(null).then(e).catch(Sf)}:Sl;function Sf(e){setTimeout(function(){throw e})}function Cl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),_n(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);_n(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Qr,Bn="__reactProps$"+Qr,Mt="__reactContainer$"+Qr,El="__reactEvents$"+Qr,Cf="__reactListeners$"+Qr,Ef="__reactHandles$"+Qr;function yr(e){var t=e[Pt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mt]||r[Pt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Cc(e);e!==null;){if(r=e[Pt])return r;e=Cc(e)}return t}e=r,r=e.parentNode}return null}function Wn(e){return e=e[Pt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Ri(e){return e[Bn]||null}var bl=[],Gr=-1;function rr(e){return{current:e}}function je(e){0>Gr||(e.current=bl[Gr],bl[Gr]=null,Gr--)}function we(e,t){Gr++,bl[Gr]=e.current,e.current=t}var nr={},Ye=rr(nr),et=rr(!1),wr=nr;function Kr(e,t){var r=e.type.contextTypes;if(!r)return nr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Oi(){je(et),je(Ye)}function Ec(e,t,r){if(Ye.current!==nr)throw Error(a(168));we(Ye,t),we(et,r)}function bc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(a(108,ue(e)||"Unknown",i));return P({},r,n)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,wr=Ye.current,we(Ye,e),we(et,et.current),!0}function Tc(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=bc(e,t,wr),n.__reactInternalMemoizedMergedChildContext=e,je(et),je(Ye),we(Ye,e)):je(et),we(et,r)}var Dt=null,Di=!1,Tl=!1;function _c(e){Dt===null?Dt=[e]:Dt.push(e)}function bf(e){Di=!0,_c(e)}function ir(){if(!Tl&&Dt!==null){Tl=!0;var e=0,t=ge;try{var r=Dt;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Dt=null,Di=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),Pa(Xo,ir),i}finally{ge=t,Tl=!1}}return null}var Xr=[],qr=0,Ai=null,Fi=0,ft=[],ht=0,kr=null,At=1,Ft="";function jr(e,t){Xr[qr++]=Fi,Xr[qr++]=Ai,Ai=e,Fi=t}function zc(e,t,r){ft[ht++]=At,ft[ht++]=Ft,ft[ht++]=kr,kr=e;var n=At;e=Ft;var i=32-kt(n)-1;n&=~(1<<i),r+=1;var s=32-kt(t)+i;if(30<s){var u=i-i%5;s=(n&(1<<u)-1).toString(32),n>>=u,i-=u,At=1<<32-kt(t)+i|r<<i|n,Ft=s+e}else At=1<<s|r<<i|n,Ft=e}function _l(e){e.return!==null&&(jr(e,1),zc(e,1,0))}function zl(e){for(;e===Ai;)Ai=Xr[--qr],Xr[qr]=null,Fi=Xr[--qr],Xr[qr]=null;for(;e===kr;)kr=ft[--ht],ft[ht]=null,Ft=ft[--ht],ft[ht]=null,At=ft[--ht],ft[ht]=null}var at=null,ct=null,Ce=!1,Nt=null;function Pc(e,t){var r=vt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ic(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,ct=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kr!==null?{id:At,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=vt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,ct=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(Ce){var t=ct;if(t){var r=t;if(!Ic(e,t)){if(Pl(e))throw Error(a(418));t=tr(r.nextSibling);var n=at;t&&Ic(e,t)?Pc(n,r):(e.flags=e.flags&-4097|2,Ce=!1,at=e)}}else{if(Pl(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ce=!1,at=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Bi(e){if(e!==at)return!1;if(!Ce)return Lc(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=ct)){if(Pl(e))throw Rc(),Error(a(418));for(;t;)Pc(e,t),t=tr(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ct=tr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=at?tr(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=ct;e;)e=tr(e.nextSibling)}function Zr(){ct=at=null,Ce=!1}function Ll(e){Nt===null?Nt=[e]:Nt.push(e)}var Tf=z.ReactCurrentBatchConfig;function Un(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(u){var p=i.refs;u===null?delete p[s]:p[s]=u},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function Mc(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=pr(g,h),g.index=0,g.sibling=null,g}function s(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function u(g){return e&&g.alternate===null&&(g.flags|=2),g}function p(g,h,v,E){return h===null||h.tag!==6?(h=Ss(v,g.mode,E),h.return=g,h):(h=i(h,v),h.return=g,h)}function f(g,h,v,E){var A=v.type;return A===_?N(g,h,v.props.children,E,v.key):h!==null&&(h.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qe&&Oc(A)===h.type)?(E=i(h,v.props),E.ref=Un(g,h,v),E.return=g,E):(E=po(v.type,v.key,v.props,null,g.mode,E),E.ref=Un(g,h,v),E.return=g,E)}function y(g,h,v,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Cs(v,g.mode,E),h.return=g,h):(h=i(h,v.children||[]),h.return=g,h)}function N(g,h,v,E,A){return h===null||h.tag!==7?(h=zr(v,g.mode,E,A),h.return=g,h):(h=i(h,v),h.return=g,h)}function C(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ss(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case X:return v=po(h.type,h.key,h.props,null,g.mode,v),v.ref=Un(g,null,h),v.return=g,v;case U:return h=Cs(h,g.mode,v),h.return=g,h;case Qe:var E=h._init;return C(g,E(h._payload),v)}if(gn(h)||F(h))return h=zr(h,g.mode,v,null),h.return=g,h;Wi(g,h)}return null}function j(g,h,v,E){var A=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:p(g,h,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===A?f(g,h,v,E):null;case U:return v.key===A?y(g,h,v,E):null;case Qe:return A=v._init,j(g,h,A(v._payload),E)}if(gn(v)||F(v))return A!==null?null:N(g,h,v,E,null);Wi(g,v)}return null}function I(g,h,v,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,p(h,g,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return g=g.get(E.key===null?v:E.key)||null,f(h,g,E,A);case U:return g=g.get(E.key===null?v:E.key)||null,y(h,g,E,A);case Qe:var H=E._init;return I(g,h,v,H(E._payload),A)}if(gn(E)||F(E))return g=g.get(v)||null,N(h,g,E,A,null);Wi(h,E)}return null}function O(g,h,v,E){for(var A=null,H=null,$=h,Y=h=0,Ue=null;$!==null&&Y<v.length;Y++){$.index>Y?(Ue=$,$=null):Ue=$.sibling;var pe=j(g,$,v[Y],E);if(pe===null){$===null&&($=Ue);break}e&&$&&pe.alternate===null&&t(g,$),h=s(pe,h,Y),H===null?A=pe:H.sibling=pe,H=pe,$=Ue}if(Y===v.length)return r(g,$),Ce&&jr(g,Y),A;if($===null){for(;Y<v.length;Y++)$=C(g,v[Y],E),$!==null&&(h=s($,h,Y),H===null?A=$:H.sibling=$,H=$);return Ce&&jr(g,Y),A}for($=n(g,$);Y<v.length;Y++)Ue=I($,g,Y,v[Y],E),Ue!==null&&(e&&Ue.alternate!==null&&$.delete(Ue.key===null?Y:Ue.key),h=s(Ue,h,Y),H===null?A=Ue:H.sibling=Ue,H=Ue);return e&&$.forEach(function(fr){return t(g,fr)}),Ce&&jr(g,Y),A}function M(g,h,v,E){var A=F(v);if(typeof A!="function")throw Error(a(150));if(v=A.call(v),v==null)throw Error(a(151));for(var H=A=null,$=h,Y=h=0,Ue=null,pe=v.next();$!==null&&!pe.done;Y++,pe=v.next()){$.index>Y?(Ue=$,$=null):Ue=$.sibling;var fr=j(g,$,pe.value,E);if(fr===null){$===null&&($=Ue);break}e&&$&&fr.alternate===null&&t(g,$),h=s(fr,h,Y),H===null?A=fr:H.sibling=fr,H=fr,$=Ue}if(pe.done)return r(g,$),Ce&&jr(g,Y),A;if($===null){for(;!pe.done;Y++,pe=v.next())pe=C(g,pe.value,E),pe!==null&&(h=s(pe,h,Y),H===null?A=pe:H.sibling=pe,H=pe);return Ce&&jr(g,Y),A}for($=n(g,$);!pe.done;Y++,pe=v.next())pe=I($,g,Y,pe.value,E),pe!==null&&(e&&pe.alternate!==null&&$.delete(pe.key===null?Y:pe.key),h=s(pe,h,Y),H===null?A=pe:H.sibling=pe,H=pe);return e&&$.forEach(function(sh){return t(g,sh)}),Ce&&jr(g,Y),A}function Le(g,h,v,E){if(typeof v=="object"&&v!==null&&v.type===_&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var A=v.key,H=h;H!==null;){if(H.key===A){if(A=v.type,A===_){if(H.tag===7){r(g,H.sibling),h=i(H,v.props.children),h.return=g,g=h;break e}}else if(H.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qe&&Oc(A)===H.type){r(g,H.sibling),h=i(H,v.props),h.ref=Un(g,H,v),h.return=g,g=h;break e}r(g,H);break}else t(g,H);H=H.sibling}v.type===_?(h=zr(v.props.children,g.mode,E,v.key),h.return=g,g=h):(E=po(v.type,v.key,v.props,null,g.mode,E),E.ref=Un(g,h,v),E.return=g,g=E)}return u(g);case U:e:{for(H=v.key;h!==null;){if(h.key===H)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(g,h.sibling),h=i(h,v.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=Cs(v,g.mode,E),h.return=g,g=h}return u(g);case Qe:return H=v._init,Le(g,h,H(v._payload),E)}if(gn(v))return O(g,h,v,E);if(F(v))return M(g,h,v,E);Wi(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,v),h.return=g,g=h):(r(g,h),h=Ss(v,g.mode,E),h.return=g,g=h),u(g)):r(g,h)}return Le}var Jr=Mc(!0),Dc=Mc(!1),Ui=rr(null),Hi=null,en=null,Rl=null;function Ol(){Rl=en=Hi=null}function Ml(e){var t=Ui.current;je(Ui),e._currentValue=t}function Dl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function tn(e,t){Hi=e,Rl=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Rl!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(Hi===null)throw Error(a(308));en=e,Hi.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Nr=null;function Al(e){Nr===null?Nr=[e]:Nr.push(e)}function Ac(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Al(t)):(r.next=i.next,i.next=r),t.interleaved=r,Bt(e,n)}function Bt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var or=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Bt(e,r)}return i=n.interleaved,i===null?(t.next=t,Al(n)):(t.next=i.next,i.next=t),n.interleaved=t,Bt(e,r)}function $i(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Jo(e,r)}}function Bc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=u:s=s.next=u,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Vi(e,t,r,n){var i=e.updateQueue;or=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,u===null?s=y:u.next=y,u=f;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==u&&(p===null?N.firstBaseUpdate=y:p.next=y,N.lastBaseUpdate=f))}if(s!==null){var C=i.baseState;u=0,N=y=f=null,p=s;do{var j=p.lane,I=p.eventTime;if((n&j)===j){N!==null&&(N=N.next={eventTime:I,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var O=e,M=p;switch(j=t,I=r,M.tag){case 1:if(O=M.payload,typeof O=="function"){C=O.call(I,C,j);break e}C=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=M.payload,j=typeof O=="function"?O.call(I,C,j):O,j==null)break e;C=P({},C,j);break e;case 2:or=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,j=i.effects,j===null?i.effects=[p]:j.push(p))}else I={eventTime:I,lane:j,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(y=N=I,f=C):N=N.next=I,u|=j;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;j=p,p=j.next,j.next=null,i.lastBaseUpdate=j,i.shared.pending=null}}while(!0);if(N===null&&(f=C),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do u|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Er|=u,e.lanes=u,e.memoizedState=C}}function Wc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(a(191,i));i.call(n)}}}var Hn={},It=rr(Hn),$n=rr(Hn),Vn=rr(Hn);function Sr(e){if(e===Hn)throw Error(a(174));return e}function Bl(e,t){switch(we(Vn,t),we($n,e),we(It,Hn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}je(It),we(It,t)}function rn(){je(It),je($n),je(Vn)}function Uc(e){Sr(Vn.current);var t=Sr(It.current),r=Wo(t,e.type);t!==r&&(we($n,e),we(It,r))}function Wl(e){$n.current===e&&(je(It),je($n))}var be=rr(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function Hl(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var Yi=z.ReactCurrentDispatcher,$l=z.ReactCurrentBatchConfig,Cr=0,Te=null,De=null,Be=null,Gi=!1,Qn=!1,Yn=0,_f=0;function Ge(){throw Error(a(321))}function Vl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function Ql(e,t,r,n,i,s){if(Cr=s,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?Lf:Rf,e=r(n,i),Qn){s=0;do{if(Qn=!1,Yn=0,25<=s)throw Error(a(301));s+=1,Be=De=null,t.updateQueue=null,Yi.current=Of,e=r(n,i)}while(Qn)}if(Yi.current=qi,t=De!==null&&De.next!==null,Cr=0,Be=De=Te=null,Gi=!1,t)throw Error(a(300));return e}function Yl(){var e=Yn!==0;return Yn=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=e:Be=Be.next=e,Be}function xt(){if(De===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Be===null?Te.memoizedState:Be.next;if(t!==null)Be=t,De=e;else{if(e===null)throw Error(a(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Te.memoizedState=Be=e:Be=Be.next=e}return Be}function Gn(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=xt(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var n=De,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var p=u=null,f=null,y=s;do{var N=y.lane;if((Cr&N)===N)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var C={lane:N,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=C,u=n):f=f.next=C,Te.lanes|=N,Er|=N}y=y.next}while(y!==null&&y!==s);f===null?u=n:f.next=p,jt(n,t.memoizedState)||(rt=!0),t.memoizedState=n,t.baseState=u,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Te.lanes|=s,Er|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Kl(e){var t=xt(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);jt(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Hc(){}function $c(e,t){var r=Te,n=xt(),i=t(),s=!jt(n.memoizedState,i);if(s&&(n.memoizedState=i,rt=!0),n=n.queue,Xl(Yc.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,Kn(9,Qc.bind(null,r,n,i,t),void 0,null),We===null)throw Error(a(349));(Cr&30)!==0||Vc(r,t,i)}return i}function Vc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qc(e,t,r,n){t.value=r,t.getSnapshot=n,Gc(t)&&Kc(e)}function Yc(e,t,r){return r(function(){Gc(t)&&Kc(e)})}function Gc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function Kc(e){var t=Bt(e,1);t!==null&&bt(t,e,1,-1)}function Xc(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,Te,e),[t.memoizedState,e]}function Kn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function qc(){return xt().memoizedState}function Ki(e,t,r,n){var i=Lt();Te.flags|=e,i.memoizedState=Kn(1|t,r,void 0,n===void 0?null:n)}function Xi(e,t,r,n){var i=xt();n=n===void 0?null:n;var s=void 0;if(De!==null){var u=De.memoizedState;if(s=u.destroy,n!==null&&Vl(n,u.deps)){i.memoizedState=Kn(t,r,s,n);return}}Te.flags|=e,i.memoizedState=Kn(1|t,r,s,n)}function Zc(e,t){return Ki(8390656,8,e,t)}function Xl(e,t){return Xi(2048,8,e,t)}function Jc(e,t){return Xi(4,2,e,t)}function eu(e,t){return Xi(4,4,e,t)}function tu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ru(e,t,r){return r=r!=null?r.concat([e]):null,Xi(4,4,tu.bind(null,t,e),r)}function ql(){}function nu(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function iu(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Vl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ou(e,t,r){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r):(jt(r,t)||(r=Oa(),Te.lanes|=r,Er|=r,e.baseState=!0),t)}function zf(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=$l.transition;$l.transition={};try{e(!1),t()}finally{ge=r,$l.transition=n}}function lu(){return xt().memoizedState}function Pf(e,t,r){var n=ur(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},su(e))au(t,r);else if(r=Ac(e,t,r,n),r!==null){var i=Je();bt(r,e,n,i),cu(r,t,n)}}function If(e,t,r){var n=ur(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(su(e))au(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,p=s(u,r);if(i.hasEagerState=!0,i.eagerState=p,jt(p,u)){var f=t.interleaved;f===null?(i.next=i,Al(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=Ac(e,t,i,n),r!==null&&(i=Je(),bt(r,e,n,i),cu(r,t,n))}}function su(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function au(e,t){Qn=Gi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function cu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Jo(e,r)}}var qi={readContext:mt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Lf={readContext:mt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Zc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ki(4194308,4,tu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var r=Lt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Lt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Pf.bind(null,Te,e),[n.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:Xc,useDebugValue:ql,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=Xc(!1),t=e[0];return e=zf.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Te,i=Lt();if(Ce){if(r===void 0)throw Error(a(407));r=r()}else{if(r=t(),We===null)throw Error(a(349));(Cr&30)!==0||Vc(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Zc(Yc.bind(null,n,s,e),[e]),n.flags|=2048,Kn(9,Qc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Lt(),t=We.identifierPrefix;if(Ce){var r=Ft,n=At;r=(n&~(1<<32-kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Yn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_f++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rf={readContext:mt,useCallback:nu,useContext:mt,useEffect:Xl,useImperativeHandle:ru,useInsertionEffect:Jc,useLayoutEffect:eu,useMemo:iu,useReducer:Gl,useRef:qc,useState:function(){return Gl(Gn)},useDebugValue:ql,useDeferredValue:function(e){var t=xt();return ou(t,De.memoizedState,e)},useTransition:function(){var e=Gl(Gn)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:$c,useId:lu,unstable_isNewReconciler:!1},Of={readContext:mt,useCallback:nu,useContext:mt,useEffect:Xl,useImperativeHandle:ru,useInsertionEffect:Jc,useLayoutEffect:eu,useMemo:iu,useReducer:Kl,useRef:qc,useState:function(){return Kl(Gn)},useDebugValue:ql,useDeferredValue:function(e){var t=xt();return De===null?t.memoizedState=e:ou(t,De.memoizedState,e)},useTransition:function(){var e=Kl(Gn)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:$c,useId:lu,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=P({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:P({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Zi={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Je(),i=ur(e),s=Wt(n,i);s.payload=t,r!=null&&(s.callback=r),t=lr(e,s,i),t!==null&&(bt(t,e,i,n),$i(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Je(),i=ur(e),s=Wt(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=lr(e,s,i),t!==null&&(bt(t,e,i,n),$i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),n=ur(e),i=Wt(r,n);i.tag=2,t!=null&&(i.callback=t),t=lr(e,i,n),t!==null&&(bt(t,e,n,r),$i(t,e,n))}};function uu(e,t,r,n,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):t.prototype&&t.prototype.isPureReactComponent?!On(r,n)||!On(i,s):!0}function du(e,t,r){var n=!1,i=nr,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(i=tt(t)?wr:Ye.current,n=t.contextTypes,s=(n=n!=null)?Kr(e,i):nr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function pu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function Jl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Fl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=mt(s):(s=tt(t)?wr:Ye.current,i.context=Kr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Zl(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zi.enqueueReplaceState(i,i.state,null),Vi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var r="",n=t;do r+=le(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function es(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function ts(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,r){r=Wt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oo||(oo=!0,xs=n),ts(e,t)},r}function hu(e,t,r){r=Wt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ts(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ts(e,t),typeof n!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function mu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Mf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Xf.bind(null,e,t,r),t.then(e,e))}function xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Wt(-1,1),t.tag=2,lr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Df=z.ReactCurrentOwner,rt=!1;function Ze(e,t,r,n){t.child=e===null?Dc(t,null,r,n):Jr(t,e.child,r,n)}function vu(e,t,r,n,i){r=r.render;var s=t.ref;return tn(t,i),n=Ql(e,t,r,n,s,i),r=Yl(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(Ce&&r&&_l(t),t.flags|=1,Ze(e,t,n,i),t.child)}function yu(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Ns(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,wu(e,t,s,n,i)):(e=po(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var u=s.memoizedProps;if(r=r.compare,r=r!==null?r:On,r(u,n)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=pr(s,n),e.ref=t.ref,e.return=t,t.child=e}function wu(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(On(s,n)&&e.ref===t.ref)if(rt=!1,t.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return rs(e,t,r,n,i)}function ku(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(ln,ut),ut|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(ln,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,we(ln,ut),ut|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,we(ln,ut),ut|=n;return Ze(e,t,i,r),t.child}function ju(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function rs(e,t,r,n,i){var s=tt(r)?wr:Ye.current;return s=Kr(t,s),tn(t,i),r=Ql(e,t,r,n,s,i),n=Yl(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(Ce&&n&&_l(t),t.flags|=1,Ze(e,t,r,i),t.child)}function Nu(e,t,r,n,i){if(tt(r)){var s=!0;Mi(t)}else s=!1;if(tn(t,i),t.stateNode===null)eo(e,t),du(t,r,n),Jl(t,r,n,i),n=!0;else if(e===null){var u=t.stateNode,p=t.memoizedProps;u.props=p;var f=u.context,y=r.contextType;typeof y=="object"&&y!==null?y=mt(y):(y=tt(r)?wr:Ye.current,y=Kr(t,y));var N=r.getDerivedStateFromProps,C=typeof N=="function"||typeof u.getSnapshotBeforeUpdate=="function";C||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==n||f!==y)&&pu(t,u,n,y),or=!1;var j=t.memoizedState;u.state=j,Vi(t,n,u,i),f=t.memoizedState,p!==n||j!==f||et.current||or?(typeof N=="function"&&(Zl(t,r,N,n),f=t.memoizedState),(p=or||uu(t,r,p,n,j,f,y))?(C||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),u.props=n,u.state=f,u.context=y,n=p):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{u=t.stateNode,Fc(e,t),p=t.memoizedProps,y=t.type===t.elementType?p:St(t.type,p),u.props=y,C=t.pendingProps,j=u.context,f=r.contextType,typeof f=="object"&&f!==null?f=mt(f):(f=tt(r)?wr:Ye.current,f=Kr(t,f));var I=r.getDerivedStateFromProps;(N=typeof I=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==C||j!==f)&&pu(t,u,n,f),or=!1,j=t.memoizedState,u.state=j,Vi(t,n,u,i);var O=t.memoizedState;p!==C||j!==O||et.current||or?(typeof I=="function"&&(Zl(t,r,I,n),O=t.memoizedState),(y=or||uu(t,r,y,n,j,O,f)||!1)?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,O,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,O,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=O),u.props=n,u.state=O,u.context=f,n=y):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),n=!1)}return ns(e,t,r,n,s,i)}function ns(e,t,r,n,i,s){ju(e,t);var u=(t.flags&128)!==0;if(!n&&!u)return i&&Tc(t,r,!1),Ut(e,t,s);n=t.stateNode,Df.current=t;var p=u&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&u?(t.child=Jr(t,e.child,null,s),t.child=Jr(t,null,p,s)):Ze(e,t,p,s),t.memoizedState=n.state,i&&Tc(t,r,!0),t.child}function Su(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),Bl(e,t.containerInfo)}function Cu(e,t,r,n,i){return Zr(),Ll(i),t.flags|=256,Ze(e,t,r,n),t.child}var is={dehydrated:null,treeContext:null,retryLane:0};function os(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eu(e,t,r){var n=t.pendingProps,i=be.current,s=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),we(be,i&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=n.children,e=n.fallback,s?(n=t.mode,s=t.child,u={mode:"hidden",children:u},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=u):s=fo(u,n,0,null),e=zr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=os(r),t.memoizedState=is,e):ls(t,u));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Af(e,t,u,n,p,i,r);if(s){s=n.fallback,u=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(u&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=pr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=pr(p,s):(s=zr(s,u,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,u=e.child.memoizedState,u=u===null?os(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},s.memoizedState=u,s.childLanes=e.childLanes&~r,t.memoizedState=is,n}return s=e.child,e=s.sibling,n=pr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ls(e,t){return t=fo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,r,n){return n!==null&&Ll(n),Jr(t,e.child,null,r),e=ls(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Af(e,t,r,n,i,s,u){if(r)return t.flags&256?(t.flags&=-257,n=es(Error(a(422))),Ji(e,t,u,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=fo({mode:"visible",children:n.children},i,0,null),s=zr(s,i,u,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&Jr(t,e.child,null,u),t.child.memoizedState=os(u),t.memoizedState=is,s);if((t.mode&1)===0)return Ji(e,t,u,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,s=Error(a(419)),n=es(s,n,void 0),Ji(e,t,u,n)}if(p=(u&e.childLanes)!==0,rt||p){if(n=We,n!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|u))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bt(e,i),bt(n,e,i,-1))}return js(),n=es(Error(a(421))),Ji(e,t,u,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=tr(i.nextSibling),at=t,Ce=!0,Nt=null,e!==null&&(ft[ht++]=At,ft[ht++]=Ft,ft[ht++]=kr,At=e.id,Ft=e.overflow,kr=t),t=ls(t,n.children),t.flags|=4096,t)}function bu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Dl(e.return,t,r)}function ss(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Tu(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Ze(e,t,n.children,r),n=be.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,r,t);else if(e.tag===19)bu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(we(be,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Qi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ss(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ss(t,!0,r,null,s);break;case"together":ss(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function eo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Er|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,r=pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ff(e,t,r){switch(t.tag){case 3:Su(t),Zr();break;case 5:Uc(t);break;case 1:tt(t.type)&&Mi(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;we(Ui,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(we(be,be.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Eu(e,t,r):(we(be,be.current&1),e=Ut(e,t,r),e!==null?e.sibling:null);we(be,be.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Tu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(be,be.current),n)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,r)}return Ut(e,t,r)}var _u,as,zu,Pu;_u=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},as=function(){},zu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Sr(It.current);var s=null;switch(r){case"input":i=Do(e,i),n=Do(e,n),s=[];break;case"select":i=P({},i,{value:void 0}),n=P({},n,{value:void 0}),s=[];break;case"textarea":i=Bo(e,i),n=Bo(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Li)}Uo(r,n);var u;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(u in p)p.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in n){var f=n[y];if(p=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(u in p)!p.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in f)f.hasOwnProperty(u)&&p[u]!==f[u]&&(r||(r={}),r[u]=f[u])}else r||(s||(s=[]),s.push(y,r)),r=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(s=s||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&ke("scroll",e),s||p===f||(s=[])):(s=s||[]).push(y,f))}r&&(s=s||[]).push("style",r);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},Pu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Xn(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Bf(e,t,r){var n=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return tt(t.type)&&Oi(),Ke(t),null;case 3:return n=t.stateNode,rn(),je(et),je(Ye),Hl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nt!==null&&(ys(Nt),Nt=null))),as(e,t),Ke(t),null;case 5:Wl(t);var i=Sr(Vn.current);if(r=t.type,e!==null&&t.stateNode!=null)zu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(a(166));return Ke(t),null}if(e=Sr(It.current),Bi(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Pt]=t,n[Bn]=s,e=(t.mode&1)!==0,r){case"dialog":ke("cancel",n),ke("close",n);break;case"iframe":case"object":case"embed":ke("load",n);break;case"video":case"audio":for(i=0;i<Dn.length;i++)ke(Dn[i],n);break;case"source":ke("error",n);break;case"img":case"image":case"link":ke("error",n),ke("load",n);break;case"details":ke("toggle",n);break;case"input":da(n,s),ke("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ke("invalid",n);break;case"textarea":ha(n,s),ke("invalid",n)}Uo(r,s),i=null;for(var u in s)if(s.hasOwnProperty(u)){var p=s[u];u==="children"?typeof p=="string"?n.textContent!==p&&(s.suppressHydrationWarning!==!0&&Ii(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&Ii(n.textContent,p,e),i=["children",""+p]):m.hasOwnProperty(u)&&p!=null&&u==="onScroll"&&ke("scroll",n)}switch(r){case"input":Gt(n),fa(n,s,!0);break;case"textarea":Gt(n),xa(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Li)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ga(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(r,{is:n.is}):(e=u.createElement(r),r==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,r),e[Pt]=t,e[Bn]=n,_u(e,t,!1,!1),t.stateNode=e;e:{switch(u=Ho(r,n),r){case"dialog":ke("cancel",e),ke("close",e),i=n;break;case"iframe":case"object":case"embed":ke("load",e),i=n;break;case"video":case"audio":for(i=0;i<Dn.length;i++)ke(Dn[i],e);i=n;break;case"source":ke("error",e),i=n;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=n;break;case"details":ke("toggle",e),i=n;break;case"input":da(e,n),i=Do(e,n),ke("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=P({},n,{value:void 0}),ke("invalid",e);break;case"textarea":ha(e,n),i=Bo(e,n),ke("invalid",e);break;default:i=n}Uo(r,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var f=p[s];s==="style"?wa(e,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&va(e,f)):s==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&vn(e,f):typeof f=="number"&&vn(e,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(m.hasOwnProperty(s)?f!=null&&s==="onScroll"&&ke("scroll",e):f!=null&&re(e,s,f,u))}switch(r){case"input":Gt(e),fa(e,n,!1);break;case"textarea":Gt(e),xa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ae(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Dr(e,!!n.multiple,s,!1):n.defaultValue!=null&&Dr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Pu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(a(166));if(r=Sr(Vn.current),Sr(It.current),Bi(t)){if(n=t.stateNode,r=t.memoizedProps,n[Pt]=t,(s=n.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:Ii(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ii(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pt]=t,t.stateNode=n}return Ke(t),null;case 13:if(je(be),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rc(),Zr(),t.flags|=98560,s=!1;else if(s=Bi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Pt]=t}else Zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),s=!1}else Nt!==null&&(ys(Nt),Nt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Ae===0&&(Ae=3):js())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return rn(),as(e,t),e===null&&An(t.stateNode.containerInfo),Ke(t),null;case 10:return Ml(t.type._context),Ke(t),null;case 17:return tt(t.type)&&Oi(),Ke(t),null;case 19:if(je(be),s=t.memoizedState,s===null)return Ke(t),null;if(n=(t.flags&128)!==0,u=s.rendering,u===null)if(n)Xn(s,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Qi(e),u!==null){for(t.flags|=128,Xn(s,!1),n=u.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,u=s.alternate,u===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=u.childLanes,s.lanes=u.lanes,s.child=u.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=u.memoizedProps,s.memoizedState=u.memoizedState,s.updateQueue=u.updateQueue,s.type=u.type,e=u.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return we(be,be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>sn&&(t.flags|=128,n=!0,Xn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Qi(u),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Xn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Ce)return Ke(t),null}else 2*Ie()-s.renderingStartTime>sn&&r!==1073741824&&(t.flags|=128,n=!0,Xn(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(r=s.last,r!==null?r.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,r=be.current,we(be,n?r&1|2:r&1),t):(Ke(t),null);case 22:case 23:return ks(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ut&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Wf(e,t){switch(zl(t),t.tag){case 1:return tt(t.type)&&Oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),je(et),je(Ye),Hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wl(t),null;case 13:if(je(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(be),null;case 4:return rn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var to=!1,Xe=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,R=null;function on(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ze(e,t,n)}else r.current=null}function cs(e,t,r){try{r()}catch(n){ze(e,t,n)}}var Iu=!1;function Hf(e,t){if(kl=ki,e=uc(),fl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var u=0,p=-1,f=-1,y=0,N=0,C=e,j=null;t:for(;;){for(var I;C!==r||i!==0&&C.nodeType!==3||(p=u+i),C!==s||n!==0&&C.nodeType!==3||(f=u+n),C.nodeType===3&&(u+=C.nodeValue.length),(I=C.firstChild)!==null;)j=C,C=I;for(;;){if(C===e)break t;if(j===r&&++y===i&&(p=u),j===s&&++N===n&&(f=u),(I=C.nextSibling)!==null)break;C=j,j=C.parentNode}C=I}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(jl={focusedElem:e,selectionRange:r},ki=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var M=O.memoizedProps,Le=O.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?M:St(t.type,M),Le);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(E){ze(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return O=Iu,Iu=!1,O}function qn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&cs(t,r,s)}i=i.next}while(i!==n)}}function ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function us(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Lu(e){var t=e.alternate;t!==null&&(e.alternate=null,Lu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Bn],delete t[El],delete t[Cf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ru(e){return e.tag===5||e.tag===3||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Li));else if(n!==4&&(e=e.child,e!==null))for(ds(e,t,r),e=e.sibling;e!==null;)ds(e,t,r),e=e.sibling}function ps(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ps(e,t,r),e=e.sibling;e!==null;)ps(e,t,r),e=e.sibling}var He=null,Ct=!1;function sr(e,t,r){for(r=r.child;r!==null;)Mu(e,t,r),r=r.sibling}function Mu(e,t,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(mi,r)}catch{}switch(r.tag){case 5:Xe||on(r,t);case 6:var n=He,i=Ct;He=null,sr(e,t,r),He=n,Ct=i,He!==null&&(Ct?(e=He,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):He.removeChild(r.stateNode));break;case 18:He!==null&&(Ct?(e=He,r=r.stateNode,e.nodeType===8?Cl(e.parentNode,r):e.nodeType===1&&Cl(e,r),_n(e)):Cl(He,r.stateNode));break;case 4:n=He,i=Ct,He=r.stateNode.containerInfo,Ct=!0,sr(e,t,r),He=n,Ct=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,u=s.destroy;s=s.tag,u!==void 0&&((s&2)!==0||(s&4)!==0)&&cs(r,t,u),i=i.next}while(i!==n)}sr(e,t,r);break;case 1:if(!Xe&&(on(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){ze(r,t,p)}sr(e,t,r);break;case 21:sr(e,t,r);break;case 22:r.mode&1?(Xe=(n=Xe)||r.memoizedState!==null,sr(e,t,r),Xe=n):sr(e,t,r);break;default:sr(e,t,r)}}function Du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Uf),t.forEach(function(n){var i=Zf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,u=t,p=u;e:for(;p!==null;){switch(p.tag){case 5:He=p.stateNode,Ct=!1;break e;case 3:He=p.stateNode.containerInfo,Ct=!0;break e;case 4:He=p.stateNode.containerInfo,Ct=!0;break e}p=p.return}if(He===null)throw Error(a(160));Mu(s,u,i),He=null,Ct=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){ze(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Rt(e),n&4){try{qn(3,e,e.return),ro(3,e)}catch(M){ze(e,e.return,M)}try{qn(5,e,e.return)}catch(M){ze(e,e.return,M)}}break;case 1:Et(t,e),Rt(e),n&512&&r!==null&&on(r,r.return);break;case 5:if(Et(t,e),Rt(e),n&512&&r!==null&&on(r,r.return),e.flags&32){var i=e.stateNode;try{vn(i,"")}catch(M){ze(e,e.return,M)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,u=r!==null?r.memoizedProps:s,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&pa(i,s),Ho(p,u);var y=Ho(p,s);for(u=0;u<f.length;u+=2){var N=f[u],C=f[u+1];N==="style"?wa(i,C):N==="dangerouslySetInnerHTML"?va(i,C):N==="children"?vn(i,C):re(i,N,C,y)}switch(p){case"input":Ao(i,s);break;case"textarea":ma(i,s);break;case"select":var j=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Dr(i,!!s.multiple,I,!1):j!==!!s.multiple&&(s.defaultValue!=null?Dr(i,!!s.multiple,s.defaultValue,!0):Dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bn]=s}catch(M){ze(e,e.return,M)}}break;case 6:if(Et(t,e),Rt(e),n&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(M){ze(e,e.return,M)}}break;case 3:if(Et(t,e),Rt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(M){ze(e,e.return,M)}break;case 4:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ms=Ie())),n&4&&Du(e);break;case 22:if(N=r!==null&&r.memoizedState!==null,e.mode&1?(Xe=(y=Xe)||N,Et(t,e),Xe=y):Et(t,e),Rt(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!N&&(e.mode&1)!==0)for(R=e,N=e.child;N!==null;){for(C=R=N;R!==null;){switch(j=R,I=j.child,j.tag){case 0:case 11:case 14:case 15:qn(4,j,j.return);break;case 1:on(j,j.return);var O=j.stateNode;if(typeof O.componentWillUnmount=="function"){n=j,r=j.return;try{t=n,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(M){ze(n,r,M)}}break;case 5:on(j,j.return);break;case 22:if(j.memoizedState!==null){Wu(C);continue}}I!==null?(I.return=j,R=I):Wu(C)}N=N.sibling}e:for(N=null,C=e;;){if(C.tag===5){if(N===null){N=C;try{i=C.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=C.stateNode,f=C.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=ya("display",u))}catch(M){ze(e,e.return,M)}}}else if(C.tag===6){if(N===null)try{C.stateNode.nodeValue=y?"":C.memoizedProps}catch(M){ze(e,e.return,M)}}else if((C.tag!==22&&C.tag!==23||C.memoizedState===null||C===e)&&C.child!==null){C.child.return=C,C=C.child;continue}if(C===e)break e;for(;C.sibling===null;){if(C.return===null||C.return===e)break e;N===C&&(N=null),C=C.return}N===C&&(N=null),C.sibling.return=C.return,C=C.sibling}}break;case 19:Et(t,e),Rt(e),n&4&&Du(e);break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Ru(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(vn(i,""),n.flags&=-33);var s=Ou(e);ps(e,s,i);break;case 3:case 4:var u=n.stateNode.containerInfo,p=Ou(e);ds(e,p,u);break;default:throw Error(a(161))}}catch(f){ze(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $f(e,t,r){R=e,Fu(e)}function Fu(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&n){var u=i.memoizedState!==null||to;if(!u){var p=i.alternate,f=p!==null&&p.memoizedState!==null||Xe;p=to;var y=Xe;if(to=u,(Xe=f)&&!y)for(R=i;R!==null;)u=R,f=u.child,u.tag===22&&u.memoizedState!==null?Uu(i):f!==null?(f.return=u,R=f):Uu(i);for(;s!==null;)R=s,Fu(s),s=s.sibling;R=i,to=p,Xe=y}Bu(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,R=s):Bu(e)}}function Bu(e){for(;R!==null;){var t=R;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||ro(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Xe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:St(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Wc(t,s,n);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wc(t,u,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var N=y.memoizedState;if(N!==null){var C=N.dehydrated;C!==null&&_n(C)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Xe||t.flags&512&&us(t)}catch(j){ze(t,t.return,j)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Wu(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Uu(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ro(4,t)}catch(f){ze(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){ze(t,i,f)}}var s=t.return;try{us(t)}catch(f){ze(t,s,f)}break;case 5:var u=t.return;try{us(t)}catch(f){ze(t,u,f)}}}catch(f){ze(t,t.return,f)}if(t===e){R=null;break}var p=t.sibling;if(p!==null){p.return=t.return,R=p;break}R=t.return}}var Vf=Math.ceil,no=z.ReactCurrentDispatcher,fs=z.ReactCurrentOwner,gt=z.ReactCurrentBatchConfig,de=0,We=null,Oe=null,$e=0,ut=0,ln=rr(0),Ae=0,Zn=null,Er=0,io=0,hs=0,Jn=null,nt=null,ms=0,sn=1/0,Ht=null,oo=!1,xs=null,ar=null,lo=!1,cr=null,so=0,ei=0,gs=null,ao=-1,co=0;function Je(){return(de&6)!==0?Ie():ao!==-1?ao:ao=Ie()}function ur(e){return(e.mode&1)===0?1:(de&2)!==0&&$e!==0?$e&-$e:Tf.transition!==null?(co===0&&(co=Oa()),co):(e=ge,e!==0||(e=window.event,e=e===void 0?16:$a(e.type)),e)}function bt(e,t,r,n){if(50<ei)throw ei=0,gs=null,Error(a(185));Sn(e,r,n),((de&2)===0||e!==We)&&(e===We&&((de&2)===0&&(io|=r),Ae===4&&dr(e,$e)),it(e,n),r===1&&de===0&&(t.mode&1)===0&&(sn=Ie()+500,Di&&ir()))}function it(e,t){var r=e.callbackNode;bp(e,t);var n=vi(e,e===We?$e:0);if(n===0)r!==null&&Ia(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ia(r),t===1)e.tag===0?bf($u.bind(null,e)):_c($u.bind(null,e)),Nf(function(){(de&6)===0&&ir()}),r=null;else{switch(Ma(n)){case 1:r=Xo;break;case 4:r=La;break;case 16:r=hi;break;case 536870912:r=Ra;break;default:r=hi}r=Zu(r,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hu(e,t){if(ao=-1,co=0,(de&6)!==0)throw Error(a(327));var r=e.callbackNode;if(an()&&e.callbackNode!==r)return null;var n=vi(e,e===We?$e:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=uo(e,n);else{t=n;var i=de;de|=2;var s=Qu();(We!==e||$e!==t)&&(Ht=null,sn=Ie()+500,Tr(e,t));do try{Gf();break}catch(p){Vu(e,p)}while(!0);Ol(),no.current=s,de=i,Oe!==null?t=0:(We=null,$e=0,t=Ae)}if(t!==0){if(t===2&&(i=qo(e),i!==0&&(n=i,t=vs(e,i))),t===1)throw r=Zn,Tr(e,0),dr(e,n),it(e,Ie()),r;if(t===6)dr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Qf(i)&&(t=uo(e,n),t===2&&(s=qo(e),s!==0&&(n=s,t=vs(e,s))),t===1))throw r=Zn,Tr(e,0),dr(e,n),it(e,Ie()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:_r(e,nt,Ht);break;case 3:if(dr(e,n),(n&130023424)===n&&(t=ms+500-Ie(),10<t)){if(vi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sl(_r.bind(null,e,nt,Ht),t);break}_r(e,nt,Ht);break;case 4:if(dr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var u=31-kt(n);s=1<<u,u=t[u],u>i&&(i=u),n&=~s}if(n=i,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Vf(n/1960))-n,10<n){e.timeoutHandle=Sl(_r.bind(null,e,nt,Ht),n);break}_r(e,nt,Ht);break;case 5:_r(e,nt,Ht);break;default:throw Error(a(329))}}}return it(e,Ie()),e.callbackNode===r?Hu.bind(null,e):null}function vs(e,t){var r=Jn;return e.current.memoizedState.isDehydrated&&(Tr(e,t).flags|=256),e=uo(e,t),e!==2&&(t=nt,nt=r,t!==null&&ys(t)),e}function ys(e){nt===null?nt=e:nt.push.apply(nt,e)}function Qf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~hs,t&=~io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),n=1<<r;e[r]=-1,t&=~n}}function $u(e){if((de&6)!==0)throw Error(a(327));an();var t=vi(e,0);if((t&1)===0)return it(e,Ie()),null;var r=uo(e,t);if(e.tag!==0&&r===2){var n=qo(e);n!==0&&(t=n,r=vs(e,n))}if(r===1)throw r=Zn,Tr(e,0),dr(e,t),it(e,Ie()),r;if(r===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_r(e,nt,Ht),it(e,Ie()),null}function ws(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(sn=Ie()+500,Di&&ir())}}function br(e){cr!==null&&cr.tag===0&&(de&6)===0&&an();var t=de;de|=1;var r=gt.transition,n=ge;try{if(gt.transition=null,ge=1,e)return e()}finally{ge=n,gt.transition=r,de=t,(de&6)===0&&ir()}}function ks(){ut=ln.current,je(ln)}function Tr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,jf(r)),Oe!==null)for(r=Oe.return;r!==null;){var n=r;switch(zl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Oi();break;case 3:rn(),je(et),je(Ye),Hl();break;case 5:Wl(n);break;case 4:rn();break;case 13:je(be);break;case 19:je(be);break;case 10:Ml(n.type._context);break;case 22:case 23:ks()}r=r.return}if(We=e,Oe=e=pr(e.current,null),$e=ut=t,Ae=0,Zn=null,hs=io=Er=0,nt=Jn=null,Nr!==null){for(t=0;t<Nr.length;t++)if(r=Nr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var u=s.next;s.next=i,n.next=u}r.pending=n}Nr=null}return e}function Vu(e,t){do{var r=Oe;try{if(Ol(),Yi.current=qi,Gi){for(var n=Te.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Gi=!1}if(Cr=0,Be=De=Te=null,Qn=!1,Yn=0,fs.current=null,r===null||r.return===null){Ae=1,Zn=t,Oe=null;break}e:{var s=e,u=r.return,p=r,f=t;if(t=$e,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,N=p,C=N.tag;if((N.mode&1)===0&&(C===0||C===11||C===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var I=xu(u);if(I!==null){I.flags&=-257,gu(I,u,p,s,t),I.mode&1&&mu(s,y,t),t=I,f=y;var O=t.updateQueue;if(O===null){var M=new Set;M.add(f),t.updateQueue=M}else O.add(f);break e}else{if((t&1)===0){mu(s,y,t),js();break e}f=Error(a(426))}}else if(Ce&&p.mode&1){var Le=xu(u);if(Le!==null){(Le.flags&65536)===0&&(Le.flags|=256),gu(Le,u,p,s,t),Ll(nn(f,p));break e}}s=f=nn(f,p),Ae!==4&&(Ae=2),Jn===null?Jn=[s]:Jn.push(s),s=u;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=fu(s,f,t);Bc(s,g);break e;case 1:p=f;var h=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ar===null||!ar.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=hu(s,p,t);Bc(s,E);break e}}s=s.return}while(s!==null)}Gu(r)}catch(A){t=A,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function Qu(){var e=no.current;return no.current=qi,e===null?qi:e}function js(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),We===null||(Er&268435455)===0&&(io&268435455)===0||dr(We,$e)}function uo(e,t){var r=de;de|=2;var n=Qu();(We!==e||$e!==t)&&(Ht=null,Tr(e,t));do try{Yf();break}catch(i){Vu(e,i)}while(!0);if(Ol(),de=r,no.current=n,Oe!==null)throw Error(a(261));return We=null,$e=0,Ae}function Yf(){for(;Oe!==null;)Yu(Oe)}function Gf(){for(;Oe!==null&&!vp();)Yu(Oe)}function Yu(e){var t=qu(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Gu(e):Oe=t,fs.current=null}function Gu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Bf(r,t,ut),r!==null){Oe=r;return}}else{if(r=Wf(r,t),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Ae===0&&(Ae=5)}function _r(e,t,r){var n=ge,i=gt.transition;try{gt.transition=null,ge=1,Kf(e,t,r,n)}finally{gt.transition=i,ge=n}return null}function Kf(e,t,r,n){do an();while(cr!==null);if((de&6)!==0)throw Error(a(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Tp(e,s),e===We&&(Oe=We=null,$e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||lo||(lo=!0,Zu(hi,function(){return an(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=gt.transition,gt.transition=null;var u=ge;ge=1;var p=de;de|=4,fs.current=null,Hf(e,r),Au(r,e),mf(jl),ki=!!kl,jl=kl=null,e.current=r,$f(r),yp(),de=p,ge=u,gt.transition=s}else e.current=r;if(lo&&(lo=!1,cr=e,so=i),s=e.pendingLanes,s===0&&(ar=null),jp(r.stateNode),it(e,Ie()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=xs,xs=null,e;return(so&1)!==0&&e.tag!==0&&an(),s=e.pendingLanes,(s&1)!==0?e===gs?ei++:(ei=0,gs=e):ei=0,ir(),null}function an(){if(cr!==null){var e=Ma(so),t=gt.transition,r=ge;try{if(gt.transition=null,ge=16>e?16:e,cr===null)var n=!1;else{if(e=cr,cr=null,so=0,(de&6)!==0)throw Error(a(331));var i=de;for(de|=4,R=e.current;R!==null;){var s=R,u=s.child;if((R.flags&16)!==0){var p=s.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(R=y;R!==null;){var N=R;switch(N.tag){case 0:case 11:case 15:qn(8,N,s)}var C=N.child;if(C!==null)C.return=N,R=C;else for(;R!==null;){N=R;var j=N.sibling,I=N.return;if(Lu(N),N===y){R=null;break}if(j!==null){j.return=I,R=j;break}R=I}}}var O=s.alternate;if(O!==null){var M=O.child;if(M!==null){O.child=null;do{var Le=M.sibling;M.sibling=null,M=Le}while(M!==null)}}R=s}}if((s.subtreeFlags&2064)!==0&&u!==null)u.return=s,R=u;else e:for(;R!==null;){if(s=R,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:qn(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,R=g;break e}R=s.return}}var h=e.current;for(R=h;R!==null;){u=R;var v=u.child;if((u.subtreeFlags&2064)!==0&&v!==null)v.return=u,R=v;else e:for(u=h;R!==null;){if(p=R,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:ro(9,p)}}catch(A){ze(p,p.return,A)}if(p===u){R=null;break e}var E=p.sibling;if(E!==null){E.return=p.return,R=E;break e}R=p.return}}if(de=i,ir(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(mi,e)}catch{}n=!0}return n}finally{ge=r,gt.transition=t}}return!1}function Ku(e,t,r){t=nn(r,t),t=fu(e,t,1),e=lr(e,t,1),t=Je(),e!==null&&(Sn(e,1,t),it(e,t))}function ze(e,t,r){if(e.tag===3)Ku(e,e,r);else for(;t!==null;){if(t.tag===3){Ku(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ar===null||!ar.has(n))){e=nn(r,e),e=hu(t,e,1),t=lr(t,e,1),e=Je(),t!==null&&(Sn(t,1,e),it(t,e));break}}t=t.return}}function Xf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,We===e&&($e&r)===r&&(Ae===4||Ae===3&&($e&130023424)===$e&&500>Ie()-ms?Tr(e,0):hs|=r),it(e,t)}function Xu(e,t){t===0&&((e.mode&1)===0?t=1:(t=gi,gi<<=1,(gi&130023424)===0&&(gi=4194304)));var r=Je();e=Bt(e,t),e!==null&&(Sn(e,t,r),it(e,r))}function qf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xu(e,r)}function Zf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}n!==null&&n.delete(t),Xu(e,r)}var qu;qu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)rt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return rt=!1,Ff(e,t,r);rt=(e.flags&131072)!==0}else rt=!1,Ce&&(t.flags&1048576)!==0&&zc(t,Fi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;eo(e,t),e=t.pendingProps;var i=Kr(t,Ye.current);tn(t,r),i=Ql(null,t,n,e,i,r);var s=Yl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(n)?(s=!0,Mi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fl(t),i.updater=Zi,t.stateNode=i,i._reactInternals=t,Jl(t,n,e,r),t=ns(null,t,n,!0,s,r)):(t.tag=0,Ce&&s&&_l(t),Ze(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(eo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=eh(n),e=St(n,e),i){case 0:t=rs(null,t,n,e,r);break e;case 1:t=Nu(null,t,n,e,r);break e;case 11:t=vu(null,t,n,e,r);break e;case 14:t=yu(null,t,n,St(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:St(n,i),rs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:St(n,i),Nu(e,t,n,i,r);case 3:e:{if(Su(t),e===null)throw Error(a(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Fc(e,t),Vi(t,n,null,r);var u=t.memoizedState;if(n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=nn(Error(a(423)),t),t=Cu(e,t,n,r,i);break e}else if(n!==i){i=nn(Error(a(424)),t),t=Cu(e,t,n,r,i);break e}else for(ct=tr(t.stateNode.containerInfo.firstChild),at=t,Ce=!0,Nt=null,r=Dc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zr(),n===i){t=Ut(e,t,r);break e}Ze(e,t,n,r)}t=t.child}return t;case 5:return Uc(t),e===null&&Il(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,u=i.children,Nl(n,i)?u=null:s!==null&&Nl(n,s)&&(t.flags|=32),ju(e,t),Ze(e,t,u,r),t.child;case 6:return e===null&&Il(t),null;case 13:return Eu(e,t,r);case 4:return Bl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Jr(t,null,n,r):Ze(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:St(n,i),vu(e,t,n,i,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,u=i.value,we(Ui,n._currentValue),n._currentValue=u,s!==null)if(jt(s.value,u)){if(s.children===i.children&&!et.current){t=Ut(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){u=s.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(s.tag===1){f=Wt(-1,r&-r),f.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var N=y.pending;N===null?f.next=f:(f.next=N.next,N.next=f),y.pending=f}}s.lanes|=r,f=s.alternate,f!==null&&(f.lanes|=r),Dl(s.return,r,t),p.lanes|=r;break}f=f.next}}else if(s.tag===10)u=s.type===t.type?null:s.child;else if(s.tag===18){if(u=s.return,u===null)throw Error(a(341));u.lanes|=r,p=u.alternate,p!==null&&(p.lanes|=r),Dl(u,r,t),u=s.sibling}else u=s.child;if(u!==null)u.return=s;else for(u=s;u!==null;){if(u===t){u=null;break}if(s=u.sibling,s!==null){s.return=u.return,u=s;break}u=u.return}s=u}Ze(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,tn(t,r),i=mt(i),n=n(i),t.flags|=1,Ze(e,t,n,r),t.child;case 14:return n=t.type,i=St(n,t.pendingProps),i=St(n.type,i),yu(e,t,n,i,r);case 15:return wu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:St(n,i),eo(e,t),t.tag=1,tt(n)?(e=!0,Mi(t)):e=!1,tn(t,r),du(t,n,i),Jl(t,n,i,r),ns(null,t,n,!0,e,r);case 19:return Tu(e,t,r);case 22:return ku(e,t,r)}throw Error(a(156,t.tag))};function Zu(e,t){return Pa(e,t)}function Jf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,r,n){return new Jf(e,t,r,n)}function Ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eh(e){if(typeof e=="function")return Ns(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===qe)return 14}return 2}function pr(e,t){var r=e.alternate;return r===null?(r=vt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function po(e,t,r,n,i,s){var u=2;if(n=e,typeof e=="function")Ns(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case _:return zr(r.children,i,s,t);case D:u=8,i|=8;break;case ve:return e=vt(12,r,t,i|2),e.elementType=ve,e.lanes=s,e;case Se:return e=vt(13,r,t,i),e.elementType=Se,e.lanes=s,e;case Ve:return e=vt(19,r,t,i),e.elementType=Ve,e.lanes=s,e;case ye:return fo(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pe:u=10;break e;case oe:u=9;break e;case _e:u=11;break e;case qe:u=14;break e;case Qe:u=16,n=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=vt(u,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function zr(e,t,r,n){return e=vt(7,e,n,t),e.lanes=r,e}function fo(e,t,r,n){return e=vt(22,e,n,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function Ss(e,t,r){return e=vt(6,e,null,t),e.lanes=r,e}function Cs(e,t,r){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function th(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Es(e,t,r,n,i,s,u,p,f){return e=new th(e,t,r,p,f),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(s),e}function rh(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Ju(e){if(!e)return nr;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var r=e.type;if(tt(r))return bc(e,r,t)}return t}function ed(e,t,r,n,i,s,u,p,f){return e=Es(r,n,!0,e,i,s,u,p,f),e.context=Ju(null),r=e.current,n=Je(),i=ur(r),s=Wt(n,i),s.callback=t!=null?t:null,lr(r,s,i),e.current.lanes=i,Sn(e,i,n),it(e,n),e}function ho(e,t,r,n){var i=t.current,s=Je(),u=ur(i);return r=Ju(r),t.context===null?t.context=r:t.pendingContext=r,t=Wt(s,u),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=lr(i,t,u),e!==null&&(bt(e,i,u,s),$i(e,i,u)),u}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function bs(e,t){td(e,t),(e=e.alternate)&&td(e,t)}function nh(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ts(e){this._internalRoot=e}xo.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));ho(e,t,null,null)},xo.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){ho(null,e,null,null)}),t[Mt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fa();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Zt.length&&t!==0&&t<Zt[r].priority;r++);Zt.splice(r,0,e),r===0&&Ua(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nd(){}function ih(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var y=mo(u);s.call(y)}}var u=ed(t,n,e,0,null,!1,!1,"",nd);return e._reactRootContainer=u,e[Mt]=u.current,An(e.nodeType===8?e.parentNode:e),br(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var y=mo(f);p.call(y)}}var f=Es(e,0,!1,null,null,!1,!1,"",nd);return e._reactRootContainer=f,e[Mt]=f.current,An(e.nodeType===8?e.parentNode:e),br(function(){ho(t,f,r,n)}),f}function vo(e,t,r,n,i){var s=r._reactRootContainer;if(s){var u=s;if(typeof i=="function"){var p=i;i=function(){var f=mo(u);p.call(f)}}ho(t,u,e,i)}else u=ih(r,t,e,i,n);return mo(u)}Da=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Nn(t.pendingLanes);r!==0&&(Jo(t,r|1),it(t,Ie()),(de&6)===0&&(sn=Ie()+500,ir()))}break;case 13:br(function(){var n=Bt(e,1);if(n!==null){var i=Je();bt(n,e,1,i)}}),bs(e,1)}},el=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var r=Je();bt(t,e,134217728,r)}bs(e,134217728)}},Aa=function(e){if(e.tag===13){var t=ur(e),r=Bt(e,t);if(r!==null){var n=Je();bt(r,e,t,n)}bs(e,t)}},Fa=function(){return ge},Ba=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},Qo=function(e,t,r){switch(t){case"input":if(Ao(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ri(n);if(!i)throw Error(a(90));gr(n),Ao(n,i)}}}break;case"textarea":ma(e,r);break;case"select":t=r.value,t!=null&&Dr(e,!!r.multiple,t,!1)}},Sa=ws,Ca=br;var oh={usingClientEntryPoint:!1,Events:[Wn,Yr,Ri,ja,Na,ws]},ti={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lh={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_a(e),e===null?null:e.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{mi=yo.inject(lh),zt=yo}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oh,ot.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(t))throw Error(a(200));return rh(e,t,null,r)},ot.createRoot=function(e,t){if(!_s(e))throw Error(a(299));var r=!1,n="",i=rd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Es(e,1,!1,null,null,r,!1,n,i),e[Mt]=t.current,An(e.nodeType===8?e.parentNode:e),new Ts(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_a(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return br(e)},ot.hydrate=function(e,t,r){if(!go(t))throw Error(a(200));return vo(null,e,t,!0,r)},ot.hydrateRoot=function(e,t,r){if(!_s(e))throw Error(a(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",u=rd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=ed(t,null,e,1,r!=null?r:null,i,!1,s,u),e[Mt]=t.current,An(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new xo(t)},ot.render=function(e,t,r){if(!go(t))throw Error(a(200));return vo(null,e,t,!1,r)},ot.unmountComponentAtNode=function(e){if(!go(e))throw Error(a(40));return e._reactRootContainer?(br(function(){vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1},ot.unstable_batchedUpdates=ws,ot.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!go(r))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return vo(e,t,r,!1,n)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var dd;function mh(){if(dd)return Is.exports;dd=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Is.exports=hh(),Is.exports}var pd;function xh(){if(pd)return wo;pd=1;var l=mh();return wo.createRoot=l.createRoot,wo.hydrateRoot=l.hydrateRoot,wo}var gh=xh(),Re=na();const pt=ah(Re);var lt=function(){return lt=Object.assign||function(c){for(var a,d=1,m=arguments.length;d<m;d++){a=arguments[d];for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&(c[w]=a[w])}return c},lt.apply(this,arguments)};function bo(l,c,a){if(a||arguments.length===2)for(var d=0,m=c.length,w;d<m;d++)(w||!(d in c))&&(w||(w=Array.prototype.slice.call(c,0,d)),w[d]=c[d]);return l.concat(w||Array.prototype.slice.call(c))}var Ne="-ms-",li="-moz-",he="-webkit-",Ad="comm",Io="rule",ia="decl",vh="@import",yh="@namespace",Fd="@keyframes",wh="@layer",Bd=Math.abs,oa=String.fromCharCode,Gs=Object.assign;function kh(l,c){return Fe(l,0)^45?(((c<<2^Fe(l,0))<<2^Fe(l,1))<<2^Fe(l,2))<<2^Fe(l,3):0}function Wd(l){return l.trim()}function Vt(l,c){return(l=c.exec(l))?l[0]:l}function ee(l,c,a){return l.replace(c,a)}function jo(l,c,a){return l.indexOf(c,a)}function Fe(l,c){return l.charCodeAt(c)|0}function Or(l,c,a){return l.slice(c,a)}function Tt(l){return l.length}function Ud(l){return l.length}function ni(l,c){return c.push(l),l}function jh(l,c){return l.map(c).join("")}function fd(l,c){return l.filter(function(a){return!Vt(a,c)})}var Lo=1,un=1,Hd=0,yt=0,Me=0,mn="";function Ro(l,c,a,d,m,w,S,L){return{value:l,root:c,parent:a,type:d,props:m,children:w,line:Lo,column:un,length:S,return:"",siblings:L}}function hr(l,c){return Gs(Ro("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},c)}function cn(l){for(;l.root;)l=hr(l.root,{children:[l]});ni(l,l.siblings)}function Nh(){return Me}function Sh(){return Me=yt>0?Fe(mn,--yt):0,un--,Me===10&&(un=1,Lo--),Me}function _t(){return Me=yt<Hd?Fe(mn,yt++):0,un++,Me===10&&(un=1,Lo++),Me}function mr(){return Fe(mn,yt)}function No(){return yt}function Oo(l,c){return Or(mn,l,c)}function ai(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ch(l){return Lo=un=1,Hd=Tt(mn=l),yt=0,[]}function Eh(l){return mn="",l}function Os(l){return Wd(Oo(yt-1,Ks(l===91?l+2:l===40?l+1:l)))}function bh(l){for(;(Me=mr())&&Me<33;)_t();return ai(l)>2||ai(Me)>3?"":" "}function Th(l,c){for(;--c&&_t()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Oo(l,No()+(c<6&&mr()==32&&_t()==32))}function Ks(l){for(;_t();)switch(Me){case l:return yt;case 34:case 39:l!==34&&l!==39&&Ks(Me);break;case 40:l===41&&Ks(l);break;case 92:_t();break}return yt}function _h(l,c){for(;_t()&&l+Me!==57;)if(l+Me===84&&mr()===47)break;return"/*"+Oo(c,yt-1)+"*"+oa(l===47?l:_t())}function zh(l){for(;!ai(mr());)_t();return Oo(l,yt)}function Ph(l){return Eh(So("",null,null,null,[""],l=Ch(l),0,[0],l))}function So(l,c,a,d,m,w,S,L,b){for(var G=0,V=0,B=S,q=0,se=0,K=0,W=1,Q=1,me=1,ce=0,re="",z=m,X=w,U=d,_=re;Q;)switch(K=ce,ce=_t()){case 40:if(K!=108&&Fe(_,B-1)==58){jo(_+=ee(Os(ce),"&","&\f"),"&\f",Bd(G?L[G-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:_+=Os(ce);break;case 9:case 10:case 13:case 32:_+=bh(K);break;case 92:_+=Th(No()-1,7);continue;case 47:switch(mr()){case 42:case 47:ni(Ih(_h(_t(),No()),c,a,b),b),(ai(K||1)==5||ai(mr()||1)==5)&&Tt(_)&&Or(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*W:L[G++]=Tt(_)*me;case 125*W:case 59:case 0:switch(ce){case 0:case 125:Q=0;case 59+V:me==-1&&(_=ee(_,/\f/g,"")),se>0&&(Tt(_)-B||W===0&&K===47)&&ni(se>32?md(_+";",d,a,B-1,b):md(ee(_," ","")+";",d,a,B-2,b),b);break;case 59:_+=";";default:if(ni(U=hd(_,c,a,G,V,m,L,re,z=[],X=[],B,w),w),ce===123)if(V===0)So(_,c,U,U,z,w,B,L,X);else{switch(q){case 99:if(Fe(_,3)===110)break;case 108:if(Fe(_,2)===97)break;default:V=0;case 100:case 109:case 115:}V?So(l,U,U,d&&ni(hd(l,U,U,0,0,m,L,re,m,z=[],B,X),X),m,X,B,L,d?z:X):So(_,U,U,U,[""],X,0,L,X)}}G=V=se=0,W=me=1,re=_="",B=S;break;case 58:B=1+Tt(_),se=K;default:if(W<1){if(ce==123)--W;else if(ce==125&&W++==0&&Sh()==125)continue}switch(_+=oa(ce),ce*W){case 38:me=V>0?1:(_+="\f",-1);break;case 44:L[G++]=(Tt(_)-1)*me,me=1;break;case 64:mr()===45&&(_+=Os(_t())),q=mr(),V=B=Tt(re=_+=zh(No())),ce++;break;case 45:K===45&&Tt(_)==2&&(W=0)}}return w}function hd(l,c,a,d,m,w,S,L,b,G,V,B){for(var q=m-1,se=m===0?w:[""],K=Ud(se),W=0,Q=0,me=0;W<d;++W)for(var ce=0,re=Or(l,q+1,q=Bd(Q=S[W])),z=l;ce<K;++ce)(z=Wd(Q>0?se[ce]+" "+re:ee(re,/&\f/g,se[ce])))&&(b[me++]=z);return Ro(l,c,a,m===0?Io:L,b,G,V,B)}function Ih(l,c,a,d){return Ro(l,c,a,Ad,oa(Nh()),Or(l,2,-2),0,d)}function md(l,c,a,d,m){return Ro(l,c,a,ia,Or(l,0,d),Or(l,d+1,-1),d,m)}function $d(l,c,a){switch(kh(l,c)){case 5103:return he+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return he+l+l;case 4855:return he+l.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+l;case 4789:return li+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return he+l+li+l+Ne+l+l;case 5936:switch(Fe(l,c+11)){case 114:return he+l+Ne+ee(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return he+l+Ne+ee(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return he+l+Ne+ee(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return he+l+Ne+l+l;case 6165:return he+l+Ne+"flex-"+l+l;case 5187:return he+l+ee(l,/(\w+).+(:[^]+)/,he+"box-$1$2"+Ne+"flex-$1$2")+l;case 5443:return he+l+Ne+"flex-item-"+ee(l,/flex-|-self/g,"")+(Vt(l,/flex-|baseline/)?"":Ne+"grid-row-"+ee(l,/flex-|-self/g,""))+l;case 4675:return he+l+Ne+"flex-line-pack"+ee(l,/align-content|flex-|-self/g,"")+l;case 5548:return he+l+Ne+ee(l,"shrink","negative")+l;case 5292:return he+l+Ne+ee(l,"basis","preferred-size")+l;case 6060:return he+"box-"+ee(l,"-grow","")+he+l+Ne+ee(l,"grow","positive")+l;case 4554:return he+ee(l,/([^-])(transform)/g,"$1"+he+"$2")+l;case 6187:return ee(ee(ee(l,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),l,"")+l;case 5495:case 3959:return ee(l,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return ee(ee(l,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+he+l+l;case 4200:if(!Vt(l,/flex-|baseline/))return Ne+"grid-column-align"+Or(l,c)+l;break;case 2592:case 3360:return Ne+ee(l,"template-","")+l;case 4384:case 3616:return a&&a.some(function(d,m){return c=m,Vt(d.props,/grid-\w+-end/)})?~jo(l+(a=a[c].value),"span",0)?l:Ne+ee(l,"-start","")+l+Ne+"grid-row-span:"+(~jo(a,"span",0)?Vt(a,/\d+/):+Vt(a,/\d+/)-+Vt(l,/\d+/))+";":Ne+ee(l,"-start","")+l;case 4896:case 4128:return a&&a.some(function(d){return Vt(d.props,/grid-\w+-start/)})?l:Ne+ee(ee(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return ee(l,/(.+)-inline(.+)/,he+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(l)-1-c>6)switch(Fe(l,c+1)){case 109:if(Fe(l,c+4)!==45)break;case 102:return ee(l,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+li+(Fe(l,c+3)==108?"$3":"$2-$3"))+l;case 115:return~jo(l,"stretch",0)?$d(ee(l,"stretch","fill-available"),c,a)+l:l}break;case 5152:case 5920:return ee(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,m,w,S,L,b,G){return Ne+m+":"+w+G+(S?Ne+m+"-span:"+(L?b:+b-+w)+G:"")+l});case 4949:if(Fe(l,c+6)===121)return ee(l,":",":"+he)+l;break;case 6444:switch(Fe(l,Fe(l,14)===45?18:11)){case 120:return ee(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Fe(l,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Ne+"$2box$3")+l;case 100:return ee(l,":",":"+Ne)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ee(l,"scroll-","scroll-snap-")+l}return l}function To(l,c){for(var a="",d=0;d<l.length;d++)a+=c(l[d],d,l,c)||"";return a}function Lh(l,c,a,d){switch(l.type){case wh:if(l.children.length)break;case vh:case yh:case ia:return l.return=l.return||l.value;case Ad:return"";case Fd:return l.return=l.value+"{"+To(l.children,d)+"}";case Io:if(!Tt(l.value=l.props.join(",")))return""}return Tt(a=To(l.children,d))?l.return=l.value+"{"+a+"}":""}function Rh(l){var c=Ud(l);return function(a,d,m,w){for(var S="",L=0;L<c;L++)S+=l[L](a,d,m,w)||"";return S}}function Oh(l){return function(c){c.root||(c=c.return)&&l(c)}}function Mh(l,c,a,d){if(l.length>-1&&!l.return)switch(l.type){case ia:l.return=$d(l.value,l.length,a);return;case Fd:return To([hr(l,{value:ee(l.value,"@","@"+he)})],d);case Io:if(l.length)return jh(a=l.props,function(m){switch(Vt(m,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(hr(l,{props:[ee(m,/:(read-\w+)/,":"+li+"$1")]})),cn(hr(l,{props:[m]})),Gs(l,{props:fd(a,d)});break;case"::placeholder":cn(hr(l,{props:[ee(m,/:(plac\w+)/,":"+he+"input-$1")]})),cn(hr(l,{props:[ee(m,/:(plac\w+)/,":"+li+"$1")]})),cn(hr(l,{props:[ee(m,/:(plac\w+)/,Ne+"input-$1")]})),cn(hr(l,{props:[m]})),Gs(l,{props:fd(a,d)});break}return""})}}var Dh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},dn=typeof process!="undefined"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",Vd="active",Qd="data-styled-version",Mo="6.3.10",la=`/*!sc*/
`,si=typeof window!="undefined"&&typeof document!="undefined",Ah=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY);function ui(l){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Co=new Map,_o=new Map,Eo=1,ii=function(l){if(Co.has(l))return Co.get(l);for(;_o.has(Eo);)Eo++;var c=Eo++;return Co.set(l,c),_o.set(c,l),c},Fh=function(l,c){Eo=c+1,Co.set(l,c),_o.set(c,l)},sa=Object.freeze([]),pn=Object.freeze({});function Bh(l,c,a){return a===void 0&&(a=pn),l.theme!==a.theme&&l.theme||c||a.theme}var Yd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Wh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uh=/(^-|-$)/g;function xd(l){return l.replace(Wh,"-").replace(Uh,"")}var Hh=/(a)(d)/gi,gd=function(l){return String.fromCharCode(l+(l>25?39:97))};function Xs(l){var c,a="";for(c=Math.abs(l);c>52;c=c/52|0)a=gd(c%52)+a;return(gd(c%52)+a).replace(Hh,"$1-$2")}var Ms,Pr=function(l,c){for(var a=c.length;a;)l=33*l^c.charCodeAt(--a);return l},Gd=function(l){return Pr(5381,l)};function $h(l){return Xs(Gd(l)>>>0)}function Vh(l){return l.displayName||l.name||"Component"}function Ds(l){return typeof l=="string"&&!0}var Kd=typeof Symbol=="function"&&Symbol.for,Xd=Kd?Symbol.for("react.memo"):60115,Qh=Kd?Symbol.for("react.forward_ref"):60112,Yh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Gh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kh=((Ms={})[Qh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ms[Xd]=qd,Ms);function vd(l){return("type"in(c=l)&&c.type.$$typeof)===Xd?qd:"$$typeof"in l?Kh[l.$$typeof]:Yh;var c}var Xh=Object.defineProperty,qh=Object.getOwnPropertyNames,yd=Object.getOwnPropertySymbols,Zh=Object.getOwnPropertyDescriptor,Jh=Object.getPrototypeOf,wd=Object.prototype;function Zd(l,c,a){if(typeof c!="string"){if(wd){var d=Jh(c);d&&d!==wd&&Zd(l,d,a)}var m=qh(c);yd&&(m=m.concat(yd(c)));for(var w=vd(l),S=vd(c),L=0;L<m.length;++L){var b=m[L];if(!(b in Gh||a&&a[b]||S&&b in S||w&&b in w)){var G=Zh(c,b);try{Xh(l,b,G)}catch{}}}}return l}function fn(l){return typeof l=="function"}function aa(l){return typeof l=="object"&&"styledComponentId"in l}function Lr(l,c){return l&&c?"".concat(l," ").concat(c):l||c||""}function kd(l,c){return l.join("")}function ci(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function qs(l,c,a){if(a===void 0&&(a=!1),!a&&!ci(l)&&!Array.isArray(l))return c;if(Array.isArray(c))for(var d=0;d<c.length;d++)l[d]=qs(l[d],c[d]);else if(ci(c))for(var d in c)l[d]=qs(l[d],c[d]);return l}function ca(l,c){Object.defineProperty(l,"toString",{value:c})}var em=(function(){function l(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return l.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var a=this._cIndex;if(c>this._cGroup)for(var d=this._cGroup;d<c;d++)a+=this.groupSizes[d];else for(d=this._cGroup-1;d>=c;d--)a-=this.groupSizes[d];return this._cGroup=c,this._cIndex=a,a},l.prototype.insertRules=function(c,a){if(c>=this.groupSizes.length){for(var d=this.groupSizes,m=d.length,w=m;c>=w;)if((w<<=1)<0)throw ui(16,"".concat(c));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var S=m;S<w;S++)this.groupSizes[S]=0}for(var L=this.indexOfGroup(c+1),b=0,G=(S=0,a.length);S<G;S++)this.tag.insertRule(L,a[S])&&(this.groupSizes[c]++,L++,b++);b>0&&this._cGroup>c&&(this._cIndex+=b)},l.prototype.clearGroup=function(c){if(c<this.length){var a=this.groupSizes[c],d=this.indexOfGroup(c),m=d+a;this.groupSizes[c]=0;for(var w=d;w<m;w++)this.tag.deleteRule(d);a>0&&this._cGroup>c&&(this._cIndex-=a)}},l.prototype.getGroup=function(c){var a="";if(c>=this.length||this.groupSizes[c]===0)return a;for(var d=this.groupSizes[c],m=this.indexOfGroup(c),w=m+d,S=m;S<w;S++)a+=this.tag.getRule(S)+la;return a},l})(),tm="style[".concat(dn,"][").concat(Qd,'="').concat(Mo,'"]'),rm=new RegExp("^".concat(dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),jd=function(l){return typeof ShadowRoot!="undefined"&&l instanceof ShadowRoot||"host"in l&&l.nodeType===11},Zs=function(l){if(!l)return document;if(jd(l))return l;if("getRootNode"in l){var c=l.getRootNode();if(jd(c))return c}return document},nm=function(l,c,a){for(var d,m=a.split(","),w=0,S=m.length;w<S;w++)(d=m[w])&&l.registerName(c,d)},im=function(l,c){for(var a,d=((a=c.textContent)!==null&&a!==void 0?a:"").split(la),m=[],w=0,S=d.length;w<S;w++){var L=d[w].trim();if(L){var b=L.match(rm);if(b){var G=0|parseInt(b[1],10),V=b[2];G!==0&&(Fh(V,G),nm(l,V,b[3]),l.getTag().insertRules(G,m)),m.length=0}else m.push(L)}}},As=function(l){for(var c=Zs(l.options.target).querySelectorAll(tm),a=0,d=c.length;a<d;a++){var m=c[a];m&&m.getAttribute(dn)!==Vd&&(im(l,m),m.parentNode&&m.parentNode.removeChild(m))}};function om(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Jd=function(l){var c=document.head,a=l||c,d=document.createElement("style"),m=(function(L){var b=Array.from(L.querySelectorAll("style[".concat(dn,"]")));return b[b.length-1]})(a),w=m!==void 0?m.nextSibling:null;d.setAttribute(dn,Vd),d.setAttribute(Qd,Mo);var S=om();return S&&d.setAttribute("nonce",S),a.insertBefore(d,w),d},lm=(function(){function l(c){this.element=Jd(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){var d;if(a.sheet)return a.sheet;for(var m=(d=a.getRootNode().styleSheets)!==null&&d!==void 0?d:document.styleSheets,w=0,S=m.length;w<S;w++){var L=m[w];if(L.ownerNode===a)return L}throw ui(17)})(this.element),this.length=0}return l.prototype.insertRule=function(c,a){try{return this.sheet.insertRule(a,c),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},l.prototype.getRule=function(c){var a=this.sheet.cssRules[c];return a&&a.cssText?a.cssText:""},l})(),sm=(function(){function l(c){this.element=Jd(c),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(c,a){if(c<=this.length&&c>=0){var d=document.createTextNode(a);return this.element.insertBefore(d,this.nodes[c]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},l.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},l})(),am=(function(){function l(c){this.rules=[],this.length=0}return l.prototype.insertRule=function(c,a){return c<=this.length&&(c===this.length?this.rules.push(a):this.rules.splice(c,0,a),this.length++,!0)},l.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},l.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},l})(),Nd=si,cm={isServer:!si,useCSSOMInjection:!Ah},ep=(function(){function l(c,a,d){c===void 0&&(c=pn),a===void 0&&(a={});var m=this;this.options=lt(lt({},cm),c),this.gs=a,this.names=new Map(d),this.server=!!c.isServer,!this.server&&si&&Nd&&(Nd=!1,As(this)),ca(this,function(){return(function(w){for(var S=w.getTag(),L=S.length,b="",G=function(B){var q=(function(me){return _o.get(me)})(B);if(q===void 0)return"continue";var se=w.names.get(q);if(se===void 0||!se.size)return"continue";var K=S.getGroup(B);if(K.length===0)return"continue";var W=dn+".g"+B+'[id="'+q+'"]',Q="";se.forEach(function(me){me.length>0&&(Q+=me+",")}),b+=K+W+'{content:"'+Q+'"}'+la},V=0;V<L;V++)G(V);return b})(m)})}return l.registerId=function(c){return ii(c)},l.prototype.rehydrate=function(){!this.server&&si&&As(this)},l.prototype.reconstructWithOptions=function(c,a){a===void 0&&(a=!0);var d=new l(lt(lt({},this.options),c),this.gs,a&&this.names||void 0);return!this.server&&si&&c.target!==this.options.target&&Zs(this.options.target)!==Zs(c.target)&&As(d),d},l.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(a){var d=a.useCSSOMInjection,m=a.target;return a.isServer?new am(m):d?new lm(m):new sm(m)})(this.options),new em(c)));var c},l.prototype.hasNameForId=function(c,a){var d,m;return(m=(d=this.names.get(c))===null||d===void 0?void 0:d.has(a))!==null&&m!==void 0&&m},l.prototype.registerName=function(c,a){ii(c);var d=this.names.get(c);d?d.add(a):this.names.set(c,new Set([a]))},l.prototype.insertRules=function(c,a,d){this.registerName(c,a),this.getTag().insertRules(ii(c),d)},l.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},l.prototype.clearRules=function(c){this.getTag().clearGroup(ii(c)),this.clearNames(c)},l.prototype.clearTag=function(){this.tag=void 0},l})(),um=/&/g,Qt=47,Ir=42;function Sd(l){if(l.indexOf("}")===-1)return!1;for(var c=l.length,a=0,d=0,m=!1,w=0;w<c;w++){var S=l.charCodeAt(w);if(d!==0||m||S!==Qt||l.charCodeAt(w+1)!==Ir)if(m)S===Ir&&l.charCodeAt(w+1)===Qt&&(m=!1,w++);else if(S!==34&&S!==39||w!==0&&l.charCodeAt(w-1)===92){if(d===0){if(S===123)a++;else if(S===125&&--a<0)return!0}}else d===0?d=S:d===S&&(d=0);else m=!0,w++}return a!==0||d!==0}function tp(l,c){return l.map(function(a){return a.type==="rule"&&(a.value="".concat(c," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(c," ")),a.props=a.props.map(function(d){return"".concat(c," ").concat(d)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=tp(a.children,c)),a})}function dm(l){var c,a,d,m=pn,w=m.options,S=w===void 0?pn:w,L=m.plugins,b=L===void 0?sa:L,G=function(K,W,Q){return Q.startsWith(a)&&Q.endsWith(a)&&Q.replaceAll(a,"").length>0?".".concat(c):K},V=b.slice();V.push(function(K){K.type===Io&&K.value.includes("&")&&(d||(d=new RegExp("\\".concat(a,"\\b"),"g")),K.props[0]=K.props[0].replace(um,a).replace(d,G))}),S.prefix&&V.push(Mh),V.push(Lh);var B=[],q=Rh(V.concat(Oh(function(K){return B.push(K)}))),se=function(K,W,Q,me){W===void 0&&(W=""),Q===void 0&&(Q=""),me===void 0&&(me="&"),c=me,a=W,d=void 0;var ce=(function(z){if(!Sd(z))return z;for(var X=z.length,U="",_=0,D=0,ve=0,Pe=!1,oe=0;oe<X;oe++){var _e=z.charCodeAt(oe);if(ve!==0||Pe||_e!==Qt||z.charCodeAt(oe+1)!==Ir)if(Pe)_e===Ir&&z.charCodeAt(oe+1)===Qt&&(Pe=!1,oe++);else if(_e!==34&&_e!==39||oe!==0&&z.charCodeAt(oe-1)===92){if(ve===0)if(_e===123)D++;else if(_e===125){if(--D<0){for(var Se=oe+1;Se<X;){var Ve=z.charCodeAt(Se);if(Ve===59||Ve===10)break;Se++}Se<X&&z.charCodeAt(Se)===59&&Se++,D=0,oe=Se-1,_=Se;continue}D===0&&(U+=z.substring(_,oe+1),_=oe+1)}else _e===59&&D===0&&(U+=z.substring(_,oe+1),_=oe+1)}else ve===0?ve=_e:ve===_e&&(ve=0);else Pe=!0,oe++}if(_<X){var qe=z.substring(_);Sd(qe)||(U+=qe)}return U})((function(z){if(z.indexOf("//")===-1)return z;for(var X=z.length,U=[],_=0,D=0,ve=0,Pe=0;D<X;){var oe=z.charCodeAt(D);if(oe!==34&&oe!==39||D!==0&&z.charCodeAt(D-1)===92)if(ve===0)if(oe===Qt&&D+1<X&&z.charCodeAt(D+1)===Ir){for(D+=2;D+1<X&&(z.charCodeAt(D)!==Ir||z.charCodeAt(D+1)!==Qt);)D++;D+=2}else if(oe===40&&D>=3&&(32|z.charCodeAt(D-1))==108&&(32|z.charCodeAt(D-2))==114&&(32|z.charCodeAt(D-3))==117)Pe=1,D++;else if(Pe>0)oe===41?Pe--:oe===40&&Pe++,D++;else if(oe===Ir&&D+1<X&&z.charCodeAt(D+1)===Qt)D>_&&U.push(z.substring(_,D)),_=D+=2;else if(oe===Qt&&D+1<X&&z.charCodeAt(D+1)===Qt){for(D>_&&U.push(z.substring(_,D));D<X&&z.charCodeAt(D)!==10;)D++;_=D}else D++;else D++;else ve===0?ve=oe:ve===oe&&(ve=0),D++}return _===0?z:(_<X&&U.push(z.substring(_)),U.join(""))})(K)),re=Ph(Q||W?"".concat(Q," ").concat(W," { ").concat(ce," }"):ce);return S.namespace&&(re=tp(re,S.namespace)),B=[],To(re,q),B};return se.hash=b.length?b.reduce(function(K,W){return W.name||ui(15),Pr(K,W.name)},5381).toString():"",se}var pm=new ep,Js=dm(),rp=pt.createContext({shouldForwardProp:void 0,styleSheet:pm,stylis:Js});rp.Consumer;pt.createContext(void 0);function Cd(){return pt.useContext(rp)}var fm=(function(){function l(c,a){var d=this;this.inject=function(m,w){w===void 0&&(w=Js);var S=d.name+w.hash;m.hasNameForId(d.id,S)||m.insertRules(d.id,S,w(d.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=a,ca(this,function(){throw ui(12,String(d.name))})}return l.prototype.getName=function(c){return c===void 0&&(c=Js),this.name+c.hash},l})();function hm(l,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||l in Dh||l.startsWith("--")?String(c).trim():"".concat(c,"px")}var mm=function(l){return l>="A"&&l<="Z"};function Ed(l){for(var c="",a=0;a<l.length;a++){var d=l[a];if(a===1&&d==="-"&&l[0]==="-")return l;mm(d)?c+="-"+d.toLowerCase():c+=d}return c.startsWith("ms-")?"-"+c:c}var np=function(l){return l==null||l===!1||l===""},ip=function(l){var c=[];for(var a in l){var d=l[a];l.hasOwnProperty(a)&&!np(d)&&(Array.isArray(d)&&d.isCss||fn(d)?c.push("".concat(Ed(a),":"),d,";"):ci(d)?c.push.apply(c,bo(bo(["".concat(a," {")],ip(d),!1),["}"],!1)):c.push("".concat(Ed(a),": ").concat(hm(a,d),";")))}return c};function Rr(l,c,a,d,m){if(m===void 0&&(m=[]),typeof l=="string")return l&&m.push(l),m;if(np(l))return m;if(aa(l))return m.push(".".concat(l.styledComponentId)),m;if(fn(l)){if(!fn(S=l)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(l),m;var w=l(c);return Rr(w,c,a,d,m)}var S;if(l instanceof fm)return a?(l.inject(a,d),m.push(l.getName(d))):m.push(l),m;if(ci(l)){for(var L=ip(l),b=0;b<L.length;b++)m.push(L[b]);return m}if(!Array.isArray(l))return m.push(l.toString()),m;for(b=0;b<l.length;b++)Rr(l[b],c,a,d,m);return m}function xm(l){for(var c=0;c<l.length;c+=1){var a=l[c];if(fn(a)&&!aa(a))return!1}return!0}var gm=Gd(Mo),vm=(function(){function l(c,a,d){this.rules=c,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&xm(c),this.componentId=a,this.baseHash=Pr(gm,a),this.baseStyle=d,ep.registerId(a)}return l.prototype.generateAndInjectStyles=function(c,a,d){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,a,d).className:"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))m=Lr(m,this.staticRulesId);else{var w=kd(Rr(this.rules,c,a,d)),S=Xs(Pr(this.baseHash,w)>>>0);if(!a.hasNameForId(this.componentId,S)){var L=d(w,".".concat(S),void 0,this.componentId);a.insertRules(this.componentId,S,L)}m=Lr(m,S),this.staticRulesId=S}else{for(var b=Pr(this.baseHash,d.hash),G="",V=0;V<this.rules.length;V++){var B=this.rules[V];if(typeof B=="string")G+=B;else if(B){var q=kd(Rr(B,c,a,d));b=Pr(Pr(b,String(V)),q),G+=q}}if(G){var se=Xs(b>>>0);if(!a.hasNameForId(this.componentId,se)){var K=d(G,".".concat(se),void 0,this.componentId);a.insertRules(this.componentId,se,K)}m=Lr(m,se)}}return{className:m,css:typeof window=="undefined"?a.getTag().getGroup(ii(this.componentId)):""}},l})(),op=pt.createContext(void 0);op.Consumer;var Fs={};function ym(l,c,a){var d=aa(l),m=l,w=!Ds(l),S=c.attrs,L=S===void 0?sa:S,b=c.componentId,G=b===void 0?(function(z,X){var U=typeof z!="string"?"sc":xd(z);Fs[U]=(Fs[U]||0)+1;var _="".concat(U,"-").concat($h(Mo+U+Fs[U]));return X?"".concat(X,"-").concat(_):_})(c.displayName,c.parentComponentId):b,V=c.displayName,B=V===void 0?(function(z){return Ds(z)?"styled.".concat(z):"Styled(".concat(Vh(z),")")})(l):V,q=c.displayName&&c.componentId?"".concat(xd(c.displayName),"-").concat(c.componentId):c.componentId||G,se=d&&m.attrs?m.attrs.concat(L).filter(Boolean):L,K=c.shouldForwardProp;if(d&&m.shouldForwardProp){var W=m.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;K=function(z,X){return W(z,X)&&Q(z,X)}}else K=W}var me=new vm(a,q,d?m.componentStyle:void 0);function ce(z,X){return(function(U,_,D){var ve=U.attrs,Pe=U.componentStyle,oe=U.defaultProps,_e=U.foldedComponentIds,Se=U.styledComponentId,Ve=U.target,qe=pt.useContext(op),Qe=Cd(),ye=U.shouldForwardProp||Qe.shouldForwardProp,T=Bh(_,qe,oe)||pn,F=(function(ie,ue,ae){for(var xe,Ee=lt(lt({},ue),{className:void 0,theme:ae}),Gt=0;Gt<ie.length;Gt+=1){var gr=fn(xe=ie[Gt])?xe(Ee):xe;for(var wt in gr)wt==="className"?Ee.className=Lr(Ee.className,gr[wt]):wt==="style"?Ee.style=lt(lt({},Ee.style),gr[wt]):Ee[wt]=gr[wt]}return"className"in ue&&typeof ue.className=="string"&&(Ee.className=Lr(Ee.className,ue.className)),Ee})(ve,_,T),P=F.as||Ve,x={};for(var k in F)F[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&F.theme===T||(k==="forwardedAs"?x.as=F.forwardedAs:ye&&!ye(k,P)||(x[k]=F[k]));var Z=(function(ie,ue){var ae=Cd(),xe=ie.generateAndInjectStyles(ue,ae.styleSheet,ae.stylis);return xe})(Pe,F),J=Z.className,le=Lr(_e,Se);return J&&(le+=" "+J),F.className&&(le+=" "+F.className),x[Ds(P)&&!Yd.has(P)?"class":"className"]=le,D&&(x.ref=D),Re.createElement(P,x)})(re,z,X)}ce.displayName=B;var re=pt.forwardRef(ce);return re.attrs=se,re.componentStyle=me,re.displayName=B,re.shouldForwardProp=K,re.foldedComponentIds=d?Lr(m.foldedComponentIds,m.styledComponentId):"",re.styledComponentId=q,re.target=d?m.target:l,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=d?(function(X){for(var U=[],_=1;_<arguments.length;_++)U[_-1]=arguments[_];for(var D=0,ve=U;D<ve.length;D++)qs(X,ve[D],!0);return X})({},m.defaultProps,z):z}}),ca(re,function(){return".".concat(re.styledComponentId)}),w&&Zd(re,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function bd(l,c){for(var a=[l[0]],d=0,m=c.length;d<m;d+=1)a.push(c[d],l[d+1]);return a}var Td=function(l){return Object.assign(l,{isCss:!0})};function wm(l){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];if(fn(l)||ci(l))return Td(Rr(bd(sa,bo([l],c,!0))));var d=l;return c.length===0&&d.length===1&&typeof d[0]=="string"?Rr(d):Td(Rr(bd(d,c)))}function ea(l,c,a){if(a===void 0&&(a=pn),!c)throw ui(1,c);var d=function(m){for(var w=[],S=1;S<arguments.length;S++)w[S-1]=arguments[S];return l(c,a,wm.apply(void 0,bo([m],w,!1)))};return d.attrs=function(m){return ea(l,c,lt(lt({},a),{attrs:Array.prototype.concat(a.attrs,m).filter(Boolean)}))},d.withConfig=function(m){return ea(l,c,lt(lt({},a),m))},d}var lp=function(l){return ea(ym,l)},fe=lp;Yd.forEach(function(l){fe[l]=lp(l)});const Bs={Wrapper:fe.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:fe.header`
        height: 64px;
        flex-shrink: 0;
    `,Main:fe.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            flex-shrink: 0;
        }

        /* Topic wrappers - used for same-page scroll targeting */
        .topicWrapper {
            scroll-margin-top: 84px;
        }

        /* Optional - tiny spacing consistency */
        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        /* Pulse highlight when About scrolls here */
        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 28%, transparent);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 0%, transparent);
                border-radius: 18px;
            }
        }
    `};var sp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_d=pt.createContext&&pt.createContext(sp),km=["attr","size","title"];function jm(l,c){if(l==null)return{};var a=Nm(l,c),d,m;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(l);for(m=0;m<w.length;m++)d=w[m],!(c.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(l,d)&&(a[d]=l[d])}return a}function Nm(l,c){if(l==null)return{};var a={};for(var d in l)if(Object.prototype.hasOwnProperty.call(l,d)){if(c.indexOf(d)>=0)continue;a[d]=l[d]}return a}function zo(){return zo=Object.assign?Object.assign.bind():function(l){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(l[d]=a[d])}return l},zo.apply(this,arguments)}function zd(l,c){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);c&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(l,m).enumerable})),a.push.apply(a,d)}return a}function Po(l){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?zd(Object(a),!0).forEach(function(d){Sm(l,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):zd(Object(a)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(a,d))})}return l}function Sm(l,c,a){return c=Cm(c),c in l?Object.defineProperty(l,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[c]=a,l}function Cm(l){var c=Em(l,"string");return typeof c=="symbol"?c:c+""}function Em(l,c){if(typeof l!="object"||!l)return l;var a=l[Symbol.toPrimitive];if(a!==void 0){var d=a.call(l,c);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(l)}function ap(l){return l&&l.map((c,a)=>pt.createElement(c.tag,Po({key:a},c.attr),ap(c.child)))}function te(l){return c=>pt.createElement(bm,zo({attr:Po({},l.attr)},c),ap(l.child))}function bm(l){var c=a=>{var{attr:d,size:m,title:w}=l,S=jm(l,km),L=m||a.size||"1em",b;return a.className&&(b=a.className),l.className&&(b=(b?b+" ":"")+l.className),pt.createElement("svg",zo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,d,S,{className:b,style:Po(Po({color:l.color||a.color},a.style),l.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),w&&pt.createElement("title",null,w),l.children)};return _d!==void 0?pt.createElement(_d.Consumer,null,a=>c(a)):c(sp)}function Tm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(l)}function Mr(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(l)}function _m(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(l)}function Pd(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(l)}function Ot(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(l)}function xn(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(l)}function zm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(l)}function xr(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(l)}function Pm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(l)}function Id(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(l)}function ta(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(l)}function cp(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(l)}function Im(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(l)}function Lm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(l)}function Rm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(l)}function Om(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(l)}function Ld(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(l)}function Mm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(l)}function Dm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(l)}function Rd(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(l)}function Am(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(l)}function Fm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(l)}function hn(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(l)}function Bm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(l)}function Wm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(l)}function Um(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(l)}function Hm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(l)}function $m(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(l)}function ko(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},child:[]},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"},child:[]}]})(l)}function oi(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(l)}function Od(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(l)}function ra(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(l)}function Yt(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(l)}function Vm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(l)}function up(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(l)}function Ws(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(l)}function Qm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(l)}function Ym(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(l)}function Gm(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(l)}function ua(l){return te({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(l)}const Md={Wrapper:fe.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Testing vibe - verification glow + subtle assertion grid */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    760px 220px at 16% 0%,
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                    transparent 66%
                ),
                radial-gradient(
                    620px 200px at 86% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 28px
                ),
                repeating-linear-gradient(
                    0deg,
                    color-mix(in srgb, var(--color-border) 12%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 12%, transparent) 1px,
                    transparent 1px,
                    transparent 28px
                );

            opacity: 0.62;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                color-mix(
                    in srgb,
                    var(--color-primary) 55%,
                    var(--color-accent)
                ),
                transparent
            );
            opacity: 0.92;
        }
    `,Main:fe.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 14%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 760px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Dd="software-testing-core-notes-theme",Km=()=>{const[l,c]=Re.useState(()=>localStorage.getItem(Dd)||"dark");Re.useEffect(()=>{document.documentElement.toggleAttribute("data-theme",l==="light"),localStorage.setItem(Dd,l)},[l]);const a=Re.useMemo(()=>l==="light"?"dark":"light",[l]);return o.jsx(Md.Wrapper,{children:o.jsxs(Md.Main,{children:[o.jsx("div",{className:"leftSide",children:o.jsxs("div",{className:"logoNameWrapper",children:[o.jsx("div",{className:"logoWrapper",children:o.jsx("img",{src:"/software-testing-core-notes/logo.png",alt:"Software testing core notes"})}),o.jsxs("div",{className:"nameWrapper",children:[o.jsx("div",{className:"title",children:"software-testing-core-notes"}),o.jsx("div",{className:"subTitle",children:"Unit testing, integration, API testing, TDD, mocking, and coverage"})]}),o.jsxs("div",{className:"pillRow",children:[o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"sIcon",children:o.jsx(Ot,{})}),o.jsx("span",{children:"Tests"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"sIcon",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Quality"})]})]})]})}),o.jsx("div",{className:"rightSide",children:o.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>c(d=>d==="light"?"dark":"light"),"aria-label":"Switch to "+a+" theme",title:"Switch to "+a,children:[o.jsx("span",{className:"icon",children:l==="light"?o.jsx($m,{}):o.jsx(Vm,{})}),o.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})})]})})},Xm={Wrapper:fe.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 15px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .footerCopy a {
            color: var(--color-text-secondary);
            font-weight: 700;
            transition: color 160ms ease, text-shadow 160ms ease;
        }

        .footerCopy a:hover {
            color: var(--color-text-primary);
            text-shadow: 0 0 14px
                color-mix(in srgb, var(--color-primary) 30%, transparent);
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .footerLinks a {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-muted);
            transition:
                border-color 160ms ease,
                color 160ms ease,
                box-shadow 160ms ease;
        }

        .footerLinks a:hover {
            color: var(--color-primary);
            border-color: var(--color-border-light);
            box-shadow: 0 0 15px
                color-mix(in srgb, var(--color-primary) 18%, transparent);
        }

        .footerLinks svg {
            width: 16px;
            height: 16px;
        }

        @media (width < 600px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;

            .footerLinks {
                justify-content: flex-start;
            }
        }
    `},qm=[["Portfolio","https://www.ashishranjan.net/",Dm],["GitHub","https://github.com/a2rp",Mm],["CodePen","https://codepen.io/ash1198",xr],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Um],["Facebook","https://www.facebook.com/theash.ashish/",Lm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Gm],["Support","https://a2rp-donation-page.netlify.app/",Rd],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Pm],["Patreon","https://patreon.com/a2rp",Rd],["Email","mailto:ash.ranjan09@gmail.com",Hm]],Zm=()=>o.jsxs(Xm.Wrapper,{children:[o.jsxs("div",{className:"footerCopy",children:["Copyright © ",new Date().getFullYear()," ",o.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),o.jsx("div",{className:"footerLinks","aria-label":"Social and support links",children:qm.map(([l,c,a])=>o.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":l,title:l,children:Re.createElement(a,{"aria-hidden":!0})},l))})]}),$t={Wrapper:fe.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 16px;
    `,Container:fe.div`
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    `,Header:fe.h1`
        font-size: 34px;
        font-weight: 900;
        color: var(--color-text-primary);
    `,SubHeader:fe.p`
        font-size: 16px;
        color: var(--color-text-secondary);
        max-width: 720px;
        line-height: 1.6;
    `,Grid:fe.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 18px;
    `,Card:fe.div`
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        border: 1px solid var(--color-border);
        border-radius: 14px;
        padding: 22px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        box-shadow: 0 10px 24px var(--color-shadow);

        transition:
            transform 0.15s ease,
            border-color 0.15s ease;

        &:hover {
            transform: translateY(-3px);
            border-color: var(--color-border-light);
        }

        .icon {
            font-size: 22px;
            color: var(--color-primary);
            display: inline-flex;
        }

        .title {
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }
    `},Jm=()=>o.jsx($t.Wrapper,{children:o.jsxs($t.Container,{children:[o.jsx($t.Header,{children:"Software Testing Core Notes"}),o.jsx($t.SubHeader,{children:"Understanding how software is verified, validated, and made reliable in real production systems."}),o.jsxs($t.Grid,{children:[o.jsxs($t.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Ot,{})}),o.jsx("div",{className:"title",children:"Unit Testing"}),o.jsx("p",{children:"Unit testing verifies small pieces of code such as functions, utilities, and classes. These tests run fast and help detect bugs early during development."})]}),o.jsxs($t.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(hn,{})}),o.jsx("div",{className:"title",children:"Integration Testing"}),o.jsx("p",{children:"Integration tests verify how multiple components interact with each other such as APIs, databases, and services working together."})]}),o.jsxs($t.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Yt,{})}),o.jsx("div",{className:"title",children:"Quality Assurance"}),o.jsx("p",{children:"Testing improves reliability and confidence in software systems. It ensures that changes do not break existing functionality."})]}),o.jsxs($t.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Tm,{})}),o.jsx("div",{className:"title",children:"Coverage and Monitoring"}),o.jsx("p",{children:"Code coverage tools help identify which parts of the system are tested and which parts still need validation."})]})]})]})}),ex={Button:fe.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9999;

        width: 48px;
        height: 48px;

        display: grid;
        place-items: center;

        border-radius: 14px;
        border: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-primary) 26%, transparent);
        color: var(--color-text-primary);

        box-shadow: 0 16px 44px var(--color-shadow);

        cursor: pointer;

        transition:
            transform 140ms ease,
            opacity 160ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        svg {
            width: 20px;
            height: 20px;
        }

        &.hide {
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px) scale(0.98);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px) scale(1);
        }

        &:hover {
            transform: translateY(-2px) scale(1.02);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 34%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px) scale(1);
        }
    `},tx=({scrollerRef:l})=>{const[c,a]=Re.useState(!1);Re.useEffect(()=>{const m=l==null?void 0:l.current;if(!m)return;const w=()=>{const S=m.scrollTop||0;a(S>350)};return w(),m.addEventListener("scroll",w),()=>m.removeEventListener("scroll",w)},[l]);const d=()=>{const m=l==null?void 0:l.current;m&&m.scrollTo({top:0,behavior:"smooth"})};return o.jsx(ex.Button,{type:"button",onClick:d,className:c?"show":"hide","aria-label":"Go to top",title:"Go to top",children:o.jsx(_m,{})})},Us={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;

        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 4000px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},rx=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"Unit Testing",subTitle:"Test a single unit of code (function or class method) in isolation using fast, repeatable checks.",chips:[{icon:o.jsx(Pd,{}),label:"Small scope"},{icon:o.jsx(ua,{}),label:"Fast feedback"},{icon:o.jsx(ta,{}),label:"Runs locally"}]}),[]);return o.jsxs(Us.Wrapper,{id:"unit-testing",children:[o.jsxs(Us.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(Ot,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"unit-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs(Us.Panel,{id:"unit-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Am,{})}),o.jsx("span",{children:"What is a unit"})]}),o.jsx("div",{className:"text",children:'In unit testing, a "unit" usually means:'}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- a single function"}),o.jsx("li",{children:"- a method of a class"}),o.jsx("li",{children:"- a tiny module that does one job"})]}),o.jsx("div",{className:"text",children:"Unit tests try to keep the unit isolated so the test fails only when that unit is wrong."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"What unit tests should not do"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- do not hit real databases"}),o.jsx("li",{children:"- do not call real network APIs"}),o.jsx("li",{children:"- do not depend on system time"}),o.jsx("li",{children:"- do not depend on random values"})]}),o.jsx("div",{className:"note",children:"If you must use these dependencies, mock them or test them in integration tests."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example 1 - pure function"})]}),o.jsx("div",{className:"text",children:"Pure functions are easiest to unit test because they only depend on inputs and return outputs."}),o.jsx("pre",{className:"code",children:`// file: price.js
export const calcTotal = (items) => {
    // items: [{ price: number, qty: number }]
    return items.reduce((sum, it) => sum + it.price * it.qty, 0);
};

// file: price.test.js (pseudo example)
import { calcTotal } from "./price";

test("calcTotal adds price * qty for all items", () => {
    const items = [
        { price: 100, qty: 2 },
        { price: 50, qty: 3 }
    ];
    expect(calcTotal(items)).toBe(350);
});`}),o.jsx("div",{className:"text",children:"What we are checking:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- correct math for multiple items"}),o.jsx("li",{children:"- deterministic output for given input"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ta,{})}),o.jsx("span",{children:"Example 2 - function with dependency"})]}),o.jsx("div",{className:"text",children:'If your function depends on something external like "fetch" or a database client, mock the dependency.'}),o.jsx("pre",{className:"code",children:`// file: userService.js
export const makeUserService = ({ http }) => {
    const getUserName = async (id) => {
        const res = await http.get(\`/users/\${id}\`);
        return res.data.name;
    };

    return { getUserName };
};

// file: userService.test.js (pseudo example)
test("getUserName returns name from API response", async () => {
    const httpMock = {
        get: async () => ({ data: { name: "Neha" } })
    };

    const svc = makeUserService({ http: httpMock });
    await expect(svc.getUserName(10)).resolves.toBe("Neha");
});`}),o.jsx("div",{className:"note",children:"Key idea: inject dependency, then replace it with a mock in unit tests."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ot,{})}),o.jsx("span",{children:"AAA pattern"})]}),o.jsx("div",{className:"text",children:"Most unit tests follow AAA:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- Arrange - set up inputs and mocks"}),o.jsx("li",{children:"- Act - call the function"}),o.jsx("li",{children:"- Assert - check the output"})]}),o.jsx("div",{className:"text",children:"This makes tests readable and consistent."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pd,{})}),o.jsx("span",{children:"What makes a good unit test"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- tests one idea, not ten"}),o.jsx("li",{children:"- name describes behavior"}),o.jsx("li",{children:"- stable, no flaky timing"}),o.jsx("li",{children:"- fast, runs in milliseconds"}),o.jsx("li",{children:"- clear failure message"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Common mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- testing implementation details instead of behavior"}),o.jsx("li",{children:"- too much mocking until test becomes meaningless"}),o.jsx("li",{children:"- coupling tests to exact UI markup (use integration for that)"}),o.jsx("li",{children:"- writing one giant test for everything"})]}),o.jsx("div",{className:"note",children:"Rule of thumb: test behavior and outcomes, not internal lines of code."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(Ot,{})}),o.jsx("span",{children:"Unit tests are your first safety net. They keep refactoring safe and development fast."})]})]})]})},Hs={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;

        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 5000px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .compare {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 2px;

            .row {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .v {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},nx=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"Integration Testing",subTitle:"Test how multiple units work together - services, modules, database layers, and APIs - to catch interface bugs.",chips:[{icon:o.jsx(Ld,{}),label:"Works together"},{icon:o.jsx(ra,{}),label:"Real-ish deps"},{icon:o.jsx(Yt,{}),label:"Confidence"}]}),[]);return o.jsxs(Hs.Wrapper,{id:"integration-testing",children:[o.jsxs(Hs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(hn,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"integration-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs(Hs.Panel,{id:"integration-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Bm,{})}),o.jsx("span",{children:"What is integration testing"})]}),o.jsx("div",{className:"text",children:"Integration testing verifies that multiple parts of a system work correctly together. The goal is to catch bugs that happen at boundaries:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- API layer to service layer"}),o.jsx("li",{children:"- service layer to database layer"}),o.jsx("li",{children:"- one module to another module"}),o.jsx("li",{children:"- service to external dependency adapters"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ot,{})}),o.jsx("span",{children:"When to prefer integration tests"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- when bugs often happen in wiring and config"}),o.jsx("li",{children:"- when API contracts can break"}),o.jsx("li",{children:"- when data mapping and validation matter"}),o.jsx("li",{children:"- when multiple layers combine to produce behavior"})]}),o.jsx("div",{className:"note",children:"Unit tests check correctness of small logic. Integration tests check correctness of collaboration."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ld,{})}),o.jsx("span",{children:"Unit vs integration - quick compare"})]}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Scope"}),o.jsx("div",{className:"v",children:"Unit - one function or class method - Integration - multiple modules working together"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Dependencies"}),o.jsx("div",{className:"v",children:"Unit - mocked - Integration - real-ish (in memory db, test containers, stub servers)"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Speed"}),o.jsx("div",{className:"v",children:"Unit - fastest - Integration - slower but higher confidence"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Bugs caught"}),o.jsx("div",{className:"v",children:"Unit - logic bugs - Integration - wiring, schema, serialization, config bugs"})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example 1 - API route + service"})]}),o.jsx("div",{className:"text",children:"Suppose you have an API route that calls a service. An integration test can spin up the app and call the route to verify the whole flow."}),o.jsx("pre",{className:"code",children:`// file: app.js (pseudo)
import express from "express";
import { makeUserService } from "./userService.js";

export const makeApp = ({ userService }) => {
    const app = express();
    app.use(express.json());

    app.get("/users/:id", async (req, res) => {
        const user = await userService.getById(Number(req.params.id));
        if (!user) return res.status(404).json({ message: "Not found" });
        return res.json({ id: user.id, name: user.name });
    });

    return app;
};

// integration test (pseudo)
test("GET /users/:id returns user data", async () => {
    const fakeUsers = [{ id: 1, name: "Neha" }];
    const userService = {
        getById: async (id) => fakeUsers.find((u) => u.id === id) || null
    };

    const app = makeApp({ userService });

    // supertest-like call (pseudo)
    const res = await request(app).get("/users/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: 1, name: "Neha" });
});`}),o.jsx("div",{className:"note",children:"This test checks routing, parameter parsing, status codes, JSON shape, and service integration."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(cp,{})}),o.jsx("span",{children:"Example 2 - service + database (in memory)"})]}),o.jsx("div",{className:"text",children:"For integration tests, you can use an in memory database or a test database. The key idea is: verify real queries and schema behavior."}),o.jsx("pre",{className:"code",children:`// file: repo.js (pseudo)
export const makeUserRepo = ({ db }) => {
    const create = async ({ name }) => {
        const id = await db.insertUser({ name });
        return { id, name };
    };

    const getById = async (id) => db.findUserById(id);

    return { create, getById };
};

// integration test (pseudo)
test("create then read user", async () => {
    const db = makeInMemoryDb(); // fake db with real constraints simulated
    const repo = makeUserRepo({ db });

    const created = await repo.create({ name: "Niraj" });
    const found = await repo.getById(created.id);

    expect(found).toEqual({ id: created.id, name: "Niraj" });
});`}),o.jsx("div",{className:"note",children:"If you replace makeInMemoryDb with a real dockerized database in CI, this becomes an even stronger integration test."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"Common pain points"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- tests become slow if too many layers are included"}),o.jsx("li",{children:"- flaky failures due to timing or network"}),o.jsx("li",{children:"- shared test database state causing collisions"}),o.jsx("li",{children:"- hard to debug if logs are not captured"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Best practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- use a fresh database per test or per test suite"}),o.jsx("li",{children:"- clean up state (transactions or reset)"}),o.jsx("li",{children:"- keep test data small and readable"}),o.jsx("li",{children:"- assert on behavior and contract"}),o.jsx("li",{children:"- run integration tests in CI pipeline"})]}),o.jsx("div",{className:"note",children:"Keep integration tests fewer than unit tests. They are heavier but more valuable per test."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ra,{})}),o.jsx("span",{children:"Test pyramid in practice"})]}),o.jsx("div",{className:"text",children:"A common guideline is the test pyramid:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- many unit tests"}),o.jsx("li",{children:"- some integration tests"}),o.jsx("li",{children:"- few end to end tests"})]}),o.jsx("div",{className:"note",children:"Integration tests sit in the middle. They are slower than unit tests but much faster than full browser based end to end tests."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(hn,{})}),o.jsx("span",{children:"Integration tests protect the seams of your system - routing, serialization, schema, configuration, and module boundaries."})]})]})]})},$s={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 4800px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .compare {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 2px;

            .row {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .v {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},ix=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"API Testing",subTitle:"Verify HTTP APIs by testing request and response behavior - status codes, headers, body shape, auth, and error handling.",chips:[{icon:o.jsx(ra,{}),label:"HTTP contracts"},{icon:o.jsx(Yt,{}),label:"Auth + security"},{icon:o.jsx(zm,{}),label:"Reliable responses"}]}),[]);return o.jsxs($s.Wrapper,{id:"api-testing",children:[o.jsxs($s.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(Od,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"api-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs($s.Panel,{id:"api-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Wm,{})}),o.jsx("span",{children:"What is API testing"})]}),o.jsx("div",{className:"text",children:"API testing checks whether an API behaves correctly from the client point of view. You send a request and verify:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- status code (200, 201, 400, 401, 404, 500)"}),o.jsx("li",{children:"- response body shape (JSON fields and types)"}),o.jsx("li",{children:"- headers (content-type, cache-control)"}),o.jsx("li",{children:"- auth behavior (token, cookie, permissions)"}),o.jsx("li",{children:"- error messages and validation"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ot,{})}),o.jsx("span",{children:"What good API tests cover"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- happy path - correct request returns correct data"}),o.jsx("li",{children:"- bad input - validation errors are correct"}),o.jsx("li",{children:"- auth - protected routes block unauthorized users"}),o.jsx("li",{children:"- permissions - role based access is enforced"}),o.jsx("li",{children:"- edge cases - empty lists, large payloads, missing records"})]}),o.jsx("div",{className:"note",children:"Always test both success and failure behavior. Production bugs usually happen in failure paths."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rm,{})}),o.jsx("span",{children:"Contract mindset"})]}),o.jsx("div",{className:"text",children:"Think of an API as a contract between frontend and backend. If the backend changes response shape, the frontend can break. API tests protect this contract."}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Request"}),o.jsx("div",{className:"v",children:"method, url, headers, query params, body"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Response"}),o.jsx("div",{className:"v",children:"status, headers, JSON schema, error format"})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example 1 - test a GET endpoint"})]}),o.jsx("div",{className:"text",children:"A basic API test verifies that the endpoint returns correct status code and response JSON."}),o.jsx("pre",{className:"code",children:`// pseudo example using a request helper (supertest-like)
//
// GET /health should return 200 and a predictable payload.

test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);

    // contract check
    expect(res.body).toEqual({
        ok: true
    });
});`}),o.jsx("div",{className:"note",children:"This is a contract test. If the health route changes, the test fails and warns you early."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Fm,{})}),o.jsx("span",{children:"Example 2 - test auth and protected routes"})]}),o.jsx("div",{className:"text",children:"API tests should verify correct behavior for:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- missing auth token or cookie"}),o.jsx("li",{children:"- invalid token"}),o.jsx("li",{children:"- valid token but not enough permission"})]}),o.jsx("pre",{className:"code",children:`// pseudo example
//
// GET /me requires authentication.

test("GET /me without auth returns 401", async () => {
    const res = await request(app).get("/me");
    expect(res.status).toBe(401);
    expect(res.body.message).toBeDefined();
});

test("GET /me with auth returns profile", async () => {
    const token = await createTestToken({ userId: 10 });

    const res = await request(app)
        .get("/me")
        .set("Authorization", \`Bearer \${token}\`);

    expect(res.status).toBe(200);
    expect(res.body.userId).toBe(10);
});`})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"Common API testing mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- only testing happy path"}),o.jsx("li",{children:"- asserting exact error text too strictly"}),o.jsx("li",{children:"- sharing test data between tests (flaky)"}),o.jsx("li",{children:"- not resetting database state"}),o.jsx("li",{children:"- ignoring headers and content type"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Best practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- keep response shape stable and documented"}),o.jsx("li",{children:"- use test database or isolated state per suite"}),o.jsx("li",{children:"- use factories for creating test data"}),o.jsx("li",{children:"- assert key fields, not every field"}),o.jsx("li",{children:"- cover status codes and error formats"})]}),o.jsx("div",{className:"note",children:"Test what clients depend on - status codes, field names, types, and error formats."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(Od,{})}),o.jsx("span",{children:"API tests protect contracts between services and clients - they prevent silent breaking changes."})]})]})]})},Vs={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 5200px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .step {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .badge {
                display: inline-flex;
                align-items: center;
                gap: 10px;

                padding: 8px 10px;
                border-radius: 999px;
                width: fit-content;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface) 70%,
                    transparent
                );

                font-weight: 900;
                color: var(--color-text-primary);

                svg {
                    width: 16px;
                    height: 16px;
                }
            }

            .badge.red {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-error) 18%, transparent);
            }

            .badge.green {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-success) 18%, transparent);
            }

            .badge.refactor {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
            }

            .desc {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .inlineCode {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-code-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},ox=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"TDD",subTitle:"Test Driven Development - write tests first, then write the simplest code to pass, then refactor safely.",chips:[{icon:o.jsx(oi,{}),label:"Red - Green - Refactor"},{icon:o.jsx(ua,{}),label:"Fast feedback"},{icon:o.jsx(Ws,{}),label:"Refactor safe"}]}),[]);return o.jsxs(Vs.Wrapper,{id:"tdd",children:[o.jsxs(Vs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(oi,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"tdd-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs(Vs.Panel,{id:"tdd-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(up,{})}),o.jsx("span",{children:"What is TDD"})]}),o.jsx("div",{className:"text",children:"TDD is a development workflow where you:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- write a test for a tiny requirement"}),o.jsx("li",{children:"- run it and watch it fail"}),o.jsx("li",{children:"- write minimal code to make it pass"}),o.jsx("li",{children:"- refactor the code while tests stay green"})]}),o.jsx("div",{className:"note",children:"The test becomes an executable specification of the behavior."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(oi,{})}),o.jsx("span",{children:"Red - Green - Refactor"})]}),o.jsxs("div",{className:"flow",children:[o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge red",children:[o.jsx(Ym,{}),o.jsx("span",{children:"Red"})]}),o.jsx("div",{className:"desc",children:"Write a test that fails. This proves the test can catch the missing behavior."})]}),o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge green",children:[o.jsx(Ot,{}),o.jsx("span",{children:"Green"})]}),o.jsx("div",{className:"desc",children:"Write the simplest code that passes the test. No extra features."})]}),o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge refactor",children:[o.jsx(Ws,{}),o.jsx("span",{children:"Refactor"})]}),o.jsx("div",{className:"desc",children:"Improve structure, remove duplication, rename things, keep tests passing."})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example - build a tiny function using TDD"})]}),o.jsxs("div",{className:"text",children:["Requirement: create a function"," ",o.jsx("span",{className:"inlineCode",children:"isEven(n)"})," that returns true for even numbers."]}),o.jsx("pre",{className:"code",children:`// Step 1 - Red (write a failing test)
test("isEven returns true for 2", () => {
    expect(isEven(2)).toBe(true);
});

// Step 2 - Green (minimal implementation)
export const isEven = (n) => {
    return n % 2 === 0;
};

// Step 3 - Refactor (if needed)
// for this case, it's already simple, so no refactor needed`}),o.jsx("div",{className:"note",children:"TDD encourages building features in small slices. Each slice becomes safe to change later."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Im,{})}),o.jsx("span",{children:"TDD micro loop and scope"})]}),o.jsx("div",{className:"text",children:"TDD works best when you keep iterations tiny:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- one test per behavior"}),o.jsx("li",{children:"- minimal code per test"}),o.jsx("li",{children:"- refactor after each green state"})]}),o.jsx("div",{className:"text",children:"If you write 20 tests first, you are not doing TDD. You are just writing tests."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(hn,{})}),o.jsx("span",{children:"TDD vs writing tests later"})]}),o.jsx("div",{className:"text",children:"Writing tests later is still useful, but TDD changes how you design code."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- forces dependency injection naturally"}),o.jsx("li",{children:"- reduces tight coupling"}),o.jsx("li",{children:"- encourages small functions"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"Common mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- writing tests for implementation details"}),o.jsx("li",{children:"- writing too much code before tests"}),o.jsx("li",{children:"- skipping refactor step"}),o.jsx("li",{children:"- writing huge tests that cover everything"}),o.jsx("li",{children:"- using TDD for UI pixel perfect behavior"})]}),o.jsx("div",{className:"note",children:"TDD is strongest for business logic, rules, and service layers."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ws,{})}),o.jsx("span",{children:"Where TDD shines"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- complex business rules"}),o.jsx("li",{children:"- validators and parsers"}),o.jsx("li",{children:"- pricing and billing logic"}),o.jsx("li",{children:"- authorization and permission rules"}),o.jsx("li",{children:"- state machines and workflows"})]}),o.jsx("div",{className:"note",children:"TDD is not a religion. Use it where it gives you value."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(oi,{})}),o.jsx("span",{children:"TDD is a loop: define behavior with a test, make it pass quickly, then refactor with confidence."})]})]})]})},Qs={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 5200px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .compare {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 2px;

            .row {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .v {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},lx=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"Mocking",subTitle:"Replace real dependencies with controlled fakes so tests stay fast, predictable, and focused on behavior.",chips:[{icon:o.jsx(ta,{}),label:"Isolation"},{icon:o.jsx(ua,{}),label:"Deterministic"},{icon:o.jsx(Yt,{}),label:"Stable tests"}]}),[]);return o.jsxs(Qs.Wrapper,{id:"mocking",children:[o.jsxs(Qs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(Id,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"mocking-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs(Qs.Panel,{id:"mocking-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(hn,{})}),o.jsx("span",{children:"What is mocking"})]}),o.jsx("div",{className:"text",children:"Mocking means replacing a real dependency with a fake one during a test. This helps you test one unit in isolation."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- replace real HTTP calls with a fake client"}),o.jsx("li",{children:"- replace real database with an in memory store"}),o.jsx("li",{children:"- replace time and randomness with fixed values"})]}),o.jsx("div",{className:"note",children:"Goal: keep tests fast and predictable."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"When mocking is necessary"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- dependency is slow or expensive (db, network)"}),o.jsx("li",{children:"- dependency is unstable (external API)"}),o.jsx("li",{children:"- dependency is non deterministic (time, random)"}),o.jsx("li",{children:"- dependency causes side effects (email, payments)"})]}),o.jsx("div",{className:"note",children:"If the test calls the real world, the real world will eventually fail you."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example 1 - mock an HTTP client"})]}),o.jsx("div",{className:"text",children:"Instead of calling a real API, inject a dependency and mock it."}),o.jsx("pre",{className:"code",children:`// file: weatherService.js
export const makeWeatherService = ({ http }) => {
    const getTempC = async (city) => {
        const res = await http.get(\`/weather?city=\${city}\`);
        return res.data.tempC;
    };

    return { getTempC };
};

// file: weatherService.test.js (pseudo)
test("getTempC returns temperature from API response", async () => {
    const httpMock = {
        get: async () => ({ data: { tempC: 28 } })
    };

    const svc = makeWeatherService({ http: httpMock });
    await expect(svc.getTempC("Bangalore")).resolves.toBe(28);
});`}),o.jsx("div",{className:"note",children:"This test is fast because it does not call a real network."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(oi,{})}),o.jsx("span",{children:"Mock vs stub vs fake - simple meaning"})]}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Stub"}),o.jsx("div",{className:"v",children:"returns fixed data, no behavior tracking - example: a function that always returns 10"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Mock"}),o.jsx("div",{className:"v",children:"returns data and tracks how it was called - example: verify it was called with correct args"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Fake"}),o.jsx("div",{className:"v",children:"a working lightweight implementation - example: in memory database"})]})]}),o.jsx("div",{className:"note",children:'In real teams, people often say "mock" for all three. Context matters.'})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(cp,{})}),o.jsx("span",{children:"Example 2 - fake database instead of real DB"})]}),o.jsx("div",{className:"text",children:"Unit tests should avoid real databases. A fake can simulate storage behavior."}),o.jsx("pre",{className:"code",children:`// file: userRepo.js
export const makeUserRepo = ({ store }) => {
    const create = async ({ id, name }) => {
        store.set(id, { id, name });
        return { id, name };
    };

    const getById = async (id) => {
        return store.get(id) || null;
    };

    return { create, getById };
};

// test (pseudo)
test("create then read user using fake store", async () => {
    const store = new Map();
    const repo = makeUserRepo({ store });

    await repo.create({ id: 1, name: "Neha" });
    await expect(repo.getById(1)).resolves.toEqual({ id: 1, name: "Neha" });
});`}),o.jsx("div",{className:"note",children:"This is a fake that behaves like storage without requiring DB setup."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Good mocking practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- mock only what you do not own (network, db, time)"}),o.jsx("li",{children:"- keep mock behavior minimal and readable"}),o.jsx("li",{children:"- assert on behavior, not internal calls"}),o.jsx("li",{children:"- prefer dependency injection over global mocking"}),o.jsx("li",{children:"- reset mocks between tests"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"Mocking pitfalls"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- over mocking makes tests meaningless"}),o.jsx("li",{children:"- mocking implementation details causes brittle tests"}),o.jsx("li",{children:"- mock returns unrealistic data that never happens in production"}),o.jsx("li",{children:"- tests pass but integration fails"})]}),o.jsx("div",{className:"note",children:"If you mock too much, you stop testing reality and start testing your imagination."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ot,{})}),o.jsx("span",{children:"Rule of thumb"})]}),o.jsx("div",{className:"text",children:"Use mocking to isolate the unit, but keep at least some integration tests to ensure real dependencies still work together."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- unit tests: lots, fast, heavily isolated"}),o.jsx("li",{children:"- integration tests: fewer, more realistic"}),o.jsx("li",{children:"- end to end tests: fewest, slowest"})]})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(Id,{})}),o.jsx("span",{children:"Mocking gives you control. Use it to remove randomness and slowness, but do not replace reality completely."})]})]})]})},Ys={Wrapper:fe.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:fe.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,Panel:fe.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 5200px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .compare {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 2px;

            .row {
                display: grid;
                grid-template-columns: 140px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .k {
                font-weight: 900;
                color: var(--color-text-primary);
                letter-spacing: 0.2px;
            }

            .v {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `},sx=()=>{const[l,c]=Re.useState(!1),a=Re.useMemo(()=>({title:"Code Coverage",subTitle:"Measure how much of your code runs during tests. Useful signal to find untested areas, not a guarantee of correctness.",chips:[{icon:o.jsx(ko,{}),label:"Coverage metrics"},{icon:o.jsx(Qm,{}),label:"Visibility"},{icon:o.jsx(Yt,{}),label:"Safer changes"}]}),[]);return o.jsxs(Ys.Wrapper,{id:"code-coverage",children:[o.jsxs(Ys.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(ko,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>c(d=>!d),"aria-expanded":l,"aria-controls":"code-coverage-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(xn,{})})]})]}),o.jsxs(Ys.Panel,{id:"code-coverage-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(up,{})}),o.jsx("span",{children:"What is code coverage"})]}),o.jsx("div",{className:"text",children:"Code coverage tells you which parts of your code were executed when tests ran. If a line never runs, it is not being tested."}),o.jsx("div",{className:"note",children:"Coverage is a signal. High coverage does not mean bug free code."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(hn,{})}),o.jsx("span",{children:"Common coverage types"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- line coverage - which lines executed"}),o.jsx("li",{children:"- function coverage - which functions executed"}),o.jsx("li",{children:"- branch coverage - which paths of if and switch executed"}),o.jsx("li",{children:"- statement coverage - which statements executed"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(xr,{})}),o.jsx("span",{children:"Example - branch coverage matters"})]}),o.jsx("div",{className:"text",children:"You can have 100 percent line coverage but still miss a branch. Example:"}),o.jsx("pre",{className:"code",children:`// file: shipping.js
export const shippingFee = (total) => {
    if (total >= 999) return 0;
    return 49;
};

// file: shipping.test.js (bad coverage)
test("shippingFee returns 0 for big total", () => {
    expect(shippingFee(1200)).toBe(0);
});

// This hits only the true branch.
// The else path is untested.`}),o.jsx("div",{className:"text",children:"Better test adds the other branch:"}),o.jsx("pre",{className:"code",children:`test("shippingFee returns 49 for small total", () => {
    expect(shippingFee(100)).toBe(49);
});`}),o.jsx("div",{className:"note",children:"Branch coverage protects if and switch logic from hidden bugs."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ko,{})}),o.jsx("span",{children:"How coverage tools work"})]}),o.jsx("div",{className:"text",children:"Coverage tools instrument your code (add tracking) and record which lines and branches ran during tests. Then they generate a report."}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Local"}),o.jsx("div",{className:"v",children:"run tests with coverage and view HTML or text report"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"CI"}),o.jsx("div",{className:"v",children:"upload coverage to a service or fail build if below threshold"})]})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Mr,{})}),o.jsx("span",{children:"Coverage traps"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- chasing 100 percent coverage blindly"}),o.jsx("li",{children:"- writing useless tests that only execute code"}),o.jsx("li",{children:"- mocking too much and losing real behavior"}),o.jsx("li",{children:"- ignoring critical paths and edge cases"})]}),o.jsx("div",{className:"note",children:"Do not optimize for the number. Optimize for confidence."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Ot,{})}),o.jsx("span",{children:"Good coverage targets"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- focus on business logic and risky code"}),o.jsx("li",{children:"- ensure error paths are tested"}),o.jsx("li",{children:"- prioritize auth, payments, permissions"}),o.jsx("li",{children:"- cover boundaries: input validation and parsing"})]}),o.jsx("div",{className:"note",children:"A small set of good tests is better than many shallow tests."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Om,{})}),o.jsx("span",{children:"Thresholds in CI - how teams use it"})]}),o.jsx("div",{className:"text",children:"Many teams set minimum thresholds like 70 to 85 percent. If coverage drops below threshold, CI fails. This prevents coverage decay."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- do not block early projects with strict thresholds"}),o.jsx("li",{children:"- raise thresholds gradually as repo matures"}),o.jsx("li",{children:"- allow exceptions for generated code and third party code"})]}),o.jsx("div",{className:"note",children:"Use thresholds as guardrails, not as the main goal."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(ko,{})}),o.jsx("span",{children:"Coverage answers: what ran. Tests answer: what is correct. Use both to build confidence."})]})]})]})},ax=()=>{const l=Re.useRef(null);return o.jsxs(Bs.Wrapper,{children:[o.jsx(Bs.Header,{children:o.jsx(Km,{})}),o.jsxs(Bs.Main,{ref:l,children:[o.jsxs("div",{className:"contentWrapper",children:[o.jsx(Jm,{}),o.jsx(rx,{}),o.jsx(nx,{}),o.jsx(ix,{}),o.jsx(ox,{}),o.jsx(lx,{}),o.jsx(sx,{})]}),o.jsx("div",{className:"footerWrapper",children:o.jsx(Zm,{})})]}),o.jsx(tx,{scrollerRef:l})]})};gh.createRoot(document.getElementById("root")).render(o.jsx(o.Fragment,{children:o.jsx(ax,{})}));
