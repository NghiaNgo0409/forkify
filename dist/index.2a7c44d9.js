var t,e,r,n,i,o,a,c,s,u,l,f,p,h,d,v,m,g,y,b=globalThis;function _(t){return t&&t.__esModule?t.default:t}var w={},E={},S=function(t){return t&&t.Math===Math&&t};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof b&&b)||S("object"==typeof E&&E)||function(){return this}()||Function("return this")();var j={},O={};j=!(O=function(t){try{return!!t()}catch(t){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},k={};k=!O(function(){var t=(function(){}).bind();return"function"!=typeof t||t.hasOwnProperty("prototype")});var L=Function.prototype.call;F=k?L.bind(L):function(){return L.apply(L,arguments)};var M={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;o=P&&!M.call({1:2},1)?function(t){var e=P(this,t);return!!e&&e.enumerable}:M;var x={};x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var $={},T={},I={},N=Function.prototype,H=N.call,q=k&&N.bind.bind(H,H),z={},C=(I=k?q:function(t){return function(){return H.apply(t,arguments)}})({}.toString),R=I("".slice);z=function(t){return R(C(t),8,-1)};var A=Object,B=I("".split);T=O(function(){return!A("z").propertyIsEnumerable(0)})?function(t){return"String"===z(t)?B(t,""):A(t)}:A;var D={},G={};G=function(t){return null==t};var U=TypeError;D=function(t){if(G(t))throw new U("Can't call method on "+t);return t},$=function(t){return T(D(t))};var W={},Y={},Q={},K={},V="object"==typeof document&&document.all;K=void 0===V&&void 0!==V?function(t){return"function"==typeof t||t===V}:function(t){return"function"==typeof t},Q=function(t){return"object"==typeof t?null!==t:K(t)};var J={},X={};X=function(t,e){var r;return arguments.length<2?(r=E[t],K(r)?r:void 0):E[t]&&E[t][e]};var Z={};Z=I({}.isPrototypeOf);var tt={},te={},tr={},tn={};tn="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ti=E.process,to=E.Deno,ta=ti&&ti.versions||to&&to.version,tc=ta&&ta.v8;tc&&(c=(a=tc.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!c&&tn&&(!(a=tn.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=tn.match(/Chrome\/(\d+)/))&&(c=+a[1]),tr=c;var ts=E.String;tt=(te=!!Object.getOwnPropertySymbols&&!O(function(){var t=Symbol("symbol detection");return!ts(t)||!(Object(t) instanceof Symbol)||!Symbol.sham&&tr&&tr<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tu=Object;J=tt?function(t){return"symbol"==typeof t}:function(t){var e=X("Symbol");return K(e)&&Z(e.prototype,tu(t))};var tl={},tf={},tp={},th=String;tp=function(t){try{return th(t)}catch(t){return"Object"}};var tv=TypeError;tf=function(t){if(K(t))return t;throw new tv(tp(t)+" is not a function")},tl=function(t,e){var r=t[e];return G(r)?void 0:tf(r)};var tm={},tg=TypeError;tm=function(t,e){var r,n;if("string"===e&&K(r=t.toString)&&!Q(n=F(r,t))||K(r=t.valueOf)&&!Q(n=F(r,t))||"string"!==e&&K(r=t.toString)&&!Q(n=F(r,t)))return n;throw new tg("Can't convert object to primitive value")};var ty={},tb={},t_={};t_=!1;var tw={},tE=Object.defineProperty;tw=function(t,e){try{tE(E,t,{value:e,configurable:!0,writable:!0})}catch(r){E[t]=e}return e};var tS="__core-js_shared__",tj=tb=E[tS]||tw(tS,{});(tj.versions||(tj.versions=[])).push({version:"3.37.1",mode:t_?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ty=function(t,e){return tb[t]||(tb[t]=e||{})};var tO={},tF={},tk=Object;tF=function(t){return tk(D(t))};var tL=I({}.hasOwnProperty);tO=Object.hasOwn||function(t,e){return tL(tF(t),e)};var tM={},tP=0,tx=Math.random(),t$=I(1..toString);tM=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t$(++tP+tx,36)};var tT=E.Symbol,tI=ty("wks"),tN=tt?tT.for||tT:tT&&tT.withoutSetter||tM,tH=TypeError,tq=(tO(tI,t="toPrimitive")||(tI[t]=te&&tO(tT,t)?tT[t]:tN("Symbol."+t)),tI[t]);Y=function(t,e){if(!Q(t)||J(t))return t;var r,n=tl(t,tq);if(n){if(void 0===e&&(e="default"),r=F(n,t,e),!Q(r)||J(r))return r;throw new tH("Can't convert object to primitive value")}return void 0===e&&(e="number"),tm(t,e)},W=function(t){var e=Y(t,"string");return J(e)?e:e+""};var tz={},tC={},tR=E.document,tA=Q(tR)&&Q(tR.createElement);tC=function(t){return tA?tR.createElement(t):{}},tz=!j&&!O(function(){return 7!==Object.defineProperty(tC("div"),"a",{get:function(){return 7}}).a});var tB=Object.getOwnPropertyDescriptor;i=j?tB:function(t,e){if(t=$(t),e=W(e),tz)try{return tB(t,e)}catch(t){}if(tO(t,e))return x(!F(o,t,e),t[e])};var tD={},tG={};tG=j&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tU={},tW=String,tY=TypeError;tU=function(t){if(Q(t))return t;throw new tY(tW(t)+" is not an object")};var tQ=TypeError,tK=Object.defineProperty,tV=Object.getOwnPropertyDescriptor,tJ="enumerable",tX="configurable",tZ="writable";s=j?tG?function(t,e,r){if(tU(t),e=W(e),tU(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tZ in r&&!r[tZ]){var n=tV(t,e);n&&n[tZ]&&(t[e]=r.value,r={configurable:tX in r?r[tX]:n[tX],enumerable:tJ in r?r[tJ]:n[tJ],writable:!1})}return tK(t,e,r)}:tK:function(t,e,r){if(tU(t),e=W(e),tU(r),tz)try{return tK(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new tQ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tD=j?function(t,e,r){return s(t,e,x(1,r))}:function(t,e,r){return t[e]=r,t};var t0={},t1={},t2=Function.prototype,t4=j&&Object.getOwnPropertyDescriptor,t7=tO(t2,"name")&&(!j||j&&t4(t2,"name").configurable),t9={},t3=I(Function.toString);K(tb.inspectSource)||(tb.inspectSource=function(t){return t3(t)}),t9=tb.inspectSource;var t8={},t6={},t5=E.WeakMap;t6=K(t5)&&/native code/.test(String(t5));var et={},ee=ty("keys");et=function(t){return ee[t]||(ee[t]=tM(t))};var er={};er={};var en="Object already initialized",ei=E.TypeError,eo=E.WeakMap;if(t6||tb.state){var ea=tb.state||(tb.state=new eo);ea.get=ea.get,ea.has=ea.has,ea.set=ea.set,u=function(t,e){if(ea.has(t))throw new ei(en);return e.facade=t,ea.set(t,e),e},l=function(t){return ea.get(t)||{}},f=function(t){return ea.has(t)}}else{var ec=et("state");er[ec]=!0,u=function(t,e){if(tO(t,ec))throw new ei(en);return e.facade=t,tD(t,ec,e),e},l=function(t){return tO(t,ec)?t[ec]:{}},f=function(t){return tO(t,ec)}}var es=(t8={set:u,get:l,has:f,enforce:function(t){return f(t)?l(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!Q(e)||(r=l(e)).type!==t)throw new ei("Incompatible receiver, "+t+" required");return r}}}).enforce,eu=t8.get,el=String,ef=Object.defineProperty,ep=I("".slice),eh=I("".replace),ed=I([].join),ev=j&&!O(function(){return 8!==ef(function(){},"length",{value:8}).length}),em=String(String).split("String"),eg=t1=function(t,e,r){"Symbol("===ep(el(e),0,7)&&(e="["+eh(el(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tO(t,"name")||t7&&t.name!==e)&&(j?ef(t,"name",{value:e,configurable:!0}):t.name=e),ev&&r&&tO(r,"arity")&&t.length!==r.arity&&ef(t,"length",{value:r.arity});try{r&&tO(r,"constructor")&&r.constructor?j&&ef(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=es(t);return tO(n,"source")||(n.source=ed(em,"string"==typeof e?e:"")),t};Function.prototype.toString=eg(function(){return K(this)&&eu(this).source||t9(this)},"toString"),t0=function(t,e,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:e;if(K(r)&&t1(r,o,n),n.global)i?t[e]=r:tw(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:s(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ey={},eb={},e_={},ew={},eE={},eS={},ej=Math.ceil,eO=Math.floor;eS=Math.trunc||function(t){var e=+t;return(e>0?eO:ej)(e)},eE=function(t){var e=+t;return e!=e||0===e?0:eS(e)};var eF=Math.max,ek=Math.min;ew=function(t,e){var r=eE(t);return r<0?eF(r+e,0):ek(r,e)};var eL={},eM={},eP=Math.min;eM=function(t){var e=eE(t);return e>0?eP(e,9007199254740991):0},eL=function(t){return eM(t.length)};var ex=function(t){return function(e,r,n){var i,o=$(e),a=eL(o);if(0===a)return!t&&-1;var c=ew(n,a);if(t&&r!=r){for(;a>c;)if((i=o[c++])!=i)return!0}else for(;a>c;c++)if((t||c in o)&&o[c]===r)return t||c||0;return!t&&-1}},e$={includes:ex(!0),indexOf:ex(!1)}.indexOf,eT=I([].push);e_=function(t,e){var r,n=$(t),i=0,o=[];for(r in n)!tO(er,r)&&tO(n,r)&&eT(o,r);for(;e.length>i;)tO(n,r=e[i++])&&(~e$(o,r)||eT(o,r));return o};var eI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return e_(t,eI)},h=Object.getOwnPropertySymbols;var eN=I([].concat);eb=X("Reflect","ownKeys")||function(t){var e=p(tU(t));return h?eN(e,h(t)):e},ey=function(t,e,r){for(var n=eb(e),o=0;o<n.length;o++){var a=n[o];tO(t,a)||r&&tO(r,a)||s(t,a,i(e,a))}};var eH={},eq=/#|\.prototype\./,ez=function(t,e){var r=eR[eC(t)];return r===eB||r!==eA&&(K(e)?O(e):!!e)},eC=ez.normalize=function(t){return String(t).replace(eq,".").toLowerCase()},eR=ez.data={},eA=ez.NATIVE="N",eB=ez.POLYFILL="P";eH=ez,w=function(t,e){var r,n,o,a,c,s=t.target,u=t.global,l=t.stat;if(r=u?E:l?E[s]||tw(s,{}):E[s]&&E[s].prototype)for(n in e){if(a=e[n],o=t.dontCallGetSet?(c=i(r,n))&&c.value:r[n],!eH(u?n:s+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;ey(a,o)}(t.sham||o&&o.sham)&&tD(a,"sham",!0),t0(r,n,a,t)}};var eD={},eG={},eU=Function.prototype,eW=eU.apply,eY=eU.call;eG="object"==typeof Reflect&&Reflect.apply||(k?eY.bind(eW):function(){return eY.apply(eW,arguments)});var eQ={},eK={},eV=(eK=function(t){if("Function"===z(t))return I(t)})(eK.bind);eQ=function(t,e){return tf(t),void 0===e?t:k?eV(t,e):function(){return t.apply(e,arguments)}};var eJ={};eJ=X("document","documentElement");var eX={};eX=I([].slice);var eZ={},e0=TypeError;eZ=function(t,e){if(t<e)throw new e0("Not enough arguments");return t};var e1={};e1=/(?:ipad|iphone|ipod).*applewebkit/i.test(tn);var e2={};e2="process"===z(E.process);var e4=E.setImmediate,e7=E.clearImmediate,e9=E.process,e3=E.Dispatch,e8=E.Function,e6=E.MessageChannel,e5=E.String,rt=0,re={},rr="onreadystatechange";O(function(){d=E.location});var rn=function(t){if(tO(re,t)){var e=re[t];delete re[t],e()}},ri=function(t){return function(){rn(t)}},ro=function(t){rn(t.data)},ra=function(t){E.postMessage(e5(t),d.protocol+"//"+d.host)};e4&&e7||(e4=function(t){eZ(arguments.length,1);var e=K(t)?t:e8(t),r=eX(arguments,1);return re[++rt]=function(){eG(e,void 0,r)},v(rt),rt},e7=function(t){delete re[t]},e2?v=function(t){e9.nextTick(ri(t))}:e3&&e3.now?v=function(t){e3.now(ri(t))}:e6&&!e1?(g=(m=new e6).port2,m.port1.onmessage=ro,v=eQ(g.postMessage,g)):E.addEventListener&&K(E.postMessage)&&!E.importScripts&&d&&"file:"!==d.protocol&&!O(ra)?(v=ra,E.addEventListener("message",ro,!1)):v=rr in tC("script")?function(t){eJ.appendChild(tC("script"))[rr]=function(){eJ.removeChild(this),rn(t)}}:function(t){setTimeout(ri(t),0)});var rc=(eD={set:e4,clear:e7}).clear;w({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rc},{clearImmediate:rc});var rs=eD.set,ru={},rl={};rl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rf=E.Function,rp=/MSIE .\./.test(tn)||rl&&((e=E.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));ru=function(t,e){var r=e?2:1;return rp?function(n,i){var o=eZ(arguments.length,1)>r,a=K(n)?n:rf(n),c=o?eX(arguments,r):[],s=o?function(){eG(a,this,c)}:a;return e?t(s,i):t(s)}:t};var rh=E.setImmediate?ru(rs,!1):rs;w({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rh},{setImmediate:rh});var rd=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(s,"_invoke",{value:(a=new k(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw i;return{value:e,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=function t(r,n){var i=n.method,o=r.iterator[i];if(o===e)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(n[r.resultName]=c.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(t,n,a);if("normal"===u.type){if(c=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=d,a.method="throw",a.arg=u.arg)}})}),s}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var E=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;i(this,"_invoke",{value:function(i,o){function a(){return new e(function(r,a){!function r(i,o,a,c){var s=f(t[i],t,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){u.value=t,a(u)},function(t){return r("throw",t,a,c)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(null!=t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw TypeError(typeof t+" is not iterable")}return g.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(j.prototype),u(j.prototype,c,function(){return this}),t.AsyncIterator=j,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},S(E),u(E,s,"Generator"),u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=e,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=rd}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=rd:Function("r","regeneratorRuntime = r")(rd)}const rv="https://forkify-api.herokuapp.com/api/v2/recipes",rm=async function(t){try{let e=await Promise.race([fetch(t),new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await e.json();if(!e.ok)throw Error(`${r.message} ${e.status}`);return r}catch(t){throw t}},rg={recipe:{},search:{query:"",page:1,results:[],resultsPerPage:10}},ry=async function(t){try{let{recipe:e}=(await rm(`${rv}/${t}`)).data;e={id:e.id,title:e.title,publisher:e.publisher,sourceUrl:e.source_url,image:e.image_url,servings:e.servings,cookingTime:e.cooking_time,ingredients:e.ingredients},rg.recipe=e}catch(t){throw console.error(t),t}},rb=async function(t){try{let e=await rm(`${rv}?search=${t}`);rg.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url}))}catch(t){throw console.error(t),t}},r_=function(t=rg.search.page){rg.search.page=t;let e=(t-1)*rg.search.resultsPerPage,r=t*rg.search.resultsPerPage;return rg.search.results.slice(e,r)};var rw={};rw=new URL("icons.c14567a0.svg",import.meta.url).toString(),(Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t instanceof Fraction?t=t.clone():t=new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t instanceof Fraction?t=t.clone():t=new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(r=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){if(r(this.denominator)){var t=n(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}if(r(this.numerator)){var t=n(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),this.denominator*=e}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return(n.forEach(function(t){var e=i.indexOf(t);e>=0&&(r.push(t),i.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;return 1!=e&&r.push(e),r},y=Fraction;class rE{_data;render(t){if(!t||Array.isArray(t)&&0==t.length)return this.renderError("Cannot find your query!");this._data=t;let e=this._generateMarkup();this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){let t=`
    <div class="spinner">
      <svg>
        <use href="${_(rw)}#icon-loader"></use>
      </svg>
    </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t){let e=`<div class="error">
    <div>
      <svg>
        <use href="${_(rw)}.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rS extends rE{_parentElement=document.querySelector(".recipe");_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rw)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rw)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${_(rw)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings">
          <svg>
            <use href="${_(rw)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
    </div>
    <button class="btn--round">
      <svg class="">
        <use href="${_(rw)}#icon-bookmark-fill"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(t=>`<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_(rw)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${t.quantity?new y(t.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${t.unit}</span>
          ${t.description}
        </div>
      </li>`).join("")}
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
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${_(rw)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}}var rj=new rS;class rO extends rE{_parentElement=document.querySelector(".search");getQuery(){let t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",function(e){e.preventDefault(),t()})}}var rF=new rO;class rk extends rE{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){return`
    <li class="preview">
        <a class="preview__link" href="#${t.id}">
        <figure class="preview__fig">
            <img src="${t.image}" alt="Test" />
        </figure>
        <div class="preview__data">
            <h4 class="preview__title">${t.title}</h4>
            <p class="preview__publisher">${t.publisher}</p>
            </div>
        </div>
        </a>
    </li>`}}var rL=new rk;class rM extends rE{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");r&&t(+r.dataset.goto)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===t&&e>1?this._generateMarkupButton(t,"next"):t===e&&e>1?this._generateMarkupButton(t,"prev"):t<e?this._generateMarkupButton(t,"prev")+this._generateMarkupButton(t,"next"):""}_generateMarkupButton(t,e){return`
      <button data-goto="${"prev"===e?t-1:t+1}" class="btn--inline pagination__btn--${e}">
        <span>Page ${"prev"===e?t-1:t+1}</span>
        <svg class="search__icon">
          <use href="${_(rw)}#icon-arrow-${"prev"===e?"left":"right"}"></use>
        </svg>
      </button>
    `}}var rP=new rM;const rx=async function(){try{rj.renderSpinner();let t=window.location.hash.slice(1)?window.location.hash.slice(1):"664c8f193e7aa067e94e8706";await ry(t);let{recipe:e}=rg;rj.render(e)}catch(t){console.error(t),rj.renderError(t)}},r$=async function(){try{rL.renderSpinner();let t=rF.getQuery();if(!t)return;await rb(t),console.log(rg.search.results),rL.render(r_(4)),rP.render(rg.search)}catch(t){console.error(t)}};rj.addHandlerRender(rx),rF.addHandlerSearch(r$),rP.addHandlerClick(function(t){rL.render(r_(t)),rP.render(rg.search)}),rx();
//# sourceMappingURL=index.2a7c44d9.js.map
