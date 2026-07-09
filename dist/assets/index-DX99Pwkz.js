(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Vx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lh={exports:{}},zo={};var B0;function Xx(){if(B0)return zo;B0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var I0;function kx(){return I0||(I0=1,lh.exports=Xx()),lh.exports}var Gt=kx(),ch={exports:{}},Po={},uh={exports:{}},fh={};var F0;function Wx(){return F0||(F0=1,(function(o){function e(P,j){var Z=P.length;P.push(j);t:for(;0<Z;){var Mt=Z-1>>>1,bt=P[Mt];if(0<l(bt,j))P[Mt]=j,P[Z]=bt,Z=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Z=P.pop();if(Z!==j){P[0]=Z;t:for(var Mt=0,bt=P.length,O=bt>>>1;Mt<O;){var at=2*(Mt+1)-1,St=P[at],At=at+1,Ut=P[At];if(0>l(St,Z))At<bt&&0>l(Ut,St)?(P[Mt]=Ut,P[At]=Z,Mt=At):(P[Mt]=St,P[at]=Z,Mt=at);else if(At<bt&&0>l(Ut,Z))P[Mt]=Ut,P[At]=Z,Mt=At;else break t}}return j}function l(P,j){var Z=P.sortIndex-j.sortIndex;return Z!==0?Z:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,y=3,S=!1,b=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function G(P){if(R=!1,D(P),!b)if(i(m)!==null)b=!0,F||(F=!0,et());else{var j=i(p);j!==null&&dt(G,j.startTime-P)}}var F=!1,z=-1,q=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<q)}function V(){if(M=!1,F){var P=o.unstable_now();w=P;var j=!0;try{t:{b=!1,R&&(R=!1,N(z),z=-1),S=!0;var Z=y;try{e:{for(D(P),g=i(m);g!==null&&!(g.expirationTime>P&&C());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,y=g.priorityLevel;var bt=Mt(g.expirationTime<=P);if(P=o.unstable_now(),typeof bt=="function"){g.callback=bt,D(P),j=!0;break e}g===i(m)&&r(m),D(P)}else r(m);g=i(m)}if(g!==null)j=!0;else{var O=i(p);O!==null&&dt(G,O.startTime-P),j=!1}}break t}finally{g=null,y=Z,S=!1}j=void 0}}finally{j?et():F=!1}}}var et;if(typeof U=="function")et=function(){U(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,vt=ut.port2;ut.port1.onmessage=V,et=function(){vt.postMessage(null)}}else et=function(){_(V,0)};function dt(P,j){z=_(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(P){switch(y){case 1:case 2:case 3:var j=3;break;default:j=y}var Z=y;y=j;try{return P()}finally{y=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=y;y=P;try{return j()}finally{y=Z}},o.unstable_scheduleCallback=function(P,j,Z){var Mt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Mt+Z:Mt):Z=Mt,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=Z+bt,P={id:x++,callback:j,priorityLevel:P,startTime:Z,expirationTime:bt,sortIndex:-1},Z>Mt?(P.sortIndex=Z,e(p,P),i(m)===null&&P===i(p)&&(R?(N(z),z=-1):R=!0,dt(G,Z-Mt))):(P.sortIndex=bt,e(m,P),b||S||(b=!0,F||(F=!0,et()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var j=y;return function(){var Z=y;y=j;try{return P.apply(this,arguments)}finally{y=Z}}}})(fh)),fh}var H0;function qx(){return H0||(H0=1,uh.exports=Wx()),uh.exports}var hh={exports:{}},ue={};var G0;function Yx(){if(G0)return ue;G0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(O,at,St){this.props=O,this.context=at,this.refs=M,this.updater=St||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=_.prototype;function U(O,at,St){this.props=O,this.context=at,this.refs=M,this.updater=St||b}var D=U.prototype=new N;D.constructor=U,R(D,_.prototype),D.isPureReactComponent=!0;var G=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(O,at,St){var At=St.ref;return{$$typeof:o,type:O,key:at,ref:At!==void 0?At:null,props:St}}function C(O,at){return w(O.type,at,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function et(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return at[St]})}var ut=/\/+/g;function vt(O,at){return typeof O=="object"&&O!==null&&O.key!=null?et(""+O.key):at.toString(36)}function dt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,at,St,At,Ut){var nt=typeof O;(nt==="undefined"||nt==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case o:case e:ct=!0;break;case x:return ct=O._init,P(ct(O._payload),at,St,At,Ut)}}if(ct)return Ut=Ut(O),ct=At===""?"."+vt(O,0):At,G(Ut)?(St="",ct!=null&&(St=ct.replace(ut,"$&/")+"/"),P(Ut,at,St,"",function(Xt){return Xt})):Ut!=null&&(V(Ut)&&(Ut=C(Ut,St+(Ut.key==null||O&&O.key===Ut.key?"":(""+Ut.key).replace(ut,"$&/")+"/")+ct)),at.push(Ut)),1;ct=0;var Lt=At===""?".":At+":";if(G(O))for(var Ft=0;Ft<O.length;Ft++)At=O[Ft],nt=Lt+vt(At,Ft),ct+=P(At,at,St,nt,Ut);else if(Ft=S(O),typeof Ft=="function")for(O=Ft.call(O),Ft=0;!(At=O.next()).done;)At=At.value,nt=Lt+vt(At,Ft++),ct+=P(At,at,St,nt,Ut);else if(nt==="object"){if(typeof O.then=="function")return P(dt(O),at,St,At,Ut);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ct}function j(O,at,St){if(O==null)return O;var At=[],Ut=0;return P(O,At,"","",function(nt){return at.call(St,nt,Ut++)}),At}function Z(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var Mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},bt={map:j,forEach:function(O,at,St){j(O,function(){at.apply(this,arguments)},St)},count:function(O){var at=0;return j(O,function(){at++}),at},toArray:function(O){return j(O,function(at){return at})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ue.Activity=g,ue.Children=bt,ue.Component=_,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=U,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ue.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ue.cache=function(O){return function(){return O.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(O,at,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=R({},O.props),Ut=O.key;if(at!=null)for(nt in at.key!==void 0&&(Ut=""+at.key),at)!q.call(at,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&at.ref===void 0||(At[nt]=at[nt]);var nt=arguments.length-2;if(nt===1)At.children=St;else if(1<nt){for(var ct=Array(nt),Lt=0;Lt<nt;Lt++)ct[Lt]=arguments[Lt+2];At.children=ct}return w(O.type,Ut,At)},ue.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ue.createElement=function(O,at,St){var At,Ut={},nt=null;if(at!=null)for(At in at.key!==void 0&&(nt=""+at.key),at)q.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ut[At]=at[At]);var ct=arguments.length-2;if(ct===1)Ut.children=St;else if(1<ct){for(var Lt=Array(ct),Ft=0;Ft<ct;Ft++)Lt[Ft]=arguments[Ft+2];Ut.children=Lt}if(O&&O.defaultProps)for(At in ct=O.defaultProps,ct)Ut[At]===void 0&&(Ut[At]=ct[At]);return w(O,nt,Ut)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(O){return{$$typeof:d,render:O}},ue.isValidElement=V,ue.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:Z}},ue.memo=function(O,at){return{$$typeof:p,type:O,compare:at===void 0?null:at}},ue.startTransition=function(O){var at=z.T,St={};z.T=St;try{var At=O(),Ut=z.S;Ut!==null&&Ut(St,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(F,Mt)}catch(nt){Mt(nt)}finally{at!==null&&St.types!==null&&(at.types=St.types),z.T=at}},ue.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ue.use=function(O){return z.H.use(O)},ue.useActionState=function(O,at,St){return z.H.useActionState(O,at,St)},ue.useCallback=function(O,at){return z.H.useCallback(O,at)},ue.useContext=function(O){return z.H.useContext(O)},ue.useDebugValue=function(){},ue.useDeferredValue=function(O,at){return z.H.useDeferredValue(O,at)},ue.useEffect=function(O,at){return z.H.useEffect(O,at)},ue.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ue.useId=function(){return z.H.useId()},ue.useImperativeHandle=function(O,at,St){return z.H.useImperativeHandle(O,at,St)},ue.useInsertionEffect=function(O,at){return z.H.useInsertionEffect(O,at)},ue.useLayoutEffect=function(O,at){return z.H.useLayoutEffect(O,at)},ue.useMemo=function(O,at){return z.H.useMemo(O,at)},ue.useOptimistic=function(O,at){return z.H.useOptimistic(O,at)},ue.useReducer=function(O,at,St){return z.H.useReducer(O,at,St)},ue.useRef=function(O){return z.H.useRef(O)},ue.useState=function(O){return z.H.useState(O)},ue.useSyncExternalStore=function(O,at,St){return z.H.useSyncExternalStore(O,at,St)},ue.useTransition=function(){return z.H.useTransition()},ue.version="19.2.0",ue}var V0;function Gd(){return V0||(V0=1,hh.exports=Yx()),hh.exports}var dh={exports:{}},zn={};var X0;function jx(){if(X0)return zn;X0=1;var o=Gd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,zn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},zn.flushSync=function(m){var p=h.T,x=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=x,r.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},zn.requestFormReset=function(m){r.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},zn.useFormStatus=function(){return h.H.useHostTransitionStatus()},zn.version="19.2.0",zn}var k0;function Zx(){if(k0)return dh.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dh.exports=jx(),dh.exports}var W0;function Kx(){if(W0)return Po;W0=1;var o=qx(),e=Gd(),i=Zx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:vt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return vt(t(n))}catch{}}return null}var dt=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},Mt=[],bt=-1;function O(t){return{current:t}}function at(t){0>bt||(t.current=Mt[bt],Mt[bt]=null,bt--)}function St(t,n){bt++,Mt[bt]=t.current,t.current=n}var At=O(null),Ut=O(null),nt=O(null),ct=O(null);function Lt(t,n){switch(St(nt,n),St(Ut,t),St(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?s0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=s0(n),t=o0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(At),St(At,t)}function Ft(){at(At),at(Ut),at(nt)}function Xt(t){t.memoizedState!==null&&St(ct,t);var n=At.current,a=o0(n,t.type);n!==a&&(St(Ut,t),St(At,a))}function fe(t){Ut.current===t&&(at(At),at(Ut)),ct.current===t&&(at(ct),Uo._currentValue=Z)}var en,H;function Ae(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+H}var se=!1;function ne(t,n){if(!t||se)return"";se=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var it=lt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(lt){it=lt}t.call(_t.prototype)}}else{try{throw Error()}catch(lt){it=lt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var I=v.split(`
`),tt=T.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===tt.length)for(s=I.length-1,u=tt.length-1;1<=s&&0<=u&&I[s]!==tt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==tt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==tt[u]){var ht=`
`+I[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{se=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ae(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return t.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return ne(t.type,!1);case 11:return ne(t.type.render,!1);case 1:return ne(t.type,!0);case 31:return Ae("Activity");default:return""}}function ze(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Vt=Object.prototype.hasOwnProperty,le=o.unstable_scheduleCallback,Re=o.unstable_cancelCallback,Ie=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,B=o.unstable_getCurrentPriorityLevel,J=o.unstable_ImmediatePriority,ft=o.unstable_UserBlockingPriority,st=o.unstable_NormalPriority,Ht=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,kt=o.log,Pt=o.unstable_setDisableYieldValue,Et=null,Ct=null;function Zt(t){if(typeof kt=="function"&&Pt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Et,t)}catch{}}var Bt=Math.clz32?Math.clz32:W,Dt=Math.log,oe=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Dt(t)/oe|0)|0}var Tt=256,wt=262144,gt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=yt(s):(v&=T,v!==0?u=yt(v):a||(a=T&~t,a!==0&&(u=yt(a))))):(T=s&~f,T!==0?u=yt(T):v!==0?u=yt(v):a||(a=s&~t,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Qt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ae(){var t=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),t}function Jt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function on(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Bt(a),_t=1<<ht;T[ht]=0,I[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var lt=it[ht];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&kn(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function kn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Bt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Rn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Bt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function an(t,n){var a=n&-n;return a=(a&42)!==0?1:gn(a),(a&(t.suspendedLanes|n))!==0?0:a}function gn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _n(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ti(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:D0(t.type))}function Wn(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var In=Math.random().toString(36).slice(2),Ze="__reactFiber$"+In,vn="__reactProps$"+In,Oi="__reactContainer$"+In,Ma="__reactEvents$"+In,Ir="__reactListeners$"+In,zi="__reactHandles$"+In,Ea="__reactResources$"+In,Ti="__reactMarker$"+In;function A(t){delete t[Ze],delete t[vn],delete t[Ma],delete t[Ir],delete t[zi]}function Y(t){var n=t[Ze];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Oi]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=p0(t);t!==null;){if(a=t[Ze])return a;t=p0(t)}return n}t=a,a=t.parentNode}return null}function rt(t){if(t=t[Ze]||t[Oi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function K(t){var n=t[Ea];return n||(n=t[Ea]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(t){t[Ti]=!0}var Ot=new Set,qt={};function It(t,n){$t(t,n),$t(t+"Capture",n)}function $t(t,n){for(qt[t]=n,t=0;t<n.length;t++)Ot.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},_e={};function Ne(t){return Vt.call(_e,t)?!0:Vt.call(te,t)?!1:re.test(t)?_e[t]=!0:(te[t]=!0,!1)}function We(t,n,a){if(Ne(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ve(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ce(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Cn(t){if(!t._valueTracker){var n=Ye(t)?"checked":"value";t._valueTracker=Ce(t,n,""+t[n])}}function Yi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ye(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Tn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rr=/[\n"\\]/g;function Se(t){return t.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function On(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Yt(n)):t.value!==""+Yt(n)&&(t.value=""+Yt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?yn(t,v,Yt(n)):a!=null?yn(t,v,Yt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Yt(T):t.removeAttribute("name")}function Fn(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Cn(t);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Cn(t)}function yn(t,n,a){n==="number"&&Tn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Fr(t,n,a){if(n!=null&&(n=""+Yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Yt(a):""}function Pi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Yt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Cn(t)}function Hr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Bv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ap(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ip(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ip(t,f,n[f])}function iu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return Fv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var au=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gr=null,Vr=null;function rp(t){var n=rt(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(On(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));On(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Yi(s)}break t;case"textarea":Fr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var su=!1;function sp(t,n,a){if(su)return t(n,a);su=!0;try{var s=t(n);return s}finally{if(su=!1,(Gr!==null||Vr!==null)&&(Wl(),Gr&&(n=Gr,t=Vr,Vr=Gr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Zi)try{var js={};Object.defineProperty(js,"passive",{get:function(){ou=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{ou=!1}var Ta=null,lu=null,rl=null;function op(){if(rl)return rl;var t,n=lu,a=n.length,s,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return rl=u.slice(t,1<s?1-s:void 0)}function sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function lp(){return!1}function qn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:lp,this.isPropagationStopped=lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=qn(sr),Zs=g({},sr,{view:0,detail:0}),Hv=qn(Zs),cu,uu,Ks,cl=g({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(cu=t.screenX-Ks.screenX,uu=t.screenY-Ks.screenY):uu=cu=0,Ks=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),cp=qn(cl),Gv=g({},cl,{dataTransfer:0}),Vv=qn(Gv),Xv=g({},Zs,{relatedTarget:0}),fu=qn(Xv),kv=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=qn(kv),qv=g({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=qn(qv),jv=g({},sr,{data:0}),up=qn(jv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qv[t])?!!n[t]:!1}function hu(){return Jv}var $v=g({},Zs,{key:function(t){if(t.key){var n=Zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=qn($v),ey=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=qn(ey),ny=g({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),iy=qn(ny),ay=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=qn(ay),sy=g({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=qn(sy),ly=g({},sr,{newState:0,oldState:0}),cy=qn(ly),uy=[9,13,27,32],du=Zi&&"CompositionEvent"in window,Qs=null;Zi&&"documentMode"in document&&(Qs=document.documentMode);var fy=Zi&&"TextEvent"in window&&!Qs,hp=Zi&&(!du||Qs&&8<Qs&&11>=Qs),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return uy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xr=!1;function hy(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function dy(t,n){if(Xr)return t==="compositionend"||!du&&mp(t,n)?(t=op(),rl=lu=Ta=null,Xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!py[t.type]:n==="textarea"}function vp(t,n,a,s){Gr?Vr?Vr.push(s):Vr=[s]:Gr=s,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Js=null,$s=null;function my(t){t0(t,0)}function ul(t){var n=ot(t);if(Yi(n))return t}function yp(t,n){if(t==="change")return n}var xp=!1;if(Zi){var pu;if(Zi){var mu="oninput"in document;if(!mu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),mu=typeof Sp.oninput=="function"}pu=mu}else pu=!1;xp=pu&&(!document.documentMode||9<document.documentMode)}function Mp(){Js&&(Js.detachEvent("onpropertychange",Ep),$s=Js=null)}function Ep(t){if(t.propertyName==="value"&&ul($s)){var n=[];vp(n,$s,t,ru(t)),sp(my,n)}}function gy(t,n,a){t==="focusin"?(Mp(),Js=n,$s=a,Js.attachEvent("onpropertychange",Ep)):t==="focusout"&&Mp()}function _y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul($s)}function vy(t,n){if(t==="click")return ul(n)}function yy(t,n){if(t==="input"||t==="change")return ul(n)}function xy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:xy;function to(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Vt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,n){var a=Tp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Tn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Tn(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sy=Zi&&"documentMode"in document&&11>=document.documentMode,kr=null,_u=null,eo=null,vu=!1;function Cp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||kr==null||kr!==Tn(s)||(s=kr,"selectionStart"in s&&gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),eo&&to(eo,s)||(eo=s,s=Jl(_u,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=kr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Wr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},yu={},wp={};Zi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function lr(t){if(yu[t])return yu[t];if(!Wr[t])return t;var n=Wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return yu[t]=n[a];return t}var Dp=lr("animationend"),Up=lr("animationiteration"),Lp=lr("animationstart"),My=lr("transitionrun"),Ey=lr("transitionstart"),Ty=lr("transitioncancel"),Np=lr("transitionend"),Op=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function bi(t,n){Op.set(t,n),It(n,[t])}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],qr=0,Su=0;function hl(){for(var t=qr,n=Su=qr=0;n<t;){var a=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&zp(a,u,f)}}function dl(t,n,a,s){hi[qr++]=t,hi[qr++]=n,hi[qr++]=a,hi[qr++]=s,Su|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Mu(t,n,a,s){return dl(t,n,a,s),pl(t)}function cr(t,n){return dl(t,null,null,n),pl(t)}function zp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Bt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function pl(t){if(50<To)throw To=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function by(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,s){return new by(t,n,a,s)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Eu(t)&&(v=1);else if(typeof t=="string")v=Dx(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=ni(31,a,n,u),t.elementType=w,t.lanes=f,t;case R:return ur(a.children,u,f,n);case M:v=8,u|=24;break;case _:return t=ni(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case G:return t=ni(13,a,n,u),t.elementType=G,t.lanes=f,t;case F:return t=ni(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:v=10;break t;case N:v=9;break t;case D:v=11;break t;case z:v=14;break t;case q:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ni(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function ur(t,n,a,s){return t=ni(7,t,s,n),t.lanes=a,t}function Tu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Bp(t){var n=ni(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ip=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ze(n)},Ip.set(t,n),n)}return{value:t,source:n,stack:ze(n)}}var jr=[],Zr=0,gl=null,no=0,pi=[],mi=0,ba=null,Bi=1,Ii="";function Qi(t,n){jr[Zr++]=no,jr[Zr++]=gl,gl=t,no=n}function Fp(t,n,a){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=ba,ba=t;var s=Bi;t=Ii;var u=32-Bt(s)-1;s&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Bi=1<<32-Bt(n)+u|a<<u|s,Ii=f+t}else Bi=1<<f|a<<u|s,Ii=t}function Au(t){t.return!==null&&(Qi(t,1),Fp(t,1,0))}function Ru(t){for(;t===gl;)gl=jr[--Zr],jr[Zr]=null,no=jr[--Zr],jr[Zr]=null;for(;t===ba;)ba=pi[--mi],pi[mi]=null,Ii=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function Hp(t,n){pi[mi++]=Bi,pi[mi++]=Ii,pi[mi++]=ba,Bi=n.id,Ii=n.overflow,ba=t}var wn=null,Ke=null,Te=!1,Aa=null,gi=!1,Cu=Error(r(519));function Ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(di(n,t)),Cu}function Gp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ze]=t,n[vn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)xe(Ao[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Fn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Pi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||a0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ra(t,!0)}function Vp(t){for(wn=t.return;wn;)switch(wn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:wn=wn.return}}function Kr(t){if(t!==wn)return!1;if(!Te)return Vp(t),Te=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&Ke&&Ra(t),Vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=d0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=d0(t)}else n===27?(n=Ke,Ga(t.type)?(t=Jf,Jf=null,Ke=t):Ke=n):Ke=wn?vi(t.stateNode.nextSibling):null;return!0}function fr(){Ke=wn=null,Te=!1}function wu(){var t=Aa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Aa=null),t}function io(t){Aa===null?Aa=[t]:Aa.push(t)}var Du=O(null),hr=null,Ji=null;function Ca(t,n,a){St(Du,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Du.current,at(Du)}function Uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Uu(f.return,a,t),s||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Uu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Qr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;ei(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===ct.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Lu(n,t,a,s),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){hr=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Xp(hr,t)}function vl(t,n){return hr===null&&dr(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(r(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var Ay=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ry=o.unstable_scheduleCallback,Cy=o.unstable_NormalPriority,fn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new Ay,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&Ry(Cy,function(){t.controller.abort()})}var ro=null,Ou=0,Jr=0,$r=null;function wy(t,n){if(ro===null){var a=ro=[];Ou=0,Jr=If(),$r={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ou++,n.then(kp,kp),n}function kp(){if(--Ou===0&&ro!==null){$r!==null&&($r.status="fulfilled");var t=ro;ro=null,Jr=0,$r=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Wp=P.S;P.S=function(t,n){Cg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wy(t,n),Wp!==null&&Wp(t,n)};var pr=O(null);function zu(){var t=pr.current;return t!==null?t:qe.pooledCache}function yl(t,n){n===null?St(pr,pr.current):St(pr,n.pool)}function qp(){var t=zu();return t===null?null:{parent:fn._currentValue,pool:t}}var ts=Error(r(460)),Pu=Error(r(474)),xl=Error(r(542)),Sl={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw gr=n,ts}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,ts):a}}var gr=null;function Zp(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function Kp(t){if(t===ts||t===xl)throw Error(r(483))}var es=null,so=0;function Ml(t){var n=so;return so+=1,es===null&&(es=[]),jp(es,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function El(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){function n(Q,X){if(t){var $=Q.deletions;$===null?(Q.deletions=[X],Q.flags|=16):$.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function s(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Ki(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,$){return Q.index=$,t?($=Q.alternate,$!==null?($=$.index,$<X?(Q.flags|=67108866,X):$):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function v(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,X,$,mt){return X===null||X.tag!==6?(X=Tu($,Q.mode,mt),X.return=Q,X):(X=u(X,$),X.return=Q,X)}function I(Q,X,$,mt){var ee=$.type;return ee===R?ht(Q,X,$.props.children,mt,$.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&mr(ee)===X.type)?(X=u(X,$.props),oo(X,$),X.return=Q,X):(X=ml($.type,$.key,$.props,null,Q.mode,mt),oo(X,$),X.return=Q,X)}function tt(Q,X,$,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=bu($,Q.mode,mt),X.return=Q,X):(X=u(X,$.children||[]),X.return=Q,X)}function ht(Q,X,$,mt,ee){return X===null||X.tag!==7?(X=ur($,Q.mode,mt,ee),X.return=Q,X):(X=u(X,$),X.return=Q,X)}function _t(Q,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tu(""+X,Q.mode,$),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return $=ml(X.type,X.key,X.props,null,Q.mode,$),oo($,X),$.return=Q,$;case b:return X=bu(X,Q.mode,$),X.return=Q,X;case q:return X=mr(X),_t(Q,X,$)}if(dt(X)||et(X))return X=ur(X,Q.mode,$,null),X.return=Q,X;if(typeof X.then=="function")return _t(Q,Ml(X),$);if(X.$$typeof===U)return _t(Q,vl(Q,X),$);El(Q,X)}return null}function it(Q,X,$,mt){var ee=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ee!==null?null:T(Q,X,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===ee?I(Q,X,$,mt):null;case b:return $.key===ee?tt(Q,X,$,mt):null;case q:return $=mr($),it(Q,X,$,mt)}if(dt($)||et($))return ee!==null?null:ht(Q,X,$,mt,null);if(typeof $.then=="function")return it(Q,X,Ml($),mt);if($.$$typeof===U)return it(Q,X,vl(Q,$),mt);El(Q,$)}return null}function lt(Q,X,$,mt,ee){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get($)||null,T(X,Q,""+mt,ee);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return Q=Q.get(mt.key===null?$:mt.key)||null,I(X,Q,mt,ee);case b:return Q=Q.get(mt.key===null?$:mt.key)||null,tt(X,Q,mt,ee);case q:return mt=mr(mt),lt(Q,X,$,mt,ee)}if(dt(mt)||et(mt))return Q=Q.get($)||null,ht(X,Q,mt,ee,null);if(typeof mt.then=="function")return lt(Q,X,$,Ml(mt),ee);if(mt.$$typeof===U)return lt(Q,X,$,vl(X,mt),ee);El(X,mt)}return null}function Wt(Q,X,$,mt){for(var ee=null,we=null,Kt=X,de=X=0,Ee=null;Kt!==null&&de<$.length;de++){Kt.index>de?(Ee=Kt,Kt=null):Ee=Kt.sibling;var De=it(Q,Kt,$[de],mt);if(De===null){Kt===null&&(Kt=Ee);break}t&&Kt&&De.alternate===null&&n(Q,Kt),X=f(De,X,de),we===null?ee=De:we.sibling=De,we=De,Kt=Ee}if(de===$.length)return a(Q,Kt),Te&&Qi(Q,de),ee;if(Kt===null){for(;de<$.length;de++)Kt=_t(Q,$[de],mt),Kt!==null&&(X=f(Kt,X,de),we===null?ee=Kt:we.sibling=Kt,we=Kt);return Te&&Qi(Q,de),ee}for(Kt=s(Kt);de<$.length;de++)Ee=lt(Kt,Q,de,$[de],mt),Ee!==null&&(t&&Ee.alternate!==null&&Kt.delete(Ee.key===null?de:Ee.key),X=f(Ee,X,de),we===null?ee=Ee:we.sibling=Ee,we=Ee);return t&&Kt.forEach(function(qa){return n(Q,qa)}),Te&&Qi(Q,de),ee}function ie(Q,X,$,mt){if($==null)throw Error(r(151));for(var ee=null,we=null,Kt=X,de=X=0,Ee=null,De=$.next();Kt!==null&&!De.done;de++,De=$.next()){Kt.index>de?(Ee=Kt,Kt=null):Ee=Kt.sibling;var qa=it(Q,Kt,De.value,mt);if(qa===null){Kt===null&&(Kt=Ee);break}t&&Kt&&qa.alternate===null&&n(Q,Kt),X=f(qa,X,de),we===null?ee=qa:we.sibling=qa,we=qa,Kt=Ee}if(De.done)return a(Q,Kt),Te&&Qi(Q,de),ee;if(Kt===null){for(;!De.done;de++,De=$.next())De=_t(Q,De.value,mt),De!==null&&(X=f(De,X,de),we===null?ee=De:we.sibling=De,we=De);return Te&&Qi(Q,de),ee}for(Kt=s(Kt);!De.done;de++,De=$.next())De=lt(Kt,Q,de,De.value,mt),De!==null&&(t&&De.alternate!==null&&Kt.delete(De.key===null?de:De.key),X=f(De,X,de),we===null?ee=De:we.sibling=De,we=De);return t&&Kt.forEach(function(Gx){return n(Q,Gx)}),Te&&Qi(Q,de),ee}function Ge(Q,X,$,mt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var ee=$.key;X!==null;){if(X.key===ee){if(ee=$.type,ee===R){if(X.tag===7){a(Q,X.sibling),mt=u(X,$.props.children),mt.return=Q,Q=mt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===q&&mr(ee)===X.type){a(Q,X.sibling),mt=u(X,$.props),oo(mt,$),mt.return=Q,Q=mt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}$.type===R?(mt=ur($.props.children,Q.mode,mt,$.key),mt.return=Q,Q=mt):(mt=ml($.type,$.key,$.props,null,Q.mode,mt),oo(mt,$),mt.return=Q,Q=mt)}return v(Q);case b:t:{for(ee=$.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Q,X.sibling),mt=u(X,$.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}mt=bu($,Q.mode,mt),mt.return=Q,Q=mt}return v(Q);case q:return $=mr($),Ge(Q,X,$,mt)}if(dt($))return Wt(Q,X,$,mt);if(et($)){if(ee=et($),typeof ee!="function")throw Error(r(150));return $=ee.call($),ie(Q,X,$,mt)}if(typeof $.then=="function")return Ge(Q,X,Ml($),mt);if($.$$typeof===U)return Ge(Q,X,vl(Q,$),mt);El(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Q,X.sibling),mt=u(X,$),mt.return=Q,Q=mt):(a(Q,X),mt=Tu($,Q.mode,mt),mt.return=Q,Q=mt),v(Q)):a(Q,X)}return function(Q,X,$,mt){try{so=0;var ee=Ge(Q,X,$,mt);return es=null,ee}catch(Kt){if(Kt===ts||Kt===xl)throw Kt;var we=ni(29,Kt,null,Q.mode);return we.lanes=mt,we.return=Q,we}}}var _r=Qp(!0),Jp=Qp(!1),wa=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=pl(t),zp(t,null,a),n}return dl(t,s,n,a),pl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Rn(t,a)}}function Fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function co(){if(Hu){var t=$r;if(t!==null)throw t}}function uo(t,n,a,s){Hu=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,tt=I.next;I.next=null,v===null?f=tt:v.next=tt,v=I;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;v=0,ht=tt=I=null,T=f;do{var it=T.lane&-536870913,lt=it!==T.lane;if(lt?(Me&it)===it:(s&it)===it){it!==0&&it===Jr&&(Hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Wt=t,ie=T;it=n;var Ge=a;switch(ie.tag){case 1:if(Wt=ie.payload,typeof Wt=="function"){_t=Wt.call(Ge,_t,it);break t}_t=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ie.payload,it=typeof Wt=="function"?Wt.call(Ge,_t,it):Wt,it==null)break t;_t=g({},_t,it);break t;case 2:wa=!0}}it=T.callback,it!==null&&(t.flags|=64,lt&&(t.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=lt,I=_t):ht=ht.next=lt,v|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Pa|=v,t.lanes=v,t.memoizedState=_t}}function $p(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var ns=O(null),Tl=O(0);function em(t,n){t=la,St(Tl,t),St(ns,n),la=t|n.baseLanes}function Gu(){St(Tl,la),St(ns,ns.current)}function Vu(){la=Tl.current,at(ns),at(Tl)}var ii=O(null),_i=null;function La(t){var n=t.alternate;St(cn,cn.current&1),St(ii,t),_i===null&&(n===null||ns.current!==null||n.memoizedState!==null)&&(_i=t)}function Xu(t){St(cn,cn.current),St(ii,t),_i===null&&(_i=t)}function nm(t){t.tag===22?(St(cn,cn.current),St(ii,t),_i===null&&(_i=t)):Na()}function Na(){St(cn,cn.current),St(ii,ii.current)}function ai(t){at(ii),_i===t&&(_i=null),at(cn)}var cn=O(0);function bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,he=null,Fe=null,hn=null,Al=!1,is=!1,vr=!1,Rl=0,fo=0,as=null,Uy=0;function rn(){throw Error(r(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Wu(t,n,a,s,u,f){return ta=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Fm:of,vr=!1,f=a(s,u),vr=!1,is&&(f=am(n,a,s,u)),im(t),f}function im(t){P.H=mo;var n=Fe!==null&&Fe.next!==null;if(ta=0,hn=Fe=he=null,Al=!1,fo=0,as=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&_l(t)&&(dn=!0))}function am(t,n,a,s){he=t;var u=0;do{if(is&&(as=null),fo=0,is=!1,25<=u)throw Error(r(301));if(u+=1,hn=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Hm,f=n(a,s)}while(is);return f}function Ly(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(he.flags|=1024),n}function qu(){var t=Rl!==0;return Rl=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ju(t){if(Al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Al=!1}ta=0,hn=Fe=he=null,is=!1,fo=Rl=0,as=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Fe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Fe=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},hn===null?he.memoizedState=hn=t:hn=hn.next=t}return hn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,as===null&&(as=[]),t=jp(as,t,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Fm:of),t}function wl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===U)return Dn(t)}throw Error(r(438,String(t)))}function Zu(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Dl(t){var n=un();return Ku(n,Fe,t)}function Ku(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,I=null,tt=n,ht=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(Me&_t)===_t:(ta&_t)===_t){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===Jr&&(ht=!0);else if((ta&it)===it){tt=tt.next,it===Jr&&(ht=!0);continue}else _t={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=_t,v=f):I=I.next=_t,he.lanes|=it,Pa|=it;_t=tt.action,vr&&a(f,_t),f=tt.hasEagerState?tt.eagerState:a(f,_t)}else it={lane:_t,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(T=I=it,v=f):I=I.next=it,he.lanes|=_t,Pa|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?v=f:I.next=T,!ei(f,t.memoizedState)&&(dn=!0,ht&&(a=$r,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Qu(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ei(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function rm(t,n,a){var s=he,u=un(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ei((Fe||u).memoizedState,a);if(v&&(u.memoizedState=a,dn=!0),u=u.queue,tf(lm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||hn!==null&&hn.memoizedState.tag&1){if(s.flags|=2048,rs(9,{destroy:void 0},om.bind(null,s,u,a,n),null),qe===null)throw Error(r(349));f||(ta&127)!==0||sm(s,n,a)}return a}function sm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Cl(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function om(t,n,a,s){n.value=a,n.getSnapshot=s,cm(n)&&um(t)}function lm(t,n,a){return a(function(){cm(n)&&um(t)})}function cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function um(t){var n=cr(t,2);n!==null&&Qn(n,t,2)}function Ju(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),vr){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function fm(t,n,a,s){return t.baseState=a,Ku(t,Fe,typeof s=="function"?s:ea)}function Ny(t,n,a,s,u){if(Nl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var T=a(u,s),I=P.S;I!==null&&I(v,T),dm(t,n,T)}catch(tt){$u(t,n,tt)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,s),dm(t,n,f)}catch(tt){$u(t,n,tt)}}function dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pm(t,n,s)},function(s){return $u(t,n,s)}):pm(t,n,a)}function pm(t,n,a){n.status="fulfilled",n.value=a,mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function $u(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==s)}t.action=null}function mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gm(t,n){return n}function _m(t,n){if(Te){var a=qe.formState;if(a!==null){t:{var s=he;if(Te){if(Ke){e:{for(var u=Ke,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=vi(u.nextSibling),s=u.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=s,a=Pm.bind(null,he,s),s.dispatch=a,s=Ju(!1),f=sf.bind(null,he,!1,s.queue),s=Hn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Ny.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vm(t){var n=un();return ym(n,Fe,t)}function ym(t,n,a){if(n=Ku(t,n,gm)[0],t=Dl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ho(n)}catch(v){throw v===ts?xl:v}else s=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,rs(9,{destroy:void 0},Oy.bind(null,u,a),null)),[s,f,t]}function Oy(t,n){t.action=n}function xm(t){var n=un(),a=Fe;if(a!==null)return ym(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function rs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Cl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Sm(){return un().memoizedState}function Ul(t,n,a,s){var u=Hn();he.flags|=t,u.memoizedState=rs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ll(t,n,a,s){var u=un();s=s===void 0?null:s;var f=u.memoizedState.inst;Fe!==null&&s!==null&&ku(s,Fe.memoizedState.deps)?u.memoizedState=rs(n,f,a,s):(he.flags|=t,u.memoizedState=rs(1|n,f,a,s))}function Mm(t,n){Ul(8390656,8,t,n)}function tf(t,n){Ll(2048,8,t,n)}function zy(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Cl(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=un().memoizedState;return zy({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Ll(4,2,t,n)}function bm(t,n){return Ll(4,4,t,n)}function Am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rm(t,n,a){a=a!=null?a.concat([t]):null,Ll(4,4,Am.bind(null,n,t),a)}function ef(){}function Cm(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ku(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wm(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ku(n,s[1]))return s[0];if(s=t(),vr){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s}function nf(t,n,a){return a===void 0||(ta&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),he.lanes|=t,Pa|=t,a)}function Dm(t,n,a,s){return ei(a,n)?a:ns.current!==null?(t=nf(t,a,s),ei(t,n)||(dn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(Me&261930)===0?(dn=!0,t.memoizedState=a):(t=Dg(),he.lanes|=t,Pa|=t,n)}function Um(t,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=P.T,T={};P.T=T,sf(t,!1,n,a);try{var I=u(),tt=P.S;if(tt!==null&&tt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Dy(I,s);po(t,n,ht,oi(t))}else po(t,n,s,oi(t))}catch(_t){po(t,n,{then:function(){},status:"rejected",reason:_t},oi())}finally{j.p=f,v!==null&&T.types!==null&&(v.types=T.types),P.T=v}}function Py(){}function af(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Lm(t).queue;Um(t,u,n,Z,a===null?Py:function(){return Nm(t),a(s)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},oi())}function rf(){return Dn(Uo)}function Om(){return un().memoizedState}function zm(){return un().memoizedState}function By(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=Da(a);var s=Ua(n,t,a);s!==null&&(Qn(s,n,a),lo(s,n,a)),n={cache:Nu()},t.payload=n;return}n=n.return}}function Iy(t,n,a){var s=oi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Bm(n,a):(a=Mu(t,n,a,s),a!==null&&(Qn(a,t,s),Im(a,n,s)))}function Pm(t,n,a){var s=oi();po(t,n,a,s)}function po(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,ei(T,v))return dl(t,n,u,0),qe===null&&hl(),!1}catch{}if(a=Mu(t,n,u,s),a!==null)return Qn(a,t,s),Im(a,n,s),!0}return!1}function sf(t,n,a,s){if(s={lane:2,revertLane:If(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(r(479))}else n=Mu(t,a,s,2),n!==null&&Qn(n,t,2)}function Nl(t){var n=t.alternate;return t===he||n!==null&&n===he}function Bm(t,n){is=Al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Im(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Rn(t,a)}}var mo={readContext:Dn,use:wl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};mo.useEffectEvent=rn;var Fm={readContext:Dn,use:wl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ul(4194308,4,Am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ul(4194308,4,t,n)},useInsertionEffect:function(t,n){Ul(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var s=t();if(vr){Zt(!0);try{t()}finally{Zt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Hn();if(a!==void 0){var u=a(n);if(vr){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Iy.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=Pm.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=Hn();return nf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Um.bind(null,he,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Hn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Me&127)!==0||sm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Mm(lm.bind(null,s,f,t),[t]),s.flags|=2048,rs(9,{destroy:void 0},om.bind(null,s,f,a,n),null),a},useId:function(){var t=Hn(),n=qe.identifierPrefix;if(Te){var a=Ii,s=Bi;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Uy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return Hn().memoizedState=By.bind(null,he)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},of={readContext:Dn,use:wl,useCallback:Cm,useContext:Dn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Dl,useRef:Sm,useState:function(){return Dl(ea)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Dm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Dl(ea)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:rf,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=un();return fm(a,Fe,t,n)},useMemoCache:Zu,useCacheRefresh:zm};of.useEffectEvent=Em;var Hm={readContext:Dn,use:wl,useCallback:Cm,useContext:Dn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Qu,useRef:Sm,useState:function(){return Qu(ea)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Fe===null?nf(a,t,n):Dm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Qu(ea)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:rf,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=un();return Fe!==null?fm(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:zm};Hm.useEffectEvent=Em;function lf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=oi(),u=Da(s);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,s),n!==null&&(Qn(n,t,s),lo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=oi(),u=Da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,s),n!==null&&(Qn(n,t,s),lo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(t,s,a),n!==null&&(Qn(n,t,a),lo(n,t,a))}};function Gm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,s)||!to(u,f):!0}function Vm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){fl(t)}function km(t){console.error(t)}function Wm(t){fl(t)}function Ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function qm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(t,n)},a}function Ym(t){return t=Da(t),t.tag=3,t}function jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){qm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,s),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Fy(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Qr(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?ql():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),zf(t,s,u)),!1;case 22:return a.flags|=65536,s===Sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),zf(t,s,u)),!1}throw Error(r(435,a.tag))}return zf(t,s,u),ql(),!1}if(Te)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Cu&&(t=Error(r(422),{cause:s}),io(di(t,a)))):(s!==Cu&&(n=Error(r(423),{cause:s}),io(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=di(s,a),u=uf(t.stateNode,s,u),Fu(t,u),sn!==4&&(sn=2)),!1;var f=Error(r(520),{cause:s});if(f=di(f,a),Eo===null?Eo=[f]:Eo.push(f),sn!==4&&(sn=2),n===null)return!0;s=di(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,s,t),Fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),jm(u,t,a,s),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(r(461)),dn=!1;function Un(t,n,a,s){n.child=t===null?Jp(n,null,a,s):_r(n,t.child,a,s)}function Zm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return dr(n),s=Wu(t,n,a,v,f,u),T=qu(),t!==null&&!dn?(Yu(t,n,u),na(t,n,u)):(Te&&T&&Au(n),n.flags|=1,Un(t,n,s,u),n.child)}function Km(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qm(t,n,f,s,u)):(t=ml(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,s)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Ki(f,s),t.ref=n.ref,t.return=n,n.child=t}function Qm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(to(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,yf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,na(t,n,u)}return hf(t,n,a,s,u)}function Jm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return $m(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,f!==null?f.cachePool:null),f!==null?em(n,f):Gu(),nm(n);else return s=n.lanes=536870912,$m(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(yl(n,f.cachePool),em(n,f),Na(),n.memoizedState=null):(t!==null&&yl(n,null),Gu(),Na());return Un(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(t,n,a,s,u){var f=zu();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&yl(n,null),Gu(),nm(n),t!==null&&Qr(t,n,s,!0),n.childLanes=u,null}function zl(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return _r(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,ai(n),n.memoizedState=null,t}function Hy(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Te){if(s.mode==="hidden")return t=zl(n,s),n.lanes=536870912,go(null,t);if(Xu(n),(t=Ke)?(t=h0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,wn=n,Ke=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return zl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Qr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(s=qe,s!==null&&(v=an(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cr(t,v),Qn(s,t,v),ff;ql(),n=tg(t,n,a)}else t=f.treeContext,Ke=vi(v.nextSibling),wn=n,Te=!0,Aa=null,gi=!1,t!==null&&Hp(n,t),n=zl(n,s),n.flags|=4096;return n}return t=Ki(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,s,u){return dr(n),a=Wu(t,n,a,s,void 0,u),s=qu(),t!==null&&!dn?(Yu(t,n,u),na(t,n,u)):(Te&&s&&Au(n),n.flags|=1,Un(t,n,a,u),n.child)}function eg(t,n,a,s,u,f){return dr(n),n.updateQueue=null,a=am(n,s,a,u),im(t),s=qu(),t!==null&&!dn?(Yu(t,n,f),na(t,n,f)):(Te&&s&&Au(n),n.flags|=1,Un(t,n,a,f),n.child)}function ng(t,n,a,s,u){if(dr(n),n.stateNode===null){var f=Yr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Dn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Dn(v):Yr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(lf(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&cf.enqueueReplaceState(f,f.state,null),uo(n,s,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,I=yr(a,T);f.props=I;var tt=f.context,ht=a.contextType;v=Yr,typeof ht=="object"&&ht!==null&&(v=Dn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||tt!==v)&&Vm(n,f,s,v),wa=!1;var it=n.memoizedState;f.state=it,uo(n,s,f,u),co(),tt=n.memoizedState,T||it!==tt||wa?(typeof _t=="function"&&(lf(n,a,_t,s),tt=n.memoizedState),(I=wa||Gm(n,a,I,s,it,tt,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=v,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Iu(t,n),v=n.memoizedProps,ht=yr(a,v),f.props=ht,_t=n.pendingProps,it=f.context,tt=a.contextType,I=Yr,typeof tt=="object"&&tt!==null&&(I=Dn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||it!==I)&&Vm(n,f,s,I),wa=!1,it=n.memoizedState,f.state=it,uo(n,s,f,u),co();var lt=n.memoizedState;v!==_t||it!==lt||wa||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof T=="function"&&(lf(n,a,T,s),lt=n.memoizedState),(ht=wa||Gm(n,a,ht,s,it,lt,I)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=I,s=ht):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=_r(n,t.child,null,u),n.child=_r(n,null,a,u)):Un(t,n,a,u),n.memoizedState=f.state,t=n.child):t=na(t,n,u),t}function ig(t,n,a,s){return fr(),n.flags|=256,Un(t,n,a,s),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:qp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function ag(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Te){if(u?La(n):Na(),(t=Ke)?(t=h0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ba!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,wn=n,Ke=null)):t=null,t===null)throw Ra(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Na(),u=n.mode,T=Bl({mode:"hidden",children:T},u),s=ur(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=pf(a),s.childLanes=mf(t,v,a),n.memoizedState=df,go(null,s)):(La(n),gf(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),T=s.fallback,u=n.mode,s=Bl({mode:"visible",children:s.children},u),T=ur(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,_r(n,t.child,null,a),s=n.child,s.memoizedState=pf(a),s.childLanes=mf(t,v,a),n.memoizedState=df,n=go(null,s));else if(La(n),Qf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var tt=v.dgst;v=tt,s=Error(r(419)),s.stack="",s.digest=v,io({value:s,source:null,stack:null}),n=_f(t,n,a)}else if(dn||Qr(t,n,a,!1),v=(a&t.childLanes)!==0,dn||v){if(v=qe,v!==null&&(s=an(v,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,cr(t,s),Qn(v,t,s),ff;Kf(T)||ql(),n=_f(t,n,a)}else Kf(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Ke=vi(T.nextSibling),wn=n,Te=!0,Aa=null,gi=!1,t!==null&&Hp(n,t),n=gf(n,s.children),n.flags|=4096);return n}return u?(Na(),T=s.fallback,u=n.mode,I=t.child,tt=I.sibling,s=Ki(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,tt!==null?T=Ki(tt,T):(T=ur(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,go(null,s),s=n.child,T=t.child.memoizedState,T===null?T=pf(a):(u=T.cachePool,u!==null?(I=fn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=qp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=mf(t,v,a),n.memoizedState=df,go(t.child,s)):(La(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ni(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return _r(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Uu(t.return,n,a)}function vf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function sg(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=cn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,St(cn,v),Un(t,n,s,a),s=Te?no:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,f,s);break;case"together":vf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function Gy(t,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),Ca(n,fn,t.memoizedState.cache),fr();break;case 27:case 5:Xt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(t,n,a):(La(n),t=na(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Qr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return sg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(cn,cn.current),s)break;return null;case 22:return n.lanes=0,Jm(t,n,a,n.pendingProps);case 24:Ca(n,fn,t.memoizedState.cache)}return na(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return dn=!1,Gy(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Te&&(n.flags&1048576)!==0&&Fp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Eu(t)?(s=yr(t,s),n.tag=1,n=ng(null,n,t,s,a)):(n.tag=0,n=hf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Zm(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=Km(null,n,t,s,a);break t}}throw n=vt(t)||t,Error(r(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=yr(s,n.pendingProps),ng(t,n,s,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(t,n),uo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ca(n,fn,s),s!==f.cache&&Lu(n,[fn],a,!0),co(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ig(t,n,s,a);break t}else if(s!==u){u=di(Error(r(424)),n),io(u),n=ig(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ke=vi(t.firstChild),wn=n,Te=!0,Aa=null,gi=!0,a=Jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),s===u){n=na(t,n,a);break t}Un(t,n,s,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=v0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,t=n.pendingProps,s=$l(nt.current).createElement(a),s[Ze]=n,s[vn]=t,Ln(s,a,t),xt(s),n.stateNode=s):n.memoizedState=v0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&Te&&(s=n.stateNode=m0(n.type,n.pendingProps,nt.current),wn=n,gi=!0,u=Ke,Ga(n.type)?(Jf=u,Ke=vi(s.firstChild)):Ke=u),Un(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Te&&((u=s=Ke)&&(s=_x(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,wn=n,Ke=vi(s.firstChild),gi=!1,u=!0):u=!1),u||Ra(n)),Xt(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Yf(u,f)?s=null:v!==null&&Yf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,Ly,null,null,a),Uo._currentValue=u),Pl(t,n),Un(t,n,s,a),n.child;case 6:return t===null&&Te&&((t=a=Ke)&&(a=vx(a,n.pendingProps,gi),a!==null?(n.stateNode=a,wn=n,Ke=null,t=!0):t=!1),t||Ra(n)),null;case 13:return ag(t,n,a);case 4:return Lt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=_r(n,null,s,a):Un(t,n,s,a),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,a);case 7:return Un(t,n,n.pendingProps,a),n.child;case 8:return Un(t,n,n.pendingProps.children,a),n.child;case 12:return Un(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),Un(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,dr(n),u=Dn(u),s=s(u),n.flags|=1,Un(t,n,s,a),n.child;case 14:return Km(t,n,n.type,n.pendingProps,a);case 15:return Qm(t,n,n.type,n.pendingProps,a);case 19:return sg(t,n,a);case 31:return Hy(t,n,a);case 22:return Jm(t,n,a,n.pendingProps);case 24:return dr(n),s=Dn(fn),t===null?(u=zu(),u===null&&(u=qe,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Bu(n),Ca(n,fn,u)):((t.lanes&a)!==0&&(Iu(t,n),uo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,fn,s)):(s=f.cache,Ca(n,fn,s),s!==u.cache&&Lu(n,[fn],a,!0))),Un(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(t){t.flags|=4}function xf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Og())t.flags|=8192;else throw gr=Sl,Pu}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n))if(Og())t.flags|=8192;else throw gr=Sl,Pu}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ae():536870912,t.lanes|=n,cs|=n)}function _o(t,n){if(!Te)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Vy(t,n,a){var s=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),$i(fn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Kr(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(Qe(n),lg(n,f)):(Qe(n),xf(n,u,null,s,a))):f?f!==t.memoizedState?(ia(n),Qe(n),lg(n,f)):(Qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ia(n),Qe(n),xf(n,u,t,s,a)),null;case 27:if(fe(n),a=nt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}t=At.current,Kr(n)?Gp(n):(t=m0(u,s,a),n.stateNode=t,ia(n))}return Qe(n),null;case 5:if(fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=At.current,Kr(n))Gp(n);else{var v=$l(nt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[Ze]=n,f[vn]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Ln(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ia(n)}}return Qe(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ia(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,Kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=wn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ze]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||a0(t.nodeValue,a)),t||Ra(n,!0)}else t=$l(t).createTextNode(s),t[Ze]=n,n.stateNode=t}return Qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ze]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ze]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),Qe(n),null);case 4:return Ft(),t===null&&Vf(n.stateNode.containerInfo),Qe(n),null;case 10:return $i(n.type),Qe(n),null;case 19:if(at(cn),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)_o(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=bl(t),f!==null){for(n.flags|=128,_o(s,!1),t=f.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Pp(a,t),a=a.sibling;return St(cn,cn.current&1|2),Te&&Qi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Xl&&(n.flags|=128,u=!0,_o(s,!1),n.lanes=4194304)}else{if(!u)if(t=bl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Te)return Qe(n),null}else 2*E()-s.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,_o(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=cn.current,St(cn,u?a&1|2:a&1),Te&&Qi(n,s.treeForkCount),t):(Qe(n),null);case 22:case 23:return ai(n),Vu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(fn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Xy(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(fn),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fe(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(cn),null;case 4:return Ft(),null;case 10:return $i(n.type),null;case 22:case 23:return ai(n),Vu(),t!==null&&at(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(fn),null;case 25:return null;default:return null}}function cg(t,n){switch(Ru(n),n.tag){case 3:$i(fn),Ft();break;case 26:case 27:case 5:fe(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:at(cn);break;case 10:$i(n.type);break;case 22:case 23:ai(n),Vu(),t!==null&&at(pr);break;case 24:$i(fn)}}function vo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Be(n,n.return,T)}}function Oa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var I=a,tt=T;try{tt()}catch(ht){Be(u,I,ht)}}}s=s.next}while(s!==f)}}catch(ht){Be(n,n.return,ht)}}function ug(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(s){Be(t,t.return,s)}}}function fg(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function yo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Be(t,n,u)}}function Fi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function Sf(t,n,a){try{var s=t.stateNode;fx(s,t.type,a,n),s[vn]=n}catch(u){Be(t,t.return,u)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Fl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,s,a),n[Ze]=t,n[vn]=a}catch(f){Be(t,t.return,f)}}var aa=!1,pn=!1,Tf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function ky(t,n){if(t=t.containerInfo,Wf=sc,t=Rp(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,I=-1,tt=0,ht=0,_t=t,it=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(T=v+u),_t!==f||s!==0&&_t.nodeType!==3||(I=v+s),_t.nodeType===3&&(v+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)it=_t,_t=lt;for(;;){if(_t===t)break e;if(it===a&&++tt===u&&(T=v),it===f&&++ht===s&&(I=v),(lt=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=lt}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},sc=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Wt=yr(a.type,u);t=s.getSnapshotBeforeUpdate(Wt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Be(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function gg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&vo(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Be(a,a.return,v)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}s&64&&ug(a),s&512&&yo(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&s&4&&pg(a);case 26:case 5:sa(t,a),n===null&&s&4&&hg(a),s&512&&yo(a,a.return);break;case 12:sa(t,a);break;case 31:sa(t,a),s&4&&yg(t,a);break;case 13:sa(t,a),s&4&&xg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$y.bind(null,a),yx(t,a))));break;case 22:if(s=a.memoizedState!==null||aa,!s){n=n!==null&&n.memoizedState!==null||pn,u=aa;var f=pn;aa=s,(pn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),aa=u,pn=f}break;case 30:break;default:sa(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&A(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Yn=!1;function ra(t,n,a){for(a=a.child;a!==null;)vg(t,n,a),a=a.sibling}function vg(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:pn||Fi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Fi(a,n);var s=$e,u=Yn;Ga(a.type)&&($e=a.stateNode,Yn=!1),ra(t,n,a),Co(a.stateNode),$e=s,Yn=u;break;case 5:pn||Fi(a,n);case 6:if(s=$e,u=Yn,$e=null,ra(t,n,a),$e=s,Yn=u,$e!==null)if(Yn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:$e!==null&&(Yn?(t=$e,u0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_s(t)):u0($e,a.stateNode));break;case 4:s=$e,u=Yn,$e=a.stateNode.containerInfo,Yn=!0,ra(t,n,a),$e=s,Yn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),pn||Oa(4,a,n),ra(t,n,a);break;case 1:pn||(Fi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&fg(a,n,s)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:pn=(s=pn)||a.memoizedState!==null,ra(t,n,a),pn=s;break;default:ra(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(a){Be(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(a){Be(n,n.return,a)}}function Wy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mg),n;default:throw Error(r(435,t.tag))}}function Hl(t,n){var a=Wy(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=tx.bind(null,t,s);s.then(u,u)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){$e=T.stateNode,Yn=!1;break t}break;case 5:$e=T.stateNode,Yn=!1;break t;case 3:case 4:$e=T.stateNode.containerInfo,Yn=!0;break t}T=T.return}if($e===null)throw Error(r(160));vg(f,v,u),$e=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var Ai=null;function Sg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Zn(t),s&4&&(Oa(3,t,t.return),vo(3,t),Oa(5,t,t.return));break;case 1:jn(n,t),Zn(t),s&512&&(pn||a===null||Fi(a,a.return)),s&64&&aa&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ai;if(jn(n,t),Zn(t),s&512&&(pn||a===null||Fi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ti]||f[Ze]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,s,a),f[Ze]=t,xt(f),s=f;break t;case"link":var v=S0("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(s),Ln(f,s,a),u.head.appendChild(f);break;case"meta":if(v=S0("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(s),Ln(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ze]=t,xt(f),s=f}t.stateNode=s}else M0(u,t.type,t.stateNode);else t.stateNode=x0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?M0(u,t.type,t.stateNode):x0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Zn(t),s&512&&(pn||a===null||Fi(a,a.return)),a!==null&&s&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Zn(t),s&512&&(pn||a===null||Fi(a,a.return)),t.flags&32){u=t.stateNode;try{Hr(u,"")}catch(Wt){Be(t,t.return,Wt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Tf=!0);break;case 6:if(jn(n,t),Zn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Wt){Be(t,t.return,Wt)}}break;case 3:if(nc=null,u=Ai,Ai=tc(n.containerInfo),jn(n,t),Ai=u,Zn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(Wt){Be(t,t.return,Wt)}Tf&&(Tf=!1,Mg(t));break;case 4:s=Ai,Ai=tc(t.stateNode.containerInfo),jn(n,t),Zn(t),Ai=s;break;case 12:jn(n,t),Zn(t);break;case 31:jn(n,t),Zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Hl(t,s)));break;case 13:jn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Hl(t,s)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=aa,ht=pn;if(aa=tt||u,pn=ht||I,jn(n,t),pn=ht,aa=tt,Zn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||aa||pn||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Wt){Be(I,I.return,Wt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Wt){Be(I,I.return,Wt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?f0(lt,!0):f0(I.stateNode,!1)}catch(Wt){Be(I,I.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Hl(t,a))));break;case 19:jn(n,t),Zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Hl(t,s)));break;case 30:break;case 21:break;default:jn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(dg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Fl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Hr(v,""),a.flags&=-33);var T=Mf(t);Fl(t,T,v);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Mf(t);Ef(t,tt,I);break;default:throw Error(r(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xr(n);break;case 1:Fi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),xr(n);break;case 27:Co(n.stateNode);case 26:case 5:Fi(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),vo(4,f);break;case 1:if(oa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Be(s,s.return,tt)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)$p(I[u],T)}catch(tt){Be(s,s.return,tt)}}a&&v&64&&ug(f),yo(f,f.return);break;case 27:pg(f);case 26:case 5:oa(u,f,a),a&&s===null&&v&4&&hg(f),yo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&yg(u,f);break;case 13:oa(u,f,a),a&&v&4&&xg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),yo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ri(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,s),n=n.sibling}function Eg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,s),u&2048&&vo(9,n);break;case 1:Ri(t,n,a,s);break;case 3:Ri(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ri(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else Ri(t,n,a,s);break;case 31:Ri(t,n,a,s);break;case 13:Ri(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,s):xo(t,n):f._visibility&2?Ri(t,n,a,s):(f._visibility|=2,ss(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(v,n);break;case 24:Ri(t,n,a,s),u&2048&&Af(n.alternate,n);break;default:Ri(t,n,a,s)}}function ss(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,I=s,tt=v.flags;switch(v.tag){case 0:case 11:case 15:ss(f,v,T,I,u),vo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?ss(f,v,T,I,u):xo(f,v):(ht._visibility|=2,ss(f,v,T,I,u)),u&&tt&2048&&bf(v.alternate,v);break;case 24:ss(f,v,T,I,u),u&&tt&2048&&Af(v.alternate,v);break;default:ss(f,v,T,I,u)}n=n.sibling}}function xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:xo(a,s),u&2048&&bf(s.alternate,s);break;case 24:xo(a,s),u&2048&&Af(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var So=8192;function os(t,n,a){if(t.subtreeFlags&So)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:os(t,n,a),t.flags&So&&t.memoizedState!==null&&Ux(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:os(t,n,a);break;case 3:case 4:var s=Ai;Ai=tc(t.stateNode.containerInfo),os(t,n,a),Ai=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=So,So=16777216,os(t,n,a),So=s):os(t,n,a));break;default:os(t,n,a)}}function bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Rg(s,t)}bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Gl(t)):Mo(t);break;default:Mo(t)}}function Gl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Rg(s,t)}bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}t=t.sibling}}function Rg(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ao(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else t:for(a=t;bn!==null;){s=bn;var u=s.sibling,f=s.return;if(_g(s),s===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var qy={getCacheForType:function(t){var n=Dn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(fn).controller.signal}},Yy=typeof WeakMap=="function"?WeakMap:Map,Le=0,qe=null,ye=null,Me=0,Pe=0,ri=null,za=!1,ls=!1,Rf=!1,la=0,sn=0,Pa=0,Sr=0,Cf=0,si=0,cs=0,Eo=null,Kn=null,wf=!1,Vl=0,Cg=0,Xl=1/0,kl=null,Ba=null,xn=0,Ia=null,us=null,ca=0,Df=0,Uf=null,wg=null,To=0,Lf=null;function oi(){return(Le&2)!==0&&Me!==0?Me&-Me:P.T!==null?If():ti()}function Dg(){if(si===0)if((Me&536870912)===0||Te){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),si=t}else si=536870912;return t=ii.current,t!==null&&(t.flags|=32),si}function Qn(t,n,a){(t===qe&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(fs(t,0),Fa(t,Me,si,!1)),je(t,a),((Le&2)===0||t!==qe)&&(t===qe&&((Le&2)===0&&(Sr|=a),sn===4&&Fa(t,Me,si,!1)),Hi(t))}function Ug(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Nt(t,n),u=s?Ky(t,n):Of(t,n,!0),f=s;do{if(u===0){ls&&!s&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!jy(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;u=Eo;var I=T.current.memoizedState.isDehydrated;if(I&&(fs(T,v).flags|=256),v=Of(T,v,!1),v!==2){if(Rf&&!I){T.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break t}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){fs(t,0),Fa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,si,!za);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vl+300-E(),10<u)){if(Fa(s,n,si,!za),pt(s,0,!0)!==0)break t;ca=n,s.timeoutHandle=l0(Lg.bind(null,s,a,Kn,kl,wf,n,si,Sr,cs,za,f,"Throttled",-0,0),u);break t}Lg(s,a,Kn,kl,wf,n,si,Sr,cs,za,f,null,-0,0)}}break}while(!0);Hi(t)}function Lg(t,n,a,s,u,f,v,T,I,tt,ht,_t,it,lt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},Tg(n,f,_t);var Wt=(f&62914560)===f?Vl-E():(f&4194048)===f?Cg-E():0;if(Wt=Lx(_t,Wt),Wt!==null){ca=f,t.cancelPendingCommit=Wt(Hg.bind(null,t,n,f,a,s,u,v,T,I,ht,_t,null,it,lt)),Fa(t,f,v,!tt);return}}Hg(t,n,f,a,s,u,v,T,I)}function jy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,s){n&=~Cf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&kn(t,a,n)}function Wl(){return(Le&6)===0?(bo(0),!1):!0}function Nf(){if(ye!==null){if(Pe===0)var t=ye.return;else t=ye,Ji=hr=null,ju(t),es=null,so=0,t=ye;for(;t!==null;)cg(t.alternate,t),t=t.return;ye=null}}function fs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Nf(),qe=t,ye=a=Ki(t.current,null),Me=n,Pe=0,ri=null,za=!1,ls=Nt(t,n),Rf=!1,cs=si=Cf=Sr=Pa=sn=0,Kn=Eo=null,wf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Bt(s),f=1<<u;n|=t[u],s&=~f}return la=n,hl(),a}function Ng(t,n){he=null,P.H=mo,n===ts||n===xl?(n=Zp(),Pe=3):n===Pu?(n=Zp(),Pe=4):Pe=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,ye===null&&(sn=1,Ol(t,di(n,t.current)))}function Og(){var t=ii.current;return t===null?!0:(Me&4194048)===Me?_i===null:(Me&62914560)===Me||(Me&536870912)!==0?t===_i:!1}function zg(){var t=P.H;return P.H=mo,t===null?mo:t}function Pg(){var t=P.A;return P.A=qy,t}function ql(){sn=4,za||(Me&4194048)!==Me&&ii.current!==null||(ls=!0),(Pa&134217727)===0&&(Sr&134217727)===0||qe===null||Fa(qe,Me,si,!1)}function Of(t,n,a){var s=Le;Le|=2;var u=zg(),f=Pg();(qe!==t||Me!==n)&&(kl=null,fs(t,n)),n=!1;var v=sn;t:do try{if(Pe!==0&&ye!==null){var T=ye,I=ri;switch(Pe){case 8:Nf(),v=6;break t;case 3:case 2:case 9:case 6:ii.current===null&&(n=!0);var tt=Pe;if(Pe=0,ri=null,hs(t,T,I,tt),a&&ls){v=0;break t}break;default:tt=Pe,Pe=0,ri=null,hs(t,T,I,tt)}}Zy(),v=sn;break}catch(ht){Ng(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ji=hr=null,Le=s,P.H=u,P.A=f,ye===null&&(qe=null,Me=0,hl()),v}function Zy(){for(;ye!==null;)Bg(ye)}function Ky(t,n){var a=Le;Le|=2;var s=zg(),u=Pg();qe!==t||Me!==n?(kl=null,Xl=E()+500,fs(t,n)):ls=Nt(t,n);t:do try{if(Pe!==0&&ye!==null){n=ye;var f=ri;e:switch(Pe){case 1:Pe=0,ri=null,hs(t,n,f,1);break;case 2:case 9:if(Yp(f)){Pe=0,ri=null,Ig(n);break}n=function(){Pe!==2&&Pe!==9||qe!==t||(Pe=7),Hi(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Yp(f)?(Pe=0,ri=null,Ig(n)):(Pe=0,ri=null,hs(t,n,f,7));break;case 5:var v=null;switch(ye.tag){case 26:v=ye.memoizedState;case 5:case 27:var T=ye;if(v?E0(v):T.stateNode.complete){Pe=0,ri=null;var I=T.sibling;if(I!==null)ye=I;else{var tt=T.return;tt!==null?(ye=tt,Yl(tt)):ye=null}break e}}Pe=0,ri=null,hs(t,n,f,5);break;case 6:Pe=0,ri=null,hs(t,n,f,6);break;case 8:Nf(),sn=6;break t;default:throw Error(r(462))}}Qy();break}catch(ht){Ng(t,ht)}while(!0);return Ji=hr=null,P.H=s,P.A=u,Le=a,ye!==null?0:(qe=null,Me=0,hl(),sn)}function Qy(){for(;ye!==null&&!Ie();)Bg(ye)}function Bg(t){var n=og(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Yl(t):ye=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:ju(n);default:cg(a,n),n=ye=Pp(n,la),n=og(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Yl(t):ye=n}function hs(t,n,a,s){Ji=hr=null,ju(n),es=null,so=0;var u=n.return;try{if(Fy(t,u,n,a,Me)){sn=1,Ol(t,di(a,t.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;sn=1,Ol(t,di(a,t.current)),ye=null;return}n.flags&32768?(Te||s===1?t=!0:ls||(Me&536870912)!==0?t=!1:(za=t=!0,(s===2||s===9||s===3||s===6)&&(s=ii.current,s!==null&&s.tag===13&&(s.flags|=16384))),Fg(n,t)):Yl(n)}function Yl(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,za);return}t=n.return;var a=Vy(n.alternate,n,la);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);sn===0&&(sn=5)}function Fg(t,n){do{var a=Xy(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);sn=6,ye=null}function Hg(t,n,a,s,u,f,v,T,I){t.cancelPendingCommit=null;do jl();while(xn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,on(t,a,f,v,T,I),t===qe&&(ye=qe=null,Me=0),us=n,Ia=t,ca=a,Df=f,Uf=u,wg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ex(st,function(){return Wg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=j.p,j.p=2,v=Le,Le|=4;try{ky(t,n,a)}finally{Le=v,j.p=u,P.T=s}}xn=1,Gg(),Vg(),Xg()}}function Gg(){if(xn===1){xn=0;var t=Ia,n=us,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Le;Le|=4;try{Sg(n,t);var f=qf,v=Rp(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Ap(T.ownerDocument.documentElement,T)){if(I!==null&&gu(T)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Wt=T.textContent.length,ie=Math.min(I.start,Wt),Ge=I.end===void 0?ie:Math.min(I.end,Wt);!lt.extend&&ie>Ge&&(v=Ge,Ge=ie,ie=v);var Q=bp(T,ie),X=bp(T,Ge);if(Q&&X&&(lt.rangeCount!==1||lt.anchorNode!==Q.node||lt.anchorOffset!==Q.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var $=_t.createRange();$.setStart(Q.node,Q.offset),lt.removeAllRanges(),ie>Ge?(lt.addRange($),lt.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),lt.addRange($))}}}}for(_t=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}sc=!!Wf,qf=Wf=null}finally{Le=u,j.p=s,P.T=a}}t.current=n,xn=2}}function Vg(){if(xn===2){xn=0;var t=Ia,n=us,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var u=Le;Le|=4;try{gg(t,n.alternate,n)}finally{Le=u,j.p=s,P.T=a}}xn=3}}function Xg(){if(xn===4||xn===3){xn=0,L();var t=Ia,n=us,a=ca,s=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,us=Ia=null,kg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),_n(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{P.T=n,j.p=u}}(ca&3)!==0&&jl(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?To++:(To=0,Lf=t):To=0,bo(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function jl(){return Gg(),Vg(),Xg(),Wg()}function Wg(){if(xn!==5)return!1;var t=Ia,n=Df;Df=0;var a=_n(ca),s=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=Uf,Uf=null;var f=Ia,v=ca;if(xn=0,us=Ia=null,ca=0,(Le&6)!==0)throw Error(r(331));var T=Le;if(Le|=4,Ag(f.current),Eg(f,f.current,v,a),Le=T,bo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{j.p=u,P.T=s,kg(t,n)}}function qg(t,n,a){n=di(a,n),n=uf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(je(t,2),Hi(t))}function Be(t,n,a){if(t.tag===3)qg(t,t,a);else for(;n!==null;){if(n.tag===3){qg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){t=di(a,t),a=Ym(2),s=Ua(n,a,2),s!==null&&(jm(a,s,n,t),je(s,2),Hi(s));break}}n=n.return}}function zf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Yy;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=Jy.bind(null,t,n,a),n.then(t,t))}function Jy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Me&a)===a&&(sn===4||sn===3&&(Me&62914560)===Me&&300>E()-Vl?(Le&2)===0&&fs(t,0):Cf|=a,cs===Me&&(cs=0)),Hi(t)}function Yg(t,n){n===0&&(n=ae()),t=cr(t,n),t!==null&&(je(t,n),Hi(t))}function $y(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(t,a)}function tx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Yg(t,a)}function ex(t,n){return le(t,n)}var Zl=null,ds=null,Pf=!1,Kl=!1,Bf=!1,Ha=0;function Hi(t){t!==ds&&t.next===null&&(ds===null?Zl=ds=t:ds=ds.next=t),Kl=!0,Pf||(Pf=!0,ix())}function bo(t,n){if(!Bf&&Kl){Bf=!0;do for(var a=!1,s=Zl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qg(s,f))}else f=Me,f=pt(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Nt(s,f)||(a=!0,Qg(s,f));s=s.next}while(a);Bf=!1}}function nx(){jg()}function jg(){Kl=Pf=!1;var t=0;Ha!==0&&dx()&&(t=Ha);for(var n=E(),a=null,s=Zl;s!==null;){var u=s.next,f=Zg(s,n);f===0?(s.next=null,a===null?Zl=u:a.next=u,u===null&&(ds=a)):(a=s,(t!==0||(f&3)!==0)&&(Kl=!0)),s=u}xn!==0&&xn!==5||bo(t),Ha!==0&&(Ha=0)}function Zg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Bt(f),T=1<<v,I=u[v];I===-1?((T&a)===0||(T&s)!==0)&&(u[v]=Qt(T,n)):I<=n&&(t.expiredLanes|=T),f&=~T}if(n=qe,a=Me,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Re(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Re(s),_n(a)){case 2:case 8:a=ft;break;case 32:a=st;break;case 268435456:a=Rt;break;default:a=st}return s=Kg.bind(null,t),a=le(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Re(s),t.callbackPriority=2,t.callbackNode=null,2}function Kg(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(jl()&&t.callbackNode!==a)return null;var s=Me;return s=pt(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ug(t,s,n),Zg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Kg.bind(null,t):null)}function Qg(t,n){if(jl())return null;Ug(t,n,!0)}function ix(){mx(function(){(Le&6)!==0?le(J,nx):jg()})}function If(){if(Ha===0){var t=Jr;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Ha=t}return Ha}function Jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function $g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ax(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jg((u[vn]||null).action),v=s.submitter;v&&(n=(n=v[vn]||null)?Jg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new ll("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var I=v?$g(u,v):new FormData(u);af(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=v?$g(u,v):new FormData(u),af(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Ff=0;Ff<xu.length;Ff++){var Hf=xu[Ff],rx=Hf.toLowerCase(),sx=Hf[0].toUpperCase()+Hf.slice(1);bi(rx,"on"+sx)}bi(Dp,"onAnimationEnd"),bi(Up,"onAnimationIteration"),bi(Lp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(My,"onTransitionRun"),bi(Ey,"onTransitionStart"),bi(Ty,"onTransitionCancel"),bi(Np,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),It("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),It("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),It("onBeforeInput",["compositionend","keypress","textInput","paste"]),It("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),It("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],I=T.instance,tt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){fl(ht)}u.currentTarget=null,f=I}else for(v=0;v<s.length;v++){if(T=s[v],I=T.instance,tt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=tt;try{f(u)}catch(ht){fl(ht)}u.currentTarget=null,f=I}}}}function xe(t,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var s=t+"__bubble";a.has(s)||(e0(n,t,2,!1),a.add(s))}function Gf(t,n,a){var s=0;n&&(s|=4),e0(a,t,s,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Ql]){t[Ql]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(ox.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Gf("selectionchange",!1,n))}}function e0(t,n,a,s){switch(D0(n)){case 2:var u=zx;break;case 8:u=Px;break;default:u=ih}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Y(T),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){s=f=v;continue t}T=T.parentNode}}s=s.return}sp(function(){var tt=f,ht=ru(a),_t=[];t:{var it=Op.get(t);if(it!==void 0){var lt=ll,Wt=t;switch(t){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":lt=ty;break;case"focusin":Wt="focus",lt=fu;break;case"focusout":Wt="blur",lt=fu;break;case"beforeblur":case"afterblur":lt=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=iy;break;case Dp:case Up:case Lp:lt=Wv;break;case Np:lt=ry;break;case"scroll":case"scrollend":lt=Hv;break;case"wheel":lt=oy;break;case"copy":case"cut":case"paste":lt=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=fp;break;case"toggle":case"beforetoggle":lt=cy}var ie=(n&4)!==0,Ge=!ie&&(t==="scroll"||t==="scrollend"),Q=ie?it!==null?it+"Capture":null:it;ie=[];for(var X=tt,$;X!==null;){var mt=X;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Q===null||(mt=Ys(X,Q),mt!=null&&ie.push(Ro(X,mt,$))),Ge)break;X=X.return}0<ie.length&&(it=new lt(it,Wt,null,a,ht),_t.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",lt=t==="mouseout"||t==="pointerout",it&&a!==au&&(Wt=a.relatedTarget||a.fromElement)&&(Y(Wt)||Wt[Oi]))break t;if((lt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=tt,Wt=Wt?Y(Wt):null,Wt!==null&&(Ge=c(Wt),ie=Wt.tag,Wt!==Ge||ie!==5&&ie!==27&&ie!==6)&&(Wt=null)):(lt=null,Wt=tt),lt!==Wt)){if(ie=cp,mt="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ie=fp,mt="onPointerLeave",Q="onPointerEnter",X="pointer"),Ge=lt==null?it:ot(lt),$=Wt==null?it:ot(Wt),it=new ie(mt,X+"leave",lt,a,ht),it.target=Ge,it.relatedTarget=$,mt=null,Y(ht)===tt&&(ie=new ie(Q,X+"enter",Wt,a,ht),ie.target=$,ie.relatedTarget=Ge,mt=ie),Ge=mt,lt&&Wt)e:{for(ie=lx,Q=lt,X=Wt,$=0,mt=Q;mt;mt=ie(mt))$++;mt=0;for(var ee=X;ee;ee=ie(ee))mt++;for(;0<$-mt;)Q=ie(Q),$--;for(;0<mt-$;)X=ie(X),mt--;for(;$--;){if(Q===X||X!==null&&Q===X.alternate){ie=Q;break e}Q=ie(Q),X=ie(X)}ie=null}else ie=null;lt!==null&&n0(_t,it,lt,ie,!1),Wt!==null&&Ge!==null&&n0(_t,Ge,Wt,ie,!0)}}t:{if(it=tt?ot(tt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var we=yp;else if(_p(it))if(xp)we=yy;else{we=_y;var Kt=gy}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&iu(tt.elementType)&&(we=yp):we=vy;if(we&&(we=we(t,tt))){vp(_t,we,a,ht);break t}Kt&&Kt(t,it,tt),t==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(Kt=tt?ot(tt):window,t){case"focusin":(_p(Kt)||Kt.contentEditable==="true")&&(kr=Kt,_u=tt,eo=null);break;case"focusout":eo=_u=kr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Cp(_t,a,ht);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Cp(_t,a,ht)}var de;if(du)t:{switch(t){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Xr?mp(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(hp&&a.locale!=="ko"&&(Xr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Xr&&(de=op()):(Ta=ht,lu="value"in Ta?Ta.value:Ta.textContent,Xr=!0)),Kt=Jl(tt,Ee),0<Kt.length&&(Ee=new up(Ee,t,null,a,ht),_t.push({event:Ee,listeners:Kt}),de?Ee.data=de:(de=gp(a),de!==null&&(Ee.data=de)))),(de=fy?hy(t,a):dy(t,a))&&(Ee=Jl(tt,"onBeforeInput"),0<Ee.length&&(Kt=new up("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Kt,listeners:Ee}),Kt.data=de)),ax(_t,t,tt,a,ht)}t0(_t,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Jl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ys(t,a),u!=null&&s.unshift(Ro(t,u,f)),u=Ys(t,n),u!=null&&s.push(Ro(t,u,f))),t.tag===3)return s;t=t.return}return[]}function lx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,I=T.alternate,tt=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||tt===null||(I=tt,u?(tt=Ys(a,f),tt!=null&&v.unshift(Ro(a,tt,I))):u||(tt=Ys(a,f),tt!=null&&v.push(Ro(a,tt,I)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(ux,"")}function a0(t,n){return n=i0(n),i0(t)===n}function He(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Hr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Hr(t,""+s);break;case"className":Oe(t,"class",s);break;case"tabIndex":Oe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,s);break;case"style":ap(t,s,f);break;case"data":if(n!=="object"){Oe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=al(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=al(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ji);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),We(t,"popover",s);break;case"xlinkActuate":ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ve(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ve(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ve(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ve(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iv.get(a)||a,We(t,a,s))}}function kf(t,n,a,s,u,f){switch(a){case"style":ap(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Hr(t,s):(typeof s=="number"||typeof s=="bigint")&&Hr(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):We(t,a,s)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,v,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=f=v=u=null,I=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":v=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:He(t,n,s,ht,a,null)}}Fn(t,f,T,I,tt,v,u,!1);return;case"select":xe("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:He(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?ln(t,!!s,n,!1):a!=null&&ln(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:He(t,n,v,T,a,null)}Pi(t,s,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,I,s,a,null));return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Ao.length;s++)xe(Ao[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,tt,s,a,null)}return;default:if(iu(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&kf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&He(t,n,T,s,a,null))}function fx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,I=null,tt=null,ht=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(lt)||He(t,n,lt,null,s,_t)}}for(var it in s){var lt=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(lt!=null||_t!=null))switch(it){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":v=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&He(t,n,it,lt,s,_t)}}On(t,v,T,I,tt,ht,f,u);return;case"select":lt=v=T=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:s.hasOwnProperty(f)||He(t,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==I&&He(t,n,u,f,s,I)}n=T,a=v,s=lt,it!=null?ln(t,!!a,it,!1):!!s!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&He(t,n,v,u,s,f)}Fr(t,it,lt);return;case"option":for(var Wt in a)it=a[Wt],a.hasOwnProperty(Wt)&&it!=null&&!s.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:He(t,n,Wt,null,s,it));for(I in s)it=s[I],lt=a[I],s.hasOwnProperty(I)&&it!==lt&&(it!=null||lt!=null)&&(I==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":He(t,n,I,it,s,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!s.hasOwnProperty(ie)&&He(t,n,ie,null,s,it);for(tt in s)if(it=s[tt],lt=a[tt],s.hasOwnProperty(tt)&&it!==lt&&(it!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:He(t,n,tt,it,s,lt)}return;default:if(iu(n)){for(var Ge in a)it=a[Ge],a.hasOwnProperty(Ge)&&it!==void 0&&!s.hasOwnProperty(Ge)&&kf(t,n,Ge,void 0,s,it);for(ht in s)it=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||it===lt||it===void 0&&lt===void 0||kf(t,n,ht,it,s,lt);return}}for(var Q in a)it=a[Q],a.hasOwnProperty(Q)&&it!=null&&!s.hasOwnProperty(Q)&&He(t,n,Q,null,s,it);for(_t in s)it=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||it===lt||it==null&&lt==null||He(t,n,_t,it,s,lt)}function r0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&r0(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],tt=I.startTime;if(tt>T)break;var ht=I.transferSize,_t=I.initiatorType;ht&&r0(_t)&&(I=I.responseEnd,v+=ht*(I<T?1:(T-tt)/(I-tt)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function s0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function dx(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(gx)}:l0;function gx(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function u0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),_s(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Ti]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Co(t.ownerDocument.body);a=u}while(a);_s(n)}function f0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _x(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ti])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function vx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function h0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function d0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function p0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function m0(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);A(t)}var yi=new Map,g0=new Set;function tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=j.d;j.d={f:xx,r:Sx,D:Mx,C:Ex,L:Tx,m:bx,X:Rx,S:Ax,M:Cx};function xx(){var t=ua.f(),n=Wl();return t||n}function Sx(t){var n=rt(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ua.r(t)}var ps=typeof document>"u"?null:document;function _0(t,n,a){var s=ps;if(s&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g0.has(u)||(g0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Ln(n,"link",t),xt(n),s.head.appendChild(n)))}}function Mx(t){ua.D(t),_0("dns-prefetch",t,null)}function Ex(t,n){ua.C(t,n),_0("preconnect",t,n)}function Tx(t,n,a){ua.L(t,n,a);var s=ps;if(s&&t&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Se(a.imageSizes)+'"]')):u+='[href="'+Se(t)+'"]';var f=u;switch(n){case"style":f=ms(t);break;case"script":f=gs(t)}yi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(wo(f))||n==="script"&&s.querySelector(Do(f))||(n=s.createElement("link"),Ln(n,"link",t),xt(n),s.head.appendChild(n)))}}function bx(t,n){ua.m(t,n);var a=ps;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(s)+'"][href="'+Se(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=gs(t)}if(!yi.has(f)&&(t=g({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}s=a.createElement("link"),Ln(s,"link",t),xt(s),a.head.appendChild(s)}}}function Ax(t,n,a){ua.S(t,n,a);var s=ps;if(s&&t){var u=K(s).hoistableStyles,f=ms(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(wo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&$f(t,a);var I=v=s.createElement("link");xt(I),Ln(I,"link",t),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ec(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function Rx(t,n){ua.X(t,n);var a=ps;if(a&&t){var s=K(a).hoistableScripts,u=gs(t),f=s.get(u);f||(f=a.querySelector(Do(u)),f||(t=g({src:t,async:!0},n),(n=yi.get(u))&&th(t,n),f=a.createElement("script"),xt(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Cx(t,n){ua.M(t,n);var a=ps;if(a&&t){var s=K(a).hoistableScripts,u=gs(t),f=s.get(u);f||(f=a.querySelector(Do(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&th(t,n),f=a.createElement("script"),xt(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function v0(t,n,a,s){var u=(u=nt.current)?tc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ms(a.href),a=K(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ms(a.href);var f=K(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(wo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||wx(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(a),a=K(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ms(t){return'href="'+Se(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function wx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Ln(n,"link",a),xt(n),t.head.appendChild(n))}function gs(t){return'[src="'+Se(t)+'"]'}function Do(t){return"script[async]"+t}function x0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Se(a.href)+'"]');if(s)return n.instance=s,xt(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),xt(s),Ln(s,"style",u),ec(s,a.precedence,t),n.instance=s;case"stylesheet":u=ms(a.href);var f=t.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,xt(f),f;s=y0(a),(u=yi.get(u))&&$f(s,u),f=(t.ownerDocument||t).createElement("link"),xt(f);var v=f;return v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ln(f,"link",s),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=gs(a.src),(u=t.querySelector(Do(f)))?(n.instance=u,xt(u),u):(s=a,(u=yi.get(f))&&(s=g({},a),th(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),xt(u),Ln(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ec(s,a.precedence,t));return n.instance}function ec(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nc=null;function S0(t,n,a){if(nc===null){var s=new Map,u=nc=new Map;u.set(a,s)}else u=nc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ti]||f[Ze]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function M0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Dx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ux(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ms(s.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ic.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xt(f);return}f=n.ownerDocument||n,s=y0(s),(u=yi.get(u))&&$f(s,u),f=f.createElement("link"),xt(f);var v=f;v._p=new Promise(function(T,I){v.onload=T,v.onerror=I}),Ln(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ic.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var eh=0;function Lx(t,n){return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*hx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ac=null;function rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ac=new Map,n.forEach(Nx,t),ac=null,ic.call(t))}function Nx(t,n){if(!(n.state.loading&4)){var a=ac.get(t);if(a)var s=a.get(null);else{a=new Map,ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=ic.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Ox(t,n,a,s,u,f,v,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jt(0),this.hiddenUpdates=Jt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function T0(t,n,a,s,u,f,v,T,I,tt,ht,_t){return t=new Ox(t,n,a,v,I,tt,ht,_t,T),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Nu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Bu(f),t}function b0(t){return t?(t=Yr,t):Yr}function A0(t,n,a,s,u,f){u=b0(u),s.context===null?s.context=u:s.pendingContext=u,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(t,s,n),a!==null&&(Qn(a,t,n),lo(a,t,n))}function R0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nh(t,n){R0(t,n),(t=t.alternate)&&R0(t,n)}function C0(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&Qn(n,t,67108864),nh(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var n=oi();n=gn(n);var a=cr(t,n);a!==null&&Qn(a,t,n),nh(t,n)}}var sc=!0;function zx(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=2,ih(t,n,a,s)}finally{j.p=f,P.T=u}}function Px(t,n,a,s){var u=P.T;P.T=null;var f=j.p;try{j.p=8,ih(t,n,a,s)}finally{j.p=f,P.T=u}}function ih(t,n,a,s){if(sc){var u=ah(s);if(u===null)Xf(t,n,s,oc,a),U0(t,s);else if(Ix(u,t,n,a,s))s.stopPropagation();else if(U0(t,s),n&4&&-1<Bx.indexOf(t)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=yt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var I=1<<31-Bt(v);T.entanglements[1]|=I,v&=~I}Hi(f),(Le&6)===0&&(Xl=E()+500,bo(0))}}break;case 31:case 13:T=cr(f,2),T!==null&&Qn(T,f,2),Wl(),nh(f,2)}if(f=ah(s),f===null&&Xf(t,n,s,oc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Xf(t,n,s,null,a)}}function ah(t){return t=ru(t),rh(t)}var oc=null;function rh(t){if(oc=null,t=Y(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return oc=t,null}function D0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case J:return 2;case ft:return 8;case st:case Ht:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var sh=!1,Va=null,Xa=null,ka=null,Lo=new Map,No=new Map,Wa=[],Bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&C0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ix(t,n,a,s,u){switch(n){case"focusin":return Va=Oo(Va,t,n,a,s,u),!0;case"dragenter":return Xa=Oo(Xa,t,n,a,s,u),!0;case"mouseover":return ka=Oo(ka,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Oo(Lo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Oo(No.get(f)||null,t,n,a,s,u)),!0}return!1}function L0(t){var n=Y(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Wn(t.priority,function(){w0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Wn(t.priority,function(){w0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);au=s,a.target.dispatchEvent(s),au=null}else return n=rt(a),n!==null&&C0(n),t.blockedOn=a,!1;n.shift()}return!0}function N0(t,n,a){lc(t)&&a.delete(n)}function Fx(){sh=!1,Va!==null&&lc(Va)&&(Va=null),Xa!==null&&lc(Xa)&&(Xa=null),ka!==null&&lc(ka)&&(ka=null),Lo.forEach(N0),No.forEach(N0)}function cc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fx)))}var uc=null;function O0(t){uc!==t&&(uc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===t&&(uc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(rh(s||a)===null)continue;break}var f=rt(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _s(t){function n(I){return cc(I,t)}Va!==null&&cc(Va,t),Xa!==null&&cc(Xa,t),ka!==null&&cc(ka,t),Lo.forEach(n),No.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[vn]||null;if(typeof f=="function")v||O0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[vn]||null)T=v.formAction;else if(rh(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),O0(a)}}}function z0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(t){this._internalRoot=t}fc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=oi();A0(a,s,t,n,null,null)},fc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;A0(t.current,2,null,t,null,null),Wl(),n[Oi]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ti();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&L0(t)}};var P0=e.version;if(P0!=="19.2.0")throw Error(r(527,P0,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Hx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Et=hc.inject(Hx),Ct=hc}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Xm,f=km,v=Wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,s,null,u,f,v,z0),t[Oi]=n.current,Vf(t),new oh(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Xm,v=km,T=Wm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=T0(t,1,!0,n,a??null,s,u,I,f,v,T,z0),n.context=b0(null),a=n.current,s=oi(),s=gn(s),u=Da(s),u.callback=null,Ua(a,u,s),a=s,n.current.lanes=a,je(n,a),Hi(n),t[Oi]=n.current,Vf(t),new fc(n)},Po.version="19.2.0",Po}var q0;function Qx(){if(q0)return ch.exports;q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=Kx(),ch.exports}var Jx=Qx(),Si=Gd();const tr=Vx(Si),nn={accent:"#e8e3db",accentBorder:"rgba(255,255,255,0.1)",textPrimary:"#e8e3db",textSecondary:"rgba(210,205,196,0.82)",textMuted:"rgba(162,156,146,0.72)",textLabel:"rgba(188,182,172,0.78)",bgBase:"#020611",bgCard:"rgba(10,8,20,0.62)",bgSocial:"rgba(8,6,18,0.55)",bgSocialHover:"rgba(22,18,34,0.78)",cardBorder:"rgba(255,255,255,0.09)",cardBorderLeft:"rgba(255,255,255,0.14)",techBg:"rgba(255,255,255,0.05)",techText:"rgba(222,217,208,0.88)",projectText:"rgba(188,182,172,0.8)"},$_="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",tn={sans:$_,xs:11,sm:12,base:13,md:14,lg:18,xl:20,h1:36,medium:500,semibold:600,bold:700},Mi={base:{padding:"8px 18px",borderRadius:8,fontFamily:$_,fontWeight:400,fontSize:13,letterSpacing:"0.01em",cursor:"pointer",transition:"all 0.15s ease",backdropFilter:"blur(14px)",border:"1px solid rgba(255,255,255,0.09)",background:"rgba(8,6,18,0.55)",color:"rgba(188,182,172,0.68)"},active:{color:"#e8e3db",border:"1px solid rgba(232,227,219,0.22)",background:"rgba(255,255,255,0.08)",fontWeight:500},inactive:{color:"rgba(188,182,172,0.68)",border:"1px solid rgba(255,255,255,0.09)",background:"rgba(8,6,18,0.55)",fontWeight:400},hoverEnter:o=>{o.style.color="rgba(228,224,216,0.9)",o.style.borderColor="rgba(255,255,255,0.18)",o.style.background="rgba(255,255,255,0.06)"},hoverLeave:o=>{o.style.color="rgba(188,182,172,0.68)",o.style.borderColor="rgba(255,255,255,0.09)",o.style.background="rgba(8,6,18,0.55)"}},tv={zNav:50,zOverlay:60};function $x(){return Gt.jsx("header",{style:{position:"fixed",top:18,left:20,zIndex:tv.zNav},children:Gt.jsx("h1",{style:{margin:0,fontSize:tn.xl,color:nn.textPrimary,fontWeight:tn.semibold,fontFamily:tn.sans,letterSpacing:"-0.01em"},children:"👋 Hi, I'm Adithya"})})}var ev={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y0=tr.createContext&&tr.createContext(ev),tS=["attr","size","title"];function eS(o,e){if(o==null)return{};var i=nS(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function nS(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function qc(){return qc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},qc.apply(this,arguments)}function j0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Yc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?j0(Object(i),!0).forEach(function(r){iS(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):j0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function iS(o,e,i){return e=aS(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function aS(o){var e=rS(o,"string");return typeof e=="symbol"?e:e+""}function rS(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function nv(o){return o&&o.map((e,i)=>tr.createElement(e.tag,Yc({key:i},e.attr),nv(e.child)))}function Vd(o){return e=>tr.createElement(sS,qc({attr:Yc({},o.attr)},e),nv(o.child))}function sS(o){var e=i=>{var{attr:r,size:l,title:c}=o,h=eS(o,tS),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),tr.createElement("svg",qc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Yc(Yc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&tr.createElement("title",null,c),o.children)};return Y0!==void 0?tr.createElement(Y0.Consumer,null,i=>e(i)):e(ev)}function oS(o){return Vd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function lS(o){return Vd({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function cS(o){return Vd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}const uS={color:"#ffffff",padding:"8px 12px",borderRadius:10,background:nn.bgSocial,border:`1px solid ${nn.accentBorder}`,transition:"all 0.2s",cursor:"pointer",display:"flex",alignItems:"center"},fS=[{href:"https://github.com/AdithyaDevi3",icon:oS,label:"GitHub",target:"_blank"},{href:"https://www.linkedin.com/in/adithya-devi",icon:lS,label:"LinkedIn",target:"_blank"},{href:"mailto:adithya.r.devi02@gmail.com",icon:cS,label:"Email",target:void 0}];function hS(){return Gt.jsx("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:tv.zOverlay,display:"flex",gap:12,pointerEvents:"auto"},children:fS.map(({href:o,icon:e,label:i,target:r})=>Gt.jsx("a",{href:o,target:r,rel:r?"noopener noreferrer":void 0,style:uS,onMouseEnter:l=>l.currentTarget.style.background=nn.bgSocialHover,onMouseLeave:l=>l.currentTarget.style.background=nn.bgSocial,children:Gt.jsx(e,{size:26})},i))})}function dS({route:o,setRoute:e}){const i=[{label:"🏠 Home",route:"home",active:o==="home"},{label:"🌌 About",route:"about",active:o==="about"}];return Gt.jsx("div",{style:{position:"fixed",top:16,right:16,zIndex:50,pointerEvents:"none"},children:Gt.jsx("div",{style:{pointerEvents:"auto",display:"flex",gap:8},children:i.map(r=>Gt.jsx("button",{onClick:()=>e(r.route),style:{...Mi.base,...r.active?Mi.active:Mi.inactive},onMouseEnter:l=>Mi.hoverEnter(l.currentTarget),onMouseLeave:l=>{const c=r.active;Object.assign(l.currentTarget.style,c?Mi.active:Mi.inactive)},children:r.label},r.route))})})}const Mr=[{id:"ncr",name:"NCR Voyix",type:"career",title:"Mobile Development Intern",period:"Summer 2025",summary:"Built resilient mobile systems for retail operations and connected commerce experiences.",technologies:["React Native","Expo","GraphQL","TypeScript"],projects:[{name:"Retail Mobility Platform",summary:"Delivered polished mobile workflows for in-store operations."},{name:"API Integration Layer",summary:"Connected commerce services with reliable data flows."}],color:"#4b7bff",orbitRadius:6.7,orbitSpeed:.18,accent:"#73e0ff",size:8},{id:"novae",name:"Novae",type:"career",title:"Software Engineering Intern",period:"Summer 2024",summary:"Contributed to event-driven systems and modern web interfaces for a fast-moving product team.",technologies:["Spring Boot","Angular","Kafka","MongoDB"],projects:[{name:"Streaming Integration Services",summary:"Improved message-driven workflows and monitoring."},{name:"Internal Admin Console",summary:"Shipped a cleaner operational dashboard experience."}],color:"#2ec4b6",orbitRadius:8.8,orbitSpeed:.13,accent:"#7fffd4",size:8},{id:"adobe",name:"Adobe",type:"career",title:"Developer Platforms Intern",period:"Summer 2026",summary:"Exploring developer tooling and platform experiences at the intersection of product and engineering.",technologies:["Developer Platforms","APIs","Systems Design","Collaboration"],projects:[{name:"Platform Experience Research",summary:"Investigated scalable developer workflows and onboarding."},{name:"Tooling Improvements",summary:"Helped shape a more coherent internal developer experience."}],color:"#8b5cf6",orbitRadius:10.5,orbitSpeed:.11,accent:"#c29cff",size:8},{id:"research",name:"Research",type:"career",title:"Undergraduate Research",period:"Aug 2024 – May 2025",summary:"Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.",technologies:["Research","Materials","Neuroscience","Experimentation"],projects:[{name:"Translational Glycomaterials",summary:"Investigated biomaterials for neural repair applications."},{name:"Lab Systems Support",summary:"Built reliable experimental and documentation workflows."}],color:"#1fb6d4",orbitRadius:5.6,orbitSpeed:.22,accent:"#8fe8ff",size:8},{id:"crystal",name:"Crystal Core",type:"core",title:"Interactive Crystal Animation",summary:"A dynamic 3D icosahedron with animated edges and color-cycling waves.",technologies:["Three.js","WebGL","React"],color:"#66e8ff",orbitRadius:3.2,orbitSpeed:.08,accent:"#19c7b8",size:10},{id:"star-1",name:"Nova Prime",type:"star",summary:"A luminous stellar body orbiting in the outer regions.",color:"#ffffff",orbitRadius:12,orbitSpeed:.09,accent:"#ffeb3b",size:3},{id:"star-2",name:"Celestial Wanderer",type:"star",summary:"An independent star traversing the galactic plane.",color:"#ffc107",orbitRadius:14,orbitSpeed:.07,accent:"#ffb300",size:2},{id:"planet-1",name:"Terra Prime",type:"planet",summary:"An habitable world in the middle band of the galaxy.",color:"#4db8ff",orbitRadius:9,orbitSpeed:.12,accent:"#00bfff",size:5},{id:"planet-2",name:"Scarlet Titan",type:"planet",summary:"A gas giant with swirling atmospheres.",color:"#ff6b6b",orbitRadius:11,orbitSpeed:.1,accent:"#ff4444",size:6},{id:"moon-1",name:"Luna Echo",type:"moon",summary:"A small moon reflecting ancient light.",color:"#e0e0e0",orbitRadius:7,orbitSpeed:.15,accent:"#b0b0b0",size:2},{id:"moon-2",name:"Void Shadow",type:"moon",summary:"A mysterious moon orbiting in the shadows.",color:"#a8a8a8",orbitRadius:13,orbitSpeed:.06,accent:"#808080",size:2},{id:"nebula-1",name:"Nebula Veil",type:"nebula",summary:"A diffuse cloud of stellar material.",color:"#9366ff",orbitRadius:15,orbitSpeed:.05,accent:"#7a4dd8",size:4},{id:"comet-1",name:"Swift Comet",type:"comet",summary:"A fast-moving icy body with a glowing tail.",color:"#66ffff",orbitRadius:16,orbitSpeed:.04,accent:"#33ffff",size:3}],pS="/assets/ncr-voyix-logo-Nm1_RoFH.png",mS="/assets/novae-logo-Cgcifp-f.png",gS="/assets/adobe-logo-tf7ghYQf.png",_S="/assets/curo-logo-CIN1M8Qz.png",Z0={ncr:pS,novae:mS,adobe:gS,research:_S};function vS(){const o=Si.useMemo(()=>({career:Mr.filter(r=>r.type==="career"),core:Mr.filter(r=>r.type==="core"),star:Mr.filter(r=>r.type==="star"),planet:Mr.filter(r=>r.type==="planet"),moon:Mr.filter(r=>r.type==="moon"),nebula:Mr.filter(r=>r.type==="nebula"),comet:Mr.filter(r=>r.type==="comet")}),[]),e=r=>Gt.jsxs("div",{style:{border:`1px solid ${nn.cardBorder}`,borderRadius:12,padding:16,background:nn.bgCard},children:[Gt.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,marginBottom:12},children:[Gt.jsx("div",{style:{width:12,height:12,borderRadius:"50%",backgroundColor:r.color,boxShadow:`0 0 8px ${r.color}`,flexShrink:0,marginTop:4}}),Gt.jsxs("div",{style:{flex:1},children:[Gt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[Z0[r.id]&&Gt.jsx("img",{src:Z0[r.id],alt:r.name,style:{height:28,width:"auto",maxWidth:80,objectFit:"contain",filter:"brightness(0) invert(1)",opacity:.85}}),Gt.jsx("h3",{style:{margin:0,color:nn.textPrimary,fontSize:tn.lg,fontWeight:tn.semibold},children:r.name})]}),r.title&&Gt.jsx("p",{style:{margin:"0 0 4px",color:nn.textLabel,fontSize:tn.sm,textTransform:"uppercase",letterSpacing:"0.1em"},children:r.title}),r.period&&Gt.jsx("p",{style:{margin:0,color:nn.textMuted,fontSize:tn.xs},children:r.period})]})]}),r.summary&&Gt.jsx("p",{style:{margin:"0 0 12px",color:nn.textSecondary,fontSize:tn.base,lineHeight:1.5},children:r.summary}),r.technologies&&r.technologies.length>0&&Gt.jsxs("div",{style:{marginBottom:12},children:[Gt.jsx("p",{style:{margin:"0 0 6px",color:nn.textLabel,fontSize:tn.xs,textTransform:"uppercase",letterSpacing:"0.1em"},children:"Tech Stack"}),Gt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.technologies.map(l=>Gt.jsx("span",{style:{padding:"4px 8px",borderRadius:6,background:nn.techBg,color:nn.techText,fontSize:tn.xs},children:l},l))})]}),r.projects&&r.projects.length>0&&Gt.jsxs("div",{children:[Gt.jsx("p",{style:{margin:"0 0 6px",color:nn.textLabel,fontSize:tn.xs,textTransform:"uppercase",letterSpacing:"0.1em"},children:"Projects"}),Gt.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:r.projects.map(l=>Gt.jsxs("div",{style:{paddingLeft:8,borderLeft:`2px solid ${nn.cardBorderLeft}`},children:[Gt.jsx("p",{style:{margin:0,color:nn.textPrimary,fontWeight:tn.medium,fontSize:tn.sm},children:l.name}),Gt.jsx("p",{style:{margin:"2px 0 0",color:nn.projectText,fontSize:tn.xs},children:l.summary})]},l.name))})]})]},r.id),i={margin:"0 0 16px",fontSize:tn.xl,color:nn.accent,fontWeight:tn.semibold,letterSpacing:"0.02em",fontFamily:tn.sans};return Gt.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",padding:"80px 20px 80px",background:nn.bgBase},children:Gt.jsxs("div",{style:{width:"100%",maxWidth:"1000px"},children:[Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("p",{style:{margin:0,color:nn.textMuted,letterSpacing:"0.12em",fontSize:tn.sm,textTransform:"uppercase",fontFamily:tn.sans},children:"Galaxy Atlas"}),Gt.jsx("h1",{style:{margin:"8px 0 12px",fontSize:tn.h1,color:nn.textPrimary,fontWeight:tn.bold,fontFamily:tn.sans,letterSpacing:"-0.01em"},children:"Explore the Universe"}),Gt.jsx("p",{style:{margin:0,color:nn.textSecondary,fontSize:tn.md,lineHeight:1.6,fontFamily:tn.sans},children:"A comprehensive directory of all celestial objects orbiting throughout the galaxy."})]}),o.career.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Career Experiences"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.career.map(e)})]}),o.core.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Core Systems"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.core.map(e)})]}),o.planet.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Planets"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.planet.map(e)})]}),o.star.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Stars"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.star.map(e)})]}),o.moon.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Moons"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.moon.map(e)})]}),o.nebula.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Nebulae"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.nebula.map(e)})]}),o.comet.length>0&&Gt.jsxs("div",{style:{marginBottom:32},children:[Gt.jsx("h2",{style:i,children:"Comets"}),Gt.jsx("div",{style:{display:"grid",gap:12},children:o.comet.map(e)})]})]})})}const Xd="180",yS=0,K0=1,xS=2,iv=1,SS=2,ga=3,ar=0,Jn=1,_a=2,er=0,Bs=1,Fs=2,Q0=3,J0=4,MS=5,Ur=100,ES=101,TS=102,bS=103,AS=104,RS=200,CS=201,wS=202,DS=203,Kh=204,Qh=205,US=206,LS=207,NS=208,OS=209,zS=210,PS=211,BS=212,IS=213,FS=214,Jh=0,$h=1,td=2,Hs=3,ed=4,nd=5,id=6,ad=7,av=0,HS=1,GS=2,nr=0,VS=1,XS=2,kS=3,rv=4,WS=5,qS=6,YS=7,sv=300,Gs=301,Vs=302,rd=303,sd=304,tu=306,od=1e3,Nr=1001,ld=1002,Li=1003,jS=1004,dc=1005,Xi=1006,ph=1007,Or=1008,Wi=1009,ov=1010,lv=1011,jo=1012,kd=1013,zr=1014,va=1015,$o=1016,Wd=1017,qd=1018,Zo=1020,cv=35902,uv=35899,fv=1021,hv=1022,Ui=1023,Ko=1026,Qo=1027,dv=1028,Yd=1029,pv=1030,jd=1031,Zd=1033,Gc=33776,Vc=33777,Xc=33778,kc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,xd=37812,Sd=37813,Md=37814,Ed=37815,Td=37816,bd=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,Dd=36492,Ud=36494,Ld=36495,Nd=36283,Od=36284,zd=36285,Pd=36286,ZS=3200,KS=3201,QS=0,JS=1,$a="",ui="srgb",Xs="srgb-linear",jc="linear",Ve="srgb",vs=7680,$0=519,$S=512,tM=513,eM=514,mv=515,nM=516,iM=517,aM=518,rM=519,Bd=35044,t_="300 es",ki=2e3,Zc=2001;class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Id=180/Math.PI;function ir(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function be(o,e,i){return Math.max(e,Math.min(i,o))}function sM(o,e){return(o%e+e)%e}function gh(o,e,i){return(1-i)*o+i*e}function Vi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,i=0){me.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3];const y=c[h+0],S=c[h+1],b=c[h+2],R=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(d===1){e[i+0]=y,e[i+1]=S,e[i+2]=b,e[i+3]=R;return}if(g!==R||m!==y||p!==S||x!==b){let M=1-d;const _=m*y+p*S+x*b+g*R,N=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const G=Math.sqrt(U),F=Math.atan2(G,_*N);M=Math.sin(M*F)/G,d=Math.sin(d*F)/G}const D=d*N;if(m=m*M+y*D,p=p*M+S*D,x=x*M+b*D,g=g*M+R*D,M===1-d){const G=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=G,p*=G,x*=G,g*=G}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[h],y=c[h+1],S=c[h+2],b=c[h+3];return e[i]=d*b+x*g+m*S-p*y,e[i+1]=m*b+x*y+p*g-d*S,e[i+2]=p*b+x*S+d*y-m*g,e[i+3]=x*b-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),x=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=y*x*g+p*S*b,this._y=p*S*g-y*x*b,this._z=p*x*b+y*S*g,this._w=p*x*g-y*S*b;break;case"YXZ":this._x=y*x*g+p*S*b,this._y=p*S*g-y*x*b,this._z=p*x*b-y*S*g,this._w=p*x*g+y*S*b;break;case"ZXY":this._x=y*x*g-p*S*b,this._y=p*S*g+y*x*b,this._z=p*x*b+y*S*g,this._w=p*x*g-y*S*b;break;case"ZYX":this._x=y*x*g-p*S*b,this._y=p*S*g+y*x*b,this._z=p*x*b-y*S*g,this._w=p*x*g+y*S*b;break;case"YZX":this._x=y*x*g+p*S*b,this._y=p*S*g+y*x*b,this._z=p*x*b-y*S*g,this._w=p*x*g-y*S*b;break;case"XZY":this._x=y*x*g-p*S*b,this._y=p*S*g-y*x*b,this._z=p*x*b+y*S*g,this._w=p*x*g+y*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(x-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-r*p,this._z=c*x+h*p+r*m-l*d,this._w=h*x-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),x=Math.atan2(p,d),g=Math.sin((1-i)*x)/p,y=Math.sin(i*x)/p;return this._w=h*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(e_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),x=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*x,this.y=r+m*x+d*p-c*g,this.z=l+m*g+c*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(be(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new k,e_=new tl;class pe{constructor(e,i,r,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],x=r[4],g=r[7],y=r[2],S=r[5],b=r[8],R=l[0],M=l[3],_=l[6],N=l[1],U=l[4],D=l[7],G=l[2],F=l[5],z=l[8];return c[0]=h*R+d*N+m*G,c[3]=h*M+d*U+m*F,c[6]=h*_+d*D+m*z,c[1]=p*R+x*N+g*G,c[4]=p*M+x*U+g*F,c[7]=p*_+x*D+g*z,c[2]=y*R+S*N+b*G,c[5]=y*M+S*U+b*F,c[8]=y*_+S*D+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-r*c*x+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=x*h-d*p,y=d*m-x*c,S=p*c-h*m,b=i*g+r*y+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=g*R,e[1]=(l*p-x*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(x*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=S*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vh.makeScale(e,i)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new pe;function gv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oM(){const o=Kc("canvas");return o.style.display="block",o}const n_={};function Jo(o){o in n_||(n_[o]=!0,console.warn(o))}function lM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const i_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){const o={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Xs]:{primaries:e,whitePoint:r,transfer:jc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Ve,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),o}const Ue=cM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ys;class uM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ys===void 0&&(ys=Kc("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ys}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fM=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(yh(l[h].image)):c.push(yh(l[h]))}else c=yh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function yh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?uM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;const xh=new k;class Xn extends Ws{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Nr,l=Nr,c=Xi,h=Or,d=Ui,m=Wi,p=Xn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ir(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=sv;Xn.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],y=m[1],S=m[5],b=m[9],R=m[2],M=m[6],_=m[10];if(Math.abs(x-y)<.01&&Math.abs(g-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(g+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(S+1)/2,G=(_+1)/2,F=(x+y)/4,z=(g+R)/4,q=(b+M)/4;return U>D&&U>G?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=z/r):D>G?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=q/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=z/c,l=q/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(g-R)*(g-R)+(y-x)*(y-x));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(g-R)/N,this.z=(y-x)/N,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Ws{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,e,i),this.scissorTest=!1,this.viewport=new ke(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Xn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends dM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class _v extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends Xn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Li,this.minFilter=Li,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ci):Ci.fromBufferAttribute(c,h),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),mc.subVectors(this.max,Bo),xs.subVectors(e.a,Bo),Ss.subVectors(e.b,Bo),Ms.subVectors(e.c,Bo),Ya.subVectors(Ss,xs),ja.subVectors(Ms,Ss),Er.subVectors(xs,Ms);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Er.z,Er.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Er.z,0,-Er.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Er.y,Er.x,0];return!Sh(i,xs,Ss,Ms,mc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,xs,Ss,Ms,mc))?!1:(gc.crossVectors(Ya,ja),i=[gc.x,gc.y,gc.z],Sh(i,xs,Ss,Ms,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new k,new k,new k,new k,new k,new k,new k,new k],Ci=new k,pc=new el,xs=new k,Ss=new k,Ms=new k,Ya=new k,ja=new k,Er=new k,Bo=new k,mc=new k,gc=new k,Tr=new k;function Sh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Tr.fromArray(o,c);const d=l.x*Math.abs(Tr.x)+l.y*Math.abs(Tr.y)+l.z*Math.abs(Tr.z),m=e.dot(Tr),p=i.dot(Tr),x=r.dot(Tr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const mM=new el,Io=new k,Mh=new k;class nl{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Mh)),this.expandByPoint(Io.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new k,Eh=new k,_c=new k,Za=new k,Th=new k,vc=new k,bh=new k;class Qd{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Eh.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Eh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(_c),d=Za.dot(this.direction),m=-Za.dot(_c),p=Za.lengthSq(),x=Math.abs(1-h*h);let g,y,S,b;if(x>0)if(g=h*m-d,y=h*d-m,b=c*x,g>=0)if(y>=-b)if(y<=b){const R=1/x;g*=R,y*=R,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Eh).addScaledVector(_c,y),S}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const r=ha.dot(this.direction),l=ha.dot(ha)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),x>=0?(c=(e.min.y-y.y)*x,h=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,h=(e.min.y-y.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,r,l,c){Th.subVectors(i,e),vc.subVectors(r,e),bh.crossVectors(Th,vc);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,e);const m=d*this.direction.dot(vc.crossVectors(Za,vc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(Za));if(p<0||m+p>h)return null;const x=-d*Za.dot(bh);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,i,r,l,c,h,d,m,p,x,g,y,S,b,R,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,x,g,y,S,b,R,M)}set(e,i,r,l,c,h,d,m,p,x,g,y,S,b,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=y,_[3]=S,_[7]=b,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Es.setFromMatrixColumn(e,0).length(),c=1/Es.setFromMatrixColumn(e,1).length(),h=1/Es.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*x,S=h*g,b=d*x,R=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=S+b*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=b+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*x,S=m*g,b=p*x,R=p*g;i[0]=y+R*d,i[4]=b*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=S*d-b,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*x,S=m*g,b=p*x,R=p*g;i[0]=y-R*d,i[4]=-h*g,i[8]=b+S*d,i[1]=S+b*d,i[5]=h*x,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*x,S=h*g,b=d*x,R=d*g;i[0]=m*x,i[4]=b*p-S,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=R-y*g,i[8]=b*g+S,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=S*g+b,i[10]=y-R*g}else if(e.order==="XZY"){const y=h*m,S=h*p,b=d*m,R=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=y*g+R,i[5]=h*x,i[9]=S*g-b,i[2]=b*g-S,i[6]=d*x,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,_M)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),Ka.crossVectors(r,li),Ka.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Ka.crossVectors(r,li)),Ka.normalize(),yc.crossVectors(li,Ka),l[0]=Ka.x,l[4]=yc.x,l[8]=li.x,l[1]=Ka.y,l[5]=yc.y,l[9]=li.y,l[2]=Ka.z,l[6]=yc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],x=r[1],g=r[5],y=r[9],S=r[13],b=r[2],R=r[6],M=r[10],_=r[14],N=r[3],U=r[7],D=r[11],G=r[15],F=l[0],z=l[4],q=l[8],w=l[12],C=l[1],V=l[5],et=l[9],ut=l[13],vt=l[2],dt=l[6],P=l[10],j=l[14],Z=l[3],Mt=l[7],bt=l[11],O=l[15];return c[0]=h*F+d*C+m*vt+p*Z,c[4]=h*z+d*V+m*dt+p*Mt,c[8]=h*q+d*et+m*P+p*bt,c[12]=h*w+d*ut+m*j+p*O,c[1]=x*F+g*C+y*vt+S*Z,c[5]=x*z+g*V+y*dt+S*Mt,c[9]=x*q+g*et+y*P+S*bt,c[13]=x*w+g*ut+y*j+S*O,c[2]=b*F+R*C+M*vt+_*Z,c[6]=b*z+R*V+M*dt+_*Mt,c[10]=b*q+R*et+M*P+_*bt,c[14]=b*w+R*ut+M*j+_*O,c[3]=N*F+U*C+D*vt+G*Z,c[7]=N*z+U*V+D*dt+G*Mt,c[11]=N*q+U*et+D*P+G*bt,c[15]=N*w+U*ut+D*j+G*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],x=e[2],g=e[6],y=e[10],S=e[14],b=e[3],R=e[7],M=e[11],_=e[15];return b*(+c*m*g-l*p*g-c*d*y+r*p*y+l*d*S-r*m*S)+R*(+i*m*S-i*p*y+c*h*y-l*h*S+l*p*x-c*m*x)+M*(+i*p*g-i*d*S-c*h*g+r*h*S+c*d*x-r*p*x)+_*(-l*d*x-i*m*g+i*d*y+l*h*g-r*h*y+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],x=e[8],g=e[9],y=e[10],S=e[11],b=e[12],R=e[13],M=e[14],_=e[15],N=g*M*p-R*y*p+R*m*S-d*M*S-g*m*_+d*y*_,U=b*y*p-x*M*p-b*m*S+h*M*S+x*m*_-h*y*_,D=x*R*p-b*g*p+b*d*S-h*R*S-x*d*_+h*g*_,G=b*g*m-x*R*m-b*d*y+h*R*y+x*d*M-h*g*M,F=i*N+r*U+l*D+c*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=N*z,e[1]=(R*y*c-g*M*c-R*l*S+r*M*S+g*l*_-r*y*_)*z,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*_+r*m*_)*z,e[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*z,e[4]=U*z,e[5]=(x*M*c-b*y*c+b*l*S-i*M*S-x*l*_+i*y*_)*z,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*_-i*m*_)*z,e[7]=(h*y*c-x*m*c+x*l*p-i*y*p-h*l*S+i*m*S)*z,e[8]=D*z,e[9]=(b*g*c-x*R*c-b*r*S+i*R*S+x*r*_-i*g*_)*z,e[10]=(h*R*c-b*d*c+b*r*p-i*R*p-h*r*_+i*d*_)*z,e[11]=(x*d*c-h*g*c-x*r*p+i*g*p+h*r*S-i*d*S)*z,e[12]=G*z,e[13]=(x*R*l-b*g*l+b*r*y-i*R*y-x*r*M+i*g*M)*z,e[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*z,e[15]=(h*g*l-x*d*l+x*r*m-i*g*m-h*r*y+i*d*y)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,x=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+r,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,g=d+d,y=c*p,S=c*x,b=c*g,R=h*x,M=h*g,_=d*g,N=m*p,U=m*x,D=m*g,G=r.x,F=r.y,z=r.z;return l[0]=(1-(R+_))*G,l[1]=(S+D)*G,l[2]=(b-U)*G,l[3]=0,l[4]=(S-D)*F,l[5]=(1-(y+_))*F,l[6]=(M+N)*F,l[7]=0,l[8]=(b+U)*z,l[9]=(M-N)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Es.set(l[0],l[1],l[2]).length();const h=Es.set(l[4],l[5],l[6]).length(),d=Es.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],wi.copy(this);const p=1/c,x=1/h,g=1/d;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,i.setFromRotationMatrix(wi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ki,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===ki)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Zc)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ki,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===ki)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===Zc)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Es=new k,wi=new Je,gM=new k(0,0,0),_M=new k(1,1,1),Ka=new k,yc=new k,li=new k,r_=new Je,s_=new tl;class Sa{constructor(e=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return s_.setFromEuler(this),this.setFromQuaternion(s_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const o_=new k,Ts=new tl,da=new Je,xc=new k,Fo=new k,yM=new k,xM=new tl,l_=new k(1,0,0),c_=new k(0,1,0),u_=new k(0,0,1),f_={type:"added"},SM={type:"removed"},bs={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Nn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new k,i=new Sa,r=new tl,l=new k(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new pe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,i){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?xc.copy(e):xc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Fo,xc,this.up):da.lookAt(xc,Fo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(da),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(SM),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,xM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),x=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new k(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new k,pa=new k,Rh=new k,ma=new k,As=new k,Rs=new k,h_=new k,Ch=new k,wh=new k,Dh=new k,Uh=new ke,Lh=new ke,Nh=new ke;class Ei{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Di.subVectors(l,i),pa.subVectors(r,i),Rh.subVectors(e,i);const h=Di.dot(Di),d=Di.dot(pa),m=Di.dot(Rh),p=pa.dot(pa),x=pa.dot(Rh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*x)*y,b=(h*x-d*m)*y;return c.set(1-S-b,b,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(e,i),Lh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Uh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(e,i,r,l){return Di.subVectors(r,i),pa.subVectors(e,i),Di.cross(pa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Di.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;As.subVectors(l,r),Rs.subVectors(c,r),Ch.subVectors(e,r);const m=As.dot(Ch),p=Rs.dot(Ch);if(m<=0&&p<=0)return i.copy(r);wh.subVectors(e,l);const x=As.dot(wh),g=Rs.dot(wh);if(x>=0&&g<=x)return i.copy(l);const y=m*g-x*p;if(y<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(r).addScaledVector(As,h);Dh.subVectors(e,c);const S=As.dot(Dh),b=Rs.dot(Dh);if(b>=0&&S<=b)return i.copy(c);const R=S*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Rs,d);const M=x*b-S*g;if(M<=0&&g-x>=0&&S-b>=0)return h_.subVectors(c,l),d=(g-x)/(g-x+(S-b)),i.copy(l).addScaledVector(h_,d);const _=1/(M+R+y);return h=R*_,d=y*_,i.copy(r).addScaledVector(As,h).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=sM(e,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=yv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ue.workingToColorSpace(Bn.copy(this),e),Math.round(be(Bn.r*255,0,255))*65536+Math.round(be(Bn.g*255,0,255))*256+Math.round(be(Bn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Bn.copy(this),i);const r=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=ui){Ue.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,r=Bn.g,l=Bn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+e,Qa.s+i,Qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Qa),e.getHSL(Sc);const r=gh(Qa.h,Sc.h,i),l=gh(Qa.s,Sc.s,i),c=gh(Qa.l,Sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new ce;ce.NAMES=yv;let MM=0;class Br extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Bs,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==Ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xv extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new k,Mc=new me;let EM=0;class Sn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Bd,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}}class Sv extends Sn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Mv extends Sn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends Sn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let TM=0;const xi=new Je,zh=new Nn,Cs=new k,ci=new el,Ho=new el,An=new k;class $n extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gv(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(ci.min,Ho.min),ci.expandByPoint(An),An.addVectors(ci.max,Ho.max),ci.expandByPoint(An)):(ci.expandByPoint(Ho.min),ci.expandByPoint(Ho.max))}ci.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)An.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(An));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)An.fromBufferAttribute(d,p),m&&(Cs.fromBufferAttribute(e,p),An.add(Cs)),l=Math.max(l,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new k,m[q]=new k;const p=new k,x=new k,g=new k,y=new me,S=new me,b=new me,R=new k,M=new k;function _(q,w,C){p.fromBufferAttribute(r,q),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),x.sub(p),g.sub(p),S.sub(y),b.sub(y);const V=1/(S.x*b.y-b.x*S.y);isFinite(V)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(V),M.copy(g).multiplyScalar(S.x).addScaledVector(x,-b.x).multiplyScalar(V),d[q].add(R),d[w].add(R),d[C].add(R),m[q].add(M),m[w].add(M),m[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,w=N.length;q<w;++q){const C=N[q],V=C.start,et=C.count;for(let ut=V,vt=V+et;ut<vt;ut+=3)_(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const U=new k,D=new k,G=new k,F=new k;function z(q){G.fromBufferAttribute(l,q),F.copy(G);const w=d[q];U.copy(w),U.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(F,w);const V=D.dot(m[q])<0?-1:1;h.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,w=N.length;q<w;++q){const C=N[q],V=C.start,et=C.count;for(let ut=V,vt=V+et;ut<vt;ut+=3)z(e.getX(ut+0)),z(e.getX(ut+1)),z(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Sn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new k,c=new k,h=new k,d=new k,m=new k,p=new k,x=new k,g=new k;if(e)for(let y=0,S=e.count;y<S;y+=3){const b=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(x),m.add(x),p.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,m){const p=d.array,x=d.itemSize,g=d.normalized,y=new p.constructor(m.length*x);let S=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*x;for(let _=0;_<x;_++)y[b++]=p[S++]}return new Sn(y,x,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const y=p[x],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];x.push(S.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let y=0,S=g.length;y<S;y++)x.push(g[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new Je,br=new Qd,Ec=new nl,p_=new k,Tc=new k,bc=new k,Ac=new k,Ph=new k,Rc=new k,m_=new k,Cc=new k;class ya extends Nn{constructor(e=new $n,i=new xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Ph.fromBufferAttribute(g,e),h?Rc.addScaledVector(Ph,x):Rc.addScaledVector(Ph.sub(i),x))}i.add(Rc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Ec.containsPoint(br.origin)===!1&&(br.intersectSphere(Ec,p_)===null||br.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(d_.copy(c).invert(),br.copy(e.ray).applyMatrix4(d_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],_=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,G=U;D<G;D+=3){const F=d.getX(D),z=d.getX(D+1),q=d.getX(D+2);l=wc(this,_,e,r,p,x,g,F,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=b,_=R;M<_;M+=3){const N=d.getX(M),U=d.getX(M+1),D=d.getX(M+2);l=wc(this,h,e,r,p,x,g,N,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],_=h[M.materialIndex],N=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,G=U;D<G;D+=3){const F=D,z=D+1,q=D+2;l=wc(this,_,e,r,p,x,g,F,z,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=b,_=R;M<_;M+=3){const N=M,U=M+1,D=M+2;l=wc(this,h,e,r,p,x,g,N,U,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function bM(o,e,i,r,l,c,h,d){let m;if(e.side===Jn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===ar,d),m===null)return null;Cc.copy(d),Cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:o}}function wc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Tc),o.getVertexPosition(m,bc),o.getVertexPosition(p,Ac);const x=bM(o,e,i,r,Tc,bc,Ac,m_);if(x){const g=new k;Ei.getBarycoord(m_,Tc,bc,Ac,g),l&&(x.uv=Ei.getInterpolatedAttribute(l,d,m,p,g,new me)),c&&(x.uv1=Ei.getInterpolatedAttribute(c,d,m,p,g,new me)),h&&(x.normal=Ei.getInterpolatedAttribute(h,d,m,p,g,new k),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new k,materialIndex:0};Ei.getNormal(Tc,bc,Ac,y.normal),x.face=y,x.barycoord=g}return x}class il extends $n{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],g=[];let y=0,S=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(x,3)),this.setAttribute("uv",new Ni(g,2));function b(R,M,_,N,U,D,G,F,z,q,w){const C=D/z,V=G/q,et=D/2,ut=G/2,vt=F/2,dt=z+1,P=q+1;let j=0,Z=0;const Mt=new k;for(let bt=0;bt<P;bt++){const O=bt*V-ut;for(let at=0;at<dt;at++){const St=at*C-et;Mt[R]=St*N,Mt[M]=O*U,Mt[_]=vt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[M]=0,Mt[_]=F>0?1:-1,x.push(Mt.x,Mt.y,Mt.z),g.push(at/z),g.push(1-bt/q),j+=1}}for(let bt=0;bt<q;bt++)for(let O=0;O<z;O++){const at=y+O+dt*bt,St=y+O+dt*(bt+1),At=y+(O+1)+dt*(bt+1),Ut=y+(O+1)+dt*bt;m.push(at,St,Ut),m.push(St,At,Ut),Z+=6}d.addGroup(S,Z,w),S+=Z,y+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Vn(o){const e={};for(let i=0;i<o.length;i++){const r=ks(o[i]);for(const l in r)e[l]=r[l]}return e}function AM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Ev(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const RM={clone:ks,merge:Vn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new k,g_=new me,__=new me;class fi extends Tv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(mh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Ds=1;class DM extends Nn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(ws,Ds,e,i);l.layers=this.layers,this.add(l);const c=new fi(ws,Ds,e,i);c.layers=this.layers,this.add(c);const h=new fi(ws,Ds,e,i);h.layers=this.layers,this.add(h);const d=new fi(ws,Ds,e,i);d.layers=this.layers,this.add(d);const m=new fi(ws,Ds,e,i);m.layers=this.layers,this.add(m);const p=new fi(ws,Ds,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,y,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class bv extends Xn{constructor(e=[],i=Gs,r,l,c,h,d,m,p,x){super(e,i,r,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UM extends Pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:er});c.uniforms.tEquirect.value=i;const h=new ya(l,c),d=i.minFilter;return i.minFilter===Or&&(i.minFilter=Xi),new DM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class qo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(p,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=x.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&y>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new qo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Jd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=i}clone(){return new Jd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class OM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Bd,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gn=new k;class Qc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyMatrix4(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.applyNormalMatrix(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Gn.fromBufferAttribute(this,i),Gn.transformDirection(e),this.setXYZ(i,Gn.x,Gn.y,Gn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Vi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Vi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Vi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Vi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Vi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Sn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Av extends Br{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const Go=new k,Ls=new k,Ns=new k,Os=new me,Vo=new me,Rv=new Je,Dc=new k,Xo=new k,Uc=new k,v_=new me,Ih=new me,y_=new me;class zM extends Nn{constructor(e=new Av){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new OM(i,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Qc(r,3,0,!1)),Us.setAttribute("uv",new Qc(r,2,3,!1))}this.geometry=Us,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Rv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ns.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Lc(Dc.set(-.5,-.5,0),Ns,h,Ls,l,c),Lc(Xo.set(.5,-.5,0),Ns,h,Ls,l,c),Lc(Uc.set(.5,.5,0),Ns,h,Ls,l,c),v_.set(0,0),Ih.set(1,0),y_.set(1,1);let d=e.ray.intersectTriangle(Dc,Xo,Uc,!1,Go);if(d===null&&(Lc(Xo.set(-.5,.5,0),Ns,h,Ls,l,c),Ih.set(0,1),d=e.ray.intersectTriangle(Dc,Uc,Xo,!1,Go),d===null))return;const m=e.ray.origin.distanceTo(Go);m<e.near||m>e.far||i.push({distance:m,point:Go.clone(),uv:Ei.getInterpolation(Go,Dc,Xo,Uc,v_,Ih,y_,new me),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lc(o,e,i,r,l,c){Os.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Vo.x=c*Os.x-l*Os.y,Vo.y=l*Os.x+c*Os.y):Vo.copy(Os),o.copy(e),o.x+=Vo.x,o.y+=Vo.y,o.applyMatrix4(Rv)}const Fh=new k,PM=new k,BM=new pe;class wr{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Fh.subVectors(r,i).cross(PM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BM.getNormalMatrix(e),l=this.coplanarPoint(Fh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new nl,IM=new me(.5,.5),Nc=new k;class $d{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,h=new wr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ki,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],y=c[6],S=c[7],b=c[8],R=c[9],M=c[10],_=c[11],N=c[12],U=c[13],D=c[14],G=c[15];if(l[0].setComponents(p-h,S-x,_-b,G-N).normalize(),l[1].setComponents(p+h,S+x,_+b,G+N).normalize(),l[2].setComponents(p+d,S+g,_+R,G+U).normalize(),l[3].setComponents(p-d,S-g,_-R,G-U).normalize(),r)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,S-y,_-M,G-D).normalize();else if(l[4].setComponents(p-m,S-y,_-M,G-D).normalize(),i===ki)l[5].setComponents(p+m,S+y,_+M,G+D).normalize();else if(i===Zc)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const i=IM.distanceTo(e.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cv extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new k,$c=new k,x_=new Je,ko=new Qd,Oc=new nl,Hh=new k,S_=new k;class FM extends Nn{constructor(e=new $n,i=new Cv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Jc.distanceTo($c);e.setAttribute("lineDistance",new Ni(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=c,e.ray.intersectsSphere(Oc)===!1)return;x_.copy(l).invert(),ko.copy(e.ray).applyMatrix4(x_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const S=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=S,M=b-1;R<M;R+=p){const _=x.getX(R),N=x.getX(R+1),U=zc(this,e,ko,m,_,N,R);U&&i.push(U)}if(this.isLineLoop){const R=x.getX(b-1),M=x.getX(S),_=zc(this,e,ko,m,R,M,b-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let R=S,M=b-1;R<M;R+=p){const _=zc(this,e,ko,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=zc(this,e,ko,m,b-1,S,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(Jc.fromBufferAttribute(d,l),$c.fromBufferAttribute(d,c),i.distanceSqToSegment(Jc,$c,Hh,S_)>r)return;Hh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Hh);if(!(p<e.near||p>e.far))return{distance:p,point:S_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class HM extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M_=new Je,Fd=new Qd,Pc=new nl,Bc=new k;class E_ extends Nn{constructor(e=new $n,i=new HM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;M_.copy(l).invert(),Fd.copy(e.ray).applyMatrix4(M_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let b=y,R=S;b<R;b++){const M=p.getX(b);Bc.fromBufferAttribute(g,M),T_(Bc,M,m,l,e,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let b=y,R=S;b<R;b++)Bc.fromBufferAttribute(g,b),T_(Bc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,e,i,r,l,c,h){const d=Fd.distanceSqToPoint(o);if(d<i){const m=new k;Fd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class wv extends Xn{constructor(e,i,r=zr,l,c,h,d=Li,m=Li,p,x=Ko,g=1){if(x!==Ko&&x!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tp extends $n{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),x(),this.setAttribute("position",new Ni(c,3)),this.setAttribute("normal",new Ni(c.slice(),3)),this.setAttribute("uv",new Ni(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new k,D=new k,G=new k;for(let F=0;F<i.length;F+=3)S(i[F+0],U),S(i[F+1],D),S(i[F+2],G),m(U,D,G,N)}function m(N,U,D,G){const F=G+1,z=[];for(let q=0;q<=F;q++){z[q]=[];const w=N.clone().lerp(D,q/F),C=U.clone().lerp(D,q/F),V=F-q;for(let et=0;et<=V;et++)et===0&&q===F?z[q][et]=w:z[q][et]=w.clone().lerp(C,et/V)}for(let q=0;q<F;q++)for(let w=0;w<2*(F-q)-1;w++){const C=Math.floor(w/2);w%2===0?(y(z[q][C+1]),y(z[q+1][C]),y(z[q][C])):(y(z[q][C+1]),y(z[q+1][C+1]),y(z[q+1][C]))}}function p(N){const U=new k;for(let D=0;D<c.length;D+=3)U.x=c[D+0],U.y=c[D+1],U.z=c[D+2],U.normalize().multiplyScalar(N),c[D+0]=U.x,c[D+1]=U.y,c[D+2]=U.z}function x(){const N=new k;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const D=M(N)/2/Math.PI+.5,G=_(N)/Math.PI+.5;h.push(D,1-G)}b(),g()}function g(){for(let N=0;N<h.length;N+=6){const U=h[N+0],D=h[N+2],G=h[N+4],F=Math.max(U,D,G),z=Math.min(U,D,G);F>.9&&z<.1&&(U<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),G<.2&&(h[N+4]+=1))}}function y(N){c.push(N.x,N.y,N.z)}function S(N,U){const D=N*3;U.x=e[D+0],U.y=e[D+1],U.z=e[D+2]}function b(){const N=new k,U=new k,D=new k,G=new k,F=new me,z=new me,q=new me;for(let w=0,C=0;w<c.length;w+=9,C+=6){N.set(c[w+0],c[w+1],c[w+2]),U.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),F.set(h[C+0],h[C+1]),z.set(h[C+2],h[C+3]),q.set(h[C+4],h[C+5]),G.copy(N).add(U).add(D).divideScalar(3);const V=M(G);R(F,C+0,N,V),R(z,C+2,U,V),R(q,C+4,D,V)}}function R(N,U,D,G){G<0&&N.x===1&&(h[U]=N.x-1),D.x===0&&D.z===0&&(h[U]=G/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.vertices,e.indices,e.radius,e.details)}}class ep extends tp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ep(e.radius,e.detail)}}class eu extends $n{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,x=m+1,g=e/d,y=i/m,S=[],b=[],R=[],M=[];for(let _=0;_<x;_++){const N=_*y-h;for(let U=0;U<p;U++){const D=U*g-c;b.push(D,-N,0),R.push(0,0,1),M.push(U/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<d;N++){const U=N+p*_,D=N+p*(_+1),G=N+1+p*(_+1),F=N+1+p*_;S.push(U,D,F),S.push(D,G,F)}this.setIndex(S),this.setAttribute("position",new Ni(b,3)),this.setAttribute("normal",new Ni(R,3)),this.setAttribute("uv",new Ni(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class GM extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Uv extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Gh=new Je,b_=new k,A_=new k;class XM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;b_.setFromMatrixPosition(e.matrixWorld),i.position.copy(b_),A_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const R_=new Je,Wo=new k,Vh=new k;class kM extends XM{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Wo),Vh.copy(r.position),Vh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Vh),r.updateMatrixWorld(),l.makeTranslation(-Wo.x,-Wo.y,-Wo.z),R_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R_,r.coordinateSystem,r.reversedDepth)}}class Xh extends Uv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new kM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class WM extends Tv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends Uv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function C_(o,e,i,r){const l=jM(r);switch(i){case fv:return o*e;case dv:return o*e/l.components*l.byteLength;case Yd:return o*e/l.components*l.byteLength;case pv:return o*e*2/l.components*l.byteLength;case jd:return o*e*2/l.components*l.byteLength;case hv:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case Zd:return o*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Xc:case kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:case hd:return Math.max(o,16)*Math.max(e,8)/4;case cd:case fd:return Math.max(o,8)*Math.max(e,8)/2;case dd:case pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dd:case Ud:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nd:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zd:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(o){switch(o){case Wi:case ov:return{byteLength:1,components:1};case jo:case lv:case $o:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case zr:case kd:case va:return{byteLength:4,components:1};case cv:case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function Lv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ZM(o){const e=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,x);else{g.sort((S,b)=>S.start-b.start);let y=0;for(let S=1;S<g.length;S++){const b=g[y],R=g[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,g[y]=R)}g.length=y+1;for(let S=0,b=g.length;S<b;S++){const R=g[S];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var KM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
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
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
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
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cE=`#ifdef USE_IRIDESCENCE
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
#endif`,uE=`#ifdef USE_BUMPMAP
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,VE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
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
#endif`,h1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
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
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,O1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,F1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X1=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,nT=`#if DEPTH_PACKING == 3200
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
}`,iT=`#define DISTANCE
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
}`,aT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`uniform float scale;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 diffuse;
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,dT=`#define MATCAP
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
}`,pT=`#define MATCAP
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
}`,mT=`#define NORMAL
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
}`,gT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
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
}`,vT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,yT=`#define STANDARD
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
}`,xT=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ST=`#define TOON
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
}`,MT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ET=`uniform float size;
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
}`,TT=`uniform vec3 diffuse;
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
}`,bT=`#include <common>
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
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,RT=`uniform float rotation;
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
}`,CT=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:tE,alphatest_pars_fragment:eE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:_E,color_vertex:vE,common:yE,cube_uv_reflection_fragment:xE,defaultnormal_vertex:SE,displacementmap_pars_vertex:ME,displacementmap_vertex:EE,emissivemap_fragment:TE,emissivemap_pars_fragment:bE,colorspace_fragment:AE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:wE,envmap_pars_fragment:DE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:VE,envmap_vertex:LE,fog_vertex:NE,fog_pars_vertex:OE,fog_fragment:zE,fog_pars_fragment:PE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:IE,lights_lambert_fragment:FE,lights_lambert_pars_fragment:HE,lights_pars_begin:GE,lights_toon_fragment:XE,lights_toon_pars_fragment:kE,lights_phong_fragment:WE,lights_phong_pars_fragment:qE,lights_physical_fragment:YE,lights_physical_pars_fragment:jE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:e1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:a1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:u1,morphtarget_pars_vertex:f1,morphtarget_vertex:h1,normal_fragment_begin:d1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:_1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:M1,opaque_fragment:E1,packing:T1,premultiplied_alpha_fragment:b1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:U1,shadowmap_pars_vertex:L1,shadowmap_vertex:N1,shadowmask_pars_fragment:O1,skinbase_vertex:z1,skinning_pars_vertex:P1,skinning_vertex:B1,skinnormal_vertex:I1,specularmap_fragment:F1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:X1,transmission_pars_fragment:k1,uv_pars_fragment:W1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:j1,background_vert:Z1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:J1,cube_vert:$1,cube_frag:tT,depth_vert:eT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:aT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:yT,meshphysical_frag:xT,meshtoon_vert:ST,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},zt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Gi={basic:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Vn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Vn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Vn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Vn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Vn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Vn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Vn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Vn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Vn([zt.common,zt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Vn([zt.lights,zt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Gi.physical={uniforms:Vn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Ic={r:0,b:0,g:0},Rr=new Sa,wT=new Je;function DT(o,e,i,r,l,c,h){const d=new ce(0);let m=c===!0?0:1,p,x,g=null,y=0,S=null;function b(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function R(U){let D=!1;const G=b(U);G===null?_(d,m):G&&G.isColor&&(_(G,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,D){const G=b(D);G&&(G.isCubeTexture||G.mapping===tu)?(x===void 0&&(x=new ya(new il(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:ks(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Rr.copy(D.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(Rr)),x.material.toneMapped=Ue.getTransfer(G.colorSpace)!==Ve,(g!==G||y!==G.version||S!==o.toneMapping)&&(x.material.needsUpdate=!0,g=G,y=G.version,S=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new ya(new eu(2,2),new qi({name:"BackgroundMaterial",uniforms:ks(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(G.colorSpace)!==Ve,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||y!==G.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=G,y=G.version,S=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,D){U.getRGB(Ic,Ev(o)),r.buffers.color.setClear(Ic.r,Ic.g,Ic.b,D,h)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:R,addToRenderList:M,dispose:N}}function UT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,V,et,ut,vt){let dt=!1;const P=g(ut,et,V);c!==P&&(c=P,p(c.object)),dt=S(C,ut,et,vt),dt&&b(C,ut,et,vt),vt!==null&&e.update(vt,o.ELEMENT_ARRAY_BUFFER),(dt||h)&&(h=!1,D(C,V,et,ut),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(vt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,V,et){const ut=et.wireframe===!0;let vt=r[C.id];vt===void 0&&(vt={},r[C.id]=vt);let dt=vt[V.id];dt===void 0&&(dt={},vt[V.id]=dt);let P=dt[ut];return P===void 0&&(P=y(m()),dt[ut]=P),P}function y(C){const V=[],et=[],ut=[];for(let vt=0;vt<i;vt++)V[vt]=0,et[vt]=0,ut[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:et,attributeDivisors:ut,object:C,attributes:{},index:null}}function S(C,V,et,ut){const vt=c.attributes,dt=V.attributes;let P=0;const j=et.getAttributes();for(const Z in j)if(j[Z].location>=0){const bt=vt[Z];let O=dt[Z];if(O===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),bt===void 0||bt.attribute!==O||O&&bt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==ut}function b(C,V,et,ut){const vt={},dt=V.attributes;let P=0;const j=et.getAttributes();for(const Z in j)if(j[Z].location>=0){let bt=dt[Z];bt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const O={};O.attribute=bt,bt&&bt.data&&(O.data=bt.data),vt[Z]=O,P++}c.attributes=vt,c.attributesNum=P,c.index=ut}function R(){const C=c.newAttributes;for(let V=0,et=C.length;V<et;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const et=c.newAttributes,ut=c.enabledAttributes,vt=c.attributeDivisors;et[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),vt[C]!==V&&(o.vertexAttribDivisor(C,V),vt[C]=V)}function N(){const C=c.newAttributes,V=c.enabledAttributes;for(let et=0,ut=V.length;et<ut;et++)V[et]!==C[et]&&(o.disableVertexAttribArray(et),V[et]=0)}function U(C,V,et,ut,vt,dt,P){P===!0?o.vertexAttribIPointer(C,V,et,vt,dt):o.vertexAttribPointer(C,V,et,ut,vt,dt)}function D(C,V,et,ut){R();const vt=ut.attributes,dt=et.getAttributes(),P=V.defaultAttributeValues;for(const j in dt){const Z=dt[j];if(Z.location>=0){let Mt=vt[j];if(Mt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const bt=Mt.normalized,O=Mt.itemSize,at=e.get(Mt);if(at===void 0)continue;const St=at.buffer,At=at.type,Ut=at.bytesPerElement,nt=At===o.INT||At===o.UNSIGNED_INT||Mt.gpuType===kd;if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,Lt=ct.stride,Ft=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Z.locationSize;Xt++)_(Z.location+Xt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Xt=0;Xt<Z.locationSize;Xt++)M(Z.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Xt=0;Xt<Z.locationSize;Xt++)U(Z.location+Xt,O/Z.locationSize,At,bt,Lt*Ut,(Ft+O/Z.locationSize*Xt)*Ut,nt)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<Z.locationSize;ct++)_(Z.location+ct,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<Z.locationSize;ct++)M(Z.location+ct);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ct=0;ct<Z.locationSize;ct++)U(Z.location+ct,O/Z.locationSize,At,bt,O*Ut,O/Z.locationSize*ct*Ut,nt)}}else if(P!==void 0){const bt=P[j];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(Z.location,bt);break;case 3:o.vertexAttrib3fv(Z.location,bt);break;case 4:o.vertexAttrib4fv(Z.location,bt);break;default:o.vertexAttrib1fv(Z.location,bt)}}}}N()}function G(){q();for(const C in r){const V=r[C];for(const et in V){const ut=V[et];for(const vt in ut)x(ut[vt].object),delete ut[vt];delete V[et]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const et in V){const ut=V[et];for(const vt in ut)x(ut[vt].object),delete ut[vt];delete V[et]}delete r[C.id]}function z(C){for(const V in r){const et=r[V];if(et[C.id]===void 0)continue;const ut=et[C.id];for(const vt in ut)x(ut[vt].object),delete ut[vt];delete et[C.id]}}function q(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:N}}function LT(o,e,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function h(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function d(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let S=0;for(let b=0;b<g;b++)S+=x[b];i.update(S,r,1)}function m(p,x,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)h(p[b],x[b],y[b]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,y,0,g);let b=0;for(let R=0;R<g;R++)b+=x[R]*y[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Ui&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const q=z===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Wi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!q)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:G,maxSamples:F}}function OT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new wr,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=x(g,y,0)},this.setState=function(g,y,S){const b=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?x(null):p();else{const N=c?0:r,U=N*4;let D=_.clippingState||null;m.value=D,D=x(b,y,U,S);for(let G=0;G!==U;++G)D[G]=i[G];_.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,y,S,b){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const _=S+R*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,D=S;U!==R;++U,D+=4)h.copy(g[U]).applyMatrix4(N,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function zT(o){let e=new WeakMap;function i(h,d){return d===rd?h.mapping=Gs:d===sd&&(h.mapping=Vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===rd||d===sd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new UM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ps=4,w_=[.125,.215,.35,.446,.526,.582],Lr=20,kh=new WM,D_=new ce;let Wh=null,qh=0,Yh=0,jh=!1;const Dr=(1+Math.sqrt(5))/2,zs=1/Dr,U_=[new k(-Dr,zs,0),new k(Dr,zs,0),new k(-zs,0,Dr),new k(zs,0,Dr),new k(0,Dr,-zs),new k(0,Dr,zs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],PT=new k;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,qh,Yh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Xi,minFilter:Xi,generateMipmaps:!1,type:$o,format:Ui,colorSpace:Xs,depthBuffer:!1},l=N_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(c)),this._blurMaterial=IT(c,e,i)}return l}_compileMaterial(e){const i=new ya(this._lodPlanes[0],e);this._renderer.compile(i,kh)}_sceneToCubeUV(e,i,r,l,c){const m=new fi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(D_),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new xv({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),M=new ya(new il,R);let _=!1;const N=e.background;N?N.isColor&&(R.color.copy(N),e.background=null,_=!0):(R.color.copy(D_),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const G=this._cubeSize;Fc(l,D*G,U>2?G:0,G,G),g.setRenderTarget(l),_&&g.render(M,m),g.render(e,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Gs||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ya(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,kh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=U_[(l-c-1)%U_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,g=new ya(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Lr-1),R=c/b,M=isFinite(c)?1+Math.floor(x*R):Lr;M>Lr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Lr}`);const _=[];let N=0;for(let z=0;z<Lr;++z){const q=z/R,w=Math.exp(-q*q/2);_.push(w),z===0?N+=w:z<M&&(N+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:U}=this;y.dTheta.value=b,y.mipInt.value=U-r;const D=this._sizeLods[l],G=3*D*(l>U-Ps?l-U+Ps:0),F=4*(this._cubeSize-D);Fc(i,G,F,3*D,2*D),m.setRenderTarget(i),m.render(g,kh)}}function BT(o){const e=[],i=[],r=[];let l=o;const c=o-Ps+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ps?m=w_[h-o+Ps-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),x=-p,g=1+p,y=[x,x,g,x,g,g,x,x,g,g,x,g],S=6,b=6,R=3,M=2,_=1,N=new Float32Array(R*b*S),U=new Float32Array(M*b*S),D=new Float32Array(_*b*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,q=F>2?0:-1,w=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];N.set(w,R*b*F),U.set(y,M*b*F);const C=[F,F,F,F,F,F];D.set(C,_*b*F)}const G=new $n;G.setAttribute("position",new Sn(N,R)),G.setAttribute("uv",new Sn(U,M)),G.setAttribute("faceIndex",new Sn(D,_)),e.push(G),l>Ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function N_(o,e,i){const r=new Pr(o,e,i);return r.texture.mapping=tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function IT(o,e,i){const r=new Float32Array(Lr),l=new k(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:np(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function O_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function z_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function np(){return`

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
	`}function FT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===rd||m===sd,x=m===Gs||m===Vs;if(p||x){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function HT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Jo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function GT(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,b=g.attributes.position;let R=0;if(S!==null){const N=S.array;R=S.version;for(let U=0,D=N.length;U<D;U+=3){const G=N[U+0],F=N[U+1],z=N[U+2];y.push(G,F,F,z,z,G)}}else if(b!==void 0){const N=b.array;R=b.version;for(let U=0,D=N.length/3-1;U<D;U+=3){const G=U+0,F=U+1,z=U+2;y.push(G,F,F,z,z,G)}}else return;const M=new(gv(y)?Mv:Sv)(y,1);M.version=R;const _=c.get(g);_&&e.remove(_),c.set(g,M)}function x(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function VT(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,b){b!==0&&(o.drawElementsInstanced(r,S,c,y*h,b),i.update(S,r,b))}function x(y,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,b);let M=0;for(let _=0;_<b;_++)M+=S[_];i.update(M,r,1)}function g(y,S,b,R){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/h,S[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,b);let _=0;for(let N=0;N<b;N++)_+=S[N]*R[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function XT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function kT(o,e,i){const r=new WeakMap,l=new ke;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let G=d.attributes.position.count*D,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*F*4*g),q=new _v(z,G,F,g);q.type=va,q.needsUpdate=!0;const w=D*4;for(let V=0;V<g;V++){const et=_[V],ut=N[V],vt=U[V],dt=G*F*4*V;for(let P=0;P<et.count;P++){const j=P*w;b===!0&&(l.fromBufferAttribute(et,P),z[dt+j+0]=l.x,z[dt+j+1]=l.y,z[dt+j+2]=l.z,z[dt+j+3]=0),R===!0&&(l.fromBufferAttribute(ut,P),z[dt+j+4]=l.x,z[dt+j+5]=l.y,z[dt+j+6]=l.z,z[dt+j+7]=0),M===!0&&(l.fromBufferAttribute(vt,P),z[dt+j+8]=l.x,z[dt+j+9]=l.y,z[dt+j+10]=l.z,z[dt+j+11]=vt.itemSize===4?l.w:1)}}y={count:g,texture:q,size:new me(G,F)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function WT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Nv=new Xn,P_=new wv(1,1),Ov=new _v,zv=new pM,Pv=new bv,B_=[],I_=[],F_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function qs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function En(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function nu(o,e){let i=I_[e];i===void 0&&(i=new Int32Array(e),I_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2fv(this.addr,e),En(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;o.uniform3fv(this.addr,e),En(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4fv(this.addr,e),En(i,e)}}function KT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;G_.set(r),o.uniformMatrix2fv(this.addr,!1,G_),En(i,r)}}function QT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;H_.set(r),o.uniformMatrix3fv(this.addr,!1,H_),En(i,r)}}function JT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;F_.set(r),o.uniformMatrix4fv(this.addr,!1,F_),En(i,r)}}function $T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2iv(this.addr,e),En(i,e)}}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3iv(this.addr,e),En(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4iv(this.addr,e),En(i,e)}}function ib(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;o.uniform2uiv(this.addr,e),En(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;o.uniform3uiv(this.addr,e),En(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;o.uniform4uiv(this.addr,e),En(i,e)}}function ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(P_.compareFunction=mv,c=P_):c=Nv,i.setTexture2D(e||c,l)}function lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||zv,l)}function cb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Pv,l)}function ub(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ov,l)}function fb(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return ab;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(o,e){o.uniform1fv(this.addr,e)}function db(o,e){const i=qs(e,this.size,2);o.uniform2fv(this.addr,i)}function pb(o,e){const i=qs(e,this.size,3);o.uniform3fv(this.addr,i)}function mb(o,e){const i=qs(e,this.size,4);o.uniform4fv(this.addr,i)}function gb(o,e){const i=qs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function _b(o,e){const i=qs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function vb(o,e){const i=qs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function yb(o,e){o.uniform1iv(this.addr,e)}function xb(o,e){o.uniform2iv(this.addr,e)}function Sb(o,e){o.uniform3iv(this.addr,e)}function Mb(o,e){o.uniform4iv(this.addr,e)}function Eb(o,e){o.uniform1uiv(this.addr,e)}function Tb(o,e){o.uniform2uiv(this.addr,e)}function bb(o,e){o.uniform3uiv(this.addr,e)}function Ab(o,e){o.uniform4uiv(this.addr,e)}function Rb(o,e,i){const r=this.cache,l=e.length,c=nu(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),En(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Nv,c[h])}function Cb(o,e,i){const r=this.cache,l=e.length,c=nu(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),En(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||zv,c[h])}function wb(o,e,i){const r=this.cache,l=e.length,c=nu(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),En(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Pv,c[h])}function Db(o,e,i){const r=this.cache,l=e.length,c=nu(i,l);Mn(r,c)||(o.uniform1iv(this.addr,c),En(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ov,c[h])}function Ub(o){switch(o){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return xb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Db}}class Lb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=fb(i.type)}}class Nb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ub(i.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function V_(o,e){o.seq.push(e),o.map[e.id]=e}function zb(o,e,i){const r=o.name,l=r.length;for(Zh.lastIndex=0;;){const c=Zh.exec(r),h=Zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new Lb(d,o,e):new Nb(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new Ob(d),V_(i,g)),i=g}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);zb(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function X_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Pb=37297;let Bb=0;function Ib(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const k_=new pe;function Fb(o){Ue._getMatrix(k_,Ue.workingColorSpace,o);const e=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case jc:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function W_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Ib(o.getShaderSource(e),d)}else return c}function Hb(o,e){const i=Fb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Gb(o,e){let i;switch(e){case VS:i="Linear";break;case XS:i="Reinhard";break;case kS:i="Cineon";break;case rv:i="ACESFilmic";break;case qS:i="AgX";break;case YS:i="Neutral";break;case WS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new k;function Vb(){Ue.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function kb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Wb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Yo(o){return o!==""}function q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(qb,jb)}const Yb=new Map;function jb(o,e){let i=ge[e];if(i===void 0){const r=Yb.get(e);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(i)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(Zb,Kb)}function Kb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===SS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ga&&(e="SHADOWMAP_TYPE_VSM"),e}function Jb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Vs&&(e="ENVMAP_MODE_REFRACTION"),e}function tA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case HS:e="ENVMAP_BLENDING_MIX";break;case GS:e="ENVMAP_BLENDING_ADD";break}return e}function eA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function nA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Qb(i),p=Jb(i),x=$b(i),g=tA(i),y=eA(i),S=Xb(i),b=kb(c),R=l.createProgram();let M,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(M=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?ge.tonemapping_pars_fragment:"",i.toneMapping!==nr?Gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Hb("linearToOutputTexel",i.outputColorSpace),Vb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),h=Hd(h),h=q_(h,i),h=Y_(h,i),d=Hd(d),d=q_(d,i),d=Y_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=N+M+h,D=N+_+d,G=X_(l,l.VERTEX_SHADER,U),F=X_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,G),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(V){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(R)||"",ut=l.getShaderInfoLog(G)||"",vt=l.getShaderInfoLog(F)||"",dt=et.trim(),P=ut.trim(),j=vt.trim();let Z=!0,Mt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,G,F);else{const bt=W_(l,G,"vertex"),O=W_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+dt+`
`+bt+`
`+O)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(P===""||j==="")&&(Mt=!1);Mt&&(V.diagnostics={runnable:Z,programLog:dt,vertexShader:{log:P,prefix:M},fragmentShader:{log:j,prefix:_}})}l.deleteShader(G),l.deleteShader(F),q=new Wc(l,R),w=Wb(l,R)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Pb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=F,this}let iA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new rA(e),i.set(e,r)),r}}class rA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function sA(o,e,i,r,l,c,h){const d=new vv,m=new aA,p=new Set,x=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,et,ut){const vt=et.fog,dt=ut.geometry,P=w.isMeshStandardMaterial?et.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),Z=j&&j.mapping===tu?j.image.height:null,Mt=b[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const bt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,O=bt!==void 0?bt.length:0;let at=0;dt.morphAttributes.position!==void 0&&(at=1),dt.morphAttributes.normal!==void 0&&(at=2),dt.morphAttributes.color!==void 0&&(at=3);let St,At,Ut,nt;if(Mt){const Jt=Gi[Mt];St=Jt.vertexShader,At=Jt.fragmentShader}else St=w.vertexShader,At=w.fragmentShader,m.update(w),Ut=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const ct=o.getRenderTarget(),Lt=o.state.buffers.depth.getReversed(),Ft=ut.isInstancedMesh===!0,Xt=ut.isBatchedMesh===!0,fe=!!w.map,en=!!w.matcap,H=!!j,Ae=!!w.aoMap,se=!!w.lightMap,ne=!!w.bumpMap,jt=!!w.normalMap,ze=!!w.displacementMap,Vt=!!w.emissiveMap,le=!!w.metalnessMap,Re=!!w.roughnessMap,Ie=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,B=w.iridescence>0,J=w.sheen>0,ft=w.transmission>0,st=Ie&&!!w.anisotropyMap,Ht=L&&!!w.clearcoatMap,Rt=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,Pt=B&&!!w.iridescenceMap,Et=B&&!!w.iridescenceThicknessMap,Ct=J&&!!w.sheenColorMap,Zt=J&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Dt=!!w.specularColorMap,oe=!!w.specularIntensityMap,W=ft&&!!w.transmissionMap,Tt=ft&&!!w.thicknessMap,wt=!!w.gradientMap,gt=!!w.alphaMap,yt=w.alphaTest>0,pt=!!w.alphaHash,Nt=!!w.extensions;let Qt=nr;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Qt=o.toneMapping);const ae={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:At,defines:w.defines,customVertexShaderID:Ut,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Xt,batchingColor:Xt&&ut._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&ut.instanceColor!==null,instancingMorph:Ft&&ut.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Xs,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:en,envMap:H,envMapMode:H&&j.mapping,envMapCubeUVHeight:Z,aoMap:Ae,lightMap:se,bumpMap:ne,normalMap:jt,displacementMap:y&&ze,emissiveMap:Vt,normalMapObjectSpace:jt&&w.normalMapType===JS,normalMapTangentSpace:jt&&w.normalMapType===QS,metalnessMap:le,roughnessMap:Re,anisotropy:Ie,anisotropyMap:st,clearcoat:L,clearcoatMap:Ht,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:B,iridescenceMap:Pt,iridescenceThicknessMap:Et,sheen:J,sheenColorMap:Ct,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Dt,specularIntensityMap:oe,transmission:ft,transmissionMap:W,thicknessMap:Tt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Bs&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:pt,combine:w.combine,mapUv:fe&&R(w.map.channel),aoMapUv:Ae&&R(w.aoMap.channel),lightMapUv:se&&R(w.lightMap.channel),bumpMapUv:ne&&R(w.bumpMap.channel),normalMapUv:jt&&R(w.normalMap.channel),displacementMapUv:ze&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:le&&R(w.metalnessMap.channel),roughnessMapUv:Re&&R(w.roughnessMap.channel),anisotropyMapUv:st&&R(w.anisotropyMap.channel),clearcoatMapUv:Ht&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Bt&&R(w.specularMap.channel),specularColorMapUv:Dt&&R(w.specularColorMap.channel),specularIntensityMapUv:oe&&R(w.specularIntensityMap.channel),transmissionMapUv:W&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:gt&&R(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(jt||Ie),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!dt.attributes.uv&&(fe||gt),fog:!!vt,useFog:w.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Lt,skinning:ut.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qt,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_a,flipSided:w.side===Jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Nt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&w.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ae.vertexUv1s=p.has(1),ae.vertexUv2s=p.has(2),ae.vertexUv3s=p.has(3),p.clear(),ae}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let V;if(C){const et=Gi[C];V=RM.clone(et.uniforms)}else V=w.uniforms;return V}function G(w,C){let V;for(let et=0,ut=x.length;et<ut;et++){const vt=x[et];if(vt.cacheKey===C){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new nA(o,C,w,c),x.push(V)),V}function F(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function z(w){m.remove(w)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:G,releaseProgram:F,releaseShaderCache:z,programs:x,dispose:q}}function oA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function lA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function K_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Q_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,b,R,M){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:y,material:S,groupOrder:b,renderOrder:g.renderOrder,z:R,group:M},o[e]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=S,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=R,_.group=M),e++,_}function d(g,y,S,b,R,M){const _=h(g,y,S,b,R,M);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(g,y,S,b,R,M){const _=h(g,y,S,b,R,M);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||lA),r.length>1&&r.sort(y||K_),l.length>1&&l.sort(y||K_)}function x(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function cA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Q_,o.set(r,[h])):l>=c.length?(h=new Q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function uA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new ce};break;case"SpotLight":i={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function fA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let hA=0;function dA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pA(o){const e=new uA,i=fA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,c=new Je,h=new Je;function d(p){let x=0,g=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,b=0,R=0,M=0,_=0,N=0,U=0,D=0,G=0,F=0,z=0;p.sort(dA);for(let w=0,C=p.length;w<C;w++){const V=p[w],et=V.color,ut=V.intensity,vt=V.distance,dt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=et.r*ut,g+=et.g*ut,y+=et.b*ut;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],ut);z++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Z=i.get(V);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=dt,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=P,S++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(et).multiplyScalar(ut),P.distance=vt,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[R]=P;const j=V.shadow;if(V.map&&(r.spotLightMap[G]=V.map,G++,j.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[R]=j.matrix,V.castShadow){const Z=i.get(V);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,r.spotShadow[R]=Z,r.spotShadowMap[R]=dt,D++}R++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(et).multiplyScalar(ut),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=P,M++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const j=V.shadow,Z=i.get(V);Z.shadowIntensity=j.intensity,Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,r.pointShadow[b]=Z,r.pointShadowMap[b]=dt,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=P,b++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(ut),P.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==S||q.pointLength!==b||q.spotLength!==R||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==N||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==G||q.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,q.directionalLength=S,q.pointLength=b,q.spotLength=R,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=N,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=G,q.numLightProbes=z,r.version=hA++)}function m(p,x){let g=0,y=0,S=0,b=0,R=0;const M=x.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const U=p[_];if(U.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),g++}else if(U.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(U.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),y++}else if(U.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function J_(o){const e=new pA(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function h(x){r.push(x)}function d(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function mA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new J_(o),e.set(l,[d])):c>=h.length?(d=new J_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const gA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vA(o,e,i){let r=new $d;const l=new me,c=new me,h=new ke,d=new GM({depthPacking:KS}),m=new VM,p={},x=i.maxTextureSize,g={[ar]:Jn,[Jn]:ar,[_a]:_a},y=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:gA,fragmentShader:_A}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const b=new $n;b.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ya(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iv;let _=this.type;this.render=function(F,z,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),et=o.state;et.setBlending(er),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ut=_!==ga&&this.type===ga,vt=_===ga&&this.type!==ga;for(let dt=0,P=F.length;dt<P;dt++){const j=F[dt],Z=j.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const Mt=Z.getFrameExtents();if(l.multiply(Mt),c.copy(Z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/Mt.x),l.x=c.x*Mt.x,Z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/Mt.y),l.y=c.y*Mt.y,Z.mapSize.y=c.y)),Z.map===null||ut===!0||vt===!0){const O=this.type!==ga?{minFilter:Li,magFilter:Li}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Pr(l.x,l.y,O),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const bt=Z.getViewportCount();for(let O=0;O<bt;O++){const at=Z.getViewport(O);h.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),et.viewport(h),Z.updateMatrices(j,O),r=Z.getFrustum(),D(z,q,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===ga&&N(Z,q),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,V)};function N(F,z){const q=e.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,q,y,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,q,S,R,null)}function U(F,z,q,w){let C=null;const V=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const et=C.uuid,ut=z.uuid;let vt=p[et];vt===void 0&&(vt={},p[et]=vt);let dt=vt[ut];dt===void 0&&(dt=C.clone(),vt[ut]=dt,z.addEventListener("dispose",G)),C=dt}if(C.visible=z.visible,C.wireframe=z.wireframe,w===ga?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const et=o.properties.get(C);et.light=q}return C}function D(F,z,q,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ga)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const ut=e.update(F),vt=F.material;if(Array.isArray(vt)){const dt=ut.groups;for(let P=0,j=dt.length;P<j;P++){const Z=dt[P],Mt=vt[Z.materialIndex];if(Mt&&Mt.visible){const bt=U(F,Mt,w,C);F.onBeforeShadow(o,F,z,q,ut,bt,Z),o.renderBufferDirect(q,null,ut,bt,F,Z),F.onAfterShadow(o,F,z,q,ut,bt,Z)}}}else if(vt.visible){const dt=U(F,vt,w,C);F.onBeforeShadow(o,F,z,q,ut,dt,null),o.renderBufferDirect(q,null,ut,dt,F,null),F.onAfterShadow(o,F,z,q,ut,dt,null)}}const et=F.children;for(let ut=0,vt=et.length;ut<vt;ut++)D(et[ut],z,q,w,C)}function G(F){F.target.removeEventListener("dispose",G);for(const q in p){const w=p[q],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const yA={[Jh]:$h,[td]:id,[ed]:ad,[Hs]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:Hs};function xA(o,e){function i(){let W=!1;const Tt=new ke;let wt=null;const gt=new ke(0,0,0,0);return{setMask:function(yt){wt!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){W=yt},setClear:function(yt,pt,Nt,Qt,ae){ae===!0&&(yt*=Qt,pt*=Qt,Nt*=Qt),Tt.set(yt,pt,Nt,Qt),gt.equals(Tt)===!1&&(o.clearColor(yt,pt,Nt,Qt),gt.copy(Tt))},reset:function(){W=!1,wt=null,gt.set(-1,0,0,0)}}}function r(){let W=!1,Tt=!1,wt=null,gt=null,yt=null;return{setReversed:function(pt){if(Tt!==pt){const Nt=e.get("EXT_clip_control");pt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),Tt=pt;const Qt=yt;yt=null,this.setClear(Qt)}},getReversed:function(){return Tt},setTest:function(pt){pt?ct(o.DEPTH_TEST):Lt(o.DEPTH_TEST)},setMask:function(pt){wt!==pt&&!W&&(o.depthMask(pt),wt=pt)},setFunc:function(pt){if(Tt&&(pt=yA[pt]),gt!==pt){switch(pt){case Jh:o.depthFunc(o.NEVER);break;case $h:o.depthFunc(o.ALWAYS);break;case td:o.depthFunc(o.LESS);break;case Hs:o.depthFunc(o.LEQUAL);break;case ed:o.depthFunc(o.EQUAL);break;case nd:o.depthFunc(o.GEQUAL);break;case id:o.depthFunc(o.GREATER);break;case ad:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=pt}},setLocked:function(pt){W=pt},setClear:function(pt){yt!==pt&&(Tt&&(pt=1-pt),o.clearDepth(pt),yt=pt)},reset:function(){W=!1,wt=null,gt=null,yt=null,Tt=!1}}}function l(){let W=!1,Tt=null,wt=null,gt=null,yt=null,pt=null,Nt=null,Qt=null,ae=null;return{setTest:function(Jt){W||(Jt?ct(o.STENCIL_TEST):Lt(o.STENCIL_TEST))},setMask:function(Jt){Tt!==Jt&&!W&&(o.stencilMask(Jt),Tt=Jt)},setFunc:function(Jt,je,on){(wt!==Jt||gt!==je||yt!==on)&&(o.stencilFunc(Jt,je,on),wt=Jt,gt=je,yt=on)},setOp:function(Jt,je,on){(pt!==Jt||Nt!==je||Qt!==on)&&(o.stencilOp(Jt,je,on),pt=Jt,Nt=je,Qt=on)},setLocked:function(Jt){W=Jt},setClear:function(Jt){ae!==Jt&&(o.clearStencil(Jt),ae=Jt)},reset:function(){W=!1,Tt=null,wt=null,gt=null,yt=null,pt=null,Nt=null,Qt=null,ae=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},y=new WeakMap,S=[],b=null,R=!1,M=null,_=null,N=null,U=null,D=null,G=null,F=null,z=new ce(0,0,0),q=0,w=!1,C=null,V=null,et=null,ut=null,vt=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),P=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),P=j>=2);let Mt=null,bt={};const O=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),St=new ke().fromArray(O),At=new ke().fromArray(at);function Ut(W,Tt,wt,gt){const yt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(W,pt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Nt=0;Nt<wt;Nt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Nt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return pt}const nt={};nt[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Hs),ne(!1),jt(K0),ct(o.CULL_FACE),Ae(er);function ct(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Lt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ft(W,Tt){return g[W]!==Tt?(o.bindFramebuffer(W,Tt),g[W]=Tt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Tt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Xt(W,Tt){let wt=S,gt=!1;if(W){wt=y.get(Tt),wt===void 0&&(wt=[],y.set(Tt,wt));const yt=W.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,Nt=yt.length;pt<Nt;pt++)wt[pt]=o.COLOR_ATTACHMENT0+pt;wt.length=yt.length,gt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,gt=!0);gt&&o.drawBuffers(wt)}function fe(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const en={[Ur]:o.FUNC_ADD,[ES]:o.FUNC_SUBTRACT,[TS]:o.FUNC_REVERSE_SUBTRACT};en[bS]=o.MIN,en[AS]=o.MAX;const H={[RS]:o.ZERO,[CS]:o.ONE,[wS]:o.SRC_COLOR,[Kh]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[NS]:o.DST_COLOR,[US]:o.DST_ALPHA,[DS]:o.ONE_MINUS_SRC_COLOR,[Qh]:o.ONE_MINUS_SRC_ALPHA,[OS]:o.ONE_MINUS_DST_COLOR,[LS]:o.ONE_MINUS_DST_ALPHA,[PS]:o.CONSTANT_COLOR,[BS]:o.ONE_MINUS_CONSTANT_COLOR,[IS]:o.CONSTANT_ALPHA,[FS]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(W,Tt,wt,gt,yt,pt,Nt,Qt,ae,Jt){if(W===er){R===!0&&(Lt(o.BLEND),R=!1);return}if(R===!1&&(ct(o.BLEND),R=!0),W!==MS){if(W!==M||Jt!==w){if((_!==Ur||D!==Ur)&&(o.blendEquation(o.FUNC_ADD),_=Ur,D=Ur),Jt)switch(W){case Bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fs:o.blendFunc(o.ONE,o.ONE);break;case Q0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case J0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,U=null,G=null,F=null,z.set(0,0,0),q=0,M=W,w=Jt}return}yt=yt||Tt,pt=pt||wt,Nt=Nt||gt,(Tt!==_||yt!==D)&&(o.blendEquationSeparate(en[Tt],en[yt]),_=Tt,D=yt),(wt!==N||gt!==U||pt!==G||Nt!==F)&&(o.blendFuncSeparate(H[wt],H[gt],H[pt],H[Nt]),N=wt,U=gt,G=pt,F=Nt),(Qt.equals(z)===!1||ae!==q)&&(o.blendColor(Qt.r,Qt.g,Qt.b,ae),z.copy(Qt),q=ae),M=W,w=!1}function se(W,Tt){W.side===_a?Lt(o.CULL_FACE):ct(o.CULL_FACE);let wt=W.side===Jn;Tt&&(wt=!wt),ne(wt),W.blending===Bs&&W.transparent===!1?Ae(er):Ae(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const gt=W.stencilWrite;d.setTest(gt),gt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Vt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Lt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function jt(W){W!==yS?(ct(o.CULL_FACE),W!==V&&(W===K0?o.cullFace(o.BACK):W===xS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Lt(o.CULL_FACE),V=W}function ze(W){W!==et&&(P&&o.lineWidth(W),et=W)}function Vt(W,Tt,wt){W?(ct(o.POLYGON_OFFSET_FILL),(ut!==Tt||vt!==wt)&&(o.polygonOffset(Tt,wt),ut=Tt,vt=wt)):Lt(o.POLYGON_OFFSET_FILL)}function le(W){W?ct(o.SCISSOR_TEST):Lt(o.SCISSOR_TEST)}function Re(W){W===void 0&&(W=o.TEXTURE0+dt-1),Mt!==W&&(o.activeTexture(W),Mt=W)}function Ie(W,Tt,wt){wt===void 0&&(Mt===null?wt=o.TEXTURE0+dt-1:wt=Mt);let gt=bt[wt];gt===void 0&&(gt={type:void 0,texture:void 0},bt[wt]=gt),(gt.type!==W||gt.texture!==Tt)&&(Mt!==wt&&(o.activeTexture(wt),Mt=wt),o.bindTexture(W,Tt||nt[W]),gt.type=W,gt.texture=Tt)}function L(){const W=bt[Mt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function B(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function J(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(W){St.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Zt(W){At.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),At.copy(W))}function Bt(W,Tt){let wt=p.get(Tt);wt===void 0&&(wt=new WeakMap,p.set(Tt,wt));let gt=wt.get(W);gt===void 0&&(gt=o.getUniformBlockIndex(Tt,W.name),wt.set(W,gt))}function Dt(W,Tt){const gt=p.get(Tt).get(W);m.get(Tt)!==gt&&(o.uniformBlockBinding(Tt,gt,W.__bindingPointIndex),m.set(Tt,gt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},Mt=null,bt={},g={},y=new WeakMap,S=[],b=null,R=!1,M=null,_=null,N=null,U=null,D=null,G=null,F=null,z=new ce(0,0,0),q=0,w=!1,C=null,V=null,et=null,ut=null,vt=null,St.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Lt,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:fe,setBlending:Ae,setMaterial:se,setFlipSided:ne,setCullFace:jt,setLineWidth:ze,setPolygonOffset:Vt,setScissorTest:le,activeTexture:Re,bindTexture:Ie,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Pt,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:kt,texSubImage2D:J,texSubImage3D:ft,compressedTexSubImage2D:st,compressedTexSubImage3D:Ht,scissor:Ct,viewport:Zt,reset:oe}}function SA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,x=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return S?new OffscreenCanvas(L,E):Kc("canvas")}function R(L,E,B){let J=1;const ft=Ie(L);if((ft.width>B||ft.height>B)&&(J=B/Math.max(ft.width,ft.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const st=Math.floor(J*ft.width),Ht=Math.floor(J*ft.height);g===void 0&&(g=b(st,Ht));const Rt=E?b(st,Ht):g;return Rt.width=st,Rt.height=Ht,Rt.getContext("2d").drawImage(L,0,0,st,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+st+"x"+Ht+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,E,B,J,ft=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let st=E;if(E===o.RED&&(B===o.FLOAT&&(st=o.R32F),B===o.HALF_FLOAT&&(st=o.R16F),B===o.UNSIGNED_BYTE&&(st=o.R8)),E===o.RED_INTEGER&&(B===o.UNSIGNED_BYTE&&(st=o.R8UI),B===o.UNSIGNED_SHORT&&(st=o.R16UI),B===o.UNSIGNED_INT&&(st=o.R32UI),B===o.BYTE&&(st=o.R8I),B===o.SHORT&&(st=o.R16I),B===o.INT&&(st=o.R32I)),E===o.RG&&(B===o.FLOAT&&(st=o.RG32F),B===o.HALF_FLOAT&&(st=o.RG16F),B===o.UNSIGNED_BYTE&&(st=o.RG8)),E===o.RG_INTEGER&&(B===o.UNSIGNED_BYTE&&(st=o.RG8UI),B===o.UNSIGNED_SHORT&&(st=o.RG16UI),B===o.UNSIGNED_INT&&(st=o.RG32UI),B===o.BYTE&&(st=o.RG8I),B===o.SHORT&&(st=o.RG16I),B===o.INT&&(st=o.RG32I)),E===o.RGB_INTEGER&&(B===o.UNSIGNED_BYTE&&(st=o.RGB8UI),B===o.UNSIGNED_SHORT&&(st=o.RGB16UI),B===o.UNSIGNED_INT&&(st=o.RGB32UI),B===o.BYTE&&(st=o.RGB8I),B===o.SHORT&&(st=o.RGB16I),B===o.INT&&(st=o.RGB32I)),E===o.RGBA_INTEGER&&(B===o.UNSIGNED_BYTE&&(st=o.RGBA8UI),B===o.UNSIGNED_SHORT&&(st=o.RGBA16UI),B===o.UNSIGNED_INT&&(st=o.RGBA32UI),B===o.BYTE&&(st=o.RGBA8I),B===o.SHORT&&(st=o.RGBA16I),B===o.INT&&(st=o.RGBA32I)),E===o.RGB&&(B===o.UNSIGNED_INT_5_9_9_9_REV&&(st=o.RGB9_E5),B===o.UNSIGNED_INT_10F_11F_11F_REV&&(st=o.R11F_G11F_B10F)),E===o.RGBA){const Ht=ft?jc:Ue.getTransfer(J);B===o.FLOAT&&(st=o.RGBA32F),B===o.HALF_FLOAT&&(st=o.RGBA16F),B===o.UNSIGNED_BYTE&&(st=Ht===Ve?o.SRGB8_ALPHA8:o.RGBA8),B===o.UNSIGNED_SHORT_4_4_4_4&&(st=o.RGBA4),B===o.UNSIGNED_SHORT_5_5_5_1&&(st=o.RGB5_A1)}return(st===o.R16F||st===o.R32F||st===o.RG16F||st===o.RG32F||st===o.RGBA16F||st===o.RGBA32F)&&e.get("EXT_color_buffer_float"),st}function D(L,E){let B;return L?E===null||E===zr||E===Zo?B=o.DEPTH24_STENCIL8:E===va?B=o.DEPTH32F_STENCIL8:E===jo&&(B=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===zr||E===Zo?B=o.DEPTH_COMPONENT24:E===va?B=o.DEPTH_COMPONENT32F:E===jo&&(B=o.DEPTH_COMPONENT16),B}function G(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Li&&L.minFilter!==Xi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),q(E),E.isVideoTexture&&x.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),C(E)}function q(L){const E=r.get(L);if(E.__webglInit===void 0)return;const B=L.source,J=y.get(B);if(J){const ft=J[E.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&w(L),Object.keys(J).length===0&&y.delete(B)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const B=L.source,J=y.get(B);delete J[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ft=0;ft<E.__webglFramebuffer[J].length;ft++)o.deleteFramebuffer(E.__webglFramebuffer[J][ft]);else o.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)o.deleteFramebuffer(E.__webglFramebuffer[J]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=L.textures;for(let J=0,ft=B.length;J<ft;J++){const st=r.get(B[J]);st.__webglTexture&&(o.deleteTexture(st.__webglTexture),h.memory.textures--),r.remove(B[J])}r.remove(L)}let V=0;function et(){V=0}function ut(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function vt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function dt(L,E){const B=r.get(L);if(L.isVideoTexture&&le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&B.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(B,L,E);return}}else L.isExternalTexture&&(B.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,B.__webglTexture,o.TEXTURE0+E)}function P(L,E){const B=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){nt(B,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,B.__webglTexture,o.TEXTURE0+E)}function j(L,E){const B=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){nt(B,L,E);return}i.bindTexture(o.TEXTURE_3D,B.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const B=r.get(L);if(L.version>0&&B.__version!==L.version){ct(B,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+E)}const Mt={[od]:o.REPEAT,[Nr]:o.CLAMP_TO_EDGE,[ld]:o.MIRRORED_REPEAT},bt={[Li]:o.NEAREST,[jS]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Xi]:o.LINEAR,[ph]:o.LINEAR_MIPMAP_NEAREST,[Or]:o.LINEAR_MIPMAP_LINEAR},O={[$S]:o.NEVER,[rM]:o.ALWAYS,[tM]:o.LESS,[mv]:o.LEQUAL,[eM]:o.EQUAL,[aM]:o.GEQUAL,[nM]:o.GREATER,[iM]:o.NOTEQUAL};function at(L,E){if(E.type===va&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xi||E.magFilter===ph||E.magFilter===dc||E.magFilter===Or||E.minFilter===Xi||E.minFilter===ph||E.minFilter===dc||E.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,bt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Li||E.minFilter!==dc&&E.minFilter!==Or||E.type===va&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(L,E){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const J=E.source;let ft=y.get(J);ft===void 0&&(ft={},y.set(J,ft));const st=vt(E);if(st!==L.__cacheKey){ft[st]===void 0&&(ft[st]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,B=!0),ft[st].usedTimes++;const Ht=ft[L.__cacheKey];Ht!==void 0&&(ft[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&w(E)),L.__cacheKey=st,L.__webglTexture=ft[st].texture}return B}function At(L,E,B){return Math.floor(Math.floor(L/B)/E)}function Ut(L,E,B,J){const st=L.updateRanges;if(st.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,B,J,E.data);else{st.sort((Et,Ct)=>Et.start-Ct.start);let Ht=0;for(let Et=1;Et<st.length;Et++){const Ct=st[Ht],Zt=st[Et],Bt=Ct.start+Ct.count,Dt=At(Zt.start,E.width,4),oe=At(Ct.start,E.width,4);Zt.start<=Bt+1&&Dt===oe&&At(Zt.start+Zt.count-1,E.width,4)===Dt?Ct.count=Math.max(Ct.count,Zt.start+Zt.count-Ct.start):(++Ht,st[Ht]=Zt)}st.length=Ht+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Pt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Ct=st.length;Et<Ct;Et++){const Zt=st[Et],Bt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),oe=Bt%E.width,W=Math.floor(Bt/E.width),Tt=Dt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,oe,W,Tt,wt,B,J,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function nt(L,E,B){let J=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=o.TEXTURE_3D);const ft=St(L,E),st=E.source;i.bindTexture(J,L.__webglTexture,o.TEXTURE0+B);const Ht=r.get(st);if(st.version!==Ht.__version||ft===!0){i.activeTexture(o.TEXTURE0+B);const Rt=Ue.getPrimaries(Ue.workingColorSpace),kt=E.colorSpace===$a?null:Ue.getPrimaries(E.colorSpace),Pt=E.colorSpace===$a||Rt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Et=R(E.image,!1,l.maxTextureSize);Et=Re(E,Et);const Ct=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Bt=U(E.internalFormat,Ct,Zt,E.colorSpace,E.isVideoTexture);at(J,E);let Dt;const oe=E.mipmaps,W=E.isVideoTexture!==!0,Tt=Ht.__version===void 0||ft===!0,wt=st.dataReady,gt=G(E,Et);if(E.isDepthTexture)Bt=D(E.format===Qo,E.type),Tt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Bt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ct,Zt,null));else if(E.isDataTexture)if(oe.length>0){W&&Tt&&i.texStorage2D(o.TEXTURE_2D,gt,Bt,oe[0].width,oe[0].height);for(let yt=0,pt=oe.length;yt<pt;yt++)Dt=oe[yt],W?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Dt.width,Dt.height,0,Ct,Zt,Dt.data);E.generateMipmaps=!1}else W?(Tt&&i.texStorage2D(o.TEXTURE_2D,gt,Bt,Et.width,Et.height),wt&&Ut(E,Et,Ct,Zt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ct,Zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,gt,Bt,oe[0].width,oe[0].height,Et.depth);for(let yt=0,pt=oe.length;yt<pt;yt++)if(Dt=oe[yt],E.format!==Ui)if(Ct!==null)if(W){if(wt)if(E.layerUpdates.size>0){const Nt=C_(Dt.width,Dt.height,E.format,E.type);for(const Qt of E.layerUpdates){const ae=Dt.data.subarray(Qt*Nt/Dt.data.BYTES_PER_ELEMENT,(Qt+1)*Nt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,Qt,Dt.width,Dt.height,1,Ct,ae)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Et.depth,Ct,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Dt.width,Dt.height,Et.depth,Ct,Zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Dt.width,Dt.height,Et.depth,0,Ct,Zt,Dt.data)}else{W&&Tt&&i.texStorage2D(o.TEXTURE_2D,gt,Bt,oe[0].width,oe[0].height);for(let yt=0,pt=oe.length;yt<pt;yt++)Dt=oe[yt],E.format!==Ui?Ct!==null?W?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Dt.width,Dt.height,Ct,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Dt.width,Dt.height,0,Ct,Zt,Dt.data)}else if(E.isDataArrayTexture)if(W){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,gt,Bt,Et.width,Et.height,Et.depth),wt)if(E.layerUpdates.size>0){const yt=C_(Et.width,Et.height,E.format,E.type);for(const pt of E.layerUpdates){const Nt=Et.data.subarray(pt*yt/Et.data.BYTES_PER_ELEMENT,(pt+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,Et.width,Et.height,1,Ct,Zt,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ct,Zt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,Ct,Zt,Et.data);else if(E.isData3DTexture)W?(Tt&&i.texStorage3D(o.TEXTURE_3D,gt,Bt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ct,Zt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,Ct,Zt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(W)i.texStorage2D(o.TEXTURE_2D,gt,Bt,Et.width,Et.height);else{let yt=Et.width,pt=Et.height;for(let Nt=0;Nt<gt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Bt,yt,pt,0,Ct,Zt,null),yt>>=1,pt>>=1}}else if(oe.length>0){if(W&&Tt){const yt=Ie(oe[0]);i.texStorage2D(o.TEXTURE_2D,gt,Bt,yt.width,yt.height)}for(let yt=0,pt=oe.length;yt<pt;yt++)Dt=oe[yt],W?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct,Zt,Dt):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ct,Zt,Dt);E.generateMipmaps=!1}else if(W){if(Tt){const yt=Ie(Et);i.texStorage2D(o.TEXTURE_2D,gt,Bt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Zt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ct,Zt,Et);M(E)&&_(J),Ht.__version=st.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ct(L,E,B){if(E.image.length!==6)return;const J=St(L,E),ft=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+B);const st=r.get(ft);if(ft.version!==st.__version||J===!0){i.activeTexture(o.TEXTURE0+B);const Ht=Ue.getPrimaries(Ue.workingColorSpace),Rt=E.colorSpace===$a?null:Ue.getPrimaries(E.colorSpace),kt=E.colorSpace===$a||Ht===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let pt=0;pt<6;pt++)!Pt&&!Et?Ct[pt]=R(E.image[pt],!0,l.maxCubemapSize):Ct[pt]=Et?E.image[pt].image:E.image[pt],Ct[pt]=Re(E,Ct[pt]);const Zt=Ct[0],Bt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),oe=U(E.internalFormat,Bt,Dt,E.colorSpace),W=E.isVideoTexture!==!0,Tt=st.__version===void 0||J===!0,wt=ft.dataReady;let gt=G(E,Zt);at(o.TEXTURE_CUBE_MAP,E);let yt;if(Pt){W&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,gt,oe,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){yt=Ct[pt].mipmaps;for(let Nt=0;Nt<yt.length;Nt++){const Qt=yt[Nt];E.format!==Ui?Bt!==null?W?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,Qt.width,Qt.height,Bt,Qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,oe,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,0,0,Qt.width,Qt.height,Bt,Dt,Qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt,oe,Qt.width,Qt.height,0,Bt,Dt,Qt.data)}}}else{if(yt=E.mipmaps,W&&Tt){yt.length>0&&gt++;const pt=Ie(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,gt,oe,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Et){W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ct[pt].width,Ct[pt].height,Bt,Dt,Ct[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,oe,Ct[pt].width,Ct[pt].height,0,Bt,Dt,Ct[pt].data);for(let Nt=0;Nt<yt.length;Nt++){const ae=yt[Nt].image[pt].image;W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,ae.width,ae.height,Bt,Dt,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,oe,ae.width,ae.height,0,Bt,Dt,ae.data)}}else{W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Bt,Dt,Ct[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,oe,Bt,Dt,Ct[pt]);for(let Nt=0;Nt<yt.length;Nt++){const Qt=yt[Nt];W?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,0,0,Bt,Dt,Qt.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Nt+1,oe,Bt,Dt,Qt.image[pt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),st.__version=ft.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Lt(L,E,B,J,ft,st){const Ht=c.convert(B.format,B.colorSpace),Rt=c.convert(B.type),kt=U(B.internalFormat,Ht,Rt,B.colorSpace),Pt=r.get(E),Et=r.get(B);if(Et.__renderTarget=E,!Pt.__hasExternalTextures){const Ct=Math.max(1,E.width>>st),Zt=Math.max(1,E.height>>st);ft===o.TEXTURE_3D||ft===o.TEXTURE_2D_ARRAY?i.texImage3D(ft,st,kt,Ct,Zt,E.depth,0,Ht,Rt,null):i.texImage2D(ft,st,kt,Ct,Zt,0,Ht,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,J,ft,Et.__webglTexture,0,ze(E)):(ft===o.TEXTURE_2D||ft>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,J,ft,Et.__webglTexture,st),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(L,E,B){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const J=E.depthTexture,ft=J&&J.isDepthTexture?J.type:null,st=D(E.stencilBuffer,ft),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ze(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,st,E.width,E.height):B?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,st,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,st,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const J=E.textures;for(let ft=0;ft<J.length;ft++){const st=J[ft],Ht=c.convert(st.format,st.colorSpace),Rt=c.convert(st.type),kt=U(st.internalFormat,Ht,Rt,st.colorSpace),Pt=ze(E);B&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,kt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt(E.depthTexture,0);const ft=J.__webglTexture,st=ze(E);if(E.depthTexture.format===Ko)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ft,0);else if(E.depthTexture.format===Qo)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function fe(L){const E=r.get(L),B=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ft=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ft)};J.addEventListener("dispose",ft),E.__depthDisposeCallback=ft}E.__boundDepthTexture=J}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?Xt(E.__webglFramebuffer[0],L):Xt(E.__webglFramebuffer,L)}else if(B){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=o.createRenderbuffer(),Ft(E.__webglDepthbuffer[J],L,!1);else{const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer[J];o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,st)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ft(E.__webglDepthbuffer,L,!1);else{const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,st)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(L,E,B){const J=r.get(L);E!==void 0&&Lt(J.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),B!==void 0&&fe(L)}function H(L){const E=L.texture,B=r.get(L),J=r.get(E);L.addEventListener("dispose",z);const ft=L.textures,st=L.isWebGLCubeRenderTarget===!0,Ht=ft.length>1;if(Ht||(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=E.version,h.memory.textures++),st){B.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[Rt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)B.__webglFramebuffer[Rt][kt]=o.createFramebuffer()}else B.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)B.__webglFramebuffer[Rt]=o.createFramebuffer()}else B.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Rt=0,kt=ft.length;Rt<kt;Rt++){const Pt=r.get(ft[Rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Vt(L)===!1){B.__webglMultisampledFramebuffer=o.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ft.length;Rt++){const kt=ft[Rt];B.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,B.__webglColorRenderbuffer[Rt]);const Pt=c.convert(kt.format,kt.colorSpace),Et=c.convert(kt.type),Ct=U(kt.internalFormat,Pt,Et,kt.colorSpace,L.isXRRenderTarget===!0),Zt=ze(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ct,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,B.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(B.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(st){i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture),at(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Lt(B.__webglFramebuffer[Rt][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else Lt(B.__webglFramebuffer[Rt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Rt=0,kt=ft.length;Rt<kt;Rt++){const Pt=ft[Rt],Et=r.get(Pt);let Ct=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Et.__webglTexture),at(Ct,Pt),Lt(B.__webglFramebuffer,L,Pt,o.COLOR_ATTACHMENT0+Rt,Ct,0),M(Pt)&&_(Ct)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,J.__webglTexture),at(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Lt(B.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,Rt,kt);else Lt(B.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&_(Rt),i.unbindTexture()}L.depthBuffer&&fe(L)}function Ae(L){const E=L.textures;for(let B=0,J=E.length;B<J;B++){const ft=E[B];if(M(ft)){const st=N(L),Ht=r.get(ft).__webglTexture;i.bindTexture(st,Ht),_(st),i.unbindTexture()}}}const se=[],ne=[];function jt(L){if(L.samples>0){if(Vt(L)===!1){const E=L.textures,B=L.width,J=L.height;let ft=o.COLOR_BUFFER_BIT;const st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(L),Rt=E.length>1;if(Rt)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ft|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ft|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Pt]);const Et=r.get(E[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,B,J,0,0,B,J,ft,o.NEAREST),m===!0&&(se.length=0,ne.length=0,se.push(o.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(se.push(st),ne.push(st),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[Pt]);const Et=r.get(E[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ze(L){return Math.min(l.maxSamples,L.samples)}function Vt(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function le(L){const E=h.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function Re(L,E){const B=L.colorSpace,J=L.format,ft=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Xs&&B!==$a&&(Ue.getTransfer(B)===Ve?(J!==Ui||ft!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=et,this.setTexture2D=dt,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Z,this.rebindTextures=en,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Vt}function MA(o,e){function i(r,l=$a){let c;const h=Ue.getTransfer(l);if(r===Wi)return o.UNSIGNED_BYTE;if(r===Wd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===cv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===uv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ov)return o.BYTE;if(r===lv)return o.SHORT;if(r===jo)return o.UNSIGNED_SHORT;if(r===kd)return o.INT;if(r===zr)return o.UNSIGNED_INT;if(r===va)return o.FLOAT;if(r===$o)return o.HALF_FLOAT;if(r===fv)return o.ALPHA;if(r===hv)return o.RGB;if(r===Ui)return o.RGBA;if(r===Ko)return o.DEPTH_COMPONENT;if(r===Qo)return o.DEPTH_STENCIL;if(r===dv)return o.RED;if(r===Yd)return o.RED_INTEGER;if(r===pv)return o.RG;if(r===jd)return o.RG_INTEGER;if(r===Zd)return o.RGBA_INTEGER;if(r===Gc||r===Vc||r===Xc||r===kc)if(h===Ve)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd||r===Md||r===Ed||r===Td||r===bd||r===Ad||r===Rd||r===Cd||r===wd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dd||r===Ud||r===Ld)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Dd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===Od||r===zd||r===Pd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const EA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:EA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ya(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends Ws{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,y=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",M=new bA,_={},N=i.getContextAttributes();let U=null,D=null;const G=[],F=[],z=new me;let q=null;const w=new fi;w.viewport=new ke;const C=new fi;C.viewport=new ke;const V=[w,C],et=new YM;let ut=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=G[nt];return ct===void 0&&(ct=new Bh,G[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=G[nt];return ct===void 0&&(ct=new Bh,G[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=G[nt];return ct===void 0&&(ct=new Bh,G[nt]=ct),ct.getHandSpace()};function dt(nt){const ct=F.indexOf(nt.inputSource);if(ct===-1)return;const Lt=G[ct];Lt!==void 0&&(Lt.update(nt.inputSource,nt.frame,p||h),Lt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let nt=0;nt<G.length;nt++){const ct=F[nt];ct!==null&&(F[nt]=null,G[nt].disconnect(ct))}ut=null,vt=null,M.reset();for(const nt in _)delete _[nt];e.setRenderTarget(U),S=null,y=null,g=null,l=null,D=null,Ut.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ft=null,Xt=null;N.depth&&(Xt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Lt=N.stencil?Qo:Ko,Ft=N.stencil?Zo:zr);const fe={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(fe),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Pr(y.textureWidth,y.textureHeight,{format:Ui,type:Wi,depthTexture:new wv(y.textureWidth,y.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Lt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Lt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Pr(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(nt){for(let ct=0;ct<nt.removed.length;ct++){const Lt=nt.removed[ct],Ft=F.indexOf(Lt);Ft>=0&&(F[Ft]=null,G[Ft].disconnect(Lt))}for(let ct=0;ct<nt.added.length;ct++){const Lt=nt.added[ct];let Ft=F.indexOf(Lt);if(Ft===-1){for(let fe=0;fe<G.length;fe++)if(fe>=F.length){F.push(Lt),Ft=fe;break}else if(F[fe]===null){F[fe]=Lt,Ft=fe;break}if(Ft===-1)break}const Xt=G[Ft];Xt&&Xt.connect(Lt)}}const Z=new k,Mt=new k;function bt(nt,ct,Lt){Z.setFromMatrixPosition(ct.matrixWorld),Mt.setFromMatrixPosition(Lt.matrixWorld);const Ft=Z.distanceTo(Mt),Xt=ct.projectionMatrix.elements,fe=Lt.projectionMatrix.elements,en=Xt[14]/(Xt[10]-1),H=Xt[14]/(Xt[10]+1),Ae=(Xt[9]+1)/Xt[5],se=(Xt[9]-1)/Xt[5],ne=(Xt[8]-1)/Xt[0],jt=(fe[8]+1)/fe[0],ze=en*ne,Vt=en*jt,le=Ft/(-ne+jt),Re=le*-ne;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Re),nt.translateZ(le),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Xt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ie=en+le,L=H+le,E=ze-Re,B=Vt+(Ft-Re),J=Ae*H/L*Ie,ft=se*H/L*Ie;nt.projectionMatrix.makePerspective(E,B,J,ft,Ie,L),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function O(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ct=nt.near,Lt=nt.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Lt=M.depthFar)),et.near=C.near=w.near=ct,et.far=C.far=w.far=Lt,(ut!==et.near||vt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),ut=et.near,vt=et.far),et.layers.mask=nt.layers.mask|6,w.layers.mask=et.layers.mask&3,C.layers.mask=et.layers.mask&5;const Ft=nt.parent,Xt=et.cameras;O(et,Ft);for(let fe=0;fe<Xt.length;fe++)O(Xt[fe],Ft);Xt.length===2?bt(et,w,C):et.projectionMatrix.copy(w.projectionMatrix),at(nt,et,Ft)};function at(nt,ct,Lt){Lt===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(Lt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Id*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(nt){m=nt,y!==null&&(y.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(nt){return _[nt]};let St=null;function At(nt,ct){if(x=ct.getViewerPose(p||h),b=ct,x!==null){const Lt=x.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Ft=!1;Lt.length!==et.cameras.length&&(et.cameras.length=0,Ft=!0);for(let H=0;H<Lt.length;H++){const Ae=Lt[H];let se=null;if(S!==null)se=S.getViewport(Ae);else{const jt=g.getViewSubImage(y,Ae);se=jt.viewport,H===0&&(e.setRenderTargetTextures(D,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(D))}let ne=V[H];ne===void 0&&(ne=new fi,ne.layers.enable(H),ne.viewport=new ke,V[H]=ne),ne.matrix.fromArray(Ae.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ae.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(se.x,se.y,se.width,se.height),H===0&&(et.matrix.copy(ne.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Ft===!0&&et.cameras.push(ne)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const H=g.getDepthInformation(Lt[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let H=0;H<Lt.length;H++){const Ae=Lt[H].camera;if(Ae){let se=_[Ae];se||(se=new Dv,_[Ae]=se);const ne=g.getCameraImage(Ae);se.sourceTexture=ne}}}}for(let Lt=0;Lt<G.length;Lt++){const Ft=F[Lt],Xt=G[Lt];Ft!==null&&Xt!==void 0&&Xt.update(Ft,ct,p||h)}St&&St(nt,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Ut=new Lv;Ut.setAnimationLoop(At),this.setAnimationLoop=function(nt){St=nt},this.dispose=function(){}}}const Cr=new Sa,RA=new Je;function CA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Ev(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,N,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),x(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,N,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=e.get(_),U=N.envMap,D=N.envMapRotation;U&&(M.envMap.value=U,Cr.copy(D),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Cr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,N,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=U*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const N=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const D=U.program;r.uniformBlockBinding(N,D)}function p(N,U){let D=l[N.id];D===void 0&&(b(N),D=x(N),l[N.id]=D,N.addEventListener("dispose",M));const G=U.program;r.updateUBOMapping(N,G);const F=e.render.frame;c[N.id]!==F&&(y(N),c[N.id]=F)}function x(N){const U=g();N.__bindingPointIndex=U;const D=o.createBuffer(),G=N.__size,F=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function g(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const U=l[N.id],D=N.uniforms,G=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,z=D.length;F<z;F++){const q=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=q.length;w<C;w++){const V=q[w];if(S(V,F,w,G)===!0){const et=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let dt=0;dt<ut.length;dt++){const P=ut[dt],j=R(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,et+vt,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,vt),vt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,U,D,G){const F=N.value,z=U+"_"+D;if(G[z]===void 0)return typeof F=="number"||typeof F=="boolean"?G[z]=F:G[z]=F.clone(),!0;{const q=G[z];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return G[z]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function b(N){const U=N.uniforms;let D=0;const G=16;for(let z=0,q=U.length;z<q;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,V=w.length;C<V;C++){const et=w[C],ut=Array.isArray(et.value)?et.value:[et.value];for(let vt=0,dt=ut.length;vt<dt;vt++){const P=ut[vt],j=R(P),Z=D%G,Mt=Z%j.boundary,bt=Z+Mt;D+=Mt,bt!==0&&G-bt<j.storage&&(D+=G-bt),et.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=j.storage}}}const F=D%G;return F>0&&(D+=G-F),N.__size=D,N.__cache={},this}function R(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function M(N){const U=N.target;U.removeEventListener("dispose",M);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class DA{constructor(e={}){const{canvas:i=oM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,_=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=ui;let F=0,z=0,q=null,w=-1,C=null;const V=new ke,et=new ke;let ut=null;const vt=new ce(0);let dt=0,P=i.width,j=i.height,Z=1,Mt=null,bt=null;const O=new ke(0,0,P,j),at=new ke(0,0,P,j);let St=!1;const At=new $d;let Ut=!1,nt=!1;const ct=new Je,Lt=new k,Ft=new ke,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function en(){return q===null?Z:1}let H=r;function Ae(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),H===null){const Y="webgl2";if(H=Ae(Y,A),H===null)throw Ae(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,ne,jt,ze,Vt,le,Re,Ie,L,E,B,J,ft,st,Ht,Rt,kt,Pt,Et,Ct,Zt,Bt,Dt,oe;function W(){se=new HT(H),se.init(),Bt=new MA(H,se),ne=new NT(H,se,e,Bt),jt=new xA(H,se),ne.reversedDepthBuffer&&y&&jt.buffers.depth.setReversed(!0),ze=new XT(H),Vt=new oA,le=new SA(H,se,jt,Vt,ne,Bt,ze),Re=new zT(D),Ie=new FT(D),L=new ZM(H),Dt=new UT(H,L),E=new GT(H,L,ze,Dt),B=new WT(H,E,L,ze),Et=new kT(H,ne,le),Rt=new OT(Vt),J=new sA(D,Re,Ie,se,ne,Dt,Rt),ft=new CA(D,Vt),st=new cA,Ht=new mA(se),Pt=new DT(D,Re,Ie,jt,B,S,m),kt=new vA(D,B,ne),oe=new wA(H,ze,ne,jt),Ct=new LT(H,se,ze),Zt=new VT(H,se,ze),ze.programs=J.programs,D.capabilities=ne,D.extensions=se,D.properties=Vt,D.renderLists=st,D.shadowMap=kt,D.state=jt,D.info=ze}W();const Tt=new AA(D,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(P,j,!1))},this.getSize=function(A){return A.set(P,j)},this.setSize=function(A,Y,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,j=Y,i.width=Math.floor(A*Z),i.height=Math.floor(Y*Z),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(P*Z,j*Z).floor()},this.setDrawingBufferSize=function(A,Y,rt){P=A,j=Y,Z=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,Y,rt,ot){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,Y,rt,ot),jt.viewport(V.copy(O).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,Y,rt,ot){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,Y,rt,ot),jt.scissor(et.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){jt.setScissorTest(St=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){bt=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let ot=0;if(A){let K=!1;if(q!==null){const xt=q.texture.format;K=xt===Zd||xt===jd||xt===Yd}if(K){const xt=q.texture.type,Ot=xt===Wi||xt===zr||xt===jo||xt===Zo||xt===Wd||xt===qd,qt=Pt.getClearColor(),It=Pt.getClearAlpha(),$t=qt.r,re=qt.g,te=qt.b;Ot?(b[0]=$t,b[1]=re,b[2]=te,b[3]=It,H.clearBufferuiv(H.COLOR,0,b)):(R[0]=$t,R[1]=re,R[2]=te,R[3]=It,H.clearBufferiv(H.COLOR,0,R))}else ot|=H.COLOR_BUFFER_BIT}Y&&(ot|=H.DEPTH_BUFFER_BIT),rt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Pt.dispose(),st.dispose(),Ht.dispose(),Vt.dispose(),Re.dispose(),Ie.dispose(),B.dispose(),Dt.dispose(),oe.dispose(),J.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",on),Tt.removeEventListener("sessionend",kn),Rn.stop()};function wt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ze.autoReset,Y=kt.enabled,rt=kt.autoUpdate,ot=kt.needsUpdate,K=kt.type;W(),ze.autoReset=A,kt.enabled=Y,kt.autoUpdate=rt,kt.needsUpdate=ot,kt.type=K}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){const Y=A.target;Y.removeEventListener("dispose",pt),Nt(Y)}function Nt(A){Qt(A),Vt.remove(A)}function Qt(A){const Y=Vt.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){J.releaseProgram(rt)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,ot,K,xt){Y===null&&(Y=Xt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,qt=Oi(A,Y,rt,ot,K);jt.setMaterial(ot,Ot);let It=rt.index,$t=1;if(ot.wireframe===!0){if(It=E.getWireframeAttribute(rt),It===void 0)return;$t=2}const re=rt.drawRange,te=rt.attributes.position;let _e=re.start*$t,Ne=(re.start+re.count)*$t;xt!==null&&(_e=Math.max(_e,xt.start*$t),Ne=Math.min(Ne,(xt.start+xt.count)*$t)),It!==null?(_e=Math.max(_e,0),Ne=Math.min(Ne,It.count)):te!=null&&(_e=Math.max(_e,0),Ne=Math.min(Ne,te.count));const We=Ne-_e;if(We<0||We===1/0)return;Dt.setup(K,ot,qt,rt,It);let Oe,ve=Ct;if(It!==null&&(Oe=L.get(It),ve=Zt,ve.setIndex(Oe)),K.isMesh)ot.wireframe===!0?(jt.setLineWidth(ot.wireframeLinewidth*en()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(K.isLine){let Yt=ot.linewidth;Yt===void 0&&(Yt=1),jt.setLineWidth(Yt*en()),K.isLineSegments?ve.setMode(H.LINES):K.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else K.isPoints?ve.setMode(H.POINTS):K.isSprite&&ve.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ve.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,Ye=K._multiDrawCounts,Ce=K._multiDrawCount,Cn=It?L.get(It).bytesPerElement:1,Yi=Vt.get(ot).currentProgram.getUniforms();for(let Tn=0;Tn<Ce;Tn++)Yi.setValue(H,"_gl_DrawID",Tn),ve.render(Yt[Tn]/Cn,Ye[Tn])}else if(K.isInstancedMesh)ve.renderInstances(_e,We,K.count);else if(rt.isInstancedBufferGeometry){const Yt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Yt);ve.renderInstances(_e,We,Ye)}else ve.render(_e,We)};function ae(A,Y,rt){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,In(A,Y,rt),A.side=ar,A.needsUpdate=!0,In(A,Y,rt),A.side=_a):In(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),_=Ht.get(rt),_.init(Y),U.push(_),rt.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),A!==rt&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ot=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xt=K.material;if(xt)if(Array.isArray(xt))for(let Ot=0;Ot<xt.length;Ot++){const qt=xt[Ot];ae(qt,rt,K),ot.add(qt)}else ae(xt,rt,K),ot.add(xt)}),_=U.pop(),ot},this.compileAsync=function(A,Y,rt=null){const ot=this.compile(A,Y,rt);return new Promise(K=>{function xt(){if(ot.forEach(function(Ot){Vt.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){K(A);return}setTimeout(xt,10)}se.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Jt=null;function je(A){Jt&&Jt(A)}function on(){Rn.stop()}function kn(){Rn.start()}const Rn=new Lv;Rn.setAnimationLoop(je),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(A){Jt=A,Tt.setAnimationLoop(A),A===null?Rn.stop():Rn.start()},Tt.addEventListener("sessionstart",on),Tt.addEventListener("sessionend",kn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(Y),Y=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,Y,q),_=Ht.get(A,U.length),_.init(Y),U.push(_),ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),At.setFromProjectionMatrix(ct,ki,Y.reversedDepth),nt=this.localClippingEnabled,Ut=Rt.init(this.clippingPlanes,nt),M=st.get(A,N.length),M.init(),N.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const xt=D.xr.getDepthSensingMesh();xt!==null&&an(xt,Y,-1/0,D.sortObjects)}an(A,Y,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(Mt,bt),fe=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,fe&&Pt.addToRenderList(M,A),this.info.render.frame++,Ut===!0&&Rt.beginShadows();const rt=_.state.shadowsArray;kt.render(rt,A,Y),Ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,K=M.transmissive;if(_.setupLights(),Y.isArrayCamera){const xt=Y.cameras;if(K.length>0)for(let Ot=0,qt=xt.length;Ot<qt;Ot++){const It=xt[Ot];_n(ot,K,A,It)}fe&&Pt.render(A);for(let Ot=0,qt=xt.length;Ot<qt;Ot++){const It=xt[Ot];gn(M,A,It,It.viewport)}}else K.length>0&&_n(ot,K,A,Y),fe&&Pt.render(A),gn(M,A,Y);q!==null&&z===0&&(le.updateMultisampleRenderTarget(q),le.updateRenderTargetMipmap(q)),A.isScene===!0&&A.onAfterRender(D,A,Y),Dt.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],Ut===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function an(A,Y,rt,ot){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){ot&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const Ot=B.update(A),qt=A.material;qt.visible&&M.push(A,Ot,qt,rt,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Ot=B.update(A),qt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Ft.copy(Ot.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(qt)){const It=Ot.groups;for(let $t=0,re=It.length;$t<re;$t++){const te=It[$t],_e=qt[te.materialIndex];_e&&_e.visible&&M.push(A,Ot,_e,rt,Ft.z,te)}}else qt.visible&&M.push(A,Ot,qt,rt,Ft.z,null)}}const xt=A.children;for(let Ot=0,qt=xt.length;Ot<qt;Ot++)an(xt[Ot],Y,rt,ot)}function gn(A,Y,rt,ot){const K=A.opaque,xt=A.transmissive,Ot=A.transparent;_.setupLightsView(rt),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,rt),ot&&jt.viewport(V.copy(ot)),K.length>0&&ti(K,Y,rt),xt.length>0&&ti(xt,Y,rt),Ot.length>0&&ti(Ot,Y,rt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function _n(A,Y,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new Pr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?$o:Wi,minFilter:Or,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const xt=_.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||V;xt.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);const qt=D.getRenderTarget(),It=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(xt),D.getClearColor(vt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),fe&&Pt.render(rt);const re=D.toneMapping;D.toneMapping=nr;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,ot),ti(A,rt,ot),le.updateMultisampleRenderTarget(xt),le.updateRenderTargetMipmap(xt),se.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ne=0,We=Y.length;Ne<We;Ne++){const Oe=Y[Ne],ve=Oe.object,Yt=Oe.geometry,Ye=Oe.material,Ce=Oe.group;if(Ye.side===_a&&ve.layers.test(ot.layers)){const Cn=Ye.side;Ye.side=Jn,Ye.needsUpdate=!0,Wn(ve,rt,ot,Yt,Ye,Ce),Ye.side=Cn,Ye.needsUpdate=!0,_e=!0}}_e===!0&&(le.updateMultisampleRenderTarget(xt),le.updateRenderTargetMipmap(xt))}D.setRenderTarget(qt,It,$t),D.setClearColor(vt,dt),te!==void 0&&(ot.viewport=te),D.toneMapping=re}function ti(A,Y,rt){const ot=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,xt=A.length;K<xt;K++){const Ot=A[K],qt=Ot.object,It=Ot.geometry,$t=Ot.group;let re=Ot.material;re.allowOverride===!0&&ot!==null&&(re=ot),qt.layers.test(rt.layers)&&Wn(qt,Y,rt,It,re,$t)}}function Wn(A,Y,rt,ot,K,xt){A.onBeforeRender(D,Y,rt,ot,K,xt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(D,Y,rt,ot,A,xt),K.transparent===!0&&K.side===_a&&K.forceSinglePass===!1?(K.side=Jn,K.needsUpdate=!0,D.renderBufferDirect(rt,Y,ot,K,A,xt),K.side=ar,K.needsUpdate=!0,D.renderBufferDirect(rt,Y,ot,K,A,xt),K.side=_a):D.renderBufferDirect(rt,Y,ot,K,A,xt),A.onAfterRender(D,Y,rt,ot,K,xt)}function In(A,Y,rt){Y.isScene!==!0&&(Y=Xt);const ot=Vt.get(A),K=_.state.lights,xt=_.state.shadowsArray,Ot=K.state.version,qt=J.getParameters(A,K.state,xt,Y,rt),It=J.getProgramCacheKey(qt);let $t=ot.programs;ot.environment=A.isMeshStandardMaterial?Y.environment:null,ot.fog=Y.fog,ot.envMap=(A.isMeshStandardMaterial?Ie:Re).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",pt),$t=new Map,ot.programs=$t);let re=$t.get(It);if(re!==void 0){if(ot.currentProgram===re&&ot.lightsStateVersion===Ot)return vn(A,qt),re}else qt.uniforms=J.getUniforms(A),A.onBeforeCompile(qt,D),re=J.acquireProgram(qt,It),$t.set(It,re),ot.uniforms=qt.uniforms;const te=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=Rt.uniform),vn(A,qt),ot.needsLights=Ir(A),ot.lightsStateVersion=Ot,ot.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=re,ot.uniformsList=null,re}function Ze(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function vn(A,Y){const rt=Vt.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Oi(A,Y,rt,ot,K){Y.isScene!==!0&&(Y=Xt),le.resetTextureUnits();const xt=Y.fog,Ot=ot.isMeshStandardMaterial?Y.environment:null,qt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Xs,It=(ot.isMeshStandardMaterial?Ie:Re).get(ot.envMap||Ot),$t=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),te=!!rt.morphAttributes.position,_e=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let We=nr;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(We=D.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ve=Oe!==void 0?Oe.length:0,Yt=Vt.get(ot),Ye=_.state.lights;if(Ut===!0&&(nt===!0||A!==C)){const yn=A===C&&ot.id===w;Rt.setState(ot,A,yn)}let Ce=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ye.state.version||Yt.outputColorSpace!==qt||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==It||ot.fog===!0&&Yt.fog!==xt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Rt.numPlanes||Yt.numIntersection!==Rt.numIntersection)||Yt.vertexAlphas!==$t||Yt.vertexTangents!==re||Yt.morphTargets!==te||Yt.morphNormals!==_e||Yt.morphColors!==Ne||Yt.toneMapping!==We||Yt.morphTargetsCount!==ve)&&(Ce=!0):(Ce=!0,Yt.__version=ot.version);let Cn=Yt.currentProgram;Ce===!0&&(Cn=In(ot,Y,K));let Yi=!1,Tn=!1,rr=!1;const Se=Cn.getUniforms(),On=Yt.uniforms;if(jt.useProgram(Cn.program)&&(Yi=!0,Tn=!0,rr=!0),ot.id!==w&&(w=ot.id,Tn=!0),Yi||C!==A){jt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(H,"projectionMatrix",A.projectionMatrix),Se.setValue(H,"viewMatrix",A.matrixWorldInverse);const ln=Se.map.cameraPosition;ln!==void 0&&ln.setValue(H,Lt.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Se.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Se.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Tn=!0,rr=!0)}if(K.isSkinnedMesh){Se.setOptional(H,K,"bindMatrix"),Se.setOptional(H,K,"bindMatrixInverse");const yn=K.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Se.setValue(H,"boneTexture",yn.boneTexture,le))}K.isBatchedMesh&&(Se.setOptional(H,K,"batchingTexture"),Se.setValue(H,"batchingTexture",K._matricesTexture,le),Se.setOptional(H,K,"batchingIdTexture"),Se.setValue(H,"batchingIdTexture",K._indirectTexture,le),Se.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Se.setValue(H,"batchingColorTexture",K._colorsTexture,le));const Fn=rt.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&Et.update(K,rt,Cn),(Tn||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Se.setValue(H,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(On.envMap.value=It,On.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Y.environment!==null&&(On.envMapIntensity.value=Y.environmentIntensity),Tn&&(Se.setValue(H,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&Ma(On,rr),xt&&ot.fog===!0&&ft.refreshFogUniforms(On,xt),ft.refreshMaterialUniforms(On,ot,Z,j,_.state.transmissionRenderTarget[A.id]),Wc.upload(H,Ze(Yt),On,le)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Wc.upload(H,Ze(Yt),On,le),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Se.setValue(H,"center",K.center),Se.setValue(H,"modelViewMatrix",K.modelViewMatrix),Se.setValue(H,"normalMatrix",K.normalMatrix),Se.setValue(H,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const yn=ot.uniformsGroups;for(let ln=0,Fr=yn.length;ln<Fr;ln++){const Pi=yn[ln];oe.update(Pi,Cn),oe.bind(Pi,Cn)}}return Cn}function Ma(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ir(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,rt){const ot=Vt.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=Y,Vt.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=Vt.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const zi=H.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){q=A,F=Y,z=rt;let ot=!0,K=null,xt=!1,Ot=!1;if(A){const It=Vt.get(A);if(It.__useDefaultFramebuffer!==void 0)jt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(It.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(It.__hasExternalTextures)le.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(It.__boundDepthTexture!==te){if(te!==null&&Vt.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ot=!0);const re=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(re[Y])?K=re[Y][rt]:K=re[Y],xt=!0):A.samples>0&&le.useMultisampledRTT(A)===!1?K=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[rt]:K=re,V.copy(A.viewport),et.copy(A.scissor),ut=A.scissorTest}else V.copy(O).multiplyScalar(Z).floor(),et.copy(at).multiplyScalar(Z).floor(),ut=St;if(rt!==0&&(K=zi),jt.bindFramebuffer(H.FRAMEBUFFER,K)&&ot&&jt.drawBuffers(A,K),jt.viewport(V),jt.scissor(et),jt.setScissorTest(ut),xt){const It=Vt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,rt)}else if(Ot){const It=Y;for(let $t=0;$t<A.textures.length;$t++){const re=Vt.get(A.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,re.__webglTexture,rt,It)}}else if(A!==null&&rt!==0){const It=Vt.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,It.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(A,Y,rt,ot,K,xt,Ot,qt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It){jt.bindFramebuffer(H.FRAMEBUFFER,It);try{const $t=A.textures[qt],re=$t.format,te=$t.type;if(!ne.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ot&&rt>=0&&rt<=A.height-K&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Y,rt,ot,K,Bt.convert(re),Bt.convert(te),xt))}finally{const $t=q!==null?Vt.get(q).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,ot,K,xt,Ot,qt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot]),It)if(Y>=0&&Y<=A.width-ot&&rt>=0&&rt<=A.height-K){jt.bindFramebuffer(H.FRAMEBUFFER,It);const $t=A.textures[qt],re=$t.format,te=$t.type;if(!ne.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.bufferData(H.PIXEL_PACK_BUFFER,xt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+qt),H.readPixels(Y,rt,ot,K,Bt.convert(re),Bt.convert(te),0);const Ne=q!==null?Vt.get(q).__webglFramebuffer:null;jt.bindFramebuffer(H.FRAMEBUFFER,Ne);const We=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await lM(H,We,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,_e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xt),H.deleteBuffer(_e),H.deleteSync(We),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const ot=Math.pow(2,-rt),K=Math.floor(A.image.width*ot),xt=Math.floor(A.image.height*ot),Ot=Y!==null?Y.x:0,qt=Y!==null?Y.y:0;le.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ot,qt,K,xt),jt.unbindTexture()};const Ea=H.createFramebuffer(),Ti=H.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,ot=null,K=0,xt=null){xt===null&&(K!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=K,K=0):xt=0);let Ot,qt,It,$t,re,te,_e,Ne,We;const Oe=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(rt!==null)Ot=rt.max.x-rt.min.x,qt=rt.max.y-rt.min.y,It=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,re=rt.min.y,te=rt.isBox3?rt.min.z:0;else{const Fn=Math.pow(2,-K);Ot=Math.floor(Oe.width*Fn),qt=Math.floor(Oe.height*Fn),A.isDataArrayTexture?It=Oe.depth:A.isData3DTexture?It=Math.floor(Oe.depth*Fn):It=1,$t=0,re=0,te=0}ot!==null?(_e=ot.x,Ne=ot.y,We=ot.z):(_e=0,Ne=0,We=0);const ve=Bt.convert(Y.format),Yt=Bt.convert(Y.type);let Ye;Y.isData3DTexture?(le.setTexture3D(Y,0),Ye=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(le.setTexture2DArray(Y,0),Ye=H.TEXTURE_2D_ARRAY):(le.setTexture2D(Y,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ce=H.getParameter(H.UNPACK_ROW_LENGTH),Cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Yi=H.getParameter(H.UNPACK_SKIP_PIXELS),Tn=H.getParameter(H.UNPACK_SKIP_ROWS),rr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Oe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,re),H.pixelStorei(H.UNPACK_SKIP_IMAGES,te);const Se=A.isDataArrayTexture||A.isData3DTexture,On=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Fn=Vt.get(A),yn=Vt.get(Y),ln=Vt.get(Fn.__renderTarget),Fr=Vt.get(yn.__renderTarget);jt.bindFramebuffer(H.READ_FRAMEBUFFER,ln.__webglFramebuffer),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Pi=0;Pi<It;Pi++)Se&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,K,te+Pi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(Y).__webglTexture,xt,We+Pi)),H.blitFramebuffer($t,re,Ot,qt,_e,Ne,Ot,qt,H.DEPTH_BUFFER_BIT,H.NEAREST);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Vt.has(A)){const Fn=Vt.get(A),yn=Vt.get(Y);jt.bindFramebuffer(H.READ_FRAMEBUFFER,Ea),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ti);for(let ln=0;ln<It;ln++)Se?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fn.__webglTexture,K,te+ln):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fn.__webglTexture,K),On?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,yn.__webglTexture,xt,We+ln):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,yn.__webglTexture,xt),K!==0?H.blitFramebuffer($t,re,Ot,qt,_e,Ne,Ot,qt,H.COLOR_BUFFER_BIT,H.NEAREST):On?H.copyTexSubImage3D(Ye,xt,_e,Ne,We+ln,$t,re,Ot,qt):H.copyTexSubImage2D(Ye,xt,_e,Ne,$t,re,Ot,qt);jt.bindFramebuffer(H.READ_FRAMEBUFFER,null),jt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else On?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ye,xt,_e,Ne,We,Ot,qt,It,ve,Yt,Oe.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,xt,_e,Ne,We,Ot,qt,It,ve,Oe.data):H.texSubImage3D(Ye,xt,_e,Ne,We,Ot,qt,It,ve,Yt,Oe):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,xt,_e,Ne,Ot,qt,ve,Yt,Oe.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,xt,_e,Ne,Oe.width,Oe.height,ve,Oe.data):H.texSubImage2D(H.TEXTURE_2D,xt,_e,Ne,Ot,qt,ve,Yt,Oe);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ce),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Yi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Tn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,rr),xt===0&&Y.generateMipmaps&&H.generateMipmap(Ye),jt.unbindTexture()},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),jt.unbindTexture()},this.resetState=function(){F=0,z=0,q=null,jt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}function UA(o,e){const i=[],r=[],c=(1+Math.sqrt(5))/2,h=[[0,1,c],[0,-1,c],[0,1,-c],[0,-1,-c],[1,c,0],[-1,c,0],[1,-c,0],[-1,-c,0],[c,0,1],[-c,0,1],[c,0,-1],[-c,0,-1]].map(y=>{const S=Math.sqrt(y[0]*y[0]+y[1]*y[1]+y[2]*y[2]);return new k(y[0]/S*5,y[1]/S*5,y[2]/S*5)}),d=[],m=[[0,1],[0,4],[0,5],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,5],[4,8],[4,10],[5,9],[5,11],[6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11]];h.forEach(y=>{d.push(y.clone())});const p=8;m.forEach(([y,S])=>{const b=h[y],R=h[S];for(let M=1;M<p;M++){const _=M/p,N=new k().lerpVectors(b,R,_);d.push(N)}});const g=new ep(5,0).attributes.position;for(let y=0;y<g.count;y+=3){const S=new k(g.getX(y),g.getY(y),g.getZ(y)),b=new k(g.getX(y+1),g.getY(y+1),g.getZ(y+1)),R=new k(g.getX(y+2),g.getY(y+2),g.getZ(y+2)),M=new k().add(S).add(b).add(R).divideScalar(3);d.push(M);for(let _=0;_<3;_++){const N=new k().lerpVectors(M,[S,b,R][_],.5);d.push(N)}}d.forEach(y=>{const S=new Av({map:e,color:new ce(13426175),transparent:!0,opacity:0,blending:Fs}),b=new zM(S);b.position.copy(y),b.scale.set(0,0,0);const R=.15+Math.random()*.08;o.add(b),i.push({sprite:b,targetScale:R,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:y.clone()})});for(let y=0;y<i.length;y++)for(let S=y+1;S<i.length;S++)if(i[y].position.distanceTo(i[S].position)<2.8){const R=[i[y].position,i[S].position],M=new $n().setFromPoints(R),_=new Cv({color:new ce(8956637),transparent:!0,opacity:0,blending:Fs}),N=new FM(M,_);o.add(N),r.push({line:N,atom1:i[y],atom2:i[S],glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.15+Math.random()*.15})}return{atoms:i,edges:r}}function LA(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const r=new Xn(o);return r.needsUpdate=!0,r}function NA(){const o=Si.useRef(null),[e,i]=Si.useState(!1),r=Si.useRef(.5),[l,c]=Si.useState(!1),h=Si.useRef(!1),[d,m]=Si.useState(!1),p=Si.useRef(!1),x=Si.useRef(null);return Si.useEffect(()=>{if(!o.current)return;const g=new NM;g.background=new ce(132625),g.fog=new Jd(132625,.018);const y=new fi(75,window.innerWidth/window.innerHeight,.1,1e3);y.position.set(0,0,10);const S=new DA({antialias:!0,alpha:!0});S.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),S.setSize(window.innerWidth,window.innerHeight),S.outputColorSpace=ui,S.toneMapping=rv,S.toneMappingExposure=1.16;const b=o.current;b.appendChild(S.domElement);const R=new qM(8699903,.24);g.add(R);const M=new Xh(3108863,2.2,90,2);M.position.set(14,14,14),g.add(M);const _=new Xh(6962687,1.8,90,2);_.position.set(-14,-12,14),g.add(_);const N=new Xh(1689528,1.4,90,2);N.position.set(0,16,-12),g.add(N);const U=new qo;g.add(U);const D=LA(),{atoms:G,edges:F}=UA(U,D);F.forEach((B,J)=>{let ft,st;if(J<20){const Ht=J/20*1e4;st=400+Math.random()*400,ft=Math.max(0,Ht-st)}else{const Rt=1e4+(J-20)/10*5e3;st=200+Math.random()*300,ft=Math.max(0,Rt-st)}B.animationDuration=st,B.spawnOffset=ft,B.startPosition=new k((Math.random()-.5)*40,(Math.random()-.5)*30,(Math.random()-.5)*40-20),B.endPosition=new k((B.atom1.position.x+B.atom2.position.x)/2,(B.atom1.position.y+B.atom2.position.y)/2,(B.atom1.position.z+B.atom2.position.z)/2),B.line.material.opacity=0}),G.forEach(B=>{B.energy=0,B.energyPulse=0}),F.forEach(B=>{B.energy=0,B.energyPulse=0});const z=4400,q=new Float32Array(z*3),w=new Float32Array(z*3),C=new Float32Array(z),V=new Float32Array(z),et=new Float32Array(z*3),ut=new Float32Array(z*3),vt=new Float32Array(z),dt=new Float32Array(z),P=new $n;P.setAttribute("position",new Sn(q,3)),P.setAttribute("color",new Sn(w,3)),P.setAttribute("alpha",new Sn(C,1)),P.setAttribute("size",new Sn(V,1));const j=new $n;j.setAttribute("position",new Sn(et,3)),j.setAttribute("color",new Sn(ut,3)),j.setAttribute("alpha",new Sn(vt,1)),j.setAttribute("size",new Sn(dt,1));const Z=new qi({uniforms:{uMap:{value:D},uTime:{value:0}},vertexShader:`
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 2.3 * (0.9 + 0.2 * sin(uTime * 2.0 + position.y * 0.6));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord;
          vec2 center = vec2(0.5);
          float dist = distance(uv, center);
          float glow = smoothstep(0.5, 0.0, dist);
          vec4 tex = texture2D(uMap, uv);
          gl_FragColor = vec4(vColor, vAlpha * glow * tex.r);
        }
      `,transparent:!0,depthWrite:!1,blending:Fs,vertexColors:!0}),Mt=new qi({uniforms:{uMap:{value:D},uTime:{value:0}},vertexShader:`
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 1.5 * (0.9 + 0.1 * sin(uTime * 1.8 + position.y * 0.4));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform sampler2D uMap;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord;
          vec2 center = vec2(0.5);
          float dist = distance(uv, center);
          float glow = smoothstep(0.55, 0.0, dist);
          vec4 tex = texture2D(uMap, uv);
          gl_FragColor = vec4(vColor, vAlpha * glow * tex.r * 0.7);
        }
      `,transparent:!0,depthWrite:!1,blending:Fs,vertexColors:!0}),bt=new E_(P,Z),O=new E_(j,Mt);g.add(bt),g.add(O);const at=Array.from({length:z},()=>({active:!1,start:new k,control:new k,target:new k,progress:0,duration:.85+Math.random()*.55,phase:Math.random()*Math.PI*2,color:new ce,size:.018+Math.random()*.016,alpha:0,life:0,trailPosition:new k,trailColor:new ce}));let St=!1,At={x:0,y:0};const Ut={x:0,y:0};function nt(B){St=!0,At={x:B.clientX,y:B.clientY}}function ct(B){if(St){const J=B.clientX-At.x,ft=B.clientY-At.y;Ut.y+=J*.005,Ut.x+=ft*.005,At={x:B.clientX,y:B.clientY}}}function Lt(){St=!1}function Ft(B){y.position.z+=B.deltaY*.01,y.position.z=Math.max(7,Math.min(25,y.position.z)),Ut.y+=(B.deltaX||B.deltaY)*8e-4}let Xt=0;function fe(B){if(B.touches.length===2){const J=B.touches[0].clientX-B.touches[1].clientX,ft=B.touches[0].clientY-B.touches[1].clientY;Xt=Math.sqrt(J*J+ft*ft)}else B.touches.length===1&&(St=!0,At={x:B.touches[0].clientX,y:B.touches[0].clientY})}function en(B){if(B.touches.length===2){const J=B.touches[0].clientX-B.touches[1].clientX,ft=B.touches[0].clientY-B.touches[1].clientY,st=Math.sqrt(J*J+ft*ft),Ht=st-Xt;y.position.z-=Ht*.01,y.position.z=Math.max(7,Math.min(25,y.position.z)),Xt=st}else if(B.touches.length===1&&St){const J=B.touches[0].clientX-At.x,ft=B.touches[0].clientY-At.y;Ut.y+=J*.005,Ut.x+=ft*.005,At={x:B.touches[0].clientX,y:B.touches[0].clientY}}}function H(){St=!1}S.domElement.addEventListener("mousedown",nt),S.domElement.addEventListener("mousemove",ct),S.domElement.addEventListener("mouseup",Lt),S.domElement.addEventListener("wheel",Ft,{passive:!0}),S.domElement.addEventListener("touchstart",fe),S.domElement.addEventListener("touchmove",en),S.domElement.addEventListener("touchend",H);function Ae(B,J,ft=.8){const st=new k(B,J,ft);st.unproject(y);const Ht=st.sub(y.position).normalize(),Rt=-y.position.z/Ht.z;return y.position.clone().add(Ht.multiplyScalar(Rt))}function se(B){const J=(Math.random()-.5)*1.8,ft=(Math.random()-.5)*1.6,st=.5+Math.random()*.8;return Ae(J,ft,st)}function ne(B){if(B<.18)return G[Math.floor(Math.random()*Math.max(1,Math.round(G.length*.35)))].position.clone();if(B<.5){const ft=F[Math.floor(Math.random()*F.length)];return new k().lerpVectors(ft.atom1.position,ft.atom2.position,.45+Math.random()*.12)}return B<.8?G[Math.floor(Math.random()*G.length)].position.clone():G[Math.floor(Math.random()*G.length)].position.clone().add(new k((Math.random()-.5)*.15,(Math.random()-.5)*.15,(Math.random()-.5)*.15))}function jt(B){const J=at.find(Pt=>!Pt.active);if(!J)return;const ft=se(),st=ne(B),Ht=new k((Math.random()-.5)*1.15,(Math.random()-.5)*1.1,(Math.random()-.5)*1.05),Rt=new k().copy(ft).lerp(st,.56).add(Ht).add(new k(0,0,2.15));J.active=!0,J.start.copy(ft),J.control.copy(Rt),J.target.copy(st),J.progress=0,J.life=0,J.trailPosition.copy(ft),J.duration=1.4+Math.random()*.8,J.phase=Math.random()*Math.PI*2;const kt=[new ce("#1e4bda"),new ce("#3f7cff"),new ce("#5d34ff"),new ce("#1fc6b8"),new ce("#24caff"),new ce("#7c4cff"),new ce("#2b7cff")];J.color.copy(kt[Math.floor(Math.random()*kt.length)]),J.size=.018+Math.random()*.015,J.alpha=.12+Math.random()*.18,J.position=J.start.clone()}const ze=15e3,Vt=3500;let le=performance.now(),Re=0,Ie=0;function L(){requestAnimationFrame(L);const B=(performance.now()-le)*r.current;Re+=.016;const J=Math.min(1,Ie/Vt),ft=.28+.72*(1-Math.abs(J*2-1)),st=B/ze*Vt*(.45+ft*1.15),Ht=Math.max(0,Math.floor(st)-Ie);for(let gt=0;gt<Ht;gt+=1)Ie<Vt&&(jt(J),Ie+=1);U.rotation.x+=(Ut.x-U.rotation.x)*.05,U.rotation.y+=(Ut.y-U.rotation.y)*.05,St||(Ut.y+=.0026);const Rt=1+Math.sin(Re*1.2)*.01+Math.sin(Re*2.3+.7)*.006;U.scale.setScalar(Rt),M.position.x=Math.sin(Re*.2)*12,M.position.z=Math.cos(Re*.2)*12,_.position.x=Math.sin(Re*.24+Math.PI)*12,_.position.z=Math.cos(Re*.24+Math.PI)*12,N.position.y=14+Math.sin(Re*.16)*2;const kt=.45+.55*Math.sin(Re*.4+Math.PI*.5),Pt=[{hue:.625,saturation:.9,lightness:.26},{hue:.617,saturation:.88,lightness:.35},{hue:.597,saturation:.95,lightness:.44},{hue:.636,saturation:.85,lightness:.22},{hue:.575,saturation:.8,lightness:.42},{hue:.528,saturation:.9,lightness:.28},{hue:.517,saturation:.95,lightness:.44},{hue:.5,saturation:.9,lightness:.4},{hue:.483,saturation:.88,lightness:.32},{hue:.469,saturation:.82,lightness:.38},{hue:.389,saturation:.92,lightness:.36},{hue:.406,saturation:.85,lightness:.3},{hue:.361,saturation:.78,lightness:.27},{hue:.375,saturation:.88,lightness:.32},{hue:.417,saturation:.8,lightness:.38},{hue:.347,saturation:.72,lightness:.3},{hue:.43,saturation:.75,lightness:.42},{hue:.333,saturation:.85,lightness:.35},{hue:.278,saturation:.7,lightness:.32},{hue:.681,saturation:.88,lightness:.3},{hue:.736,saturation:.9,lightness:.25},{hue:.764,saturation:.88,lightness:.36},{hue:.778,saturation:.82,lightness:.4},{hue:.833,saturation:.9,lightness:.36},{hue:.861,saturation:.92,lightness:.42},{hue:.972,saturation:.88,lightness:.28},{hue:.986,saturation:.85,lightness:.34},{hue:.911,saturation:.88,lightness:.44},{hue:.556,saturation:.25,lightness:.75},{hue:.569,saturation:.45,lightness:.68}];!h.current&&B>=15e3&&(h.current=!0,c(!0));const Et=2e3,Ct=2e4,Zt=4500,Bt=B%Ct,Dt=p.current,oe=Dt||Bt>Ct-Zt,W=Dt?1:oe?(Bt-(Ct-Zt))/Zt:0,Tt=Dt?1:W<.15?W/.15:W>.85?(1-W)/.15:1;if(x.current&&h.current){const yt=B*(Dt?.5:.07),pt=Math.floor(yt/Et)%Pt.length,Nt=yt%Et/Et,Qt=Pt[pt],ae=Pt[(pt+1)%Pt.length];let Jt=Qt.hue,je=ae.hue;je<Jt&&Jt-je>.5?je+=1:je>Jt&&je-Jt>.5&&(Jt+=1);const on=(Jt*(1-Nt)+je*Nt)%1*360,kn=Dt?60:50,Rn=Dt?95:78,an=Dt?8+5*Math.sin(B/250):4+2*Math.sin(B/700),gn=`hsl(${on.toFixed(0)}, ${Rn}%, ${kn}%)`,_n=`hsl(${on.toFixed(0)}, ${Rn-20}%, ${kn-15}%)`;x.current.style.color=gn,x.current.style.borderColor=_n,x.current.style.boxShadow=`0 0 ${an.toFixed(1)}px ${gn}`,x.current.style.background=`rgba(${Math.round(on/360*15)}, ${Math.round(12+on/360*8)}, 28, 0.75)`}const wt=(gt,yt=0)=>{const pt=B%Et/Et,Nt=Math.floor(B/Et)%Pt.length,Qt=Pt[Nt],ae=Pt[(Nt+1)%Pt.length],Jt=gt.x*.4+gt.y*.3+gt.z*.3,on=-30+pt*60,kn=12,Rn=Jt-on;let an=Math.max(0,Math.min(1,(Rn+kn)/(kn*2)));an=an*an*(3-2*an);let gn=Qt.hue,_n=ae.hue;_n<gn&&gn-_n>.5?_n+=1:_n>gn&&_n-gn>.5&&(gn+=1);const ti=(gn*(1-an)+_n*an)%1,Wn=Math.max(.2,Qt.saturation*(1-an)+ae.saturation*an),In=Math.max(.2,Math.min(.78,Qt.lightness*(1-an)+ae.lightness*an)),Ze={hue:ti,saturation:Wn,lightness:In};if(!oe||Tt===0)return Ze;const vn=10,Oi=yt*.09,Ma=B*vn+Oi*Et,Ir=Math.floor(Ma/Et)%Pt.length,zi=Ma%Et/Et,Ea=Pt[Ir],Ti=Pt[(Ir+1)%Pt.length];let A=Ea.hue,Y=Ti.hue;Y<A&&A-Y>.5?Y+=1:Y>A&&Y-A>.5&&(A+=1);const rt=(A*(1-zi)+Y*zi)%1,ot=Math.max(.7,Ea.saturation*(1-zi)+Ti.saturation*zi),K=Math.min(.72,Ea.lightness*(1-zi)+Ti.lightness*zi+.15);return{hue:(Ze.hue*(1-Tt)+rt*Tt+1)%1,saturation:Ze.saturation*(1-Tt)+ot*Tt,lightness:Ze.lightness*(1-Tt)+K*Tt}};G.forEach((gt,yt)=>{const pt=yt/G.length,Nt=Math.max(0,Math.min(1,(J-pt*.5)*2)),Qt=Nt*gt.targetScale;gt.sprite.scale.set(Qt,Qt,Qt),gt.energy=Math.max(0,gt.energy-.018),gt.energyPulse=Math.max(0,gt.energyPulse-.035);const ae=wt(gt.position,yt),Jt=oe?1+Tt*.4:1;gt.sprite.material.opacity=Nt*(.38+kt*.34+gt.energyPulse*.16+.06*Math.sin(Re*.8+yt*.08))*.96*Jt,gt.sprite.material.color.setHSL(ae.hue,ae.saturation,ae.lightness+gt.energyPulse*.06)}),F.forEach((gt,yt)=>{const pt=B-gt.spawnOffset;if(pt>=0&&pt<gt.animationDuration){const ae=pt/gt.animationDuration,Jt=ae*ae*(3-2*ae),je=gt.startPosition,on=gt.atom1.position,kn=gt.atom2.position,Rn=je,an=kn,gn=on,_n=new k().copy(Rn).multiplyScalar((1-Jt)*(1-Jt)).addScaledVector(an,2*(1-Jt)*Jt).addScaledVector(gn,Jt*Jt),ti=new k().copy(an).multiplyScalar((1-Jt)*(1-Jt)).addScaledVector(gn,2*(1-Jt)*Jt).addScaledVector(kn,Jt*Jt),Wn=gt.line.geometry.attributes.position.array;Wn[0]=_n.x,Wn[1]=_n.y,Wn[2]=_n.z,Wn[3]=ti.x,Wn[4]=ti.y,Wn[5]=ti.z,gt.line.geometry.attributes.position.needsUpdate=!0,gt.line.material.opacity=Jt*.8}else if(pt>=gt.animationDuration){const ae=gt.line.geometry.attributes.position.array;ae[0]=gt.atom1.position.x,ae[1]=gt.atom1.position.y,ae[2]=gt.atom1.position.z,ae[3]=gt.atom2.position.x,ae[4]=gt.atom2.position.y,ae[5]=gt.atom2.position.z,gt.line.geometry.attributes.position.needsUpdate=!0,gt.line.material.opacity=.8}const Nt=new k().lerpVectors(gt.atom1.position,gt.atom2.position,.5);gt.energy=Math.max(0,gt.energy-.015),gt.energyPulse=Math.max(0,gt.energyPulse-.03);const Qt=wt(Nt,yt);gt.line.material.color.setHSL(Qt.hue,Qt.saturation,Qt.lightness+gt.energyPulse*.05)}),Mt.uniforms.uTime.value=Re,S.render(g,y)}L();function E(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E),S.domElement.removeEventListener("mousedown",nt),S.domElement.removeEventListener("mousemove",ct),S.domElement.removeEventListener("mouseup",Lt),S.domElement.removeEventListener("wheel",Ft),S.domElement.removeEventListener("touchstart",fe),S.domElement.removeEventListener("touchmove",en),S.domElement.removeEventListener("touchend",H),b&&S.domElement.parentNode&&b.removeChild(S.domElement),D.dispose(),G.forEach(B=>B.sprite.material.dispose()),F.forEach(B=>{B.line.geometry.dispose(),B.line.material.dispose()}),P.dispose(),j.dispose(),Z.dispose(),Mt.dispose()}},[]),Gt.jsxs(Gt.Fragment,{children:[Gt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"}),!l&&Gt.jsx("button",{onClick:()=>{i(!e),r.current=e?.5:10},style:{...Mi.base,position:"fixed",bottom:24,left:24,zIndex:50,...e?Mi.active:Mi.inactive},onMouseEnter:g=>Mi.hoverEnter(g.currentTarget),onMouseLeave:g=>Object.assign(g.currentTarget.style,e?Mi.active:Mi.inactive),children:e?"🐢 Normal Speed":"Speed Up"}),l&&Gt.jsx("button",{ref:x,onClick:()=>{const g=!d;m(g),p.current=g},style:{position:"fixed",bottom:24,left:24,padding:"8px 16px",borderRadius:6,fontFamily:"monospace",fontWeight:700,fontSize:12,letterSpacing:"0.06em",cursor:"pointer",border:"1px solid",backdropFilter:"blur(8px)",zIndex:50,transition:"box-shadow 0.1s"},children:d?"✦ Glimmering":"✦ Glimmer"})]})}function OA(){return Gt.jsx(NA,{})}function zA(){const[o,e]=Si.useState("home");return Gt.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",background:"#020611"},children:[o==="home"&&Gt.jsx(OA,{}),o==="about"&&Gt.jsx(vS,{}),o==="home"&&Gt.jsx($x,{}),Gt.jsx(dS,{route:o,setRoute:e}),Gt.jsx(hS,{})]})}Jx.createRoot(document.getElementById("root")).render(Gt.jsx(tr.StrictMode,{children:Gt.jsx(zA,{})}));
