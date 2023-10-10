var e,t,r,n,i,a,o,s,c,u,l,d,p,h,f,g,v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=v.parcelRequire3a11;null==_&&((_=function(e){if(e in m)return m[e].exports;if(e in b){var t=b[e];delete b[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){b[e]=t},v.parcelRequire3a11=_);var w={},k=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
k("object"==typeof self&&self)||k("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||w||Function("return this")();var E={},S={};S=w;var $={},L={},P={},j={};P=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype,O=x.call,M=P&&x.bind.bind(O,O);L=P?M:function(e){return function(){return O.apply(e,arguments)}};var T={},I={},q={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
q=function(e){return null==e};var H=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
I=function(e){if(q(e))throw new H("Can't call method on "+e);return e};var N=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
T=function(e){return N(I(e))};var R=L({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
$=Object.hasOwn||function(e,t){return R(T(e),t)};var A={},C={},D={};D=!1;var F={},W={},U=Object.defineProperty;W=function(e,t){try{U(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var G="__core-js_shared__";F=w[G]||W(G,{}),(C=function(e,t){return F[e]||(F[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:D?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var B={},z=0,Y=Math.random(),Q=L(1..toString);B=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Q(++z+Y,36)};var J={},V={},K={};K="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var X=w.process,Z=w.Deno,ee=X&&X.versions||Z&&Z.version,et=ee&&ee.v8;et&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(n=(r=et.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&K&&(!(r=K.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=K.match(/Chrome\/(\d+)/))&&(n=+r[1]),V=n;var er=w.String;// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
J=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!er(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&V&&V<41});var en={};en=J&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ei=w.Symbol,ea=C("wks"),eo=en?ei.for||ei:ei&&ei.withoutSetter||B;t=A=function(e){return $(ea,e)||(ea[e]=J&&$(ei,e)?ei[e]:eo("Symbol."+e)),ea[e]};var es={};// Detect IE8's incomplete defineProperty implementation
es=!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var ec={},eu={},el={},ed={},ep={},eh="object"==typeof document&&document.all,ef=(ep={all:eh,IS_HTMLDDA:void 0===eh&&void 0!==eh}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
ed=ep.IS_HTMLDDA?function(e){return"function"==typeof e||e===ef}:function(e){return"function"==typeof e};var eg=ep.all;el=ep.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:ed(e)||e===eg}:function(e){return"object"==typeof e?null!==e:ed(e)};var ev=w.document,ey=el(ev)&&el(ev.createElement);eu=function(e){return ey?ev.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ec=!es&&!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eu("div"),"a",{get:function(){return 7}}).a});var em={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
em=es&&j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eb={},e_=String,ew=TypeError;// `Assert: Type(argument) is Object`
eb=function(e){if(el(e))return e;throw new ew(e_(e)+" is not an object")};var ek={},eE={},eS={},e$=Function.prototype.call;eS=P?e$.bind(e$):function(){return e$.apply(e$,arguments)};var eL={},eP={};eP=function(e,t){var r;return arguments.length<2?(r=w[e],ed(r)?r:void 0):w[e]&&w[e][t]};var ej={};ej=L({}.isPrototypeOf);var ex=Object;eL=en?function(e){return"symbol"==typeof e}:function(e){var t=eP("Symbol");return ed(t)&&ej(t.prototype,ex(e))};var eO={},eM={},eT={},eI=String;eT=function(e){try{return eI(e)}catch(e){return"Object"}};var eq=TypeError;// `Assert: IsCallable(argument) is true`
eM=function(e){if(ed(e))return e;throw new eq(eT(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eO=function(e,t){var r=e[t];return q(r)?void 0:eM(r)};var eH={},eN=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eH=function(e,t){var r,n;if("string"===t&&ed(r=e.toString)&&!el(n=eS(r,e))||ed(r=e.valueOf)&&!el(n=eS(r,e))||"string"!==t&&ed(r=e.toString)&&!el(n=eS(r,e)))return n;throw new eN("Can't convert object to primitive value")};var eR=TypeError,eA=A("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
eE=function(e,t){if(!el(e)||eL(e))return e;var r,n=eO(e,eA);if(n){if(void 0===t&&(t="default"),r=eS(n,e,t),!el(r)||eL(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),eH(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
ek=function(e){var t=eE(e,"string");return eL(t)?t:t+""};var eC=TypeError,eD=Object.defineProperty,eF=Object.getOwnPropertyDescriptor,eW="enumerable",eU="configurable",eG="writable";i=es?em?function(e,t,r){if(eb(e),t=ek(t),eb(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eG in r&&!r[eG]){var n=eF(e,t);n&&n[eG]&&(e[t]=r.value,r={configurable:eU in r?r[eU]:n[eU],enumerable:eW in r?r[eW]:n[eW],writable:!1})}return eD(e,t,r)}:eD:function(e,t,r){if(eb(e),t=ek(t),eb(r),ec)try{return eD(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eC("Accessors not supported");return"value"in r&&(e[t]=r.value),e},E=function(e){var r=S.Symbol||(S.Symbol={});$(r,e)||i(r,e,{value:t(e)})};var eB={}.propertyIsEnumerable,ez=Object.getOwnPropertyDescriptor;o=ez&&!eB.call({1:2},1)?function(e){var t=ez(this,e);return!!t&&t.enumerable}:eB;var eY={};eY=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var eQ={},eJ={},eV={},eK=L({}.toString),eX=L("".slice);eV=function(e){return eX(eK(e),8,-1)};var eZ=Object,e0=L("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
eJ=j(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!eZ("z").propertyIsEnumerable(0)})?function(e){return"String"===eV(e)?e0(e,""):eZ(e)}:eZ,eQ=function(e){return eJ(I(e))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var e1=Object.getOwnPropertyDescriptor;a=es?e1:function(e,t){if(e=eQ(e),t=ek(t),ec)try{return e1(e,t)}catch(e){}if($(e,t))return eY(!eS(o,e,t),e[t])};var e2=w.Symbol;if(// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
E("dispose"),e2){var e9=a(e2,"dispose");// workaround of NodeJS 20.4 bug
// https://github.com/nodejs/node/issues/48699
// and incorrect descriptor from some transpilers and userland helpers
e9.enumerable&&e9.configurable&&e9.writable&&i(e2,"dispose",{value:e9.value,enumerable:!1,configurable:!1,writable:!1})}var e3={},e4={};e4=es?function(e,t,r){return i(e,t,eY(1,r))}:function(e,t,r){return e[t]=r,e};var e7={},e5={},e8=Function.prototype,e6=es&&Object.getOwnPropertyDescriptor,te=$(e8,"name")&&(!es||es&&e6(e8,"name").configurable),tt={},tr=L(Function.toString);ed(F.inspectSource)||(F.inspectSource=function(e){return tr(e)}),tt=F.inspectSource;var tn={},ti={},ta=w.WeakMap;ti=ed(ta)&&/native code/.test(String(ta));var to={},ts=C("keys");to=function(e){return ts[e]||(ts[e]=B(e))};var tc={};tc={};var tu="Object already initialized",tl=w.TypeError,td=w.WeakMap;if(ti||F.state){var tp=F.state||(F.state=new td);/* eslint-disable no-self-assign -- prototype methods protection */tp.get=tp.get,tp.has=tp.has,tp.set=tp.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(tp.has(e))throw new tl(tu);return t.facade=e,tp.set(e,t),t},c=function(e){return tp.get(e)||{}},u=function(e){return tp.has(e)}}else{var th=to("state");tc[th]=!0,s=function(e,t){if($(e,th))throw new tl(tu);return t.facade=e,e4(e,th,t),t},c=function(e){return $(e,th)?e[th]:{}},u=function(e){return $(e,th)}}var tf=(tn={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!el(t)||(r=c(t)).type!==e)throw new tl("Incompatible receiver, "+e+" required");return r}}}).enforce,tg=tn.get,tv=String,ty=Object.defineProperty,tm=L("".slice),tb=L("".replace),t_=L([].join),tw=es&&!j(function(){return 8!==ty(function(){},"length",{value:8}).length}),tk=String(String).split("String"),tE=e5=function(e,t,r){"Symbol("===tm(tv(t),0,7)&&(t="["+tb(tv(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!$(e,"name")||te&&e.name!==t)&&(es?ty(e,"name",{value:t,configurable:!0}):e.name=t),tw&&r&&$(r,"arity")&&e.length!==r.arity&&ty(e,"length",{value:r.arity});try{r&&$(r,"constructor")&&r.constructor?es&&ty(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return $(n,"source")||(n.source=t_(tk,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tE(function(){return ed(this)&&tg(this).source||tt(this)},"toString"),e7=function(e,t,r,n){n||(n={});var a=n.enumerable,o=void 0!==n.name?n.name:t;if(ed(r)&&e5(r,o,n),n.global)a?e[t]=r:W(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tS={},t$={},tL={},tP={},tj={},tx={},tO=Math.ceil,tM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tx=Math.trunc||function(e){var t=+e;return(t>0?tM:tO)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tj=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tx(t)};var tT=Math.max,tI=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tP=function(e,t){var r=tj(e);return r<0?tT(r+t,0):tI(r,t)};var tq={},tH={},tN=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tH=function(e){return e>0?tN(tj(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tq=function(e){return tH(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tR=function(e){return function(t,r,n){var i,a=eQ(t),o=tq(a),s=tP(n,o);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;o>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=a[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tR(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tR(!1)}.indexOf,tC=L([].push);tL=function(e,t){var r,n=eQ(e),i=0,a=[];for(r in n)!$(tc,r)&&$(n,r)&&tC(a,r);// Don't enum bug & hidden keys
for(;t.length>i;)$(n,r=t[i++])&&(~tA(a,r)||tC(a,r));return a};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tL(e,tD)},d=Object.getOwnPropertySymbols;var tF=L([].concat);// all object keys, includes non-enumerable and symbols
t$=eP("Reflect","ownKeys")||function(e){var t=l(eb(e));return d?tF(t,d(e)):t},tS=function(e,t,r){for(var n=t$(t),o=0;o<n.length;o++){var s=n[o];$(e,s)||r&&$(r,s)||i(e,s,a(t,s))}};var tW={},tU=/#|\.prototype\./,tG=function(e,t){var r=tz[tB(e)];return r===tQ||r!==tY&&(ed(t)?j(t):!!t)},tB=tG.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tz=tG.data={},tY=tG.NATIVE="N",tQ=tG.POLYFILL="P";tW=tG,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/e3=function(e,t){var r,n,i,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||W(c,{}):(w[c]||{}).prototype)for(n in t){// contained in target
if(o=t[n],i=e.dontCallGetSet?(s=a(r,n))&&s.value:r[n],!tW(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;tS(o,i)}(e.sham||i&&i.sham)&&e4(o,"sham",!0),e7(r,n,o,e)}};var tJ={},tV={},tK=Function.prototype,tX=tK.apply,tZ=tK.call;// eslint-disable-next-line es/no-reflect -- safe
tV="object"==typeof Reflect&&Reflect.apply||(P?tZ.bind(tX):function(){return tZ.apply(tX,arguments)});var t0={},t1={},t2=(t1=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===eV(e))return L(e)})(t1.bind);// optional / simple context binding
t0=function(e,t){return eM(e),void 0===t?e:P?t2(e,t):function(){return e.apply(t,arguments)}};var t9={};t9=eP("document","documentElement");var t3={};t3=L([].slice);var t4={},t7=TypeError;t4=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t5={};// eslint-disable-next-line redos/no-vulnerable -- safe
t5=/(?:ipad|iphone|ipod).*applewebkit/i.test(K);var t8={};t8="process"===eV(w.process);var t6=w.setImmediate,re=w.clearImmediate,rt=w.process,rr=w.Dispatch,rn=w.Function,ri=w.MessageChannel,ra=w.String,ro=0,rs={},rc="onreadystatechange";j(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=w.location});var ru=function(e){if($(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rd=function(e){ru(e.data)},rp=function(e){// old engines have not location.origin
w.postMessage(ra(e),p.protocol+"//"+p.host)};t6&&re||(t6=function(e){t4(arguments.length,1);var t=ed(e)?e:rn(e),r=t3(arguments,1);return rs[++ro]=function(){tV(t,void 0,r)},h(ro),ro},re=function(e){delete rs[e]},t8?h=function(e){rt.nextTick(rl(e))}:rr&&rr.now?h=function(e){rr.now(rl(e))}:ri&&!t5?(g=(f=new ri).port2,f.port1.onmessage=rd,h=t0(g.postMessage,g)):w.addEventListener&&ed(w.postMessage)&&!w.importScripts&&p&&"file:"!==p.protocol&&!j(rp)?(h=rp,w.addEventListener("message",rd,!1)):h=rc in eu("script")?function(e){t9.appendChild(eu("script"))[rc]=function(){t9.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rh=(tJ={set:t6,clear:re}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
e3({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rh},{clearImmediate:rh});var rf=tJ.set,rg={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ry=w.Function,rm=/MSIE .\./.test(K)||rv&&((e=w.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rg=function(e,t){var r=t?2:1;return rm?function(n,i/* , ...arguments */){var a=t4(arguments.length,1)>r,o=ed(n)?n:ry(n),s=a?t3(arguments,r):[],c=a?function(){tV(o,this,s)}:o;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rb=w.setImmediate?rg(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
e3({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rb},{setImmediate:rb});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(o=new P(a||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)// function.sent implementation.
o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var u=d(e,n,o);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=o.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o.method="throw",o.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,o)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,o(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,o,s)})}}(i,a,r,o)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(o,// invocations of the iterator.
o):o()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o// If outerFn is a generator, return the full iterator.
:o.next().then(function(e){return e.done?e.value:o.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&// location outside the try/catch block.
(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=r_}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=r_:Function("r","regeneratorRuntime = r")(r_)}const rw="https://forkify-api.herokuapp.com/api/v2/recipes/",rk="a2ee091e-b1c3-4654-842c-964184400f38",rE=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 seconds."))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rS=async function(e){try{await fetch(e,{method:"DELETE"})}catch(e){throw e}},r$={recipe:{},search:{query:"",results:[],currentPage:1,resultsPerPage:10},bookmarks:[]},rL=function(e){return{id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,sourceURL:e.source_url,cookingTime:e.cooking_time,ingredients:e.ingredients,servings:e.servings,...e.key&&{key:e.key}}},rP=async function(e){try{// AJAX call for the recipe
let t=await rE(`${rw}${e}?key=${rk}`);r$.recipe=rL(t.data.recipe),r$.bookmarks.some(e=>e.id===r$.recipe.id)?r$.recipe.bookmarked=!0:r$.recipe.bookmarked=!1}catch(e){throw e}},rj=async function(e){try{r$.search.query=e;let t=await rE(`${rw}?search=${e}&key=${rk}`);// Save recipes to the results Array
r$.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}}))}catch(e){throw e}},rx=function(e=1){// Set current page to the search Object
r$.search.currentPage=e,// Set total number of pages to the search object
r$.search.numPages=Math.ceil(r$.search.results.length/r$.search.resultsPerPage);let t=(e-1)*10,r=10*e;return r$.search.results.slice(t,r)},rO=function(e){r$.recipe.ingredients.forEach(t=>t.quantity?t.quantity=t.quantity*e/r$.recipe.servings:""),// Update number of servings
r$.recipe.servings=e},rM=function(){// If recipe not bookmarked, bookmark it
if(r$.recipe.bookmarked){let e=r$.bookmarks.findIndex(e=>e.id===r$.recipe.id);r$.bookmarks.splice(e,1),r$.recipe.bookmarked=!1}else r$.bookmarks.push(r$.recipe),r$.recipe.bookmarked=!0;// Save bookmarks to the local storage
localStorage.setItem("bookmarks",JSON.stringify(r$.bookmarks))};r$.bookmarks=JSON.parse(localStorage.getItem("bookmarks"));const rT=async function(e){try{// Getting an Array of all ingredient data from newRecipe
let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")),r=[];for(;t.length;)r.push(t.splice(0,3));// Final ingredients array
let n=r.map(e=>{let[t,r,n]=e.map(e=>e[1].trim());return{quantity:t?+t:null,unit:r,description:n}}),i={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:n},a=await rE(`${rw}?key=${rk}`,i);// Setting the uploaded recipe as current recipe
r$.recipe=rL(a.data.recipe),// Bookmarking the newly uploaded recipe
rM()}catch(e){throw e}},rI=async function(){try{r$.recipe.bookmarked&&rM();// Getting it's index from the search results Array, if included
let e=r$.search.results.findIndex(e=>e.id===r$.recipe.id);// if inluded, remove it
if(// Saving the index to the recipe
r$.recipe.index=e,// Sending delete request to the API
await rS(`${rw}${r$.recipe.id}?key=${rk}`),-1===e)return;r$.search.results.splice(e,1)}catch(e){throw e}};var rq={};rq=new URL(_("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rH{_data;/**
   * Renders the recieved object to the Dom
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @this {Object} View instance
   * @author Abdul Rhman
   */render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}/**
   * Updates the changes to the Dom
   * @param {Object | Object[]} data The data to be updated
   * @this {Object} View instance
   */update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentEl.innerHTML=""}// Renders a loading spinner while waiting for an action to happen
renderSpinner(){let e=`
        <div class="spinner">
          <svg>
            <use href="${/*@__PURE__*/y(rq)}#icon-loader"></use>
          </svg>
        </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}/**
   * Displays an error message to the view
   * @param {String} message The message to be displayed
   */renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/y(rq)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}/**
   * Renders a success message to the view
   * @param {String} message The message to be displayed
   */renderSuccessMessage(e=this._successMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/y(rq)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var rN={};//FRACTY REDUCES THE FRACTION.
function rR(e,t,r,n,i){var a,o,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rN=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return rR(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,a,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return rR(u,(c-1)*o,n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,a,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};class rA extends rH{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe! Please try another one.";_successMessage="";// Rendering the recipe to the view
addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}// Updating the number of servings
addHandlerServing(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}// Add/Remove bookmarks
addHandlerBookmarks(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}// Delete recipe
addHandlerDelete(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--delete");r&&e()})}// Markup for rendering recipe
_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rq)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rq)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button data-update-to="${this._data.servings-1}" class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/y(rq)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button data-update-to="${this._data.servings+1}" class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${/*@__PURE__*/y(rq)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/y(rq)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--delete ${this._data.key?"":"hidden"}">
            <svg class="">
              <use href="${/*@__PURE__*/y(rq)}#icon-delete"></use>
            </svg>
          </button>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/y(rq)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        
        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._ingredientMarkup).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceURL}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rq)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_ingredientMarkup(e){return`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/y(rq)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?/*@__PURE__*/y(rN)(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
    `}}var rC=new rA,rD=new class extends rH{_parentEl="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
          <li class="preview">
            <a class="preview__link ${e.id===t?"preview__link--active":""}" href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                <div class="preview__user-generated ${e.key?"":"hidden"}">
                  <svg>
                    <use href="${/*@__PURE__*/y(rq)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `}};class rF extends rH{_parentEl=document.querySelector(".results");_errorMessage="No recipe found for your query! please try another one.";_successMessage="";// Generating markup for search results via the preview view
_generateMarkup(){return this._data.map(e=>rD._generateMarkup(e)).join("")}}var rW=new rF;class rU extends rH{_parentEl=document.querySelector(".search");// Listening for the search query
addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}// Getting the search query
getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._parentEl.querySelector(".search__field").value="",e}}var rG=new rU;class rB extends rH{_parentEl=document.querySelector(".pagination");addHandlerPagination(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){return(// Only 1 page or there are no pages
1!==this._data.numPages&&this._data.numPages?1===this._data.currentPage?this._markupNext()+this._pageCount():this._data.currentPage===this._data.numPages?this._markupPrev()+this._pageCount():this._markup()+this._pageCount():"")}// Markup to display previous button
_markupPrev(){return`
          <button data-goto="${this._data.currentPage-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rq)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.currentPage-1}</span>
          </button>
    `}// Markup to display next button
_markupNext(){return`
          <button data-goto="${this._data.currentPage+1}" class="btn--inline   pagination__btn--next">
            <span>Page ${this._data.currentPage+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rq)}#icon-arrow-right"></use>
            </svg>
          </button>
    `}// Markup to display both previous and next buttons
_markup(){return this._markupPrev()+this._markupNext()}// Markup to display page count
_pageCount(){return`
    <div class="page__count">
      <text>Page ${this._data.currentPage} of ${this._data.numPages}</text>
    </div>
    `}}var rz=new rB;class rY extends rH{_parentEl=document.querySelector(".bookmarks");_errorMessage="No bookmarks yet! Find a nice recipe and bookmark it :)";_generateMarkup(){return this._data.map(e=>rD._generateMarkup(e)).join("")}addHandlerRenderBookmarks(e){window.addEventListener("load",e)}}var rQ=new rY;class rJ extends rH{_parentEl=document.querySelector(".upload");_successMessage="Congratulations! Your recipe was successfully uploaded.";ings=["ing-1"];_formRender=!1;_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}// Handler method for uploading the recipe
addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}// If form is not rendered, renders the form and displays the window
showWindow(){this._formRender||this._parentEl.insertAdjacentHTML("afterbegin",this._generateMarkup()),this._formRender=!0,this._window.classList.remove("hidden"),this._overlay.classList.remove("hidden")}// Hides the form window, does not clear the form
hideWindow(){this._window.classList.add("hidden"),this._overlay.classList.add("hidden")}// Hides (kills) the window and clears the form
killWindow(){this.hideWindow(),this.ings=["ing-1"],this._clear(),this._formRender=!1}// Handler method to display the window
_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.showWindow.bind(this)),this.ings=["ing-1"]}// Handler method to hide/kill the window
_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.killWindow.bind(this)),this._overlay.addEventListener("click",this.hideWindow.bind(this))}// Adds an ingredient input field to the Dom
addIngredient(){let e=this._addIngMarkup();10!==this.ings.length&&(this.ings.push(`ing-${this.ings.length+1}`),this._parentEl.querySelector(".upload__column").insertAdjacentHTML("beforeend",e))}// Handler method to add an ingredinet input field to the Dom
addHandlerAddIng(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn_add");r&&e()})}// Removes an ingredinet input field from the Dom
removeIngredient(e){this._parentEl.querySelector(".upload__column").removeChild(e),this.ings.pop()}// Handler method to remove an ingredinet input field from the Dom
addHandlerRemoveIng(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn_remove");if(!r)return;let n=document.querySelector(".upload__column").children,i=n[n.length-1];e(i)})}// Markup for upload recipe form
_generateMarkup(){return`
        <div class="upload__column-data">
          <h3 class="upload__heading-data">Recipe data</h3>
          <label>Title</label>
          <input required name="title" type="text" minlength="3"/>
          <label>URL</label>
          <input required name="sourceUrl" type="text" minlength="5"/>
          <label>Image URL</label>
          <input required name="image" type="text" minlength="4"/>
          <label>Publisher</label>
          <input required name="publisher" type="text" minlength="4"/>
          <label>Prep time</label>
          <input required name="cookingTime" type="number" />
          <label>Servings</label>
          <input required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <div class="upload__column--ing">
            <label>Ingredient 1</label>
            <input
              type="number"
              step=".01"
              name="ingredient-1-1"
              placeholder="Quantity"
            />
            <input
              type="text"
              name="ingredient-1-2"
              placeholder="Unit"
            />
            <input
              type="text"
              required
              name="ingredient-1-3"
              placeholder="Description"
            />
            <button type="button" data-title="Add ingredient" class="btn_ing btn_add">
              <svg class="">
                <use href="${/*@__PURE__*/y(rq)}#icon-plus"></use>
              </svg>
            </button>
          </div>
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="${/*@__PURE__*/y(rq)}#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
    `}// Markup for adding an ingredient
_addIngMarkup(){return`
          <div class="upload__column--ing">
            <label>Ingredient ${this.ings.length+1}</label>
            <input
              type="number"
              step=".01"
              name="ingredient-${this.ings.length+1}-1"
              placeholder="Quantity"
            />
            <input
              type="text"
              name="ingredient-${this.ings.length+1}-2"
              placeholder="Unit"
            />
            <input
              type="text"
              required
              name="ingredient-${this.ings.length+1}-3"
              placeholder="Description"
            />
            <button type="button" data-title="Remove ingredient" class="btn_ing btn_remove">
              <svg class="">
                <use href="${/*@__PURE__*/y(rq)}#icon-minus"></use>
              </svg>
            </button>
          </div>
    `}}var rV=new rJ;// Getting and rendering the recipe
const rK=async function(){try{// Getting ID from the window
let e=window.location.hash.slice(1);if(!e)return;rC.renderSpinner(),rW.update(rx(r$.search.currentPage)),rQ.update(r$.bookmarks),// Loading recipe
await rP(e),rC.render(r$.recipe)}catch(e){rC.renderError()}},rX=async function(){try{// Get search query
let e=rG.getQuery();if(!e)return;rW.renderSpinner(),// Load search results from the API
await rj(e),rW.render(rx()),rz.render(r$.search)}catch(e){rW.renderError(e)}},rZ=async function(e){try{rV.renderSpinner(),// Upload recipe to API
await rT(e),rC.render(r$.recipe),rV.renderSuccessMessage(),// Update hash in URL with current recipe
window.history.pushState(null,"",`#${r$.recipe.id}`),rQ.render(r$.bookmarks),// Close upload form window
setTimeout(()=>rV.killWindow(),2500)}catch(e){rV.renderError(e),setTimeout(()=>rV.killWindow(),2500)}},r0=async function(){try{// Updating the search results if they were displaying and affected
if(await rI(),rC.renderSuccessMessage("Your recipe was successfully deleted."),// Removing the deleted recipe's hash from the URL
history.pushState("",document.title,window.location.pathname+window.location.search),r$.search.query&&-1!==r$.recipe.index){// If it was last recipe on the page, render previous page
let e=r$.search.currentPage>Math.ceil(r$.search.results.length/r$.search.resultsPerPage)?r$.search.currentPage-1:r$.search.currentPage;rW.render(rx(e)),rz.render(r$.search)}rQ.render(r$.bookmarks)}catch(e){rC.renderError(e)}};rQ.addHandlerRenderBookmarks(()=>rQ.render(r$.bookmarks)),rC.addHandlerRender(rK),rC.addHandlerServing(function(e){// Update ingredient quantity according to new number of servings
rO(e),rC.update(r$.recipe)}),rC.addHandlerBookmarks(function(){// Add/Delete bookmarks
rM(),rC.update(r$.recipe),rQ.render(r$.bookmarks)}),rC.addHandlerDelete(r0),rG.addHandlerSearch(rX),rz.addHandlerPagination(function(e){rW.render(rx(e)),rz.render(r$.search)}),rV.addHandlerAddIng(()=>rV.addIngredient()),rV.addHandlerRemoveIng(e=>rV.removeIngredient(e)),rV.addHandlerUpload(rZ);//# sourceMappingURL=index.8890d0f3.js.map

//# sourceMappingURL=index.8890d0f3.js.map
