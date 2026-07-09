(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function GS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var sh={exports:{}},Do={};var z0;function VS(){if(z0)return Do;z0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var P0;function XS(){return P0||(P0=1,sh.exports=VS()),sh.exports}var Kt=XS(),oh={exports:{}},Uo={},lh={exports:{}},ch={};var B0;function kS(){return B0||(B0=1,(function(o){function e(P,q){var j=P.length;P.push(q);t:for(;0<j;){var Mt=j-1>>>1,Tt=P[Mt];if(0<l(Tt,q))P[Mt]=q,P[j]=Tt,j=Mt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var q=P[0],j=P.pop();if(j!==q){P[0]=j;t:for(var Mt=0,Tt=P.length,O=Tt>>>1;Mt<O;){var V=2*(Mt+1)-1,rt=P[V],vt=V+1,Dt=P[vt];if(0>l(rt,j))vt<Tt&&0>l(Dt,rt)?(P[Mt]=Dt,P[vt]=j,Mt=vt):(P[Mt]=rt,P[V]=j,Mt=V);else if(vt<Tt&&0>l(Dt,j))P[Mt]=Dt,P[vt]=j,Mt=vt;else break t}}return q}function l(P,q){var j=P.sortIndex-q.sortIndex;return j!==0?j:P.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,x=null,v=3,M=!1,T=!1,A=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=P)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function H(P){if(A=!1,D(P),!T)if(i(m)!==null)T=!0,F||(F=!0,tt());else{var q=i(p);q!==null&&ht(H,q.startTime-P)}}var F=!1,z=-1,Y=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<Y)}function G(){if(y=!1,F){var P=o.unstable_now();w=P;var q=!0;try{t:{T=!1,A&&(A=!1,N(z),z=-1),M=!0;var j=v;try{e:{for(D(P),x=i(m);x!==null&&!(x.expirationTime>P&&C());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,v=x.priorityLevel;var Tt=Mt(x.expirationTime<=P);if(P=o.unstable_now(),typeof Tt=="function"){x.callback=Tt,D(P),q=!0;break e}x===i(m)&&r(m),D(P)}else r(m);x=i(m)}if(x!==null)q=!0;else{var O=i(p);O!==null&&ht(H,O.startTime-P),q=!1}}break t}finally{x=null,v=j,M=!1}q=void 0}}finally{q?tt():F=!1}}}var tt;if(typeof U=="function")tt=function(){U(G)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,gt=ft.port2;ft.port1.onmessage=G,tt=function(){gt.postMessage(null)}}else tt=function(){g(G,0)};function ht(P,q){z=g(function(){P(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(P){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var j=v;v=q;try{return P()}finally{v=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=v;v=P;try{return q()}finally{v=j}},o.unstable_scheduleCallback=function(P,q,j){var Mt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Mt+j:Mt):j=Mt,P){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=j+Tt,P={id:S++,callback:q,priorityLevel:P,startTime:j,expirationTime:Tt,sortIndex:-1},j>Mt?(P.sortIndex=j,e(p,P),i(m)===null&&P===i(p)&&(A?(N(z),z=-1):A=!0,ht(H,j-Mt))):(P.sortIndex=Tt,e(m,P),T||M||(T=!0,F||(F=!0,tt()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var q=v;return function(){var j=v;v=q;try{return P.apply(this,arguments)}finally{v=j}}}})(ch)),ch}var I0;function WS(){return I0||(I0=1,lh.exports=kS()),lh.exports}var uh={exports:{}},fe={};var F0;function qS(){if(F0)return fe;F0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function g(O,V,rt){this.props=O,this.context=V,this.refs=y,this.updater=rt||T}g.prototype.isReactComponent={},g.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=g.prototype;function U(O,V,rt){this.props=O,this.context=V,this.refs=y,this.updater=rt||T}var D=U.prototype=new N;D.constructor=U,A(D,g.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function w(O,V,rt){var vt=rt.ref;return{$$typeof:o,type:O,key:V,ref:vt!==void 0?vt:null,props:rt}}function C(O,V){return w(O.type,V,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function tt(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(rt){return V[rt]})}var ft=/\/+/g;function gt(O,V){return typeof O=="object"&&O!==null&&O.key!=null?tt(""+O.key):V.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(V){O.status==="pending"&&(O.status="fulfilled",O.value=V)},function(V){O.status==="pending"&&(O.status="rejected",O.reason=V)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,V,rt,vt,Dt){var J=typeof O;(J==="undefined"||J==="boolean")&&(O=null);var lt=!1;if(O===null)lt=!0;else switch(J){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(O.$$typeof){case o:case e:lt=!0;break;case S:return lt=O._init,P(lt(O._payload),V,rt,vt,Dt)}}if(lt)return Dt=Dt(O),lt=vt===""?"."+gt(O,0):vt,H(Dt)?(rt="",lt!=null&&(rt=lt.replace(ft,"$&/")+"/"),P(Dt,V,rt,"",function(Bt){return Bt})):Dt!=null&&(G(Dt)&&(Dt=C(Dt,rt+(Dt.key==null||O&&O.key===Dt.key?"":(""+Dt.key).replace(ft,"$&/")+"/")+lt)),V.push(Dt)),1;lt=0;var Ct=vt===""?".":vt+":";if(H(O))for(var Nt=0;Nt<O.length;Nt++)vt=O[Nt],J=Ct+gt(vt,Nt),lt+=P(vt,V,rt,J,Dt);else if(Nt=M(O),typeof Nt=="function")for(O=Nt.call(O),Nt=0;!(vt=O.next()).done;)vt=vt.value,J=Ct+gt(vt,Nt++),lt+=P(vt,V,rt,J,Dt);else if(J==="object"){if(typeof O.then=="function")return P(ht(O),V,rt,vt,Dt);throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return lt}function q(O,V,rt){if(O==null)return O;var vt=[],Dt=0;return P(O,vt,"","",function(J){return V.call(rt,J,Dt++)}),vt}function j(O){if(O._status===-1){var V=O._result;V=V(),V.then(function(rt){(O._status===0||O._status===-1)&&(O._status=1,O._result=rt)},function(rt){(O._status===0||O._status===-1)&&(O._status=2,O._result=rt)}),O._status===-1&&(O._status=0,O._result=V)}if(O._status===1)return O._result.default;throw O._result}var Mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:q,forEach:function(O,V,rt){q(O,function(){V.apply(this,arguments)},rt)},count:function(O){var V=0;return q(O,function(){V++}),V},toArray:function(O){return q(O,function(V){return V})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return fe.Activity=x,fe.Children=Tt,fe.Component=g,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=U,fe.StrictMode=r,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,fe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},fe.cache=function(O){return function(){return O.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(O,V,rt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var vt=A({},O.props),Dt=O.key;if(V!=null)for(J in V.key!==void 0&&(Dt=""+V.key),V)!Y.call(V,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&V.ref===void 0||(vt[J]=V[J]);var J=arguments.length-2;if(J===1)vt.children=rt;else if(1<J){for(var lt=Array(J),Ct=0;Ct<J;Ct++)lt[Ct]=arguments[Ct+2];vt.children=lt}return w(O.type,Dt,vt)},fe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},fe.createElement=function(O,V,rt){var vt,Dt={},J=null;if(V!=null)for(vt in V.key!==void 0&&(J=""+V.key),V)Y.call(V,vt)&&vt!=="key"&&vt!=="__self"&&vt!=="__source"&&(Dt[vt]=V[vt]);var lt=arguments.length-2;if(lt===1)Dt.children=rt;else if(1<lt){for(var Ct=Array(lt),Nt=0;Nt<lt;Nt++)Ct[Nt]=arguments[Nt+2];Dt.children=Ct}if(O&&O.defaultProps)for(vt in lt=O.defaultProps,lt)Dt[vt]===void 0&&(Dt[vt]=lt[vt]);return w(O,J,Dt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(O){return{$$typeof:d,render:O}},fe.isValidElement=G,fe.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:j}},fe.memo=function(O,V){return{$$typeof:p,type:O,compare:V===void 0?null:V}},fe.startTransition=function(O){var V=z.T,rt={};z.T=rt;try{var vt=O(),Dt=z.S;Dt!==null&&Dt(rt,vt),typeof vt=="object"&&vt!==null&&typeof vt.then=="function"&&vt.then(F,Mt)}catch(J){Mt(J)}finally{V!==null&&rt.types!==null&&(V.types=rt.types),z.T=V}},fe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},fe.use=function(O){return z.H.use(O)},fe.useActionState=function(O,V,rt){return z.H.useActionState(O,V,rt)},fe.useCallback=function(O,V){return z.H.useCallback(O,V)},fe.useContext=function(O){return z.H.useContext(O)},fe.useDebugValue=function(){},fe.useDeferredValue=function(O,V){return z.H.useDeferredValue(O,V)},fe.useEffect=function(O,V){return z.H.useEffect(O,V)},fe.useEffectEvent=function(O){return z.H.useEffectEvent(O)},fe.useId=function(){return z.H.useId()},fe.useImperativeHandle=function(O,V,rt){return z.H.useImperativeHandle(O,V,rt)},fe.useInsertionEffect=function(O,V){return z.H.useInsertionEffect(O,V)},fe.useLayoutEffect=function(O,V){return z.H.useLayoutEffect(O,V)},fe.useMemo=function(O,V){return z.H.useMemo(O,V)},fe.useOptimistic=function(O,V){return z.H.useOptimistic(O,V)},fe.useReducer=function(O,V,rt){return z.H.useReducer(O,V,rt)},fe.useRef=function(O){return z.H.useRef(O)},fe.useState=function(O){return z.H.useState(O)},fe.useSyncExternalStore=function(O,V,rt){return z.H.useSyncExternalStore(O,V,rt)},fe.useTransition=function(){return z.H.useTransition()},fe.version="19.2.0",fe}var H0;function Id(){return H0||(H0=1,uh.exports=qS()),uh.exports}var fh={exports:{}},Rn={};var G0;function YS(){if(G0)return Rn;G0=1;var o=Id();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},Rn.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,x=d(S,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,x=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.0",Rn}var V0;function jS(){if(V0)return fh.exports;V0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fh.exports=YS(),fh.exports}var X0;function ZS(){if(X0)return Uo;X0=1;var o=WS(),e=Id(),i=jS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,b=u.child;b;){if(b===a){_=!0,a=u,s=f;break}if(b===s){_=!0,s=u,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,s=u;break}if(b===s){_=!0,s=f,a=u;break}b=b.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ft?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case U:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Mt=[],Tt=-1;function O(t){return{current:t}}function V(t){0>Tt||(t.current=Mt[Tt],Mt[Tt]=null,Tt--)}function rt(t,n){Tt++,Mt[Tt]=t.current,t.current=n}var vt=O(null),Dt=O(null),J=O(null),lt=O(null);function Ct(t,n){switch(rt(J,n),rt(Dt,t),rt(vt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?a0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=a0(n),t=r0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(vt),rt(vt,t)}function Nt(){V(vt),V(Dt),V(J)}function Bt(t){t.memoizedState!==null&&rt(lt,t);var n=vt.current,a=r0(n,t.type);n!==a&&(rt(Dt,t),rt(vt,a))}function se(t){Dt.current===t&&(V(vt),V(Dt)),lt.current===t&&(V(lt),Ao._currentValue=j)}var be,B;function re(t){if(be===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||"",B=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+t+B}var ne=!1;function $t(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var it=ct}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(ct){it=ct}t.call(_t.prototype)}}else{try{throw Error()}catch(ct){it=ct}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var I=_.split(`
`),nt=b.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===nt.length)for(s=I.length-1,u=nt.length-1;1<=s&&0<=u&&I[s]!==nt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==nt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==nt[u]){var dt=`
`+I[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?re(a):""}function kt(t,n){switch(t.tag){case 26:case 27:case 5:return re(t.type);case 16:return re("Lazy");case 13:return t.child!==n&&n!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return re("Activity");default:return""}}function At(t){try{var n="",a=null;do n+=kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Et=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,he=o.unstable_cancelCallback,Ae=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,st=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Xt=o.log,Pt=o.unstable_setDisableYieldValue,St=null,wt=null;function Qt(t){if(typeof Xt=="function"&&Pt(t),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(St,t)}catch{}}var zt=Math.clz32?Math.clz32:W,Ot=Math.log,le=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ot(t)/le|0)|0}var Rt=256,Lt=262144,It=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?u=bt(s):(_&=b,_!==0?u=bt(_):a||(a=b&~t,a!==0&&(u=bt(a))))):(b=s&~f,b!==0?u=bt(b):_!==0?u=bt(_):a||(a=s&~t,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function qt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=It;return It<<=1,(It&62914560)===0&&(It=4194304),t}function we(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ni(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,nt=t.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-zt(a),_t=1<<dt;b[dt]=0,I[dt]=-1;var it=nt[dt];if(it!==null)for(nt[dt]=null,dt=0;dt<it.length;dt++){var ct=it[dt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}s!==0&&Fs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Fs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Rr(t,n){var a=n&-n;return a=(a&42)!==0?1:Cr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Cr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ya(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:C0(t.type))}function Hs(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var Wn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Wn,xn="__reactProps$"+Wn,ua="__reactContainer$"+Wn,Gs="__reactEvents$"+Wn,$c="__reactListeners$"+Wn,tu="__reactHandles$"+Wn,Jo="__reactResources$"+Wn,ja="__reactMarker$"+Wn;function R(t){delete t[rn],delete t[xn],delete t[Gs],delete t[$c],delete t[tu]}function Z(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ua]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=h0(t);t!==null;){if(a=t[rn])return a;t=h0(t)}return n}t=a,a=t.parentNode}return null}function at(t){if(t=t[rn]||t[ua]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ot(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Q(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(t){t[ja]=!0}var Ft=new Set,jt={};function Gt(t,n){te(t,n),te(t+"Capture",n)}function te(t,n){for(jt[t]=n,t=0;t<n.length;t++)Ft.add(n[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},ve={};function ze(t){return Et.call(ve,t)?!0:Et.call(ee,t)?!1:oe.test(t)?ve[t]=!0:(ee[t]=!0,!1)}function qe(t,n,a){if(ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Pe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function De(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=De(t,n,""+t[n])}}function zi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=je(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Za=/[\n"\\]/g;function Me(t){return t.replace(Za,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(t,n,a,s,u,f,_,b){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?fn(t,_,Zt(n)):a!=null?fn(t,_,Zt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Zt(b):t.removeAttribute("name")}function Un(t,n,a,s,u,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Sn(t)}function fn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function en(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Dr(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function Ei(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Sn(t)}function Ur(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Pv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function np(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ep(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ep(t,f,n[f])}function eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return Iv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var nu=null;function iu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lr=null,Nr=null;function ip(t){var n=at(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(An(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));An(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&zi(s)}break t;case"textarea":Dr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(t,!!a.multiple,n,!1)}}}var au=!1;function ap(t,n,a){if(au)return t(n,a);au=!0;try{var s=t(n);return s}finally{if(au=!1,(Lr!==null||Nr!==null)&&(Hl(),Lr&&(n=Lr,t=Nr,Nr=Lr=null,ip(n),t)))for(n=0;n<t.length;n++)ip(t[n])}}function Vs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Bi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{ru=!1}var fa=null,su=null,tl=null;function rp(){if(tl)return tl;var t,n=su,a=n.length,s,u="value"in fa?fa.value:fa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return tl=u.slice(t,1<s?1-s:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function sp(){return!1}function Bn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:sp,this.isPropagationStopped=sp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Bn(Ka),ks=x({},Ka,{view:0,detail:0}),Fv=Bn(ks),ou,lu,Ws,al=x({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(ou=t.screenX-Ws.screenX,lu=t.screenY-Ws.screenY):lu=ou=0,Ws=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),op=Bn(al),Hv=x({},al,{dataTransfer:0}),Gv=Bn(Hv),Vv=x({},ks,{relatedTarget:0}),cu=Bn(Vv),Xv=x({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=Bn(Xv),Wv=x({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=Bn(Wv),Yv=x({},Ka,{data:0}),lp=Bn(Yv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function uu(){return Qv}var Jv=x({},ks,{key:function(t){if(t.key){var n=jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Bn(Jv),tx=x({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Bn(tx),ex=x({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),nx=Bn(ex),ix=x({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Bn(ix),rx=x({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Bn(rx),ox=x({},Ka,{newState:0,oldState:0}),lx=Bn(ox),cx=[9,13,27,32],fu=Bi&&"CompositionEvent"in window,qs=null;Bi&&"documentMode"in document&&(qs=document.documentMode);var ux=Bi&&"TextEvent"in window&&!qs,up=Bi&&(!fu||qs&&8<qs&&11>=qs),fp=" ",hp=!1;function dp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Or=!1;function fx(t,n){switch(t){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(hp=!0,fp);case"textInput":return t=n.data,t===fp&&hp?null:t;default:return null}}function hx(t,n){if(Or)return t==="compositionend"||!fu&&dp(t,n)?(t=rp(),tl=su=fa=null,Or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function gp(t,n,a,s){Lr?Nr?Nr.push(s):Nr=[s]:Lr=s,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ys=null,js=null;function px(t){Jg(t,0)}function rl(t){var n=ot(t);if(zi(n))return t}function _p(t,n){if(t==="change")return n}var vp=!1;if(Bi){var hu;if(Bi){var du="oninput"in document;if(!du){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),du=typeof xp.oninput=="function"}hu=du}else hu=!1;vp=hu&&(!document.documentMode||9<document.documentMode)}function Sp(){Ys&&(Ys.detachEvent("onpropertychange",yp),js=Ys=null)}function yp(t){if(t.propertyName==="value"&&rl(js)){var n=[];gp(n,js,t,iu(t)),ap(px,n)}}function mx(t,n,a){t==="focusin"?(Sp(),Ys=n,js=a,Ys.attachEvent("onpropertychange",yp)):t==="focusout"&&Sp()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(js)}function _x(t,n){if(t==="click")return rl(n)}function vx(t,n){if(t==="input"||t==="change")return rl(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:xx;function Zs(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Et.call(n,u)||!qn(t[u],n[u]))return!1}return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ep(t,n){var a=Mp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function Tp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Tp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function pu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sx=Bi&&"documentMode"in document&&11>=document.documentMode,zr=null,mu=null,Ks=null,gu=!1;function Ap(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||zr==null||zr!==gn(s)||(s=zr,"selectionStart"in s&&pu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ks&&Zs(Ks,s)||(Ks=s,s=Yl(mu,"onSelect"),0<s.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=zr)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Pr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},_u={},Rp={};Bi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ja(t){if(_u[t])return _u[t];if(!Pr[t])return t;var n=Pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return _u[t]=n[a];return t}var Cp=Ja("animationend"),wp=Ja("animationiteration"),Dp=Ja("animationstart"),yx=Ja("transitionrun"),Mx=Ja("transitionstart"),Ex=Ja("transitioncancel"),Up=Ja("transitionend"),Lp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function di(t,n){Lp.set(t,n),Gt(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Br=0,xu=0;function ol(){for(var t=Br,n=xu=Br=0;n<t;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Np(a,u,f)}}function ll(t,n,a,s){ii[Br++]=t,ii[Br++]=n,ii[Br++]=a,ii[Br++]=s,xu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Su(t,n,a,s){return ll(t,n,a,s),cl(t)}function $a(t,n){return ll(t,null,null,n),cl(t)}function Np(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<xo)throw xo=0,Df=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function Tx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new Tx(t,n,a,s)}function yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")yu(t)&&(_=1);else if(typeof t=="string")_=wS(t,a,vt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Yn(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return tr(a.children,u,f,n);case y:_=8,u|=24;break;case g:return t=Yn(12,a,n,u|2),t.elementType=g,t.lanes=f,t;case H:return t=Yn(13,a,n,u),t.elementType=H,t.lanes=f,t;case F:return t=Yn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break t;case N:_=9;break t;case D:_=11;break t;case z:_=14;break t;case Y:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function tr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function Mu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function zp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function Eu(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Pp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Pp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},Pp.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var Fr=[],Hr=0,fl=null,Qs=0,ri=[],si=0,ha=null,Ti=1,bi="";function Fi(t,n){Fr[Hr++]=Qs,Fr[Hr++]=fl,fl=t,Qs=n}function Bp(t,n,a){ri[si++]=Ti,ri[si++]=bi,ri[si++]=ha,ha=t;var s=Ti;t=bi;var u=32-zt(s)-1;s&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Ti=1<<32-zt(n)+u|a<<u|s,bi=f+t}else Ti=1<<f|a<<u|s,bi=t}function Tu(t){t.return!==null&&(Fi(t,1),Bp(t,1,0))}function bu(t){for(;t===fl;)fl=Fr[--Hr],Fr[Hr]=null,Qs=Fr[--Hr],Fr[Hr]=null;for(;t===ha;)ha=ri[--si],ri[si]=null,bi=ri[--si],ri[si]=null,Ti=ri[--si],ri[si]=null}function Ip(t,n){ri[si++]=Ti,ri[si++]=bi,ri[si++]=ha,Ti=n.id,bi=n.overflow,ha=t}var yn=null,Ze=null,Re=!1,da=null,oi=!1,Au=Error(r(519));function pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ai(n,t)),Au}function Fp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[xn]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ye(yo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Ei(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||n0(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||pa(t,!0)}function Hp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:yn=yn.return}}function Gr(t){if(t!==yn)return!1;if(!Re)return Hp(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wf(t.type,t.memoizedProps)),a=!a),a&&Ze&&pa(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=f0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=f0(t)}else n===27?(n=Ze,Ca(t.type)?(t=Kf,Kf=null,Ze=t):Ze=n):Ze=yn?ci(t.stateNode.nextSibling):null;return!0}function er(){Ze=yn=null,Re=!1}function Ru(){var t=da;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),da=null),t}function Js(t){da===null?da=[t]:da.push(t)}var Cu=O(null),nr=null,Hi=null;function ma(t,n,a){rt(Cu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=Cu.current,V(Cu)}function wu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Du(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),wu(f.return,a,t),s||(_=null);break t}f=b.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),wu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Vr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var b=u.type;qn(u.pendingProps.value,_.value)||(t!==null?t.push(b):t=[b])}}else if(u===lt.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}u=u.return}t!==null&&Du(n,t,a,s),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Gp(nr,t)}function dl(t,n){return nr===null&&ir(t),Gp(t,n)}function Gp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var bx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=o.unstable_scheduleCallback,Rx=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new bx,data:new Map,refCount:0}}function $s(t){t.refCount--,t.refCount===0&&Ax(Rx,function(){t.controller.abort()})}var to=null,Lu=0,Xr=0,kr=null;function Cx(t,n){if(to===null){var a=to=[];Lu=0,Xr=Pf(),kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Lu++,n.then(Vp,Vp),n}function Vp(){if(--Lu===0&&to!==null){kr!==null&&(kr.status="fulfilled");var t=to;to=null,Xr=0,kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Xp=P.S;P.S=function(t,n){Ag=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cx(t,n),Xp!==null&&Xp(t,n)};var ar=O(null);function Nu(){var t=ar.current;return t!==null?t:Ye.pooledCache}function pl(t,n){n===null?rt(ar,ar.current):rt(ar,n.pool)}function kp(){var t=Nu();return t===null?null:{parent:sn._currentValue,pool:t}}var Wr=Error(r(460)),Ou=Error(r(474)),ml=Error(r(542)),gl={then:function(){}};function Wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jp(t),t}throw sr=n,Wr}}function rr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,Wr):a}}var sr=null;function Yp(){if(sr===null)throw Error(r(459));var t=sr;return sr=null,t}function jp(t){if(t===Wr||t===ml)throw Error(r(483))}var qr=null,eo=0;function _l(t){var n=eo;return eo+=1,qr===null&&(qr=[]),qp(qr,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Zp(t){function n(K,X){if(t){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!t)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function s(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Ii(K,X),K.index=0,K.sibling=null,K}function f(K,X,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function b(K,X,et,mt){return X===null||X.tag!==6?(X=Mu(et,K.mode,mt),X.return=K,X):(X=u(X,et),X.return=K,X)}function I(K,X,et,mt){var ie=et.type;return ie===A?dt(K,X,et.props.children,mt,et.key):X!==null&&(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Y&&rr(ie)===X.type)?(X=u(X,et.props),no(X,et),X.return=K,X):(X=ul(et.type,et.key,et.props,null,K.mode,mt),no(X,et),X.return=K,X)}function nt(K,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Eu(et,K.mode,mt),X.return=K,X):(X=u(X,et.children||[]),X.return=K,X)}function dt(K,X,et,mt,ie){return X===null||X.tag!==7?(X=tr(et,K.mode,mt,ie),X.return=K,X):(X=u(X,et),X.return=K,X)}function _t(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Mu(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return et=ul(X.type,X.key,X.props,null,K.mode,et),no(et,X),et.return=K,et;case T:return X=Eu(X,K.mode,et),X.return=K,X;case Y:return X=rr(X),_t(K,X,et)}if(ht(X)||tt(X))return X=tr(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return _t(K,_l(X),et);if(X.$$typeof===U)return _t(K,dl(K,X),et);vl(K,X)}return null}function it(K,X,et,mt){var ie=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return ie!==null?null:b(K,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case M:return et.key===ie?I(K,X,et,mt):null;case T:return et.key===ie?nt(K,X,et,mt):null;case Y:return et=rr(et),it(K,X,et,mt)}if(ht(et)||tt(et))return ie!==null?null:dt(K,X,et,mt,null);if(typeof et.then=="function")return it(K,X,_l(et),mt);if(et.$$typeof===U)return it(K,X,dl(K,et),mt);vl(K,et)}return null}function ct(K,X,et,mt,ie){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(et)||null,b(X,K,""+mt,ie);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return K=K.get(mt.key===null?et:mt.key)||null,I(X,K,mt,ie);case T:return K=K.get(mt.key===null?et:mt.key)||null,nt(X,K,mt,ie);case Y:return mt=rr(mt),ct(K,X,et,mt,ie)}if(ht(mt)||tt(mt))return K=K.get(et)||null,dt(X,K,mt,ie,null);if(typeof mt.then=="function")return ct(K,X,et,_l(mt),ie);if(mt.$$typeof===U)return ct(K,X,et,dl(X,mt),ie);vl(X,mt)}return null}function Yt(K,X,et,mt){for(var ie=null,Ue=null,Jt=X,pe=X=0,Te=null;Jt!==null&&pe<et.length;pe++){Jt.index>pe?(Te=Jt,Jt=null):Te=Jt.sibling;var Le=it(K,Jt,et[pe],mt);if(Le===null){Jt===null&&(Jt=Te);break}t&&Jt&&Le.alternate===null&&n(K,Jt),X=f(Le,X,pe),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le,Jt=Te}if(pe===et.length)return a(K,Jt),Re&&Fi(K,pe),ie;if(Jt===null){for(;pe<et.length;pe++)Jt=_t(K,et[pe],mt),Jt!==null&&(X=f(Jt,X,pe),Ue===null?ie=Jt:Ue.sibling=Jt,Ue=Jt);return Re&&Fi(K,pe),ie}for(Jt=s(Jt);pe<et.length;pe++)Te=ct(Jt,K,pe,et[pe],mt),Te!==null&&(t&&Te.alternate!==null&&Jt.delete(Te.key===null?pe:Te.key),X=f(Te,X,pe),Ue===null?ie=Te:Ue.sibling=Te,Ue=Te);return t&&Jt.forEach(function(Na){return n(K,Na)}),Re&&Fi(K,pe),ie}function ae(K,X,et,mt){if(et==null)throw Error(r(151));for(var ie=null,Ue=null,Jt=X,pe=X=0,Te=null,Le=et.next();Jt!==null&&!Le.done;pe++,Le=et.next()){Jt.index>pe?(Te=Jt,Jt=null):Te=Jt.sibling;var Na=it(K,Jt,Le.value,mt);if(Na===null){Jt===null&&(Jt=Te);break}t&&Jt&&Na.alternate===null&&n(K,Jt),X=f(Na,X,pe),Ue===null?ie=Na:Ue.sibling=Na,Ue=Na,Jt=Te}if(Le.done)return a(K,Jt),Re&&Fi(K,pe),ie;if(Jt===null){for(;!Le.done;pe++,Le=et.next())Le=_t(K,Le.value,mt),Le!==null&&(X=f(Le,X,pe),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le);return Re&&Fi(K,pe),ie}for(Jt=s(Jt);!Le.done;pe++,Le=et.next())Le=ct(Jt,K,pe,Le.value,mt),Le!==null&&(t&&Le.alternate!==null&&Jt.delete(Le.key===null?pe:Le.key),X=f(Le,X,pe),Ue===null?ie=Le:Ue.sibling=Le,Ue=Le);return t&&Jt.forEach(function(HS){return n(K,HS)}),Re&&Fi(K,pe),ie}function Ve(K,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case M:t:{for(var ie=et.key;X!==null;){if(X.key===ie){if(ie=et.type,ie===A){if(X.tag===7){a(K,X.sibling),mt=u(X,et.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Y&&rr(ie)===X.type){a(K,X.sibling),mt=u(X,et.props),no(mt,et),mt.return=K,K=mt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===A?(mt=tr(et.props.children,K.mode,mt,et.key),mt.return=K,K=mt):(mt=ul(et.type,et.key,et.props,null,K.mode,mt),no(mt,et),mt.return=K,K=mt)}return _(K);case T:t:{for(ie=et.key;X!==null;){if(X.key===ie)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),mt=u(X,et.children||[]),mt.return=K,K=mt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}mt=Eu(et,K.mode,mt),mt.return=K,K=mt}return _(K);case Y:return et=rr(et),Ve(K,X,et,mt)}if(ht(et))return Yt(K,X,et,mt);if(tt(et)){if(ie=tt(et),typeof ie!="function")throw Error(r(150));return et=ie.call(et),ae(K,X,et,mt)}if(typeof et.then=="function")return Ve(K,X,_l(et),mt);if(et.$$typeof===U)return Ve(K,X,dl(K,et),mt);vl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),mt=u(X,et),mt.return=K,K=mt):(a(K,X),mt=Mu(et,K.mode,mt),mt.return=K,K=mt),_(K)):a(K,X)}return function(K,X,et,mt){try{eo=0;var ie=Ve(K,X,et,mt);return qr=null,ie}catch(Jt){if(Jt===Wr||Jt===ml)throw Jt;var Ue=Yn(29,Jt,null,K.mode);return Ue.lanes=mt,Ue.return=K,Ue}}}var or=Zp(!0),Kp=Zp(!1),ga=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=cl(t),Np(t,null,a),n}return ll(t,s,n,a),cl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Mi(t,a)}}function Bu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Iu=!1;function ao(){if(Iu){var t=kr;if(t!==null)throw t}}function ro(t,n,a,s){Iu=!1;var u=t.updateQueue;ga=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,nt=I.next;I.next=null,_===null?f=nt:_.next=nt,_=I;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==_&&(b===null?dt.firstBaseUpdate=nt:b.next=nt,dt.lastBaseUpdate=I))}if(f!==null){var _t=u.baseState;_=0,dt=nt=I=null,b=f;do{var it=b.lane&-536870913,ct=it!==b.lane;if(ct?(Ee&it)===it:(s&it)===it){it!==0&&it===Xr&&(Iu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Yt=t,ae=b;it=n;var Ve=a;switch(ae.tag){case 1:if(Yt=ae.payload,typeof Yt=="function"){_t=Yt.call(Ve,_t,it);break t}_t=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ae.payload,it=typeof Yt=="function"?Yt.call(Ve,_t,it):Yt,it==null)break t;_t=x({},_t,it);break t;case 2:ga=!0}}it=b.callback,it!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(nt=dt=ct,I=_t):dt=dt.next=ct,_|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(I=_t),u.baseState=I,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Ea|=_,t.lanes=_,t.memoizedState=_t}}function Qp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var Yr=O(null),xl=O(0);function $p(t,n){t=Ki,rt(xl,t),rt(Yr,n),Ki=t|n.baseLanes}function Fu(){rt(xl,Ki),rt(Yr,Yr.current)}function Hu(){Ki=xl.current,V(Yr),V(xl)}var jn=O(null),li=null;function xa(t){var n=t.alternate;rt(nn,nn.current&1),rt(jn,t),li===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(li=t)}function Gu(t){rt(nn,nn.current),rt(jn,t),li===null&&(li=t)}function tm(t){t.tag===22?(rt(nn,nn.current),rt(jn,t),li===null&&(li=t)):Sa()}function Sa(){rt(nn,nn.current),rt(jn,jn.current)}function Zn(t){V(jn),li===t&&(li=null),V(nn)}var nn=O(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,de=null,He=null,on=null,yl=!1,jr=!1,lr=!1,Ml=0,so=0,Zr=null,Dx=0;function $e(){throw Error(r(321))}function Vu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Xu(t,n,a,s,u,f){return Vi=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Bm:rf,lr=!1,f=a(s,u),lr=!1,jr&&(f=nm(n,a,s,u)),em(t),f}function em(t){P.H=co;var n=He!==null&&He.next!==null;if(Vi=0,on=He=de=null,yl=!1,so=0,Zr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&hl(t)&&(ln=!0))}function nm(t,n,a,s){de=t;var u=0;do{if(jr&&(Zr=null),so=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,on=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Im,f=n(a,s)}while(jr);return f}function Ux(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(de.flags|=1024),n}function ku(){var t=Ml!==0;return Ml=0,t}function Wu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function qu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}Vi=0,on=He=de=null,jr=!1,so=Ml=0,Zr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?de.memoizedState=on=t:on=on.next=t,on}function an(){if(He===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=on===null?de.memoizedState:on.next;if(n!==null)on=n,He=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?de.memoizedState=on=t:on=on.next=t}return on}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=so;return so+=1,Zr===null&&(Zr=[]),t=qp(Zr,t,n),n=de,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Bm:rf),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===U)return Mn(t)}throw Error(r(438,String(t)))}function Yu(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function bl(t){var n=an();return ju(n,He,t)}function ju(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=_=null,I=null,nt=n,dt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Ee&_t)===_t:(Vi&_t)===_t){var it=nt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Xr&&(dt=!0);else if((Vi&it)===it){nt=nt.next,it===Xr&&(dt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=_t,_=f):I=I.next=_t,de.lanes|=it,Ea|=it;_t=nt.action,lr&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else it={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},I===null?(b=I=it,_=f):I=I.next=it,de.lanes|=_t,Ea|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(I===null?_=f:I.next=b,!qn(f,t.memoizedState)&&(ln=!0,dt&&(a=kr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Zu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function im(t,n,a){var s=de,u=an(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!qn((He||u).memoizedState,a);if(_&&(u.memoizedState=a,ln=!0),u=u.queue,Ju(sm.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Kr(9,{destroy:void 0},rm.bind(null,s,u,a,n),null),Ye===null)throw Error(r(349));f||(Vi&127)!==0||am(s,n,a)}return a}function am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=El(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function rm(t,n,a,s){n.value=a,n.getSnapshot=s,om(n)&&lm(t)}function sm(t,n,a){return a(function(){om(n)&&lm(t)})}function om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function lm(t){var n=$a(t,2);n!==null&&Vn(n,t,2)}function Ku(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),lr){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function cm(t,n,a,s){return t.baseState=a,ju(t,He,typeof s=="function"?s:Xi)}function Lx(t,n,a,s,u){if(Cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,_={};P.T=_;try{var b=a(u,s),I=P.S;I!==null&&I(_,b),fm(t,n,b)}catch(nt){Qu(t,n,nt)}finally{f!==null&&_.types!==null&&(f.types=_.types),P.T=f}}else try{f=a(u,s),fm(t,n,f)}catch(nt){Qu(t,n,nt)}}function fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){hm(t,n,s)},function(s){return Qu(t,n,s)}):hm(t,n,a)}function hm(t,n,a){n.status="fulfilled",n.value=a,dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function Qu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==s)}t.action=null}function dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pm(t,n){return n}function mm(t,n){if(Re){var a=Ye.formState;if(a!==null){t:{var s=de;if(Re){if(Ze){e:{for(var u=Ze,f=oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=ci(u.nextSibling),s=u.data==="F!";break t}}pa(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=s,a=Om.bind(null,de,s),s.dispatch=a,s=Ku(!1),f=af.bind(null,de,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Lx.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function gm(t){var n=an();return _m(n,He,t)}function _m(t,n,a){if(n=ju(t,n,pm)[0],t=bl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=oo(n)}catch(_){throw _===Wr?ml:_}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Kr(9,{destroy:void 0},Nx.bind(null,u,a),null)),[s,f,t]}function Nx(t,n){t.action=n}function vm(t){var n=an(),a=He;if(a!==null)return _m(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Kr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=El(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function xm(){return an().memoizedState}function Al(t,n,a,s){var u=Ln();de.flags|=t,u.memoizedState=Kr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Rl(t,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;He!==null&&s!==null&&Vu(s,He.memoizedState.deps)?u.memoizedState=Kr(n,f,a,s):(de.flags|=t,u.memoizedState=Kr(1|n,f,a,s))}function Sm(t,n){Al(8390656,8,t,n)}function Ju(t,n){Rl(2048,8,t,n)}function Ox(t){de.flags|=4;var n=de.updateQueue;if(n===null)n=El(),de.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ym(t){var n=an().memoizedState;return Ox({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Mm(t,n){return Rl(4,2,t,n)}function Em(t,n){return Rl(4,4,t,n)}function Tm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,Tm.bind(null,n,t),a)}function $u(){}function Am(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Vu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Rm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Vu(n,s[1]))return s[0];if(s=t(),lr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s}function tf(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Cg(),de.lanes|=t,Ea|=t,a)}function Cm(t,n,a,s){return qn(a,n)?a:Yr.current!==null?(t=tf(t,a,s),qn(t,n)||(ln=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(Ee&261930)===0?(ln=!0,t.memoizedState=a):(t=Cg(),de.lanes|=t,Ea|=t,n)}function wm(t,n,a,s,u){var f=q.p;q.p=f!==0&&8>f?f:8;var _=P.T,b={};P.T=b,af(t,!1,n,a);try{var I=u(),nt=P.S;if(nt!==null&&nt(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var dt=wx(I,s);lo(t,n,dt,Jn(t))}else lo(t,n,s,Jn(t))}catch(_t){lo(t,n,{then:function(){},status:"rejected",reason:_t},Jn())}finally{q.p=f,_!==null&&b.types!==null&&(_.types=b.types),P.T=_}}function zx(){}function ef(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Dm(t).queue;wm(t,u,n,j,a===null?zx:function(){return Um(t),a(s)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Um(t){var n=Dm(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},Jn())}function nf(){return Mn(Ao)}function Lm(){return an().memoizedState}function Nm(){return an().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=_a(a);var s=va(n,t,a);s!==null&&(Vn(s,n,a),io(s,n,a)),n={cache:Uu()},t.payload=n;return}n=n.return}}function Bx(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?zm(n,a):(a=Su(t,n,a,s),a!==null&&(Vn(a,t,s),Pm(a,n,s)))}function Om(t,n,a){var s=Jn();lo(t,n,a,s)}function lo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))zm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,b=f(_,a);if(u.hasEagerState=!0,u.eagerState=b,qn(b,_))return ll(t,n,u,0),Ye===null&&ol(),!1}catch{}if(a=Su(t,n,u,s),a!==null)return Vn(a,t,s),Pm(a,n,s),!0}return!1}function af(t,n,a,s){if(s={lane:2,revertLane:Pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(r(479))}else n=Su(t,a,s,2),n!==null&&Vn(n,t,2)}function Cl(t){var n=t.alternate;return t===de||n!==null&&n===de}function zm(t,n){jr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Pm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Mi(t,a)}}var co={readContext:Mn,use:Tl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};co.useEffectEvent=$e;var Bm={readContext:Mn,use:Tl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:Sm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,Tm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(lr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(lr){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Bx.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Ku(t);var n=t.queue,a=Om.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(t,n){var a=Ln();return tf(a,t,n)},useTransition:function(){var t=Ku(!1);return t=wm.bind(null,de,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,u=Ln();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ee&127)!==0||am(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Sm(sm.bind(null,s,f,t),[t]),s.flags|=2048,Kr(9,{destroy:void 0},rm.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ye.identifierPrefix;if(Re){var a=bi,s=Ti;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:nf,useFormState:mm,useActionState:mm,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Yu,useCacheRefresh:function(){return Ln().memoizedState=Px.bind(null,de)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:Mn,use:Tl,useCallback:Am,useContext:Mn,useEffect:Ju,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:bl,useRef:xm,useState:function(){return bl(Xi)},useDebugValue:$u,useDeferredValue:function(t,n){var a=an();return Cm(a,He.memoizedState,t,n)},useTransition:function(){var t=bl(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:nf,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=an();return cm(a,He,t,n)},useMemoCache:Yu,useCacheRefresh:Nm};rf.useEffectEvent=ym;var Im={readContext:Mn,use:Tl,useCallback:Am,useContext:Mn,useEffect:Ju,useImperativeHandle:bm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Zu,useRef:xm,useState:function(){return Zu(Xi)},useDebugValue:$u,useDeferredValue:function(t,n){var a=an();return He===null?tf(a,t,n):Cm(a,He.memoizedState,t,n)},useTransition:function(){var t=Zu(Xi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:im,useId:Lm,useHostTransitionStatus:nf,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=an();return He!==null?cm(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Nm};Im.useEffectEvent=ym;function sf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var of={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=_a(s);u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(Vn(n,t,s),io(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),u=_a(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(t,u,s),n!==null&&(Vn(n,t,s),io(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=va(t,s,a),n!==null&&(Vn(n,t,a),io(n,t,a))}};function Fm(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(u,f):!0}function Hm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&of.enqueueReplaceState(n,n.state,null)}function cr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Gm(t){sl(t)}function Vm(t){console.error(t)}function Xm(t){sl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function km(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lf(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Wm(t){return t=_a(t),t.tag=3,t}function qm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){km(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){km(n,a,s),typeof u!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Ix(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Vr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Gl():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Nf(t,s,u)),!1;case 22:return a.flags|=65536,s===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Nf(t,s,u)),!1}throw Error(r(435,a.tag))}return Nf(t,s,u),Gl(),!1}if(Re)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Au&&(t=Error(r(422),{cause:s}),Js(ai(t,a)))):(s!==Au&&(n=Error(r(423),{cause:s}),Js(ai(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ai(s,a),u=lf(t.stateNode,s,u),Bu(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),vo===null?vo=[f]:vo.push(f),tn!==4&&(tn=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=lf(a.stateNode,s,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Wm(u),qm(u,t,a,s),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var cf=Error(r(461)),ln=!1;function En(t,n,a,s){n.child=t===null?Kp(n,null,a,s):or(n,t.child,a,s)}function Ym(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var b in s)b!=="ref"&&(_[b]=s[b])}else _=s;return ir(n),s=Xu(t,n,a,_,f,u),b=ku(),t!==null&&!ln?(Wu(t,n,u),ki(t,n,u)):(Re&&b&&Tu(n),n.flags|=1,En(t,n,s,u),n.child)}function jm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Zm(t,n,f,s,u)):(t=ul(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!_f(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(_,s)&&t.ref===n.ref)return ki(t,n,u)}return n.flags|=1,t=Ii(f,s),t.ref=n.ref,t.return=n,n.child=t}function Zm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Zs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,_f(t,u))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,ki(t,n,u)}return uf(t,n,a,s,u)}function Km(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Qm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?$p(n,f):Fu(),tm(n);else return s=n.lanes=536870912,Qm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(pl(n,f.cachePool),$p(n,f),Sa(),n.memoizedState=null):(t!==null&&pl(n,null),Fu(),Sa());return En(t,n,u,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qm(t,n,a,s,u){var f=Nu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),Fu(),tm(n),t!==null&&Vr(t,n,s,!0),n.childLanes=u,null}function Dl(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Jm(t,n,a){return or(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function Fx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(s.mode==="hidden")return t=Dl(n,s),n.lanes=536870912,uo(null,t);if(Gu(n),(t=Ze)?(t=u0(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=zp(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return Dl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Gu(n),u)if(n.flags&256)n.flags&=-257,n=Jm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Vr(t,n,a,!1),u=(a&t.childLanes)!==0,ln||u){if(s=Ye,s!==null&&(_=Rr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,$a(t,_),Vn(s,t,_),cf;Gl(),n=Jm(t,n,a)}else t=f.treeContext,Ze=ci(_.nextSibling),yn=n,Re=!0,da=null,oi=!1,t!==null&&Ip(n,t),n=Dl(n,s),n.flags|=4096;return n}return t=Ii(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function uf(t,n,a,s,u){return ir(n),a=Xu(t,n,a,s,void 0,u),s=ku(),t!==null&&!ln?(Wu(t,n,u),ki(t,n,u)):(Re&&s&&Tu(n),n.flags|=1,En(t,n,a,u),n.child)}function $m(t,n,a,s,u,f){return ir(n),n.updateQueue=null,a=nm(n,s,a,u),em(t),s=ku(),t!==null&&!ln?(Wu(t,n,f),ki(t,n,f)):(Re&&s&&Tu(n),n.flags|=1,En(t,n,a,f),n.child)}function tg(t,n,a,s,u){if(ir(n),n.stateNode===null){var f=Ir,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=of,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},zu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Ir,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sf(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&of.enqueueReplaceState(f,f.state,null),ro(n,s,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=cr(a,b);f.props=I;var nt=f.context,dt=a.contextType;_=Ir,typeof dt=="object"&&dt!==null&&(_=Mn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==_)&&Hm(n,f,s,_),ga=!1;var it=n.memoizedState;f.state=it,ro(n,s,f,u),ao(),nt=n.memoizedState,b||it!==nt||ga?(typeof _t=="function"&&(sf(n,a,_t,s),nt=n.memoizedState),(I=ga||Fm(n,a,I,s,it,nt,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=nt),f.props=s,f.state=nt,f.context=_,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Pu(t,n),_=n.memoizedProps,dt=cr(a,_),f.props=dt,_t=n.pendingProps,it=f.context,nt=a.contextType,I=Ir,typeof nt=="object"&&nt!==null&&(I=Mn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||it!==I)&&Hm(n,f,s,I),ga=!1,it=n.memoizedState,f.state=it,ro(n,s,f,u),ao();var ct=n.memoizedState;_!==_t||it!==ct||ga||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof b=="function"&&(sf(n,a,b,s),ct=n.memoizedState),(dt=ga||Fm(n,a,dt,s,it,ct,I)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=I,s=dt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ul(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=or(n,t.child,null,u),n.child=or(n,null,a,u)):En(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ki(t,n,u),t}function eg(t,n,a,s){return er(),n.flags|=256,En(t,n,a,s),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:kp()}}function df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function ng(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(u?xa(n):Sa(),(t=Ze)?(t=u0(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=zp(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw pa(n);return Zf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,u?(Sa(),u=n.mode,b=Ll({mode:"hidden",children:b},u),s=tr(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=hf(a),s.childLanes=df(t,_,a),n.memoizedState=ff,uo(null,s)):(xa(n),pf(n,b))}var I=t.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=mf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),b=s.fallback,u=n.mode,s=Ll({mode:"visible",children:s.children},u),b=tr(b,u,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,or(n,t.child,null,a),s=n.child,s.memoizedState=hf(a),s.childLanes=df(t,_,a),n.memoizedState=ff,n=uo(null,s));else if(xa(n),Zf(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var nt=_.dgst;_=nt,s=Error(r(419)),s.stack="",s.digest=_,Js({value:s,source:null,stack:null}),n=mf(t,n,a)}else if(ln||Vr(t,n,a,!1),_=(a&t.childLanes)!==0,ln||_){if(_=Ye,_!==null&&(s=Rr(_,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,$a(t,s),Vn(_,t,s),cf;jf(b)||Gl(),n=mf(t,n,a)}else jf(b)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Ze=ci(b.nextSibling),yn=n,Re=!0,da=null,oi=!1,t!==null&&Ip(n,t),n=pf(n,s.children),n.flags|=4096);return n}return u?(Sa(),b=s.fallback,u=n.mode,I=t.child,nt=I.sibling,s=Ii(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,nt!==null?b=Ii(nt,b):(b=tr(b,u,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,uo(null,s),s=n.child,b=t.child.memoizedState,b===null?b=hf(a):(u=b.cachePool,u!==null?(I=sn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=kp(),b={baseLanes:b.baseLanes|a,cachePool:u}),s.memoizedState=b,s.childLanes=df(t,_,a),n.memoizedState=ff,uo(t.child,s)):(xa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function pf(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function mf(t,n,a){return or(n,t.child,null,a),t=pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ig(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),wu(t.return,n,a)}function gf(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function ag(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=nn.current,b=(_&2)!==0;if(b?(_=_&1|2,n.flags|=128):_&=1,rt(nn,_),En(t,n,s,a),s=Re?Qs:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,a,n);else if(t.tag===19)ig(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Sl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}gf(n,!0,a,null,f,s);break;case"together":gf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Vr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function Hx(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),ma(n,sn,t.memoizedState.cache),er();break;case 27:case 5:Bt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ng(t,n,a):(xa(n),t=ki(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Vr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),rt(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Km(t,n,a,n.pendingProps);case 24:ma(n,sn,t.memoizedState.cache)}return ki(t,n,a)}function rg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!_f(t,a)&&(n.flags&128)===0)return ln=!1,Hx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,Re&&(n.flags&1048576)!==0&&Bp(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=rr(n.elementType),n.type=t,typeof t=="function")yu(t)?(s=cr(t,s),n.tag=1,n=tg(null,n,t,s,a)):(n.tag=0,n=uf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Ym(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=jm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return uf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=cr(s,n.pendingProps),tg(t,n,s,u,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(t,n),ro(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ma(n,sn,s),s!==f.cache&&Du(n,[sn],a,!0),ao(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=eg(t,n,s,a);break t}else if(s!==u){u=ai(Error(r(424)),n),Js(u),n=eg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ze=ci(t.firstChild),yn=n,Re=!0,da=null,oi=!0,a=Kp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(er(),s===u){n=ki(t,n,a);break t}En(t,n,s,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=g0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,s=jl(J.current).createElement(a),s[rn]=n,s[xn]=t,Tn(s,a,t),yt(s),n.stateNode=s):n.memoizedState=g0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Bt(n),t===null&&Re&&(s=n.stateNode=d0(n.type,n.pendingProps,J.current),yn=n,oi=!0,u=Ze,Ca(n.type)?(Kf=u,Ze=ci(s.firstChild)):Ze=u),En(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((u=s=Ze)&&(s=gS(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,yn=n,Ze=ci(s.firstChild),oi=!1,u=!0):u=!1),u||pa(n)),Bt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,Wf(u,f)?s=null:_!==null&&Wf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(t,n,Ux,null,null,a),Ao._currentValue=u),Ul(t,n),En(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=Ze)&&(a=_S(a,n.pendingProps,oi),a!==null?(n.stateNode=a,yn=n,Ze=null,t=!0):t=!1),t||pa(n)),null;case 13:return ng(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=or(n,null,s,a):En(t,n,s,a),n.child;case 11:return Ym(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ma(n,n.type,s.value),En(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ir(n),u=Mn(u),s=s(u),n.flags|=1,En(t,n,s,a),n.child;case 14:return jm(t,n,n.type,n.pendingProps,a);case 15:return Zm(t,n,n.type,n.pendingProps,a);case 19:return ag(t,n,a);case 31:return Fx(t,n,a);case 22:return Km(t,n,a,n.pendingProps);case 24:return ir(n),s=Mn(sn),t===null?(u=Nu(),u===null&&(u=Ye,f=Uu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},zu(n),ma(n,sn,u)):((t.lanes&a)!==0&&(Pu(t,n),ro(n,null,null,a),ao()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,sn,s)):(s=f.cache,ma(n,sn,s),s!==u.cache&&Du(n,[sn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function vf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Lg())t.flags|=8192;else throw sr=gl,Ou}else t.flags&=-16777217}function sg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!y0(n))if(Lg())t.flags|=8192;else throw sr=gl,Ou}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,ts|=n)}function fo(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Gx(t,n,a){var s=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gr(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ru())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ke(n),sg(n,f)):(Ke(n),vf(n,u,null,s,a))):f?f!==t.memoizedState?(Wi(n),Ke(n),sg(n,f)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Wi(n),Ke(n),vf(n,u,t,s,a)),null;case 27:if(se(n),a=J.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}t=vt.current,Gr(n)?Fp(n):(t=d0(u,s,a),n.stateNode=t,Wi(n))}return Ke(n),null;case 5:if(se(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(f=vt.current,Gr(n))Fp(n);else{var _=jl(J.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[rn]=n,f[xn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Tn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Ke(n),vf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,Gr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=yn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||n0(t.nodeValue,a)),t||pa(n,!0)}else t=jl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Gr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=Ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Gr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),Ke(n),null);case 4:return Nt(),t===null&&Hf(n.stateNode.containerInfo),Ke(n),null;case 10:return Gi(n.type),Ke(n),null;case 19:if(V(nn),s=n.memoizedState,s===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)fo(s,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,fo(s,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Op(a,t),a=a.sibling;return rt(nn,nn.current&1|2),Re&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Il&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Sl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Re)return Ke(n),null}else 2*E()-s.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=nn.current,rt(nn,u?a&1|2:a&1),Re&&Fi(n,s.treeForkCount),t):(Ke(n),null);case 22:case 23:return Zn(n),Hu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&V(ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Vx(t,n){switch(bu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),Nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return se(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(nn),null;case 4:return Nt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Zn(n),Hu(),t!==null&&V(ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function og(t,n){switch(bu(n),n.tag){case 3:Gi(sn),Nt();break;case 26:case 27:case 5:se(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:V(nn);break;case 10:Gi(n.type);break;case 22:case 23:Zn(n),Hu(),t!==null&&V(ar);break;case 24:Gi(sn)}}function ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function ya(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,u=n;var I=a,nt=b;try{nt()}catch(dt){Fe(u,I,dt)}}}s=s.next}while(s!==f)}}catch(dt){Fe(n,n.return,dt)}}function lg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(s){Fe(t,t.return,s)}}}function cg(t,n,a){a.props=cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Fe(t,n,s)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Fe(t,n,u)}}function Ai(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function ug(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function xf(t,n,a){try{var s=t.stateNode;uS(s,t.type,a,n),s[xn]=n}catch(u){Fe(t,t.return,u)}}function fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ca(t.type)||t.tag===4}function Sf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ca(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Ol(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ca(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,s,a),n[rn]=t,n[xn]=a}catch(f){Fe(t,t.return,f)}}var qi=!1,cn=!1,Mf=!1,dg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Xx(t,n){if(t=t.containerInfo,Xf=ec,t=bp(t),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,b=-1,I=-1,nt=0,dt=0,_t=t,it=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(b=_+u),_t!==f||s!==0&&_t.nodeType!==3||(I=_+s),_t.nodeType===3&&(_+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)it=_t,_t=ct;for(;;){if(_t===t)break e;if(it===a&&++nt===u&&(b=_),it===f&&++dt===s&&(I=_),(ct=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ct}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:t,selectionRange:a},ec=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Yt=cr(a.type,u);t=s.getSnapshotBeforeUpdate(Yt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ae){Fe(a,a.return,ae)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Yf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Yf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function pg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&ho(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}s&64&&lg(a),s&512&&po(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&s&4&&hg(a);case 26:case 5:ji(t,a),n===null&&s&4&&ug(a),s&512&&po(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&_g(t,a);break;case 13:ji(t,a),s&4&&vg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jx.bind(null,a),vS(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,u=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=u,cn=f}break;case 30:break;default:ji(t,a)}}function mg(t){var n=t.alternate;n!==null&&(t.alternate=null,mg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,In=!1;function Yi(t,n,a){for(a=a.child;a!==null;)gg(t,n,a),a=a.sibling}function gg(t,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:cn||Ai(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ai(a,n);var s=Je,u=In;Ca(a.type)&&(Je=a.stateNode,In=!1),Yi(t,n,a),Eo(a.stateNode),Je=s,In=u;break;case 5:cn||Ai(a,n);case 6:if(s=Je,u=In,Je=null,Yi(t,n,a),Je=s,In=u,Je!==null)if(In)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(In?(t=Je,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ls(t)):l0(Je,a.stateNode));break;case 4:s=Je,u=In,Je=a.stateNode.containerInfo,In=!0,Yi(t,n,a),Je=s,In=u;break;case 0:case 11:case 14:case 15:ya(2,a,n),cn||ya(4,a,n),Yi(t,n,a);break;case 1:cn||(Ai(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&cg(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function _g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ls(t)}catch(a){Fe(n,n.return,a)}}}function vg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ls(t)}catch(a){Fe(n,n.return,a)}}function kx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new dg),n;default:throw Error(r(435,t.tag))}}function zl(t,n){var a=kx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=$x.bind(null,t,s);s.then(u,u)}})}function Fn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,b=_;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Je=b.stateNode,In=!1;break t}break;case 5:Je=b.stateNode,In=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Je===null)throw Error(r(160));gg(f,_,u),Je=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xg(n,t),n=n.sibling}var pi=null;function xg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Fn(n,t),Hn(t),s&4&&(ya(3,t,t.return),ho(3,t),ya(5,t,t.return));break;case 1:Fn(n,t),Hn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=pi;if(Fn(n,t),Hn(t),s&512&&(cn||a===null||Ai(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ja]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,s,a),f[rn]=t,yt(f),s=f;break t;case"link":var _=x0("link","href",u).get(s+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break e}}f=u.createElement(s),Tn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=x0("meta","content",u).get(s+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break e}}f=u.createElement(s),Tn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,yt(f),s=f}t.stateNode=s}else S0(u,t.type,t.stateNode);else t.stateNode=v0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?S0(u,t.type,t.stateNode):v0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,t),Hn(t),s&512&&(cn||a===null||Ai(a,a.return)),a!==null&&s&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,t),Hn(t),s&512&&(cn||a===null||Ai(a,a.return)),t.flags&32){u=t.stateNode;try{Ur(u,"")}catch(Yt){Fe(t,t.return,Yt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,xf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Mf=!0);break;case 6:if(Fn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Yt){Fe(t,t.return,Yt)}}break;case 3:if(Ql=null,u=pi,pi=Zl(n.containerInfo),Fn(n,t),pi=u,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ls(n.containerInfo)}catch(Yt){Fe(t,t.return,Yt)}Mf&&(Mf=!1,Sg(t));break;case 4:s=pi,pi=Zl(t.stateNode.containerInfo),Fn(n,t),Hn(t),pi=s;break;case 12:Fn(n,t),Hn(t);break;case 31:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 13:Fn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,nt=qi,dt=cn;if(qi=nt||u,cn=dt||I,Fn(n,t),cn=dt,qi=nt,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||qi||cn||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=I.stateNode;var _t=I.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Yt){Fe(I,I.return,Yt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Yt){Fe(I,I.return,Yt)}}}else if(n.tag===18){if(a===null){I=n;try{var ct=I.stateNode;u?c0(ct,!0):c0(I.stateNode,!1)}catch(Yt){Fe(I,I.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,zl(t,a))));break;case 19:Fn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,zl(t,s)));break;case 30:break;case 21:break;default:Fn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(fg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Sf(t);Ol(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Ur(_,""),a.flags&=-33);var b=Sf(t);Ol(t,b,_);break;case 3:case 4:var I=a.stateNode.containerInfo,nt=Sf(t);yf(t,nt,I);break;default:throw Error(r(161))}}catch(dt){Fe(t,t.return,dt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Sg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Sg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ur(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cg(n,n.return,a),ur(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ai(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(u,f,a),ho(4,f);break;case 1:if(Zi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Fe(s,s.return,nt)}if(s=f,u=s.updateQueue,u!==null){var b=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Qp(I[u],b)}catch(nt){Fe(s,s.return,nt)}}a&&_&64&&lg(f),po(f,f.return);break;case 27:hg(f);case 26:case 5:Zi(u,f,a),a&&s===null&&_&4&&ug(f),po(f,f.return);break;case 12:Zi(u,f,a);break;case 31:Zi(u,f,a),a&&_&4&&_g(u,f);break;case 13:Zi(u,f,a),a&&_&4&&vg(u,f);break;case 22:f.memoizedState===null&&Zi(u,f,a),po(f,f.return);break;case 30:break;default:Zi(u,f,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$s(a))}function Tf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t))}function mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(t,n,a,s),n=n.sibling}function yg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,s),u&2048&&ho(9,n);break;case 1:mi(t,n,a,s);break;case 3:mi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$s(t)));break;case 12:if(u&2048){mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else mi(t,n,a,s);break;case 31:mi(t,n,a,s);break;case 13:mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,s):mo(t,n):f._visibility&2?mi(t,n,a,s):(f._visibility|=2,Qr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ef(_,n);break;case 24:mi(t,n,a,s),u&2048&&Tf(n.alternate,n);break;default:mi(t,n,a,s)}}function Qr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,b=a,I=s,nt=_.flags;switch(_.tag){case 0:case 11:case 15:Qr(f,_,b,I,u),ho(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?Qr(f,_,b,I,u):mo(f,_):(dt._visibility|=2,Qr(f,_,b,I,u)),u&&nt&2048&&Ef(_.alternate,_);break;case 24:Qr(f,_,b,I,u),u&&nt&2048&&Tf(_.alternate,_);break;default:Qr(f,_,b,I,u)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:mo(a,s),u&2048&&Ef(s.alternate,s);break;case 24:mo(a,s),u&2048&&Tf(s.alternate,s);break;default:mo(a,s)}n=n.sibling}}var go=8192;function Jr(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)Mg(t,n,a),t=t.sibling}function Mg(t,n,a){switch(t.tag){case 26:Jr(t,n,a),t.flags&go&&t.memoizedState!==null&&DS(a,pi,t.memoizedState,t.memoizedProps);break;case 5:Jr(t,n,a);break;case 3:case 4:var s=pi;pi=Zl(t.stateNode.containerInfo),Jr(t,n,a),pi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,Jr(t,n,a),go=s):Jr(t,n,a));break;default:Jr(t,n,a)}}function Eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,bg(s,t)}Eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&ya(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Pl(t)):_o(t);break;default:_o(t)}}function Pl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,bg(s,t)}Eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}t=t.sibling}}function bg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$s(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(mg(s),s===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var Wx={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Se=null,Ee=0,Ie=0,Kn=null,Ma=!1,$r=!1,bf=!1,Ki=0,tn=0,Ea=0,fr=0,Af=0,Qn=0,ts=0,vo=null,Gn=null,Rf=!1,Bl=0,Ag=0,Il=1/0,Fl=null,Ta=null,hn=0,ba=null,es=null,Qi=0,Cf=0,wf=null,Rg=null,xo=0,Df=null;function Jn(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:P.T!==null?Pf():Ya()}function Cg(){if(Qn===0)if((Ee&536870912)===0||Re){var t=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Vn(t,n,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(ns(t,0),Aa(t,Ee,Qn,!1)),Dn(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(fr|=a),tn===4&&Aa(t,Ee,Qn,!1)),Ri(t))}function wg(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||qt(t,n),u=s?Zx(t,n):Lf(t,n,!0),f=s;do{if(u===0){$r&&!s&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yx(a)){u=Lf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var b=t;u=vo;var I=b.current.memoizedState.isDehydrated;if(I&&(ns(b,_).flags|=256),_=Lf(b,_,!1),_!==2){if(bf&&!I){b.errorRecoveryDisabledLanes|=f,fr|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ns(t,0),Aa(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Aa(s,n,Qn,!Ma);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bl+300-E(),10<u)){if(Aa(s,n,Qn,!Ma),xt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=s0(Dg.bind(null,s,a,Gn,Fl,Rf,n,Qn,fr,ts,Ma,f,"Throttled",-0,0),u);break t}Dg(s,a,Gn,Fl,Rf,n,Qn,fr,ts,Ma,f,null,-0,0)}}break}while(!0);Ri(t)}function Dg(t,n,a,s,u,f,_,b,I,nt,dt,_t,it,ct){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},Mg(n,f,_t);var Yt=(f&62914560)===f?Bl-E():(f&4194048)===f?Ag-E():0;if(Yt=US(_t,Yt),Yt!==null){Qi=f,t.cancelPendingCommit=Yt(Ig.bind(null,t,n,f,a,s,u,_,b,I,dt,_t,null,it,ct)),Aa(t,f,_,!nt);return}}Ig(t,n,f,a,s,u,_,b,I)}function Yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,s){n&=~Af,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&Fs(t,a,n)}function Hl(){return(Oe&6)===0?(So(0),!1):!0}function Uf(){if(Se!==null){if(Ie===0)var t=Se.return;else t=Se,Hi=nr=null,qu(t),qr=null,eo=0,t=Se;for(;t!==null;)og(t.alternate,t),t=t.return;Se=null}}function ns(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Uf(),Ye=t,Se=a=Ii(t.current,null),Ee=n,Ie=0,Kn=null,Ma=!1,$r=qt(t,n),bf=!1,ts=Qn=Af=fr=Ea=tn=0,Gn=vo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-zt(s),f=1<<u;n|=t[u],s&=~f}return Ki=n,ol(),a}function Ug(t,n){de=null,P.H=co,n===Wr||n===ml?(n=Yp(),Ie=3):n===Ou?(n=Yp(),Ie=4):Ie=n===cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,Se===null&&(tn=1,wl(t,ai(n,t.current)))}function Lg(){var t=jn.current;return t===null?!0:(Ee&4194048)===Ee?li===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===li:!1}function Ng(){var t=P.H;return P.H=co,t===null?co:t}function Og(){var t=P.A;return P.A=Wx,t}function Gl(){tn=4,Ma||(Ee&4194048)!==Ee&&jn.current!==null||($r=!0),(Ea&134217727)===0&&(fr&134217727)===0||Ye===null||Aa(Ye,Ee,Qn,!1)}function Lf(t,n,a){var s=Oe;Oe|=2;var u=Ng(),f=Og();(Ye!==t||Ee!==n)&&(Fl=null,ns(t,n)),n=!1;var _=tn;t:do try{if(Ie!==0&&Se!==null){var b=Se,I=Kn;switch(Ie){case 8:Uf(),_=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var nt=Ie;if(Ie=0,Kn=null,is(t,b,I,nt),a&&$r){_=0;break t}break;default:nt=Ie,Ie=0,Kn=null,is(t,b,I,nt)}}jx(),_=tn;break}catch(dt){Ug(t,dt)}while(!0);return n&&t.shellSuspendCounter++,Hi=nr=null,Oe=s,P.H=u,P.A=f,Se===null&&(Ye=null,Ee=0,ol()),_}function jx(){for(;Se!==null;)zg(Se)}function Zx(t,n){var a=Oe;Oe|=2;var s=Ng(),u=Og();Ye!==t||Ee!==n?(Fl=null,Il=E()+500,ns(t,n)):$r=qt(t,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var f=Kn;e:switch(Ie){case 1:Ie=0,Kn=null,is(t,n,f,1);break;case 2:case 9:if(Wp(f)){Ie=0,Kn=null,Pg(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),Ri(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Wp(f)?(Ie=0,Kn=null,Pg(n)):(Ie=0,Kn=null,is(t,n,f,7));break;case 5:var _=null;switch(Se.tag){case 26:_=Se.memoizedState;case 5:case 27:var b=Se;if(_?y0(_):b.stateNode.complete){Ie=0,Kn=null;var I=b.sibling;if(I!==null)Se=I;else{var nt=b.return;nt!==null?(Se=nt,Vl(nt)):Se=null}break e}}Ie=0,Kn=null,is(t,n,f,5);break;case 6:Ie=0,Kn=null,is(t,n,f,6);break;case 8:Uf(),tn=6;break t;default:throw Error(r(462))}}Kx();break}catch(dt){Ug(t,dt)}while(!0);return Hi=nr=null,P.H=s,P.A=u,Oe=a,Se!==null?0:(Ye=null,Ee=0,ol(),tn)}function Kx(){for(;Se!==null&&!Ae();)zg(Se)}function zg(t){var n=rg(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Vl(t):Se=n}function Pg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:qu(n);default:og(a,n),n=Se=Op(n,Ki),n=rg(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Vl(t):Se=n}function is(t,n,a,s){Hi=nr=null,qu(n),qr=null,eo=0;var u=n.return;try{if(Ix(t,u,n,a,Ee)){tn=1,wl(t,ai(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;tn=1,wl(t,ai(a,t.current)),Se=null;return}n.flags&32768?(Re||s===1?t=!0:$r||(Ee&536870912)!==0?t=!1:(Ma=t=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Bg(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Ma);return}t=n.return;var a=Gx(n.alternate,n,Ki);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);tn===0&&(tn=5)}function Bg(t,n){do{var a=Vx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);tn=6,Se=null}function Ig(t,n,a,s,u,f,_,b,I){t.cancelPendingCommit=null;do Xl();while(hn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=xu,ni(t,a,f,_,b,I),t===Ye&&(Se=Ye=null,Ee=0),es=n,ba=t,Qi=a,Cf=f,wf=u,Rg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tS(ut,function(){return Xg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=q.p,q.p=2,_=Oe,Oe|=4;try{Xx(t,n,a)}finally{Oe=_,q.p=u,P.T=s}}hn=1,Fg(),Hg(),Gg()}}function Fg(){if(hn===1){hn=0;var t=ba,n=es,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=q.p;q.p=2;var u=Oe;Oe|=4;try{xg(n,t);var f=kf,_=bp(t.containerInfo),b=f.focusedElem,I=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&Tp(b.ownerDocument.documentElement,b)){if(I!==null&&pu(b)){var nt=I.start,dt=I.end;if(dt===void 0&&(dt=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(dt,b.value.length);else{var _t=b.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Yt=b.textContent.length,ae=Math.min(I.start,Yt),Ve=I.end===void 0?ae:Math.min(I.end,Yt);!ct.extend&&ae>Ve&&(_=Ve,Ve=ae,ae=_);var K=Ep(b,ae),X=Ep(b,Ve);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),ae>Ve?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(_t=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var mt=_t[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ec=!!Xf,kf=Xf=null}finally{Oe=u,q.p=s,P.T=a}}t.current=n,hn=2}}function Hg(){if(hn===2){hn=0;var t=ba,n=es,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=q.p;q.p=2;var u=Oe;Oe|=4;try{pg(t,n.alternate,n)}finally{Oe=u,q.p=s,P.T=a}}hn=3}}function Gg(){if(hn===4||hn===3){hn=0,L();var t=ba,n=es,a=Qi,s=Rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,es=ba=null,Vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ta=null),wr(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=q.p,q.p=2,P.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var b=s[_];f(b.value,{componentStack:b.stack})}}finally{P.T=n,q.p=u}}(Qi&3)!==0&&Xl(),Ri(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Df?xo++:(xo=0,Df=t):xo=0,So(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$s(n)))}function Xl(){return Fg(),Hg(),Gg(),Xg()}function Xg(){if(hn!==5)return!1;var t=ba,n=Cf;Cf=0;var a=wr(Qi),s=P.T,u=q.p;try{q.p=32>a?32:a,P.T=null,a=wf,wf=null;var f=ba,_=Qi;if(hn=0,es=ba=null,Qi=0,(Oe&6)!==0)throw Error(r(331));var b=Oe;if(Oe|=4,Tg(f.current),yg(f,f.current,_,a),Oe=b,So(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{q.p=u,P.T=s,Vg(t,n)}}function kg(t,n,a){n=ai(a,n),n=lf(t.stateNode,n,2),t=va(t,n,2),t!==null&&(Dn(t,2),Ri(t))}function Fe(t,n,a){if(t.tag===3)kg(t,t,a);else for(;n!==null;){if(n.tag===3){kg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){t=ai(a,t),a=Wm(2),s=va(n,a,2),s!==null&&(qm(a,s,n,t),Dn(s,2),Ri(s));break}}n=n.return}}function Nf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new qx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(bf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&(tn===4||tn===3&&(Ee&62914560)===Ee&&300>E()-Bl?(Oe&2)===0&&ns(t,0):Af|=a,ts===Ee&&(ts=0)),Ri(t)}function Wg(t,n){n===0&&(n=Be()),t=$a(t,n),t!==null&&(Dn(t,n),Ri(t))}function Jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Wg(t,a)}function $x(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Wg(t,a)}function tS(t,n){return Vt(t,n)}var kl=null,as=null,Of=!1,Wl=!1,zf=!1,Ra=0;function Ri(t){t!==as&&t.next===null&&(as===null?kl=as=t:as=as.next=t),Wl=!0,Of||(Of=!0,nS())}function So(t,n){if(!zf&&Wl){zf=!0;do for(var a=!1,s=kl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=u&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Zg(s,f))}else f=Ee,f=xt(s,s===Ye?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||qt(s,f)||(a=!0,Zg(s,f));s=s.next}while(a);zf=!1}}function eS(){qg()}function qg(){Wl=Of=!1;var t=0;Ra!==0&&hS()&&(t=Ra);for(var n=E(),a=null,s=kl;s!==null;){var u=s.next,f=Yg(s,n);f===0?(s.next=null,a===null?kl=u:a.next=u,u===null&&(as=a)):(a=s,(t!==0||(f&3)!==0)&&(Wl=!0)),s=u}hn!==0&&hn!==5||So(t),Ra!==0&&(Ra=0)}function Yg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-zt(f),b=1<<_,I=u[_];I===-1?((b&a)===0||(b&s)!==0)&&(u[_]=ue(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ye,a=Ee,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&he(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||qt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&he(s),wr(a)){case 2:case 8:a=st;break;case 32:a=ut;break;case 268435456:a=Ut;break;default:a=ut}return s=jg.bind(null,t),a=Vt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&he(s),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var s=Ee;return s=xt(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(wg(t,s,n),Yg(t,E()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Zg(t,n){if(Xl())return null;wg(t,n,!0)}function nS(){pS(function(){(Oe&6)!==0?Vt(pt,eS):qg()})}function Pf(){if(Ra===0){var t=Xr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ra=t}return Ra}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Kg((u[xn]||null).action),_=s.submitter;_&&(n=(n=_[xn]||null)?Kg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var b=new il("action","action",null,s,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ra!==0){var I=_?Qg(u,_):new FormData(u);ef(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=_?Qg(u,_):new FormData(u),ef(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Bf=0;Bf<vu.length;Bf++){var If=vu[Bf],aS=If.toLowerCase(),rS=If[0].toUpperCase()+If.slice(1);di(aS,"on"+rS)}di(Cp,"onAnimationEnd"),di(wp,"onAnimationIteration"),di(Dp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(yx,"onTransitionRun"),di(Mx,"onTransitionStart"),di(Ex,"onTransitionCancel"),di(Up,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var b=s[_],I=b.instance,nt=b.currentTarget;if(b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(dt){sl(dt)}u.currentTarget=null,f=I}else for(_=0;_<s.length;_++){if(b=s[_],I=b.instance,nt=b.currentTarget,b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(dt){sl(dt)}u.currentTarget=null,f=I}}}}function ye(t,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var s=t+"__bubble";a.has(s)||($g(n,t,2,!1),a.add(s))}function Ff(t,n,a){var s=0;n&&(s|=4),$g(a,t,s,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Hf(t){if(!t[ql]){t[ql]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Ff(a,!1,t),Ff(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Ff("selectionchange",!1,n))}}function $g(t,n,a,s){switch(C0(n)){case 2:var u=OS;break;case 8:u=zS;break;default:u=eh}a=u.bind(null,n,a,t),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Gf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var b=s.stateNode.containerInfo;if(b===u)break;if(_===4)for(_=s.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;b!==null;){if(_=Z(b),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){s=f=_;continue t}b=b.parentNode}}s=s.return}ap(function(){var nt=f,dt=iu(a),_t=[];t:{var it=Lp.get(t);if(it!==void 0){var ct=il,Yt=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ct=$v;break;case"focusin":Yt="focus",ct=cu;break;case"focusout":Yt="blur",ct=cu;break;case"beforeblur":case"afterblur":ct=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=nx;break;case Cp:case wp:case Dp:ct=kv;break;case Up:ct=ax;break;case"scroll":case"scrollend":ct=Fv;break;case"wheel":ct=sx;break;case"copy":case"cut":case"paste":ct=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=cp;break;case"toggle":case"beforetoggle":ct=lx}var ae=(n&4)!==0,Ve=!ae&&(t==="scroll"||t==="scrollend"),K=ae?it!==null?it+"Capture":null:it;ae=[];for(var X=nt,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||K===null||(mt=Vs(X,K),mt!=null&&ae.push(Mo(X,mt,et))),Ve)break;X=X.return}0<ae.length&&(it=new ct(it,Yt,null,a,dt),_t.push({event:it,listeners:ae}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",it&&a!==nu&&(Yt=a.relatedTarget||a.fromElement)&&(Z(Yt)||Yt[ua]))break t;if((ct||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Yt=a.relatedTarget||a.toElement,ct=nt,Yt=Yt?Z(Yt):null,Yt!==null&&(Ve=c(Yt),ae=Yt.tag,Yt!==Ve||ae!==5&&ae!==27&&ae!==6)&&(Yt=null)):(ct=null,Yt=nt),ct!==Yt)){if(ae=op,mt="onMouseLeave",K="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(ae=cp,mt="onPointerLeave",K="onPointerEnter",X="pointer"),Ve=ct==null?it:ot(ct),et=Yt==null?it:ot(Yt),it=new ae(mt,X+"leave",ct,a,dt),it.target=Ve,it.relatedTarget=et,mt=null,Z(dt)===nt&&(ae=new ae(K,X+"enter",Yt,a,dt),ae.target=et,ae.relatedTarget=Ve,mt=ae),Ve=mt,ct&&Yt)e:{for(ae=oS,K=ct,X=Yt,et=0,mt=K;mt;mt=ae(mt))et++;mt=0;for(var ie=X;ie;ie=ae(ie))mt++;for(;0<et-mt;)K=ae(K),et--;for(;0<mt-et;)X=ae(X),mt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){ae=K;break e}K=ae(K),X=ae(X)}ae=null}else ae=null;ct!==null&&t0(_t,it,ct,ae,!1),Yt!==null&&Ve!==null&&t0(_t,Ve,Yt,ae,!0)}}t:{if(it=nt?ot(nt):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Ue=_p;else if(mp(it))if(vp)Ue=vx;else{Ue=gx;var Jt=mx}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&eu(nt.elementType)&&(Ue=_p):Ue=_x;if(Ue&&(Ue=Ue(t,nt))){gp(_t,Ue,a,dt);break t}Jt&&Jt(t,it,nt),t==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&fn(it,"number",it.value)}switch(Jt=nt?ot(nt):window,t){case"focusin":(mp(Jt)||Jt.contentEditable==="true")&&(zr=Jt,mu=nt,Ks=null);break;case"focusout":Ks=mu=zr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Ap(_t,a,dt);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":Ap(_t,a,dt)}var pe;if(fu)t:{switch(t){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Or?dp(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(up&&a.locale!=="ko"&&(Or||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Or&&(pe=rp()):(fa=dt,su="value"in fa?fa.value:fa.textContent,Or=!0)),Jt=Yl(nt,Te),0<Jt.length&&(Te=new lp(Te,t,null,a,dt),_t.push({event:Te,listeners:Jt}),pe?Te.data=pe:(pe=pp(a),pe!==null&&(Te.data=pe)))),(pe=ux?fx(t,a):hx(t,a))&&(Te=Yl(nt,"onBeforeInput"),0<Te.length&&(Jt=new lp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:Jt,listeners:Te}),Jt.data=pe)),iS(_t,t,nt,a,dt)}Jg(_t,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(t,a),u!=null&&s.unshift(Mo(t,u,f)),u=Vs(t,n),u!=null&&s.push(Mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function oS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var b=a,I=b.alternate,nt=b.stateNode;if(b=b.tag,I!==null&&I===s)break;b!==5&&b!==26&&b!==27||nt===null||(I=nt,u?(nt=Vs(a,f),nt!=null&&_.unshift(Mo(a,nt,I))):u||(nt=Vs(a,f),nt!=null&&_.push(Mo(a,nt,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function e0(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function n0(t,n){return n=e0(n),e0(t)===n}function Ge(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ur(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ur(t,""+s);break;case"className":Pe(t,"class",s);break;case"tabIndex":Pe(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(t,a,s);break;case"style":np(t,s,f);break;case"data":if(n!=="object"){Pe(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=$o(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),qe(t,"popover",s);break;case"xlinkActuate":xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":qe(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bv.get(a)||a,qe(t,a,s))}}function Vf(t,n,a,s,u,f){switch(a){case"style":np(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ur(t,s):(typeof s=="number"||typeof s=="bigint")&&Ur(t,""+s);break;case"onScroll":s!=null&&ye("scroll",t);break;case"onScrollEnd":s!=null&&ye("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):qe(t,a,s)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,_,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var b=f=_=u=null,I=null,nt=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":_=dt;break;case"checked":I=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ge(t,n,s,dt,a,null)}}Un(t,f,b,I,nt,_,u,!1);return;case"select":ye("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":s=b;default:Ge(t,n,u,b,a,null)}n=f,a=_,t.multiple=!!s,n!=null?en(t,!!s,n,!1):a!=null&&en(t,!!s,a,!0);return;case"textarea":ye("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":s=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(t,n,_,b,a,null)}Ei(t,s,u,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,I,s,a,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<yo.length;s++)ye(yo[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(s=a[nt],s!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,nt,s,a,null)}return;default:if(eu(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&Vf(t,n,dt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ge(t,n,b,s,a,null))}function uS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,b=null,I=null,nt=null,dt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":I=_t;default:s.hasOwnProperty(ct)||Ge(t,n,ct,null,s,_t)}}for(var it in s){var ct=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(ct!=null||_t!=null))switch(it){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":dt=ct;break;case"value":_=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Ge(t,n,it,ct,s,_t)}}An(t,_,b,I,nt,dt,f,u);return;case"select":ct=_=b=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ct=I;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==I&&Ge(t,n,u,f,s,I)}n=b,a=_,s=ct,it!=null?en(t,!!a,it,!1):!!s!=!!a&&(n!=null?en(t,!!a,n,!0):en(t,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,n,b,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,_,u,s,f)}Dr(t,it,ct);return;case"option":for(var Yt in a)it=a[Yt],a.hasOwnProperty(Yt)&&it!=null&&!s.hasOwnProperty(Yt)&&(Yt==="selected"?t.selected=!1:Ge(t,n,Yt,null,s,it));for(I in s)it=s[I],ct=a[I],s.hasOwnProperty(I)&&it!==ct&&(it!=null||ct!=null)&&(I==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":Ge(t,n,I,it,s,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)it=a[ae],a.hasOwnProperty(ae)&&it!=null&&!s.hasOwnProperty(ae)&&Ge(t,n,ae,null,s,it);for(nt in s)if(it=s[nt],ct=a[nt],s.hasOwnProperty(nt)&&it!==ct&&(it!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ge(t,n,nt,it,s,ct)}return;default:if(eu(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!s.hasOwnProperty(Ve)&&Vf(t,n,Ve,void 0,s,it);for(dt in s)it=s[dt],ct=a[dt],!s.hasOwnProperty(dt)||it===ct||it===void 0&&ct===void 0||Vf(t,n,dt,it,s,ct);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!s.hasOwnProperty(K)&&Ge(t,n,K,null,s,it);for(_t in s)it=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||it===ct||it==null&&ct==null||Ge(t,n,_t,it,s,ct)}function i0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,b=u.duration;if(f&&b&&i0(_)){for(_=0,b=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],nt=I.startTime;if(nt>b)break;var dt=I.transferSize,_t=I.initiatorType;dt&&i0(_t)&&(I=I.responseEnd,_+=dt*(I<b?1:(b-nt)/(I-nt)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xf=null,kf=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function a0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function hS(){var t=window.event;return t&&t.type==="popstate"?t===qf?!1:(qf=t,!0):(qf=null,!1)}var s0=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(mS)}:s0;function mS(t){setTimeout(function(){throw t})}function Ca(t){return t==="head"}function l0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ls(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[ja]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(t.ownerDocument.body);a=u}while(a);ls(n)}function c0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Yf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ja])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function _S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function u0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$?"||t.data==="$~"}function Zf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Kf=null;function f0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function h0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function d0(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var ui=new Map,p0=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=q.d;q.d={f:xS,r:SS,D:yS,C:MS,L:ES,m:TS,X:AS,S:bS,M:RS};function xS(){var t=Ji.f(),n=Hl();return t||n}function SS(t){var n=at(t);n!==null&&n.tag===5&&n.type==="form"?Um(n):Ji.r(t)}var rs=typeof document>"u"?null:document;function m0(t,n,a){var s=rs;if(s&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),p0.has(u)||(p0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Tn(n,"link",t),yt(n),s.head.appendChild(n)))}}function yS(t){Ji.D(t),m0("dns-prefetch",t,null)}function MS(t,n){Ji.C(t,n),m0("preconnect",t,n)}function ES(t,n,a){Ji.L(t,n,a);var s=rs;if(s&&t&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(t)+'"]';var f=u;switch(n){case"style":f=ss(t);break;case"script":f=os(t)}ui.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(bo(f))||(n=s.createElement("link"),Tn(n,"link",t),yt(n),s.head.appendChild(n)))}}function TS(t,n){Ji.m(t,n);var a=rs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(s)+'"][href="'+Me(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=os(t)}if(!ui.has(f)&&(t=x({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}s=a.createElement("link"),Tn(s,"link",t),yt(s),a.head.appendChild(s)}}}function bS(t,n,a){Ji.S(t,n,a);var s=rs;if(s&&t){var u=Q(s).hoistableStyles,f=ss(t);n=n||"default";var _=u.get(f);if(!_){var b={loading:0,preload:null};if(_=s.querySelector(To(f)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&Qf(t,a);var I=_=s.createElement("link");yt(I),Tn(I,"link",t),I._p=new Promise(function(nt,dt){I.onload=nt,I.onerror=dt}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Kl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:b},u.set(f,_)}}}function AS(t,n){Ji.X(t,n);var a=rs;if(a&&t){var s=Q(a).hoistableScripts,u=os(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=x({src:t,async:!0},n),(n=ui.get(u))&&Jf(t,n),f=a.createElement("script"),yt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function RS(t,n){Ji.M(t,n);var a=rs;if(a&&t){var s=Q(a).hoistableScripts,u=os(t),f=s.get(u);f||(f=a.querySelector(bo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=ui.get(u))&&Jf(t,n),f=a.createElement("script"),yt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function g0(t,n,a,s){var u=(u=J.current)?Zl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ss(a.href),a=Q(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ss(a.href);var f=Q(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(To(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||CS(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=os(a),a=Q(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ss(t){return'href="'+Me(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function _0(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function CS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Tn(n,"link",a),yt(n),t.head.appendChild(n))}function os(t){return'[src="'+Me(t)+'"]'}function bo(t){return"script[async]"+t}function v0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Me(a.href)+'"]');if(s)return n.instance=s,yt(s),s;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),yt(s),Tn(s,"style",u),Kl(s,a.precedence,t),n.instance=s;case"stylesheet":u=ss(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;s=_0(a),(u=ui.get(u))&&Qf(s,u),f=(t.ownerDocument||t).createElement("link"),yt(f);var _=f;return _._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Tn(f,"link",s),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=os(a.src),(u=t.querySelector(bo(f)))?(n.instance=u,yt(u),u):(s=a,(u=ui.get(f))&&(s=x({},a),Jf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),yt(u),Tn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Kl(s,a.precedence,t));return n.instance}function Kl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var b=s[_];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function x0(t,n,a){if(Ql===null){var s=new Map,u=Ql=new Map;u.set(a,s)}else u=Ql,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ja]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var b=s.get(_);b?b.push(f):s.set(_,[f])}}return s}function S0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function DS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ss(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,s=_0(s),(u=ui.get(u))&&Qf(s,u),f=f.createElement("link"),yt(f);var _=f;_._p=new Promise(function(b,I){_.onload=b,_.onerror=I}),Tn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var $f=0;function US(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&$f===0&&($f=62500*fS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>$f?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(LS,t),$l=null,Jl.call(t))}function LS(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var s=a.get(null);else{a=new Map,$l.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Jl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function NS(t,n,a,s,u,f,_,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function M0(t,n,a,s,u,f,_,b,I,nt,dt,_t){return t=new NS(t,n,a,_,I,nt,dt,_t,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},zu(f),t}function E0(t){return t?(t=Ir,t):Ir}function T0(t,n,a,s,u,f){u=E0(u),s.context===null?s.context=u:s.pendingContext=u,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=va(t,s,n),a!==null&&(Vn(a,t,n),io(a,t,n))}function b0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function th(t,n){b0(t,n),(t=t.alternate)&&b0(t,n)}function A0(t){if(t.tag===13||t.tag===31){var n=$a(t,67108864);n!==null&&Vn(n,t,67108864),th(t,67108864)}}function R0(t){if(t.tag===13||t.tag===31){var n=Jn();n=Cr(n);var a=$a(t,n);a!==null&&Vn(a,t,n),th(t,n)}}var ec=!0;function OS(t,n,a,s){var u=P.T;P.T=null;var f=q.p;try{q.p=2,eh(t,n,a,s)}finally{q.p=f,P.T=u}}function zS(t,n,a,s){var u=P.T;P.T=null;var f=q.p;try{q.p=8,eh(t,n,a,s)}finally{q.p=f,P.T=u}}function eh(t,n,a,s){if(ec){var u=nh(s);if(u===null)Gf(t,n,s,nc,a),w0(t,s);else if(BS(u,t,n,a,s))s.stopPropagation();else if(w0(t,s),n&4&&-1<PS.indexOf(t)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=bt(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var I=1<<31-zt(_);b.entanglements[1]|=I,_&=~I}Ri(f),(Oe&6)===0&&(Il=E()+500,So(0))}}break;case 31:case 13:b=$a(f,2),b!==null&&Vn(b,f,2),Hl(),th(f,2)}if(f=nh(s),f===null&&Gf(t,n,s,nc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Gf(t,n,s,null,a)}}function nh(t){return t=iu(t),ih(t)}var nc=null;function ih(t){if(nc=null,t=Z(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function C0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case pt:return 2;case st:return 8;case ut:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var ah=!1,wa=null,Da=null,Ua=null,Ro=new Map,Co=new Map,La=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function w0(t,n){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&A0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function BS(t,n,a,s,u){switch(n){case"focusin":return wa=wo(wa,t,n,a,s,u),!0;case"dragenter":return Da=wo(Da,t,n,a,s,u),!0;case"mouseover":return Ua=wo(Ua,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ro.set(f,wo(Ro.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,wo(Co.get(f)||null,t,n,a,s,u)),!0}return!1}function D0(t){var n=Z(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){R0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Hs(t.priority,function(){R0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=nh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);nu=s,a.target.dispatchEvent(s),nu=null}else return n=at(a),n!==null&&A0(n),t.blockedOn=a,!1;n.shift()}return!0}function U0(t,n,a){ic(t)&&a.delete(n)}function IS(){ah=!1,wa!==null&&ic(wa)&&(wa=null),Da!==null&&ic(Da)&&(Da=null),Ua!==null&&ic(Ua)&&(Ua=null),Ro.forEach(U0),Co.forEach(U0)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,ah||(ah=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IS)))}var rc=null;function L0(t){rc!==t&&(rc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===t&&(rc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(ih(s||a)===null)continue;break}var f=at(a);f!==null&&(t.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ls(t){function n(I){return ac(I,t)}wa!==null&&ac(wa,t),Da!==null&&ac(Da,t),Ua!==null&&ac(Ua,t),Ro.forEach(n),Co.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)D0(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[xn]||null;if(typeof f=="function")_||L0(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[xn]||null)b=_.formAction;else if(ih(u)!==null)continue}else b=_.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),L0(a)}}}function N0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function rh(t){this._internalRoot=t}sc.prototype.render=rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();T0(a,s,t,n,null,null)},sc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;T0(t.current,2,null,t,null,null),Hl(),n[ua]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ya();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&D0(t)}};var O0=e.version;if(O0!=="19.2.0")throw Error(r(527,O0,"19.2.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var FS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{St=oc.inject(FS),wt=oc}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Gm,f=Vm,_=Xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=M0(t,1,!1,null,null,a,s,null,u,f,_,N0),t[ua]=n.current,Hf(t),new rh(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Gm,_=Vm,b=Xm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=M0(t,1,!0,n,a??null,s,u,I,f,_,b,N0),n.context=E0(null),a=n.current,s=Jn(),s=Cr(s),u=_a(s),u.callback=null,va(a,u,s),a=s,n.current.lanes=a,Dn(n,a),Ri(n),t[ua]=n.current,Hf(t),new sc(n)},Uo.version="19.2.0",Uo}var k0;function KS(){if(k0)return oh.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),oh.exports=ZS(),oh.exports}var QS=KS(),Di=Id();const Ga=GS(Di);function JS(){return Kt.jsx("header",{style:{position:"fixed",top:18,left:20,zIndex:50},children:Kt.jsx("div",{children:Kt.jsx("h1",{style:{margin:0,fontSize:20,color:"#e6fbff",fontWeight:700},children:"Hi, I'm Adithya "})})})}var K_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},W0=Ga.createContext&&Ga.createContext(K_),$S=["attr","size","title"];function ty(o,e){if(o==null)return{};var i=ey(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function ey(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Gc(){return Gc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Gc.apply(this,arguments)}function q0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Vc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?q0(Object(i),!0).forEach(function(r){ny(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):q0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function ny(o,e,i){return e=iy(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function iy(o){var e=ay(o,"string");return typeof e=="symbol"?e:e+""}function ay(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function Q_(o){return o&&o.map((e,i)=>Ga.createElement(e.tag,Vc({key:i},e.attr),Q_(e.child)))}function Fd(o){return e=>Ga.createElement(ry,Gc({attr:Vc({},o.attr)},e),Q_(o.child))}function ry(o){var e=i=>{var{attr:r,size:l,title:c}=o,h=ty(o,$S),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Ga.createElement("svg",Gc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Vc(Vc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Ga.createElement("title",null,c),o.children)};return W0!==void 0?Ga.createElement(W0.Consumer,null,i=>e(i)):e(K_)}function sy(o){return Fd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function oy(o){return Fd({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function ly(o){return Fd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}function cy(){return Kt.jsxs("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:60,display:"flex",gap:12,pointerEvents:"auto"},children:[Kt.jsx("a",{href:"https://github.com/AdithyaDevi3",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Kt.jsx(sy,{size:26})}),Kt.jsx("a",{href:"https://www.linkedin.com/in/adithya-devi",target:"_blank",rel:"noopener noreferrer",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Kt.jsx(oy,{size:26})}),Kt.jsx("a",{href:"mailto:adithya.r.devi02@gmail.com",style:{color:"#ffffff",padding:"8px 12px",borderRadius:10,background:"rgba(0,0,0,0.4)",border:"1px solid rgba(102, 232, 255, 0.15)",transition:"all 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.background="rgba(0,0,0,0.7)",onMouseLeave:o=>o.target.style.background="rgba(0,0,0,0.4)",children:Kt.jsx(ly,{size:26})})]})}function uy({route:o,setRoute:e}){const i=o==="about",r=i?"Home":"About";return Kt.jsx("div",{style:{position:"fixed",top:16,right:16,zIndex:50,pointerEvents:"none"},children:Kt.jsx("div",{style:{pointerEvents:"auto",display:"flex",gap:8},children:Kt.jsx("button",{onClick:()=>e(i?"home":"about"),style:{padding:"8px 12px",borderRadius:4,fontWeight:600,color:"#c11919ff",border:"1px solid rgba(102, 232, 255, 0.15)",cursor:"pointer",transition:"all 0.2s"},children:r})})})}function fy(){return Kt.jsx("div",{className:"h-full flex items-center justify-center px-8",children:Kt.jsxs("div",{className:"max-w-3xl bg-black/60 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-cyan-500/20",children:[Kt.jsx("h2",{className:"text-5xl font-bold text-white mb-6 tracking-wider",children:"Get In Touch"}),Kt.jsxs("div",{className:"space-y-6 text-cyan-100 text-lg",children:[Kt.jsx("p",{className:"leading-relaxed",children:"I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to reach out!"}),Kt.jsxs("div",{className:"space-y-4 mt-8",children:[Kt.jsx("a",{href:"mailto:adithya.r@example.com",className:"block text-cyan-300 hover:text-cyan-100 transition-colors text-xl",children:"✉️ adithya.r@example.com"}),Kt.jsx("p",{className:"text-cyan-300 text-xl",children:"📍 Based in Your Location"})]})]})]})})}const hy=[{id:"ncr",name:"NCR Voyix",title:"Mobile Development Intern",period:"Summer 2025",summary:"Built resilient mobile systems for retail operations and connected commerce experiences.",technologies:["React Native","Expo","GraphQL","TypeScript"],projects:[{name:"Retail Mobility Platform",summary:"Delivered polished mobile workflows for in-store operations."},{name:"API Integration Layer",summary:"Connected commerce services with reliable data flows."}],color:"#4b7bff",orbitRadius:6.7,orbitSpeed:.18,accent:"#73e0ff"},{id:"novae",name:"Novae",title:"Software Engineering Intern",period:"Summer 2024",summary:"Contributed to event-driven systems and modern web interfaces for a fast-moving product team.",technologies:["Spring Boot","Angular","Kafka","MongoDB"],projects:[{name:"Streaming Integration Services",summary:"Improved message-driven workflows and monitoring."},{name:"Internal Admin Console",summary:"Shipped a cleaner operational dashboard experience."}],color:"#2ec4b6",orbitRadius:8.8,orbitSpeed:.13,accent:"#7fffd4"},{id:"adobe",name:"Adobe",title:"Developer Platforms Intern",period:"Summer 2026",summary:"Exploring developer tooling and platform experiences at the intersection of product and engineering.",technologies:["Developer Platforms","APIs","Systems Design","Collaboration"],projects:[{name:"Platform Experience Research",summary:"Investigated scalable developer workflows and onboarding."},{name:"Tooling Improvements",summary:"Helped shape a more coherent internal developer experience."}],color:"#8b5cf6",orbitRadius:10.5,orbitSpeed:.11,accent:"#c29cff"},{id:"research",name:"Research",title:"Undergraduate Research",period:"Aug 2024 – May 2025",summary:"Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.",technologies:["Research","Materials","Neuroscience","Experimentation"],projects:[{name:"Translational Glycomaterials",summary:"Investigated biomaterials for neural repair applications."},{name:"Lab Systems Support",summary:"Built reliable experimental and documentation workflows."}],color:"#1fb6d4",orbitRadius:5.6,orbitSpeed:.22,accent:"#8fe8ff"}];function dy(){const[o]=Di.useState(hy);return Kt.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",padding:"28px 20px 90px"},children:Kt.jsxs("div",{style:{width:"100%",maxWidth:"1100px",background:"rgba(2, 8, 20, 0.74)",backdropFilter:"blur(10px)",borderRadius:24,padding:"28px 28px 34px",border:"1px solid rgba(113, 216, 255, 0.16)",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.24)"},children:[Kt.jsxs("div",{style:{marginBottom:24},children:[Kt.jsx("p",{style:{margin:0,color:"#70d8ff",textTransform:"uppercase",letterSpacing:"0.22em",fontSize:12},children:"About"}),Kt.jsx("h2",{style:{margin:"6px 0 10px",fontSize:32,color:"#f3fcff",fontWeight:700},children:"A professional portfolio foundation."}),Kt.jsx("p",{style:{margin:0,color:"#a9dfff",fontSize:16,lineHeight:1.7},children:"This page remains a clean, readable record of experience and projects. The cinematic universe lives on the home experience, while this page serves as the structured portfolio source for future list-mode enhancements."})]}),Kt.jsx("div",{style:{display:"grid",gap:16},children:o.map(e=>Kt.jsxs("div",{style:{border:"1px solid rgba(113, 216, 255, 0.16)",borderRadius:18,padding:18,background:"rgba(4, 12, 24, 0.74)"},children:[Kt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:16,alignItems:"flex-start",flexWrap:"wrap"},children:[Kt.jsxs("div",{children:[Kt.jsx("p",{style:{margin:0,color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em"},children:e.period}),Kt.jsx("h3",{style:{margin:"4px 0 6px",color:"#f3fcff",fontSize:22},children:e.name}),Kt.jsx("p",{style:{margin:0,color:"#a9dfff",fontSize:15,lineHeight:1.6},children:e.summary})]}),Kt.jsxs("div",{style:{minWidth:180},children:[Kt.jsx("p",{style:{margin:"0 0 6px",color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.16em"},children:"Stack"}),Kt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:e.technologies.map(i=>Kt.jsx("span",{style:{padding:"6px 10px",borderRadius:999,background:"rgba(113, 216, 255, 0.12)",color:"#e3f9ff",fontSize:12},children:i},i))})]})]}),Kt.jsxs("div",{style:{marginTop:14},children:[Kt.jsx("p",{style:{margin:"0 0 8px",color:"#70d8ff",fontSize:12,textTransform:"uppercase",letterSpacing:"0.16em"},children:"Highlights"}),Kt.jsx("div",{style:{display:"grid",gap:8},children:e.projects.map(i=>Kt.jsxs("div",{style:{padding:"10px 12px",borderRadius:12,background:"rgba(255,255,255,0.04)"},children:[Kt.jsx("p",{style:{margin:0,color:"#f3fcff",fontWeight:600},children:i.name}),Kt.jsx("p",{style:{margin:"4px 0 0",color:"#9ed9ff",fontSize:14},children:i.summary})]},i.name))})]})]},e.id))})]})})}const Hd="180",py=0,Y0=1,my=2,J_=1,gy=2,aa=3,Wa=0,kn=1,ra=2,Va=0,ws=1,qa=2,j0=3,Z0=4,_y=5,Sr=100,vy=101,xy=102,Sy=103,yy=104,My=200,Ey=201,Ty=202,by=203,Yh=204,jh=205,Ay=206,Ry=207,Cy=208,wy=209,Dy=210,Uy=211,Ly=212,Ny=213,Oy=214,Zh=0,Kh=1,Qh=2,Ls=3,Jh=4,$h=5,td=6,ed=7,$_=0,zy=1,Py=2,Xa=0,By=1,Iy=2,Fy=3,tv=4,Hy=5,Gy=6,Vy=7,ev=300,Ns=301,Os=302,nd=303,id=304,Zc=306,ad=1e3,Mr=1001,rd=1002,Si=1003,Xy=1004,lc=1005,Ui=1006,hh=1007,Er=1008,Ni=1009,nv=1010,iv=1011,Vo=1012,Gd=1013,Tr=1014,sa=1015,Yo=1016,Vd=1017,Xd=1018,Xo=1020,av=35902,rv=35899,sv=1021,ov=1022,xi=1023,ko=1026,Wo=1027,lv=1028,kd=1029,cv=1030,Wd=1031,qd=1033,Pc=33776,Bc=33777,Ic=33778,Fc=33779,sd=35840,od=35841,ld=35842,cd=35843,ud=36196,fd=37492,hd=37496,dd=37808,pd=37809,md=37810,gd=37811,_d=37812,vd=37813,xd=37814,Sd=37815,yd=37816,Md=37817,Ed=37818,Td=37819,bd=37820,Ad=37821,Rd=36492,Cd=36494,wd=36495,Dd=36283,Ud=36284,Ld=36285,Nd=36286,ky=3200,Wy=3201,qy=0,Yy=1,Ha="",ei="srgb",zs="srgb-linear",Xc="linear",Xe="srgb",cs=7680,K0=519,jy=512,Zy=513,Ky=514,uv=515,Qy=516,Jy=517,$y=518,tM=519,Od=35044,Q0="300 es",Li=2e3,kc=2001;class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,zd=180/Math.PI;function ka(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Ce(o,e,i){return Math.max(e,Math.min(i,o))}function eM(o,e){return(o%e+e)%e}function ph(o,e,i){return(1-i)*o+i*e}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ke(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,i=0){ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ce(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],x=r[l+3];const v=c[h+0],M=c[h+1],T=c[h+2],A=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=x;return}if(d===1){e[i+0]=v,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(x!==A||m!==v||p!==M||S!==T){let y=1-d;const g=m*v+p*M+S*T+x*A,N=g>=0?1:-1,U=1-g*g;if(U>Number.EPSILON){const H=Math.sqrt(U),F=Math.atan2(H,g*N);y=Math.sin(y*F)/H,d=Math.sin(d*F)/H}const D=d*N;if(m=m*y+v*D,p=p*y+M*D,S=S*y+T*D,x=x*y+A*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+x*x);m*=H,p*=H,S*=H,x*=H}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],x=c[h],v=c[h+1],M=c[h+2],T=c[h+3];return e[i]=d*T+S*x+m*M-p*v,e[i+1]=m*T+S*v+p*x-d*M,e[i+2]=p*T+S*M+d*v-m*x,e[i+3]=S*T-d*x-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),x=d(c/2),v=m(r/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=v*S*x+p*M*T,this._y=p*M*x-v*S*T,this._z=p*S*T+v*M*x,this._w=p*S*x-v*M*T;break;case"YXZ":this._x=v*S*x+p*M*T,this._y=p*M*x-v*S*T,this._z=p*S*T-v*M*x,this._w=p*S*x+v*M*T;break;case"ZXY":this._x=v*S*x-p*M*T,this._y=p*M*x+v*S*T,this._z=p*S*T+v*M*x,this._w=p*S*x-v*M*T;break;case"ZYX":this._x=v*S*x-p*M*T,this._y=p*M*x+v*S*T,this._z=p*S*T-v*M*x,this._w=p*S*x+v*M*T;break;case"YZX":this._x=v*S*x+p*M*T,this._y=p*M*x+v*S*T,this._z=p*S*T-v*M*x,this._w=p*S*x-v*M*T;break;case"XZY":this._x=v*S*x-p*M*T,this._y=p*M*x-v*S*T,this._z=p*S*T+v*M*x,this._w=p*S*x+v*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ce(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-r*p,this._z=c*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),x=Math.sin((1-i)*S)/p,v=Math.sin(i*S)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*S,this.y=r+m*S+d*p-c*x,this.z=l+m*x+c*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ce(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new k,J0=new jo;class me{constructor(e,i,r,l,c,h,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],x=r[7],v=r[2],M=r[5],T=r[8],A=l[0],y=l[3],g=l[6],N=l[1],U=l[4],D=l[7],H=l[2],F=l[5],z=l[8];return c[0]=h*A+d*N+m*H,c[3]=h*y+d*U+m*F,c[6]=h*g+d*D+m*z,c[1]=p*A+S*N+x*H,c[4]=p*y+S*U+x*F,c[7]=p*g+S*D+x*z,c[2]=v*A+M*N+T*H,c[5]=v*y+M*U+T*F,c[8]=v*g+M*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*c*S+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],x=S*h-d*p,v=d*m-S*c,M=p*c-h*m,T=i*x+r*v+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(l*p-S*r)*A,e[2]=(d*r-l*h)*A,e[3]=v*A,e[4]=(S*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gh.makeScale(e,i)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new me;function fv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nM(){const o=Wc("canvas");return o.style.display="block",o}const $0={};function qo(o){o in $0||($0[o]=!0,console.warn(o))}function iM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const t_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const o={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=Ds(l.r),l.g=Ds(l.g),l.b=Ds(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[zs]:{primaries:e,whitePoint:r,transfer:Xc,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:t_,fromXYZ:e_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Ne=aM();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ds(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let us;class rM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{us===void 0&&(us=Wc("canvas")),us.width=e.width,us.height=e.height;const l=us.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=us}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Wc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sM=0;class Yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(_h(l[h].image)):c.push(_h(l[h]))}else c=_h(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function _h(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oM=0;const vh=new k;class zn extends Bs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Ui,h=Er,d=xi,m=Ni,p=zn.DEFAULT_ANISOTROPY,S=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ka(),this.name="",this.source=new Yd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=ev;zn.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,i=0,r=0,l=1){We.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],x=m[8],v=m[1],M=m[5],T=m[9],A=m[2],y=m[6],g=m[10];if(Math.abs(S-v)<.01&&Math.abs(x-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+v)<.1&&Math.abs(x+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(M+1)/2,H=(g+1)/2,F=(S+v)/4,z=(x+A)/4,Y=(T+y)/4;return U>D&&U>H?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=F/r,c=z/r):D>H?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=Y/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=z/c,l=Y/c),this.set(r,l,c,i),this}let N=Math.sqrt((y-T)*(y-T)+(x-A)*(x-A)+(v-S)*(v-S));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(x-A)/N,this.z=(v-S)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ce(this.x,e.x,i.x),this.y=Ce(this.y,e.y,i.y),this.z=Ce(this.z,e.z,i.z),this.w=Ce(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ce(this.x,e,i),this.y=Ce(this.y,e,i),this.z=Ce(this.z,e,i),this.w=Ce(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ce(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new We(0,0,e,i),this.scissorTest=!1,this.viewport=new We(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends lM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class hv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(c,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(e.matrixWorld),this.union(cc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),uc.subVectors(this.max,Lo),fs.subVectors(e.a,Lo),hs.subVectors(e.b,Lo),ds.subVectors(e.c,Lo),Oa.subVectors(hs,fs),za.subVectors(ds,hs),hr.subVectors(fs,ds);let i=[0,-Oa.z,Oa.y,0,-za.z,za.y,0,-hr.z,hr.y,Oa.z,0,-Oa.x,za.z,0,-za.x,hr.z,0,-hr.x,-Oa.y,Oa.x,0,-za.y,za.x,0,-hr.y,hr.x,0];return!xh(i,fs,hs,ds,uc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,fs,hs,ds,uc))?!1:(fc.crossVectors(Oa,za),i=[fc.x,fc.y,fc.z],xh(i,fs,hs,ds,uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new k,new k,new k,new k,new k,new k,new k,new k],gi=new k,cc=new Zo,fs=new k,hs=new k,ds=new k,Oa=new k,za=new k,hr=new k,Lo=new k,uc=new k,fc=new k,dr=new k;function xh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){dr.fromArray(o,c);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),m=e.dot(dr),p=i.dot(dr),S=r.dot(dr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const uM=new Zo,No=new k,Sh=new k;class Ko{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):uM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Sh)),this.expandByPoint(No.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new k,yh=new k,hc=new k,Pa=new k,Mh=new k,dc=new k,Eh=new k;class jd{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){yh.copy(e).add(i).multiplyScalar(.5),hc.copy(i).sub(e).normalize(),Pa.copy(this.origin).sub(yh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(hc),d=Pa.dot(this.direction),m=-Pa.dot(hc),p=Pa.lengthSq(),S=Math.abs(1-h*h);let x,v,M,T;if(S>0)if(x=h*m-d,v=h*d-m,T=c*S,x>=0)if(v>=-T)if(v<=T){const A=1/S;x*=A,v*=A,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-T?(x=Math.max(0,-(-h*c+d)),v=x>0?-c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p):v<=T?(x=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+p):(x=Math.max(0,-(h*c+d)),v=x>0?c:Math.min(Math.max(-c,-m),c),M=-x*x+v*(v+2*m)+p);else v=h>0?-c:c,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(yh).addScaledVector(hc,v),M}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),S>=0?(c=(e.min.y-v.y)*S,h=(e.max.y-v.y)*S):(c=(e.max.y-v.y)*S,h=(e.min.y-v.y)*S),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,c){Mh.subVectors(i,e),dc.subVectors(r,e),Eh.crossVectors(Mh,dc);let h=this.direction.dot(Eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,e);const m=d*this.direction.dot(dc.crossVectors(Pa,dc));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(Pa));if(p<0||m+p>h)return null;const S=-d*Pa.dot(Eh);return S<0?null:this.at(S/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,i,r,l,c,h,d,m,p,S,x,v,M,T,A,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,S,x,v,M,T,A,y)}set(e,i,r,l,c,h,d,m,p,S,x,v,M,T,A,y){const g=this.elements;return g[0]=e,g[4]=i,g[8]=r,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=x,g[14]=v,g[3]=M,g[7]=T,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ps.setFromMatrixColumn(e,0).length(),c=1/ps.setFromMatrixColumn(e,1).length(),h=1/ps.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=h*S,M=h*x,T=d*S,A=d*x;i[0]=m*S,i[4]=-m*x,i[8]=p,i[1]=M+T*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*S,M=m*x,T=p*S,A=p*x;i[0]=v+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=A+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*S,M=m*x,T=p*S,A=p*x;i[0]=v-A*d,i[4]=-h*x,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*S,M=h*x,T=d*S,A=d*x;i[0]=m*S,i[4]=T*p-M,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=A-v*x,i[8]=T*x+M,i[1]=x,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*x+T,i[10]=v-A*x}else if(e.order==="XZY"){const v=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=-x,i[8]=p*S,i[1]=v*x+A,i[5]=h*S,i[9]=M*x-T,i[2]=T*x-M,i[6]=d*S,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,hM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(r,$n),Ba.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(r,$n)),Ba.normalize(),pc.crossVectors($n,Ba),l[0]=Ba.x,l[4]=pc.x,l[8]=$n.x,l[1]=Ba.y,l[5]=pc.y,l[9]=$n.y,l[2]=Ba.z,l[6]=pc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],x=r[5],v=r[9],M=r[13],T=r[2],A=r[6],y=r[10],g=r[14],N=r[3],U=r[7],D=r[11],H=r[15],F=l[0],z=l[4],Y=l[8],w=l[12],C=l[1],G=l[5],tt=l[9],ft=l[13],gt=l[2],ht=l[6],P=l[10],q=l[14],j=l[3],Mt=l[7],Tt=l[11],O=l[15];return c[0]=h*F+d*C+m*gt+p*j,c[4]=h*z+d*G+m*ht+p*Mt,c[8]=h*Y+d*tt+m*P+p*Tt,c[12]=h*w+d*ft+m*q+p*O,c[1]=S*F+x*C+v*gt+M*j,c[5]=S*z+x*G+v*ht+M*Mt,c[9]=S*Y+x*tt+v*P+M*Tt,c[13]=S*w+x*ft+v*q+M*O,c[2]=T*F+A*C+y*gt+g*j,c[6]=T*z+A*G+y*ht+g*Mt,c[10]=T*Y+A*tt+y*P+g*Tt,c[14]=T*w+A*ft+y*q+g*O,c[3]=N*F+U*C+D*gt+H*j,c[7]=N*z+U*G+D*ht+H*Mt,c[11]=N*Y+U*tt+D*P+H*Tt,c[15]=N*w+U*ft+D*q+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],x=e[6],v=e[10],M=e[14],T=e[3],A=e[7],y=e[11],g=e[15];return T*(+c*m*x-l*p*x-c*d*v+r*p*v+l*d*M-r*m*M)+A*(+i*m*M-i*p*v+c*h*v-l*h*M+l*p*S-c*m*S)+y*(+i*p*x-i*d*M-c*h*x+r*h*M+c*d*S-r*p*S)+g*(-l*d*S-i*m*x+i*d*v+l*h*x-r*h*v+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],x=e[9],v=e[10],M=e[11],T=e[12],A=e[13],y=e[14],g=e[15],N=x*y*p-A*v*p+A*m*M-d*y*M-x*m*g+d*v*g,U=T*v*p-S*y*p-T*m*M+h*y*M+S*m*g-h*v*g,D=S*A*p-T*x*p+T*d*M-h*A*M-S*d*g+h*x*g,H=T*x*m-S*A*m-T*d*v+h*A*v+S*d*y-h*x*y,F=i*N+r*U+l*D+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=N*z,e[1]=(A*v*c-x*y*c-A*l*M+r*y*M+x*l*g-r*v*g)*z,e[2]=(d*y*c-A*m*c+A*l*p-r*y*p-d*l*g+r*m*g)*z,e[3]=(x*m*c-d*v*c-x*l*p+r*v*p+d*l*M-r*m*M)*z,e[4]=U*z,e[5]=(S*y*c-T*v*c+T*l*M-i*y*M-S*l*g+i*v*g)*z,e[6]=(T*m*c-h*y*c-T*l*p+i*y*p+h*l*g-i*m*g)*z,e[7]=(h*v*c-S*m*c+S*l*p-i*v*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(T*x*c-S*A*c-T*r*M+i*A*M+S*r*g-i*x*g)*z,e[10]=(h*A*c-T*d*c+T*r*p-i*A*p-h*r*g+i*d*g)*z,e[11]=(S*d*c-h*x*c-S*r*p+i*x*p+h*r*M-i*d*M)*z,e[12]=H*z,e[13]=(S*A*l-T*x*l+T*r*v-i*A*v-S*r*y+i*x*y)*z,e[14]=(T*d*l-h*A*l-T*r*m+i*A*m+h*r*y-i*d*y)*z,e[15]=(h*x*l-S*d*l+S*r*m-i*x*m-h*r*v+i*d*v)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,S=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,x=d+d,v=c*p,M=c*S,T=c*x,A=h*S,y=h*x,g=d*x,N=m*p,U=m*S,D=m*x,H=r.x,F=r.y,z=r.z;return l[0]=(1-(A+g))*H,l[1]=(M+D)*H,l[2]=(T-U)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(v+g))*F,l[6]=(y+N)*F,l[7]=0,l[8]=(T+U)*z,l[9]=(y-N)*z,l[10]=(1-(v+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ps.set(l[0],l[1],l[2]).length();const h=ps.set(l[4],l[5],l[6]).length(),d=ps.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/c,S=1/h,x=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=S,_i.elements[5]*=S,_i.elements[6]*=S,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Li,m=!1){const p=this.elements,S=2*c/(i-e),x=2*c/(r-l),v=(i+e)/(i-e),M=(r+l)/(r-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===Li)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===kc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Li,m=!1){const p=this.elements,S=2/(i-e),x=2/(r-l),v=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===Li)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===kc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ps=new k,_i=new Qe,fM=new k(0,0,0),hM=new k(1,1,1),Ba=new k,pc=new k,$n=new k,n_=new Qe,i_=new jo;class ca{constructor(e=0,i=0,r=0,l=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return n_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return i_.setFromEuler(this),this.setFromQuaternion(i_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dM=0;const a_=new k,ms=new jo,ea=new Qe,mc=new k,Oo=new k,pM=new k,mM=new jo,r_=new k(1,0,0),s_=new k(0,1,0),o_=new k(0,0,1),l_={type:"added"},gM={type:"removed"},gs={type:"childadded",child:null},Th={type:"childremoved",child:null};class bn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new k,i=new ca,r=new jo,l=new k(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new me}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ms.setFromAxisAngle(e,i),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,i){return ms.setFromAxisAngle(e,i),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(r_,e)}rotateY(e){return this.rotateOnAxis(s_,e)}rotateZ(e){return this.rotateOnAxis(o_,e)}translateOnAxis(e,i){return a_.copy(e).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r_,e)}translateY(e){return this.translateOnAxis(s_,e)}translateZ(e){return this.translateOnAxis(o_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?mc.copy(e):mc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,mc,this.up):ea.lookAt(mc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ms.setFromRotationMatrix(ea),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l_),gs.child=e,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l_),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),x=h(e.shapes),v=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}bn.DEFAULT_UP=new k(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new k,na=new k,bh=new k,ia=new k,_s=new k,vs=new k,c_=new k,Ah=new k,Rh=new k,Ch=new k,wh=new We,Dh=new We,Uh=new We;class hi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){vi.subVectors(l,i),na.subVectors(r,i),bh.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(na),m=vi.dot(bh),p=na.dot(na),S=na.dot(bh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,M=(p*m-d*S)*v,T=(h*S-d*m)*v;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return wh.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),wh.fromBufferAttribute(e,i),Dh.fromBufferAttribute(e,r),Uh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(wh,c.x),h.addScaledVector(Dh,c.y),h.addScaledVector(Uh,c.z),h}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return hi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;_s.subVectors(l,r),vs.subVectors(c,r),Ah.subVectors(e,r);const m=_s.dot(Ah),p=vs.dot(Ah);if(m<=0&&p<=0)return i.copy(r);Rh.subVectors(e,l);const S=_s.dot(Rh),x=vs.dot(Rh);if(S>=0&&x<=S)return i.copy(l);const v=m*x-S*p;if(v<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(_s,h);Ch.subVectors(e,c);const M=_s.dot(Ch),T=vs.dot(Ch);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(vs,d);const y=S*T-M*x;if(y<=0&&x-S>=0&&M-T>=0)return c_.subVectors(c,l),d=(x-S)/(x-S+(M-T)),i.copy(l).addScaledVector(c_,d);const g=1/(y+A+v);return h=A*g,d=v*g,i.copy(r).addScaledVector(_s,h).addScaledVector(vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=eM(e,1),i=Ce(i,0,1),r=Ce(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Lh(h,c,e+1/3),this.g=Lh(h,c,e),this.b=Lh(h,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=pv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ne.workingToColorSpace(wn.copy(this),e),Math.round(Ce(wn.r*255,0,255))*65536+Math.round(Ce(wn.g*255,0,255))*256+Math.round(Ce(wn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=S<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ei){Ne.workingToColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+e,Ia.s+i,Ia.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ia),e.getHSL(gc);const r=ph(Ia.h,gc.h,i),l=ph(Ia.s,gc.s,i),c=ph(Ia.l,gc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ce;ce.NAMES=pv;let _M=0;class Ar extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=ws,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mv extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ca,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new k,_c=new ge;let vM=0;class dn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Od,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(e),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class gv extends dn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _v extends dn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class yi extends dn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let xM=0;const fi=new Qe,Nh=new bn,xs=new k,ti=new Zo,zo=new Zo,vn=new k;class Pn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?_v:gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,r){return fi.makeTranslation(e,i,r),this.applyMatrix4(fi),this}scale(e,i,r){return fi.makeScale(e,i,r),this.applyMatrix4(fi),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ti.min,zo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,zo.max),ti.expandByPoint(vn)):(ti.expandByPoint(zo.min),ti.expandByPoint(zo.max))}ti.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)vn.fromBufferAttribute(d,p),m&&(xs.fromBufferAttribute(e,p),vn.add(xs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<r.count;Y++)d[Y]=new k,m[Y]=new k;const p=new k,S=new k,x=new k,v=new ge,M=new ge,T=new ge,A=new k,y=new k;function g(Y,w,C){p.fromBufferAttribute(r,Y),S.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),v.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),S.sub(p),x.sub(p),M.sub(v),T.sub(v);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(A.copy(S).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(G),d[Y].add(A),d[w].add(A),d[C].add(A),m[Y].add(y),m[w].add(y),m[C].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,w=N.length;Y<w;++Y){const C=N[Y],G=C.start,tt=C.count;for(let ft=G,gt=G+tt;ft<gt;ft+=3)g(e.getX(ft+0),e.getX(ft+1),e.getX(ft+2))}const U=new k,D=new k,H=new k,F=new k;function z(Y){H.fromBufferAttribute(l,Y),F.copy(H);const w=d[Y];U.copy(w),U.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[Y])<0?-1:1;h.setXYZW(Y,U.x,U.y,U.z,G)}for(let Y=0,w=N.length;Y<w;++Y){const C=N[Y],G=C.start,tt=C.count;for(let ft=G,gt=G+tt;ft<gt;ft+=3)z(e.getX(ft+0)),z(e.getX(ft+1)),z(e.getX(ft+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new dn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new k,c=new k,h=new k,d=new k,m=new k,p=new k,S=new k,x=new k;if(e)for(let v=0,M=e.count;v<M;v+=3){const T=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),S.subVectors(h,c),x.subVectors(l,c),S.cross(x),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(S),m.add(S),p.add(S),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),S.subVectors(h,c),x.subVectors(l,c),S.cross(x),r.setXYZ(v+0,S.x,S.y,S.z),r.setXYZ(v+1,S.x,S.y,S.z),r.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,x=d.normalized,v=new p.constructor(m.length*S);let M=0,T=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let g=0;g<S;g++)v[T++]=p[M++]}return new dn(v,S,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,x=p.length;S<x;S++){const v=p[S],M=e(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],x=c[p];for(let v=0,M=x.length;v<M;v++)S.push(x[v].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u_=new Qe,pr=new jd,vc=new Ko,f_=new k,xc=new k,Sc=new k,yc=new k,Oh=new k,Mc=new k,h_=new k,Ec=new k;class oa extends bn{constructor(e=new Pn,i=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Mc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],x=c[m];S!==0&&(Oh.fromBufferAttribute(x,e),h?Mc.addScaledVector(Oh,S):Mc.addScaledVector(Oh.sub(i),S))}i.add(Mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(c),pr.copy(e.ray).recast(e.near),!(vc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(vc,f_)===null||pr.origin.distanceToSquared(f_)>(e.far-e.near)**2))&&(u_.copy(c).invert(),pr.copy(e.ray).applyMatrix4(u_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,x=c.attributes.normal,v=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=U;D<H;D+=3){const F=d.getX(D),z=d.getX(D+1),Y=d.getX(D+2);l=Tc(this,g,e,r,p,S,x,F,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const N=d.getX(y),U=d.getX(y+1),D=d.getX(y+2);l=Tc(this,h,e,r,p,S,x,N,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=v.length;T<A;T++){const y=v[T],g=h[y.materialIndex],N=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=U;D<H;D+=3){const F=D,z=D+1,Y=D+2;l=Tc(this,g,e,r,p,S,x,F,z,Y),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=T,g=A;y<g;y+=3){const N=y,U=y+1,D=y+2;l=Tc(this,h,e,r,p,S,x,N,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function SM(o,e,i,r,l,c,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Wa,d),m===null)return null;Ec.copy(d),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function Tc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,yc);const S=SM(o,e,i,r,xc,Sc,yc,h_);if(S){const x=new k;hi.getBarycoord(h_,xc,Sc,yc,x),l&&(S.uv=hi.getInterpolatedAttribute(l,d,m,p,x,new ge)),c&&(S.uv1=hi.getInterpolatedAttribute(c,d,m,p,x,new ge)),h&&(S.normal=hi.getInterpolatedAttribute(h,d,m,p,x,new k),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new k,materialIndex:0};hi.getNormal(xc,Sc,yc,v.normal),S.face=v,S.barycoord=x}return S}class Qo extends Pn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],x=[];let v=0,M=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new yi(p,3)),this.setAttribute("normal",new yi(S,3)),this.setAttribute("uv",new yi(x,2));function T(A,y,g,N,U,D,H,F,z,Y,w){const C=D/z,G=H/Y,tt=D/2,ft=H/2,gt=F/2,ht=z+1,P=Y+1;let q=0,j=0;const Mt=new k;for(let Tt=0;Tt<P;Tt++){const O=Tt*G-ft;for(let V=0;V<ht;V++){const rt=V*C-tt;Mt[A]=rt*N,Mt[y]=O*U,Mt[g]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[y]=0,Mt[g]=F>0?1:-1,S.push(Mt.x,Mt.y,Mt.z),x.push(V/z),x.push(1-Tt/Y),q+=1}}for(let Tt=0;Tt<Y;Tt++)for(let O=0;O<z;O++){const V=v+O+ht*Tt,rt=v+O+ht*(Tt+1),vt=v+(O+1)+ht*(Tt+1),Dt=v+(O+1)+ht*Tt;m.push(V,rt,Dt),m.push(rt,vt,Dt),j+=6}d.addGroup(M,j,w),M+=j,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const r=Ps(o[i]);for(const l in r)e[l]=r[l]}return e}function yM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function vv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const MM={clone:Ps,merge:On};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class xv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new k,d_=new ge,p_=new ge;class Xn extends xv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fa.x,Fa.y).multiplyScalar(-e/Fa.z)}getViewSize(e,i){return this.getViewBounds(e,d_,p_),i.subVectors(p_,d_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ss=-90,ys=1;class bM extends bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Xn(Ss,ys,e,i);l.layers=this.layers,this.add(l);const c=new Xn(Ss,ys,e,i);c.layers=this.layers,this.add(c);const h=new Xn(Ss,ys,e,i);h.layers=this.layers,this.add(h);const d=new Xn(Ss,ys,e,i);d.layers=this.layers,this.add(d);const m=new Xn(Ss,ys,e,i);m.layers=this.layers,this.add(m);const p=new Xn(Ss,ys,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===kc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(x,v,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Sv extends zn{constructor(e=[],i=Ns,r,l,c,h,d,m,p,S){super(e,i,r,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AM extends br{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Qo(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Va});c.uniforms.tEquirect.value=i;const h=new oa(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ui),new bM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Rs extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),g=this._getHandJoint(p,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=S.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&v>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Rs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Kc{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=i}clone(){return new Kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yv extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ca,this.environmentIntensity=1,this.environmentRotation=new ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Od,this.updateRanges=[],this.version=0,this.uuid=ka()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ka()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ka()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new k;class qc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyMatrix4(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.applyNormalMatrix(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Nn.fromBufferAttribute(this,i),Nn.transformDirection(e),this.setXYZ(i,Nn.x,Nn.y,Nn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ke(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=ke(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=ke(i,this.array),r=ke(r,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zd extends Ar{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const Po=new k,Es=new k,Ts=new k,bs=new ge,Bo=new ge,Mv=new Qe,bc=new k,Io=new k,Ac=new k,m_=new ge,Ph=new ge,g_=new ge;class Ev extends bn{constructor(e=new Zd){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Pn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new CM(i,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new qc(r,3,0,!1)),Ms.setAttribute("uv",new qc(r,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Mv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Rc(bc.set(-.5,-.5,0),Ts,h,Es,l,c),Rc(Io.set(.5,-.5,0),Ts,h,Es,l,c),Rc(Ac.set(.5,.5,0),Ts,h,Es,l,c),m_.set(0,0),Ph.set(1,0),g_.set(1,1);let d=e.ray.intersectTriangle(bc,Io,Ac,!1,Po);if(d===null&&(Rc(Io.set(-.5,.5,0),Ts,h,Es,l,c),Ph.set(0,1),d=e.ray.intersectTriangle(bc,Ac,Io,!1,Po),d===null))return;const m=e.ray.origin.distanceTo(Po);m<e.near||m>e.far||i.push({distance:m,point:Po.clone(),uv:hi.getInterpolation(Po,bc,Io,Ac,m_,Ph,g_,new ge),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rc(o,e,i,r,l,c){bs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Bo.x=c*bs.x-l*bs.y,Bo.y=l*bs.x+c*bs.y):Bo.copy(bs),o.copy(e),o.x+=Bo.x,o.y+=Bo.y,o.applyMatrix4(Mv)}const Bh=new k,wM=new k,DM=new me;class vr{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Bh.subVectors(r,i).cross(wM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Ko,UM=new ge(.5,.5),Cc=new k;class Kd{constructor(e=new vr,i=new vr,r=new vr,l=new vr,c=new vr,h=new vr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Li,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],x=c[5],v=c[6],M=c[7],T=c[8],A=c[9],y=c[10],g=c[11],N=c[12],U=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,g-T,H-N).normalize(),l[1].setComponents(p+h,M+S,g+T,H+N).normalize(),l[2].setComponents(p+d,M+x,g+A,H+U).normalize(),l[3].setComponents(p-d,M-x,g-A,H-U).normalize(),r)l[4].setComponents(m,v,y,D).normalize(),l[5].setComponents(p-m,M-v,g-y,H-D).normalize();else if(l[4].setComponents(p-m,M-v,g-y,H-D).normalize(),i===Li)l[5].setComponents(p+m,M+v,g+y,H+D).normalize();else if(i===kc)l[5].setComponents(m,v,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const i=UM.distanceTo(e.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new k,jc=new k,__=new Qe,Fo=new jd,wc=new Ko,Ih=new k,v_=new k;class Tv extends bn{constructor(e=new Pn,i=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Yc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Yc.distanceTo(jc);e.setAttribute("lineDistance",new yi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wc.copy(r.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;__.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(__);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=r.index,v=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=S.getX(A),N=S.getX(A+1),U=Dc(this,e,Fo,m,g,N,A);U&&i.push(U)}if(this.isLineLoop){const A=S.getX(T-1),y=S.getX(M),g=Dc(this,e,Fo,m,A,y,T-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let A=M,y=T-1;A<y;A+=p){const g=Dc(this,e,Fo,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Dc(this,e,Fo,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Dc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(Yc.fromBufferAttribute(d,l),jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Yc,jc,Ih,v_)>r)return;Ih.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Ih);if(!(p<e.near||p>e.far))return{distance:p,point:v_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class LM extends Ar{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const x_=new Qe,Pd=new jd,Uc=new Ko,Lc=new k;class S_ extends bn{constructor(e=new Pn,i=new LM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,e.ray.intersectsSphere(Uc)===!1)return;x_.copy(l).invert(),Pd.copy(e.ray).applyMatrix4(x_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=v,A=M;T<A;T++){const y=p.getX(T);Lc.fromBufferAttribute(x,y),y_(Lc,y,m,l,e,i,this)}}else{const v=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let T=v,A=M;T<A;T++)Lc.fromBufferAttribute(x,T),y_(Lc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function y_(o,e,i,r,l,c,h){const d=Pd.distanceSqToPoint(o);if(d<i){const m=new k;Pd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class bv extends zn{constructor(e,i,r=Tr,l,c,h,d=Si,m=Si,p,S=ko,x=1){if(S!==ko&&S!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:x};super(v,l,c,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Av extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jd extends Pn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),S(),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(c.slice(),3)),this.setAttribute("uv",new yi(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const U=new k,D=new k,H=new k;for(let F=0;F<i.length;F+=3)M(i[F+0],U),M(i[F+1],D),M(i[F+2],H),m(U,D,H,N)}function m(N,U,D,H){const F=H+1,z=[];for(let Y=0;Y<=F;Y++){z[Y]=[];const w=N.clone().lerp(D,Y/F),C=U.clone().lerp(D,Y/F),G=F-Y;for(let tt=0;tt<=G;tt++)tt===0&&Y===F?z[Y][tt]=w:z[Y][tt]=w.clone().lerp(C,tt/G)}for(let Y=0;Y<F;Y++)for(let w=0;w<2*(F-Y)-1;w++){const C=Math.floor(w/2);w%2===0?(v(z[Y][C+1]),v(z[Y+1][C]),v(z[Y][C])):(v(z[Y][C+1]),v(z[Y+1][C+1]),v(z[Y+1][C]))}}function p(N){const U=new k;for(let D=0;D<c.length;D+=3)U.x=c[D+0],U.y=c[D+1],U.z=c[D+2],U.normalize().multiplyScalar(N),c[D+0]=U.x,c[D+1]=U.y,c[D+2]=U.z}function S(){const N=new k;for(let U=0;U<c.length;U+=3){N.x=c[U+0],N.y=c[U+1],N.z=c[U+2];const D=y(N)/2/Math.PI+.5,H=g(N)/Math.PI+.5;h.push(D,1-H)}T(),x()}function x(){for(let N=0;N<h.length;N+=6){const U=h[N+0],D=h[N+2],H=h[N+4],F=Math.max(U,D,H),z=Math.min(U,D,H);F>.9&&z<.1&&(U<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),H<.2&&(h[N+4]+=1))}}function v(N){c.push(N.x,N.y,N.z)}function M(N,U){const D=N*3;U.x=e[D+0],U.y=e[D+1],U.z=e[D+2]}function T(){const N=new k,U=new k,D=new k,H=new k,F=new ge,z=new ge,Y=new ge;for(let w=0,C=0;w<c.length;w+=9,C+=6){N.set(c[w+0],c[w+1],c[w+2]),U.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),F.set(h[C+0],h[C+1]),z.set(h[C+2],h[C+3]),Y.set(h[C+4],h[C+5]),H.copy(N).add(U).add(D).divideScalar(3);const G=y(H);A(F,C+0,N,G),A(z,C+2,U,G),A(Y,C+4,D,G)}}function A(N,U,D,H){H<0&&N.x===1&&(h[U]=N.x-1),D.x===0&&D.z===0&&(h[U]=H/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.vertices,e.indices,e.radius,e.details)}}class $d extends Jd{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new $d(e.radius,e.detail)}}class Qc extends Pn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,x=e/d,v=i/m,M=[],T=[],A=[],y=[];for(let g=0;g<S;g++){const N=g*v-h;for(let U=0;U<p;U++){const D=U*x-c;T.push(D,-N,0),A.push(0,0,1),y.push(U/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const U=N+p*g,D=N+p*(g+1),H=N+1+p*(g+1),F=N+1+p*g;M.push(U,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new yi(T,3)),this.setAttribute("normal",new yi(A,3)),this.setAttribute("uv",new yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class NM extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OM extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rv extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Fh=new Qe,M_=new k,E_=new k;class zM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;M_.setFromMatrixPosition(e.matrixWorld),i.position.copy(M_),E_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(E_),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const T_=new Qe,Ho=new k,Hh=new k;class PM extends zM{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ho),Hh.copy(r.position),Hh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Hh),r.updateMatrixWorld(),l.makeTranslation(-Ho.x,-Ho.y,-Ho.z),T_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(T_,r.coordinateSystem,r.reversedDepth)}}class Us extends Rv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new PM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BM extends xv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cv extends Rv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class IM extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function b_(o,e,i,r){const l=FM(r);switch(i){case sv:return o*e;case lv:return o*e/l.components*l.byteLength;case kd:return o*e/l.components*l.byteLength;case cv:return o*e*2/l.components*l.byteLength;case Wd:return o*e*2/l.components*l.byteLength;case ov:return o*e*3/l.components*l.byteLength;case xi:return o*e*4/l.components*l.byteLength;case qd:return o*e*4/l.components*l.byteLength;case Pc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ic:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case od:case cd:return Math.max(o,16)*Math.max(e,8)/4;case sd:case ld:return Math.max(o,8)*Math.max(e,8)/2;case ud:case fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rd:case Cd:case wd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ld:case Nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FM(o){switch(o){case Ni:case nv:return{byteLength:1,components:1};case Vo:case iv:case Yo:return{byteLength:2,components:1};case Vd:case Xd:return{byteLength:2,components:4};case Tr:case Gd:case sa:return{byteLength:4,components:1};case av:case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hd);function wv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function HM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,x=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const S=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,S);else{x.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<x.length;M++){const T=x[v],A=x[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++v,x[v]=A)}x.length=v+1;for(let M=0,T=x.length;M<T;M++){const A=x[M];o.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var GM=`#ifdef USE_ALPHAHASH
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
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
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
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b1=`float getShadowMask() {
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
}`,tT=`#include <common>
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
}`,eT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,rT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,cT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,hT=`#define TOON
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
}`,dT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,xT=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:GM,alphahash_pars_fragment:VM,alphamap_fragment:XM,alphamap_pars_fragment:kM,alphatest_fragment:WM,alphatest_pars_fragment:qM,aomap_fragment:YM,aomap_pars_fragment:jM,batching_pars_vertex:ZM,batching_vertex:KM,begin_vertex:QM,beginnormal_vertex:JM,bsdfs:$M,iridescence_fragment:tE,bumpmap_pars_fragment:eE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:aE,clipping_planes_vertex:rE,color_fragment:sE,color_pars_fragment:oE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:hE,displacementmap_pars_vertex:dE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:gE,colorspace_fragment:_E,colorspace_pars_fragment:vE,envmap_fragment:xE,envmap_common_pars_fragment:SE,envmap_pars_fragment:yE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:NE,envmap_vertex:EE,fog_vertex:TE,fog_pars_vertex:bE,fog_fragment:AE,fog_pars_fragment:RE,gradientmap_pars_fragment:CE,lightmap_pars_fragment:wE,lights_lambert_fragment:DE,lights_lambert_pars_fragment:UE,lights_pars_begin:LE,lights_toon_fragment:OE,lights_toon_pars_fragment:zE,lights_phong_fragment:PE,lights_phong_pars_fragment:BE,lights_physical_fragment:IE,lights_physical_pars_fragment:FE,lights_fragment_begin:HE,lights_fragment_maps:GE,lights_fragment_end:VE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:kE,logdepthbuf_pars_vertex:WE,logdepthbuf_vertex:qE,map_fragment:YE,map_pars_fragment:jE,map_particle_fragment:ZE,map_particle_pars_fragment:KE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphinstance_vertex:$E,morphcolor_vertex:t1,morphnormal_vertex:e1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:a1,normal_fragment_maps:r1,normal_pars_fragment:s1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:d1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:g1,project_vertex:_1,dithering_fragment:v1,dithering_pars_fragment:x1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:y1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:T1,shadowmask_pars_fragment:b1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:w1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:L1,tonemapping_pars_fragment:N1,transmission_fragment:O1,transmission_pars_fragment:z1,uv_pars_fragment:P1,uv_pars_vertex:B1,uv_vertex:I1,worldpos_vertex:F1,background_vert:H1,background_frag:G1,backgroundCube_vert:V1,backgroundCube_frag:X1,cube_vert:k1,cube_frag:W1,depth_vert:q1,depth_frag:Y1,distanceRGBA_vert:j1,distanceRGBA_frag:Z1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:$1,meshbasic_vert:tT,meshbasic_frag:eT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:aT,meshmatcap_frag:rT,meshnormal_vert:sT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:hT,meshtoon_frag:dT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},Ht={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ci={basic:{uniforms:On([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:On([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:On([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:On([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:On([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new ce(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:On([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:On([Ht.points,Ht.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:On([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:On([Ht.common,Ht.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:On([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:On([Ht.sprite,Ht.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:On([Ht.common,Ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:On([Ht.lights,Ht.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Nc={r:0,b:0,g:0},gr=new ca,ST=new Qe;function yT(o,e,i,r,l,c,h){const d=new ce(0);let m=c===!0?0:1,p,S,x=null,v=0,M=null;function T(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:e).get(D)),D}function A(U){let D=!1;const H=T(U);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,D){const H=T(D);H&&(H.isCubeTexture||H.mapping===Zc)?(S===void 0&&(S=new oa(new Qo(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Ps(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(F,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),gr.copy(D.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(gr)),S.material.toneMapped=Ne.getTransfer(H.colorSpace)!==Xe,(x!==H||v!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,x=H,v=H.version,M=o.toneMapping),S.layers.enableAll(),U.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new oa(new Qc(2,2),new Oi({name:"BackgroundMaterial",uniforms:Ps(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=H,v=H.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function g(U,D){U.getRGB(Nc,vv(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,D,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,g(d,m)},render:A,addToRenderList:y,dispose:N}}function MT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(C,G,tt,ft,gt){let ht=!1;const P=x(ft,tt,G);c!==P&&(c=P,p(c.object)),ht=M(C,ft,tt,gt),ht&&T(C,ft,tt,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(C,G,tt,ft),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function x(C,G,tt){const ft=tt.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ht=gt[G.id];ht===void 0&&(ht={},gt[G.id]=ht);let P=ht[ft];return P===void 0&&(P=v(m()),ht[ft]=P),P}function v(C){const G=[],tt=[],ft=[];for(let gt=0;gt<i;gt++)G[gt]=0,tt[gt]=0,ft[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:tt,attributeDivisors:ft,object:C,attributes:{},index:null}}function M(C,G,tt,ft){const gt=c.attributes,ht=G.attributes;let P=0;const q=tt.getAttributes();for(const j in q)if(q[j].location>=0){const Tt=gt[j];let O=ht[j];if(O===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==ft}function T(C,G,tt,ft){const gt={},ht=G.attributes;let P=0;const q=tt.getAttributes();for(const j in q)if(q[j].location>=0){let Tt=ht[j];Tt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),gt[j]=O,P++}c.attributes=gt,c.attributesNum=P,c.index=ft}function A(){const C=c.newAttributes;for(let G=0,tt=C.length;G<tt;G++)C[G]=0}function y(C){g(C,0)}function g(C,G){const tt=c.newAttributes,ft=c.enabledAttributes,gt=c.attributeDivisors;tt[C]=1,ft[C]===0&&(o.enableVertexAttribArray(C),ft[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function N(){const C=c.newAttributes,G=c.enabledAttributes;for(let tt=0,ft=G.length;tt<ft;tt++)G[tt]!==C[tt]&&(o.disableVertexAttribArray(tt),G[tt]=0)}function U(C,G,tt,ft,gt,ht,P){P===!0?o.vertexAttribIPointer(C,G,tt,gt,ht):o.vertexAttribPointer(C,G,tt,ft,gt,ht)}function D(C,G,tt,ft){A();const gt=ft.attributes,ht=tt.getAttributes(),P=G.defaultAttributeValues;for(const q in ht){const j=ht[q];if(j.location>=0){let Mt=gt[q];if(Mt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const Tt=Mt.normalized,O=Mt.itemSize,V=e.get(Mt);if(V===void 0)continue;const rt=V.buffer,vt=V.type,Dt=V.bytesPerElement,J=vt===o.INT||vt===o.UNSIGNED_INT||Mt.gpuType===Gd;if(Mt.isInterleavedBufferAttribute){const lt=Mt.data,Ct=lt.stride,Nt=Mt.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<j.locationSize;Bt++)g(j.location+Bt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<j.locationSize;Bt++)y(j.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,rt);for(let Bt=0;Bt<j.locationSize;Bt++)U(j.location+Bt,O/j.locationSize,vt,Tt,Ct*Dt,(Nt+O/j.locationSize*Bt)*Dt,J)}else{if(Mt.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)g(j.location+lt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let lt=0;lt<j.locationSize;lt++)y(j.location+lt);o.bindBuffer(o.ARRAY_BUFFER,rt);for(let lt=0;lt<j.locationSize;lt++)U(j.location+lt,O/j.locationSize,vt,Tt,O*Dt,O/j.locationSize*lt*Dt,J)}}else if(P!==void 0){const Tt=P[q];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(j.location,Tt);break;case 3:o.vertexAttrib3fv(j.location,Tt);break;case 4:o.vertexAttrib4fv(j.location,Tt);break;default:o.vertexAttrib1fv(j.location,Tt)}}}}N()}function H(){Y();for(const C in r){const G=r[C];for(const tt in G){const ft=G[tt];for(const gt in ft)S(ft[gt].object),delete ft[gt];delete G[tt]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const tt in G){const ft=G[tt];for(const gt in ft)S(ft[gt].object),delete ft[gt];delete G[tt]}delete r[C.id]}function z(C){for(const G in r){const tt=r[G];if(tt[C.id]===void 0)continue;const ft=tt[C.id];for(const gt in ft)S(ft[gt].object),delete ft[gt];delete tt[C.id]}}function Y(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:y,disableUnusedAttributes:N}}function ET(o,e,i){let r;function l(p){r=p}function c(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,x){x!==0&&(o.drawArraysInstanced(r,p,S,x),i.update(S,r,x))}function d(p,S,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,x);let M=0;for(let T=0;T<x;T++)M+=S[T];i.update(M,r,1)}function m(p,S,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],v[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,v,0,x);let T=0;for(let A=0;A<x;A++)T+=S[A]*v[A];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function TT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==xi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ni&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!Y)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function bT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new vr,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=S(x,v,0)},this.setState=function(x,v,M){const T=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,g=o.get(x);if(!l||T===null||T.length===0||c&&!y)c?S(null):p();else{const N=c?0:r,U=N*4;let D=g.clippingState||null;m.value=D,D=S(T,v,U,M);for(let H=0;H!==U;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(x,v,M,T){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const g=M+A*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let U=0,D=M;U!==A;++U,D+=4)h.copy(x[U]).applyMatrix4(N,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function AT(o){let e=new WeakMap;function i(h,d){return d===nd?h.mapping=Ns:d===id&&(h.mapping=Os),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===nd||d===id)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new AM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Cs=4,A_=[.125,.215,.35,.446,.526,.582],yr=20,Gh=new BM,R_=new ce;let Vh=null,Xh=0,kh=0,Wh=!1;const xr=(1+Math.sqrt(5))/2,As=1/xr,C_=[new k(-xr,As,0),new k(xr,As,0),new k(-As,0,xr),new k(As,0,xr),new k(0,xr,-As),new k(0,xr,As),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],RT=new k;class w_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=RT}=c;Vh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vh,Xh,kh),this._renderer.xr.enabled=Wh,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Yo,format:xi,colorSpace:zs,depthBuffer:!1},l=D_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(c)),this._blurMaterial=wT(c,e,i)}return l}_compileMaterial(e){const i=new oa(this._lodPlanes[0],e);this._renderer.compile(i,Gh)}_sceneToCubeUV(e,i,r,l,c){const m=new Xn(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(R_),x.toneMapping=Xa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const A=new mv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new oa(new Qo,A);let g=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,g=!0):(A.color.copy(R_),g=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[U]));const H=this._cubeSize;Oc(l,D*H,U>2?H:0,H,H),x.setRenderTarget(l),g&&x.render(y,m),x.render(e,m)}y.geometry.dispose(),y.material.dispose(),x.toneMapping=M,x.autoClear=v,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ns||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=U_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new oa(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Oc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Gh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=C_[(l-c-1)%C_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,x=new oa(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*yr-1),A=c/T,y=isFinite(c)?1+Math.floor(S*A):yr;y>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${yr}`);const g=[];let N=0;for(let z=0;z<yr;++z){const Y=z/A,w=Math.exp(-Y*Y/2);g.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<g.length;z++)g[z]=g[z]/N;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=g,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-r;const D=this._sizeLods[l],H=3*D*(l>U-Cs?l-U+Cs:0),F=4*(this._cubeSize-D);Oc(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(x,Gh)}}function CT(o){const e=[],i=[],r=[];let l=o;const c=o-Cs+1+A_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Cs?m=A_[h-o+Cs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,x=1+p,v=[S,S,x,S,x,x,S,S,x,x,S,x],M=6,T=6,A=3,y=2,g=1,N=new Float32Array(A*T*M),U=new Float32Array(y*T*M),D=new Float32Array(g*T*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,Y=F>2?0:-1,w=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];N.set(w,A*T*F),U.set(v,y*T*F);const C=[F,F,F,F,F,F];D.set(C,g*T*F)}const H=new Pn;H.setAttribute("position",new dn(N,A)),H.setAttribute("uv",new dn(U,y)),H.setAttribute("faceIndex",new dn(D,g)),e.push(H),l>Cs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function D_(o,e,i){const r=new br(o,e,i);return r.texture.mapping=Zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Oc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function wT(o,e,i){const r=new Float32Array(yr),l=new k(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function U_(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function L_(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function DT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===nd||m===id,S=m===Ns||m===Os;if(p||S){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new w_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new w_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function UT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function LT(o,e,i,r){const l={},c=new WeakMap;function h(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",h),delete l[v.id];const M=c.get(v);M&&(e.remove(M),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)e.update(v[M],o.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,T=x.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let U=0,D=N.length;U<D;U+=3){const H=N[U+0],F=N[U+1],z=N[U+2];v.push(H,F,F,z,z,H)}}else if(T!==void 0){const N=T.array;A=T.version;for(let U=0,D=N.length/3-1;U<D;U+=3){const H=U+0,F=U+1,z=U+2;v.push(H,F,F,z,z,H)}}else return;const y=new(fv(v)?_v:gv)(v,1);y.version=A;const g=c.get(x);g&&e.remove(g),c.set(x,y)}function S(x){const v=c.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:S}}function NT(o,e,i){let r;function l(v){r=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,M){o.drawElements(r,M,c,v*h),i.update(M,r,1)}function p(v,M,T){T!==0&&(o.drawElementsInstanced(r,M,c,v*h,T),i.update(M,r,T))}function S(v,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,v,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];i.update(y,r,1)}function x(v,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<v.length;g++)p(v[g]/h,M[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,v,0,A,0,T);let g=0;for(let N=0;N<T;N++)g+=M[N]*A[N];i.update(g,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=x}function OT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function zT(o,e,i){const r=new WeakMap,l=new We;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=S!==void 0?S.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*F*4*x),Y=new hv(z,H,F,x);Y.type=sa,Y.needsUpdate=!0;const w=D*4;for(let G=0;G<x;G++){const tt=g[G],ft=N[G],gt=U[G],ht=H*F*4*G;for(let P=0;P<tt.count;P++){const q=P*w;T===!0&&(l.fromBufferAttribute(tt,P),z[ht+q+0]=l.x,z[ht+q+1]=l.y,z[ht+q+2]=l.z,z[ht+q+3]=0),A===!0&&(l.fromBufferAttribute(ft,P),z[ht+q+4]=l.x,z[ht+q+5]=l.y,z[ht+q+6]=l.z,z[ht+q+7]=0),y===!0&&(l.fromBufferAttribute(gt,P),z[ht+q+8]=l.x,z[ht+q+9]=l.y,z[ht+q+10]=l.z,z[ht+q+11]=gt.itemSize===4?l.w:1)}}v={count:x,texture:Y,size:new ge(H,F)},r.set(d,v),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function PT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,S=m.geometry,x=e.get(m,S);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Dv=new zn,N_=new bv(1,1),Uv=new hv,Lv=new cM,Nv=new Sv,O_=[],z_=[],P_=new Float32Array(16),B_=new Float32Array(9),I_=new Float32Array(4);function Is(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=O_[l];if(c===void 0&&(c=new Float32Array(l),O_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function pn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function mn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Jc(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function BT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2fv(this.addr,e),mn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;o.uniform3fv(this.addr,e),mn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4fv(this.addr,e),mn(i,e)}}function GT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;I_.set(r),o.uniformMatrix2fv(this.addr,!1,I_),mn(i,r)}}function VT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;B_.set(r),o.uniformMatrix3fv(this.addr,!1,B_),mn(i,r)}}function XT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;P_.set(r),o.uniformMatrix4fv(this.addr,!1,P_),mn(i,r)}}function kT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2iv(this.addr,e),mn(i,e)}}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3iv(this.addr,e),mn(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4iv(this.addr,e),mn(i,e)}}function jT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;o.uniform2uiv(this.addr,e),mn(i,e)}}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;o.uniform3uiv(this.addr,e),mn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;o.uniform4uiv(this.addr,e),mn(i,e)}}function JT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(N_.compareFunction=uv,c=N_):c=Dv,i.setTexture2D(e||c,l)}function $T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Lv,l)}function tb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Nv,l)}function eb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Uv,l)}function nb(o){switch(o){case 5126:return BT;case 35664:return IT;case 35665:return FT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return XT;case 5124:case 35670:return kT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return eb}}function ib(o,e){o.uniform1fv(this.addr,e)}function ab(o,e){const i=Is(e,this.size,2);o.uniform2fv(this.addr,i)}function rb(o,e){const i=Is(e,this.size,3);o.uniform3fv(this.addr,i)}function sb(o,e){const i=Is(e,this.size,4);o.uniform4fv(this.addr,i)}function ob(o,e){const i=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function lb(o,e){const i=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function cb(o,e){const i=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ub(o,e){o.uniform1iv(this.addr,e)}function fb(o,e){o.uniform2iv(this.addr,e)}function hb(o,e){o.uniform3iv(this.addr,e)}function db(o,e){o.uniform4iv(this.addr,e)}function pb(o,e){o.uniform1uiv(this.addr,e)}function mb(o,e){o.uniform2uiv(this.addr,e)}function gb(o,e){o.uniform3uiv(this.addr,e)}function _b(o,e){o.uniform4uiv(this.addr,e)}function vb(o,e,i){const r=this.cache,l=e.length,c=Jc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Dv,c[h])}function xb(o,e,i){const r=this.cache,l=e.length,c=Jc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Lv,c[h])}function Sb(o,e,i){const r=this.cache,l=e.length,c=Jc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Nv,c[h])}function yb(o,e,i){const r=this.cache,l=e.length,c=Jc(i,l);pn(r,c)||(o.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Uv,c[h])}function Mb(o){switch(o){case 5126:return ib;case 35664:return ab;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return yb}}class Eb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=nb(i.type)}}class Tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Mb(i.type)}}class bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function F_(o,e){o.seq.push(e),o.map[e.id]=e}function Ab(o,e,i){const r=o.name,l=r.length;for(qh.lastIndex=0;;){const c=qh.exec(r),h=qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){F_(i,p===void 0?new Eb(d,o,e):new Tb(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new bb(d),F_(i,x)),i=x}}}class Hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);Ab(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function H_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Rb=37297;let Cb=0;function wb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const G_=new me;function Db(o){Ne._getMatrix(G_,Ne.workingColorSpace,o);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Xc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function V_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+wb(o.getShaderSource(e),d)}else return c}function Ub(o,e){const i=Db(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Lb(o,e){let i;switch(e){case By:i="Linear";break;case Iy:i="Reinhard";break;case Fy:i="Cineon";break;case tv:i="ACESFilmic";break;case Gy:i="AgX";break;case Vy:i="Neutral";break;case Hy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new k;function Nb(){Ne.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function zb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Pb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Go(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(o){return o.replace(Bb,Fb)}const Ib=new Map;function Fb(o,e){let i=_e[e];if(i===void 0){const r=Ib.get(e);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bd(i)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace(Hb,Gb)}function Gb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Vb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function Xb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case Zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kb(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Os&&(e="ENVMAP_MODE_REFRACTION"),e}function Wb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case Py:e="ENVMAP_BLENDING_ADD";break}return e}function qb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Yb(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Vb(i),p=Xb(i),S=kb(i),x=Wb(i),v=qb(i),M=Ob(i),T=zb(c),A=l.createProgram();let y,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Go).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Go).join(`
`),g.length>0&&(g+=`
`)):(y=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),g=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?_e.tonemapping_pars_fragment:"",i.toneMapping!==Xa?Lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Ub("linearToOutputTexel",i.outputColorSpace),Nb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Bd(h),h=X_(h,i),h=k_(h,i),d=Bd(d),d=X_(d,i),d=k_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const U=N+y+h,D=N+g+d,H=H_(l,l.VERTEX_SHADER,U),F=H_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,H),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(A)||"",ft=l.getShaderInfoLog(H)||"",gt=l.getShaderInfoLog(F)||"",ht=tt.trim(),P=ft.trim(),q=gt.trim();let j=!0,Mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,F);else{const Tt=V_(l,H,"vertex"),O=V_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+Tt+`
`+O)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(P===""||q==="")&&(Mt=!1);Mt&&(G.diagnostics={runnable:j,programLog:ht,vertexShader:{log:P,prefix:y},fragmentShader:{log:q,prefix:g}})}l.deleteShader(H),l.deleteShader(F),Y=new Hc(l,A),w=Pb(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,Rb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=F,this}let jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Kb(e),i.set(e,r)),r}}class Kb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Qb(o,e,i,r,l,c,h){const d=new dv,m=new Zb,p=new Set,S=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,G,tt,ft){const gt=tt.fog,ht=ft.geometry,P=w.isMeshStandardMaterial?tt.environment:null,q=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),j=q&&q.mapping===Zc?q.image.height:null,Mt=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const Tt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let V=0;ht.morphAttributes.position!==void 0&&(V=1),ht.morphAttributes.normal!==void 0&&(V=2),ht.morphAttributes.color!==void 0&&(V=3);let rt,vt,Dt,J;if(Mt){const we=Ci[Mt];rt=we.vertexShader,vt=we.fragmentShader}else rt=w.vertexShader,vt=w.fragmentShader,m.update(w),Dt=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const lt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Nt=ft.isInstancedMesh===!0,Bt=ft.isBatchedMesh===!0,se=!!w.map,be=!!w.matcap,B=!!q,re=!!w.aoMap,ne=!!w.lightMap,$t=!!w.bumpMap,kt=!!w.normalMap,At=!!w.displacementMap,Et=!!w.emissiveMap,Vt=!!w.metalnessMap,he=!!w.roughnessMap,Ae=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,pt=w.sheen>0,st=w.transmission>0,ut=Ae&&!!w.anisotropyMap,Wt=L&&!!w.clearcoatMap,Ut=L&&!!w.clearcoatNormalMap,Xt=L&&!!w.clearcoatRoughnessMap,Pt=$&&!!w.iridescenceMap,St=$&&!!w.iridescenceThicknessMap,wt=pt&&!!w.sheenColorMap,Qt=pt&&!!w.sheenRoughnessMap,zt=!!w.specularMap,Ot=!!w.specularColorMap,le=!!w.specularIntensityMap,W=st&&!!w.transmissionMap,Rt=st&&!!w.thicknessMap,Lt=!!w.gradientMap,It=!!w.alphaMap,bt=w.alphaTest>0,xt=!!w.alphaHash,qt=!!w.extensions;let ue=Xa;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Be={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:rt,fragmentShader:vt,defines:w.defines,customVertexShaderID:Dt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Bt,batchingColor:Bt&&ft._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ft.instanceColor!==null,instancingMorph:Nt&&ft.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:zs,alphaToCoverage:!!w.alphaToCoverage,map:se,matcap:be,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:ne,bumpMap:$t,normalMap:kt,displacementMap:v&&At,emissiveMap:Et,normalMapObjectSpace:kt&&w.normalMapType===Yy,normalMapTangentSpace:kt&&w.normalMapType===qy,metalnessMap:Vt,roughnessMap:he,anisotropy:Ae,anisotropyMap:ut,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:$,iridescenceMap:Pt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:wt,sheenRoughnessMap:Qt,specularMap:zt,specularColorMap:Ot,specularIntensityMap:le,transmission:st,transmissionMap:W,thicknessMap:Rt,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:It,alphaTest:bt,alphaHash:xt,combine:w.combine,mapUv:se&&A(w.map.channel),aoMapUv:re&&A(w.aoMap.channel),lightMapUv:ne&&A(w.lightMap.channel),bumpMapUv:$t&&A(w.bumpMap.channel),normalMapUv:kt&&A(w.normalMap.channel),displacementMapUv:At&&A(w.displacementMap.channel),emissiveMapUv:Et&&A(w.emissiveMap.channel),metalnessMapUv:Vt&&A(w.metalnessMap.channel),roughnessMapUv:he&&A(w.roughnessMap.channel),anisotropyMapUv:ut&&A(w.anisotropyMap.channel),clearcoatMapUv:Wt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&A(w.sheenRoughnessMap.channel),specularMapUv:zt&&A(w.specularMap.channel),specularColorMapUv:Ot&&A(w.specularColorMap.channel),specularIntensityMapUv:le&&A(w.specularIntensityMap.channel),transmissionMapUv:W&&A(w.transmissionMap.channel),thicknessMapUv:Rt&&A(w.thicknessMap.channel),alphaMapUv:It&&A(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(kt||Ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!ht.attributes.uv&&(se||It),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ct,skinning:ft.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:se&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===Xe,decodeVideoTextureEmissive:Et&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===Xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function g(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let G;if(C){const tt=Ci[C];G=MM.clone(tt.uniforms)}else G=w.uniforms;return G}function H(w,C){let G;for(let tt=0,ft=S.length;tt<ft;tt++){const gt=S[tt];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new Yb(o,C,w,c),S.push(G)),G}function F(w){if(--w.usedTimes===0){const C=S.indexOf(w);S[C]=S[S.length-1],S.pop(),w.destroy()}}function z(w){m.remove(w)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:z,programs:S,dispose:Y}}function Jb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function $b(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function j_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,T,A,y){let g=o[e];return g===void 0?(g={id:x.id,object:x,geometry:v,material:M,groupOrder:T,renderOrder:x.renderOrder,z:A,group:y},o[e]=g):(g.id=x.id,g.object=x,g.geometry=v,g.material=M,g.groupOrder=T,g.renderOrder=x.renderOrder,g.z=A,g.group=y),e++,g}function d(x,v,M,T,A,y){const g=h(x,v,M,T,A,y);M.transmission>0?r.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(x,v,M,T,A,y){const g=h(x,v,M,T,A,y);M.transmission>0?r.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(x,v){i.length>1&&i.sort(x||$b),r.length>1&&r.sort(v||Y_),l.length>1&&l.sort(v||Y_)}function S(){for(let x=e,v=o.length;x<v;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function tA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new j_,o.set(r,[h])):l>=c.length?(h=new j_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function eA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new ce};break;case"SpotLight":i={position:new k,direction:new k,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":i={color:new ce,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function nA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let iA=0;function aA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function rA(o){const e=new eA,i=nA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,c=new Qe,h=new Qe;function d(p){let S=0,x=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,A=0,y=0,g=0,N=0,U=0,D=0,H=0,F=0,z=0;p.sort(aA);for(let w=0,C=p.length;w<C;w++){const G=p[w],tt=G.color,ft=G.intensity,gt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=tt.r*ft,x+=tt.g*ft,v+=tt.b*ft;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ft);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(tt).multiplyScalar(ft),P.distance=gt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[A]=P;const q=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,q.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=q.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=ht,D++}A++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(tt).multiplyScalar(ft),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const q=G.shadow,j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=G.shadow.matrix,U++}r.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ft),P.groundColor.copy(G.groundColor).multiplyScalar(ft),r.hemi[g]=P,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=v;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==T||Y.spotLength!==A||Y.rectAreaLength!==y||Y.hemiLength!==g||Y.numDirectionalShadows!==N||Y.numPointShadows!==U||Y.numSpotShadows!==D||Y.numSpotMaps!==H||Y.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,Y.directionalLength=M,Y.pointLength=T,Y.spotLength=A,Y.rectAreaLength=y,Y.hemiLength=g,Y.numDirectionalShadows=N,Y.numPointShadows=U,Y.numSpotShadows=D,Y.numSpotMaps=H,Y.numLightProbes=z,r.version=iA++)}function m(p,S){let x=0,v=0,M=0,T=0,A=0;const y=S.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const U=p[g];if(U.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),x++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(U.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),v++}else if(U.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Z_(o){const e=new rA(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function c(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function sA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Z_(o),e.set(l,[d])):c>=h.length?(d=new Z_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const oA=`void main() {
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
}`;function cA(o,e,i){let r=new Kd;const l=new ge,c=new ge,h=new We,d=new NM({depthPacking:Wy}),m=new OM,p={},S=i.maxTextureSize,x={[Wa]:kn,[kn]:Wa,[ra]:ra},v=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:oA,fragmentShader:lA}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new Pn;T.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new oa(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let g=this.type;this.render=function(F,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(Va),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ft=g!==aa&&this.type===aa,gt=g===aa&&this.type!==aa;for(let ht=0,P=F.length;ht<P;ht++){const q=F[ht],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Mt=j.getFrameExtents();if(l.multiply(Mt),c.copy(j.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/Mt.x),l.x=c.x*Mt.x,j.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/Mt.y),l.y=c.y*Mt.y,j.mapSize.y=c.y)),j.map===null||ft===!0||gt===!0){const O=this.type!==aa?{minFilter:Si,magFilter:Si}:{};j.map!==null&&j.map.dispose(),j.map=new br(l.x,l.y,O),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Tt=j.getViewportCount();for(let O=0;O<Tt;O++){const V=j.getViewport(O);h.set(c.x*V.x,c.y*V.y,c.x*V.z,c.y*V.w),tt.viewport(h),j.updateMatrices(q,O),r=j.getFrustum(),D(z,Y,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&N(j,Y),j.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,G)};function N(F,z){const Y=e.update(A);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new br(l.x,l.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,Y,v,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,Y,M,A,null)}function U(F,z,Y,w){let C=null;const G=Y.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=Y.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const tt=C.uuid,ft=z.uuid;let gt=p[tt];gt===void 0&&(gt={},p[tt]=gt);let ht=gt[ft];ht===void 0&&(ht=C.clone(),gt[ft]=ht,z.addEventListener("dispose",H)),C=ht}if(C.visible=z.visible,C.wireframe=z.wireframe,w===aa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=o.properties.get(C);tt.light=Y}return C}function D(F,z,Y,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===aa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,F.matrixWorld);const ft=e.update(F),gt=F.material;if(Array.isArray(gt)){const ht=ft.groups;for(let P=0,q=ht.length;P<q;P++){const j=ht[P],Mt=gt[j.materialIndex];if(Mt&&Mt.visible){const Tt=U(F,Mt,w,C);F.onBeforeShadow(o,F,z,Y,ft,Tt,j),o.renderBufferDirect(Y,null,ft,Tt,F,j),F.onAfterShadow(o,F,z,Y,ft,Tt,j)}}}else if(gt.visible){const ht=U(F,gt,w,C);F.onBeforeShadow(o,F,z,Y,ft,ht,null),o.renderBufferDirect(Y,null,ft,ht,F,null),F.onAfterShadow(o,F,z,Y,ft,ht,null)}}const tt=F.children;for(let ft=0,gt=tt.length;ft<gt;ft++)D(tt[ft],z,Y,w,C)}function H(F){F.target.removeEventListener("dispose",H);for(const Y in p){const w=p[Y],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const uA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[Ls]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:Ls};function fA(o,e){function i(){let W=!1;const Rt=new We;let Lt=null;const It=new We(0,0,0,0);return{setMask:function(bt){Lt!==bt&&!W&&(o.colorMask(bt,bt,bt,bt),Lt=bt)},setLocked:function(bt){W=bt},setClear:function(bt,xt,qt,ue,Be){Be===!0&&(bt*=ue,xt*=ue,qt*=ue),Rt.set(bt,xt,qt,ue),It.equals(Rt)===!1&&(o.clearColor(bt,xt,qt,ue),It.copy(Rt))},reset:function(){W=!1,Lt=null,It.set(-1,0,0,0)}}}function r(){let W=!1,Rt=!1,Lt=null,It=null,bt=null;return{setReversed:function(xt){if(Rt!==xt){const qt=e.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Rt=xt;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(xt){xt?lt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(xt){Lt!==xt&&!W&&(o.depthMask(xt),Lt=xt)},setFunc:function(xt){if(Rt&&(xt=uA[xt]),It!==xt){switch(xt){case Zh:o.depthFunc(o.NEVER);break;case Kh:o.depthFunc(o.ALWAYS);break;case Qh:o.depthFunc(o.LESS);break;case Ls:o.depthFunc(o.LEQUAL);break;case Jh:o.depthFunc(o.EQUAL);break;case $h:o.depthFunc(o.GEQUAL);break;case td:o.depthFunc(o.GREATER);break;case ed:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=xt}},setLocked:function(xt){W=xt},setClear:function(xt){bt!==xt&&(Rt&&(xt=1-xt),o.clearDepth(xt),bt=xt)},reset:function(){W=!1,Lt=null,It=null,bt=null,Rt=!1}}}function l(){let W=!1,Rt=null,Lt=null,It=null,bt=null,xt=null,qt=null,ue=null,Be=null;return{setTest:function(we){W||(we?lt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(we){Rt!==we&&!W&&(o.stencilMask(we),Rt=we)},setFunc:function(we,Dn,ni){(Lt!==we||It!==Dn||bt!==ni)&&(o.stencilFunc(we,Dn,ni),Lt=we,It=Dn,bt=ni)},setOp:function(we,Dn,ni){(xt!==we||qt!==Dn||ue!==ni)&&(o.stencilOp(we,Dn,ni),xt=we,qt=Dn,ue=ni)},setLocked:function(we){W=we},setClear:function(we){Be!==we&&(o.clearStencil(we),Be=we)},reset:function(){W=!1,Rt=null,Lt=null,It=null,bt=null,xt=null,qt=null,ue=null,Be=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},x={},v=new WeakMap,M=[],T=null,A=!1,y=null,g=null,N=null,U=null,D=null,H=null,F=null,z=new ce(0,0,0),Y=0,w=!1,C=null,G=null,tt=null,ft=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=q>=2);let Mt=null,Tt={};const O=o.getParameter(o.SCISSOR_BOX),V=o.getParameter(o.VIEWPORT),rt=new We().fromArray(O),vt=new We().fromArray(V);function Dt(W,Rt,Lt,It){const bt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(W,xt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<Lt;qt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Rt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return xt}const J={};J[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(Ls),$t(!1),kt(Y0),lt(o.CULL_FACE),re(Va);function lt(W){S[W]!==!0&&(o.enable(W),S[W]=!0)}function Ct(W){S[W]!==!1&&(o.disable(W),S[W]=!1)}function Nt(W,Rt){return x[W]!==Rt?(o.bindFramebuffer(W,Rt),x[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Bt(W,Rt){let Lt=M,It=!1;if(W){Lt=v.get(Rt),Lt===void 0&&(Lt=[],v.set(Rt,Lt));const bt=W.textures;if(Lt.length!==bt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,qt=bt.length;xt<qt;xt++)Lt[xt]=o.COLOR_ATTACHMENT0+xt;Lt.length=bt.length,It=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,It=!0);It&&o.drawBuffers(Lt)}function se(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const be={[Sr]:o.FUNC_ADD,[vy]:o.FUNC_SUBTRACT,[xy]:o.FUNC_REVERSE_SUBTRACT};be[Sy]=o.MIN,be[yy]=o.MAX;const B={[My]:o.ZERO,[Ey]:o.ONE,[Ty]:o.SRC_COLOR,[Yh]:o.SRC_ALPHA,[Dy]:o.SRC_ALPHA_SATURATE,[Cy]:o.DST_COLOR,[Ay]:o.DST_ALPHA,[by]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[wy]:o.ONE_MINUS_DST_COLOR,[Ry]:o.ONE_MINUS_DST_ALPHA,[Uy]:o.CONSTANT_COLOR,[Ly]:o.ONE_MINUS_CONSTANT_COLOR,[Ny]:o.CONSTANT_ALPHA,[Oy]:o.ONE_MINUS_CONSTANT_ALPHA};function re(W,Rt,Lt,It,bt,xt,qt,ue,Be,we){if(W===Va){A===!0&&(Ct(o.BLEND),A=!1);return}if(A===!1&&(lt(o.BLEND),A=!0),W!==_y){if(W!==y||we!==w){if((g!==Sr||D!==Sr)&&(o.blendEquation(o.FUNC_ADD),g=Sr,D=Sr),we)switch(W){case ws:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qa:o.blendFunc(o.ONE,o.ONE);break;case j0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Z0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ws:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qa:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case j0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,U=null,H=null,F=null,z.set(0,0,0),Y=0,y=W,w=we}return}bt=bt||Rt,xt=xt||Lt,qt=qt||It,(Rt!==g||bt!==D)&&(o.blendEquationSeparate(be[Rt],be[bt]),g=Rt,D=bt),(Lt!==N||It!==U||xt!==H||qt!==F)&&(o.blendFuncSeparate(B[Lt],B[It],B[xt],B[qt]),N=Lt,U=It,H=xt,F=qt),(ue.equals(z)===!1||Be!==Y)&&(o.blendColor(ue.r,ue.g,ue.b,Be),z.copy(ue),Y=Be),y=W,w=!1}function ne(W,Rt){W.side===ra?Ct(o.CULL_FACE):lt(o.CULL_FACE);let Lt=W.side===kn;Rt&&(Lt=!Lt),$t(Lt),W.blending===ws&&W.transparent===!1?re(Va):re(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const It=W.stencilWrite;d.setTest(It),It&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Et(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function kt(W){W!==py?(lt(o.CULL_FACE),W!==G&&(W===Y0?o.cullFace(o.BACK):W===my?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),G=W}function At(W){W!==tt&&(P&&o.lineWidth(W),tt=W)}function Et(W,Rt,Lt){W?(lt(o.POLYGON_OFFSET_FILL),(ft!==Rt||gt!==Lt)&&(o.polygonOffset(Rt,Lt),ft=Rt,gt=Lt)):Ct(o.POLYGON_OFFSET_FILL)}function Vt(W){W?lt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function he(W){W===void 0&&(W=o.TEXTURE0+ht-1),Mt!==W&&(o.activeTexture(W),Mt=W)}function Ae(W,Rt,Lt){Lt===void 0&&(Mt===null?Lt=o.TEXTURE0+ht-1:Lt=Mt);let It=Tt[Lt];It===void 0&&(It={type:void 0,texture:void 0},Tt[Lt]=It),(It.type!==W||It.texture!==Rt)&&(Mt!==Lt&&(o.activeTexture(Lt),Mt=Lt),o.bindTexture(W,Rt||J[W]),It.type=W,It.texture=Rt)}function L(){const W=Tt[Mt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(W){rt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),rt.copy(W))}function Qt(W){vt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),vt.copy(W))}function zt(W,Rt){let Lt=p.get(Rt);Lt===void 0&&(Lt=new WeakMap,p.set(Rt,Lt));let It=Lt.get(W);It===void 0&&(It=o.getUniformBlockIndex(Rt,W.name),Lt.set(W,It))}function Ot(W,Rt){const It=p.get(Rt).get(W);m.get(Rt)!==It&&(o.uniformBlockBinding(Rt,It,W.__bindingPointIndex),m.set(Rt,It))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},Mt=null,Tt={},x={},v=new WeakMap,M=[],T=null,A=!1,y=null,g=null,N=null,U=null,D=null,H=null,F=null,z=new ce(0,0,0),Y=0,w=!1,C=null,G=null,tt=null,ft=null,gt=null,rt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Ct,bindFramebuffer:Nt,drawBuffers:Bt,useProgram:se,setBlending:re,setMaterial:ne,setFlipSided:$t,setCullFace:kt,setLineWidth:At,setPolygonOffset:Et,setScissorTest:Vt,activeTexture:he,bindTexture:Ae,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Pt,texImage3D:St,updateUBOMapping:zt,uniformBlockBinding:Ot,texStorage2D:Ut,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:st,compressedTexSubImage2D:ut,compressedTexSubImage3D:Wt,scissor:wt,viewport:Qt,reset:le}}function hA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ge,S=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return M?new OffscreenCanvas(L,E):Wc("canvas")}function A(L,E,$){let pt=1;const st=Ae(L);if((st.width>$||st.height>$)&&(pt=$/Math.max(st.width,st.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(pt*st.width),Wt=Math.floor(pt*st.height);x===void 0&&(x=T(ut,Wt));const Ut=E?T(ut,Wt):x;return Ut.width=ut,Ut.height=Wt,Ut.getContext("2d").drawImage(L,0,0,ut,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+Wt+")."),Ut}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,E,$,pt,st=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===o.RED&&($===o.FLOAT&&(ut=o.R32F),$===o.HALF_FLOAT&&(ut=o.R16F),$===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ut=o.R8UI),$===o.UNSIGNED_SHORT&&(ut=o.R16UI),$===o.UNSIGNED_INT&&(ut=o.R32UI),$===o.BYTE&&(ut=o.R8I),$===o.SHORT&&(ut=o.R16I),$===o.INT&&(ut=o.R32I)),E===o.RG&&($===o.FLOAT&&(ut=o.RG32F),$===o.HALF_FLOAT&&(ut=o.RG16F),$===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ut=o.RG8UI),$===o.UNSIGNED_SHORT&&(ut=o.RG16UI),$===o.UNSIGNED_INT&&(ut=o.RG32UI),$===o.BYTE&&(ut=o.RG8I),$===o.SHORT&&(ut=o.RG16I),$===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),$===o.UNSIGNED_INT&&(ut=o.RGB32UI),$===o.BYTE&&(ut=o.RGB8I),$===o.SHORT&&(ut=o.RGB16I),$===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),$===o.UNSIGNED_INT&&(ut=o.RGBA32UI),$===o.BYTE&&(ut=o.RGBA8I),$===o.SHORT&&(ut=o.RGBA16I),$===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const Wt=st?Xc:Ne.getTransfer(pt);$===o.FLOAT&&(ut=o.RGBA32F),$===o.HALF_FLOAT&&(ut=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ut=Wt===Xe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function D(L,E){let $;return L?E===null||E===Tr||E===Xo?$=o.DEPTH24_STENCIL8:E===sa?$=o.DEPTH32F_STENCIL8:E===Vo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Tr||E===Xo?$=o.DEPTH_COMPONENT24:E===sa?$=o.DEPTH_COMPONENT32F:E===Vo&&($=o.DEPTH_COMPONENT16),$}function H(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Si&&L.minFilter!==Ui?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),Y(E),E.isVideoTexture&&S.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),C(E)}function Y(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,pt=v.get($);if(pt){const st=pt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(L),Object.keys(pt).length===0&&v.delete($)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const $=L.source,pt=v.get($);delete pt[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let st=0;st<E.__webglFramebuffer[pt].length;st++)o.deleteFramebuffer(E.__webglFramebuffer[pt][st]);else o.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)o.deleteFramebuffer(E.__webglFramebuffer[pt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let pt=0,st=$.length;pt<st;pt++){const ut=r.get($[pt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove($[pt])}r.remove(L)}let G=0;function tt(){G=0}function ft(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function gt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ht(L,E){const $=r.get(L);if(L.isVideoTexture&&Vt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const pt=L.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function P(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){J($,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function q(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){J($,L,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function j(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){lt($,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const Mt={[ad]:o.REPEAT,[Mr]:o.CLAMP_TO_EDGE,[rd]:o.MIRRORED_REPEAT},Tt={[Si]:o.NEAREST,[Xy]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Ui]:o.LINEAR,[hh]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},O={[jy]:o.NEVER,[tM]:o.ALWAYS,[Zy]:o.LESS,[uv]:o.LEQUAL,[Ky]:o.EQUAL,[$y]:o.GEQUAL,[Qy]:o.GREATER,[Jy]:o.NOTEQUAL};function V(L,E){if(E.type===sa&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ui||E.magFilter===hh||E.magFilter===lc||E.magFilter===Er||E.minFilter===Ui||E.minFilter===hh||E.minFilter===lc||E.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,Mt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,Mt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,Mt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==lc&&E.minFilter!==Er||E.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function rt(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const pt=E.source;let st=v.get(pt);st===void 0&&(st={},v.set(pt,st));const ut=gt(E);if(ut!==L.__cacheKey){st[ut]===void 0&&(st[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),st[ut].usedTimes++;const Wt=st[L.__cacheKey];Wt!==void 0&&(st[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&w(E)),L.__cacheKey=ut,L.__webglTexture=st[ut].texture}return $}function vt(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Dt(L,E,$,pt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,pt,E.data);else{ut.sort((St,wt)=>St.start-wt.start);let Wt=0;for(let St=1;St<ut.length;St++){const wt=ut[Wt],Qt=ut[St],zt=wt.start+wt.count,Ot=vt(Qt.start,E.width,4),le=vt(wt.start,E.width,4);Qt.start<=zt+1&&Ot===le&&vt(Qt.start+Qt.count-1,E.width,4)===Ot?wt.count=Math.max(wt.count,Qt.start+Qt.count-wt.start):(++Wt,ut[Wt]=Qt)}ut.length=Wt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),Pt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let St=0,wt=ut.length;St<wt;St++){const Qt=ut[St],zt=Math.floor(Qt.start/4),Ot=Math.ceil(Qt.count/4),le=zt%E.width,W=Math.floor(zt/E.width),Rt=Ot,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Rt,Lt,$,pt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function J(L,E,$){let pt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=o.TEXTURE_3D);const st=rt(L,E),ut=E.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+$);const Wt=r.get(ut);if(ut.version!==Wt.__version||st===!0){i.activeTexture(o.TEXTURE0+$);const Ut=Ne.getPrimaries(Ne.workingColorSpace),Xt=E.colorSpace===Ha?null:Ne.getPrimaries(E.colorSpace),Pt=E.colorSpace===Ha||Ut===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let St=A(E.image,!1,l.maxTextureSize);St=he(E,St);const wt=c.convert(E.format,E.colorSpace),Qt=c.convert(E.type);let zt=U(E.internalFormat,wt,Qt,E.colorSpace,E.isVideoTexture);V(pt,E);let Ot;const le=E.mipmaps,W=E.isVideoTexture!==!0,Rt=Wt.__version===void 0||st===!0,Lt=ut.dataReady,It=H(E,St);if(E.isDepthTexture)zt=D(E.format===Wo,E.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,zt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,zt,St.width,St.height,0,wt,Qt,null));else if(E.isDataTexture)if(le.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,It,zt,le[0].width,le[0].height);for(let bt=0,xt=le.length;bt<xt;bt++)Ot=le[bt],W?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,wt,Qt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,zt,Ot.width,Ot.height,0,wt,Qt,Ot.data);E.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,It,zt,St.width,St.height),Lt&&Dt(E,St,wt,Qt)):i.texImage2D(o.TEXTURE_2D,0,zt,St.width,St.height,0,wt,Qt,St.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,zt,le[0].width,le[0].height,St.depth);for(let bt=0,xt=le.length;bt<xt;bt++)if(Ot=le[bt],E.format!==xi)if(wt!==null)if(W){if(Lt)if(E.layerUpdates.size>0){const qt=b_(Ot.width,Ot.height,E.format,E.type);for(const ue of E.layerUpdates){const Be=Ot.data.subarray(ue*qt/Ot.data.BYTES_PER_ELEMENT,(ue+1)*qt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ue,Ot.width,Ot.height,1,wt,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,wt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,zt,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,wt,Qt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,zt,Ot.width,Ot.height,St.depth,0,wt,Qt,Ot.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,It,zt,le[0].width,le[0].height);for(let bt=0,xt=le.length;bt<xt;bt++)Ot=le[bt],E.format!==xi?wt!==null?W?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,wt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,zt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,wt,Qt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,zt,Ot.width,Ot.height,0,wt,Qt,Ot.data)}else if(E.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,It,zt,St.width,St.height,St.depth),Lt)if(E.layerUpdates.size>0){const bt=b_(St.width,St.height,E.format,E.type);for(const xt of E.layerUpdates){const qt=St.data.subarray(xt*bt/St.data.BYTES_PER_ELEMENT,(xt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,wt,Qt,qt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,wt,Qt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,St.width,St.height,St.depth,0,wt,Qt,St.data);else if(E.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,It,zt,St.width,St.height,St.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,wt,Qt,St.data)):i.texImage3D(o.TEXTURE_3D,0,zt,St.width,St.height,St.depth,0,wt,Qt,St.data);else if(E.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,It,zt,St.width,St.height);else{let bt=St.width,xt=St.height;for(let qt=0;qt<It;qt++)i.texImage2D(o.TEXTURE_2D,qt,zt,bt,xt,0,wt,Qt,null),bt>>=1,xt>>=1}}else if(le.length>0){if(W&&Rt){const bt=Ae(le[0]);i.texStorage2D(o.TEXTURE_2D,It,zt,bt.width,bt.height)}for(let bt=0,xt=le.length;bt<xt;bt++)Ot=le[bt],W?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,wt,Qt,Ot):i.texImage2D(o.TEXTURE_2D,bt,zt,wt,Qt,Ot);E.generateMipmaps=!1}else if(W){if(Rt){const bt=Ae(St);i.texStorage2D(o.TEXTURE_2D,It,zt,bt.width,bt.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,Qt,St)}else i.texImage2D(o.TEXTURE_2D,0,zt,wt,Qt,St);y(E)&&g(pt),Wt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function lt(L,E,$){if(E.image.length!==6)return;const pt=rt(L,E),st=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const ut=r.get(st);if(st.version!==ut.__version||pt===!0){i.activeTexture(o.TEXTURE0+$);const Wt=Ne.getPrimaries(Ne.workingColorSpace),Ut=E.colorSpace===Ha?null:Ne.getPrimaries(E.colorSpace),Xt=E.colorSpace===Ha||Wt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,St=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let xt=0;xt<6;xt++)!Pt&&!St?wt[xt]=A(E.image[xt],!0,l.maxCubemapSize):wt[xt]=St?E.image[xt].image:E.image[xt],wt[xt]=he(E,wt[xt]);const Qt=wt[0],zt=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type),le=U(E.internalFormat,zt,Ot,E.colorSpace),W=E.isVideoTexture!==!0,Rt=ut.__version===void 0||pt===!0,Lt=st.dataReady;let It=H(E,Qt);V(o.TEXTURE_CUBE_MAP,E);let bt;if(Pt){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){bt=wt[xt].mipmaps;for(let qt=0;qt<bt.length;qt++){const ue=bt[qt];E.format!==xi?zt!==null?W?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,ue.width,ue.height,zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,le,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,ue.width,ue.height,zt,Ot,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,le,ue.width,ue.height,0,zt,Ot,ue.data)}}}else{if(bt=E.mipmaps,W&&Rt){bt.length>0&&It++;const xt=Ae(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,It,le,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){W?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,wt[xt].width,wt[xt].height,zt,Ot,wt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,wt[xt].width,wt[xt].height,0,zt,Ot,wt[xt].data);for(let qt=0;qt<bt.length;qt++){const Be=bt[qt].image[xt].image;W?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,Be.width,Be.height,zt,Ot,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,le,Be.width,Be.height,0,zt,Ot,Be.data)}}else{W?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Ot,wt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,zt,Ot,wt[xt]);for(let qt=0;qt<bt.length;qt++){const ue=bt[qt];W?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,zt,Ot,ue.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,le,zt,Ot,ue.image[xt])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),ut.__version=st.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ct(L,E,$,pt,st,ut){const Wt=c.convert($.format,$.colorSpace),Ut=c.convert($.type),Xt=U($.internalFormat,Wt,Ut,$.colorSpace),Pt=r.get(E),St=r.get($);if(St.__renderTarget=E,!Pt.__hasExternalTextures){const wt=Math.max(1,E.width>>ut),Qt=Math.max(1,E.height>>ut);st===o.TEXTURE_3D||st===o.TEXTURE_2D_ARRAY?i.texImage3D(st,ut,Xt,wt,Qt,E.depth,0,Wt,Ut,null):i.texImage2D(st,ut,Xt,wt,Qt,0,Wt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,st,St.__webglTexture,0,At(E)):(st===o.TEXTURE_2D||st>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,st,St.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(L,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const pt=E.depthTexture,st=pt&&pt.isDepthTexture?pt.type:null,ut=D(E.stencilBuffer,st),Wt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=At(E);Et(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ut,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,L)}else{const pt=E.textures;for(let st=0;st<pt.length;st++){const ut=pt[st],Wt=c.convert(ut.format,ut.colorSpace),Ut=c.convert(ut.type),Xt=U(ut.internalFormat,Wt,Ut,ut.colorSpace),Pt=At(E);$&&Et(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Xt,E.width,E.height):Et(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Pt,Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Bt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(E.depthTexture);pt.__renderTarget=E,(!pt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const st=pt.__webglTexture,ut=At(E);if(E.depthTexture.format===ko)Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,st,0);else if(E.depthTexture.format===Wo)Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function se(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",st)};pt.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=pt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const pt=L.texture.mipmaps;pt&&pt.length>0?Bt(E.__webglFramebuffer[0],L):Bt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=o.createRenderbuffer(),Nt(E.__webglDepthbuffer[pt],L,!1);else{const st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,ut)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Nt(E.__webglDepthbuffer,L,!1);else{const st=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,st,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function be(L,E,$){const pt=r.get(L);E!==void 0&&Ct(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&se(L)}function B(L){const E=L.texture,$=r.get(L),pt=r.get(E);L.addEventListener("dispose",z);const st=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Wt=st.length>1;if(Wt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=E.version,h.memory.textures++),ut){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)$.__webglFramebuffer[Ut][Xt]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Ut=0,Xt=st.length;Ut<Xt;Ut++){const Pt=r.get(st[Ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Et(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<st.length;Ut++){const Xt=st[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const Pt=c.convert(Xt.format,Xt.colorSpace),St=c.convert(Xt.type),wt=U(Xt.internalFormat,Pt,St,Xt.colorSpace,L.isXRRenderTarget===!0),Qt=At(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,wt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),V(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct($.__webglFramebuffer[Ut][Xt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Xt);else Ct($.__webglFramebuffer[Ut],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Xt=st.length;Ut<Xt;Ut++){const Pt=st[Ut],St=r.get(Pt);let wt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,St.__webglTexture),V(wt,Pt),Ct($.__webglFramebuffer,L,Pt,o.COLOR_ATTACHMENT0+Ut,wt,0),y(Pt)&&g(wt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),V(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct($.__webglFramebuffer[Xt],L,E,o.COLOR_ATTACHMENT0,Ut,Xt);else Ct($.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ut,0);y(E)&&g(Ut),i.unbindTexture()}L.depthBuffer&&se(L)}function re(L){const E=L.textures;for(let $=0,pt=E.length;$<pt;$++){const st=E[$];if(y(st)){const ut=N(L),Wt=r.get(st).__webglTexture;i.bindTexture(ut,Wt),g(ut),i.unbindTexture()}}}const ne=[],$t=[];function kt(L){if(L.samples>0){if(Et(L)===!1){const E=L.textures,$=L.width,pt=L.height;let st=o.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(L),Ut=E.length>1;if(Ut)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Pt]);const St=r.get(E[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,$,pt,0,0,$,pt,st,o.NEAREST),m===!0&&(ne.length=0,$t.length=0,ne.push(o.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ne.push(ut),$t.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[Pt]);const St=r.get(E[Pt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function At(L){return Math.min(l.maxSamples,L.samples)}function Et(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(L){const E=h.render.frame;S.get(L)!==E&&(S.set(L,E),L.update())}function he(L,E){const $=L.colorSpace,pt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==zs&&$!==Ha&&(Ne.getTransfer($)===Xe?(pt!==xi||st!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ft,this.resetTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=be,this.setupRenderTarget=B,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Et}function dA(o,e){function i(r,l=Ha){let c;const h=Ne.getTransfer(l);if(r===Ni)return o.UNSIGNED_BYTE;if(r===Vd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===av)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===rv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===nv)return o.BYTE;if(r===iv)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Gd)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===Yo)return o.HALF_FLOAT;if(r===sv)return o.ALPHA;if(r===ov)return o.RGB;if(r===xi)return o.RGBA;if(r===ko)return o.DEPTH_COMPONENT;if(r===Wo)return o.DEPTH_STENCIL;if(r===lv)return o.RED;if(r===kd)return o.RED_INTEGER;if(r===cv)return o.RG;if(r===Wd)return o.RG_INTEGER;if(r===qd)return o.RGBA_INTEGER;if(r===Pc||r===Bc||r===Ic||r===Fc)if(h===Xe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===od||r===ld||r===cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===fd||r===hd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ud||r===fd)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===hd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===Td||r===bd||r===Ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===dd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bd)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rd||r===Cd||r===wd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Rd)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===Ud||r===Ld||r===Nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Dd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const pA=`
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

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Oi({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oa(new Qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends Bs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,x=null,v=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new gA,g={},N=i.getContextAttributes();let U=null,D=null;const H=[],F=[],z=new ge;let Y=null;const w=new Xn;w.viewport=new We;const C=new Xn;C.viewport=new We;const G=[w,C],tt=new IM;let ft=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let lt=H[J];return lt===void 0&&(lt=new zh,H[J]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(J){let lt=H[J];return lt===void 0&&(lt=new zh,H[J]=lt),lt.getGripSpace()},this.getHand=function(J){let lt=H[J];return lt===void 0&&(lt=new zh,H[J]=lt),lt.getHandSpace()};function ht(J){const lt=F.indexOf(J.inputSource);if(lt===-1)return;const Ct=H[lt];Ct!==void 0&&(Ct.update(J.inputSource,J.frame,p||h),Ct.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",q);for(let J=0;J<H.length;J++){const lt=F[J];lt!==null&&(F[J]=null,H[J].disconnect(lt))}ft=null,gt=null,y.reset();for(const J in g)delete g[J];e.setRenderTarget(U),M=null,v=null,x=null,l=null,D=null,Dt.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",P),l.addEventListener("inputsourceschange",q),N.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Nt=null,Bt=null;N.depth&&(Bt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=N.stencil?Wo:ko,Nt=N.stencil?Xo:Tr);const se={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(se),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new br(v.textureWidth,v.textureHeight,{format:xi,type:Ni,depthTexture:new bv(v.textureWidth,v.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new br(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Dt.setContext(l),Dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(J){for(let lt=0;lt<J.removed.length;lt++){const Ct=J.removed[lt],Nt=F.indexOf(Ct);Nt>=0&&(F[Nt]=null,H[Nt].disconnect(Ct))}for(let lt=0;lt<J.added.length;lt++){const Ct=J.added[lt];let Nt=F.indexOf(Ct);if(Nt===-1){for(let se=0;se<H.length;se++)if(se>=F.length){F.push(Ct),Nt=se;break}else if(F[se]===null){F[se]=Ct,Nt=se;break}if(Nt===-1)break}const Bt=H[Nt];Bt&&Bt.connect(Ct)}}const j=new k,Mt=new k;function Tt(J,lt,Ct){j.setFromMatrixPosition(lt.matrixWorld),Mt.setFromMatrixPosition(Ct.matrixWorld);const Nt=j.distanceTo(Mt),Bt=lt.projectionMatrix.elements,se=Ct.projectionMatrix.elements,be=Bt[14]/(Bt[10]-1),B=Bt[14]/(Bt[10]+1),re=(Bt[9]+1)/Bt[5],ne=(Bt[9]-1)/Bt[5],$t=(Bt[8]-1)/Bt[0],kt=(se[8]+1)/se[0],At=be*$t,Et=be*kt,Vt=Nt/(-$t+kt),he=Vt*-$t;if(lt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(he),J.translateZ(Vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Bt[10]===-1)J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ae=be+Vt,L=B+Vt,E=At-he,$=Et+(Nt-he),pt=re*B/L*Ae,st=ne*B/L*Ae;J.projectionMatrix.makePerspective(E,$,pt,st,Ae,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function O(J,lt){lt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(lt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let lt=J.near,Ct=J.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),tt.near=C.near=w.near=lt,tt.far=C.far=w.far=Ct,(ft!==tt.near||gt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ft=tt.near,gt=tt.far),tt.layers.mask=J.layers.mask|6,w.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const Nt=J.parent,Bt=tt.cameras;O(tt,Nt);for(let se=0;se<Bt.length;se++)O(Bt[se],Nt);Bt.length===2?Tt(tt,w,C):tt.projectionMatrix.copy(w.projectionMatrix),V(J,tt,Nt)};function V(J,lt,Ct){Ct===null?J.matrix.copy(lt.matrixWorld):(J.matrix.copy(Ct.matrixWorld),J.matrix.invert(),J.matrix.multiply(lt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(lt.projectionMatrix),J.projectionMatrixInverse.copy(lt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(J){return g[J]};let rt=null;function vt(J,lt){if(S=lt.getViewerPose(p||h),T=lt,S!==null){const Ct=S.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Nt=!1;Ct.length!==tt.cameras.length&&(tt.cameras.length=0,Nt=!0);for(let B=0;B<Ct.length;B++){const re=Ct[B];let ne=null;if(M!==null)ne=M.getViewport(re);else{const kt=x.getViewSubImage(v,re);ne=kt.viewport,B===0&&(e.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(D))}let $t=G[B];$t===void 0&&($t=new Xn,$t.layers.enable(B),$t.viewport=new We,G[B]=$t),$t.matrix.fromArray(re.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(re.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),B===0&&(tt.matrix.copy($t.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Nt===!0&&tt.cameras.push($t)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){x=r.getBinding();const B=x.getDepthInformation(Ct[0]);B&&B.isValid&&B.texture&&y.init(B,l.renderState)}if(Bt&&Bt.includes("camera-access")&&A){e.state.unbindTexture(),x=r.getBinding();for(let B=0;B<Ct.length;B++){const re=Ct[B].camera;if(re){let ne=g[re];ne||(ne=new Av,g[re]=ne);const $t=x.getCameraImage(re);ne.sourceTexture=$t}}}}for(let Ct=0;Ct<H.length;Ct++){const Nt=F[Ct],Bt=H[Ct];Nt!==null&&Bt!==void 0&&Bt.update(Nt,lt,p||h)}rt&&rt(J,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),T=null}const Dt=new wv;Dt.setAnimationLoop(vt),this.setAnimationLoop=function(J){rt=J},this.dispose=function(){}}}const _r=new ca,vA=new Qe;function xA(o,e){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,vv(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,N,U,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),x(y,g)):g.isMeshPhongMaterial?(c(y,g),S(y,g)):g.isMeshStandardMaterial?(c(y,g),v(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),T(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,N,U):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=e.get(g),U=N.envMap,D=N.envMapRotation;U&&(y.envMap.value=U,_r.copy(D),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),y.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(_r)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,U){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=U*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function x(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function v(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const N=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function SA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,U){const D=U.program;r.uniformBlockBinding(N,D)}function p(N,U){let D=l[N.id];D===void 0&&(T(N),D=S(N),l[N.id]=D,N.addEventListener("dispose",y));const H=U.program;r.updateUBOMapping(N,H);const F=e.render.frame;c[N.id]!==F&&(v(N),c[N.id]=F)}function S(N){const U=x();N.__bindingPointIndex=U;const D=o.createBuffer(),H=N.__size,F=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function x(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const U=l[N.id],D=N.uniforms,H=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,z=D.length;F<z;F++){const Y=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=Y.length;w<C;w++){const G=Y[w];if(M(G,F,w,H)===!0){const tt=G.__offset,ft=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ht=0;ht<ft.length;ht++){const P=ft[ht],q=A(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,tt+gt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,gt),gt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,U,D,H){const F=N.value,z=U+"_"+D;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const Y=H[z];if(typeof F=="number"||typeof F=="boolean"){if(Y!==F)return H[z]=F,!0}else if(Y.equals(F)===!1)return Y.copy(F),!0}return!1}function T(N){const U=N.uniforms;let D=0;const H=16;for(let z=0,Y=U.length;z<Y;z++){const w=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,G=w.length;C<G;C++){const tt=w[C],ft=Array.isArray(tt.value)?tt.value:[tt.value];for(let gt=0,ht=ft.length;gt<ht;gt++){const P=ft[gt],q=A(P),j=D%H,Mt=j%q.boundary,Tt=j+Mt;D+=Mt,Tt!==0&&H-Tt<q.storage&&(D+=H-Tt),tt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=D,D+=q.storage}}}const F=D%H;return F>0&&(D+=H-F),N.__size=D,N.__cache={},this}function A(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function g(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class Ov{constructor(e={}){const{canvas:i=nM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const N=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ei;let F=0,z=0,Y=null,w=-1,C=null;const G=new We,tt=new We;let ft=null;const gt=new ce(0);let ht=0,P=i.width,q=i.height,j=1,Mt=null,Tt=null;const O=new We(0,0,P,q),V=new We(0,0,P,q);let rt=!1;const vt=new Kd;let Dt=!1,J=!1;const lt=new Qe,Ct=new k,Nt=new We,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function be(){return Y===null?j:1}let B=r;function re(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Hd}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",bt,!1),B===null){const Z="webgl2";if(B=re(Z,R),B===null)throw re(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,$t,kt,At,Et,Vt,he,Ae,L,E,$,pt,st,ut,Wt,Ut,Xt,Pt,St,wt,Qt,zt,Ot,le;function W(){ne=new UT(B),ne.init(),zt=new dA(B,ne),$t=new TT(B,ne,e,zt),kt=new fA(B,ne),$t.reversedDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),At=new OT(B),Et=new Jb,Vt=new hA(B,ne,kt,Et,$t,zt,At),he=new AT(D),Ae=new DT(D),L=new HM(B),Ot=new MT(B,L),E=new LT(B,L,At,Ot),$=new PT(B,E,L,At),St=new zT(B,$t,Vt),Ut=new bT(Et),pt=new Qb(D,he,Ae,ne,$t,Ot,Ut),st=new xA(D,Et),ut=new tA,Wt=new sA(ne),Pt=new yT(D,he,Ae,kt,$,M,m),Xt=new cA(D,$,$t),le=new SA(B,At,$t,kt),wt=new ET(B,ne,At),Qt=new NT(B,ne,At),At.programs=pt.programs,D.capabilities=$t,D.extensions=ne,D.properties=Et,D.renderLists=ut,D.shadowMap=Xt,D.state=kt,D.info=At}W();const Rt=new _A(D,B);this.xr=Rt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(P,q,!1))},this.getSize=function(R){return R.set(P,q)},this.setSize=function(R,Z,at=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,q=Z,i.width=Math.floor(R*j),i.height=Math.floor(Z*j),at===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(P*j,q*j).floor()},this.setDrawingBufferSize=function(R,Z,at){P=R,q=Z,j=at,i.width=Math.floor(R*at),i.height=Math.floor(Z*at),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,Z,at,ot){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,Z,at,ot),kt.viewport(G.copy(O).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(V)},this.setScissor=function(R,Z,at,ot){R.isVector4?V.set(R.x,R.y,R.z,R.w):V.set(R,Z,at,ot),kt.scissor(tt.copy(V).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){kt.setScissorTest(rt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){Tt=R},this.getClearColor=function(R){return R.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,at=!0){let ot=0;if(R){let Q=!1;if(Y!==null){const yt=Y.texture.format;Q=yt===qd||yt===Wd||yt===kd}if(Q){const yt=Y.texture.type,Ft=yt===Ni||yt===Tr||yt===Vo||yt===Xo||yt===Vd||yt===Xd,jt=Pt.getClearColor(),Gt=Pt.getClearAlpha(),te=jt.r,oe=jt.g,ee=jt.b;Ft?(T[0]=te,T[1]=oe,T[2]=ee,T[3]=Gt,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=te,A[1]=oe,A[2]=ee,A[3]=Gt,B.clearBufferiv(B.COLOR,0,A))}else ot|=B.COLOR_BUFFER_BIT}Z&&(ot|=B.DEPTH_BUFFER_BIT),at&&(ot|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Pt.dispose(),ut.dispose(),Wt.dispose(),Et.dispose(),he.dispose(),Ae.dispose(),$.dispose(),Ot.dispose(),le.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ni),Rt.removeEventListener("sessionend",Fs),Mi.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=At.autoReset,Z=Xt.enabled,at=Xt.autoUpdate,ot=Xt.needsUpdate,Q=Xt.type;W(),At.autoReset=R,Xt.enabled=Z,Xt.autoUpdate=at,Xt.needsUpdate=ot,Xt.type=Q}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const Z=R.target;Z.removeEventListener("dispose",xt),qt(Z)}function qt(R){ue(R),Et.remove(R)}function ue(R){const Z=Et.get(R).programs;Z!==void 0&&(Z.forEach(function(at){pt.releaseProgram(at)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,at,ot,Q,yt){Z===null&&(Z=Bt);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,jt=ua(R,Z,at,ot,Q);kt.setMaterial(ot,Ft);let Gt=at.index,te=1;if(ot.wireframe===!0){if(Gt=E.getWireframeAttribute(at),Gt===void 0)return;te=2}const oe=at.drawRange,ee=at.attributes.position;let ve=oe.start*te,ze=(oe.start+oe.count)*te;yt!==null&&(ve=Math.max(ve,yt.start*te),ze=Math.min(ze,(yt.start+yt.count)*te)),Gt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,Gt.count)):ee!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,ee.count));const qe=ze-ve;if(qe<0||qe===1/0)return;Ot.setup(Q,ot,jt,at,Gt);let Pe,xe=wt;if(Gt!==null&&(Pe=L.get(Gt),xe=Qt,xe.setIndex(Pe)),Q.isMesh)ot.wireframe===!0?(kt.setLineWidth(ot.wireframeLinewidth*be()),xe.setMode(B.LINES)):xe.setMode(B.TRIANGLES);else if(Q.isLine){let Zt=ot.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*be()),Q.isLineSegments?xe.setMode(B.LINES):Q.isLineLoop?xe.setMode(B.LINE_LOOP):xe.setMode(B.LINE_STRIP)}else Q.isPoints?xe.setMode(B.POINTS):Q.isSprite&&xe.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))xe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Zt=Q._multiDrawStarts,je=Q._multiDrawCounts,De=Q._multiDrawCount,Sn=Gt?L.get(Gt).bytesPerElement:1,zi=Et.get(ot).currentProgram.getUniforms();for(let gn=0;gn<De;gn++)zi.setValue(B,"_gl_DrawID",gn),xe.render(Zt[gn]/Sn,je[gn])}else if(Q.isInstancedMesh)xe.renderInstances(ve,qe,Q.count);else if(at.isInstancedBufferGeometry){const Zt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,je=Math.min(at.instanceCount,Zt);xe.renderInstances(ve,qe,je)}else xe.render(ve,qe)};function Be(R,Z,at){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Wn(R,Z,at),R.side=Wa,R.needsUpdate=!0,Wn(R,Z,at),R.side=ra):Wn(R,Z,at)}this.compile=function(R,Z,at=null){at===null&&(at=R),g=Wt.get(at),g.init(Z),U.push(g),at.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),R!==at&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const yt=Q.material;if(yt)if(Array.isArray(yt))for(let Ft=0;Ft<yt.length;Ft++){const jt=yt[Ft];Be(jt,at,Q),ot.add(jt)}else Be(yt,at,Q),ot.add(yt)}),g=U.pop(),ot},this.compileAsync=function(R,Z,at=null){const ot=this.compile(R,Z,at);return new Promise(Q=>{function yt(){if(ot.forEach(function(Ft){Et.get(Ft).currentProgram.isReady()&&ot.delete(Ft)}),ot.size===0){Q(R);return}setTimeout(yt,10)}ne.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let we=null;function Dn(R){we&&we(R)}function ni(){Mi.stop()}function Fs(){Mi.start()}const Mi=new wv;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){we=R,Rt.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Rt.addEventListener("sessionstart",ni),Rt.addEventListener("sessionend",Fs),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,Y),g=Wt.get(R,U.length),g.init(Z),U.push(g),lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),vt.setFromProjectionMatrix(lt,Li,Z.reversedDepth),J=this.localClippingEnabled,Dt=Ut.init(this.clippingPlanes,J),y=ut.get(R,N.length),y.init(),N.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Rr(yt,Z,-1/0,D.sortObjects)}Rr(R,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Mt,Tt),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&Pt.addToRenderList(y,R),this.info.render.frame++,Dt===!0&&Ut.beginShadows();const at=g.state.shadowsArray;Xt.render(at,R,Z),Dt===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(g.setupLights(),Z.isArrayCamera){const yt=Z.cameras;if(Q.length>0)for(let Ft=0,jt=yt.length;Ft<jt;Ft++){const Gt=yt[Ft];wr(ot,Q,R,Gt)}se&&Pt.render(R);for(let Ft=0,jt=yt.length;Ft<jt;Ft++){const Gt=yt[Ft];Cr(y,R,Gt,Gt.viewport)}}else Q.length>0&&wr(ot,Q,R,Z),se&&Pt.render(R),Cr(y,R,Z);Y!==null&&z===0&&(Vt.updateMultisampleRenderTarget(Y),Vt.updateRenderTargetMipmap(Y)),R.isScene===!0&&R.onAfterRender(D,R,Z),Ot.resetDefaultState(),w=-1,C=null,U.pop(),U.length>0?(g=U[U.length-1],Dt===!0&&Ut.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Rr(R,Z,at,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||vt.intersectsSprite(R)){ot&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(lt);const Ft=$.update(R),jt=R.material;jt.visible&&y.push(R,Ft,jt,at,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||vt.intersectsObject(R))){const Ft=$.update(R),jt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Nt.copy(Ft.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(lt)),Array.isArray(jt)){const Gt=Ft.groups;for(let te=0,oe=Gt.length;te<oe;te++){const ee=Gt[te],ve=jt[ee.materialIndex];ve&&ve.visible&&y.push(R,Ft,ve,at,Nt.z,ee)}}else jt.visible&&y.push(R,Ft,jt,at,Nt.z,null)}}const yt=R.children;for(let Ft=0,jt=yt.length;Ft<jt;Ft++)Rr(yt[Ft],Z,at,ot)}function Cr(R,Z,at,ot){const Q=R.opaque,yt=R.transmissive,Ft=R.transparent;g.setupLightsView(at),Dt===!0&&Ut.setGlobalState(D.clippingPlanes,at),ot&&kt.viewport(G.copy(ot)),Q.length>0&&Ya(Q,Z,at),yt.length>0&&Ya(yt,Z,at),Ft.length>0&&Ya(Ft,Z,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function wr(R,Z,at,ot){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new br(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yo:Ni,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const yt=g.state.transmissionRenderTarget[ot.id],Ft=ot.viewport||G;yt.setSize(Ft.z*D.transmissionResolutionScale,Ft.w*D.transmissionResolutionScale);const jt=D.getRenderTarget(),Gt=D.getActiveCubeFace(),te=D.getActiveMipmapLevel();D.setRenderTarget(yt),D.getClearColor(gt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),se&&Pt.render(at);const oe=D.toneMapping;D.toneMapping=Xa;const ee=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),Dt===!0&&Ut.setGlobalState(D.clippingPlanes,ot),Ya(R,at,ot),Vt.updateMultisampleRenderTarget(yt),Vt.updateRenderTargetMipmap(yt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ze=0,qe=Z.length;ze<qe;ze++){const Pe=Z[ze],xe=Pe.object,Zt=Pe.geometry,je=Pe.material,De=Pe.group;if(je.side===ra&&xe.layers.test(ot.layers)){const Sn=je.side;je.side=kn,je.needsUpdate=!0,Hs(xe,at,ot,Zt,je,De),je.side=Sn,je.needsUpdate=!0,ve=!0}}ve===!0&&(Vt.updateMultisampleRenderTarget(yt),Vt.updateRenderTargetMipmap(yt))}D.setRenderTarget(jt,Gt,te),D.setClearColor(gt,ht),ee!==void 0&&(ot.viewport=ee),D.toneMapping=oe}function Ya(R,Z,at){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,yt=R.length;Q<yt;Q++){const Ft=R[Q],jt=Ft.object,Gt=Ft.geometry,te=Ft.group;let oe=Ft.material;oe.allowOverride===!0&&ot!==null&&(oe=ot),jt.layers.test(at.layers)&&Hs(jt,Z,at,Gt,oe,te)}}function Hs(R,Z,at,ot,Q,yt){R.onBeforeRender(D,Z,at,ot,Q,yt),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,Z,at,ot,R,yt),Q.transparent===!0&&Q.side===ra&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,D.renderBufferDirect(at,Z,ot,Q,R,yt),Q.side=Wa,Q.needsUpdate=!0,D.renderBufferDirect(at,Z,ot,Q,R,yt),Q.side=ra):D.renderBufferDirect(at,Z,ot,Q,R,yt),R.onAfterRender(D,Z,at,ot,Q,yt)}function Wn(R,Z,at){Z.isScene!==!0&&(Z=Bt);const ot=Et.get(R),Q=g.state.lights,yt=g.state.shadowsArray,Ft=Q.state.version,jt=pt.getParameters(R,Q.state,yt,Z,at),Gt=pt.getProgramCacheKey(jt);let te=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?Ae:he).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",xt),te=new Map,ot.programs=te);let oe=te.get(Gt);if(oe!==void 0){if(ot.currentProgram===oe&&ot.lightsStateVersion===Ft)return xn(R,jt),oe}else jt.uniforms=pt.getUniforms(R),R.onBeforeCompile(jt,D),oe=pt.acquireProgram(jt,Gt),te.set(Gt,oe),ot.uniforms=jt.uniforms;const ee=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ee.clippingPlanes=Ut.uniform),xn(R,jt),ot.needsLights=$c(R),ot.lightsStateVersion=Ft,ot.needsLights&&(ee.ambientLightColor.value=Q.state.ambient,ee.lightProbe.value=Q.state.probe,ee.directionalLights.value=Q.state.directional,ee.directionalLightShadows.value=Q.state.directionalShadow,ee.spotLights.value=Q.state.spot,ee.spotLightShadows.value=Q.state.spotShadow,ee.rectAreaLights.value=Q.state.rectArea,ee.ltc_1.value=Q.state.rectAreaLTC1,ee.ltc_2.value=Q.state.rectAreaLTC2,ee.pointLights.value=Q.state.point,ee.pointLightShadows.value=Q.state.pointShadow,ee.hemisphereLights.value=Q.state.hemi,ee.directionalShadowMap.value=Q.state.directionalShadowMap,ee.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ee.spotShadowMap.value=Q.state.spotShadowMap,ee.spotLightMatrix.value=Q.state.spotLightMatrix,ee.spotLightMap.value=Q.state.spotLightMap,ee.pointShadowMap.value=Q.state.pointShadowMap,ee.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=oe,ot.uniformsList=null,oe}function rn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function xn(R,Z){const at=Et.get(R);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function ua(R,Z,at,ot,Q){Z.isScene!==!0&&(Z=Bt),Vt.resetTextureUnits();const yt=Z.fog,Ft=ot.isMeshStandardMaterial?Z.environment:null,jt=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:zs,Gt=(ot.isMeshStandardMaterial?Ae:he).get(ot.envMap||Ft),te=ot.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,oe=!!at.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),ee=!!at.morphAttributes.position,ve=!!at.morphAttributes.normal,ze=!!at.morphAttributes.color;let qe=Xa;ot.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Pe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,xe=Pe!==void 0?Pe.length:0,Zt=Et.get(ot),je=g.state.lights;if(Dt===!0&&(J===!0||R!==C)){const fn=R===C&&ot.id===w;Ut.setState(ot,R,fn)}let De=!1;ot.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==je.state.version||Zt.outputColorSpace!==jt||Q.isBatchedMesh&&Zt.batching===!1||!Q.isBatchedMesh&&Zt.batching===!0||Q.isBatchedMesh&&Zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Zt.instancing===!1||!Q.isInstancedMesh&&Zt.instancing===!0||Q.isSkinnedMesh&&Zt.skinning===!1||!Q.isSkinnedMesh&&Zt.skinning===!0||Q.isInstancedMesh&&Zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Zt.instancingMorph===!1&&Q.morphTexture!==null||Zt.envMap!==Gt||ot.fog===!0&&Zt.fog!==yt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ut.numPlanes||Zt.numIntersection!==Ut.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==oe||Zt.morphTargets!==ee||Zt.morphNormals!==ve||Zt.morphColors!==ze||Zt.toneMapping!==qe||Zt.morphTargetsCount!==xe)&&(De=!0):(De=!0,Zt.__version=ot.version);let Sn=Zt.currentProgram;De===!0&&(Sn=Wn(ot,Z,Q));let zi=!1,gn=!1,Za=!1;const Me=Sn.getUniforms(),An=Zt.uniforms;if(kt.useProgram(Sn.program)&&(zi=!0,gn=!0,Za=!0),ot.id!==w&&(w=ot.id,gn=!0),zi||C!==R){kt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(B,"projectionMatrix",R.projectionMatrix),Me.setValue(B,"viewMatrix",R.matrixWorldInverse);const en=Me.map.cameraPosition;en!==void 0&&en.setValue(B,Ct.setFromMatrixPosition(R.matrixWorld)),$t.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Me.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,gn=!0,Za=!0)}if(Q.isSkinnedMesh){Me.setOptional(B,Q,"bindMatrix"),Me.setOptional(B,Q,"bindMatrixInverse");const fn=Q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Me.setValue(B,"boneTexture",fn.boneTexture,Vt))}Q.isBatchedMesh&&(Me.setOptional(B,Q,"batchingTexture"),Me.setValue(B,"batchingTexture",Q._matricesTexture,Vt),Me.setOptional(B,Q,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",Q._indirectTexture,Vt),Me.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",Q._colorsTexture,Vt));const Un=at.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&St.update(Q,at,Sn),(gn||Zt.receiveShadow!==Q.receiveShadow)&&(Zt.receiveShadow=Q.receiveShadow,Me.setValue(B,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=Gt,An.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(An.envMapIntensity.value=Z.environmentIntensity),gn&&(Me.setValue(B,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Gs(An,Za),yt&&ot.fog===!0&&st.refreshFogUniforms(An,yt),st.refreshMaterialUniforms(An,ot,j,q,g.state.transmissionRenderTarget[R.id]),Hc.upload(B,rn(Zt),An,Vt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Hc.upload(B,rn(Zt),An,Vt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Me.setValue(B,"center",Q.center),Me.setValue(B,"modelViewMatrix",Q.modelViewMatrix),Me.setValue(B,"normalMatrix",Q.normalMatrix),Me.setValue(B,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const fn=ot.uniformsGroups;for(let en=0,Dr=fn.length;en<Dr;en++){const Ei=fn[en];le.update(Ei,Sn),le.bind(Ei,Sn)}}return Sn}function Gs(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function $c(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,Z,at){const ot=Et.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Et.get(R.texture).__webglTexture=Z,Et.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:at,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const at=Et.get(R);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const tu=B.createFramebuffer();this.setRenderTarget=function(R,Z=0,at=0){Y=R,F=Z,z=at;let ot=!0,Q=null,yt=!1,Ft=!1;if(R){const Gt=Et.get(R);if(Gt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(B.FRAMEBUFFER,null),ot=!1;else if(Gt.__webglFramebuffer===void 0)Vt.setupRenderTarget(R);else if(Gt.__hasExternalTextures)Vt.rebindTextures(R,Et.get(R.texture).__webglTexture,Et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Gt.__boundDepthTexture!==ee){if(ee!==null&&Et.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ft=!0);const oe=Et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(oe[Z])?Q=oe[Z][at]:Q=oe[Z],yt=!0):R.samples>0&&Vt.useMultisampledRTT(R)===!1?Q=Et.get(R).__webglMultisampledFramebuffer:Array.isArray(oe)?Q=oe[at]:Q=oe,G.copy(R.viewport),tt.copy(R.scissor),ft=R.scissorTest}else G.copy(O).multiplyScalar(j).floor(),tt.copy(V).multiplyScalar(j).floor(),ft=rt;if(at!==0&&(Q=tu),kt.bindFramebuffer(B.FRAMEBUFFER,Q)&&ot&&kt.drawBuffers(R,Q),kt.viewport(G),kt.scissor(tt),kt.setScissorTest(ft),yt){const Gt=Et.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,at)}else if(Ft){const Gt=Z;for(let te=0;te<R.textures.length;te++){const oe=Et.get(R.textures[te]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+te,oe.__webglTexture,at,Gt)}}else if(R!==null&&at!==0){const Gt=Et.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(R,Z,at,ot,Q,yt,Ft,jt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt){kt.bindFramebuffer(B.FRAMEBUFFER,Gt);try{const te=R.textures[jt],oe=te.format,ee=te.type;if(!$t.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&at>=0&&at<=R.height-Q&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+jt),B.readPixels(Z,at,ot,Q,zt.convert(oe),zt.convert(ee),yt))}finally{const te=Y!==null?Et.get(Y).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(R,Z,at,ot,Q,yt,Ft,jt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt)if(Z>=0&&Z<=R.width-ot&&at>=0&&at<=R.height-Q){kt.bindFramebuffer(B.FRAMEBUFFER,Gt);const te=R.textures[jt],oe=te.format,ee=te.type;if(!$t.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+jt),B.readPixels(Z,at,ot,Q,zt.convert(oe),zt.convert(ee),0);const ze=Y!==null?Et.get(Y).__webglFramebuffer:null;kt.bindFramebuffer(B.FRAMEBUFFER,ze);const qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await iM(B,qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(ve),B.deleteSync(qe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,at=0){const ot=Math.pow(2,-at),Q=Math.floor(R.image.width*ot),yt=Math.floor(R.image.height*ot),Ft=Z!==null?Z.x:0,jt=Z!==null?Z.y:0;Vt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,at,0,0,Ft,jt,Q,yt),kt.unbindTexture()};const Jo=B.createFramebuffer(),ja=B.createFramebuffer();this.copyTextureToTexture=function(R,Z,at=null,ot=null,Q=0,yt=null){yt===null&&(Q!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Q,Q=0):yt=0);let Ft,jt,Gt,te,oe,ee,ve,ze,qe;const Pe=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(at!==null)Ft=at.max.x-at.min.x,jt=at.max.y-at.min.y,Gt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,oe=at.min.y,ee=at.isBox3?at.min.z:0;else{const Un=Math.pow(2,-Q);Ft=Math.floor(Pe.width*Un),jt=Math.floor(Pe.height*Un),R.isDataArrayTexture?Gt=Pe.depth:R.isData3DTexture?Gt=Math.floor(Pe.depth*Un):Gt=1,te=0,oe=0,ee=0}ot!==null?(ve=ot.x,ze=ot.y,qe=ot.z):(ve=0,ze=0,qe=0);const xe=zt.convert(Z.format),Zt=zt.convert(Z.type);let je;Z.isData3DTexture?(Vt.setTexture3D(Z,0),je=B.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Vt.setTexture2DArray(Z,0),je=B.TEXTURE_2D_ARRAY):(Vt.setTexture2D(Z,0),je=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment);const De=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),zi=B.getParameter(B.UNPACK_SKIP_PIXELS),gn=B.getParameter(B.UNPACK_SKIP_ROWS),Za=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);const Me=R.isDataArrayTexture||R.isData3DTexture,An=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Un=Et.get(R),fn=Et.get(Z),en=Et.get(Un.__renderTarget),Dr=Et.get(fn.__renderTarget);kt.bindFramebuffer(B.READ_FRAMEBUFFER,en.__webglFramebuffer),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Ei=0;Ei<Gt;Ei++)Me&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(R).__webglTexture,Q,ee+Ei),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Et.get(Z).__webglTexture,yt,qe+Ei)),B.blitFramebuffer(te,oe,Ft,jt,ve,ze,Ft,jt,B.DEPTH_BUFFER_BIT,B.NEAREST);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Et.has(R)){const Un=Et.get(R),fn=Et.get(Z);kt.bindFramebuffer(B.READ_FRAMEBUFFER,Jo),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ja);for(let en=0;en<Gt;en++)Me?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,Q,ee+en):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,Q),An?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,yt,qe+en):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,yt),Q!==0?B.blitFramebuffer(te,oe,Ft,jt,ve,ze,Ft,jt,B.COLOR_BUFFER_BIT,B.NEAREST):An?B.copyTexSubImage3D(je,yt,ve,ze,qe+en,te,oe,Ft,jt):B.copyTexSubImage2D(je,yt,ve,ze,te,oe,Ft,jt);kt.bindFramebuffer(B.READ_FRAMEBUFFER,null),kt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(je,yt,ve,ze,qe,Ft,jt,Gt,xe,Zt,Pe.data):Z.isCompressedArrayTexture?B.compressedTexSubImage3D(je,yt,ve,ze,qe,Ft,jt,Gt,xe,Pe.data):B.texSubImage3D(je,yt,ve,ze,qe,Ft,jt,Gt,xe,Zt,Pe):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,yt,ve,ze,Ft,jt,xe,Zt,Pe.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,yt,ve,ze,Pe.width,Pe.height,xe,Pe.data):B.texSubImage2D(B.TEXTURE_2D,yt,ve,ze,Ft,jt,xe,Zt,Pe);B.pixelStorei(B.UNPACK_ROW_LENGTH,De),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zi),B.pixelStorei(B.UNPACK_SKIP_ROWS,gn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Za),yt===0&&Z.generateMipmaps&&B.generateMipmap(je),kt.unbindTexture()},this.initRenderTarget=function(R){Et.get(R).__webglFramebuffer===void 0&&Vt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Vt.setTextureCube(R,0):R.isData3DTexture?Vt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Vt.setTexture2DArray(R,0):Vt.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){F=0,z=0,Y=null,kt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}function yA(o,e){const i=[],r=[],c=(1+Math.sqrt(5))/2,h=[[0,1,c],[0,-1,c],[0,1,-c],[0,-1,-c],[1,c,0],[-1,c,0],[1,-c,0],[-1,-c,0],[c,0,1],[-c,0,1],[c,0,-1],[-c,0,-1]].map(v=>{const M=Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]);return new k(v[0]/M*5,v[1]/M*5,v[2]/M*5)}),d=[],m=[[0,1],[0,4],[0,5],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,5],[4,8],[4,10],[5,9],[5,11],[6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11]];h.forEach(v=>{d.push(v.clone())});const p=8;m.forEach(([v,M])=>{const T=h[v],A=h[M];for(let y=1;y<p;y++){const g=y/p,N=new k().lerpVectors(T,A,g);d.push(N)}});const x=new $d(5,0).attributes.position;for(let v=0;v<x.count;v+=3){const M=new k(x.getX(v),x.getY(v),x.getZ(v)),T=new k(x.getX(v+1),x.getY(v+1),x.getZ(v+1)),A=new k(x.getX(v+2),x.getY(v+2),x.getZ(v+2)),y=new k().add(M).add(T).add(A).divideScalar(3);d.push(y);for(let g=0;g<3;g++){const N=new k().lerpVectors(y,[M,T,A][g],.5);d.push(N)}}d.forEach(v=>{const M=new Zd({map:e,color:new ce(13426175),transparent:!0,opacity:0,blending:qa}),T=new Ev(M);T.position.copy(v),T.scale.set(0,0,0);const A=.15+Math.random()*.08;o.add(T),i.push({sprite:T,targetScale:A,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:v.clone()})});for(let v=0;v<i.length;v++)for(let M=v+1;M<i.length;M++)if(i[v].position.distanceTo(i[M].position)<2.8){const A=[i[v].position,i[M].position],y=new Pn().setFromPoints(A),g=new Qd({color:new ce(8956637),transparent:!0,opacity:0,blending:qa}),N=new Tv(y,g);o.add(N),r.push({line:N,atom1:i[v],atom2:i[M],glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.15+Math.random()*.15})}return{atoms:i,edges:r}}function zv(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const r=new zn(o);return r.needsUpdate=!0,r}function MA(){const o=Di.useRef(null),[e,i]=Di.useState(!1),r=Di.useRef(4);return Di.useEffect(()=>{if(!o.current)return;const l=new yv;l.background=new ce(132625),l.fog=new Kc(132625,.018);const c=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,0,10);const h=new Ov({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),h.setSize(window.innerWidth,window.innerHeight),h.outputColorSpace=ei,h.toneMapping=tv,h.toneMappingExposure=1.16;const d=o.current;d.appendChild(h.domElement);const m=new Cv(8699903,.24);l.add(m);const p=new Us(3108863,2.2,90,2);p.position.set(14,14,14),l.add(p);const S=new Us(6962687,1.8,90,2);S.position.set(-14,-12,14),l.add(S);const x=new Us(1689528,1.4,90,2);x.position.set(0,16,-12),l.add(x);const v=new Rs;l.add(v);const M=zv(),{atoms:T,edges:A}=yA(v,M);A.forEach((At,Et)=>{let Vt,he;if(Et<20){const Ae=Et/20*1e4;he=400+Math.random()*400,Vt=Math.max(0,Ae-he)}else{const L=1e4+(Et-20)/10*5e3;he=200+Math.random()*300,Vt=Math.max(0,L-he)}At.animationDuration=he,At.spawnOffset=Vt,At.startPosition=new k((Math.random()-.5)*40,(Math.random()-.5)*30,(Math.random()-.5)*40-20),At.endPosition=new k((At.atom1.position.x+At.atom2.position.x)/2,(At.atom1.position.y+At.atom2.position.y)/2,(At.atom1.position.z+At.atom2.position.z)/2),At.line.material.opacity=0}),T.forEach(At=>{At.energy=0,At.energyPulse=0}),A.forEach(At=>{At.energy=0,At.energyPulse=0});const y=4400,g=new Float32Array(y*3),N=new Float32Array(y*3),U=new Float32Array(y),D=new Float32Array(y),H=new Float32Array(y*3),F=new Float32Array(y*3),z=new Float32Array(y),Y=new Float32Array(y),w=new Pn;w.setAttribute("position",new dn(g,3)),w.setAttribute("color",new dn(N,3)),w.setAttribute("alpha",new dn(U,1)),w.setAttribute("size",new dn(D,1));const C=new Pn;C.setAttribute("position",new dn(H,3)),C.setAttribute("color",new dn(F,3)),C.setAttribute("alpha",new dn(z,1)),C.setAttribute("size",new dn(Y,1));const G=new Oi({uniforms:{uMap:{value:M},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:qa,vertexColors:!0}),tt=new Oi({uniforms:{uMap:{value:M},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:qa,vertexColors:!0}),ft=new S_(w,G),gt=new S_(C,tt);l.add(ft),l.add(gt);const ht=Array.from({length:y},()=>({active:!1,start:new k,control:new k,target:new k,progress:0,duration:.85+Math.random()*.55,phase:Math.random()*Math.PI*2,color:new ce,size:.018+Math.random()*.016,alpha:0,life:0,trailPosition:new k,trailColor:new ce}));let P=!1,q={x:0,y:0};const j={x:0,y:0};function Mt(At){P=!0,q={x:At.clientX,y:At.clientY}}function Tt(At){if(P){const Et=At.clientX-q.x,Vt=At.clientY-q.y;j.y+=Et*.005,j.x+=Vt*.005,q={x:At.clientX,y:At.clientY}}}function O(){P=!1}function V(At){c.position.z+=At.deltaY*.01,c.position.z=Math.max(7,Math.min(25,c.position.z)),j.y+=(At.deltaX||At.deltaY)*8e-4}let rt=0;function vt(At){if(At.touches.length===2){const Et=At.touches[0].clientX-At.touches[1].clientX,Vt=At.touches[0].clientY-At.touches[1].clientY;rt=Math.sqrt(Et*Et+Vt*Vt)}else At.touches.length===1&&(P=!0,q={x:At.touches[0].clientX,y:At.touches[0].clientY})}function Dt(At){if(At.touches.length===2){const Et=At.touches[0].clientX-At.touches[1].clientX,Vt=At.touches[0].clientY-At.touches[1].clientY,he=Math.sqrt(Et*Et+Vt*Vt),Ae=he-rt;c.position.z-=Ae*.01,c.position.z=Math.max(7,Math.min(25,c.position.z)),rt=he}else if(At.touches.length===1&&P){const Et=At.touches[0].clientX-q.x,Vt=At.touches[0].clientY-q.y;j.y+=Et*.005,j.x+=Vt*.005,q={x:At.touches[0].clientX,y:At.touches[0].clientY}}}function J(){P=!1}h.domElement.addEventListener("mousedown",Mt),h.domElement.addEventListener("mousemove",Tt),h.domElement.addEventListener("mouseup",O),h.domElement.addEventListener("wheel",V,{passive:!0}),h.domElement.addEventListener("touchstart",vt),h.domElement.addEventListener("touchmove",Dt),h.domElement.addEventListener("touchend",J);function lt(At,Et,Vt=.8){const he=new k(At,Et,Vt);he.unproject(c);const Ae=he.sub(c.position).normalize(),L=-c.position.z/Ae.z;return c.position.clone().add(Ae.multiplyScalar(L))}function Ct(At){const Et=(Math.random()-.5)*1.8,Vt=(Math.random()-.5)*1.6,he=.5+Math.random()*.8;return lt(Et,Vt,he)}function Nt(At){if(At<.18)return T[Math.floor(Math.random()*Math.max(1,Math.round(T.length*.35)))].position.clone();if(At<.5){const Vt=A[Math.floor(Math.random()*A.length)];return new k().lerpVectors(Vt.atom1.position,Vt.atom2.position,.45+Math.random()*.12)}return At<.8?T[Math.floor(Math.random()*T.length)].position.clone():T[Math.floor(Math.random()*T.length)].position.clone().add(new k((Math.random()-.5)*.15,(Math.random()-.5)*.15,(Math.random()-.5)*.15))}function Bt(At){const Et=ht.find($=>!$.active);if(!Et)return;const Vt=Ct(),he=Nt(At),Ae=new k((Math.random()-.5)*1.15,(Math.random()-.5)*1.1,(Math.random()-.5)*1.05),L=new k().copy(Vt).lerp(he,.56).add(Ae).add(new k(0,0,2.15));Et.active=!0,Et.start.copy(Vt),Et.control.copy(L),Et.target.copy(he),Et.progress=0,Et.life=0,Et.trailPosition.copy(Vt),Et.duration=1.4+Math.random()*.8,Et.phase=Math.random()*Math.PI*2;const E=[new ce("#1e4bda"),new ce("#3f7cff"),new ce("#5d34ff"),new ce("#1fc6b8"),new ce("#24caff"),new ce("#7c4cff"),new ce("#2b7cff")];Et.color.copy(E[Math.floor(Math.random()*E.length)]),Et.size=.018+Math.random()*.015,Et.alpha=.12+Math.random()*.18,Et.position=Et.start.clone()}const se=15e3,be=3500;let B=performance.now(),re=0,ne=0;function $t(){requestAnimationFrame($t);const At=(performance.now()-B)*r.current;re+=.016;const Et=Math.min(1,ne/be),Vt=.28+.72*(1-Math.abs(Et*2-1)),he=At/se*be*(.45+Vt*1.15),Ae=Math.max(0,Math.floor(he)-ne);for(let st=0;st<Ae;st+=1)ne<be&&(Bt(Et),ne+=1);v.rotation.x+=(j.x-v.rotation.x)*.05,v.rotation.y+=(j.y-v.rotation.y)*.05,P||(j.y+=.0026);const L=1+Math.sin(re*1.2)*.01+Math.sin(re*2.3+.7)*.006;v.scale.setScalar(L),p.position.x=Math.sin(re*.2)*12,p.position.z=Math.cos(re*.2)*12,S.position.x=Math.sin(re*.24+Math.PI)*12,S.position.z=Math.cos(re*.24+Math.PI)*12,x.position.y=14+Math.sin(re*.16)*2;const E=.45+.55*Math.sin(re*.4+Math.PI*.5),$=[{hue:.58,saturation:.92,lightness:.22},{hue:.62,saturation:.9,lightness:.24},{hue:.66,saturation:.88,lightness:.26},{hue:.7,saturation:.86,lightness:.25},{hue:.74,saturation:.84,lightness:.27},{hue:.46,saturation:.76,lightness:.28},{hue:.5,saturation:.86,lightness:.29},{hue:.54,saturation:.88,lightness:.3},{hue:.08,saturation:.8,lightness:.26},{hue:.15,saturation:.78,lightness:.28}],pt=(st,ut,Wt=0)=>{const Xt=re/15e3*$.length,Pt=Math.floor(Xt)%$.length,St=(Pt+1)%$.length,wt=Xt%1,Qt=$[Pt],zt=$[St],Ot=(Qt.hue*(1-wt)+zt.hue*wt)%1,le=Qt.saturation*(1-wt)+zt.saturation*wt,W=Qt.lightness*(1-wt)+zt.lightness*wt;return{hue:Ot,saturation:le,lightness:W}};T.forEach((st,ut)=>{const Wt=ut/T.length,Ut=Math.max(0,Math.min(1,(Et-Wt*.5)*2)),Xt=Ut*st.targetScale;st.sprite.scale.set(Xt,Xt,Xt),st.energy=Math.max(0,st.energy-.018),st.energyPulse=Math.max(0,st.energyPulse-.035);const Pt=pt(st.position,Ut,.2);st.sprite.material.opacity=Ut*(.38+E*.34+st.energyPulse*.16+.06*Math.sin(re*.8+ut*.08))*.96,st.sprite.material.color.setHSL(Pt.hue,Pt.saturation,Pt.lightness+st.energyPulse*.06)}),A.forEach((st,ut)=>{const Wt=At-st.spawnOffset;if(Wt>=0&&Wt<st.animationDuration){const Pt=Wt/st.animationDuration,St=Pt*Pt*(3-2*Pt),wt=st.startPosition,Qt=st.atom1.position,zt=st.atom2.position,Ot=wt,le=zt,W=Qt,Rt=new k().copy(Ot).multiplyScalar((1-St)*(1-St)).addScaledVector(le,2*(1-St)*St).addScaledVector(W,St*St),Lt=new k().copy(le).multiplyScalar((1-St)*(1-St)).addScaledVector(W,2*(1-St)*St).addScaledVector(zt,St*St),It=st.line.geometry.attributes.position.array;It[0]=Rt.x,It[1]=Rt.y,It[2]=Rt.z,It[3]=Lt.x,It[4]=Lt.y,It[5]=Lt.z,st.line.geometry.attributes.position.needsUpdate=!0,st.line.material.opacity=St*.8}else if(Wt>=st.animationDuration){const Pt=st.line.geometry.attributes.position.array;Pt[0]=st.atom1.position.x,Pt[1]=st.atom1.position.y,Pt[2]=st.atom1.position.z,Pt[3]=st.atom2.position.x,Pt[4]=st.atom2.position.y,Pt[5]=st.atom2.position.z,st.line.geometry.attributes.position.needsUpdate=!0,st.line.material.opacity=.8}const Ut=new k().lerpVectors(st.atom1.position,st.atom2.position,.5);st.energy=Math.max(0,st.energy-.015),st.energyPulse=Math.max(0,st.energyPulse-.03);const Xt=pt(Ut,1,1.2);st.line.material.color.setHSL(Xt.hue,Xt.saturation,Xt.lightness+st.energyPulse*.05)}),tt.uniforms.uTime.value=re,h.render(l,c)}$t();function kt(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",kt),()=>{window.removeEventListener("resize",kt),h.domElement.removeEventListener("mousedown",Mt),h.domElement.removeEventListener("mousemove",Tt),h.domElement.removeEventListener("mouseup",O),h.domElement.removeEventListener("wheel",V),h.domElement.removeEventListener("touchstart",vt),h.domElement.removeEventListener("touchmove",Dt),h.domElement.removeEventListener("touchend",J),d&&h.domElement.parentNode&&d.removeChild(h.domElement),M.dispose(),T.forEach(At=>At.sprite.material.dispose()),A.forEach(At=>{At.line.geometry.dispose(),At.line.material.dispose()}),w.dispose(),C.dispose(),G.dispose(),tt.dispose()}},[]),Kt.jsxs(Kt.Fragment,{children:[Kt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"}),Kt.jsx("button",{onClick:()=>{i(!e),r.current=e?4:80},className:"fixed bottom-8 right-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-colors z-50",children:e?"⏸ Normal":"⏩ 20x Fast Forward"})]})}function EA(){return Kt.jsx("div",{style:{position:"relative",minHeight:"100vh",overflow:"hidden"},children:Kt.jsx(MA,{})})}function TA(){const o=Di.useRef(null),e=Di.useRef(null);return Di.useEffect(()=>{if(!o.current)return;const i=new yv;i.background=new ce(1296),i.fog=new Kc(1296,.015),e.current=i;const r=new Xn(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=10;const l=new Ov({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=o.current;c.appendChild(l.domElement);const h=new Cv(16777215,.3);i.add(h);const d=new Us(6724095,1.5,80);d.position.set(15,15,15),i.add(d);const m=new Us(11193599,1.5,80);m.position.set(-15,-15,15),i.add(m);const p=new Us(10075135,1.5,80);p.position.set(0,15,-15),i.add(p);const S=new Rs;i.add(S);const x=zv(),v=15,M=6,T=M/(v-1),A=[],y={};for(let V=0;V<v;V++)for(let rt=0;rt<v;rt++)for(let vt=0;vt<v;vt++){const Dt=-M/2+vt*T,J=-M/2+rt*T,lt=-M/2+V*T,Ct=new k(Dt,J,lt),Nt=new Zd({map:x,color:new ce(13426175),transparent:!0,opacity:0,blending:qa}),Bt=new Ev(Nt);Bt.position.copy(Ct),Bt.scale.set(0,0,0);const se=.1+Math.random()*.06;S.add(Bt);const be={sprite:Bt,targetScale:se,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:Ct.clone(),gridX:vt,gridY:rt,gridZ:V};A.push(be),y[`${vt},${rt},${V}`]=be}const g=[],N=1.5;A.forEach(V=>{const{gridX:rt,gridY:vt,gridZ:Dt,position:J}=V;[[rt+1,vt,Dt],[rt,vt+1,Dt],[rt,vt,Dt+1]].forEach(([Ct,Nt,Bt])=>{if(Ct<v&&Nt<v&&Bt<v){const se=`${Ct},${Nt},${Bt}`,be=y[se];if(be){const B=be.position;if(J.distanceTo(B)<=N){const ne=[J,B],$t=new Pn().setFromPoints(ne),kt=new Qd({color:new ce(8956637),transparent:!0,opacity:0,blending:qa}),At=new Tv($t,kt);S.add(At),g.push({line:At,atom1:V,atom2:be,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.08+Math.random()*.1})}}}})});let U=!1,D={x:0,y:0};const H={x:0,y:0};function F(V){U=!0,D={x:V.clientX,y:V.clientY}}function z(V){if(U){const rt=V.clientX-D.x,vt=V.clientY-D.y;H.y+=rt*.005,H.x+=vt*.005,D={x:V.clientX,y:V.clientY}}}function Y(){U=!1}function w(V){r.position.z+=V.deltaY*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),H.y+=(V.deltaX||V.deltaY)*8e-4}let C=0;function G(V){if(V.touches.length===2){const rt=V.touches[0].clientX-V.touches[1].clientX,vt=V.touches[0].clientY-V.touches[1].clientY;C=Math.sqrt(rt*rt+vt*vt)}else V.touches.length===1&&(U=!0,D={x:V.touches[0].clientX,y:V.touches[0].clientY})}function tt(V){if(V.touches.length===2){const rt=V.touches[0].clientX-V.touches[1].clientX,vt=V.touches[0].clientY-V.touches[1].clientY,Dt=Math.sqrt(rt*rt+vt*vt),J=Dt-C;r.position.z-=J*.01,r.position.z=Math.max(7,Math.min(25,r.position.z)),C=Dt}else if(V.touches.length===1&&U){const rt=V.touches[0].clientX-D.x,vt=V.touches[0].clientY-D.y;H.y+=rt*.005,H.x+=vt*.005,D={x:V.touches[0].clientX,y:V.touches[0].clientY}}}function ft(){U=!1}l.domElement.addEventListener("mousedown",F),l.domElement.addEventListener("mousemove",z),l.domElement.addEventListener("mouseup",Y),l.domElement.addEventListener("wheel",w,{passive:!0}),l.domElement.addEventListener("touchstart",G),l.domElement.addEventListener("touchmove",tt),l.domElement.addEventListener("touchend",ft);let gt=0;const ht=5e3,P=Date.now();let q=0;const j=A.map((V,rt)=>rt/A.length),Mt=g.map((V,rt)=>rt/g.length);function Tt(){requestAnimationFrame(Tt);const V=Date.now()-P;gt=Math.min(V/ht,1),q+=.016,S.rotation.x+=(H.x-S.rotation.x)*.05,S.rotation.y+=(H.y-S.rotation.y)*.05,U||(H.y+=.002),A.forEach((rt,vt)=>{const Dt=j[vt],J=Math.max(0,Math.min(1,(gt-Dt*.3)/.7)),lt=J*rt.targetScale;rt.sprite.scale.set(lt,lt,lt);const Ct=Math.sin(q*rt.glimmerSpeed+rt.glimmerOffset)*.3+.7;if(rt.sprite.material.opacity=J*Ct*.95,J>.01){const Nt=Math.sin(q*.08+Dt*.6)*.3,Bt=Math.sin(q*.12+Dt*1.2+Math.PI)*.3,se=Math.sin(q*.05+Dt*.4+Math.PI*.5)*.2,be=(Nt+Bt+se+Ct*.4)%1,B=.4+Ct*.45,re=.55+Ct*.4;rt.sprite.material.color.setHSL(be,B,re)}}),g.forEach((rt,vt)=>{const Dt=rt.atom1.sprite.scale.x/rt.atom1.targetScale,J=rt.atom2.sprite.scale.x/rt.atom2.targetScale,lt=Math.min(Dt,J),Ct=Math.sin(q*rt.glimmerSpeed+rt.glimmerOffset)*.6+.6;if(rt.line.material.opacity=Math.min(1,lt*rt.baseOpacity*Ct),lt>.01){const Nt=Mt[vt],Bt=Math.sin(q*.06+Nt*.7)*.3,se=Math.sin(q*.1+Nt*1.4+Math.PI)*.3,be=Math.sin(q*.04+Nt*.3+Math.PI*.5)*.2,B=(Bt+se+be+Ct*.2)%1,re=.5+Ct*.35,ne=.5+Ct*.3;rt.line.material.color.setHSL(B,re,ne)}}),q%.1<.016&&(d.position.x=Math.sin(q*.2)*15,d.position.z=Math.cos(q*.2)*15,m.position.x=Math.sin(q*.25+Math.PI)*15,m.position.z=Math.cos(q*.25+Math.PI)*15),l.render(i,r)}Tt();function O(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",O),()=>{window.removeEventListener("resize",O),l.domElement.removeEventListener("mousedown",F),l.domElement.removeEventListener("mousemove",z),l.domElement.removeEventListener("mouseup",Y),l.domElement.removeEventListener("wheel",w),l.domElement.removeEventListener("touchstart",G),l.domElement.removeEventListener("touchmove",tt),l.domElement.removeEventListener("touchend",ft),c&&l.domElement.parentNode&&c.removeChild(l.domElement),x.dispose(),A.forEach(V=>V.sprite.material.dispose()),g.forEach(V=>{V.line.geometry.dispose(),V.line.material.dispose()})}},[]),Kt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"})}function bA(){return Kt.jsx("div",{children:Kt.jsx(TA,{})})}function AA(){const[o,e]=Di.useState("home");return Kt.jsxs("div",{children:[o==="home"&&Kt.jsx(JS,{}),Kt.jsx(uy,{route:o,setRoute:e}),Kt.jsx(cy,{}),Kt.jsxs("div",{className:"relative z-10 h-full pointer-events-auto",children:[o==="home"&&Kt.jsx(EA,{}),o==="about"&&Kt.jsx(dy,{}),o==="contact"&&Kt.jsx(fy,{}),o==="test"&&Kt.jsx(bA,{})]})]})}QS.createRoot(document.getElementById("root")).render(Kt.jsx(Ga.StrictMode,{children:Kt.jsx(AA,{})}));
