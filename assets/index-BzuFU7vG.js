(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function GS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lh={exports:{}},Lo={};var B0;function VS(){if(B0)return Lo;B0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var I0;function XS(){return I0||(I0=1,lh.exports=VS()),lh.exports}var Xt=XS(),ch={exports:{}},No={},uh={exports:{}},fh={};var F0;function kS(){return F0||(F0=1,(function(o){function e(P,Y){var q=P.length;P.push(Y);t:for(;0<q;){var St=q-1>>>1,bt=P[St];if(0<l(bt,Y))P[St]=Y,P[q]=bt,q=St;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Y=P[0],q=P.pop();if(q!==Y){P[0]=q;t:for(var St=0,bt=P.length,O=bt>>>1;St<O;){var et=2*(St+1)-1,xt=P[et],Ct=et+1,Pt=P[Ct];if(0>l(xt,q))Ct<bt&&0>l(Pt,xt)?(P[St]=Pt,P[Ct]=q,St=Ct):(P[St]=xt,P[et]=q,St=et);else if(Ct<bt&&0>l(Pt,q))P[St]=Pt,P[Ct]=q,St=Ct;else break t}}return Y}function l(P,Y){var q=P.sortIndex-Y.sortIndex;return q!==0?q:P.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,y=3,M=!1,T=!1,A=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=P)r(p),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=i(p)}}function H(P){if(A=!1,D(P),!T)if(i(m)!==null)T=!0,F||(F=!0,J());else{var Y=i(p);Y!==null&&ht(H,Y.startTime-P)}}var F=!1,z=-1,W=5,w=-1;function C(){return x?!0:!(o.unstable_now()-w<W)}function G(){if(x=!1,F){var P=o.unstable_now();w=P;var Y=!0;try{t:{T=!1,A&&(A=!1,N(z),z=-1),M=!0;var q=y;try{e:{for(D(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var St=v.callback;if(typeof St=="function"){v.callback=null,y=v.priorityLevel;var bt=St(v.expirationTime<=P);if(P=o.unstable_now(),typeof bt=="function"){v.callback=bt,D(P),Y=!0;break e}v===i(m)&&r(m),D(P)}else r(m);v=i(m)}if(v!==null)Y=!0;else{var O=i(p);O!==null&&ht(H,O.startTime-P),Y=!1}}break t}finally{v=null,y=q,M=!1}Y=void 0}}finally{Y?J():F=!1}}}var J;if(typeof L=="function")J=function(){L(G)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=G,J=function(){gt.postMessage(null)}}else J=function(){_(G,0)};function ht(P,Y){z=_(function(){P(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(P){switch(y){case 1:case 2:case 3:var Y=3;break;default:Y=y}var q=y;y=Y;try{return P()}finally{y=q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=y;y=P;try{return Y()}finally{y=q}},o.unstable_scheduleCallback=function(P,Y,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,P){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=q+bt,P={id:S++,callback:Y,priorityLevel:P,startTime:q,expirationTime:bt,sortIndex:-1},q>St?(P.sortIndex=q,e(p,P),i(m)===null&&P===i(p)&&(A?(N(z),z=-1):A=!0,ht(H,q-St))):(P.sortIndex=bt,e(m,P),T||M||(T=!0,F||(F=!0,J()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Y=y;return function(){var q=y;y=Y;try{return P.apply(this,arguments)}finally{y=q}}}})(fh)),fh}var H0;function WS(){return H0||(H0=1,uh.exports=kS()),uh.exports}var hh={exports:{}},ue={};var G0;function qS(){if(G0)return ue;G0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function _(O,et,xt){this.props=O,this.context=et,this.refs=x,this.updater=xt||T}_.prototype.isReactComponent={},_.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function N(){}N.prototype=_.prototype;function L(O,et,xt){this.props=O,this.context=et,this.refs=x,this.updater=xt||T}var D=L.prototype=new N;D.constructor=L,A(D,_.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(O,et,xt){var Ct=xt.ref;return{$$typeof:o,type:O,key:et,ref:Ct!==void 0?Ct:null,props:xt}}function C(O,et){return w(O.type,et,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function J(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(xt){return et[xt]})}var ut=/\/+/g;function gt(O,et){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):et.toString(36)}function ht(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,et,xt,Ct,Pt){var nt=typeof O;(nt==="undefined"||nt==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case o:case e:ct=!0;break;case S:return ct=O._init,P(ct(O._payload),et,xt,Ct,Pt)}}if(ct)return Pt=Pt(O),ct=Ct===""?"."+gt(O,0):Ct,H(Pt)?(xt="",ct!=null&&(xt=ct.replace(ut,"$&/")+"/"),P(Pt,et,xt,"",function(Kt){return Kt})):Pt!=null&&(G(Pt)&&(Pt=C(Pt,xt+(Pt.key==null||O&&O.key===Pt.key?"":(""+Pt.key).replace(ut,"$&/")+"/")+ct)),et.push(Pt)),1;ct=0;var Ut=Ct===""?".":Ct+":";if(H(O))for(var Vt=0;Vt<O.length;Vt++)Ct=O[Vt],nt=Ut+gt(Ct,Vt),ct+=P(Ct,et,xt,nt,Pt);else if(Vt=M(O),typeof Vt=="function")for(O=Vt.call(O),Vt=0;!(Ct=O.next()).done;)Ct=Ct.value,nt=Ut+gt(Ct,Vt++),ct+=P(Ct,et,xt,nt,Pt);else if(nt==="object"){if(typeof O.then=="function")return P(ht(O),et,xt,Ct,Pt);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ct}function Y(O,et,xt){if(O==null)return O;var Ct=[],Pt=0;return P(O,Ct,"","",function(nt){return et.call(xt,nt,Pt++)}),Ct}function q(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(xt){(O._status===0||O._status===-1)&&(O._status=1,O._result=xt)},function(xt){(O._status===0||O._status===-1)&&(O._status=2,O._result=xt)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var St=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},bt={map:Y,forEach:function(O,et,xt){Y(O,function(){et.apply(this,arguments)},xt)},count:function(O){var et=0;return Y(O,function(){et++}),et},toArray:function(O){return Y(O,function(et){return et})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ue.Activity=v,ue.Children=bt,ue.Component=_,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=L,ue.StrictMode=r,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ue.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ue.cache=function(O){return function(){return O.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(O,et,xt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ct=A({},O.props),Pt=O.key;if(et!=null)for(nt in et.key!==void 0&&(Pt=""+et.key),et)!W.call(et,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&et.ref===void 0||(Ct[nt]=et[nt]);var nt=arguments.length-2;if(nt===1)Ct.children=xt;else if(1<nt){for(var ct=Array(nt),Ut=0;Ut<nt;Ut++)ct[Ut]=arguments[Ut+2];Ct.children=ct}return w(O.type,Pt,Ct)},ue.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ue.createElement=function(O,et,xt){var Ct,Pt={},nt=null;if(et!=null)for(Ct in et.key!==void 0&&(nt=""+et.key),et)W.call(et,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Pt[Ct]=et[Ct]);var ct=arguments.length-2;if(ct===1)Pt.children=xt;else if(1<ct){for(var Ut=Array(ct),Vt=0;Vt<ct;Vt++)Ut[Vt]=arguments[Vt+2];Pt.children=Ut}if(O&&O.defaultProps)for(Ct in ct=O.defaultProps,ct)Pt[Ct]===void 0&&(Pt[Ct]=ct[Ct]);return w(O,nt,Pt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(O){return{$$typeof:d,render:O}},ue.isValidElement=G,ue.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:q}},ue.memo=function(O,et){return{$$typeof:p,type:O,compare:et===void 0?null:et}},ue.startTransition=function(O){var et=z.T,xt={};z.T=xt;try{var Ct=O(),Pt=z.S;Pt!==null&&Pt(xt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(F,St)}catch(nt){St(nt)}finally{et!==null&&xt.types!==null&&(et.types=xt.types),z.T=et}},ue.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ue.use=function(O){return z.H.use(O)},ue.useActionState=function(O,et,xt){return z.H.useActionState(O,et,xt)},ue.useCallback=function(O,et){return z.H.useCallback(O,et)},ue.useContext=function(O){return z.H.useContext(O)},ue.useDebugValue=function(){},ue.useDeferredValue=function(O,et){return z.H.useDeferredValue(O,et)},ue.useEffect=function(O,et){return z.H.useEffect(O,et)},ue.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ue.useId=function(){return z.H.useId()},ue.useImperativeHandle=function(O,et,xt){return z.H.useImperativeHandle(O,et,xt)},ue.useInsertionEffect=function(O,et){return z.H.useInsertionEffect(O,et)},ue.useLayoutEffect=function(O,et){return z.H.useLayoutEffect(O,et)},ue.useMemo=function(O,et){return z.H.useMemo(O,et)},ue.useOptimistic=function(O,et){return z.H.useOptimistic(O,et)},ue.useReducer=function(O,et,xt){return z.H.useReducer(O,et,xt)},ue.useRef=function(O){return z.H.useRef(O)},ue.useState=function(O){return z.H.useState(O)},ue.useSyncExternalStore=function(O,et,xt){return z.H.useSyncExternalStore(O,et,xt)},ue.useTransition=function(){return z.H.useTransition()},ue.version="19.2.0",ue}var V0;function Gd(){return V0||(V0=1,hh.exports=qS()),hh.exports}var dh={exports:{}},wn={};var X0;function YS(){if(X0)return wn;X0=1;var o=Gd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},wn.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var k0;function jS(){if(k0)return dh.exports;k0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dh.exports=YS(),dh.exports}var W0;function ZS(){if(W0)return No;W0=1;var o=WS(),e=Gd(),i=jS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,s=f;break}if(b===s){g=!0,s=u,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=u;break}if(b===s){g=!0,s=f,a=u;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ut?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var ht=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],bt=-1;function O(t){return{current:t}}function et(t){0>bt||(t.current=St[bt],St[bt]=null,bt--)}function xt(t,n){bt++,St[bt]=t.current,t.current=n}var Ct=O(null),Pt=O(null),nt=O(null),ct=O(null);function Ut(t,n){switch(xt(nt,n),xt(Pt,t),xt(Ct,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?s0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=s0(n),t=o0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(Ct),xt(Ct,t)}function Vt(){et(Ct),et(Pt),et(nt)}function Kt(t){t.memoizedState!==null&&xt(ct,t);var n=Ct.current,a=o0(n,t.type);n!==a&&(xt(Pt,t),xt(Ct,a))}function de(t){Pt.current===t&&(et(Ct),et(Pt)),ct.current===t&&(et(ct),Co._currentValue=q)}var Qe,I;function ce(t){if(Qe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qe=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qe+t+I}var ae=!1;function ne(t,n){if(!t||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var it=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){it=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){it=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&it&&typeof ot.stack=="string")return[ot.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var B=g.split(`
`),tt=b.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===tt.length)for(s=B.length-1,u=tt.length-1;1<=s&&0<=u&&B[s]!==tt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==tt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==tt[u]){var ft=`
`+B[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ce(a):""}function Yt(t,n){switch(t.tag){case 26:case 27:case 5:return ce(t.type);case 16:return ce("Lazy");case 13:return t.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return ne(t.type,!1);case 11:return ne(t.type.render,!1);case 1:return ne(t.type,!0);case 31:return ce("Activity");default:return""}}function At(t){try{var n="",a=null;do n+=Yt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Et=Object.prototype.hasOwnProperty,Ht=o.unstable_scheduleCallback,fe=o.unstable_cancelCallback,be=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,at=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,kt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Gt=o.log,Nt=o.unstable_setDisableYieldValue,vt=null,Dt=null;function Qt(t){if(typeof Gt=="function"&&Nt(t),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(vt,t)}catch{}}var Ot=Math.clz32?Math.clz32:V,Lt=Math.log,ie=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Lt(t)/ie|0)|0}var Mt=256,wt=262144,zt=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?u=Tt(s):(g&=b,g!==0?u=Tt(g):a||(a=b&~t,a!==0&&(u=Tt(a))))):(b=s&~f,b!==0?u=Tt(b):g!==0?u=Tt(g):a||(a=s&~t,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function oe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ai(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;b[ft]=0,B[ft]=-1;var it=tt[ft];if(it!==null)for(tt[ft]=null,ft=0;ft<it.length;ft++){var ot=it[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&Gs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Gs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ot(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function bi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ot(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Dr(t,n){var a=n&-n;return a=(a&42)!==0?1:Ur(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ur(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ja(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:D0(t.type))}function Vs(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var qn=Math.random().toString(36).slice(2),sn="__reactFiber$"+qn,xn="__reactProps$"+qn,ha="__reactContainer$"+qn,Xs="__reactEvents$"+qn,eu="__reactListeners$"+qn,nu="__reactHandles$"+qn,el="__reactResources$"+qn,Za="__reactMarker$"+qn;function R(t){delete t[sn],delete t[xn],delete t[Xs],delete t[eu],delete t[nu]}function j(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ha]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=p0(t);t!==null;){if(a=t[sn])return a;t=p0(t)}return n}t=a,a=t.parentNode}return null}function rt(t){if(t=t[sn]||t[ha]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function K(t){var n=t[el];return n||(n=t[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(t){t[Za]=!0}var Bt=new Set,jt={};function Ft(t,n){$t(t,n),$t(t+"Capture",n)}function $t(t,n){for(jt[t]=n,t=0;t<n.length;t++)Bt.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ve={};function Oe(t){return Et.call(ve,t)?!0:Et.call(te,t)?!1:se.test(t)?ve[t]=!0:(te[t]=!0,!1)}function We(t,n,a){if(Oe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ye(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ye(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function we(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Mn(t){if(!t._valueTracker){var n=Ye(t)?"checked":"value";t._valueTracker=we(t,n,""+t[n])}}function Bi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ye(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function vn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ka=/[\n"\\]/g;function Me(t){return t.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(t,n,a,s,u,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?hn(t,g,Zt(n)):a!=null?hn(t,g,Zt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Zt(b):t.removeAttribute("name")}function Nn(t,n,a,s,u,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Mn(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Mn(t)}function hn(t,n,a){n==="number"&&vn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function nn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Nr(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function Ai(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Mn(t)}function Or(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Pv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ap(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ip(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ip(t,f,n[f])}function iu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(t){return Iv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var au=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Pr=null;function rp(t){var n=rt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));Cn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Bi(s)}break t;case"textarea":Nr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(t,!!a.multiple,n,!1)}}}var su=!1;function sp(t,n,a){if(su)return t(n,a);su=!0;try{var s=t(n);return s}finally{if(su=!1,(zr!==null||Pr!==null)&&(Xl(),zr&&(n=zr,t=Pr,Pr=zr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function ks(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Fi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{ou=!1}var da=null,lu=null,il=null;function op(){if(il)return il;var t,n=lu,a=n.length,s,u="value"in da?da.value:da.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return il=u.slice(t,1<s?1-s:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function lp(){return!1}function In(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:lp,this.isPropagationStopped=lp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=In(Qa),qs=v({},Qa,{view:0,detail:0}),Fv=In(qs),cu,uu,Ys,ol=v({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(cu=t.screenX-Ys.screenX,uu=t.screenY-Ys.screenY):uu=cu=0,Ys=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),cp=In(ol),Hv=v({},ol,{dataTransfer:0}),Gv=In(Hv),Vv=v({},qs,{relatedTarget:0}),fu=In(Vv),Xv=v({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),kv=In(Xv),Wv=v({},Qa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=In(Wv),Yv=v({},Qa,{data:0}),up=In(Yv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function hu(){return Qv}var Jv=v({},qs,{key:function(t){if(t.key){var n=jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=In(Jv),ty=v({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=In(ty),ey=v({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),ny=In(ey),iy=v({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=In(iy),ry=v({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=In(ry),oy=v({},Qa,{newState:0,oldState:0}),ly=In(oy),cy=[9,13,27,32],du=Fi&&"CompositionEvent"in window,js=null;Fi&&"documentMode"in document&&(js=document.documentMode);var uy=Fi&&"TextEvent"in window&&!js,hp=Fi&&(!du||js&&8<js&&11>=js),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return cy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function fy(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function hy(t,n){if(Br)return t==="compositionend"||!du&&mp(t,n)?(t=op(),il=lu=da=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dy[t.type]:n==="textarea"}function vp(t,n,a,s){zr?Pr?Pr.push(s):Pr=[s]:zr=s,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Zs=null,Ks=null;function py(t){t0(t,0)}function ll(t){var n=st(t);if(Bi(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(Fi){var pu;if(Fi){var mu="oninput"in document;if(!mu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),mu=typeof xp.oninput=="function"}pu=mu}else pu=!1;Sp=pu&&(!document.documentMode||9<document.documentMode)}function Mp(){Zs&&(Zs.detachEvent("onpropertychange",Ep),Ks=Zs=null)}function Ep(t){if(t.propertyName==="value"&&ll(Ks)){var n=[];vp(n,Ks,t,ru(t)),sp(py,n)}}function my(t,n,a){t==="focusin"?(Mp(),Zs=n,Ks=a,Zs.attachEvent("onpropertychange",Ep)):t==="focusout"&&Mp()}function gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(Ks)}function _y(t,n){if(t==="click")return ll(n)}function vy(t,n){if(t==="input"||t==="change")return ll(n)}function yy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:yy;function Qs(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Et.call(n,u)||!Yn(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,n){var a=Tp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=vn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=vn(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Sy=Fi&&"documentMode"in document&&11>=document.documentMode,Ir=null,_u=null,Js=null,vu=!1;function Cp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Ir==null||Ir!==vn(s)||(s=Ir,"selectionStart"in s&&gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Js&&Qs(Js,s)||(Js=s,s=Kl(_u,"onSelect"),0<s.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ir)))}function Ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Fr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},yu={},wp={};Fi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function $a(t){if(yu[t])return yu[t];if(!Fr[t])return t;var n=Fr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return yu[t]=n[a];return t}var Dp=$a("animationend"),Up=$a("animationiteration"),Lp=$a("animationstart"),xy=$a("transitionrun"),My=$a("transitionstart"),Ey=$a("transitioncancel"),Np=$a("transitionend"),Op=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function gi(t,n){Op.set(t,n),Ft(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],Hr=0,xu=0;function ul(){for(var t=Hr,n=xu=Hr=0;n<t;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&zp(a,u,f)}}function fl(t,n,a,s){ri[Hr++]=t,ri[Hr++]=n,ri[Hr++]=a,ri[Hr++]=s,xu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Mu(t,n,a,s){return fl(t,n,a,s),hl(t)}function tr(t,n){return fl(t,null,null,n),hl(t)}function zp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ot(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function hl(t){if(50<xo)throw xo=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function Ty(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,s){return new Ty(t,n,a,s)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Eu(t)&&(g=1);else if(typeof t=="string")g=wS(t,a,Ct.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=jn(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return er(a.children,u,f,n);case x:g=8,u|=24;break;case _:return t=jn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case H:return t=jn(13,a,n,u),t.elementType=H,t.lanes=f,t;case F:return t=jn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case N:g=9;break t;case D:g=11;break t;case z:g=14;break t;case W:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=jn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function er(t,n,a,s){return t=jn(7,t,s,n),t.lanes=a,t}function Tu(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Bp(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function bu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ip=new WeakMap;function si(t,n){if(typeof t=="object"&&t!==null){var a=Ip.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},Ip.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var Vr=[],Xr=0,pl=null,$s=0,oi=[],li=0,pa=null,Ri=1,Ci="";function Gi(t,n){Vr[Xr++]=$s,Vr[Xr++]=pl,pl=t,$s=n}function Fp(t,n,a){oi[li++]=Ri,oi[li++]=Ci,oi[li++]=pa,pa=t;var s=Ri;t=Ci;var u=32-Ot(s)-1;s&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ri=1<<32-Ot(n)+u|a<<u|s,Ci=f+t}else Ri=1<<f|a<<u|s,Ci=t}function Au(t){t.return!==null&&(Gi(t,1),Fp(t,1,0))}function Ru(t){for(;t===pl;)pl=Vr[--Xr],Vr[Xr]=null,$s=Vr[--Xr],Vr[Xr]=null;for(;t===pa;)pa=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null,Ri=oi[--li],oi[li]=null}function Hp(t,n){oi[li++]=Ri,oi[li++]=Ci,oi[li++]=pa,Ri=n.id,Ci=n.overflow,pa=t}var En=null,je=null,Ae=!1,ma=null,ci=!1,Cu=Error(r(519));function ga(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(si(n,t)),Cu}function Gp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[sn]=t,n[xn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)xe(Eo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Nn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ai(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||a0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||ga(t,!0)}function Vp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:En=En.return}}function kr(t){if(t!==En)return!1;if(!Ae)return Vp(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&je&&ga(t),Vp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=d0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=d0(t)}else n===27?(n=je,Da(t.type)?(t=Jf,Jf=null,je=t):je=n):je=En?fi(t.stateNode.nextSibling):null;return!0}function nr(){je=En=null,Ae=!1}function wu(){var t=ma;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ma=null),t}function to(t){ma===null?ma=[t]:ma.push(t)}var Du=O(null),ir=null,Vi=null;function _a(t,n,a){xt(Du,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Du.current,et(Du)}function Uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Uu(f.return,a,t),s||(g=null);break t}f=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Uu(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Wr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=u.type;Yn(u.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(u===ct.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Lu(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){ir=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Xp(ir,t)}function gl(t,n){return ir===null&&ar(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(t===null)throw Error(r(308));Vi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Vi=Vi.next=n;return a}var by=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ay=o.unstable_scheduleCallback,Ry=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nu(){return{controller:new by,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&Ay(Ry,function(){t.controller.abort()})}var no=null,Ou=0,qr=0,Yr=null;function Cy(t,n){if(no===null){var a=no=[];Ou=0,qr=If(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ou++,n.then(kp,kp),n}function kp(){if(--Ou===0&&no!==null){Yr!==null&&(Yr.status="fulfilled");var t=no;no=null,qr=0,Yr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function wy(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Wp=P.S;P.S=function(t,n){Cg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Cy(t,n),Wp!==null&&Wp(t,n)};var rr=O(null);function zu(){var t=rr.current;return t!==null?t:qe.pooledCache}function _l(t,n){n===null?xt(rr,rr.current):xt(rr,n.pool)}function qp(){var t=zu();return t===null?null:{parent:on._currentValue,pool:t}}var jr=Error(r(460)),Pu=Error(r(474)),vl=Error(r(542)),yl={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw or=n,jr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,jr):a}}var or=null;function Zp(){if(or===null)throw Error(r(459));var t=or;return or=null,t}function Kp(t){if(t===jr||t===vl)throw Error(r(483))}var Zr=null,io=0;function Sl(t){var n=io;return io+=1,Zr===null&&(Zr=[]),jp(Zr,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function xl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qp(t){function n(Z,X){if(t){var $=Z.deletions;$===null?(Z.deletions=[X],Z.flags|=16):$.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function s(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Hi(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<X?(Z.flags|=67108866,X):$):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,X,$,pt){return X===null||X.tag!==6?(X=Tu($,Z.mode,pt),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function B(Z,X,$,pt){var ee=$.type;return ee===A?ft(Z,X,$.props.children,pt,$.key):X!==null&&(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&sr(ee)===X.type)?(X=u(X,$.props),ao(X,$),X.return=Z,X):(X=dl($.type,$.key,$.props,null,Z.mode,pt),ao(X,$),X.return=Z,X)}function tt(Z,X,$,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=bu($,Z.mode,pt),X.return=Z,X):(X=u(X,$.children||[]),X.return=Z,X)}function ft(Z,X,$,pt,ee){return X===null||X.tag!==7?(X=er($,Z.mode,pt,ee),X.return=Z,X):(X=u(X,$),X.return=Z,X)}function mt(Z,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tu(""+X,Z.mode,$),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return $=dl(X.type,X.key,X.props,null,Z.mode,$),ao($,X),$.return=Z,$;case T:return X=bu(X,Z.mode,$),X.return=Z,X;case W:return X=sr(X),mt(Z,X,$)}if(ht(X)||J(X))return X=er(X,Z.mode,$,null),X.return=Z,X;if(typeof X.then=="function")return mt(Z,Sl(X),$);if(X.$$typeof===L)return mt(Z,gl(Z,X),$);xl(Z,X)}return null}function it(Z,X,$,pt){var ee=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ee!==null?null:b(Z,X,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===ee?B(Z,X,$,pt):null;case T:return $.key===ee?tt(Z,X,$,pt):null;case W:return $=sr($),it(Z,X,$,pt)}if(ht($)||J($))return ee!==null?null:ft(Z,X,$,pt,null);if(typeof $.then=="function")return it(Z,X,Sl($),pt);if($.$$typeof===L)return it(Z,X,gl(Z,$),pt);xl(Z,$)}return null}function ot(Z,X,$,pt,ee){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get($)||null,b(X,Z,""+pt,ee);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return Z=Z.get(pt.key===null?$:pt.key)||null,B(X,Z,pt,ee);case T:return Z=Z.get(pt.key===null?$:pt.key)||null,tt(X,Z,pt,ee);case W:return pt=sr(pt),ot(Z,X,$,pt,ee)}if(ht(pt)||J(pt))return Z=Z.get($)||null,ft(X,Z,pt,ee,null);if(typeof pt.then=="function")return ot(Z,X,$,Sl(pt),ee);if(pt.$$typeof===L)return ot(Z,X,$,gl(X,pt),ee);xl(X,pt)}return null}function qt(Z,X,$,pt){for(var ee=null,De=null,Jt=X,pe=X=0,Te=null;Jt!==null&&pe<$.length;pe++){Jt.index>pe?(Te=Jt,Jt=null):Te=Jt.sibling;var Ue=it(Z,Jt,$[pe],pt);if(Ue===null){Jt===null&&(Jt=Te);break}t&&Jt&&Ue.alternate===null&&n(Z,Jt),X=f(Ue,X,pe),De===null?ee=Ue:De.sibling=Ue,De=Ue,Jt=Te}if(pe===$.length)return a(Z,Jt),Ae&&Gi(Z,pe),ee;if(Jt===null){for(;pe<$.length;pe++)Jt=mt(Z,$[pe],pt),Jt!==null&&(X=f(Jt,X,pe),De===null?ee=Jt:De.sibling=Jt,De=Jt);return Ae&&Gi(Z,pe),ee}for(Jt=s(Jt);pe<$.length;pe++)Te=ot(Jt,Z,pe,$[pe],pt),Te!==null&&(t&&Te.alternate!==null&&Jt.delete(Te.key===null?pe:Te.key),X=f(Te,X,pe),De===null?ee=Te:De.sibling=Te,De=Te);return t&&Jt.forEach(function(za){return n(Z,za)}),Ae&&Gi(Z,pe),ee}function re(Z,X,$,pt){if($==null)throw Error(r(151));for(var ee=null,De=null,Jt=X,pe=X=0,Te=null,Ue=$.next();Jt!==null&&!Ue.done;pe++,Ue=$.next()){Jt.index>pe?(Te=Jt,Jt=null):Te=Jt.sibling;var za=it(Z,Jt,Ue.value,pt);if(za===null){Jt===null&&(Jt=Te);break}t&&Jt&&za.alternate===null&&n(Z,Jt),X=f(za,X,pe),De===null?ee=za:De.sibling=za,De=za,Jt=Te}if(Ue.done)return a(Z,Jt),Ae&&Gi(Z,pe),ee;if(Jt===null){for(;!Ue.done;pe++,Ue=$.next())Ue=mt(Z,Ue.value,pt),Ue!==null&&(X=f(Ue,X,pe),De===null?ee=Ue:De.sibling=Ue,De=Ue);return Ae&&Gi(Z,pe),ee}for(Jt=s(Jt);!Ue.done;pe++,Ue=$.next())Ue=ot(Jt,Z,pe,Ue.value,pt),Ue!==null&&(t&&Ue.alternate!==null&&Jt.delete(Ue.key===null?pe:Ue.key),X=f(Ue,X,pe),De===null?ee=Ue:De.sibling=Ue,De=Ue);return t&&Jt.forEach(function(HS){return n(Z,HS)}),Ae&&Gi(Z,pe),ee}function Ge(Z,X,$,pt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var ee=$.key;X!==null;){if(X.key===ee){if(ee=$.type,ee===A){if(X.tag===7){a(Z,X.sibling),pt=u(X,$.props.children),pt.return=Z,Z=pt;break t}}else if(X.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===W&&sr(ee)===X.type){a(Z,X.sibling),pt=u(X,$.props),ao(pt,$),pt.return=Z,Z=pt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}$.type===A?(pt=er($.props.children,Z.mode,pt,$.key),pt.return=Z,Z=pt):(pt=dl($.type,$.key,$.props,null,Z.mode,pt),ao(pt,$),pt.return=Z,Z=pt)}return g(Z);case T:t:{for(ee=$.key;X!==null;){if(X.key===ee)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Z,X.sibling),pt=u(X,$.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}pt=bu($,Z.mode,pt),pt.return=Z,Z=pt}return g(Z);case W:return $=sr($),Ge(Z,X,$,pt)}if(ht($))return qt(Z,X,$,pt);if(J($)){if(ee=J($),typeof ee!="function")throw Error(r(150));return $=ee.call($),re(Z,X,$,pt)}if(typeof $.then=="function")return Ge(Z,X,Sl($),pt);if($.$$typeof===L)return Ge(Z,X,gl(Z,$),pt);xl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Z,X.sibling),pt=u(X,$),pt.return=Z,Z=pt):(a(Z,X),pt=Tu($,Z.mode,pt),pt.return=Z,Z=pt),g(Z)):a(Z,X)}return function(Z,X,$,pt){try{io=0;var ee=Ge(Z,X,$,pt);return Zr=null,ee}catch(Jt){if(Jt===jr||Jt===vl)throw Jt;var De=jn(29,Jt,null,Z.mode);return De.lanes=pt,De.return=Z,De}}}var lr=Qp(!0),Jp=Qp(!1),va=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=hl(t),zp(t,null,a),n}return fl(t,s,n,a),hl(t)}function ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bi(t,a)}}function Fu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function so(){if(Hu){var t=Yr;if(t!==null)throw t}}function oo(t,n,a,s){Hu=!1;var u=t.updateQueue;va=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,tt=B.next;B.next=null,g===null?f=tt:g.next=tt,g=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==g&&(b===null?ft.firstBaseUpdate=tt:b.next=tt,ft.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;g=0,ft=tt=B=null,b=f;do{var it=b.lane&-536870913,ot=it!==b.lane;if(ot?(Ee&it)===it:(s&it)===it){it!==0&&it===qr&&(Hu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var qt=t,re=b;it=n;var Ge=a;switch(re.tag){case 1:if(qt=re.payload,typeof qt=="function"){mt=qt.call(Ge,mt,it);break t}mt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=re.payload,it=typeof qt=="function"?qt.call(Ge,mt,it):qt,it==null)break t;mt=v({},mt,it);break t;case 2:va=!0}}it=b.callback,it!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[it]:ot.push(it))}else ot={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(tt=ft=ot,B=mt):ft=ft.next=ot,g|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),ba|=g,t.lanes=g,t.memoizedState=mt}}function $p(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$p(a[t],n)}var Kr=O(null),Ml=O(0);function em(t,n){t=Ji,xt(Ml,t),xt(Kr,n),Ji=t|n.baseLanes}function Gu(){xt(Ml,Ji),xt(Kr,Kr.current)}function Vu(){Ji=Ml.current,et(Kr),et(Ml)}var Zn=O(null),ui=null;function xa(t){var n=t.alternate;xt(an,an.current&1),xt(Zn,t),ui===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(ui=t)}function Xu(t){xt(an,an.current),xt(Zn,t),ui===null&&(ui=t)}function nm(t){t.tag===22?(xt(an,an.current),xt(Zn,t),ui===null&&(ui=t)):Ma()}function Ma(){xt(an,an.current),xt(Zn,Zn.current)}function Kn(t){et(Zn),ui===t&&(ui=null),et(an)}var an=O(0);function El(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,he=null,Fe=null,ln=null,Tl=!1,Qr=!1,cr=!1,bl=0,lo=0,Jr=null,Dy=0;function tn(){throw Error(r(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Wu(t,n,a,s,u,f){return ki=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Fm:of,cr=!1,f=a(s,u),cr=!1,Qr&&(f=am(n,a,s,u)),im(t),f}function im(t){P.H=fo;var n=Fe!==null&&Fe.next!==null;if(ki=0,ln=Fe=he=null,Tl=!1,lo=0,Jr=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&ml(t)&&(cn=!0))}function am(t,n,a,s){he=t;var u=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,ln=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Hm,f=n(a,s)}while(Qr);return f}function Uy(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(he.flags|=1024),n}function qu(){var t=bl!==0;return bl=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ju(t){if(Tl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Tl=!1}ki=0,ln=Fe=he=null,Qr=!1,lo=bl=0,Jr=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?he.memoizedState=ln=t:ln=ln.next=t,ln}function rn(){if(Fe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=ln===null?he.memoizedState:ln.next;if(n!==null)ln=n,Fe=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ln===null?he.memoizedState=ln=t:ln=ln.next=t}return ln}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Jr===null&&(Jr=[]),t=jp(Jr,t,n),n=he,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Fm:of),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===L)return Tn(t)}throw Error(r(438,String(t)))}function Zu(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Wi(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=rn();return Ku(n,Fe,t)}function Ku(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=g=null,B=null,tt=n,ft=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(Ee&mt)===mt:(ki&mt)===mt){var it=tt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===qr&&(ft=!0);else if((ki&it)===it){tt=tt.next,it===qr&&(ft=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=mt,g=f):B=B.next=mt,he.lanes|=it,ba|=it;mt=tt.action,cr&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else it={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=it,g=f):B=B.next=it,he.lanes|=mt,ba|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?g=f:B.next=b,!Yn(f,t.memoizedState)&&(cn=!0,ft&&(a=Yr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Qu(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function rm(t,n,a){var s=he,u=rn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Yn((Fe||u).memoizedState,a);if(g&&(u.memoizedState=a,cn=!0),u=u.queue,tf(lm.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},om.bind(null,s,u,a,n),null),qe===null)throw Error(r(349));f||(ki&127)!==0||sm(s,n,a)}return a}function sm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Al(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function om(t,n,a,s){n.value=a,n.getSnapshot=s,cm(n)&&um(t)}function lm(t,n,a){return a(function(){cm(n)&&um(t)})}function cm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function um(t){var n=tr(t,2);n!==null&&Xn(n,t,2)}function Ju(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),cr){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n}function fm(t,n,a,s){return t.baseState=a,Ku(t,Fe,typeof s=="function"?s:Wi)}function Ly(t,n,a,s,u){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function hm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var b=a(u,s),B=P.S;B!==null&&B(g,b),dm(t,n,b)}catch(tt){$u(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(u,s),dm(t,n,f)}catch(tt){$u(t,n,tt)}}function dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){pm(t,n,s)},function(s){return $u(t,n,s)}):pm(t,n,a)}function pm(t,n,a){n.status="fulfilled",n.value=a,mm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,hm(t,a)))}function $u(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,mm(n),n=n.next;while(n!==s)}t.action=null}function mm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gm(t,n){return n}function _m(t,n){if(Ae){var a=qe.formState;if(a!==null){t:{var s=he;if(Ae){if(je){e:{for(var u=je,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){je=fi(u.nextSibling),s=u.data==="F!";break t}}ga(s)}s=!1}s&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:n},a.queue=s,a=Pm.bind(null,he,s),s.dispatch=a,s=Ju(!1),f=sf.bind(null,he,!1,s.queue),s=On(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Ly.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function vm(t){var n=rn();return ym(n,Fe,t)}function ym(t,n,a){if(n=Ku(t,n,gm)[0],t=Cl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=co(n)}catch(g){throw g===jr?vl:g}else s=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,$r(9,{destroy:void 0},Ny.bind(null,u,a),null)),[s,f,t]}function Ny(t,n){t.action=n}function Sm(t){var n=rn(),a=Fe;if(a!==null)return ym(n,a,t);rn(),n=n.memoizedState,a=rn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $r(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Al(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function xm(){return rn().memoizedState}function wl(t,n,a,s){var u=On();he.flags|=t,u.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Dl(t,n,a,s){var u=rn();s=s===void 0?null:s;var f=u.memoizedState.inst;Fe!==null&&s!==null&&ku(s,Fe.memoizedState.deps)?u.memoizedState=$r(n,f,a,s):(he.flags|=t,u.memoizedState=$r(1|n,f,a,s))}function Mm(t,n){wl(8390656,8,t,n)}function tf(t,n){Dl(2048,8,t,n)}function Oy(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=Al(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Em(t){var n=rn().memoizedState;return Oy({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Dl(4,2,t,n)}function bm(t,n){return Dl(4,4,t,n)}function Am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Rm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,Am.bind(null,n,t),a)}function ef(){}function Cm(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ku(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function wm(t,n){var a=rn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ku(n,s[1]))return s[0];if(s=t(),cr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s}function nf(t,n,a){return a===void 0||(ki&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),he.lanes|=t,ba|=t,a)}function Dm(t,n,a,s){return Yn(a,n)?a:Kr.current!==null?(t=nf(t,a,s),Yn(t,n)||(cn=!0),t):(ki&42)===0||(ki&1073741824)!==0&&(Ee&261930)===0?(cn=!0,t.memoizedState=a):(t=Dg(),he.lanes|=t,ba|=t,n)}function Um(t,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var g=P.T,b={};P.T=b,sf(t,!1,n,a);try{var B=u(),tt=P.S;if(tt!==null&&tt(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=wy(B,s);uo(t,n,ft,$n(t))}else uo(t,n,s,$n(t))}catch(mt){uo(t,n,{then:function(){},status:"rejected",reason:mt},$n())}finally{Y.p=f,g!==null&&b.types!==null&&(g.types=b.types),P.T=g}}function zy(){}function af(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Lm(t).queue;Um(t,u,n,q,a===null?zy:function(){return Nm(t),a(s)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},$n())}function rf(){return Tn(Co)}function Om(){return rn().memoizedState}function zm(){return rn().memoizedState}function Py(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=ya(a);var s=Sa(n,t,a);s!==null&&(Xn(s,n,a),ro(s,n,a)),n={cache:Nu()},t.payload=n;return}n=n.return}}function By(t,n,a){var s=$n();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Bm(n,a):(a=Mu(t,n,a,s),a!==null&&(Xn(a,t,s),Im(a,n,s)))}function Pm(t,n,a){var s=$n();uo(t,n,a,s)}function uo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(u.hasEagerState=!0,u.eagerState=b,Yn(b,g))return fl(t,n,u,0),qe===null&&ul(),!1}catch{}if(a=Mu(t,n,u,s),a!==null)return Xn(a,t,s),Im(a,n,s),!0}return!1}function sf(t,n,a,s){if(s={lane:2,revertLane:If(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=Mu(t,a,s,2),n!==null&&Xn(n,t,2)}function Ul(t){var n=t.alternate;return t===he||n!==null&&n===he}function Bm(t,n){Qr=Tl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Im(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bi(t,a)}}var fo={readContext:Tn,use:Rl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var Fm={readContext:Tn,use:Rl,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Mm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,Am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var s=t();if(cr){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=On();if(a!==void 0){var u=a(n);if(cr){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=By.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=Pm.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=On();return nf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Um.bind(null,he,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=On();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Ee&127)!==0||sm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Mm(lm.bind(null,s,f,t),[t]),s.flags|=2048,$r(9,{destroy:void 0},om.bind(null,s,f,a,n),null),a},useId:function(){var t=On(),n=qe.identifierPrefix;if(Ae){var a=Ci,s=Ri;a=(s&~(1<<32-Ot(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=sf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return On().memoizedState=Py.bind(null,he)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},of={readContext:Tn,use:Rl,useCallback:Cm,useContext:Tn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Cl,useRef:xm,useState:function(){return Cl(Wi)},useDebugValue:ef,useDeferredValue:function(t,n){var a=rn();return Dm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Cl(Wi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:rf,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=rn();return fm(a,Fe,t,n)},useMemoCache:Zu,useCacheRefresh:zm};of.useEffectEvent=Em;var Hm={readContext:Tn,use:Rl,useCallback:Cm,useContext:Tn,useEffect:tf,useImperativeHandle:Rm,useInsertionEffect:Tm,useLayoutEffect:bm,useMemo:wm,useReducer:Qu,useRef:xm,useState:function(){return Qu(Wi)},useDebugValue:ef,useDeferredValue:function(t,n){var a=rn();return Fe===null?nf(a,t,n):Dm(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Qu(Wi)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:rm,useId:Om,useHostTransitionStatus:rf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=rn();return Fe!==null?fm(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:zm};Hm.useEffectEvent=Em;function lf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=$n(),u=ya(s);u.payload=n,a!=null&&(u.callback=a),n=Sa(t,u,s),n!==null&&(Xn(n,t,s),ro(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=$n(),u=ya(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(t,u,s),n!==null&&(Xn(n,t,s),ro(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=Sa(t,s,a),n!==null&&(Xn(n,t,a),ro(n,t,a))}};function Gm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Qs(a,s)||!Qs(u,f):!0}function Vm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function ur(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){cl(t)}function km(t){console.error(t)}function Wm(t){cl(t)}function Ll(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function qm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(t,n)},a}function Ym(t){return t=ya(t),t.tag=3,t}function jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){qm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){qm(n,a,s),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Iy(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?kl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),zf(t,s,u)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),zf(t,s,u)),!1}throw Error(r(435,a.tag))}return zf(t,s,u),kl(),!1}if(Ae)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Cu&&(t=Error(r(422),{cause:s}),to(si(t,a)))):(s!==Cu&&(n=Error(r(423),{cause:s}),to(si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=si(s,a),u=uf(t.stateNode,s,u),Fu(t,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),So===null?So=[f]:So.push(f),en!==4&&(en=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,s,t),Fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Ym(u),jm(u,t,a,s),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(r(461)),cn=!1;function bn(t,n,a,s){n.child=t===null?Jp(n,null,a,s):lr(n,t.child,a,s)}function Zm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return ar(n),s=Wu(t,n,a,g,f,u),b=qu(),t!==null&&!cn?(Yu(t,n,u),qi(t,n,u)):(Ae&&b&&Au(n),n.flags|=1,bn(t,n,s,u),n.child)}function Km(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Qm(t,n,f,s,u)):(t=dl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qs,a(g,s)&&t.ref===n.ref)return qi(t,n,u)}return n.flags|=1,t=Hi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Qm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Qs(f,s)&&t.ref===n.ref)if(cn=!1,n.pendingProps=s=f,yf(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,qi(t,n,u)}return hf(t,n,a,s,u)}function Jm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return $m(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&_l(n,f!==null?f.cachePool:null),f!==null?em(n,f):Gu(),nm(n);else return s=n.lanes=536870912,$m(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(_l(n,f.cachePool),em(n,f),Ma(),n.memoizedState=null):(t!==null&&_l(n,null),Gu(),Ma());return bn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $m(t,n,a,s,u){var f=zu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&_l(n,null),Gu(),nm(n),t!==null&&Wr(t,n,s,!0),n.childLanes=u,null}function Nl(t,n){return n=zl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return lr(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Fy(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(s.mode==="hidden")return t=Nl(n,s),n.lanes=536870912,ho(null,t);if(Xu(n),(t=je)?(t=h0(t,ci),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw ga(n);return n.lanes=536870912,null}return Nl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Wr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(s=qe,s!==null&&(g=Dr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,tr(t,g),Xn(s,t,g),ff;kl(),n=tg(t,n,a)}else t=f.treeContext,je=fi(g.nextSibling),En=n,Ae=!0,ma=null,ci=!1,t!==null&&Hp(n,t),n=Nl(n,s),n.flags|=4096;return n}return t=Hi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,s,u){return ar(n),a=Wu(t,n,a,s,void 0,u),s=qu(),t!==null&&!cn?(Yu(t,n,u),qi(t,n,u)):(Ae&&s&&Au(n),n.flags|=1,bn(t,n,a,u),n.child)}function eg(t,n,a,s,u,f){return ar(n),n.updateQueue=null,a=am(n,s,a,u),im(t),s=qu(),t!==null&&!cn?(Yu(t,n,f),qi(t,n,f)):(Ae&&s&&Au(n),n.flags|=1,bn(t,n,a,f),n.child)}function ng(t,n,a,s,u){if(ar(n),n.stateNode===null){var f=Gr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Bu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Gr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(lf(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&cf.enqueueReplaceState(f,f.state,null),oo(n,s,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=ur(a,b);f.props=B;var tt=f.context,ft=a.contextType;g=Gr,typeof ft=="object"&&ft!==null&&(g=Tn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==g)&&Vm(n,f,s,g),va=!1;var it=n.memoizedState;f.state=it,oo(n,s,f,u),so(),tt=n.memoizedState,b||it!==tt||va?(typeof mt=="function"&&(lf(n,a,mt,s),tt=n.memoizedState),(B=va||Gm(n,a,B,s,it,tt,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Iu(t,n),g=n.memoizedProps,ft=ur(a,g),f.props=ft,mt=n.pendingProps,it=f.context,tt=a.contextType,B=Gr,typeof tt=="object"&&tt!==null&&(B=Tn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||it!==B)&&Vm(n,f,s,B),va=!1,it=n.memoizedState,f.state=it,oo(n,s,f,u),so();var ot=n.memoizedState;g!==mt||it!==ot||va||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof b=="function"&&(lf(n,a,b,s),ot=n.memoizedState),(ft=va||Gm(n,a,ft,s,it,ot,B)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ol(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=lr(n,t.child,null,u),n.child=lr(n,null,a,u)):bn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=qi(t,n,u),t}function ig(t,n,a,s){return nr(),n.flags|=256,bn(t,n,a,s),n.child}var df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:qp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function ag(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(u?xa(n):Ma(),(t=je)?(t=h0(t,ci),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw ga(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,u?(Ma(),u=n.mode,b=zl({mode:"hidden",children:b},u),s=er(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=pf(a),s.childLanes=mf(t,g,a),n.memoizedState=df,ho(null,s)):(xa(n),gf(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),b=s.fallback,u=n.mode,s=zl({mode:"visible",children:s.children},u),b=er(b,u,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,lr(n,t.child,null,a),s=n.child,s.memoizedState=pf(a),s.childLanes=mf(t,g,a),n.memoizedState=df,n=ho(null,s));else if(xa(n),Qf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var tt=g.dgst;g=tt,s=Error(r(419)),s.stack="",s.digest=g,to({value:s,source:null,stack:null}),n=_f(t,n,a)}else if(cn||Wr(t,n,a,!1),g=(a&t.childLanes)!==0,cn||g){if(g=qe,g!==null&&(s=Dr(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,tr(t,s),Xn(g,t,s),ff;Kf(b)||kl(),n=_f(t,n,a)}else Kf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,je=fi(b.nextSibling),En=n,Ae=!0,ma=null,ci=!1,t!==null&&Hp(n,t),n=gf(n,s.children),n.flags|=4096);return n}return u?(Ma(),b=s.fallback,u=n.mode,B=t.child,tt=B.sibling,s=Hi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,tt!==null?b=Hi(tt,b):(b=er(b,u,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,ho(null,s),s=n.child,b=t.child.memoizedState,b===null?b=pf(a):(u=b.cachePool,u!==null?(B=on._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=qp(),b={baseLanes:b.baseLanes|a,cachePool:u}),s.memoizedState=b,s.childLanes=mf(t,g,a),n.memoizedState=df,ho(t.child,s)):(xa(n),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return lr(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Uu(t.return,n,a)}function vf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function sg(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=an.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,xt(an,g),bn(t,n,s,a),s=Ae?$s:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&El(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&El(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,f,s);break;case"together":vf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Wr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Hi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Hy(t,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),_a(n,on,t.memoizedState.cache),nr();break;case 27:case 5:Kt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ag(t,n,a):(xa(n),t=qi(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return sg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(an,an.current),s)break;return null;case 22:return n.lanes=0,Jm(t,n,a,n.pendingProps);case 24:_a(n,on,t.memoizedState.cache)}return qi(t,n,a)}function og(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return cn=!1,Hy(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ae&&(n.flags&1048576)!==0&&Fp(n,$s,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")Eu(t)?(s=ur(t,s),n.tag=1,n=ng(null,n,t,s,a)):(n.tag=0,n=hf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Zm(null,n,t,s,a);break t}else if(u===z){n.tag=14,n=Km(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ur(s,n.pendingProps),ng(t,n,s,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Iu(t,n),oo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,_a(n,on,s),s!==f.cache&&Lu(n,[on],a,!0),so(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ig(t,n,s,a);break t}else if(s!==u){u=si(Error(r(424)),n),to(u),n=ig(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,je=fi(t.firstChild),En=n,Ae=!0,ma=null,ci=!0,a=Jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(nr(),s===u){n=qi(t,n,a);break t}bn(t,n,s,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=v0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,t=n.pendingProps,s=Ql(nt.current).createElement(a),s[sn]=n,s[xn]=t,An(s,a,t),yt(s),n.stateNode=s):n.memoizedState=v0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Kt(n),t===null&&Ae&&(s=n.stateNode=m0(n.type,n.pendingProps,nt.current),En=n,ci=!0,u=je,Da(n.type)?(Jf=u,je=fi(s.firstChild)):je=u),bn(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((u=s=je)&&(s=gS(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,En=n,je=fi(s.firstChild),ci=!1,u=!0):u=!1),u||ga(n)),Kt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Yf(u,f)?s=null:g!==null&&Yf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,Uy,null,null,a),Co._currentValue=u),Ol(t,n),bn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=je)&&(a=_S(a,n.pendingProps,ci),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||ga(n)),null;case 13:return ag(t,n,a);case 4:return Ut(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=lr(n,null,s,a):bn(t,n,s,a),n.child;case 11:return Zm(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,_a(n,n.type,s.value),bn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ar(n),u=Tn(u),s=s(u),n.flags|=1,bn(t,n,s,a),n.child;case 14:return Km(t,n,n.type,n.pendingProps,a);case 15:return Qm(t,n,n.type,n.pendingProps,a);case 19:return sg(t,n,a);case 31:return Fy(t,n,a);case 22:return Jm(t,n,a,n.pendingProps);case 24:return ar(n),s=Tn(on),t===null?(u=zu(),u===null&&(u=qe,f=Nu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Bu(n),_a(n,on,u)):((t.lanes&a)!==0&&(Iu(t,n),oo(n,null,null,a),so()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,on,s)):(s=f.cache,_a(n,on,s),s!==u.cache&&Lu(n,[on],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Yi(t){t.flags|=4}function Sf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Og())t.flags|=8192;else throw or=yl,Pu}else t.flags&=-16777217}function lg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!E0(n))if(Og())t.flags|=8192;else throw or=yl,Pu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,is|=n)}function po(t,n){if(!Ae)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Gy(t,n,a){var s=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Xi(on),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(kr(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Yi(n),f!==null?(Ze(n),lg(n,f)):(Ze(n),Sf(n,u,null,s,a))):f?f!==t.memoizedState?(Yi(n),Ze(n),lg(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Yi(n),Ze(n),Sf(n,u,t,s,a)),null;case 27:if(de(n),a=nt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Ct.current,kr(n)?Gp(n):(t=m0(u,s,a),n.stateNode=t,Yi(n))}return Ze(n),null;case 5:if(de(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Ct.current,kr(n))Gp(n);else{var g=Ql(nt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[sn]=n,f[xn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Yi(n)}}return Ze(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Yi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,kr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=En,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||a0(t.nodeValue,a)),t||ga(n,!0)}else t=Ql(t).createTextNode(s),t[sn]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=kr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=kr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Ze(n),null);case 4:return Vt(),t===null&&Vf(n.stateNode.containerInfo),Ze(n),null;case 10:return Xi(n.type),Ze(n),null;case 19:if(et(an),s=n.memoizedState,s===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)po(s,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=El(t),f!==null){for(n.flags|=128,po(s,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Pp(a,t),a=a.sibling;return xt(an,an.current&1|2),Ae&&Gi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,po(s,!1),n.lanes=4194304)}else{if(!u)if(t=El(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ae)return Ze(n),null}else 2*E()-s.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,po(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=an.current,xt(an,u?a&1|2:a&1),Ae&&Gi(n,s.treeForkCount),t):(Ze(n),null);case 22:case 23:return Kn(n),Vu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(rr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(on),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Vy(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(on),Vt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(an),null;case 4:return Vt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Kn(n),Vu(),t!==null&&et(rr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(on),null;case 25:return null;default:return null}}function cg(t,n){switch(Ru(n),n.tag){case 3:Xi(on),Vt();break;case 26:case 27:case 5:de(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:et(an);break;case 10:Xi(n.type);break;case 22:case 23:Kn(n),Vu(),t!==null&&et(rr);break;case 24:Xi(on)}}function mo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(b){Ie(n,n.return,b)}}function Ea(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=n;var B=a,tt=b;try{tt()}catch(ft){Ie(u,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){Ie(n,n.return,ft)}}function ug(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(s){Ie(t,t.return,s)}}}function fg(t,n,a){a.props=ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(t,n,s)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ie(t,n,u)}}function wi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function hg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function xf(t,n,a){try{var s=t.stateNode;uS(s,t.type,a,n),s[xn]=n}catch(u){Ie(t,t.return,u)}}function dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Da(t.type)||t.tag===4}function Mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Bl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}function pg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,s,a),n[sn]=t,n[xn]=a}catch(f){Ie(t,t.return,f)}}var ji=!1,un=!1,Tf=!1,mg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Xy(t,n){if(t=t.containerInfo,Wf=ac,t=Rp(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,B=-1,tt=0,ft=0,mt=t,it=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(b=g+u),mt!==f||s!==0&&mt.nodeType!==3||(B=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)it=mt,mt=ot;for(;;){if(mt===t)break e;if(it===a&&++tt===u&&(b=g),it===f&&++ft===s&&(B=g),(ot=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=ot}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},ac=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qt=ur(a.type,u);t=s.getSnapshotBeforeUpdate(qt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(re){Ie(a,a.return,re)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function gg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(t,a),s&4&&mo(5,a);break;case 1:if(Ki(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ie(a,a.return,g)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(a,a.return,g)}}s&64&&ug(a),s&512&&go(a,a.return);break;case 3:if(Ki(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(g){Ie(a,a.return,g)}}break;case 27:n===null&&s&4&&pg(a);case 26:case 5:Ki(t,a),n===null&&s&4&&hg(a),s&512&&go(a,a.return);break;case 12:Ki(t,a);break;case 31:Ki(t,a),s&4&&yg(t,a);break;case 13:Ki(t,a),s&4&&Sg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jy.bind(null,a),vS(t,a))));break;case 22:if(s=a.memoizedState!==null||ji,!s){n=n!==null&&n.memoizedState!==null||un,u=ji;var f=un;ji=s,(un=n)&&!f?Qi(t,a,(a.subtreeFlags&8772)!==0):Ki(t,a),ji=u,un=f}break;case 30:break;default:Ki(t,a)}}function _g(t){var n=t.alternate;n!==null&&(t.alternate=null,_g(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Fn=!1;function Zi(t,n,a){for(a=a.child;a!==null;)vg(t,n,a),a=a.sibling}function vg(t,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(vt,a)}catch{}switch(a.tag){case 26:un||wi(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||wi(a,n);var s=Je,u=Fn;Da(a.type)&&(Je=a.stateNode,Fn=!1),Zi(t,n,a),bo(a.stateNode),Je=s,Fn=u;break;case 5:un||wi(a,n);case 6:if(s=Je,u=Fn,Je=null,Zi(t,n,a),Je=s,Fn=u,Je!==null)if(Fn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Je!==null&&(Fn?(t=Je,u0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fs(t)):u0(Je,a.stateNode));break;case 4:s=Je,u=Fn,Je=a.stateNode.containerInfo,Fn=!0,Zi(t,n,a),Je=s,Fn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),un||Ea(4,a,n),Zi(t,n,a);break;case 1:un||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&fg(a,n,s)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,Zi(t,n,a),un=s;break;default:Zi(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fs(t)}catch(a){Ie(n,n.return,a)}}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fs(t)}catch(a){Ie(n,n.return,a)}}function ky(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mg),n;default:throw Error(r(435,t.tag))}}function Il(t,n){var a=ky(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=$y.bind(null,t,s);s.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Je=b.stateNode,Fn=!1;break t}break;case 5:Je=b.stateNode,Fn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(Je===null)throw Error(r(160));vg(f,g,u),Je=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xg(n,t),n=n.sibling}var _i=null;function xg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(Ea(3,t,t.return),mo(3,t),Ea(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(un||a===null||wi(a,a.return)),s&64&&ji&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=_i;if(Hn(n,t),Gn(t),s&512&&(un||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Za]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,s,a),f[sn]=t,yt(f),s=f;break t;case"link":var g=x0("link","href",u).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=u.createElement(s),An(f,s,a),u.head.appendChild(f);break;case"meta":if(g=x0("meta","content",u).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=u.createElement(s),An(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=t,yt(f),s=f}t.stateNode=s}else M0(u,t.type,t.stateNode);else t.stateNode=S0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?M0(u,t.type,t.stateNode):S0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(un||a===null||wi(a,a.return)),a!==null&&s&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(un||a===null||wi(a,a.return)),t.flags&32){u=t.stateNode;try{Or(u,"")}catch(qt){Ie(t,t.return,qt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,xf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Tf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qt){Ie(t,t.return,qt)}}break;case 3:if(tc=null,u=_i,_i=Jl(n.containerInfo),Hn(n,t),_i=u,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(qt){Ie(t,t.return,qt)}Tf&&(Tf=!1,Mg(t));break;case 4:s=_i,_i=Jl(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Il(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Il(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=ji,ft=un;if(ji=tt||u,un=ft||B,Hn(n,t),un=ft,ji=tt,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ji||un||fr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=B.stateNode;var mt=B.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(qt){Ie(B,B.return,qt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(qt){Ie(B,B.return,qt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?f0(ot,!0):f0(B.stateNode,!1)}catch(qt){Ie(B,B.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Il(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Il(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(dg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Bl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Or(g,""),a.flags&=-33);var b=Mf(t);Bl(t,b,g);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=Mf(t);Ef(t,tt,B);break;default:throw Error(r(161))}}catch(ft){Ie(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)gg(t,n.alternate,n),n=n.sibling}function fr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fg(n,n.return,a),fr(n);break;case 27:bo(n.stateNode);case 26:case 5:wi(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}t=t.sibling}}function Qi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(u,f,a),mo(4,f);break;case 1:if(Qi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ie(s,s.return,tt)}if(s=f,u=s.updateQueue,u!==null){var b=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)$p(B[u],b)}catch(tt){Ie(s,s.return,tt)}}a&&g&64&&ug(f),go(f,f.return);break;case 27:pg(f);case 26:case 5:Qi(u,f,a),a&&s===null&&g&4&&hg(f),go(f,f.return);break;case 12:Qi(u,f,a);break;case 31:Qi(u,f,a),a&&g&4&&yg(u,f);break;case 13:Qi(u,f,a),a&&g&4&&Sg(u,f);break;case 22:f.memoizedState===null&&Qi(u,f,a),go(f,f.return);break;case 30:break;default:Qi(u,f,a)}n=n.sibling}}function bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,s),n=n.sibling}function Eg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&mo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ie(n,n.return,B)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):_o(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&bf(g,n);break;case 24:vi(t,n,a,s),u&2048&&Af(n.alternate,n);break;default:vi(t,n,a,s)}}function ts(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,B=s,tt=g.flags;switch(g.tag){case 0:case 11:case 15:ts(f,g,b,B,u),mo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ts(f,g,b,B,u):_o(f,g):(ft._visibility|=2,ts(f,g,b,B,u)),u&&tt&2048&&bf(g.alternate,g);break;case 24:ts(f,g,b,B,u),u&&tt&2048&&Af(g.alternate,g);break;default:ts(f,g,b,B,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:_o(a,s),u&2048&&bf(s.alternate,s);break;case 24:_o(a,s),u&2048&&Af(s.alternate,s);break;default:_o(a,s)}n=n.sibling}}var vo=8192;function es(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:es(t,n,a),t.flags&vo&&t.memoizedState!==null&&DS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,a);break;case 3:case 4:var s=_i;_i=Jl(t.stateNode.containerInfo),es(t,n,a),_i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,es(t,n,a),vo=s):es(t,n,a));break;default:es(t,n,a)}}function bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Rg(s,t)}bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):yo(t);break;default:yo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Rg(s,t)}bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function Rg(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:eo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var u=s.sibling,f=s.return;if(_g(s),s===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var Wy={getCacheForType:function(t){var n=Tn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},qy=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,Se=null,Ee=0,Be=0,Qn=null,Ta=!1,ns=!1,Rf=!1,Ji=0,en=0,ba=0,hr=0,Cf=0,Jn=0,is=0,So=null,Vn=null,wf=!1,Hl=0,Cg=0,Gl=1/0,Vl=null,Aa=null,dn=0,Ra=null,as=null,$i=0,Df=0,Uf=null,wg=null,xo=0,Lf=null;function $n(){return(Ne&2)!==0&&Ee!==0?Ee&-Ee:P.T!==null?If():ja()}function Dg(){if(Jn===0)if((Ee&536870912)===0||Ae){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Xn(t,n,a){(t===qe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(rs(t,0),Ca(t,Ee,Jn,!1)),Ln(t,a),((Ne&2)===0||t!==qe)&&(t===qe&&((Ne&2)===0&&(hr|=a),en===4&&Ca(t,Ee,Jn,!1)),Di(t))}function Ug(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Wt(t,n),u=s?Zy(t,n):Of(t,n,!0),f=s;do{if(u===0){ns&&!s&&Ca(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yy(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;u=So;var B=b.current.memoizedState.isDehydrated;if(B&&(rs(b,g).flags|=256),g=Of(b,g,!1),g!==2){if(Rf&&!B){b.errorRecoveryDisabledLanes|=f,hr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){rs(t,0),Ca(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(s,n,Jn,!Ta);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-E(),10<u)){if(Ca(s,n,Jn,!Ta),_t(s,0,!0)!==0)break t;$i=n,s.timeoutHandle=l0(Lg.bind(null,s,a,Vn,Vl,wf,n,Jn,hr,is,Ta,f,"Throttled",-0,0),u);break t}Lg(s,a,Vn,Vl,wf,n,Jn,hr,is,Ta,f,null,-0,0)}}break}while(!0);Di(t)}function Lg(t,n,a,s,u,f,g,b,B,tt,ft,mt,it,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Tg(n,f,mt);var qt=(f&62914560)===f?Hl-E():(f&4194048)===f?Cg-E():0;if(qt=US(mt,qt),qt!==null){$i=f,t.cancelPendingCommit=qt(Hg.bind(null,t,n,f,a,s,u,g,b,B,ft,mt,null,it,ot)),Ca(t,f,g,!tt);return}}Hg(t,n,f,a,s,u,g,b,B)}function Yy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(t,n,a,s){n&=~Cf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Gs(t,a,n)}function Xl(){return(Ne&6)===0?(Mo(0),!1):!0}function Nf(){if(Se!==null){if(Be===0)var t=Se.return;else t=Se,Vi=ir=null,ju(t),Zr=null,io=0,t=Se;for(;t!==null;)cg(t.alternate,t),t=t.return;Se=null}}function rs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$i=0,Nf(),qe=t,Se=a=Hi(t.current,null),Ee=n,Be=0,Qn=null,Ta=!1,ns=Wt(t,n),Rf=!1,is=Jn=Cf=hr=ba=en=0,Vn=So=null,wf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ot(s),f=1<<u;n|=t[u],s&=~f}return Ji=n,ul(),a}function Ng(t,n){he=null,P.H=fo,n===jr||n===vl?(n=Zp(),Be=3):n===Pu?(n=Zp(),Be=4):Be=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,Se===null&&(en=1,Ll(t,si(n,t.current)))}function Og(){var t=Zn.current;return t===null?!0:(Ee&4194048)===Ee?ui===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===ui:!1}function zg(){var t=P.H;return P.H=fo,t===null?fo:t}function Pg(){var t=P.A;return P.A=Wy,t}function kl(){en=4,Ta||(Ee&4194048)!==Ee&&Zn.current!==null||(ns=!0),(ba&134217727)===0&&(hr&134217727)===0||qe===null||Ca(qe,Ee,Jn,!1)}function Of(t,n,a){var s=Ne;Ne|=2;var u=zg(),f=Pg();(qe!==t||Ee!==n)&&(Vl=null,rs(t,n)),n=!1;var g=en;t:do try{if(Be!==0&&Se!==null){var b=Se,B=Qn;switch(Be){case 8:Nf(),g=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var tt=Be;if(Be=0,Qn=null,ss(t,b,B,tt),a&&ns){g=0;break t}break;default:tt=Be,Be=0,Qn=null,ss(t,b,B,tt)}}jy(),g=en;break}catch(ft){Ng(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Vi=ir=null,Ne=s,P.H=u,P.A=f,Se===null&&(qe=null,Ee=0,ul()),g}function jy(){for(;Se!==null;)Bg(Se)}function Zy(t,n){var a=Ne;Ne|=2;var s=zg(),u=Pg();qe!==t||Ee!==n?(Vl=null,Gl=E()+500,rs(t,n)):ns=Wt(t,n);t:do try{if(Be!==0&&Se!==null){n=Se;var f=Qn;e:switch(Be){case 1:Be=0,Qn=null,ss(t,n,f,1);break;case 2:case 9:if(Yp(f)){Be=0,Qn=null,Ig(n);break}n=function(){Be!==2&&Be!==9||qe!==t||(Be=7),Di(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Yp(f)?(Be=0,Qn=null,Ig(n)):(Be=0,Qn=null,ss(t,n,f,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var b=Se;if(g?E0(g):b.stateNode.complete){Be=0,Qn=null;var B=b.sibling;if(B!==null)Se=B;else{var tt=b.return;tt!==null?(Se=tt,Wl(tt)):Se=null}break e}}Be=0,Qn=null,ss(t,n,f,5);break;case 6:Be=0,Qn=null,ss(t,n,f,6);break;case 8:Nf(),en=6;break t;default:throw Error(r(462))}}Ky();break}catch(ft){Ng(t,ft)}while(!0);return Vi=ir=null,P.H=s,P.A=u,Ne=a,Se!==null?0:(qe=null,Ee=0,ul(),en)}function Ky(){for(;Se!==null&&!be();)Bg(Se)}function Bg(t){var n=og(t.alternate,t,Ji);t.memoizedProps=t.pendingProps,n===null?Wl(t):Se=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=eg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=eg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:ju(n);default:cg(a,n),n=Se=Pp(n,Ji),n=og(a,n,Ji)}t.memoizedProps=t.pendingProps,n===null?Wl(t):Se=n}function ss(t,n,a,s){Vi=ir=null,ju(n),Zr=null,io=0;var u=n.return;try{if(Iy(t,u,n,a,Ee)){en=1,Ll(t,si(a,t.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Ll(t,si(a,t.current)),Se=null;return}n.flags&32768?(Ae||s===1?t=!0:ns||(Ee&536870912)!==0?t=!1:(Ta=t=!0,(s===2||s===9||s===3||s===6)&&(s=Zn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Fg(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){Fg(n,Ta);return}t=n.return;var a=Gy(n.alternate,n,Ji);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);en===0&&(en=5)}function Fg(t,n){do{var a=Vy(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);en=6,Se=null}function Hg(t,n,a,s,u,f,g,b,B){t.cancelPendingCommit=null;do ql();while(dn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=xu,ai(t,a,f,g,b,B),t===qe&&(Se=qe=null,Ee=0),as=n,Ra=t,$i=a,Df=f,Uf=u,wg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tS(lt,function(){return Wg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=Y.p,Y.p=2,g=Ne,Ne|=4;try{Xy(t,n,a)}finally{Ne=g,Y.p=u,P.T=s}}dn=1,Gg(),Vg(),Xg()}}function Gg(){if(dn===1){dn=0;var t=Ra,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Ne;Ne|=4;try{xg(n,t);var f=qf,g=Rp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&Ap(b.ownerDocument.documentElement,b)){if(B!==null&&gu(b)){var tt=B.start,ft=B.end;if(ft===void 0&&(ft=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var ot=it.getSelection(),qt=b.textContent.length,re=Math.min(B.start,qt),Ge=B.end===void 0?re:Math.min(B.end,qt);!ot.extend&&re>Ge&&(g=Ge,Ge=re,re=g);var Z=bp(b,re),X=bp(b,Ge);if(Z&&X&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var $=mt.createRange();$.setStart(Z.node,Z.offset),ot.removeAllRanges(),re>Ge?(ot.addRange($),ot.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ot.addRange($))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ac=!!Wf,qf=Wf=null}finally{Ne=u,Y.p=s,P.T=a}}t.current=n,dn=2}}function Vg(){if(dn===2){dn=0;var t=Ra,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Ne;Ne|=4;try{gg(t,n.alternate,n)}finally{Ne=u,Y.p=s,P.T=a}}dn=3}}function Xg(){if(dn===4||dn===3){dn=0,U();var t=Ra,n=as,a=$i,s=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=Ra=null,kg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Aa=null),Lr(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(vt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{P.T=n,Y.p=u}}($i&3)!==0&&ql(),Di(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?xo++:(xo=0,Lf=t):xo=0,Mo(0)}}function kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function ql(){return Gg(),Vg(),Xg(),Wg()}function Wg(){if(dn!==5)return!1;var t=Ra,n=Df;Df=0;var a=Lr($i),s=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Uf,Uf=null;var f=Ra,g=$i;if(dn=0,as=Ra=null,$i=0,(Ne&6)!==0)throw Error(r(331));var b=Ne;if(Ne|=4,Ag(f.current),Eg(f,f.current,g,a),Ne=b,Mo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(vt,f)}catch{}return!0}finally{Y.p=u,P.T=s,kg(t,n)}}function qg(t,n,a){n=si(a,n),n=uf(t.stateNode,n,2),t=Sa(t,n,2),t!==null&&(Ln(t,2),Di(t))}function Ie(t,n,a){if(t.tag===3)qg(t,t,a);else for(;n!==null;){if(n.tag===3){qg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){t=si(a,t),a=Ym(2),s=Sa(n,a,2),s!==null&&(jm(a,s,n,t),Ln(s,2),Di(s));break}}n=n.return}}function zf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new qy;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=Qy.bind(null,t,n,a),n.then(t,t))}function Qy(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Ee&a)===a&&(en===4||en===3&&(Ee&62914560)===Ee&&300>E()-Hl?(Ne&2)===0&&rs(t,0):Cf|=a,is===Ee&&(is=0)),Di(t)}function Yg(t,n){n===0&&(n=Pe()),t=tr(t,n),t!==null&&(Ln(t,n),Di(t))}function Jy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(t,a)}function $y(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Yg(t,a)}function tS(t,n){return Ht(t,n)}var Yl=null,os=null,Pf=!1,jl=!1,Bf=!1,wa=0;function Di(t){t!==os&&t.next===null&&(os===null?Yl=os=t:os=os.next=t),jl=!0,Pf||(Pf=!0,nS())}function Mo(t,n){if(!Bf&&jl){Bf=!0;do for(var a=!1,s=Yl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=u&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qg(s,f))}else f=Ee,f=_t(s,s===qe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Wt(s,f)||(a=!0,Qg(s,f));s=s.next}while(a);Bf=!1}}function eS(){jg()}function jg(){jl=Pf=!1;var t=0;wa!==0&&hS()&&(t=wa);for(var n=E(),a=null,s=Yl;s!==null;){var u=s.next,f=Zg(s,n);f===0?(s.next=null,a===null?Yl=u:a.next=u,u===null&&(os=a)):(a=s,(t!==0||(f&3)!==0)&&(jl=!0)),s=u}dn!==0&&dn!==5||Mo(t),wa!==0&&(wa=0)}function Zg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ot(f),b=1<<g,B=u[g];B===-1?((b&a)===0||(b&s)!==0)&&(u[g]=oe(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=qe,a=Ee,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&fe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&fe(s),Lr(a)){case 2:case 8:a=at;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return s=Kg.bind(null,t),a=Ht(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&fe(s),t.callbackPriority=2,t.callbackNode=null,2}function Kg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var s=Ee;return s=_t(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ug(t,s,n),Zg(t,E()),t.callbackNode!=null&&t.callbackNode===a?Kg.bind(null,t):null)}function Qg(t,n){if(ql())return null;Ug(t,n,!0)}function nS(){pS(function(){(Ne&6)!==0?Ht(dt,eS):jg()})}function If(){if(wa===0){var t=qr;t===0&&(t=Mt,Mt<<=1,(Mt&261888)===0&&(Mt=256)),wa=t}return wa}function Jg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:nl(""+t)}function $g(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jg((u[xn]||null).action),g=s.submitter;g&&(n=(n=g[xn]||null)?Jg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new sl("action","action",null,s,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wa!==0){var B=g?$g(u,g):new FormData(u);af(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=g?$g(u,g):new FormData(u),af(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Ff=0;Ff<Su.length;Ff++){var Hf=Su[Ff],aS=Hf.toLowerCase(),rS=Hf[0].toUpperCase()+Hf.slice(1);gi(aS,"on"+rS)}gi(Dp,"onAnimationEnd"),gi(Up,"onAnimationIteration"),gi(Lp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(xy,"onTransitionRun"),gi(My,"onTransitionStart"),gi(Ey,"onTransitionCancel"),gi(Np,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],B=b.instance,tt=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ft){cl(ft)}u.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(b=s[g],B=b.instance,tt=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ft){cl(ft)}u.currentTarget=null,f=B}}}}function xe(t,n){var a=n[Xs];a===void 0&&(a=n[Xs]=new Set);var s=t+"__bubble";a.has(s)||(e0(n,t,2,!1),a.add(s))}function Gf(t,n,a){var s=0;n&&(s|=4),e0(a,t,s,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Zl]){t[Zl]=!0,Bt.forEach(function(a){a!=="selectionchange"&&(sS.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Gf("selectionchange",!1,n))}}function e0(t,n,a,s){switch(D0(n)){case 2:var u=OS;break;case 8:u=zS;break;default:u=ih}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===u)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;b!==null;){if(g=j(b),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}b=b.parentNode}}s=s.return}sp(function(){var tt=f,ft=ru(a),mt=[];t:{var it=Op.get(t);if(it!==void 0){var ot=sl,qt=t;switch(t){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":ot=$v;break;case"focusin":qt="focus",ot=fu;break;case"focusout":qt="blur",ot=fu;break;case"beforeblur":case"afterblur":ot=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=ny;break;case Dp:case Up:case Lp:ot=kv;break;case Np:ot=ay;break;case"scroll":case"scrollend":ot=Fv;break;case"wheel":ot=sy;break;case"copy":case"cut":case"paste":ot=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=fp;break;case"toggle":case"beforetoggle":ot=ly}var re=(n&4)!==0,Ge=!re&&(t==="scroll"||t==="scrollend"),Z=re?it!==null?it+"Capture":null:it;re=[];for(var X=tt,$;X!==null;){var pt=X;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Z===null||(pt=ks(X,Z),pt!=null&&re.push(To(X,pt,$))),Ge)break;X=X.return}0<re.length&&(it=new ot(it,qt,null,a,ft),mt.push({event:it,listeners:re}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",it&&a!==au&&(qt=a.relatedTarget||a.fromElement)&&(j(qt)||qt[ha]))break t;if((ot||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,ot?(qt=a.relatedTarget||a.toElement,ot=tt,qt=qt?j(qt):null,qt!==null&&(Ge=c(qt),re=qt.tag,qt!==Ge||re!==5&&re!==27&&re!==6)&&(qt=null)):(ot=null,qt=tt),ot!==qt)){if(re=cp,pt="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(re=fp,pt="onPointerLeave",Z="onPointerEnter",X="pointer"),Ge=ot==null?it:st(ot),$=qt==null?it:st(qt),it=new re(pt,X+"leave",ot,a,ft),it.target=Ge,it.relatedTarget=$,pt=null,j(ft)===tt&&(re=new re(Z,X+"enter",qt,a,ft),re.target=$,re.relatedTarget=Ge,pt=re),Ge=pt,ot&&qt)e:{for(re=oS,Z=ot,X=qt,$=0,pt=Z;pt;pt=re(pt))$++;pt=0;for(var ee=X;ee;ee=re(ee))pt++;for(;0<$-pt;)Z=re(Z),$--;for(;0<pt-$;)X=re(X),pt--;for(;$--;){if(Z===X||X!==null&&Z===X.alternate){re=Z;break e}Z=re(Z),X=re(X)}re=null}else re=null;ot!==null&&n0(mt,it,ot,re,!1),qt!==null&&Ge!==null&&n0(mt,Ge,qt,re,!0)}}t:{if(it=tt?st(tt):window,ot=it.nodeName&&it.nodeName.toLowerCase(),ot==="select"||ot==="input"&&it.type==="file")var De=yp;else if(_p(it))if(Sp)De=vy;else{De=gy;var Jt=my}else ot=it.nodeName,!ot||ot.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&iu(tt.elementType)&&(De=yp):De=_y;if(De&&(De=De(t,tt))){vp(mt,De,a,ft);break t}Jt&&Jt(t,it,tt),t==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&hn(it,"number",it.value)}switch(Jt=tt?st(tt):window,t){case"focusin":(_p(Jt)||Jt.contentEditable==="true")&&(Ir=Jt,_u=tt,Js=null);break;case"focusout":Js=_u=Ir=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Cp(mt,a,ft);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Cp(mt,a,ft)}var pe;if(du)t:{switch(t){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Br?mp(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(hp&&a.locale!=="ko"&&(Br||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Br&&(pe=op()):(da=ft,lu="value"in da?da.value:da.textContent,Br=!0)),Jt=Kl(tt,Te),0<Jt.length&&(Te=new up(Te,t,null,a,ft),mt.push({event:Te,listeners:Jt}),pe?Te.data=pe:(pe=gp(a),pe!==null&&(Te.data=pe)))),(pe=uy?fy(t,a):hy(t,a))&&(Te=Kl(tt,"onBeforeInput"),0<Te.length&&(Jt=new up("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Jt,listeners:Te}),Jt.data=pe)),iS(mt,t,tt,a,ft)}t0(mt,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ks(t,a),u!=null&&s.unshift(To(t,u,f)),u=ks(t,n),u!=null&&s.push(To(t,u,f))),t.tag===3)return s;t=t.return}return[]}function oS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,B=b.alternate,tt=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||tt===null||(B=tt,u?(tt=ks(a,f),tt!=null&&g.unshift(To(a,tt,B))):u||(tt=ks(a,f),tt!=null&&g.push(To(a,tt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function a0(t,n){return n=i0(n),i0(t)===n}function He(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Or(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Or(t,""+s);break;case"className":ze(t,"class",s);break;case"tabIndex":ze(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,a,s);break;case"style":ap(t,s,f);break;case"data":if(n!=="object"){ze(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=nl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=nl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ii);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=nl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),We(t,"popover",s);break;case"xlinkActuate":ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ye(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ye(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ye(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ye(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bv.get(a)||a,We(t,a,s))}}function kf(t,n,a,s,u,f){switch(a){case"style":ap(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Or(t,s):(typeof s=="number"||typeof s=="bigint")&&Or(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):We(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,f,g,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),s&&He(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var b=f=g=u=null,B=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":g=ft;break;case"checked":B=ft;break;case"defaultChecked":tt=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:He(t,n,s,ft,a,null)}}Nn(t,f,b,B,tt,g,u,!1);return;case"select":xe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:He(t,n,u,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?nn(t,!!s,n,!1):a!=null&&nn(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:He(t,n,g,b,a,null)}Ai(t,s,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":He(t,n,B,s,a,null));return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Eo.length;s++)xe(Eo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(t,n,tt,s,a,null)}return;default:if(iu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&kf(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&He(t,n,b,s,a,null))}function uS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,b=null,B=null,tt=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:s.hasOwnProperty(ot)||He(t,n,ot,null,s,mt)}}for(var it in s){var ot=s[it];if(mt=a[it],s.hasOwnProperty(it)&&(ot!=null||mt!=null))switch(it){case"type":f=ot;break;case"name":u=ot;break;case"checked":tt=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&He(t,n,it,ot,s,mt)}}Cn(t,g,b,B,tt,ft,f,u);return;case"select":ot=g=b=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||He(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==B&&He(t,n,u,f,s,B)}n=b,a=g,s=ot,it!=null?nn(t,!!a,it,!1):!!s!=!!a&&(n!=null?nn(t,!!a,n,!0):nn(t,!!a,a?[]:"",!1));return;case"textarea":ot=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:He(t,n,b,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":it=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&He(t,n,g,u,s,f)}Nr(t,it,ot);return;case"option":for(var qt in a)it=a[qt],a.hasOwnProperty(qt)&&it!=null&&!s.hasOwnProperty(qt)&&(qt==="selected"?t.selected=!1:He(t,n,qt,null,s,it));for(B in s)it=s[B],ot=a[B],s.hasOwnProperty(B)&&it!==ot&&(it!=null||ot!=null)&&(B==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":He(t,n,B,it,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)it=a[re],a.hasOwnProperty(re)&&it!=null&&!s.hasOwnProperty(re)&&He(t,n,re,null,s,it);for(tt in s)if(it=s[tt],ot=a[tt],s.hasOwnProperty(tt)&&it!==ot&&(it!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:He(t,n,tt,it,s,ot)}return;default:if(iu(n)){for(var Ge in a)it=a[Ge],a.hasOwnProperty(Ge)&&it!==void 0&&!s.hasOwnProperty(Ge)&&kf(t,n,Ge,void 0,s,it);for(ft in s)it=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||it===ot||it===void 0&&ot===void 0||kf(t,n,ft,it,s,ot);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!s.hasOwnProperty(Z)&&He(t,n,Z,null,s,it);for(mt in s)it=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||it===ot||it==null&&ot==null||He(t,n,mt,it,s,ot)}function r0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,b=u.duration;if(f&&b&&r0(g)){for(g=0,b=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],tt=B.startTime;if(tt>b)break;var ft=B.transferSize,mt=B.initiatorType;ft&&r0(mt)&&(B=B.responseEnd,g+=ft*(B<b?1:(b-tt)/(B-tt)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function s0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function o0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function hS(){var t=window.event;return t&&t.type==="popstate"?t===jf?!1:(jf=t,!0):(jf=null,!1)}var l0=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(mS)}:l0;function mS(t){setTimeout(function(){throw t})}function Da(t){return t==="head"}function u0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);fs(n)}function f0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function _S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function h0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=fi(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function d0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return fi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function p0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function m0(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var hi=new Map,g0=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ta=Y.d;Y.d={f:yS,r:SS,D:xS,C:MS,L:ES,m:TS,X:AS,S:bS,M:RS};function yS(){var t=ta.f(),n=Xl();return t||n}function SS(t){var n=rt(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):ta.r(t)}var ls=typeof document>"u"?null:document;function _0(t,n,a){var s=ls;if(s&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),g0.has(u)||(g0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),An(n,"link",t),yt(n),s.head.appendChild(n)))}}function xS(t){ta.D(t),_0("dns-prefetch",t,null)}function MS(t,n){ta.C(t,n),_0("preconnect",t,n)}function ES(t,n,a){ta.L(t,n,a);var s=ls;if(s&&t&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(t)+'"]';var f=u;switch(n){case"style":f=cs(t);break;case"script":f=us(t)}hi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ao(f))||n==="script"&&s.querySelector(Ro(f))||(n=s.createElement("link"),An(n,"link",t),yt(n),s.head.appendChild(n)))}}function TS(t,n){ta.m(t,n);var a=ls;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(s)+'"][href="'+Me(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(t)}if(!hi.has(f)&&(t=v({rel:"modulepreload",href:t},n),hi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}s=a.createElement("link"),An(s,"link",t),yt(s),a.head.appendChild(s)}}}function bS(t,n,a){ta.S(t,n,a);var s=ls;if(s&&t){var u=K(s).hoistableStyles,f=cs(t);n=n||"default";var g=u.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(Ao(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(f))&&$f(t,a);var B=g=s.createElement("link");yt(B),An(B,"link",t),B._p=new Promise(function(tt,ft){B.onload=tt,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(f,g)}}}function AS(t,n){ta.X(t,n);var a=ls;if(a&&t){var s=K(a).hoistableScripts,u=us(t),f=s.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0},n),(n=hi.get(u))&&th(t,n),f=a.createElement("script"),yt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function RS(t,n){ta.M(t,n);var a=ls;if(a&&t){var s=K(a).hoistableScripts,u=us(t),f=s.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&th(t,n),f=a.createElement("script"),yt(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function v0(t,n,a,s){var u=(u=nt.current)?Jl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=K(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cs(a.href);var f=K(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Ao(t)))&&!f._p&&(g.instance=f,g.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),f||CS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=K(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+Me(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function y0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function CS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),yt(n),t.head.appendChild(n))}function us(t){return'[src="'+Me(t)+'"]'}function Ro(t){return"script[async]"+t}function S0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Me(a.href)+'"]');if(s)return n.instance=s,yt(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),yt(s),An(s,"style",u),$l(s,a.precedence,t),n.instance=s;case"stylesheet":u=cs(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;s=y0(a),(u=hi.get(u))&&$f(s,u),f=(t.ownerDocument||t).createElement("link"),yt(f);var g=f;return g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),An(f,"link",s),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=us(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,yt(u),u):(s=a,(u=hi.get(f))&&(s=v({},a),th(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),yt(u),An(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,t));return n.instance}function $l(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function x0(t,n,a){if(tc===null){var s=new Map,u=tc=new Map;u.set(a,s)}else u=tc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Za]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function M0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function E0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function DS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cs(s.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ec.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,s=y0(s),(u=hi.get(u))&&$f(s,u),f=f.createElement("link"),yt(f);var g=f;g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ec.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var eh=0;function US(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&eh===0&&(eh=62500*fS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>eh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(LS,t),nc=null,ec.call(t))}function LS(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var s=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=ec.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function NS(t,n,a,s,u,f,g,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function T0(t,n,a,s,u,f,g,b,B,tt,ft,mt){return t=new NS(t,n,a,g,B,tt,ft,mt,b),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Nu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Bu(f),t}function b0(t){return t?(t=Gr,t):Gr}function A0(t,n,a,s,u,f){u=b0(u),s.context===null?s.context=u:s.pendingContext=u,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Sa(t,s,n),a!==null&&(Xn(a,t,n),ro(a,t,n))}function R0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nh(t,n){R0(t,n),(t=t.alternate)&&R0(t,n)}function C0(t){if(t.tag===13||t.tag===31){var n=tr(t,67108864);n!==null&&Xn(n,t,67108864),nh(t,67108864)}}function w0(t){if(t.tag===13||t.tag===31){var n=$n();n=Ur(n);var a=tr(t,n);a!==null&&Xn(a,t,n),nh(t,n)}}var ac=!0;function OS(t,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,ih(t,n,a,s)}finally{Y.p=f,P.T=u}}function zS(t,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,ih(t,n,a,s)}finally{Y.p=f,P.T=u}}function ih(t,n,a,s){if(ac){var u=ah(s);if(u===null)Xf(t,n,s,rc,a),U0(t,s);else if(BS(u,t,n,a,s))s.stopPropagation();else if(U0(t,s),n&4&&-1<PS.indexOf(t)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Tt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var B=1<<31-Ot(g);b.entanglements[1]|=B,g&=~B}Di(f),(Ne&6)===0&&(Gl=E()+500,Mo(0))}}break;case 31:case 13:b=tr(f,2),b!==null&&Xn(b,f,2),Xl(),nh(f,2)}if(f=ah(s),f===null&&Xf(t,n,s,rc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Xf(t,n,s,null,a)}}function ah(t){return t=ru(t),rh(t)}var rc=null;function rh(t){if(rc=null,t=j(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function D0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case dt:return 2;case at:return 8;case lt:case kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var sh=!1,Ua=null,La=null,Na=null,wo=new Map,Do=new Map,Oa=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U0(t,n){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&C0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function BS(t,n,a,s,u){switch(n){case"focusin":return Ua=Uo(Ua,t,n,a,s,u),!0;case"dragenter":return La=Uo(La,t,n,a,s,u),!0;case"mouseover":return Na=Uo(Na,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,s,u)),!0}return!1}function L0(t){var n=j(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){w0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Vs(t.priority,function(){w0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);au=s,a.target.dispatchEvent(s),au=null}else return n=rt(a),n!==null&&C0(n),t.blockedOn=a,!1;n.shift()}return!0}function N0(t,n,a){sc(t)&&a.delete(n)}function IS(){sh=!1,Ua!==null&&sc(Ua)&&(Ua=null),La!==null&&sc(La)&&(La=null),Na!==null&&sc(Na)&&(Na=null),wo.forEach(N0),Do.forEach(N0)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,IS)))}var lc=null;function O0(t){lc!==t&&(lc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(rh(s||a)===null)continue;break}var f=rt(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function fs(t){function n(B){return oc(B,t)}Ua!==null&&oc(Ua,t),La!==null&&oc(La,t),Na!==null&&oc(Na,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Oa.length;a++){var s=Oa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&Oa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[xn]||null;if(typeof f=="function")g||O0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[xn]||null)b=g.formAction;else if(rh(u)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),O0(a)}}}function z0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function oh(t){this._internalRoot=t}cc.prototype.render=oh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=$n();A0(a,s,t,n,null,null)},cc.prototype.unmount=oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;A0(t.current,2,null,t,null,null),Xl(),n[ha]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ja();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,t),a===0&&L0(t)}};var P0=e.version;if(P0!=="19.2.0")throw Error(r(527,P0,"19.2.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var FS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{vt=uc.inject(FS),Dt=uc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Xm,f=km,g=Wm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,s,null,u,f,g,z0),t[ha]=n.current,Vf(t),new oh(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Xm,g=km,b=Wm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=T0(t,1,!0,n,a??null,s,u,B,f,g,b,z0),n.context=b0(null),a=n.current,s=$n(),s=Ur(s),u=ya(s),u.callback=null,Sa(a,u,s),a=s,n.current.lanes=a,Ln(n,a),Di(n),t[ha]=n.current,Vf(t),new cc(n)},No.version="19.2.0",No}var q0;function KS(){if(q0)return ch.exports;q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ch.exports=ZS(),ch.exports}var QS=KS(),Tr=Gd();const Xa=GS(Tr),$e={accent:"#e8e3db",accentBorder:"rgba(255,255,255,0.1)",textPrimary:"#e8e3db",textSecondary:"rgba(210,205,196,0.82)",textMuted:"rgba(162,156,146,0.72)",textLabel:"rgba(188,182,172,0.78)",bgBase:"#020611",bgCard:"rgba(10,8,20,0.62)",bgSocial:"rgba(8,6,18,0.55)",bgSocialHover:"rgba(22,18,34,0.78)",cardBorder:"rgba(255,255,255,0.09)",cardBorderLeft:"rgba(255,255,255,0.14)",techBg:"rgba(255,255,255,0.05)",techText:"rgba(222,217,208,0.88)",projectText:"rgba(188,182,172,0.8)"},JS="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",pn={xs:11,sm:12,base:13,md:14,lg:18,xl:20,h1:36,medium:500,semibold:600,bold:700},pi={base:{padding:"8px 18px",borderRadius:8,fontFamily:JS,fontWeight:400,fontSize:13,letterSpacing:"0.01em",cursor:"pointer",transition:"all 0.15s ease",backdropFilter:"blur(14px)",border:"1px solid rgba(255,255,255,0.09)",background:"rgba(8,6,18,0.55)",color:"rgba(188,182,172,0.68)"},active:{color:"#e8e3db",border:"1px solid rgba(232,227,219,0.22)",background:"rgba(255,255,255,0.08)",fontWeight:500},inactive:{color:"rgba(188,182,172,0.68)",border:"1px solid rgba(255,255,255,0.09)",background:"rgba(8,6,18,0.55)",fontWeight:400},hoverEnter:o=>{o.style.color="rgba(228,224,216,0.9)",o.style.borderColor="rgba(255,255,255,0.18)",o.style.background="rgba(255,255,255,0.06)"},hoverLeave:o=>{o.style.color="rgba(188,182,172,0.68)",o.style.borderColor="rgba(255,255,255,0.09)",o.style.background="rgba(8,6,18,0.55)"}},$_={zNav:50,zOverlay:60};function $S(){return Xt.jsx("header",{style:{position:"fixed",top:18,left:20,zIndex:$_.zNav},children:Xt.jsx("h1",{style:{margin:0,fontSize:pn.xl,color:$e.textPrimary,fontWeight:pn.bold},children:"Hi, I'm Adithya"})})}var tv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Y0=Xa.createContext&&Xa.createContext(tv),tx=["attr","size","title"];function ex(o,e){if(o==null)return{};var i=nx(o,e),r,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);for(l=0;l<c.length;l++)r=c[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function nx(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function kc(){return kc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},kc.apply(this,arguments)}function j0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Wc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?j0(Object(i),!0).forEach(function(r){ix(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):j0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function ix(o,e,i){return e=ax(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function ax(o){var e=rx(o,"string");return typeof e=="symbol"?e:e+""}function rx(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function ev(o){return o&&o.map((e,i)=>Xa.createElement(e.tag,Wc({key:i},e.attr),ev(e.child)))}function Vd(o){return e=>Xa.createElement(sx,kc({attr:Wc({},o.attr)},e),ev(o.child))}function sx(o){var e=i=>{var{attr:r,size:l,title:c}=o,h=ex(o,tx),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),Xa.createElement("svg",kc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Wc(Wc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Xa.createElement("title",null,c),o.children)};return Y0!==void 0?Xa.createElement(Y0.Consumer,null,i=>e(i)):e(tv)}function ox(o){return Vd({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function lx(o){return Vd({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function cx(o){return Vd({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(o)}const ux={color:"#ffffff",padding:"8px 12px",borderRadius:10,background:$e.bgSocial,border:`1px solid ${$e.accentBorder}`,transition:"all 0.2s",cursor:"pointer",display:"flex",alignItems:"center"},fx=[{href:"https://github.com/AdithyaDevi3",icon:ox,label:"GitHub",target:"_blank"},{href:"https://www.linkedin.com/in/adithya-devi",icon:lx,label:"LinkedIn",target:"_blank"},{href:"mailto:adithya.r.devi02@gmail.com",icon:cx,label:"Email",target:void 0}];function hx(){return Xt.jsx("div",{style:{position:"fixed",bottom:20,left:"50%",transform:"translateX(-50%)",zIndex:$_.zOverlay,display:"flex",gap:12,pointerEvents:"auto"},children:fx.map(({href:o,icon:e,label:i,target:r})=>Xt.jsx("a",{href:o,target:r,rel:r?"noopener noreferrer":void 0,style:ux,onMouseEnter:l=>l.currentTarget.style.background=$e.bgSocialHover,onMouseLeave:l=>l.currentTarget.style.background=$e.bgSocial,children:Xt.jsx(e,{size:26})},i))})}function dx({route:o,setRoute:e}){const i=[{label:"Home",route:"home",active:o==="home"},{label:"About",route:"about",active:o==="about"}];return Xt.jsx("div",{style:{position:"fixed",top:16,right:16,zIndex:50,pointerEvents:"none"},children:Xt.jsx("div",{style:{pointerEvents:"auto",display:"flex",gap:8},children:i.map(r=>Xt.jsx("button",{onClick:()=>e(r.route),style:{...pi.base,...r.active?pi.active:pi.inactive},onMouseEnter:l=>pi.hoverEnter(l.currentTarget),onMouseLeave:l=>{const c=r.active;Object.assign(l.currentTarget.style,c?pi.active:pi.inactive)},children:r.label},r.route))})})}const dr=[{id:"ncr",name:"NCR Voyix",type:"career",title:"Mobile Development Intern",period:"Summer 2025",summary:"Built resilient mobile systems for retail operations and connected commerce experiences.",technologies:["React Native","Expo","GraphQL","TypeScript"],projects:[{name:"Retail Mobility Platform",summary:"Delivered polished mobile workflows for in-store operations."},{name:"API Integration Layer",summary:"Connected commerce services with reliable data flows."}],color:"#4b7bff",orbitRadius:6.7,orbitSpeed:.18,accent:"#73e0ff",size:8},{id:"novae",name:"Novae",type:"career",title:"Software Engineering Intern",period:"Summer 2024",summary:"Contributed to event-driven systems and modern web interfaces for a fast-moving product team.",technologies:["Spring Boot","Angular","Kafka","MongoDB"],projects:[{name:"Streaming Integration Services",summary:"Improved message-driven workflows and monitoring."},{name:"Internal Admin Console",summary:"Shipped a cleaner operational dashboard experience."}],color:"#2ec4b6",orbitRadius:8.8,orbitSpeed:.13,accent:"#7fffd4",size:8},{id:"adobe",name:"Adobe",type:"career",title:"Developer Platforms Intern",period:"Summer 2026",summary:"Exploring developer tooling and platform experiences at the intersection of product and engineering.",technologies:["Developer Platforms","APIs","Systems Design","Collaboration"],projects:[{name:"Platform Experience Research",summary:"Investigated scalable developer workflows and onboarding."},{name:"Tooling Improvements",summary:"Helped shape a more coherent internal developer experience."}],color:"#8b5cf6",orbitRadius:10.5,orbitSpeed:.11,accent:"#c29cff",size:8},{id:"research",name:"Research",type:"career",title:"Undergraduate Research",period:"Aug 2024 – May 2025",summary:"Studied translational glycomaterials and neural repair approaches in a collaborative lab setting.",technologies:["Research","Materials","Neuroscience","Experimentation"],projects:[{name:"Translational Glycomaterials",summary:"Investigated biomaterials for neural repair applications."},{name:"Lab Systems Support",summary:"Built reliable experimental and documentation workflows."}],color:"#1fb6d4",orbitRadius:5.6,orbitSpeed:.22,accent:"#8fe8ff",size:8},{id:"crystal",name:"Crystal Core",type:"core",title:"Interactive Crystal Animation",summary:"A dynamic 3D icosahedron with animated edges and color-cycling waves.",technologies:["Three.js","WebGL","React"],color:"#66e8ff",orbitRadius:3.2,orbitSpeed:.08,accent:"#19c7b8",size:10},{id:"star-1",name:"Nova Prime",type:"star",summary:"A luminous stellar body orbiting in the outer regions.",color:"#ffffff",orbitRadius:12,orbitSpeed:.09,accent:"#ffeb3b",size:3},{id:"star-2",name:"Celestial Wanderer",type:"star",summary:"An independent star traversing the galactic plane.",color:"#ffc107",orbitRadius:14,orbitSpeed:.07,accent:"#ffb300",size:2},{id:"planet-1",name:"Terra Prime",type:"planet",summary:"An habitable world in the middle band of the galaxy.",color:"#4db8ff",orbitRadius:9,orbitSpeed:.12,accent:"#00bfff",size:5},{id:"planet-2",name:"Scarlet Titan",type:"planet",summary:"A gas giant with swirling atmospheres.",color:"#ff6b6b",orbitRadius:11,orbitSpeed:.1,accent:"#ff4444",size:6},{id:"moon-1",name:"Luna Echo",type:"moon",summary:"A small moon reflecting ancient light.",color:"#e0e0e0",orbitRadius:7,orbitSpeed:.15,accent:"#b0b0b0",size:2},{id:"moon-2",name:"Void Shadow",type:"moon",summary:"A mysterious moon orbiting in the shadows.",color:"#a8a8a8",orbitRadius:13,orbitSpeed:.06,accent:"#808080",size:2},{id:"nebula-1",name:"Nebula Veil",type:"nebula",summary:"A diffuse cloud of stellar material.",color:"#9366ff",orbitRadius:15,orbitSpeed:.05,accent:"#7a4dd8",size:4},{id:"comet-1",name:"Swift Comet",type:"comet",summary:"A fast-moving icy body with a glowing tail.",color:"#66ffff",orbitRadius:16,orbitSpeed:.04,accent:"#33ffff",size:3}],px="/assets/ncr-voyix-logo-Nm1_RoFH.png",mx="/assets/novae-logo-Cgcifp-f.png",gx="/assets/adobe-logo-tf7ghYQf.png",_x="/assets/curo-logo-CIN1M8Qz.png",Z0={ncr:px,novae:mx,adobe:gx,research:_x};function vx(){const o=Tr.useMemo(()=>({career:dr.filter(r=>r.type==="career"),core:dr.filter(r=>r.type==="core"),star:dr.filter(r=>r.type==="star"),planet:dr.filter(r=>r.type==="planet"),moon:dr.filter(r=>r.type==="moon"),nebula:dr.filter(r=>r.type==="nebula"),comet:dr.filter(r=>r.type==="comet")}),[]),e=r=>Xt.jsxs("div",{style:{border:`1px solid ${$e.cardBorder}`,borderRadius:12,padding:16,background:$e.bgCard},children:[Xt.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,marginBottom:12},children:[Xt.jsx("div",{style:{width:12,height:12,borderRadius:"50%",backgroundColor:r.color,boxShadow:`0 0 8px ${r.color}`,flexShrink:0,marginTop:4}}),Xt.jsxs("div",{style:{flex:1},children:[Xt.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[Z0[r.id]&&Xt.jsx("img",{src:Z0[r.id],alt:r.name,style:{height:28,width:"auto",maxWidth:80,objectFit:"contain",filter:"brightness(0) invert(1)",opacity:.85}}),Xt.jsx("h3",{style:{margin:0,color:$e.textPrimary,fontSize:pn.lg,fontWeight:pn.semibold},children:r.name})]}),r.title&&Xt.jsx("p",{style:{margin:"0 0 4px",color:$e.textLabel,fontSize:pn.sm,textTransform:"uppercase",letterSpacing:"0.1em"},children:r.title}),r.period&&Xt.jsx("p",{style:{margin:0,color:$e.textMuted,fontSize:pn.xs},children:r.period})]})]}),r.summary&&Xt.jsx("p",{style:{margin:"0 0 12px",color:$e.textSecondary,fontSize:pn.base,lineHeight:1.5},children:r.summary}),r.technologies&&r.technologies.length>0&&Xt.jsxs("div",{style:{marginBottom:12},children:[Xt.jsx("p",{style:{margin:"0 0 6px",color:$e.textLabel,fontSize:pn.xs,textTransform:"uppercase",letterSpacing:"0.1em"},children:"Tech Stack"}),Xt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:r.technologies.map(l=>Xt.jsx("span",{style:{padding:"4px 8px",borderRadius:6,background:$e.techBg,color:$e.techText,fontSize:pn.xs},children:l},l))})]}),r.projects&&r.projects.length>0&&Xt.jsxs("div",{children:[Xt.jsx("p",{style:{margin:"0 0 6px",color:$e.textLabel,fontSize:pn.xs,textTransform:"uppercase",letterSpacing:"0.1em"},children:"Projects"}),Xt.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:r.projects.map(l=>Xt.jsxs("div",{style:{paddingLeft:8,borderLeft:`2px solid ${$e.cardBorderLeft}`},children:[Xt.jsx("p",{style:{margin:0,color:$e.textPrimary,fontWeight:pn.medium,fontSize:pn.sm},children:l.name}),Xt.jsx("p",{style:{margin:"2px 0 0",color:$e.projectText,fontSize:pn.xs},children:l.summary})]},l.name))})]})]},r.id),i={margin:"0 0 16px",fontSize:pn.xl,color:$e.accent,fontWeight:pn.semibold,textTransform:"uppercase",letterSpacing:"0.1em"};return Xt.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",padding:"80px 20px 80px",background:$e.bgBase},children:Xt.jsxs("div",{style:{width:"100%",maxWidth:"1000px"},children:[Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("p",{style:{margin:0,color:$e.textLabel,textTransform:"uppercase",letterSpacing:"0.2em",fontSize:pn.sm},children:"Galaxy Atlas"}),Xt.jsx("h1",{style:{margin:"8px 0 12px",fontSize:pn.h1,color:$e.textPrimary,fontWeight:pn.bold},children:"Explore the Universe"}),Xt.jsx("p",{style:{margin:0,color:$e.textSecondary,fontSize:pn.md,lineHeight:1.6},children:"A comprehensive directory of all celestial objects orbiting throughout the galaxy."})]}),o.career.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"🌟 Career Experiences"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.career.map(e)})]}),o.core.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"💎 Core Systems"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.core.map(e)})]}),o.planet.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"🪐 Planets"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.planet.map(e)})]}),o.star.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"⭐ Stars"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.star.map(e)})]}),o.moon.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"🌙 Moons"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.moon.map(e)})]}),o.nebula.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"🌌 Nebulae"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.nebula.map(e)})]}),o.comet.length>0&&Xt.jsxs("div",{style:{marginBottom:32},children:[Xt.jsx("h2",{style:i,children:"☄️ Comets"}),Xt.jsx("div",{style:{display:"grid",gap:12},children:o.comet.map(e)})]})]})})}const Xd="180",yx=0,K0=1,Sx=2,nv=1,xx=2,sa=3,Ya=0,kn=1,oa=2,ka=0,Us=1,Ns=2,Q0=3,J0=4,Mx=5,Mr=100,Ex=101,Tx=102,bx=103,Ax=104,Rx=200,Cx=201,wx=202,Dx=203,Kh=204,Qh=205,Ux=206,Lx=207,Nx=208,Ox=209,zx=210,Px=211,Bx=212,Ix=213,Fx=214,Jh=0,$h=1,td=2,Os=3,ed=4,nd=5,id=6,ad=7,iv=0,Hx=1,Gx=2,Wa=0,Vx=1,Xx=2,kx=3,av=4,Wx=5,qx=6,Yx=7,rv=300,zs=301,Ps=302,rd=303,sd=304,Jc=306,od=1e3,br=1001,ld=1002,Ei=1003,jx=1004,fc=1005,Ni=1006,ph=1007,Ar=1008,zi=1009,sv=1010,ov=1011,Wo=1012,kd=1013,Rr=1014,la=1015,Ko=1016,Wd=1017,qd=1018,qo=1020,lv=35902,cv=35899,uv=1021,fv=1022,Mi=1023,Yo=1026,jo=1027,hv=1028,Yd=1029,dv=1030,jd=1031,Zd=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,Sd=37812,xd=37813,Md=37814,Ed=37815,Td=37816,bd=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,Dd=36492,Ud=36494,Ld=36495,Nd=36283,Od=36284,zd=36285,Pd=36286,Zx=3200,Kx=3201,Qx=0,Jx=1,Va="",ni="srgb",Bs="srgb-linear",qc="linear",Ve="srgb",hs=7680,$0=519,$x=512,tM=513,eM=514,pv=515,nM=516,iM=517,aM=518,rM=519,Bd=35044,t_="300 es",Oi=2e3,Yc=2001;class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Id=180/Math.PI;function qa(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function sM(o,e){return(o%e+e)%e}function gh(o,e,i){return(1-i)*o+i*e}function Li(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xe(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ge{constructor(e=0,i=0){ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],v=r[l+3];const y=c[h+0],M=c[h+1],T=c[h+2],A=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=T,e[i+3]=A;return}if(v!==A||m!==y||p!==M||S!==T){let x=1-d;const _=m*y+p*M+S*T+v*A,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const H=Math.sqrt(L),F=Math.atan2(H,_*N);x=Math.sin(x*F)/H,d=Math.sin(d*F)/H}const D=d*N;if(m=m*x+y*D,p=p*x+M*D,S=S*x+T*D,v=v*x+A*D,x===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=H,p*=H,S*=H,v*=H}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],v=c[h],y=c[h+1],M=c[h+2],T=c[h+3];return e[i]=d*T+S*v+m*M-p*y,e[i+1]=m*T+S*y+p*v-d*M,e[i+2]=p*T+S*M+d*y-m*v,e[i+3]=S*T-d*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),v=d(c/2),y=m(r/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*S*v+p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v-y*M*T;break;case"YXZ":this._x=y*S*v+p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v+y*M*T;break;case"ZXY":this._x=y*S*v-p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v-y*M*T;break;case"ZYX":this._x=y*S*v-p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v+y*M*T;break;case"YZX":this._x=y*S*v+p*M*T,this._y=p*M*v+y*S*T,this._z=p*S*T-y*M*v,this._w=p*S*v-y*M*T;break;case"XZY":this._x=y*S*v-p*M*T,this._y=p*M*v-y*S*T,this._z=p*S*T+y*M*v,this._w=p*S*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-r*p,this._z=c*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,y=Math.sin(i*S)/p;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(e_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(e_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*S,this.y=r+m*S+d*p-c*v,this.z=l+m*v+c*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Re(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new k,e_=new Qo;class me{constructor(e,i,r,l,c,h,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],v=r[7],y=r[2],M=r[5],T=r[8],A=l[0],x=l[3],_=l[6],N=l[1],L=l[4],D=l[7],H=l[2],F=l[5],z=l[8];return c[0]=h*A+d*N+m*H,c[3]=h*x+d*L+m*F,c[6]=h*_+d*D+m*z,c[1]=p*A+S*N+v*H,c[4]=p*x+S*L+v*F,c[7]=p*_+S*D+v*z,c[2]=y*A+M*N+T*H,c[5]=y*x+M*L+T*F,c[8]=y*_+M*D+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*c*S+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=S*h-d*p,y=d*m-S*c,M=p*c-h*m,T=i*v+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(l*p-S*r)*A,e[2]=(d*r-l*h)*A,e[3]=y*A,e[4]=(S*i-l*m)*A,e[5]=(l*c-d*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vh.makeScale(e,i)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new me;function mv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oM(){const o=jc("canvas");return o.style.display="block",o}const n_={};function Zo(o){o in n_||(n_[o]=!0,console.warn(o))}function lM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const i_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cM(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ve&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ve&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:e,whitePoint:r,transfer:qc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Ve,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),o}const Le=cM();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ds;class uM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ds===void 0&&(ds=jc("canvas")),ds.width=e.width,ds.height=e.height;const l=ds.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fM=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(yh(l[h].image)):c.push(yh(l[h]))}else c=yh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function yh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?uM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;const Sh=new k;class Bn extends Fs{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=br,l=br,c=Ni,h=Ar,d=Mi,m=zi,p=Bn.DEFAULT_ANISOTROPY,S=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=qa(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sh).x}get height(){return this.source.getSize(Sh).y}get depth(){return this.source.getSize(Sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=rv;Bn.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],v=m[8],y=m[1],M=m[5],T=m[9],A=m[2],x=m[6],_=m[10];if(Math.abs(S-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-x)<.01){if(Math.abs(S+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,H=(_+1)/2,F=(S+y)/4,z=(v+A)/4,W=(T+x)/4;return L>D&&L>H?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=F/r,c=z/r):D>H?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=F/l,c=W/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=z/c,l=W/c),this.set(r,l,c,i),this}let N=Math.sqrt((x-T)*(x-T)+(v-A)*(v-A)+(y-S)*(y-S));return Math.abs(N)<.001&&(N=1),this.x=(x-T)/N,this.y=(v-A)/N,this.z=(y-S)/N,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Re(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dM extends Fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,e,i),this.scissorTest=!1,this.viewport=new ke(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Bn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends dM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class gv extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),dc.subVectors(this.max,Oo),ps.subVectors(e.a,Oo),ms.subVectors(e.b,Oo),gs.subVectors(e.c,Oo),Pa.subVectors(ms,ps),Ba.subVectors(gs,ms),pr.subVectors(ps,gs);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-pr.z,pr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,pr.z,0,-pr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-pr.y,pr.x,0];return!xh(i,ps,ms,gs,dc)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,ps,ms,gs,dc))?!1:(pc.crossVectors(Pa,Ba),i=[pc.x,pc.y,pc.z],xh(i,ps,ms,gs,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ea=[new k,new k,new k,new k,new k,new k,new k,new k],yi=new k,hc=new Jo,ps=new k,ms=new k,gs=new k,Pa=new k,Ba=new k,pr=new k,Oo=new k,dc=new k,pc=new k,mr=new k;function xh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){mr.fromArray(o,c);const d=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),S=r.dot(mr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const mM=new Jo,zo=new k,Mh=new k;class $o{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(Mh)),this.expandByPoint(zo.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const na=new k,Eh=new k,mc=new k,Ia=new k,Th=new k,gc=new k,bh=new k;class Qd{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Eh.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),Ia.copy(this.origin).sub(Eh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(mc),d=Ia.dot(this.direction),m=-Ia.dot(mc),p=Ia.lengthSq(),S=Math.abs(1-h*h);let v,y,M,T;if(S>0)if(v=h*m-d,y=h*d-m,T=c*S,v>=0)if(y>=-T)if(y<=T){const A=1/S;v*=A,y*=A,M=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;else y<=-T?(v=Math.max(0,-(-h*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p):y<=T?(v=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(v=Math.max(0,-(h*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p);else y=h>0?-c:c,v=Math.max(0,-(h*y+d)),M=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Eh).addScaledVector(mc,y),M}intersectSphere(e,i){na.subVectors(e.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),S>=0?(c=(e.min.y-y.y)*S,h=(e.max.y-y.y)*S):(c=(e.max.y-y.y)*S,h=(e.min.y-y.y)*S),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,na)!==null}intersectTriangle(e,i,r,l,c){Th.subVectors(i,e),gc.subVectors(r,e),bh.crossVectors(Th,gc);let h=this.direction.dot(bh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,e);const m=d*this.direction.dot(gc.crossVectors(Ia,gc));if(m<0)return null;const p=d*this.direction.dot(Th.cross(Ia));if(p<0||m+p>h)return null;const S=-d*Ia.dot(bh);return S<0?null:this.at(S/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,r,l,c,h,d,m,p,S,v,y,M,T,A,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,S,v,y,M,T,A,x)}set(e,i,r,l,c,h,d,m,p,S,v,y,M,T,A,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=S,_[10]=v,_[14]=y,_[3]=M,_[7]=T,_[11]=A,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),h=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=T+M*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*S,M=m*v,T=p*S,A=p*v;i[0]=y+A*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=M*d-T,i[6]=A+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*S,M=m*v,T=p*S,A=p*v;i[0]=y-A*d,i[4]=-h*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*S,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*S,M=h*v,T=d*S,A=d*v;i[0]=m*S,i[4]=T*p-M,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=A-y*v,i[8]=T*v+M,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*v+T,i[10]=y-A*v}else if(e.order==="XZY"){const y=h*m,M=h*p,T=d*m,A=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=y*v+A,i[5]=h*S,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*S,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,_M)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Fa.crossVectors(r,ti),Fa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Fa.crossVectors(r,ti)),Fa.normalize(),_c.crossVectors(ti,Fa),l[0]=Fa.x,l[4]=_c.x,l[8]=ti.x,l[1]=Fa.y,l[5]=_c.y,l[9]=ti.y,l[2]=Fa.z,l[6]=_c.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],v=r[5],y=r[9],M=r[13],T=r[2],A=r[6],x=r[10],_=r[14],N=r[3],L=r[7],D=r[11],H=r[15],F=l[0],z=l[4],W=l[8],w=l[12],C=l[1],G=l[5],J=l[9],ut=l[13],gt=l[2],ht=l[6],P=l[10],Y=l[14],q=l[3],St=l[7],bt=l[11],O=l[15];return c[0]=h*F+d*C+m*gt+p*q,c[4]=h*z+d*G+m*ht+p*St,c[8]=h*W+d*J+m*P+p*bt,c[12]=h*w+d*ut+m*Y+p*O,c[1]=S*F+v*C+y*gt+M*q,c[5]=S*z+v*G+y*ht+M*St,c[9]=S*W+v*J+y*P+M*bt,c[13]=S*w+v*ut+y*Y+M*O,c[2]=T*F+A*C+x*gt+_*q,c[6]=T*z+A*G+x*ht+_*St,c[10]=T*W+A*J+x*P+_*bt,c[14]=T*w+A*ut+x*Y+_*O,c[3]=N*F+L*C+D*gt+H*q,c[7]=N*z+L*G+D*ht+H*St,c[11]=N*W+L*J+D*P+H*bt,c[15]=N*w+L*ut+D*Y+H*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],v=e[6],y=e[10],M=e[14],T=e[3],A=e[7],x=e[11],_=e[15];return T*(+c*m*v-l*p*v-c*d*y+r*p*y+l*d*M-r*m*M)+A*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*S-c*m*S)+x*(+i*p*v-i*d*M-c*h*v+r*h*M+c*d*S-r*p*S)+_*(-l*d*S-i*m*v+i*d*y+l*h*v-r*h*y+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=e[9],y=e[10],M=e[11],T=e[12],A=e[13],x=e[14],_=e[15],N=v*x*p-A*y*p+A*m*M-d*x*M-v*m*_+d*y*_,L=T*y*p-S*x*p-T*m*M+h*x*M+S*m*_-h*y*_,D=S*A*p-T*v*p+T*d*M-h*A*M-S*d*_+h*v*_,H=T*v*m-S*A*m-T*d*y+h*A*y+S*d*x-h*v*x,F=i*N+r*L+l*D+c*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=N*z,e[1]=(A*y*c-v*x*c-A*l*M+r*x*M+v*l*_-r*y*_)*z,e[2]=(d*x*c-A*m*c+A*l*p-r*x*p-d*l*_+r*m*_)*z,e[3]=(v*m*c-d*y*c-v*l*p+r*y*p+d*l*M-r*m*M)*z,e[4]=L*z,e[5]=(S*x*c-T*y*c+T*l*M-i*x*M-S*l*_+i*y*_)*z,e[6]=(T*m*c-h*x*c-T*l*p+i*x*p+h*l*_-i*m*_)*z,e[7]=(h*y*c-S*m*c+S*l*p-i*y*p-h*l*M+i*m*M)*z,e[8]=D*z,e[9]=(T*v*c-S*A*c-T*r*M+i*A*M+S*r*_-i*v*_)*z,e[10]=(h*A*c-T*d*c+T*r*p-i*A*p-h*r*_+i*d*_)*z,e[11]=(S*d*c-h*v*c-S*r*p+i*v*p+h*r*M-i*d*M)*z,e[12]=H*z,e[13]=(S*A*l-T*v*l+T*r*y-i*A*y-S*r*x+i*v*x)*z,e[14]=(T*d*l-h*A*l-T*r*m+i*A*m+h*r*x-i*d*x)*z,e[15]=(h*v*l-S*d*l+S*r*m-i*v*m-h*r*y+i*d*y)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,S=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,v=d+d,y=c*p,M=c*S,T=c*v,A=h*S,x=h*v,_=d*v,N=m*p,L=m*S,D=m*v,H=r.x,F=r.y,z=r.z;return l[0]=(1-(A+_))*H,l[1]=(M+D)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(y+_))*F,l[6]=(x+N)*F,l[7]=0,l[8]=(T+L)*z,l[9]=(x-N)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const h=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,S=1/h,v=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=S,Si.elements[5]*=S,Si.elements[6]*=S,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Oi,m=!1){const p=this.elements,S=2*c/(i-e),v=2*c/(r-l),y=(i+e)/(i-e),M=(r+l)/(r-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===Oi)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Yc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Oi,m=!1){const p=this.elements,S=2/(i-e),v=2/(r-l),y=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===Oi)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===Yc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new k,Si=new Ke,gM=new k(0,0,0),_M=new k(1,1,1),Fa=new k,_c=new k,ti=new k,r_=new Ke,s_=new Qo;class fa{constructor(e=0,i=0,r=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return s_.setFromEuler(this),this.setFromQuaternion(s_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const o_=new k,vs=new Qo,ia=new Ke,vc=new k,Po=new k,yM=new k,SM=new Qo,l_=new k(1,0,0),c_=new k(0,1,0),u_=new k(0,0,1),f_={type:"added"},xM={type:"removed"},ys={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Rn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new k,i=new fa,r=new Qo,l=new k(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new me}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(l_,e)}rotateY(e){return this.rotateOnAxis(c_,e)}rotateZ(e){return this.rotateOnAxis(u_,e)}translateOnAxis(e,i){return o_.copy(e).applyQuaternion(this.quaternion),this.position.add(o_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(l_,e)}translateY(e){return this.translateOnAxis(c_,e)}translateZ(e){return this.translateOnAxis(u_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vc.copy(e):vc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Po,vc,this.up):ia.lookAt(vc,Po,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ia),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f_),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xM),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ia.multiply(e.parent.matrixWorld)),e.applyMatrix4(ia),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f_),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),v=h(e.shapes),y=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new k(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new k,aa=new k,Rh=new k,ra=new k,Ss=new k,xs=new k,h_=new k,Ch=new k,wh=new k,Dh=new k,Uh=new ke,Lh=new ke,Nh=new ke;class mi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),xi.subVectors(e,i),l.cross(xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){xi.subVectors(l,i),aa.subVectors(r,i),Rh.subVectors(e,i);const h=xi.dot(xi),d=xi.dot(aa),m=xi.dot(Rh),p=aa.dot(aa),S=aa.dot(Rh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(p*m-d*S)*y,T=(h*S-d*m)*y;return c.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(e,i),Lh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Uh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(e,i,r,l){return xi.subVectors(r,i),aa.subVectors(e,i),xi.cross(aa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),xi.cross(aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Ss.subVectors(l,r),xs.subVectors(c,r),Ch.subVectors(e,r);const m=Ss.dot(Ch),p=xs.dot(Ch);if(m<=0&&p<=0)return i.copy(r);wh.subVectors(e,l);const S=Ss.dot(wh),v=xs.dot(wh);if(S>=0&&v<=S)return i.copy(l);const y=m*v-S*p;if(y<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(Ss,h);Dh.subVectors(e,c);const M=Ss.dot(Dh),T=xs.dot(Dh);if(T>=0&&M<=T)return i.copy(c);const A=M*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(xs,d);const x=S*T-M*v;if(x<=0&&v-S>=0&&M-T>=0)return h_.subVectors(c,l),d=(v-S)/(v-S+(M-T)),i.copy(l).addScaledVector(h_,d);const _=1/(x+A+y);return h=A*_,d=y*_,i.copy(r).addScaledVector(Ss,h).addScaledVector(xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=r,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Le.workingColorSpace){if(e=sM(e,1),i=Re(i,0,1),r=Re(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=ni){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ni){const r=vv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Le.workingToColorSpace(Un.copy(this),e),Math.round(Re(Un.r*255,0,255))*65536+Math.round(Re(Un.g*255,0,255))*256+Math.round(Re(Un.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,c=Un.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ni){Le.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==ni?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+e,Ha.s+i,Ha.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ha),e.getHSL(yc);const r=gh(Ha.h,yc.h,i),l=gh(Ha.s,yc.s,i),c=gh(Ha.l,yc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new le;le.NAMES=vv;let MM=0;class wr extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Us,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yv extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new k,Sc=new ge;let EM=0;class mn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Bd,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(e),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Li(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Li(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Li(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Li(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Li(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}}class Sv extends mn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class xv extends mn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ti extends mn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let TM=0;const di=new Ke,zh=new Rn,Ms=new k,ei=new Jo,Bo=new Jo,Sn=new k;class Wn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?xv:Sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ti(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ei.min,Bo.min),ei.expandByPoint(Sn),Sn.addVectors(ei.max,Bo.max),ei.expandByPoint(Sn)):(ei.expandByPoint(Bo.min),ei.expandByPoint(Bo.max))}ei.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)Sn.fromBufferAttribute(d,p),m&&(Ms.fromBufferAttribute(e,p),Sn.add(Ms)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new k,m[W]=new k;const p=new k,S=new k,v=new k,y=new ge,M=new ge,T=new ge,A=new k,x=new k;function _(W,w,C){p.fromBufferAttribute(r,W),S.fromBufferAttribute(r,w),v.fromBufferAttribute(r,C),y.fromBufferAttribute(c,W),M.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),S.sub(p),v.sub(p),M.sub(y),T.sub(y);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(A.copy(S).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),x.copy(v).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(G),d[W].add(A),d[w].add(A),d[C].add(A),m[W].add(x),m[w].add(x),m[C].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,J=C.count;for(let ut=G,gt=G+J;ut<gt;ut+=3)_(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const L=new k,D=new k,H=new k,F=new k;function z(W){H.fromBufferAttribute(l,W),F.copy(H);const w=d[W];L.copy(w),L.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[W])<0?-1:1;h.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,J=C.count;for(let ut=G,gt=G+J;ut<gt;ut+=3)z(e.getX(ut+0)),z(e.getX(ut+1)),z(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new mn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new k,c=new k,h=new k,d=new k,m=new k,p=new k,S=new k,v=new k;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,x),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,x),d.add(S),m.add(S),p.add(S),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),r.setXYZ(y+0,S.x,S.y,S.z),r.setXYZ(y+1,S.x,S.y,S.z),r.setXYZ(y+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,v=d.normalized,y=new p.constructor(m.length*S);let M=0,T=0;for(let A=0,x=m.length;A<x;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*S;for(let _=0;_<S;_++)y[T++]=p[M++]}return new mn(y,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Wn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,v=p.length;S<v;S++){const y=p[S],M=e(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],v=c[p];for(let y=0,M=v.length;y<M;y++)S.push(v[y].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d_=new Ke,gr=new Qd,xc=new $o,p_=new k,Mc=new k,Ec=new k,Tc=new k,Ph=new k,bc=new k,m_=new k,Ac=new k;class ca extends Rn{constructor(e=new Wn,i=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],v=c[m];S!==0&&(Ph.fromBufferAttribute(v,e),h?bc.addScaledVector(Ph,S):bc.addScaledVector(Ph.sub(i),S))}i.add(bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),gr.copy(e.ray).recast(e.near),!(xc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(xc,p_)===null||gr.origin.distanceToSquared(p_)>(e.far-e.near)**2))&&(d_.copy(c).invert(),gr.copy(e.ray).applyMatrix4(d_),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,gr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const x=y[T],_=h[x.materialIndex],N=Math.max(x.start,M.start),L=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const F=d.getX(D),z=d.getX(D+1),W=d.getX(D+2);l=Rc(this,_,e,r,p,S,v,F,z,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let x=T,_=A;x<_;x+=3){const N=d.getX(x),L=d.getX(x+1),D=d.getX(x+2);l=Rc(this,h,e,r,p,S,v,N,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const x=y[T],_=h[x.materialIndex],N=Math.max(x.start,M.start),L=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const F=D,z=D+1,W=D+2;l=Rc(this,_,e,r,p,S,v,F,z,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=T,_=A;x<_;x+=3){const N=x,L=x+1,D=x+2;l=Rc(this,h,e,r,p,S,v,N,L,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function bM(o,e,i,r,l,c,h,d){let m;if(e.side===kn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ya,d),m===null)return null;Ac.copy(d),Ac.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ac);return p<i.near||p>i.far?null:{distance:p,point:Ac.clone(),object:o}}function Rc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Mc),o.getVertexPosition(m,Ec),o.getVertexPosition(p,Tc);const S=bM(o,e,i,r,Mc,Ec,Tc,m_);if(S){const v=new k;mi.getBarycoord(m_,Mc,Ec,Tc,v),l&&(S.uv=mi.getInterpolatedAttribute(l,d,m,p,v,new ge)),c&&(S.uv1=mi.getInterpolatedAttribute(c,d,m,p,v,new ge)),h&&(S.normal=mi.getInterpolatedAttribute(h,d,m,p,v,new k),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new k,materialIndex:0};mi.getNormal(Mc,Ec,Tc,y.normal),S.face=y,S.barycoord=v}return S}class tl extends Wn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(S,3)),this.setAttribute("uv",new Ti(v,2));function T(A,x,_,N,L,D,H,F,z,W,w){const C=D/z,G=H/W,J=D/2,ut=H/2,gt=F/2,ht=z+1,P=W+1;let Y=0,q=0;const St=new k;for(let bt=0;bt<P;bt++){const O=bt*G-ut;for(let et=0;et<ht;et++){const xt=et*C-J;St[A]=xt*N,St[x]=O*L,St[_]=gt,p.push(St.x,St.y,St.z),St[A]=0,St[x]=0,St[_]=F>0?1:-1,S.push(St.x,St.y,St.z),v.push(et/z),v.push(1-bt/W),Y+=1}}for(let bt=0;bt<W;bt++)for(let O=0;O<z;O++){const et=y+O+ht*bt,xt=y+O+ht*(bt+1),Ct=y+(O+1)+ht*(bt+1),Pt=y+(O+1)+ht*bt;m.push(et,xt,Pt),m.push(xt,Ct,Pt),q+=6}d.addGroup(M,q,w),M+=q,y+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const r=Is(o[i]);for(const l in r)e[l]=r[l]}return e}function AM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Mv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const RM={clone:Is,merge:Pn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=wM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=AM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ev extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new k,g_=new ge,__=new ge;class ii extends Ev{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Id*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-e/Ga.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(mh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class DM extends Rn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Es,Ts,e,i);l.layers=this.layers,this.add(l);const c=new ii(Es,Ts,e,i);c.layers=this.layers,this.add(c);const h=new ii(Es,Ts,e,i);h.layers=this.layers,this.add(h);const d=new ii(Es,Ts,e,i);d.layers=this.layers,this.add(d);const m=new ii(Es,Ts,e,i);m.layers=this.layers,this.add(m);const p=new ii(Es,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Yc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(v,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Tv extends Bn{constructor(e=[],i=zs,r,l,c,h,d,m,p,S){super(e,i,r,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class UM extends Cr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Pi({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ka});c.uniforms.tEquirect.value=i;const h=new ca(l,c),d=i.minFilter;return i.minFilter===Ar&&(i.minFilter=Ni),new DM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Xo extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LM={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const x=i.getJointPose(A,r),_=this._getHandJoint(p,A);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=S.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Jd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=i}clone(){return new Jd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class OM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Bd,this.updateRanges=[],this.version=0,this.uuid=qa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new k;class Zc{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Li(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Xe(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Xe(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Li(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Li(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Li(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Li(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Xe(i,this.array),r=Xe(r,this.array),l=Xe(l,this.array),c=Xe(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new mn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bv extends wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const Io=new k,As=new k,Rs=new k,Cs=new ge,Fo=new ge,Av=new Ke,Cc=new k,Ho=new k,wc=new k,v_=new ge,Ih=new ge,y_=new ge;class zM extends Rn{constructor(e=new bv){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Wn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new OM(i,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Zc(r,3,0,!1)),bs.setAttribute("uv",new Zc(r,2,3,!1))}this.geometry=bs,this.material=e,this.center=new ge(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Av.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Dc(Cc.set(-.5,-.5,0),Rs,h,As,l,c),Dc(Ho.set(.5,-.5,0),Rs,h,As,l,c),Dc(wc.set(.5,.5,0),Rs,h,As,l,c),v_.set(0,0),Ih.set(1,0),y_.set(1,1);let d=e.ray.intersectTriangle(Cc,Ho,wc,!1,Io);if(d===null&&(Dc(Ho.set(-.5,.5,0),Rs,h,As,l,c),Ih.set(0,1),d=e.ray.intersectTriangle(Cc,wc,Ho,!1,Io),d===null))return;const m=e.ray.origin.distanceTo(Io);m<e.near||m>e.far||i.push({distance:m,point:Io.clone(),uv:mi.getInterpolation(Io,Cc,Ho,wc,v_,Ih,y_,new ge),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dc(o,e,i,r,l,c){Cs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Fo.x=c*Cs.x-l*Cs.y,Fo.y=l*Cs.x+c*Cs.y):Fo.copy(Cs),o.copy(e),o.x+=Fo.x,o.y+=Fo.y,o.applyMatrix4(Av)}const Fh=new k,PM=new k,BM=new me;class Sr{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Fh.subVectors(r,i).cross(PM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||BM.getNormalMatrix(e),l=this.coplanarPoint(Fh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new $o,IM=new ge(.5,.5),Uc=new k;class $d{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,c=new Sr,h=new Sr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Oi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],v=c[5],y=c[6],M=c[7],T=c[8],A=c[9],x=c[10],_=c[11],N=c[12],L=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,_-T,H-N).normalize(),l[1].setComponents(p+h,M+S,_+T,H+N).normalize(),l[2].setComponents(p+d,M+v,_+A,H+L).normalize(),l[3].setComponents(p-d,M-v,_-A,H-L).normalize(),r)l[4].setComponents(m,y,x,D).normalize(),l[5].setComponents(p-m,M-y,_-x,H-D).normalize();else if(l[4].setComponents(p-m,M-y,_-x,H-D).normalize(),i===Oi)l[5].setComponents(p+m,M+y,_+x,H+D).normalize();else if(i===Yc)l[5].setComponents(m,y,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const i=IM.distanceTo(e.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rv extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new k,Qc=new k,S_=new Ke,Go=new Qd,Lc=new $o,Hh=new k,x_=new k;class FM extends Rn{constructor(e=new Wn,i=new Rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Kc.distanceTo(Qc);e.setAttribute("lineDistance",new Ti(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Lc.copy(r.boundingSphere),Lc.applyMatrix4(l),Lc.radius+=c,e.ray.intersectsSphere(Lc)===!1)return;S_.copy(l).invert(),Go.copy(e.ray).applyMatrix4(S_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=r.index,y=r.attributes.position;if(S!==null){const M=Math.max(0,h.start),T=Math.min(S.count,h.start+h.count);for(let A=M,x=T-1;A<x;A+=p){const _=S.getX(A),N=S.getX(A+1),L=Nc(this,e,Go,m,_,N,A);L&&i.push(L)}if(this.isLineLoop){const A=S.getX(T-1),x=S.getX(M),_=Nc(this,e,Go,m,A,x,T-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let A=M,x=T-1;A<x;A+=p){const _=Nc(this,e,Go,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Nc(this,e,Go,m,T-1,M,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(Kc.fromBufferAttribute(d,l),Qc.fromBufferAttribute(d,c),i.distanceSqToSegment(Kc,Qc,Hh,x_)>r)return;Hh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Hh);if(!(p<e.near||p>e.far))return{distance:p,point:x_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class HM extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const M_=new Ke,Fd=new Qd,Oc=new $o,zc=new k;class E_ extends Rn{constructor(e=new Wn,i=new HM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=c,e.ray.intersectsSphere(Oc)===!1)return;M_.copy(l).invert(),Fd.copy(e.ray).applyMatrix4(M_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let T=y,A=M;T<A;T++){const x=p.getX(T);zc.fromBufferAttribute(v,x),T_(zc,x,m,l,e,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let T=y,A=M;T<A;T++)zc.fromBufferAttribute(v,T),T_(zc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,e,i,r,l,c,h){const d=Fd.distanceSqToPoint(o);if(d<i){const m=new k;Fd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Cv extends Bn{constructor(e,i,r=Rr,l,c,h,d=Ei,m=Ei,p,S=Yo,v=1){if(S!==Yo&&S!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tp extends Wn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),p(r),S(),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(c.slice(),3)),this.setAttribute("uv",new Ti(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const L=new k,D=new k,H=new k;for(let F=0;F<i.length;F+=3)M(i[F+0],L),M(i[F+1],D),M(i[F+2],H),m(L,D,H,N)}function m(N,L,D,H){const F=H+1,z=[];for(let W=0;W<=F;W++){z[W]=[];const w=N.clone().lerp(D,W/F),C=L.clone().lerp(D,W/F),G=F-W;for(let J=0;J<=G;J++)J===0&&W===F?z[W][J]=w:z[W][J]=w.clone().lerp(C,J/G)}for(let W=0;W<F;W++)for(let w=0;w<2*(F-W)-1;w++){const C=Math.floor(w/2);w%2===0?(y(z[W][C+1]),y(z[W+1][C]),y(z[W][C])):(y(z[W][C+1]),y(z[W+1][C+1]),y(z[W+1][C]))}}function p(N){const L=new k;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(N),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function S(){const N=new k;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const D=x(N)/2/Math.PI+.5,H=_(N)/Math.PI+.5;h.push(D,1-H)}T(),v()}function v(){for(let N=0;N<h.length;N+=6){const L=h[N+0],D=h[N+2],H=h[N+4],F=Math.max(L,D,H),z=Math.min(L,D,H);F>.9&&z<.1&&(L<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),H<.2&&(h[N+4]+=1))}}function y(N){c.push(N.x,N.y,N.z)}function M(N,L){const D=N*3;L.x=e[D+0],L.y=e[D+1],L.z=e[D+2]}function T(){const N=new k,L=new k,D=new k,H=new k,F=new ge,z=new ge,W=new ge;for(let w=0,C=0;w<c.length;w+=9,C+=6){N.set(c[w+0],c[w+1],c[w+2]),L.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),F.set(h[C+0],h[C+1]),z.set(h[C+2],h[C+3]),W.set(h[C+4],h[C+5]),H.copy(N).add(L).add(D).divideScalar(3);const G=x(H);A(F,C+0,N,G),A(z,C+2,L,G),A(W,C+4,D,G)}}function A(N,L,D,H){H<0&&N.x===1&&(h[L]=N.x-1),D.x===0&&D.z===0&&(h[L]=H/2/Math.PI+.5)}function x(N){return Math.atan2(N.z,-N.x)}function _(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tp(e.vertices,e.indices,e.radius,e.details)}}class ep extends tp{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new ep(e.radius,e.detail)}}class $c extends Wn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,v=e/d,y=i/m,M=[],T=[],A=[],x=[];for(let _=0;_<S;_++){const N=_*y-h;for(let L=0;L<p;L++){const D=L*v-c;T.push(D,-N,0),A.push(0,0,1),x.push(L/d),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<d;N++){const L=N+p*_,D=N+p*(_+1),H=N+1+p*(_+1),F=N+1+p*_;M.push(L,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new Ti(T,3)),this.setAttribute("normal",new Ti(A,3)),this.setAttribute("uv",new Ti(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class GM extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dv extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Gh=new Ke,b_=new k,A_=new k;class XM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $d,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;b_.setFromMatrixPosition(e.matrixWorld),i.position.copy(b_),A_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const R_=new Ke,Vo=new k,Vh=new k;class kM extends XM{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Vo),Vh.copy(r.position),Vh.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(Vh),r.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),R_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R_,r.coordinateSystem,r.reversedDepth)}}class Xh extends Dv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new kM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class WM extends Ev{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends Dv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function C_(o,e,i,r){const l=jM(r);switch(i){case uv:return o*e;case hv:return o*e/l.components*l.byteLength;case Yd:return o*e/l.components*l.byteLength;case dv:return o*e*2/l.components*l.byteLength;case jd:return o*e*2/l.components*l.byteLength;case fv:return o*e*3/l.components*l.byteLength;case Mi:return o*e*4/l.components*l.byteLength;case Zd:return o*e*4/l.components*l.byteLength;case Fc:case Hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:case hd:return Math.max(o,16)*Math.max(e,8)/4;case cd:case fd:return Math.max(o,8)*Math.max(e,8)/2;case dd:case pd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dd:case Ud:case Ld:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Nd:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zd:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function jM(o){switch(o){case zi:case sv:return{byteLength:1,components:1};case Wo:case ov:case Ko:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case Rr:case kd:case la:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function Uv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ZM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,S);else{v.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<v.length;M++){const T=v[y],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];o.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var KM=`#ifdef USE_ALPHAHASH
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
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
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
}`,ST=`#define STANDARD
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
}`,xT=`#define TOON
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
}`,_e={alphahash_fragment:KM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:$M,alphatest_fragment:tE,alphatest_pars_fragment:eE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:hE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:gE,color_pars_vertex:_E,color_vertex:vE,common:yE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:xE,displacementmap_pars_vertex:ME,displacementmap_vertex:EE,emissivemap_fragment:TE,emissivemap_pars_fragment:bE,colorspace_fragment:AE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:wE,envmap_pars_fragment:DE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:VE,envmap_vertex:LE,fog_vertex:NE,fog_pars_vertex:OE,fog_fragment:zE,fog_pars_fragment:PE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:IE,lights_lambert_fragment:FE,lights_lambert_pars_fragment:HE,lights_pars_begin:GE,lights_toon_fragment:XE,lights_toon_pars_fragment:kE,lights_phong_fragment:WE,lights_phong_pars_fragment:qE,lights_physical_fragment:YE,lights_physical_pars_fragment:jE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:e1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:a1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:o1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:u1,morphtarget_pars_vertex:f1,morphtarget_vertex:h1,normal_fragment_begin:d1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:_1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:M1,opaque_fragment:E1,packing:T1,premultiplied_alpha_fragment:b1,project_vertex:A1,dithering_fragment:R1,dithering_pars_fragment:C1,roughnessmap_fragment:w1,roughnessmap_pars_fragment:D1,shadowmap_pars_fragment:U1,shadowmap_pars_vertex:L1,shadowmap_vertex:N1,shadowmask_pars_fragment:O1,skinbase_vertex:z1,skinning_pars_vertex:P1,skinning_vertex:B1,skinnormal_vertex:I1,specularmap_fragment:F1,specularmap_pars_fragment:H1,tonemapping_fragment:G1,tonemapping_pars_fragment:V1,transmission_fragment:X1,transmission_pars_fragment:k1,uv_pars_fragment:W1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:j1,background_vert:Z1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:J1,cube_vert:$1,cube_frag:tT,depth_vert:eT,depth_frag:nT,distanceRGBA_vert:iT,distanceRGBA_frag:aT,equirect_vert:rT,equirect_frag:sT,linedashed_vert:oT,linedashed_frag:lT,meshbasic_vert:cT,meshbasic_frag:uT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:dT,meshmatcap_frag:pT,meshnormal_vert:mT,meshnormal_frag:gT,meshphong_vert:_T,meshphong_frag:vT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:xT,meshtoon_frag:MT,points_vert:ET,points_frag:TT,shadow_vert:bT,shadow_frag:AT,sprite_vert:RT,sprite_frag:CT},It={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Pn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Pn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Pn([It.points,It.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Pn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Pn([It.common,It.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Pn([It.sprite,It.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Pn([It.common,It.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Pn([It.lights,It.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Pc={r:0,b:0,g:0},vr=new fa,wT=new Ke;function DT(o,e,i,r,l,c,h){const d=new le(0);let m=c===!0?0:1,p,S,v=null,y=0,M=null;function T(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function A(L){let D=!1;const H=T(L);H===null?_(d,m):H&&H.isColor&&(_(H,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(L,D){const H=T(D);H&&(H.isCubeTexture||H.mapping===Jc)?(S===void 0&&(S=new ca(new tl(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Is(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(F,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),vr.copy(D.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(wT.makeRotationFromEuler(vr)),S.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,(v!==H||y!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,v=H,y=H.version,M=o.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ca(new $c(2,2),new Pi({name:"BackgroundMaterial",uniforms:Is(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Le.getTransfer(H.colorSpace)!==Ve,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||y!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=H,y=H.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,D){L.getRGB(Pc,Mv(o)),r.buffers.color.setClear(Pc.r,Pc.g,Pc.b,D,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:A,addToRenderList:x,dispose:N}}function UT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,G,J,ut,gt){let ht=!1;const P=v(ut,J,G);c!==P&&(c=P,p(c.object)),ht=M(C,ut,J,gt),ht&&T(C,ut,J,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(C,G,J,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function v(C,G,J){const ut=J.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let ht=gt[G.id];ht===void 0&&(ht={},gt[G.id]=ht);let P=ht[ut];return P===void 0&&(P=y(m()),ht[ut]=P),P}function y(C){const G=[],J=[],ut=[];for(let gt=0;gt<i;gt++)G[gt]=0,J[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,G,J,ut){const gt=c.attributes,ht=G.attributes;let P=0;const Y=J.getAttributes();for(const q in Y)if(Y[q].location>=0){const bt=gt[q];let O=ht[q];if(O===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),bt===void 0||bt.attribute!==O||O&&bt.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==ut}function T(C,G,J,ut){const gt={},ht=G.attributes;let P=0;const Y=J.getAttributes();for(const q in Y)if(Y[q].location>=0){let bt=ht[q];bt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const O={};O.attribute=bt,bt&&bt.data&&(O.data=bt.data),gt[q]=O,P++}c.attributes=gt,c.attributesNum=P,c.index=ut}function A(){const C=c.newAttributes;for(let G=0,J=C.length;G<J;G++)C[G]=0}function x(C){_(C,0)}function _(C,G){const J=c.newAttributes,ut=c.enabledAttributes,gt=c.attributeDivisors;J[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),gt[C]!==G&&(o.vertexAttribDivisor(C,G),gt[C]=G)}function N(){const C=c.newAttributes,G=c.enabledAttributes;for(let J=0,ut=G.length;J<ut;J++)G[J]!==C[J]&&(o.disableVertexAttribArray(J),G[J]=0)}function L(C,G,J,ut,gt,ht,P){P===!0?o.vertexAttribIPointer(C,G,J,gt,ht):o.vertexAttribPointer(C,G,J,ut,gt,ht)}function D(C,G,J,ut){A();const gt=ut.attributes,ht=J.getAttributes(),P=G.defaultAttributeValues;for(const Y in ht){const q=ht[Y];if(q.location>=0){let St=gt[Y];if(St===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const bt=St.normalized,O=St.itemSize,et=e.get(St);if(et===void 0)continue;const xt=et.buffer,Ct=et.type,Pt=et.bytesPerElement,nt=Ct===o.INT||Ct===o.UNSIGNED_INT||St.gpuType===kd;if(St.isInterleavedBufferAttribute){const ct=St.data,Ut=ct.stride,Vt=St.offset;if(ct.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)_(q.location+Kt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)x(q.location+Kt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Kt=0;Kt<q.locationSize;Kt++)L(q.location+Kt,O/q.locationSize,Ct,bt,Ut*Pt,(Vt+O/q.locationSize*Kt)*Pt,nt)}else{if(St.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)_(q.location+ct,St.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ct=0;ct<q.locationSize;ct++)x(q.location+ct);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ct=0;ct<q.locationSize;ct++)L(q.location+ct,O/q.locationSize,Ct,bt,O*Pt,O/q.locationSize*ct*Pt,nt)}}else if(P!==void 0){const bt=P[Y];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(q.location,bt);break;case 3:o.vertexAttrib3fv(q.location,bt);break;case 4:o.vertexAttrib4fv(q.location,bt);break;default:o.vertexAttrib1fv(q.location,bt)}}}}N()}function H(){W();for(const C in r){const G=r[C];for(const J in G){const ut=G[J];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete G[J]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const J in G){const ut=G[J];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete G[J]}delete r[C.id]}function z(C){for(const G in r){const J=r[G];if(J[C.id]===void 0)continue;const ut=J[C.id];for(const gt in ut)S(ut[gt].object),delete ut[gt];delete J[C.id]}}function W(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:x,disableUnusedAttributes:N}}function LT(o,e,i){let r;function l(p){r=p}function c(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,v){v!==0&&(o.drawArraysInstanced(r,p,S,v),i.update(S,r,v))}function d(p,S,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,v);let M=0;for(let T=0;T<v;T++)M+=S[T];i.update(M,r,1)}function m(p,S,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],S[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,S,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=S[A]*y[A];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==Mi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==zi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==la&&!W)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:H,maxSamples:F}}function OT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Sr,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=S(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,_=o.get(v);if(!l||T===null||T.length===0||c&&!x)c?S(null):p();else{const N=c?0:r,L=N*4;let D=_.clippingState||null;m.value=D,D=S(T,y,L,M);for(let H=0;H!==L;++H)D[H]=i[H];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(v,y,M,T){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=m.value,T!==!0||x===null){const _=M+A*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,D=M;L!==A;++L,D+=4)h.copy(v[L]).applyMatrix4(N,d),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function zT(o){let e=new WeakMap;function i(h,d){return d===rd?h.mapping=zs:d===sd&&(h.mapping=Ps),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===rd||d===sd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new UM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ds=4,w_=[.125,.215,.35,.446,.526,.582],Er=20,kh=new WM,D_=new le;let Wh=null,qh=0,Yh=0,jh=!1;const xr=(1+Math.sqrt(5))/2,ws=1/xr,U_=[new k(-xr,ws,0),new k(xr,ws,0),new k(-ws,0,xr),new k(ws,0,xr),new k(0,xr,-ws),new k(0,xr,ws),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],PT=new k;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,qh,Yh),this._renderer.xr.enabled=jh,e.scissorTest=!1,Bc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Ko,format:Mi,colorSpace:Bs,depthBuffer:!1},l=N_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BT(c)),this._blurMaterial=IT(c,e,i)}return l}_compileMaterial(e){const i=new ca(this._lodPlanes[0],e);this._renderer.compile(i,kh)}_sceneToCubeUV(e,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(D_),v.toneMapping=Wa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new yv({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),x=new ca(new tl,A);let _=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,_=!0):(A.color.copy(D_),_=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[L]));const H=this._cubeSize;Bc(l,D*H,L>2?H:0,H,H),v.setRenderTarget(l),_&&v.render(x,m),v.render(e,m)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zs||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ca(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Bc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,kh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=U_[(l-c-1)%U_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new ca(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Er-1),A=c/T,x=isFinite(c)?1+Math.floor(S*A):Er;x>Er&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Er}`);const _=[];let N=0;for(let z=0;z<Er;++z){const W=z/A,w=Math.exp(-W*W/2);_.push(w),z===0?N+=w:z<x&&(N+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-r;const D=this._sizeLods[l],H=3*D*(l>L-Ds?l-L+Ds:0),F=4*(this._cubeSize-D);Bc(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(v,kh)}}function BT(o){const e=[],i=[],r=[];let l=o;const c=o-Ds+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ds?m=w_[h-o+Ds-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,v=1+p,y=[S,S,v,S,v,v,S,S,v,v,S,v],M=6,T=6,A=3,x=2,_=1,N=new Float32Array(A*T*M),L=new Float32Array(x*T*M),D=new Float32Array(_*T*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,W=F>2?0:-1,w=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];N.set(w,A*T*F),L.set(y,x*T*F);const C=[F,F,F,F,F,F];D.set(C,_*T*F)}const H=new Wn;H.setAttribute("position",new mn(N,A)),H.setAttribute("uv",new mn(L,x)),H.setAttribute("faceIndex",new mn(D,_)),e.push(H),l>Ds&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function N_(o,e,i){const r=new Cr(o,e,i);return r.texture.mapping=Jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function IT(o,e,i){const r=new Float32Array(Er),l=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:np(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function O_(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function z_(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function np(){return`

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
	`}function FT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===rd||m===sd,S=m===zs||m===Ps;if(p||S){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new L_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function HT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function GT(o,e,i,r){const l={},c=new WeakMap;function h(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function p(v){const y=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const N=M.array;A=M.version;for(let L=0,D=N.length;L<D;L+=3){const H=N[L+0],F=N[L+1],z=N[L+2];y.push(H,F,F,z,z,H)}}else if(T!==void 0){const N=T.array;A=T.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const H=L+0,F=L+1,z=L+2;y.push(H,F,F,z,z,H)}}else return;const x=new(mv(y)?xv:Sv)(y,1);x.version=A;const _=c.get(v);_&&e.remove(_),c.set(v,x)}function S(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function VT(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){o.drawElements(r,M,c,y*h),i.update(M,r,1)}function p(y,M,T){T!==0&&(o.drawElementsInstanced(r,M,c,y*h,T),i.update(M,r,T))}function S(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,T);let x=0;for(let _=0;_<T;_++)x+=M[_];i.update(x,r,1)}function v(y,M,T,A){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],A[_]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,A,0,T);let _=0;for(let N=0;N<T;N++)_+=M[N]*A[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function XT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function kT(o,e,i){const r=new WeakMap,l=new ke;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),x===!0&&(D=3);let H=d.attributes.position.count*D,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*F*4*v),W=new gv(z,H,F,v);W.type=la,W.needsUpdate=!0;const w=D*4;for(let G=0;G<v;G++){const J=_[G],ut=N[G],gt=L[G],ht=H*F*4*G;for(let P=0;P<J.count;P++){const Y=P*w;T===!0&&(l.fromBufferAttribute(J,P),z[ht+Y+0]=l.x,z[ht+Y+1]=l.y,z[ht+Y+2]=l.z,z[ht+Y+3]=0),A===!0&&(l.fromBufferAttribute(ut,P),z[ht+Y+4]=l.x,z[ht+Y+5]=l.y,z[ht+Y+6]=l.z,z[ht+Y+7]=0),x===!0&&(l.fromBufferAttribute(gt,P),z[ht+Y+8]=l.x,z[ht+Y+9]=l.y,z[ht+Y+10]=l.z,z[ht+Y+11]=gt.itemSize===4?l.w:1)}}y={count:v,texture:W,size:new ge(H,F)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function WT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,S=m.geometry,v=e.get(m,S);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Lv=new Bn,P_=new Cv(1,1),Nv=new gv,Ov=new pM,zv=new Tv,B_=[],I_=[],F_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function Hs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function tu(o,e){let i=I_[e];i===void 0&&(i=new Int32Array(e),I_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function KT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;G_.set(r),o.uniformMatrix2fv(this.addr,!1,G_),_n(i,r)}}function QT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;H_.set(r),o.uniformMatrix3fv(this.addr,!1,H_),_n(i,r)}}function JT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;F_.set(r),o.uniformMatrix4fv(this.addr,!1,F_),_n(i,r)}}function $T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function tb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function eb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function ib(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(P_.compareFunction=pv,c=P_):c=Lv,i.setTexture2D(e||c,l)}function lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ov,l)}function cb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||zv,l)}function ub(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Nv,l)}function fb(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tb;case 35668:case 35672:return eb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return ab;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}function hb(o,e){o.uniform1fv(this.addr,e)}function db(o,e){const i=Hs(e,this.size,2);o.uniform2fv(this.addr,i)}function pb(o,e){const i=Hs(e,this.size,3);o.uniform3fv(this.addr,i)}function mb(o,e){const i=Hs(e,this.size,4);o.uniform4fv(this.addr,i)}function gb(o,e){const i=Hs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function _b(o,e){const i=Hs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function vb(o,e){const i=Hs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function yb(o,e){o.uniform1iv(this.addr,e)}function Sb(o,e){o.uniform2iv(this.addr,e)}function xb(o,e){o.uniform3iv(this.addr,e)}function Mb(o,e){o.uniform4iv(this.addr,e)}function Eb(o,e){o.uniform1uiv(this.addr,e)}function Tb(o,e){o.uniform2uiv(this.addr,e)}function bb(o,e){o.uniform3uiv(this.addr,e)}function Ab(o,e){o.uniform4uiv(this.addr,e)}function Rb(o,e,i){const r=this.cache,l=e.length,c=tu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Lv,c[h])}function Cb(o,e,i){const r=this.cache,l=e.length,c=tu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ov,c[h])}function wb(o,e,i){const r=this.cache,l=e.length,c=tu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||zv,c[h])}function Db(o,e,i){const r=this.cache,l=e.length,c=tu(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Nv,c[h])}function Ub(o){switch(o){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return xb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Db}}class Lb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=fb(i.type)}}class Nb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ub(i.type)}}class Ob{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function V_(o,e){o.seq.push(e),o.map[e.id]=e}function zb(o,e,i){const r=o.name,l=r.length;for(Zh.lastIndex=0;;){const c=Zh.exec(r),h=Zh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new Lb(d,o,e):new Nb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Ob(d),V_(i,v)),i=v}}}class Xc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);zb(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function X_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Pb=37297;let Bb=0;function Ib(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const k_=new me;function Fb(o){Le._getMatrix(k_,Le.workingColorSpace,o);const e=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case qc:return[e,"LinearTransferOETF"];case Ve:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function W_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Ib(o.getShaderSource(e),d)}else return c}function Hb(o,e){const i=Fb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Gb(o,e){let i;switch(e){case Vx:i="Linear";break;case Xx:i="Reinhard";break;case kx:i="Cineon";break;case av:i="ACESFilmic";break;case qx:i="AgX";break;case Yx:i="Neutral";break;case Wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new k;function Vb(){Le.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),e=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function kb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Wb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function ko(o){return o!==""}function q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(o){return o.replace(qb,jb)}const Yb=new Map;function jb(o,e){let i=_e[e];if(i===void 0){const r=Yb.get(e);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(i)}const Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(Zb,Kb)}function Kb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Qb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===xx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function Jb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ps&&(e="ENVMAP_MODE_REFRACTION"),e}function tA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case iv:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case Gx:e="ENVMAP_BLENDING_ADD";break}return e}function eA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function nA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Qb(i),p=Jb(i),S=$b(i),v=tA(i),y=eA(i),M=Xb(i),T=kb(c),A=l.createProgram();let x,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ko).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(x=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?_e.tonemapping_pars_fragment:"",i.toneMapping!==Wa?Gb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,Hb("linearToOutputTexel",i.outputColorSpace),Vb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),h=Hd(h),h=q_(h,i),h=Y_(h,i),d=Hd(d),d=q_(d,i),d=Y_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+x+h,D=N+_+d,H=X_(l,l.VERTEX_SHADER,L),F=X_(l,l.FRAGMENT_SHADER,D);l.attachShader(A,H),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(G){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",ut=l.getShaderInfoLog(H)||"",gt=l.getShaderInfoLog(F)||"",ht=J.trim(),P=ut.trim(),Y=gt.trim();let q=!0,St=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,F);else{const bt=W_(l,H,"vertex"),O=W_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ht+`
`+bt+`
`+O)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(P===""||Y==="")&&(St=!1);St&&(G.diagnostics={runnable:q,programLog:ht,vertexShader:{log:P,prefix:x},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(H),l.deleteShader(F),W=new Xc(l,A),w=Wb(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,Pb)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=F,this}let iA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new rA(e),i.set(e,r)),r}}class rA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function sA(o,e,i,r,l,c,h){const d=new _v,m=new aA,p=new Set,S=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,C,G,J,ut){const gt=J.fog,ht=ut.geometry,P=w.isMeshStandardMaterial?J.environment:null,Y=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),q=Y&&Y.mapping===Jc?Y.image.height:null,St=T[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const bt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,O=bt!==void 0?bt.length:0;let et=0;ht.morphAttributes.position!==void 0&&(et=1),ht.morphAttributes.normal!==void 0&&(et=2),ht.morphAttributes.color!==void 0&&(et=3);let xt,Ct,Pt,nt;if(St){const Ce=Ui[St];xt=Ce.vertexShader,Ct=Ce.fragmentShader}else xt=w.vertexShader,Ct=w.fragmentShader,m.update(w),Pt=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const ct=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),Vt=ut.isInstancedMesh===!0,Kt=ut.isBatchedMesh===!0,de=!!w.map,Qe=!!w.matcap,I=!!Y,ce=!!w.aoMap,ae=!!w.lightMap,ne=!!w.bumpMap,Yt=!!w.normalMap,At=!!w.displacementMap,Et=!!w.emissiveMap,Ht=!!w.metalnessMap,fe=!!w.roughnessMap,be=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,Q=w.iridescence>0,dt=w.sheen>0,at=w.transmission>0,lt=be&&!!w.anisotropyMap,kt=U&&!!w.clearcoatMap,Rt=U&&!!w.clearcoatNormalMap,Gt=U&&!!w.clearcoatRoughnessMap,Nt=Q&&!!w.iridescenceMap,vt=Q&&!!w.iridescenceThicknessMap,Dt=dt&&!!w.sheenColorMap,Qt=dt&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Lt=!!w.specularColorMap,ie=!!w.specularIntensityMap,V=at&&!!w.transmissionMap,Mt=at&&!!w.thicknessMap,wt=!!w.gradientMap,zt=!!w.alphaMap,Tt=w.alphaTest>0,_t=!!w.alphaHash,Wt=!!w.extensions;let oe=Wa;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(oe=o.toneMapping);const Pe={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Ct,defines:w.defines,customVertexShaderID:Pt,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Kt,batchingColor:Kt&&ut._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&ut.instanceColor!==null,instancingMorph:Vt&&ut.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Bs,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Qe,envMap:I,envMapMode:I&&Y.mapping,envMapCubeUVHeight:q,aoMap:ce,lightMap:ae,bumpMap:ne,normalMap:Yt,displacementMap:y&&At,emissiveMap:Et,normalMapObjectSpace:Yt&&w.normalMapType===Jx,normalMapTangentSpace:Yt&&w.normalMapType===Qx,metalnessMap:Ht,roughnessMap:fe,anisotropy:be,anisotropyMap:lt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Gt,dispersion:E,iridescence:Q,iridescenceMap:Nt,iridescenceThicknessMap:vt,sheen:dt,sheenColorMap:Dt,sheenRoughnessMap:Qt,specularMap:Ot,specularColorMap:Lt,specularIntensityMap:ie,transmission:at,transmissionMap:V,thicknessMap:Mt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:Tt,alphaHash:_t,combine:w.combine,mapUv:de&&A(w.map.channel),aoMapUv:ce&&A(w.aoMap.channel),lightMapUv:ae&&A(w.lightMap.channel),bumpMapUv:ne&&A(w.bumpMap.channel),normalMapUv:Yt&&A(w.normalMap.channel),displacementMapUv:At&&A(w.displacementMap.channel),emissiveMapUv:Et&&A(w.emissiveMap.channel),metalnessMapUv:Ht&&A(w.metalnessMap.channel),roughnessMapUv:fe&&A(w.roughnessMap.channel),anisotropyMapUv:lt&&A(w.anisotropyMap.channel),clearcoatMapUv:kt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&A(w.sheenRoughnessMap.channel),specularMapUv:Ot&&A(w.specularMap.channel),specularColorMapUv:Lt&&A(w.specularColorMap.channel),specularIntensityMapUv:ie&&A(w.specularIntensityMap.channel),transmissionMapUv:V&&A(w.transmissionMap.channel),thicknessMapUv:Mt&&A(w.thicknessMap.channel),alphaMapUv:zt&&A(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Yt||be),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!ht.attributes.uv&&(de||zt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:ut.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:oe,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&Le.getTransfer(w.map.colorSpace)===Ve,decodeVideoTextureEmissive:Et&&w.emissiveMap.isVideoTexture===!0&&Le.getTransfer(w.emissiveMap.colorSpace)===Ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let G;if(C){const J=Ui[C];G=RM.clone(J.uniforms)}else G=w.uniforms;return G}function H(w,C){let G;for(let J=0,ut=S.length;J<ut;J++){const gt=S[J];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new nA(o,C,w,c),S.push(G)),G}function F(w){if(--w.usedTimes===0){const C=S.indexOf(w);S[C]=S[S.length-1],S.pop(),w.destroy()}}function z(w){m.remove(w)}function W(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:H,releaseProgram:F,releaseShaderCache:z,programs:S,dispose:W}}function oA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function lA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function K_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Q_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,y,M,T,A,x){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:x},o[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=x),e++,_}function d(v,y,M,T,A,x){const _=h(v,y,M,T,A,x);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,y,M,T,A,x){const _=h(v,y,M,T,A,x);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||lA),r.length>1&&r.sort(y||K_),l.length>1&&l.sort(y||K_)}function S(){for(let v=e,y=o.length;v<y;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function cA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Q_,o.set(r,[h])):l>=c.length?(h=new Q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function uA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new le};break;case"SpotLight":i={position:new k,direction:new k,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new le,groundColor:new le};break;case"RectAreaLight":i={color:new le,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function fA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let hA=0;function dA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function pA(o){const e=new uA,i=fA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,c=new Ke,h=new Ke;function d(p){let S=0,v=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,A=0,x=0,_=0,N=0,L=0,D=0,H=0,F=0,z=0;p.sort(dA);for(let w=0,C=p.length;w<C;w++){const G=p[w],J=G.color,ut=G.intensity,gt=G.distance,ht=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=J.r*ut,v+=J.g*ut,y+=J.b*ut;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],ut);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,q=i.get(G);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=G.shadow.matrix,N++}r.directional[M]=P,M++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(J).multiplyScalar(ut),P.distance=gt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[A]=P;const Y=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,Y.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=Y.matrix,G.castShadow){const q=i.get(G);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=ht,D++}A++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(J).multiplyScalar(ut),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[x]=P,x++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Y=G.shadow,q=i.get(G);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ht,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=P,T++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ut),P.groundColor.copy(G.groundColor).multiplyScalar(ut),r.hemi[_]=P,_++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==M||W.pointLength!==T||W.spotLength!==A||W.rectAreaLength!==x||W.hemiLength!==_||W.numDirectionalShadows!==N||W.numPointShadows!==L||W.numSpotShadows!==D||W.numSpotMaps!==H||W.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=x,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=z,W.directionalLength=M,W.pointLength=T,W.spotLength=A,W.rectAreaLength=x,W.hemiLength=_,W.numDirectionalShadows=N,W.numPointShadows=L,W.numSpotShadows=D,W.numSpotMaps=H,W.numLightProbes=z,r.version=hA++)}function m(p,S){let v=0,y=0,M=0,T=0,A=0;const x=S.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const L=p[_];if(L.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),v++}else if(L.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),h.identity(),c.copy(L.matrixWorld),c.premultiply(x),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(x),A++}}}return{setup:d,setupView:m,state:r}}function J_(o){const e=new pA(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function c(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function mA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new J_(o),e.set(l,[d])):c>=h.length?(d=new J_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const gA=`void main() {
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
}`;function vA(o,e,i){let r=new $d;const l=new ge,c=new ge,h=new ke,d=new GM({depthPacking:Kx}),m=new VM,p={},S=i.maxTextureSize,v={[Ya]:kn,[kn]:Ya,[oa]:oa},y=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:gA,fragmentShader:_A}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Wn;T.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ca(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nv;let _=this.type;this.render=function(F,z,W){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ka),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ut=_!==sa&&this.type===sa,gt=_===sa&&this.type!==sa;for(let ht=0,P=F.length;ht<P;ht++){const Y=F[ht],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),c.copy(q.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/St.x),l.x=c.x*St.x,q.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/St.y),l.y=c.y*St.y,q.mapSize.y=c.y)),q.map===null||ut===!0||gt===!0){const O=this.type!==sa?{minFilter:Ei,magFilter:Ei}:{};q.map!==null&&q.map.dispose(),q.map=new Cr(l.x,l.y,O),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const bt=q.getViewportCount();for(let O=0;O<bt;O++){const et=q.getViewport(O);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),J.viewport(h),q.updateMatrices(Y,O),r=q.getFrustum(),D(z,W,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&N(q,W),q.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(w,C,G)};function N(F,z){const W=e.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Cr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,W,y,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,W,M,A,null)}function L(F,z,W,w){let C=null;const G=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=C.uuid,ut=z.uuid;let gt=p[J];gt===void 0&&(gt={},p[J]=gt);let ht=gt[ut];ht===void 0&&(ht=C.clone(),gt[ut]=ht,z.addEventListener("dispose",H)),C=ht}if(C.visible=z.visible,C.wireframe=z.wireframe,w===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=o.properties.get(C);J.light=W}return C}function D(F,z,W,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===sa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const ut=e.update(F),gt=F.material;if(Array.isArray(gt)){const ht=ut.groups;for(let P=0,Y=ht.length;P<Y;P++){const q=ht[P],St=gt[q.materialIndex];if(St&&St.visible){const bt=L(F,St,w,C);F.onBeforeShadow(o,F,z,W,ut,bt,q),o.renderBufferDirect(W,null,ut,bt,F,q),F.onAfterShadow(o,F,z,W,ut,bt,q)}}}else if(gt.visible){const ht=L(F,gt,w,C);F.onBeforeShadow(o,F,z,W,ut,ht,null),o.renderBufferDirect(W,null,ut,ht,F,null),F.onAfterShadow(o,F,z,W,ut,ht,null)}}const J=F.children;for(let ut=0,gt=J.length;ut<gt;ut++)D(J[ut],z,W,w,C)}function H(F){F.target.removeEventListener("dispose",H);for(const W in p){const w=p[W],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const yA={[Jh]:$h,[td]:id,[ed]:ad,[Os]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:Os};function SA(o,e){function i(){let V=!1;const Mt=new ke;let wt=null;const zt=new ke(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!V&&(o.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,_t,Wt,oe,Pe){Pe===!0&&(Tt*=oe,_t*=oe,Wt*=oe),Mt.set(Tt,_t,Wt,oe),zt.equals(Mt)===!1&&(o.clearColor(Tt,_t,Wt,oe),zt.copy(Mt))},reset:function(){V=!1,wt=null,zt.set(-1,0,0,0)}}}function r(){let V=!1,Mt=!1,wt=null,zt=null,Tt=null;return{setReversed:function(_t){if(Mt!==_t){const Wt=e.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Mt=_t;const oe=Tt;Tt=null,this.setClear(oe)}},getReversed:function(){return Mt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!V&&(o.depthMask(_t),wt=_t)},setFunc:function(_t){if(Mt&&(_t=yA[_t]),zt!==_t){switch(_t){case Jh:o.depthFunc(o.NEVER);break;case $h:o.depthFunc(o.ALWAYS);break;case td:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case ed:o.depthFunc(o.EQUAL);break;case nd:o.depthFunc(o.GEQUAL);break;case id:o.depthFunc(o.GREATER);break;case ad:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){Tt!==_t&&(Mt&&(_t=1-_t),o.clearDepth(_t),Tt=_t)},reset:function(){V=!1,wt=null,zt=null,Tt=null,Mt=!1}}}function l(){let V=!1,Mt=null,wt=null,zt=null,Tt=null,_t=null,Wt=null,oe=null,Pe=null;return{setTest:function(Ce){V||(Ce?ct(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(Ce){Mt!==Ce&&!V&&(o.stencilMask(Ce),Mt=Ce)},setFunc:function(Ce,Ln,ai){(wt!==Ce||zt!==Ln||Tt!==ai)&&(o.stencilFunc(Ce,Ln,ai),wt=Ce,zt=Ln,Tt=ai)},setOp:function(Ce,Ln,ai){(_t!==Ce||Wt!==Ln||oe!==ai)&&(o.stencilOp(Ce,Ln,ai),_t=Ce,Wt=Ln,oe=ai)},setLocked:function(Ce){V=Ce},setClear:function(Ce){Pe!==Ce&&(o.clearStencil(Ce),Pe=Ce)},reset:function(){V=!1,Mt=null,wt=null,zt=null,Tt=null,_t=null,Wt=null,oe=null,Pe=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},y=new WeakMap,M=[],T=null,A=!1,x=null,_=null,N=null,L=null,D=null,H=null,F=null,z=new le(0,0,0),W=0,w=!1,C=null,G=null,J=null,ut=null,gt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=Y>=2);let St=null,bt={};const O=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),xt=new ke().fromArray(O),Ct=new ke().fromArray(et);function Pt(V,Mt,wt,zt){const Tt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(V,_t),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<wt;Wt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Mt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Mt+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return _t}const nt={};nt[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Os),ne(!1),Yt(K0),ct(o.CULL_FACE),ce(ka);function ct(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function Ut(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function Vt(V,Mt){return v[V]!==Mt?(o.bindFramebuffer(V,Mt),v[V]=Mt,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Mt),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Kt(V,Mt){let wt=M,zt=!1;if(V){wt=y.get(Mt),wt===void 0&&(wt=[],y.set(Mt,wt));const Tt=V.textures;if(wt.length!==Tt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Wt=Tt.length;_t<Wt;_t++)wt[_t]=o.COLOR_ATTACHMENT0+_t;wt.length=Tt.length,zt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(wt)}function de(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const Qe={[Mr]:o.FUNC_ADD,[Ex]:o.FUNC_SUBTRACT,[Tx]:o.FUNC_REVERSE_SUBTRACT};Qe[bx]=o.MIN,Qe[Ax]=o.MAX;const I={[Rx]:o.ZERO,[Cx]:o.ONE,[wx]:o.SRC_COLOR,[Kh]:o.SRC_ALPHA,[zx]:o.SRC_ALPHA_SATURATE,[Nx]:o.DST_COLOR,[Ux]:o.DST_ALPHA,[Dx]:o.ONE_MINUS_SRC_COLOR,[Qh]:o.ONE_MINUS_SRC_ALPHA,[Ox]:o.ONE_MINUS_DST_COLOR,[Lx]:o.ONE_MINUS_DST_ALPHA,[Px]:o.CONSTANT_COLOR,[Bx]:o.ONE_MINUS_CONSTANT_COLOR,[Ix]:o.CONSTANT_ALPHA,[Fx]:o.ONE_MINUS_CONSTANT_ALPHA};function ce(V,Mt,wt,zt,Tt,_t,Wt,oe,Pe,Ce){if(V===ka){A===!0&&(Ut(o.BLEND),A=!1);return}if(A===!1&&(ct(o.BLEND),A=!0),V!==Mx){if(V!==x||Ce!==w){if((_!==Mr||D!==Mr)&&(o.blendEquation(o.FUNC_ADD),_=Mr,D=Mr),Ce)switch(V){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ns:o.blendFunc(o.ONE,o.ONE);break;case Q0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case J0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ns:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Q0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,H=null,F=null,z.set(0,0,0),W=0,x=V,w=Ce}return}Tt=Tt||Mt,_t=_t||wt,Wt=Wt||zt,(Mt!==_||Tt!==D)&&(o.blendEquationSeparate(Qe[Mt],Qe[Tt]),_=Mt,D=Tt),(wt!==N||zt!==L||_t!==H||Wt!==F)&&(o.blendFuncSeparate(I[wt],I[zt],I[_t],I[Wt]),N=wt,L=zt,H=_t,F=Wt),(oe.equals(z)===!1||Pe!==W)&&(o.blendColor(oe.r,oe.g,oe.b,Pe),z.copy(oe),W=Pe),x=V,w=!1}function ae(V,Mt){V.side===oa?Ut(o.CULL_FACE):ct(o.CULL_FACE);let wt=V.side===kn;Mt&&(wt=!wt),ne(wt),V.blending===Us&&V.transparent===!1?ce(ka):ce(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Et(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function Yt(V){V!==yx?(ct(o.CULL_FACE),V!==G&&(V===K0?o.cullFace(o.BACK):V===Sx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),G=V}function At(V){V!==J&&(P&&o.lineWidth(V),J=V)}function Et(V,Mt,wt){V?(ct(o.POLYGON_OFFSET_FILL),(ut!==Mt||gt!==wt)&&(o.polygonOffset(Mt,wt),ut=Mt,gt=wt)):Ut(o.POLYGON_OFFSET_FILL)}function Ht(V){V?ct(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function fe(V){V===void 0&&(V=o.TEXTURE0+ht-1),St!==V&&(o.activeTexture(V),St=V)}function be(V,Mt,wt){wt===void 0&&(St===null?wt=o.TEXTURE0+ht-1:wt=St);let zt=bt[wt];zt===void 0&&(zt={type:void 0,texture:void 0},bt[wt]=zt),(zt.type!==V||zt.texture!==Mt)&&(St!==wt&&(o.activeTexture(wt),St=wt),o.bindTexture(V,Mt||nt[V]),zt.type=V,zt.texture=Mt)}function U(){const V=bt[St];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(V){xt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function Qt(V){Ct.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Ct.copy(V))}function Ot(V,Mt){let wt=p.get(Mt);wt===void 0&&(wt=new WeakMap,p.set(Mt,wt));let zt=wt.get(V);zt===void 0&&(zt=o.getUniformBlockIndex(Mt,V.name),wt.set(V,zt))}function Lt(V,Mt){const zt=p.get(Mt).get(V);m.get(Mt)!==zt&&(o.uniformBlockBinding(Mt,zt,V.__bindingPointIndex),m.set(Mt,zt))}function ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},St=null,bt={},v={},y=new WeakMap,M=[],T=null,A=!1,x=null,_=null,N=null,L=null,D=null,H=null,F=null,z=new le(0,0,0),W=0,w=!1,C=null,G=null,J=null,ut=null,gt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:Ut,bindFramebuffer:Vt,drawBuffers:Kt,useProgram:de,setBlending:ce,setMaterial:ae,setFlipSided:ne,setCullFace:Yt,setLineWidth:At,setPolygonOffset:Et,setScissorTest:Ht,activeTexture:fe,bindTexture:be,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:Nt,texImage3D:vt,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:Gt,texSubImage2D:dt,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:kt,scissor:Dt,viewport:Qt,reset:ie}}function xA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ge,S=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return M?new OffscreenCanvas(U,E):jc("canvas")}function A(U,E,Q){let dt=1;const at=be(U);if((at.width>Q||at.height>Q)&&(dt=Q/Math.max(at.width,at.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(dt*at.width),kt=Math.floor(dt*at.height);v===void 0&&(v=T(lt,kt));const Rt=E?T(lt,kt):v;return Rt.width=lt,Rt.height=kt,Rt.getContext("2d").drawImage(U,0,0,lt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+lt+"x"+kt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),U;return U}function x(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,E,Q,dt,at=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=E;if(E===o.RED&&(Q===o.FLOAT&&(lt=o.R32F),Q===o.HALF_FLOAT&&(lt=o.R16F),Q===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.R8UI),Q===o.UNSIGNED_SHORT&&(lt=o.R16UI),Q===o.UNSIGNED_INT&&(lt=o.R32UI),Q===o.BYTE&&(lt=o.R8I),Q===o.SHORT&&(lt=o.R16I),Q===o.INT&&(lt=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(lt=o.RG32F),Q===o.HALF_FLOAT&&(lt=o.RG16F),Q===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RG16UI),Q===o.UNSIGNED_INT&&(lt=o.RG32UI),Q===o.BYTE&&(lt=o.RG8I),Q===o.SHORT&&(lt=o.RG16I),Q===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),Q===o.UNSIGNED_INT&&(lt=o.RGB32UI),Q===o.BYTE&&(lt=o.RGB8I),Q===o.SHORT&&(lt=o.RGB16I),Q===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(lt=o.RGBA32UI),Q===o.BYTE&&(lt=o.RGBA8I),Q===o.SHORT&&(lt=o.RGBA16I),Q===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const kt=at?qc:Le.getTransfer(dt);Q===o.FLOAT&&(lt=o.RGBA32F),Q===o.HALF_FLOAT&&(lt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(lt=kt===Ve?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function D(U,E){let Q;return U?E===null||E===Rr||E===qo?Q=o.DEPTH24_STENCIL8:E===la?Q=o.DEPTH32F_STENCIL8:E===Wo&&(Q=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rr||E===qo?Q=o.DEPTH_COMPONENT24:E===la?Q=o.DEPTH_COMPONENT32F:E===Wo&&(Q=o.DEPTH_COMPONENT16),Q}function H(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ei&&U.minFilter!==Ni?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),W(E),E.isVideoTexture&&S.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),C(E)}function W(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,dt=y.get(Q);if(dt){const at=dt[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(Q)}r.remove(U)}function w(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const Q=U.source,dt=y.get(Q);delete dt[E.__cacheKey],h.memory.textures--}function C(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let at=0;at<E.__webglFramebuffer[dt].length;at++)o.deleteFramebuffer(E.__webglFramebuffer[dt][at]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let dt=0,at=Q.length;dt<at;dt++){const lt=r.get(Q[dt]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(Q[dt])}r.remove(U)}let G=0;function J(){G=0}function ut(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function gt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const Q=r.get(U);if(U.isVideoTexture&&Ht(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function P(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){nt(Q,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function Y(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){nt(Q,U,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function q(U,E){const Q=r.get(U);if(U.version>0&&Q.__version!==U.version){ct(Q,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const St={[od]:o.REPEAT,[br]:o.CLAMP_TO_EDGE,[ld]:o.MIRRORED_REPEAT},bt={[Ei]:o.NEAREST,[jx]:o.NEAREST_MIPMAP_NEAREST,[fc]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[ph]:o.LINEAR_MIPMAP_NEAREST,[Ar]:o.LINEAR_MIPMAP_LINEAR},O={[$x]:o.NEVER,[rM]:o.ALWAYS,[tM]:o.LESS,[pv]:o.LEQUAL,[eM]:o.EQUAL,[aM]:o.GEQUAL,[nM]:o.GREATER,[iM]:o.NOTEQUAL};function et(U,E){if(E.type===la&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ni||E.magFilter===ph||E.magFilter===fc||E.magFilter===Ar||E.minFilter===Ni||E.minFilter===ph||E.minFilter===fc||E.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,St[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,bt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ei||E.minFilter!==fc&&E.minFilter!==Ar||E.type===la&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const dt=E.source;let at=y.get(dt);at===void 0&&(at={},y.set(dt,at));const lt=gt(E);if(lt!==U.__cacheKey){at[lt]===void 0&&(at[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Q=!0),at[lt].usedTimes++;const kt=at[U.__cacheKey];kt!==void 0&&(at[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(E)),U.__cacheKey=lt,U.__webglTexture=at[lt].texture}return Q}function Ct(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function Pt(U,E,Q,dt){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,dt,E.data);else{lt.sort((vt,Dt)=>vt.start-Dt.start);let kt=0;for(let vt=1;vt<lt.length;vt++){const Dt=lt[kt],Qt=lt[vt],Ot=Dt.start+Dt.count,Lt=Ct(Qt.start,E.width,4),ie=Ct(Dt.start,E.width,4);Qt.start<=Ot+1&&Lt===ie&&Ct(Qt.start+Qt.count-1,E.width,4)===Lt?Dt.count=Math.max(Dt.count,Qt.start+Qt.count-Dt.start):(++kt,lt[kt]=Qt)}lt.length=kt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Nt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let vt=0,Dt=lt.length;vt<Dt;vt++){const Qt=lt[vt],Ot=Math.floor(Qt.start/4),Lt=Math.ceil(Qt.count/4),ie=Ot%E.width,V=Math.floor(Ot/E.width),Mt=Lt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ie,V,Mt,wt,Q,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Nt)}}function nt(U,E,Q){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const at=xt(U,E),lt=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+Q);const kt=r.get(lt);if(lt.version!==kt.__version||at===!0){i.activeTexture(o.TEXTURE0+Q);const Rt=Le.getPrimaries(Le.workingColorSpace),Gt=E.colorSpace===Va?null:Le.getPrimaries(E.colorSpace),Nt=E.colorSpace===Va||Rt===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let vt=A(E.image,!1,l.maxTextureSize);vt=fe(E,vt);const Dt=c.convert(E.format,E.colorSpace),Qt=c.convert(E.type);let Ot=L(E.internalFormat,Dt,Qt,E.colorSpace,E.isVideoTexture);et(dt,E);let Lt;const ie=E.mipmaps,V=E.isVideoTexture!==!0,Mt=kt.__version===void 0||at===!0,wt=lt.dataReady,zt=H(E,vt);if(E.isDepthTexture)Ot=D(E.format===jo,E.type),Mt&&(V?i.texStorage2D(o.TEXTURE_2D,1,Ot,vt.width,vt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,vt.width,vt.height,0,Dt,Qt,null));else if(E.isDataTexture)if(ie.length>0){V&&Mt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,ie[0].width,ie[0].height);for(let Tt=0,_t=ie.length;Tt<_t;Tt++)Lt=ie[Tt],V?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Dt,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,Dt,Qt,Lt.data);E.generateMipmaps=!1}else V?(Mt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,vt.width,vt.height),wt&&Pt(E,vt,Dt,Qt)):i.texImage2D(o.TEXTURE_2D,0,Ot,vt.width,vt.height,0,Dt,Qt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,ie[0].width,ie[0].height,vt.depth);for(let Tt=0,_t=ie.length;Tt<_t;Tt++)if(Lt=ie[Tt],E.format!==Mi)if(Dt!==null)if(V){if(wt)if(E.layerUpdates.size>0){const Wt=C_(Lt.width,Lt.height,E.format,E.type);for(const oe of E.layerUpdates){const Pe=Lt.data.subarray(oe*Wt/Lt.data.BYTES_PER_ELEMENT,(oe+1)*Wt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,oe,Lt.width,Lt.height,1,Dt,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,Dt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Ot,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,vt.depth,Dt,Qt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Ot,Lt.width,Lt.height,vt.depth,0,Dt,Qt,Lt.data)}else{V&&Mt&&i.texStorage2D(o.TEXTURE_2D,zt,Ot,ie[0].width,ie[0].height);for(let Tt=0,_t=ie.length;Tt<_t;Tt++)Lt=ie[Tt],E.format!==Mi?Dt!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Dt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,Dt,Qt,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,Ot,Lt.width,Lt.height,0,Dt,Qt,Lt.data)}else if(E.isDataArrayTexture)if(V){if(Mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,vt.width,vt.height,vt.depth),wt)if(E.layerUpdates.size>0){const Tt=C_(vt.width,vt.height,E.format,E.type);for(const _t of E.layerUpdates){const Wt=vt.data.subarray(_t*Tt/vt.data.BYTES_PER_ELEMENT,(_t+1)*Tt/vt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,Dt,Qt,Wt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Dt,Qt,vt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,vt.width,vt.height,vt.depth,0,Dt,Qt,vt.data);else if(E.isData3DTexture)V?(Mt&&i.texStorage3D(o.TEXTURE_3D,zt,Ot,vt.width,vt.height,vt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Dt,Qt,vt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,vt.width,vt.height,vt.depth,0,Dt,Qt,vt.data);else if(E.isFramebufferTexture){if(Mt)if(V)i.texStorage2D(o.TEXTURE_2D,zt,Ot,vt.width,vt.height);else{let Tt=vt.width,_t=vt.height;for(let Wt=0;Wt<zt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Ot,Tt,_t,0,Dt,Qt,null),Tt>>=1,_t>>=1}}else if(ie.length>0){if(V&&Mt){const Tt=be(ie[0]);i.texStorage2D(o.TEXTURE_2D,zt,Ot,Tt.width,Tt.height)}for(let Tt=0,_t=ie.length;Tt<_t;Tt++)Lt=ie[Tt],V?wt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt,Qt,Lt):i.texImage2D(o.TEXTURE_2D,Tt,Ot,Dt,Qt,Lt);E.generateMipmaps=!1}else if(V){if(Mt){const Tt=be(vt);i.texStorage2D(o.TEXTURE_2D,zt,Ot,Tt.width,Tt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,Qt,vt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Dt,Qt,vt);x(E)&&_(dt),kt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,Q){if(E.image.length!==6)return;const dt=xt(U,E),at=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+Q);const lt=r.get(at);if(at.version!==lt.__version||dt===!0){i.activeTexture(o.TEXTURE0+Q);const kt=Le.getPrimaries(Le.workingColorSpace),Rt=E.colorSpace===Va?null:Le.getPrimaries(E.colorSpace),Gt=E.colorSpace===Va||kt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Nt=E.isCompressedTexture||E.image[0].isCompressedTexture,vt=E.image[0]&&E.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!Nt&&!vt?Dt[_t]=A(E.image[_t],!0,l.maxCubemapSize):Dt[_t]=vt?E.image[_t].image:E.image[_t],Dt[_t]=fe(E,Dt[_t]);const Qt=Dt[0],Ot=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),ie=L(E.internalFormat,Ot,Lt,E.colorSpace),V=E.isVideoTexture!==!0,Mt=lt.__version===void 0||dt===!0,wt=at.dataReady;let zt=H(E,Qt);et(o.TEXTURE_CUBE_MAP,E);let Tt;if(Nt){V&&Mt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){Tt=Dt[_t].mipmaps;for(let Wt=0;Wt<Tt.length;Wt++){const oe=Tt[Wt];E.format!==Mi?Ot!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,oe.width,oe.height,Ot,oe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ie,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,oe.width,oe.height,Ot,Lt,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ie,oe.width,oe.height,0,Ot,Lt,oe.data)}}}else{if(Tt=E.mipmaps,V&&Mt){Tt.length>0&&zt++;const _t=be(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ie,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Ot,Lt,Dt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Dt[_t].width,Dt[_t].height,0,Ot,Lt,Dt[_t].data);for(let Wt=0;Wt<Tt.length;Wt++){const Pe=Tt[Wt].image[_t].image;V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Pe.width,Pe.height,Ot,Lt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ie,Pe.width,Pe.height,0,Ot,Lt,Pe.data)}}else{V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Lt,Dt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ie,Ot,Lt,Dt[_t]);for(let Wt=0;Wt<Tt.length;Wt++){const oe=Tt[Wt];V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Ot,Lt,oe.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ie,Ot,Lt,oe.image[_t])}}}x(E)&&_(o.TEXTURE_CUBE_MAP),lt.__version=at.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ut(U,E,Q,dt,at,lt){const kt=c.convert(Q.format,Q.colorSpace),Rt=c.convert(Q.type),Gt=L(Q.internalFormat,kt,Rt,Q.colorSpace),Nt=r.get(E),vt=r.get(Q);if(vt.__renderTarget=E,!Nt.__hasExternalTextures){const Dt=Math.max(1,E.width>>lt),Qt=Math.max(1,E.height>>lt);at===o.TEXTURE_3D||at===o.TEXTURE_2D_ARRAY?i.texImage3D(at,lt,Gt,Dt,Qt,E.depth,0,kt,Rt,null):i.texImage2D(at,lt,Gt,Dt,Qt,0,kt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,at,vt.__webglTexture,0,At(E)):(at===o.TEXTURE_2D||at>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,at,vt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(U,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,at=dt&&dt.isDepthTexture?dt.type:null,lt=D(E.stencilBuffer,at),kt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=At(E);Et(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,lt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let at=0;at<dt.length;at++){const lt=dt[at],kt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),Gt=L(lt.internalFormat,kt,Rt,lt.colorSpace),Nt=At(E);Q&&Et(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,Gt,E.width,E.height):Et(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,Gt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Kt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const at=dt.__webglTexture,lt=At(E);if(E.depthTexture.format===Yo)Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0);else if(E.depthTexture.format===jo)Et(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function de(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const at=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",at)};dt.addEventListener("dispose",at),E.__depthDisposeCallback=at}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?Kt(E.__webglFramebuffer[0],U):Kt(E.__webglFramebuffer,U)}else if(Q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),Vt(E.__webglDepthbuffer[dt],U,!1);else{const at=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,at,o.RENDERBUFFER,lt)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Vt(E.__webglDepthbuffer,U,!1);else{const at=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,at,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(U,E,Q){const dt=r.get(U);E!==void 0&&Ut(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&de(U)}function I(U){const E=U.texture,Q=r.get(U),dt=r.get(E);U.addEventListener("dispose",z);const at=U.textures,lt=U.isWebGLCubeRenderTarget===!0,kt=at.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),lt){Q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Rt]=[];for(let Gt=0;Gt<E.mipmaps.length;Gt++)Q.__webglFramebuffer[Rt][Gt]=o.createFramebuffer()}else Q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)Q.__webglFramebuffer[Rt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Rt=0,Gt=at.length;Rt<Gt;Rt++){const Nt=r.get(at[Rt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Et(U)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<at.length;Rt++){const Gt=at[Rt];Q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Rt]);const Nt=c.convert(Gt.format,Gt.colorSpace),vt=c.convert(Gt.type),Dt=L(Gt.internalFormat,Nt,vt,Gt.colorSpace,U.isXRRenderTarget===!0),Qt=At(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Dt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(Q.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),et(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ut(Q.__webglFramebuffer[Rt][Gt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Gt);else Ut(Q.__webglFramebuffer[Rt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Rt=0,Gt=at.length;Rt<Gt;Rt++){const Nt=at[Rt],vt=r.get(Nt);let Dt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,vt.__webglTexture),et(Dt,Nt),Ut(Q.__webglFramebuffer,U,Nt,o.COLOR_ATTACHMENT0+Rt,Dt,0),x(Nt)&&_(Dt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),et(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Gt=0;Gt<E.mipmaps.length;Gt++)Ut(Q.__webglFramebuffer[Gt],U,E,o.COLOR_ATTACHMENT0,Rt,Gt);else Ut(Q.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Rt,0);x(E)&&_(Rt),i.unbindTexture()}U.depthBuffer&&de(U)}function ce(U){const E=U.textures;for(let Q=0,dt=E.length;Q<dt;Q++){const at=E[Q];if(x(at)){const lt=N(U),kt=r.get(at).__webglTexture;i.bindTexture(lt,kt),_(lt),i.unbindTexture()}}}const ae=[],ne=[];function Yt(U){if(U.samples>0){if(Et(U)===!1){const E=U.textures,Q=U.width,dt=U.height;let at=o.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=r.get(U),Rt=E.length>1;if(Rt)for(let Nt=0;Nt<E.length;Nt++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Gt=U.texture.mipmaps;Gt&&Gt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Nt=0;Nt<E.length;Nt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(at|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(at|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Nt]);const vt=r.get(E[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,vt,0)}o.blitFramebuffer(0,0,Q,dt,0,0,Q,dt,at,o.NEAREST),m===!0&&(ae.length=0,ne.length=0,ae.push(o.COLOR_ATTACHMENT0+Nt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(lt),ne.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Nt=0;Nt<E.length;Nt++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Nt]);const vt=r.get(E[Nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,vt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function At(U){return Math.min(l.maxSamples,U.samples)}function Et(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(U){const E=h.render.frame;S.get(U)!==E&&(S.set(U,E),U.update())}function fe(U,E){const Q=U.colorSpace,dt=U.format,at=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Bs&&Q!==Va&&(Le.getTransfer(Q)===Ve?(dt!==Mi||at!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),E}function be(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=J,this.setTexture2D=ht,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=Qe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Et}function MA(o,e){function i(r,l=Va){let c;const h=Le.getTransfer(l);if(r===zi)return o.UNSIGNED_BYTE;if(r===Wd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===lv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===cv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===sv)return o.BYTE;if(r===ov)return o.SHORT;if(r===Wo)return o.UNSIGNED_SHORT;if(r===kd)return o.INT;if(r===Rr)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===Ko)return o.HALF_FLOAT;if(r===uv)return o.ALPHA;if(r===fv)return o.RGB;if(r===Mi)return o.RGBA;if(r===Yo)return o.DEPTH_COMPONENT;if(r===jo)return o.DEPTH_STENCIL;if(r===hv)return o.RED;if(r===Yd)return o.RED_INTEGER;if(r===dv)return o.RG;if(r===jd)return o.RG_INTEGER;if(r===Zd)return o.RGBA_INTEGER;if(r===Fc||r===Hc||r===Gc||r===Vc)if(h===Ve)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return h===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===yd||r===Sd||r===xd||r===Md||r===Ed||r===Td||r===bd||r===Ad||r===Rd||r===Cd||r===wd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return h===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dd||r===Ud||r===Ld)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Dd)return h===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nd||r===Od||r===zd||r===Pd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Od)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const EA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new wv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Pi({vertexShader:EA,fragmentShader:TA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ca(new $c(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AA extends Fs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,y=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",x=new bA,_={},N=i.getContextAttributes();let L=null,D=null;const H=[],F=[],z=new ge;let W=null;const w=new ii;w.viewport=new ke;const C=new ii;C.viewport=new ke;const G=[w,C],J=new YM;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=H[nt];return ct===void 0&&(ct=new Bh,H[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=H[nt];return ct===void 0&&(ct=new Bh,H[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=H[nt];return ct===void 0&&(ct=new Bh,H[nt]=ct),ct.getHandSpace()};function ht(nt){const ct=F.indexOf(nt.inputSource);if(ct===-1)return;const Ut=H[ct];Ut!==void 0&&(Ut.update(nt.inputSource,nt.frame,p||h),Ut.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Y);for(let nt=0;nt<H.length;nt++){const ct=F[nt];ct!==null&&(F[nt]=null,H[nt].disconnect(ct))}ut=null,gt=null,x.reset();for(const nt in _)delete _[nt];e.setRenderTarget(L),M=null,y=null,v=null,l=null,D=null,Pt.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Vt=null,Kt=null;N.depth&&(Kt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=N.stencil?jo:Yo,Vt=N.stencil?qo:Rr);const de={colorFormat:i.RGBA8,depthFormat:Kt,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(de),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Cr(y.textureWidth,y.textureHeight,{format:Mi,type:zi,depthTexture:new Cv(y.textureWidth,y.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ut={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Cr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Pt.setContext(l),Pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(nt){for(let ct=0;ct<nt.removed.length;ct++){const Ut=nt.removed[ct],Vt=F.indexOf(Ut);Vt>=0&&(F[Vt]=null,H[Vt].disconnect(Ut))}for(let ct=0;ct<nt.added.length;ct++){const Ut=nt.added[ct];let Vt=F.indexOf(Ut);if(Vt===-1){for(let de=0;de<H.length;de++)if(de>=F.length){F.push(Ut),Vt=de;break}else if(F[de]===null){F[de]=Ut,Vt=de;break}if(Vt===-1)break}const Kt=H[Vt];Kt&&Kt.connect(Ut)}}const q=new k,St=new k;function bt(nt,ct,Ut){q.setFromMatrixPosition(ct.matrixWorld),St.setFromMatrixPosition(Ut.matrixWorld);const Vt=q.distanceTo(St),Kt=ct.projectionMatrix.elements,de=Ut.projectionMatrix.elements,Qe=Kt[14]/(Kt[10]-1),I=Kt[14]/(Kt[10]+1),ce=(Kt[9]+1)/Kt[5],ae=(Kt[9]-1)/Kt[5],ne=(Kt[8]-1)/Kt[0],Yt=(de[8]+1)/de[0],At=Qe*ne,Et=Qe*Yt,Ht=Vt/(-ne+Yt),fe=Ht*-ne;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(fe),nt.translateZ(Ht),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Kt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const be=Qe+Ht,U=I+Ht,E=At-fe,Q=Et+(Vt-fe),dt=ce*I/U*be,at=ae*I/U*be;nt.projectionMatrix.makePerspective(E,Q,dt,at,be,U),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function O(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ct=nt.near,Ut=nt.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(Ut=x.depthFar)),J.near=C.near=w.near=ct,J.far=C.far=w.far=Ut,(ut!==J.near||gt!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),ut=J.near,gt=J.far),J.layers.mask=nt.layers.mask|6,w.layers.mask=J.layers.mask&3,C.layers.mask=J.layers.mask&5;const Vt=nt.parent,Kt=J.cameras;O(J,Vt);for(let de=0;de<Kt.length;de++)O(Kt[de],Vt);Kt.length===2?bt(J,w,C):J.projectionMatrix.copy(w.projectionMatrix),et(nt,J,Vt)};function et(nt,ct,Ut){Ut===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(Ut.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Id*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(nt){m=nt,y!==null&&(y.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(nt){return _[nt]};let xt=null;function Ct(nt,ct){if(S=ct.getViewerPose(p||h),T=ct,S!==null){const Ut=S.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Vt=!1;Ut.length!==J.cameras.length&&(J.cameras.length=0,Vt=!0);for(let I=0;I<Ut.length;I++){const ce=Ut[I];let ae=null;if(M!==null)ae=M.getViewport(ce);else{const Yt=v.getViewSubImage(y,ce);ae=Yt.viewport,I===0&&(e.setRenderTargetTextures(D,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(D))}let ne=G[I];ne===void 0&&(ne=new ii,ne.layers.enable(I),ne.viewport=new ke,G[I]=ne),ne.matrix.fromArray(ce.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&(J.matrix.copy(ne.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Vt===!0&&J.cameras.push(ne)}const Kt=l.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const I=v.getDepthInformation(Ut[0]);I&&I.isValid&&I.texture&&x.init(I,l.renderState)}if(Kt&&Kt.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let I=0;I<Ut.length;I++){const ce=Ut[I].camera;if(ce){let ae=_[ce];ae||(ae=new wv,_[ce]=ae);const ne=v.getCameraImage(ce);ae.sourceTexture=ne}}}}for(let Ut=0;Ut<H.length;Ut++){const Vt=F[Ut],Kt=H[Ut];Vt!==null&&Kt!==void 0&&Kt.update(Vt,ct,p||h)}xt&&xt(nt,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),T=null}const Pt=new Uv;Pt.setAnimationLoop(Ct),this.setAnimationLoop=function(nt){xt=nt},this.dispose=function(){}}}const yr=new fa,RA=new Ke;function CA(o,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Mv(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,N,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),S(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&M(x,_,D)):_.isMeshMatcapMaterial?(c(x,_),T(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),A(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?m(x,_,N,L):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===kn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===kn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,D=N.envMapRotation;L&&(x.envMap.value=L,yr.copy(D),yr.x*=-1,yr.y*=-1,yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),x.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(yr)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,N,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*N,x.scale.value=L*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function S(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,N){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,_){_.matcap&&(x.matcap.value=_.matcap)}function A(x,_){const N=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;r.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(T(N),D=S(N),l[N.id]=D,N.addEventListener("dispose",x));const H=L.program;r.updateUBOMapping(N,H);const F=e.render.frame;c[N.id]!==F&&(y(N),c[N.id]=F)}function S(N){const L=v();N.__bindingPointIndex=L;const D=o.createBuffer(),H=N.__size,F=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=l[N.id],D=N.uniforms,H=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let F=0,z=D.length;F<z;F++){const W=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=W.length;w<C;w++){const G=W[w];if(M(G,F,w,H)===!0){const J=G.__offset,ut=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let ht=0;ht<ut.length;ht++){const P=ut[ht],Y=A(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,J+gt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,gt),gt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,L,D,H){const F=N.value,z=L+"_"+D;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const W=H[z];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return H[z]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function T(N){const L=N.uniforms;let D=0;const H=16;for(let z=0,W=L.length;z<W;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,G=w.length;C<G;C++){const J=w[C],ut=Array.isArray(J.value)?J.value:[J.value];for(let gt=0,ht=ut.length;gt<ht;gt++){const P=ut[gt],Y=A(P),q=D%H,St=q%Y.boundary,bt=q+St;D+=St,bt!==0&&H-bt<Y.storage&&(D+=H-bt),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=Y.storage}}}const F=D%H;return F>0&&(D+=H-F),N.__size=D,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function x(N){const L=N.target;L.removeEventListener("dispose",x);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class DA{constructor(e={}){const{canvas:i=oM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),A=new Int32Array(4);let x=null,_=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=ni;let F=0,z=0,W=null,w=-1,C=null;const G=new ke,J=new ke;let ut=null;const gt=new le(0);let ht=0,P=i.width,Y=i.height,q=1,St=null,bt=null;const O=new ke(0,0,P,Y),et=new ke(0,0,P,Y);let xt=!1;const Ct=new $d;let Pt=!1,nt=!1;const ct=new Ke,Ut=new k,Vt=new ke,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Qe(){return W===null?q:1}let I=r;function ce(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),I===null){const j="webgl2";if(I=ce(j,R),I===null)throw ce(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ae,ne,Yt,At,Et,Ht,fe,be,U,E,Q,dt,at,lt,kt,Rt,Gt,Nt,vt,Dt,Qt,Ot,Lt,ie;function V(){ae=new HT(I),ae.init(),Ot=new MA(I,ae),ne=new NT(I,ae,e,Ot),Yt=new SA(I,ae),ne.reversedDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),At=new XT(I),Et=new oA,Ht=new xA(I,ae,Yt,Et,ne,Ot,At),fe=new zT(D),be=new FT(D),U=new ZM(I),Lt=new UT(I,U),E=new GT(I,U,At,Lt),Q=new WT(I,E,U,At),vt=new kT(I,ne,Ht),Rt=new OT(Et),dt=new sA(D,fe,be,ae,ne,Lt,Rt),at=new CA(D,Et),lt=new cA,kt=new mA(ae),Nt=new DT(D,fe,be,Yt,Q,M,m),Gt=new vA(D,Q,ne),ie=new wA(I,At,ne,Yt),Dt=new LT(I,ae,At),Qt=new VT(I,ae,At),At.programs=dt.programs,D.capabilities=ne,D.extensions=ae,D.properties=Et,D.renderLists=lt,D.shadowMap=Gt,D.state=Yt,D.info=At}V();const Mt=new AA(D,I);this.xr=Mt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(P,Y,!1))},this.getSize=function(R){return R.set(P,Y)},this.setSize=function(R,j,rt=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Y=j,i.width=Math.floor(R*q),i.height=Math.floor(j*q),rt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(P*q,Y*q).floor()},this.setDrawingBufferSize=function(R,j,rt){P=R,Y=j,q=rt,i.width=Math.floor(R*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,j,rt,st){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,j,rt,st),Yt.viewport(G.copy(O).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(et)},this.setScissor=function(R,j,rt,st){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,j,rt,st),Yt.scissor(J.copy(et).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(R){Yt.setScissorTest(xt=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){bt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let st=0;if(R){let K=!1;if(W!==null){const yt=W.texture.format;K=yt===Zd||yt===jd||yt===Yd}if(K){const yt=W.texture.type,Bt=yt===zi||yt===Rr||yt===Wo||yt===qo||yt===Wd||yt===qd,jt=Nt.getClearColor(),Ft=Nt.getClearAlpha(),$t=jt.r,se=jt.g,te=jt.b;Bt?(T[0]=$t,T[1]=se,T[2]=te,T[3]=Ft,I.clearBufferuiv(I.COLOR,0,T)):(A[0]=$t,A[1]=se,A[2]=te,A[3]=Ft,I.clearBufferiv(I.COLOR,0,A))}else st|=I.COLOR_BUFFER_BIT}j&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Nt.dispose(),lt.dispose(),kt.dispose(),Et.dispose(),fe.dispose(),be.dispose(),Q.dispose(),Lt.dispose(),ie.dispose(),dt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",ai),Mt.removeEventListener("sessionend",Gs),bi.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=At.autoReset,j=Gt.enabled,rt=Gt.autoUpdate,st=Gt.needsUpdate,K=Gt.type;V(),At.autoReset=R,Gt.enabled=j,Gt.autoUpdate=rt,Gt.needsUpdate=st,Gt.type=K}function Tt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const j=R.target;j.removeEventListener("dispose",_t),Wt(j)}function Wt(R){oe(R),Et.remove(R)}function oe(R){const j=Et.get(R).programs;j!==void 0&&(j.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,st,K,yt){j===null&&(j=Kt);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,jt=ha(R,j,rt,st,K);Yt.setMaterial(st,Bt);let Ft=rt.index,$t=1;if(st.wireframe===!0){if(Ft=E.getWireframeAttribute(rt),Ft===void 0)return;$t=2}const se=rt.drawRange,te=rt.attributes.position;let ve=se.start*$t,Oe=(se.start+se.count)*$t;yt!==null&&(ve=Math.max(ve,yt.start*$t),Oe=Math.min(Oe,(yt.start+yt.count)*$t)),Ft!==null?(ve=Math.max(ve,0),Oe=Math.min(Oe,Ft.count)):te!=null&&(ve=Math.max(ve,0),Oe=Math.min(Oe,te.count));const We=Oe-ve;if(We<0||We===1/0)return;Lt.setup(K,st,jt,rt,Ft);let ze,ye=Dt;if(Ft!==null&&(ze=U.get(Ft),ye=Qt,ye.setIndex(ze)),K.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*Qe()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if(K.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*Qe()),K.isLineSegments?ye.setMode(I.LINES):K.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else K.isPoints?ye.setMode(I.POINTS):K.isSprite&&ye.setMode(I.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Zo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ye.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Zt=K._multiDrawStarts,Ye=K._multiDrawCounts,we=K._multiDrawCount,Mn=Ft?U.get(Ft).bytesPerElement:1,Bi=Et.get(st).currentProgram.getUniforms();for(let vn=0;vn<we;vn++)Bi.setValue(I,"_gl_DrawID",vn),ye.render(Zt[vn]/Mn,Ye[vn])}else if(K.isInstancedMesh)ye.renderInstances(ve,We,K.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,Zt);ye.renderInstances(ve,We,Ye)}else ye.render(ve,We)};function Pe(R,j,rt){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,qn(R,j,rt),R.side=Ya,R.needsUpdate=!0,qn(R,j,rt),R.side=oa):qn(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),_=kt.get(rt),_.init(j),L.push(_),rt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const st=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const yt=K.material;if(yt)if(Array.isArray(yt))for(let Bt=0;Bt<yt.length;Bt++){const jt=yt[Bt];Pe(jt,rt,K),st.add(jt)}else Pe(yt,rt,K),st.add(yt)}),_=L.pop(),st},this.compileAsync=function(R,j,rt=null){const st=this.compile(R,j,rt);return new Promise(K=>{function yt(){if(st.forEach(function(Bt){Et.get(Bt).currentProgram.isReady()&&st.delete(Bt)}),st.size===0){K(R);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ce=null;function Ln(R){Ce&&Ce(R)}function ai(){bi.stop()}function Gs(){bi.start()}const bi=new Uv;bi.setAnimationLoop(Ln),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(R){Ce=R,Mt.setAnimationLoop(R),R===null?bi.stop():bi.start()},Mt.addEventListener("sessionstart",ai),Mt.addEventListener("sessionend",Gs),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(j),j=Mt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,j,W),_=kt.get(R,L.length),_.init(j),L.push(_),ct.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ct.setFromProjectionMatrix(ct,Oi,j.reversedDepth),nt=this.localClippingEnabled,Pt=Rt.init(this.clippingPlanes,nt),x=lt.get(R,N.length),x.init(),N.push(x),Mt.enabled===!0&&Mt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Dr(yt,j,-1/0,D.sortObjects)}Dr(R,j,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(St,bt),de=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,de&&Nt.addToRenderList(x,R),this.info.render.frame++,Pt===!0&&Rt.beginShadows();const rt=_.state.shadowsArray;Gt.render(rt,R,j),Pt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=x.opaque,K=x.transmissive;if(_.setupLights(),j.isArrayCamera){const yt=j.cameras;if(K.length>0)for(let Bt=0,jt=yt.length;Bt<jt;Bt++){const Ft=yt[Bt];Lr(st,K,R,Ft)}de&&Nt.render(R);for(let Bt=0,jt=yt.length;Bt<jt;Bt++){const Ft=yt[Bt];Ur(x,R,Ft,Ft.viewport)}}else K.length>0&&Lr(st,K,R,j),de&&Nt.render(R),Ur(x,R,j);W!==null&&z===0&&(Ht.updateMultisampleRenderTarget(W),Ht.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(D,R,j),Lt.resetDefaultState(),w=-1,C=null,L.pop(),L.length>0?(_=L[L.length-1],Pt===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Dr(R,j,rt,st){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ct.intersectsSprite(R)){st&&Vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ct);const Bt=Q.update(R),jt=R.material;jt.visible&&x.push(R,Bt,jt,rt,Vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ct.intersectsObject(R))){const Bt=Q.update(R),jt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Vt.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Vt.copy(Bt.boundingSphere.center)),Vt.applyMatrix4(R.matrixWorld).applyMatrix4(ct)),Array.isArray(jt)){const Ft=Bt.groups;for(let $t=0,se=Ft.length;$t<se;$t++){const te=Ft[$t],ve=jt[te.materialIndex];ve&&ve.visible&&x.push(R,Bt,ve,rt,Vt.z,te)}}else jt.visible&&x.push(R,Bt,jt,rt,Vt.z,null)}}const yt=R.children;for(let Bt=0,jt=yt.length;Bt<jt;Bt++)Dr(yt[Bt],j,rt,st)}function Ur(R,j,rt,st){const K=R.opaque,yt=R.transmissive,Bt=R.transparent;_.setupLightsView(rt),Pt===!0&&Rt.setGlobalState(D.clippingPlanes,rt),st&&Yt.viewport(G.copy(st)),K.length>0&&ja(K,j,rt),yt.length>0&&ja(yt,j,rt),Bt.length>0&&ja(Bt,j,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Lr(R,j,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new Cr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ko:zi,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const yt=_.state.transmissionRenderTarget[st.id],Bt=st.viewport||G;yt.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const jt=D.getRenderTarget(),Ft=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(yt),D.getClearColor(gt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),de&&Nt.render(rt);const se=D.toneMapping;D.toneMapping=Wa;const te=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),Pt===!0&&Rt.setGlobalState(D.clippingPlanes,st),ja(R,rt,st),Ht.updateMultisampleRenderTarget(yt),Ht.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Oe=0,We=j.length;Oe<We;Oe++){const ze=j[Oe],ye=ze.object,Zt=ze.geometry,Ye=ze.material,we=ze.group;if(Ye.side===oa&&ye.layers.test(st.layers)){const Mn=Ye.side;Ye.side=kn,Ye.needsUpdate=!0,Vs(ye,rt,st,Zt,Ye,we),Ye.side=Mn,Ye.needsUpdate=!0,ve=!0}}ve===!0&&(Ht.updateMultisampleRenderTarget(yt),Ht.updateRenderTargetMipmap(yt))}D.setRenderTarget(jt,Ft,$t),D.setClearColor(gt,ht),te!==void 0&&(st.viewport=te),D.toneMapping=se}function ja(R,j,rt){const st=j.isScene===!0?j.overrideMaterial:null;for(let K=0,yt=R.length;K<yt;K++){const Bt=R[K],jt=Bt.object,Ft=Bt.geometry,$t=Bt.group;let se=Bt.material;se.allowOverride===!0&&st!==null&&(se=st),jt.layers.test(rt.layers)&&Vs(jt,j,rt,Ft,se,$t)}}function Vs(R,j,rt,st,K,yt){R.onBeforeRender(D,j,rt,st,K,yt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,j,rt,st,R,yt),K.transparent===!0&&K.side===oa&&K.forceSinglePass===!1?(K.side=kn,K.needsUpdate=!0,D.renderBufferDirect(rt,j,st,K,R,yt),K.side=Ya,K.needsUpdate=!0,D.renderBufferDirect(rt,j,st,K,R,yt),K.side=oa):D.renderBufferDirect(rt,j,st,K,R,yt),R.onAfterRender(D,j,rt,st,K,yt)}function qn(R,j,rt){j.isScene!==!0&&(j=Kt);const st=Et.get(R),K=_.state.lights,yt=_.state.shadowsArray,Bt=K.state.version,jt=dt.getParameters(R,K.state,yt,j,rt),Ft=dt.getProgramCacheKey(jt);let $t=st.programs;st.environment=R.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(R.isMeshStandardMaterial?be:fe).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",_t),$t=new Map,st.programs=$t);let se=$t.get(Ft);if(se!==void 0){if(st.currentProgram===se&&st.lightsStateVersion===Bt)return xn(R,jt),se}else jt.uniforms=dt.getUniforms(R),R.onBeforeCompile(jt,D),se=dt.acquireProgram(jt,Ft),$t.set(Ft,se),st.uniforms=jt.uniforms;const te=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Rt.uniform),xn(R,jt),st.needsLights=eu(R),st.lightsStateVersion=Bt,st.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=se,st.uniformsList=null,se}function sn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Xc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function xn(R,j){const rt=Et.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function ha(R,j,rt,st,K){j.isScene!==!0&&(j=Kt),Ht.resetTextureUnits();const yt=j.fog,Bt=st.isMeshStandardMaterial?j.environment:null,jt=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Bs,Ft=(st.isMeshStandardMaterial?be:fe).get(st.envMap||Bt),$t=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),te=!!rt.morphAttributes.position,ve=!!rt.morphAttributes.normal,Oe=!!rt.morphAttributes.color;let We=Wa;st.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=D.toneMapping);const ze=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ye=ze!==void 0?ze.length:0,Zt=Et.get(st),Ye=_.state.lights;if(Pt===!0&&(nt===!0||R!==C)){const hn=R===C&&st.id===w;Rt.setState(st,R,hn)}let we=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ye.state.version||Zt.outputColorSpace!==jt||K.isBatchedMesh&&Zt.batching===!1||!K.isBatchedMesh&&Zt.batching===!0||K.isBatchedMesh&&Zt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Zt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Zt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Zt.instancingMorph===!1&&K.morphTexture!==null||Zt.envMap!==Ft||st.fog===!0&&Zt.fog!==yt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Rt.numPlanes||Zt.numIntersection!==Rt.numIntersection)||Zt.vertexAlphas!==$t||Zt.vertexTangents!==se||Zt.morphTargets!==te||Zt.morphNormals!==ve||Zt.morphColors!==Oe||Zt.toneMapping!==We||Zt.morphTargetsCount!==ye)&&(we=!0):(we=!0,Zt.__version=st.version);let Mn=Zt.currentProgram;we===!0&&(Mn=qn(st,j,K));let Bi=!1,vn=!1,Ka=!1;const Me=Mn.getUniforms(),Cn=Zt.uniforms;if(Yt.useProgram(Mn.program)&&(Bi=!0,vn=!0,Ka=!0),st.id!==w&&(w=st.id,vn=!0),Bi||C!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(I,"projectionMatrix",R.projectionMatrix),Me.setValue(I,"viewMatrix",R.matrixWorldInverse);const nn=Me.map.cameraPosition;nn!==void 0&&nn.setValue(I,Ut.setFromMatrixPosition(R.matrixWorld)),ne.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Me.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,vn=!0,Ka=!0)}if(K.isSkinnedMesh){Me.setOptional(I,K,"bindMatrix"),Me.setOptional(I,K,"bindMatrixInverse");const hn=K.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Me.setValue(I,"boneTexture",hn.boneTexture,Ht))}K.isBatchedMesh&&(Me.setOptional(I,K,"batchingTexture"),Me.setValue(I,"batchingTexture",K._matricesTexture,Ht),Me.setOptional(I,K,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",K._indirectTexture,Ht),Me.setOptional(I,K,"batchingColorTexture"),K._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",K._colorsTexture,Ht));const Nn=rt.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&vt.update(K,rt,Mn),(vn||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,Me.setValue(I,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=Ft,Cn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Cn.envMapIntensity.value=j.environmentIntensity),vn&&(Me.setValue(I,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Xs(Cn,Ka),yt&&st.fog===!0&&at.refreshFogUniforms(Cn,yt),at.refreshMaterialUniforms(Cn,st,q,Y,_.state.transmissionRenderTarget[R.id]),Xc.upload(I,sn(Zt),Cn,Ht)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Xc.upload(I,sn(Zt),Cn,Ht),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Me.setValue(I,"center",K.center),Me.setValue(I,"modelViewMatrix",K.modelViewMatrix),Me.setValue(I,"normalMatrix",K.normalMatrix),Me.setValue(I,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const hn=st.uniformsGroups;for(let nn=0,Nr=hn.length;nn<Nr;nn++){const Ai=hn[nn];ie.update(Ai,Mn),ie.bind(Ai,Mn)}}return Mn}function Xs(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function eu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,j,rt){const st=Et.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Et.get(R.texture).__webglTexture=j,Et.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=Et.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const nu=I.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){W=R,F=j,z=rt;let st=!0,K=null,yt=!1,Bt=!1;if(R){const Ft=Et.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(R);else if(Ft.__hasExternalTextures)Ht.rebindTextures(R,Et.get(R.texture).__webglTexture,Et.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Ft.__boundDepthTexture!==te){if(te!==null&&Et.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Bt=!0);const se=Et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[j])?K=se[j][rt]:K=se[j],yt=!0):R.samples>0&&Ht.useMultisampledRTT(R)===!1?K=Et.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?K=se[rt]:K=se,G.copy(R.viewport),J.copy(R.scissor),ut=R.scissorTest}else G.copy(O).multiplyScalar(q).floor(),J.copy(et).multiplyScalar(q).floor(),ut=xt;if(rt!==0&&(K=nu),Yt.bindFramebuffer(I.FRAMEBUFFER,K)&&st&&Yt.drawBuffers(R,K),Yt.viewport(G),Yt.scissor(J),Yt.setScissorTest(ut),yt){const Ft=Et.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,rt)}else if(Bt){const Ft=j;for(let $t=0;$t<R.textures.length;$t++){const se=Et.get(R.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,se.__webglTexture,rt,Ft)}}else if(R!==null&&rt!==0){const Ft=Et.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(R,j,rt,st,K,yt,Bt,jt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft){Yt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const $t=R.textures[jt],se=$t.format,te=$t.type;if(!ne.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-st&&rt>=0&&rt<=R.height-K&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(j,rt,st,K,Ot.convert(se),Ot.convert(te),yt))}finally{const $t=W!==null?Et.get(W).__webglFramebuffer:null;Yt.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,st,K,yt,Bt,jt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt]),Ft)if(j>=0&&j<=R.width-st&&rt>=0&&rt<=R.height-K){Yt.bindFramebuffer(I.FRAMEBUFFER,Ft);const $t=R.textures[jt],se=$t.format,te=$t.type;if(!ne.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,yt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+jt),I.readPixels(j,rt,st,K,Ot.convert(se),Ot.convert(te),0);const Oe=W!==null?Et.get(W).__webglFramebuffer:null;Yt.bindFramebuffer(I.FRAMEBUFFER,Oe);const We=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lM(I,We,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,yt),I.deleteBuffer(ve),I.deleteSync(We),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const st=Math.pow(2,-rt),K=Math.floor(R.image.width*st),yt=Math.floor(R.image.height*st),Bt=j!==null?j.x:0,jt=j!==null?j.y:0;Ht.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Bt,jt,K,yt),Yt.unbindTexture()};const el=I.createFramebuffer(),Za=I.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,st=null,K=0,yt=null){yt===null&&(K!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=K,K=0):yt=0);let Bt,jt,Ft,$t,se,te,ve,Oe,We;const ze=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(rt!==null)Bt=rt.max.x-rt.min.x,jt=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,$t=rt.min.x,se=rt.min.y,te=rt.isBox3?rt.min.z:0;else{const Nn=Math.pow(2,-K);Bt=Math.floor(ze.width*Nn),jt=Math.floor(ze.height*Nn),R.isDataArrayTexture?Ft=ze.depth:R.isData3DTexture?Ft=Math.floor(ze.depth*Nn):Ft=1,$t=0,se=0,te=0}st!==null?(ve=st.x,Oe=st.y,We=st.z):(ve=0,Oe=0,We=0);const ye=Ot.convert(j.format),Zt=Ot.convert(j.type);let Ye;j.isData3DTexture?(Ht.setTexture3D(j,0),Ye=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Ht.setTexture2DArray(j,0),Ye=I.TEXTURE_2D_ARRAY):(Ht.setTexture2D(j,0),Ye=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const we=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bi=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),Ka=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,se),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const Me=R.isDataArrayTexture||R.isData3DTexture,Cn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const Nn=Et.get(R),hn=Et.get(j),nn=Et.get(Nn.__renderTarget),Nr=Et.get(hn.__renderTarget);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,nn.__webglFramebuffer),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Ai=0;Ai<Ft;Ai++)Me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(R).__webglTexture,K,te+Ai),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(j).__webglTexture,yt,We+Ai)),I.blitFramebuffer($t,se,Bt,jt,ve,Oe,Bt,jt,I.DEPTH_BUFFER_BIT,I.NEAREST);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Et.has(R)){const Nn=Et.get(R),hn=Et.get(j);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,el),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Za);for(let nn=0;nn<Ft;nn++)Me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nn.__webglTexture,K,te+nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nn.__webglTexture,K),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,yt,We+nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,yt),K!==0?I.blitFramebuffer($t,se,Bt,jt,ve,Oe,Bt,jt,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(Ye,yt,ve,Oe,We+nn,$t,se,Bt,jt):I.copyTexSubImage2D(Ye,yt,ve,Oe,$t,se,Bt,jt);Yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ye,yt,ve,Oe,We,Bt,jt,Ft,ye,Zt,ze.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Ye,yt,ve,Oe,We,Bt,jt,Ft,ye,ze.data):I.texSubImage3D(Ye,yt,ve,Oe,We,Bt,jt,Ft,ye,Zt,ze):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,yt,ve,Oe,Bt,jt,ye,Zt,ze.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,yt,ve,Oe,ze.width,ze.height,ye,ze.data):I.texSubImage2D(I.TEXTURE_2D,yt,ve,Oe,Bt,jt,ye,Zt,ze);I.pixelStorei(I.UNPACK_ROW_LENGTH,we),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bi),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ka),yt===0&&j.generateMipmaps&&I.generateMipmap(Ye),Yt.unbindTexture()},this.initRenderTarget=function(R){Et.get(R).__webglFramebuffer===void 0&&Ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ht.setTextureCube(R,0):R.isData3DTexture?Ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ht.setTexture2DArray(R,0):Ht.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){F=0,z=0,W=null,Yt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}function UA(o,e){const i=[],r=[],c=(1+Math.sqrt(5))/2,h=[[0,1,c],[0,-1,c],[0,1,-c],[0,-1,-c],[1,c,0],[-1,c,0],[1,-c,0],[-1,-c,0],[c,0,1],[-c,0,1],[c,0,-1],[-c,0,-1]].map(y=>{const M=Math.sqrt(y[0]*y[0]+y[1]*y[1]+y[2]*y[2]);return new k(y[0]/M*5,y[1]/M*5,y[2]/M*5)}),d=[],m=[[0,1],[0,4],[0,5],[0,8],[0,9],[1,6],[1,7],[1,8],[1,9],[2,3],[2,4],[2,5],[2,10],[2,11],[3,6],[3,7],[3,10],[3,11],[4,5],[4,8],[4,10],[5,9],[5,11],[6,7],[6,8],[6,10],[7,9],[7,11],[8,10],[9,11]];h.forEach(y=>{d.push(y.clone())});const p=8;m.forEach(([y,M])=>{const T=h[y],A=h[M];for(let x=1;x<p;x++){const _=x/p,N=new k().lerpVectors(T,A,_);d.push(N)}});const v=new ep(5,0).attributes.position;for(let y=0;y<v.count;y+=3){const M=new k(v.getX(y),v.getY(y),v.getZ(y)),T=new k(v.getX(y+1),v.getY(y+1),v.getZ(y+1)),A=new k(v.getX(y+2),v.getY(y+2),v.getZ(y+2)),x=new k().add(M).add(T).add(A).divideScalar(3);d.push(x);for(let _=0;_<3;_++){const N=new k().lerpVectors(x,[M,T,A][_],.5);d.push(N)}}d.forEach(y=>{const M=new bv({map:e,color:new le(13426175),transparent:!0,opacity:0,blending:Ns}),T=new zM(M);T.position.copy(y),T.scale.set(0,0,0);const A=.15+Math.random()*.08;o.add(T),i.push({sprite:T,targetScale:A,glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.8+Math.random()*1.2,position:y.clone()})});for(let y=0;y<i.length;y++)for(let M=y+1;M<i.length;M++)if(i[y].position.distanceTo(i[M].position)<2.8){const A=[i[y].position,i[M].position],x=new Wn().setFromPoints(A),_=new Rv({color:new le(8956637),transparent:!0,opacity:0,blending:Ns}),N=new FM(x,_);o.add(N),r.push({line:N,atom1:i[y],atom2:i[M],glimmerOffset:Math.random()*Math.PI*2,glimmerSpeed:.5+Math.random()*1,baseOpacity:.15+Math.random()*.15})}return{atoms:i,edges:r}}function LA(){const o=document.createElement("canvas");o.width=64,o.height=64;const e=o.getContext("2d"),i=e.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.6)"),i.addColorStop(.6,"rgba(255, 255, 255, 0.2)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=i,e.fillRect(0,0,64,64);const r=new Bn(o);return r.needsUpdate=!0,r}function NA(){const o=Tr.useRef(null),[e,i]=Tr.useState(!1),r=Tr.useRef(.5);return Tr.useEffect(()=>{if(!o.current)return;const l=new NM;l.background=new le(132625),l.fog=new Jd(132625,.018);const c=new ii(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.set(0,0,10);const h=new DA({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),h.setSize(window.innerWidth,window.innerHeight),h.outputColorSpace=ni,h.toneMapping=av,h.toneMappingExposure=1.16;const d=o.current;d.appendChild(h.domElement);const m=new qM(8699903,.24);l.add(m);const p=new Xh(3108863,2.2,90,2);p.position.set(14,14,14),l.add(p);const S=new Xh(6962687,1.8,90,2);S.position.set(-14,-12,14),l.add(S);const v=new Xh(1689528,1.4,90,2);v.position.set(0,16,-12),l.add(v);const y=new Xo;l.add(y);const M=LA(),{atoms:T,edges:A}=UA(y,M);A.forEach((At,Et)=>{let Ht,fe;if(Et<20){const be=Et/20*1e4;fe=400+Math.random()*400,Ht=Math.max(0,be-fe)}else{const U=1e4+(Et-20)/10*5e3;fe=200+Math.random()*300,Ht=Math.max(0,U-fe)}At.animationDuration=fe,At.spawnOffset=Ht,At.startPosition=new k((Math.random()-.5)*40,(Math.random()-.5)*30,(Math.random()-.5)*40-20),At.endPosition=new k((At.atom1.position.x+At.atom2.position.x)/2,(At.atom1.position.y+At.atom2.position.y)/2,(At.atom1.position.z+At.atom2.position.z)/2),At.line.material.opacity=0}),T.forEach(At=>{At.energy=0,At.energyPulse=0}),A.forEach(At=>{At.energy=0,At.energyPulse=0});const x=4400,_=new Float32Array(x*3),N=new Float32Array(x*3),L=new Float32Array(x),D=new Float32Array(x),H=new Float32Array(x*3),F=new Float32Array(x*3),z=new Float32Array(x),W=new Float32Array(x),w=new Wn;w.setAttribute("position",new mn(_,3)),w.setAttribute("color",new mn(N,3)),w.setAttribute("alpha",new mn(L,1)),w.setAttribute("size",new mn(D,1));const C=new Wn;C.setAttribute("position",new mn(H,3)),C.setAttribute("color",new mn(F,3)),C.setAttribute("alpha",new mn(z,1)),C.setAttribute("size",new mn(W,1));const G=new Pi({uniforms:{uMap:{value:M},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ns,vertexColors:!0}),J=new Pi({uniforms:{uMap:{value:M},uTime:{value:0}},vertexShader:`
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
      `,transparent:!0,depthWrite:!1,blending:Ns,vertexColors:!0}),ut=new E_(w,G),gt=new E_(C,J);l.add(ut),l.add(gt);const ht=Array.from({length:x},()=>({active:!1,start:new k,control:new k,target:new k,progress:0,duration:.85+Math.random()*.55,phase:Math.random()*Math.PI*2,color:new le,size:.018+Math.random()*.016,alpha:0,life:0,trailPosition:new k,trailColor:new le}));let P=!1,Y={x:0,y:0};const q={x:0,y:0};function St(At){P=!0,Y={x:At.clientX,y:At.clientY}}function bt(At){if(P){const Et=At.clientX-Y.x,Ht=At.clientY-Y.y;q.y+=Et*.005,q.x+=Ht*.005,Y={x:At.clientX,y:At.clientY}}}function O(){P=!1}function et(At){c.position.z+=At.deltaY*.01,c.position.z=Math.max(7,Math.min(25,c.position.z)),q.y+=(At.deltaX||At.deltaY)*8e-4}let xt=0;function Ct(At){if(At.touches.length===2){const Et=At.touches[0].clientX-At.touches[1].clientX,Ht=At.touches[0].clientY-At.touches[1].clientY;xt=Math.sqrt(Et*Et+Ht*Ht)}else At.touches.length===1&&(P=!0,Y={x:At.touches[0].clientX,y:At.touches[0].clientY})}function Pt(At){if(At.touches.length===2){const Et=At.touches[0].clientX-At.touches[1].clientX,Ht=At.touches[0].clientY-At.touches[1].clientY,fe=Math.sqrt(Et*Et+Ht*Ht),be=fe-xt;c.position.z-=be*.01,c.position.z=Math.max(7,Math.min(25,c.position.z)),xt=fe}else if(At.touches.length===1&&P){const Et=At.touches[0].clientX-Y.x,Ht=At.touches[0].clientY-Y.y;q.y+=Et*.005,q.x+=Ht*.005,Y={x:At.touches[0].clientX,y:At.touches[0].clientY}}}function nt(){P=!1}h.domElement.addEventListener("mousedown",St),h.domElement.addEventListener("mousemove",bt),h.domElement.addEventListener("mouseup",O),h.domElement.addEventListener("wheel",et,{passive:!0}),h.domElement.addEventListener("touchstart",Ct),h.domElement.addEventListener("touchmove",Pt),h.domElement.addEventListener("touchend",nt);function ct(At,Et,Ht=.8){const fe=new k(At,Et,Ht);fe.unproject(c);const be=fe.sub(c.position).normalize(),U=-c.position.z/be.z;return c.position.clone().add(be.multiplyScalar(U))}function Ut(At){const Et=(Math.random()-.5)*1.8,Ht=(Math.random()-.5)*1.6,fe=.5+Math.random()*.8;return ct(Et,Ht,fe)}function Vt(At){if(At<.18)return T[Math.floor(Math.random()*Math.max(1,Math.round(T.length*.35)))].position.clone();if(At<.5){const Ht=A[Math.floor(Math.random()*A.length)];return new k().lerpVectors(Ht.atom1.position,Ht.atom2.position,.45+Math.random()*.12)}return At<.8?T[Math.floor(Math.random()*T.length)].position.clone():T[Math.floor(Math.random()*T.length)].position.clone().add(new k((Math.random()-.5)*.15,(Math.random()-.5)*.15,(Math.random()-.5)*.15))}function Kt(At){const Et=ht.find(Q=>!Q.active);if(!Et)return;const Ht=Ut(),fe=Vt(At),be=new k((Math.random()-.5)*1.15,(Math.random()-.5)*1.1,(Math.random()-.5)*1.05),U=new k().copy(Ht).lerp(fe,.56).add(be).add(new k(0,0,2.15));Et.active=!0,Et.start.copy(Ht),Et.control.copy(U),Et.target.copy(fe),Et.progress=0,Et.life=0,Et.trailPosition.copy(Ht),Et.duration=1.4+Math.random()*.8,Et.phase=Math.random()*Math.PI*2;const E=[new le("#1e4bda"),new le("#3f7cff"),new le("#5d34ff"),new le("#1fc6b8"),new le("#24caff"),new le("#7c4cff"),new le("#2b7cff")];Et.color.copy(E[Math.floor(Math.random()*E.length)]),Et.size=.018+Math.random()*.015,Et.alpha=.12+Math.random()*.18,Et.position=Et.start.clone()}const de=15e3,Qe=3500;let I=performance.now(),ce=0,ae=0;function ne(){requestAnimationFrame(ne);const At=(performance.now()-I)*r.current;ce+=.016;const Et=Math.min(1,ae/Qe),Ht=.28+.72*(1-Math.abs(Et*2-1)),fe=At/de*Qe*(.45+Ht*1.15),be=Math.max(0,Math.floor(fe)-ae);for(let at=0;at<be;at+=1)ae<Qe&&(Kt(Et),ae+=1);y.rotation.x+=(q.x-y.rotation.x)*.05,y.rotation.y+=(q.y-y.rotation.y)*.05,P||(q.y+=.0026);const U=1+Math.sin(ce*1.2)*.01+Math.sin(ce*2.3+.7)*.006;y.scale.setScalar(U),p.position.x=Math.sin(ce*.2)*12,p.position.z=Math.cos(ce*.2)*12,S.position.x=Math.sin(ce*.24+Math.PI)*12,S.position.z=Math.cos(ce*.24+Math.PI)*12,v.position.y=14+Math.sin(ce*.16)*2;const E=.45+.55*Math.sin(ce*.4+Math.PI*.5),Q=[{hue:.62,saturation:.95,lightness:.28},{hue:.6,saturation:.9,lightness:.35},{hue:.68,saturation:.88,lightness:.32},{hue:.77,saturation:.85,lightness:.38},{hue:.33,saturation:.92,lightness:.4},{hue:.5,saturation:.9,lightness:.36},{hue:.52,saturation:.95,lightness:.38}],dt=at=>{const kt=At%4e3/4e3,Rt=Math.floor(At/4e3)%Q.length,Gt=Q[Rt],Nt=Q[(Rt+1)%Q.length],vt=at.x*.4+at.y*.3+at.z*.3,Qt=-30+kt*60,Ot=3,Lt=vt-Qt;let ie=Math.max(0,Math.min(1,(Lt+Ot)/(Ot*2))),V=Gt.hue,Mt=Nt.hue;Mt<V&&V-Mt>.5?Mt+=1:Mt>V&&Mt-V>.5&&(V+=1);const wt=(V*(1-ie)+Mt*ie)%1,zt=Math.max(.5,Gt.saturation*(1-ie)+Nt.saturation*ie),Tt=Math.max(.25,Math.min(.45,Gt.lightness*(1-ie)+Nt.lightness*ie));return{hue:wt,saturation:zt,lightness:Tt}};T.forEach((at,lt)=>{const kt=lt/T.length,Rt=Math.max(0,Math.min(1,(Et-kt*.5)*2)),Gt=Rt*at.targetScale;at.sprite.scale.set(Gt,Gt,Gt),at.energy=Math.max(0,at.energy-.018),at.energyPulse=Math.max(0,at.energyPulse-.035);const Nt=dt(at.position);at.sprite.material.opacity=Rt*(.38+E*.34+at.energyPulse*.16+.06*Math.sin(ce*.8+lt*.08))*.96,at.sprite.material.color.setHSL(Nt.hue,Nt.saturation,Nt.lightness+at.energyPulse*.06)}),A.forEach((at,lt)=>{const kt=At-at.spawnOffset;if(kt>=0&&kt<at.animationDuration){const Nt=kt/at.animationDuration,vt=Nt*Nt*(3-2*Nt),Dt=at.startPosition,Qt=at.atom1.position,Ot=at.atom2.position,Lt=Dt,ie=Ot,V=Qt,Mt=new k().copy(Lt).multiplyScalar((1-vt)*(1-vt)).addScaledVector(ie,2*(1-vt)*vt).addScaledVector(V,vt*vt),wt=new k().copy(ie).multiplyScalar((1-vt)*(1-vt)).addScaledVector(V,2*(1-vt)*vt).addScaledVector(Ot,vt*vt),zt=at.line.geometry.attributes.position.array;zt[0]=Mt.x,zt[1]=Mt.y,zt[2]=Mt.z,zt[3]=wt.x,zt[4]=wt.y,zt[5]=wt.z,at.line.geometry.attributes.position.needsUpdate=!0,at.line.material.opacity=vt*.8}else if(kt>=at.animationDuration){const Nt=at.line.geometry.attributes.position.array;Nt[0]=at.atom1.position.x,Nt[1]=at.atom1.position.y,Nt[2]=at.atom1.position.z,Nt[3]=at.atom2.position.x,Nt[4]=at.atom2.position.y,Nt[5]=at.atom2.position.z,at.line.geometry.attributes.position.needsUpdate=!0,at.line.material.opacity=.8}const Rt=new k().lerpVectors(at.atom1.position,at.atom2.position,.5);at.energy=Math.max(0,at.energy-.015),at.energyPulse=Math.max(0,at.energyPulse-.03);const Gt=dt(Rt);at.line.material.color.setHSL(Gt.hue,Gt.saturation,Gt.lightness+at.energyPulse*.05)}),J.uniforms.uTime.value=ce,h.render(l,c)}ne();function Yt(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",Yt),()=>{window.removeEventListener("resize",Yt),h.domElement.removeEventListener("mousedown",St),h.domElement.removeEventListener("mousemove",bt),h.domElement.removeEventListener("mouseup",O),h.domElement.removeEventListener("wheel",et),h.domElement.removeEventListener("touchstart",Ct),h.domElement.removeEventListener("touchmove",Pt),h.domElement.removeEventListener("touchend",nt),d&&h.domElement.parentNode&&d.removeChild(h.domElement),M.dispose(),T.forEach(At=>At.sprite.material.dispose()),A.forEach(At=>{At.line.geometry.dispose(),At.line.material.dispose()}),w.dispose(),C.dispose(),G.dispose(),J.dispose()}},[]),Xt.jsxs(Xt.Fragment,{children:[Xt.jsx("div",{ref:o,className:"fixed inset-0 w-full h-full pointer-events-auto"}),Xt.jsx("button",{onClick:()=>{i(!e),r.current=e?.5:10},style:{...pi.base,position:"fixed",bottom:24,left:24,zIndex:50,...e?pi.active:pi.inactive},onMouseEnter:l=>pi.hoverEnter(l.currentTarget),onMouseLeave:l=>Object.assign(l.currentTarget.style,e?pi.active:pi.inactive),children:e?"Normal Speed":"Speed Up"})]})}function OA(){return Xt.jsx(NA,{})}function zA(){const[o,e]=Tr.useState("home");return Xt.jsxs("div",{style:{position:"relative",width:"100%",minHeight:"100vh",background:"#020611"},children:[o==="home"&&Xt.jsx(OA,{}),o==="about"&&Xt.jsx(vx,{}),o==="home"&&Xt.jsx($S,{}),Xt.jsx(dx,{route:o,setRoute:e}),Xt.jsx(hx,{})]})}QS.createRoot(document.getElementById("root")).render(Xt.jsx(Xa.StrictMode,{children:Xt.jsx(zA,{})}));
