(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))d(g);new MutationObserver(g=>{for(const w of g)if(w.type==="childList")for(const E of w.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function a(g){const w={};return g.integrity&&(w.integrity=g.integrity),g.referrerPolicy&&(w.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?w.credentials="include":g.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(g){if(g.ep)return;g.ep=!0;const w=a(g);fetch(g.href,w)}})();function ih(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var zs={exports:{}},Jn={},_s={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function oh(){if(td)return te;td=1;var l=Symbol.for("react.element"),u=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),E=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),V=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),D=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=D&&m[D]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,$={};function X(m,j,G){this.props=m,this.context=j,this.refs=$,this.updater=G||Q}X.prototype.isReactComponent={},X.prototype.setState=function(m,j){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,j,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function fe(){}fe.prototype=X.prototype;function le(m,j,G){this.props=m,this.context=j,this.refs=$,this.updater=G||Q}var ie=le.prototype=new fe;ie.constructor=le,ne(ie,X.prototype),ie.isPureReactComponent=!0;var J=Array.isArray,de=Object.prototype.hasOwnProperty,Y={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function _e(m,j,G){var q,re={},ee=null,pe=null;if(j!=null)for(q in j.ref!==void 0&&(pe=j.ref),j.key!==void 0&&(ee=""+j.key),j)de.call(j,q)&&!W.hasOwnProperty(q)&&(re[q]=j[q]);var oe=arguments.length-2;if(oe===1)re.children=G;else if(1<oe){for(var ae=Array(oe),De=0;De<oe;De++)ae[De]=arguments[De+2];re.children=ae}if(m&&m.defaultProps)for(q in oe=m.defaultProps,oe)re[q]===void 0&&(re[q]=oe[q]);return{$$typeof:l,type:m,key:ee,ref:pe,props:re,_owner:Y.current}}function tt(m,j){return{$$typeof:l,type:m.type,key:j,ref:m.ref,props:m.props,_owner:m._owner}}function vt(m){return typeof m=="object"&&m!==null&&m.$$typeof===l}function Ot(m){var j={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return j[G]})}var at=/\/+/g;function Ve(m,j){return typeof m=="object"&&m!==null&&m.key!=null?Ot(""+m.key):j.toString(36)}function rt(m,j,G,q,re){var ee=typeof m;(ee==="undefined"||ee==="boolean")&&(m=null);var pe=!1;if(m===null)pe=!0;else switch(ee){case"string":case"number":pe=!0;break;case"object":switch(m.$$typeof){case l:case u:pe=!0}}if(pe)return pe=m,re=re(pe),m=q===""?"."+Ve(pe,0):q,J(re)?(G="",m!=null&&(G=m.replace(at,"$&/")+"/"),rt(re,j,G,"",function(De){return De})):re!=null&&(vt(re)&&(re=tt(re,G+(!re.key||pe&&pe.key===re.key?"":(""+re.key).replace(at,"$&/")+"/")+m)),j.push(re)),1;if(pe=0,q=q===""?".":q+":",J(m))for(var oe=0;oe<m.length;oe++){ee=m[oe];var ae=q+Ve(ee,oe);pe+=rt(ee,j,G,ae,re)}else if(ae=F(m),typeof ae=="function")for(m=ae.call(m),oe=0;!(ee=m.next()).done;)ee=ee.value,ae=q+Ve(ee,oe++),pe+=rt(ee,j,G,ae,re);else if(ee==="object")throw j=String(m),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return pe}function ct(m,j,G){if(m==null)return m;var q=[],re=0;return rt(m,q,"","",function(ee){return j.call(G,ee,re++)}),q}function Be(m){if(m._status===-1){var j=m._result;j=j(),j.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=j)}if(m._status===1)return m._result.default;throw m._result}var xe={current:null},T={transition:null},M={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:T,ReactCurrentOwner:Y};function z(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:ct,forEach:function(m,j,G){ct(m,function(){j.apply(this,arguments)},G)},count:function(m){var j=0;return ct(m,function(){j++}),j},toArray:function(m){return ct(m,function(j){return j})||[]},only:function(m){if(!vt(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},te.Component=X,te.Fragment=a,te.Profiler=g,te.PureComponent=le,te.StrictMode=d,te.Suspense=b,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,te.act=z,te.cloneElement=function(m,j,G){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var q=ne({},m.props),re=m.key,ee=m.ref,pe=m._owner;if(j!=null){if(j.ref!==void 0&&(ee=j.ref,pe=Y.current),j.key!==void 0&&(re=""+j.key),m.type&&m.type.defaultProps)var oe=m.type.defaultProps;for(ae in j)de.call(j,ae)&&!W.hasOwnProperty(ae)&&(q[ae]=j[ae]===void 0&&oe!==void 0?oe[ae]:j[ae])}var ae=arguments.length-2;if(ae===1)q.children=G;else if(1<ae){oe=Array(ae);for(var De=0;De<ae;De++)oe[De]=arguments[De+2];q.children=oe}return{$$typeof:l,type:m.type,key:re,ref:ee,props:q,_owner:pe}},te.createContext=function(m){return m={$$typeof:E,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:w,_context:m},m.Consumer=m},te.createElement=_e,te.createFactory=function(m){var j=_e.bind(null,m);return j.type=m,j},te.createRef=function(){return{current:null}},te.forwardRef=function(m){return{$$typeof:L,render:m}},te.isValidElement=vt,te.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:Be}},te.memo=function(m,j){return{$$typeof:V,type:m,compare:j===void 0?null:j}},te.startTransition=function(m){var j=T.transition;T.transition={};try{m()}finally{T.transition=j}},te.unstable_act=z,te.useCallback=function(m,j){return xe.current.useCallback(m,j)},te.useContext=function(m){return xe.current.useContext(m)},te.useDebugValue=function(){},te.useDeferredValue=function(m){return xe.current.useDeferredValue(m)},te.useEffect=function(m,j){return xe.current.useEffect(m,j)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(m,j,G){return xe.current.useImperativeHandle(m,j,G)},te.useInsertionEffect=function(m,j){return xe.current.useInsertionEffect(m,j)},te.useLayoutEffect=function(m,j){return xe.current.useLayoutEffect(m,j)},te.useMemo=function(m,j){return xe.current.useMemo(m,j)},te.useReducer=function(m,j,G){return xe.current.useReducer(m,j,G)},te.useRef=function(m){return xe.current.useRef(m)},te.useState=function(m){return xe.current.useState(m)},te.useSyncExternalStore=function(m,j,G){return xe.current.useSyncExternalStore(m,j,G)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var rd;function ta(){return rd||(rd=1,_s.exports=oh()),_s.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function lh(){if(nd)return Jn;nd=1;var l=ta(),u=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,g=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function E(L,b,V){var H,D={},F=null,Q=null;V!==void 0&&(F=""+V),b.key!==void 0&&(F=""+b.key),b.ref!==void 0&&(Q=b.ref);for(H in b)d.call(b,H)&&!w.hasOwnProperty(H)&&(D[H]=b[H]);if(L&&L.defaultProps)for(H in b=L.defaultProps,b)D[H]===void 0&&(D[H]=b[H]);return{$$typeof:u,type:L,key:F,ref:Q,props:D,_owner:g.current}}return Jn.Fragment=a,Jn.jsx=E,Jn.jsxs=E,Jn}var id;function sh(){return id||(id=1,zs.exports=lh()),zs.exports}var o=sh(),mo={},Ps={exports:{}},Je={},Is={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function ah(){return od||(od=1,(function(l){function u(T,M){var z=T.length;T.push(M);e:for(;0<z;){var m=z-1>>>1,j=T[m];if(0<g(j,M))T[m]=M,T[z]=j,z=m;else break e}}function a(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var M=T[0],z=T.pop();if(z!==M){T[0]=z;e:for(var m=0,j=T.length,G=j>>>1;m<G;){var q=2*(m+1)-1,re=T[q],ee=q+1,pe=T[ee];if(0>g(re,z))ee<j&&0>g(pe,re)?(T[m]=pe,T[ee]=z,m=ee):(T[m]=re,T[q]=z,m=q);else if(ee<j&&0>g(pe,z))T[m]=pe,T[ee]=z,m=ee;else break e}}return M}function g(T,M){var z=T.sortIndex-M.sortIndex;return z!==0?z:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;l.unstable_now=function(){return w.now()}}else{var E=Date,L=E.now();l.unstable_now=function(){return E.now()-L}}var b=[],V=[],H=1,D=null,F=3,Q=!1,ne=!1,$=!1,X=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(T){for(var M=a(V);M!==null;){if(M.callback===null)d(V);else if(M.startTime<=T)d(V),M.sortIndex=M.expirationTime,u(b,M);else break;M=a(V)}}function J(T){if($=!1,ie(T),!ne)if(a(b)!==null)ne=!0,Be(de);else{var M=a(V);M!==null&&xe(J,M.startTime-T)}}function de(T,M){ne=!1,$&&($=!1,fe(_e),_e=-1),Q=!0;var z=F;try{for(ie(M),D=a(b);D!==null&&(!(D.expirationTime>M)||T&&!Ot());){var m=D.callback;if(typeof m=="function"){D.callback=null,F=D.priorityLevel;var j=m(D.expirationTime<=M);M=l.unstable_now(),typeof j=="function"?D.callback=j:D===a(b)&&d(b),ie(M)}else d(b);D=a(b)}if(D!==null)var G=!0;else{var q=a(V);q!==null&&xe(J,q.startTime-M),G=!1}return G}finally{D=null,F=z,Q=!1}}var Y=!1,W=null,_e=-1,tt=5,vt=-1;function Ot(){return!(l.unstable_now()-vt<tt)}function at(){if(W!==null){var T=l.unstable_now();vt=T;var M=!0;try{M=W(!0,T)}finally{M?Ve():(Y=!1,W=null)}}else Y=!1}var Ve;if(typeof le=="function")Ve=function(){le(at)};else if(typeof MessageChannel!="undefined"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=at,Ve=function(){ct.postMessage(null)}}else Ve=function(){X(at,0)};function Be(T){W=T,Y||(Y=!0,Ve())}function xe(T,M){_e=X(function(){T(l.unstable_now())},M)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_continueExecution=function(){ne||Q||(ne=!0,Be(de))},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return F},l.unstable_getFirstCallbackNode=function(){return a(b)},l.unstable_next=function(T){switch(F){case 1:case 2:case 3:var M=3;break;default:M=F}var z=F;F=M;try{return T()}finally{F=z}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=F;F=T;try{return M()}finally{F=z}},l.unstable_scheduleCallback=function(T,M,z){var m=l.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?m+z:m):z=m,T){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=z+j,T={id:H++,callback:M,priorityLevel:T,startTime:z,expirationTime:j,sortIndex:-1},z>m?(T.sortIndex=z,u(V,T),a(b)===null&&T===a(V)&&($?(fe(_e),_e=-1):$=!0,xe(J,z-m))):(T.sortIndex=j,u(b,T),ne||Q||(ne=!0,Be(de))),T},l.unstable_shouldYield=Ot,l.unstable_wrapCallback=function(T){var M=F;return function(){var z=F;F=M;try{return T.apply(this,arguments)}finally{F=z}}}})(Ls)),Ls}var ld;function ch(){return ld||(ld=1,Is.exports=ah()),Is.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function uh(){if(sd)return Je;sd=1;var l=ta(),u=ch();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,g={};function w(e,t){E(e,t),E(e+"Capture",t)}function E(e,t){for(g[e]=t,e=0;e<t.length;e++)d.add(t[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),b=Object.prototype.hasOwnProperty,V=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},D={};function F(e){return b.call(D,e)?!0:b.call(H,e)?!1:V.test(e)?D[e]=!0:(H[e]=!0,!1)}function Q(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,t,r,n){if(t===null||typeof t=="undefined"||Q(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $(e,t,r,n,i,s,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new $(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new $(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new $(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new $(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new $(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new $(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new $(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new $(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new $(e,5,!1,e.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fe,le);X[t]=new $(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fe,le);X[t]=new $(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fe,le);X[t]=new $(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new $(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new $(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,t,r,n){var i=X.hasOwnProperty(t)?X[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ne(t,r,i,n)&&(r=null),n||i===null?F(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var J=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),Y=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),_e=Symbol.for("react.strict_mode"),tt=Symbol.for("react.profiler"),vt=Symbol.for("react.provider"),Ot=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),T=Symbol.iterator;function M(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,m;function j(e){if(m===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);m=t&&t[1]||""}return`
`+m+e}var G=!1;function q(e,t){if(!e||G)return"";G=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),s=n.stack.split(`
`),c=i.length-1,p=s.length-1;1<=c&&0<=p&&i[c]!==s[p];)p--;for(;1<=c&&0<=p;c--,p--)if(i[c]!==s[p]){if(c!==1||p!==1)do if(c--,p--,0>p||i[c]!==s[p]){var f=`
`+i[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=c&&0<=p);break}}}finally{G=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function re(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=q(e.type,!1),e;case 11:return e=q(e.type.render,!1),e;case 1:return e=q(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case Y:return"Portal";case tt:return"Profiler";case _e:return"StrictMode";case Ve:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ot:return(e.displayName||"Context")+".Consumer";case vt:return(e._context.displayName||"Context")+".Provider";case at:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===_e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ae(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function De(e){var t=ae(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=De(e))}function yt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ae(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Mo(e,t){var r=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function aa(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=oe(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&ie(e,"checked",t,!1)}function Do(e,t){ca(e,t);var r=oe(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fo(e,t,r){(t!=="number"||oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hn=Array.isArray;function Ir(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+oe(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function da(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(a(92));if(hn(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:oe(r)}}function pa(e,t){var r=oe(t.value),n=oe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,ma=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sp=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){sp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xn[t]=xn[e]})});function xa(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||xn.hasOwnProperty(e)&&xn[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=xa(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ap=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wo(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Uo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ho=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vo=null,Lr=null,Rr=null;function va(e){if(e=Fn(e)){if(typeof Vo!="function")throw Error(a(280));var t=e.stateNode;t&&(t=zi(t),Vo(e.stateNode,e.type,t))}}function ya(e){Lr?Rr?Rr.push(e):Rr=[e]:Lr=e}function wa(){if(Lr){var e=Lr,t=Rr;if(Rr=Lr=null,va(e),t)for(e=0;e<t.length;e++)va(t[e])}}function ja(e,t){return e(t)}function ka(){}var Qo=!1;function Na(e,t,r){if(Qo)return e(t,r);Qo=!0;try{return ja(e,t,r)}finally{Qo=!1,(Lr!==null||Rr!==null)&&(ka(),wa())}}function gn(e,t){var r=e.stateNode;if(r===null)return null;var n=zi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,t,typeof r));return r}var Yo=!1;if(L)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Yo=!1}function cp(e,t,r,n,i,s,c,p,f){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(N){this.onError(N)}}var yn=!1,si=null,ai=!1,Go=null,up={onError:function(e){yn=!0,si=e}};function dp(e,t,r,n,i,s,c,p,f){yn=!1,si=null,cp.apply(up,arguments)}function pp(e,t,r,n,i,s,c,p,f){if(dp.apply(this,arguments),yn){if(yn){var y=si;yn=!1,si=null}else throw Error(a(198));ai||(ai=!0,Go=y)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ca(e){if(hr(e)!==e)throw Error(a(188))}function fp(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(a(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ca(i),e;if(s===n)return Ca(i),t;s=s.sibling}throw Error(a(188))}if(r.return!==n.return)r=i,n=s;else{for(var c=!1,p=i.child;p;){if(p===r){c=!0,r=i,n=s;break}if(p===n){c=!0,n=i,r=s;break}p=p.sibling}if(!c){for(p=s.child;p;){if(p===r){c=!0,r=s,n=i;break}if(p===n){c=!0,n=s,r=i;break}p=p.sibling}if(!c)throw Error(a(189))}}if(r.alternate!==n)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:t}function Ea(e){return e=fp(e),e!==null?ba(e):null}function ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ba(e);if(t!==null)return t;e=e.sibling}return null}var Ta=u.unstable_scheduleCallback,za=u.unstable_cancelCallback,hp=u.unstable_shouldYield,mp=u.unstable_requestPaint,Ee=u.unstable_now,xp=u.unstable_getCurrentPriorityLevel,Ko=u.unstable_ImmediatePriority,_a=u.unstable_UserBlockingPriority,ci=u.unstable_NormalPriority,gp=u.unstable_LowPriority,Pa=u.unstable_IdlePriority,ui=null,Tt=null;function vp(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:jp,yp=Math.log,wp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(yp(e)/wp|0)|0}var di=64,pi=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,c=r&268435455;if(c!==0){var p=c&~i;p!==0?n=wn(p):(s&=c,s!==0&&(n=wn(s)))}else c=r&~i,c!==0?n=wn(c):s!==0&&(n=wn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-wt(t),i=1<<r,n|=e[r],t&=~i;return n}function kp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Np(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-wt(s),p=1<<c,f=i[c];f===-1?((p&r)===0||(p&n)!==0)&&(i[c]=kp(p,t)):f<=t&&(e.expiredLanes|=p),s&=~p}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ia(){var e=di;return di<<=1,(di&4194240)===0&&(di=64),e}function qo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function jn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=r}function Sp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-wt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function Zo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-wt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var me=0;function La(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ra,Jo,Oa,Ma,Da,el=!1,hi=[],Gt=null,Kt=null,Xt=null,kn=new Map,Nn=new Map,qt=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fa(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nn.delete(t.pointerId)}}function Sn(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Fn(t),t!==null&&Jo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ep(e,t,r,n,i){switch(t){case"focusin":return Gt=Sn(Gt,e,t,r,n,i),!0;case"dragenter":return Kt=Sn(Kt,e,t,r,n,i),!0;case"mouseover":return Xt=Sn(Xt,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return kn.set(s,Sn(kn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Nn.set(s,Sn(Nn.get(s)||null,e,t,r,n,i)),!0}return!1}function Aa(e){var t=mr(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=Sa(r),t!==null){e.blockedOn=t,Da(e.priority,function(){Oa(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ho=n,r.target.dispatchEvent(n),Ho=null}else return t=Fn(r),t!==null&&Jo(t),e.blockedOn=r,!1;t.shift()}return!0}function Ba(e,t,r){mi(e)&&r.delete(t)}function bp(){el=!1,Gt!==null&&mi(Gt)&&(Gt=null),Kt!==null&&mi(Kt)&&(Kt=null),Xt!==null&&mi(Xt)&&(Xt=null),kn.forEach(Ba),Nn.forEach(Ba)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,el||(el=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,bp)))}function En(e){function t(i){return Cn(i,e)}if(0<hi.length){Cn(hi[0],e);for(var r=1;r<hi.length;r++){var n=hi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Gt!==null&&Cn(Gt,e),Kt!==null&&Cn(Kt,e),Xt!==null&&Cn(Xt,e),kn.forEach(t),Nn.forEach(t),r=0;r<qt.length;r++)n=qt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<qt.length&&(r=qt[0],r.blockedOn===null);)Aa(r),r.blockedOn===null&&qt.shift()}var Or=J.ReactCurrentBatchConfig,xi=!0;function Tp(e,t,r,n){var i=me,s=Or.transition;Or.transition=null;try{me=1,tl(e,t,r,n)}finally{me=i,Or.transition=s}}function zp(e,t,r,n){var i=me,s=Or.transition;Or.transition=null;try{me=4,tl(e,t,r,n)}finally{me=i,Or.transition=s}}function tl(e,t,r,n){if(xi){var i=rl(e,t,r,n);if(i===null)yl(e,t,n,gi,r),Fa(e,n);else if(Ep(i,e,t,r,n))n.stopPropagation();else if(Fa(e,n),t&4&&-1<Cp.indexOf(e)){for(;i!==null;){var s=Fn(i);if(s!==null&&Ra(s),s=rl(e,t,r,n),s===null&&yl(e,t,n,gi,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else yl(e,t,n,null,r)}}var gi=null;function rl(e,t,r,n){if(gi=null,e=$o(n),e=mr(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Sa(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Wa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xp()){case Ko:return 1;case _a:return 4;case ci:case gp:return 16;case Pa:return 536870912;default:return 16}default:return 16}}var Zt=null,nl=null,vi=null;function Ua(){if(vi)return vi;var e,t=nl,r=t.length,n,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===i[s-n];n++);return vi=i.slice(e,1<n?1-n:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function Ha(){return!1}function nt(e){function t(r,n,i,s,c){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wi:Ha,this.isPropagationStopped=Ha,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=nt(Mr),bn=z({},Mr,{view:0,detail:0}),_p=nt(bn),ol,ll,Tn,ji=z({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tn&&(Tn&&e.type==="mousemove"?(ol=e.screenX-Tn.screenX,ll=e.screenY-Tn.screenY):ll=ol=0,Tn=e),ol)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),$a=nt(ji),Pp=z({},ji,{dataTransfer:0}),Ip=nt(Pp),Lp=z({},bn,{relatedTarget:0}),sl=nt(Lp),Rp=z({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=nt(Rp),Mp=z({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dp=nt(Mp),Fp=z({},Mr,{data:0}),Va=nt(Fp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function al(){return Up}var Hp=z({},bn,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:al,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=nt(Hp),Vp=z({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=nt(Vp),Qp=z({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:al}),Yp=nt(Qp),Gp=z({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=nt(Gp),Xp=z({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=nt(Xp),Zp=[9,13,27,32],cl=L&&"CompositionEvent"in window,zn=null;L&&"documentMode"in document&&(zn=document.documentMode);var Jp=L&&"TextEvent"in window&&!zn,Ya=L&&(!cl||zn&&8<zn&&11>=zn),Ga=" ",Ka=!1;function Xa(e,t){switch(e){case"keyup":return Zp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function ef(e,t){switch(e){case"compositionend":return qa(t);case"keypress":return t.which!==32?null:(Ka=!0,Ga);case"textInput":return e=t.data,e===Ga&&Ka?null:e;default:return null}}function tf(e,t){if(Dr)return e==="compositionend"||!cl&&Xa(e,t)?(e=Ua(),vi=nl=Zt=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ya&&t.locale!=="ko"?null:t.data;default:return null}}var rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rf[e.type]:t==="textarea"}function Ja(e,t,r,n){ya(n),t=Ei(t,"onChange"),0<t.length&&(r=new il("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var _n=null,Pn=null;function nf(e){gc(e,0)}function ki(e){var t=Ur(e);if(yt(t))return e}function of(e,t){if(e==="change")return t}var ec=!1;if(L){var ul;if(L){var dl="oninput"in document;if(!dl){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),dl=typeof tc.oninput=="function"}ul=dl}else ul=!1;ec=ul&&(!document.documentMode||9<document.documentMode)}function rc(){_n&&(_n.detachEvent("onpropertychange",nc),Pn=_n=null)}function nc(e){if(e.propertyName==="value"&&ki(Pn)){var t=[];Ja(t,Pn,e,$o(e)),Na(nf,t)}}function lf(e,t,r){e==="focusin"?(rc(),_n=t,Pn=r,_n.attachEvent("onpropertychange",nc)):e==="focusout"&&rc()}function sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Pn)}function af(e,t){if(e==="click")return ki(t)}function cf(e,t){if(e==="input"||e==="change")return ki(t)}function uf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:uf;function In(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!b.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var r=ic(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ic(r)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sc(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oi(e.document)}return t}function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function df(e){var t=sc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&lc(r.ownerDocument.documentElement,r)){if(n!==null&&pl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=oc(r,s);var c=oc(r,n);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pf=L&&"documentMode"in document&&11>=document.documentMode,Fr=null,fl=null,Ln=null,hl=!1;function ac(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hl||Fr==null||Fr!==oi(n)||(n=Fr,"selectionStart"in n&&pl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&In(Ln,n)||(Ln=n,n=Ei(fl,"onSelect"),0<n.length&&(t=new il("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Fr)))}function Ni(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ar={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},ml={},cc={};L&&(cc=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Si(e){if(ml[e])return ml[e];if(!Ar[e])return e;var t=Ar[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in cc)return ml[e]=t[r];return e}var uc=Si("animationend"),dc=Si("animationiteration"),pc=Si("animationstart"),fc=Si("transitionend"),hc=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){hc.set(e,t),w(t,[e])}for(var xl=0;xl<mc.length;xl++){var gl=mc[xl],ff=gl.toLowerCase(),hf=gl[0].toUpperCase()+gl.slice(1);Jt(ff,"on"+hf)}Jt(uc,"onAnimationEnd"),Jt(dc,"onAnimationIteration"),Jt(pc,"onAnimationStart"),Jt("dblclick","onDoubleClick"),Jt("focusin","onFocus"),Jt("focusout","onBlur"),Jt(fc,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function xc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,pp(n,t,void 0,e),e.currentTarget=null}function gc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var c=n.length-1;0<=c;c--){var p=n[c],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==s&&i.isPropagationStopped())break e;xc(i,p,y),s=f}else for(c=0;c<n.length;c++){if(p=n[c],f=p.instance,y=p.currentTarget,p=p.listener,f!==s&&i.isPropagationStopped())break e;xc(i,p,y),s=f}}}if(ai)throw e=Go,ai=!1,Go=null,e}function ve(e,t){var r=t[Cl];r===void 0&&(r=t[Cl]=new Set);var n=e+"__bubble";r.has(n)||(vc(t,e,2,!1),r.add(n))}function vl(e,t,r){var n=0;t&&(n|=4),vc(r,e,n,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[Ci]){e[Ci]=!0,d.forEach(function(r){r!=="selectionchange"&&(mf.has(r)||vl(r,!1,e),vl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,vl("selectionchange",!1,t))}}function vc(e,t,r,n){switch(Wa(t)){case 1:var i=Tp;break;case 4:i=zp;break;default:i=tl}r=i.bind(null,t,r,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function yl(e,t,r,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(c===4)for(c=n.return;c!==null;){var f=c.tag;if((f===3||f===4)&&(f=c.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;c=c.return}for(;p!==null;){if(c=mr(p),c===null)return;if(f=c.tag,f===5||f===6){n=s=c;continue e}p=p.parentNode}}n=n.return}Na(function(){var y=s,N=$o(r),S=[];e:{var k=hc.get(e);if(k!==void 0){var _=il,I=e;switch(e){case"keypress":if(yi(r)===0)break e;case"keydown":case"keyup":_=$p;break;case"focusin":I="focus",_=sl;break;case"focusout":I="blur",_=sl;break;case"beforeblur":case"afterblur":_=sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=$a;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Yp;break;case uc:case dc:case pc:_=Op;break;case fc:_=Kp;break;case"scroll":_=_p;break;case"wheel":_=qp;break;case"copy":case"cut":case"paste":_=Dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Qa}var R=(t&4)!==0,be=!R&&e==="scroll",x=R?k!==null?k+"Capture":null:k;R=[];for(var h=y,v;h!==null;){v=h;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,x!==null&&(C=gn(h,x),C!=null&&R.push(Mn(h,C,v)))),be)break;h=h.return}0<R.length&&(k=new _(k,I,null,r,N),S.push({event:k,listeners:R}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",k&&r!==Ho&&(I=r.relatedTarget||r.fromElement)&&(mr(I)||I[Dt]))break e;if((_||k)&&(k=N.window===N?N:(k=N.ownerDocument)?k.defaultView||k.parentWindow:window,_?(I=r.relatedTarget||r.toElement,_=y,I=I?mr(I):null,I!==null&&(be=hr(I),I!==be||I.tag!==5&&I.tag!==6)&&(I=null)):(_=null,I=y),_!==I)){if(R=$a,C="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(R=Qa,C="onPointerLeave",x="onPointerEnter",h="pointer"),be=_==null?k:Ur(_),v=I==null?k:Ur(I),k=new R(C,h+"leave",_,r,N),k.target=be,k.relatedTarget=v,C=null,mr(N)===y&&(R=new R(x,h+"enter",I,r,N),R.target=v,R.relatedTarget=be,C=R),be=C,_&&I)t:{for(R=_,x=I,h=0,v=R;v;v=Br(v))h++;for(v=0,C=x;C;C=Br(C))v++;for(;0<h-v;)R=Br(R),h--;for(;0<v-h;)x=Br(x),v--;for(;h--;){if(R===x||x!==null&&R===x.alternate)break t;R=Br(R),x=Br(x)}R=null}else R=null;_!==null&&yc(S,k,_,R,!1),I!==null&&be!==null&&yc(S,be,I,R,!0)}}e:{if(k=y?Ur(y):window,_=k.nodeName&&k.nodeName.toLowerCase(),_==="select"||_==="input"&&k.type==="file")var O=of;else if(Za(k))if(ec)O=cf;else{O=sf;var A=lf}else(_=k.nodeName)&&_.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(O=af);if(O&&(O=O(e,y))){Ja(S,O,r,N);break e}A&&A(e,k,y),e==="focusout"&&(A=k._wrapperState)&&A.controlled&&k.type==="number"&&Fo(k,"number",k.value)}switch(A=y?Ur(y):window,e){case"focusin":(Za(A)||A.contentEditable==="true")&&(Fr=A,fl=y,Ln=null);break;case"focusout":Ln=fl=Fr=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,ac(S,r,N);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":ac(S,r,N)}var B;if(cl)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Dr?Xa(e,r)&&(U="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(U="onCompositionStart");U&&(Ya&&r.locale!=="ko"&&(Dr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Dr&&(B=Ua()):(Zt=N,nl="value"in Zt?Zt.value:Zt.textContent,Dr=!0)),A=Ei(y,U),0<A.length&&(U=new Va(U,e,null,r,N),S.push({event:U,listeners:A}),B?U.data=B:(B=qa(r),B!==null&&(U.data=B)))),(B=Jp?ef(e,r):tf(e,r))&&(y=Ei(y,"onBeforeInput"),0<y.length&&(N=new Va("onBeforeInput","beforeinput",null,r,N),S.push({event:N,listeners:y}),N.data=B))}gc(S,t)})}function Mn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ei(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gn(e,r),s!=null&&n.unshift(Mn(e,s,i)),s=gn(e,t),s!=null&&n.push(Mn(e,s,i))),e=e.return}return n}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,r,n,i){for(var s=t._reactName,c=[];r!==null&&r!==n;){var p=r,f=p.alternate,y=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&y!==null&&(p=y,i?(f=gn(r,s),f!=null&&c.unshift(Mn(r,f,p))):i||(f=gn(r,s),f!=null&&c.push(Mn(r,f,p)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var xf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(gf,"")}function bi(e,t,r){if(t=wc(t),wc(e)!==t&&r)throw Error(a(425))}function Ti(){}var wl=null,jl=null;function kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,vf=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,yf=typeof queueMicrotask=="function"?queueMicrotask:typeof jc!="undefined"?function(e){return jc.resolve(null).then(e).catch(wf)}:Nl;function wf(e){setTimeout(function(){throw e})}function Sl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),En(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);En(t)}function er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Wr,Dn="__reactProps$"+Wr,Dt="__reactContainer$"+Wr,Cl="__reactEvents$"+Wr,jf="__reactListeners$"+Wr,kf="__reactHandles$"+Wr;function mr(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Dt]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=kc(e);e!==null;){if(r=e[zt])return r;e=kc(e)}return t}e=r,r=e.parentNode}return null}function Fn(e){return e=e[zt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function zi(e){return e[Dn]||null}var El=[],Hr=-1;function tr(e){return{current:e}}function ye(e){0>Hr||(e.current=El[Hr],El[Hr]=null,Hr--)}function ge(e,t){Hr++,El[Hr]=e.current,e.current=t}var rr={},We=tr(rr),Ge=tr(!1),xr=rr;function $r(e,t){var r=e.type.contextTypes;if(!r)return rr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function _i(){ye(Ge),ye(We)}function Nc(e,t,r){if(We.current!==rr)throw Error(a(168));ge(We,t),ge(Ge,r)}function Sc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(a(108,pe(e)||"Unknown",i));return z({},r,n)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rr,xr=We.current,ge(We,e),ge(Ge,Ge.current),!0}function Cc(e,t,r){var n=e.stateNode;if(!n)throw Error(a(169));r?(e=Sc(e,t,xr),n.__reactInternalMemoizedMergedChildContext=e,ye(Ge),ye(We),ge(We,e)):ye(Ge),ge(Ge,r)}var Ft=null,Ii=!1,bl=!1;function Ec(e){Ft===null?Ft=[e]:Ft.push(e)}function Nf(e){Ii=!0,Ec(e)}function nr(){if(!bl&&Ft!==null){bl=!0;var e=0,t=me;try{var r=Ft;for(me=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ft=null,Ii=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(e+1)),Ta(Ko,nr),i}finally{me=t,bl=!1}}return null}var Vr=[],Qr=0,Li=null,Ri=0,ut=[],dt=0,gr=null,At=1,Bt="";function vr(e,t){Vr[Qr++]=Ri,Vr[Qr++]=Li,Li=e,Ri=t}function bc(e,t,r){ut[dt++]=At,ut[dt++]=Bt,ut[dt++]=gr,gr=e;var n=At;e=Bt;var i=32-wt(n)-1;n&=~(1<<i),r+=1;var s=32-wt(t)+i;if(30<s){var c=i-i%5;s=(n&(1<<c)-1).toString(32),n>>=c,i-=c,At=1<<32-wt(t)+i|r<<i|n,Bt=s+e}else At=1<<s|r<<i|n,Bt=e}function Tl(e){e.return!==null&&(vr(e,1),bc(e,1,0))}function zl(e){for(;e===Li;)Li=Vr[--Qr],Vr[Qr]=null,Ri=Vr[--Qr],Vr[Qr]=null;for(;e===gr;)gr=ut[--dt],ut[dt]=null,Bt=ut[--dt],ut[dt]=null,At=ut[--dt],ut[dt]=null}var it=null,ot=null,je=!1,kt=null;function Tc(e,t){var r=mt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function zc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,ot=er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=gr!==null?{id:At,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=mt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,ot=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(je){var t=ot;if(t){var r=t;if(!zc(e,t)){if(_l(e))throw Error(a(418));t=er(r.nextSibling);var n=it;t&&zc(e,t)?Tc(n,r):(e.flags=e.flags&-4097|2,je=!1,it=e)}}else{if(_l(e))throw Error(a(418));e.flags=e.flags&-4097|2,je=!1,it=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Oi(e){if(e!==it)return!1;if(!je)return _c(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kl(e.type,e.memoizedProps)),t&&(t=ot)){if(_l(e))throw Pc(),Error(a(418));for(;t;)Tc(e,t),t=er(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ot=er(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=it?er(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=ot;e;)e=er(e.nextSibling)}function Yr(){ot=it=null,je=!1}function Il(e){kt===null?kt=[e]:kt.push(e)}var Sf=J.ReactCurrentBatchConfig;function An(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(a(309));var n=r.stateNode}if(!n)throw Error(a(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(c){var p=i.refs;c===null?delete p[s]:p[s]=c},t._stringRef=s,t)}if(typeof e!="string")throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function Mi(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function Lc(e){function t(x,h){if(e){var v=x.deletions;v===null?(x.deletions=[h],x.flags|=16):v.push(h)}}function r(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function n(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=dr(x,h),x.index=0,x.sibling=null,x}function s(x,h,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<h?(x.flags|=2,h):v):(x.flags|=2,h)):(x.flags|=1048576,h)}function c(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,h,v,C){return h===null||h.tag!==6?(h=Ns(v,x.mode,C),h.return=x,h):(h=i(h,v),h.return=x,h)}function f(x,h,v,C){var O=v.type;return O===W?N(x,h,v.props.children,C,v.key):h!==null&&(h.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Be&&Ic(O)===h.type)?(C=i(h,v.props),C.ref=An(x,h,v),C.return=x,C):(C=lo(v.type,v.key,v.props,null,x.mode,C),C.ref=An(x,h,v),C.return=x,C)}function y(x,h,v,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Ss(v,x.mode,C),h.return=x,h):(h=i(h,v.children||[]),h.return=x,h)}function N(x,h,v,C,O){return h===null||h.tag!==7?(h=Er(v,x.mode,C,O),h.return=x,h):(h=i(h,v),h.return=x,h)}function S(x,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ns(""+h,x.mode,v),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case de:return v=lo(h.type,h.key,h.props,null,x.mode,v),v.ref=An(x,null,h),v.return=x,v;case Y:return h=Ss(h,x.mode,v),h.return=x,h;case Be:var C=h._init;return S(x,C(h._payload),v)}if(hn(h)||M(h))return h=Er(h,x.mode,v,null),h.return=x,h;Mi(x,h)}return null}function k(x,h,v,C){var O=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:p(x,h,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case de:return v.key===O?f(x,h,v,C):null;case Y:return v.key===O?y(x,h,v,C):null;case Be:return O=v._init,k(x,h,O(v._payload),C)}if(hn(v)||M(v))return O!==null?null:N(x,h,v,C,null);Mi(x,v)}return null}function _(x,h,v,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return x=x.get(v)||null,p(h,x,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case de:return x=x.get(C.key===null?v:C.key)||null,f(h,x,C,O);case Y:return x=x.get(C.key===null?v:C.key)||null,y(h,x,C,O);case Be:var A=C._init;return _(x,h,v,A(C._payload),O)}if(hn(C)||M(C))return x=x.get(v)||null,N(h,x,C,O,null);Mi(h,C)}return null}function I(x,h,v,C){for(var O=null,A=null,B=h,U=h=0,Oe=null;B!==null&&U<v.length;U++){B.index>U?(Oe=B,B=null):Oe=B.sibling;var ce=k(x,B,v[U],C);if(ce===null){B===null&&(B=Oe);break}e&&B&&ce.alternate===null&&t(x,B),h=s(ce,h,U),A===null?O=ce:A.sibling=ce,A=ce,B=Oe}if(U===v.length)return r(x,B),je&&vr(x,U),O;if(B===null){for(;U<v.length;U++)B=S(x,v[U],C),B!==null&&(h=s(B,h,U),A===null?O=B:A.sibling=B,A=B);return je&&vr(x,U),O}for(B=n(x,B);U<v.length;U++)Oe=_(B,x,U,v[U],C),Oe!==null&&(e&&Oe.alternate!==null&&B.delete(Oe.key===null?U:Oe.key),h=s(Oe,h,U),A===null?O=Oe:A.sibling=Oe,A=Oe);return e&&B.forEach(function(pr){return t(x,pr)}),je&&vr(x,U),O}function R(x,h,v,C){var O=M(v);if(typeof O!="function")throw Error(a(150));if(v=O.call(v),v==null)throw Error(a(151));for(var A=O=null,B=h,U=h=0,Oe=null,ce=v.next();B!==null&&!ce.done;U++,ce=v.next()){B.index>U?(Oe=B,B=null):Oe=B.sibling;var pr=k(x,B,ce.value,C);if(pr===null){B===null&&(B=Oe);break}e&&B&&pr.alternate===null&&t(x,B),h=s(pr,h,U),A===null?O=pr:A.sibling=pr,A=pr,B=Oe}if(ce.done)return r(x,B),je&&vr(x,U),O;if(B===null){for(;!ce.done;U++,ce=v.next())ce=S(x,ce.value,C),ce!==null&&(h=s(ce,h,U),A===null?O=ce:A.sibling=ce,A=ce);return je&&vr(x,U),O}for(B=n(x,B);!ce.done;U++,ce=v.next())ce=_(B,x,U,ce.value,C),ce!==null&&(e&&ce.alternate!==null&&B.delete(ce.key===null?U:ce.key),h=s(ce,h,U),A===null?O=ce:A.sibling=ce,A=ce);return e&&B.forEach(function(nh){return t(x,nh)}),je&&vr(x,U),O}function be(x,h,v,C){if(typeof v=="object"&&v!==null&&v.type===W&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case de:e:{for(var O=v.key,A=h;A!==null;){if(A.key===O){if(O=v.type,O===W){if(A.tag===7){r(x,A.sibling),h=i(A,v.props.children),h.return=x,x=h;break e}}else if(A.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Be&&Ic(O)===A.type){r(x,A.sibling),h=i(A,v.props),h.ref=An(x,A,v),h.return=x,x=h;break e}r(x,A);break}else t(x,A);A=A.sibling}v.type===W?(h=Er(v.props.children,x.mode,C,v.key),h.return=x,x=h):(C=lo(v.type,v.key,v.props,null,x.mode,C),C.ref=An(x,h,v),C.return=x,x=C)}return c(x);case Y:e:{for(A=v.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){r(x,h.sibling),h=i(h,v.children||[]),h.return=x,x=h;break e}else{r(x,h);break}else t(x,h);h=h.sibling}h=Ss(v,x.mode,C),h.return=x,x=h}return c(x);case Be:return A=v._init,be(x,h,A(v._payload),C)}if(hn(v))return I(x,h,v,C);if(M(v))return R(x,h,v,C);Mi(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(r(x,h.sibling),h=i(h,v),h.return=x,x=h):(r(x,h),h=Ns(v,x.mode,C),h.return=x,x=h),c(x)):r(x,h)}return be}var Gr=Lc(!0),Rc=Lc(!1),Di=tr(null),Fi=null,Kr=null,Ll=null;function Rl(){Ll=Kr=Fi=null}function Ol(e){var t=Di.current;ye(Di),e._currentValue=t}function Ml(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Xr(e,t){Fi=e,Ll=Kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Xe=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},Kr===null){if(Fi===null)throw Error(a(308));Kr=e,Fi.dependencies={lanes:0,firstContext:e}}else Kr=Kr.next=e;return t}var yr=null;function Dl(e){yr===null?yr=[e]:yr.push(e)}function Oc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Dl(t)):(r.next=i.next,i.next=r),t.interleaved=r,Wt(e,n)}function Wt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ir=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(se&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Wt(e,r)}return i=n.interleaved,i===null?(t.next=t,Dl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Wt(e,r)}function Ai(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zo(e,r)}}function Dc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=c:s=s.next=c,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Bi(e,t,r,n){var i=e.updateQueue;ir=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,c===null?s=y:c.next=y,c=f;var N=e.alternate;N!==null&&(N=N.updateQueue,p=N.lastBaseUpdate,p!==c&&(p===null?N.firstBaseUpdate=y:p.next=y,N.lastBaseUpdate=f))}if(s!==null){var S=i.baseState;c=0,N=y=f=null,p=s;do{var k=p.lane,_=p.eventTime;if((n&k)===k){N!==null&&(N=N.next={eventTime:_,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var I=e,R=p;switch(k=t,_=r,R.tag){case 1:if(I=R.payload,typeof I=="function"){S=I.call(_,S,k);break e}S=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=R.payload,k=typeof I=="function"?I.call(_,S,k):I,k==null)break e;S=z({},S,k);break e;case 2:ir=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[p]:k.push(p))}else _={eventTime:_,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},N===null?(y=N=_,f=S):N=N.next=_,c|=k;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(N===null&&(f=S),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=N,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);kr|=c,e.lanes=c,e.memoizedState=S}}function Fc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(a(191,i));i.call(n)}}}var Bn={},_t=tr(Bn),Wn=tr(Bn),Un=tr(Bn);function wr(e){if(e===Bn)throw Error(a(174));return e}function Al(e,t){switch(ge(Un,t),ge(Wn,e),ge(_t,Bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bo(t,e)}ye(_t),ge(_t,t)}function qr(){ye(_t),ye(Wn),ye(Un)}function Ac(e){wr(Un.current);var t=wr(_t.current),r=Bo(t,e.type);t!==r&&(ge(Wn,e),ge(_t,r))}function Bl(e){Wn.current===e&&(ye(_t),ye(Wn))}var ke=tr(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Ul(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var Ui=J.ReactCurrentDispatcher,Hl=J.ReactCurrentBatchConfig,jr=0,Ne=null,Pe=null,Le=null,Hi=!1,Hn=!1,$n=0,Cf=0;function Ue(){throw Error(a(321))}function $l(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!jt(e[r],t[r]))return!1;return!0}function Vl(e,t,r,n,i,s){if(jr=s,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?zf:_f,e=r(n,i),Hn){s=0;do{if(Hn=!1,$n=0,25<=s)throw Error(a(301));s+=1,Le=Pe=null,t.updateQueue=null,Ui.current=Pf,e=r(n,i)}while(Hn)}if(Ui.current=Qi,t=Pe!==null&&Pe.next!==null,jr=0,Le=Pe=Ne=null,Hi=!1,t)throw Error(a(300));return e}function Ql(){var e=$n!==0;return $n=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?Ne.memoizedState=Le=e:Le=Le.next=e,Le}function ft(){if(Pe===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Le===null?Ne.memoizedState:Le.next;if(t!==null)Le=t,Pe=e;else{if(e===null)throw Error(a(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?Ne.memoizedState=Le=e:Le=Le.next=e}return Le}function Vn(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=ft(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var n=Pe,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var p=c=null,f=null,y=s;do{var N=y.lane;if((jr&N)===N)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var S={lane:N,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=S,c=n):f=f.next=S,Ne.lanes|=N,kr|=N}y=y.next}while(y!==null&&y!==s);f===null?c=n:f.next=p,jt(n,t.memoizedState)||(Xe=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,Ne.lanes|=s,kr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Gl(e){var t=ft(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);jt(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Bc(){}function Wc(e,t){var r=Ne,n=ft(),i=t(),s=!jt(n.memoizedState,i);if(s&&(n.memoizedState=i,Xe=!0),n=n.queue,Kl($c.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Le!==null&&Le.memoizedState.tag&1){if(r.flags|=2048,Qn(9,Hc.bind(null,r,n,i,t),void 0,null),Re===null)throw Error(a(349));(jr&30)!==0||Uc(r,t,i)}return i}function Uc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Hc(e,t,r,n){t.value=r,t.getSnapshot=n,Vc(t)&&Qc(e)}function $c(e,t,r){return r(function(){Vc(t)&&Qc(e)})}function Vc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!jt(e,r)}catch{return!0}}function Qc(e){var t=Wt(e,1);t!==null&&Et(t,e,1,-1)}function Yc(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vn,lastRenderedState:e},t.queue=e,e=e.dispatch=Tf.bind(null,Ne,e),[t.memoizedState,e]}function Qn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Gc(){return ft().memoizedState}function $i(e,t,r,n){var i=Pt();Ne.flags|=e,i.memoizedState=Qn(1|t,r,void 0,n===void 0?null:n)}function Vi(e,t,r,n){var i=ft();n=n===void 0?null:n;var s=void 0;if(Pe!==null){var c=Pe.memoizedState;if(s=c.destroy,n!==null&&$l(n,c.deps)){i.memoizedState=Qn(t,r,s,n);return}}Ne.flags|=e,i.memoizedState=Qn(1|t,r,s,n)}function Kc(e,t){return $i(8390656,8,e,t)}function Kl(e,t){return Vi(2048,8,e,t)}function Xc(e,t){return Vi(4,2,e,t)}function qc(e,t){return Vi(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,r){return r=r!=null?r.concat([e]):null,Vi(4,4,Zc.bind(null,t,e),r)}function Xl(){}function eu(e,t){var r=ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$l(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function tu(e,t){var r=ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$l(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ru(e,t,r){return(jr&21)===0?(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=r):(jt(r,t)||(r=Ia(),Ne.lanes|=r,kr|=r,e.baseState=!0),t)}function Ef(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var n=Hl.transition;Hl.transition={};try{e(!1),t()}finally{me=r,Hl.transition=n}}function nu(){return ft().memoizedState}function bf(e,t,r){var n=cr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},iu(e))ou(t,r);else if(r=Oc(e,t,r,n),r!==null){var i=Ye();Et(r,e,n,i),lu(r,t,n)}}function Tf(e,t,r){var n=cr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(iu(e))ou(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,p=s(c,r);if(i.hasEagerState=!0,i.eagerState=p,jt(p,c)){var f=t.interleaved;f===null?(i.next=i,Dl(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=Oc(e,t,i,n),r!==null&&(i=Ye(),Et(r,e,n,i),lu(r,t,n))}}function iu(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function ou(e,t){Hn=Hi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function lu(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Zo(e,r)}}var Qi={readContext:pt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},zf={readContext:pt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Kc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$i(4194308,4,Zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var r=Pt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Pt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=bf.bind(null,Ne,e),[n.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Yc,useDebugValue:Xl,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Yc(!1),t=e[0];return e=Ef.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ne,i=Pt();if(je){if(r===void 0)throw Error(a(407));r=r()}else{if(r=t(),Re===null)throw Error(a(349));(jr&30)!==0||Uc(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Kc($c.bind(null,n,s,e),[e]),n.flags|=2048,Qn(9,Hc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Pt(),t=Re.identifierPrefix;if(je){var r=Bt,n=At;r=(n&~(1<<32-wt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=$n++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Cf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_f={readContext:pt,useCallback:eu,useContext:pt,useEffect:Kl,useImperativeHandle:Jc,useInsertionEffect:Xc,useLayoutEffect:qc,useMemo:tu,useReducer:Yl,useRef:Gc,useState:function(){return Yl(Vn)},useDebugValue:Xl,useDeferredValue:function(e){var t=ft();return ru(t,Pe.memoizedState,e)},useTransition:function(){var e=Yl(Vn)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Wc,useId:nu,unstable_isNewReconciler:!1},Pf={readContext:pt,useCallback:eu,useContext:pt,useEffect:Kl,useImperativeHandle:Jc,useInsertionEffect:Xc,useLayoutEffect:qc,useMemo:tu,useReducer:Gl,useRef:Gc,useState:function(){return Gl(Vn)},useDebugValue:Xl,useDeferredValue:function(e){var t=ft();return Pe===null?t.memoizedState=e:ru(t,Pe.memoizedState,e)},useTransition:function(){var e=Gl(Vn)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Bc,useSyncExternalStore:Wc,useId:nu,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ql(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Yi={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ye(),i=cr(e),s=Ut(n,i);s.payload=t,r!=null&&(s.callback=r),t=or(e,s,i),t!==null&&(Et(t,e,i,n),Ai(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ye(),i=cr(e),s=Ut(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=or(e,s,i),t!==null&&(Et(t,e,i,n),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ye(),n=cr(e),i=Ut(r,n);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,n),t!==null&&(Et(t,e,n,r),Ai(t,e,n))}};function su(e,t,r,n,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,c):t.prototype&&t.prototype.isPureReactComponent?!In(r,n)||!In(i,s):!0}function au(e,t,r){var n=!1,i=rr,s=t.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Ke(t)?xr:We.current,n=t.contextTypes,s=(n=n!=null)?$r(e,i):rr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function cu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Zl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Fl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Ke(t)?xr:We.current,i.context=$r(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ql(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yi.enqueueReplaceState(i,i.state,null),Bi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zr(e,t){try{var r="",n=t;do r+=re(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Jl(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function es(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var If=typeof WeakMap=="function"?WeakMap:Map;function uu(e,t,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){eo||(eo=!0,ms=n),es(e,t)},r}function du(e,t,r){r=Ut(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){es(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){es(e,t),typeof n!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function pu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new If;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Qf.bind(null,e,t,r),t.then(e,e))}function fu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hu(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ut(-1,1),t.tag=2,or(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Lf=J.ReactCurrentOwner,Xe=!1;function Qe(e,t,r,n){t.child=e===null?Rc(t,null,r,n):Gr(t,e.child,r,n)}function mu(e,t,r,n,i){r=r.render;var s=t.ref;return Xr(t,i),n=Vl(e,t,r,n,s,i),r=Ql(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(je&&r&&Tl(t),t.flags|=1,Qe(e,t,n,i),t.child)}function xu(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!ks(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,gu(e,t,s,n,i)):(e=lo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var c=s.memoizedProps;if(r=r.compare,r=r!==null?r:In,r(c,n)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=dr(s,n),e.ref=t.ref,e.return=t,t.child=e}function gu(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(In(s,n)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return ts(e,t,r,n,i)}function vu(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(en,lt),lt|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(en,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ge(en,lt),lt|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ge(en,lt),lt|=n;return Qe(e,t,i,r),t.child}function yu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ts(e,t,r,n,i){var s=Ke(r)?xr:We.current;return s=$r(t,s),Xr(t,i),r=Vl(e,t,r,n,s,i),n=Ql(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(je&&n&&Tl(t),t.flags|=1,Qe(e,t,r,i),t.child)}function wu(e,t,r,n,i){if(Ke(r)){var s=!0;Pi(t)}else s=!1;if(Xr(t,i),t.stateNode===null)Ki(e,t),au(t,r,n),Zl(t,r,n,i),n=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var f=c.context,y=r.contextType;typeof y=="object"&&y!==null?y=pt(y):(y=Ke(r)?xr:We.current,y=$r(t,y));var N=r.getDerivedStateFromProps,S=typeof N=="function"||typeof c.getSnapshotBeforeUpdate=="function";S||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==n||f!==y)&&cu(t,c,n,y),ir=!1;var k=t.memoizedState;c.state=k,Bi(t,n,c,i),f=t.memoizedState,p!==n||k!==f||Ge.current||ir?(typeof N=="function"&&(ql(t,r,N,n),f=t.memoizedState),(p=ir||su(t,r,p,n,k,f,y))?(S||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),c.props=n,c.state=f,c.context=y,n=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,Mc(e,t),p=t.memoizedProps,y=t.type===t.elementType?p:Nt(t.type,p),c.props=y,S=t.pendingProps,k=c.context,f=r.contextType,typeof f=="object"&&f!==null?f=pt(f):(f=Ke(r)?xr:We.current,f=$r(t,f));var _=r.getDerivedStateFromProps;(N=typeof _=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==S||k!==f)&&cu(t,c,n,f),ir=!1,k=t.memoizedState,c.state=k,Bi(t,n,c,i);var I=t.memoizedState;p!==S||k!==I||Ge.current||ir?(typeof _=="function"&&(ql(t,r,_,n),I=t.memoizedState),(y=ir||su(t,r,y,n,k,I,f)||!1)?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,I,f),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,I,f)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=I),c.props=n,c.state=I,c.context=f,n=y):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return rs(e,t,r,n,s,i)}function rs(e,t,r,n,i,s){yu(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return i&&Cc(t,r,!1),Ht(e,t,s);n=t.stateNode,Lf.current=t;var p=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=Gr(t,e.child,null,s),t.child=Gr(t,null,p,s)):Qe(e,t,p,s),t.memoizedState=n.state,i&&Cc(t,r,!0),t.child}function ju(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),Al(e,t.containerInfo)}function ku(e,t,r,n,i){return Yr(),Il(i),t.flags|=256,Qe(e,t,r,n),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function is(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,t,r){var n=t.pendingProps,i=ke.current,s=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ke,i&1),e===null)return Pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,s?(n=t.mode,s=t.child,c={mode:"hidden",children:c},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=so(c,n,0,null),e=Er(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=is(r),t.memoizedState=ns,e):os(t,c));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Rf(e,t,c,n,p,i,r);if(s){s=n.fallback,c=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=dr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?s=dr(p,s):(s=Er(s,c,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,c=e.child.memoizedState,c=c===null?is(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~r,t.memoizedState=ns,n}return s=e.child,e=s.sibling,n=dr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function os(e,t){return t=so({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,r,n){return n!==null&&Il(n),Gr(t,e.child,null,r),e=os(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,r,n,i,s,c){if(r)return t.flags&256?(t.flags&=-257,n=Jl(Error(a(422))),Gi(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=so({mode:"visible",children:n.children},i,0,null),s=Er(s,i,c,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&Gr(t,e.child,null,c),t.child.memoizedState=is(c),t.memoizedState=ns,s);if((t.mode&1)===0)return Gi(e,t,c,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,s=Error(a(419)),n=Jl(s,n,void 0),Gi(e,t,c,n)}if(p=(c&e.childLanes)!==0,Xe||p){if(n=Re,n!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|c))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(e,i),Et(n,e,i,-1))}return js(),n=Jl(Error(a(421))),Gi(e,t,c,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Yf.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ot=er(i.nextSibling),it=t,je=!0,kt=null,e!==null&&(ut[dt++]=At,ut[dt++]=Bt,ut[dt++]=gr,At=e.id,Bt=e.overflow,gr=t),t=os(t,n.children),t.flags|=4096,t)}function Su(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ml(e.return,t,r)}function ls(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Cu(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Qe(e,t,n.children,r),n=ke.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,r,t);else if(e.tag===19)Su(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ge(ke,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Wi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ls(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ls(t,!0,r,null,s);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),kr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,r=dr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Of(e,t,r){switch(t.tag){case 3:ju(t),Yr();break;case 5:Ac(t);break;case 1:Ke(t.type)&&Pi(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ge(Di,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Nu(e,t,r):(ge(ke,ke.current&1),e=Ht(e,t,r),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Cu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),n)break;return null;case 22:case 23:return t.lanes=0,vu(e,t,r)}return Ht(e,t,r)}var Eu,ss,bu,Tu;Eu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ss=function(){},bu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,wr(_t.current);var s=null;switch(r){case"input":i=Mo(e,i),n=Mo(e,n),s=[];break;case"select":i=z({},i,{value:void 0}),n=z({},n,{value:void 0}),s=[];break;case"textarea":i=Ao(e,i),n=Ao(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ti)}Wo(r,n);var c;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(c in p)p.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?s||(s=[]):(s=s||[]).push(y,null));for(y in n){var f=n[y];if(p=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(c in p)!p.hasOwnProperty(c)||f&&f.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in f)f.hasOwnProperty(c)&&p[c]!==f[c]&&(r||(r={}),r[c]=f[c])}else r||(s||(s=[]),s.push(y,r)),r=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(s=s||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&ve("scroll",e),s||p===f||(s=[])):(s=s||[]).push(y,f))}r&&(s=s||[]).push("style",r);var y=s;(t.updateQueue=y)&&(t.flags|=4)}},Tu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Yn(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Mf(e,t,r){var n=t.pendingProps;switch(zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return Ke(t.type)&&_i(),He(t),null;case 3:return n=t.stateNode,qr(),ye(Ge),ye(We),Ul(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(vs(kt),kt=null))),ss(e,t),He(t),null;case 5:Bl(t);var i=wr(Un.current);if(r=t.type,e!==null&&t.stateNode!=null)bu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(a(166));return He(t),null}if(e=wr(_t.current),Oi(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[zt]=t,n[Dn]=s,e=(t.mode&1)!==0,r){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(i=0;i<Rn.length;i++)ve(Rn[i],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":aa(n,s),ve("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ve("invalid",n);break;case"textarea":da(n,s),ve("invalid",n)}Wo(r,s),i=null;for(var c in s)if(s.hasOwnProperty(c)){var p=s[c];c==="children"?typeof p=="string"?n.textContent!==p&&(s.suppressHydrationWarning!==!0&&bi(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(s.suppressHydrationWarning!==!0&&bi(n.textContent,p,e),i=["children",""+p]):g.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&ve("scroll",n)}switch(r){case"input":Mt(n),ua(n,s,!0);break;case"textarea":Mt(n),fa(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ti)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ha(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[zt]=t,e[Dn]=n,Eu(e,t,!1,!1),t.stateNode=e;e:{switch(c=Uo(r,n),r){case"dialog":ve("cancel",e),ve("close",e),i=n;break;case"iframe":case"object":case"embed":ve("load",e),i=n;break;case"video":case"audio":for(i=0;i<Rn.length;i++)ve(Rn[i],e);i=n;break;case"source":ve("error",e),i=n;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=n;break;case"details":ve("toggle",e),i=n;break;case"input":aa(e,n),i=Mo(e,n),ve("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=z({},n,{value:void 0}),ve("invalid",e);break;case"textarea":da(e,n),i=Ao(e,n),ve("invalid",e);break;default:i=n}Wo(r,i),p=i;for(s in p)if(p.hasOwnProperty(s)){var f=p[s];s==="style"?ga(e,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ma(e,f)):s==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&mn(e,f):typeof f=="number"&&mn(e,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(g.hasOwnProperty(s)?f!=null&&s==="onScroll"&&ve("scroll",e):f!=null&&ie(e,s,f,c))}switch(r){case"input":Mt(e),ua(e,n,!1);break;case"textarea":Mt(e),fa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+oe(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Ir(e,!!n.multiple,s,!1):n.defaultValue!=null&&Ir(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ti)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Tu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(a(166));if(r=wr(Un.current),wr(_t.current),Oi(t)){if(n=t.stateNode,r=t.memoizedProps,n[zt]=t,(s=n.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:bi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bi(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[zt]=t,t.stateNode=n}return He(t),null;case 13:if(ye(ke),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ot!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pc(),Yr(),t.flags|=98560,s=!1;else if(s=Oi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[zt]=t}else Yr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),s=!1}else kt!==null&&(vs(kt),kt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?Ie===0&&(Ie=3):js())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return qr(),ss(e,t),e===null&&On(t.stateNode.containerInfo),He(t),null;case 10:return Ol(t.type._context),He(t),null;case 17:return Ke(t.type)&&_i(),He(t),null;case 19:if(ye(ke),s=t.memoizedState,s===null)return He(t),null;if(n=(t.flags&128)!==0,c=s.rendering,c===null)if(n)Yn(s,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Wi(e),c!==null){for(t.flags|=128,Yn(s,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ee()>tn&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Wi(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Yn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!je)return He(t),null}else 2*Ee()-s.renderingStartTime>tn&&r!==1073741824&&(t.flags|=128,n=!0,Yn(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(r=s.last,r!==null?r.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ee(),t.sibling=null,r=ke.current,ge(ke,n?r&1|2:r&1),t):(He(t),null);case 22:case 23:return ws(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(lt&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Df(e,t){switch(zl(t),t.tag){case 1:return Ke(t.type)&&_i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(),ye(Ge),ye(We),Ul(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bl(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return qr(),null;case 10:return Ol(t.type._context),null;case 22:case 23:return ws(),null;case 24:return null;default:return null}}var Xi=!1,$e=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,P=null;function Jr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Se(e,t,n)}else r.current=null}function as(e,t,r){try{r()}catch(n){Se(e,t,n)}}var zu=!1;function Af(e,t){if(wl=xi,e=sc(),pl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var c=0,p=-1,f=-1,y=0,N=0,S=e,k=null;t:for(;;){for(var _;S!==r||i!==0&&S.nodeType!==3||(p=c+i),S!==s||n!==0&&S.nodeType!==3||(f=c+n),S.nodeType===3&&(c+=S.nodeValue.length),(_=S.firstChild)!==null;)k=S,S=_;for(;;){if(S===e)break t;if(k===r&&++y===i&&(p=c),k===s&&++N===n&&(f=c),(_=S.nextSibling)!==null)break;S=k,k=S.parentNode}S=_}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(jl={focusedElem:e,selectionRange:r},xi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var R=I.memoizedProps,be=I.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?R:Nt(t.type,R),be);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(C){Se(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return I=zu,zu=!1,I}function Gn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&as(t,r,s)}i=i.next}while(i!==n)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function cs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Dn],delete t[Cl],delete t[jf],delete t[kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pu(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ti));else if(n!==4&&(e=e.child,e!==null))for(us(e,t,r),e=e.sibling;e!==null;)us(e,t,r),e=e.sibling}function ds(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ds(e,t,r),e=e.sibling;e!==null;)ds(e,t,r),e=e.sibling}var Fe=null,St=!1;function lr(e,t,r){for(r=r.child;r!==null;)Lu(e,t,r),r=r.sibling}function Lu(e,t,r){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(ui,r)}catch{}switch(r.tag){case 5:$e||Jr(r,t);case 6:var n=Fe,i=St;Fe=null,lr(e,t,r),Fe=n,St=i,Fe!==null&&(St?(e=Fe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Fe.removeChild(r.stateNode));break;case 18:Fe!==null&&(St?(e=Fe,r=r.stateNode,e.nodeType===8?Sl(e.parentNode,r):e.nodeType===1&&Sl(e,r),En(e)):Sl(Fe,r.stateNode));break;case 4:n=Fe,i=St,Fe=r.stateNode.containerInfo,St=!0,lr(e,t,r),Fe=n,St=i;break;case 0:case 11:case 14:case 15:if(!$e&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&as(r,t,c),i=i.next}while(i!==n)}lr(e,t,r);break;case 1:if(!$e&&(Jr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){Se(r,t,p)}lr(e,t,r);break;case 21:lr(e,t,r);break;case 22:r.mode&1?($e=(n=$e)||r.memoizedState!==null,lr(e,t,r),$e=n):lr(e,t,r);break;default:lr(e,t,r)}}function Ru(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ff),t.forEach(function(n){var i=Gf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:Fe=p.stateNode,St=!1;break e;case 3:Fe=p.stateNode.containerInfo,St=!0;break e;case 4:Fe=p.stateNode.containerInfo,St=!0;break e}p=p.return}if(Fe===null)throw Error(a(160));Lu(s,c,i),Fe=null,St=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Se(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling}function Ou(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),It(e),n&4){try{Gn(3,e,e.return),qi(3,e)}catch(R){Se(e,e.return,R)}try{Gn(5,e,e.return)}catch(R){Se(e,e.return,R)}}break;case 1:Ct(t,e),It(e),n&512&&r!==null&&Jr(r,r.return);break;case 5:if(Ct(t,e),It(e),n&512&&r!==null&&Jr(r,r.return),e.flags&32){var i=e.stateNode;try{mn(i,"")}catch(R){Se(e,e.return,R)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,c=r!==null?r.memoizedProps:s,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&s.type==="radio"&&s.name!=null&&ca(i,s),Uo(p,c);var y=Uo(p,s);for(c=0;c<f.length;c+=2){var N=f[c],S=f[c+1];N==="style"?ga(i,S):N==="dangerouslySetInnerHTML"?ma(i,S):N==="children"?mn(i,S):ie(i,N,S,y)}switch(p){case"input":Do(i,s);break;case"textarea":pa(i,s);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ir(i,!!s.multiple,_,!1):k!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dn]=s}catch(R){Se(e,e.return,R)}}break;case 6:if(Ct(t,e),It(e),n&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(R){Se(e,e.return,R)}}break;case 3:if(Ct(t,e),It(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(R){Se(e,e.return,R)}break;case 4:Ct(t,e),It(e);break;case 13:Ct(t,e),It(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hs=Ee())),n&4&&Ru(e);break;case 22:if(N=r!==null&&r.memoizedState!==null,e.mode&1?($e=(y=$e)||N,Ct(t,e),$e=y):Ct(t,e),It(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!N&&(e.mode&1)!==0)for(P=e,N=e.child;N!==null;){for(S=P=N;P!==null;){switch(k=P,_=k.child,k.tag){case 0:case 11:case 14:case 15:Gn(4,k,k.return);break;case 1:Jr(k,k.return);var I=k.stateNode;if(typeof I.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(R){Se(n,r,R)}}break;case 5:Jr(k,k.return);break;case 22:if(k.memoizedState!==null){Fu(S);continue}}_!==null?(_.return=k,P=_):Fu(S)}N=N.sibling}e:for(N=null,S=e;;){if(S.tag===5){if(N===null){N=S;try{i=S.stateNode,y?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(p=S.stateNode,f=S.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=xa("display",c))}catch(R){Se(e,e.return,R)}}}else if(S.tag===6){if(N===null)try{S.stateNode.nodeValue=y?"":S.memoizedProps}catch(R){Se(e,e.return,R)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;N===S&&(N=null),S=S.return}N===S&&(N=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Ct(t,e),It(e),n&4&&Ru(e);break;case 21:break;default:Ct(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Pu(r)){var n=r;break e}r=r.return}throw Error(a(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(mn(i,""),n.flags&=-33);var s=Iu(e);ds(e,s,i);break;case 3:case 4:var c=n.stateNode.containerInfo,p=Iu(e);us(e,p,c);break;default:throw Error(a(161))}}catch(f){Se(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bf(e,t,r){P=e,Mu(e)}function Mu(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&n){var c=i.memoizedState!==null||Xi;if(!c){var p=i.alternate,f=p!==null&&p.memoizedState!==null||$e;p=Xi;var y=$e;if(Xi=c,($e=f)&&!y)for(P=i;P!==null;)c=P,f=c.child,c.tag===22&&c.memoizedState!==null?Au(i):f!==null?(f.return=c,P=f):Au(i);for(;s!==null;)P=s,Mu(s),s=s.sibling;P=i,Xi=p,$e=y}Du(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):Du(e)}}function Du(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:$e||qi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!$e)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Fc(t,s,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Fc(t,c,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var N=y.memoizedState;if(N!==null){var S=N.dehydrated;S!==null&&En(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}$e||t.flags&512&&cs(t)}catch(k){Se(t,t.return,k)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Fu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function Au(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{qi(4,t)}catch(f){Se(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){Se(t,i,f)}}var s=t.return;try{cs(t)}catch(f){Se(t,s,f)}break;case 5:var c=t.return;try{cs(t)}catch(f){Se(t,c,f)}}}catch(f){Se(t,t.return,f)}if(t===e){P=null;break}var p=t.sibling;if(p!==null){p.return=t.return,P=p;break}P=t.return}}var Wf=Math.ceil,Zi=J.ReactCurrentDispatcher,ps=J.ReactCurrentOwner,ht=J.ReactCurrentBatchConfig,se=0,Re=null,Te=null,Ae=0,lt=0,en=tr(0),Ie=0,Kn=null,kr=0,Ji=0,fs=0,Xn=null,qe=null,hs=0,tn=1/0,$t=null,eo=!1,ms=null,sr=null,to=!1,ar=null,ro=0,qn=0,xs=null,no=-1,io=0;function Ye(){return(se&6)!==0?Ee():no!==-1?no:no=Ee()}function cr(e){return(e.mode&1)===0?1:(se&2)!==0&&Ae!==0?Ae&-Ae:Sf.transition!==null?(io===0&&(io=Ia()),io):(e=me,e!==0||(e=window.event,e=e===void 0?16:Wa(e.type)),e)}function Et(e,t,r,n){if(50<qn)throw qn=0,xs=null,Error(a(185));jn(e,r,n),((se&2)===0||e!==Re)&&(e===Re&&((se&2)===0&&(Ji|=r),Ie===4&&ur(e,Ae)),Ze(e,n),r===1&&se===0&&(t.mode&1)===0&&(tn=Ee()+500,Ii&&nr()))}function Ze(e,t){var r=e.callbackNode;Np(e,t);var n=fi(e,e===Re?Ae:0);if(n===0)r!==null&&za(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&za(r),t===1)e.tag===0?Nf(Wu.bind(null,e)):Ec(Wu.bind(null,e)),yf(function(){(se&6)===0&&nr()}),r=null;else{switch(La(n)){case 1:r=Ko;break;case 4:r=_a;break;case 16:r=ci;break;case 536870912:r=Pa;break;default:r=ci}r=Ku(r,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bu(e,t){if(no=-1,io=0,(se&6)!==0)throw Error(a(327));var r=e.callbackNode;if(rn()&&e.callbackNode!==r)return null;var n=fi(e,e===Re?Ae:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=oo(e,n);else{t=n;var i=se;se|=2;var s=Hu();(Re!==e||Ae!==t)&&($t=null,tn=Ee()+500,Sr(e,t));do try{$f();break}catch(p){Uu(e,p)}while(!0);Rl(),Zi.current=s,se=i,Te!==null?t=0:(Re=null,Ae=0,t=Ie)}if(t!==0){if(t===2&&(i=Xo(e),i!==0&&(n=i,t=gs(e,i))),t===1)throw r=Kn,Sr(e,0),ur(e,n),Ze(e,Ee()),r;if(t===6)ur(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Uf(i)&&(t=oo(e,n),t===2&&(s=Xo(e),s!==0&&(n=s,t=gs(e,s))),t===1))throw r=Kn,Sr(e,0),ur(e,n),Ze(e,Ee()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(a(345));case 2:Cr(e,qe,$t);break;case 3:if(ur(e,n),(n&130023424)===n&&(t=hs+500-Ee(),10<t)){if(fi(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nl(Cr.bind(null,e,qe,$t),t);break}Cr(e,qe,$t);break;case 4:if(ur(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var c=31-wt(n);s=1<<c,c=t[c],c>i&&(i=c),n&=~s}if(n=i,n=Ee()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Wf(n/1960))-n,10<n){e.timeoutHandle=Nl(Cr.bind(null,e,qe,$t),n);break}Cr(e,qe,$t);break;case 5:Cr(e,qe,$t);break;default:throw Error(a(329))}}}return Ze(e,Ee()),e.callbackNode===r?Bu.bind(null,e):null}function gs(e,t){var r=Xn;return e.current.memoizedState.isDehydrated&&(Sr(e,t).flags|=256),e=oo(e,t),e!==2&&(t=qe,qe=r,t!==null&&vs(t)),e}function vs(e){qe===null?qe=e:qe.push.apply(qe,e)}function Uf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t){for(t&=~fs,t&=~Ji,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wt(t),n=1<<r;e[r]=-1,t&=~n}}function Wu(e){if((se&6)!==0)throw Error(a(327));rn();var t=fi(e,0);if((t&1)===0)return Ze(e,Ee()),null;var r=oo(e,t);if(e.tag!==0&&r===2){var n=Xo(e);n!==0&&(t=n,r=gs(e,n))}if(r===1)throw r=Kn,Sr(e,0),ur(e,t),Ze(e,Ee()),r;if(r===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,qe,$t),Ze(e,Ee()),null}function ys(e,t){var r=se;se|=1;try{return e(t)}finally{se=r,se===0&&(tn=Ee()+500,Ii&&nr())}}function Nr(e){ar!==null&&ar.tag===0&&(se&6)===0&&rn();var t=se;se|=1;var r=ht.transition,n=me;try{if(ht.transition=null,me=1,e)return e()}finally{me=n,ht.transition=r,se=t,(se&6)===0&&nr()}}function ws(){lt=en.current,ye(en)}function Sr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,vf(r)),Te!==null)for(r=Te.return;r!==null;){var n=r;switch(zl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&_i();break;case 3:qr(),ye(Ge),ye(We),Ul();break;case 5:Bl(n);break;case 4:qr();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Ol(n.type._context);break;case 22:case 23:ws()}r=r.return}if(Re=e,Te=e=dr(e.current,null),Ae=lt=t,Ie=0,Kn=null,fs=Ji=kr=0,qe=Xn=null,yr!==null){for(t=0;t<yr.length;t++)if(r=yr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var c=s.next;s.next=i,n.next=c}r.pending=n}yr=null}return e}function Uu(e,t){do{var r=Te;try{if(Rl(),Ui.current=Qi,Hi){for(var n=Ne.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Hi=!1}if(jr=0,Le=Pe=Ne=null,Hn=!1,$n=0,ps.current=null,r===null||r.return===null){Ie=1,Kn=t,Te=null;break}e:{var s=e,c=r.return,p=r,f=t;if(t=Ae,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,N=p,S=N.tag;if((N.mode&1)===0&&(S===0||S===11||S===15)){var k=N.alternate;k?(N.updateQueue=k.updateQueue,N.memoizedState=k.memoizedState,N.lanes=k.lanes):(N.updateQueue=null,N.memoizedState=null)}var _=fu(c);if(_!==null){_.flags&=-257,hu(_,c,p,s,t),_.mode&1&&pu(s,y,t),t=_,f=y;var I=t.updateQueue;if(I===null){var R=new Set;R.add(f),t.updateQueue=R}else I.add(f);break e}else{if((t&1)===0){pu(s,y,t),js();break e}f=Error(a(426))}}else if(je&&p.mode&1){var be=fu(c);if(be!==null){(be.flags&65536)===0&&(be.flags|=256),hu(be,c,p,s,t),Il(Zr(f,p));break e}}s=f=Zr(f,p),Ie!==4&&(Ie=2),Xn===null?Xn=[s]:Xn.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=uu(s,f,t);Dc(s,x);break e;case 1:p=f;var h=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(sr===null||!sr.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=du(s,p,t);Dc(s,C);break e}}s=s.return}while(s!==null)}Vu(r)}catch(O){t=O,Te===r&&r!==null&&(Te=r=r.return);continue}break}while(!0)}function Hu(){var e=Zi.current;return Zi.current=Qi,e===null?Qi:e}function js(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Re===null||(kr&268435455)===0&&(Ji&268435455)===0||ur(Re,Ae)}function oo(e,t){var r=se;se|=2;var n=Hu();(Re!==e||Ae!==t)&&($t=null,Sr(e,t));do try{Hf();break}catch(i){Uu(e,i)}while(!0);if(Rl(),se=r,Zi.current=n,Te!==null)throw Error(a(261));return Re=null,Ae=0,Ie}function Hf(){for(;Te!==null;)$u(Te)}function $f(){for(;Te!==null&&!hp();)$u(Te)}function $u(e){var t=Gu(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?Vu(e):Te=t,ps.current=null}function Vu(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Mf(r,t,lt),r!==null){Te=r;return}}else{if(r=Df(r,t),r!==null){r.flags&=32767,Te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Te=null;return}}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ie===0&&(Ie=5)}function Cr(e,t,r){var n=me,i=ht.transition;try{ht.transition=null,me=1,Vf(e,t,r,n)}finally{ht.transition=i,me=n}return null}function Vf(e,t,r,n){do rn();while(ar!==null);if((se&6)!==0)throw Error(a(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Sp(e,s),e===Re&&(Te=Re=null,Ae=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||to||(to=!0,Ku(ci,function(){return rn(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=ht.transition,ht.transition=null;var c=me;me=1;var p=se;se|=4,ps.current=null,Af(e,r),Ou(r,e),df(jl),xi=!!wl,jl=wl=null,e.current=r,Bf(r),mp(),se=p,me=c,ht.transition=s}else e.current=r;if(to&&(to=!1,ar=e,ro=i),s=e.pendingLanes,s===0&&(sr=null),vp(r.stateNode),Ze(e,Ee()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=ms,ms=null,e;return(ro&1)!==0&&e.tag!==0&&rn(),s=e.pendingLanes,(s&1)!==0?e===xs?qn++:(qn=0,xs=e):qn=0,nr(),null}function rn(){if(ar!==null){var e=La(ro),t=ht.transition,r=me;try{if(ht.transition=null,me=16>e?16:e,ar===null)var n=!1;else{if(e=ar,ar=null,ro=0,(se&6)!==0)throw Error(a(331));var i=se;for(se|=4,P=e.current;P!==null;){var s=P,c=s.child;if((P.flags&16)!==0){var p=s.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(P=y;P!==null;){var N=P;switch(N.tag){case 0:case 11:case 15:Gn(8,N,s)}var S=N.child;if(S!==null)S.return=N,P=S;else for(;P!==null;){N=P;var k=N.sibling,_=N.return;if(_u(N),N===y){P=null;break}if(k!==null){k.return=_,P=k;break}P=_}}}var I=s.alternate;if(I!==null){var R=I.child;if(R!==null){I.child=null;do{var be=R.sibling;R.sibling=null,R=be}while(R!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,P=c;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Gn(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}var h=e.current;for(P=h;P!==null;){c=P;var v=c.child;if((c.subtreeFlags&2064)!==0&&v!==null)v.return=c,P=v;else e:for(c=h;P!==null;){if(p=P,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:qi(9,p)}}catch(O){Se(p,p.return,O)}if(p===c){P=null;break e}var C=p.sibling;if(C!==null){C.return=p.return,P=C;break e}P=p.return}}if(se=i,nr(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(ui,e)}catch{}n=!0}return n}finally{me=r,ht.transition=t}}return!1}function Qu(e,t,r){t=Zr(r,t),t=uu(e,t,1),e=or(e,t,1),t=Ye(),e!==null&&(jn(e,1,t),Ze(e,t))}function Se(e,t,r){if(e.tag===3)Qu(e,e,r);else for(;t!==null;){if(t.tag===3){Qu(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(sr===null||!sr.has(n))){e=Zr(r,e),e=du(t,e,1),t=or(t,e,1),e=Ye(),t!==null&&(jn(t,1,e),Ze(t,e));break}}t=t.return}}function Qf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(Ae&r)===r&&(Ie===4||Ie===3&&(Ae&130023424)===Ae&&500>Ee()-hs?Sr(e,0):fs|=r),Ze(e,t)}function Yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=pi,pi<<=1,(pi&130023424)===0&&(pi=4194304)));var r=Ye();e=Wt(e,t),e!==null&&(jn(e,t,r),Ze(e,r))}function Yf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yu(e,r)}function Gf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(a(314))}n!==null&&n.delete(t),Yu(e,r)}var Gu;Gu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Xe=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Xe=!1,Of(e,t,r);Xe=(e.flags&131072)!==0}else Xe=!1,je&&(t.flags&1048576)!==0&&bc(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ki(e,t),e=t.pendingProps;var i=$r(t,We.current);Xr(t,r),i=Vl(null,t,n,e,i,r);var s=Ql();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(n)?(s=!0,Pi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fl(t),i.updater=Yi,t.stateNode=i,i._reactInternals=t,Zl(t,n,e,r),t=rs(null,t,n,!0,s,r)):(t.tag=0,je&&s&&Tl(t),Qe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Xf(n),e=Nt(n,e),i){case 0:t=ts(null,t,n,e,r);break e;case 1:t=wu(null,t,n,e,r);break e;case 11:t=mu(null,t,n,e,r);break e;case 14:t=xu(null,t,n,Nt(n.type,e),r);break e}throw Error(a(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),ts(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),wu(e,t,n,i,r);case 3:e:{if(ju(t),e===null)throw Error(a(387));n=t.pendingProps,s=t.memoizedState,i=s.element,Mc(e,t),Bi(t,n,null,r);var c=t.memoizedState;if(n=c.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Zr(Error(a(423)),t),t=ku(e,t,n,r,i);break e}else if(n!==i){i=Zr(Error(a(424)),t),t=ku(e,t,n,r,i);break e}else for(ot=er(t.stateNode.containerInfo.firstChild),it=t,je=!0,kt=null,r=Rc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Yr(),n===i){t=Ht(e,t,r);break e}Qe(e,t,n,r)}t=t.child}return t;case 5:return Ac(t),e===null&&Pl(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,c=i.children,kl(n,i)?c=null:s!==null&&kl(n,s)&&(t.flags|=32),yu(e,t),Qe(e,t,c,r),t.child;case 6:return e===null&&Pl(t),null;case 13:return Nu(e,t,r);case 4:return Al(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Gr(t,null,n,r):Qe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),mu(e,t,n,i,r);case 7:return Qe(e,t,t.pendingProps,r),t.child;case 8:return Qe(e,t,t.pendingProps.children,r),t.child;case 12:return Qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,c=i.value,ge(Di,n._currentValue),n._currentValue=c,s!==null)if(jt(s.value,c)){if(s.children===i.children&&!Ge.current){t=Ht(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var p=s.dependencies;if(p!==null){c=s.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(s.tag===1){f=Ut(-1,r&-r),f.tag=2;var y=s.updateQueue;if(y!==null){y=y.shared;var N=y.pending;N===null?f.next=f:(f.next=N.next,N.next=f),y.pending=f}}s.lanes|=r,f=s.alternate,f!==null&&(f.lanes|=r),Ml(s.return,r,t),p.lanes|=r;break}f=f.next}}else if(s.tag===10)c=s.type===t.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(a(341));c.lanes|=r,p=c.alternate,p!==null&&(p.lanes|=r),Ml(c,r,t),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===t){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}Qe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Xr(t,r),i=pt(i),n=n(i),t.flags|=1,Qe(e,t,n,r),t.child;case 14:return n=t.type,i=Nt(n,t.pendingProps),i=Nt(n.type,i),xu(e,t,n,i,r);case 15:return gu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),Ki(e,t),t.tag=1,Ke(n)?(e=!0,Pi(t)):e=!1,Xr(t,r),au(t,n,i),Zl(t,n,i,r),rs(null,t,n,!0,e,r);case 19:return Cu(e,t,r);case 22:return vu(e,t,r)}throw Error(a(156,t.tag))};function Ku(e,t){return Ta(e,t)}function Kf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,r,n){return new Kf(e,t,r,n)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xf(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===at)return 11;if(e===ct)return 14}return 2}function dr(e,t){var r=e.alternate;return r===null?(r=mt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lo(e,t,r,n,i,s){var c=2;if(n=e,typeof e=="function")ks(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case W:return Er(r.children,i,s,t);case _e:c=8,i|=8;break;case tt:return e=mt(12,r,t,i|2),e.elementType=tt,e.lanes=s,e;case Ve:return e=mt(13,r,t,i),e.elementType=Ve,e.lanes=s,e;case rt:return e=mt(19,r,t,i),e.elementType=rt,e.lanes=s,e;case xe:return so(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vt:c=10;break e;case Ot:c=9;break e;case at:c=11;break e;case ct:c=14;break e;case Be:c=16,n=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=mt(c,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Er(e,t,r,n){return e=mt(7,e,n,t),e.lanes=r,e}function so(e,t,r,n){return e=mt(22,e,n,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Ns(e,t,r){return e=mt(6,e,null,t),e.lanes=r,e}function Ss(e,t,r){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qf(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cs(e,t,r,n,i,s,c,p,f){return e=new qf(e,t,r,p,f),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(s),e}function Zf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xu(e){if(!e)return rr;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var r=e.type;if(Ke(r))return Sc(e,r,t)}return t}function qu(e,t,r,n,i,s,c,p,f){return e=Cs(r,n,!0,e,i,s,c,p,f),e.context=Xu(null),r=e.current,n=Ye(),i=cr(r),s=Ut(n,i),s.callback=t!=null?t:null,or(r,s,i),e.current.lanes=i,jn(e,i,n),Ze(e,n),e}function ao(e,t,r,n){var i=t.current,s=Ye(),c=cr(i);return r=Xu(r),t.context===null?t.context=r:t.pendingContext=r,t=Ut(s,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=or(i,t,c),e!==null&&(Et(e,i,c,s),Ai(e,i,c)),c}function co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Es(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Jf(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}uo.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));ao(e,t,null,null)},uo.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nr(function(){ao(null,e,null,null)}),t[Dt]=null}};function uo(e){this._internalRoot=e}uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ma();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qt.length&&t!==0&&t<qt[r].priority;r++);qt.splice(r,0,e),r===0&&Aa(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function eh(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var y=co(c);s.call(y)}}var c=qu(t,n,e,0,null,!1,!1,"",ed);return e._reactRootContainer=c,e[Dt]=c.current,On(e.nodeType===8?e.parentNode:e),Nr(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var y=co(f);p.call(y)}}var f=Cs(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=f,e[Dt]=f.current,On(e.nodeType===8?e.parentNode:e),Nr(function(){ao(t,f,r,n)}),f}function fo(e,t,r,n,i){var s=r._reactRootContainer;if(s){var c=s;if(typeof i=="function"){var p=i;i=function(){var f=co(c);p.call(f)}}ao(t,c,e,i)}else c=eh(r,t,e,i,n);return co(c)}Ra=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=wn(t.pendingLanes);r!==0&&(Zo(t,r|1),Ze(t,Ee()),(se&6)===0&&(tn=Ee()+500,nr()))}break;case 13:Nr(function(){var n=Wt(e,1);if(n!==null){var i=Ye();Et(n,e,1,i)}}),Es(e,1)}},Jo=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var r=Ye();Et(t,e,134217728,r)}Es(e,134217728)}},Oa=function(e){if(e.tag===13){var t=cr(e),r=Wt(e,t);if(r!==null){var n=Ye();Et(r,e,t,n)}Es(e,t)}},Ma=function(){return me},Da=function(e,t){var r=me;try{return me=e,t()}finally{me=r}},Vo=function(e,t,r){switch(t){case"input":if(Do(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=zi(n);if(!i)throw Error(a(90));yt(n),Do(n,i)}}}break;case"textarea":pa(e,r);break;case"select":t=r.value,t!=null&&Ir(e,!!r.multiple,t,!1)}},ja=ys,ka=Nr;var th={usingClientEntryPoint:!1,Events:[Fn,Ur,zi,ya,wa,ys]},Zn={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||Jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{ui=ho.inject(rh),Tt=ho}catch{}}return Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,Je.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(t))throw Error(a(200));return Zf(e,t,null,r)},Je.createRoot=function(e,t){if(!Ts(e))throw Error(a(299));var r=!1,n="",i=Ju;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cs(e,1,!1,null,null,r,!1,n,i),e[Dt]=t.current,On(e.nodeType===8?e.parentNode:e),new bs(t)},Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Ea(t),e=e===null?null:e.stateNode,e},Je.flushSync=function(e){return Nr(e)},Je.hydrate=function(e,t,r){if(!po(t))throw Error(a(200));return fo(null,e,t,!0,r)},Je.hydrateRoot=function(e,t,r){if(!Ts(e))throw Error(a(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",c=Ju;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=qu(t,null,e,1,r!=null?r:null,i,!1,s,c),e[Dt]=t.current,On(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new uo(t)},Je.render=function(e,t,r){if(!po(t))throw Error(a(200));return fo(null,e,t,!1,r)},Je.unmountComponentAtNode=function(e){if(!po(e))throw Error(a(40));return e._reactRootContainer?(Nr(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1},Je.unstable_batchedUpdates=ys,Je.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!po(r))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return fo(e,t,r,!1,n)},Je.version="18.3.1-next-f1338f8080-20240426",Je}var ad;function dh(){if(ad)return Ps.exports;ad=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Ps.exports=uh(),Ps.exports}var cd;function ph(){if(cd)return mo;cd=1;var l=dh();return mo.createRoot=l.createRoot,mo.hydrateRoot=l.hydrateRoot,mo}var fh=ph(),Ce=ta();const xt=ih(Ce);var et=function(){return et=Object.assign||function(u){for(var a,d=1,g=arguments.length;d<g;d++){a=arguments[d];for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&(u[w]=a[w])}return u},et.apply(this,arguments)};function So(l,u,a){if(a||arguments.length===2)for(var d=0,g=u.length,w;d<g;d++)(w||!(d in u))&&(w||(w=Array.prototype.slice.call(u,0,d)),w[d]=u[d]);return l.concat(w||Array.prototype.slice.call(u))}var we="-ms-",ri="-moz-",he="-webkit-",Ld="comm",_o="rule",ra="decl",hh="@import",Rd="@keyframes",mh="@layer",Od=Math.abs,na=String.fromCharCode,Qs=Object.assign;function xh(l,u){return Me(l,0)^45?(((u<<2^Me(l,0))<<2^Me(l,1))<<2^Me(l,2))<<2^Me(l,3):0}function Md(l){return l.trim()}function Qt(l,u){return(l=u.exec(l))?l[0]:l}function Z(l,u,a){return l.replace(u,a)}function yo(l,u,a){return l.indexOf(u,a)}function Me(l,u){return l.charCodeAt(u)|0}function ln(l,u,a){return l.slice(u,a)}function Lt(l){return l.length}function Dd(l){return l.length}function ei(l,u){return u.push(l),l}function gh(l,u){return l.map(u).join("")}function ud(l,u){return l.filter(function(a){return!Qt(a,u)})}var Po=1,sn=1,Fd=0,gt=0,ze=0,pn="";function Io(l,u,a,d,g,w,E,L){return{value:l,root:u,parent:a,type:d,props:g,children:w,line:Po,column:sn,length:E,return:"",siblings:L}}function fr(l,u){return Qs(Io("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},u)}function nn(l){for(;l.root;)l=fr(l.root,{children:[l]});ei(l,l.siblings)}function vh(){return ze}function yh(){return ze=gt>0?Me(pn,--gt):0,sn--,ze===10&&(sn=1,Po--),ze}function bt(){return ze=gt<Fd?Me(pn,gt++):0,sn++,ze===10&&(sn=1,Po++),ze}function Tr(){return Me(pn,gt)}function wo(){return gt}function Lo(l,u){return ln(pn,l,u)}function Ys(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wh(l){return Po=sn=1,Fd=Lt(pn=l),gt=0,[]}function jh(l){return pn="",l}function Rs(l){return Md(Lo(gt-1,Gs(l===91?l+2:l===40?l+1:l)))}function kh(l){for(;(ze=Tr())&&ze<33;)bt();return Ys(l)>2||Ys(ze)>3?"":" "}function Nh(l,u){for(;--u&&bt()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Lo(l,wo()+(u<6&&Tr()==32&&bt()==32))}function Gs(l){for(;bt();)switch(ze){case l:return gt;case 34:case 39:l!==34&&l!==39&&Gs(ze);break;case 40:l===41&&Gs(l);break;case 92:bt();break}return gt}function Sh(l,u){for(;bt()&&l+ze!==57;)if(l+ze===84&&Tr()===47)break;return"/*"+Lo(u,gt-1)+"*"+na(l===47?l:bt())}function Ch(l){for(;!Ys(Tr());)bt();return Lo(l,gt)}function Eh(l){return jh(jo("",null,null,null,[""],l=wh(l),0,[0],l))}function jo(l,u,a,d,g,w,E,L,b){for(var V=0,H=0,D=E,F=0,Q=0,ne=0,$=1,X=1,fe=1,le=0,ie="",J=g,de=w,Y=d,W=ie;X;)switch(ne=le,le=bt()){case 40:if(ne!=108&&Me(W,D-1)==58){yo(W+=Z(Rs(le),"&","&\f"),"&\f",Od(V?L[V-1]:0))!=-1&&(fe=-1);break}case 34:case 39:case 91:W+=Rs(le);break;case 9:case 10:case 13:case 32:W+=kh(ne);break;case 92:W+=Nh(wo()-1,7);continue;case 47:switch(Tr()){case 42:case 47:ei(bh(Sh(bt(),wo()),u,a,b),b);break;default:W+="/"}break;case 123*$:L[V++]=Lt(W)*fe;case 125*$:case 59:case 0:switch(le){case 0:case 125:X=0;case 59+H:fe==-1&&(W=Z(W,/\f/g,"")),Q>0&&Lt(W)-D&&ei(Q>32?pd(W+";",d,a,D-1,b):pd(Z(W," ","")+";",d,a,D-2,b),b);break;case 59:W+=";";default:if(ei(Y=dd(W,u,a,V,H,g,L,ie,J=[],de=[],D,w),w),le===123)if(H===0)jo(W,u,Y,Y,J,w,D,L,de);else switch(F===99&&Me(W,3)===110?100:F){case 100:case 108:case 109:case 115:jo(l,Y,Y,d&&ei(dd(l,Y,Y,0,0,g,L,ie,g,J=[],D,de),de),g,de,D,L,d?J:de);break;default:jo(W,Y,Y,Y,[""],de,0,L,de)}}V=H=Q=0,$=fe=1,ie=W="",D=E;break;case 58:D=1+Lt(W),Q=ne;default:if($<1){if(le==123)--$;else if(le==125&&$++==0&&yh()==125)continue}switch(W+=na(le),le*$){case 38:fe=H>0?1:(W+="\f",-1);break;case 44:L[V++]=(Lt(W)-1)*fe,fe=1;break;case 64:Tr()===45&&(W+=Rs(bt())),F=Tr(),H=D=Lt(ie=W+=Ch(wo())),le++;break;case 45:ne===45&&Lt(W)==2&&($=0)}}return w}function dd(l,u,a,d,g,w,E,L,b,V,H,D){for(var F=g-1,Q=g===0?w:[""],ne=Dd(Q),$=0,X=0,fe=0;$<d;++$)for(var le=0,ie=ln(l,F+1,F=Od(X=E[$])),J=l;le<ne;++le)(J=Md(X>0?Q[le]+" "+ie:Z(ie,/&\f/g,Q[le])))&&(b[fe++]=J);return Io(l,u,a,g===0?_o:L,b,V,H,D)}function bh(l,u,a,d){return Io(l,u,a,Ld,na(vh()),ln(l,2,-2),0,d)}function pd(l,u,a,d,g){return Io(l,u,a,ra,ln(l,0,d),ln(l,d+1,-1),d,g)}function Ad(l,u,a){switch(xh(l,u)){case 5103:return he+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+l+l;case 4789:return ri+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return he+l+ri+l+we+l+l;case 5936:switch(Me(l,u+11)){case 114:return he+l+we+Z(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return he+l+we+Z(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return he+l+we+Z(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return he+l+we+l+l;case 6165:return he+l+we+"flex-"+l+l;case 5187:return he+l+Z(l,/(\w+).+(:[^]+)/,he+"box-$1$2"+we+"flex-$1$2")+l;case 5443:return he+l+we+"flex-item-"+Z(l,/flex-|-self/g,"")+(Qt(l,/flex-|baseline/)?"":we+"grid-row-"+Z(l,/flex-|-self/g,""))+l;case 4675:return he+l+we+"flex-line-pack"+Z(l,/align-content|flex-|-self/g,"")+l;case 5548:return he+l+we+Z(l,"shrink","negative")+l;case 5292:return he+l+we+Z(l,"basis","preferred-size")+l;case 6060:return he+"box-"+Z(l,"-grow","")+he+l+we+Z(l,"grow","positive")+l;case 4554:return he+Z(l,/([^-])(transform)/g,"$1"+he+"$2")+l;case 6187:return Z(Z(Z(l,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),l,"")+l;case 5495:case 3959:return Z(l,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return Z(Z(l,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+l+l;case 4200:if(!Qt(l,/flex-|baseline/))return we+"grid-column-align"+ln(l,u)+l;break;case 2592:case 3360:return we+Z(l,"template-","")+l;case 4384:case 3616:return a&&a.some(function(d,g){return u=g,Qt(d.props,/grid-\w+-end/)})?~yo(l+(a=a[u].value),"span",0)?l:we+Z(l,"-start","")+l+we+"grid-row-span:"+(~yo(a,"span",0)?Qt(a,/\d+/):+Qt(a,/\d+/)-+Qt(l,/\d+/))+";":we+Z(l,"-start","")+l;case 4896:case 4128:return a&&a.some(function(d){return Qt(d.props,/grid-\w+-start/)})?l:we+Z(Z(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return Z(l,/(.+)-inline(.+)/,he+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(l)-1-u>6)switch(Me(l,u+1)){case 109:if(Me(l,u+4)!==45)break;case 102:return Z(l,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+ri+(Me(l,u+3)==108?"$3":"$2-$3"))+l;case 115:return~yo(l,"stretch",0)?Ad(Z(l,"stretch","fill-available"),u,a)+l:l}break;case 5152:case 5920:return Z(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,g,w,E,L,b,V){return we+g+":"+w+V+(E?we+g+"-span:"+(L?b:+b-+w)+V:"")+l});case 4949:if(Me(l,u+6)===121)return Z(l,":",":"+he)+l;break;case 6444:switch(Me(l,Me(l,14)===45?18:11)){case 120:return Z(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+he+(Me(l,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+we+"$2box$3")+l;case 100:return Z(l,":",":"+we)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(l,"scroll-","scroll-snap-")+l}return l}function Co(l,u){for(var a="",d=0;d<l.length;d++)a+=u(l[d],d,l,u)||"";return a}function Th(l,u,a,d){switch(l.type){case mh:if(l.children.length)break;case hh:case ra:return l.return=l.return||l.value;case Ld:return"";case Rd:return l.return=l.value+"{"+Co(l.children,d)+"}";case _o:if(!Lt(l.value=l.props.join(",")))return""}return Lt(a=Co(l.children,d))?l.return=l.value+"{"+a+"}":""}function zh(l){var u=Dd(l);return function(a,d,g,w){for(var E="",L=0;L<u;L++)E+=l[L](a,d,g,w)||"";return E}}function _h(l){return function(u){u.root||(u=u.return)&&l(u)}}function Ph(l,u,a,d){if(l.length>-1&&!l.return)switch(l.type){case ra:l.return=Ad(l.value,l.length,a);return;case Rd:return Co([fr(l,{value:Z(l.value,"@","@"+he)})],d);case _o:if(l.length)return gh(a=l.props,function(g){switch(Qt(g,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":nn(fr(l,{props:[Z(g,/:(read-\w+)/,":"+ri+"$1")]})),nn(fr(l,{props:[g]})),Qs(l,{props:ud(a,d)});break;case"::placeholder":nn(fr(l,{props:[Z(g,/:(plac\w+)/,":"+he+"input-$1")]})),nn(fr(l,{props:[Z(g,/:(plac\w+)/,":"+ri+"$1")]})),nn(fr(l,{props:[Z(g,/:(plac\w+)/,we+"input-$1")]})),nn(fr(l,{props:[g]})),Qs(l,{props:ud(a,d)});break}return""})}}var Ih={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},an=typeof process!="undefined"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",Bd="active",Wd="data-styled-version",Ro="6.1.18",ia=`/*!sc*/
`,Eo=typeof window!="undefined"&&typeof document!="undefined",Lh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),Oo=Object.freeze([]),cn=Object.freeze({});function Rh(l,u,a){return a===void 0&&(a=cn),l.theme!==a.theme&&l.theme||u||a.theme}var Ud=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Oh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mh=/(^-|-$)/g;function fd(l){return l.replace(Oh,"-").replace(Mh,"")}var Dh=/(a)(d)/gi,xo=52,hd=function(l){return String.fromCharCode(l+(l>25?39:97))};function Ks(l){var u,a="";for(u=Math.abs(l);u>xo;u=u/xo|0)a=hd(u%xo)+a;return(hd(u%xo)+a).replace(Dh,"$1-$2")}var Os,Hd=5381,on=function(l,u){for(var a=u.length;a;)l=33*l^u.charCodeAt(--a);return l},$d=function(l){return on(Hd,l)};function Fh(l){return Ks($d(l)>>>0)}function Ah(l){return l.displayName||l.name||"Component"}function Ms(l){return typeof l=="string"&&!0}var Vd=typeof Symbol=="function"&&Symbol.for,Qd=Vd?Symbol.for("react.memo"):60115,Bh=Vd?Symbol.for("react.forward_ref"):60112,Wh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hh=((Os={})[Bh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Os[Qd]=Yd,Os);function md(l){return("type"in(u=l)&&u.type.$$typeof)===Qd?Yd:"$$typeof"in l?Hh[l.$$typeof]:Wh;var u}var $h=Object.defineProperty,Vh=Object.getOwnPropertyNames,xd=Object.getOwnPropertySymbols,Qh=Object.getOwnPropertyDescriptor,Yh=Object.getPrototypeOf,gd=Object.prototype;function Gd(l,u,a){if(typeof u!="string"){if(gd){var d=Yh(u);d&&d!==gd&&Gd(l,d,a)}var g=Vh(u);xd&&(g=g.concat(xd(u)));for(var w=md(l),E=md(u),L=0;L<g.length;++L){var b=g[L];if(!(b in Uh||a&&a[b]||E&&b in E||w&&b in w)){var V=Qh(u,b);try{$h(l,b,V)}catch{}}}}return l}function un(l){return typeof l=="function"}function oa(l){return typeof l=="object"&&"styledComponentId"in l}function br(l,u){return l&&u?"".concat(l," ").concat(u):l||u||""}function vd(l,u){if(l.length===0)return"";for(var a=l[0],d=1;d<l.length;d++)a+=l[d];return a}function ni(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function Xs(l,u,a){if(a===void 0&&(a=!1),!a&&!ni(l)&&!Array.isArray(l))return u;if(Array.isArray(u))for(var d=0;d<u.length;d++)l[d]=Xs(l[d],u[d]);else if(ni(u))for(var d in u)l[d]=Xs(l[d],u[d]);return l}function la(l,u){Object.defineProperty(l,"toString",{value:u})}function ii(l){for(var u=[],a=1;a<arguments.length;a++)u[a-1]=arguments[a];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var Gh=(function(){function l(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u}return l.prototype.indexOfGroup=function(u){for(var a=0,d=0;d<u;d++)a+=this.groupSizes[d];return a},l.prototype.insertRules=function(u,a){if(u>=this.groupSizes.length){for(var d=this.groupSizes,g=d.length,w=g;u>=w;)if((w<<=1)<0)throw ii(16,"".concat(u));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var E=g;E<w;E++)this.groupSizes[E]=0}for(var L=this.indexOfGroup(u+1),b=(E=0,a.length);E<b;E++)this.tag.insertRule(L,a[E])&&(this.groupSizes[u]++,L++)},l.prototype.clearGroup=function(u){if(u<this.length){var a=this.groupSizes[u],d=this.indexOfGroup(u),g=d+a;this.groupSizes[u]=0;for(var w=d;w<g;w++)this.tag.deleteRule(d)}},l.prototype.getGroup=function(u){var a="";if(u>=this.length||this.groupSizes[u]===0)return a;for(var d=this.groupSizes[u],g=this.indexOfGroup(u),w=g+d,E=g;E<w;E++)a+="".concat(this.tag.getRule(E)).concat(ia);return a},l})(),ko=new Map,bo=new Map,No=1,go=function(l){if(ko.has(l))return ko.get(l);for(;bo.has(No);)No++;var u=No++;return ko.set(l,u),bo.set(u,l),u},Kh=function(l,u){No=u+1,ko.set(l,u),bo.set(u,l)},Xh="style[".concat(an,"][").concat(Wd,'="').concat(Ro,'"]'),qh=new RegExp("^".concat(an,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zh=function(l,u,a){for(var d,g=a.split(","),w=0,E=g.length;w<E;w++)(d=g[w])&&l.registerName(u,d)},Jh=function(l,u){for(var a,d=((a=u.textContent)!==null&&a!==void 0?a:"").split(ia),g=[],w=0,E=d.length;w<E;w++){var L=d[w].trim();if(L){var b=L.match(qh);if(b){var V=0|parseInt(b[1],10),H=b[2];V!==0&&(Kh(H,V),Zh(l,H,b[3]),l.getTag().insertRules(V,g)),g.length=0}else g.push(L)}}},yd=function(l){for(var u=document.querySelectorAll(Xh),a=0,d=u.length;a<d;a++){var g=u[a];g&&g.getAttribute(an)!==Bd&&(Jh(l,g),g.parentNode&&g.parentNode.removeChild(g))}};function em(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Kd=function(l){var u=document.head,a=l||u,d=document.createElement("style"),g=(function(L){var b=Array.from(L.querySelectorAll("style[".concat(an,"]")));return b[b.length-1]})(a),w=g!==void 0?g.nextSibling:null;d.setAttribute(an,Bd),d.setAttribute(Wd,Ro);var E=em();return E&&d.setAttribute("nonce",E),a.insertBefore(d,w),d},tm=(function(){function l(u){this.element=Kd(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(a){if(a.sheet)return a.sheet;for(var d=document.styleSheets,g=0,w=d.length;g<w;g++){var E=d[g];if(E.ownerNode===a)return E}throw ii(17)})(this.element),this.length=0}return l.prototype.insertRule=function(u,a){try{return this.sheet.insertRule(a,u),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},l.prototype.getRule=function(u){var a=this.sheet.cssRules[u];return a&&a.cssText?a.cssText:""},l})(),rm=(function(){function l(u){this.element=Kd(u),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(u,a){if(u<=this.length&&u>=0){var d=document.createTextNode(a);return this.element.insertBefore(d,this.nodes[u]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},l.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},l})(),nm=(function(){function l(u){this.rules=[],this.length=0}return l.prototype.insertRule=function(u,a){return u<=this.length&&(this.rules.splice(u,0,a),this.length++,!0)},l.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},l.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},l})(),wd=Eo,im={isServer:!Eo,useCSSOMInjection:!Lh},Xd=(function(){function l(u,a,d){u===void 0&&(u=cn),a===void 0&&(a={});var g=this;this.options=et(et({},im),u),this.gs=a,this.names=new Map(d),this.server=!!u.isServer,!this.server&&Eo&&wd&&(wd=!1,yd(this)),la(this,function(){return(function(w){for(var E=w.getTag(),L=E.length,b="",V=function(D){var F=(function(fe){return bo.get(fe)})(D);if(F===void 0)return"continue";var Q=w.names.get(F),ne=E.getGroup(D);if(Q===void 0||!Q.size||ne.length===0)return"continue";var $="".concat(an,".g").concat(D,'[id="').concat(F,'"]'),X="";Q!==void 0&&Q.forEach(function(fe){fe.length>0&&(X+="".concat(fe,","))}),b+="".concat(ne).concat($,'{content:"').concat(X,'"}').concat(ia)},H=0;H<L;H++)V(H);return b})(g)})}return l.registerId=function(u){return go(u)},l.prototype.rehydrate=function(){!this.server&&Eo&&yd(this)},l.prototype.reconstructWithOptions=function(u,a){return a===void 0&&(a=!0),new l(et(et({},this.options),u),this.gs,a&&this.names||void 0)},l.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(a){var d=a.useCSSOMInjection,g=a.target;return a.isServer?new nm(g):d?new tm(g):new rm(g)})(this.options),new Gh(u)));var u},l.prototype.hasNameForId=function(u,a){return this.names.has(u)&&this.names.get(u).has(a)},l.prototype.registerName=function(u,a){if(go(u),this.names.has(u))this.names.get(u).add(a);else{var d=new Set;d.add(a),this.names.set(u,d)}},l.prototype.insertRules=function(u,a,d){this.registerName(u,a),this.getTag().insertRules(go(u),d)},l.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},l.prototype.clearRules=function(u){this.getTag().clearGroup(go(u)),this.clearNames(u)},l.prototype.clearTag=function(){this.tag=void 0},l})(),om=/&/g,lm=/^\s*\/\/.*$/gm;function qd(l,u){return l.map(function(a){return a.type==="rule"&&(a.value="".concat(u," ").concat(a.value),a.value=a.value.replaceAll(",",",".concat(u," ")),a.props=a.props.map(function(d){return"".concat(u," ").concat(d)})),Array.isArray(a.children)&&a.type!=="@keyframes"&&(a.children=qd(a.children,u)),a})}function sm(l){var u,a,d,g=cn,w=g.options,E=w===void 0?cn:w,L=g.plugins,b=L===void 0?Oo:L,V=function(F,Q,ne){return ne.startsWith(a)&&ne.endsWith(a)&&ne.replaceAll(a,"").length>0?".".concat(u):F},H=b.slice();H.push(function(F){F.type===_o&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(om,a).replace(d,V))}),E.prefix&&H.push(Ph),H.push(Th);var D=function(F,Q,ne,$){Q===void 0&&(Q=""),ne===void 0&&(ne=""),$===void 0&&($="&"),u=$,a=Q,d=new RegExp("\\".concat(a,"\\b"),"g");var X=F.replace(lm,""),fe=Eh(ne||Q?"".concat(ne," ").concat(Q," { ").concat(X," }"):X);E.namespace&&(fe=qd(fe,E.namespace));var le=[];return Co(fe,zh(H.concat(_h(function(ie){return le.push(ie)})))),le};return D.hash=b.length?b.reduce(function(F,Q){return Q.name||ii(15),on(F,Q.name)},Hd).toString():"",D}var am=new Xd,qs=sm(),Zd=xt.createContext({shouldForwardProp:void 0,styleSheet:am,stylis:qs});Zd.Consumer;xt.createContext(void 0);function jd(){return Ce.useContext(Zd)}var cm=(function(){function l(u,a){var d=this;this.inject=function(g,w){w===void 0&&(w=qs);var E=d.name+w.hash;g.hasNameForId(d.id,E)||g.insertRules(d.id,E,w(d.rules,E,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=a,la(this,function(){throw ii(12,String(d.name))})}return l.prototype.getName=function(u){return u===void 0&&(u=qs),this.name+u.hash},l})(),um=function(l){return l>="A"&&l<="Z"};function kd(l){for(var u="",a=0;a<l.length;a++){var d=l[a];if(a===1&&d==="-"&&l[0]==="-")return l;um(d)?u+="-"+d.toLowerCase():u+=d}return u.startsWith("ms-")?"-"+u:u}var Jd=function(l){return l==null||l===!1||l===""},ep=function(l){var u,a,d=[];for(var g in l){var w=l[g];l.hasOwnProperty(g)&&!Jd(w)&&(Array.isArray(w)&&w.isCss||un(w)?d.push("".concat(kd(g),":"),w,";"):ni(w)?d.push.apply(d,So(So(["".concat(g," {")],ep(w),!1),["}"],!1)):d.push("".concat(kd(g),": ").concat((u=g,(a=w)==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||u in Ih||u.startsWith("--")?String(a).trim():"".concat(a,"px")),";")))}return d};function zr(l,u,a,d){if(Jd(l))return[];if(oa(l))return[".".concat(l.styledComponentId)];if(un(l)){if(!un(w=l)||w.prototype&&w.prototype.isReactComponent||!u)return[l];var g=l(u);return zr(g,u,a,d)}var w;return l instanceof cm?a?(l.inject(a,d),[l.getName(d)]):[l]:ni(l)?ep(l):Array.isArray(l)?Array.prototype.concat.apply(Oo,l.map(function(E){return zr(E,u,a,d)})):[l.toString()]}function dm(l){for(var u=0;u<l.length;u+=1){var a=l[u];if(un(a)&&!oa(a))return!1}return!0}var pm=$d(Ro),fm=(function(){function l(u,a,d){this.rules=u,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&dm(u),this.componentId=a,this.baseHash=on(pm,a),this.baseStyle=d,Xd.registerId(a)}return l.prototype.generateAndInjectStyles=function(u,a,d){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,a,d):"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&a.hasNameForId(this.componentId,this.staticRulesId))g=br(g,this.staticRulesId);else{var w=vd(zr(this.rules,u,a,d)),E=Ks(on(this.baseHash,w)>>>0);if(!a.hasNameForId(this.componentId,E)){var L=d(w,".".concat(E),void 0,this.componentId);a.insertRules(this.componentId,E,L)}g=br(g,E),this.staticRulesId=E}else{for(var b=on(this.baseHash,d.hash),V="",H=0;H<this.rules.length;H++){var D=this.rules[H];if(typeof D=="string")V+=D;else if(D){var F=vd(zr(D,u,a,d));b=on(b,F+H),V+=F}}if(V){var Q=Ks(b>>>0);a.hasNameForId(this.componentId,Q)||a.insertRules(this.componentId,Q,d(V,".".concat(Q),void 0,this.componentId)),g=br(g,Q)}}return g},l})(),tp=xt.createContext(void 0);tp.Consumer;var Ds={};function hm(l,u,a){var d=oa(l),g=l,w=!Ms(l),E=u.attrs,L=E===void 0?Oo:E,b=u.componentId,V=b===void 0?(function(J,de){var Y=typeof J!="string"?"sc":fd(J);Ds[Y]=(Ds[Y]||0)+1;var W="".concat(Y,"-").concat(Fh(Ro+Y+Ds[Y]));return de?"".concat(de,"-").concat(W):W})(u.displayName,u.parentComponentId):b,H=u.displayName,D=H===void 0?(function(J){return Ms(J)?"styled.".concat(J):"Styled(".concat(Ah(J),")")})(l):H,F=u.displayName&&u.componentId?"".concat(fd(u.displayName),"-").concat(u.componentId):u.componentId||V,Q=d&&g.attrs?g.attrs.concat(L).filter(Boolean):L,ne=u.shouldForwardProp;if(d&&g.shouldForwardProp){var $=g.shouldForwardProp;if(u.shouldForwardProp){var X=u.shouldForwardProp;ne=function(J,de){return $(J,de)&&X(J,de)}}else ne=$}var fe=new fm(a,F,d?g.componentStyle:void 0);function le(J,de){return(function(Y,W,_e){var tt=Y.attrs,vt=Y.componentStyle,Ot=Y.defaultProps,at=Y.foldedComponentIds,Ve=Y.styledComponentId,rt=Y.target,ct=xt.useContext(tp),Be=jd(),xe=Y.shouldForwardProp||Be.shouldForwardProp,T=Rh(W,ct,Ot)||cn,M=(function(re,ee,pe){for(var oe,ae=et(et({},ee),{className:void 0,theme:pe}),De=0;De<re.length;De+=1){var Mt=un(oe=re[De])?oe(ae):oe;for(var yt in Mt)ae[yt]=yt==="className"?br(ae[yt],Mt[yt]):yt==="style"?et(et({},ae[yt]),Mt[yt]):Mt[yt]}return ee.className&&(ae.className=br(ae.className,ee.className)),ae})(tt,W,T),z=M.as||rt,m={};for(var j in M)M[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&M.theme===T||(j==="forwardedAs"?m.as=M.forwardedAs:xe&&!xe(j,z)||(m[j]=M[j]));var G=(function(re,ee){var pe=jd(),oe=re.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return oe})(vt,M),q=br(at,Ve);return G&&(q+=" "+G),M.className&&(q+=" "+M.className),m[Ms(z)&&!Ud.has(z)?"class":"className"]=q,_e&&(m.ref=_e),Ce.createElement(z,m)})(ie,J,de)}le.displayName=D;var ie=xt.forwardRef(le);return ie.attrs=Q,ie.componentStyle=fe,ie.displayName=D,ie.shouldForwardProp=ne,ie.foldedComponentIds=d?br(g.foldedComponentIds,g.styledComponentId):"",ie.styledComponentId=F,ie.target=d?g.target:l,Object.defineProperty(ie,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(J){this._foldedDefaultProps=d?(function(de){for(var Y=[],W=1;W<arguments.length;W++)Y[W-1]=arguments[W];for(var _e=0,tt=Y;_e<tt.length;_e++)Xs(de,tt[_e],!0);return de})({},g.defaultProps,J):J}}),la(ie,function(){return".".concat(ie.styledComponentId)}),w&&Gd(ie,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ie}function Nd(l,u){for(var a=[l[0]],d=0,g=u.length;d<g;d+=1)a.push(u[d],l[d+1]);return a}var Sd=function(l){return Object.assign(l,{isCss:!0})};function mm(l){for(var u=[],a=1;a<arguments.length;a++)u[a-1]=arguments[a];if(un(l)||ni(l))return Sd(zr(Nd(Oo,So([l],u,!0))));var d=l;return u.length===0&&d.length===1&&typeof d[0]=="string"?zr(d):Sd(zr(Nd(d,u)))}function Zs(l,u,a){if(a===void 0&&(a=cn),!u)throw ii(1,u);var d=function(g){for(var w=[],E=1;E<arguments.length;E++)w[E-1]=arguments[E];return l(u,a,mm.apply(void 0,So([g],w,!1)))};return d.attrs=function(g){return Zs(l,u,et(et({},a),{attrs:Array.prototype.concat(a.attrs,g).filter(Boolean)}))},d.withConfig=function(g){return Zs(l,u,et(et({},a),g))},d}var rp=function(l){return Zs(hm,l)},ue=rp;Ud.forEach(function(l){ue[l]=rp(l)});const Fs={Wrapper:ue.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ue.header`
        height: 64px;
        flex-shrink: 0;
    `,Main:ue.main`
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
    `};var np={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Cd=xt.createContext&&xt.createContext(np),xm=["attr","size","title"];function gm(l,u){if(l==null)return{};var a=vm(l,u),d,g;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(l);for(g=0;g<w.length;g++)d=w[g],!(u.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(l,d)&&(a[d]=l[d])}return a}function vm(l,u){if(l==null)return{};var a={};for(var d in l)if(Object.prototype.hasOwnProperty.call(l,d)){if(u.indexOf(d)>=0)continue;a[d]=l[d]}return a}function To(){return To=Object.assign?Object.assign.bind():function(l){for(var u=1;u<arguments.length;u++){var a=arguments[u];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(l[d]=a[d])}return l},To.apply(this,arguments)}function Ed(l,u){var a=Object.keys(l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);u&&(d=d.filter(function(g){return Object.getOwnPropertyDescriptor(l,g).enumerable})),a.push.apply(a,d)}return a}function zo(l){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?Ed(Object(a),!0).forEach(function(d){ym(l,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(a)):Ed(Object(a)).forEach(function(d){Object.defineProperty(l,d,Object.getOwnPropertyDescriptor(a,d))})}return l}function ym(l,u,a){return u=wm(u),u in l?Object.defineProperty(l,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):l[u]=a,l}function wm(l){var u=jm(l,"string");return typeof u=="symbol"?u:u+""}function jm(l,u){if(typeof l!="object"||!l)return l;var a=l[Symbol.toPrimitive];if(a!==void 0){var d=a.call(l,u);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(l)}function ip(l){return l&&l.map((u,a)=>xt.createElement(u.tag,zo({key:a},u.attr),ip(u.child)))}function K(l){return u=>xt.createElement(km,To({attr:zo({},l.attr)},u),ip(l.child))}function km(l){var u=a=>{var{attr:d,size:g,title:w}=l,E=gm(l,xm),L=g||a.size||"1em",b;return a.className&&(b=a.className),l.className&&(b=(b?b+" ":"")+l.className),xt.createElement("svg",To({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,d,E,{className:b,style:zo(zo({color:l.color||a.color},a.style),l.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),w&&xt.createElement("title",null,w),l.children)};return Cd!==void 0?xt.createElement(Cd.Consumer,null,a=>u(a)):u(np)}function Nm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(l)}function _r(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(l)}function Sm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(l)}function bd(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(l)}function Rt(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(l)}function fn(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(l)}function Cm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(l)}function Pr(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(l)}function Em(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(l)}function Td(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(l)}function Js(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(l)}function op(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(l)}function bm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(l)}function Tm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(l)}function zm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(l)}function zd(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(l)}function _m(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(l)}function Pm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(l)}function Im(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(l)}function Lm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(l)}function dn(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(l)}function Rm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(l)}function Om(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(l)}function Mm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(l)}function Dm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(l)}function vo(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"},child:[]},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"},child:[]}]})(l)}function ti(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(l)}function _d(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(l)}function ea(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(l)}function Yt(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(l)}function Fm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(l)}function lp(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(l)}function As(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(l)}function Am(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(l)}function Bm(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(l)}function sa(l){return K({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(l)}const Pd={Wrapper:ue.header`
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
    `,Main:ue.div`
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
    `},Id="software-testing-core-notes-theme",Wm=()=>{const[l,u]=Ce.useState(()=>localStorage.getItem(Id)||"dark");Ce.useEffect(()=>{document.documentElement.toggleAttribute("data-theme",l==="light"),localStorage.setItem(Id,l)},[l]);const a=Ce.useMemo(()=>l==="light"?"dark":"light",[l]);return o.jsx(Pd.Wrapper,{children:o.jsxs(Pd.Main,{children:[o.jsx("div",{className:"leftSide",children:o.jsxs("div",{className:"logoNameWrapper",children:[o.jsx("div",{className:"logoWrapper",children:o.jsx("img",{src:"/software-testing-core-notes/logo.png",alt:"Software testing core notes"})}),o.jsxs("div",{className:"nameWrapper",children:[o.jsx("div",{className:"title",children:"software-testing-core-notes"}),o.jsx("div",{className:"subTitle",children:"Unit testing, integration, API testing, TDD, mocking, and coverage"})]}),o.jsxs("div",{className:"pillRow",children:[o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"sIcon",children:o.jsx(Rt,{})}),o.jsx("span",{children:"Tests"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"sIcon",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Quality"})]})]})]})}),o.jsx("div",{className:"rightSide",children:o.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>u(d=>d==="light"?"dark":"light"),"aria-label":"Switch to "+a+" theme",title:"Switch to "+a,children:[o.jsx("span",{className:"icon",children:l==="light"?o.jsx(Dm,{}):o.jsx(Fm,{})}),o.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})})]})})};function Um(l){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(l)}function Hm(l){return K({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(l)}function $m(l){return K({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(l)}function Vm(l){return K({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(l)}function Qm(l){return K({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"},child:[]}]})(l)}function Ym(l){return K({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(l)}const Gm={Wrapper:ue.footer`
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
    `},Km=[["Portfolio","https://www.ashishranjan.net/",_m],["GitHub","https://github.com/a2rp",$m],["CodePen","https://codepen.io/ash1198",Um],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Vm],["Facebook","https://www.facebook.com/theash.ashish/",Hm],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",Ym],["Support","https://a2rp-donation-page.netlify.app/",Pm],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Em],["Patreon","https://patreon.com/a2rp",Qm],["Email","mailto:ash.ranjan09@gmail.com",Mm]],Xm=()=>o.jsxs(Gm.Wrapper,{children:[o.jsxs("div",{className:"footerCopy",children:["Copyright © ",new Date().getFullYear()," ",o.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),o.jsx("div",{className:"footerLinks","aria-label":"Social and support links",children:Km.map(([l,u,a])=>o.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer","aria-label":l,title:l,children:Ce.createElement(a,{"aria-hidden":!0})},l))})]}),Vt={Wrapper:ue.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 16px;
    `,Container:ue.div`
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    `,Header:ue.h1`
        font-size: 34px;
        font-weight: 900;
        color: var(--color-text-primary);
    `,SubHeader:ue.p`
        font-size: 16px;
        color: var(--color-text-secondary);
        max-width: 720px;
        line-height: 1.6;
    `,Grid:ue.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 18px;
    `,Card:ue.div`
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
    `},qm=()=>o.jsx(Vt.Wrapper,{children:o.jsxs(Vt.Container,{children:[o.jsx(Vt.Header,{children:"Software Testing Core Notes"}),o.jsx(Vt.SubHeader,{children:"Understanding how software is verified, validated, and made reliable in real production systems."}),o.jsxs(Vt.Grid,{children:[o.jsxs(Vt.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Rt,{})}),o.jsx("div",{className:"title",children:"Unit Testing"}),o.jsx("p",{children:"Unit testing verifies small pieces of code such as functions, utilities, and classes. These tests run fast and help detect bugs early during development."})]}),o.jsxs(Vt.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(dn,{})}),o.jsx("div",{className:"title",children:"Integration Testing"}),o.jsx("p",{children:"Integration tests verify how multiple components interact with each other such as APIs, databases, and services working together."})]}),o.jsxs(Vt.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Yt,{})}),o.jsx("div",{className:"title",children:"Quality Assurance"}),o.jsx("p",{children:"Testing improves reliability and confidence in software systems. It ensures that changes do not break existing functionality."})]}),o.jsxs(Vt.Card,{children:[o.jsx("div",{className:"icon",children:o.jsx(Nm,{})}),o.jsx("div",{className:"title",children:"Coverage and Monitoring"}),o.jsx("p",{children:"Code coverage tools help identify which parts of the system are tested and which parts still need validation."})]})]})]})}),Zm={Button:ue.button`
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
    `},Jm=({scrollerRef:l})=>{const[u,a]=Ce.useState(!1);Ce.useEffect(()=>{const g=l==null?void 0:l.current;if(!g)return;const w=()=>{const E=g.scrollTop||0;a(E>350)};return w(),g.addEventListener("scroll",w),()=>g.removeEventListener("scroll",w)},[l]);const d=()=>{const g=l==null?void 0:l.current;g&&g.scrollTo({top:0,behavior:"smooth"})};return o.jsx(Zm.Button,{type:"button",onClick:d,className:u?"show":"hide","aria-label":"Go to top",title:"Go to top",children:o.jsx(Sm,{})})},Bs={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;

        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},ex=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"Unit Testing",subTitle:"Test a single unit of code (function or class method) in isolation using fast, repeatable checks.",chips:[{icon:o.jsx(bd,{}),label:"Small scope"},{icon:o.jsx(sa,{}),label:"Fast feedback"},{icon:o.jsx(Js,{}),label:"Runs locally"}]}),[]);return o.jsxs(Bs.Wrapper,{id:"unit-testing",children:[o.jsxs(Bs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(Rt,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"unit-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs(Bs.Panel,{id:"unit-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Im,{})}),o.jsx("span",{children:"What is a unit"})]}),o.jsx("div",{className:"text",children:'In unit testing, a "unit" usually means:'}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- a single function"}),o.jsx("li",{children:"- a method of a class"}),o.jsx("li",{children:"- a tiny module that does one job"})]}),o.jsx("div",{className:"text",children:"Unit tests try to keep the unit isolated so the test fails only when that unit is wrong."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"What unit tests should not do"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- do not hit real databases"}),o.jsx("li",{children:"- do not call real network APIs"}),o.jsx("li",{children:"- do not depend on system time"}),o.jsx("li",{children:"- do not depend on random values"})]}),o.jsx("div",{className:"note",children:"If you must use these dependencies, mock them or test them in integration tests."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example 1 - pure function"})]}),o.jsx("div",{className:"text",children:"Pure functions are easiest to unit test because they only depend on inputs and return outputs."}),o.jsx("pre",{className:"code",children:`// file: price.js
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
});`}),o.jsx("div",{className:"text",children:"What we are checking:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- correct math for multiple items"}),o.jsx("li",{children:"- deterministic output for given input"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Js,{})}),o.jsx("span",{children:"Example 2 - function with dependency"})]}),o.jsx("div",{className:"text",children:'If your function depends on something external like "fetch" or a database client, mock the dependency.'}),o.jsx("pre",{className:"code",children:`// file: userService.js
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
});`}),o.jsx("div",{className:"note",children:"Key idea: inject dependency, then replace it with a mock in unit tests."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rt,{})}),o.jsx("span",{children:"AAA pattern"})]}),o.jsx("div",{className:"text",children:"Most unit tests follow AAA:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- Arrange - set up inputs and mocks"}),o.jsx("li",{children:"- Act - call the function"}),o.jsx("li",{children:"- Assert - check the output"})]}),o.jsx("div",{className:"text",children:"This makes tests readable and consistent."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(bd,{})}),o.jsx("span",{children:"What makes a good unit test"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- tests one idea, not ten"}),o.jsx("li",{children:"- name describes behavior"}),o.jsx("li",{children:"- stable, no flaky timing"}),o.jsx("li",{children:"- fast, runs in milliseconds"}),o.jsx("li",{children:"- clear failure message"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Common mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- testing implementation details instead of behavior"}),o.jsx("li",{children:"- too much mocking until test becomes meaningless"}),o.jsx("li",{children:"- coupling tests to exact UI markup (use integration for that)"}),o.jsx("li",{children:"- writing one giant test for everything"})]}),o.jsx("div",{className:"note",children:"Rule of thumb: test behavior and outcomes, not internal lines of code."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(Rt,{})}),o.jsx("span",{children:"Unit tests are your first safety net. They keep refactoring safe and development fast."})]})]})]})},Ws={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;

        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},tx=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"Integration Testing",subTitle:"Test how multiple units work together - services, modules, database layers, and APIs - to catch interface bugs.",chips:[{icon:o.jsx(zd,{}),label:"Works together"},{icon:o.jsx(ea,{}),label:"Real-ish deps"},{icon:o.jsx(Yt,{}),label:"Confidence"}]}),[]);return o.jsxs(Ws.Wrapper,{id:"integration-testing",children:[o.jsxs(Ws.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(dn,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"integration-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs(Ws.Panel,{id:"integration-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rm,{})}),o.jsx("span",{children:"What is integration testing"})]}),o.jsx("div",{className:"text",children:"Integration testing verifies that multiple parts of a system work correctly together. The goal is to catch bugs that happen at boundaries:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- API layer to service layer"}),o.jsx("li",{children:"- service layer to database layer"}),o.jsx("li",{children:"- one module to another module"}),o.jsx("li",{children:"- service to external dependency adapters"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rt,{})}),o.jsx("span",{children:"When to prefer integration tests"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- when bugs often happen in wiring and config"}),o.jsx("li",{children:"- when API contracts can break"}),o.jsx("li",{children:"- when data mapping and validation matter"}),o.jsx("li",{children:"- when multiple layers combine to produce behavior"})]}),o.jsx("div",{className:"note",children:"Unit tests check correctness of small logic. Integration tests check correctness of collaboration."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(zd,{})}),o.jsx("span",{children:"Unit vs integration - quick compare"})]}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Scope"}),o.jsx("div",{className:"v",children:"Unit - one function or class method - Integration - multiple modules working together"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Dependencies"}),o.jsx("div",{className:"v",children:"Unit - mocked - Integration - real-ish (in memory db, test containers, stub servers)"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Speed"}),o.jsx("div",{className:"v",children:"Unit - fastest - Integration - slower but higher confidence"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Bugs caught"}),o.jsx("div",{className:"v",children:"Unit - logic bugs - Integration - wiring, schema, serialization, config bugs"})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example 1 - API route + service"})]}),o.jsx("div",{className:"text",children:"Suppose you have an API route that calls a service. An integration test can spin up the app and call the route to verify the whole flow."}),o.jsx("pre",{className:"code",children:`// file: app.js (pseudo)
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
});`}),o.jsx("div",{className:"note",children:"This test checks routing, parameter parsing, status codes, JSON shape, and service integration."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(op,{})}),o.jsx("span",{children:"Example 2 - service + database (in memory)"})]}),o.jsx("div",{className:"text",children:"For integration tests, you can use an in memory database or a test database. The key idea is: verify real queries and schema behavior."}),o.jsx("pre",{className:"code",children:`// file: repo.js (pseudo)
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
});`}),o.jsx("div",{className:"note",children:"If you replace makeInMemoryDb with a real dockerized database in CI, this becomes an even stronger integration test."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"Common pain points"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- tests become slow if too many layers are included"}),o.jsx("li",{children:"- flaky failures due to timing or network"}),o.jsx("li",{children:"- shared test database state causing collisions"}),o.jsx("li",{children:"- hard to debug if logs are not captured"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Best practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- use a fresh database per test or per test suite"}),o.jsx("li",{children:"- clean up state (transactions or reset)"}),o.jsx("li",{children:"- keep test data small and readable"}),o.jsx("li",{children:"- assert on behavior and contract"}),o.jsx("li",{children:"- run integration tests in CI pipeline"})]}),o.jsx("div",{className:"note",children:"Keep integration tests fewer than unit tests. They are heavier but more valuable per test."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ea,{})}),o.jsx("span",{children:"Test pyramid in practice"})]}),o.jsx("div",{className:"text",children:"A common guideline is the test pyramid:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- many unit tests"}),o.jsx("li",{children:"- some integration tests"}),o.jsx("li",{children:"- few end to end tests"})]}),o.jsx("div",{className:"note",children:"Integration tests sit in the middle. They are slower than unit tests but much faster than full browser based end to end tests."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(dn,{})}),o.jsx("span",{children:"Integration tests protect the seams of your system - routing, serialization, schema, configuration, and module boundaries."})]})]})]})},Us={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},rx=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"API Testing",subTitle:"Verify HTTP APIs by testing request and response behavior - status codes, headers, body shape, auth, and error handling.",chips:[{icon:o.jsx(ea,{}),label:"HTTP contracts"},{icon:o.jsx(Yt,{}),label:"Auth + security"},{icon:o.jsx(Cm,{}),label:"Reliable responses"}]}),[]);return o.jsxs(Us.Wrapper,{id:"api-testing",children:[o.jsxs(Us.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(_d,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"api-testing-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs(Us.Panel,{id:"api-testing-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Om,{})}),o.jsx("span",{children:"What is API testing"})]}),o.jsx("div",{className:"text",children:"API testing checks whether an API behaves correctly from the client point of view. You send a request and verify:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- status code (200, 201, 400, 401, 404, 500)"}),o.jsx("li",{children:"- response body shape (JSON fields and types)"}),o.jsx("li",{children:"- headers (content-type, cache-control)"}),o.jsx("li",{children:"- auth behavior (token, cookie, permissions)"}),o.jsx("li",{children:"- error messages and validation"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rt,{})}),o.jsx("span",{children:"What good API tests cover"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- happy path - correct request returns correct data"}),o.jsx("li",{children:"- bad input - validation errors are correct"}),o.jsx("li",{children:"- auth - protected routes block unauthorized users"}),o.jsx("li",{children:"- permissions - role based access is enforced"}),o.jsx("li",{children:"- edge cases - empty lists, large payloads, missing records"})]}),o.jsx("div",{className:"note",children:"Always test both success and failure behavior. Production bugs usually happen in failure paths."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Tm,{})}),o.jsx("span",{children:"Contract mindset"})]}),o.jsx("div",{className:"text",children:"Think of an API as a contract between frontend and backend. If the backend changes response shape, the frontend can break. API tests protect this contract."}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Request"}),o.jsx("div",{className:"v",children:"method, url, headers, query params, body"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Response"}),o.jsx("div",{className:"v",children:"status, headers, JSON schema, error format"})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example 1 - test a GET endpoint"})]}),o.jsx("div",{className:"text",children:"A basic API test verifies that the endpoint returns correct status code and response JSON."}),o.jsx("pre",{className:"code",children:`// pseudo example using a request helper (supertest-like)
//
// GET /health should return 200 and a predictable payload.

test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);

    // contract check
    expect(res.body).toEqual({
        ok: true
    });
});`}),o.jsx("div",{className:"note",children:"This is a contract test. If the health route changes, the test fails and warns you early."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Lm,{})}),o.jsx("span",{children:"Example 2 - test auth and protected routes"})]}),o.jsx("div",{className:"text",children:"API tests should verify correct behavior for:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- missing auth token or cookie"}),o.jsx("li",{children:"- invalid token"}),o.jsx("li",{children:"- valid token but not enough permission"})]}),o.jsx("pre",{className:"code",children:`// pseudo example
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
});`})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"Common API testing mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- only testing happy path"}),o.jsx("li",{children:"- asserting exact error text too strictly"}),o.jsx("li",{children:"- sharing test data between tests (flaky)"}),o.jsx("li",{children:"- not resetting database state"}),o.jsx("li",{children:"- ignoring headers and content type"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Best practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- keep response shape stable and documented"}),o.jsx("li",{children:"- use test database or isolated state per suite"}),o.jsx("li",{children:"- use factories for creating test data"}),o.jsx("li",{children:"- assert key fields, not every field"}),o.jsx("li",{children:"- cover status codes and error formats"})]}),o.jsx("div",{className:"note",children:"Test what clients depend on - status codes, field names, types, and error formats."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(_d,{})}),o.jsx("span",{children:"API tests protect contracts between services and clients - they prevent silent breaking changes."})]})]})]})},Hs={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},nx=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"TDD",subTitle:"Test Driven Development - write tests first, then write the simplest code to pass, then refactor safely.",chips:[{icon:o.jsx(ti,{}),label:"Red - Green - Refactor"},{icon:o.jsx(sa,{}),label:"Fast feedback"},{icon:o.jsx(As,{}),label:"Refactor safe"}]}),[]);return o.jsxs(Hs.Wrapper,{id:"tdd",children:[o.jsxs(Hs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(ti,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"tdd-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs(Hs.Panel,{id:"tdd-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(lp,{})}),o.jsx("span",{children:"What is TDD"})]}),o.jsx("div",{className:"text",children:"TDD is a development workflow where you:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- write a test for a tiny requirement"}),o.jsx("li",{children:"- run it and watch it fail"}),o.jsx("li",{children:"- write minimal code to make it pass"}),o.jsx("li",{children:"- refactor the code while tests stay green"})]}),o.jsx("div",{className:"note",children:"The test becomes an executable specification of the behavior."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ti,{})}),o.jsx("span",{children:"Red - Green - Refactor"})]}),o.jsxs("div",{className:"flow",children:[o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge red",children:[o.jsx(Bm,{}),o.jsx("span",{children:"Red"})]}),o.jsx("div",{className:"desc",children:"Write a test that fails. This proves the test can catch the missing behavior."})]}),o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge green",children:[o.jsx(Rt,{}),o.jsx("span",{children:"Green"})]}),o.jsx("div",{className:"desc",children:"Write the simplest code that passes the test. No extra features."})]}),o.jsxs("div",{className:"step",children:[o.jsxs("div",{className:"badge refactor",children:[o.jsx(As,{}),o.jsx("span",{children:"Refactor"})]}),o.jsx("div",{className:"desc",children:"Improve structure, remove duplication, rename things, keep tests passing."})]})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example - build a tiny function using TDD"})]}),o.jsxs("div",{className:"text",children:["Requirement: create a function"," ",o.jsx("span",{className:"inlineCode",children:"isEven(n)"})," that returns true for even numbers."]}),o.jsx("pre",{className:"code",children:`// Step 1 - Red (write a failing test)
test("isEven returns true for 2", () => {
    expect(isEven(2)).toBe(true);
});

// Step 2 - Green (minimal implementation)
export const isEven = (n) => {
    return n % 2 === 0;
};

// Step 3 - Refactor (if needed)
// for this case, it's already simple, so no refactor needed`}),o.jsx("div",{className:"note",children:"TDD encourages building features in small slices. Each slice becomes safe to change later."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(bm,{})}),o.jsx("span",{children:"TDD micro loop and scope"})]}),o.jsx("div",{className:"text",children:"TDD works best when you keep iterations tiny:"}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- one test per behavior"}),o.jsx("li",{children:"- minimal code per test"}),o.jsx("li",{children:"- refactor after each green state"})]}),o.jsx("div",{className:"text",children:"If you write 20 tests first, you are not doing TDD. You are just writing tests."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(dn,{})}),o.jsx("span",{children:"TDD vs writing tests later"})]}),o.jsx("div",{className:"text",children:"Writing tests later is still useful, but TDD changes how you design code."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- forces dependency injection naturally"}),o.jsx("li",{children:"- reduces tight coupling"}),o.jsx("li",{children:"- encourages small functions"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"Common mistakes"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- writing tests for implementation details"}),o.jsx("li",{children:"- writing too much code before tests"}),o.jsx("li",{children:"- skipping refactor step"}),o.jsx("li",{children:"- writing huge tests that cover everything"}),o.jsx("li",{children:"- using TDD for UI pixel perfect behavior"})]}),o.jsx("div",{className:"note",children:"TDD is strongest for business logic, rules, and service layers."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(As,{})}),o.jsx("span",{children:"Where TDD shines"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- complex business rules"}),o.jsx("li",{children:"- validators and parsers"}),o.jsx("li",{children:"- pricing and billing logic"}),o.jsx("li",{children:"- authorization and permission rules"}),o.jsx("li",{children:"- state machines and workflows"})]}),o.jsx("div",{className:"note",children:"TDD is not a religion. Use it where it gives you value."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(ti,{})}),o.jsx("span",{children:"TDD is a loop: define behavior with a test, make it pass quickly, then refactor with confidence."})]})]})]})},$s={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},ix=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"Mocking",subTitle:"Replace real dependencies with controlled fakes so tests stay fast, predictable, and focused on behavior.",chips:[{icon:o.jsx(Js,{}),label:"Isolation"},{icon:o.jsx(sa,{}),label:"Deterministic"},{icon:o.jsx(Yt,{}),label:"Stable tests"}]}),[]);return o.jsxs($s.Wrapper,{id:"mocking",children:[o.jsxs($s.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(Td,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"mocking-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs($s.Panel,{id:"mocking-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(dn,{})}),o.jsx("span",{children:"What is mocking"})]}),o.jsx("div",{className:"text",children:"Mocking means replacing a real dependency with a fake one during a test. This helps you test one unit in isolation."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- replace real HTTP calls with a fake client"}),o.jsx("li",{children:"- replace real database with an in memory store"}),o.jsx("li",{children:"- replace time and randomness with fixed values"})]}),o.jsx("div",{className:"note",children:"Goal: keep tests fast and predictable."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"When mocking is necessary"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- dependency is slow or expensive (db, network)"}),o.jsx("li",{children:"- dependency is unstable (external API)"}),o.jsx("li",{children:"- dependency is non deterministic (time, random)"}),o.jsx("li",{children:"- dependency causes side effects (email, payments)"})]}),o.jsx("div",{className:"note",children:"If the test calls the real world, the real world will eventually fail you."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example 1 - mock an HTTP client"})]}),o.jsx("div",{className:"text",children:"Instead of calling a real API, inject a dependency and mock it."}),o.jsx("pre",{className:"code",children:`// file: weatherService.js
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
});`}),o.jsx("div",{className:"note",children:"This test is fast because it does not call a real network."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(ti,{})}),o.jsx("span",{children:"Mock vs stub vs fake - simple meaning"})]}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Stub"}),o.jsx("div",{className:"v",children:"returns fixed data, no behavior tracking - example: a function that always returns 10"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Mock"}),o.jsx("div",{className:"v",children:"returns data and tracks how it was called - example: verify it was called with correct args"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Fake"}),o.jsx("div",{className:"v",children:"a working lightweight implementation - example: in memory database"})]})]}),o.jsx("div",{className:"note",children:'In real teams, people often say "mock" for all three. Context matters.'})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(op,{})}),o.jsx("span",{children:"Example 2 - fake database instead of real DB"})]}),o.jsx("div",{className:"text",children:"Unit tests should avoid real databases. A fake can simulate storage behavior."}),o.jsx("pre",{className:"code",children:`// file: userRepo.js
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
});`}),o.jsx("div",{className:"note",children:"This is a fake that behaves like storage without requiring DB setup."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Yt,{})}),o.jsx("span",{children:"Good mocking practices"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- mock only what you do not own (network, db, time)"}),o.jsx("li",{children:"- keep mock behavior minimal and readable"}),o.jsx("li",{children:"- assert on behavior, not internal calls"}),o.jsx("li",{children:"- prefer dependency injection over global mocking"}),o.jsx("li",{children:"- reset mocks between tests"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"Mocking pitfalls"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- over mocking makes tests meaningless"}),o.jsx("li",{children:"- mocking implementation details causes brittle tests"}),o.jsx("li",{children:"- mock returns unrealistic data that never happens in production"}),o.jsx("li",{children:"- tests pass but integration fails"})]}),o.jsx("div",{className:"note",children:"If you mock too much, you stop testing reality and start testing your imagination."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rt,{})}),o.jsx("span",{children:"Rule of thumb"})]}),o.jsx("div",{className:"text",children:"Use mocking to isolate the unit, but keep at least some integration tests to ensure real dependencies still work together."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- unit tests: lots, fast, heavily isolated"}),o.jsx("li",{children:"- integration tests: fewer, more realistic"}),o.jsx("li",{children:"- end to end tests: fewest, slowest"})]})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(Td,{})}),o.jsx("span",{children:"Mocking gives you control. Use it to remove randomness and slowness, but do not replace reality completely."})]})]})]})},Vs={Wrapper:ue.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,HeaderRow:ue.div`
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
    `,Panel:ue.div`
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
    `},ox=()=>{const[l,u]=Ce.useState(!1),a=Ce.useMemo(()=>({title:"Code Coverage",subTitle:"Measure how much of your code runs during tests. Useful signal to find untested areas, not a guarantee of correctness.",chips:[{icon:o.jsx(vo,{}),label:"Coverage metrics"},{icon:o.jsx(Am,{}),label:"Visibility"},{icon:o.jsx(Yt,{}),label:"Safer changes"}]}),[]);return o.jsxs(Vs.Wrapper,{id:"code-coverage",children:[o.jsxs(Vs.HeaderRow,{children:[o.jsxs("div",{className:"left",children:[o.jsxs("div",{className:"kicker",children:[o.jsx("span",{className:"kIcon",children:o.jsx(vo,{})}),o.jsx("span",{children:"Testing and Quality"})]}),o.jsx("h2",{className:"title",children:a.title}),o.jsx("p",{className:"subTitle",children:a.subTitle}),o.jsx("div",{className:"chipRow",children:a.chips.map(d=>o.jsxs("div",{className:"chip",children:[o.jsx("span",{className:"cIcon",children:d.icon}),o.jsx("span",{className:"cText",children:d.label})]},d.label))})]}),o.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":l,"aria-controls":"code-coverage-panel",title:l?"Collapse":"Expand",children:[o.jsx("span",{className:"tLabel",children:l?"Collapse":"Expand"}),o.jsx("span",{className:`tIcon ${l?"rot":""}`,children:o.jsx(fn,{})})]})]}),o.jsxs(Vs.Panel,{id:"code-coverage-panel","data-open":l?"true":"false",children:[o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(lp,{})}),o.jsx("span",{children:"What is code coverage"})]}),o.jsx("div",{className:"text",children:"Code coverage tells you which parts of your code were executed when tests ran. If a line never runs, it is not being tested."}),o.jsx("div",{className:"note",children:"Coverage is a signal. High coverage does not mean bug free code."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(dn,{})}),o.jsx("span",{children:"Common coverage types"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- line coverage - which lines executed"}),o.jsx("li",{children:"- function coverage - which functions executed"}),o.jsx("li",{children:"- branch coverage - which paths of if and switch executed"}),o.jsx("li",{children:"- statement coverage - which statements executed"})]})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Pr,{})}),o.jsx("span",{children:"Example - branch coverage matters"})]}),o.jsx("div",{className:"text",children:"You can have 100 percent line coverage but still miss a branch. Example:"}),o.jsx("pre",{className:"code",children:`// file: shipping.js
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
});`}),o.jsx("div",{className:"note",children:"Branch coverage protects if and switch logic from hidden bugs."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(vo,{})}),o.jsx("span",{children:"How coverage tools work"})]}),o.jsx("div",{className:"text",children:"Coverage tools instrument your code (add tracking) and record which lines and branches ran during tests. Then they generate a report."}),o.jsxs("div",{className:"compare",children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"Local"}),o.jsx("div",{className:"v",children:"run tests with coverage and view HTML or text report"})]}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k",children:"CI"}),o.jsx("div",{className:"v",children:"upload coverage to a service or fail build if below threshold"})]})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(_r,{})}),o.jsx("span",{children:"Coverage traps"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- chasing 100 percent coverage blindly"}),o.jsx("li",{children:"- writing useless tests that only execute code"}),o.jsx("li",{children:"- mocking too much and losing real behavior"}),o.jsx("li",{children:"- ignoring critical paths and edge cases"})]}),o.jsx("div",{className:"note",children:"Do not optimize for the number. Optimize for confidence."})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(Rt,{})}),o.jsx("span",{children:"Good coverage targets"})]}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- focus on business logic and risky code"}),o.jsx("li",{children:"- ensure error paths are tested"}),o.jsx("li",{children:"- prioritize auth, payments, permissions"}),o.jsx("li",{children:"- cover boundaries: input validation and parsing"})]}),o.jsx("div",{className:"note",children:"A small set of good tests is better than many shallow tests."})]}),o.jsxs("div",{className:"card wide",children:[o.jsxs("div",{className:"cardTitle",children:[o.jsx("span",{className:"i",children:o.jsx(zm,{})}),o.jsx("span",{children:"Thresholds in CI - how teams use it"})]}),o.jsx("div",{className:"text",children:"Many teams set minimum thresholds like 70 to 85 percent. If coverage drops below threshold, CI fails. This prevents coverage decay."}),o.jsxs("ul",{className:"list",children:[o.jsx("li",{children:"- do not block early projects with strict thresholds"}),o.jsx("li",{children:"- raise thresholds gradually as repo matures"}),o.jsx("li",{children:"- allow exceptions for tool output and third party code"})]}),o.jsx("div",{className:"note",children:"Use thresholds as guardrails, not as the main goal."})]})]}),o.jsxs("div",{className:"footerHint",children:[o.jsx("span",{className:"hIcon",children:o.jsx(vo,{})}),o.jsx("span",{children:"Coverage answers: what ran. Tests answer: what is correct. Use both to build confidence."})]})]})]})},lx=()=>{const l=Ce.useRef(null);return o.jsxs(Fs.Wrapper,{children:[o.jsx(Fs.Header,{children:o.jsx(Wm,{})}),o.jsxs(Fs.Main,{ref:l,children:[o.jsxs("div",{className:"contentWrapper",children:[o.jsx(qm,{}),o.jsx(ex,{}),o.jsx(tx,{}),o.jsx(rx,{}),o.jsx(nx,{}),o.jsx(ix,{}),o.jsx(ox,{})]}),o.jsx("div",{className:"footerWrapper",children:o.jsx(Xm,{})})]}),o.jsx(Jm,{scrollerRef:l})]})};fh.createRoot(document.getElementById("root")).render(o.jsx(o.Fragment,{children:o.jsx(lx,{})}));
