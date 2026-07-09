(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function XS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var oh={exports:{}},Uo={};var P0;function kS(){if(P0)return Uo;P0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var B0;function WS(){return B0||(B0=1,oh.exports=kS()),oh.exports}var Ut=WS(),lh={exports:{}},Lo={},ch={exports:{}},uh={};var I0;function qS(){return I0||(I0=1,(function(o){function e(P,Y){var j=P.length;P.push(Y);t:for(;0<j;){var yt=j-1>>>1,Mt=P[yt];if(0<l(Mt,Y))P[yt]=Y,P[j]=Mt,j=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Y=P[0],j=P.pop();if(j!==Y){P[0]=j;t:for(var yt=0,Mt=P.length,O=Mt>>>1;yt<O;){var V=2*(yt+1)-1,st=P[V],gt=V+1,wt=P[gt];if(0>l(st,j))gt<Mt&&0>l(wt,st)?(P[yt]=wt,P[gt]=j,yt=gt):(P[yt]=st,P[V]=j,yt=V);else if(gt<Mt&&0>l(wt,j))P[yt]=wt,P[gt]=j,yt=gt;else break t}}return Y}function l(P,Y){var j=P.sortIndex-Y.sortIndex;return j!==0?j:P.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,y=!1,b=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=P)r(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function H(P){if(A=!1,C(P),!b)if(i(m)!==null)b=!0,B||(B=!0,tt());else{var Y=i(p);Y!==null&&ht(H,Y.startTime-P)}}var B=!1,z=-1,W=5,D=-1;function w(){return M?!0:!(o.unstable_now()-D<W)}function G(){if(M=!1,B){var P=o.unstable_now();D=P;var Y=!0;try{t:{b=!1,A&&(A=!1,N(z),z=-1),y=!0;var j=x;try{e:{for(C(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,x=g.priorityLevel;var Mt=yt(g.expirationTime<=P);if(P=o.unstable_now(),typeof Mt=="function"){g.callback=Mt,C(P),Y=!0;break e}g===i(m)&&r(m),C(P)}else r(m);g=i(m)}if(g!==null)Y=!0;else{var O=i(p);O!==null&&ht(H,O.startTime-P),Y=!1}}break t}finally{g=null,x=j,y=!1}Y=void 0}}finally{Y?tt():B=!1}}}var tt;if(typeof L=="function")tt=function(){L(G)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,pt=ft.port2;ft.port1.onmessage=G,tt=function(){pt.postMessage(null)}}else tt=function(){v(G,0)};function ht(P,Y){z=v(function(){P(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var j=x;x=Y;try{return P()}finally{x=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=x;x=P;try{return Y()}finally{x=j}},o.unstable_scheduleCallback=function(P,Y,j){var yt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=j+Mt,P={id:_++,callback:Y,priorityLevel:P,startTime:j,expirationTime:Mt,sortIndex:-1},j>yt?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(A?(N(z),z=-1):A=!0,ht(H,j-yt))):(P.sortIndex=Mt,e(m,P),b||y||(b=!0,B||(B=!0,tt()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var Y=x;return function(){var j=x;x=Y;try{return P.apply(this,arguments)}finally{x=j}}}})(uh)),uh}var F0;function YS(){return F0||(F0=1,ch.exports=qS()),ch.exports}var fh={exports:{}},ce={};var H0;function jS(){if(H0)return ce;H0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(O,V,st){this.props=O,this.context=V,this.refs=M,this.updater=st||b}v.prototype.isReactComponent={},v.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=v.prototype;function L(O,V,st){this.props=O,this.context=V,this.refs=M,this.updater=st||b}var C=L.prototype=new N;C.constructor=L,A(C,v.prototype),C.isPureReactComponent=!0;var H=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(O,V,st){var gt=st.ref;return{$$typeof:o,type:O,key:V,ref:gt!==void 0?gt:null,props:st}}function w(O,V){return D(O.type,V,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function tt(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(st){return V[st]})}var ft=/\/+/g;function pt(O,V){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):V.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(V){O.status==="pending"&&(O.status="fulfilled",O.value=V)},function(V){O.status==="pending"&&(O.status="rejected",O.reason=V)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,V,st,gt,wt){var $=typeof O;($==="undefined"||$==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch($){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case o:case e:ct=!0;break;case _:return ct=O._init,P(ct(O._payload),V,st,gt,wt)}}if(ct)return wt=wt(O),ct=gt===""?"."+pt(O,0):gt,H(wt)?(st="",ct!=null&&(st=ct.replace(ft,"$&/")+"/"),P(wt,V,st,"",function(Pt){return Pt})):wt!=null&&(G(wt)&&(wt=w(wt,st+(wt.key==null||O&&O.key===wt.key?"":(""+wt.key).replace(ft,"$&/")+"/")+ct)),V.push(wt)),1;ct=0;var Tt=gt===""?".":gt+":";if(H(O))for(var zt=0;zt<O.length;zt++)gt=O[zt],$=Tt+pt(gt,zt),ct+=P(gt,V,st,$,wt);else if(zt=y(O),typeof zt=="function")for(O=zt.call(O),zt=0;!(gt=O.next()).done;)gt=gt.value,$=Tt+pt(gt,zt++),ct+=P(gt,V,st,$,wt);else if($==="object"){if(typeof O.then=="function")return P(ht(O),V,st,gt,wt);throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Y(O,V,st){if(O==null)return O;var gt=[],wt=0;return P(O,gt,"","",function($){return V.call(st,$,wt++)}),gt}function j(O){if(O._status===-1){var V=O._result;V=V(),V.then(function(st){(O._status===0||O._status===-1)&&(O._status=1,O._result=st)},function(st){(O._status===0||O._status===-1)&&(O._status=2,O._result=st)}),O._status===-1&&(O._status=0,O._result=V)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Mt={map:Y,forEach:function(O,V,st){Y(O,function(){V.apply(this,arguments)},st)},count:function(O){var V=0;return Y(O,function(){V++}),V},toArray:function(O){return Y(O,function(V){return V})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ce.Activity=g,ce.Children=Mt,ce.Component=v,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=L,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ce.cache=function(O){return function(){return O.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(O,V,st){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var gt=A({},O.props),wt=O.key;if(V!=null)for($ in V.key!==void 0&&(wt=""+V.key),V)!W.call(V,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&V.ref===void 0||(gt[$]=V[$]);var $=arguments.length-2;if($===1)gt.children=st;else if(1<$){for(var ct=Array($),Tt=0;Tt<$;Tt++)ct[Tt]=arguments[Tt+2];gt.children=ct}return D(O.type,wt,gt)},ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ce.createElement=function(O,V,st){var gt,wt={},$=null;if(V!=null)for(gt in V.key!==void 0&&($=""+V.key),V)W.call(V,gt)&&gt!=="key"&&gt!=="__self"&&gt!=="__source"&&(wt[gt]=V[gt]);var ct=arguments.length-2;if(ct===1)wt.children=st;else if(1<ct){for(var Tt=Array(ct),zt=0;zt<ct;zt++)Tt[zt]=arguments[zt+2];wt.children=Tt}if(O&&O.defaultProps)for(gt in ct=O.defaultProps,ct)wt[gt]===void 0&&(wt[gt]=ct[gt]);return D(O,$,wt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(O){return{$$typeof:d,render:O}},ce.isValidElement=G,ce.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:j}},ce.memo=function(O,V){return{$$typeof:p,type:O,compare:V===void 0?null:V}},ce.startTransition=function(O){var V=z.T,st={};z.T=st;try{var gt=O(),wt=z.S;wt!==null&&wt(st,gt),typeof gt=="object"&&gt!==null&&typeof gt.then=="function"&&gt.then(B,yt)}catch($){yt($)}finally{V!==null&&st.types!==null&&(V.types=st.types),z.T=V}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(O){return z.H.use(O)},ce.useActionState=function(O,V,st){return z.H.useActionState(O,V,st)},ce.useCallback=function(O,V){return z.H.useCallback(O,V)},ce.useContext=function(O){return z.H.useContext(O)},ce.useDebugValue=function(){},ce.useDeferredValue=function(O,V){return z.H.useDeferredValue(O,V)},ce.useEffect=function(O,V){return z.H.useEffect(O,V)},ce.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(O,V,st){return z.H.useImperativeHandle(O,V,st)},ce.useInsertionEffect=function(O,V){return z.H.useInsertionEffect(O,V)},ce.useLayoutEffect=function(O,V){return z.H.useLayoutEffect(O,V)},ce.useMemo=function(O,V){return z.H.useMemo(O,V)},ce.useOptimistic=function(O,V){return z.H.useOptimistic(O,V)},ce.useReducer=function(O,V,st){return z.H.useReducer(O,V,st)},ce.useRef=function(O){return z.H.useRef(O)},ce.useState=function(O){return z.H.useState(O)},ce.useSyncExternalStore=function(O,V,st){return z.H.useSyncExternalStore(O,V,st)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.2.0",ce}var G0;function Fd(){return G0||(G0=1,fh.exports=jS()),fh.exports}var hh={exports:{}},Cn={};var V0;function ZS(){if(V0)return Cn;V0=1;var o=Fd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Cn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Cn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Cn.version="19.2.0",Cn}var X0;function KS(){if(X0)return hh.exports;X0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=ZS(),hh.exports}var k0;function QS(){if(k0)return Lo;k0=1;var o=YS(),e=Fd(),i=KS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ft?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case L:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],Mt=-1;function O(t){return{current:t}}function V(t){0>Mt||(t.current=yt[Mt],yt[Mt]=null,Mt--)}function st(t,n){Mt++,yt[Mt]=t.current,t.current=n}var gt=O(null),wt=O(null),$=O(null),ct=O(null);function Tt(t,n){switch(st($,n),st(wt,t),st(gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=r0(n),t=s0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(gt),st(gt,t)}function zt(){V(gt),V(wt),V($)}function Pt(t){t.memoizedState!==null&&st(ct,t);var n=gt.current,a=s0(n,t.type);n!==a&&(st(wt,t),st(gt,a))}function Wt(t){wt.current===t&&(V(gt),V(wt)),ct.current===t&&(V(ct),Ro._currentValue=j)}var Me,I;function ge(t){if(Me===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Me=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Me+t+I}var Et=!1;function At(t,n){if(!t||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var it=ut}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ut){it=ut}t.call(_t.prototype)}}else{try{throw Error()}catch(ut){it=ut}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&it&&typeof ut.stack=="string")return[ut.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var F=S.split(`
`),nt=T.split(`
`);for(u=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===F.length||u===nt.length)for(s=F.length-1,u=nt.length-1;1<=s&&0<=u&&F[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(F[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||F[s]!==nt[u]){var dt=`
`+F[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ge(a):""}function Lt(t,n){switch(t.tag){case 26:case 27:case 5:return ge(t.type);case 16:return ge("Lazy");case 13:return t.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return At(t.type,!1);case 11:return At(t.type.render,!1);case 1:return At(t.type,!0);case 31:return ge("Activity");default:return""}}function fe(t){try{var n="",a=null;do n+=Lt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Gt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Fe=o.unstable_cancelCallback,$t=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,at=o.unstable_NormalPriority,Yt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,Qt=o.log,Jt=o.unstable_setDisableYieldValue,Rt=null,Nt=null;function te(t){if(typeof Qt=="function"&&Jt(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Rt,t)}catch{}}var Vt=Math.clz32?Math.clz32:q,Bt=Math.log,ue=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(Bt(t)/ue|0)|0}var Ct=256,Ot=262144,Xt=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=bt(s):(S&=T,S!==0?u=bt(S):a||(a=T&~t,a!==0&&(u=bt(a))))):(T=s&~f,T!==0?u=bt(T):S!==0?u=bt(S):a||(a=s&~t,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function kt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ii(t,n,a,s,u,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,nt=t.hiddenUpdates;for(a=S&~a;0<a;){var dt=31-Vt(a),_t=1<<dt;T[dt]=0,F[dt]=-1;var it=nt[dt];if(it!==null)for(nt[dt]=null,dt=0;dt<it.length;dt++){var ut=it[dt];ut!==null&&(ut.lane&=-536870913)}a&=~_t}s!==0&&Hs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Hs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Vt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ei(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Vt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Cr(t,n){var a=n&-n;return a=(a&42)!==0?1:wr(a),(a&(t.suspendedLanes|n))!==0?0:a}function wr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ja(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:w0(t.type))}function Gs(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var qn=Math.random().toString(36).slice(2),rn="__reactFiber$"+qn,xn="__reactProps$"+qn,ua="__reactContainer$"+qn,Vs="__reactEvents$"+qn,tu="__reactListeners$"+qn,eu="__reactHandles$"+qn,$o="__reactResources$"+qn,Za="__reactMarker$"+qn;function R(t){delete t[rn],delete t[xn],delete t[Vs],delete t[tu],delete t[eu]}function Z(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ua]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=d0(t);t!==null;){if(a=t[rn])return a;t=d0(t)}return n}t=a,a=t.parentNode}return null}function rt(t){if(t=t[rn]||t[ua]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function J(t){var n=t[$o];return n||(n=t[$o]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(t){t[Za]=!0}var It=new Set,jt={};function Ht(t,n){ee(t,n),ee(t+"Capture",n)}function ee(t,n){for(jt[t]=n,t=0;t<n.length;t++)It.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},ve={};function Oe(t){return Gt.call(ve,t)?!0:Gt.call(ne,t)?!1:se.test(t)?ve[t]=!0:(ne[t]=!0,!1)}function qe(t,n,a){if(Oe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=we(t,n,""+t[n])}}function zi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=je(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ka=/[\n"\\]/g;function Ee(t){return t.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(t,n,a,s,u,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?fn(t,S,Zt(n)):a!=null?fn(t,S,Zt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Zt(T):t.removeAttribute("name")}function Ln(t,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Sn(t)}function fn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ur(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function bi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Sn(t)}function Lr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Iv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Iv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ip(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&np(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&np(t,f,n[f])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var iu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nr=null,Or=null;function ap(t){var n=rt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Rn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ee(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));Rn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zi(s)}break t;case"textarea":Ur(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var ru=!1;function rp(t,n,a){if(ru)return t(n,a);ru=!0;try{var s=t(n);return s}finally{if(ru=!1,(Nr!==null||Or!==null)&&(Gl(),Nr&&(n=Nr,t=Or,Or=Nr=null,ap(n),t)))for(n=0;n<t.length;n++)ap(t[n])}}function Xs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Bi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){su=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{su=!1}var fa=null,ou=null,el=null;function sp(){if(el)return el;var t,n=ou,a=n.length,s,u="value"in fa?fa.value:fa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return el=u.slice(t,1<s?1-s:void 0)}function nl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function il(){return!0}function op(){return!1}function In(t){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:op,this.isPropagationStopped=op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=In(Qa),Ws=g({},Qa,{view:0,detail:0}),Gv=In(Ws),lu,cu,qs,rl=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(lu=t.screenX-qs.screenX,cu=t.screenY-qs.screenY):cu=lu=0,qs=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:cu}}),lp=In(rl),Vv=g({},rl,{dataTransfer:0}),Xv=In(Vv),kv=g({},Ws,{relatedTarget:0}),uu=In(kv),Wv=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=In(Wv),Yv=g({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=In(Yv),Zv=g({},Qa,{data:0}),cp=In(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function fu(){return $v}var tx=g({},Ws,{key:function(t){if(t.key){var n=Kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=In(tx),nx=g({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=In(nx),ix=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),ax=In(ix),rx=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=In(rx),ox=g({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=In(ox),cx=g({},Qa,{newState:0,oldState:0}),ux=In(cx),fx=[9,13,27,32],hu=Bi&&"CompositionEvent"in window,Ys=null;Bi&&"documentMode"in document&&(Ys=document.documentMode);var hx=Bi&&"TextEvent"in window&&!Ys,fp=Bi&&(!hu||Ys&&8<Ys&&11>=Ys),hp=" ",dp=!1;function pp(t,n){switch(t){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function dx(t,n){switch(t){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return t=n.data,t===hp&&dp?null:t;default:return null}}function px(t,n){if(zr)return t==="compositionend"||!hu&&pp(t,n)?(t=sp(),el=ou=fa=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mx[t.type]:n==="textarea"}function _p(t,n,a,s){Nr?Or?Or.push(s):Or=[s]:Nr=s,n=jl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var js=null,Zs=null;function gx(t){$g(t,0)}function sl(t){var n=ot(t);if(zi(n))return t}function vp(t,n){if(t==="change")return n}var xp=!1;if(Bi){var du;if(Bi){var pu="oninput"in document;if(!pu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),pu=typeof Sp.oninput=="function"}du=pu}else du=!1;xp=du&&(!document.documentMode||9<document.documentMode)}function yp(){js&&(js.detachEvent("onpropertychange",Mp),Zs=js=null)}function Mp(t){if(t.propertyName==="value"&&sl(Zs)){var n=[];_p(n,Zs,t,au(t)),rp(gx,n)}}function _x(t,n,a){t==="focusin"?(yp(),js=n,Zs=a,js.attachEvent("onpropertychange",Mp)):t==="focusout"&&yp()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Zs)}function xx(t,n){if(t==="click")return sl(n)}function Sx(t,n){if(t==="input"||t==="change")return sl(n)}function yx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:yx;function Ks(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Gt.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,n){var a=Ep(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function Tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ap(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Mx=Bi&&"documentMode"in document&&11>=document.documentMode,Pr=null,gu=null,Qs=null,_u=!1;function Rp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||Pr==null||Pr!==gn(s)||(s=Pr,"selectionStart"in s&&mu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=jl(gu,"onSelect"),0<s.length&&(n=new al("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Pr)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Br={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},vu={},Cp={};Bi&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function $a(t){if(vu[t])return vu[t];if(!Br[t])return t;var n=Br[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return vu[t]=n[a];return t}var wp=$a("animationend"),Dp=$a("animationiteration"),Up=$a("animationstart"),Ex=$a("transitionrun"),bx=$a("transitionstart"),Tx=$a("transitioncancel"),Lp=$a("transitionend"),Np=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function pi(t,n){Np.set(t,n),Ht(n,[t])}var ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Ir=0,Su=0;function ll(){for(var t=Ir,n=Su=Ir=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Op(a,u,f)}}function cl(t,n,a,s){ai[Ir++]=t,ai[Ir++]=n,ai[Ir++]=a,ai[Ir++]=s,Su|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function yu(t,n,a,s){return cl(t,n,a,s),ul(t)}function tr(t,n){return cl(t,null,null,n),ul(t)}function Op(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Vt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ul(t){if(50<So)throw So=0,Uf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Fr={};function Ax(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Ax(t,n,a,s)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function fl(t,n,a,s,u,f){var S=0;if(s=t,typeof t=="function")Mu(t)&&(S=1);else if(typeof t=="string")S=US(t,a,gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=jn(31,a,n,u),t.elementType=D,t.lanes=f,t;case A:return er(a.children,u,f,n);case M:S=8,u|=24;break;case v:return t=jn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case H:return t=jn(13,a,n,u),t.elementType=H,t.lanes=f,t;case B:return t=jn(19,a,n,u),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break t;case N:S=9;break t;case C:S=11;break t;case z:S=14;break t;case W:S=16,s=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(S,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function Eu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Pp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Bp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:fe(n)},Bp.set(t,n),n)}return{value:t,source:n,stack:fe(n)}}var Hr=[],Gr=0,hl=null,Js=0,si=[],oi=0,ha=null,Ti=1,Ai="";function Fi(t,n){Hr[Gr++]=Js,Hr[Gr++]=hl,hl=t,Js=n}function Ip(t,n,a){si[oi++]=Ti,si[oi++]=Ai,si[oi++]=ha,ha=t;var s=Ti;t=Ai;var u=32-Vt(s)-1;s&=~(1<<u),a+=1;var f=32-Vt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ti=1<<32-Vt(n)+u|a<<u|s,Ai=f+t}else Ti=1<<f|a<<u|s,Ai=t}function Tu(t){t.return!==null&&(Fi(t,1),Ip(t,1,0))}function Au(t){for(;t===hl;)hl=Hr[--Gr],Hr[Gr]=null,Js=Hr[--Gr],Hr[Gr]=null;for(;t===ha;)ha=si[--oi],si[oi]=null,Ai=si[--oi],si[oi]=null,Ti=si[--oi],si[oi]=null}function Fp(t,n){si[oi++]=Ti,si[oi++]=Ai,si[oi++]=ha,Ti=n.id,Ai=n.overflow,ha=t}var yn=null,Ze=null,Ae=!1,da=null,li=!1,Ru=Error(r(519));function pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(ri(n,t)),Ru}function Hp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[xn]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ye(Mo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ln(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),bi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||i0(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||pa(t,!0)}function Gp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:yn=yn.return}}function Vr(t){if(t!==yn)return!1;if(!Ae)return Gp(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&Ze&&pa(t),Gp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=h0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=h0(t)}else n===27?(n=Ze,Ca(t.type)?(t=Qf,Qf=null,Ze=t):Ze=n):Ze=yn?ui(t.stateNode.nextSibling):null;return!0}function nr(){Ze=yn=null,Ae=!1}function Cu(){var t=da;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),da=null),t}function $s(t){da===null?da=[t]:da.push(t)}var wu=O(null),ir=null,Hi=null;function ma(t,n,a){st(wu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=wu.current,V(wu)}function Du(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Uu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Du(f.return,a,t),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Du(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Xr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Yn(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===ct.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}u=u.return}t!==null&&Uu(n,t,a,s),n.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Vp(ir,t)}function pl(t,n){return ir===null&&ar(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Rx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Cx(wx,function(){t.controller.abort()})}var eo=null,Nu=0,kr=0,Wr=null;function Dx(t,n){if(eo===null){var a=eo=[];Nu=0,kr=Bf(),Wr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Nu++,n.then(Xp,Xp),n}function Xp(){if(--Nu===0&&eo!==null){Wr!==null&&(Wr.status="fulfilled");var t=eo;eo=null,kr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ux(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var kp=P.S;P.S=function(t,n){Rg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(t,n),kp!==null&&kp(t,n)};var rr=O(null);function Ou(){var t=rr.current;return t!==null?t:Ye.pooledCache}function ml(t,n){n===null?st(rr,rr.current):st(rr,n.pool)}function Wp(){var t=Ou();return t===null?null:{parent:sn._currentValue,pool:t}}var qr=Error(r(460)),zu=Error(r(474)),gl=Error(r(542)),_l={then:function(){}};function qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Zp(t),t}throw or=n,qr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,qr):a}}var or=null;function jp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function Zp(t){if(t===qr||t===gl)throw Error(r(483))}var Yr=null,no=0;function vl(t){var n=no;return no+=1,Yr===null&&(Yr=[]),Yp(Yr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Kp(t){function n(Q,X){if(t){var et=Q.deletions;et===null?(Q.deletions=[X],Q.flags|=16):et.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function s(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Ii(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,et){return Q.index=et,t?(et=Q.alternate,et!==null?(et=et.index,et<X?(Q.flags|=67108866,X):et):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function S(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function T(Q,X,et,mt){return X===null||X.tag!==6?(X=Eu(et,Q.mode,mt),X.return=Q,X):(X=u(X,et),X.return=Q,X)}function F(Q,X,et,mt){var ie=et.type;return ie===A?dt(Q,X,et.props.children,mt,et.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===W&&sr(ie)===X.type)?(X=u(X,et.props),io(X,et),X.return=Q,X):(X=fl(et.type,et.key,et.props,null,Q.mode,mt),io(X,et),X.return=Q,X)}function nt(Q,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=bu(et,Q.mode,mt),X.return=Q,X):(X=u(X,et.children||[]),X.return=Q,X)}function dt(Q,X,et,mt,ie){return X===null||X.tag!==7?(X=er(et,Q.mode,mt,ie),X.return=Q,X):(X=u(X,et),X.return=Q,X)}function _t(Q,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Eu(""+X,Q.mode,et),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=fl(X.type,X.key,X.props,null,Q.mode,et),io(et,X),et.return=Q,et;case b:return X=bu(X,Q.mode,et),X.return=Q,X;case W:return X=sr(X),_t(Q,X,et)}if(ht(X)||tt(X))return X=er(X,Q.mode,et,null),X.return=Q,X;if(typeof X.then=="function")return _t(Q,vl(X),et);if(X.$$typeof===L)return _t(Q,pl(Q,X),et);xl(Q,X)}return null}function it(Q,X,et,mt){var ie=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ie!==null?null:T(Q,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===ie?F(Q,X,et,mt):null;case b:return et.key===ie?nt(Q,X,et,mt):null;case W:return et=sr(et),it(Q,X,et,mt)}if(ht(et)||tt(et))return ie!==null?null:dt(Q,X,et,mt,null);if(typeof et.then=="function")return it(Q,X,vl(et),mt);if(et.$$typeof===L)return it(Q,X,pl(Q,et),mt);xl(Q,et)}return null}function ut(Q,X,et,mt,ie){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Q=Q.get(et)||null,T(X,Q,""+mt,ie);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return Q=Q.get(mt.key===null?et:mt.key)||null,F(X,Q,mt,ie);case b:return Q=Q.get(mt.key===null?et:mt.key)||null,nt(X,Q,mt,ie);case W:return mt=sr(mt),ut(Q,X,et,mt,ie)}if(ht(mt)||tt(mt))return Q=Q.get(et)||null,dt(X,Q,mt,ie,null);if(typeof mt.then=="function")return ut(Q,X,et,vl(mt),ie);if(mt.$$typeof===L)return ut(Q,X,et,pl(X,mt),ie);xl(X,mt)}return null}function qt(Q,X,et,mt){for(var ie=null,De=null,Kt=X,de=X=0,Te=null;Kt!==null&&de<et.length;de++){Kt.index>de?(Te=Kt,Kt=null):Te=Kt.sibling;var Ue=it(Q,Kt,et[de],mt);if(Ue===null){Kt===null&&(Kt=Te);break}t&&Kt&&Ue.alternate===null&&n(Q,Kt),X=f(Ue,X,de),De===null?ie=Ue:De.sibling=Ue,De=Ue,Kt=Te}if(de===et.length)return a(Q,Kt),Ae&&Fi(Q,de),ie;if(Kt===null){for(;de<et.length;de++)Kt=_t(Q,et[de],mt),Kt!==null&&(X=f(Kt,X,de),De===null?ie=Kt:De.sibling=Kt,De=Kt);return Ae&&Fi(Q,de),ie}for(Kt=s(Kt);de<et.length;de++)Te=ut(Kt,Q,de,et[de],mt),Te!==null&&(t&&Te.alternate!==null&&Kt.delete(Te.key===null?de:Te.key),X=f(Te,X,de),De===null?ie=Te:De.sibling=Te,De=Te);return t&&Kt.forEach(function(Na){return n(Q,Na)}),Ae&&Fi(Q,de),ie}function re(Q,X,et,mt){if(et==null)throw Error(r(151));for(var ie=null,De=null,Kt=X,de=X=0,Te=null,Ue=et.next();Kt!==null&&!Ue.done;de++,Ue=et.next()){Kt.index>de?(Te=Kt,Kt=null):Te=Kt.sibling;var Na=it(Q,Kt,Ue.value,mt);if(Na===null){Kt===null&&(Kt=Te);break}t&&Kt&&Na.alternate===null&&n(Q,Kt),X=f(Na,X,de),De===null?ie=Na:De.sibling=Na,De=Na,Kt=Te}if(Ue.done)return a(Q,Kt),Ae&&Fi(Q,de),ie;if(Kt===null){for(;!Ue.done;de++,Ue=et.next())Ue=_t(Q,Ue.value,mt),Ue!==null&&(X=f(Ue,X,de),De===null?ie=Ue:De.sibling=Ue,De=Ue);return Ae&&Fi(Q,de),ie}for(Kt=s(Kt);!Ue.done;de++,Ue=et.next())Ue=ut(Kt,Q,de,Ue.value,mt),Ue!==null&&(t&&Ue.alternate!==null&&Kt.delete(Ue.key===null?de:Ue.key),X=f(Ue,X,de),De===null?ie=Ue:De.sibling=Ue,De=Ue);return t&&Kt.forEach(function(VS){return n(Q,VS)}),Ae&&Fi(Q,de),ie}function Ve(Q,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var ie=et.key;X!==null;){if(X.key===ie){if(ie=et.type,ie===A){if(X.tag===7){a(Q,X.sibling),mt=u(X,et.props.children),mt.return=Q,Q=mt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===W&&sr(ie)===X.type){a(Q,X.sibling),mt=u(X,et.props),io(mt,et),mt.return=Q,Q=mt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}et.type===A?(mt=er(et.props.children,Q.mode,mt,et.key),mt.return=Q,Q=mt):(mt=fl(et.type,et.key,et.props,null,Q.mode,mt),io(mt,et),mt.return=Q,Q=mt)}return S(Q);case b:t:{for(ie=et.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(Q,X.sibling),mt=u(X,et.children||[]),mt.return=Q,Q=mt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}mt=bu(et,Q.mode,mt),mt.return=Q,Q=mt}return S(Q);case W:return et=sr(et),Ve(Q,X,et,mt)}if(ht(et))return qt(Q,X,et,mt);if(tt(et)){if(ie=tt(et),typeof ie!="function")throw Error(r(150));return et=ie.call(et),re(Q,X,et,mt)}if(typeof et.then=="function")return Ve(Q,X,vl(et),mt);if(et.$$typeof===L)return Ve(Q,X,pl(Q,et),mt);xl(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(Q,X.sibling),mt=u(X,et),mt.return=Q,Q=mt):(a(Q,X),mt=Eu(et,Q.mode,mt),mt.return=Q,Q=mt),S(Q)):a(Q,X)}return function(Q,X,et,mt){try{no=0;var ie=Ve(Q,X,et,mt);return Yr=null,ie}catch(Kt){if(Kt===qr||Kt===gl)throw Kt;var De=jn(29,Kt,null,Q.mode);return De.lanes=mt,De.return=Q,De}}}var lr=Kp(!0),Qp=Kp(!1),ga=!1;function Pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ul(t),Op(t,null,a),n}return cl(t,s,n,a),ul(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ei(t,a)}}function Iu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Fu=!1;function ro(){if(Fu){var t=Wr;if(t!==null)throw t}}function so(t,n,a,s){Fu=!1;var u=t.updateQueue;ga=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,nt=F.next;F.next=null,S===null?f=nt:S.next=nt,S=F;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==S&&(T===null?dt.firstBaseUpdate=nt:T.next=nt,dt.lastBaseUpdate=F))}if(f!==null){var _t=u.baseState;S=0,dt=nt=F=null,T=f;do{var it=T.lane&-536870913,ut=it!==T.lane;if(ut?(be&it)===it:(s&it)===it){it!==0&&it===kr&&(Fu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var qt=t,re=T;it=n;var Ve=a;switch(re.tag){case 1:if(qt=re.payload,typeof qt=="function"){_t=qt.call(Ve,_t,it);break t}_t=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=re.payload,it=typeof qt=="function"?qt.call(Ve,_t,it):qt,it==null)break t;_t=g({},_t,it);break t;case 2:ga=!0}}it=T.callback,it!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[it]:ut.push(it))}else ut={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(nt=dt=ut,F=_t):dt=dt.next=ut,S|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ut=T,T=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(F=_t),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ea|=S,t.lanes=S,t.memoizedState=_t}}function Jp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function $p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jp(a[t],n)}var jr=O(null),Sl=O(0);function tm(t,n){t=Ki,st(Sl,t),st(jr,n),Ki=t|n.baseLanes}function Hu(){st(Sl,Ki),st(jr,jr.current)}function Gu(){Ki=Sl.current,V(jr),V(Sl)}var Zn=O(null),ci=null;function xa(t){var n=t.alternate;st(nn,nn.current&1),st(Zn,t),ci===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(ci=t)}function Vu(t){st(nn,nn.current),st(Zn,t),ci===null&&(ci=t)}function em(t){t.tag===22?(st(nn,nn.current),st(Zn,t),ci===null&&(ci=t)):Sa()}function Sa(){st(nn,nn.current),st(Zn,Zn.current)}function Kn(t){V(Zn),ci===t&&(ci=null),V(nn)}var nn=O(0);function yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zf(a)||Kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,he=null,He=null,on=null,Ml=!1,Zr=!1,cr=!1,El=0,oo=0,Kr=null,Lx=0;function $e(){throw Error(r(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function ku(t,n,a,s,u,f){return Vi=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Im:sf,cr=!1,f=a(s,u),cr=!1,Zr&&(f=im(n,a,s,u)),nm(t),f}function nm(t){P.H=uo;var n=He!==null&&He.next!==null;if(Vi=0,on=He=he=null,Ml=!1,oo=0,Kr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&dl(t)&&(ln=!0))}function im(t,n,a,s){he=t;var u=0;do{if(Zr&&(Kr=null),oo=0,Zr=!1,25<=u)throw Error(r(301));if(u+=1,on=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Fm,f=n(a,s)}while(Zr);return f}function Nx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(he.flags|=1024),n}function Wu(){var t=El!==0;return El=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Vi=0,on=He=he=null,Zr=!1,oo=El=0,Kr=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?he.memoizedState=on=t:on=on.next=t,on}function an(){if(He===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=on===null?he.memoizedState:on.next;if(n!==null)on=n,He=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?he.memoizedState=on=t:on=on.next=t}return on}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,Kr===null&&(Kr=[]),t=Yp(Kr,t,n),n=he,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Im:sf),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===L)return Mn(t)}throw Error(r(438,String(t)))}function ju(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=an();return Zu(n,He,t)}function Zu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=S=null,F=null,nt=n,dt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(be&_t)===_t:(Vi&_t)===_t){var it=nt.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===kr&&(dt=!0);else if((Vi&it)===it){nt=nt.next,it===kr&&(dt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(T=F=_t,S=f):F=F.next=_t,he.lanes|=it,Ea|=it;_t=nt.action,cr&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else it={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(T=F=it,S=f):F=F.next=it,he.lanes|=_t,Ea|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?S=f:F.next=T,!Yn(f,t.memoizedState)&&(ln=!0,dt&&(a=Wr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=F,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ku(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=t(f,S.action),S=S.next;while(S!==u);Yn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function am(t,n,a){var s=he,u=an(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Yn((He||u).memoizedState,a);if(S&&(u.memoizedState=a,ln=!0),u=u.queue,$u(om.bind(null,s,u,t),[t]),u.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Qr(9,{destroy:void 0},sm.bind(null,s,u,a,n),null),Ye===null)throw Error(r(349));f||(Vi&127)!==0||rm(s,n,a)}return a}function rm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=bl(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sm(t,n,a,s){n.value=a,n.getSnapshot=s,lm(n)&&cm(t)}function om(t,n,a){return a(function(){lm(n)&&cm(t)})}function lm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function cm(t){var n=tr(t,2);n!==null&&Xn(n,t,2)}function Qu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),cr){te(!0);try{a()}finally{te(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function um(t,n,a,s){return t.baseState=a,Zu(t,He,typeof s=="function"?s:Xi)}function Ox(t,n,a,s,u){if(wl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(u,s),F=P.S;F!==null&&F(S,T),hm(t,n,T)}catch(nt){Ju(t,n,nt)}finally{f!==null&&S.types!==null&&(f.types=S.types),P.T=f}}else try{f=a(u,s),hm(t,n,f)}catch(nt){Ju(t,n,nt)}}function hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){dm(t,n,s)},function(s){return Ju(t,n,s)}):dm(t,n,a)}function dm(t,n,a){n.status="fulfilled",n.value=a,pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,fm(t,a)))}function Ju(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==s)}t.action=null}function pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function mm(t,n){return n}function gm(t,n){if(Ae){var a=Ye.formState;if(a!==null){t:{var s=he;if(Ae){if(Ze){e:{for(var u=Ze,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=ui(u.nextSibling),s=u.data==="F!";break t}}pa(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=s,a=zm.bind(null,he,s),s.dispatch=a,s=Qu(!1),f=rf.bind(null,he,!1,s.queue),s=Nn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Ox.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function _m(t){var n=an();return vm(n,He,t)}function vm(t,n,a){if(n=Zu(t,n,mm)[0],t=Al(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(S){throw S===qr?gl:S}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Qr(9,{destroy:void 0},zx.bind(null,u,a),null)),[s,f,t]}function zx(t,n){t.action=n}function xm(t){var n=an(),a=He;if(a!==null)return vm(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=bl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Sm(){return an().memoizedState}function Rl(t,n,a,s){var u=Nn();he.flags|=t,u.memoizedState=Qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cl(t,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&Xu(s,He.memoizedState.deps)?u.memoizedState=Qr(n,f,a,s):(he.flags|=t,u.memoizedState=Qr(1|n,f,a,s))}function ym(t,n){Rl(8390656,8,t,n)}function $u(t,n){Cl(2048,8,t,n)}function Px(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=bl(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Mm(t){var n=an().memoizedState;return Px({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Em(t,n){return Cl(4,2,t,n)}function bm(t,n){return Cl(4,4,t,n)}function Tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Am(t,n,a){a=a!=null?a.concat([t]):null,Cl(4,4,Tm.bind(null,n,t),a)}function tf(){}function Rm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Xu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Cm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Xu(n,s[1]))return s[0];if(s=t(),cr){te(!0);try{t()}finally{te(!1)}}return a.memoizedState=[s,n],s}function ef(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(be&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=wg(),he.lanes|=t,Ea|=t,a)}function wm(t,n,a,s){return Yn(a,n)?a:jr.current!==null?(t=ef(t,a,s),Yn(t,n)||(ln=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(be&261930)===0?(ln=!0,t.memoizedState=a):(t=wg(),he.lanes|=t,Ea|=t,n)}function Dm(t,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,rf(t,!1,n,a);try{var F=u(),nt=P.S;if(nt!==null&&nt(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=Ux(F,s);co(t,n,dt,$n(t))}else co(t,n,s,$n(t))}catch(_t){co(t,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{Y.p=f,S!==null&&T.types!==null&&(S.types=T.types),P.T=S}}function Bx(){}function nf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Um(t).queue;Dm(t,u,n,j,a===null?Bx:function(){return Lm(t),a(s)})}function Um(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Lm(t){var n=Um(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},$n())}function af(){return Mn(Ro)}function Nm(){return an().memoizedState}function Om(){return an().memoizedState}function Ix(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=_a(a);var s=va(n,t,a);s!==null&&(Xn(s,n,a),ao(s,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function Fx(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?Pm(n,a):(a=yu(t,n,a,s),a!==null&&(Xn(a,t,s),Bm(a,n,s)))}function zm(t,n,a){var s=$n();co(t,n,a,s)}function co(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Pm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Yn(T,S))return cl(t,n,u,0),Ye===null&&ll(),!1}catch{}if(a=yu(t,n,u,s),a!==null)return Xn(a,t,s),Bm(a,n,s),!0}return!1}function rf(t,n,a,s){if(s={lane:2,revertLane:Bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(r(479))}else n=yu(t,a,s,2),n!==null&&Xn(n,t,2)}function wl(t){var n=t.alternate;return t===he||n!==null&&n===he}function Pm(t,n){Zr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Bm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ei(t,a)}}var uo={readContext:Mn,use:Tl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};uo.useEffectEvent=$e;var Im={readContext:Mn,use:Tl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Rl(4194308,4,Tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Rl(4194308,4,t,n)},useInsertionEffect:function(t,n){Rl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(cr){te(!0);try{t()}finally{te(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var u=a(n);if(cr){te(!0);try{a(n)}finally{te(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Fx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Qu(t);var n=t.queue,a=zm.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(t,n){var a=Nn();return ef(a,t,n)},useTransition:function(){var t=Qu(!1);return t=Dm.bind(null,he,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Nn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(be&127)!==0||rm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(om.bind(null,s,f,t),[t]),s.flags|=2048,Qr(9,{destroy:void 0},sm.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=Ye.identifierPrefix;if(Ae){var a=Ai,s=Ti;a=(s&~(1<<32-Vt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:af,useFormState:gm,useActionState:gm,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:ju,useCacheRefresh:function(){return Nn().memoizedState=Ix.bind(null,he)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:Mn,use:Tl,useCallback:Rm,useContext:Mn,useEffect:$u,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:bm,useMemo:Cm,useReducer:Al,useRef:Sm,useState:function(){return Al(Xi)},useDebugValue:tf,useDeferredValue:function(t,n){var a=an();return wm(a,He.memoizedState,t,n)},useTransition:function(){var t=Al(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:af,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=an();return um(a,He,t,n)},useMemoCache:ju,useCacheRefresh:Om};sf.useEffectEvent=Mm;var Fm={readContext:Mn,use:Tl,useCallback:Rm,useContext:Mn,useEffect:$u,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:bm,useMemo:Cm,useReducer:Ku,useRef:Sm,useState:function(){return Ku(Xi)},useDebugValue:tf,useDeferredValue:function(t,n){var a=an();return He===null?ef(a,t,n):wm(a,He.memoizedState,t,n)},useTransition:function(){var t=Ku(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:af,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=an();return He!==null?um(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Om};Fm.useEffectEvent=Mm;function of(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),u=_a(s);u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(Xn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),u=_a(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(Xn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(Xn(n,t,a),ao(n,t,a))}};function Hm(t,n,a,s,u,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(u,f):!0}function Gm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Vm(t){ol(t)}function Xm(t){console.error(t)}function km(t){ol(t)}function Dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Wm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(t,n)},a}function qm(t){return t=_a(t),t.tag=3,t}function Ym(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Wm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Wm(n,a,s),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Hx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Vl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Of(t,s,u)),!1;case 22:return a.flags|=65536,s===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Of(t,s,u)),!1}throw Error(r(435,a.tag))}return Of(t,s,u),Vl(),!1}if(Ae)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ru&&(t=Error(r(422),{cause:s}),$s(ri(t,a)))):(s!==Ru&&(n=Error(r(423),{cause:s}),$s(ri(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ri(s,a),u=cf(t.stateNode,s,u),Iu(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),tn!==4&&(tn=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,s,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,t,a,s),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var uf=Error(r(461)),ln=!1;function En(t,n,a,s){n.child=t===null?Qp(n,null,a,s):lr(n,t.child,a,s)}function jm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ar(n),s=ku(t,n,a,S,f,u),T=Wu(),t!==null&&!ln?(qu(t,n,u),ki(t,n,u)):(Ae&&T&&Tu(n),n.flags|=1,En(t,n,s,u),n.child)}function Zm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(t,n,f,s,u)):(t=fl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vf(t,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(S,s)&&t.ref===n.ref)return ki(t,n,u)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function Km(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ks(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,vf(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,ki(t,n,u)}return ff(t,n,a,s,u)}function Qm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Jm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ml(n,f!==null?f.cachePool:null),f!==null?tm(n,f):Hu(),em(n);else return s=n.lanes=536870912,Jm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(ml(n,f.cachePool),tm(n,f),Sa(),n.memoizedState=null):(t!==null&&ml(n,null),Hu(),Sa());return En(t,n,u,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jm(t,n,a,s,u){var f=Ou();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ml(n,null),Hu(),em(n),t!==null&&Xr(t,n,s,!0),n.childLanes=u,null}function Ul(t,n){return n=Nl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function $m(t,n,a){return lr(n,t.child,null,a),t=Ul(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Gx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(s.mode==="hidden")return t=Ul(n,s),n.lanes=536870912,fo(null,t);if(Vu(n),(t=Ze)?(t=f0(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return Ul(n,s)}var f=t.memoizedState;if(f!==null){var S=f.dehydrated;if(Vu(n),u)if(n.flags&256)n.flags&=-257,n=$m(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Xr(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(s=Ye,s!==null&&(S=Cr(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,tr(t,S),Xn(s,t,S),uf;Vl(),n=$m(t,n,a)}else t=f.treeContext,Ze=ui(S.nextSibling),yn=n,Ae=!0,da=null,li=!1,t!==null&&Fp(n,t),n=Ul(n,s),n.flags|=4096;return n}return t=Ii(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ff(t,n,a,s,u){return ar(n),a=ku(t,n,a,s,void 0,u),s=Wu(),t!==null&&!ln?(qu(t,n,u),ki(t,n,u)):(Ae&&s&&Tu(n),n.flags|=1,En(t,n,a,u),n.child)}function tg(t,n,a,s,u,f){return ar(n),n.updateQueue=null,a=im(n,s,a,u),nm(t),s=Wu(),t!==null&&!ln?(qu(t,n,f),ki(t,n,f)):(Ae&&s&&Tu(n),n.flags|=1,En(t,n,a,f),n.child)}function eg(t,n,a,s,u){if(ar(n),n.stateNode===null){var f=Fr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Mn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Pu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Mn(S):Fr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(of(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&lf.enqueueReplaceState(f,f.state,null),so(n,s,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,F=ur(a,T);f.props=F;var nt=f.context,dt=a.contextType;S=Fr,typeof dt=="object"&&dt!==null&&(S=Mn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||nt!==S)&&Gm(n,f,s,S),ga=!1;var it=n.memoizedState;f.state=it,so(n,s,f,u),ro(),nt=n.memoizedState,T||it!==nt||ga?(typeof _t=="function"&&(of(n,a,_t,s),nt=n.memoizedState),(F=ga||Hm(n,a,F,s,it,nt,S))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=S,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Bu(t,n),S=n.memoizedProps,dt=ur(a,S),f.props=dt,_t=n.pendingProps,it=f.context,nt=a.contextType,F=Fr,typeof nt=="object"&&nt!==null&&(F=Mn(nt)),T=a.getDerivedStateFromProps,(nt=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_t||it!==F)&&Gm(n,f,s,F),ga=!1,it=n.memoizedState,f.state=it,so(n,s,f,u),ro();var ut=n.memoizedState;S!==_t||it!==ut||ga||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof T=="function"&&(of(n,a,T,s),ut=n.memoizedState),(dt=ga||Hm(n,a,dt,s,it,ut,F)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=F,s=dt):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ll(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=lr(n,t.child,null,u),n.child=lr(n,null,a,u)):En(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ki(t,n,u),t}function ng(t,n,a,s){return nr(),n.flags|=256,En(t,n,a,s),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:Wp()}}function pf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function ig(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(u?xa(n):Sa(),(t=Ze)?(t=f0(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Pp(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw pa(n);return Kf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Sa(),u=n.mode,T=Nl({mode:"hidden",children:T},u),s=er(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=df(a),s.childLanes=pf(t,S,a),n.memoizedState=hf,fo(null,s)):(xa(n),mf(n,T))}var F=t.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=gf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),T=s.fallback,u=n.mode,s=Nl({mode:"visible",children:s.children},u),T=er(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,lr(n,t.child,null,a),s=n.child,s.memoizedState=df(a),s.childLanes=pf(t,S,a),n.memoizedState=hf,n=fo(null,s));else if(xa(n),Kf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var nt=S.dgst;S=nt,s=Error(r(419)),s.stack="",s.digest=S,$s({value:s,source:null,stack:null}),n=gf(t,n,a)}else if(ln||Xr(t,n,a,!1),S=(a&t.childLanes)!==0,ln||S){if(S=Ye,S!==null&&(s=Cr(S,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,tr(t,s),Xn(S,t,s),uf;Zf(T)||Vl(),n=gf(t,n,a)}else Zf(T)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Ze=ui(T.nextSibling),yn=n,Ae=!0,da=null,li=!1,t!==null&&Fp(n,t),n=mf(n,s.children),n.flags|=4096);return n}return u?(Sa(),T=s.fallback,u=n.mode,F=t.child,nt=F.sibling,s=Ii(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,nt!==null?T=Ii(nt,T):(T=er(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,fo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=df(a):(u=T.cachePool,u!==null?(F=sn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Wp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=pf(t,S,a),n.memoizedState=hf,fo(t.child,s)):(xa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function mf(t,n){return n=Nl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Nl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function gf(t,n,a){return lr(n,t.child,null,a),t=mf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ag(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Du(t.return,n,a)}function _f(t,n,a,s,u,f){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function rg(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var S=nn.current,T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,st(nn,S),En(t,n,s,a),s=Ae?Js:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ag(t,a,n);else if(t.tag===19)ag(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&yl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&yl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,s);break;case"together":_f(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function Vx(t,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),ma(n,sn,t.memoizedState.cache),nr();break;case 27:case 5:Pt(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(t,n,a):(xa(n),t=ki(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return rg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),st(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Qm(t,n,a,n.pendingProps);case 24:ma(n,sn,t.memoizedState.cache)}return ki(t,n,a)}function sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!vf(t,a)&&(n.flags&128)===0)return ln=!1,Vx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Ae&&(n.flags&1048576)!==0&&Ip(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")Mu(t)?(s=ur(t,s),n.tag=1,n=eg(null,n,t,s,a)):(n.tag=0,n=ff(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=jm(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=Zm(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return ff(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ur(s,n.pendingProps),eg(t,n,s,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),so(n,s,null,a);var S=n.memoizedState;if(s=S.cache,ma(n,sn,s),s!==f.cache&&Uu(n,[sn],a,!0),ro(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ng(t,n,s,a);break t}else if(s!==u){u=ri(Error(r(424)),n),$s(u),n=ng(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=ui(t.firstChild),yn=n,Ae=!0,da=null,li=!0,a=Qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(nr(),s===u){n=ki(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=_0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Zl($.current).createElement(a),s[rn]=n,s[xn]=t,bn(s,a,t),St(s),n.stateNode=s):n.memoizedState=_0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Pt(n),t===null&&Ae&&(s=n.stateNode=p0(n.type,n.pendingProps,$.current),yn=n,li=!0,u=Ze,Ca(n.type)?(Qf=u,Ze=ui(s.firstChild)):Ze=u),En(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((u=s=Ze)&&(s=vS(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,yn=n,Ze=ui(s.firstChild),li=!1,u=!0):u=!1),u||pa(n)),Pt(n),u=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,s=f.children,qf(u,f)?s=null:S!==null&&qf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(t,n,Nx,null,null,a),Ro._currentValue=u),Ll(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=Ze)&&(a=xS(a,n.pendingProps,li),a!==null?(n.stateNode=a,yn=n,Ze=null,t=!0):t=!1),t||pa(n)),null;case 13:return ig(t,n,a);case 4:return Tt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=lr(n,null,s,a):En(t,n,s,a),n.child;case 11:return jm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ar(n),u=Mn(u),s=s(u),n.flags|=1,En(t,n,s,a),n.child;case 14:return Zm(t,n,n.type,n.pendingProps,a);case 15:return Km(t,n,n.type,n.pendingProps,a);case 19:return rg(t,n,a);case 31:return Gx(t,n,a);case 22:return Qm(t,n,a,n.pendingProps);case 24:return ar(n),s=Mn(sn),t===null?(u=Ou(),u===null&&(u=Ye,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Pu(n),ma(n,sn,u)):((t.lanes&a)!==0&&(Bu(t,n),so(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,sn,s)):(s=f.cache,ma(n,sn,s),s!==u.cache&&Uu(n,[sn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function xf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Ng())t.flags|=8192;else throw or=_l,zu}else t.flags&=-16777217}function og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M0(n))if(Ng())t.flags|=8192;else throw or=_l,zu}function Ol(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,es|=n)}function ho(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Xx(t,n,a){var s=n.pendingProps;switch(Au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Vr(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ke(n),og(n,f)):(Ke(n),xf(n,u,null,s,a))):f?f!==t.memoizedState?(Wi(n),Ke(n),og(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Wi(n),Ke(n),xf(n,u,t,s,a)),null;case 27:if(Wt(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=gt.current,Vr(n)?Hp(n):(t=p0(u,s,a),n.stateNode=t,Wi(n))}return Ke(n),null;case 5:if(Wt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=gt.current,Vr(n))Hp(n);else{var S=Zl($.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}f[rn]=n,f[xn]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(bn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Ke(n),xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,Vr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=yn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||i0(t.nodeValue,a)),t||pa(n,!0)}else t=Zl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Vr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Vr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Cu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Ke(n),null);case 4:return zt(),t===null&&Gf(n.stateNode.containerInfo),Ke(n),null;case 10:return Gi(n.type),Ke(n),null;case 19:if(V(nn),s=n.memoizedState,s===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ho(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yl(t),f!==null){for(n.flags|=128,ho(s,!1),t=f.updateQueue,n.updateQueue=t,Ol(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return st(nn,nn.current&1|2),Ae&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Fl&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304)}else{if(!u)if(t=yl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ol(n,t),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ae)return Ke(n),null}else 2*E()-s.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=nn.current,st(nn,u?a&1|2:a&1),Ae&&Fi(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Kn(n),Gu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&V(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function kx(t,n){switch(Au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(nn),null;case 4:return zt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Kn(n),Gu(),t!==null&&V(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function lg(t,n){switch(Au(n),n.tag){case 3:Gi(sn),zt();break;case 26:case 27:case 5:Wt(n);break;case 4:zt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:V(nn);break;case 10:Gi(n.type);break;case 22:case 23:Kn(n),Gu(),t!==null&&V(rr);break;case 24:Gi(sn)}}function po(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){Ie(n,n.return,T)}}function ya(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var F=a,nt=T;try{nt()}catch(dt){Ie(u,F,dt)}}}s=s.next}while(s!==f)}}catch(dt){Ie(n,n.return,dt)}}function cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$p(n,a)}catch(s){Ie(t,t.return,s)}}}function ug(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ie(t,n,u)}}function Ri(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function fg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function Sf(t,n,a){try{var s=t.stateNode;hS(s,t.type,a,n),s[xn]=n}catch(u){Ie(t,t.return,u)}}function hg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function yf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Mf(t,n,a),t=t.sibling;t!==null;)Mf(t,n,a),t=t.sibling}function zl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function dg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,s,a),n[rn]=t,n[xn]=a}catch(f){Ie(t,t.return,f)}}var qi=!1,cn=!1,Ef=!1,pg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Wx(t,n){if(t=t.containerInfo,kf=nc,t=Ap(t),mu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,F=-1,nt=0,dt=0,_t=t,it=null;e:for(;;){for(var ut;_t!==a||u!==0&&_t.nodeType!==3||(T=S+u),_t!==f||s!==0&&_t.nodeType!==3||(F=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)it=_t,_t=ut;for(;;){if(_t===t)break e;if(it===a&&++nt===u&&(T=S),it===f&&++dt===s&&(F=S),(ut=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ut}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},nc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qt=ur(a.type,u);t=s.getSnapshotBeforeUpdate(qt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(re){Ie(a,a.return,re)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function mg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&po(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Ie(a,a.return,S)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(a,a.return,S)}}s&64&&cg(a),s&512&&mo(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(t,n)}catch(S){Ie(a,a.return,S)}}break;case 27:n===null&&s&4&&dg(a);case 26:case 5:ji(t,a),n===null&&s&4&&fg(a),s&512&&mo(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&vg(t,a);break;case 13:ji(t,a),s&4&&xg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=tS.bind(null,a),SS(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,u=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=u,cn=f}break;case 30:break;default:ji(t,a)}}function gg(t){var n=t.alternate;n!==null&&(t.alternate=null,gg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Fn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)_g(t,n,a),a=a.sibling}function _g(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:cn||Ri(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ri(a,n);var s=Je,u=Fn;Ca(a.type)&&(Je=a.stateNode,Fn=!1),Yi(t,n,a),bo(a.stateNode),Je=s,Fn=u;break;case 5:cn||Ri(a,n);case 6:if(s=Je,u=Fn,Je=null,Yi(t,n,a),Je=s,Fn=u,Je!==null)if(Fn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Je!==null&&(Fn?(t=Je,c0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),cs(t)):c0(Je,a.stateNode));break;case 4:s=Je,u=Fn,Je=a.stateNode.containerInfo,Fn=!0,Yi(t,n,a),Je=s,Fn=u;break;case 0:case 11:case 14:case 15:ya(2,a,n),cn||ya(4,a,n),Yi(t,n,a);break;case 1:cn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&ug(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{cs(t)}catch(a){Ie(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{cs(t)}catch(a){Ie(n,n.return,a)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new pg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new pg),n;default:throw Error(r(435,t.tag))}}function Pl(t,n){var a=qx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=eS.bind(null,t,s);s.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Ca(T.type)){Je=T.stateNode,Fn=!1;break t}break;case 5:Je=T.stateNode,Fn=!1;break t;case 3:case 4:Je=T.stateNode.containerInfo,Fn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));_g(f,S,u),Je=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sg(n,t),n=n.sibling}var mi=null;function Sg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(ya(3,t,t.return),po(3,t),ya(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=mi;if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Za]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,s,a),f[rn]=t,St(f),s=f;break t;case"link":var S=S0("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=S0("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),bn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,St(f),s=f}t.stateNode=s}else y0(u,t.type,t.stateNode);else t.stateNode=x0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?y0(u,t.type,t.stateNode):x0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(cn||a===null||Ri(a,a.return)),a!==null&&s&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Ri(a,a.return)),t.flags&32){u=t.stateNode;try{Lr(u,"")}catch(qt){Ie(t,t.return,qt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Ef=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qt){Ie(t,t.return,qt)}}break;case 3:if(Jl=null,u=mi,mi=Kl(n.containerInfo),Hn(n,t),mi=u,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(n.containerInfo)}catch(qt){Ie(t,t.return,qt)}Ef&&(Ef=!1,yg(t));break;case 4:s=mi,mi=Kl(t.stateNode.containerInfo),Hn(n,t),Gn(t),mi=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pl(t,s)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=qi,dt=cn;if(qi=nt||u,cn=dt||F,Hn(n,t),cn=dt,qi=nt,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||qi||cn||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=F.stateNode;var _t=F.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(qt){Ie(F,F.return,qt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(qt){Ie(F,F.return,qt)}}}else if(n.tag===18){if(a===null){F=n;try{var ut=F.stateNode;u?u0(ut,!0):u0(F.stateNode,!1)}catch(qt){Ie(F,F.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Pl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(hg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=yf(t);zl(t,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Lr(S,""),a.flags&=-33);var T=yf(t);zl(t,T,S);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=yf(t);Mf(t,nt,F);break;default:throw Error(r(161))}}catch(dt){Ie(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function yg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),fr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),fr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ri(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(u,f,a),po(4,f);break;case 1:if(Zi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Ie(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Jp(F[u],T)}catch(nt){Ie(s,s.return,nt)}}a&&S&64&&cg(f),mo(f,f.return);break;case 27:dg(f);case 26:case 5:Zi(u,f,a),a&&s===null&&S&4&&fg(f),mo(f,f.return);break;case 12:Zi(u,f,a);break;case 31:Zi(u,f,a),a&&S&4&&vg(u,f);break;case 13:Zi(u,f,a),a&&S&4&&xg(u,f);break;case 22:f.memoizedState===null&&Zi(u,f,a),mo(f,f.return);break;case 30:break;default:Zi(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function gi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(t,n,a,s),n=n.sibling}function Mg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,s),u&2048&&po(9,n);break;case 1:gi(t,n,a,s);break;case 3:gi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){gi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ie(n,n.return,F)}}else gi(t,n,a,s);break;case 31:gi(t,n,a,s);break;case 13:gi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?gi(t,n,a,s):go(t,n):f._visibility&2?gi(t,n,a,s):(f._visibility|=2,Jr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(S,n);break;case 24:gi(t,n,a,s),u&2048&&Tf(n.alternate,n);break;default:gi(t,n,a,s)}}function Jr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,S=n,T=a,F=s,nt=S.flags;switch(S.tag){case 0:case 11:case 15:Jr(f,S,T,F,u),po(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Jr(f,S,T,F,u):go(f,S):(dt._visibility|=2,Jr(f,S,T,F,u)),u&&nt&2048&&bf(S.alternate,S);break;case 24:Jr(f,S,T,F,u),u&&nt&2048&&Tf(S.alternate,S);break;default:Jr(f,S,T,F,u)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:go(a,s),u&2048&&bf(s.alternate,s);break;case 24:go(a,s),u&2048&&Tf(s.alternate,s);break;default:go(a,s)}n=n.sibling}}var _o=8192;function $r(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Eg(t,n,a),t=t.sibling}function Eg(t,n,a){switch(t.tag){case 26:$r(t,n,a),t.flags&_o&&t.memoizedState!==null&&LS(a,mi,t.memoizedState,t.memoizedProps);break;case 5:$r(t,n,a);break;case 3:case 4:var s=mi;mi=Kl(t.stateNode.containerInfo),$r(t,n,a),mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=_o,_o=16777216,$r(t,n,a),_o=s):$r(t,n,a));break;default:$r(t,n,a)}}function bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Ag(s,t)}bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&ya(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):vo(t);break;default:vo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,Ag(s,t)}bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function Ag(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(gg(s),s===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var Yx={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},jx=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Ye=null,Se=null,be=0,Be=0,Qn=null,Ma=!1,ts=!1,Af=!1,Ki=0,tn=0,Ea=0,hr=0,Rf=0,Jn=0,es=0,xo=null,Vn=null,Cf=!1,Il=0,Rg=0,Fl=1/0,Hl=null,ba=null,hn=0,Ta=null,ns=null,Qi=0,wf=0,Df=null,Cg=null,So=0,Uf=null;function $n(){return(Ne&2)!==0&&be!==0?be&-be:P.T!==null?Bf():ja()}function wg(){if(Jn===0)if((be&536870912)===0||Ae){var t=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Xn(t,n,a){(t===Ye&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(is(t,0),Aa(t,be,Jn,!1)),Un(t,a),((Ne&2)===0||t!==Ye)&&(t===Ye&&((Ne&2)===0&&(hr|=a),tn===4&&Aa(t,be,Jn,!1)),Ci(t))}function Dg(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||kt(t,n),u=s?Qx(t,n):Nf(t,n,!0),f=s;do{if(u===0){ts&&!s&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Zx(a)){u=Nf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;u=xo;var F=T.current.memoizedState.isDehydrated;if(F&&(is(T,S).flags|=256),S=Nf(T,S,!1),S!==2){if(Af&&!F){T.errorRecoveryDisabledLanes|=f,hr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){is(t,0),Aa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,Jn,!Ma);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Il+300-E(),10<u)){if(Aa(s,n,Jn,!Ma),vt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=o0(Ug.bind(null,s,a,Vn,Hl,Cf,n,Jn,hr,es,Ma,f,"Throttled",-0,0),u);break t}Ug(s,a,Vn,Hl,Cf,n,Jn,hr,es,Ma,f,null,-0,0)}}break}while(!0);Ci(t)}function Ug(t,n,a,s,u,f,S,T,F,nt,dt,_t,it,ut){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Eg(n,f,_t);var qt=(f&62914560)===f?Il-E():(f&4194048)===f?Rg-E():0;if(qt=NS(_t,qt),qt!==null){Qi=f,t.cancelPendingCommit=qt(Fg.bind(null,t,n,f,a,s,u,S,T,F,dt,_t,null,it,ut)),Aa(t,f,S,!nt);return}}Fg(t,n,f,a,s,u,S,T,F)}function Zx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,s){n&=~Rf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Vt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Hs(t,a,n)}function Gl(){return(Ne&6)===0?(yo(0),!1):!0}function Lf(){if(Se!==null){if(Be===0)var t=Se.return;else t=Se,Hi=ir=null,Yu(t),Yr=null,no=0,t=Se;for(;t!==null;)lg(t.alternate,t),t=t.return;Se=null}}function is(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Lf(),Ye=t,Se=a=Ii(t.current,null),be=n,Be=0,Qn=null,Ma=!1,ts=kt(t,n),Af=!1,es=Jn=Rf=hr=Ea=tn=0,Vn=xo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Vt(s),f=1<<u;n|=t[u],s&=~f}return Ki=n,ll(),a}function Lg(t,n){he=null,P.H=uo,n===qr||n===gl?(n=jp(),Be=3):n===zu?(n=jp(),Be=4):Be=n===uf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Se===null&&(tn=1,Dl(t,ri(n,t.current)))}function Ng(){var t=Zn.current;return t===null?!0:(be&4194048)===be?ci===null:(be&62914560)===be||(be&536870912)!==0?t===ci:!1}function Og(){var t=P.H;return P.H=uo,t===null?uo:t}function zg(){var t=P.A;return P.A=Yx,t}function Vl(){tn=4,Ma||(be&4194048)!==be&&Zn.current!==null||(ts=!0),(Ea&134217727)===0&&(hr&134217727)===0||Ye===null||Aa(Ye,be,Jn,!1)}function Nf(t,n,a){var s=Ne;Ne|=2;var u=Og(),f=zg();(Ye!==t||be!==n)&&(Hl=null,is(t,n)),n=!1;var S=tn;t:do try{if(Be!==0&&Se!==null){var T=Se,F=Qn;switch(Be){case 8:Lf(),S=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var nt=Be;if(Be=0,Qn=null,as(t,T,F,nt),a&&ts){S=0;break t}break;default:nt=Be,Be=0,Qn=null,as(t,T,F,nt)}}Kx(),S=tn;break}catch(dt){Lg(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Hi=ir=null,Ne=s,P.H=u,P.A=f,Se===null&&(Ye=null,be=0,ll()),S}function Kx(){for(;Se!==null;)Pg(Se)}function Qx(t,n){var a=Ne;Ne|=2;var s=Og(),u=zg();Ye!==t||be!==n?(Hl=null,Fl=E()+500,is(t,n)):ts=kt(t,n);t:do try{if(Be!==0&&Se!==null){n=Se;var f=Qn;e:switch(Be){case 1:Be=0,Qn=null,as(t,n,f,1);break;case 2:case 9:if(qp(f)){Be=0,Qn=null,Bg(n);break}n=function(){Be!==2&&Be!==9||Ye!==t||(Be=7),Ci(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:qp(f)?(Be=0,Qn=null,Bg(n)):(Be=0,Qn=null,as(t,n,f,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var T=Se;if(S?M0(S):T.stateNode.complete){Be=0,Qn=null;var F=T.sibling;if(F!==null)Se=F;else{var nt=T.return;nt!==null?(Se=nt,Xl(nt)):Se=null}break e}}Be=0,Qn=null,as(t,n,f,5);break;case 6:Be=0,Qn=null,as(t,n,f,6);break;case 8:Lf(),tn=6;break t;default:throw Error(r(462))}}Jx();break}catch(dt){Lg(t,dt)}while(!0);return Hi=ir=null,P.H=s,P.A=u,Ne=a,Se!==null?0:(Ye=null,be=0,ll(),tn)}function Jx(){for(;Se!==null&&!$t();)Pg(Se)}function Pg(t){var n=sg(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Xl(t):Se=n}function Bg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:Yu(n);default:lg(a,n),n=Se=zp(n,Ki),n=sg(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Xl(t):Se=n}function as(t,n,a,s){Hi=ir=null,Yu(n),Yr=null,no=0;var u=n.return;try{if(Hx(t,u,n,a,be)){tn=1,Dl(t,ri(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;tn=1,Dl(t,ri(a,t.current)),Se=null;return}n.flags&32768?(Ae||s===1?t=!0:ts||(be&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ig(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Ig(n,Ma);return}t=n.return;var a=Xx(n.alternate,n,Ki);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);tn===0&&(tn=5)}function Ig(t,n){do{var a=kx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);tn=6,Se=null}function Fg(t,n,a,s,u,f,S,T,F){t.cancelPendingCommit=null;do kl();while(hn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Su,ii(t,a,f,S,T,F),t===Ye&&(Se=Ye=null,be=0),ns=n,Ta=t,Qi=a,wf=f,Df=u,Cg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(at,function(){return kg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=Y.p,Y.p=2,S=Ne,Ne|=4;try{Wx(t,n,a)}finally{Ne=S,Y.p=u,P.T=s}}hn=1,Hg(),Gg(),Vg()}}function Hg(){if(hn===1){hn=0;var t=Ta,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Ne;Ne|=4;try{Sg(n,t);var f=Wf,S=Ap(t.containerInfo),T=f.focusedElem,F=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Tp(T.ownerDocument.documentElement,T)){if(F!==null&&mu(T)){var nt=F.start,dt=F.end;if(dt===void 0&&(dt=nt),"selectionStart"in T)T.selectionStart=nt,T.selectionEnd=Math.min(dt,T.value.length);else{var _t=T.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ut=it.getSelection(),qt=T.textContent.length,re=Math.min(F.start,qt),Ve=F.end===void 0?re:Math.min(F.end,qt);!ut.extend&&re>Ve&&(S=Ve,Ve=re,re=S);var Q=bp(T,re),X=bp(T,Ve);if(Q&&X&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(Q.node,Q.offset),ut.removeAllRanges(),re>Ve?(ut.addRange(et),ut.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ut.addRange(et))}}}}for(_t=[],ut=T;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var mt=_t[T];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}nc=!!kf,Wf=kf=null}finally{Ne=u,Y.p=s,P.T=a}}t.current=n,hn=2}}function Gg(){if(hn===2){hn=0;var t=Ta,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Ne;Ne|=4;try{mg(t,n.alternate,n)}finally{Ne=u,Y.p=s,P.T=a}}hn=3}}function Vg(){if(hn===4||hn===3){hn=0,U();var t=Ta,n=ns,a=Qi,s=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,ns=Ta=null,Xg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ba=null),Dr(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=t.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Y.p=u}}(Qi&3)!==0&&kl(),Ci(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Uf?So++:(So=0,Uf=t):So=0,yo(0)}}function Xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function kl(){return Hg(),Gg(),Vg(),kg()}function kg(){if(hn!==5)return!1;var t=Ta,n=wf;wf=0;var a=Dr(Qi),s=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Df,Df=null;var f=Ta,S=Qi;if(hn=0,ns=Ta=null,Qi=0,(Ne&6)!==0)throw Error(r(331));var T=Ne;if(Ne|=4,Tg(f.current),Mg(f,f.current,S,a),Ne=T,yo(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{Y.p=u,P.T=s,Xg(t,n)}}function Wg(t,n,a){n=ri(a,n),n=cf(t.stateNode,n,2),t=va(t,n,2),t!==null&&(Un(t,2),Ci(t))}function Ie(t,n,a){if(t.tag===3)Wg(t,t,a);else for(;n!==null;){if(n.tag===3){Wg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ba===null||!ba.has(s))){t=ri(a,t),a=qm(2),s=va(n,a,2),s!==null&&(Ym(a,s,n,t),Un(s,2),Ci(s));break}}n=n.return}}function Of(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new jx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Af=!0,u.add(a),t=$x.bind(null,t,n,a),n.then(t,t))}function $x(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(be&a)===a&&(tn===4||tn===3&&(be&62914560)===be&&300>E()-Il?(Ne&2)===0&&is(t,0):Rf|=a,es===be&&(es=0)),Ci(t)}function qg(t,n){n===0&&(n=Pe()),t=tr(t,n),t!==null&&(Un(t,n),Ci(t))}function tS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(t,a)}function eS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),qg(t,a)}function nS(t,n){return ae(t,n)}var Wl=null,rs=null,zf=!1,ql=!1,Pf=!1,Ra=0;function Ci(t){t!==rs&&t.next===null&&(rs===null?Wl=rs=t:rs=rs.next=t),ql=!0,zf||(zf=!0,aS())}function yo(t,n){if(!Pf&&ql){Pf=!0;do for(var a=!1,s=Wl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Kg(s,f))}else f=be,f=vt(s,s===Ye?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||kt(s,f)||(a=!0,Kg(s,f));s=s.next}while(a);Pf=!1}}function iS(){Yg()}function Yg(){ql=zf=!1;var t=0;Ra!==0&&pS()&&(t=Ra);for(var n=E(),a=null,s=Wl;s!==null;){var u=s.next,f=jg(s,n);f===0?(s.next=null,a===null?Wl=u:a.next=u,u===null&&(rs=a)):(a=s,(t!==0||(f&3)!==0)&&(ql=!0)),s=u}hn!==0&&hn!==5||yo(t),Ra!==0&&(Ra=0)}function jg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Vt(f),T=1<<S,F=u[S];F===-1?((T&a)===0||(T&s)!==0)&&(u[S]=le(T,n)):F<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ye,a=be,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Fe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||kt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Fe(s),Dr(a)){case 2:case 8:a=xt;break;case 32:a=at;break;case 268435456:a=Dt;break;default:a=at}return s=Zg.bind(null,t),a=ae(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Fe(s),t.callbackPriority=2,t.callbackNode=null,2}function Zg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kl()&&t.callbackNode!==a)return null;var s=be;return s=vt(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Dg(t,s,n),jg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Zg.bind(null,t):null)}function Kg(t,n){if(kl())return null;Dg(t,n,!0)}function aS(){gS(function(){(Ne&6)!==0?ae(lt,iS):Yg()})}function Bf(){if(Ra===0){var t=kr;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ra=t}return Ra}function Qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:tl(""+t)}function Jg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function rS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qg((u[xn]||null).action),S=s.submitter;S&&(n=(n=S[xn]||null)?Qg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new al("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ra!==0){var F=S?Jg(u,S):new FormData(u);nf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=S?Jg(u,S):new FormData(u),nf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var If=0;If<xu.length;If++){var Ff=xu[If],sS=Ff.toLowerCase(),oS=Ff[0].toUpperCase()+Ff.slice(1);pi(sS,"on"+oS)}pi(wp,"onAnimationEnd"),pi(Dp,"onAnimationIteration"),pi(Up,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Ex,"onTransitionRun"),pi(bx,"onTransitionStart"),pi(Tx,"onTransitionCancel"),pi(Lp,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function $g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],F=T.instance,nt=T.currentTarget;if(T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=F}else for(S=0;S<s.length;S++){if(T=s[S],F=T.instance,nt=T.currentTarget,T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=nt;try{f(u)}catch(dt){ol(dt)}u.currentTarget=null,f=F}}}}function ye(t,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var s=t+"__bubble";a.has(s)||(t0(n,t,2,!1),a.add(s))}function Hf(t,n,a){var s=0;n&&(s|=4),t0(a,t,s,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[Yl]){t[Yl]=!0,It.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||Hf(a,!1,t),Hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Hf("selectionchange",!1,n))}}function t0(t,n,a,s){switch(w0(n)){case 2:var u=PS;break;case 8:u=BS;break;default:u=nh}a=u.bind(null,n,a,t),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Vf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var F=S.tag;if((F===3||F===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=Z(T),S===null)return;if(F=S.tag,F===5||F===6||F===26||F===27){s=f=S;continue t}T=T.parentNode}}s=s.return}rp(function(){var nt=f,dt=au(a),_t=[];t:{var it=Np.get(t);if(it!==void 0){var ut=al,qt=t;switch(t){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":ut=ex;break;case"focusin":qt="focus",ut=uu;break;case"focusout":qt="blur",ut=uu;break;case"beforeblur":case"afterblur":ut=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=ax;break;case wp:case Dp:case Up:ut=qv;break;case Lp:ut=sx;break;case"scroll":case"scrollend":ut=Gv;break;case"wheel":ut=lx;break;case"copy":case"cut":case"paste":ut=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=up;break;case"toggle":case"beforetoggle":ut=ux}var re=(n&4)!==0,Ve=!re&&(t==="scroll"||t==="scrollend"),Q=re?it!==null?it+"Capture":null:it;re=[];for(var X=nt,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||Q===null||(mt=Xs(X,Q),mt!=null&&re.push(Eo(X,mt,et))),Ve)break;X=X.return}0<re.length&&(it=new ut(it,qt,null,a,dt),_t.push({event:it,listeners:re}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",it&&a!==iu&&(qt=a.relatedTarget||a.fromElement)&&(Z(qt)||qt[ua]))break t;if((ut||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ut?(qt=a.relatedTarget||a.toElement,ut=nt,qt=qt?Z(qt):null,qt!==null&&(Ve=c(qt),re=qt.tag,qt!==Ve||re!==5&&re!==27&&re!==6)&&(qt=null)):(ut=null,qt=nt),ut!==qt)){if(re=lp,mt="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(re=up,mt="onPointerLeave",Q="onPointerEnter",X="pointer"),Ve=ut==null?it:ot(ut),et=qt==null?it:ot(qt),it=new re(mt,X+"leave",ut,a,dt),it.target=Ve,it.relatedTarget=et,mt=null,Z(dt)===nt&&(re=new re(Q,X+"enter",qt,a,dt),re.target=et,re.relatedTarget=Ve,mt=re),Ve=mt,ut&&qt)e:{for(re=cS,Q=ut,X=qt,et=0,mt=Q;mt;mt=re(mt))et++;mt=0;for(var ie=X;ie;ie=re(ie))mt++;for(;0<et-mt;)Q=re(Q),et--;for(;0<mt-et;)X=re(X),mt--;for(;et--;){if(Q===X||X!==null&&Q===X.alternate){re=Q;break e}Q=re(Q),X=re(X)}re=null}else re=null;ut!==null&&e0(_t,it,ut,re,!1),qt!==null&&Ve!==null&&e0(_t,Ve,qt,re,!0)}}t:{if(it=nt?ot(nt):window,ut=it.nodeName&&it.nodeName.toLowerCase(),ut==="select"||ut==="input"&&it.type==="file")var De=vp;else if(gp(it))if(xp)De=Sx;else{De=vx;var Kt=_x}else ut=it.nodeName,!ut||ut.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&nu(nt.elementType)&&(De=vp):De=xx;if(De&&(De=De(t,nt))){_p(_t,De,a,dt);break t}Kt&&Kt(t,it,nt),t==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&fn(it,"number",it.value)}switch(Kt=nt?ot(nt):window,t){case"focusin":(gp(Kt)||Kt.contentEditable==="true")&&(Pr=Kt,gu=nt,Qs=null);break;case"focusout":Qs=gu=Pr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Rp(_t,a,dt);break;case"selectionchange":if(Mx)break;case"keydown":case"keyup":Rp(_t,a,dt)}var de;if(hu)t:{switch(t){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else zr?pp(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(fp&&a.locale!=="ko"&&(zr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&zr&&(de=sp()):(fa=dt,ou="value"in fa?fa.value:fa.textContent,zr=!0)),Kt=jl(nt,Te),0<Kt.length&&(Te=new cp(Te,t,null,a,dt),_t.push({event:Te,listeners:Kt}),de?Te.data=de:(de=mp(a),de!==null&&(Te.data=de)))),(de=hx?dx(t,a):px(t,a))&&(Te=jl(nt,"onBeforeInput"),0<Te.length&&(Kt=new cp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:Kt,listeners:Te}),Kt.data=de)),rS(_t,t,nt,a,dt)}$g(_t,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xs(t,a),u!=null&&s.unshift(Eo(t,u,f)),u=Xs(t,n),u!=null&&s.push(Eo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function cS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e0(t,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,F=T.alternate,nt=T.stateNode;if(T=T.tag,F!==null&&F===s)break;T!==5&&T!==26&&T!==27||nt===null||(F=nt,u?(nt=Xs(a,f),nt!=null&&S.unshift(Eo(a,nt,F))):u||(nt=Xs(a,f),nt!=null&&S.push(Eo(a,nt,F)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function i0(t,n){return n=n0(n),n0(t)===n}function Ge(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Lr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Lr(t,""+s);break;case"className":ze(t,"class",s);break;case"tabIndex":ze(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,a,s);break;case"style":ip(t,s,f);break;case"data":if(n!=="object"){ze(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=tl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=tl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=tl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),qe(t,"popover",s);break;case"xlinkActuate":xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":qe(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,qe(t,a,s))}}function Xf(t,n,a,s,u,f){switch(a){case"style":ip(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Lr(t,s):(typeof s=="number"||typeof s=="bigint")&&Lr(t,""+s);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):qe(t,a,s)}}}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,S,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var T=f=S=u=null,F=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":S=dt;break;case"checked":F=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,dt,a,null)}}Ln(t,f,T,F,nt,S,u,!1);return;case"select":ye("invalid",t),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Ge(t,n,u,T,a,null)}n=f,a=S,t.multiple=!!s,n!=null?en(t,!!s,n,!1):a!=null&&en(t,!!s,a,!0);return;case"textarea":ye("invalid",t),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ge(t,n,S,T,a,null)}bi(t,s,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!=null)&&(F==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,F,s,a,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<Mo.length;s++)ye(Mo[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,nt,s,a,null)}return;default:if(nu(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Xf(t,n,dt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ge(t,n,T,s,a,null))}function hS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,F=null,nt=null,dt=null;for(ut in a){var _t=a[ut];if(a.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":F=_t;default:s.hasOwnProperty(ut)||Ge(t,n,ut,null,s,_t)}}for(var it in s){var ut=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(ut!=null||_t!=null))switch(it){case"type":f=ut;break;case"name":u=ut;break;case"checked":nt=ut;break;case"defaultChecked":dt=ut;break;case"value":S=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==_t&&Ge(t,n,it,ut,s,_t)}}Rn(t,S,T,F,nt,dt,f,u);return;case"select":ut=S=T=it=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ut=F;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,F)}for(u in s)if(f=s[u],F=a[u],s.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==F&&Ge(t,n,u,f,s,F)}n=T,a=S,s=ut,it!=null?en(t,!!a,it,!1):!!s!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":ut=it=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(t,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":it=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,S,u,s,f)}Ur(t,it,ut);return;case"option":for(var qt in a)it=a[qt],a.hasOwnProperty(qt)&&it!=null&&!s.hasOwnProperty(qt)&&(qt==="selected"?t.selected=!1:Ge(t,n,qt,null,s,it));for(F in s)it=s[F],ut=a[F],s.hasOwnProperty(F)&&it!==ut&&(it!=null||ut!=null)&&(F==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":Ge(t,n,F,it,s,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)it=a[re],a.hasOwnProperty(re)&&it!=null&&!s.hasOwnProperty(re)&&Ge(t,n,re,null,s,it);for(nt in s)if(it=s[nt],ut=a[nt],s.hasOwnProperty(nt)&&it!==ut&&(it!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ge(t,n,nt,it,s,ut)}return;default:if(nu(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!s.hasOwnProperty(Ve)&&Xf(t,n,Ve,void 0,s,it);for(dt in s)it=s[dt],ut=a[dt],!s.hasOwnProperty(dt)||it===ut||it===void 0&&ut===void 0||Xf(t,n,dt,it,s,ut);return}}for(var Q in a)it=a[Q],a.hasOwnProperty(Q)&&it!=null&&!s.hasOwnProperty(Q)&&Ge(t,n,Q,null,s,it);for(_t in s)it=s[_t],ut=a[_t],!s.hasOwnProperty(_t)||it===ut||it==null&&ut==null||Ge(t,n,_t,it,s,ut)}function a0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,S=u.initiatorType,T=u.duration;if(f&&T&&a0(S)){for(S=0,T=u.responseEnd,s+=1;s<a.length;s++){var F=a[s],nt=F.startTime;if(nt>T)break;var dt=F.transferSize,_t=F.initiatorType;dt&&a0(_t)&&(F=F.responseEnd,S+=dt*(F<T?1:(T-nt)/(F-nt)))}if(--s,n+=8*(f+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kf=null,Wf=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function r0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var o0=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,l0=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof l0<"u"?function(t){return l0.resolve(null).then(t).catch(_S)}:o0;function _S(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function c0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),cs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,T=f.nodeName;f[Za]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);cs(n)}function u0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function xS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function f0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Zf(t){return t.data==="$?"||t.data==="$~"}function Kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qf=null;function h0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function d0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function p0(t,n,a){switch(n=Zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var fi=new Map,m0=new Set;function Kl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=Y.d;Y.d={f:yS,r:MS,D:ES,C:bS,L:TS,m:AS,X:CS,S:RS,M:wS};function yS(){var t=Ji.f(),n=Gl();return t||n}function MS(t){var n=rt(t);n!==null&&n.tag===5&&n.type==="form"?Lm(n):Ji.r(t)}var ss=typeof document>"u"?null:document;function g0(t,n,a){var s=ss;if(s&&typeof n=="string"&&n){var u=Ee(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),m0.has(u)||(m0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),bn(n,"link",t),St(n),s.head.appendChild(n)))}}function ES(t){Ji.D(t),g0("dns-prefetch",t,null)}function bS(t,n){Ji.C(t,n),g0("preconnect",t,n)}function TS(t,n,a){Ji.L(t,n,a);var s=ss;if(s&&t&&n){var u='link[rel="preload"][as="'+Ee(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ee(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ee(a.imageSizes)+'"]')):u+='[href="'+Ee(t)+'"]';var f=u;switch(n){case"style":f=os(t);break;case"script":f=ls(t)}fi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),bn(n,"link",t),St(n),s.head.appendChild(n)))}}function AS(t,n){Ji.m(t,n);var a=ss;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ee(s)+'"][href="'+Ee(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ls(t)}if(!fi.has(f)&&(t=g({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),bn(s,"link",t),St(s),a.head.appendChild(s)}}}function RS(t,n,a){Ji.S(t,n,a);var s=ss;if(s&&t){var u=J(s).hoistableStyles,f=os(t);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(To(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Jf(t,a);var F=S=s.createElement("link");St(F),bn(F,"link",t),F._p=new Promise(function(nt,dt){F.onload=nt,F.onerror=dt}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ql(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function CS(t,n){Ji.X(t,n);var a=ss;if(a&&t){var s=J(a).hoistableScripts,u=ls(t),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(t=g({src:t,async:!0},n),(n=fi.get(u))&&$f(t,n),f=a.createElement("script"),St(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wS(t,n){Ji.M(t,n);var a=ss;if(a&&t){var s=J(a).hoistableScripts,u=ls(t),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(u))&&$f(t,n),f=a.createElement("script"),St(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function _0(t,n,a,s){var u=(u=$.current)?Kl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=J(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=os(a.href);var f=J(u).hoistableStyles,S=f.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=u.querySelector(To(t)))&&!f._p&&(S.instance=f,S.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||DS(u,t,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=J(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function os(t){return'href="'+Ee(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function v0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),St(n),t.head.appendChild(n))}function ls(t){return'[src="'+Ee(t)+'"]'}function Ao(t){return"script[async]"+t}function x0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ee(a.href)+'"]');if(s)return n.instance=s,St(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),St(s),bn(s,"style",u),Ql(s,a.precedence,t),n.instance=s;case"stylesheet":u=os(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;s=v0(a),(u=fi.get(u))&&Jf(s,u),f=(t.ownerDocument||t).createElement("link"),St(f);var S=f;return S._p=new Promise(function(T,F){S.onload=T,S.onerror=F}),bn(f,"link",s),n.state.loading|=4,Ql(f,a.precedence,t),n.instance=f;case"script":return f=ls(a.src),(u=t.querySelector(Ao(f)))?(n.instance=u,St(u),u):(s=a,(u=fi.get(f))&&(s=g({},a),$f(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),St(u),bn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ql(s,a.precedence,t));return n.instance}function Ql(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Jl=null;function S0(t,n,a){if(Jl===null){var s=new Map,u=Jl=new Map;u.set(a,s)}else u=Jl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Za]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function y0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function US(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function LS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=os(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=$l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,s=v0(s),(u=fi.get(u))&&Jf(s,u),f=f.createElement("link"),St(f);var S=f;S._p=new Promise(function(T,F){S.onload=T,S.onerror=F}),bn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var th=0;function NS(t,n){return t.stylesheets&&t.count===0&&ec(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&th===0&&(th=62500*dS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ec(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>th?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tc=null;function ec(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tc=new Map,n.forEach(OS,t),tc=null,$l.call(t))}function OS(t,n){if(!(n.state.loading&4)){var a=tc.get(t);if(a)var s=a.get(null);else{a=new Map,tc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=$l.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function zS(t,n,a,s,u,f,S,T,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function E0(t,n,a,s,u,f,S,T,F,nt,dt,_t){return t=new zS(t,n,a,S,F,nt,dt,_t,T),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Pu(f),t}function b0(t){return t?(t=Fr,t):Fr}function T0(t,n,a,s,u,f){u=b0(u),s.context===null?s.context=u:s.pendingContext=u,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(Xn(a,t,n),ao(a,t,n))}function A0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function eh(t,n){A0(t,n),(t=t.alternate)&&A0(t,n)}function R0(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&Xn(n,t,67108864),eh(t,67108864)}}function C0(t){if(t.tag===13||t.tag===31){var n=$n();n=wr(n);var a=tr(t,n);a!==null&&Xn(a,t,n),eh(t,n)}}var nc=!0;function PS(t,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,nh(t,n,a,s)}finally{Y.p=f,P.T=u}}function BS(t,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,nh(t,n,a,s)}finally{Y.p=f,P.T=u}}function nh(t,n,a,s){if(nc){var u=ih(s);if(u===null)Vf(t,n,s,ic,a),D0(t,s);else if(FS(u,t,n,a,s))s.stopPropagation();else if(D0(t,s),n&4&&-1<IS.indexOf(t)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=bt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var F=1<<31-Vt(S);T.entanglements[1]|=F,S&=~F}Ci(f),(Ne&6)===0&&(Fl=E()+500,yo(0))}}break;case 31:case 13:T=tr(f,2),T!==null&&Xn(T,f,2),Gl(),eh(f,2)}if(f=ih(s),f===null&&Vf(t,n,s,ic,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Vf(t,n,s,null,a)}}function ih(t){return t=au(t),ah(t)}var ic=null;function ah(t){if(ic=null,t=Z(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ic=t,null}function w0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case lt:return 2;case xt:return 8;case at:case Yt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var rh=!1,wa=null,Da=null,Ua=null,Co=new Map,wo=new Map,La=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D0(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&R0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function FS(t,n,a,s,u){switch(n){case"focusin":return wa=Do(wa,t,n,a,s,u),!0;case"dragenter":return Da=Do(Da,t,n,a,s,u),!0;case"mouseover":return Ua=Do(Ua,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,s,u)),!0}return!1}function U0(t){var n=Z(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){C0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Gs(t.priority,function(){C0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ac(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ih(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);iu=s,a.target.dispatchEvent(s),iu=null}else return n=rt(a),n!==null&&R0(n),t.blockedOn=a,!1;n.shift()}return!0}function L0(t,n,a){ac(t)&&a.delete(n)}function HS(){rh=!1,wa!==null&&ac(wa)&&(wa=null),Da!==null&&ac(Da)&&(Da=null),Ua!==null&&ac(Ua)&&(Ua=null),Co.forEach(L0),wo.forEach(L0)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,rh||(rh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var sc=null;function N0(t){sc!==t&&(sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(ah(s||a)===null)continue;break}var f=rt(a);f!==null&&(t.splice(n,3),n-=3,nf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function cs(t){function n(F){return rc(F,t)}wa!==null&&rc(wa,t),Da!==null&&rc(Da,t),Ua!==null&&rc(Ua,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)U0(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[xn]||null;if(typeof f=="function")S||N0(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[xn]||null)T=S.formAction;else if(ah(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),N0(a)}}}function O0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function sh(t){this._internalRoot=t}oc.prototype.render=sh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();T0(a,s,t,n,null,null)},oc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T0(t.current,2,null,t,null,null),Gl(),n[ua]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&U0(t)}};var z0=e.version;if(z0!=="19.2.0")throw Error(r(527,z0,"19.2.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var GS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Rt=lc.inject(GS),Nt=lc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Vm,f=Xm,S=km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=E0(t,1,!1,null,null,a,s,null,u,f,S,O0),t[ua]=n.current,Gf(t),new sh(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Vm,S=Xm,T=km,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=E0(t,1,!0,n,a??null,s,u,F,f,S,T,O0),n.context=b0(null),a=n.current,s=$n(),s=wr(s),u=_a(s),u.callback=null,va(a,u,s),a=s,n.current.lanes=a,Un(n,a),Ci(n),t[ua]=n.current,Gf(t),new oc(n)},Lo.version="19.2.0",Lo}var W0;function JS(){if(W0)return lh.exports;W0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),lh.exports=QS(),lh.exports}var $S=JS(),Tn=Fd();const Va=XS(Tn);function ty(){return Ut.jsx("header",{style:{position:"fixed",top:18,left:20,zIndex:50},children:Ut.jsx("div",{children:Ut.jsx("h1",{style:{margin:0,fontSize:20,color:"#e6fbff",fontWeight:700},children:"Hi, I'm Adithya "})})})}var Q_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},q0=Va.createContext&&Va.createContext(Q_),ey=["attr","size","title"];function ny(o,e){if(o==null)return{};var i=iy(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function iy(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Vc(){return Vc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Vc.apply(this,arguments)}function Y0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Xc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Y0(Object(i),!0).forEach(function(r){ay(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):Y0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function ay(o,e,i){return e=ry(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function ry(o){var e=sy(o,"string");return typeof e=="symbol"?e:e+""}function sy(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function J_(o){return o&&o.map((e,i)=>Va.createElement(e.tag,Xc({key:i},e.attr),J_(e.child)))}function Hd(o){return e=>Va.createElement(oy,Vc({attr:Xc({},o.attr)},e),J_(o.child))}function oy(o){var e=i=>{var{attr:r,size:l,title:c}=o,h=ny(o,ey),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Va.createElement("svg",Vc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Xc(Xc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Va.createElement("title",null,c),o.children)};return q0!==void 0?Va.createElement(q0.Consumer,null,i=>e(i)):e(Q_)}function ly(o){return Hd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function cy(o){return Hd({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function uy(o){return Hd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}function fy(){return Ut.jsxs("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:60,display:"flex",gap:12,pointerEvents:"auto"},children:[Ut.jsx("a",{href:"https://github.com/AdithyaDevi3",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Ut.jsx(ly,{size:26})}),Ut.jsx("a",{href:"https://www.linkedin.com/in/adithya-devi",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Ut.jsx(cy,{size:26})}),Ut.jsx("a",{href:"mailto:adithya.r.devi02@gmail.com",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Ut.jsx(uy,{size:26})})]})}function hy({route:o,setRoute:e}){const i=o==="about",r=i?"Home":"About";return Ut.jsx("div",{style:{position:"fixed",top:16,right:16,zIndex:50,pointerEvents:"none"},children:Ut.jsx("div",{style:{pointerEvents:"auto",display:"flex",gap:8},children:Ut.jsx("button",{onClick:()=>e(i?"home":"about"),style:{padding:"8px 12px",borderRadius:4,fontWeight:600,color:"#c11919ff",border:"1px solid rgba(102, 232, 255, 0.15)",cursor:"pointer",transition:"all 0.2s"},children:r})})})}function dy(){return Ut.jsx("div",{className:"h-full flex items-center justify-center px-8",children:Ut.jsxs("div",{className:"max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20",children:[Ut.jsx("h2",{className:"text-5xl font-bold text-white mb-6 tracking-wider",children:"Get In Touch"}),Ut.jsxs("div",{className:"space-y-6 text-cyan-100 text-lg",children:[Ut.jsx("p",{className:"leading-relaxed",children:"I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!"}),Ut.jsxs("div",{className:"space-y-4 mt-8",children:[Ut.jsx("a",{href:"mailto:adithya.r@example.com",className:"block text-cyan-300 hover:text-cyan-100 transition-colors text-xl",children:"✉️ adithya.r@example.com"}),Ut.jsx("p",{className:"text-cyan-300 text-xl",children:"📍 Based in Your Location"})]})]})]})})}const Gd="180",py=0,j0=1,my=2,$_=1,gy=2,aa=3,qa=0,Wn=1,ra=2,Xa=0,Ds=1,Ya=2,Z0=3,K0=4,_y=5,yr=100,vy=101,xy=102,Sy=103,yy=104,My=200,Ey=201,by=202,Ty=203,jh=204,Zh=205,Ay=206,Ry=207,Cy=208,wy=209,Dy=210,Uy=211,Ly=212,Ny=213,Oy=214,Kh=0,Qh=1,Jh=2,Ns=3,$h=4,td=5,ed=6,nd=7,tv=0,zy=1,Py=2,ka=0,By=1,Iy=2,Fy=3,ev=4,Hy=5,Gy=6,Vy=7,nv=300,Os=301,zs=302,id=303,ad=304,Kc=306,rd=1e3,Er=1001,sd=1002,yi=1003,Xy=1004,cc=1005,Ui=1006,dh=1007,br=1008,Ni=1009,iv=1010,av=1011,Xo=1012,Vd=1013,Tr=1014,sa=1015,jo=1016,Xd=1017,kd=1018,ko=1020,rv=35902,sv=35899,ov=1021,lv=1022,Si=1023,Wo=1026,qo=1027,cv=1028,Wd=1029,uv=1030,qd=1031,Yd=1033,Bc=33776,Ic=33777,Fc=33778,Hc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,Sd=37814,yd=37815,Md=37816,Ed=37817,bd=37818,Td=37819,Ad=37820,Rd=37821,Cd=36492,wd=36494,Dd=36495,Ud=36283,Ld=36284,Nd=36285,Od=36286,ky=3200,Wy=3201,qy=0,Yy=1,Ha="",ni="srgb",Ps="srgb-linear",kc="linear",Xe="srgb",us=7680,Q0=519,jy=512,Zy=513,Ky=514,fv=515,Qy=516,Jy=517,$y=518,tM=519,zd=35044,J0="300 es",Li=2e3,Wc=2001;class Is{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,Pd=180/Math.PI;function Wa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function eM(o,e){return(o%e+e)%e}function mh(o,e,i){return(1-i)*o+i*e}function Di(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ke(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,i=0){me.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const x=c[h+0],y=c[h+1],b=c[h+2],A=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=A;return}if(g!==A||m!==x||p!==y||_!==b){let M=1-d;const v=m*x+p*y+_*b+g*A,N=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const H=Math.sqrt(L),B=Math.atan2(H,v*N);M=Math.sin(M*B)/H,d=Math.sin(d*B)/H}const C=d*N;if(m=m*M+x*C,p=p*M+y*C,_=_*M+b*C,g=g*M+A*C,M===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=H,p*=H,_*=H,g*=H}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],x=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*g+m*y-p*x,e[i+1]=m*b+_*x+p*g-d*y,e[i+2]=p*b+_*y+d*x-m*g,e[i+3]=_*b-d*g-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"YXZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"ZXY":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"ZYX":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"YZX":this._x=x*_*g+p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g-x*y*b;break;case"XZY":this._x=x*_*g-p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new k,$0=new Zo;class pe{constructor(e,i,r,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],b=r[8],A=l[0],M=l[3],v=l[6],N=l[1],L=l[4],C=l[7],H=l[2],B=l[5],z=l[8];return c[0]=h*A+d*N+m*H,c[3]=h*M+d*L+m*B,c[6]=h*v+d*C+m*z,c[1]=p*A+_*N+g*H,c[4]=p*M+_*L+g*B,c[7]=p*v+_*C+g*z,c[2]=x*A+y*N+b*H,c[5]=x*M+y*L+b*B,c[8]=x*v+y*C+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,x=d*m-_*c,y=p*c-h*m,b=i*g+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=g*A,e[1]=(l*p-_*r)*A,e[2]=(d*r-l*h)*A,e[3]=x*A,e[4]=(_*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=y*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(_h.makeScale(e,i)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new pe;function hv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nM(){const o=qc("canvas");return o.style.display="block",o}const t_={};function Yo(o){o in t_||(t_[o]=!0,console.warn(o))}function iM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const e_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:e,whitePoint:r,transfer:kc,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Le=aM();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fs;class rM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fs===void 0&&(fs=qc("canvas")),fs.width=e.width,fs.height=e.height;const l=fs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=fs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=qc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;const xh=new k;class Pn extends Is{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Er,l=Er,c=Ui,h=br,d=Si,m=Ni,p=Pn.DEFAULT_ANISOTROPY,_=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Wa(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=nv;Pn.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,i=0,r=0,l=1){We.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],b=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(y+1)/2,H=(v+1)/2,B=(_+x)/4,z=(g+A)/4,W=(b+M)/4;return L>C&&L>H?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=B/r,c=z/r):C>H?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=B/l,c=W/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=z/c,l=W/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(g-A)/N,this.z=(x-_)/N,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Is{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new We(0,0,e,i),this.scissorTest=!1,this.viewport=new We(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends lM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class dv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,_i):_i.fromBufferAttribute(c,h),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),fc.subVectors(this.max,No),hs.subVectors(e.a,No),ds.subVectors(e.b,No),ps.subVectors(e.c,No),Oa.subVectors(ds,hs),za.subVectors(ps,ds),dr.subVectors(hs,ps);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-dr.z,dr.y,Oa.z,0,-Oa.x,za.z,0,-za.x,dr.z,0,-dr.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-dr.y,dr.x,0];return!Sh(i,hs,ds,ps,fc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,hs,ds,ps,fc))?!1:(hc.crossVectors(Oa,za),i=[hc.x,hc.y,hc.z],Sh(i,hs,ds,ps,fc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new k,new k,new k,new k,new k,new k,new k,new k],_i=new k,uc=new Ko,hs=new k,ds=new k,ps=new k,Oa=new k,za=new k,dr=new k,No=new k,fc=new k,hc=new k,pr=new k;function Sh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){pr.fromArray(o,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=e.dot(pr),p=i.dot(pr),_=r.dot(pr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const uM=new Ko,Oo=new k,yh=new k;class Qo{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(yh)),this.expandByPoint(Oo.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new k,Mh=new k,dc=new k,Pa=new k,Eh=new k,pc=new k,bh=new k;class Zd{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Mh.copy(e).add(i).multiplyScalar(.5),dc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(Mh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(dc),d=Pa.dot(this.direction),m=-Pa.dot(dc),p=Pa.lengthSq(),_=Math.abs(1-h*h);let g,x,y,b;if(_>0)if(g=h*m-d,x=h*d-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const A=1/_;g*=A,x*=A,y=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Mh).addScaledVector(dc,x),y}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,c){Eh.subVectors(i,e),pc.subVectors(r,e),bh.crossVectors(Eh,pc);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(pc.crossVectors(Pa,pc));if(m<0)return null;const p=d*this.direction.dot(Eh.cross(Pa));if(p<0||m+p>h)return null;const _=-d*Pa.dot(bh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,i,r,l,c,h,d,m,p,_,g,x,y,b,A,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,x,y,b,A,M)}set(e,i,r,l,c,h,d,m,p,_,g,x,y,b,A,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=b,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),c=1/ms.setFromMatrixColumn(e,1).length(),h=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=h*_,y=h*g,b=d*_,A=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,y=m*g,b=p*_,A=p*g;i[0]=x+A*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=A+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,y=m*g,b=p*_,A=p*g;i[0]=x-A*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,y=h*g,b=d*_,A=d*g;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,A=d*p;i[0]=m*_,i[4]=A-x*g,i[8]=b*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*g+b,i[10]=x-A*g}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,A=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+A,i[5]=h*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,hM)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ba.crossVectors(r,ti),Ba.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ba.crossVectors(r,ti)),Ba.normalize(),mc.crossVectors(ti,Ba),l[0]=Ba.x,l[4]=mc.x,l[8]=ti.x,l[1]=Ba.y,l[5]=mc.y,l[9]=ti.y,l[2]=Ba.z,l[6]=mc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],b=r[2],A=r[6],M=r[10],v=r[14],N=r[3],L=r[7],C=r[11],H=r[15],B=l[0],z=l[4],W=l[8],D=l[12],w=l[1],G=l[5],tt=l[9],ft=l[13],pt=l[2],ht=l[6],P=l[10],Y=l[14],j=l[3],yt=l[7],Mt=l[11],O=l[15];return c[0]=h*B+d*w+m*pt+p*j,c[4]=h*z+d*G+m*ht+p*yt,c[8]=h*W+d*tt+m*P+p*Mt,c[12]=h*D+d*ft+m*Y+p*O,c[1]=_*B+g*w+x*pt+y*j,c[5]=_*z+g*G+x*ht+y*yt,c[9]=_*W+g*tt+x*P+y*Mt,c[13]=_*D+g*ft+x*Y+y*O,c[2]=b*B+A*w+M*pt+v*j,c[6]=b*z+A*G+M*ht+v*yt,c[10]=b*W+A*tt+M*P+v*Mt,c[14]=b*D+A*ft+M*Y+v*O,c[3]=N*B+L*w+C*pt+H*j,c[7]=N*z+L*G+C*ht+H*yt,c[11]=N*W+L*tt+C*P+H*Mt,c[15]=N*D+L*ft+C*Y+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],y=e[14],b=e[3],A=e[7],M=e[11],v=e[15];return b*(+c*m*g-l*p*g-c*d*x+r*p*x+l*d*y-r*m*y)+A*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*_-c*m*_)+M*(+i*p*g-i*d*y-c*h*g+r*h*y+c*d*_-r*p*_)+v*(-l*d*_-i*m*g+i*d*x+l*h*g-r*h*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],y=e[11],b=e[12],A=e[13],M=e[14],v=e[15],N=g*M*p-A*x*p+A*m*y-d*M*y-g*m*v+d*x*v,L=b*x*p-_*M*p-b*m*y+h*M*y+_*m*v-h*x*v,C=_*A*p-b*g*p+b*d*y-h*A*y-_*d*v+h*g*v,H=b*g*m-_*A*m-b*d*x+h*A*x+_*d*M-h*g*M,B=i*N+r*L+l*C+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=N*z,e[1]=(A*x*c-g*M*c-A*l*y+r*M*y+g*l*v-r*x*v)*z,e[2]=(d*M*c-A*m*c+A*l*p-r*M*p-d*l*v+r*m*v)*z,e[3]=(g*m*c-d*x*c-g*l*p+r*x*p+d*l*y-r*m*y)*z,e[4]=L*z,e[5]=(_*M*c-b*x*c+b*l*y-i*M*y-_*l*v+i*x*v)*z,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*z,e[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*y+i*m*y)*z,e[8]=C*z,e[9]=(b*g*c-_*A*c-b*r*y+i*A*y+_*r*v-i*g*v)*z,e[10]=(h*A*c-b*d*c+b*r*p-i*A*p-h*r*v+i*d*v)*z,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*y-i*d*y)*z,e[12]=H*z,e[13]=(_*A*l-b*g*l+b*r*x-i*A*x-_*r*M+i*g*M)*z,e[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*M-i*d*M)*z,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*x+i*d*x)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,x=c*p,y=c*_,b=c*g,A=h*_,M=h*g,v=d*g,N=m*p,L=m*_,C=m*g,H=r.x,B=r.y,z=r.z;return l[0]=(1-(A+v))*H,l[1]=(y+C)*H,l[2]=(b-L)*H,l[3]=0,l[4]=(y-C)*B,l[5]=(1-(x+v))*B,l[6]=(M+N)*B,l[7]=0,l[8]=(b+L)*z,l[9]=(M-N)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ms.set(l[0],l[1],l[2]).length();const h=ms.set(l[4],l[5],l[6]).length(),d=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const p=1/c,_=1/h,g=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,i.setFromRotationMatrix(vi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Li,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let b,A;if(m)b=c/(h-c),A=h*c/(h-c);else if(d===Li)b=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Wc)b=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Li,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let b,A;if(m)b=1/(h-c),A=h/(h-c);else if(d===Li)b=-2/(h-c),A=-(h+c)/(h-c);else if(d===Wc)b=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new k,vi=new Qe,fM=new k(0,0,0),hM=new k(1,1,1),Ba=new k,mc=new k,ti=new k,i_=new Qe,a_=new Zo;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const r_=new k,gs=new Zo,ea=new Qe,gc=new k,zo=new k,pM=new k,mM=new Zo,s_=new k(1,0,0),o_=new k(0,1,0),l_=new k(0,0,1),c_={type:"added"},gM={type:"removed"},_s={type:"childadded",child:null},Th={type:"childremoved",child:null};class An extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new k,i=new ca,r=new Zo,l=new k(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,i){return r_.copy(e).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?gc.copy(e):gc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(zo,gc,this.up):ea.lookAt(gc,zo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ea),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c_),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c_),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new k(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new k,na=new k,Ah=new k,ia=new k,vs=new k,xs=new k,u_=new k,Rh=new k,Ch=new k,wh=new k,Dh=new We,Uh=new We,Lh=new We;class di{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){xi.subVectors(l,i),na.subVectors(r,i),Ah.subVectors(e,i);const h=xi.dot(xi),d=xi.dot(na),m=xi.dot(Ah),p=na.dot(na),_=na.dot(Ah),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-d*_)*x,b=(h*_-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,r),Lh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Lh,c.z),h}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),na.subVectors(e,i),xi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),xi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;vs.subVectors(l,r),xs.subVectors(c,r),Rh.subVectors(e,r);const m=vs.dot(Rh),p=xs.dot(Rh);if(m<=0&&p<=0)return i.copy(r);Ch.subVectors(e,l);const _=vs.dot(Ch),g=xs.dot(Ch);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(vs,h);wh.subVectors(e,c);const y=vs.dot(wh),b=xs.dot(wh);if(b>=0&&y<=b)return i.copy(c);const A=y*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(xs,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return u_.subVectors(c,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(u_,d);const v=1/(M+A+x);return h=A*v,d=x*v,i.copy(r).addScaledVector(vs,h).addScaledVector(xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Nh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class oe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=eM(e,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Nh(h,c,e+1/3),this.g=Nh(h,c,e),this.b=Nh(h,c,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=ni){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const r=mv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Le.workingToColorSpace(Dn.copy(this),e),Math.round(Re(Dn.r*255,0,255))*65536+Math.round(Re(Dn.g*255,0,255))*256+Math.round(Re(Dn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ni){Le.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(_c);const r=mh(Ia.h,_c.h,i),l=mh(Ia.s,_c.s,i),c=mh(Ia.l,_c.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new oe;oe.NAMES=mv;let _M=0;class Rr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ds,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jh&&(r.blendSrc=this.blendSrc),this.blendDst!==Zh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gv extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new k,vc=new me;let vM=0;class dn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=zd,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(e),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Di(i,this.array)),i}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Di(i,this.array)),i}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Di(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Di(i,this.array)),i}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zd&&(e.usage=this.usage),e}}class _v extends dn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class vv extends dn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Mi extends dn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xM=0;const hi=new Qe,Oh=new An,Ss=new k,ei=new Ko,Po=new Ko,vn=new k;class Bn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?vv:_v)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Mi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ei.min,Po.min),ei.expandByPoint(vn),vn.addVectors(ei.max,Po.max),ei.expandByPoint(vn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)vn.fromBufferAttribute(d,p),m&&(Ss.fromBufferAttribute(e,p),vn.add(Ss)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new k,m[W]=new k;const p=new k,_=new k,g=new k,x=new me,y=new me,b=new me,A=new k,M=new k;function v(W,D,w){p.fromBufferAttribute(r,W),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,w),x.fromBufferAttribute(c,W),y.fromBufferAttribute(c,D),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(x),b.sub(x);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(G),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(G),d[W].add(A),d[D].add(A),d[w].add(A),m[W].add(M),m[D].add(M),m[w].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,D=N.length;W<D;++W){const w=N[W],G=w.start,tt=w.count;for(let ft=G,pt=G+tt;ft<pt;ft+=3)v(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const L=new k,C=new k,H=new k,B=new k;function z(W){H.fromBufferAttribute(l,W),B.copy(H);const D=d[W];L.copy(D),L.sub(H.multiplyScalar(H.dot(D))).normalize(),C.crossVectors(B,D);const G=C.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,D=N.length;W<D;++W){const w=N[W],G=w.start,tt=w.count;for(let ft=G,pt=G+tt;ft<pt;ft+=3)z(e.getX(ft+0)),z(e.getX(ft+1)),z(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new k,c=new k,h=new k,d=new k,m=new k,p=new k,_=new k,g=new k;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),A=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new dn(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new Qe,mr=new Zd,xc=new Qo,h_=new k,Sc=new k,yc=new k,Mc=new k,zh=new k,Ec=new k,d_=new k,bc=new k;class oa extends An{constructor(e=new Bn,i=new gv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Ec.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(zh.fromBufferAttribute(g,e),h?Ec.addScaledVector(zh,_):Ec.addScaledVector(zh.sub(i),_))}i.add(Ec)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),mr.copy(e.ray).recast(e.near),!(xc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(xc,h_)===null||mr.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(c).invert(),mr.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,mr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const M=x[b],v=h[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=N,H=L;C<H;C+=3){const B=d.getX(C),z=d.getX(C+1),W=d.getX(C+2);l=Tc(this,v,e,r,p,_,g,B,z,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=b,v=A;M<v;M+=3){const N=d.getX(M),L=d.getX(M+1),C=d.getX(M+2);l=Tc(this,h,e,r,p,_,g,N,L,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=x.length;b<A;b++){const M=x[b],v=h[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=N,H=L;C<H;C+=3){const B=C,z=C+1,W=C+2;l=Tc(this,v,e,r,p,_,g,B,z,W),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=b,v=A;M<v;M+=3){const N=M,L=M+1,C=M+2;l=Tc(this,h,e,r,p,_,g,N,L,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function SM(o,e,i,r,l,c,h,d){let m;if(e.side===Wn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===qa,d),m===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Tc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Sc),o.getVertexPosition(m,yc),o.getVertexPosition(p,Mc);const _=SM(o,e,i,r,Sc,yc,Mc,d_);if(_){const g=new k;di.getBarycoord(d_,Sc,yc,Mc,g),l&&(_.uv=di.getInterpolatedAttribute(l,d,m,p,g,new me)),c&&(_.uv1=di.getInterpolatedAttribute(c,d,m,p,g,new me)),h&&(_.normal=di.getInterpolatedAttribute(h,d,m,p,g,new k),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new k,materialIndex:0};di.getNormal(Sc,yc,Mc,x.normal),_.face=x,_.barycoord=g}return _}class Jo extends Bn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Mi(p,3)),this.setAttribute("normal",new Mi(_,3)),this.setAttribute("uv",new Mi(g,2));function b(A,M,v,N,L,C,H,B,z,W,D){const w=C/z,G=H/W,tt=C/2,ft=H/2,pt=B/2,ht=z+1,P=W+1;let Y=0,j=0;const yt=new k;for(let Mt=0;Mt<P;Mt++){const O=Mt*G-ft;for(let V=0;V<ht;V++){const st=V*w-tt;yt[A]=st*N,yt[M]=O*L,yt[v]=pt,p.push(yt.x,yt.y,yt.z),yt[A]=0,yt[M]=0,yt[v]=B>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(V/z),g.push(1-Mt/W),Y+=1}}for(let Mt=0;Mt<W;Mt++)for(let O=0;O<z;O++){const V=x+O+ht*Mt,st=x+O+ht*(Mt+1),gt=x+(O+1)+ht*(Mt+1),wt=x+(O+1)+ht*Mt;m.push(V,st,wt),m.push(st,gt,wt),j+=6}d.addGroup(y,j,D),y+=j,x+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=Bs(o[i]);for(const l in r)e[l]=r[l]}return e}function yM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function xv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const MM={clone:Bs,merge:zn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new k,p_=new me,m_=new me;class kn extends Sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,i){return this.getViewBounds(e,p_,m_),i.subVectors(m_,p_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ph*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,Ms=1;class TM extends An{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new kn(ys,Ms,e,i);l.layers=this.layers,this.add(l);const c=new kn(ys,Ms,e,i);c.layers=this.layers,this.add(c);const h=new kn(ys,Ms,e,i);h.layers=this.layers,this.add(h);const d=new kn(ys,Ms,e,i);d.layers=this.layers,this.add(d);const m=new kn(ys,Ms,e,i);m.layers=this.layers,this.add(m);const p=new kn(ys,Ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class yv extends Pn{constructor(e=[],i=Os,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jo(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Xa});c.uniforms.tEquirect.value=i;const h=new oa(l,c),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Ui),new TM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Cs extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,r),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Cs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Qc{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(e),this.density=i}clone(){return new Qc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mv extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=zd,this.updateRanges=[],this.version=0,this.uuid=Wa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new k;class Yc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyMatrix4(e),this.setXYZ(i,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.applyNormalMatrix(e),this.setXYZ(i,On.x,On.y,On.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)On.fromBufferAttribute(this,i),On.transformDirection(e),this.setXYZ(i,On.x,On.y,On.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Di(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Di(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Di(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Di(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kd extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const Bo=new k,bs=new k,Ts=new k,As=new me,Io=new me,Ev=new Qe,Ac=new k,Fo=new k,Rc=new k,g_=new me,Bh=new me,__=new me;class bv extends An{constructor(e=new Kd){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new Bn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new CM(i,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Yc(r,3,0,!1)),Es.setAttribute("uv",new Yc(r,2,3,!1))}this.geometry=Es,this.material=e,this.center=new me(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),Ev.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Ts.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Cc(Ac.set(-.5,-.5,0),Ts,h,bs,l,c),Cc(Fo.set(.5,-.5,0),Ts,h,bs,l,c),Cc(Rc.set(.5,.5,0),Ts,h,bs,l,c),g_.set(0,0),Bh.set(1,0),__.set(1,1);let d=e.ray.intersectTriangle(Ac,Fo,Rc,!1,Bo);if(d===null&&(Cc(Fo.set(-.5,.5,0),Ts,h,bs,l,c),Bh.set(0,1),d=e.ray.intersectTriangle(Ac,Rc,Fo,!1,Bo),d===null))return;const m=e.ray.origin.distanceTo(Bo);m<e.near||m>e.far||i.push({distance:m,point:Bo.clone(),uv:di.getInterpolation(Bo,Ac,Fo,Rc,g_,Bh,__,new me),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cc(o,e,i,r,l,c){As.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=c*As.x-l*As.y,Io.y=l*As.x+c*As.y):Io.copy(As),o.copy(e),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(Ev)}const Ih=new k,wM=new k,DM=new pe;class xr{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ih.subVectors(r,i).cross(wM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ih),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(Ih).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Qo,UM=new me(.5,.5),wc=new k;class Qd{constructor(e=new xr,i=new xr,r=new xr,l=new xr,c=new xr,h=new xr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Li,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],b=c[8],A=c[9],M=c[10],v=c[11],N=c[12],L=c[13],C=c[14],H=c[15];if(l[0].setComponents(p-h,y-_,v-b,H-N).normalize(),l[1].setComponents(p+h,y+_,v+b,H+N).normalize(),l[2].setComponents(p+d,y+g,v+A,H+L).normalize(),l[3].setComponents(p-d,y-g,v-A,H-L).normalize(),r)l[4].setComponents(m,x,M,C).normalize(),l[5].setComponents(p-m,y-x,v-M,H-C).normalize();else if(l[4].setComponents(p-m,y-x,v-M,H-C).normalize(),i===Li)l[5].setComponents(p+m,y+x,v+M,H+C).normalize();else if(i===Wc)l[5].setComponents(m,x,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=UM.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?e.max.x:e.min.x,wc.y=l.normal.y>0?e.max.y:e.min.y,wc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jd extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new k,Zc=new k,v_=new Qe,Ho=new Zd,Dc=new Qo,Fh=new k,x_=new k;class Tv extends An{constructor(e=new Bn,i=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)jc.fromBufferAttribute(i,l-1),Zc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=jc.distanceTo(Zc);e.setAttribute("lineDistance",new Mi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,e.ray.intersectsSphere(Dc)===!1)return;v_.copy(l).invert(),Ho.copy(e.ray).applyMatrix4(v_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let A=y,M=b-1;A<M;A+=p){const v=_.getX(A),N=_.getX(A+1),L=Uc(this,e,Ho,m,v,N,A);L&&i.push(L)}if(this.isLineLoop){const A=_.getX(b-1),M=_.getX(y),v=Uc(this,e,Ho,m,A,M,b-1);v&&i.push(v)}}else{const y=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let A=y,M=b-1;A<M;A+=p){const v=Uc(this,e,Ho,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Uc(this,e,Ho,m,b-1,y,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(jc.fromBufferAttribute(d,l),Zc.fromBufferAttribute(d,c),i.distanceSqToSegment(jc,Zc,Fh,x_)>r)return;Fh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Fh);if(!(p<e.near||p>e.far))return{distance:p,point:x_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class LM extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const S_=new Qe,Bd=new Zd,Lc=new Qo,Nc=new k;class y_ extends An{constructor(e=new Bn,i=new LM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;S_.copy(l).invert(),Bd.copy(e.ray).applyMatrix4(S_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=x,A=y;b<A;b++){const M=p.getX(b);Nc.fromBufferAttribute(g,M),M_(Nc,M,m,l,e,i,this)}}else{const x=Math.max(0,h.start),y=Math.min(g.count,h.start+h.count);for(let b=x,A=y;b<A;b++)Nc.fromBufferAttribute(g,b),M_(Nc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function M_(o,e,i,r,l,c,h){const d=Bd.distanceSqToPoint(o);if(d<i){const m=new k;Bd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Av extends Pn{constructor(e,i,r=Tr,l,c,h,d=yi,m=yi,p,_=Wo,g=1){if(_!==Wo&&_!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $d extends Bn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),_(),this.setAttribute("position",new Mi(c,3)),this.setAttribute("normal",new Mi(c.slice(),3)),this.setAttribute("uv",new Mi(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const L=new k,C=new k,H=new k;for(let B=0;B<i.length;B+=3)y(i[B+0],L),y(i[B+1],C),y(i[B+2],H),m(L,C,H,N)}function m(N,L,C,H){const B=H+1,z=[];for(let W=0;W<=B;W++){z[W]=[];const D=N.clone().lerp(C,W/B),w=L.clone().lerp(C,W/B),G=B-W;for(let tt=0;tt<=G;tt++)tt===0&&W===B?z[W][tt]=D:z[W][tt]=D.clone().lerp(w,tt/G)}for(let W=0;W<B;W++)for(let D=0;D<2*(B-W)-1;D++){const w=Math.floor(D/2);D%2===0?(x(z[W][w+1]),x(z[W+1][w]),x(z[W][w])):(x(z[W][w+1]),x(z[W+1][w+1]),x(z[W+1][w]))}}function p(N){const L=new k;for(let C=0;C<c.length;C+=3)L.x=c[C+0],L.y=c[C+1],L.z=c[C+2],L.normalize().multiplyScalar(N),c[C+0]=L.x,c[C+1]=L.y,c[C+2]=L.z}function _(){const N=new k;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const C=M(N)/2/Math.PI+.5,H=v(N)/Math.PI+.5;h.push(C,1-H)}b(),g()}function g(){for(let N=0;N<h.length;N+=6){const L=h[N+0],C=h[N+2],H=h[N+4],B=Math.max(L,C,H),z=Math.min(L,C,H);B>.9&&z<.1&&(L<.2&&(h[N+0]+=1),C<.2&&(h[N+2]+=1),H<.2&&(h[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function y(N,L){const C=N*3;L.x=e[C+0],L.y=e[C+1],L.z=e[C+2]}function b(){const N=new k,L=new k,C=new k,H=new k,B=new me,z=new me,W=new me;for(let D=0,w=0;D<c.length;D+=9,w+=6){N.set(c[D+0],c[D+1],c[D+2]),L.set(c[D+3],c[D+4],c[D+5]),C.set(c[D+6],c[D+7],c[D+8]),B.set(h[w+0],h[w+1]),z.set(h[w+2],h[w+3]),W.set(h[w+4],h[w+5]),H.copy(N).add(L).add(C).divideScalar(3);const G=M(H);A(B,w+0,N,G),A(z,w+2,L,G),A(W,w+4,C,G)}}function A(N,L,C,H){H<0&&N.x===1&&(h[L]=N.x-1),C.x===0&&C.z===0&&(h[L]=H/2/Math.PI+.5)}function M(N){return Math.atan2(N.z,-N.x)}function v(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.vertices,e.indices,e.radius,e.details)}}class tp extends $d{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new tp(e.radius,e.detail)}}class Jc extends Bn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,x=i/m,y=[],b=[],A=[],M=[];for(let v=0;v<_;v++){const N=v*x-h;for(let L=0;L<p;L++){const C=L*g-c;b.push(C,-N,0),A.push(0,0,1),M.push(L/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const L=N+p*v,C=N+p*(v+1),H=N+1+p*(v+1),B=N+1+p*v;y.push(L,C,B),y.push(C,H,B)}this.setIndex(y),this.setAttribute("position",new Mi(b,3)),this.setAttribute("normal",new Mi(A,3)),this.setAttribute("uv",new Mi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class NM extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cv extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Hh=new Qe,E_=new k,b_=new k;class zM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;E_.setFromMatrixPosition(e.matrixWorld),i.position.copy(E_),b_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(b_),i.updateMatrixWorld(),Hh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const T_=new Qe,Go=new k,Gh=new k;class PM extends zM{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),r.position.copy(Go),Gh.copy(r.position),Gh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Gh),r.updateMatrixWorld(),l.makeTranslation(-Go.x,-Go.y,-Go.z),T_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(T_,r.coordinateSystem,r.reversedDepth)}}class Ls extends Cv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new PM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BM extends Sv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wv extends Cv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class IM extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function A_(o,e,i,r){const l=FM(r);switch(i){case ov:return o*e;case cv:return o*e/l.components*l.byteLength;case Wd:return o*e/l.components*l.byteLength;case uv:return o*e*2/l.components*l.byteLength;case qd:return o*e*2/l.components*l.byteLength;case lv:return o*e*3/l.components*l.byteLength;case Si:return o*e*4/l.components*l.byteLength;case Yd:return o*e*4/l.components*l.byteLength;case Bc:case Ic:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(o,16)*Math.max(e,8)/4;case od:case cd:return Math.max(o,8)*Math.max(e,8)/2;case fd:case hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Cd:case wd:case Dd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ud:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Nd:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FM(o){switch(o){case Ni:case iv:return{byteLength:1,components:1};case Xo:case av:case jo:return{byteLength:2,components:1};case Xd:case kd:return{byteLength:2,components:4};case Tr:case Vd:case sa:return{byteLength:4,components:1};case rv:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);function Dv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function HM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],A=g[y];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,g[x]=A)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const A=g[y];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
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
#endif`,jM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tE=`#ifdef USE_IRIDESCENCE
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
#endif`,eE=`#ifdef USE_BUMPMAP
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uE=`#define PI 3.141592653589793
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
} // validated`,fE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hE=`vec3 transformedNormal = objectNormal;
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
#endif`,dE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",vE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CE=`#ifdef USE_GRADIENTMAP
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
}`,wE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LE=`uniform bool receiveShadow;
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
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IE=`PhysicalMaterial material;
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
#endif`,FE=`struct PhysicalMaterial {
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
}`,HE=`
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KE=`#if defined( USE_POINTS_UV )
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
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$E=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
}`,j1=`#define DISTANCE
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
}`,Z1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,$1=`uniform vec3 diffuse;
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
}`,tb=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define LAMBERT
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
}`,ab=`#define MATCAP
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
}`,rb=`#define MATCAP
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
}`,sb=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,lb=`#define PHONG
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
}`,cb=`#define PHONG
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
}`,ub=`#define STANDARD
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
}`,fb=`#define STANDARD
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
}`,hb=`#define TOON
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
}`,db=`#define TOON
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
}`,pb=`uniform float size;
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 color;
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
}`,vb=`uniform float rotation;
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
}`,xb=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:GM,alphahash_pars_fragment:VM,alphamap_fragment:XM,alphamap_pars_fragment:kM,alphatest_fragment:WM,alphatest_pars_fragment:qM,aomap_fragment:YM,aomap_pars_fragment:jM,batching_pars_vertex:ZM,batching_vertex:KM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:$M,iridescence_fragment:tE,bumpmap_pars_fragment:eE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:rE,color_fragment:sE,color_pars_fragment:oE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:hE,displacementmap_pars_vertex:dE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:gE,colorspace_fragment:_E,colorspace_pars_fragment:vE,envmap_fragment:xE,envmap_common_pars_fragment:SE,envmap_pars_fragment:yE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:NE,envmap_vertex:EE,fog_vertex:bE,fog_pars_vertex:TE,fog_fragment:AE,fog_pars_fragment:RE,gradientmap_pars_fragment:CE,lightmap_pars_fragment:wE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:UE,lights_pars_begin:LE,lights_toon_fragment:OE,lights_toon_pars_fragment:zE,lights_phong_fragment:PE,lights_phong_pars_fragment:BE,lights_physical_fragment:IE,lights_physical_pars_fragment:FE,lights_fragment_begin:HE,lights_fragment_maps:GE,lights_fragment_end:VE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:WE,logdepthbuf_vertex:qE,map_fragment:YE,map_pars_fragment:jE,map_particle_fragment:ZE,map_particle_pars_fragment:KE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphinstance_vertex:$E,morphcolor_vertex:t1,morphnormal_vertex:e1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:a1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:d1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:_1,dithering_fragment:v1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:b1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:w1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:L1,tonemapping_pars_fragment:N1,transmission_fragment:O1,transmission_pars_fragment:z1,uv_pars_fragment:P1,uv_pars_vertex:B1,uv_vertex:I1,worldpos_vertex:F1,background_vert:H1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:X1,cube_vert:k1,cube_frag:W1,depth_vert:q1,depth_frag:Y1,distanceRGBA_vert:j1,distanceRGBA_frag:Z1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:$1,meshbasic_vert:tb,meshbasic_frag:eb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:ab,meshmatcap_frag:rb,meshnormal_vert:sb,meshnormal_frag:ob,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:ub,meshphysical_frag:fb,meshtoon_vert:hb,meshtoon_frag:db,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:vb,sprite_frag:xb},Ft={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},wi={basic:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:zn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:zn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:zn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new oe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:zn([Ft.points,Ft.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:zn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:zn([Ft.common,Ft.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:zn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:zn([Ft.sprite,Ft.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:zn([Ft.common,Ft.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:zn([Ft.lights,Ft.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};wi.physical={uniforms:zn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Oc={r:0,b:0,g:0},_r=new ca,Sb=new Qe;function yb(o,e,i,r,l,c,h){const d=new oe(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function b(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:e).get(C)),C}function A(L){let C=!1;const H=b(L);H===null?v(d,m):H&&H.isColor&&(v(H,1),C=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(L,C){const H=b(C);H&&(H.isCubeTexture||H.mapping===Kc)?(_===void 0&&(_=new oa(new Jo(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Bs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(B,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_r.copy(C.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(_r)),_.material.toneMapped=Le.getTransfer(H.colorSpace)!==Xe,(g!==H||x!==H.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=H,x=H.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new oa(new Jc(2,2),new Oi({name:"BackgroundMaterial",uniforms:Bs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Le.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,y=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,C){L.getRGB(Oc,xv(o)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,C,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),m=C,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:A,addToRenderList:M,dispose:N}}function Mb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(w,G,tt,ft,pt){let ht=!1;const P=g(ft,tt,G);c!==P&&(c=P,p(c.object)),ht=y(w,ft,tt,pt),ht&&b(w,ft,tt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,C(w,G,tt,ft),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,G,tt){const ft=tt.wireframe===!0;let pt=r[w.id];pt===void 0&&(pt={},r[w.id]=pt);let ht=pt[G.id];ht===void 0&&(ht={},pt[G.id]=ht);let P=ht[ft];return P===void 0&&(P=x(m()),ht[ft]=P),P}function x(w){const G=[],tt=[],ft=[];for(let pt=0;pt<i;pt++)G[pt]=0,tt[pt]=0,ft[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:tt,attributeDivisors:ft,object:w,attributes:{},index:null}}function y(w,G,tt,ft){const pt=c.attributes,ht=G.attributes;let P=0;const Y=tt.getAttributes();for(const j in Y)if(Y[j].location>=0){const Mt=pt[j];let O=ht[j];if(O===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),Mt===void 0||Mt.attribute!==O||O&&Mt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==ft}function b(w,G,tt,ft){const pt={},ht=G.attributes;let P=0;const Y=tt.getAttributes();for(const j in Y)if(Y[j].location>=0){let Mt=ht[j];Mt===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const O={};O.attribute=Mt,Mt&&Mt.data&&(O.data=Mt.data),pt[j]=O,P++}c.attributes=pt,c.attributesNum=P,c.index=ft}function A(){const w=c.newAttributes;for(let G=0,tt=w.length;G<tt;G++)w[G]=0}function M(w){v(w,0)}function v(w,G){const tt=c.newAttributes,ft=c.enabledAttributes,pt=c.attributeDivisors;tt[w]=1,ft[w]===0&&(o.enableVertexAttribArray(w),ft[w]=1),pt[w]!==G&&(o.vertexAttribDivisor(w,G),pt[w]=G)}function N(){const w=c.newAttributes,G=c.enabledAttributes;for(let tt=0,ft=G.length;tt<ft;tt++)G[tt]!==w[tt]&&(o.disableVertexAttribArray(tt),G[tt]=0)}function L(w,G,tt,ft,pt,ht,P){P===!0?o.vertexAttribIPointer(w,G,tt,pt,ht):o.vertexAttribPointer(w,G,tt,ft,pt,ht)}function C(w,G,tt,ft){A();const pt=ft.attributes,ht=tt.getAttributes(),P=G.defaultAttributeValues;for(const Y in ht){const j=ht[Y];if(j.location>=0){let yt=pt[Y];if(yt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const Mt=yt.normalized,O=yt.itemSize,V=e.get(yt);if(V===void 0)continue;const st=V.buffer,gt=V.type,wt=V.bytesPerElement,$=gt===o.INT||gt===o.UNSIGNED_INT||yt.gpuType===Vd;if(yt.isInterleavedBufferAttribute){const ct=yt.data,Tt=ct.stride,zt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let Pt=0;Pt<j.locationSize;Pt++)v(j.location+Pt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Pt=0;Pt<j.locationSize;Pt++)M(j.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,st);for(let Pt=0;Pt<j.locationSize;Pt++)L(j.location+Pt,O/j.locationSize,gt,Mt,Tt*wt,(zt+O/j.locationSize*Pt)*wt,$)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)v(j.location+ct,yt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<j.locationSize;ct++)M(j.location+ct);o.bindBuffer(o.ARRAY_BUFFER,st);for(let ct=0;ct<j.locationSize;ct++)L(j.location+ct,O/j.locationSize,gt,Mt,O*wt,O/j.locationSize*ct*wt,$)}}else if(P!==void 0){const Mt=P[Y];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(j.location,Mt);break;case 3:o.vertexAttrib3fv(j.location,Mt);break;case 4:o.vertexAttrib4fv(j.location,Mt);break;default:o.vertexAttrib1fv(j.location,Mt)}}}}N()}function H(){W();for(const w in r){const G=r[w];for(const tt in G){const ft=G[tt];for(const pt in ft)_(ft[pt].object),delete ft[pt];delete G[tt]}delete r[w]}}function B(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const tt in G){const ft=G[tt];for(const pt in ft)_(ft[pt].object),delete ft[pt];delete G[tt]}delete r[w.id]}function z(w){for(const G in r){const tt=r[G];if(tt[w.id]===void 0)continue;const ft=tt[w.id];for(const pt in ft)_(ft[pt].object),delete ft[pt];delete tt[w.id]}}function W(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:M,disableUnusedAttributes:N}}function Eb(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,r,1)}function m(p,_,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A]*x[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function bb(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Si&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ni&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!W)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:H,maxSamples:B}}function Tb(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new xr,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,v=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const N=c?0:r,L=N*4;let C=v.clippingState||null;m.value=C,C=_(b,x,L,y);for(let H=0;H!==L;++H)C[H]=i[H];v.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,y,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const v=y+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<v)&&(M=new Float32Array(v));for(let L=0,C=y;L!==A;++L,C+=4)h.copy(g[L]).applyMatrix4(N,d),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function Ab(o){let e=new WeakMap;function i(h,d){return d===id?h.mapping=Os:d===ad&&(h.mapping=zs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===id||d===ad)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new AM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ws=4,R_=[.125,.215,.35,.446,.526,.582],Mr=20,Vh=new BM,C_=new oe;let Xh=null,kh=0,Wh=0,qh=!1;const Sr=(1+Math.sqrt(5))/2,Rs=1/Sr,w_=[new k(-Sr,Rs,0),new k(Sr,Rs,0),new k(-Rs,0,Sr),new k(Rs,0,Sr),new k(0,Sr,-Rs),new k(0,Sr,Rs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Rb=new k;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=Rb}=c;Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,kh,Wh),this._renderer.xr.enabled=qh,e.scissorTest=!1,zc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Os||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),kh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:jo,format:Si,colorSpace:Ps,depthBuffer:!1},l=U_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(c)),this._blurMaterial=wb(c,e,i)}return l}_compileMaterial(e){const i=new oa(this._lodPlanes[0],e);this._renderer.compile(i,Vh)}_sceneToCubeUV(e,i,r,l,c){const m=new kn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(C_),g.toneMapping=ka,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new gv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new oa(new Jo,A);let v=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,v=!0):(A.color.copy(C_),v=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):C===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const H=this._cubeSize;zc(l,C*H,L>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(M,m),g.render(e,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=x,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Os||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new oa(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;zc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Vh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=w_[(l-c-1)%w_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new oa(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):Mr;M>Mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Mr}`);const v=[];let N=0;for(let z=0;z<Mr;++z){const W=z/A,D=Math.exp(-W*W/2);v.push(D),z===0?N+=D:z<M&&(N+=2*D)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-r;const C=this._sizeLods[l],H=3*C*(l>L-ws?l-L+ws:0),B=4*(this._cubeSize-C);zc(i,H,B,3*C,2*C),m.setRenderTarget(i),m.render(g,Vh)}}function Cb(o){const e=[],i=[],r=[];let l=o;const c=o-ws+1+R_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ws?m=R_[h-o+ws-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,A=3,M=2,v=1,N=new Float32Array(A*b*y),L=new Float32Array(M*b*y),C=new Float32Array(v*b*y);for(let B=0;B<y;B++){const z=B%3*2/3-1,W=B>2?0:-1,D=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];N.set(D,A*b*B),L.set(x,M*b*B);const w=[B,B,B,B,B,B];C.set(w,v*b*B)}const H=new Bn;H.setAttribute("position",new dn(N,A)),H.setAttribute("uv",new dn(L,M)),H.setAttribute("faceIndex",new dn(C,v)),e.push(H),l>ws&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function U_(o,e,i){const r=new Ar(o,e,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function zc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function wb(o,e,i){const r=new Float32Array(Mr),l=new k(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function L_(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ep(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function N_(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function ep(){return`

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
	`}function Db(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===id||m===ad,_=m===Os||m===zs;if(p||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new D_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new D_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Ub(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function Lb(o,e,i,r){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let A=0;if(y!==null){const N=y.array;A=y.version;for(let L=0,C=N.length;L<C;L+=3){const H=N[L+0],B=N[L+1],z=N[L+2];x.push(H,B,B,z,z,H)}}else if(b!==void 0){const N=b.array;A=b.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const H=L+0,B=L+1,z=L+2;x.push(H,B,B,z,z,H)}}else return;const M=new(hv(x)?vv:_v)(x,1);M.version=A;const v=c.get(g);v&&e.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function Nb(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,x*h,b),i.update(y,r,b))}function _(x,y,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,r,1)}function g(x,y,b,A){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,A,0,b);let v=0;for(let N=0;N<b;N++)v+=y[N]*A[N];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Ob(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zb(o,e,i){const r=new WeakMap,l=new We;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let w=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),A===!0&&(C=2),M===!0&&(C=3);let H=d.attributes.position.count*C,B=1;H>e.maxTextureSize&&(B=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*B*4*g),W=new dv(z,H,B,g);W.type=sa,W.needsUpdate=!0;const D=C*4;for(let G=0;G<g;G++){const tt=v[G],ft=N[G],pt=L[G],ht=H*B*4*G;for(let P=0;P<tt.count;P++){const Y=P*D;b===!0&&(l.fromBufferAttribute(tt,P),z[ht+Y+0]=l.x,z[ht+Y+1]=l.y,z[ht+Y+2]=l.z,z[ht+Y+3]=0),A===!0&&(l.fromBufferAttribute(ft,P),z[ht+Y+4]=l.x,z[ht+Y+5]=l.y,z[ht+Y+6]=l.z,z[ht+Y+7]=0),M===!0&&(l.fromBufferAttribute(pt,P),z[ht+Y+8]=l.x,z[ht+Y+9]=l.y,z[ht+Y+10]=l.z,z[ht+Y+11]=pt.itemSize===4?l.w:1)}}x={count:g,texture:W,size:new me(H,B)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function Pb(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Uv=new Pn,O_=new Av(1,1),Lv=new dv,Nv=new cM,Ov=new yv,z_=[],P_=[],B_=new Float32Array(16),I_=new Float32Array(9),F_=new Float32Array(4);function Fs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=z_[l];if(c===void 0&&(c=new Float32Array(l),z_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function $c(o,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function Fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function Gb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),mn(i,r)}}function Vb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;I_.set(r),o.uniformMatrix3fv(this.addr,!1,I_),mn(i,r)}}function Xb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),mn(i,r)}}function kb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function Yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function jb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function Qb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function Jb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(O_.compareFunction=fv,c=O_):c=Uv,i.setTexture2D(e||c,l)}function $b(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Nv,l)}function tT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ov,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Lv,l)}function nT(o){switch(o){case 5126:return Bb;case 35664:return Ib;case 35665:return Fb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Xb;case 5124:case 35670:return kb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return jb;case 36294:return Zb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return eT}}function iT(o,e){o.uniform1fv(this.addr,e)}function aT(o,e){const i=Fs(e,this.size,2);o.uniform2fv(this.addr,i)}function rT(o,e){const i=Fs(e,this.size,3);o.uniform3fv(this.addr,i)}function sT(o,e){const i=Fs(e,this.size,4);o.uniform4fv(this.addr,i)}function oT(o,e){const i=Fs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lT(o,e){const i=Fs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cT(o,e){const i=Fs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function uT(o,e){o.uniform1iv(this.addr,e)}function fT(o,e){o.uniform2iv(this.addr,e)}function hT(o,e){o.uniform3iv(this.addr,e)}function dT(o,e){o.uniform4iv(this.addr,e)}function pT(o,e){o.uniform1uiv(this.addr,e)}function mT(o,e){o.uniform2uiv(this.addr,e)}function gT(o,e){o.uniform3uiv(this.addr,e)}function _T(o,e){o.uniform4uiv(this.addr,e)}function vT(o,e,i){const r=this.cache,l=e.length,c=$c(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Uv,c[h])}function xT(o,e,i){const r=this.cache,l=e.length,c=$c(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Nv,c[h])}function ST(o,e,i){const r=this.cache,l=e.length,c=$c(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Ov,c[h])}function yT(o,e,i){const r=this.cache,l=e.length,c=$c(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Lv,c[h])}function MT(o){switch(o){case 5126:return iT;case 35664:return aT;case 35665:return rT;case 35666:return sT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return yT}}class ET{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nT(i.type)}}class bT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=MT(i.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function AT(o,e,i){const r=o.name,l=r.length;for(Yh.lastIndex=0;;){const c=Yh.exec(r),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new ET(d,o,e):new bT(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new TT(d),H_(i,g)),i=g}}}class Gc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);AT(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const RT=37297;let CT=0;function wT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V_=new pe;function DT(o){Le._getMatrix(V_,Le.workingColorSpace,o);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case kc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function X_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+wT(o.getShaderSource(e),d)}else return c}function UT(o,e){const i=DT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function LT(o,e){let i;switch(e){case By:i="Linear";break;case Iy:i="Reinhard";break;case Fy:i="Cineon";break;case ev:i="ACESFilmic";break;case Gy:i="AgX";break;case Vy:i="Neutral";break;case Hy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new k;function NT(){Le.getLuminanceCoefficients(Pc);const o=Pc.x.toFixed(4),e=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function zT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function PT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Vo(o){return o!==""}function k_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(o){return o.replace(BT,FT)}const IT=new Map;function FT(o,e){let i=_e[e];if(i===void 0){const r=IT.get(e);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Id(i)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace(HT,GT)}function GT(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function VT(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function XT(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case zs:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kT(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function WT(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case tv:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case Py:e="ENVMAP_BLENDING_ADD";break}return e}function qT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function YT(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=VT(i),p=XT(i),_=kT(i),g=WT(i),x=qT(i),y=OT(i),b=zT(c),A=l.createProgram();let M,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(M=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?_e.tonemapping_pars_fragment:"",i.toneMapping!==ka?LT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,UT("linearToOutputTexel",i.outputColorSpace),NT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Id(h),h=k_(h,i),h=W_(h,i),d=Id(d),d=k_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===J0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+M+h,C=N+v+d,H=G_(l,l.VERTEX_SHADER,L),B=G_(l,l.FRAGMENT_SHADER,C);l.attachShader(A,H),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",ft=l.getShaderInfoLog(H)||"",pt=l.getShaderInfoLog(B)||"",ht=tt.trim(),P=ft.trim(),Y=pt.trim();let j=!0,yt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,B);else{const Mt=X_(l,H,"vertex"),O=X_(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+Mt+`
`+O)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(P===""||Y==="")&&(yt=!1);yt&&(G.diagnostics={runnable:j,programLog:ht,vertexShader:{log:P,prefix:M},fragmentShader:{log:Y,prefix:v}})}l.deleteShader(H),l.deleteShader(B),W=new Gc(l,A),D=PT(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,RT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=B,this}let jT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new KT(e),i.set(e,r)),r}}class KT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function QT(o,e,i,r,l,c,h){const d=new pv,m=new ZT,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,w,G,tt,ft){const pt=tt.fog,ht=ft.geometry,P=D.isMeshStandardMaterial?tt.environment:null,Y=(D.isMeshStandardMaterial?i:e).get(D.envMap||P),j=Y&&Y.mapping===Kc?Y.image.height:null,yt=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Mt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=Mt!==void 0?Mt.length:0;let V=0;ht.morphAttributes.position!==void 0&&(V=1),ht.morphAttributes.normal!==void 0&&(V=2),ht.morphAttributes.color!==void 0&&(V=3);let st,gt,wt,$;if(yt){const Ce=wi[yt];st=Ce.vertexShader,gt=Ce.fragmentShader}else st=D.vertexShader,gt=D.fragmentShader,m.update(D),wt=m.getVertexShaderID(D),$=m.getFragmentShaderID(D);const ct=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),zt=ft.isInstancedMesh===!0,Pt=ft.isBatchedMesh===!0,Wt=!!D.map,Me=!!D.matcap,I=!!Y,ge=!!D.aoMap,Et=!!D.lightMap,At=!!D.bumpMap,Lt=!!D.normalMap,fe=!!D.displacementMap,Gt=!!D.emissiveMap,ae=!!D.metalnessMap,Fe=!!D.roughnessMap,$t=D.anisotropy>0,U=D.clearcoat>0,E=D.dispersion>0,K=D.iridescence>0,lt=D.sheen>0,xt=D.transmission>0,at=$t&&!!D.anisotropyMap,Yt=U&&!!D.clearcoatMap,Dt=U&&!!D.clearcoatNormalMap,Qt=U&&!!D.clearcoatRoughnessMap,Jt=K&&!!D.iridescenceMap,Rt=K&&!!D.iridescenceThicknessMap,Nt=lt&&!!D.sheenColorMap,te=lt&&!!D.sheenRoughnessMap,Vt=!!D.specularMap,Bt=!!D.specularColorMap,ue=!!D.specularIntensityMap,q=xt&&!!D.transmissionMap,Ct=xt&&!!D.thicknessMap,Ot=!!D.gradientMap,Xt=!!D.alphaMap,bt=D.alphaTest>0,vt=!!D.alphaHash,kt=!!D.extensions;let le=ka;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(le=o.toneMapping);const Pe={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:st,fragmentShader:gt,defines:D.defines,customVertexShaderID:wt,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Pt,batchingColor:Pt&&ft._colorsTexture!==null,instancing:zt,instancingColor:zt&&ft.instanceColor!==null,instancingMorph:zt&&ft.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ps,alphaToCoverage:!!D.alphaToCoverage,map:Wt,matcap:Me,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:j,aoMap:ge,lightMap:Et,bumpMap:At,normalMap:Lt,displacementMap:x&&fe,emissiveMap:Gt,normalMapObjectSpace:Lt&&D.normalMapType===Yy,normalMapTangentSpace:Lt&&D.normalMapType===qy,metalnessMap:ae,roughnessMap:Fe,anisotropy:$t,anisotropyMap:at,clearcoat:U,clearcoatMap:Yt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:K,iridescenceMap:Jt,iridescenceThicknessMap:Rt,sheen:lt,sheenColorMap:Nt,sheenRoughnessMap:te,specularMap:Vt,specularColorMap:Bt,specularIntensityMap:ue,transmission:xt,transmissionMap:q,thicknessMap:Ct,gradientMap:Ot,opaque:D.transparent===!1&&D.blending===Ds&&D.alphaToCoverage===!1,alphaMap:Xt,alphaTest:bt,alphaHash:vt,combine:D.combine,mapUv:Wt&&A(D.map.channel),aoMapUv:ge&&A(D.aoMap.channel),lightMapUv:Et&&A(D.lightMap.channel),bumpMapUv:At&&A(D.bumpMap.channel),normalMapUv:Lt&&A(D.normalMap.channel),displacementMapUv:fe&&A(D.displacementMap.channel),emissiveMapUv:Gt&&A(D.emissiveMap.channel),metalnessMapUv:ae&&A(D.metalnessMap.channel),roughnessMapUv:Fe&&A(D.roughnessMap.channel),anisotropyMapUv:at&&A(D.anisotropyMap.channel),clearcoatMapUv:Yt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:te&&A(D.sheenRoughnessMap.channel),specularMapUv:Vt&&A(D.specularMap.channel),specularColorMapUv:Bt&&A(D.specularColorMap.channel),specularIntensityMapUv:ue&&A(D.specularIntensityMap.channel),transmissionMapUv:q&&A(D.transmissionMap.channel),thicknessMapUv:Ct&&A(D.thicknessMap.channel),alphaMapUv:Xt&&A(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Lt||$t),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ht.attributes.uv&&(Wt||Xt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Tt,skinning:ft.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:Wt&&D.map.isVideoTexture===!0&&Le.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Le.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:kt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&D.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)w.push(G),w.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(N(w,D),L(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function N(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=b[D.type];let G;if(w){const tt=wi[w];G=MM.clone(tt.uniforms)}else G=D.uniforms;return G}function H(D,w){let G;for(let tt=0,ft=_.length;tt<ft;tt++){const pt=_[tt];if(pt.cacheKey===w){G=pt,++G.usedTimes;break}}return G===void 0&&(G=new YT(o,w,D,c),_.push(G)),G}function B(D){if(--D.usedTimes===0){const w=_.indexOf(D);_[w]=_[_.length-1],_.pop(),D.destroy()}}function z(D){m.remove(D)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:H,releaseProgram:B,releaseShaderCache:z,programs:_,dispose:W}}function JT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function $T(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,x,y,b,A,M){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},o[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=A,v.group=M),e++,v}function d(g,x,y,b,A,M){const v=h(g,x,y,b,A,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,x,y,b,A,M){const v=h(g,x,y,b,A,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||$T),r.length>1&&r.sort(x||j_),l.length>1&&l.sort(x||j_)}function _(){for(let g=e,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function tA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Z_,o.set(r,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new oe};break;case"SpotLight":i={position:new k,direction:new k,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":i={color:new oe,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iA=0;function aA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rA(o){const e=new eA,i=nA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,c=new Qe,h=new Qe;function d(p){let _=0,g=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,A=0,M=0,v=0,N=0,L=0,C=0,H=0,B=0,z=0;p.sort(aA);for(let D=0,w=p.length;D<w;D++){const G=p[D],tt=G.color,ft=G.intensity,pt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=tt.r*ft,g+=tt.g*ft,x+=tt.b*ft;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ft);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,j=i.get(G);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=G.shadow.matrix,N++}r.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(tt).multiplyScalar(ft),P.distance=pt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[A]=P;const Y=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,Y.updateMatrices(G),G.castShadow&&B++),r.spotLightMatrix[A]=Y.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=ht,C++}A++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(tt).multiplyScalar(ft),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=P,M++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Y=G.shadow,j=i.get(G);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=G.shadow.matrix,L++}r.point[b]=P,b++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ft),P.groundColor.copy(G.groundColor).multiplyScalar(ft),r.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==y||W.pointLength!==b||W.spotLength!==A||W.rectAreaLength!==M||W.hemiLength!==v||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==C||W.numSpotMaps!==H||W.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+H-B,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,W.directionalLength=y,W.pointLength=b,W.spotLength=A,W.rectAreaLength=M,W.hemiLength=v,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=C,W.numSpotMaps=H,W.numLightProbes=z,r.version=iA++)}function m(p,_){let g=0,x=0,y=0,b=0,A=0;const M=_.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const L=p[v];if(L.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(L.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(L.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function K_(o){const e=new rA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function sA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new K_(o),e.set(l,[d])):c>=h.length?(d=new K_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`;function cA(o,e,i){let r=new Qd;const l=new me,c=new me,h=new We,d=new NM({depthPacking:Wy}),m=new OM,p={},_=i.maxTextureSize,g={[qa]:Wn,[Wn]:qa,[ra]:ra},x=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Bn;b.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new oa(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$_;let v=this.type;this.render=function(B,z,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Xa),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ft=v!==aa&&this.type===aa,pt=v===aa&&this.type!==aa;for(let ht=0,P=B.length;ht<P;ht++){const Y=B[ht],j=Y.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||ft===!0||pt===!0){const O=this.type!==aa?{minFilter:yi,magFilter:yi}:{};j.map!==null&&j.map.dispose(),j.map=new Ar(l.x,l.y,O),j.map.texture.name=Y.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Mt=j.getViewportCount();for(let O=0;O<Mt;O++){const V=j.getViewport(O);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),tt.viewport(h),j.updateMatrices(Y,O),r=j.getFrustum(),C(z,W,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&N(j,W),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,w,G)};function N(B,z){const W=e.update(A);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ar(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,W,x,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,W,y,A,null)}function L(B,z,W,D){let w=null;const G=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)w=G;else if(w=W.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=w.uuid,ft=z.uuid;let pt=p[tt];pt===void 0&&(pt={},p[tt]=pt);let ht=pt[ft];ht===void 0&&(ht=w.clone(),pt[ft]=ht,z.addEventListener("dispose",H)),w=ht}if(w.visible=z.visible,w.wireframe=z.wireframe,D===aa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const tt=o.properties.get(w);tt.light=W}return w}function C(B,z,W,D,w){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===aa)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const ft=e.update(B),pt=B.material;if(Array.isArray(pt)){const ht=ft.groups;for(let P=0,Y=ht.length;P<Y;P++){const j=ht[P],yt=pt[j.materialIndex];if(yt&&yt.visible){const Mt=L(B,yt,D,w);B.onBeforeShadow(o,B,z,W,ft,Mt,j),o.renderBufferDirect(W,null,ft,Mt,B,j),B.onAfterShadow(o,B,z,W,ft,Mt,j)}}}else if(pt.visible){const ht=L(B,pt,D,w);B.onBeforeShadow(o,B,z,W,ft,ht,null),o.renderBufferDirect(W,null,ft,ht,B,null),B.onAfterShadow(o,B,z,W,ft,ht,null)}}const tt=B.children;for(let ft=0,pt=tt.length;ft<pt;ft++)C(tt[ft],z,W,D,w)}function H(B){B.target.removeEventListener("dispose",H);for(const W in p){const D=p[W],w=B.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const uA={[Kh]:Qh,[Jh]:ed,[$h]:nd,[Ns]:td,[Qh]:Kh,[ed]:Jh,[nd]:$h,[td]:Ns};function fA(o,e){function i(){let q=!1;const Ct=new We;let Ot=null;const Xt=new We(0,0,0,0);return{setMask:function(bt){Ot!==bt&&!q&&(o.colorMask(bt,bt,bt,bt),Ot=bt)},setLocked:function(bt){q=bt},setClear:function(bt,vt,kt,le,Pe){Pe===!0&&(bt*=le,vt*=le,kt*=le),Ct.set(bt,vt,kt,le),Xt.equals(Ct)===!1&&(o.clearColor(bt,vt,kt,le),Xt.copy(Ct))},reset:function(){q=!1,Ot=null,Xt.set(-1,0,0,0)}}}function r(){let q=!1,Ct=!1,Ot=null,Xt=null,bt=null;return{setReversed:function(vt){if(Ct!==vt){const kt=e.get("EXT_clip_control");vt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Ct=vt;const le=bt;bt=null,this.setClear(le)}},getReversed:function(){return Ct},setTest:function(vt){vt?ct(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(vt){Ot!==vt&&!q&&(o.depthMask(vt),Ot=vt)},setFunc:function(vt){if(Ct&&(vt=uA[vt]),Xt!==vt){switch(vt){case Kh:o.depthFunc(o.NEVER);break;case Qh:o.depthFunc(o.ALWAYS);break;case Jh:o.depthFunc(o.LESS);break;case Ns:o.depthFunc(o.LEQUAL);break;case $h:o.depthFunc(o.EQUAL);break;case td:o.depthFunc(o.GEQUAL);break;case ed:o.depthFunc(o.GREATER);break;case nd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=vt}},setLocked:function(vt){q=vt},setClear:function(vt){bt!==vt&&(Ct&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){q=!1,Ot=null,Xt=null,bt=null,Ct=!1}}}function l(){let q=!1,Ct=null,Ot=null,Xt=null,bt=null,vt=null,kt=null,le=null,Pe=null;return{setTest:function(Ce){q||(Ce?ct(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ce){Ct!==Ce&&!q&&(o.stencilMask(Ce),Ct=Ce)},setFunc:function(Ce,Un,ii){(Ot!==Ce||Xt!==Un||bt!==ii)&&(o.stencilFunc(Ce,Un,ii),Ot=Ce,Xt=Un,bt=ii)},setOp:function(Ce,Un,ii){(vt!==Ce||kt!==Un||le!==ii)&&(o.stencilOp(Ce,Un,ii),vt=Ce,kt=Un,le=ii)},setLocked:function(Ce){q=Ce},setClear:function(Ce){Pe!==Ce&&(o.clearStencil(Ce),Pe=Ce)},reset:function(){q=!1,Ct=null,Ot=null,Xt=null,bt=null,vt=null,kt=null,le=null,Pe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],b=null,A=!1,M=null,v=null,N=null,L=null,C=null,H=null,B=null,z=new oe(0,0,0),W=0,D=!1,w=null,G=null,tt=null,ft=null,pt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=Y>=2);let yt=null,Mt={};const O=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),st=new We().fromArray(O),gt=new We().fromArray(V);function wt(q,Ct,Ot,Xt){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(q,vt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let kt=0;kt<Ot;kt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ct+kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const $={};$[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Ns),At(!1),Lt(j0),ct(o.CULL_FACE),ge(Xa);function ct(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function Tt(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function zt(q,Ct){return g[q]!==Ct?(o.bindFramebuffer(q,Ct),g[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Pt(q,Ct){let Ot=y,Xt=!1;if(q){Ot=x.get(Ct),Ot===void 0&&(Ot=[],x.set(Ct,Ot));const bt=q.textures;if(Ot.length!==bt.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,kt=bt.length;vt<kt;vt++)Ot[vt]=o.COLOR_ATTACHMENT0+vt;Ot.length=bt.length,Xt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ot)}function Wt(q){return b!==q?(o.useProgram(q),b=q,!0):!1}const Me={[yr]:o.FUNC_ADD,[vy]:o.FUNC_SUBTRACT,[xy]:o.FUNC_REVERSE_SUBTRACT};Me[Sy]=o.MIN,Me[yy]=o.MAX;const I={[My]:o.ZERO,[Ey]:o.ONE,[by]:o.SRC_COLOR,[jh]:o.SRC_ALPHA,[Dy]:o.SRC_ALPHA_SATURATE,[Cy]:o.DST_COLOR,[Ay]:o.DST_ALPHA,[Ty]:o.ONE_MINUS_SRC_COLOR,[Zh]:o.ONE_MINUS_SRC_ALPHA,[wy]:o.ONE_MINUS_DST_COLOR,[Ry]:o.ONE_MINUS_DST_ALPHA,[Uy]:o.CONSTANT_COLOR,[Ly]:o.ONE_MINUS_CONSTANT_COLOR,[Ny]:o.CONSTANT_ALPHA,[Oy]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(q,Ct,Ot,Xt,bt,vt,kt,le,Pe,Ce){if(q===Xa){A===!0&&(Tt(o.BLEND),A=!1);return}if(A===!1&&(ct(o.BLEND),A=!0),q!==_y){if(q!==M||Ce!==D){if((v!==yr||C!==yr)&&(o.blendEquation(o.FUNC_ADD),v=yr,C=yr),Ce)switch(q){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ya:o.blendFunc(o.ONE,o.ONE);break;case Z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case K0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ya:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Z0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case K0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,L=null,H=null,B=null,z.set(0,0,0),W=0,M=q,D=Ce}return}bt=bt||Ct,vt=vt||Ot,kt=kt||Xt,(Ct!==v||bt!==C)&&(o.blendEquationSeparate(Me[Ct],Me[bt]),v=Ct,C=bt),(Ot!==N||Xt!==L||vt!==H||kt!==B)&&(o.blendFuncSeparate(I[Ot],I[Xt],I[vt],I[kt]),N=Ot,L=Xt,H=vt,B=kt),(le.equals(z)===!1||Pe!==W)&&(o.blendColor(le.r,le.g,le.b,Pe),z.copy(le),W=Pe),M=q,D=!1}function Et(q,Ct){q.side===ra?Tt(o.CULL_FACE):ct(o.CULL_FACE);let Ot=q.side===Wn;Ct&&(Ot=!Ot),At(Ot),q.blending===Ds&&q.transparent===!1?ge(Xa):ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const Xt=q.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Gt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function At(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function Lt(q){q!==py?(ct(o.CULL_FACE),q!==G&&(q===j0?o.cullFace(o.BACK):q===my?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=q}function fe(q){q!==tt&&(P&&o.lineWidth(q),tt=q)}function Gt(q,Ct,Ot){q?(ct(o.POLYGON_OFFSET_FILL),(ft!==Ct||pt!==Ot)&&(o.polygonOffset(Ct,Ot),ft=Ct,pt=Ot)):Tt(o.POLYGON_OFFSET_FILL)}function ae(q){q?ct(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Fe(q){q===void 0&&(q=o.TEXTURE0+ht-1),yt!==q&&(o.activeTexture(q),yt=q)}function $t(q,Ct,Ot){Ot===void 0&&(yt===null?Ot=o.TEXTURE0+ht-1:Ot=yt);let Xt=Mt[Ot];Xt===void 0&&(Xt={type:void 0,texture:void 0},Mt[Ot]=Xt),(Xt.type!==q||Xt.texture!==Ct)&&(yt!==Ot&&(o.activeTexture(Ot),yt=Ot),o.bindTexture(q,Ct||$[q]),Xt.type=q,Xt.texture=Ct)}function U(){const q=Mt[yt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Jt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(q){st.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),st.copy(q))}function te(q){gt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),gt.copy(q))}function Vt(q,Ct){let Ot=p.get(Ct);Ot===void 0&&(Ot=new WeakMap,p.set(Ct,Ot));let Xt=Ot.get(q);Xt===void 0&&(Xt=o.getUniformBlockIndex(Ct,q.name),Ot.set(q,Xt))}function Bt(q,Ct){const Xt=p.get(Ct).get(q);m.get(Ct)!==Xt&&(o.uniformBlockBinding(Ct,Xt,q.__bindingPointIndex),m.set(Ct,Xt))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,Mt={},g={},x=new WeakMap,y=[],b=null,A=!1,M=null,v=null,N=null,L=null,C=null,H=null,B=null,z=new oe(0,0,0),W=0,D=!1,w=null,G=null,tt=null,ft=null,pt=null,st.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Tt,bindFramebuffer:zt,drawBuffers:Pt,useProgram:Wt,setBlending:ge,setMaterial:Et,setFlipSided:At,setCullFace:Lt,setLineWidth:fe,setPolygonOffset:Gt,setScissorTest:ae,activeTexture:Fe,bindTexture:$t,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:K,texImage2D:Jt,texImage3D:Rt,updateUBOMapping:Vt,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:Qt,texSubImage2D:lt,texSubImage3D:xt,compressedTexSubImage2D:at,compressedTexSubImage3D:Yt,scissor:Nt,viewport:te,reset:ue}}function hA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return y?new OffscreenCanvas(U,E):qc("canvas")}function A(U,E,K){let lt=1;const xt=$t(U);if((xt.width>K||xt.height>K)&&(lt=K/Math.max(xt.width,xt.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const at=Math.floor(lt*xt.width),Yt=Math.floor(lt*xt.height);g===void 0&&(g=b(at,Yt));const Dt=E?b(at,Yt):g;return Dt.width=at,Dt.height=Yt,Dt.getContext("2d").drawImage(U,0,0,at,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+at+"x"+Yt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,K,lt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let at=E;if(E===o.RED&&(K===o.FLOAT&&(at=o.R32F),K===o.HALF_FLOAT&&(at=o.R16F),K===o.UNSIGNED_BYTE&&(at=o.R8)),E===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(at=o.R8UI),K===o.UNSIGNED_SHORT&&(at=o.R16UI),K===o.UNSIGNED_INT&&(at=o.R32UI),K===o.BYTE&&(at=o.R8I),K===o.SHORT&&(at=o.R16I),K===o.INT&&(at=o.R32I)),E===o.RG&&(K===o.FLOAT&&(at=o.RG32F),K===o.HALF_FLOAT&&(at=o.RG16F),K===o.UNSIGNED_BYTE&&(at=o.RG8)),E===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(at=o.RG8UI),K===o.UNSIGNED_SHORT&&(at=o.RG16UI),K===o.UNSIGNED_INT&&(at=o.RG32UI),K===o.BYTE&&(at=o.RG8I),K===o.SHORT&&(at=o.RG16I),K===o.INT&&(at=o.RG32I)),E===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(at=o.RGB8UI),K===o.UNSIGNED_SHORT&&(at=o.RGB16UI),K===o.UNSIGNED_INT&&(at=o.RGB32UI),K===o.BYTE&&(at=o.RGB8I),K===o.SHORT&&(at=o.RGB16I),K===o.INT&&(at=o.RGB32I)),E===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(at=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(at=o.RGBA16UI),K===o.UNSIGNED_INT&&(at=o.RGBA32UI),K===o.BYTE&&(at=o.RGBA8I),K===o.SHORT&&(at=o.RGBA16I),K===o.INT&&(at=o.RGBA32I)),E===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(at=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(at=o.R11F_G11F_B10F)),E===o.RGBA){const Yt=xt?kc:Le.getTransfer(lt);K===o.FLOAT&&(at=o.RGBA32F),K===o.HALF_FLOAT&&(at=o.RGBA16F),K===o.UNSIGNED_BYTE&&(at=Yt===Xe?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(at=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(at=o.RGB5_A1)}return(at===o.R16F||at===o.R32F||at===o.RG16F||at===o.RG32F||at===o.RGBA16F||at===o.RGBA32F)&&e.get("EXT_color_buffer_float"),at}function C(U,E){let K;return U?E===null||E===Tr||E===ko?K=o.DEPTH24_STENCIL8:E===sa?K=o.DEPTH32F_STENCIL8:E===Xo&&(K=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Tr||E===ko?K=o.DEPTH_COMPONENT24:E===sa?K=o.DEPTH_COMPONENT32F:E===Xo&&(K=o.DEPTH_COMPONENT16),K}function H(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==Ui?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function B(U){const E=U.target;E.removeEventListener("dispose",B),W(E),E.isVideoTexture&&_.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),w(E)}function W(U){const E=r.get(U);if(E.__webglInit===void 0)return;const K=U.source,lt=x.get(K);if(lt){const xt=lt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(lt).length===0&&x.delete(K)}r.remove(U)}function D(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const K=U.source,lt=x.get(K);delete lt[E.__cacheKey],h.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let xt=0;xt<E.__webglFramebuffer[lt].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[lt][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)o.deleteFramebuffer(E.__webglFramebuffer[lt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=U.textures;for(let lt=0,xt=K.length;lt<xt;lt++){const at=r.get(K[lt]);at.__webglTexture&&(o.deleteTexture(at.__webglTexture),h.memory.textures--),r.remove(K[lt])}r.remove(U)}let G=0;function tt(){G=0}function ft(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function pt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const K=r.get(U);if(U.isVideoTexture&&ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const lt=U.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(K,U,E);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+E)}function P(U,E){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){$(K,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){$(K,U,E);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+E)}function j(U,E){const K=r.get(U);if(U.version>0&&K.__version!==U.version){ct(K,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+E)}const yt={[rd]:o.REPEAT,[Er]:o.CLAMP_TO_EDGE,[sd]:o.MIRRORED_REPEAT},Mt={[yi]:o.NEAREST,[Xy]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Ui]:o.LINEAR,[dh]:o.LINEAR_MIPMAP_NEAREST,[br]:o.LINEAR_MIPMAP_LINEAR},O={[jy]:o.NEVER,[tM]:o.ALWAYS,[Zy]:o.LESS,[fv]:o.LEQUAL,[Ky]:o.EQUAL,[$y]:o.GEQUAL,[Qy]:o.GREATER,[Jy]:o.NOTEQUAL};function V(U,E){if(E.type===sa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ui||E.magFilter===dh||E.magFilter===cc||E.magFilter===br||E.minFilter===Ui||E.minFilter===dh||E.minFilter===cc||E.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,yt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Mt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===yi||E.minFilter!==cc&&E.minFilter!==br||E.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function st(U,E){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",B));const lt=E.source;let xt=x.get(lt);xt===void 0&&(xt={},x.set(lt,xt));const at=pt(E);if(at!==U.__cacheKey){xt[at]===void 0&&(xt[at]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),xt[at].usedTimes++;const Yt=xt[U.__cacheKey];Yt!==void 0&&(xt[U.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(E)),U.__cacheKey=at,U.__webglTexture=xt[at].texture}return K}function gt(U,E,K){return Math.floor(Math.floor(U/K)/E)}function wt(U,E,K,lt){const at=U.updateRanges;if(at.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,K,lt,E.data);else{at.sort((Rt,Nt)=>Rt.start-Nt.start);let Yt=0;for(let Rt=1;Rt<at.length;Rt++){const Nt=at[Yt],te=at[Rt],Vt=Nt.start+Nt.count,Bt=gt(te.start,E.width,4),ue=gt(Nt.start,E.width,4);te.start<=Vt+1&&Bt===ue&&gt(te.start+te.count-1,E.width,4)===Bt?Nt.count=Math.max(Nt.count,te.start+te.count-Nt.start):(++Yt,at[Yt]=te)}at.length=Yt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Nt=at.length;Rt<Nt;Rt++){const te=at[Rt],Vt=Math.floor(te.start/4),Bt=Math.ceil(te.count/4),ue=Vt%E.width,q=Math.floor(Vt/E.width),Ct=Bt,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ue,q,Ct,Ot,K,lt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function $(U,E,K){let lt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=o.TEXTURE_3D);const xt=st(U,E),at=E.source;i.bindTexture(lt,U.__webglTexture,o.TEXTURE0+K);const Yt=r.get(at);if(at.version!==Yt.__version||xt===!0){i.activeTexture(o.TEXTURE0+K);const Dt=Le.getPrimaries(Le.workingColorSpace),Qt=E.colorSpace===Ha?null:Le.getPrimaries(E.colorSpace),Jt=E.colorSpace===Ha||Dt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Rt=A(E.image,!1,l.maxTextureSize);Rt=Fe(E,Rt);const Nt=c.convert(E.format,E.colorSpace),te=c.convert(E.type);let Vt=L(E.internalFormat,Nt,te,E.colorSpace,E.isVideoTexture);V(lt,E);let Bt;const ue=E.mipmaps,q=E.isVideoTexture!==!0,Ct=Yt.__version===void 0||xt===!0,Ot=at.dataReady,Xt=H(E,Rt);if(E.isDepthTexture)Vt=C(E.format===qo,E.type),Ct&&(q?i.texStorage2D(o.TEXTURE_2D,1,Vt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Rt.width,Rt.height,0,Nt,te,null));else if(E.isDataTexture)if(ue.length>0){q&&Ct&&i.texStorage2D(o.TEXTURE_2D,Xt,Vt,ue[0].width,ue[0].height);for(let bt=0,vt=ue.length;bt<vt;bt++)Bt=ue[bt],q?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Nt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Bt.width,Bt.height,0,Nt,te,Bt.data);E.generateMipmaps=!1}else q?(Ct&&i.texStorage2D(o.TEXTURE_2D,Xt,Vt,Rt.width,Rt.height),Ot&&wt(E,Rt,Nt,te)):i.texImage2D(o.TEXTURE_2D,0,Vt,Rt.width,Rt.height,0,Nt,te,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Vt,ue[0].width,ue[0].height,Rt.depth);for(let bt=0,vt=ue.length;bt<vt;bt++)if(Bt=ue[bt],E.format!==Si)if(Nt!==null)if(q){if(Ot)if(E.layerUpdates.size>0){const kt=A_(Bt.width,Bt.height,E.format,E.type);for(const le of E.layerUpdates){const Pe=Bt.data.subarray(le*kt/Bt.data.BYTES_PER_ELEMENT,(le+1)*kt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,le,Bt.width,Bt.height,1,Nt,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,Rt.depth,Nt,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Bt.width,Bt.height,Rt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Bt.width,Bt.height,Rt.depth,Nt,te,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Bt.width,Bt.height,Rt.depth,0,Nt,te,Bt.data)}else{q&&Ct&&i.texStorage2D(o.TEXTURE_2D,Xt,Vt,ue[0].width,ue[0].height);for(let bt=0,vt=ue.length;bt<vt;bt++)Bt=ue[bt],E.format!==Si?Nt!==null?q?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Nt,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Vt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Bt.width,Bt.height,Nt,te,Bt.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Bt.width,Bt.height,0,Nt,te,Bt.data)}else if(E.isDataArrayTexture)if(q){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,Vt,Rt.width,Rt.height,Rt.depth),Ot)if(E.layerUpdates.size>0){const bt=A_(Rt.width,Rt.height,E.format,E.type);for(const vt of E.layerUpdates){const kt=Rt.data.subarray(vt*bt/Rt.data.BYTES_PER_ELEMENT,(vt+1)*bt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,Nt,te,kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Nt,te,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Rt.width,Rt.height,Rt.depth,0,Nt,te,Rt.data);else if(E.isData3DTexture)q?(Ct&&i.texStorage3D(o.TEXTURE_3D,Xt,Vt,Rt.width,Rt.height,Rt.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Nt,te,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Rt.width,Rt.height,Rt.depth,0,Nt,te,Rt.data);else if(E.isFramebufferTexture){if(Ct)if(q)i.texStorage2D(o.TEXTURE_2D,Xt,Vt,Rt.width,Rt.height);else{let bt=Rt.width,vt=Rt.height;for(let kt=0;kt<Xt;kt++)i.texImage2D(o.TEXTURE_2D,kt,Vt,bt,vt,0,Nt,te,null),bt>>=1,vt>>=1}}else if(ue.length>0){if(q&&Ct){const bt=$t(ue[0]);i.texStorage2D(o.TEXTURE_2D,Xt,Vt,bt.width,bt.height)}for(let bt=0,vt=ue.length;bt<vt;bt++)Bt=ue[bt],q?Ot&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Nt,te,Bt):i.texImage2D(o.TEXTURE_2D,bt,Vt,Nt,te,Bt);E.generateMipmaps=!1}else if(q){if(Ct){const bt=$t(Rt);i.texStorage2D(o.TEXTURE_2D,Xt,Vt,bt.width,bt.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Nt,te,Rt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Nt,te,Rt);M(E)&&v(lt),Yt.__version=at.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,K){if(E.image.length!==6)return;const lt=st(U,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+K);const at=r.get(xt);if(xt.version!==at.__version||lt===!0){i.activeTexture(o.TEXTURE0+K);const Yt=Le.getPrimaries(Le.workingColorSpace),Dt=E.colorSpace===Ha?null:Le.getPrimaries(E.colorSpace),Qt=E.colorSpace===Ha||Yt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Jt=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Nt=[];for(let vt=0;vt<6;vt++)!Jt&&!Rt?Nt[vt]=A(E.image[vt],!0,l.maxCubemapSize):Nt[vt]=Rt?E.image[vt].image:E.image[vt],Nt[vt]=Fe(E,Nt[vt]);const te=Nt[0],Vt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type),ue=L(E.internalFormat,Vt,Bt,E.colorSpace),q=E.isVideoTexture!==!0,Ct=at.__version===void 0||lt===!0,Ot=xt.dataReady;let Xt=H(E,te);V(o.TEXTURE_CUBE_MAP,E);let bt;if(Jt){q&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ue,te.width,te.height);for(let vt=0;vt<6;vt++){bt=Nt[vt].mipmaps;for(let kt=0;kt<bt.length;kt++){const le=bt[kt];E.format!==Si?Vt!==null?q?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,0,0,le.width,le.height,Vt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,0,0,le.width,le.height,Vt,Bt,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt,ue,le.width,le.height,0,Vt,Bt,le.data)}}}else{if(bt=E.mipmaps,q&&Ct){bt.length>0&&Xt++;const vt=$t(Nt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ue,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Rt){q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Nt[vt].width,Nt[vt].height,Vt,Bt,Nt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Nt[vt].width,Nt[vt].height,0,Vt,Bt,Nt[vt].data);for(let kt=0;kt<bt.length;kt++){const Pe=bt[kt].image[vt].image;q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,0,0,Pe.width,Pe.height,Vt,Bt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,ue,Pe.width,Pe.height,0,Vt,Bt,Pe.data)}}else{q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,Bt,Nt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ue,Vt,Bt,Nt[vt]);for(let kt=0;kt<bt.length;kt++){const le=bt[kt];q?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,0,0,Vt,Bt,le.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,kt+1,ue,Vt,Bt,le.image[vt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),at.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Tt(U,E,K,lt,xt,at){const Yt=c.convert(K.format,K.colorSpace),Dt=c.convert(K.type),Qt=L(K.internalFormat,Yt,Dt,K.colorSpace),Jt=r.get(E),Rt=r.get(K);if(Rt.__renderTarget=E,!Jt.__hasExternalTextures){const Nt=Math.max(1,E.width>>at),te=Math.max(1,E.height>>at);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,at,Qt,Nt,te,E.depth,0,Yt,Dt,null):i.texImage2D(xt,at,Qt,Nt,te,0,Yt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,xt,Rt.__webglTexture,0,fe(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,lt,xt,Rt.__webglTexture,at),i.bindFramebuffer(o.FRAMEBUFFER,null)}function zt(U,E,K){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const lt=E.depthTexture,xt=lt&&lt.isDepthTexture?lt.type:null,at=C(E.stencilBuffer,xt),Yt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=fe(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,at,E.width,E.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,at,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,at,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,U)}else{const lt=E.textures;for(let xt=0;xt<lt.length;xt++){const at=lt[xt],Yt=c.convert(at.format,at.colorSpace),Dt=c.convert(at.type),Qt=L(at.internalFormat,Yt,Dt,at.colorSpace),Jt=fe(E);K&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Qt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=r.get(E.depthTexture);lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const xt=lt.__webglTexture,at=fe(E);if(E.depthTexture.format===Wo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===qo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,at):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Wt(U){const E=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const lt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",xt)};lt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=lt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const lt=U.texture.mipmaps;lt&&lt.length>0?Pt(E.__webglFramebuffer[0],U):Pt(E.__webglFramebuffer,U)}else if(K){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=o.createRenderbuffer(),zt(E.__webglDepthbuffer[lt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer[lt];o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,at)}}else{const lt=U.texture.mipmaps;if(lt&&lt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),zt(E.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,at)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Me(U,E,K){const lt=r.get(U);E!==void 0&&Tt(lt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&Wt(U)}function I(U){const E=U.texture,K=r.get(U),lt=r.get(E);U.addEventListener("dispose",z);const xt=U.textures,at=U.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(lt.__webglTexture===void 0&&(lt.__webglTexture=o.createTexture()),lt.__version=E.version,h.memory.textures++),at){K.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[Dt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)K.__webglFramebuffer[Dt][Qt]=o.createFramebuffer()}else K.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)K.__webglFramebuffer[Dt]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Dt=0,Qt=xt.length;Dt<Qt;Dt++){const Jt=r.get(xt[Dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Gt(U)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Qt=xt[Dt];K.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Dt]);const Jt=c.convert(Qt.format,Qt.colorSpace),Rt=c.convert(Qt.type),Nt=L(Qt.internalFormat,Jt,Rt,Qt.colorSpace,U.isXRRenderTarget===!0),te=fe(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Nt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,K.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),zt(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(at){i.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture),V(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Tt(K.__webglFramebuffer[Dt][Qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Qt);else Tt(K.__webglFramebuffer[Dt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Dt=0,Qt=xt.length;Dt<Qt;Dt++){const Jt=xt[Dt],Rt=r.get(Jt);let Nt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,Rt.__webglTexture),V(Nt,Jt),Tt(K.__webglFramebuffer,U,Jt,o.COLOR_ATTACHMENT0+Dt,Nt,0),M(Jt)&&v(Nt)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,lt.__webglTexture),V(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Tt(K.__webglFramebuffer[Qt],U,E,o.COLOR_ATTACHMENT0,Dt,Qt);else Tt(K.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&v(Dt),i.unbindTexture()}U.depthBuffer&&Wt(U)}function ge(U){const E=U.textures;for(let K=0,lt=E.length;K<lt;K++){const xt=E[K];if(M(xt)){const at=N(U),Yt=r.get(xt).__webglTexture;i.bindTexture(at,Yt),v(at),i.unbindTexture()}}}const Et=[],At=[];function Lt(U){if(U.samples>0){if(Gt(U)===!1){const E=U.textures,K=U.width,lt=U.height;let xt=o.COLOR_BUFFER_BIT;const at=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=r.get(U),Dt=E.length>1;if(Dt)for(let Jt=0;Jt<E.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const Qt=U.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Jt=0;Jt<E.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Jt]);const Rt=r.get(E[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,K,lt,0,0,K,lt,xt,o.NEAREST),m===!0&&(Et.length=0,At.length=0,Et.push(o.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Et.push(at),At.push(at),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,At)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Et))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Jt=0;Jt<E.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Jt]);const Rt=r.get(E[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function fe(U){return Math.min(l.maxSamples,U.samples)}function Gt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Fe(U,E){const K=U.colorSpace,lt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Ps&&K!==Ha&&(Le.getTransfer(K)===Xe?(lt!==Si||xt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function $t(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Me,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Gt}function dA(o,e){function i(r,l=Ha){let c;const h=Le.getTransfer(l);if(r===Ni)return o.UNSIGNED_BYTE;if(r===Xd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===sv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===iv)return o.BYTE;if(r===av)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Vd)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===jo)return o.HALF_FLOAT;if(r===ov)return o.ALPHA;if(r===lv)return o.RGB;if(r===Si)return o.RGBA;if(r===Wo)return o.DEPTH_COMPONENT;if(r===qo)return o.DEPTH_STENCIL;if(r===cv)return o.RED;if(r===Wd)return o.RED_INTEGER;if(r===uv)return o.RG;if(r===qd)return o.RG_INTEGER;if(r===Yd)return o.RGBA_INTEGER;if(r===Bc||r===Ic||r===Fc||r===Hc)if(h===Xe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ld||r===cd||r===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===hd||r===dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fd||r===hd)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cd||r===wd||r===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cd)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ud||r===Ld||r===Nd||r===Od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ud)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Rv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oi({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oa(new Jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Is{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,b=null;const A=typeof XRWebGLBinding<"u",M=new gA,v={},N=i.getContextAttributes();let L=null,C=null;const H=[],B=[],z=new me;let W=null;const D=new kn;D.viewport=new We;const w=new kn;w.viewport=new We;const G=[D,w],tt=new IM;let ft=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ct=H[$];return ct===void 0&&(ct=new Ph,H[$]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function($){let ct=H[$];return ct===void 0&&(ct=new Ph,H[$]=ct),ct.getGripSpace()},this.getHand=function($){let ct=H[$];return ct===void 0&&(ct=new Ph,H[$]=ct),ct.getHandSpace()};function ht($){const ct=B.indexOf($.inputSource);if(ct===-1)return;const Tt=H[ct];Tt!==void 0&&(Tt.update($.inputSource,$.frame,p||h),Tt.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Y);for(let $=0;$<H.length;$++){const ct=B[$];ct!==null&&(B[$]=null,H[$].disconnect(ct))}ft=null,pt=null,M.reset();for(const $ in v)delete v[$];e.setRenderTarget(L),y=null,x=null,g=null,l=null,C=null,wt.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,zt=null,Pt=null;N.depth&&(Pt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=N.stencil?qo:Wo,zt=N.stencil?ko:Tr);const Wt={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Wt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new Ar(x.textureWidth,x.textureHeight,{format:Si,type:Ni,depthTexture:new Av(x.textureWidth,x.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ar(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y($){for(let ct=0;ct<$.removed.length;ct++){const Tt=$.removed[ct],zt=B.indexOf(Tt);zt>=0&&(B[zt]=null,H[zt].disconnect(Tt))}for(let ct=0;ct<$.added.length;ct++){const Tt=$.added[ct];let zt=B.indexOf(Tt);if(zt===-1){for(let Wt=0;Wt<H.length;Wt++)if(Wt>=B.length){B.push(Tt),zt=Wt;break}else if(B[Wt]===null){B[Wt]=Tt,zt=Wt;break}if(zt===-1)break}const Pt=H[zt];Pt&&Pt.connect(Tt)}}const j=new k,yt=new k;function Mt($,ct,Tt){j.setFromMatrixPosition(ct.matrixWorld),yt.setFromMatrixPosition(Tt.matrixWorld);const zt=j.distanceTo(yt),Pt=ct.projectionMatrix.elements,Wt=Tt.projectionMatrix.elements,Me=Pt[14]/(Pt[10]-1),I=Pt[14]/(Pt[10]+1),ge=(Pt[9]+1)/Pt[5],Et=(Pt[9]-1)/Pt[5],At=(Pt[8]-1)/Pt[0],Lt=(Wt[8]+1)/Wt[0],fe=Me*At,Gt=Me*Lt,ae=zt/(-At+Lt),Fe=ae*-At;if(ct.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Fe),$.translateZ(ae),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pt[10]===-1)$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const $t=Me+ae,U=I+ae,E=fe-Fe,K=Gt+(zt-Fe),lt=ge*I/U*$t,xt=Et*I/U*$t;$.projectionMatrix.makePerspective(E,K,lt,xt,$t,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function O($,ct){ct===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ct.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ct=$.near,Tt=$.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),tt.near=w.near=D.near=ct,tt.far=w.far=D.far=Tt,(ft!==tt.near||pt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ft=tt.near,pt=tt.far),tt.layers.mask=$.layers.mask|6,D.layers.mask=tt.layers.mask&3,w.layers.mask=tt.layers.mask&5;const zt=$.parent,Pt=tt.cameras;O(tt,zt);for(let Wt=0;Wt<Pt.length;Wt++)O(Pt[Wt],zt);Pt.length===2?Mt(tt,D,w):tt.projectionMatrix.copy(D.projectionMatrix),V($,tt,zt)};function V($,ct,Tt){Tt===null?$.matrix.copy(ct.matrixWorld):($.matrix.copy(Tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ct.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ct.projectionMatrix),$.projectionMatrixInverse.copy(ct.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Pd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(tt)},this.getCameraTexture=function($){return v[$]};let st=null;function gt($,ct){if(_=ct.getViewerPose(p||h),b=ct,_!==null){const Tt=_.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let zt=!1;Tt.length!==tt.cameras.length&&(tt.cameras.length=0,zt=!0);for(let I=0;I<Tt.length;I++){const ge=Tt[I];let Et=null;if(y!==null)Et=y.getViewport(ge);else{const Lt=g.getViewSubImage(x,ge);Et=Lt.viewport,I===0&&(e.setRenderTargetTextures(C,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(C))}let At=G[I];At===void 0&&(At=new kn,At.layers.enable(I),At.viewport=new We,G[I]=At),At.matrix.fromArray(ge.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(ge.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Et.x,Et.y,Et.width,Et.height),I===0&&(tt.matrix.copy(At.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),zt===!0&&tt.cameras.push(At)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const I=g.getDepthInformation(Tt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(Pt&&Pt.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let I=0;I<Tt.length;I++){const ge=Tt[I].camera;if(ge){let Et=v[ge];Et||(Et=new Rv,v[ge]=Et);const At=g.getCameraImage(ge);Et.sourceTexture=At}}}}for(let Tt=0;Tt<H.length;Tt++){const zt=B[Tt],Pt=H[Tt];zt!==null&&Pt!==void 0&&Pt.update(zt,ct,p||h)}st&&st($,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),b=null}const wt=new Dv;wt.setAnimationLoop(gt),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const vr=new ca,vA=new Qe;function xA(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,xv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,N,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,C)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,N,L):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,C=N.envMapRotation;L&&(M.envMap.value=L,vr.copy(C),vr.x*=-1,vr.y*=-1,vr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),M.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(vr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,N,L){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*N,M.scale.value=L*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,N){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const N=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function SA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const C=L.program;r.uniformBlockBinding(N,C)}function p(N,L){let C=l[N.id];C===void 0&&(b(N),C=_(N),l[N.id]=C,N.addEventListener("dispose",M));const H=L.program;r.updateUBOMapping(N,H);const B=e.render.frame;c[N.id]!==B&&(x(N),c[N.id]=B)}function _(N){const L=g();N.__bindingPointIndex=L;const C=o.createBuffer(),H=N.__size,B=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,H,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],C=N.uniforms,H=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,z=C.length;B<z;B++){const W=Array.isArray(C[B])?C[B]:[C[B]];for(let D=0,w=W.length;D<w;D++){const G=W[D];if(y(G,B,D,H)===!0){const tt=G.__offset,ft=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ht=0;ht<ft.length;ht++){const P=ft[ht],Y=A(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,tt+pt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,pt),pt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,L,C,H){const B=N.value,z=L+"_"+C;if(H[z]===void 0)return typeof B=="number"||typeof B=="boolean"?H[z]=B:H[z]=B.clone(),!0;{const W=H[z];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return H[z]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function b(N){const L=N.uniforms;let C=0;const H=16;for(let z=0,W=L.length;z<W;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let w=0,G=D.length;w<G;w++){const tt=D[w],ft=Array.isArray(tt.value)?tt.value:[tt.value];for(let pt=0,ht=ft.length;pt<ht;pt++){const P=ft[pt],Y=A(P),j=C%H,yt=j%Y.boundary,Mt=j+yt;C+=yt,Mt!==0&&H-Mt<Y.storage&&(C+=H-Mt),tt.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=C,C+=Y.storage}}}const B=C%H;return B>0&&(C+=H-B),N.__size=C,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function M(N){const L=N.target;L.removeEventListener("dispose",M);const C=h.indexOf(L.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class zv{constructor(e={}){const{canvas:i=nM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),A=new Int32Array(4);let M=null,v=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let H=!1;this._outputColorSpace=ni;let B=0,z=0,W=null,D=-1,w=null;const G=new We,tt=new We;let ft=null;const pt=new oe(0);let ht=0,P=i.width,Y=i.height,j=1,yt=null,Mt=null;const O=new We(0,0,P,Y),V=new We(0,0,P,Y);let st=!1;const gt=new Qd;let wt=!1,$=!1;const ct=new Qe,Tt=new k,zt=new We,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Me(){return W===null?j:1}let I=r;function ge(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Xt,!1),i.addEventListener("webglcontextcreationerror",bt,!1),I===null){const Z="webgl2";if(I=ge(Z,R),I===null)throw ge(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Et,At,Lt,fe,Gt,ae,Fe,$t,U,E,K,lt,xt,at,Yt,Dt,Qt,Jt,Rt,Nt,te,Vt,Bt,ue;function q(){Et=new Ub(I),Et.init(),Vt=new dA(I,Et),At=new bb(I,Et,e,Vt),Lt=new fA(I,Et),At.reversedDepthBuffer&&x&&Lt.buffers.depth.setReversed(!0),fe=new Ob(I),Gt=new JT,ae=new hA(I,Et,Lt,Gt,At,Vt,fe),Fe=new Ab(C),$t=new Db(C),U=new HM(I),Bt=new Mb(I,U),E=new Lb(I,U,fe,Bt),K=new Pb(I,E,U,fe),Rt=new zb(I,At,ae),Dt=new Tb(Gt),lt=new QT(C,Fe,$t,Et,At,Bt,Dt),xt=new xA(C,Gt),at=new tA,Yt=new sA(Et),Jt=new yb(C,Fe,$t,Lt,K,y,m),Qt=new cA(C,K,At),ue=new SA(I,fe,At,Lt),Nt=new Eb(I,Et,fe),te=new Nb(I,Et,fe),fe.programs=lt.programs,C.capabilities=At,C.extensions=Et,C.properties=Gt,C.renderLists=at,C.shadowMap=Qt,C.state=Lt,C.info=fe}q();const Ct=new _A(C,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Et.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Et.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,Z,rt=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=Z,i.width=Math.floor(R*j),i.height=Math.floor(Z*j),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(P*j,Y*j).floor()},this.setDrawingBufferSize=function(R,Z,rt){P=R,Y=Z,j=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,Z,rt,ot){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,Z,rt,ot),Lt.viewport(G.copy(O).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,Z,rt,ot){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,Z,rt,ot),Lt.scissor(tt.copy(V).multiplyScalar(j).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(R){Lt.setScissorTest(st=R)},this.setOpaqueSort=function(R){yt=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let J=!1;if(W!==null){const St=W.texture.format;J=St===Yd||St===qd||St===Wd}if(J){const St=W.texture.type,It=St===Ni||St===Tr||St===Xo||St===ko||St===Xd||St===kd,jt=Jt.getClearColor(),Ht=Jt.getClearAlpha(),ee=jt.r,se=jt.g,ne=jt.b;It?(b[0]=ee,b[1]=se,b[2]=ne,b[3]=Ht,I.clearBufferuiv(I.COLOR,0,b)):(A[0]=ee,A[1]=se,A[2]=ne,A[3]=Ht,I.clearBufferiv(I.COLOR,0,A))}else ot|=I.COLOR_BUFFER_BIT}Z&&(ot|=I.DEPTH_BUFFER_BIT),rt&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Xt,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Jt.dispose(),at.dispose(),Yt.dispose(),Gt.dispose(),Fe.dispose(),$t.dispose(),K.dispose(),Bt.dispose(),ue.dispose(),lt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ii),Ct.removeEventListener("sessionend",Hs),Ei.stop()};function Ot(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=fe.autoReset,Z=Qt.enabled,rt=Qt.autoUpdate,ot=Qt.needsUpdate,J=Qt.type;q(),fe.autoReset=R,Qt.enabled=Z,Qt.autoUpdate=rt,Qt.needsUpdate=ot,Qt.type=J}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vt(R){const Z=R.target;Z.removeEventListener("dispose",vt),kt(Z)}function kt(R){le(R),Gt.remove(R)}function le(R){const Z=Gt.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){lt.releaseProgram(rt)}),R.isShaderMaterial&&lt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,J,St){Z===null&&(Z=Pt);const It=J.isMesh&&J.matrixWorld.determinant()<0,jt=ua(R,Z,rt,ot,J);Lt.setMaterial(ot,It);let Ht=rt.index,ee=1;if(ot.wireframe===!0){if(Ht=E.getWireframeAttribute(rt),Ht===void 0)return;ee=2}const se=rt.drawRange,ne=rt.attributes.position;let ve=se.start*ee,Oe=(se.start+se.count)*ee;St!==null&&(ve=Math.max(ve,St.start*ee),Oe=Math.min(Oe,(St.start+St.count)*ee)),Ht!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Ht.count)):ne!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,ne.count));const qe=Oe-ve;if(qe<0||qe===1/0)return;Bt.setup(J,ot,jt,rt,Ht);let ze,xe=Nt;if(Ht!==null&&(ze=U.get(Ht),xe=te,xe.setIndex(ze)),J.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*Me()),xe.setMode(I.LINES)):xe.setMode(I.TRIANGLES);else if(J.isLine){let Zt=ot.linewidth;Zt===void 0&&(Zt=1),Lt.setLineWidth(Zt*Me()),J.isLineSegments?xe.setMode(I.LINES):J.isLineLoop?xe.setMode(I.LINE_LOOP):xe.setMode(I.LINE_STRIP)}else J.isPoints?xe.setMode(I.POINTS):J.isSprite&&xe.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))xe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Zt=J._multiDrawStarts,je=J._multiDrawCounts,we=J._multiDrawCount,Sn=Ht?U.get(Ht).bytesPerElement:1,zi=Gt.get(ot).currentProgram.getUniforms();for(let gn=0;gn<we;gn++)zi.setValue(I,"_gl_DrawID",gn),xe.render(Zt[gn]/Sn,je[gn])}else if(J.isInstancedMesh)xe.renderInstances(ve,qe,J.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,je=Math.min(rt.instanceCount,Zt);xe.renderInstances(ve,qe,je)}else xe.render(ve,qe)};function Pe(R,Z,rt){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,qn(R,Z,rt),R.side=qa,R.needsUpdate=!0,qn(R,Z,rt),R.side=ra):qn(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),v=Yt.get(rt),v.init(Z),L.push(v),rt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),R!==rt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights();const ot=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const St=J.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const jt=St[It];Pe(jt,rt,J),ot.add(jt)}else Pe(St,rt,J),ot.add(St)}),v=L.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(J=>{function St(){if(ot.forEach(function(It){Gt.get(It).currentProgram.isReady()&&ot.delete(It)}),ot.size===0){J(R);return}setTimeout(St,10)}Et.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ce=null;function Un(R){Ce&&Ce(R)}function ii(){Ei.stop()}function Hs(){Ei.start()}const Ei=new Dv;Ei.setAnimationLoop(Un),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){Ce=R,Ct.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},Ct.addEventListener("sessionstart",ii),Ct.addEventListener("sessionend",Hs),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Z),Z=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Z,W),v=Yt.get(R,L.length),v.init(Z),L.push(v),ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),gt.setFromProjectionMatrix(ct,Li,Z.reversedDepth),$=this.localClippingEnabled,wt=Dt.init(this.clippingPlanes,$),M=at.get(R,N.length),M.init(),N.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){const St=C.xr.getDepthSensingMesh();St!==null&&Cr(St,Z,-1/0,C.sortObjects)}Cr(R,Z,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(yt,Mt),Wt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Wt&&Jt.addToRenderList(M,R),this.info.render.frame++,wt===!0&&Dt.beginShadows();const rt=v.state.shadowsArray;Qt.render(rt,R,Z),wt===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,J=M.transmissive;if(v.setupLights(),Z.isArrayCamera){const St=Z.cameras;if(J.length>0)for(let It=0,jt=St.length;It<jt;It++){const Ht=St[It];Dr(ot,J,R,Ht)}Wt&&Jt.render(R);for(let It=0,jt=St.length;It<jt;It++){const Ht=St[It];wr(M,R,Ht,Ht.viewport)}}else J.length>0&&Dr(ot,J,R,Z),Wt&&Jt.render(R),wr(M,R,Z);W!==null&&z===0&&(ae.updateMultisampleRenderTarget(W),ae.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(C,R,Z),Bt.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],wt===!0&&Dt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Cr(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||gt.intersectsSprite(R)){ot&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const It=K.update(R),jt=R.material;jt.visible&&M.push(R,It,jt,rt,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||gt.intersectsObject(R))){const It=K.update(R),jt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),zt.copy(It.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(jt)){const Ht=It.groups;for(let ee=0,se=Ht.length;ee<se;ee++){const ne=Ht[ee],ve=jt[ne.materialIndex];ve&&ve.visible&&M.push(R,It,ve,rt,zt.z,ne)}}else jt.visible&&M.push(R,It,jt,rt,zt.z,null)}}const St=R.children;for(let It=0,jt=St.length;It<jt;It++)Cr(St[It],Z,rt,ot)}function wr(R,Z,rt,ot){const J=R.opaque,St=R.transmissive,It=R.transparent;v.setupLightsView(rt),wt===!0&&Dt.setGlobalState(C.clippingPlanes,rt),ot&&Lt.viewport(G.copy(ot)),J.length>0&&ja(J,Z,rt),St.length>0&&ja(St,Z,rt),It.length>0&&ja(It,Z,rt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Dr(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Ar(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?jo:Ni,minFilter:br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const St=v.state.transmissionRenderTarget[ot.id],It=ot.viewport||G;St.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);const jt=C.getRenderTarget(),Ht=C.getActiveCubeFace(),ee=C.getActiveMipmapLevel();C.setRenderTarget(St),C.getClearColor(pt),ht=C.getClearAlpha(),ht<1&&C.setClearColor(16777215,.5),C.clear(),Wt&&Jt.render(rt);const se=C.toneMapping;C.toneMapping=ka;const ne=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),wt===!0&&Dt.setGlobalState(C.clippingPlanes,ot),ja(R,rt,ot),ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,qe=Z.length;Oe<qe;Oe++){const ze=Z[Oe],xe=ze.object,Zt=ze.geometry,je=ze.material,we=ze.group;if(je.side===ra&&xe.layers.test(ot.layers)){const Sn=je.side;je.side=Wn,je.needsUpdate=!0,Gs(xe,rt,ot,Zt,je,we),je.side=Sn,je.needsUpdate=!0,ve=!0}}ve===!0&&(ae.updateMultisampleRenderTarget(St),ae.updateRenderTargetMipmap(St))}C.setRenderTarget(jt,Ht,ee),C.setClearColor(pt,ht),ne!==void 0&&(ot.viewport=ne),C.toneMapping=se}function ja(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,St=R.length;J<St;J++){const It=R[J],jt=It.object,Ht=It.geometry,ee=It.group;let se=It.material;se.allowOverride===!0&&ot!==null&&(se=ot),jt.layers.test(rt.layers)&&Gs(jt,Z,rt,Ht,se,ee)}}function Gs(R,Z,rt,ot,J,St){R.onBeforeRender(C,Z,rt,ot,J,St),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,Z,rt,ot,R,St),J.transparent===!0&&J.side===ra&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,C.renderBufferDirect(rt,Z,ot,J,R,St),J.side=qa,J.needsUpdate=!0,C.renderBufferDirect(rt,Z,ot,J,R,St),J.side=ra):C.renderBufferDirect(rt,Z,ot,J,R,St),R.onAfterRender(C,Z,rt,ot,J,St)}function qn(R,Z,rt){Z.isScene!==!0&&(Z=Pt);const ot=Gt.get(R),J=v.state.lights,St=v.state.shadowsArray,It=J.state.version,jt=lt.getParameters(R,J.state,St,Z,rt),Ht=lt.getProgramCacheKey(jt);let ee=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?$t:Fe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",vt),ee=new Map,ot.programs=ee);let se=ee.get(Ht);if(se!==void 0){if(ot.currentProgram===se&&ot.lightsStateVersion===It)return xn(R,jt),se}else jt.uniforms=lt.getUniforms(R),R.onBeforeCompile(jt,C),se=lt.acquireProgram(jt,Ht),ee.set(Ht,se),ot.uniforms=jt.uniforms;const ne=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=Dt.uniform),xn(R,jt),ot.needsLights=tu(R),ot.lightsStateVersion=It,ot.needsLights&&(ne.ambientLightColor.value=J.state.ambient,ne.lightProbe.value=J.state.probe,ne.directionalLights.value=J.state.directional,ne.directionalLightShadows.value=J.state.directionalShadow,ne.spotLights.value=J.state.spot,ne.spotLightShadows.value=J.state.spotShadow,ne.rectAreaLights.value=J.state.rectArea,ne.ltc_1.value=J.state.rectAreaLTC1,ne.ltc_2.value=J.state.rectAreaLTC2,ne.pointLights.value=J.state.point,ne.pointLightShadows.value=J.state.pointShadow,ne.hemisphereLights.value=J.state.hemi,ne.directionalShadowMap.value=J.state.directionalShadowMap,ne.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ne.spotShadowMap.value=J.state.spotShadowMap,ne.spotLightMatrix.value=J.state.spotLightMatrix,ne.spotLightMap.value=J.state.spotLightMap,ne.pointShadowMap.value=J.state.pointShadowMap,ne.pointShadowMatrix.value=J.state.pointShadowMatrix),ot.currentProgram=se,ot.uniformsList=null,se}function rn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Gc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function xn(R,Z){const rt=Gt.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function ua(R,Z,rt,ot,J){Z.isScene!==!0&&(Z=Pt),ae.resetTextureUnits();const St=Z.fog,It=ot.isMeshStandardMaterial?Z.environment:null,jt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ps,Ht=(ot.isMeshStandardMaterial?$t:Fe).get(ot.envMap||It),ee=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),ne=!!rt.morphAttributes.position,ve=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let qe=ka;ot.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qe=C.toneMapping);const ze=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,xe=ze!==void 0?ze.length:0,Zt=Gt.get(ot),je=v.state.lights;if(wt===!0&&($===!0||R!==w)){const fn=R===w&&ot.id===D;Dt.setState(ot,R,fn)}let we=!1;ot.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==je.state.version||Zt.outputColorSpace!==jt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Ht||ot.fog===!0&&Zt.fog!==St||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Dt.numPlanes||Zt.numIntersection!==Dt.numIntersection)||Zt.vertexAlphas!==ee||Zt.vertexTangents!==se||Zt.morphTargets!==ne||Zt.morphNormals!==ve||Zt.morphColors!==Oe||Zt.toneMapping!==qe||Zt.morphTargetsCount!==xe)&&(we=!0):(we=!0,Zt.__version=ot.version);let Sn=Zt.currentProgram;we===!0&&(Sn=qn(ot,Z,J));let zi=!1,gn=!1,Ka=!1;const Ee=Sn.getUniforms(),Rn=Zt.uniforms;if(Lt.useProgram(Sn.program)&&(zi=!0,gn=!0,Ka=!0),ot.id!==D&&(D=ot.id,gn=!0),zi||w!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(I,"projectionMatrix",R.projectionMatrix),Ee.setValue(I,"viewMatrix",R.matrixWorldInverse);const en=Ee.map.cameraPosition;en!==void 0&&en.setValue(I,Tt.setFromMatrixPosition(R.matrixWorld)),At.logarithmicDepthBuffer&&Ee.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ee.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,gn=!0,Ka=!0)}if(J.isSkinnedMesh){Ee.setOptional(I,J,"bindMatrix"),Ee.setOptional(I,J,"bindMatrixInverse");const fn=J.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ee.setValue(I,"boneTexture",fn.boneTexture,ae))}J.isBatchedMesh&&(Ee.setOptional(I,J,"batchingTexture"),Ee.setValue(I,"batchingTexture",J._matricesTexture,ae),Ee.setOptional(I,J,"batchingIdTexture"),Ee.setValue(I,"batchingIdTexture",J._indirectTexture,ae),Ee.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&Ee.setValue(I,"batchingColorTexture",J._colorsTexture,ae));const Ln=rt.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Rt.update(J,rt,Sn),(gn||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,Ee.setValue(I,"receiveShadow",J.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Rn.envMap.value=Ht,Rn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Rn.envMapIntensity.value=Z.environmentIntensity),gn&&(Ee.setValue(I,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&Vs(Rn,Ka),St&&ot.fog===!0&&xt.refreshFogUniforms(Rn,St),xt.refreshMaterialUniforms(Rn,ot,j,Y,v.state.transmissionRenderTarget[R.id]),Gc.upload(I,rn(Zt),Rn,ae)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Gc.upload(I,rn(Zt),Rn,ae),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ee.setValue(I,"center",J.center),Ee.setValue(I,"modelViewMatrix",J.modelViewMatrix),Ee.setValue(I,"normalMatrix",J.normalMatrix),Ee.setValue(I,"modelMatrix",J.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let en=0,Ur=fn.length;en<Ur;en++){const bi=fn[en];ue.update(bi,Sn),ue.bind(bi,Sn)}}return Sn}function Vs(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function tu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Z,rt){const ot=Gt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=Z,Gt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Gt.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const eu=I.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){W=R,B=Z,z=rt;let ot=!0,J=null,St=!1,It=!1;if(R){const Ht=Gt.get(R);if(Ht.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Ht.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(Ht.__hasExternalTextures)ae.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ne=R.depthTexture;if(Ht.__boundDepthTexture!==ne){if(ne!==null&&Gt.has(ne)&&(R.width!==ne.image.width||R.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(It=!0);const se=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[Z])?J=se[Z][rt]:J=se[Z],St=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?J=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?J=se[rt]:J=se,G.copy(R.viewport),tt.copy(R.scissor),ft=R.scissorTest}else G.copy(O).multiplyScalar(j).floor(),tt.copy(V).multiplyScalar(j).floor(),ft=st;if(rt!==0&&(J=eu),Lt.bindFramebuffer(I.FRAMEBUFFER,J)&&ot&&Lt.drawBuffers(R,J),Lt.viewport(G),Lt.scissor(tt),Lt.setScissorTest(ft),St){const Ht=Gt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ht.__webglTexture,rt)}else if(It){const Ht=Z;for(let ee=0;ee<R.textures.length;ee++){const se=Gt.get(R.textures[ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ee,se.__webglTexture,rt,Ht)}}else if(R!==null&&rt!==0){const Ht=Gt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ht.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,J,St,It,jt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht){Lt.bindFramebuffer(I.FRAMEBUFFER,Ht);try{const ee=R.textures[jt],se=ee.format,ne=ee.type;if(!At.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-J&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(Z,rt,ot,J,Vt.convert(se),Vt.convert(ne),St))}finally{const ee=W!==null?Gt.get(W).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,J,St,It,jt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ht=Ht[It]),Ht)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-J){Lt.bindFramebuffer(I.FRAMEBUFFER,Ht);const ee=R.textures[jt],se=ee.format,ne=ee.type;if(!At.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(Z,rt,ot,J,Vt.convert(se),Vt.convert(ne),0);const Oe=W!==null?Gt.get(W).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Oe);const qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await iM(I,qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(ve),I.deleteSync(qe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),J=Math.floor(R.image.width*ot),St=Math.floor(R.image.height*ot),It=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;ae.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,It,jt,J,St),Lt.unbindTexture()};const $o=I.createFramebuffer(),Za=I.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,J=0,St=null){St===null&&(J!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=J,J=0):St=0);let It,jt,Ht,ee,se,ne,ve,Oe,qe;const ze=R.isCompressedTexture?R.mipmaps[St]:R.image;if(rt!==null)It=rt.max.x-rt.min.x,jt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,ee=rt.min.x,se=rt.min.y,ne=rt.isBox3?rt.min.z:0;else{const Ln=Math.pow(2,-J);It=Math.floor(ze.width*Ln),jt=Math.floor(ze.height*Ln),R.isDataArrayTexture?Ht=ze.depth:R.isData3DTexture?Ht=Math.floor(ze.depth*Ln):Ht=1,ee=0,se=0,ne=0}ot!==null?(ve=ot.x,Oe=ot.y,qe=ot.z):(ve=0,Oe=0,qe=0);const xe=Vt.convert(Z.format),Zt=Vt.convert(Z.type);let je;Z.isData3DTexture?(ae.setTexture3D(Z,0),je=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ae.setTexture2DArray(Z,0),je=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(Z,0),je=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const we=I.getParameter(I.UNPACK_ROW_LENGTH),Sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Ka=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,se),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ne);const Ee=R.isDataArrayTexture||R.isData3DTexture,Rn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Ln=Gt.get(R),fn=Gt.get(Z),en=Gt.get(Ln.__renderTarget),Ur=Gt.get(fn.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,en.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ur.__webglFramebuffer);for(let bi=0;bi<Ht;bi++)Ee&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,J,ne+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(Z).__webglTexture,St,qe+bi)),I.blitFramebuffer(ee,se,It,jt,ve,Oe,It,jt,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Gt.has(R)){const Ln=Gt.get(R),fn=Gt.get(Z);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,$o),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Za);for(let en=0;en<Ht;en++)Ee?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ln.__webglTexture,J,ne+en):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ln.__webglTexture,J),Rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,St,qe+en):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,St),J!==0?I.blitFramebuffer(ee,se,It,jt,ve,Oe,It,jt,I.COLOR_BUFFER_BIT,I.NEAREST):Rn?I.copyTexSubImage3D(je,St,ve,Oe,qe+en,ee,se,It,jt):I.copyTexSubImage2D(je,St,ve,Oe,ee,se,It,jt);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(je,St,ve,Oe,qe,It,jt,Ht,xe,Zt,ze.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(je,St,ve,Oe,qe,It,jt,Ht,xe,ze.data):I.texSubImage3D(je,St,ve,Oe,qe,It,jt,Ht,xe,Zt,ze):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,ve,Oe,It,jt,xe,Zt,ze.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,ve,Oe,ze.width,ze.height,xe,ze.data):I.texSubImage2D(I.TEXTURE_2D,St,ve,Oe,It,jt,xe,Zt,ze);I.pixelStorei(I.UNPACK_ROW_LENGTH,we),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ka),St===0&&Z.generateMipmaps&&I.generateMipmap(je),Lt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){B=0,z=0,W=null,Lt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function yA(o,e){const i=[],r=[],c=(1+Math.sqrt(5))/2,h=[[0,1,c],[0,-1,c],[0,1,-c],[0,-1,-c],[1,c,0],[-1,c,0],[1,-c,0],[-1,-c,0],[c,0,1],[-c,0,1],[c,0,-1],[-c,0,-1]].map(x=>{const y=Math.sqrt(x[0]*x[0]+x[1]*x[1]+x[2]*x[2]);return new k(x[0]/y*5,x[1]/y*5,x[2]/y*5)}),d=[],m=[[0,1],[0,4],[0,5],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,5],[4,8],[4,10],[5,9],[5,11],[6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11]];h.forEach(x=>{d.push(x.clone())});const p=8;m.forEach(([x,y])=>{const b=h[x],A=h[y];for(let M=1;M<p;M++){const v=M/p,N=new k().lerpVectors(b,A,v);d.push(N)}});const g=new tp(5,0).attributes.position;for(let x=0;x<g.count;x+=3){const y=new k(g.getX(x),g.getY(x),g.getZ(x)),b=new k(g.getX(x+1),g.getY(x+1),g.getZ(x+1)),A=new k(g.getX(x+2),g.getY(x+2),g.getZ(x+2)),M=new k().add(y).add(b).add(A).divideScalar(3);d.push(M);for(let v=0;v<3;v++){const N=new k().lerpVectors(M,[y,b,A][v],.5);d.push(N)}}d.forEach(x=>{const y=new Kd({map:e,color:new oe(13426175),transparent:!0,opacity:0,blending:Ya}),b=new bv(y);b.position.copy(x),b.scale.set(0,0,0);const A=.15+Math.random()*.08;o.add(b),i.push({sprite:b,targetScale:A,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:x.clone()})});for(let x=0;x<i.length;x++)for(let y=x+1;y<i.length;y++)if(i[x].position.distanceTo(i[y].position)<2.8){const A=[i[x].position,i[y].position],M=new Bn().setFromPoints(A),v=new Jd({color:new oe(8956637),transparent:!0,opacity:0,blending:Ya}),N=new Tv(M,v);o.add(N),r.push({line:N,atom1:i[x],atom2:i[y],glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.15+Math.random()*.15})}return{atoms:i,edges:r}}function Pv(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const r=new Pn(o);return r.needsUpdate=!0,r}function Bv(){const o=Tn.useRef(null);return Tn.useEffect(()=>{if(!o.current)return;const e=new Mv;e.background=new oe(132625),e.fog=new Qc(132625,.016);const i=new kn(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=10;const r=new zv({antialias:!0,alpha:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),r.setSize(window.innerWidth,window.innerHeight),r.outputColorSpace=ni,r.toneMapping=ev,r.toneMappingExposure=1.15;const l=o.current;l.appendChild(r.domElement);const c=new wv(8370431,.22);e.add(c);const h=new Ls(3108863,2.1,90,2);h.position.set(14,14,14),e.add(h);const d=new Ls(6962687,1.6,90,2);d.position.set(-14,-12,14),e.add(d);const m=new Ls(1689528,1.3,90,2);m.position.set(0,16,-12),e.add(m);const p=new Cs;e.add(p);const _=Pv(),{atoms:g,edges:x}=yA(p,_),y=1800,b=new Float32Array(y*3),A=new Float32Array(y*3),M=new Float32Array(y),v=new Float32Array(y),N=new Float32Array(y*3),L=new Float32Array(y*3),C=new Float32Array(y),H=new Float32Array(y),B=new Bn;B.setAttribute("position",new dn(b,3)),B.setAttribute("color",new dn(A,3)),B.setAttribute("alpha",new dn(M,1)),B.setAttribute("size",new dn(v,1));const z=new Bn;z.setAttribute("position",new dn(N,3)),z.setAttribute("color",new dn(L,3)),z.setAttribute("alpha",new dn(C,1)),z.setAttribute("size",new dn(H,1));const W=new Oi({uniforms:{uMap:{value:_},uTime:{value:0}},vertexShader:`
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 2.2 * (0.85 + 0.25 * sin(uTime * 2.0 + position.y * 0.6));
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
      `,transparent:!0,depthWrite:!1,blending:Ya,vertexColors:!0}),D=new Oi({uniforms:{uMap:{value:_},uTime:{value:0}},vertexShader:`
        attribute float alpha;
        attribute float size;
        varying float vAlpha;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vAlpha = alpha;
          vColor = color;
          gl_PointSize = size * 1.3 * (0.9 + 0.1 * sin(uTime * 1.8 + position.y * 0.4));
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
      `,transparent:!0,depthWrite:!1,blending:Ya,vertexColors:!0}),w=new y_(B,W),G=new y_(z,D);e.add(w),e.add(G);const tt=Array.from({length:y},()=>({active:!1,start:new k,control:new k,target:new k,progress:0,duration:.8+Math.random()*.6,phase:Math.random()*Math.PI*2,color:new oe,size:.04+Math.random()*.04,alpha:0,life:0,trailPosition:new k,trailColor:new oe}));let ft=!1,pt={x:0,y:0};const ht={x:0,y:0};function P(Et){ft=!0,pt={x:Et.clientX,y:Et.clientY}}function Y(Et){if(ft){const At=Et.clientX-pt.x,Lt=Et.clientY-pt.y;ht.y+=At*.005,ht.x+=Lt*.005,pt={x:Et.clientX,y:Et.clientY}}}function j(){ft=!1}function yt(Et){i.position.z+=Et.deltaY*.01,i.position.z=Math.max(7,Math.min(25,i.position.z)),ht.y+=(Et.deltaX||Et.deltaY)*8e-4}let Mt=0;function O(Et){if(Et.touches.length===2){const At=Et.touches[0].clientX-Et.touches[1].clientX,Lt=Et.touches[0].clientY-Et.touches[1].clientY;Mt=Math.sqrt(At*At+Lt*Lt)}else Et.touches.length===1&&(ft=!0,pt={x:Et.touches[0].clientX,y:Et.touches[0].clientY})}function V(Et){if(Et.touches.length===2){const At=Et.touches[0].clientX-Et.touches[1].clientX,Lt=Et.touches[0].clientY-Et.touches[1].clientY,fe=Math.sqrt(At*At+Lt*Lt),Gt=fe-Mt;i.position.z-=Gt*.01,i.position.z=Math.max(7,Math.min(25,i.position.z)),Mt=fe}else if(Et.touches.length===1&&ft){const At=Et.touches[0].clientX-pt.x,Lt=Et.touches[0].clientY-pt.y;ht.y+=At*.005,ht.x+=Lt*.005,pt={x:Et.touches[0].clientX,y:Et.touches[0].clientY}}}function st(){ft=!1}r.domElement.addEventListener("mousedown",P),r.domElement.addEventListener("mousemove",Y),r.domElement.addEventListener("mouseup",j),r.domElement.addEventListener("wheel",yt,{passive:!0}),r.domElement.addEventListener("touchstart",O),r.domElement.addEventListener("touchmove",V),r.domElement.addEventListener("touchend",st);function gt(Et,At,Lt=.7){const fe=new k(Et,At,Lt);fe.unproject(i);const Gt=fe.sub(i.position).normalize(),ae=-i.position.z/Gt.z;return i.position.clone().add(Gt.multiplyScalar(ae))}function wt(){const Et=Math.floor(Math.random()*4),At=1.25;return Et===0?gt(-At+Math.random()*2*At,-1+Math.random()*2,.8):Et===1?gt(At-Math.random()*2*At,-1+Math.random()*2,.8):Et===2?gt(-1+Math.random()*2,-At+Math.random()*2*At,.8):gt(-1+Math.random()*2,At-Math.random()*2*At,.8)}function $(Et){if(Et<.18)return g[Math.floor(Math.random()*Math.max(1,Math.round(g.length*.35)))].position.clone();if(Et<.5){const Lt=x[Math.floor(Math.random()*x.length)];return new k().lerpVectors(Lt.atom1.position,Lt.atom2.position,.45+Math.random()*.1)}return Et<.8?g[Math.floor(Math.random()*g.length)].position.clone():g[Math.floor(Math.random()*g.length)].position.clone().add(new k((Math.random()-.5)*.15,(Math.random()-.5)*.15,(Math.random()-.5)*.15))}function ct(Et){const At=tt.find($t=>!$t.active);if(!At)return;const Lt=wt(),fe=$(Et),Gt=new k((Math.random()-.5)*1.1,(Math.random()-.5)*1.1,(Math.random()-.5)*1.1),ae=new k().copy(Lt).lerp(fe,.56).add(Gt).add(new k(0,0,2.2));At.active=!0,At.start.copy(Lt),At.control.copy(ae),At.target.copy(fe),At.progress=0,At.life=0,At.trailPosition.copy(Lt),At.duration=.9+Math.random()*.55,At.phase=Math.random()*Math.PI*2;const Fe=[new oe("#2a6dff"),new oe("#4f7cff"),new oe("#6d3cff"),new oe("#1fc6b8"),new oe("#2cb4ff"),new oe("#7e4aff")];At.color.copy(Fe[Math.floor(Math.random()*Fe.length)]),At.size=.022+Math.random()*.016,At.alpha=.1+Math.random()*.16,At.position=At.start.clone()}const Tt=13e3,zt=1700;let Pt=performance.now(),Wt=0,Me=0;function I(){requestAnimationFrame(I);const Et=performance.now()-Pt;Wt+=.016;const At=Math.min(1,Me/zt),Lt=Et/Tt*zt,fe=Math.floor(Lt)-Me;for(let $t=0;$t<fe;$t+=1)Me<zt&&(ct(At),Me+=1);p.rotation.x+=(ht.x-p.rotation.x)*.05,p.rotation.y+=(ht.y-p.rotation.y)*.05,ft||(ht.y+=.0028);const Gt=1+Math.sin(Wt*1.2)*.012+Math.sin(Wt*2.4+.7)*.008;p.scale.setScalar(Gt),h.position.x=Math.sin(Wt*.2)*12,h.position.z=Math.cos(Wt*.2)*12,d.position.x=Math.sin(Wt*.24+Math.PI)*12,d.position.z=Math.cos(Wt*.24+Math.PI)*12,m.position.y=14+Math.sin(Wt*.16)*2;const ae=.45+.55*Math.sin(Wt*.4+Math.PI*.5),Fe=($t,U,E=0)=>{const K=.55+Math.sin(Wt*.07+$t*6.2+E)*.08,lt=.66+Math.sin(Wt*.05+$t*8.4+E+1.45)*.06,xt=.46+Math.sin(Wt*.03+$t*4.8+E+2.6)*.07,at=((K*.42+lt*.35+xt*.23+U*.02)%1+1)%1,Yt=.78+Math.sin(Wt*.04+$t*4.1+E)*.07+.03,Dt=.2+U*.24+.08*Math.sin(Wt*.03+$t*2.4+E);return{hue:at,saturation:Yt,lightness:Dt}};g.forEach(($t,U)=>{const E=U/g.length,K=Math.max(0,Math.min(1,(At-E*.5)*2)),lt=K*$t.targetScale;$t.sprite.scale.set(lt,lt,lt);const xt=Fe(E,K,.2);$t.sprite.material.opacity=K*(.46+ae*.44)*.95,$t.sprite.material.color.setHSL(xt.hue,xt.saturation,xt.lightness)}),x.forEach(($t,U)=>{const E=$t.atom1.sprite.scale.x/$t.atom1.targetScale,K=$t.atom2.sprite.scale.x/$t.atom2.targetScale,lt=Math.min(E,K),xt=U/x.length,at=Fe(xt,lt,1.2);$t.line.material.opacity=Math.min(1,lt*$t.baseOpacity*(.46+ae*.42)),$t.line.material.color.setHSL(at.hue,at.saturation,at.lightness)});for(let $t=0;$t<tt.length;$t+=1){const U=tt[$t];if(!U.active)continue;U.life+=.016;const E=Math.min(1,U.life/U.duration),K=E*E*(3-2*E),lt=new k;lt.copy(U.start).multiplyScalar(1-K),lt.addScaledVector(U.control,2*K*(1-K)),lt.addScaledVector(U.target,K),lt.x+=Math.sin(K*7+U.phase)*.12,lt.y+=Math.cos(K*6.2+U.phase*.9)*.1,lt.z+=Math.sin(K*8+U.phase*1.1)*.08;const xt=U.position.clone();U.position.copy(lt),U.progress=K,U.trailPosition.copy(xt);const at=$t*3;b[at]=lt.x,b[at+1]=lt.y,b[at+2]=lt.z;const Yt=.7+.3*Math.sin(K*Math.PI+U.phase);A[at]=U.color.r*Yt,A[at+1]=U.color.g*Yt,A[at+2]=U.color.b*Yt,M[$t]=U.alpha*(1-Math.max(0,K-.85)/.15),v[$t]=U.size*(.8+.4*Math.sin(Wt*2.4+U.phase)),N[at]=U.trailPosition.x,N[at+1]=U.trailPosition.y,N[at+2]=U.trailPosition.z,L[at]=U.color.r*.55,L[at+1]=U.color.g*.55,L[at+2]=U.color.b*.55,C[$t]=Math.max(0,U.alpha*.35*(1-K)),H[$t]=U.size*.55,K>=.98&&(U.active=!1,C[$t]=0)}B.attributes.position.needsUpdate=!0,B.attributes.color.needsUpdate=!0,B.attributes.alpha.needsUpdate=!0,B.attributes.size.needsUpdate=!0,z.attributes.position.needsUpdate=!0,z.attributes.color.needsUpdate=!0,z.attributes.alpha.needsUpdate=!0,z.attributes.size.needsUpdate=!0,W.uniforms.uTime.value=Wt,D.uniforms.uTime.value=Wt,r.render(e,i)}I();function ge(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",ge),()=>{window.removeEventListener("resize",ge),r.domElement.removeEventListener("mousedown",P),r.domElement.removeEventListener("mousemove",Y),r.domElement.removeEventListener("mouseup",j),r.domElement.removeEventListener("wheel",yt),r.domElement.removeEventListener("touchstart",O),r.domElement.removeEventListener("touchmove",V),r.domElement.removeEventListener("touchend",st),l&&r.domElement.parentNode&&l.removeChild(r.domElement),_.dispose(),g.forEach(Et=>Et.sprite.material.dispose()),x.forEach(Et=>{Et.line.geometry.dispose(),Et.line.material.dispose()}),B.dispose(),z.dispose(),W.dispose(),D.dispose()}},[]),Ut.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"})}const Ga=[{id:"ncr",name:"NCR Voyix",title:"Mobile Development Intern",period:"Summer 2025",summary:"Built resilient mobile systems for retail operations and connected commerce experiences.",technologies:["React Native","Expo","GraphQL","TypeScript"],projects:[{name:"Retail Mobility Platform",summary:"Delivered polished mobile workflows for in-store operations."},{name:"API Integration Layer",summary:"Connected commerce services with reliable data flows."}],color:"#4b7bff",orbitRadius:6.7,orbitSpeed:.18,accent:"#73e0ff"},{id:"novae",name:"Novae",title:"Software Engineering Intern",period:"Summer 2024",summary:"Contributed to event-driven systems and modern web interfaces for a fast-moving product team.",technologies:["Spring Boot","Angular","Kafka","MongoDB"],projects:[{name:"Streaming Integration Services",summary:"Improved message-driven workflows and monitoring."},{name:"Internal Admin Console",summary:"Shipped a cleaner operational dashboard experience."}],color:"#2ec4b6",orbitRadius:8.8,orbitSpeed:.13,accent:"#7fffd4"},{id:"adobe",name:"Adobe",title:"Developer Platforms Intern",period:"Summer 2026",summary:"Exploring developer tooling and platform experiences at the intersection of product and engineering.",technologies:["Developer Platforms","APIs","Systems Design","Collaboration"],projects:[{name:"Platform Experience Research",summary:"Investigated scalable developer workflows and onboarding."},{name:"Tooling Improvements",summary:"Helped shape a more coherent internal developer experience."}],color:"#8b5cf6",orbitRadius:10.5,orbitSpeed:.11,accent:"#c29cff"},{id:"research",name:"Research",title:"Undergraduate Research",period:"Aug 2024 – May 2025",summary:"Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.",technologies:["Research","Materials","Neuroscience","Experimentation"],projects:[{name:"Translational Glycomaterials",summary:"Investigated biomaterials for neural repair applications."},{name:"Lab Systems Support",summary:"Built reliable experimental and documentation workflows."}],color:"#1fb6d4",orbitRadius:5.6,orbitSpeed:.22,accent:"#8fe8ff"}],MA=["Cross-platform product engineering","Systems thinking and rapid prototyping","Research-driven design and implementation","Developer experience and polished interfaces"];function EA({onSelectEntry:o,selectedEntryId:e}){const[i,r]=Tn.useState(0),[l,c]=Tn.useState(null);Tn.useEffect(()=>{let _=0;const g=x=>{r(x*18e-5),_=window.requestAnimationFrame(g)};return _=window.requestAnimationFrame(g),()=>window.cancelAnimationFrame(_)},[]);const h=Tn.useMemo(()=>Ga.find(_=>_.id===e)??Ga[0],[e]),d=Tn.useMemo(()=>{const _=Ga.findIndex(g=>g.id===h.id);return Ga.map((g,x)=>{const y=i*g.orbitSpeed+x*.9,b=g.orbitRadius*.9,A=Math.cos(y)*b,M=Math.sin(y*.75+x*.3)*(b*.55),v=_>=0?i*g.orbitSpeed+_*.9:0,N=Math.cos(v)*(_>=0?1.6:0),L=Math.sin(v*.82)*(_>=0?1.1:0),C=g.id===h.id;return{...g,x:A-N*.6+(C?0:-N*.2),y:M-L*.6+(C?0:-L*.2),angle:y,scale:C?1.18:.9+Math.sin(i*3+x)*.06,glow:.7+Math.sin(i*3+x*.8)*.2}})},[h.id,i]),m=Tn.useMemo(()=>[{left:"8%",top:"12%",size:"38%",color:"rgba(47, 101, 255, 0.16)"},{left:"68%",top:"16%",size:"28%",color:"rgba(46, 196, 182, 0.14)"},{left:"32%",top:"70%",size:"26%",color:"rgba(158, 82, 255, 0.16)"}],[]),p=Tn.useMemo(()=>[{left:"12%",top:"16%",width:"36%",delay:.2},{left:"64%",top:"28%",width:"28%",delay:.8},{left:"28%",top:"74%",width:"22%",delay:1.3}],[]);return Ut.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:[Ut.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at center, rgba(11, 17, 40, 0.2) 0%, rgba(2, 6, 18, 0.84) 52%, rgba(2, 6, 18, 1) 100%)"}}),m.map((_,g)=>Ut.jsx("div",{style:{position:"absolute",left:_.left,top:_.top,width:_.size,height:_.size,borderRadius:"50%",background:`radial-gradient(circle, ${_.color} 0%, rgba(255,255,255,0) 72%)`,filter:"blur(22px)",transform:`translate3d(0, ${Math.sin(i*2+g)*6}px, 0)`}},_.left+g)),Ut.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.26) 0 1px, transparent 1px), radial-gradient(circle, rgba(123, 170, 255, 0.18) 0 2px, transparent 2px)",backgroundSize:"140px 140px, 260px 260px",backgroundPosition:"0 0, 50px 60px",opacity:.7}}),Ut.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, rgba(80, 185, 255, 0.08) 0%, transparent 40%)"}}),p.map((_,g)=>Ut.jsx("div",{style:{position:"absolute",left:_.left,top:_.top,width:_.width,height:1,opacity:.35+Math.sin(i*1.6+g)*.12,background:"linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.8), rgba(255,255,255,0))",transform:`rotate(-18deg) translate3d(${Math.sin(i*1.2+g)*10}px, ${Math.cos(i*1.2+g)*6}px, 0)`}},_.left+g)),Ut.jsx("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.25},children:d.map(_=>Ut.jsx("line",{x1:"50",y1:"50",x2:50+_.x*.9,y2:50+_.y*.9,stroke:_.color,strokeWidth:"0.2",strokeDasharray:"0.4 0.4",opacity:"0.6"},`route-${_.id}`))}),Ut.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",width:180,height:180,transform:"translate(-50%, -50%)",borderRadius:"50%",border:"1px solid rgba(125, 217, 255, 0.25)",boxShadow:"0 0 42px rgba(66, 200, 255, 0.16), inset 0 0 60px rgba(65, 211, 255, 0.08)",background:"radial-gradient(circle, rgba(41, 152, 255, 0.2), rgba(6, 12, 28, 0.06) 65%, transparent 100%)"}}),d.map(_=>{const g=l===_.id||_.id===h.id;return Ut.jsxs("button",{type:"button",onClick:()=>o(_.id),onMouseEnter:()=>c(_.id),onMouseLeave:()=>c(null),style:{position:"absolute",left:`calc(50% + ${_.x}vw)`,top:`calc(50% + ${_.y}vh)`,transform:"translate(-50%, -50%)",pointerEvents:"auto",border:"none",background:"transparent",padding:0,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:8,color:"#eafaff"},children:[Ut.jsx("div",{style:{width:g?22:16,height:g?22:16,borderRadius:"50%",background:_.color,boxShadow:`0 0 ${g?28:18}px ${_.accent}`,border:`1px solid ${_.accent}`,transform:`scale(${_.scale})`,transition:"transform 0.24s ease, box-shadow 0.24s ease, width 0.24s ease, height 0.24s ease"}}),Ut.jsx("span",{style:{fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",opacity:g?1:.82,color:g?"#ffffff":"#a9e3ff",textShadow:"0 0 10px rgba(255,255,255,0.18)"},children:_.name})]},_.id)})]})}function bA(){const[o,e]=Tn.useState("animated"),[i,r]=Tn.useState(Ga[0].id),l=Tn.useMemo(()=>Ga.find(c=>c.id===i)??Ga[0],[i]);return Ut.jsxs("div",{style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",paddingTop:"20px",paddingBottom:"100px"},children:[Ut.jsx(Bv,{}),Ut.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%",maxWidth:"1180px",background:"rgba(2,8,20,0.72)",backdropFilter:"blur(10px)",borderRadius:20,padding:"28px 28px 36px",border:"1px solid rgba(102, 232, 255, 0.16)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.28)"},children:[Ut.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,gap:12,flexWrap:"wrap"},children:[Ut.jsxs("div",{children:[Ut.jsx("p",{style:{margin:0,color:"#70d8ff",textTransform:"uppercase",letterSpacing:"0.22em",fontSize:12},children:"Career Universe"}),Ut.jsx("h2",{style:{margin:"4px 0 0",fontSize:30,color:"#f3fcff",fontWeight:700},children:"Experience & Projects"})]}),Ut.jsxs("div",{style:{display:"flex",gap:8},children:[Ut.jsx("button",{onClick:()=>e("animated"),style:{padding:"8px 12px",borderRadius:999,border:o==="animated"?"1px solid #69e4ff":"1px solid rgba(255,255,255,0.12)",background:o==="animated"?"rgba(105,228,255,0.16)":"rgba(255,255,255,0.05)",color:"#f3fcff",cursor:"pointer"},children:"Animated Mode"}),Ut.jsx("button",{onClick:()=>e("list"),style:{padding:"8px 12px",borderRadius:999,border:o==="list"?"1px solid #69e4ff":"1px solid rgba(255,255,255,0.12)",background:o==="list"?"rgba(105,228,255,0.16)":"rgba(255,255,255,0.05)",color:"#f3fcff",cursor:"pointer"},children:"List Mode"})]})]}),o==="animated"?Ut.jsxs("div",{style:{position:"relative",minHeight:"560px",borderRadius:18,overflow:"hidden",background:"linear-gradient(135deg, rgba(5, 10, 24, 0.92), rgba(12, 18, 38, 0.86))",border:"1px solid rgba(102, 232, 255, 0.14)"},children:[Ut.jsx(EA,{onSelectEntry:r,selectedEntryId:i}),Ut.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"22px"},children:Ut.jsxs("div",{style:{width:"min(100%, 420px)",background:"rgba(2, 8, 20, 0.72)",border:"1px solid rgba(102, 232, 255, 0.16)",borderRadius:16,padding:18,boxShadow:"0 14px 36px rgba(0,0,0,0.26)"},children:[Ut.jsx("p",{style:{margin:"0 0 6px",color:"#70d8ff",textTransform:"uppercase",letterSpacing:"0.2em",fontSize:11},children:l.period}),Ut.jsx("h3",{style:{margin:0,color:"#f3fcff",fontSize:22},children:l.name}),Ut.jsx("p",{style:{margin:"6px 0 10px",color:"#9ed9ff",fontSize:15},children:l.summary}),Ut.jsx("p",{style:{margin:"0 0 6px",color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.16em"},children:"Highlights"}),Ut.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:MA.map(c=>Ut.jsx("span",{style:{padding:"6px 10px",borderRadius:999,background:"rgba(113, 216, 255, 0.12)",color:"#e5f9ff",fontSize:12},children:c},c))})]})})]}):Ut.jsx("div",{style:{display:"grid",gap:18},children:Ga.map(c=>Ut.jsxs("div",{style:{border:"1px solid rgba(102, 232, 255, 0.16)",borderRadius:16,padding:18,background:"rgba(3, 10, 24, 0.7)"},children:[Ut.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[Ut.jsxs("div",{children:[Ut.jsx("p",{style:{margin:0,color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em"},children:c.period}),Ut.jsx("h3",{style:{margin:"2px 0 6px",color:"#f3fcff",fontSize:20},children:c.name}),Ut.jsx("p",{style:{margin:0,color:"#9ed9ff",fontSize:15},children:c.summary})]}),Ut.jsxs("div",{style:{minWidth:180},children:[Ut.jsx("p",{style:{margin:"0 0 6px",color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.16em"},children:"Tech"}),Ut.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:c.technologies.map(h=>Ut.jsx("span",{style:{padding:"6px 10px",borderRadius:999,background:"rgba(113,216,255,0.12)",color:"#e5f9ff",fontSize:12},children:h},h))})]})]}),Ut.jsxs("div",{style:{marginTop:12},children:[Ut.jsx("p",{style:{margin:"0 0 8px",color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.16em"},children:"Projects"}),Ut.jsx("div",{style:{display:"grid",gap:8},children:c.projects.map(h=>Ut.jsxs("div",{style:{padding:"10px 12px",borderRadius:12,background:"rgba(255,255,255,0.04)"},children:[Ut.jsx("p",{style:{margin:0,color:"#f3fcff",fontWeight:600},children:h.name}),Ut.jsx("p",{style:{margin:"4px 0 0",color:"#9ed9ff",fontSize:14},children:h.summary})]},h.name))})]})]},c.id))})]})]})}function TA(){return Ut.jsx("div",{children:Ut.jsx(Bv,{})})}function AA(){const o=Tn.useRef(null),e=Tn.useRef(null);return Tn.useEffect(()=>{if(!o.current)return;const i=new Mv;i.background=new oe(1296),i.fog=new Qc(1296,.015),e.current=i;const r=new kn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const l=new zv({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=o.current;c.appendChild(l.domElement);const h=new wv(16777215,.3);i.add(h);const d=new Ls(6724095,1.5,80);d.position.set(15,15,15),i.add(d);const m=new Ls(11193599,1.5,80);m.position.set(-15,-15,15),i.add(m);const p=new Ls(10075135,1.5,80);p.position.set(0,15,-15),i.add(p);const _=new Cs;i.add(_);const g=Pv(),x=15,y=6,b=y/(x-1),A=[],M={};for(let V=0;V<x;V++)for(let st=0;st<x;st++)for(let gt=0;gt<x;gt++){const wt=-y/2+gt*b,$=-y/2+st*b,ct=-y/2+V*b,Tt=new k(wt,$,ct),zt=new Kd({map:g,color:new oe(13426175),transparent:!0,opacity:0,blending:Ya}),Pt=new bv(zt);Pt.position.copy(Tt),Pt.scale.set(0,0,0);const Wt=.1+Math.random()*.06;_.add(Pt);const Me={sprite:Pt,targetScale:Wt,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:Tt.clone(),gridX:gt,gridY:st,gridZ:V};A.push(Me),M[`${gt},${st},${V}`]=Me}const v=[],N=1.5;A.forEach(V=>{const{gridX:st,gridY:gt,gridZ:wt,position:$}=V;[[st+1,gt,wt],[st,gt+1,wt],[st,gt,wt+1]].forEach(([Tt,zt,Pt])=>{if(Tt<x&&zt<x&&Pt<x){const Wt=`${Tt},${zt},${Pt}`,Me=M[Wt];if(Me){const I=Me.position;if($.distanceTo(I)<=N){const Et=[$,I],At=new Bn().setFromPoints(Et),Lt=new Jd({color:new oe(8956637),transparent:!0,opacity:0,blending:Ya}),fe=new Tv(At,Lt);_.add(fe),v.push({line:fe,atom1:V,atom2:Me,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.08+Math.random()*.1})}}}})});let L=!1,C={x:0,y:0};const H={x:0,y:0};function B(V){L=!0,C={x:V.clientX,y:V.clientY}}function z(V){if(L){const st=V.clientX-C.x,gt=V.clientY-C.y;H.y+=st*.005,H.x+=gt*.005,C={x:V.clientX,y:V.clientY}}}function W(){L=!1}function D(V){r.position.z+=V.deltaY*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),H.y+=(V.deltaX||V.deltaY)*8e-4}let w=0;function G(V){if(V.touches.length===2){const st=V.touches[0].clientX-V.touches[1].clientX,gt=V.touches[0].clientY-V.touches[1].clientY;w=Math.sqrt(st*st+gt*gt)}else V.touches.length===1&&(L=!0,C={x:V.touches[0].clientX,y:V.touches[0].clientY})}function tt(V){if(V.touches.length===2){const st=V.touches[0].clientX-V.touches[1].clientX,gt=V.touches[0].clientY-V.touches[1].clientY,wt=Math.sqrt(st*st+gt*gt),$=wt-w;r.position.z-=$*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),w=wt}else if(V.touches.length===1&&L){const st=V.touches[0].clientX-C.x,gt=V.touches[0].clientY-C.y;H.y+=st*.005,H.x+=gt*.005,C={x:V.touches[0].clientX,y:V.touches[0].clientY}}}function ft(){L=!1}l.domElement.addEventListener("mousedown",B),l.domElement.addEventListener("mousemove",z),l.domElement.addEventListener("mouseup",W),l.domElement.addEventListener("wheel",D,{passive:!0}),l.domElement.addEventListener("touchstart",G),l.domElement.addEventListener("touchmove",tt),l.domElement.addEventListener("touchend",ft);let pt=0;const ht=5e3,P=Date.now();let Y=0;const j=A.map((V,st)=>st/A.length),yt=v.map((V,st)=>st/v.length);function Mt(){requestAnimationFrame(Mt);const V=Date.now()-P;pt=Math.min(V/ht,1),Y+=.016,_.rotation.x+=(H.x-_.rotation.x)*.05,_.rotation.y+=(H.y-_.rotation.y)*.05,L||(H.y+=.002),A.forEach((st,gt)=>{const wt=j[gt],$=Math.max(0,Math.min(1,(pt-wt*.3)/.7)),ct=$*st.targetScale;st.sprite.scale.set(ct,ct,ct);const Tt=Math.sin(Y*st.glimmerSpeed+st.glimmerOffset)*.3+.7;if(st.sprite.material.opacity=$*Tt*.95,$>.01){const zt=Math.sin(Y*.08+wt*.6)*.3,Pt=Math.sin(Y*.12+wt*1.2+Math.PI)*.3,Wt=Math.sin(Y*.05+wt*.4+Math.PI*.5)*.2,Me=(zt+Pt+Wt+Tt*.4)%1,I=.4+Tt*.45,ge=.55+Tt*.4;st.sprite.material.color.setHSL(Me,I,ge)}}),v.forEach((st,gt)=>{const wt=st.atom1.sprite.scale.x/st.atom1.targetScale,$=st.atom2.sprite.scale.x/st.atom2.targetScale,ct=Math.min(wt,$),Tt=Math.sin(Y*st.glimmerSpeed+st.glimmerOffset)*.6+.6;if(st.line.material.opacity=Math.min(1,ct*st.baseOpacity*Tt),ct>.01){const zt=yt[gt],Pt=Math.sin(Y*.06+zt*.7)*.3,Wt=Math.sin(Y*.1+zt*1.4+Math.PI)*.3,Me=Math.sin(Y*.04+zt*.3+Math.PI*.5)*.2,I=(Pt+Wt+Me+Tt*.2)%1,ge=.5+Tt*.35,Et=.5+Tt*.3;st.line.material.color.setHSL(I,ge,Et)}}),Y%.1<.016&&(d.position.x=Math.sin(Y*.2)*15,d.position.z=Math.cos(Y*.2)*15,m.position.x=Math.sin(Y*.25+Math.PI)*15,m.position.z=Math.cos(Y*.25+Math.PI)*15),l.render(i,r)}Mt();function O(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),l.domElement.removeEventListener("mousedown",B),l.domElement.removeEventListener("mousemove",z),l.domElement.removeEventListener("mouseup",W),l.domElement.removeEventListener("wheel",D),l.domElement.removeEventListener("touchstart",G),l.domElement.removeEventListener("touchmove",tt),l.domElement.removeEventListener("touchend",ft),c&&l.domElement.parentNode&&c.removeChild(l.domElement),g.dispose(),A.forEach(V=>V.sprite.material.dispose()),v.forEach(V=>{V.line.geometry.dispose(),V.line.material.dispose()})}},[]),Ut.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"})}function RA(){return Ut.jsx("div",{children:Ut.jsx(AA,{})})}function CA(){const[o,e]=Tn.useState("home");return Ut.jsxs("div",{children:[o==="home"&&Ut.jsx(ty,{}),Ut.jsx(hy,{route:o,setRoute:e}),Ut.jsx(fy,{}),Ut.jsxs("div",{className:"relative z-10 h-full pointer-events-auto",children:[o==="home"&&Ut.jsx(TA,{}),o==="about"&&Ut.jsx(bA,{}),o==="contact"&&Ut.jsx(dy,{}),o==="test"&&Ut.jsx(RA,{})]})]})}$S.createRoot(document.getElementById("root")).render(Ut.jsx(Va.StrictMode,{children:Ut.jsx(CA,{})}));
