(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"3vJe":function(e,t,n){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},u=e.split(o),c=i.decode||r,s=0;s<u.length;s++){var f=u[s],l=f.indexOf("=");if(!(l<0)){var d=f.substr(0,l).trim(),h=f.substr(++l,f.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),void 0==n[d]&&(n[d]=a(h,c))}}return n},t.serialize=function(e,t,n){var r=n||{},o=r.encode||i;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");var a=o(t);if(a&&!u.test(a))throw new TypeError("argument val is invalid");var c=e+"="+a;if(null!=r.maxAge){var s=r.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(s)}if(r.domain){if(!u.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!u.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(c+="; HttpOnly");r.secure&&(c+="; Secure");if(r.sameSite){switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,i=encodeURIComponent,o=/; */,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function a(e,t){try{return t(e)}catch(n){return e}}},CiRD:function(e,t,n){"use strict";var r=n("aNYv"),i=n("mXGw"),o=n("Mthw");t.a=function(e){var t=function(e){var t=Object(i.useContext)(o.b);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),r=Object(i.useState)(n),u=r[0],a=r[1],c=Object(i.useRef)(u);return Object(i.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,i=e;r<i.length;r++){var o=i[r];if(t[o]!==n[o])return!0}return!1})(e||null,n,c.current)&&a(n),c.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[u,Object(i.useMemo)((function(){return t.set.bind(t)}),[t]),Object(i.useMemo)((function(){return t.remove.bind(t)}),[t])]}(["_garden_token"]),n=Object(r.a)(t,2),u=n[0],a=n[1];Object(i.useEffect)((function(){e.token&&a("_garden_token",e.token,{path:"/"})}),[u]);return{token:Object(i.useMemo)((function(){return u._garden_token||void 0}),[u]),removeCookie:function(){a("_garden_token",void 0,{path:"/",expires:new Date(3)})}}}},Mthw:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("mXGw"),i=n("vj+v").a,o=r.createContext(new i),u=o.Provider;o.Consumer,t.b=o},TJjZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("YZeP");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},YZeP:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},Yh15:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"c",(function(){return Z})),n.d(t,"d",(function(){return B}));var r=n("NthX"),i=n.n(r),o=n("eijD"),u=n("YZeP");var a=n("TJjZ");function c(e){return function(e){if(Array.isArray(e))return Object(u.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n("mXGw"),f=n.n(s),l=n("ntO7"),d=n("CiRD"),h=Object.prototype.hasOwnProperty;var p=new WeakMap,v=0;var y={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},g=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):p.has(e[n])?r=p.get(e[n]):(r=v,p.set(e[n],v++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var b="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),m={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount||0,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(b?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(b?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,i;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((i=t.length)===n.length)for(;i--&&e(t[i],n[i]););return-1===i}if(!r||"object"===typeof t){for(r in i=0,t){if(h.call(t,r)&&++i&&!h.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===i}}return t!==t&&n!==n},fetcher:y.fetcher,isOnline:y.isOnline,isDocumentVisible:y.isDocumentVisible},O=Object(s.createContext)({});O.displayName="SWRConfigContext";var w=O,j=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},S=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},_="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),k=_?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},T=_?s.useEffect:s.useLayoutEffect,C={},N={},E={},x={},M={},D={},A={},I=function(){var e=0;return function(){return++e}}();if(!_&&window.addEventListener){var L=function(e){if(m.isDocumentVisible()&&m.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return L(E)}),!1),window.addEventListener("focus",(function(){return L(E)}),!1),window.addEventListener("online",(function(){return L(x)}),!1)}var P=function(e,t){void 0===t&&(t=!0);var n=g.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=M[r];if(r&&u){for(var a=g.get(r),c=g.get(i),s=g.get(o),f=[],l=0;l<u.length;++l)f.push(u[l](t,a,c,s,l>0));return Promise.all(f).then((function(){return g.get(r)}))}return Promise.resolve(g.get(r))},R=function(e,t,n,r){var i=M[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},V=function(e,t,n){return void 0===n&&(n=!0),j(void 0,void 0,void 0,(function(){var r,i,o,u,a,c,s,f,l,d,h,p,v;return S(this,(function(y){switch(y.label){case 0:if(r=g.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,P(e,n)];if(D[i]=I()-1,A[i]=0,u=D[i],a=N[i],f=!1,t&&"function"===typeof t)try{t=t(g.get(i))}catch(b){s=b}if(!t||"function"!==typeof t.then)return[3,5];f=!0,y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t];case 2:return c=y.sent(),[3,4];case 3:return l=y.sent(),s=l,[3,4];case 4:return[3,6];case 5:c=t,y.label=6;case 6:return(d=function(){if(u!==D[i]||a!==N[i]){if(s)throw s;return!0}})()?[2,c]:("undefined"!==typeof c&&g.set(i,c),g.set(o,s),A[i]=I()-1,f?[3,8]:[4,0]);case 7:if(y.sent(),d())return[2,c];y.label=8;case 8:if(h=M[i]){for(p=[],v=0;v<h.length;++v)p.push(h[v](!!n,c,s,void 0,v>0));return[2,Promise.all(p).then((function(){if(s)throw s;return g.get(i)}))]}if(s)throw s;return[2,c]}}))}))};w.Provider;var U=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r,i,o={};t.length>=1&&(r=t[0]),t.length>2?(i=t[1],o=t[2]):"function"===typeof t[1]?i=t[1]:"object"===typeof t[1]&&(o=t[1]);var u=g.serializeKey(r),a=u[0],c=u[1],f=u[2],l=u[3];o=Object.assign({},m,Object(s.useContext)(w),o);var d=Object(s.useRef)(o);T((function(){d.current=o})),"undefined"===typeof i&&(i=o.fetcher);var h=function(){var e=g.get(a);return"undefined"===typeof e?o.initialData:e},p=h(),v=g.get(f),y=!!g.get(l),b=Object(s.useRef)({data:!1,error:!1,isValidating:!1}),O=Object(s.useRef)({data:p,error:v,isValidating:y});Object(s.useDebugValue)(O.current.data);var _=Object(s.useState)(null)[1],L=Object(s.useCallback)((function(e){var t=!1;for(var n in e)O.current[n]!==e[n]&&(O.current[n]=e[n],b.current[n]&&(t=!0));if(t||o.suspense){if(P.current||!J.current)return;_({})}}),[]),P=Object(s.useRef)(!1),U=Object(s.useRef)(a),J=Object(s.useRef)(!1),z=Object(s.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];P.current||J.current&&(t=d.current)[e].apply(t,n)}}),H=Object(s.useCallback)((function(e,t){return V(U.current,e,t)}),[]),K=function(e,t){t&&(e[a]?e[a].push(t):e[a]=[t])},W=function(e,t){if(e[a]){var n=e[a],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},Y=Object(s.useCallback)((function(t){return void 0===t&&(t={}),j(e,void 0,void 0,(function(){var e,n,r,u,s,d,h;return S(this,(function(p){switch(p.label){case 0:if(!a||!i)return[2,!1];if(P.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof C[a]&&t.dedupe,p.label=1;case 1:return p.trys.push([1,6,,7]),L({isValidating:!0}),g.set(l,!0),n||R(a,O.current.data,O.current.error,!0),r=void 0,u=void 0,n?(u=N[a],[4,C[a]]):[3,3];case 2:return r=p.sent(),[3,5];case 3:return o.loadingTimeout&&!g.get(a)&&setTimeout((function(){e&&z.current.emit("onLoadingSlow",a,o)}),o.loadingTimeout),C[a]=null!==c?i.apply(void 0,c):i(a),N[a]=u=I(),[4,C[a]];case 4:r=p.sent(),setTimeout((function(){delete C[a],delete N[a]}),o.dedupingInterval),z.current.emit("onSuccess",r,a,o),p.label=5;case 5:return N[a]>u||D[a]&&(u<=D[a]||u<=A[a]||0===A[a])?(L({isValidating:!1}),[2,!1]):(g.set(a,r),g.set(f,void 0),g.set(l,!1),s={isValidating:!1},"undefined"!==typeof O.current.error&&(s.error=void 0),o.compare(O.current.data,r)||(s.data=r),L(s),n||R(a,r,s.error,!1),[3,7]);case 6:return d=p.sent(),delete C[a],delete N[a],g.set(f,d),O.current.error!==d&&(L({isValidating:!1,error:d}),n||R(a,void 0,d,!1)),z.current.emit("onError",d,a,o),o.shouldRetryOnError&&(h=(t.retryCount||0)+1,z.current.emit("onErrorRetry",d,a,o,Y,Object.assign({dedupe:!0},t,{retryCount:h}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[a]);T((function(){if(a){P.current=!1,J.current=!0;var e=O.current.data,t=h();U.current!==a&&(U.current=a),o.compare(e,t)||L({data:t});var n=function(){return Y({dedupe:!0})};(o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount)&&("undefined"!==typeof t?k(n):n());var r=!1,i=function(){!r&&d.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),d.current.focusThrottleInterval))},u=function(){d.current.revalidateOnReconnect&&n()},c=function(e,t,r,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||o.compare(O.current.data,t)||(a.data=t,c=!0),O.current.error!==r&&(a.error=r,c=!0),"undefined"!==typeof i&&O.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&L(a),!!e&&(u?n():Y())};return K(E,i),K(x,u),K(M,c),function(){L=function(){return null},P.current=!0,W(E,i),W(x,u),W(M,c)}}}),[a,Y]),T((function(){var t=null,n=function(){return j(e,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return O.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,Y({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,Y]);var G=Object(s.useMemo)((function(){var e={revalidate:Y,mutate:H};return Object.defineProperties(e,{error:{get:function(){return b.current.error=!0,U.current===a?O.current.error:v},enumerable:!0},data:{get:function(){return b.current.data=!0,U.current===a?O.current.data:p},enumerable:!0},isValidating:{get:function(){return b.current.isValidating=!0,!!a&&O.current.isValidating},enumerable:!0}}),e}),[Y]);if(o.suspense){var Z=g.get(a),B=g.get(f);if("undefined"===typeof Z&&(Z=p),"undefined"===typeof B&&(B=v),"undefined"===typeof Z&&"undefined"===typeof B){if(C[a]||Y(),C[a]&&"function"===typeof C[a].then)throw C[a];Z=C[a]}if("undefined"===typeof Z&&B)throw B;return{error:B,data:Z,revalidate:Y,mutate:H,isValidating:O.current.isValidating}}return G};var J,z=U,H=f.a.createElement,K=Object(s.createContext)(null),W=function(e,t){var n=Object(l.a)({token:e}),r=n.createUrl,i=n.createHeaders;return function(e,n){return n=Object.assign({headers:i()},n),fetch(r(e),n).then((function(e){return e.json()})).then(t)}},Y=function(e){var t=e.children,n=Object(d.a)({}).token,r=Object(s.useMemo)((function(){return W(n,(function(e){return e.noteIndex}))}),[n]),i=Object(l.a)({token:n}),o=i.createUrl,u=i.createHeaders,a=Object(s.useMemo)((function(){return function(e){return fetch(o("api/notes"),{method:"PUT",body:JSON.stringify({note:e}),headers:u()}).then((function(e){return e.json()})).then((function(e){return e.note}))}}),[n]),f=z("/api/notes",r),h=f.data,p=f.mutate,v=Object(s.useMemo)((function(){return null!==h&&void 0!==h?h:[]}),[h]);return H(K.Provider,{value:{notes:v,getNote:function(e){return v&&v.find((function(t){return e===t.slug}))},addNote:function(e){p([].concat(c(v),[e]))},createNote:a}},t)},G=(t.b=function(){var e=Object(s.useContext)(K),t=e.notes,n=e.getNote,r=e.addNote,i=e.createNote,o=Object(s.useMemo)((function(){return t.map((function(e){return e.slug}))}),[t]),u=Object(s.useMemo)((function(){return t.map((function(e){return e.url}))}),[t]);return{notes:t,getNote:n,findBySlug:function(e){if(t&&t.length)return t.find((function(t){return e===t.slug}))},allSlugs:o,allNoteLinks:u,addNote:r,createNote:i}},{siteName:"Digital Garden",authorName:"",defaultNote:"digital-garden-builder",siteTwitter:"@digigardenbuilder",authorTwitter:""});try{J=n("oCSz")}catch(F){J=!1}var Z=function(){var e=Object(d.a)({}).token,t=Object(s.useMemo)((function(){return W(e,(function(e){return e.settings}))}),[e]),n=z("/api/settings",t,{initialData:J?Object.assign(G,J):G}),r=n.data,u=n.mutate,a=Object(l.a)({token:e}),c=a.createUrl,f=a.createHeaders,h=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(c("/api/settings"),{method:"POST",body:JSON.stringify({settings:t}),headers:f()}).then((function(e){return e.json()})).then((function(e){return e.settings?(u(e.settings),e.settings):t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=Object(s.useMemo)((function(){return r&&r.siteName?r.siteName:"Digital Garden"}),[r]),v=Object(s.useMemo)((function(){return r&&r.siteTwitter?r.siteTwitter:""}),[r]),y=Object(s.useMemo)((function(){return r&&r.authorName?r.authorName:""}),[r]),g=Object(s.useMemo)((function(){return r&&r.authorTwitter?r.authorTwitter:""}),[r]),b=Object(s.useMemo)((function(){return r&&r.defaultNote?r.defaultNote:"digtial-garden-builder"}),[r]);return{settings:r,saveSettings:h,siteName:p,siteTwitter:v,authorName:y,authorTwitter:g,defaultNote:b}},B=function(e){var t=Object(d.a)({}).token,n=Object(s.useMemo)((function(){return W(t,(function(e){return e.note}))}),[t]),r=Object(l.a)({token:t}),u=r.createUrl,a=r.createHeaders,c=z("/api/notes/".concat(e.slug),n,{initialData:e.note}),f=c.data,h=c.mutate,p=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete n.references,h(n),t.abrupt("return",fetch(u("/api/notes/".concat(e.slug)),{method:"POST",body:JSON.stringify({note:n}),headers:a()}).then((function(e){return e.json()})).then((function(e){return h(e.note),e.note})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{note:f,saveNote:p}}},aNYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("TJjZ");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},eijD:function(e,t,n){"use strict";function r(e,t,n,r,i,o,u){try{var a=e[o](u),c=a.value}catch(s){return void n(s)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var u=e.apply(t,n);function a(e){r(u,i,o,a,c,"next",e)}function c(e){r(u,i,o,a,c,"throw",e)}a(void 0)}))}}n.d(t,"a",(function(){return i}))},ntO7:function(e,t,n){"use strict";function r(e){var t="https://digitalgardenbuilder.app",n="m3kEvEYCm7uI4SaWfI1Z9iWTiiSYu4LvGJ32mgrU3BF6p",r="".concat(t,"/login?publicKey=").concat(n);return{createUrl:function(e){return"".concat(t).concat(e)},createHeaders:function(){return e.token?{"Content-Type":"application/json",Authorization:e.token,"x-garden-public":n}:{"Content-Type":"application/json","x-garden-public":n}},gardenServerUrl:t,loginLink:r}}n.d(t,"a",(function(){return r}))},oCSz:function(e){e.exports=JSON.parse('{"siteName":"Code Meadow","authorName":"Josh Pollock","defaultNote":"code-meadow","siteTwitter":"@JoshBotDotJs","authorTwitter":"@josh412"}')},"vj+v":function(e,t,n){"use strict";var r=n("3vJe");function i(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(r){}return e}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},u=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?r.parse(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=i(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var i;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=u}}]);