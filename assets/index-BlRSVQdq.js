(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function OS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ah={exports:{}},Do={};var U0;function zS(){if(U0)return Do;U0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var L0;function PS(){return L0||(L0=1,ah.exports=zS()),ah.exports}var Lt=PS(),rh={exports:{}},Uo={},sh={exports:{}},oh={};var N0;function BS(){return N0||(N0=1,(function(o){function e(O,k){var Y=O.length;O.push(k);t:for(;0<Y;){var xt=Y-1>>>1,yt=O[xt];if(0<l(yt,k))O[xt]=k,O[Y]=yt,Y=xt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var k=O[0],Y=O.pop();if(Y!==k){O[0]=Y;t:for(var xt=0,yt=O.length,N=yt>>>1;xt<N;){var V=2*(xt+1)-1,st=O[V],gt=V+1,At=O[gt];if(0>l(st,Y))gt<yt&&0>l(At,st)?(O[xt]=At,O[gt]=Y,xt=gt):(O[xt]=st,O[V]=Y,xt=V);else if(gt<yt&&0>l(At,Y))O[xt]=At,O[gt]=Y,xt=gt;else break t}}return k}function l(O,k){var Y=O.sortIndex-k.sortIndex;return Y!==0?Y:O.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,x=3,M=!1,b=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var k=i(p);k!==null;){if(k.callback===null)r(p);else if(k.startTime<=O)r(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=i(p)}}function H(O){if(A=!1,w(O),!b)if(i(m)!==null)b=!0,F||(F=!0,J());else{var k=i(p);k!==null&&tt(H,k.startTime-O)}}var F=!1,P=-1,W=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<W)}function G(){if(y=!1,F){var O=o.unstable_now();D=O;var k=!0;try{t:{b=!1,A&&(A=!1,L(P),P=-1),M=!0;var Y=x;try{e:{for(w(O),v=i(m);v!==null&&!(v.expirationTime>O&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,x=v.priorityLevel;var yt=xt(v.expirationTime<=O);if(O=o.unstable_now(),typeof yt=="function"){v.callback=yt,w(O),k=!0;break e}v===i(m)&&r(m),w(O)}else r(m);v=i(m)}if(v!==null)k=!0;else{var N=i(p);N!==null&&tt(H,N.startTime-O),k=!1}}break t}finally{v=null,x=Y,M=!1}k=void 0}}finally{k?J():F=!1}}}var J;if(typeof U=="function")J=function(){U(G)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,mt=ut.port2;ut.port1.onmessage=G,J=function(){mt.postMessage(null)}}else J=function(){g(G,0)};function tt(O,k){P=g(function(){O(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(O){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var Y=x;x=k;try{return O()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,k){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=x;x=O;try{return k()}finally{x=Y}},o.unstable_scheduleCallback=function(O,k,Y){var xt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,O){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=Y+yt,O={id:S++,callback:k,priorityLevel:O,startTime:Y,expirationTime:yt,sortIndex:-1},Y>xt?(O.sortIndex=Y,e(p,O),i(m)===null&&O===i(p)&&(A?(L(P),P=-1):A=!0,tt(H,Y-xt))):(O.sortIndex=yt,e(m,O),b||M||(b=!0,F||(F=!0,J()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var k=x;return function(){var Y=x;x=k;try{return O.apply(this,arguments)}finally{x=Y}}}})(oh)),oh}var O0;function IS(){return O0||(O0=1,sh.exports=BS()),sh.exports}var lh={exports:{}},oe={};var z0;function FS(){if(z0)return oe;z0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function g(N,V,st){this.props=N,this.context=V,this.refs=y,this.updater=st||b}g.prototype.isReactComponent={},g.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},g.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=g.prototype;function U(N,V,st){this.props=N,this.context=V,this.refs=y,this.updater=st||b}var w=U.prototype=new L;w.constructor=U,A(w,g.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(N,V,st){var gt=st.ref;return{$$typeof:o,type:N,key:V,ref:gt!==void 0?gt:null,props:st}}function C(N,V){return D(N.type,V,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function J(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(st){return V[st]})}var ut=/\/+/g;function mt(N,V){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):V.toString(36)}function tt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(V){N.status==="pending"&&(N.status="fulfilled",N.value=V)},function(V){N.status==="pending"&&(N.status="rejected",N.reason=V)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,V,st,gt,At){var $=typeof N;($==="undefined"||$==="boolean")&&(N=null);var lt=!1;if(N===null)lt=!0;else switch($){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(N.$$typeof){case o:case e:lt=!0;break;case S:return lt=N._init,O(lt(N._payload),V,st,gt,At)}}if(lt)return At=At(N),lt=gt===""?"."+mt(N,0):gt,H(At)?(st="",lt!=null&&(st=lt.replace(ut,"$&/")+"/"),O(At,V,st,"",function(Pt){return Pt})):At!=null&&(G(At)&&(At=C(At,st+(At.key==null||N&&N.key===At.key?"":(""+At.key).replace(ut,"$&/")+"/")+lt)),V.push(At)),1;lt=0;var Tt=gt===""?".":gt+":";if(H(N))for(var Ut=0;Ut<N.length;Ut++)gt=N[Ut],$=Tt+mt(gt,Ut),lt+=O(gt,V,st,$,At);else if(Ut=M(N),typeof Ut=="function")for(N=Ut.call(N),Ut=0;!(gt=N.next()).done;)gt=gt.value,$=Tt+mt(gt,Ut++),lt+=O(gt,V,st,$,At);else if($==="object"){if(typeof N.then=="function")return O(tt(N),V,st,gt,At);throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return lt}function k(N,V,st){if(N==null)return N;var gt=[],At=0;return O(N,gt,"","",function($){return V.call(st,$,At++)}),gt}function Y(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(st){(N._status===0||N._status===-1)&&(N._status=1,N._result=st)},function(st){(N._status===0||N._status===-1)&&(N._status=2,N._result=st)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var xt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},yt={map:k,forEach:function(N,V,st){k(N,function(){V.apply(this,arguments)},st)},count:function(N){var V=0;return k(N,function(){V++}),V},toArray:function(N){return k(N,function(V){return V})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return oe.Activity=v,oe.Children=yt,oe.Component=g,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=U,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(N,V,st){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var gt=A({},N.props),At=N.key;if(V!=null)for($ in V.key!==void 0&&(At=""+V.key),V)!W.call(V,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&V.ref===void 0||(gt[$]=V[$]);var $=arguments.length-2;if($===1)gt.children=st;else if(1<$){for(var lt=Array($),Tt=0;Tt<$;Tt++)lt[Tt]=arguments[Tt+2];gt.children=lt}return D(N.type,At,gt)},oe.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},oe.createElement=function(N,V,st){var gt,At={},$=null;if(V!=null)for(gt in V.key!==void 0&&($=""+V.key),V)W.call(V,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(At[gt]=V[gt]);var lt=arguments.length-2;if(lt===1)At.children=st;else if(1<lt){for(var Tt=Array(lt),Ut=0;Ut<lt;Ut++)Tt[Ut]=arguments[Ut+2];At.children=Tt}if(N&&N.defaultProps)for(gt in lt=N.defaultProps,lt)At[gt]===void 0&&(At[gt]=lt[gt]);return D(N,$,At)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:d,render:N}},oe.isValidElement=G,oe.lazy=function(N){return{$$typeof:S,_payload:{_status:-1,_result:N},_init:Y}},oe.memo=function(N,V){return{$$typeof:p,type:N,compare:V===void 0?null:V}},oe.startTransition=function(N){var V=P.T,st={};P.T=st;try{var gt=N(),At=P.S;At!==null&&At(st,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(F,xt)}catch($){xt($)}finally{V!==null&&st.types!==null&&(V.types=st.types),P.T=V}},oe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},oe.use=function(N){return P.H.use(N)},oe.useActionState=function(N,V,st){return P.H.useActionState(N,V,st)},oe.useCallback=function(N,V){return P.H.useCallback(N,V)},oe.useContext=function(N){return P.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,V){return P.H.useDeferredValue(N,V)},oe.useEffect=function(N,V){return P.H.useEffect(N,V)},oe.useEffectEvent=function(N){return P.H.useEffectEvent(N)},oe.useId=function(){return P.H.useId()},oe.useImperativeHandle=function(N,V,st){return P.H.useImperativeHandle(N,V,st)},oe.useInsertionEffect=function(N,V){return P.H.useInsertionEffect(N,V)},oe.useLayoutEffect=function(N,V){return P.H.useLayoutEffect(N,V)},oe.useMemo=function(N,V){return P.H.useMemo(N,V)},oe.useOptimistic=function(N,V){return P.H.useOptimistic(N,V)},oe.useReducer=function(N,V,st){return P.H.useReducer(N,V,st)},oe.useRef=function(N){return P.H.useRef(N)},oe.useState=function(N){return P.H.useState(N)},oe.useSyncExternalStore=function(N,V,st){return P.H.useSyncExternalStore(N,V,st)},oe.useTransition=function(){return P.H.useTransition()},oe.version="19.2.0",oe}var P0;function zd(){return P0||(P0=1,lh.exports=FS()),lh.exports}var ch={exports:{}},bn={};var B0;function HS(){if(B0)return bn;B0=1;var o=zd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},bn.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.0",bn}var I0;function GS(){if(I0)return ch.exports;I0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=HS(),ch.exports}var F0;function VS(){if(F0)return Uo;F0=1;var o=IS(),e=zd(),i=GS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,s=f;break}if(T===s){_=!0,s=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=u;break}if(T===s){_=!0,s=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var tt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},xt=[],yt=-1;function N(t){return{current:t}}function V(t){0>yt||(t.current=xt[yt],xt[yt]=null,yt--)}function st(t,n){yt++,xt[yt]=t.current,t.current=n}var gt=N(null),At=N(null),$=N(null),lt=N(null);function Tt(t,n){switch(st($,n),st(At,t),st(gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?t0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=t0(n),t=e0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(gt),st(gt,t)}function Ut(){V(gt),V(At),V($)}function Pt(t){t.memoizedState!==null&&st(lt,t);var n=gt.current,a=e0(n,t.type);n!==a&&(st(At,t),st(gt,a))}function ae(t){At.current===t&&(V(gt),V(At)),lt.current===t&&(V(lt),Ao._currentValue=Y)}var De,B;function ge(t){if(De===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+t+B}var ne=!1;function te(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ct){at=ct}t.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var I=_.split(`
`),nt=T.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===nt.length)for(s=I.length-1,u=nt.length-1;1<=s&&0<=u&&I[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==nt[u]){var ht=`
`+I[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ge(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return ge(t.type);case 16:return ge("Lazy");case 13:return t.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return te(t.type,!1);case 11:return te(t.type.render,!1);case 1:return te(t.type,!0);case 31:return ge("Activity");default:return""}}function Le(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Wt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,Je=o.unstable_cancelCallback,Qe=o.unstable_shouldYield,z=o.unstable_requestPaint,E=o.unstable_now,it=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Yt=o.log,jt=o.unstable_setDisableYieldValue,bt=null,wt=null;function Kt(t){if(typeof Yt=="function"&&jt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(bt,t)}catch{}}var It=Math.clz32?Math.clz32:q,Nt=Math.log,le=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Nt(t)/le|0)|0}var Rt=256,Dt=262144,Ft=4194304;function Et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Et(s):(_&=T,_!==0?u=Et(_):a||(a=T&~t,a!==0&&(u=Et(a))))):(T=s&~f,T!==0?u=Et(T):_!==0?u=Et(_):a||(a=s&~t,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function re(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var t=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),t}function be(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $n(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,nt=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-It(a),_t=1<<ht;T[ht]=0,I[ht]=-1;var at=nt[ht];if(at!==null)for(nt[ht]=null,ht=0;ht<at.length;ht++){var ct=at[ht];ct!==null&&(ct.lane&=-536870913)}a&=~_t}s!==0&&Fs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Fs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-It(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-It(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function br(t,n){var a=n&-n;return a=(a&42)!==0?1:Ar(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ar(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qa(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:T0(t.type))}function Hs(t,n){var a=k.p;try{return k.p=t,n()}finally{k.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,vn="__reactProps$"+Xn,la="__reactContainer$"+Xn,Gs="__reactEvents$"+Xn,Qc="__reactListeners$"+Xn,Jc="__reactHandles$"+Xn,Qo="__reactResources$"+Xn,Ya="__reactMarker$"+Xn;function R(t){delete t[rn],delete t[vn],delete t[Gs],delete t[Qc],delete t[Jc]}function Z(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[la]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l0(t);t!==null;){if(a=t[rn])return a;t=l0(t)}return n}t=a,a=t.parentNode}return null}function rt(t){if(t=t[rn]||t[la]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Q(t){var n=t[Qo];return n||(n=t[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(t){t[Ya]=!0}var Ot=new Set,Vt={};function Bt(t,n){Qt(t,n),Qt(t+"Capture",n)}function Qt(t,n){for(Vt[t]=n,t=0;t<n.length;t++)Ot.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},pe={};function Ne(t){return Wt.call(pe,t)?!0:Wt.call(Jt,t)?!1:ie.test(t)?pe[t]=!0:(Jt[t]=!0,!1)}function ke(t,n,a){if(Ne(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Oe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function _e(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ae(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function xn(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ae(t,n,""+t[n])}}function Ni(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=qe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function mn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ja=/[\n"\\]/g;function Se(t){return t.replace(ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,s,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Xt(n)):t.value!==""+Xt(n)&&(t.value=""+Xt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?fn(t,_,Xt(n)):a!=null?fn(t,_,Xt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Xt(T):t.removeAttribute("name")}function Dn(t,n,a,s,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xn(t);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),xn(t)}function fn(t,n,a){n==="number"&&mn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Cr(t,n,a){if(n!=null&&(n=""+Xt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Xt(a):""}function Ei(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(tt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Xt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),xn(t)}function wr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var wv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||wv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Jd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Qd(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Qd(t,f,n[f])}function $c(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(t){return Uv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var tu=null;function eu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function $d(t){var n=rt(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));Tn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Ni(s)}break t;case"textarea":Cr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var nu=!1;function tp(t,n,a){if(nu)return t(n,a);nu=!0;try{var s=t(n);return s}finally{if(nu=!1,(Dr!==null||Ur!==null)&&(Fl(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,$d(n),t)))for(n=0;n<t.length;n++)$d(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(zi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{iu=!1}var ca=null,au=null,$o=null;function ep(){if($o)return $o;var t,n=au,a=n.length,s,u="value"in ca?ca.value:ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return $o=u.slice(t,1<s?1-s:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function np(){return!1}function zn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:np,this.isPropagationStopped=np,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(Za),ks=v({},Za,{view:0,detail:0}),Lv=zn(ks),ru,su,Ws,il=v({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(ru=t.screenX-Ws.screenX,su=t.screenY-Ws.screenY):su=ru=0,Ws=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),ip=zn(il),Nv=v({},il,{dataTransfer:0}),Ov=zn(Nv),zv=v({},ks,{relatedTarget:0}),ou=zn(zv),Pv=v({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=zn(Pv),Iv=v({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=zn(Iv),Hv=v({},Za,{data:0}),ap=zn(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Xv[t])?!!n[t]:!1}function lu(){return kv}var Wv=v({},ks,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qv=zn(Wv),Yv=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=zn(Yv),jv=v({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),Zv=zn(jv),Kv=v({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=zn(Kv),Jv=v({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=zn(Jv),tx=v({},Za,{newState:0,oldState:0}),ex=zn(tx),nx=[9,13,27,32],cu=zi&&"CompositionEvent"in window,qs=null;zi&&"documentMode"in document&&(qs=document.documentMode);var ix=zi&&"TextEvent"in window&&!qs,sp=zi&&(!cu||qs&&8<qs&&11>=qs),op=" ",lp=!1;function cp(t,n){switch(t){case"keyup":return nx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function ax(t,n){switch(t){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return t=n.data,t===op&&lp?null:t;default:return null}}function rx(t,n){if(Lr)return t==="compositionend"||!cu&&cp(t,n)?(t=ep(),$o=au=ca=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!sx[t.type]:n==="textarea"}function hp(t,n,a,s){Dr?Ur?Ur.push(s):Ur=[s]:Dr=s,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ys=null,js=null;function ox(t){jg(t,0)}function al(t){var n=ot(t);if(Ni(n))return t}function dp(t,n){if(t==="change")return n}var pp=!1;if(zi){var uu;if(zi){var fu="oninput"in document;if(!fu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),fu=typeof mp.oninput=="function"}uu=fu}else uu=!1;pp=uu&&(!document.documentMode||9<document.documentMode)}function gp(){Ys&&(Ys.detachEvent("onpropertychange",_p),js=Ys=null)}function _p(t){if(t.propertyName==="value"&&al(js)){var n=[];hp(n,js,t,eu(t)),tp(ox,n)}}function lx(t,n,a){t==="focusin"?(gp(),Ys=n,js=a,Ys.attachEvent("onpropertychange",_p)):t==="focusout"&&gp()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(js)}function ux(t,n){if(t==="click")return al(n)}function fx(t,n){if(t==="input"||t==="change")return al(n)}function hx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:hx;function Zs(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Wt.call(n,u)||!kn(t[u],n[u]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xp(t,n){var a=vp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=mn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=mn(t.document)}return n}function hu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var dx=zi&&"documentMode"in document&&11>=document.documentMode,Nr=null,du=null,Ks=null,pu=!1;function Mp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Nr==null||Nr!==mn(s)||(s=Nr,"selectionStart"in s&&hu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ks&&Zs(Ks,s)||(Ks=s,s=ql(du,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Nr)))}function Ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},mu={},Ep={};zi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Qa(t){if(mu[t])return mu[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return mu[t]=n[a];return t}var Tp=Qa("animationend"),bp=Qa("animationiteration"),Ap=Qa("animationstart"),px=Qa("transitionrun"),mx=Qa("transitionstart"),gx=Qa("transitioncancel"),Rp=Qa("transitionend"),Cp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function hi(t,n){Cp.set(t,n),Bt(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],zr=0,_u=0;function sl(){for(var t=zr,n=_u=zr=0;n<t;){var a=ti[n];ti[n++]=null;var s=ti[n];ti[n++]=null;var u=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&wp(a,u,f)}}function ol(t,n,a,s){ti[zr++]=t,ti[zr++]=n,ti[zr++]=a,ti[zr++]=s,_u|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function vu(t,n,a,s){return ol(t,n,a,s),ll(t)}function Ja(t,n){return ol(t,null,null,n),ll(t)}function wp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-It(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<xo)throw xo=0,Cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Pr={};function _x(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,s){return new _x(t,n,a,s)}function xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Dp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")xu(t)&&(_=1);else if(typeof t=="string")_=MS(t,a,gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Wn(31,a,n,u),t.elementType=D,t.lanes=f,t;case A:return $a(a.children,u,f,n);case y:_=8,u|=24;break;case g:return t=Wn(12,a,n,u|2),t.elementType=g,t.lanes=f,t;case H:return t=Wn(13,a,n,u),t.elementType=H,t.lanes=f,t;case F:return t=Wn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break t;case L:_=9;break t;case w:_=11;break t;case P:_=14;break t;case W:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Wn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function $a(t,n,a,s){return t=Wn(7,t,s,n),t.lanes=a,t}function Su(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Up(t){var n=Wn(18,null,null,0);return n.stateNode=t,n}function yu(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lp=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Lp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Le(n)},Lp.set(t,n),n)}return{value:t,source:n,stack:Le(n)}}var Br=[],Ir=0,ul=null,Qs=0,ni=[],ii=0,ua=null,Ti=1,bi="";function Bi(t,n){Br[Ir++]=Qs,Br[Ir++]=ul,ul=t,Qs=n}function Np(t,n,a){ni[ii++]=Ti,ni[ii++]=bi,ni[ii++]=ua,ua=t;var s=Ti;t=bi;var u=32-It(s)-1;s&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Ti=1<<32-It(n)+u|a<<u|s,bi=f+t}else Ti=1<<f|a<<u|s,bi=t}function Mu(t){t.return!==null&&(Bi(t,1),Np(t,1,0))}function Eu(t){for(;t===ul;)ul=Br[--Ir],Br[Ir]=null,Qs=Br[--Ir],Br[Ir]=null;for(;t===ua;)ua=ni[--ii],ni[ii]=null,bi=ni[--ii],ni[ii]=null,Ti=ni[--ii],ni[ii]=null}function Op(t,n){ni[ii++]=Ti,ni[ii++]=bi,ni[ii++]=ua,Ti=n.id,bi=n.overflow,ua=t}var Sn=null,Ye=null,Ee=!1,fa=null,ai=!1,Tu=Error(r(519));function ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ei(n,t)),Tu}function zp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[vn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)xe(yo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Dn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ei(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Jg(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Oi),n=!0):n=!1,n||ha(t,!0)}function Pp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:Sn=Sn.return}}function Fr(t){if(t!==Sn)return!1;if(!Ee)return Pp(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xf(t.type,t.memoizedProps)),a=!a),a&&Ye&&ha(t),Pp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=o0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=o0(t)}else n===27?(n=Ye,Aa(t.type)?(t=jf,jf=null,Ye=t):Ye=n):Ye=Sn?si(t.stateNode.nextSibling):null;return!0}function tr(){Ye=Sn=null,Ee=!1}function bu(){var t=fa;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),fa=null),t}function Js(t){fa===null?fa=[t]:fa.push(t)}var Au=N(null),er=null,Ii=null;function da(t,n,a){st(Au,n._currentValue),n._currentValue=a}function Fi(t){t._currentValue=Au.current,V(Au)}function Ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Cu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ru(f.return,a,t),s||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ru(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Hr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;kn(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===lt.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}u=u.return}t!==null&&Cu(n,t,a,s),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function nr(t){er=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return Bp(er,t)}function hl(t,n){return er===null&&nr(t),Bp(t,n)}function Bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(r(308));Ii=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ii=Ii.next=n;return a}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xx=o.unstable_scheduleCallback,Sx=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new vx,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&xx(Sx,function(){t.controller.abort()})}var to=null,Du=0,Gr=0,Vr=null;function yx(t,n){if(to===null){var a=to=[];Du=0,Gr=Of(),Vr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Du++,n.then(Ip,Ip),n}function Ip(){if(--Du===0&&to!==null){Vr!==null&&(Vr.status="fulfilled");var t=to;to=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Mx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Fp=O.S;O.S=function(t,n){Mg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yx(t,n),Fp!==null&&Fp(t,n)};var ir=N(null);function Uu(){var t=ir.current;return t!==null?t:We.pooledCache}function dl(t,n){n===null?st(ir,ir.current):st(ir,n.pool)}function Hp(){var t=Uu();return t===null?null:{parent:sn._currentValue,pool:t}}var Xr=Error(r(460)),Lu=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function Gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Oi,Oi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t;default:if(typeof n.status=="string")n.then(Oi,Oi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,kp(t),t}throw rr=n,Xr}}function ar(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,Xr):a}}var rr=null;function Xp(){if(rr===null)throw Error(r(459));var t=rr;return rr=null,t}function kp(t){if(t===Xr||t===pl)throw Error(r(483))}var kr=null,eo=0;function gl(t){var n=eo;return eo+=1,kr===null&&(kr=[]),Vp(kr,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wp(t){function n(K,X){if(t){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function s(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Pi(K,X),K.index=0,K.sibling=null,K}function f(K,X,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function T(K,X,et,pt){return X===null||X.tag!==6?(X=Su(et,K.mode,pt),X.return=K,X):(X=u(X,et),X.return=K,X)}function I(K,X,et,pt){var $t=et.type;return $t===A?ht(K,X,et.props.children,pt,et.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&ar($t)===X.type)?(X=u(X,et.props),no(X,et),X.return=K,X):(X=cl(et.type,et.key,et.props,null,K.mode,pt),no(X,et),X.return=K,X)}function nt(K,X,et,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=yu(et,K.mode,pt),X.return=K,X):(X=u(X,et.children||[]),X.return=K,X)}function ht(K,X,et,pt,$t){return X===null||X.tag!==7?(X=$a(et,K.mode,pt,$t),X.return=K,X):(X=u(X,et),X.return=K,X)}function _t(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Su(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return et=cl(X.type,X.key,X.props,null,K.mode,et),no(et,X),et.return=K,et;case b:return X=yu(X,K.mode,et),X.return=K,X;case W:return X=ar(X),_t(K,X,et)}if(tt(X)||J(X))return X=$a(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return _t(K,gl(X),et);if(X.$$typeof===U)return _t(K,hl(K,X),et);_l(K,X)}return null}function at(K,X,et,pt){var $t=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return $t!==null?null:T(K,X,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===$t?I(K,X,et,pt):null;case b:return et.key===$t?nt(K,X,et,pt):null;case W:return et=ar(et),at(K,X,et,pt)}if(tt(et)||J(et))return $t!==null?null:ht(K,X,et,pt,null);if(typeof et.then=="function")return at(K,X,gl(et),pt);if(et.$$typeof===U)return at(K,X,hl(K,et),pt);_l(K,et)}return null}function ct(K,X,et,pt,$t){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(et)||null,T(X,K,""+pt,$t);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return K=K.get(pt.key===null?et:pt.key)||null,I(X,K,pt,$t);case b:return K=K.get(pt.key===null?et:pt.key)||null,nt(X,K,pt,$t);case W:return pt=ar(pt),ct(K,X,et,pt,$t)}if(tt(pt)||J(pt))return K=K.get(et)||null,ht(X,K,pt,$t,null);if(typeof pt.then=="function")return ct(K,X,et,gl(pt),$t);if(pt.$$typeof===U)return ct(K,X,et,hl(X,pt),$t);_l(X,pt)}return null}function Gt(K,X,et,pt){for(var $t=null,Re=null,qt=X,ue=X=0,Me=null;qt!==null&&ue<et.length;ue++){qt.index>ue?(Me=qt,qt=null):Me=qt.sibling;var Ce=at(K,qt,et[ue],pt);if(Ce===null){qt===null&&(qt=Me);break}t&&qt&&Ce.alternate===null&&n(K,qt),X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,qt=Me}if(ue===et.length)return a(K,qt),Ee&&Bi(K,ue),$t;if(qt===null){for(;ue<et.length;ue++)qt=_t(K,et[ue],pt),qt!==null&&(X=f(qt,X,ue),Re===null?$t=qt:Re.sibling=qt,Re=qt);return Ee&&Bi(K,ue),$t}for(qt=s(qt);ue<et.length;ue++)Me=ct(qt,K,ue,et[ue],pt),Me!==null&&(t&&Me.alternate!==null&&qt.delete(Me.key===null?ue:Me.key),X=f(Me,X,ue),Re===null?$t=Me:Re.sibling=Me,Re=Me);return t&&qt.forEach(function(Ua){return n(K,Ua)}),Ee&&Bi(K,ue),$t}function ee(K,X,et,pt){if(et==null)throw Error(r(151));for(var $t=null,Re=null,qt=X,ue=X=0,Me=null,Ce=et.next();qt!==null&&!Ce.done;ue++,Ce=et.next()){qt.index>ue?(Me=qt,qt=null):Me=qt.sibling;var Ua=at(K,qt,Ce.value,pt);if(Ua===null){qt===null&&(qt=Me);break}t&&qt&&Ua.alternate===null&&n(K,qt),X=f(Ua,X,ue),Re===null?$t=Ua:Re.sibling=Ua,Re=Ua,qt=Me}if(Ce.done)return a(K,qt),Ee&&Bi(K,ue),$t;if(qt===null){for(;!Ce.done;ue++,Ce=et.next())Ce=_t(K,Ce.value,pt),Ce!==null&&(X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Ee&&Bi(K,ue),$t}for(qt=s(qt);!Ce.done;ue++,Ce=et.next())Ce=ct(qt,K,ue,Ce.value,pt),Ce!==null&&(t&&Ce.alternate!==null&&qt.delete(Ce.key===null?ue:Ce.key),X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return t&&qt.forEach(function(NS){return n(K,NS)}),Ee&&Bi(K,ue),$t}function He(K,X,et,pt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var $t=et.key;X!==null;){if(X.key===$t){if($t=et.type,$t===A){if(X.tag===7){a(K,X.sibling),pt=u(X,et.props.children),pt.return=K,K=pt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&ar($t)===X.type){a(K,X.sibling),pt=u(X,et.props),no(pt,et),pt.return=K,K=pt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===A?(pt=$a(et.props.children,K.mode,pt,et.key),pt.return=K,K=pt):(pt=cl(et.type,et.key,et.props,null,K.mode,pt),no(pt,et),pt.return=K,K=pt)}return _(K);case b:t:{for($t=et.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),pt=u(X,et.children||[]),pt.return=K,K=pt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}pt=yu(et,K.mode,pt),pt.return=K,K=pt}return _(K);case W:return et=ar(et),He(K,X,et,pt)}if(tt(et))return Gt(K,X,et,pt);if(J(et)){if($t=J(et),typeof $t!="function")throw Error(r(150));return et=$t.call(et),ee(K,X,et,pt)}if(typeof et.then=="function")return He(K,X,gl(et),pt);if(et.$$typeof===U)return He(K,X,hl(K,et),pt);_l(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),pt=u(X,et),pt.return=K,K=pt):(a(K,X),pt=Su(et,K.mode,pt),pt.return=K,K=pt),_(K)):a(K,X)}return function(K,X,et,pt){try{eo=0;var $t=He(K,X,et,pt);return kr=null,$t}catch(qt){if(qt===Xr||qt===pl)throw qt;var Re=Wn(29,qt,null,K.mode);return Re.lanes=pt,Re.return=K,Re}}}var sr=Wp(!0),qp=Wp(!1),pa=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ou(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ll(t),wp(t,null,a),n}return ol(t,s,n,a),ll(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Mi(t,a)}}function zu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Pu=!1;function ao(){if(Pu){var t=Vr;if(t!==null)throw t}}function ro(t,n,a,s){Pu=!1;var u=t.updateQueue;pa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,nt=I.next;I.next=null,_===null?f=nt:_.next=nt,_=I;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==_&&(T===null?ht.firstBaseUpdate=nt:T.next=nt,ht.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;_=0,ht=nt=I=null,T=f;do{var at=T.lane&-536870913,ct=at!==T.lane;if(ct?(ye&at)===at:(s&at)===at){at!==0&&at===Gr&&(Pu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,ee=T;at=n;var He=a;switch(ee.tag){case 1:if(Gt=ee.payload,typeof Gt=="function"){_t=Gt.call(He,_t,at);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ee.payload,at=typeof Gt=="function"?Gt.call(He,_t,at):Gt,at==null)break t;_t=v({},_t,at);break t;case 2:pa=!0}}at=T.callback,at!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(nt=ht=ct,I=_t):ht=ht.next=ct,_|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=nt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),ya|=_,t.lanes=_,t.memoizedState=_t}}function Yp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yp(a[t],n)}var Wr=N(null),vl=N(0);function Zp(t,n){t=ji,st(vl,t),st(Wr,n),ji=t|n.baseLanes}function Bu(){st(vl,ji),st(Wr,Wr.current)}function Iu(){ji=vl.current,V(Wr),V(vl)}var qn=N(null),ri=null;function _a(t){var n=t.alternate;st(nn,nn.current&1),st(qn,t),ri===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(ri=t)}function Fu(t){st(nn,nn.current),st(qn,t),ri===null&&(ri=t)}function Kp(t){t.tag===22?(st(nn,nn.current),st(qn,t),ri===null&&(ri=t)):va()}function va(){st(nn,nn.current),st(qn,qn.current)}function Yn(t){V(qn),ri===t&&(ri=null),V(nn)}var nn=N(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hi=0,ce=null,Ie=null,on=null,Sl=!1,qr=!1,or=!1,yl=0,so=0,Yr=null,Ex=0;function $e(){throw Error(r(321))}function Hu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Gu(t,n,a,s,u,f){return Hi=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Nm:nf,or=!1,f=a(s,u),or=!1,qr&&(f=Jp(n,a,s,u)),Qp(t),f}function Qp(t){O.H=co;var n=Ie!==null&&Ie.next!==null;if(Hi=0,on=Ie=ce=null,Sl=!1,so=0,Yr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&fl(t)&&(ln=!0))}function Jp(t,n,a,s){ce=t;var u=0;do{if(qr&&(Yr=null),so=0,qr=!1,25<=u)throw Error(r(301));if(u+=1,on=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Om,f=n(a,s)}while(qr);return f}function Tx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(ce.flags|=1024),n}function Vu(){var t=yl!==0;return yl=0,t}function Xu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ku(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}Hi=0,on=Ie=ce=null,qr=!1,so=yl=0,Yr=null}function Un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ce.memoizedState=on=t:on=on.next=t,on}function an(){if(Ie===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=on===null?ce.memoizedState:on.next;if(n!==null)on=n,Ie=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?ce.memoizedState=on=t:on=on.next=t}return on}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,Yr===null&&(Yr=[]),t=Vp(Yr,t,n),n=ce,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Nm:nf),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===U)return yn(t)}throw Error(r(438,String(t)))}function Wu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Gi(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=an();return qu(n,Ie,t)}function qu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,I=null,nt=n,ht=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(ye&_t)===_t:(Hi&_t)===_t){var at=nt.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Gr&&(ht=!0);else if((Hi&at)===at){nt=nt.next,at===Gr&&(ht=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(T=I=_t,_=f):I=I.next=_t,ce.lanes|=at,ya|=at;_t=nt.action,or&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else at={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(T=I=at,_=f):I=I.next=at,ce.lanes|=_t,ya|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(I===null?_=f:I.next=T,!kn(f,t.memoizedState)&&(ln=!0,ht&&(a=Vr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Yu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);kn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function $p(t,n,a){var s=ce,u=an(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!kn((Ie||u).memoizedState,a);if(_&&(u.memoizedState=a,ln=!0),u=u.queue,Ku(nm.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,jr(9,{destroy:void 0},em.bind(null,s,u,a,n),null),We===null)throw Error(r(349));f||(Hi&127)!==0||tm(s,n,a)}return a}function tm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Ml(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function em(t,n,a,s){n.value=a,n.getSnapshot=s,im(n)&&am(t)}function nm(t,n,a){return a(function(){im(n)&&am(t)})}function im(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function am(t){var n=Ja(t,2);n!==null&&Hn(n,t,2)}function ju(t){var n=Un();if(typeof t=="function"){var a=t;if(t=a(),or){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},n}function rm(t,n,a,s){return t.baseState=a,qu(t,Ie,typeof s=="function"?s:Gi)}function bx(t,n,a,s,u){if(Rl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var T=a(u,s),I=O.S;I!==null&&I(_,T),om(t,n,T)}catch(nt){Zu(t,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,s),om(t,n,f)}catch(nt){Zu(t,n,nt)}}function om(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){lm(t,n,s)},function(s){return Zu(t,n,s)}):lm(t,n,a)}function lm(t,n,a){n.status="fulfilled",n.value=a,cm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,sm(t,a)))}function Zu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==s)}t.action=null}function cm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function um(t,n){return n}function fm(t,n){if(Ee){var a=We.formState;if(a!==null){t:{var s=ce;if(Ee){if(Ye){e:{for(var u=Ye,f=ai;u.nodeType!==8;){if(!f){u=null;break e}if(u=si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=si(u.nextSibling),s=u.data==="F!";break t}}ha(s)}s=!1}s&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=s,a=Dm.bind(null,ce,s),s.dispatch=a,s=ju(!1),f=ef.bind(null,ce,!1,s.queue),s=Un(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=bx.bind(null,ce,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function hm(t){var n=an();return dm(n,Ie,t)}function dm(t,n,a){if(n=qu(t,n,um)[0],t=Tl(Gi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=oo(n)}catch(_){throw _===Xr?pl:_}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,jr(9,{destroy:void 0},Ax.bind(null,u,a),null)),[s,f,t]}function Ax(t,n){t.action=n}function pm(t){var n=an(),a=Ie;if(a!==null)return dm(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function jr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Ml(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function mm(){return an().memoizedState}function bl(t,n,a,s){var u=Un();ce.flags|=t,u.memoizedState=jr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(t,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;Ie!==null&&s!==null&&Hu(s,Ie.memoizedState.deps)?u.memoizedState=jr(n,f,a,s):(ce.flags|=t,u.memoizedState=jr(1|n,f,a,s))}function gm(t,n){bl(8390656,8,t,n)}function Ku(t,n){Al(2048,8,t,n)}function Rx(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Ml(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function _m(t){var n=an().memoizedState;return Rx({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function vm(t,n){return Al(4,2,t,n)}function xm(t,n){return Al(4,4,t,n)}function Sm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ym(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,Sm.bind(null,n,t),a)}function Qu(){}function Mm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Hu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Em(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Hu(n,s[1]))return s[0];if(s=t(),or){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s}function Ju(t,n,a){return a===void 0||(Hi&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Tg(),ce.lanes|=t,ya|=t,a)}function Tm(t,n,a,s){return kn(a,n)?a:Wr.current!==null?(t=Ju(t,a,s),kn(t,n)||(ln=!0),t):(Hi&42)===0||(Hi&1073741824)!==0&&(ye&261930)===0?(ln=!0,t.memoizedState=a):(t=Tg(),ce.lanes|=t,ya|=t,n)}function bm(t,n,a,s,u){var f=k.p;k.p=f!==0&&8>f?f:8;var _=O.T,T={};O.T=T,ef(t,!1,n,a);try{var I=u(),nt=O.S;if(nt!==null&&nt(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Mx(I,s);lo(t,n,ht,Kn(t))}else lo(t,n,s,Kn(t))}catch(_t){lo(t,n,{then:function(){},status:"rejected",reason:_t},Kn())}finally{k.p=f,_!==null&&T.types!==null&&(_.types=T.types),O.T=_}}function Cx(){}function $u(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Am(t).queue;bm(t,u,n,Y,a===null?Cx:function(){return Rm(t),a(s)})}function Am(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rm(t){var n=Am(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},Kn())}function tf(){return yn(Ao)}function Cm(){return an().memoizedState}function wm(){return an().memoizedState}function wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Kn();t=ma(a);var s=ga(n,t,a);s!==null&&(Hn(s,n,a),io(s,n,a)),n={cache:wu()},t.payload=n;return}n=n.return}}function Dx(t,n,a){var s=Kn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Um(n,a):(a=vu(t,n,a,s),a!==null&&(Hn(a,t,s),Lm(a,n,s)))}function Dm(t,n,a){var s=Kn();lo(t,n,a,s)}function lo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Um(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,kn(T,_))return ol(t,n,u,0),We===null&&sl(),!1}catch{}if(a=vu(t,n,u,s),a!==null)return Hn(a,t,s),Lm(a,n,s),!0}return!1}function ef(t,n,a,s){if(s={lane:2,revertLane:Of(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(r(479))}else n=vu(t,a,s,2),n!==null&&Hn(n,t,2)}function Rl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Um(t,n){qr=Sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Mi(t,a)}}var co={readContext:yn,use:El,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};co.useEffectEvent=$e;var Nm={readContext:yn,use:El,useCallback:function(t,n){return Un().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,Sm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Un();n=n===void 0?null:n;var s=t();if(or){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Un();if(a!==void 0){var u=a(n);if(or){Kt(!0);try{a(n)}finally{Kt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Dx.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=Un();return t={current:t},n.memoizedState=t},useState:function(t){t=ju(t);var n=t.queue,a=Dm.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(t,n){var a=Un();return Ju(a,t,n)},useTransition:function(){var t=ju(!1);return t=bm.bind(null,ce,t.queue,!0,!1),Un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,u=Un();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(ye&127)!==0||tm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,s,f,t),[t]),s.flags|=2048,jr(9,{destroy:void 0},em.bind(null,s,f,a,n),null),a},useId:function(){var t=Un(),n=We.identifierPrefix;if(Ee){var a=bi,s=Ti;a=(s&~(1<<32-It(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ex++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:tf,useFormState:fm,useActionState:fm,useOptimistic:function(t){var n=Un();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Wu,useCacheRefresh:function(){return Un().memoizedState=wx.bind(null,ce)},useEffectEvent:function(t){var n=Un(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:yn,use:El,useCallback:Mm,useContext:yn,useEffect:Ku,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Tl,useRef:mm,useState:function(){return Tl(Gi)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=an();return Tm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Tl(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:tf,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=an();return rm(a,Ie,t,n)},useMemoCache:Wu,useCacheRefresh:wm};nf.useEffectEvent=_m;var Om={readContext:yn,use:El,useCallback:Mm,useContext:yn,useEffect:Ku,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Yu,useRef:mm,useState:function(){return Yu(Gi)},useDebugValue:Qu,useDeferredValue:function(t,n){var a=an();return Ie===null?Ju(a,t,n):Tm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Yu(Gi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:tf,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var a=an();return Ie!==null?rm(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:wm};Om.useEffectEvent=_m;function af(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=ma(s);u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,s),n!==null&&(Hn(n,t,s),io(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Kn(),u=ma(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(t,u,s),n!==null&&(Hn(n,t,s),io(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Kn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(t,s,a),n!==null&&(Hn(n,t,a),io(n,t,a))}};function zm(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(u,f):!0}function Pm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&rf.enqueueReplaceState(n,n.state,null)}function lr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Bm(t){rl(t)}function Im(t){console.error(t)}function Fm(t){rl(t)}function Cl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Hm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(t,n)},a}function Gm(t){return t=ma(t),t.tag=3,t}function Vm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Hm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Hm(n,a,s),typeof u!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Ux(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?Hl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Uf(t,s,u)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Uf(t,s,u)),!1}throw Error(r(435,a.tag))}return Uf(t,s,u),Hl(),!1}if(Ee)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Tu&&(t=Error(r(422),{cause:s}),Js(ei(t,a)))):(s!==Tu&&(n=Error(r(423),{cause:s}),Js(ei(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ei(s,a),u=sf(t.stateNode,s,u),zu(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ei(f,a),vo===null?vo=[f]:vo.push(f),tn!==4&&(tn=2),n===null)return!0;s=ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=sf(a.stateNode,s,t),zu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,t,a,s),zu(a,u),!1}a=a.return}while(a!==null);return!1}var of=Error(r(461)),ln=!1;function Mn(t,n,a,s){n.child=t===null?qp(n,null,a,s):sr(n,t.child,a,s)}function Xm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return nr(n),s=Gu(t,n,a,_,f,u),T=Vu(),t!==null&&!ln?(Xu(t,n,u),Vi(t,n,u)):(Ee&&T&&Mu(n),n.flags|=1,Mn(t,n,s,u),n.child)}function km(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(t,n,f,s,u)):(t=cl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!mf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(_,s)&&t.ref===n.ref)return Vi(t,n,u)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Wm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Zs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,mf(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Vi(t,n,u)}return lf(t,n,a,s,u)}function qm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Ym(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Zp(n,f):Bu(),Kp(n);else return s=n.lanes=536870912,Ym(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dl(n,f.cachePool),Zp(n,f),va(),n.memoizedState=null):(t!==null&&dl(n,null),Bu(),va());return Mn(t,n,u,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(t,n,a,s,u){var f=Uu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Bu(),Kp(n),t!==null&&Hr(t,n,s,!0),n.childLanes=u,null}function wl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function jm(t,n,a){return sr(n,t.child,null,a),t=wl(n,n.pendingProps),t.flags|=2,Yn(n),n.memoizedState=null,t}function Lx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(s.mode==="hidden")return t=wl(n,s),n.lanes=536870912,uo(null,t);if(Fu(n),(t=Ye)?(t=s0(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Sn=n,Ye=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return wl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Fu(n),u)if(n.flags&256)n.flags&=-257,n=jm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Hr(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(s=We,s!==null&&(_=br(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ja(t,_),Hn(s,t,_),of;Hl(),n=jm(t,n,a)}else t=f.treeContext,Ye=si(_.nextSibling),Sn=n,Ee=!0,fa=null,ai=!1,t!==null&&Op(n,t),n=wl(n,s),n.flags|=4096;return n}return t=Pi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lf(t,n,a,s,u){return nr(n),a=Gu(t,n,a,s,void 0,u),s=Vu(),t!==null&&!ln?(Xu(t,n,u),Vi(t,n,u)):(Ee&&s&&Mu(n),n.flags|=1,Mn(t,n,a,u),n.child)}function Zm(t,n,a,s,u,f){return nr(n),n.updateQueue=null,a=Jp(n,s,a,u),Qp(t),s=Vu(),t!==null&&!ln?(Xu(t,n,f),Vi(t,n,f)):(Ee&&s&&Mu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Km(t,n,a,s,u){if(nr(n),n.stateNode===null){var f=Pr,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Nu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):Pr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(af(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&rf.enqueueReplaceState(f,f.state,null),ro(n,s,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,I=lr(a,T);f.props=I;var nt=f.context,ht=a.contextType;_=Pr,typeof ht=="object"&&ht!==null&&(_=yn(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||nt!==_)&&Pm(n,f,s,_),pa=!1;var at=n.memoizedState;f.state=at,ro(n,s,f,u),ao(),nt=n.memoizedState,T||at!==nt||pa?(typeof _t=="function"&&(af(n,a,_t,s),nt=n.memoizedState),(I=pa||zm(n,a,I,s,at,nt,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=_,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ou(t,n),_=n.memoizedProps,ht=lr(a,_),f.props=ht,_t=n.pendingProps,at=f.context,nt=a.contextType,I=Pr,typeof nt=="object"&&nt!==null&&(I=yn(nt)),T=a.getDerivedStateFromProps,(nt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||at!==I)&&Pm(n,f,s,I),pa=!1,at=n.memoizedState,f.state=at,ro(n,s,f,u),ao();var ct=n.memoizedState;_!==_t||at!==ct||pa||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof T=="function"&&(af(n,a,T,s),ct=n.memoizedState),(ht=pa||zm(n,a,ht,s,at,ct,I)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=I,s=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=sr(n,t.child,null,u),n.child=sr(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Vi(t,n,u),t}function Qm(t,n,a,s){return tr(),n.flags|=256,Mn(t,n,a,s),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Hp()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Zn),t}function Jm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?_a(n):va(),(t=Ye)?(t=s0(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Up(t),a.return=n,n.child=a,Sn=n,Ye=null)):t=null,t===null)throw ha(n);return Yf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(va(),u=n.mode,T=Ul({mode:"hidden",children:T},u),s=$a(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=uf(a),s.childLanes=ff(t,_,a),n.memoizedState=cf,uo(null,s)):(_a(n),hf(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=df(t,n,a)):n.memoizedState!==null?(va(),n.child=t.child,n.flags|=128,n=null):(va(),T=s.fallback,u=n.mode,s=Ul({mode:"visible",children:s.children},u),T=$a(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,sr(n,t.child,null,a),s=n.child,s.memoizedState=uf(a),s.childLanes=ff(t,_,a),n.memoizedState=cf,n=uo(null,s));else if(_a(n),Yf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var nt=_.dgst;_=nt,s=Error(r(419)),s.stack="",s.digest=_,Js({value:s,source:null,stack:null}),n=df(t,n,a)}else if(ln||Hr(t,n,a,!1),_=(a&t.childLanes)!==0,ln||_){if(_=We,_!==null&&(s=br(_,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,Ja(t,s),Hn(_,t,s),of;qf(T)||Hl(),n=df(t,n,a)}else qf(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Ye=si(T.nextSibling),Sn=n,Ee=!0,fa=null,ai=!1,t!==null&&Op(n,t),n=hf(n,s.children),n.flags|=4096);return n}return u?(va(),T=s.fallback,u=n.mode,I=t.child,nt=I.sibling,s=Pi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,nt!==null?T=Pi(nt,T):(T=$a(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,uo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=uf(a):(u=T.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Hp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=ff(t,_,a),n.memoizedState=cf,uo(t.child,s)):(_a(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function hf(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=Wn(22,t,null,n),t.lanes=0,t}function df(t,n,a){return sr(n,t.child,null,a),t=hf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function $m(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ru(t.return,n,a)}function pf(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function tg(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=nn.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,st(nn,_),Mn(t,n,s,a),s=Ee?Qs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$m(t,a,n);else if(t.tag===19)$m(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&xl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}pf(n,!0,a,null,f,s);break;case"together":pf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Vi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Hr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function Nx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),da(n,sn,t.memoizedState.cache),tr();break;case 27:case 5:Pt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(t,n,a):(_a(n),t=Vi(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Hr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return tg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),st(nn,nn.current),s)break;return null;case 22:return n.lanes=0,qm(t,n,a,n.pendingProps);case 24:da(n,sn,t.memoizedState.cache)}return Vi(t,n,a)}function eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!mf(t,a)&&(n.flags&128)===0)return ln=!1,Nx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Ee&&(n.flags&1048576)!==0&&Np(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ar(n.elementType),n.type=t,typeof t=="function")xu(t)?(s=lr(t,s),n.tag=1,n=Km(null,n,t,s,a)):(n.tag=0,n=lf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Xm(null,n,t,s,a);break t}else if(u===P){n.tag=14,n=km(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=lr(s,n.pendingProps),Km(t,n,s,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Ou(t,n),ro(n,s,null,a);var _=n.memoizedState;if(s=_.cache,da(n,sn,s),s!==f.cache&&Cu(n,[sn],a,!0),ao(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(t,n,s,a);break t}else if(s!==u){u=ei(Error(r(424)),n),Js(u),n=Qm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=si(t.firstChild),Sn=n,Ee=!0,fa=null,ai=!0,a=qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(tr(),s===u){n=Vi(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=h0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Yl($.current).createElement(a),s[rn]=n,s[vn]=t,En(s,a,t),St(s),n.stateNode=s):n.memoizedState=h0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pt(n),t===null&&Ee&&(s=n.stateNode=c0(n.type,n.pendingProps,$.current),Sn=n,ai=!0,u=Ye,Aa(n.type)?(jf=u,Ye=si(s.firstChild)):Ye=u),Mn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((u=s=Ye)&&(s=cS(s,n.type,n.pendingProps,ai),s!==null?(n.stateNode=s,Sn=n,Ye=si(s.firstChild),ai=!1,u=!0):u=!1),u||ha(n)),Pt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Xf(u,f)?s=null:_!==null&&Xf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(t,n,Tx,null,null,a),Ao._currentValue=u),Dl(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=Ye)&&(a=uS(a,n.pendingProps,ai),a!==null?(n.stateNode=a,Sn=n,Ye=null,t=!0):t=!1),t||ha(n)),null;case 13:return Jm(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=sr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Xm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,nr(n),u=yn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return km(t,n,n.type,n.pendingProps,a);case 15:return Wm(t,n,n.type,n.pendingProps,a);case 19:return tg(t,n,a);case 31:return Lx(t,n,a);case 22:return qm(t,n,a,n.pendingProps);case 24:return nr(n),s=yn(sn),t===null?(u=Uu(),u===null&&(u=We,f=wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Nu(n),da(n,sn,u)):((t.lanes&a)!==0&&(Ou(t,n),ro(n,null,null,a),ao()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),da(n,sn,s)):(s=f.cache,da(n,sn,s),s!==u.cache&&Cu(n,[sn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xi(t){t.flags|=4}function gf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Cg())t.flags|=8192;else throw rr=ml,Lu}else t.flags&=-16777217}function ng(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_0(n))if(Cg())t.flags|=8192;else throw rr=ml,Lu}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,Jr|=n)}function fo(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ox(t,n,a){var s=n.pendingProps;switch(Eu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Fi(sn),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Fr(n)?Xi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Xi(n),f!==null?(je(n),ng(n,f)):(je(n),gf(n,u,null,s,a))):f?f!==t.memoizedState?(Xi(n),je(n),ng(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xi(n),je(n),gf(n,u,t,s,a)),null;case 27:if(ae(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}t=gt.current,Fr(n)?zp(n):(t=c0(u,s,a),n.stateNode=t,Xi(n))}return je(n),null;case 5:if(ae(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return je(n),null}if(f=gt.current,Fr(n))zp(n);else{var _=Yl($.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[rn]=n,f[vn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xi(n)}}return je(n),gf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,Fr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Jg(t.nodeValue,a)),t||ha(n,!0)}else t=Yl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Fr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Fr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),je(n),null);case 4:return Ut(),t===null&&If(n.stateNode.containerInfo),je(n),null;case 10:return Fi(n.type),je(n),null;case 19:if(V(nn),s=n.memoizedState,s===null)return je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)fo(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,fo(s,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Dp(a,t),a=a.sibling;return st(nn,nn.current&1|2),Ee&&Bi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Bl&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304)}else{if(!u)if(t=xl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ee)return je(n),null}else 2*E()-s.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=nn.current,st(nn,u?a&1|2:a&1),Ee&&Bi(n,s.treeForkCount),t):(je(n),null);case 22:case 23:return Yn(n),Iu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&V(ir),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Fi(sn),je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function zx(t,n){switch(Eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Fi(sn),Ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ae(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Yn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(nn),null;case 4:return Ut(),null;case 10:return Fi(n.type),null;case 22:case 23:return Yn(n),Iu(),t!==null&&V(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Fi(sn),null;case 25:return null;default:return null}}function ig(t,n){switch(Eu(n),n.tag){case 3:Fi(sn),Ut();break;case 26:case 27:case 5:ae(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:V(nn);break;case 10:Fi(n.type);break;case 22:case 23:Yn(n),Iu(),t!==null&&V(ir);break;case 24:Fi(sn)}}function ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(T){Be(n,n.return,T)}}function xa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var I=a,nt=T;try{nt()}catch(ht){Be(u,I,ht)}}}s=s.next}while(s!==f)}}catch(ht){Be(n,n.return,ht)}}function ag(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{jp(n,a)}catch(s){Be(t,t.return,s)}}}function rg(t,n,a){a.props=lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Be(t,n,u)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function sg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function _f(t,n,a){try{var s=t.stateNode;iS(s,t.type,a,n),s[vn]=n}catch(u){Be(t,t.return,u)}}function og(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function vf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Oi));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(xf(t,n,a),t=t.sibling;t!==null;)xf(t,n,a),t=t.sibling}function Nl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,s,a),n[rn]=t,n[vn]=a}catch(f){Be(t,t.return,f)}}var ki=!1,cn=!1,Sf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Px(t,n){if(t=t.containerInfo,Gf=tc,t=yp(t),hu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,T=-1,I=-1,nt=0,ht=0,_t=t,at=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(T=_+u),_t!==f||s!==0&&_t.nodeType!==3||(I=_+s),_t.nodeType===3&&(_+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===t)break e;if(at===a&&++nt===u&&(T=_),at===f&&++ht===s&&(I=_),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:t,selectionRange:a},tc=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=lr(a.type,u);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ee){Be(a,a.return,ee)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Wf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function ug(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&ho(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Be(a,a.return,_)}else{var u=lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}s&64&&ag(a),s&512&&po(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jp(t,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&s&4&&lg(a);case 26:case 5:qi(t,a),n===null&&s&4&&sg(a),s&512&&po(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&dg(t,a);break;case 13:qi(t,a),s&4&&pg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Wx.bind(null,a),fS(t,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||cn,u=ki;var f=cn;ki=s,(cn=n)&&!f?Yi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),ki=u,cn=f}break;case 30:break;default:qi(t,a)}}function fg(t){var n=t.alternate;n!==null&&(t.alternate=null,fg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,Pn=!1;function Wi(t,n,a){for(a=a.child;a!==null;)hg(t,n,a),a=a.sibling}function hg(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:cn||Ai(a,n),Wi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ai(a,n);var s=Ze,u=Pn;Aa(a.type)&&(Ze=a.stateNode,Pn=!1),Wi(t,n,a),Eo(a.stateNode),Ze=s,Pn=u;break;case 5:cn||Ai(a,n);case 6:if(s=Ze,u=Pn,Ze=null,Wi(t,n,a),Ze=s,Pn=u,Ze!==null)if(Pn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ze!==null&&(Pn?(t=Ze,a0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ss(t)):a0(Ze,a.stateNode));break;case 4:s=Ze,u=Pn,Ze=a.stateNode.containerInfo,Pn=!0,Wi(t,n,a),Ze=s,Pn=u;break;case 0:case 11:case 14:case 15:xa(2,a,n),cn||xa(4,a,n),Wi(t,n,a);break;case 1:cn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&rg(a,n,s)),Wi(t,n,a);break;case 21:Wi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Wi(t,n,a),cn=s;break;default:Wi(t,n,a)}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ss(t)}catch(a){Be(n,n.return,a)}}}function pg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ss(t)}catch(a){Be(n,n.return,a)}}function Bx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new cg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new cg),n;default:throw Error(r(435,t.tag))}}function Ol(t,n){var a=Bx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=qx.bind(null,t,s);s.then(u,u)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Aa(T.type)){Ze=T.stateNode,Pn=!1;break t}break;case 5:Ze=T.stateNode,Pn=!1;break t;case 3:case 4:Ze=T.stateNode.containerInfo,Pn=!0;break t}T=T.return}if(Ze===null)throw Error(r(160));hg(f,_,u),Ze=null,Pn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mg(n,t),n=n.sibling}var di=null;function mg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),s&4&&(xa(3,t,t.return),ho(3,t),xa(5,t,t.return));break;case 1:Bn(n,t),In(t),s&512&&(cn||a===null||Ai(a,a.return)),s&64&&ki&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=di;if(Bn(n,t),In(t),s&512&&(cn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,s,a),f[rn]=t,St(f),s=f;break t;case"link":var _=m0("link","href",u).get(s+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;case"meta":if(_=m0("meta","content",u).get(s+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,St(f),s=f}t.stateNode=s}else g0(u,t.type,t.stateNode);else t.stateNode=p0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?g0(u,t.type,t.stateNode):p0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&_f(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),s&512&&(cn||a===null||Ai(a,a.return)),a!==null&&s&4&&_f(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),s&512&&(cn||a===null||Ai(a,a.return)),t.flags&32){u=t.stateNode;try{wr(u,"")}catch(Gt){Be(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,_f(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Sf=!0);break;case 6:if(Bn(n,t),In(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Be(t,t.return,Gt)}}break;case 3:if(Kl=null,u=di,di=jl(n.containerInfo),Bn(n,t),di=u,In(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(Gt){Be(t,t.return,Gt)}Sf&&(Sf=!1,gg(t));break;case 4:s=di,di=jl(t.stateNode.containerInfo),Bn(n,t),In(t),di=s;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,nt=ki,ht=cn;if(ki=nt||u,cn=ht||I,Bn(n,t),cn=ht,ki=nt,In(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ki||cn||cr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var _t=I.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Gt){Be(I,I.return,Gt)}}}else if(n.tag===18){if(a===null){I=n;try{var ct=I.stateNode;u?r0(ct,!0):r0(I.stateNode,!1)}catch(Gt){Be(I,I.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ol(t,a))));break;case 19:Bn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ol(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(og(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=vf(t);Nl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(wr(_,""),a.flags&=-33);var T=vf(t);Nl(t,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,nt=vf(t);xf(t,nt,I);break;default:throw Error(r(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(t,n.alternate,n),n=n.sibling}function cr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),cr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rg(n,n.return,a),cr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ai(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}t=t.sibling}}function Yi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(u,f,a),ho(4,f);break;case 1:if(Yi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Yp(I[u],T)}catch(nt){Be(s,s.return,nt)}}a&&_&64&&ag(f),po(f,f.return);break;case 27:lg(f);case 26:case 5:Yi(u,f,a),a&&s===null&&_&4&&sg(f),po(f,f.return);break;case 12:Yi(u,f,a);break;case 31:Yi(u,f,a),a&&_&4&&dg(u,f);break;case 13:Yi(u,f,a),a&&_&4&&pg(u,f);break;case 22:f.memoizedState===null&&Yi(u,f,a),po(f,f.return);break;case 30:break;default:Yi(u,f,a)}n=n.sibling}}function yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$s(a))}function Mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function pi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(t,n,a,s),n=n.sibling}function _g(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:pi(t,n,a,s),u&2048&&ho(9,n);break;case 1:pi(t,n,a,s);break;case 3:pi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(u&2048){pi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else pi(t,n,a,s);break;case 31:pi(t,n,a,s);break;case 13:pi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?pi(t,n,a,s):mo(t,n):f._visibility&2?pi(t,n,a,s):(f._visibility|=2,Zr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&yf(_,n);break;case 24:pi(t,n,a,s),u&2048&&Mf(n.alternate,n);break;default:pi(t,n,a,s)}}function Zr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,I=s,nt=_.flags;switch(_.tag){case 0:case 11:case 15:Zr(f,_,T,I,u),ho(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?Zr(f,_,T,I,u):mo(f,_):(ht._visibility|=2,Zr(f,_,T,I,u)),u&&nt&2048&&yf(_.alternate,_);break;case 24:Zr(f,_,T,I,u),u&&nt&2048&&Mf(_.alternate,_);break;default:Zr(f,_,T,I,u)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:mo(a,s),u&2048&&yf(s.alternate,s);break;case 24:mo(a,s),u&2048&&Mf(s.alternate,s);break;default:mo(a,s)}n=n.sibling}}var go=8192;function Kr(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)vg(t,n,a),t=t.sibling}function vg(t,n,a){switch(t.tag){case 26:Kr(t,n,a),t.flags&go&&t.memoizedState!==null&&ES(a,di,t.memoizedState,t.memoizedProps);break;case 5:Kr(t,n,a);break;case 3:case 4:var s=di;di=jl(t.stateNode.containerInfo),Kr(t,n,a),di=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,Kr(t,n,a),go=s):Kr(t,n,a));break;default:Kr(t,n,a)}}function xg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,yg(s,t)}xg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sg(t),t=t.sibling}function Sg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&xa(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):_o(t);break;default:_o(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,yg(s,t)}xg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function yg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$s(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else t:for(a=t;gn!==null;){s=gn;var u=s.sibling,f=s.return;if(fg(s),s===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Ix={getCacheForType:function(t){var n=yn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(sn).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,We=null,ve=null,ye=0,Pe=0,jn=null,Sa=!1,Qr=!1,Ef=!1,ji=0,tn=0,ya=0,ur=0,Tf=0,Zn=0,Jr=0,vo=null,Fn=null,bf=!1,Pl=0,Mg=0,Bl=1/0,Il=null,Ma=null,hn=0,Ea=null,$r=null,Zi=0,Af=0,Rf=null,Eg=null,xo=0,Cf=null;function Kn(){return(Ue&2)!==0&&ye!==0?ye&-ye:O.T!==null?Of():qa()}function Tg(){if(Zn===0)if((ye&536870912)===0||Ee){var t=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),Zn=t}else Zn=536870912;return t=qn.current,t!==null&&(t.flags|=32),Zn}function Hn(t,n,a){(t===We&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(ts(t,0),Ta(t,ye,Zn,!1)),wn(t,a),((Ue&2)===0||t!==We)&&(t===We&&((Ue&2)===0&&(ur|=a),tn===4&&Ta(t,ye,Zn,!1)),Ri(t))}function bg(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ht(t,n),u=s?Vx(t,n):Df(t,n,!0),f=s;do{if(u===0){Qr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Hx(a)){u=Df(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;u=vo;var I=T.current.memoizedState.isDehydrated;if(I&&(ts(T,_).flags|=256),_=Df(T,_,!1),_!==2){if(Ef&&!I){T.errorRecoveryDisabledLanes|=f,ur|=f,u=4;break t}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ts(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,Zn,!Sa);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pl+300-E(),10<u)){if(Ta(s,n,Zn,!Sa),vt(s,0,!0)!==0)break t;Zi=n,s.timeoutHandle=n0(Ag.bind(null,s,a,Fn,Il,bf,n,Zn,ur,Jr,Sa,f,"Throttled",-0,0),u);break t}Ag(s,a,Fn,Il,bf,n,Zn,ur,Jr,Sa,f,null,-0,0)}}break}while(!0);Ri(t)}function Ag(t,n,a,s,u,f,_,T,I,nt,ht,_t,at,ct){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},vg(n,f,_t);var Gt=(f&62914560)===f?Pl-E():(f&4194048)===f?Mg-E():0;if(Gt=TS(_t,Gt),Gt!==null){Zi=f,t.cancelPendingCommit=Gt(Og.bind(null,t,n,f,a,s,u,_,T,I,ht,_t,null,at,ct)),Ta(t,f,_,!nt);return}}Og(t,n,f,a,s,u,_,T,I)}function Hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~Tf,n&=~ur,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-It(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&Fs(t,a,n)}function Fl(){return(Ue&6)===0?(So(0),!1):!0}function wf(){if(ve!==null){if(Pe===0)var t=ve.return;else t=ve,Ii=er=null,ku(t),kr=null,eo=0,t=ve;for(;t!==null;)ig(t.alternate,t),t=t.return;ve=null}}function ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,sS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Zi=0,wf(),We=t,ve=a=Pi(t.current,null),ye=n,Pe=0,jn=null,Sa=!1,Qr=Ht(t,n),Ef=!1,Jr=Zn=Tf=ur=ya=tn=0,Fn=vo=null,bf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-It(s),f=1<<u;n|=t[u],s&=~f}return ji=n,sl(),a}function Rg(t,n){ce=null,O.H=co,n===Xr||n===pl?(n=Xp(),Pe=3):n===Lu?(n=Xp(),Pe=4):Pe=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,ve===null&&(tn=1,Cl(t,ei(n,t.current)))}function Cg(){var t=qn.current;return t===null?!0:(ye&4194048)===ye?ri===null:(ye&62914560)===ye||(ye&536870912)!==0?t===ri:!1}function wg(){var t=O.H;return O.H=co,t===null?co:t}function Dg(){var t=O.A;return O.A=Ix,t}function Hl(){tn=4,Sa||(ye&4194048)!==ye&&qn.current!==null||(Qr=!0),(ya&134217727)===0&&(ur&134217727)===0||We===null||Ta(We,ye,Zn,!1)}function Df(t,n,a){var s=Ue;Ue|=2;var u=wg(),f=Dg();(We!==t||ye!==n)&&(Il=null,ts(t,n)),n=!1;var _=tn;t:do try{if(Pe!==0&&ve!==null){var T=ve,I=jn;switch(Pe){case 8:wf(),_=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var nt=Pe;if(Pe=0,jn=null,es(t,T,I,nt),a&&Qr){_=0;break t}break;default:nt=Pe,Pe=0,jn=null,es(t,T,I,nt)}}Gx(),_=tn;break}catch(ht){Rg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ii=er=null,Ue=s,O.H=u,O.A=f,ve===null&&(We=null,ye=0,sl()),_}function Gx(){for(;ve!==null;)Ug(ve)}function Vx(t,n){var a=Ue;Ue|=2;var s=wg(),u=Dg();We!==t||ye!==n?(Il=null,Bl=E()+500,ts(t,n)):Qr=Ht(t,n);t:do try{if(Pe!==0&&ve!==null){n=ve;var f=jn;e:switch(Pe){case 1:Pe=0,jn=null,es(t,n,f,1);break;case 2:case 9:if(Gp(f)){Pe=0,jn=null,Lg(n);break}n=function(){Pe!==2&&Pe!==9||We!==t||(Pe=7),Ri(t)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Gp(f)?(Pe=0,jn=null,Lg(n)):(Pe=0,jn=null,es(t,n,f,7));break;case 5:var _=null;switch(ve.tag){case 26:_=ve.memoizedState;case 5:case 27:var T=ve;if(_?_0(_):T.stateNode.complete){Pe=0,jn=null;var I=T.sibling;if(I!==null)ve=I;else{var nt=T.return;nt!==null?(ve=nt,Gl(nt)):ve=null}break e}}Pe=0,jn=null,es(t,n,f,5);break;case 6:Pe=0,jn=null,es(t,n,f,6);break;case 8:wf(),tn=6;break t;default:throw Error(r(462))}}Xx();break}catch(ht){Rg(t,ht)}while(!0);return Ii=er=null,O.H=s,O.A=u,Ue=a,ve!==null?0:(We=null,ye=0,sl(),tn)}function Xx(){for(;ve!==null&&!Qe();)Ug(ve)}function Ug(t){var n=eg(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?Gl(t):ve=n}function Lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:ku(n);default:ig(a,n),n=ve=Dp(n,ji),n=eg(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?Gl(t):ve=n}function es(t,n,a,s){Ii=er=null,ku(n),kr=null,eo=0;var u=n.return;try{if(Ux(t,u,n,a,ye)){tn=1,Cl(t,ei(a,t.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;tn=1,Cl(t,ei(a,t.current)),ve=null;return}n.flags&32768?(Ee||s===1?t=!0:Qr||(ye&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ng(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){Ng(n,Sa);return}t=n.return;var a=Ox(n.alternate,n,ji);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);tn===0&&(tn=5)}function Ng(t,n){do{var a=zx(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);tn=6,ve=null}function Og(t,n,a,s,u,f,_,T,I){t.cancelPendingCommit=null;do Vl();while(hn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=_u,$n(t,a,f,_,T,I),t===We&&(ve=We=null,ye=0),$r=n,Ea=t,Zi=a,Af=f,Rf=u,Eg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Yx(ft,function(){return Fg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=k.p,k.p=2,_=Ue,Ue|=4;try{Px(t,n,a)}finally{Ue=_,k.p=u,O.T=s}}hn=1,zg(),Pg(),Bg()}}function zg(){if(hn===1){hn=0;var t=Ea,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=k.p;k.p=2;var u=Ue;Ue|=4;try{mg(n,t);var f=Vf,_=yp(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&Sp(T.ownerDocument.documentElement,T)){if(I!==null&&hu(T)){var nt=I.start,ht=I.end;if(ht===void 0&&(ht=nt),"selectionStart"in T)T.selectionStart=nt,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Gt=T.textContent.length,ee=Math.min(I.start,Gt),He=I.end===void 0?ee:Math.min(I.end,Gt);!ct.extend&&ee>He&&(_=He,He=ee,ee=_);var K=xp(T,ee),X=xp(T,He);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),ee>He?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(_t=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var pt=_t[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}tc=!!Gf,Vf=Gf=null}finally{Ue=u,k.p=s,O.T=a}}t.current=n,hn=2}}function Pg(){if(hn===2){hn=0;var t=Ea,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=k.p;k.p=2;var u=Ue;Ue|=4;try{ug(t,n.alternate,n)}finally{Ue=u,k.p=s,O.T=a}}hn=3}}function Bg(){if(hn===4||hn===3){hn=0,z();var t=Ea,n=$r,a=Zi,s=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,$r=Ea=null,Ig(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ma=null),Rr(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=k.p,k.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var T=s[_];f(T.value,{componentStack:T.stack})}}finally{O.T=n,k.p=u}}(Zi&3)!==0&&Vl(),Ri(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Cf?xo++:(xo=0,Cf=t):xo=0,So(0)}}function Ig(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function Vl(){return zg(),Pg(),Bg(),Fg()}function Fg(){if(hn!==5)return!1;var t=Ea,n=Af;Af=0;var a=Rr(Zi),s=O.T,u=k.p;try{k.p=32>a?32:a,O.T=null,a=Rf,Rf=null;var f=Ea,_=Zi;if(hn=0,$r=Ea=null,Zi=0,(Ue&6)!==0)throw Error(r(331));var T=Ue;if(Ue|=4,Sg(f.current),_g(f,f.current,_,a),Ue=T,So(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{k.p=u,O.T=s,Ig(t,n)}}function Hg(t,n,a){n=ei(a,n),n=sf(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(wn(t,2),Ri(t))}function Be(t,n,a){if(t.tag===3)Hg(t,t,a);else for(;n!==null;){if(n.tag===3){Hg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=ei(a,t),a=Gm(2),s=ga(n,a,2),s!==null&&(Vm(a,s,n,t),wn(s,2),Ri(s));break}}n=n.return}}function Uf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Fx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Ef=!0,u.add(a),t=kx.bind(null,t,n,a),n.then(t,t))}function kx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(ye&a)===a&&(tn===4||tn===3&&(ye&62914560)===ye&&300>E()-Pl?(Ue&2)===0&&ts(t,0):Tf|=a,Jr===ye&&(Jr=0)),Ri(t)}function Gg(t,n){n===0&&(n=ze()),t=Ja(t,n),t!==null&&(wn(t,n),Ri(t))}function Wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Gg(t,a)}function qx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Gg(t,a)}function Yx(t,n){return se(t,n)}var Xl=null,ns=null,Lf=!1,kl=!1,Nf=!1,ba=0;function Ri(t){t!==ns&&t.next===null&&(ns===null?Xl=ns=t:ns=ns.next=t),kl=!0,Lf||(Lf=!0,Zx())}function So(t,n){if(!Nf&&kl){Nf=!0;do for(var a=!1,s=Xl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-It(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Wg(s,f))}else f=ye,f=vt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ht(s,f)||(a=!0,Wg(s,f));s=s.next}while(a);Nf=!1}}function jx(){Vg()}function Vg(){kl=Lf=!1;var t=0;ba!==0&&rS()&&(t=ba);for(var n=E(),a=null,s=Xl;s!==null;){var u=s.next,f=Xg(s,n);f===0?(s.next=null,a===null?Xl=u:a.next=u,u===null&&(ns=a)):(a=s,(t!==0||(f&3)!==0)&&(kl=!0)),s=u}hn!==0&&hn!==5||So(t),ba!==0&&(ba=0)}function Xg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-It(f),T=1<<_,I=u[_];I===-1?((T&a)===0||(T&s)!==0)&&(u[_]=re(T,n)):I<=n&&(t.expiredLanes|=T),f&=~T}if(n=We,a=ye,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Je(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ht(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Je(s),Rr(a)){case 2:case 8:a=Mt;break;case 32:a=ft;break;case 268435456:a=Ct;break;default:a=ft}return s=kg.bind(null,t),a=se(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Je(s),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var s=ye;return s=vt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bg(t,s,n),Xg(t,E()),t.callbackNode!=null&&t.callbackNode===a?kg.bind(null,t):null)}function Wg(t,n){if(Vl())return null;bg(t,n,!0)}function Zx(){oS(function(){(Ue&6)!==0?se(dt,jx):Vg()})}function Of(){if(ba===0){var t=Gr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),ba=t}return ba}function qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jo(""+t)}function Yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Kx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=qg((u[vn]||null).action),_=s.submitter;_&&(n=(n=_[vn]||null)?qg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new nl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ba!==0){var I=_?Yg(u,_):new FormData(u);$u(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=_?Yg(u,_):new FormData(u),$u(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var zf=0;zf<gu.length;zf++){var Pf=gu[zf],Qx=Pf.toLowerCase(),Jx=Pf[0].toUpperCase()+Pf.slice(1);hi(Qx,"on"+Jx)}hi(Tp,"onAnimationEnd"),hi(bp,"onAnimationIteration"),hi(Ap,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(px,"onTransitionRun"),hi(mx,"onTransitionStart"),hi(gx,"onTransitionCancel"),hi(Rp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$x=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],I=T.instance,nt=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(ht){rl(ht)}u.currentTarget=null,f=I}else for(_=0;_<s.length;_++){if(T=s[_],I=T.instance,nt=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(ht){rl(ht)}u.currentTarget=null,f=I}}}}function xe(t,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var s=t+"__bubble";a.has(s)||(Zg(n,t,2,!1),a.add(s))}function Bf(t,n,a){var s=0;n&&(s|=4),Zg(a,t,s,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function If(t){if(!t[Wl]){t[Wl]=!0,Ot.forEach(function(a){a!=="selectionchange"&&($x.has(a)||Bf(a,!1,t),Bf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Bf("selectionchange",!1,n))}}function Zg(t,n,a,s){switch(T0(n)){case 2:var u=RS;break;case 8:u=CS;break;default:u=$f}a=u.bind(null,n,a,t),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Ff(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=Z(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=f=_;continue t}T=T.parentNode}}s=s.return}tp(function(){var nt=f,ht=eu(a),_t=[];t:{var at=Cp.get(t);if(at!==void 0){var ct=nl,Gt=t;switch(t){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":ct=qv;break;case"focusin":Gt="focus",ct=ou;break;case"focusout":Gt="blur",ct=ou;break;case"beforeblur":case"afterblur":ct=ou;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Zv;break;case Tp:case bp:case Ap:ct=Bv;break;case Rp:ct=Qv;break;case"scroll":case"scrollend":ct=Lv;break;case"wheel":ct=$v;break;case"copy":case"cut":case"paste":ct=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=rp;break;case"toggle":case"beforetoggle":ct=ex}var ee=(n&4)!==0,He=!ee&&(t==="scroll"||t==="scrollend"),K=ee?at!==null?at+"Capture":null:at;ee=[];for(var X=nt,et;X!==null;){var pt=X;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||K===null||(pt=Vs(X,K),pt!=null&&ee.push(Mo(X,pt,et))),He)break;X=X.return}0<ee.length&&(at=new ct(at,Gt,null,a,ht),_t.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",at&&a!==tu&&(Gt=a.relatedTarget||a.fromElement)&&(Z(Gt)||Gt[la]))break t;if((ct||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Gt=a.relatedTarget||a.toElement,ct=nt,Gt=Gt?Z(Gt):null,Gt!==null&&(He=c(Gt),ee=Gt.tag,Gt!==He||ee!==5&&ee!==27&&ee!==6)&&(Gt=null)):(ct=null,Gt=nt),ct!==Gt)){if(ee=ip,pt="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ee=rp,pt="onPointerLeave",K="onPointerEnter",X="pointer"),He=ct==null?at:ot(ct),et=Gt==null?at:ot(Gt),at=new ee(pt,X+"leave",ct,a,ht),at.target=He,at.relatedTarget=et,pt=null,Z(ht)===nt&&(ee=new ee(K,X+"enter",Gt,a,ht),ee.target=et,ee.relatedTarget=He,pt=ee),He=pt,ct&&Gt)e:{for(ee=tS,K=ct,X=Gt,et=0,pt=K;pt;pt=ee(pt))et++;pt=0;for(var $t=X;$t;$t=ee($t))pt++;for(;0<et-pt;)K=ee(K),et--;for(;0<pt-et;)X=ee(X),pt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){ee=K;break e}K=ee(K),X=ee(X)}ee=null}else ee=null;ct!==null&&Kg(_t,at,ct,ee,!1),Gt!==null&&He!==null&&Kg(_t,He,Gt,ee,!0)}}t:{if(at=nt?ot(nt):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Re=dp;else if(fp(at))if(pp)Re=fx;else{Re=cx;var qt=lx}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&$c(nt.elementType)&&(Re=dp):Re=ux;if(Re&&(Re=Re(t,nt))){hp(_t,Re,a,ht);break t}qt&&qt(t,at,nt),t==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&fn(at,"number",at.value)}switch(qt=nt?ot(nt):window,t){case"focusin":(fp(qt)||qt.contentEditable==="true")&&(Nr=qt,du=nt,Ks=null);break;case"focusout":Ks=du=Nr=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Mp(_t,a,ht);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Mp(_t,a,ht)}var ue;if(cu)t:{switch(t){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Lr?cp(t,a)&&(Me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(sp&&a.locale!=="ko"&&(Lr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Lr&&(ue=ep()):(ca=ht,au="value"in ca?ca.value:ca.textContent,Lr=!0)),qt=ql(nt,Me),0<qt.length&&(Me=new ap(Me,t,null,a,ht),_t.push({event:Me,listeners:qt}),ue?Me.data=ue:(ue=up(a),ue!==null&&(Me.data=ue)))),(ue=ix?ax(t,a):rx(t,a))&&(Me=ql(nt,"onBeforeInput"),0<Me.length&&(qt=new ap("onBeforeInput","beforeinput",null,a,ht),_t.push({event:qt,listeners:Me}),qt.data=ue)),Kx(_t,t,nt,a,ht)}jg(_t,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(t,a),u!=null&&s.unshift(Mo(t,u,f)),u=Vs(t,n),u!=null&&s.push(Mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function tS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Kg(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,I=T.alternate,nt=T.stateNode;if(T=T.tag,I!==null&&I===s)break;T!==5&&T!==26&&T!==27||nt===null||(I=nt,u?(nt=Vs(a,f),nt!=null&&_.unshift(Mo(a,nt,I))):u||(nt=Vs(a,f),nt!=null&&_.push(Mo(a,nt,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var eS=/\r\n?/g,nS=/\u0000|\uFFFD/g;function Qg(t){return(typeof t=="string"?t:""+t).replace(eS,`
`).replace(nS,"")}function Jg(t,n){return n=Qg(n),Qg(t)===n}function Fe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||wr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&wr(t,""+s);break;case"className":Oe(t,"class",s);break;case"tabIndex":Oe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(t,a,s);break;case"style":Jd(t,s,f);break;case"data":if(n!=="object"){Oe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Jo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",u.name,u,null),Fe(t,n,"formEncType",u.formEncType,u,null),Fe(t,n,"formMethod",u.formMethod,u,null),Fe(t,n,"formTarget",u.formTarget,u,null)):(Fe(t,n,"encType",u.encType,u,null),Fe(t,n,"method",u.method,u,null),Fe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Jo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Jo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),ke(t,"popover",s);break;case"xlinkActuate":_e(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":_e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":_e(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":_e(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":_e(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":_e(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":_e(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":_e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":_e(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ke(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dv.get(a)||a,ke(t,a,s))}}function Hf(t,n,a,s,u,f){switch(a){case"style":Jd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?wr(t,s):(typeof s=="number"||typeof s=="bigint")&&wr(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Oi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ke(t,a,s)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,f,_,a,null)}}u&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=f=_=u=null,I=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":_=ht;break;case"checked":I=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Fe(t,n,s,ht,a,null)}}Dn(t,f,T,I,nt,_,u,!1);return;case"select":xe("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Fe(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!s,n!=null?en(t,!!s,n,!1):a!=null&&en(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(t,n,_,T,a,null)}Ei(t,s,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Fe(t,n,I,s,a,null));return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<yo.length;s++)xe(yo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,nt,s,a,null)}return;default:if($c(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Hf(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Fe(t,n,T,s,a,null))}function iS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,I=null,nt=null,ht=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(ct)||Fe(t,n,ct,null,s,_t)}}for(var at in s){var ct=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":ht=ct;break;case"value":_=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Fe(t,n,at,ct,s,_t)}}Tn(t,_,T,I,nt,ht,f,u);return;case"select":ct=_=T=at=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ct=I;default:s.hasOwnProperty(f)||Fe(t,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==I&&Fe(t,n,u,f,s,I)}n=T,a=_,s=ct,at!=null?en(t,!!a,at,!1):!!s!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(t,n,T,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Fe(t,n,_,u,s,f)}Cr(t,at,ct);return;case"option":for(var Gt in a)at=a[Gt],a.hasOwnProperty(Gt)&&at!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:Fe(t,n,Gt,null,s,at));for(I in s)at=s[I],ct=a[I],s.hasOwnProperty(I)&&at!==ct&&(at!=null||ct!=null)&&(I==="selected"?t.selected=at&&typeof at!="function"&&typeof at!="symbol":Fe(t,n,I,at,s,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!s.hasOwnProperty(ee)&&Fe(t,n,ee,null,s,at);for(nt in s)if(at=s[nt],ct=a[nt],s.hasOwnProperty(nt)&&at!==ct&&(at!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Fe(t,n,nt,at,s,ct)}return;default:if($c(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!s.hasOwnProperty(He)&&Hf(t,n,He,void 0,s,at);for(ht in s)at=s[ht],ct=a[ht],!s.hasOwnProperty(ht)||at===ct||at===void 0&&ct===void 0||Hf(t,n,ht,at,s,ct);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!s.hasOwnProperty(K)&&Fe(t,n,K,null,s,at);for(_t in s)at=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||at===ct||at==null&&ct==null||Fe(t,n,_t,at,s,ct)}function $g(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function aS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&$g(_)){for(_=0,T=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],nt=I.startTime;if(nt>T)break;var ht=I.transferSize,_t=I.initiatorType;ht&&$g(_t)&&(I=I.responseEnd,_+=ht*(I<T?1:(T-nt)/(I-nt)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gf=null,Vf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function t0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function rS(){var t=window.event;return t&&t.type==="popstate"?t===kf?!1:(kf=t,!0):(kf=null,!1)}var n0=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(lS)}:n0;function lS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function a0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ss(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[Ya]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(t.ownerDocument.body);a=u}while(a);ss(n)}function r0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Wf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ya])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function uS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function s0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function qf(t){return t.data==="$?"||t.data==="$~"}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function fS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var jf=null;function o0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function l0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function c0(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var oi=new Map,u0=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=k.d;k.d={f:hS,r:dS,D:pS,C:mS,L:gS,m:_S,X:xS,S:vS,M:SS};function hS(){var t=Ki.f(),n=Fl();return t||n}function dS(t){var n=rt(t);n!==null&&n.tag===5&&n.type==="form"?Rm(n):Ki.r(t)}var is=typeof document>"u"?null:document;function f0(t,n,a){var s=is;if(s&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u0.has(u)||(u0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),En(n,"link",t),St(n),s.head.appendChild(n)))}}function pS(t){Ki.D(t),f0("dns-prefetch",t,null)}function mS(t,n){Ki.C(t,n),f0("preconnect",t,n)}function gS(t,n,a){Ki.L(t,n,a);var s=is;if(s&&t&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Se(a.imageSizes)+'"]')):u+='[href="'+Se(t)+'"]';var f=u;switch(n){case"style":f=as(t);break;case"script":f=rs(t)}oi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(bo(f))||(n=s.createElement("link"),En(n,"link",t),St(n),s.head.appendChild(n)))}}function _S(t,n){Ki.m(t,n);var a=is;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(s)+'"][href="'+Se(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rs(t)}if(!oi.has(f)&&(t=v({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}s=a.createElement("link"),En(s,"link",t),St(s),a.head.appendChild(s)}}}function vS(t,n,a){Ki.S(t,n,a);var s=is;if(s&&t){var u=Q(s).hoistableStyles,f=as(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(To(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Zf(t,a);var I=_=s.createElement("link");St(I),En(I,"link",t),I._p=new Promise(function(nt,ht){I.onload=nt,I.onerror=ht}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function xS(t,n){Ki.X(t,n);var a=is;if(a&&t){var s=Q(a).hoistableScripts,u=rs(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0},n),(n=oi.get(u))&&Kf(t,n),f=a.createElement("script"),St(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function SS(t,n){Ki.M(t,n);var a=is;if(a&&t){var s=Q(a).hoistableScripts,u=rs(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=oi.get(u))&&Kf(t,n),f=a.createElement("script"),St(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function h0(t,n,a,s){var u=(u=$.current)?jl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=Q(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=as(a.href);var f=Q(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(To(t)))&&!f._p&&(_.instance=f,_.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||yS(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=Q(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function as(t){return'href="'+Se(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function d0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function yS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),St(n),t.head.appendChild(n))}function rs(t){return'[src="'+Se(t)+'"]'}function bo(t){return"script[async]"+t}function p0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Se(a.href)+'"]');if(s)return n.instance=s,St(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),St(s),En(s,"style",u),Zl(s,a.precedence,t),n.instance=s;case"stylesheet":u=as(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;s=d0(a),(u=oi.get(u))&&Zf(s,u),f=(t.ownerDocument||t).createElement("link"),St(f);var _=f;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),En(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=rs(a.src),(u=t.querySelector(bo(f)))?(n.instance=u,St(u),u):(s=a,(u=oi.get(f))&&(s=v({},a),Kf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),St(u),En(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,t));return n.instance}function Zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function m0(t,n,a){if(Kl===null){var s=new Map,u=Kl=new Map;u.set(a,s)}else u=Kl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function g0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function MS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ES(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=as(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,s=d0(s),(u=oi.get(u))&&Zf(s,u),f=f.createElement("link"),St(f);var _=f;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),En(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function TS(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Qf===0&&(Qf=62500*aS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(bS,t),Jl=null,Ql.call(t))}function bS(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var s=a.get(null);else{a=new Map,Jl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Ql.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function AS(t,n,a,s,u,f,_,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function v0(t,n,a,s,u,f,_,T,I,nt,ht,_t){return t=new AS(t,n,a,_,I,nt,ht,_t,T),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),t.current=f,f.stateNode=t,n=wu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Nu(f),t}function x0(t){return t?(t=Pr,t):Pr}function S0(t,n,a,s,u,f){u=x0(u),s.context===null?s.context=u:s.pendingContext=u,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(t,s,n),a!==null&&(Hn(a,t,n),io(a,t,n))}function y0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){y0(t,n),(t=t.alternate)&&y0(t,n)}function M0(t){if(t.tag===13||t.tag===31){var n=Ja(t,67108864);n!==null&&Hn(n,t,67108864),Jf(t,67108864)}}function E0(t){if(t.tag===13||t.tag===31){var n=Kn();n=Ar(n);var a=Ja(t,n);a!==null&&Hn(a,t,n),Jf(t,n)}}var tc=!0;function RS(t,n,a,s){var u=O.T;O.T=null;var f=k.p;try{k.p=2,$f(t,n,a,s)}finally{k.p=f,O.T=u}}function CS(t,n,a,s){var u=O.T;O.T=null;var f=k.p;try{k.p=8,$f(t,n,a,s)}finally{k.p=f,O.T=u}}function $f(t,n,a,s){if(tc){var u=th(s);if(u===null)Ff(t,n,s,ec,a),b0(t,s);else if(DS(u,t,n,a,s))s.stopPropagation();else if(b0(t,s),n&4&&-1<wS.indexOf(t)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Et(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-It(_);T.entanglements[1]|=I,_&=~I}Ri(f),(Ue&6)===0&&(Bl=E()+500,So(0))}}break;case 31:case 13:T=Ja(f,2),T!==null&&Hn(T,f,2),Fl(),Jf(f,2)}if(f=th(s),f===null&&Ff(t,n,s,ec,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Ff(t,n,s,null,a)}}function th(t){return t=eu(t),eh(t)}var ec=null;function eh(t){if(ec=null,t=Z(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function T0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case dt:return 2;case Mt:return 8;case ft:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var nh=!1,Ra=null,Ca=null,wa=null,Ro=new Map,Co=new Map,Da=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b0(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&M0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function DS(t,n,a,s,u){switch(n){case"focusin":return Ra=wo(Ra,t,n,a,s,u),!0;case"dragenter":return Ca=wo(Ca,t,n,a,s,u),!0;case"mouseover":return wa=wo(wa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ro.set(f,wo(Ro.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,wo(Co.get(f)||null,t,n,a,s,u)),!0}return!1}function A0(t){var n=Z(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){E0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){E0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=th(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);tu=s,a.target.dispatchEvent(s),tu=null}else return n=rt(a),n!==null&&M0(n),t.blockedOn=a,!1;n.shift()}return!0}function R0(t,n,a){nc(t)&&a.delete(n)}function US(){nh=!1,Ra!==null&&nc(Ra)&&(Ra=null),Ca!==null&&nc(Ca)&&(Ca=null),wa!==null&&nc(wa)&&(wa=null),Ro.forEach(R0),Co.forEach(R0)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,nh||(nh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,US)))}var ac=null;function C0(t){ac!==t&&(ac=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(eh(s||a)===null)continue;break}var f=rt(a);f!==null&&(t.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ss(t){function n(I){return ic(I,t)}Ra!==null&&ic(Ra,t),Ca!==null&&ic(Ca,t),wa!==null&&ic(wa,t),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)A0(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[vn]||null;if(typeof f=="function")_||C0(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[vn]||null)T=_.formAction;else if(eh(u)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),C0(a)}}}function w0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ih(t){this._internalRoot=t}rc.prototype.render=ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Kn();S0(a,s,t,n,null,null)},rc.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S0(t.current,2,null,t,null,null),Fl(),n[la]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qa();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&A0(t)}};var D0=e.version;if(D0!=="19.2.0")throw Error(r(527,D0,"19.2.0"));k.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var LS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{bt=sc.inject(LS),wt=sc}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Bm,f=Im,_=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=v0(t,1,!1,null,null,a,s,null,u,f,_,w0),t[la]=n.current,If(t),new ih(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Bm,_=Im,T=Fm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=v0(t,1,!0,n,a??null,s,u,I,f,_,T,w0),n.context=x0(null),a=n.current,s=Kn(),s=Ar(s),u=ma(s),u.callback=null,ga(a,u,s),a=s,n.current.lanes=a,wn(n,a),Ri(n),t[la]=n.current,If(t),new rc(n)},Uo.version="19.2.0",Uo}var H0;function XS(){if(H0)return rh.exports;H0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rh.exports=VS(),rh.exports}var kS=XS(),Fa=zd();const Ha=OS(Fa);function WS(){return Lt.jsx("header",{style:{position:"fixed",top:18,left:20,zIndex:50},children:Lt.jsx("div",{children:Lt.jsx("h1",{style:{margin:0,fontSize:20,color:"#e6fbff",fontWeight:700},children:"Hi, I'm Adithya "})})})}var X_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},G0=Ha.createContext&&Ha.createContext(X_),qS=["attr","size","title"];function YS(o,e){if(o==null)return{};var i=jS(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function jS(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Ic(){return Ic=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Ic.apply(this,arguments)}function V0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Fc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(i),!0).forEach(function(r){ZS(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):V0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function ZS(o,e,i){return e=KS(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function KS(o){var e=QS(o,"string");return typeof e=="symbol"?e:e+""}function QS(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function k_(o){return o&&o.map((e,i)=>Ha.createElement(e.tag,Fc({key:i},e.attr),k_(e.child)))}function Pd(o){return e=>Ha.createElement(JS,Ic({attr:Fc({},o.attr)},e),k_(o.child))}function JS(o){var e=i=>{var{attr:r,size:l,title:c}=o,h=YS(o,qS),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Ha.createElement("svg",Ic({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Fc(Fc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Ha.createElement("title",null,c),o.children)};return G0!==void 0?Ha.createElement(G0.Consumer,null,i=>e(i)):e(X_)}function $S(o){return Pd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function ty(o){return Pd({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function ey(o){return Pd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}function ny(){return Lt.jsxs("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:60,display:"flex",gap:12,pointerEvents:"auto"},children:[Lt.jsx("a",{href:"https://github.com/AdithyaDevi3",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Lt.jsx($S,{size:26})}),Lt.jsx("a",{href:"https://www.linkedin.com/in/adithya-devi",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Lt.jsx(ty,{size:26})}),Lt.jsx("a",{href:"mailto:adithya.r.devi02@gmail.com",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Lt.jsx(ey,{size:26})})]})}function iy({route:o,setRoute:e}){const i=o==="about",r=i?"Home":"About";return Lt.jsx("div",{style:{position:"fixed",top:16,right:16,zIndex:50,pointerEvents:"none"},children:Lt.jsx("div",{style:{pointerEvents:"auto",display:"flex",gap:8},children:Lt.jsx("button",{onClick:()=>e(i?"home":"about"),style:{padding:"8px 12px",borderRadius:4,fontWeight:600,color:"#c11919ff",border:"1px solid rgba(102, 232, 255, 0.15)",cursor:"pointer",transition:"all 0.2s"},children:r})})})}function ay(){return Lt.jsx("div",{className:"h-full flex items-center justify-center px-8",children:Lt.jsxs("div",{className:"max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20",children:[Lt.jsx("h2",{className:"text-5xl font-bold text-white mb-6 tracking-wider",children:"Get In Touch"}),Lt.jsxs("div",{className:"space-y-6 text-cyan-100 text-lg",children:[Lt.jsx("p",{className:"leading-relaxed",children:"I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!"}),Lt.jsxs("div",{className:"space-y-4 mt-8",children:[Lt.jsx("a",{href:"mailto:adithya.r@example.com",className:"block text-cyan-300 hover:text-cyan-100 transition-colors text-xl",children:"✉️ adithya.r@example.com"}),Lt.jsx("p",{className:"text-cyan-300 text-xl",children:"📍 Based in Your Location"})]})]})]})})}function ry(){return Lt.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",paddingTop:"20px",paddingBottom:"100px"},children:Lt.jsxs("div",{style:{maxWidth:"900px",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(8px)",borderRadius:16,padding:"40px"},children:[Lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32},children:[Lt.jsx("h2",{style:{fontSize:40,fontWeight:700,color:"#ffffff",margin:0},children:"About"}),Lt.jsx("a",{href:"public/Adithya_Devi_Resume.pdf",target:"_blank",rel:"noopener noreferrer",style:{padding:"10px 16px",background:"rgba(7, 13, 14, 0.2)",color:"#e6fbff",borderRadius:4,textDecoration:"none",fontWeight:600,fontSize:14,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:o=>{o.target.style.background="rgba(102, 232, 255, 0.3)",o.target.style.borderColor="rgba(102, 232, 255, 0.7)"},onMouseLeave:o=>{o.target.style.background="rgba(0, 2, 2, 0.2)",o.target.style.borderColor="rgba(0, 0, 0, 0.4)"},children:"CV / Resume"})]}),Lt.jsxs("div",{style:{marginBottom:40},children:[Lt.jsx("h3",{style:{fontSize:24,fontWeight:700,color:"#e6fbff",marginBottom:20,marginTop:20},children:"Experience"}),Lt.jsxs("div",{style:{marginBottom:24,paddingBottom:20,borderBottom:"1px solid rgba(102, 232, 255, 0.1)",display:"flex",gap:16,alignItems:"flex-start"},children:[Lt.jsx("img",{src:"/adobe-logo.png",alt:"Adobe",style:{width:150,height:80,objectFit:"contain",minWidth:150}}),Lt.jsxs("div",{style:{flex:1},children:[Lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:4},children:[Lt.jsx("h4",{style:{fontSize:18,fontWeight:600,color:"#ffffff",margin:0},children:"Developer Platforms Intern"}),Lt.jsx("span",{style:{fontSize:14,color:"#9be8ff"},children:"Summer 2026"})]}),Lt.jsx("p",{style:{fontSize:16,color:"#a8d8ff",margin:"4px 0 8px 0",fontWeight:500},children:"Adobe"}),Lt.jsx("p",{style:{fontSize:14,color:"#9be8ff",margin:0},children:"Incoming"})]})]}),Lt.jsxs("div",{style:{marginBottom:24,paddingBottom:20,borderBottom:"1px solid rgba(102, 232, 255, 0.1)",display:"flex",gap:16,alignItems:"flex-start"},children:[Lt.jsx("img",{src:"/ncr-voyix-logo.png",alt:"NCR Voyix",style:{width:150,height:80,objectFit:"contain",minWidth:150}}),Lt.jsxs("div",{style:{flex:1},children:[Lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:4},children:[Lt.jsx("h4",{style:{fontSize:18,fontWeight:600,color:"#ffffff",margin:0},children:"Mobile Development Intern"}),Lt.jsx("span",{style:{fontSize:14,color:"#9be8ff"},children:"Summer 2025"})]}),Lt.jsx("p",{style:{fontSize:16,color:"#a8d8ff",margin:"4px 0 8px 0",fontWeight:500},children:"NCR Voyix"}),Lt.jsx("p",{style:{fontSize:14,color:"#9be8ff",margin:0},children:"React Native • Expo • GraphQL"})]})]}),Lt.jsxs("div",{style:{marginBottom:24,paddingBottom:20,borderBottom:"1px solid rgba(102, 232, 255, 0.1)",display:"flex",gap:16,alignItems:"flex-start"},children:[Lt.jsx("img",{src:"/novae-logo.png",alt:"Novae",style:{width:150,height:80,objectFit:"contain",minWidth:150}}),Lt.jsxs("div",{style:{flex:1},children:[Lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:4},children:[Lt.jsx("h4",{style:{fontSize:18,fontWeight:600,color:"#ffffff",margin:0},children:"Software Engineering Intern"}),Lt.jsx("span",{style:{fontSize:14,color:"#9be8ff"},children:"Summer 2024"})]}),Lt.jsx("p",{style:{fontSize:16,color:"#a8d8ff",margin:"4px 0 8px 0",fontWeight:500},children:"Novae"}),Lt.jsx("p",{style:{fontSize:14,color:"#9be8ff",margin:0},children:"SpringBoot • Angular • Kafka • MongoDB"})]})]})]}),Lt.jsxs("div",{children:[Lt.jsx("h3",{style:{fontSize:24,fontWeight:700,color:"#e6fbff",marginBottom:20,marginTop:0},children:"Research"}),Lt.jsxs("div",{style:{marginBottom:24,paddingBottom:20,borderBottom:"1px solid rgba(102, 232, 255, 0.1)",display:"flex",gap:16,alignItems:"flex-start"},children:[Lt.jsx("img",{src:"/curo-logo.png",alt:"Curo",style:{width:200,height:60,objectFit:"contain",minWidth:200}}),Lt.jsxs("div",{style:{flex:1},children:[Lt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:4},children:[Lt.jsx("h4",{style:{fontSize:18,fontWeight:600,color:"#ffffff",margin:0},children:"Undergraduate Research"}),Lt.jsx("span",{style:{fontSize:14,color:"#9be8ff"},children:"Aug 2024 – May 2025"})]}),Lt.jsx("p",{style:{fontSize:16,color:"#a8d8ff",margin:"4px 0 8px 0",fontWeight:500},children:"Translational Glycomaterials and Neural Repair Lab"})]})]})]})]})})}const Bd="180",sy=0,X0=1,oy=2,W_=1,ly=2,na=3,ka=0,Vn=1,ia=2,Ga=0,Rs=1,Ds=2,k0=3,W0=4,cy=5,xr=100,uy=101,fy=102,hy=103,dy=104,py=200,my=201,gy=202,_y=203,Wh=204,qh=205,vy=206,xy=207,Sy=208,yy=209,My=210,Ey=211,Ty=212,by=213,Ay=214,Yh=0,jh=1,Zh=2,Us=3,Kh=4,Qh=5,Jh=6,$h=7,q_=0,Ry=1,Cy=2,Va=0,wy=1,Dy=2,Uy=3,Ly=4,Ny=5,Oy=6,zy=7,Y_=300,Ls=301,Ns=302,td=303,ed=304,qc=306,nd=1e3,yr=1001,id=1002,xi=1003,Py=1004,oc=1005,Di=1006,uh=1007,Mr=1008,Li=1009,j_=1010,Z_=1011,Vo=1012,Id=1013,Er=1014,aa=1015,Yo=1016,Fd=1017,Hd=1018,Xo=1020,K_=35902,Q_=35899,J_=1021,$_=1022,vi=1023,ko=1026,Wo=1027,tv=1028,Gd=1029,ev=1030,Vd=1031,Xd=1033,Nc=33776,Oc=33777,zc=33778,Pc=33779,ad=35840,rd=35841,sd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,Sd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,bd=36492,Ad=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,By=3200,Iy=3201,Fy=0,Hy=1,Ia="",ci="srgb",Os="srgb-linear",Hc="linear",Ge="srgb",os=7680,q0=519,Gy=512,Vy=513,Xy=514,nv=515,ky=516,Wy=517,qy=518,Yy=519,Ld=35044,Y0="300 es",Ui=2e3,Gc=2001;class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Nd=180/Math.PI;function Xa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function jy(o,e){return(o%e+e)%e}function hh(o,e,i){return(1-i)*o+i*e}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],v=r[l+3];const x=c[h+0],M=c[h+1],b=c[h+2],A=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=A;return}if(v!==A||m!==x||p!==M||S!==b){let y=1-d;const g=m*x+p*M+S*b+v*A,L=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,g*L);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const w=d*L;if(m=m*y+x*w,p=p*y+M*w,S=S*y+b*w,v=v*y+A*w,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=H,p*=H,S*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],v=c[h],x=c[h+1],M=c[h+2],b=c[h+3];return e[i]=d*b+S*v+m*M-p*x,e[i+1]=m*b+S*x+p*v-d*M,e[i+2]=p*b+S*M+d*x-m*v,e[i+3]=S*b-d*v-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),v=d(c/2),x=m(r/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*S*v+p*M*b,this._y=p*M*v-x*S*b,this._z=p*S*b+x*M*v,this._w=p*S*v-x*M*b;break;case"YXZ":this._x=x*S*v+p*M*b,this._y=p*M*v-x*S*b,this._z=p*S*b-x*M*v,this._w=p*S*v+x*M*b;break;case"ZXY":this._x=x*S*v-p*M*b,this._y=p*M*v+x*S*b,this._z=p*S*b+x*M*v,this._w=p*S*v-x*M*b;break;case"ZYX":this._x=x*S*v-p*M*b,this._y=p*M*v+x*S*b,this._z=p*S*b-x*M*v,this._w=p*S*v+x*M*b;break;case"YZX":this._x=x*S*v+p*M*b,this._y=p*M*v+x*S*b,this._z=p*S*b-x*M*v,this._w=p*S*v-x*M*b;break;case"XZY":this._x=x*S*v-p*M*b,this._y=p*M*v-x*S*b,this._z=p*S*b+x*M*v,this._w=p*S*v+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],x=r+d+v;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-r*p,this._z=c*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(j0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(j0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*S,this.y=r+m*S+d*p-c*v,this.z=l+m*v+c*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new j,j0=new jo;class fe{constructor(e,i,r,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],v=r[7],x=r[2],M=r[5],b=r[8],A=l[0],y=l[3],g=l[6],L=l[1],U=l[4],w=l[7],H=l[2],F=l[5],P=l[8];return c[0]=h*A+d*L+m*H,c[3]=h*y+d*U+m*F,c[6]=h*g+d*w+m*P,c[1]=p*A+S*L+v*H,c[4]=p*y+S*U+v*F,c[7]=p*g+S*w+v*P,c[2]=x*A+M*L+b*H,c[5]=x*y+M*U+b*F,c[8]=x*g+M*w+b*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*c*S+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=S*h-d*p,x=d*m-S*c,M=p*c-h*m,b=i*v+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(l*p-S*r)*A,e[2]=(d*r-l*h)*A,e[3]=x*A,e[4]=(S*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ph.makeScale(e,i)),this}rotate(e){return this.premultiply(ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new fe;function iv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zy(){const o=Vc("canvas");return o.style.display="block",o}const Z0={};function qo(o){o in Z0||(Z0[o]=!0,console.warn(o))}function Ky(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const K0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){const o={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ge&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Os]:{primaries:e,whitePoint:r,transfer:Hc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const we=Qy();function sa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ls;class Jy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=Vc("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=sa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $y=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(mh(l[h].image)):c.push(mh(l[h]))}else c=mh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function mh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Jy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tM=0;const gh=new j;class On extends Ps{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=yr,l=yr,c=Di,h=Mr,d=vi,m=Li,p=On.DEFAULT_ANISOTROPY,S=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Xa(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Y_;On.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,i=0,r=0,l=1){Xe.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],v=m[8],x=m[1],M=m[5],b=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(v-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(v+A)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,H=(g+1)/2,F=(S+x)/4,P=(v+A)/4,W=(b+y)/4;return U>w&&U>H?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=P/r):w>H?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=F/l,c=W/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=P/c,l=W/c),this.set(r,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(v-A)*(v-A)+(x-S)*(x-S));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(v-A)/L,this.z=(x-S)/L,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eM extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new Xe(0,0,e,i),this.scissorTest=!1,this.viewport=new Xe(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new On(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends eM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class av extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nM extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,mi):mi.fromBufferAttribute(c,h),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),lc.copy(r.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),cc.subVectors(this.max,Lo),cs.subVectors(e.a,Lo),us.subVectors(e.b,Lo),fs.subVectors(e.c,Lo),La.subVectors(us,cs),Na.subVectors(fs,us),fr.subVectors(cs,fs);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-fr.z,fr.y,La.z,0,-La.x,Na.z,0,-Na.x,fr.z,0,-fr.x,-La.y,La.x,0,-Na.y,Na.x,0,-fr.y,fr.x,0];return!_h(i,cs,us,fs,cc)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,cs,us,fs,cc))?!1:(uc.crossVectors(La,Na),i=[uc.x,uc.y,uc.z],_h(i,cs,us,fs,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new j,new j,new j,new j,new j,new j,new j,new j],mi=new j,lc=new Zo,cs=new j,us=new j,fs=new j,La=new j,Na=new j,fr=new j,Lo=new j,cc=new j,uc=new j,hr=new j;function _h(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){hr.fromArray(o,c);const d=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=e.dot(hr),p=i.dot(hr),S=r.dot(hr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const iM=new Zo,No=new j,vh=new j;class Yc{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(vh)),this.expandByPoint(No.copy(e.center).sub(vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new j,xh=new j,fc=new j,Oa=new j,Sh=new j,hc=new j,yh=new j;class rv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){xh.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(xh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Oa.dot(this.direction),m=-Oa.dot(fc),p=Oa.lengthSq(),S=Math.abs(1-h*h);let v,x,M,b;if(S>0)if(v=h*m-d,x=h*d-m,b=c*S,v>=0)if(x>=-b)if(x<=b){const A=1/S;v*=A,x*=A,M=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;else x<=-b?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p):x<=b?(v=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),M=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(xh).addScaledVector(fc,x),M}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(c=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(c=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,c){Sh.subVectors(i,e),hc.subVectors(r,e),yh.crossVectors(Sh,hc);let h=this.direction.dot(yh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Oa.subVectors(this.origin,e);const m=d*this.direction.dot(hc.crossVectors(Oa,hc));if(m<0)return null;const p=d*this.direction.dot(Sh.cross(Oa));if(p<0||m+p>h)return null;const S=-d*Oa.dot(yh);return S<0?null:this.at(S/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,r,l,c,h,d,m,p,S,v,x,M,b,A,y){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,S,v,x,M,b,A,y)}set(e,i,r,l,c,h,d,m,p,S,v,x,M,b,A,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=v,g[14]=x,g[3]=M,g[7]=b,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/hs.setFromMatrixColumn(e,0).length(),c=1/hs.setFromMatrixColumn(e,1).length(),h=1/hs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*S,M=h*v,b=d*S,A=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=b+M*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,M=m*v,b=p*S,A=p*v;i[0]=x+A*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=M*d-b,i[6]=A+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,M=m*v,b=p*S,A=p*v;i[0]=x-A*d,i[4]=-h*v,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*S,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,M=h*v,b=d*S,A=d*v;i[0]=m*S,i[4]=b*p-M,i[8]=x*p+A,i[1]=m*v,i[5]=A*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*S,i[4]=A-x*v,i[8]=b*v+M,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*v+b,i[10]=x-A*v}else if(e.order==="XZY"){const x=h*m,M=h*p,b=d*m,A=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=x*v+A,i[5]=h*S,i[9]=M*v-b,i[2]=b*v-M,i[6]=d*S,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,rM)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),za.crossVectors(r,Qn),za.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),za.crossVectors(r,Qn)),za.normalize(),dc.crossVectors(Qn,za),l[0]=za.x,l[4]=dc.x,l[8]=Qn.x,l[1]=za.y,l[5]=dc.y,l[9]=Qn.y,l[2]=za.z,l[6]=dc.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],v=r[5],x=r[9],M=r[13],b=r[2],A=r[6],y=r[10],g=r[14],L=r[3],U=r[7],w=r[11],H=r[15],F=l[0],P=l[4],W=l[8],D=l[12],C=l[1],G=l[5],J=l[9],ut=l[13],mt=l[2],tt=l[6],O=l[10],k=l[14],Y=l[3],xt=l[7],yt=l[11],N=l[15];return c[0]=h*F+d*C+m*mt+p*Y,c[4]=h*P+d*G+m*tt+p*xt,c[8]=h*W+d*J+m*O+p*yt,c[12]=h*D+d*ut+m*k+p*N,c[1]=S*F+v*C+x*mt+M*Y,c[5]=S*P+v*G+x*tt+M*xt,c[9]=S*W+v*J+x*O+M*yt,c[13]=S*D+v*ut+x*k+M*N,c[2]=b*F+A*C+y*mt+g*Y,c[6]=b*P+A*G+y*tt+g*xt,c[10]=b*W+A*J+y*O+g*yt,c[14]=b*D+A*ut+y*k+g*N,c[3]=L*F+U*C+w*mt+H*Y,c[7]=L*P+U*G+w*tt+H*xt,c[11]=L*W+U*J+w*O+H*yt,c[15]=L*D+U*ut+w*k+H*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],v=e[6],x=e[10],M=e[14],b=e[3],A=e[7],y=e[11],g=e[15];return b*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*S-c*m*S)+y*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*S-r*p*S)+g*(-l*d*S-i*m*v+i*d*x+l*h*v-r*h*x+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=e[9],x=e[10],M=e[11],b=e[12],A=e[13],y=e[14],g=e[15],L=v*y*p-A*x*p+A*m*M-d*y*M-v*m*g+d*x*g,U=b*x*p-S*y*p-b*m*M+h*y*M+S*m*g-h*x*g,w=S*A*p-b*v*p+b*d*M-h*A*M-S*d*g+h*v*g,H=b*v*m-S*A*m-b*d*x+h*A*x+S*d*y-h*v*y,F=i*L+r*U+l*w+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=L*P,e[1]=(A*x*c-v*y*c-A*l*M+r*y*M+v*l*g-r*x*g)*P,e[2]=(d*y*c-A*m*c+A*l*p-r*y*p-d*l*g+r*m*g)*P,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*M-r*m*M)*P,e[4]=U*P,e[5]=(S*y*c-b*x*c+b*l*M-i*y*M-S*l*g+i*x*g)*P,e[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*g-i*m*g)*P,e[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*M+i*m*M)*P,e[8]=w*P,e[9]=(b*v*c-S*A*c-b*r*M+i*A*M+S*r*g-i*v*g)*P,e[10]=(h*A*c-b*d*c+b*r*p-i*A*p-h*r*g+i*d*g)*P,e[11]=(S*d*c-h*v*c-S*r*p+i*v*p+h*r*M-i*d*M)*P,e[12]=H*P,e[13]=(S*A*l-b*v*l+b*r*x-i*A*x-S*r*y+i*v*y)*P,e[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*y-i*d*y)*P,e[15]=(h*v*l-S*d*l+S*r*m-i*v*m-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,S=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,v=d+d,x=c*p,M=c*S,b=c*v,A=h*S,y=h*v,g=d*v,L=m*p,U=m*S,w=m*v,H=r.x,F=r.y,P=r.z;return l[0]=(1-(A+g))*H,l[1]=(M+w)*H,l[2]=(b-U)*H,l[3]=0,l[4]=(M-w)*F,l[5]=(1-(x+g))*F,l[6]=(y+L)*F,l[7]=0,l[8]=(b+U)*P,l[9]=(y-L)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const h=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],gi.copy(this);const p=1/c,S=1/h,v=1/d;return gi.elements[0]*=p,gi.elements[1]*=p,gi.elements[2]*=p,gi.elements[4]*=S,gi.elements[5]*=S,gi.elements[6]*=S,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,i.setFromRotationMatrix(gi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ui,m=!1){const p=this.elements,S=2*c/(i-e),v=2*c/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===Ui)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Gc)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ui,m=!1){const p=this.elements,S=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===Ui)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===Gc)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const hs=new j,gi=new Ke,aM=new j(0,0,0),rM=new j(1,1,1),za=new j,dc=new j,Qn=new j,J0=new Ke,$0=new jo;class oa{constructor(e=0,i=0,r=0,l=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return J0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const t_=new j,ds=new jo,$i=new Ke,pc=new j,Oo=new j,oM=new j,lM=new jo,e_=new j(1,0,0),n_=new j(0,1,0),i_=new j(0,0,1),a_={type:"added"},cM={type:"removed"},ps={type:"childadded",child:null},Mh={type:"childremoved",child:null};class Cn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new j,i=new oa,r=new jo,l=new j(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new fe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,i){return ds.setFromAxisAngle(e,i),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,i){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?pc.copy(e):pc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Oo,pc,this.up):$i.lookAt(pc,Oo,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),ds.setFromRotationMatrix($i),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(a_),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cM),Mh.child=e,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(a_),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),v=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new j(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new j,ta=new j,Eh=new j,ea=new j,ms=new j,gs=new j,r_=new j,Th=new j,bh=new j,Ah=new j,Rh=new Xe,Ch=new Xe,wh=new Xe;class ui{constructor(e=new j,i=new j,r=new j){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),_i.subVectors(e,i),l.cross(_i);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){_i.subVectors(l,i),ta.subVectors(r,i),Eh.subVectors(e,i);const h=_i.dot(_i),d=_i.dot(ta),m=_i.dot(Eh),p=ta.dot(ta),S=ta.dot(Eh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,M=(p*m-d*S)*x,b=(h*S-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ea.x),m.addScaledVector(h,ea.y),m.addScaledVector(d,ea.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(e,i),Ch.fromBufferAttribute(e,r),wh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Rh,c.x),h.addScaledVector(Ch,c.y),h.addScaledVector(wh,c.z),h}static isFrontFacing(e,i,r,l){return _i.subVectors(r,i),ta.subVectors(e,i),_i.cross(ta).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),_i.cross(ta).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;ms.subVectors(l,r),gs.subVectors(c,r),Th.subVectors(e,r);const m=ms.dot(Th),p=gs.dot(Th);if(m<=0&&p<=0)return i.copy(r);bh.subVectors(e,l);const S=ms.dot(bh),v=gs.dot(bh);if(S>=0&&v<=S)return i.copy(l);const x=m*v-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(ms,h);Ah.subVectors(e,c);const M=ms.dot(Ah),b=gs.dot(Ah);if(b>=0&&M<=b)return i.copy(c);const A=M*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(gs,d);const y=S*b-M*v;if(y<=0&&v-S>=0&&M-b>=0)return r_.subVectors(c,l),d=(v-S)/(v-S+(M-b)),i.copy(l).addScaledVector(r_,d);const g=1/(y+A+x);return h=A*g,d=x*g,i.copy(r).addScaledVector(ms,h).addScaledVector(gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Dh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class me{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=we.workingColorSpace){return this.r=e,this.g=i,this.b=r,we.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=we.workingColorSpace){if(e=jy(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Dh(h,c,e+1/3),this.g=Dh(h,c,e),this.b=Dh(h,c,e-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const r=ov[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return we.workingToColorSpace(Rn.copy(this),e),Math.round(Te(Rn.r*255,0,255))*65536+Math.round(Te(Rn.g*255,0,255))*256+Math.round(Te(Rn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=we.workingColorSpace){we.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=we.workingColorSpace){return we.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ci){we.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+e,Pa.s+i,Pa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Pa),e.getHSL(mc);const r=hh(Pa.h,mc.h,i),l=hh(Pa.s,mc.s,i),c=hh(Pa.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new me;me.NAMES=ov;let uM=0;class Bs extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Rs,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lv extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new j,gc=new he;let fM=0;class Si{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Ld,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ld&&(e.usage=this.usage),e}}class cv extends Si{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class uv extends Si{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yi extends Si{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hM=0;const li=new Ke,Uh=new Cn,_s=new j,Jn=new Zo,zo=new Zo,_n=new j;class fi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Jn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Jn.min,zo.min),Jn.expandByPoint(_n),_n.addVectors(Jn.max,zo.max),Jn.expandByPoint(_n)):(Jn.expandByPoint(zo.min),Jn.expandByPoint(zo.max))}Jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)_n.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)_n.fromBufferAttribute(d,p),m&&(_s.fromBufferAttribute(e,p),_n.add(_s)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new j,m[W]=new j;const p=new j,S=new j,v=new j,x=new he,M=new he,b=new he,A=new j,y=new j;function g(W,D,C){p.fromBufferAttribute(r,W),S.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),x.fromBufferAttribute(c,W),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,C),S.sub(p),v.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(A.copy(S).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(G),y.copy(v).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(G),d[W].add(A),d[D].add(A),d[C].add(A),m[W].add(y),m[D].add(y),m[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,D=L.length;W<D;++W){const C=L[W],G=C.start,J=C.count;for(let ut=G,mt=G+J;ut<mt;ut+=3)g(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const U=new j,w=new j,H=new j,F=new j;function P(W){H.fromBufferAttribute(l,W),F.copy(H);const D=d[W];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(F,D);const G=w.dot(m[W])<0?-1:1;h.setXYZW(W,U.x,U.y,U.z,G)}for(let W=0,D=L.length;W<D;++W){const C=L[W],G=C.start,J=C.count;for(let ut=G,mt=G+J;ut<mt;ut+=3)P(e.getX(ut+0)),P(e.getX(ut+1)),P(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new j,c=new j,h=new j,d=new j,m=new j,p=new j,S=new j,v=new j;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(S),m.add(S),p.add(S),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,v=d.normalized,x=new p.constructor(m.length*S);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let g=0;g<S;g++)x[b++]=p[M++]}return new Si(x,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,v=p.length;S<v;S++){const x=p[S],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,x=p.length;v<x;v++){const M=p[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],v=c[p];for(let x=0,M=v.length;x<M;x++)S.push(v[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new Ke,dr=new rv,_c=new Yc,o_=new j,vc=new j,xc=new j,Sc=new j,Lh=new j,yc=new j,l_=new j,Mc=new j;class ra extends Cn{constructor(e=new fi,i=new lv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],v=c[m];S!==0&&(Lh.fromBufferAttribute(v,e),h?yc.addScaledVector(Lh,S):yc.addScaledVector(Lh.sub(i),S))}i.add(yc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(c),dr.copy(e.ray).recast(e.near),!(_c.containsPoint(dr.origin)===!1&&(dr.intersectSphere(_c,o_)===null||dr.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(c).invert(),dr.copy(e.ray).applyMatrix4(s_),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,dr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const y=x[b],g=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,H=U;w<H;w+=3){const F=d.getX(w),P=d.getX(w+1),W=d.getX(w+2);l=Ec(this,g,e,r,p,S,v,F,P,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=b,g=A;y<g;y+=3){const L=d.getX(y),U=d.getX(y+1),w=d.getX(y+2);l=Ec(this,h,e,r,p,S,v,L,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const y=x[b],g=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,H=U;w<H;w+=3){const F=w,P=w+1,W=w+2;l=Ec(this,g,e,r,p,S,v,F,P,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,g=A;y<g;y+=3){const L=y,U=y+1,w=y+2;l=Ec(this,h,e,r,p,S,v,L,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function dM(o,e,i,r,l,c,h,d){let m;if(e.side===Vn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===ka,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:o}}function Ec(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,vc),o.getVertexPosition(m,xc),o.getVertexPosition(p,Sc);const S=dM(o,e,i,r,vc,xc,Sc,l_);if(S){const v=new j;ui.getBarycoord(l_,vc,xc,Sc,v),l&&(S.uv=ui.getInterpolatedAttribute(l,d,m,p,v,new he)),c&&(S.uv1=ui.getInterpolatedAttribute(c,d,m,p,v,new he)),h&&(S.normal=ui.getInterpolatedAttribute(h,d,m,p,v,new j),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};ui.getNormal(vc,xc,Sc,x.normal),S.face=x,S.barycoord=v}return S}class Ko extends fi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],v=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(S,3)),this.setAttribute("uv",new yi(v,2));function b(A,y,g,L,U,w,H,F,P,W,D){const C=w/P,G=H/W,J=w/2,ut=H/2,mt=F/2,tt=P+1,O=W+1;let k=0,Y=0;const xt=new j;for(let yt=0;yt<O;yt++){const N=yt*G-ut;for(let V=0;V<tt;V++){const st=V*C-J;xt[A]=st*L,xt[y]=N*U,xt[g]=mt,p.push(xt.x,xt.y,xt.z),xt[A]=0,xt[y]=0,xt[g]=F>0?1:-1,S.push(xt.x,xt.y,xt.z),v.push(V/P),v.push(1-yt/W),k+=1}}for(let yt=0;yt<W;yt++)for(let N=0;N<P;N++){const V=x+N+tt*yt,st=x+N+tt*(yt+1),gt=x+(N+1)+tt*(yt+1),At=x+(N+1)+tt*yt;m.push(V,st,At),m.push(st,gt,At),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=zs(o[i]);for(const l in r)e[l]=r[l]}return e}function pM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function fv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:we.workingColorSpace}const mM={clone:zs,merge:Nn};var gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=pM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class hv extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new j,c_=new he,u_=new he;class Gn extends hv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,i){return this.getViewBounds(e,c_,u_),i.subVectors(u_,c_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class vM extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Gn(vs,xs,e,i);l.layers=this.layers,this.add(l);const c=new Gn(vs,xs,e,i);c.layers=this.layers,this.add(c);const h=new Gn(vs,xs,e,i);h.layers=this.layers,this.add(h);const d=new Gn(vs,xs,e,i);d.layers=this.layers,this.add(d);const m=new Gn(vs,xs,e,i);m.layers=this.layers,this.add(m);const p=new Gn(vs,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(v,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class dv extends On{constructor(e=[],i=Ls,r,l,c,h,d,m,p,S){super(e,i,r,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xM extends Tr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:Ga});c.uniforms.tEquirect.value=i;const h=new ra(l,c),d=i.minFilter;return i.minFilter===Mr&&(i.minFilter=Di),new vM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class bs extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SM={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=S.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(SM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new bs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jc{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=i}clone(){return new jc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pv extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class yM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Ld,this.updateRanges=[],this.version=0,this.uuid=Xa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new j;class Xc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.applyMatrix4(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.applyNormalMatrix(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Ln.fromBufferAttribute(this,i),Ln.transformDirection(e),this.setXYZ(i,Ln.x,Ln.y,Ln.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Si(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wd extends Bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const Po=new j,ys=new j,Ms=new j,Es=new he,Bo=new he,mv=new Ke,Tc=new j,Io=new j,bc=new j,f_=new he,Oh=new he,h_=new he;class gv extends Cn{constructor(e=new Wd){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new fi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new yM(i,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Xc(r,3,0,!1)),Ss.setAttribute("uv",new Xc(r,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),mv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Ac(Tc.set(-.5,-.5,0),Ms,h,ys,l,c),Ac(Io.set(.5,-.5,0),Ms,h,ys,l,c),Ac(bc.set(.5,.5,0),Ms,h,ys,l,c),f_.set(0,0),Oh.set(1,0),h_.set(1,1);let d=e.ray.intersectTriangle(Tc,Io,bc,!1,Po);if(d===null&&(Ac(Io.set(-.5,.5,0),Ms,h,ys,l,c),Oh.set(0,1),d=e.ray.intersectTriangle(Tc,bc,Io,!1,Po),d===null))return;const m=e.ray.origin.distanceTo(Po);m<e.near||m>e.far||i.push({distance:m,point:Po.clone(),uv:ui.getInterpolation(Po,Tc,Io,bc,f_,Oh,h_,new he),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ac(o,e,i,r,l,c){Es.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Bo.x=c*Es.x-l*Es.y,Bo.y=l*Es.x+c*Es.y):Bo.copy(Es),o.copy(e),o.x+=Bo.x,o.y+=Bo.y,o.applyMatrix4(mv)}const zh=new j,MM=new j,EM=new fe;class _r{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=zh.subVectors(r,i).cross(MM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||EM.getNormalMatrix(e),l=this.coplanarPoint(zh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Yc,TM=new he(.5,.5),Rc=new j;class qd{constructor(e=new _r,i=new _r,r=new _r,l=new _r,c=new _r,h=new _r){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ui,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],v=c[5],x=c[6],M=c[7],b=c[8],A=c[9],y=c[10],g=c[11],L=c[12],U=c[13],w=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,g-b,H-L).normalize(),l[1].setComponents(p+h,M+S,g+b,H+L).normalize(),l[2].setComponents(p+d,M+v,g+A,H+U).normalize(),l[3].setComponents(p-d,M-v,g-A,H-U).normalize(),r)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,M-x,g-y,H-w).normalize();else if(l[4].setComponents(p-m,M-x,g-y,H-w).normalize(),i===Ui)l[5].setComponents(p+m,M+x,g+y,H+w).normalize();else if(i===Gc)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);const i=TM.distanceTo(e.center);return pr.radius=.7071067811865476+i,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new j,Wc=new j,d_=new Ke,Fo=new rv,Cc=new Yc,Ph=new j,p_=new j;class _v extends Cn{constructor(e=new fi,i=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)kc.fromBufferAttribute(i,l-1),Wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=kc.distanceTo(Wc);e.setAttribute("lineDistance",new yi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;d_.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(d_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=r.index,x=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const g=S.getX(A),L=S.getX(A+1),U=wc(this,e,Fo,m,g,L,A);U&&i.push(U)}if(this.isLineLoop){const A=S.getX(b-1),y=S.getX(M),g=wc(this,e,Fo,m,A,y,b-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let A=M,y=b-1;A<y;A+=p){const g=wc(this,e,Fo,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=wc(this,e,Fo,m,b-1,M,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function wc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(kc.fromBufferAttribute(d,l),Wc.fromBufferAttribute(d,c),i.distanceSqToSegment(kc,Wc,Ph,p_)>r)return;Ph.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ph);if(!(p<e.near||p>e.far))return{distance:p,point:p_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class vv extends On{constructor(e,i,r=Er,l,c,h,d=xi,m=xi,p,S=ko,v=1){if(S!==ko&&S!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xv extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jd extends fi{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),S(),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(c.slice(),3)),this.setAttribute("uv",new yi(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new j,w=new j,H=new j;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],w),M(i[F+2],H),m(U,w,H,L)}function m(L,U,w,H){const F=H+1,P=[];for(let W=0;W<=F;W++){P[W]=[];const D=L.clone().lerp(w,W/F),C=U.clone().lerp(w,W/F),G=F-W;for(let J=0;J<=G;J++)J===0&&W===F?P[W][J]=D:P[W][J]=D.clone().lerp(C,J/G)}for(let W=0;W<F;W++)for(let D=0;D<2*(F-W)-1;D++){const C=Math.floor(D/2);D%2===0?(x(P[W][C+1]),x(P[W+1][C]),x(P[W][C])):(x(P[W][C+1]),x(P[W+1][C+1]),x(P[W+1][C]))}}function p(L){const U=new j;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(L),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function S(){const L=new j;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const w=y(L)/2/Math.PI+.5,H=g(L)/Math.PI+.5;h.push(w,1-H)}b(),v()}function v(){for(let L=0;L<h.length;L+=6){const U=h[L+0],w=h[L+2],H=h[L+4],F=Math.max(U,w,H),P=Math.min(U,w,H);F>.9&&P<.1&&(U<.2&&(h[L+0]+=1),w<.2&&(h[L+2]+=1),H<.2&&(h[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function M(L,U){const w=L*3;U.x=e[w+0],U.y=e[w+1],U.z=e[w+2]}function b(){const L=new j,U=new j,w=new j,H=new j,F=new he,P=new he,W=new he;for(let D=0,C=0;D<c.length;D+=9,C+=6){L.set(c[D+0],c[D+1],c[D+2]),U.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),F.set(h[C+0],h[C+1]),P.set(h[C+2],h[C+3]),W.set(h[C+4],h[C+5]),H.copy(L).add(U).add(w).divideScalar(3);const G=y(H);A(F,C+0,L,G),A(P,C+2,U,G),A(W,C+4,w,G)}}function A(L,U,w,H){H<0&&L.x===1&&(h[U]=L.x-1),w.x===0&&w.z===0&&(h[U]=H/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function g(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.vertices,e.indices,e.radius,e.details)}}class Zd extends jd{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Zd(e.radius,e.detail)}}class Zc extends fi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,v=e/d,x=i/m,M=[],b=[],A=[],y=[];for(let g=0;g<S;g++){const L=g*x-h;for(let U=0;U<p;U++){const w=U*v-c;b.push(w,-L,0),A.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let L=0;L<d;L++){const U=L+p*g,w=L+p*(g+1),H=L+1+p*(g+1),F=L+1+p*g;M.push(U,w,F),M.push(w,H,F)}this.setIndex(M),this.setAttribute("position",new yi(b,3)),this.setAttribute("normal",new yi(A,3)),this.setAttribute("uv",new yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class bM extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AM extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sv extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Bh=new Ke,m_=new j,g_=new j;class RM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;m_.setFromMatrixPosition(e.matrixWorld),i.position.copy(m_),g_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(g_),i.updateMatrixWorld(),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const __=new Ke,Ho=new j,Ih=new j;class CM extends RM{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ho),Ih.copy(r.position),Ih.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Ih),r.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),__.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(__,r.coordinateSystem,r.reversedDepth)}}class ws extends Sv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wM extends hv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class yv extends Sv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class DM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function v_(o,e,i,r){const l=UM(r);switch(i){case J_:return o*e;case tv:return o*e/l.components*l.byteLength;case Gd:return o*e/l.components*l.byteLength;case ev:return o*e*2/l.components*l.byteLength;case Vd:return o*e*2/l.components*l.byteLength;case $_:return o*e*3/l.components*l.byteLength;case vi:return o*e*4/l.components*l.byteLength;case Xd:return o*e*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(o,16)*Math.max(e,8)/4;case ad:case sd:return Math.max(o,8)*Math.max(e,8)/2;case ld:case cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case md:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case vd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bd:case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Cd:case wd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function UM(o){switch(o){case Li:case j_:return{byteLength:1,components:1};case Vo:case Z_:case Yo:return{byteLength:2,components:1};case Fd:case Hd:return{byteLength:2,components:4};case Er:case Id:case aa:return{byteLength:4,components:1};case K_:case Q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);function Mv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function LM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,S);else{v.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<v.length;M++){const b=v[x],A=v[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,v[x]=A)}v.length=x+1;for(let M=0,b=v.length;M<b;M++){const A=v[M];o.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,HM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM=`#ifdef USE_BATCHING
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
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qM=`#ifdef USE_IRIDESCENCE
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
#endif`,YM=`#ifdef USE_BUMPMAP
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nE=`#define PI 3.141592653589793
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
} // validated`,iE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aE=`vec3 transformedNormal = objectNormal;
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
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cE="gl_FragColor = linearToOutputTexel( gl_FragColor );",uE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,pE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
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
}`,yE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ME=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TE=`uniform bool receiveShadow;
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
#endif`,bE=`#ifdef USE_ENVMAP
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
#endif`,AE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DE=`PhysicalMaterial material;
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
#endif`,UE=`struct PhysicalMaterial {
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
}`,LE=`
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
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
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VE=`#if defined( USE_POINTS_UV )
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
#endif`,XE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
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
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,H1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,W1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,Y1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,Z1=`#define LAMBERT
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
}`,K1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,J1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,rT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 color;
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
}`,uT=`uniform float rotation;
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
}`,fT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:NM,alphahash_pars_fragment:OM,alphamap_fragment:zM,alphamap_pars_fragment:PM,alphatest_fragment:BM,alphatest_pars_fragment:IM,aomap_fragment:FM,aomap_pars_fragment:HM,batching_pars_vertex:GM,batching_vertex:VM,begin_vertex:XM,beginnormal_vertex:kM,bsdfs:WM,iridescence_fragment:qM,bumpmap_pars_fragment:YM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:QM,color_fragment:JM,color_pars_fragment:$M,color_pars_vertex:tE,color_vertex:eE,common:nE,cube_uv_reflection_fragment:iE,defaultnormal_vertex:aE,displacementmap_pars_vertex:rE,displacementmap_vertex:sE,emissivemap_fragment:oE,emissivemap_pars_fragment:lE,colorspace_fragment:cE,colorspace_pars_fragment:uE,envmap_fragment:fE,envmap_common_pars_fragment:hE,envmap_pars_fragment:dE,envmap_pars_vertex:pE,envmap_physical_pars_fragment:bE,envmap_vertex:mE,fog_vertex:gE,fog_pars_vertex:_E,fog_fragment:vE,fog_pars_fragment:xE,gradientmap_pars_fragment:SE,lightmap_pars_fragment:yE,lights_lambert_fragment:ME,lights_lambert_pars_fragment:EE,lights_pars_begin:TE,lights_toon_fragment:AE,lights_toon_pars_fragment:RE,lights_phong_fragment:CE,lights_phong_pars_fragment:wE,lights_physical_fragment:DE,lights_physical_pars_fragment:UE,lights_fragment_begin:LE,lights_fragment_maps:NE,lights_fragment_end:OE,logdepthbuf_fragment:zE,logdepthbuf_pars_fragment:PE,logdepthbuf_pars_vertex:BE,logdepthbuf_vertex:IE,map_fragment:FE,map_pars_fragment:HE,map_particle_fragment:GE,map_particle_pars_fragment:VE,metalnessmap_fragment:XE,metalnessmap_pars_fragment:kE,morphinstance_vertex:WE,morphcolor_vertex:qE,morphnormal_vertex:YE,morphtarget_pars_vertex:jE,morphtarget_vertex:ZE,normal_fragment_begin:KE,normal_fragment_maps:QE,normal_pars_fragment:JE,normal_pars_vertex:$E,normal_vertex:t1,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:d1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:v1,skinning_pars_vertex:x1,skinning_vertex:S1,skinnormal_vertex:y1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:b1,transmission_fragment:A1,transmission_pars_fragment:R1,uv_pars_fragment:C1,uv_pars_vertex:w1,uv_vertex:D1,worldpos_vertex:U1,background_vert:L1,background_frag:N1,backgroundCube_vert:O1,backgroundCube_frag:z1,cube_vert:P1,cube_frag:B1,depth_vert:I1,depth_frag:F1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:X1,linedashed_vert:k1,linedashed_frag:W1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:j1,meshlambert_frag:Z1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},zt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ci={basic:{uniforms:Nn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Nn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new me(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Nn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Nn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Nn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new me(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Nn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Nn([zt.points,zt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Nn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Nn([zt.common,zt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Nn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Nn([zt.sprite,zt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Nn([zt.common,zt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Nn([zt.lights,zt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ci.physical={uniforms:Nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Dc={r:0,b:0,g:0},mr=new oa,hT=new Ke;function dT(o,e,i,r,l,c,h){const d=new me(0);let m=c===!0?0:1,p,S,v=null,x=0,M=null;function b(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:e).get(w)),w}function A(U){let w=!1;const H=b(U);H===null?g(d,m):H&&H.isColor&&(g(H,1),w=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,w){const H=b(w);H&&(H.isCubeTexture||H.mapping===qc)?(S===void 0&&(S=new ra(new Ko(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:zs(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(F,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),mr.copy(w.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(mr)),S.material.toneMapped=we.getTransfer(H.colorSpace)!==Ge,(v!==H||x!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,v=H,x=H.version,M=o.toneMapping),S.layers.enableAll(),U.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ra(new Zc(2,2),new Wa({name:"BackgroundMaterial",uniforms:zs(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=we.getTransfer(H.colorSpace)!==Ge,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,w){U.getRGB(Dc,fv(o)),r.buffers.color.setClear(Dc.r,Dc.g,Dc.b,w,h)}function L(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:A,addToRenderList:y,dispose:L}}function pT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(C,G,J,ut,mt){let tt=!1;const O=v(ut,J,G);c!==O&&(c=O,p(c.object)),tt=M(C,ut,J,mt),tt&&b(C,ut,J,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(tt||h)&&(h=!1,w(C,G,J,ut),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function v(C,G,J){const ut=J.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let tt=mt[G.id];tt===void 0&&(tt={},mt[G.id]=tt);let O=tt[ut];return O===void 0&&(O=x(m()),tt[ut]=O),O}function x(C){const G=[],J=[],ut=[];for(let mt=0;mt<i;mt++)G[mt]=0,J[mt]=0,ut[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,G,J,ut){const mt=c.attributes,tt=G.attributes;let O=0;const k=J.getAttributes();for(const Y in k)if(k[Y].location>=0){const yt=mt[Y];let N=tt[Y];if(N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),yt===void 0||yt.attribute!==N||N&&yt.data!==N.data)return!0;O++}return c.attributesNum!==O||c.index!==ut}function b(C,G,J,ut){const mt={},tt=G.attributes;let O=0;const k=J.getAttributes();for(const Y in k)if(k[Y].location>=0){let yt=tt[Y];yt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const N={};N.attribute=yt,yt&&yt.data&&(N.data=yt.data),mt[Y]=N,O++}c.attributes=mt,c.attributesNum=O,c.index=ut}function A(){const C=c.newAttributes;for(let G=0,J=C.length;G<J;G++)C[G]=0}function y(C){g(C,0)}function g(C,G){const J=c.newAttributes,ut=c.enabledAttributes,mt=c.attributeDivisors;J[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),mt[C]!==G&&(o.vertexAttribDivisor(C,G),mt[C]=G)}function L(){const C=c.newAttributes,G=c.enabledAttributes;for(let J=0,ut=G.length;J<ut;J++)G[J]!==C[J]&&(o.disableVertexAttribArray(J),G[J]=0)}function U(C,G,J,ut,mt,tt,O){O===!0?o.vertexAttribIPointer(C,G,J,mt,tt):o.vertexAttribPointer(C,G,J,ut,mt,tt)}function w(C,G,J,ut){A();const mt=ut.attributes,tt=J.getAttributes(),O=G.defaultAttributeValues;for(const k in tt){const Y=tt[k];if(Y.location>=0){let xt=mt[k];if(xt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const yt=xt.normalized,N=xt.itemSize,V=e.get(xt);if(V===void 0)continue;const st=V.buffer,gt=V.type,At=V.bytesPerElement,$=gt===o.INT||gt===o.UNSIGNED_INT||xt.gpuType===Id;if(xt.isInterleavedBufferAttribute){const lt=xt.data,Tt=lt.stride,Ut=xt.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Y.locationSize;Pt++)g(Y.location+Pt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<Y.locationSize;Pt++)y(Y.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,st);for(let Pt=0;Pt<Y.locationSize;Pt++)U(Y.location+Pt,N/Y.locationSize,gt,yt,Tt*At,(Ut+N/Y.locationSize*Pt)*At,$)}else{if(xt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)g(Y.location+lt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let lt=0;lt<Y.locationSize;lt++)y(Y.location+lt);o.bindBuffer(o.ARRAY_BUFFER,st);for(let lt=0;lt<Y.locationSize;lt++)U(Y.location+lt,N/Y.locationSize,gt,yt,N*At,N/Y.locationSize*lt*At,$)}}else if(O!==void 0){const yt=O[k];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(Y.location,yt);break;case 3:o.vertexAttrib3fv(Y.location,yt);break;case 4:o.vertexAttrib4fv(Y.location,yt);break;default:o.vertexAttrib1fv(Y.location,yt)}}}}L()}function H(){W();for(const C in r){const G=r[C];for(const J in G){const ut=G[J];for(const mt in ut)S(ut[mt].object),delete ut[mt];delete G[J]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const J in G){const ut=G[J];for(const mt in ut)S(ut[mt].object),delete ut[mt];delete G[J]}delete r[C.id]}function P(C){for(const G in r){const J=r[G];if(J[C.id]===void 0)continue;const ut=J[C.id];for(const mt in ut)S(ut[mt].object),delete ut[mt];delete J[C.id]}}function W(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:y,disableUnusedAttributes:L}}function mT(o,e,i){let r;function l(p){r=p}function c(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,v){v!==0&&(o.drawArraysInstanced(r,p,S,v),i.update(S,r,v))}function d(p,S,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,v);let M=0;for(let b=0;b<v;b++)M+=S[b];i.update(M,r,1)}function m(p,S,v,x){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],S[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,x,0,v);let b=0;for(let A=0;A<v;A++)b+=S[A]*x[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function gT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==vi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Li&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==aa&&!W)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:H,maxSamples:F}}function _T(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new _r,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const M=v.length!==0||x||r!==0||l;return l=x,r=v.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=S(v,x,0)},this.setState=function(v,x,M){const b=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,g=o.get(v);if(!l||b===null||b.length===0||c&&!y)c?S(null):p();else{const L=c?0:r,U=L*4;let w=g.clippingState||null;m.value=w,w=S(b,x,U,M);for(let H=0;H!==U;++H)w[H]=i[H];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(v,x,M,b){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const g=M+A*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,w=M;U!==A;++U,w+=4)h.copy(v[U]).applyMatrix4(L,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function vT(o){let e=new WeakMap;function i(h,d){return d===td?h.mapping=Ls:d===ed&&(h.mapping=Ns),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===ed)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new xM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const As=4,x_=[.125,.215,.35,.446,.526,.582],Sr=20,Fh=new wM,S_=new me;let Hh=null,Gh=0,Vh=0,Xh=!1;const vr=(1+Math.sqrt(5))/2,Ts=1/vr,y_=[new j(-vr,Ts,0),new j(vr,Ts,0),new j(-Ts,0,vr),new j(Ts,0,vr),new j(0,vr,-Ts),new j(0,vr,Ts),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],xT=new j;class M_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=xT}=c;Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Vh),this._renderer.xr.enabled=Xh,e.scissorTest=!1,Uc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Yo,format:vi,colorSpace:Os,depthBuffer:!1},l=E_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ST(c)),this._blurMaterial=yT(c,e,i)}return l}_compileMaterial(e){const i=new ra(this._lodPlanes[0],e);this._renderer.compile(i,Fh)}_sceneToCubeUV(e,i,r,l,c){const m=new Gn(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,M=v.toneMapping;v.getClearColor(S_),v.toneMapping=Va,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new lv({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),y=new ra(new Ko,A);let g=!1;const L=e.background;L?L.isColor&&(A.color.copy(L),e.background=null,g=!0):(A.color.copy(S_),g=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[U]));const H=this._cubeSize;Uc(l,w*H,U>2?H:0,H,H),v.setRenderTarget(l),g&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=M,v.autoClear=x,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ls||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ra(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Uc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Fh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=y_[(l-c-1)%y_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new ra(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Sr-1),A=c/b,y=isFinite(c)?1+Math.floor(S*A):Sr;y>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sr}`);const g=[];let L=0;for(let P=0;P<Sr;++P){const W=P/A,D=Math.exp(-W*W/2);g.push(D),P===0?L+=D:P<y&&(L+=2*D)}for(let P=0;P<g.length;P++)g[P]=g[P]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const w=this._sizeLods[l],H=3*w*(l>U-As?l-U+As:0),F=4*(this._cubeSize-w);Uc(i,H,F,3*w,2*w),m.setRenderTarget(i),m.render(v,Fh)}}function ST(o){const e=[],i=[],r=[];let l=o;const c=o-As+1+x_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-As?m=x_[h-o+As-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,v=1+p,x=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,b=6,A=3,y=2,g=1,L=new Float32Array(A*b*M),U=new Float32Array(y*b*M),w=new Float32Array(g*b*M);for(let F=0;F<M;F++){const P=F%3*2/3-1,W=F>2?0:-1,D=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];L.set(D,A*b*F),U.set(x,y*b*F);const C=[F,F,F,F,F,F];w.set(C,g*b*F)}const H=new fi;H.setAttribute("position",new Si(L,A)),H.setAttribute("uv",new Si(U,y)),H.setAttribute("faceIndex",new Si(w,g)),e.push(H),l>As&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function E_(o,e,i){const r=new Tr(o,e,i);return r.texture.mapping=qc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Uc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function yT(o,e,i){const r=new Float32Array(Sr),l=new j(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function T_(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function b_(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Kd(){return`

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
	`}function MT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===td||m===ed,S=m===Ls||m===Ns;if(p||S){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new M_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new M_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function ET(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function TT(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function p(v){const x=[],M=v.index,b=v.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let U=0,w=L.length;U<w;U+=3){const H=L[U+0],F=L[U+1],P=L[U+2];x.push(H,F,F,P,P,H)}}else if(b!==void 0){const L=b.array;A=b.version;for(let U=0,w=L.length/3-1;U<w;U+=3){const H=U+0,F=U+1,P=U+2;x.push(H,F,F,P,P,H)}}else return;const y=new(iv(x)?uv:cv)(x,1);y.version=A;const g=c.get(v);g&&e.remove(g),c.set(v,y)}function S(v){const x=c.get(v);if(x){const M=v.index;M!==null&&x.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function bT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*h),i.update(M,r,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(r,M,c,x*h,b),i.update(M,r,b))}function S(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,b);let y=0;for(let g=0;g<b;g++)y+=M[g];i.update(y,r,1)}function v(x,M,b,A){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,A,0,b);let g=0;for(let L=0;L<b;L++)g+=M[L]*A[L];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function AT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function RT(o,e,i){const r=new WeakMap,l=new Xe;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let H=d.attributes.position.count*w,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*F*4*v),W=new av(P,H,F,v);W.type=aa,W.needsUpdate=!0;const D=w*4;for(let G=0;G<v;G++){const J=g[G],ut=L[G],mt=U[G],tt=H*F*4*G;for(let O=0;O<J.count;O++){const k=O*D;b===!0&&(l.fromBufferAttribute(J,O),P[tt+k+0]=l.x,P[tt+k+1]=l.y,P[tt+k+2]=l.z,P[tt+k+3]=0),A===!0&&(l.fromBufferAttribute(ut,O),P[tt+k+4]=l.x,P[tt+k+5]=l.y,P[tt+k+6]=l.z,P[tt+k+7]=0),y===!0&&(l.fromBufferAttribute(mt,O),P[tt+k+8]=l.x,P[tt+k+9]=l.y,P[tt+k+10]=l.z,P[tt+k+11]=mt.itemSize===4?l.w:1)}}x={count:v,texture:W,size:new he(H,F)},r.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function CT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,S=m.geometry,v=e.get(m,S);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Ev=new On,A_=new vv(1,1),Tv=new av,bv=new nM,Av=new dv,R_=[],C_=[],w_=new Float32Array(16),D_=new Float32Array(9),U_=new Float32Array(4);function Is(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=R_[l];if(c===void 0&&(c=new Float32Array(l),R_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Kc(o,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;U_.set(r),o.uniformMatrix2fv(this.addr,!1,U_),pn(i,r)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;D_.set(r),o.uniformMatrix3fv(this.addr,!1,D_),pn(i,r)}}function zT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;w_.set(r),o.uniformMatrix4fv(this.addr,!1,w_),pn(i,r)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function HT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function kT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(A_.compareFunction=nv,c=A_):c=Ev,i.setTexture2D(e||c,l)}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||bv,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Av,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Tv,l)}function jT(o){switch(o){case 5126:return wT;case 35664:return DT;case 35665:return UT;case 35666:return LT;case 35674:return NT;case 35675:return OT;case 35676:return zT;case 5124:case 35670:return PT;case 35667:case 35671:return BT;case 35668:case 35672:return IT;case 35669:case 35673:return FT;case 5125:return HT;case 36294:return GT;case 36295:return VT;case 36296:return XT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return YT}}function ZT(o,e){o.uniform1fv(this.addr,e)}function KT(o,e){const i=Is(e,this.size,2);o.uniform2fv(this.addr,i)}function QT(o,e){const i=Is(e,this.size,3);o.uniform3fv(this.addr,i)}function JT(o,e){const i=Is(e,this.size,4);o.uniform4fv(this.addr,i)}function $T(o,e){const i=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tb(o,e){const i=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eb(o,e){const i=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nb(o,e){o.uniform1iv(this.addr,e)}function ib(o,e){o.uniform2iv(this.addr,e)}function ab(o,e){o.uniform3iv(this.addr,e)}function rb(o,e){o.uniform4iv(this.addr,e)}function sb(o,e){o.uniform1uiv(this.addr,e)}function ob(o,e){o.uniform2uiv(this.addr,e)}function lb(o,e){o.uniform3uiv(this.addr,e)}function cb(o,e){o.uniform4uiv(this.addr,e)}function ub(o,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Ev,c[h])}function fb(o,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||bv,c[h])}function hb(o,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Av,c[h])}function db(o,e,i){const r=this.cache,l=e.length,c=Kc(i,l);dn(r,c)||(o.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Tv,c[h])}function pb(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return tb;case 35676:return eb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return ab;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return db}}class mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=jT(i.type)}}class gb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pb(i.type)}}class _b{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function L_(o,e){o.seq.push(e),o.map[e.id]=e}function vb(o,e,i){const r=o.name,l=r.length;for(kh.lastIndex=0;;){const c=kh.exec(r),h=kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){L_(i,p===void 0?new mb(d,o,e):new gb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new _b(d),L_(i,v)),i=v}}}class Bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);vb(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function N_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const xb=37297;let Sb=0;function yb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const O_=new fe;function Mb(o){we._getMatrix(O_,we.workingColorSpace,o);const e=`mat3( ${O_.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Hc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function z_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+yb(o.getShaderSource(e),d)}else return c}function Eb(o,e){const i=Mb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Tb(o,e){let i;switch(e){case wy:i="Linear";break;case Dy:i="Reinhard";break;case Uy:i="Cineon";break;case Ly:i="ACESFilmic";break;case Oy:i="AgX";break;case zy:i="Neutral";break;case Ny:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new j;function bb(){we.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function Rb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Cb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Go(o){return o!==""}function P_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(o){return o.replace(wb,Ub)}const Db=new Map;function Ub(o,e){let i=de[e];if(i===void 0){const r=Db.get(e);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Od(i)}const Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function I_(o){return o.replace(Lb,Nb)}function Nb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function F_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Ob(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ly?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function zb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ls:case Ns:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function Bb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case q_:e="ENVMAP_BLENDING_MULTIPLY";break;case Ry:e="ENVMAP_BLENDING_MIX";break;case Cy:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Fb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Ob(i),p=zb(i),S=Pb(i),v=Bb(i),x=Ib(i),M=Ab(i),b=Rb(c),A=l.createProgram();let y,g,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[F_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?de.tonemapping_pars_fragment:"",i.toneMapping!==Va?Tb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Eb("linearToOutputTexel",i.outputColorSpace),bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Od(h),h=P_(h,i),h=B_(h,i),d=Od(d),d=P_(d,i),d=B_(d,i),h=I_(h),d=I_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=L+y+h,w=L+g+d,H=N_(l,l.VERTEX_SHADER,U),F=N_(l,l.FRAGMENT_SHADER,w);l.attachShader(A,H),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(G){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",ut=l.getShaderInfoLog(H)||"",mt=l.getShaderInfoLog(F)||"",tt=J.trim(),O=ut.trim(),k=mt.trim();let Y=!0,xt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,F);else{const yt=z_(l,H,"vertex"),N=z_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+tt+`
`+yt+`
`+N)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(O===""||k==="")&&(xt=!1);xt&&(G.diagnostics={runnable:Y,programLog:tt,vertexShader:{log:O,prefix:y},fragmentShader:{log:k,prefix:g}})}l.deleteShader(H),l.deleteShader(F),W=new Bc(l,A),D=Cb(l,A)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,xb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Sb++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=F,this}let Hb=0;class Gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Vb(e),i.set(e,r)),r}}class Vb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function Xb(o,e,i,r,l,c,h){const d=new sv,m=new Gb,p=new Set,S=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,J,ut){const mt=J.fog,tt=ut.geometry,O=D.isMeshStandardMaterial?J.environment:null,k=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),Y=k&&k.mapping===qc?k.image.height:null,xt=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const yt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,N=yt!==void 0?yt.length:0;let V=0;tt.morphAttributes.position!==void 0&&(V=1),tt.morphAttributes.normal!==void 0&&(V=2),tt.morphAttributes.color!==void 0&&(V=3);let st,gt,At,$;if(xt){const be=Ci[xt];st=be.vertexShader,gt=be.fragmentShader}else st=D.vertexShader,gt=D.fragmentShader,m.update(D),At=m.getVertexShaderID(D),$=m.getFragmentShaderID(D);const lt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Ut=ut.isInstancedMesh===!0,Pt=ut.isBatchedMesh===!0,ae=!!D.map,De=!!D.matcap,B=!!k,ge=!!D.aoMap,ne=!!D.lightMap,te=!!D.bumpMap,kt=!!D.normalMap,Le=!!D.displacementMap,Wt=!!D.emissiveMap,se=!!D.metalnessMap,Je=!!D.roughnessMap,Qe=D.anisotropy>0,z=D.clearcoat>0,E=D.dispersion>0,it=D.iridescence>0,dt=D.sheen>0,Mt=D.transmission>0,ft=Qe&&!!D.anisotropyMap,Zt=z&&!!D.clearcoatMap,Ct=z&&!!D.clearcoatNormalMap,Yt=z&&!!D.clearcoatRoughnessMap,jt=it&&!!D.iridescenceMap,bt=it&&!!D.iridescenceThicknessMap,wt=dt&&!!D.sheenColorMap,Kt=dt&&!!D.sheenRoughnessMap,It=!!D.specularMap,Nt=!!D.specularColorMap,le=!!D.specularIntensityMap,q=Mt&&!!D.transmissionMap,Rt=Mt&&!!D.thicknessMap,Dt=!!D.gradientMap,Ft=!!D.alphaMap,Et=D.alphaTest>0,vt=!!D.alphaHash,Ht=!!D.extensions;let re=Va;D.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(re=o.toneMapping);const ze={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:st,fragmentShader:gt,defines:D.defines,customVertexShaderID:At,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&ut._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ut.instanceColor!==null,instancingMorph:Ut&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Os,alphaToCoverage:!!D.alphaToCoverage,map:ae,matcap:De,envMap:B,envMapMode:B&&k.mapping,envMapCubeUVHeight:Y,aoMap:ge,lightMap:ne,bumpMap:te,normalMap:kt,displacementMap:x&&Le,emissiveMap:Wt,normalMapObjectSpace:kt&&D.normalMapType===Hy,normalMapTangentSpace:kt&&D.normalMapType===Fy,metalnessMap:se,roughnessMap:Je,anisotropy:Qe,anisotropyMap:ft,clearcoat:z,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:it,iridescenceMap:jt,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:wt,sheenRoughnessMap:Kt,specularMap:It,specularColorMap:Nt,specularIntensityMap:le,transmission:Mt,transmissionMap:q,thicknessMap:Rt,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:vt,combine:D.combine,mapUv:ae&&A(D.map.channel),aoMapUv:ge&&A(D.aoMap.channel),lightMapUv:ne&&A(D.lightMap.channel),bumpMapUv:te&&A(D.bumpMap.channel),normalMapUv:kt&&A(D.normalMap.channel),displacementMapUv:Le&&A(D.displacementMap.channel),emissiveMapUv:Wt&&A(D.emissiveMap.channel),metalnessMapUv:se&&A(D.metalnessMap.channel),roughnessMapUv:Je&&A(D.roughnessMap.channel),anisotropyMapUv:ft&&A(D.anisotropyMap.channel),clearcoatMapUv:Zt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&A(D.sheenRoughnessMap.channel),specularMapUv:It&&A(D.specularMap.channel),specularColorMapUv:Nt&&A(D.specularColorMap.channel),specularIntensityMapUv:le&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Rt&&A(D.thicknessMap.channel),alphaMapUv:Ft&&A(D.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(kt||Qe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!tt.attributes.uv&&(ae||Ft),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:ut.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:V,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:ae&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Wt&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ia,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ht&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&D.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(L(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let G;if(C){const J=Ci[C];G=mM.clone(J.uniforms)}else G=D.uniforms;return G}function H(D,C){let G;for(let J=0,ut=S.length;J<ut;J++){const mt=S[J];if(mt.cacheKey===C){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new Fb(o,C,D,c),S.push(G)),G}function F(D){if(--D.usedTimes===0){const C=S.indexOf(D);S[C]=S[S.length-1],S.pop(),D.destroy()}}function P(D){m.remove(D)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:w,acquireProgram:H,releaseProgram:F,releaseShaderCache:P,programs:S,dispose:W}}function kb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Wb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function H_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function G_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,M,b,A,y){let g=o[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:M,groupOrder:b,renderOrder:v.renderOrder,z:A,group:y},o[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=M,g.groupOrder=b,g.renderOrder=v.renderOrder,g.z=A,g.group=y),e++,g}function d(v,x,M,b,A,y){const g=h(v,x,M,b,A,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(v,x,M,b,A,y){const g=h(v,x,M,b,A,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(v,x){i.length>1&&i.sort(v||Wb),r.length>1&&r.sort(x||H_),l.length>1&&l.sort(x||H_)}function S(){for(let v=e,x=o.length;v<x;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function qb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new G_,o.set(r,[h])):l>=c.length?(h=new G_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Yb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new me};break;case"SpotLight":i={position:new j,direction:new j,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function jb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Zb=0;function Kb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Qb(o){const e=new Yb,i=jb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const l=new j,c=new Ke,h=new Ke;function d(p){let S=0,v=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,A=0,y=0,g=0,L=0,U=0,w=0,H=0,F=0,P=0;p.sort(Kb);for(let D=0,C=p.length;D<C;D++){const G=p[D],J=G.color,ut=G.intensity,mt=G.distance,tt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=J.r*ut,v+=J.g*ut,x+=J.b*ut;else if(G.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(G.sh.coefficients[O],ut);P++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,Y=i.get(G);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=tt,r.directionalShadowMatrix[M]=G.shadow.matrix,L++}r.directional[M]=O,M++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(J).multiplyScalar(ut),O.distance=mt,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,r.spot[A]=O;const k=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,k.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=k.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=tt,w++}A++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(J).multiplyScalar(ut),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=O,y++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const k=G.shadow,Y=i.get(G);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=tt,r.pointShadowMatrix[b]=G.shadow.matrix,U++}r.point[b]=O,b++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(ut),O.groundColor.copy(G.groundColor).multiplyScalar(ut),r.hemi[g]=O,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==M||W.pointLength!==b||W.spotLength!==A||W.rectAreaLength!==y||W.hemiLength!==g||W.numDirectionalShadows!==L||W.numPointShadows!==U||W.numSpotShadows!==w||W.numSpotMaps!==H||W.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=P,W.directionalLength=M,W.pointLength=b,W.spotLength=A,W.rectAreaLength=y,W.hemiLength=g,W.numDirectionalShadows=L,W.numPointShadows=U,W.numSpotShadows=w,W.numSpotMaps=H,W.numLightProbes=P,r.version=Zb++)}function m(p,S){let v=0,x=0,M=0,b=0,A=0;const y=S.matrixWorldInverse;for(let g=0,L=p.length;g<L;g++){const U=p[g];if(U.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),v++}else if(U.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function V_(o){const e=new Qb(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function c(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Jb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new V_(o),e.set(l,[d])):c>=h.length?(d=new V_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`;function eA(o,e,i){let r=new qd;const l=new he,c=new he,h=new Xe,d=new bM({depthPacking:Iy}),m=new AM,p={},S=i.maxTextureSize,v={[ka]:Vn,[Vn]:ka,[ia]:ia},x=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:$b,fragmentShader:tA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new fi;b.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ra(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_;let g=this.type;this.render=function(F,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),J=o.state;J.setBlending(Ga),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ut=g!==na&&this.type===na,mt=g===na&&this.type!==na;for(let tt=0,O=F.length;tt<O;tt++){const k=F[tt],Y=k.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||ut===!0||mt===!0){const N=this.type!==na?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Tr(l.x,l.y,N),Y.map.texture.name=k.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const yt=Y.getViewportCount();for(let N=0;N<yt;N++){const V=Y.getViewport(N);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),J.viewport(h),Y.updateMatrices(k,N),r=Y.getFrustum(),w(P,W,Y.camera,k,this.type)}Y.isPointLightShadow!==!0&&this.type===na&&L(Y,W),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,G)};function L(F,P){const W=e.update(A);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Tr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(P,null,W,x,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(P,null,W,M,A,null)}function U(F,P,W,D){let C=null;const G=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const J=C.uuid,ut=P.uuid;let mt=p[J];mt===void 0&&(mt={},p[J]=mt);let tt=mt[ut];tt===void 0&&(tt=C.clone(),mt[ut]=tt,P.addEventListener("dispose",H)),C=tt}if(C.visible=P.visible,C.wireframe=P.wireframe,D===na?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:v[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=o.properties.get(C);J.light=W}return C}function w(F,P,W,D,C){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===na)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const ut=e.update(F),mt=F.material;if(Array.isArray(mt)){const tt=ut.groups;for(let O=0,k=tt.length;O<k;O++){const Y=tt[O],xt=mt[Y.materialIndex];if(xt&&xt.visible){const yt=U(F,xt,D,C);F.onBeforeShadow(o,F,P,W,ut,yt,Y),o.renderBufferDirect(W,null,ut,yt,F,Y),F.onAfterShadow(o,F,P,W,ut,yt,Y)}}}else if(mt.visible){const tt=U(F,mt,D,C);F.onBeforeShadow(o,F,P,W,ut,tt,null),o.renderBufferDirect(W,null,ut,tt,F,null),F.onAfterShadow(o,F,P,W,ut,tt,null)}}const J=F.children;for(let ut=0,mt=J.length;ut<mt;ut++)w(J[ut],P,W,D,C)}function H(F){F.target.removeEventListener("dispose",H);for(const W in p){const D=p[W],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const nA={[Yh]:jh,[Zh]:Jh,[Kh]:$h,[Us]:Qh,[jh]:Yh,[Jh]:Zh,[$h]:Kh,[Qh]:Us};function iA(o,e){function i(){let q=!1;const Rt=new Xe;let Dt=null;const Ft=new Xe(0,0,0,0);return{setMask:function(Et){Dt!==Et&&!q&&(o.colorMask(Et,Et,Et,Et),Dt=Et)},setLocked:function(Et){q=Et},setClear:function(Et,vt,Ht,re,ze){ze===!0&&(Et*=re,vt*=re,Ht*=re),Rt.set(Et,vt,Ht,re),Ft.equals(Rt)===!1&&(o.clearColor(Et,vt,Ht,re),Ft.copy(Rt))},reset:function(){q=!1,Dt=null,Ft.set(-1,0,0,0)}}}function r(){let q=!1,Rt=!1,Dt=null,Ft=null,Et=null;return{setReversed:function(vt){if(Rt!==vt){const Ht=e.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Rt=vt;const re=Et;Et=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(vt){vt?lt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(vt){Dt!==vt&&!q&&(o.depthMask(vt),Dt=vt)},setFunc:function(vt){if(Rt&&(vt=nA[vt]),Ft!==vt){switch(vt){case Yh:o.depthFunc(o.NEVER);break;case jh:o.depthFunc(o.ALWAYS);break;case Zh:o.depthFunc(o.LESS);break;case Us:o.depthFunc(o.LEQUAL);break;case Kh:o.depthFunc(o.EQUAL);break;case Qh:o.depthFunc(o.GEQUAL);break;case Jh:o.depthFunc(o.GREATER);break;case $h:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=vt}},setLocked:function(vt){q=vt},setClear:function(vt){Et!==vt&&(Rt&&(vt=1-vt),o.clearDepth(vt),Et=vt)},reset:function(){q=!1,Dt=null,Ft=null,Et=null,Rt=!1}}}function l(){let q=!1,Rt=null,Dt=null,Ft=null,Et=null,vt=null,Ht=null,re=null,ze=null;return{setTest:function(be){q||(be?lt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(be){Rt!==be&&!q&&(o.stencilMask(be),Rt=be)},setFunc:function(be,wn,$n){(Dt!==be||Ft!==wn||Et!==$n)&&(o.stencilFunc(be,wn,$n),Dt=be,Ft=wn,Et=$n)},setOp:function(be,wn,$n){(vt!==be||Ht!==wn||re!==$n)&&(o.stencilOp(be,wn,$n),vt=be,Ht=wn,re=$n)},setLocked:function(be){q=be},setClear:function(be){ze!==be&&(o.clearStencil(be),ze=be)},reset:function(){q=!1,Rt=null,Dt=null,Ft=null,Et=null,vt=null,Ht=null,re=null,ze=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},x=new WeakMap,M=[],b=null,A=!1,y=null,g=null,L=null,U=null,w=null,H=null,F=null,P=new me(0,0,0),W=0,D=!1,C=null,G=null,J=null,ut=null,mt=null;const tt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=k>=1):Y.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=k>=2);let xt=null,yt={};const N=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),st=new Xe().fromArray(N),gt=new Xe().fromArray(V);function At(q,Rt,Dt,Ft){const Et=new Uint8Array(4),vt=o.createTexture();o.bindTexture(q,vt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Dt;Ht++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Rt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return vt}const $={};$[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(Us),te(!1),kt(X0),lt(o.CULL_FACE),ge(Ga);function lt(q){S[q]!==!0&&(o.enable(q),S[q]=!0)}function Tt(q){S[q]!==!1&&(o.disable(q),S[q]=!1)}function Ut(q,Rt){return v[q]!==Rt?(o.bindFramebuffer(q,Rt),v[q]=Rt,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Rt),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Pt(q,Rt){let Dt=M,Ft=!1;if(q){Dt=x.get(Rt),Dt===void 0&&(Dt=[],x.set(Rt,Dt));const Et=q.textures;if(Dt.length!==Et.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ht=Et.length;vt<Ht;vt++)Dt[vt]=o.COLOR_ATTACHMENT0+vt;Dt.length=Et.length,Ft=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Dt)}function ae(q){return b!==q?(o.useProgram(q),b=q,!0):!1}const De={[xr]:o.FUNC_ADD,[uy]:o.FUNC_SUBTRACT,[fy]:o.FUNC_REVERSE_SUBTRACT};De[hy]=o.MIN,De[dy]=o.MAX;const B={[py]:o.ZERO,[my]:o.ONE,[gy]:o.SRC_COLOR,[Wh]:o.SRC_ALPHA,[My]:o.SRC_ALPHA_SATURATE,[Sy]:o.DST_COLOR,[vy]:o.DST_ALPHA,[_y]:o.ONE_MINUS_SRC_COLOR,[qh]:o.ONE_MINUS_SRC_ALPHA,[yy]:o.ONE_MINUS_DST_COLOR,[xy]:o.ONE_MINUS_DST_ALPHA,[Ey]:o.CONSTANT_COLOR,[Ty]:o.ONE_MINUS_CONSTANT_COLOR,[by]:o.CONSTANT_ALPHA,[Ay]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(q,Rt,Dt,Ft,Et,vt,Ht,re,ze,be){if(q===Ga){A===!0&&(Tt(o.BLEND),A=!1);return}if(A===!1&&(lt(o.BLEND),A=!0),q!==cy){if(q!==y||be!==D){if((g!==xr||w!==xr)&&(o.blendEquation(o.FUNC_ADD),g=xr,w=xr),be)switch(q){case Rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ds:o.blendFunc(o.ONE,o.ONE);break;case k0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case W0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case k0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}L=null,U=null,H=null,F=null,P.set(0,0,0),W=0,y=q,D=be}return}Et=Et||Rt,vt=vt||Dt,Ht=Ht||Ft,(Rt!==g||Et!==w)&&(o.blendEquationSeparate(De[Rt],De[Et]),g=Rt,w=Et),(Dt!==L||Ft!==U||vt!==H||Ht!==F)&&(o.blendFuncSeparate(B[Dt],B[Ft],B[vt],B[Ht]),L=Dt,U=Ft,H=vt,F=Ht),(re.equals(P)===!1||ze!==W)&&(o.blendColor(re.r,re.g,re.b,ze),P.copy(re),W=ze),y=q,D=!1}function ne(q,Rt){q.side===ia?Tt(o.CULL_FACE):lt(o.CULL_FACE);let Dt=q.side===Vn;Rt&&(Dt=!Dt),te(Dt),q.blending===Rs&&q.transparent===!1?ge(Ga):ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Ft=q.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Wt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(q){C!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),C=q)}function kt(q){q!==sy?(lt(o.CULL_FACE),q!==G&&(q===X0?o.cullFace(o.BACK):q===oy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=q}function Le(q){q!==J&&(O&&o.lineWidth(q),J=q)}function Wt(q,Rt,Dt){q?(lt(o.POLYGON_OFFSET_FILL),(ut!==Rt||mt!==Dt)&&(o.polygonOffset(Rt,Dt),ut=Rt,mt=Dt)):Tt(o.POLYGON_OFFSET_FILL)}function se(q){q?lt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Je(q){q===void 0&&(q=o.TEXTURE0+tt-1),xt!==q&&(o.activeTexture(q),xt=q)}function Qe(q,Rt,Dt){Dt===void 0&&(xt===null?Dt=o.TEXTURE0+tt-1:Dt=xt);let Ft=yt[Dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},yt[Dt]=Ft),(Ft.type!==q||Ft.texture!==Rt)&&(xt!==Dt&&(o.activeTexture(Dt),xt=Dt),o.bindTexture(q,Rt||$[q]),Ft.type=q,Ft.texture=Rt)}function z(){const q=yt[xt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(q){st.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),st.copy(q))}function Kt(q){gt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),gt.copy(q))}function It(q,Rt){let Dt=p.get(Rt);Dt===void 0&&(Dt=new WeakMap,p.set(Rt,Dt));let Ft=Dt.get(q);Ft===void 0&&(Ft=o.getUniformBlockIndex(Rt,q.name),Dt.set(q,Ft))}function Nt(q,Rt){const Ft=p.get(Rt).get(q);m.get(Rt)!==Ft&&(o.uniformBlockBinding(Rt,Ft,q.__bindingPointIndex),m.set(Rt,Ft))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},xt=null,yt={},v={},x=new WeakMap,M=[],b=null,A=!1,y=null,g=null,L=null,U=null,w=null,H=null,F=null,P=new me(0,0,0),W=0,D=!1,C=null,G=null,J=null,ut=null,mt=null,st.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Tt,bindFramebuffer:Ut,drawBuffers:Pt,useProgram:ae,setBlending:ge,setMaterial:ne,setFlipSided:te,setCullFace:kt,setLineWidth:Le,setPolygonOffset:Wt,setScissorTest:se,activeTexture:Je,bindTexture:Qe,unbindTexture:z,compressedTexImage2D:E,compressedTexImage3D:it,texImage2D:jt,texImage3D:bt,updateUBOMapping:It,uniformBlockBinding:Nt,texStorage2D:Ct,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:Mt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:wt,viewport:Kt,reset:le}}function aA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,S=new WeakMap;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return M?new OffscreenCanvas(z,E):Vc("canvas")}function A(z,E,it){let dt=1;const Mt=Qe(z);if((Mt.width>it||Mt.height>it)&&(dt=it/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ft=Math.floor(dt*Mt.width),Zt=Math.floor(dt*Mt.height);v===void 0&&(v=b(ft,Zt));const Ct=E?b(ft,Zt):v;return Ct.width=ft,Ct.height=Zt,Ct.getContext("2d").drawImage(z,0,0,ft,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+Zt+")."),Ct}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),z;return z}function y(z){return z.generateMipmaps}function g(z){o.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,E,it,dt,Mt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ft=E;if(E===o.RED&&(it===o.FLOAT&&(ft=o.R32F),it===o.HALF_FLOAT&&(ft=o.R16F),it===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(ft=o.R8UI),it===o.UNSIGNED_SHORT&&(ft=o.R16UI),it===o.UNSIGNED_INT&&(ft=o.R32UI),it===o.BYTE&&(ft=o.R8I),it===o.SHORT&&(ft=o.R16I),it===o.INT&&(ft=o.R32I)),E===o.RG&&(it===o.FLOAT&&(ft=o.RG32F),it===o.HALF_FLOAT&&(ft=o.RG16F),it===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(ft=o.RG8UI),it===o.UNSIGNED_SHORT&&(ft=o.RG16UI),it===o.UNSIGNED_INT&&(ft=o.RG32UI),it===o.BYTE&&(ft=o.RG8I),it===o.SHORT&&(ft=o.RG16I),it===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),it===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),it===o.UNSIGNED_INT&&(ft=o.RGB32UI),it===o.BYTE&&(ft=o.RGB8I),it===o.SHORT&&(ft=o.RGB16I),it===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),it===o.UNSIGNED_INT&&(ft=o.RGBA32UI),it===o.BYTE&&(ft=o.RGBA8I),it===o.SHORT&&(ft=o.RGBA16I),it===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=Mt?Hc:we.getTransfer(dt);it===o.FLOAT&&(ft=o.RGBA32F),it===o.HALF_FLOAT&&(ft=o.RGBA16F),it===o.UNSIGNED_BYTE&&(ft=Zt===Ge?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function w(z,E){let it;return z?E===null||E===Er||E===Xo?it=o.DEPTH24_STENCIL8:E===aa?it=o.DEPTH32F_STENCIL8:E===Vo&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Er||E===Xo?it=o.DEPTH_COMPONENT24:E===aa?it=o.DEPTH_COMPONENT32F:E===Vo&&(it=o.DEPTH_COMPONENT16),it}function H(z,E){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==xi&&z.minFilter!==Di?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function F(z){const E=z.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&S.delete(E)}function P(z){const E=z.target;E.removeEventListener("dispose",P),C(E)}function W(z){const E=r.get(z);if(E.__webglInit===void 0)return;const it=z.source,dt=x.get(it);if(dt){const Mt=dt[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(z),Object.keys(dt).length===0&&x.delete(it)}r.remove(z)}function D(z){const E=r.get(z);o.deleteTexture(E.__webglTexture);const it=z.source,dt=x.get(it);delete dt[E.__cacheKey],h.memory.textures--}function C(z){const E=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let Mt=0;Mt<E.__webglFramebuffer[dt].length;Mt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][Mt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const it=z.textures;for(let dt=0,Mt=it.length;dt<Mt;dt++){const ft=r.get(it[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(it[dt])}r.remove(z)}let G=0;function J(){G=0}function ut(){const z=G;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),G+=1,z}function mt(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function tt(z,E){const it=r.get(z);if(z.isVideoTexture&&se(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&it.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(it,z,E);return}}else z.isExternalTexture&&(it.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+E)}function O(z,E){const it=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){$(it,z,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+E)}function k(z,E){const it=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&it.__version!==z.version){$(it,z,E);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+E)}function Y(z,E){const it=r.get(z);if(z.version>0&&it.__version!==z.version){lt(it,z,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+E)}const xt={[nd]:o.REPEAT,[yr]:o.CLAMP_TO_EDGE,[id]:o.MIRRORED_REPEAT},yt={[xi]:o.NEAREST,[Py]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Di]:o.LINEAR,[uh]:o.LINEAR_MIPMAP_NEAREST,[Mr]:o.LINEAR_MIPMAP_LINEAR},N={[Gy]:o.NEVER,[Yy]:o.ALWAYS,[Vy]:o.LESS,[nv]:o.LEQUAL,[Xy]:o.EQUAL,[qy]:o.GEQUAL,[ky]:o.GREATER,[Wy]:o.NOTEQUAL};function V(z,E){if(E.type===aa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Di||E.magFilter===uh||E.magFilter===oc||E.magFilter===Mr||E.minFilter===Di||E.minFilter===uh||E.minFilter===oc||E.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,xt[E.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,yt[E.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xi||E.minFilter!==oc&&E.minFilter!==Mr||E.type===aa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function st(z,E){let it=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",F));const dt=E.source;let Mt=x.get(dt);Mt===void 0&&(Mt={},x.set(dt,Mt));const ft=mt(E);if(ft!==z.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),Mt[ft].usedTimes++;const Zt=Mt[z.__cacheKey];Zt!==void 0&&(Mt[z.__cacheKey].usedTimes--,Zt.usedTimes===0&&D(E)),z.__cacheKey=ft,z.__webglTexture=Mt[ft].texture}return it}function gt(z,E,it){return Math.floor(Math.floor(z/it)/E)}function At(z,E,it,dt){const ft=z.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,it,dt,E.data);else{ft.sort((bt,wt)=>bt.start-wt.start);let Zt=0;for(let bt=1;bt<ft.length;bt++){const wt=ft[Zt],Kt=ft[bt],It=wt.start+wt.count,Nt=gt(Kt.start,E.width,4),le=gt(wt.start,E.width,4);Kt.start<=It+1&&Nt===le&&gt(Kt.start+Kt.count-1,E.width,4)===Nt?wt.count=Math.max(wt.count,Kt.start+Kt.count-wt.start):(++Zt,ft[Zt]=Kt)}ft.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let bt=0,wt=ft.length;bt<wt;bt++){const Kt=ft[bt],It=Math.floor(Kt.start/4),Nt=Math.ceil(Kt.count/4),le=It%E.width,q=Math.floor(It/E.width),Rt=Nt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,le,q,Rt,Dt,it,dt,E.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function $(z,E,it){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const Mt=st(z,E),ft=E.source;i.bindTexture(dt,z.__webglTexture,o.TEXTURE0+it);const Zt=r.get(ft);if(ft.version!==Zt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+it);const Ct=we.getPrimaries(we.workingColorSpace),Yt=E.colorSpace===Ia?null:we.getPrimaries(E.colorSpace),jt=E.colorSpace===Ia||Ct===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let bt=A(E.image,!1,l.maxTextureSize);bt=Je(E,bt);const wt=c.convert(E.format,E.colorSpace),Kt=c.convert(E.type);let It=U(E.internalFormat,wt,Kt,E.colorSpace,E.isVideoTexture);V(dt,E);let Nt;const le=E.mipmaps,q=E.isVideoTexture!==!0,Rt=Zt.__version===void 0||Mt===!0,Dt=ft.dataReady,Ft=H(E,bt);if(E.isDepthTexture)It=w(E.format===Wo,E.type),Rt&&(q?i.texStorage2D(o.TEXTURE_2D,1,It,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,It,bt.width,bt.height,0,wt,Kt,null));else if(E.isDataTexture)if(le.length>0){q&&Rt&&i.texStorage2D(o.TEXTURE_2D,Ft,It,le[0].width,le[0].height);for(let Et=0,vt=le.length;Et<vt;Et++)Nt=le[Et],q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,wt,Kt,Nt.data):i.texImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,wt,Kt,Nt.data);E.generateMipmaps=!1}else q?(Rt&&i.texStorage2D(o.TEXTURE_2D,Ft,It,bt.width,bt.height),Dt&&At(E,bt,wt,Kt)):i.texImage2D(o.TEXTURE_2D,0,It,bt.width,bt.height,0,wt,Kt,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,It,le[0].width,le[0].height,bt.depth);for(let Et=0,vt=le.length;Et<vt;Et++)if(Nt=le[Et],E.format!==vi)if(wt!==null)if(q){if(Dt)if(E.layerUpdates.size>0){const Ht=v_(Nt.width,Nt.height,E.format,E.type);for(const re of E.layerUpdates){const ze=Nt.data.subarray(re*Ht/Nt.data.BYTES_PER_ELEMENT,(re+1)*Ht/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,re,Nt.width,Nt.height,1,wt,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,bt.depth,wt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,It,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,bt.depth,wt,Kt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,It,Nt.width,Nt.height,bt.depth,0,wt,Kt,Nt.data)}else{q&&Rt&&i.texStorage2D(o.TEXTURE_2D,Ft,It,le[0].width,le[0].height);for(let Et=0,vt=le.length;Et<vt;Et++)Nt=le[Et],E.format!==vi?wt!==null?q?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,wt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,wt,Kt,Nt.data):i.texImage2D(o.TEXTURE_2D,Et,It,Nt.width,Nt.height,0,wt,Kt,Nt.data)}else if(E.isDataArrayTexture)if(q){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,It,bt.width,bt.height,bt.depth),Dt)if(E.layerUpdates.size>0){const Et=v_(bt.width,bt.height,E.format,E.type);for(const vt of E.layerUpdates){const Ht=bt.data.subarray(vt*Et/bt.data.BYTES_PER_ELEMENT,(vt+1)*Et/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,bt.width,bt.height,1,wt,Kt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,wt,Kt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,bt.width,bt.height,bt.depth,0,wt,Kt,bt.data);else if(E.isData3DTexture)q?(Rt&&i.texStorage3D(o.TEXTURE_3D,Ft,It,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,wt,Kt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,It,bt.width,bt.height,bt.depth,0,wt,Kt,bt.data);else if(E.isFramebufferTexture){if(Rt)if(q)i.texStorage2D(o.TEXTURE_2D,Ft,It,bt.width,bt.height);else{let Et=bt.width,vt=bt.height;for(let Ht=0;Ht<Ft;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,It,Et,vt,0,wt,Kt,null),Et>>=1,vt>>=1}}else if(le.length>0){if(q&&Rt){const Et=Qe(le[0]);i.texStorage2D(o.TEXTURE_2D,Ft,It,Et.width,Et.height)}for(let Et=0,vt=le.length;Et<vt;Et++)Nt=le[Et],q?Dt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,wt,Kt,Nt):i.texImage2D(o.TEXTURE_2D,Et,It,wt,Kt,Nt);E.generateMipmaps=!1}else if(q){if(Rt){const Et=Qe(bt);i.texStorage2D(o.TEXTURE_2D,Ft,It,Et.width,Et.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Kt,bt)}else i.texImage2D(o.TEXTURE_2D,0,It,wt,Kt,bt);y(E)&&g(dt),Zt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function lt(z,E,it){if(E.image.length!==6)return;const dt=st(z,E),Mt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+it);const ft=r.get(Mt);if(Mt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+it);const Zt=we.getPrimaries(we.workingColorSpace),Ct=E.colorSpace===Ia?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ia||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const jt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let vt=0;vt<6;vt++)!jt&&!bt?wt[vt]=A(E.image[vt],!0,l.maxCubemapSize):wt[vt]=bt?E.image[vt].image:E.image[vt],wt[vt]=Je(E,wt[vt]);const Kt=wt[0],It=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type),le=U(E.internalFormat,It,Nt,E.colorSpace),q=E.isVideoTexture!==!0,Rt=ft.__version===void 0||dt===!0,Dt=Mt.dataReady;let Ft=H(E,Kt);V(o.TEXTURE_CUBE_MAP,E);let Et;if(jt){q&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,Kt.width,Kt.height);for(let vt=0;vt<6;vt++){Et=wt[vt].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){const re=Et[Ht];E.format!==vi?It!==null?q?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,re.width,re.height,It,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,re.width,re.height,It,Nt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,le,re.width,re.height,0,It,Nt,re.data)}}}else{if(Et=E.mipmaps,q&&Rt){Et.length>0&&Ft++;const vt=Qe(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(bt){q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,wt[vt].width,wt[vt].height,It,Nt,wt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,wt[vt].width,wt[vt].height,0,It,Nt,wt[vt].data);for(let Ht=0;Ht<Et.length;Ht++){const ze=Et[Ht].image[vt].image;q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,ze.width,ze.height,It,Nt,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,le,ze.width,ze.height,0,It,Nt,ze.data)}}else{q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It,Nt,wt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,It,Nt,wt[vt]);for(let Ht=0;Ht<Et.length;Ht++){const re=Et[Ht];q?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,It,Nt,re.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,le,It,Nt,re.image[vt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),ft.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Tt(z,E,it,dt,Mt,ft){const Zt=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Yt=U(it.internalFormat,Zt,Ct,it.colorSpace),jt=r.get(E),bt=r.get(it);if(bt.__renderTarget=E,!jt.__hasExternalTextures){const wt=Math.max(1,E.width>>ft),Kt=Math.max(1,E.height>>ft);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ft,Yt,wt,Kt,E.depth,0,Zt,Ct,null):i.texImage2D(Mt,ft,Yt,wt,Kt,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,0,Le(E)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Mt,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(z,E,it){if(o.bindRenderbuffer(o.RENDERBUFFER,z),E.depthBuffer){const dt=E.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,ft=w(E.stencilBuffer,Mt),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Le(E);Wt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ft,E.width,E.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,z)}else{const dt=E.textures;for(let Mt=0;Mt<dt.length;Mt++){const ft=dt[Mt],Zt=c.convert(ft.format,ft.colorSpace),Ct=c.convert(ft.type),Yt=U(ft.internalFormat,Zt,Ct,ft.colorSpace),jt=Le(E);it&&Wt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Yt,E.width,E.height):Wt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(z,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),tt(E.depthTexture,0);const Mt=dt.__webglTexture,ft=Le(E);if(E.depthTexture.format===ko)Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(E.depthTexture.format===Wo)Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ae(z){const E=r.get(z),it=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=dt}if(z.depthTexture&&!E.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?Pt(E.__webglFramebuffer[0],z):Pt(E.__webglFramebuffer,z)}else if(it){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ut(E.__webglDepthbuffer[dt],z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ft)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ut(E.__webglDepthbuffer,z,!1);else{const Mt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function De(z,E,it){const dt=r.get(z);E!==void 0&&Tt(dt.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&ae(z)}function B(z){const E=z.texture,it=r.get(z),dt=r.get(E);z.addEventListener("dispose",P);const Mt=z.textures,ft=z.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ft){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)it.__webglFramebuffer[Ct][Yt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,Yt=Mt.length;Ct<Yt;Ct++){const jt=r.get(Mt[Ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(z.samples>0&&Wt(z)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Mt.length;Ct++){const Yt=Mt[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const jt=c.convert(Yt.format,Yt.colorSpace),bt=c.convert(Yt.type),wt=U(Yt.internalFormat,jt,bt,Yt.colorSpace,z.isXRRenderTarget===!0),Kt=Le(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,wt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(it.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),V(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Tt(it.__webglFramebuffer[Ct][Yt],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Yt);else Tt(it.__webglFramebuffer[Ct],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,Yt=Mt.length;Ct<Yt;Ct++){const jt=Mt[Ct],bt=r.get(jt);let wt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,bt.__webglTexture),V(wt,jt),Tt(it.__webglFramebuffer,z,jt,o.COLOR_ATTACHMENT0+Ct,wt,0),y(jt)&&g(wt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ct=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),V(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Tt(it.__webglFramebuffer[Yt],z,E,o.COLOR_ATTACHMENT0,Ct,Yt);else Tt(it.__webglFramebuffer,z,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&g(Ct),i.unbindTexture()}z.depthBuffer&&ae(z)}function ge(z){const E=z.textures;for(let it=0,dt=E.length;it<dt;it++){const Mt=E[it];if(y(Mt)){const ft=L(z),Zt=r.get(Mt).__webglTexture;i.bindTexture(ft,Zt),g(ft),i.unbindTexture()}}}const ne=[],te=[];function kt(z){if(z.samples>0){if(Wt(z)===!1){const E=z.textures,it=z.width,dt=z.height;let Mt=o.COLOR_BUFFER_BIT;const ft=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(z),Ct=E.length>1;if(Ct)for(let jt=0;jt<E.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Yt=z.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let jt=0;jt<E.length;jt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const bt=r.get(E[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,it,dt,0,0,it,dt,Mt,o.NEAREST),m===!0&&(ne.length=0,te.length=0,ne.push(o.COLOR_ATTACHMENT0+jt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ne.push(ft),te.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let jt=0;jt<E.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[jt]);const bt=r.get(E[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const E=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Le(z){return Math.min(l.maxSamples,z.samples)}function Wt(z){const E=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function se(z){const E=h.render.frame;S.get(z)!==E&&(S.set(z,E),z.update())}function Je(z,E){const it=z.colorSpace,dt=z.format,Mt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||it!==Os&&it!==Ia&&(we.getTransfer(it)===Ge?(dt!==vi||Mt!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),E}function Qe(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=J,this.setTexture2D=tt,this.setTexture2DArray=O,this.setTexture3D=k,this.setTextureCube=Y,this.rebindTextures=De,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Wt}function rA(o,e){function i(r,l=Ia){let c;const h=we.getTransfer(l);if(r===Li)return o.UNSIGNED_BYTE;if(r===Fd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Hd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===K_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Q_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===j_)return o.BYTE;if(r===Z_)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Id)return o.INT;if(r===Er)return o.UNSIGNED_INT;if(r===aa)return o.FLOAT;if(r===Yo)return o.HALF_FLOAT;if(r===J_)return o.ALPHA;if(r===$_)return o.RGB;if(r===vi)return o.RGBA;if(r===ko)return o.DEPTH_COMPONENT;if(r===Wo)return o.DEPTH_STENCIL;if(r===tv)return o.RED;if(r===Gd)return o.RED_INTEGER;if(r===ev)return o.RG;if(r===Vd)return o.RG_INTEGER;if(r===Xd)return o.RGBA_INTEGER;if(r===Nc||r===Oc||r===zc||r===Pc)if(h===Ge)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ad||r===rd||r===sd||r===od)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ld||r===cd||r===ud)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ld||r===cd)return h===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ud)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===Td)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_d)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yd)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Md)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Td)return h===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bd||r===Ad||r===Rd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===bd)return h===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cd||r===wd||r===Dd||r===Ud)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Cd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const sA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
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

}`;class lA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new xv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wa({vertexShader:sA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ra(new Zc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends Ps{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,x=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",y=new lA,g={},L=i.getContextAttributes();let U=null,w=null;const H=[],F=[],P=new he;let W=null;const D=new Gn;D.viewport=new Xe;const C=new Gn;C.viewport=new Xe;const G=[D,C],J=new DM;let ut=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let lt=H[$];return lt===void 0&&(lt=new Nh,H[$]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function($){let lt=H[$];return lt===void 0&&(lt=new Nh,H[$]=lt),lt.getGripSpace()},this.getHand=function($){let lt=H[$];return lt===void 0&&(lt=new Nh,H[$]=lt),lt.getHandSpace()};function tt($){const lt=F.indexOf($.inputSource);if(lt===-1)return;const Tt=H[lt];Tt!==void 0&&(Tt.update($.inputSource,$.frame,p||h),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",k);for(let $=0;$<H.length;$++){const lt=F[$];lt!==null&&(F[$]=null,H[$].disconnect(lt))}ut=null,mt=null,y.reset();for(const $ in g)delete g[$];e.setRenderTarget(U),M=null,x=null,v=null,l=null,w=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",k),L.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ut=null,Pt=null;L.depth&&(Pt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=L.stencil?Wo:ko,Ut=L.stencil?Xo:Er);const ae={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(ae),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Tr(x.textureWidth,x.textureHeight,{format:vi,type:Li,depthTexture:new vv(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Tt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Tr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k($){for(let lt=0;lt<$.removed.length;lt++){const Tt=$.removed[lt],Ut=F.indexOf(Tt);Ut>=0&&(F[Ut]=null,H[Ut].disconnect(Tt))}for(let lt=0;lt<$.added.length;lt++){const Tt=$.added[lt];let Ut=F.indexOf(Tt);if(Ut===-1){for(let ae=0;ae<H.length;ae++)if(ae>=F.length){F.push(Tt),Ut=ae;break}else if(F[ae]===null){F[ae]=Tt,Ut=ae;break}if(Ut===-1)break}const Pt=H[Ut];Pt&&Pt.connect(Tt)}}const Y=new j,xt=new j;function yt($,lt,Tt){Y.setFromMatrixPosition(lt.matrixWorld),xt.setFromMatrixPosition(Tt.matrixWorld);const Ut=Y.distanceTo(xt),Pt=lt.projectionMatrix.elements,ae=Tt.projectionMatrix.elements,De=Pt[14]/(Pt[10]-1),B=Pt[14]/(Pt[10]+1),ge=(Pt[9]+1)/Pt[5],ne=(Pt[9]-1)/Pt[5],te=(Pt[8]-1)/Pt[0],kt=(ae[8]+1)/ae[0],Le=De*te,Wt=De*kt,se=Ut/(-te+kt),Je=se*-te;if(lt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Je),$.translateZ(se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Qe=De+se,z=B+se,E=Le-Je,it=Wt+(Ut-Je),dt=ge*B/z*Qe,Mt=ne*B/z*Qe;$.projectionMatrix.makePerspective(E,it,dt,Mt,Qe,z),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function N($,lt){lt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(lt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let lt=$.near,Tt=$.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),J.near=C.near=D.near=lt,J.far=C.far=D.far=Tt,(ut!==J.near||mt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ut=J.near,mt=J.far),J.layers.mask=$.layers.mask|6,D.layers.mask=J.layers.mask&3,C.layers.mask=J.layers.mask&5;const Ut=$.parent,Pt=J.cameras;N(J,Ut);for(let ae=0;ae<Pt.length;ae++)N(Pt[ae],Ut);Pt.length===2?yt(J,D,C):J.projectionMatrix.copy(D.projectionMatrix),V($,J,Ut)};function V($,lt,Tt){Tt===null?$.matrix.copy(lt.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(lt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(lt.projectionMatrix),$.projectionMatrixInverse.copy(lt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function($){return g[$]};let st=null;function gt($,lt){if(S=lt.getViewerPose(p||h),b=lt,S!==null){const Tt=S.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Ut=!1;Tt.length!==J.cameras.length&&(J.cameras.length=0,Ut=!0);for(let B=0;B<Tt.length;B++){const ge=Tt[B];let ne=null;if(M!==null)ne=M.getViewport(ge);else{const kt=v.getViewSubImage(x,ge);ne=kt.viewport,B===0&&(e.setRenderTargetTextures(w,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(w))}let te=G[B];te===void 0&&(te=new Gn,te.layers.enable(B),te.viewport=new Xe,G[B]=te),te.matrix.fromArray(ge.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ge.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ne.x,ne.y,ne.width,ne.height),B===0&&(J.matrix.copy(te.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ut===!0&&J.cameras.push(te)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const B=v.getDepthInformation(Tt[0]);B&&B.isValid&&B.texture&&y.init(B,l.renderState)}if(Pt&&Pt.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let B=0;B<Tt.length;B++){const ge=Tt[B].camera;if(ge){let ne=g[ge];ne||(ne=new xv,g[ge]=ne);const te=v.getCameraImage(ge);ne.sourceTexture=te}}}}for(let Tt=0;Tt<H.length;Tt++){const Ut=F[Tt],Pt=H[Tt];Ut!==null&&Pt!==void 0&&Pt.update(Ut,lt,p||h)}st&&st($,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),b=null}const At=new Mv;At.setAnimationLoop(gt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const gr=new oa,uA=new Ke;function fA(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,fv(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,L,U,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),S(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,w)):g.isMeshMatcapMaterial?(c(y,g),b(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,L,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Vn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Vn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const L=e.get(g),U=L.envMap,w=L.envMapRotation;U&&(y.envMap.value=U,gr.copy(w),gr.x*=-1,gr.y*=-1,gr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),y.envMapRotation.value.setFromMatrix4(uA.makeRotationFromEuler(gr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,L,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*L,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,L){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const L=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const w=U.program;r.uniformBlockBinding(L,w)}function p(L,U){let w=l[L.id];w===void 0&&(b(L),w=S(L),l[L.id]=w,L.addEventListener("dispose",y));const H=U.program;r.updateUBOMapping(L,H);const F=e.render.frame;c[L.id]!==F&&(x(L),c[L.id]=F)}function S(L){const U=v();L.__bindingPointIndex=U;const w=o.createBuffer(),H=L.__size,F=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function v(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],w=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,P=w.length;F<P;F++){const W=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,C=W.length;D<C;D++){const G=W[D];if(M(G,F,D,H)===!0){const J=G.__offset,ut=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let tt=0;tt<ut.length;tt++){const O=ut[tt],k=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,J+mt,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,mt),mt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,U,w,H){const F=L.value,P=U+"_"+w;if(H[P]===void 0)return typeof F=="number"||typeof F=="boolean"?H[P]=F:H[P]=F.clone(),!0;{const W=H[P];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return H[P]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function b(L){const U=L.uniforms;let w=0;const H=16;for(let P=0,W=U.length;P<W;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let C=0,G=D.length;C<G;C++){const J=D[C],ut=Array.isArray(J.value)?J.value:[J.value];for(let mt=0,tt=ut.length;mt<tt;mt++){const O=ut[mt],k=A(O),Y=w%H,xt=Y%k.boundary,yt=Y+xt;w+=xt,yt!==0&&H-yt<k.storage&&(w+=H-yt),J.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=k.storage}}}const F=w%H;return F>0&&(w+=H-F),L.__size=w,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class Rv{constructor(e={}){const{canvas:i=Zy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=ci;let F=0,P=0,W=null,D=-1,C=null;const G=new Xe,J=new Xe;let ut=null;const mt=new me(0);let tt=0,O=i.width,k=i.height,Y=1,xt=null,yt=null;const N=new Xe(0,0,O,k),V=new Xe(0,0,O,k);let st=!1;const gt=new qd;let At=!1,$=!1;const lt=new Ke,Tt=new j,Ut=new Xe,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function De(){return W===null?Y:1}let B=r;function ge(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Et,!1),B===null){const Z="webgl2";if(B=ge(Z,R),B===null)throw ge(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,te,kt,Le,Wt,se,Je,Qe,z,E,it,dt,Mt,ft,Zt,Ct,Yt,jt,bt,wt,Kt,It,Nt,le;function q(){ne=new ET(B),ne.init(),It=new rA(B,ne),te=new gT(B,ne,e,It),kt=new iA(B,ne),te.reversedDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Le=new AT(B),Wt=new kb,se=new aA(B,ne,kt,Wt,te,It,Le),Je=new vT(w),Qe=new MT(w),z=new LM(B),Nt=new pT(B,z),E=new TT(B,z,Le,Nt),it=new CT(B,E,z,Le),bt=new RT(B,te,se),Ct=new _T(Wt),dt=new Xb(w,Je,Qe,ne,te,Nt,Ct),Mt=new fA(w,Wt),ft=new qb,Zt=new Jb(ne),jt=new dT(w,Je,Qe,kt,it,M,m),Yt=new eA(w,it,te),le=new hA(B,Le,te,kt),wt=new mT(B,ne,Le),Kt=new bT(B,ne,Le),Le.programs=dt.programs,w.capabilities=te,w.extensions=ne,w.properties=Wt,w.renderLists=ft,w.shadowMap=Yt,w.state=kt,w.info=Le}q();const Rt=new cA(w,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(O,k,!1))},this.getSize=function(R){return R.set(O,k)},this.setSize=function(R,Z,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,k=Z,i.width=Math.floor(R*Y),i.height=Math.floor(Z*Y),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(O*Y,k*Y).floor()},this.setDrawingBufferSize=function(R,Z,rt){O=R,k=Z,Y=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,Z,rt,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,Z,rt,ot),kt.viewport(G.copy(N).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,Z,rt,ot){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,Z,rt,ot),kt.scissor(J.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){kt.setScissorTest(st=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let Q=!1;if(W!==null){const St=W.texture.format;Q=St===Xd||St===Vd||St===Gd}if(Q){const St=W.texture.type,Ot=St===Li||St===Er||St===Vo||St===Xo||St===Fd||St===Hd,Vt=jt.getClearColor(),Bt=jt.getClearAlpha(),Qt=Vt.r,ie=Vt.g,Jt=Vt.b;Ot?(b[0]=Qt,b[1]=ie,b[2]=Jt,b[3]=Bt,B.clearBufferuiv(B.COLOR,0,b)):(A[0]=Qt,A[1]=ie,A[2]=Jt,A[3]=Bt,B.clearBufferiv(B.COLOR,0,A))}else ot|=B.COLOR_BUFFER_BIT}Z&&(ot|=B.DEPTH_BUFFER_BIT),rt&&(ot|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ft.dispose(),Zt.dispose(),Wt.dispose(),Je.dispose(),Qe.dispose(),it.dispose(),Nt.dispose(),le.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",$n),Rt.removeEventListener("sessionend",Fs),Mi.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Le.autoReset,Z=Yt.enabled,rt=Yt.autoUpdate,ot=Yt.needsUpdate,Q=Yt.type;q(),Le.autoReset=R,Yt.enabled=Z,Yt.autoUpdate=rt,Yt.needsUpdate=ot,Yt.type=Q}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const Z=R.target;Z.removeEventListener("dispose",vt),Ht(Z)}function Ht(R){re(R),Wt.remove(R)}function re(R){const Z=Wt.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,Q,St){Z===null&&(Z=Pt);const Ot=Q.isMesh&&Q.matrixWorld.determinant()<0,Vt=la(R,Z,rt,ot,Q);kt.setMaterial(ot,Ot);let Bt=rt.index,Qt=1;if(ot.wireframe===!0){if(Bt=E.getWireframeAttribute(rt),Bt===void 0)return;Qt=2}const ie=rt.drawRange,Jt=rt.attributes.position;let pe=ie.start*Qt,Ne=(ie.start+ie.count)*Qt;St!==null&&(pe=Math.max(pe,St.start*Qt),Ne=Math.min(Ne,(St.start+St.count)*Qt)),Bt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,Bt.count)):Jt!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,Jt.count));const ke=Ne-pe;if(ke<0||ke===1/0)return;Nt.setup(Q,ot,Vt,rt,Bt);let Oe,_e=wt;if(Bt!==null&&(Oe=z.get(Bt),_e=Kt,_e.setIndex(Oe)),Q.isMesh)ot.wireframe===!0?(kt.setLineWidth(ot.wireframeLinewidth*De()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(Q.isLine){let Xt=ot.linewidth;Xt===void 0&&(Xt=1),kt.setLineWidth(Xt*De()),Q.isLineSegments?_e.setMode(B.LINES):Q.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else Q.isPoints?_e.setMode(B.POINTS):Q.isSprite&&_e.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,qe=Q._multiDrawCounts,Ae=Q._multiDrawCount,xn=Bt?z.get(Bt).bytesPerElement:1,Ni=Wt.get(ot).currentProgram.getUniforms();for(let mn=0;mn<Ae;mn++)Ni.setValue(B,"_gl_DrawID",mn),_e.render(Xt[mn]/xn,qe[mn])}else if(Q.isInstancedMesh)_e.renderInstances(pe,ke,Q.count);else if(rt.isInstancedBufferGeometry){const Xt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,qe=Math.min(rt.instanceCount,Xt);_e.renderInstances(pe,ke,qe)}else _e.render(pe,ke)};function ze(R,Z,rt){R.transparent===!0&&R.side===ia&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Xn(R,Z,rt),R.side=ka,R.needsUpdate=!0,Xn(R,Z,rt),R.side=ia):Xn(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),g=Zt.get(rt),g.init(Z),U.push(g),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const St=Q.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Vt=St[Ot];ze(Vt,rt,Q),ot.add(Vt)}else ze(St,rt,Q),ot.add(St)}),g=U.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(Q=>{function St(){if(ot.forEach(function(Ot){Wt.get(Ot).currentProgram.isReady()&&ot.delete(Ot)}),ot.size===0){Q(R);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let be=null;function wn(R){be&&be(R)}function $n(){Mi.stop()}function Fs(){Mi.start()}const Mi=new Mv;Mi.setAnimationLoop(wn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){be=R,Rt.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Rt.addEventListener("sessionstart",$n),Rt.addEventListener("sessionend",Fs),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,W),g=Zt.get(R,U.length),g.init(Z),U.push(g),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(lt,Ui,Z.reversedDepth),$=this.localClippingEnabled,At=Ct.init(this.clippingPlanes,$),y=ft.get(R,L.length),y.init(),L.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const St=w.xr.getDepthSensingMesh();St!==null&&br(St,Z,-1/0,w.sortObjects)}br(R,Z,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(xt,yt),ae=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ae&&jt.addToRenderList(y,R),this.info.render.frame++,At===!0&&Ct.beginShadows();const rt=g.state.shadowsArray;Yt.render(rt,R,Z),At===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(g.setupLights(),Z.isArrayCamera){const St=Z.cameras;if(Q.length>0)for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const Bt=St[Ot];Rr(ot,Q,R,Bt)}ae&&jt.render(R);for(let Ot=0,Vt=St.length;Ot<Vt;Ot++){const Bt=St[Ot];Ar(y,R,Bt,Bt.viewport)}}else Q.length>0&&Rr(ot,Q,R,Z),ae&&jt.render(R),Ar(y,R,Z);W!==null&&P===0&&(se.updateMultisampleRenderTarget(W),se.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,Z),Nt.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(g=U[U.length-1],At===!0&&Ct.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function br(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||gt.intersectsSprite(R)){ot&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const Ot=it.update(R),Vt=R.material;Vt.visible&&y.push(R,Ot,Vt,rt,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||gt.intersectsObject(R))){const Ot=it.update(R),Vt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Ut.copy(Ot.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(Vt)){const Bt=Ot.groups;for(let Qt=0,ie=Bt.length;Qt<ie;Qt++){const Jt=Bt[Qt],pe=Vt[Jt.materialIndex];pe&&pe.visible&&y.push(R,Ot,pe,rt,Ut.z,Jt)}}else Vt.visible&&y.push(R,Ot,Vt,rt,Ut.z,null)}}const St=R.children;for(let Ot=0,Vt=St.length;Ot<Vt;Ot++)br(St[Ot],Z,rt,ot)}function Ar(R,Z,rt,ot){const Q=R.opaque,St=R.transmissive,Ot=R.transparent;g.setupLightsView(rt),At===!0&&Ct.setGlobalState(w.clippingPlanes,rt),ot&&kt.viewport(G.copy(ot)),Q.length>0&&qa(Q,Z,rt),St.length>0&&qa(St,Z,rt),Ot.length>0&&qa(Ot,Z,rt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Rr(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Tr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yo:Li,minFilter:Mr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const St=g.state.transmissionRenderTarget[ot.id],Ot=ot.viewport||G;St.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const Vt=w.getRenderTarget(),Bt=w.getActiveCubeFace(),Qt=w.getActiveMipmapLevel();w.setRenderTarget(St),w.getClearColor(mt),tt=w.getClearAlpha(),tt<1&&w.setClearColor(16777215,.5),w.clear(),ae&&jt.render(rt);const ie=w.toneMapping;w.toneMapping=Va;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),At===!0&&Ct.setGlobalState(w.clippingPlanes,ot),qa(R,rt,ot),se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ne=0,ke=Z.length;Ne<ke;Ne++){const Oe=Z[Ne],_e=Oe.object,Xt=Oe.geometry,qe=Oe.material,Ae=Oe.group;if(qe.side===ia&&_e.layers.test(ot.layers)){const xn=qe.side;qe.side=Vn,qe.needsUpdate=!0,Hs(_e,rt,ot,Xt,qe,Ae),qe.side=xn,qe.needsUpdate=!0,pe=!0}}pe===!0&&(se.updateMultisampleRenderTarget(St),se.updateRenderTargetMipmap(St))}w.setRenderTarget(Vt,Bt,Qt),w.setClearColor(mt,tt),Jt!==void 0&&(ot.viewport=Jt),w.toneMapping=ie}function qa(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,St=R.length;Q<St;Q++){const Ot=R[Q],Vt=Ot.object,Bt=Ot.geometry,Qt=Ot.group;let ie=Ot.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),Vt.layers.test(rt.layers)&&Hs(Vt,Z,rt,Bt,ie,Qt)}}function Hs(R,Z,rt,ot,Q,St){R.onBeforeRender(w,Z,rt,ot,Q,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,rt,ot,R,St),Q.transparent===!0&&Q.side===ia&&Q.forceSinglePass===!1?(Q.side=Vn,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,St),Q.side=ka,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,St),Q.side=ia):w.renderBufferDirect(rt,Z,ot,Q,R,St),R.onAfterRender(w,Z,rt,ot,Q,St)}function Xn(R,Z,rt){Z.isScene!==!0&&(Z=Pt);const ot=Wt.get(R),Q=g.state.lights,St=g.state.shadowsArray,Ot=Q.state.version,Vt=dt.getParameters(R,Q.state,St,Z,rt),Bt=dt.getProgramCacheKey(Vt);let Qt=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?Qe:Je).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Qt===void 0&&(R.addEventListener("dispose",vt),Qt=new Map,ot.programs=Qt);let ie=Qt.get(Bt);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===Ot)return vn(R,Vt),ie}else Vt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Vt,w),ie=dt.acquireProgram(Vt,Bt),Qt.set(Bt,ie),ot.uniforms=Vt.uniforms;const Jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Ct.uniform),vn(R,Vt),ot.needsLights=Qc(R),ot.lightsStateVersion=Ot,ot.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function rn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Bc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function vn(R,Z){const rt=Wt.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function la(R,Z,rt,ot,Q){Z.isScene!==!0&&(Z=Pt),se.resetTextureUnits();const St=Z.fog,Ot=ot.isMeshStandardMaterial?Z.environment:null,Vt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Os,Bt=(ot.isMeshStandardMaterial?Qe:Je).get(ot.envMap||Ot),Qt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let ke=Va;ot.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ke=w.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,_e=Oe!==void 0?Oe.length:0,Xt=Wt.get(ot),qe=g.state.lights;if(At===!0&&($===!0||R!==C)){const fn=R===C&&ot.id===D;Ct.setState(ot,R,fn)}let Ae=!1;ot.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==qe.state.version||Xt.outputColorSpace!==Vt||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==Bt||ot.fog===!0&&Xt.fog!==St||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ct.numPlanes||Xt.numIntersection!==Ct.numIntersection)||Xt.vertexAlphas!==Qt||Xt.vertexTangents!==ie||Xt.morphTargets!==Jt||Xt.morphNormals!==pe||Xt.morphColors!==Ne||Xt.toneMapping!==ke||Xt.morphTargetsCount!==_e)&&(Ae=!0):(Ae=!0,Xt.__version=ot.version);let xn=Xt.currentProgram;Ae===!0&&(xn=Xn(ot,Z,Q));let Ni=!1,mn=!1,ja=!1;const Se=xn.getUniforms(),Tn=Xt.uniforms;if(kt.useProgram(xn.program)&&(Ni=!0,mn=!0,ja=!0),ot.id!==D&&(D=ot.id,mn=!0),Ni||C!==R){kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Se.setValue(B,"projectionMatrix",R.projectionMatrix),Se.setValue(B,"viewMatrix",R.matrixWorldInverse);const en=Se.map.cameraPosition;en!==void 0&&en.setValue(B,Tt.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&Se.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Se.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,mn=!0,ja=!0)}if(Q.isSkinnedMesh){Se.setOptional(B,Q,"bindMatrix"),Se.setOptional(B,Q,"bindMatrixInverse");const fn=Q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Se.setValue(B,"boneTexture",fn.boneTexture,se))}Q.isBatchedMesh&&(Se.setOptional(B,Q,"batchingTexture"),Se.setValue(B,"batchingTexture",Q._matricesTexture,se),Se.setOptional(B,Q,"batchingIdTexture"),Se.setValue(B,"batchingIdTexture",Q._indirectTexture,se),Se.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Se.setValue(B,"batchingColorTexture",Q._colorsTexture,se));const Dn=rt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&bt.update(Q,rt,xn),(mn||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,Se.setValue(B,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Tn.envMap.value=Bt,Tn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),mn&&(Se.setValue(B,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&Gs(Tn,ja),St&&ot.fog===!0&&Mt.refreshFogUniforms(Tn,St),Mt.refreshMaterialUniforms(Tn,ot,Y,k,g.state.transmissionRenderTarget[R.id]),Bc.upload(B,rn(Xt),Tn,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Bc.upload(B,rn(Xt),Tn,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Se.setValue(B,"center",Q.center),Se.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Se.setValue(B,"normalMatrix",Q.normalMatrix),Se.setValue(B,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let en=0,Cr=fn.length;en<Cr;en++){const Ei=fn[en];le.update(Ei,xn),le.bind(Ei,xn)}}return xn}function Gs(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Z,rt){const ot=Wt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Wt.get(R.texture).__webglTexture=Z,Wt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Wt.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Jc=B.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){W=R,F=Z,P=rt;let ot=!0,Q=null,St=!1,Ot=!1;if(R){const Bt=Wt.get(R);if(Bt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Bt.__hasExternalTextures)se.rebindTextures(R,Wt.get(R.texture).__webglTexture,Wt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Bt.__boundDepthTexture!==Jt){if(Jt!==null&&Wt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const Qt=R.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ot=!0);const ie=Wt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?Q=ie[Z][rt]:Q=ie[Z],St=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?Q=Wt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?Q=ie[rt]:Q=ie,G.copy(R.viewport),J.copy(R.scissor),ut=R.scissorTest}else G.copy(N).multiplyScalar(Y).floor(),J.copy(V).multiplyScalar(Y).floor(),ut=st;if(rt!==0&&(Q=Jc),kt.bindFramebuffer(B.FRAMEBUFFER,Q)&&ot&&kt.drawBuffers(R,Q),kt.viewport(G),kt.scissor(J),kt.setScissorTest(ut),St){const Bt=Wt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Bt.__webglTexture,rt)}else if(Ot){const Bt=Z;for(let Qt=0;Qt<R.textures.length;Qt++){const ie=Wt.get(R.textures[Qt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,rt,Bt)}}else if(R!==null&&rt!==0){const Bt=Wt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Bt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,Q,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){kt.bindFramebuffer(B.FRAMEBUFFER,Bt);try{const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(Z,rt,ot,Q,It.convert(ie),It.convert(Jt),St))}finally{const Qt=W!==null?Wt.get(W).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,Q,St,Ot,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Wt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q){kt.bindFramebuffer(B.FRAMEBUFFER,Bt);const Qt=R.textures[Vt],ie=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Vt),B.readPixels(Z,rt,ot,Q,It.convert(ie),It.convert(Jt),0);const Ne=W!==null?Wt.get(W).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,Ne);const ke=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ky(B,ke,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.deleteBuffer(pe),B.deleteSync(ke),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),Ot=Z!==null?Z.x:0,Vt=Z!==null?Z.y:0;se.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,rt,0,0,Ot,Vt,Q,St),kt.unbindTexture()};const Qo=B.createFramebuffer(),Ya=B.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,Q=0,St=null){St===null&&(Q!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=Q,Q=0):St=0);let Ot,Vt,Bt,Qt,ie,Jt,pe,Ne,ke;const Oe=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)Ot=rt.max.x-rt.min.x,Vt=rt.max.y-rt.min.y,Bt=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ie=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const Dn=Math.pow(2,-Q);Ot=Math.floor(Oe.width*Dn),Vt=Math.floor(Oe.height*Dn),R.isDataArrayTexture?Bt=Oe.depth:R.isData3DTexture?Bt=Math.floor(Oe.depth*Dn):Bt=1,Qt=0,ie=0,Jt=0}ot!==null?(pe=ot.x,Ne=ot.y,ke=ot.z):(pe=0,Ne=0,ke=0);const _e=It.convert(Z.format),Xt=It.convert(Z.type);let qe;Z.isData3DTexture?(se.setTexture3D(Z,0),qe=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(se.setTexture2DArray(Z,0),qe=B.TEXTURE_2D_ARRAY):(se.setTexture2D(Z,0),qe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ae=B.getParameter(B.UNPACK_ROW_LENGTH),xn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ni=B.getParameter(B.UNPACK_SKIP_PIXELS),mn=B.getParameter(B.UNPACK_SKIP_ROWS),ja=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ie),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt);const Se=R.isDataArrayTexture||R.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Dn=Wt.get(R),fn=Wt.get(Z),en=Wt.get(Dn.__renderTarget),Cr=Wt.get(fn.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,en.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Ei=0;Ei<Bt;Ei++)Se&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(R).__webglTexture,Q,Jt+Ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(Z).__webglTexture,St,ke+Ei)),B.blitFramebuffer(Qt,ie,Ot,Vt,pe,Ne,Ot,Vt,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Wt.has(R)){const Dn=Wt.get(R),fn=Wt.get(Z);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Qo),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ya);for(let en=0;en<Bt;en++)Se?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,Q,Jt+en):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,Q),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,St,ke+en):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,St),Q!==0?B.blitFramebuffer(Qt,ie,Ot,Vt,pe,Ne,Ot,Vt,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(qe,St,pe,Ne,ke+en,Qt,ie,Ot,Vt):B.copyTexSubImage2D(qe,St,pe,Ne,Qt,ie,Ot,Vt);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(qe,St,pe,Ne,ke,Ot,Vt,Bt,_e,Xt,Oe.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,St,pe,Ne,ke,Ot,Vt,Bt,_e,Oe.data):B.texSubImage3D(qe,St,pe,Ne,ke,Ot,Vt,Bt,_e,Xt,Oe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,pe,Ne,Ot,Vt,_e,Xt,Oe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,pe,Ne,Oe.width,Oe.height,_e,Oe.data):B.texSubImage2D(B.TEXTURE_2D,St,pe,Ne,Ot,Vt,_e,Xt,Oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ae),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ni),B.pixelStorei(B.UNPACK_SKIP_ROWS,mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ja),St===0&&Z.generateMipmaps&&B.generateMipmap(qe),kt.unbindTexture()},this.initRenderTarget=function(R){Wt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){F=0,P=0,W=null,kt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(e),i.unpackColorSpace=we._getUnpackColorSpace()}}function dA(o,e){const i=[],r=[],c=(1+Math.sqrt(5))/2,h=[[0,1,c],[0,-1,c],[0,1,-c],[0,-1,-c],[1,c,0],[-1,c,0],[1,-c,0],[-1,-c,0],[c,0,1],[-c,0,1],[c,0,-1],[-c,0,-1]].map(x=>{const M=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);return new j(x[0]/M*5,x[1]/M*5,x[2]/M*5)}),d=[],m=[[0,1],[0,4],[0,5],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,5],[4,8],[4,10],[5,9],[5,11],[6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11]];h.forEach(x=>{d.push(x.clone())});const p=8;m.forEach(([x,M])=>{const b=h[x],A=h[M];for(let y=1;y<p;y++){const g=y/p,L=new j().lerpVectors(b,A,g);d.push(L)}});const v=new Zd(5,0).attributes.position;for(let x=0;x<v.count;x+=3){const M=new j(v.getX(x),v.getY(x),v.getZ(x)),b=new j(v.getX(x+1),v.getY(x+1),v.getZ(x+1)),A=new j(v.getX(x+2),v.getY(x+2),v.getZ(x+2)),y=new j().add(M).add(b).add(A).divideScalar(3);d.push(y);for(let g=0;g<3;g++){const L=new j().lerpVectors(y,[M,b,A][g],.5);d.push(L)}}d.forEach(x=>{const M=new Wd({map:e,color:new me(13426175),transparent:!0,opacity:0,blending:Ds}),b=new gv(M);b.position.copy(x),b.scale.set(0,0,0);const A=.15+Math.random()*.08;o.add(b),i.push({sprite:b,targetScale:A,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:x.clone()})});for(let x=0;x<i.length;x++)for(let M=x+1;M<i.length;M++)if(i[x].position.distanceTo(i[M].position)<2.8){const A=[i[x].position,i[M].position],y=new fi().setFromPoints(A),g=new Yd({color:new me(8956637),transparent:!0,opacity:0,blending:Ds}),L=new _v(y,g);o.add(L),r.push({line:L,atom1:i[x],atom2:i[M],glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.15+Math.random()*.15})}return{atoms:i,edges:r}}function Cv(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const r=new On(o);return r.needsUpdate=!0,r}function pA(){const o=Fa.useRef(null),e=Fa.useRef(null);return Fa.useEffect(()=>{if(!o.current)return;const i=new pv;i.background=new me(1296),i.fog=new jc(1296,.015),e.current=i;const r=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const l=new Rv({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=o.current;c.appendChild(l.domElement);const h=new yv(16777215,.3);i.add(h);const d=new ws(6724095,1.5,80);d.position.set(15,15,15),i.add(d);const m=new ws(11193599,1.5,80);m.position.set(-15,-15,15),i.add(m);const p=new ws(10075135,1.5,80);p.position.set(0,15,-15),i.add(p);const S=new bs;i.add(S);const v=Cv(),{atoms:x,edges:M}=dA(S,v);let b=!1,A={x:0,y:0};const y={x:0,y:0};function g(tt){b=!0,A={x:tt.clientX,y:tt.clientY}}function L(tt){if(b){const O=tt.clientX-A.x,k=tt.clientY-A.y;y.y+=O*.005,y.x+=k*.005,A={x:tt.clientX,y:tt.clientY}}}function U(){b=!1}function w(tt){r.position.z+=tt.deltaY*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),y.y+=(tt.deltaX||tt.deltaY)*8e-4}let H=0;function F(tt){if(tt.touches.length===2){const O=tt.touches[0].clientX-tt.touches[1].clientX,k=tt.touches[0].clientY-tt.touches[1].clientY;H=Math.sqrt(O*O+k*k)}else tt.touches.length===1&&(b=!0,A={x:tt.touches[0].clientX,y:tt.touches[0].clientY})}function P(tt){if(tt.touches.length===2){const O=tt.touches[0].clientX-tt.touches[1].clientX,k=tt.touches[0].clientY-tt.touches[1].clientY,Y=Math.sqrt(O*O+k*k),xt=Y-H;r.position.z-=xt*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),H=Y}else if(tt.touches.length===1&&b){const O=tt.touches[0].clientX-A.x,k=tt.touches[0].clientY-A.y;y.y+=O*.005,y.x+=k*.005,A={x:tt.touches[0].clientX,y:tt.touches[0].clientY}}}function W(){b=!1}l.domElement.addEventListener("mousedown",g),l.domElement.addEventListener("mousemove",L),l.domElement.addEventListener("mouseup",U),l.domElement.addEventListener("wheel",w,{passive:!0}),l.domElement.addEventListener("touchstart",F),l.domElement.addEventListener("touchmove",P),l.domElement.addEventListener("touchend",W);let D=0;const C=4e4,G=Date.now();let J=0;function ut(){requestAnimationFrame(ut);const tt=Date.now()-G;D=Math.min(tt/C,1),J+=.016,S.rotation.x+=(y.x-S.rotation.x)*.05,S.rotation.y+=(y.y-S.rotation.y)*.05,b||(y.y+=.002),x.forEach((O,k)=>{const Y=k/x.length,xt=Math.max(0,Math.min(1,(D-Y*.5)*2)),yt=xt*O.targetScale;O.sprite.scale.set(yt,yt,yt);const N=Math.sin(J*O.glimmerSpeed+O.glimmerOffset)*.3+.7;O.sprite.material.opacity=xt*N*.95;const V=Math.sin(J*.08+Y*.6)*.3,st=Math.sin(J*.12+Y*1.2+Math.PI)*.3,gt=Math.sin(J*.05+Y*.4+Math.PI*.5)*.2,At=(V+st+gt+N*.4)%1,$=.4+N*.45,lt=.55+N*.4;O.sprite.material.color.setHSL(At,$,lt)}),M.forEach((O,k)=>{const Y=O.atom1.sprite.scale.x/O.atom1.targetScale,xt=O.atom2.sprite.scale.x/O.atom2.targetScale,yt=Math.min(Y,xt),N=Math.sin(J*O.glimmerSpeed+O.glimmerOffset)*.6+.6;O.line.material.opacity=Math.min(1,yt*O.baseOpacity*N);const V=k/M.length,st=Math.sin(J*.06+V*.7)*.3,gt=Math.sin(J*.1+V*1.4+Math.PI)*.3,At=Math.sin(J*.04+V*.3+Math.PI*.5)*.2,$=(st+gt+At+N*.2)%1,lt=.5+N*.35,Tt=.5+N*.3;O.line.material.color.setHSL($,lt,Tt)}),d.position.x=Math.sin(J*.2)*15,d.position.z=Math.cos(J*.2)*15,m.position.x=Math.sin(J*.25+Math.PI)*15,m.position.z=Math.cos(J*.25+Math.PI)*15,l.render(i,r)}ut();function mt(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",mt),()=>{window.removeEventListener("resize",mt),l.domElement.removeEventListener("mousedown",g),l.domElement.removeEventListener("mousemove",L),l.domElement.removeEventListener("mouseup",U),l.domElement.removeEventListener("wheel",w),l.domElement.removeEventListener("touchstart",F),l.domElement.removeEventListener("touchmove",P),l.domElement.removeEventListener("touchend",W),c&&l.domElement.parentNode&&c.removeChild(l.domElement),v.dispose(),x.forEach(tt=>tt.sprite.material.dispose()),M.forEach(tt=>{tt.line.geometry.dispose(),tt.line.material.dispose()})}},[]),Lt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"})}function mA(){return Lt.jsx("div",{children:Lt.jsx(pA,{})})}function gA(){const o=Fa.useRef(null),e=Fa.useRef(null);return Fa.useEffect(()=>{if(!o.current)return;const i=new pv;i.background=new me(1296),i.fog=new jc(1296,.015),e.current=i;const r=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const l=new Rv({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=o.current;c.appendChild(l.domElement);const h=new yv(16777215,.3);i.add(h);const d=new ws(6724095,1.5,80);d.position.set(15,15,15),i.add(d);const m=new ws(11193599,1.5,80);m.position.set(-15,-15,15),i.add(m);const p=new ws(10075135,1.5,80);p.position.set(0,15,-15),i.add(p);const S=new bs;i.add(S);const v=Cv(),x=15,M=6,b=M/(x-1),A=[],y={};for(let V=0;V<x;V++)for(let st=0;st<x;st++)for(let gt=0;gt<x;gt++){const At=-M/2+gt*b,$=-M/2+st*b,lt=-M/2+V*b,Tt=new j(At,$,lt),Ut=new Wd({map:v,color:new me(13426175),transparent:!0,opacity:0,blending:Ds}),Pt=new gv(Ut);Pt.position.copy(Tt),Pt.scale.set(0,0,0);const ae=.1+Math.random()*.06;S.add(Pt);const De={sprite:Pt,targetScale:ae,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:Tt.clone(),gridX:gt,gridY:st,gridZ:V};A.push(De),y[`${gt},${st},${V}`]=De}const g=[],L=1.5;A.forEach(V=>{const{gridX:st,gridY:gt,gridZ:At,position:$}=V;[[st+1,gt,At],[st,gt+1,At],[st,gt,At+1]].forEach(([Tt,Ut,Pt])=>{if(Tt<x&&Ut<x&&Pt<x){const ae=`${Tt},${Ut},${Pt}`,De=y[ae];if(De){const B=De.position;if($.distanceTo(B)<=L){const ne=[$,B],te=new fi().setFromPoints(ne),kt=new Yd({color:new me(8956637),transparent:!0,opacity:0,blending:Ds}),Le=new _v(te,kt);S.add(Le),g.push({line:Le,atom1:V,atom2:De,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.08+Math.random()*.1})}}}})});let U=!1,w={x:0,y:0};const H={x:0,y:0};function F(V){U=!0,w={x:V.clientX,y:V.clientY}}function P(V){if(U){const st=V.clientX-w.x,gt=V.clientY-w.y;H.y+=st*.005,H.x+=gt*.005,w={x:V.clientX,y:V.clientY}}}function W(){U=!1}function D(V){r.position.z+=V.deltaY*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),H.y+=(V.deltaX||V.deltaY)*8e-4}let C=0;function G(V){if(V.touches.length===2){const st=V.touches[0].clientX-V.touches[1].clientX,gt=V.touches[0].clientY-V.touches[1].clientY;C=Math.sqrt(st*st+gt*gt)}else V.touches.length===1&&(U=!0,w={x:V.touches[0].clientX,y:V.touches[0].clientY})}function J(V){if(V.touches.length===2){const st=V.touches[0].clientX-V.touches[1].clientX,gt=V.touches[0].clientY-V.touches[1].clientY,At=Math.sqrt(st*st+gt*gt),$=At-C;r.position.z-=$*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),C=At}else if(V.touches.length===1&&U){const st=V.touches[0].clientX-w.x,gt=V.touches[0].clientY-w.y;H.y+=st*.005,H.x+=gt*.005,w={x:V.touches[0].clientX,y:V.touches[0].clientY}}}function ut(){U=!1}l.domElement.addEventListener("mousedown",F),l.domElement.addEventListener("mousemove",P),l.domElement.addEventListener("mouseup",W),l.domElement.addEventListener("wheel",D,{passive:!0}),l.domElement.addEventListener("touchstart",G),l.domElement.addEventListener("touchmove",J),l.domElement.addEventListener("touchend",ut);let mt=0;const tt=5e3,O=Date.now();let k=0;const Y=A.map((V,st)=>st/A.length),xt=g.map((V,st)=>st/g.length);function yt(){requestAnimationFrame(yt);const V=Date.now()-O;mt=Math.min(V/tt,1),k+=.016,S.rotation.x+=(H.x-S.rotation.x)*.05,S.rotation.y+=(H.y-S.rotation.y)*.05,U||(H.y+=.002),A.forEach((st,gt)=>{const At=Y[gt],$=Math.max(0,Math.min(1,(mt-At*.3)/.7)),lt=$*st.targetScale;st.sprite.scale.set(lt,lt,lt);const Tt=Math.sin(k*st.glimmerSpeed+st.glimmerOffset)*.3+.7;if(st.sprite.material.opacity=$*Tt*.95,$>.01){const Ut=Math.sin(k*.08+At*.6)*.3,Pt=Math.sin(k*.12+At*1.2+Math.PI)*.3,ae=Math.sin(k*.05+At*.4+Math.PI*.5)*.2,De=(Ut+Pt+ae+Tt*.4)%1,B=.4+Tt*.45,ge=.55+Tt*.4;st.sprite.material.color.setHSL(De,B,ge)}}),g.forEach((st,gt)=>{const At=st.atom1.sprite.scale.x/st.atom1.targetScale,$=st.atom2.sprite.scale.x/st.atom2.targetScale,lt=Math.min(At,$),Tt=Math.sin(k*st.glimmerSpeed+st.glimmerOffset)*.6+.6;if(st.line.material.opacity=Math.min(1,lt*st.baseOpacity*Tt),lt>.01){const Ut=xt[gt],Pt=Math.sin(k*.06+Ut*.7)*.3,ae=Math.sin(k*.1+Ut*1.4+Math.PI)*.3,De=Math.sin(k*.04+Ut*.3+Math.PI*.5)*.2,B=(Pt+ae+De+Tt*.2)%1,ge=.5+Tt*.35,ne=.5+Tt*.3;st.line.material.color.setHSL(B,ge,ne)}}),k%.1<.016&&(d.position.x=Math.sin(k*.2)*15,d.position.z=Math.cos(k*.2)*15,m.position.x=Math.sin(k*.25+Math.PI)*15,m.position.z=Math.cos(k*.25+Math.PI)*15),l.render(i,r)}yt();function N(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N),l.domElement.removeEventListener("mousedown",F),l.domElement.removeEventListener("mousemove",P),l.domElement.removeEventListener("mouseup",W),l.domElement.removeEventListener("wheel",D),l.domElement.removeEventListener("touchstart",G),l.domElement.removeEventListener("touchmove",J),l.domElement.removeEventListener("touchend",ut),c&&l.domElement.parentNode&&c.removeChild(l.domElement),v.dispose(),A.forEach(V=>V.sprite.material.dispose()),g.forEach(V=>{V.line.geometry.dispose(),V.line.material.dispose()})}},[]),Lt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"})}function _A(){return Lt.jsx("div",{children:Lt.jsx(gA,{})})}function vA(){const[o,e]=Fa.useState("home");return Lt.jsxs("div",{children:[o==="home"&&Lt.jsx(WS,{}),Lt.jsx(iy,{route:o,setRoute:e}),Lt.jsx(ny,{}),Lt.jsxs("div",{className:"relative z-10 h-full pointer-events-auto",children:[o==="home"&&Lt.jsx(mA,{}),o==="about"&&Lt.jsx(ry,{}),o==="contact"&&Lt.jsx(ay,{}),o==="test"&&Lt.jsx(_A,{})]})]})}kS.createRoot(document.getElementById("root")).render(Lt.jsx(Ha.StrictMode,{children:Lt.jsx(vA,{})}));
