_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"3vJe":function(e,t,n){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},i=t||{},a=e.split(o),c=i.decode||r,s=0;s<a.length;s++){var f=a[s],p=f.indexOf("=");if(!(p<0)){var l=f.substr(0,p).trim(),d=f.substr(++p,f.length).trim();'"'==d[0]&&(d=d.slice(1,-1)),void 0==n[l]&&(n[l]=u(d,c))}}return n},t.serialize=function(e,t,n){var r=n||{},o=r.encode||i;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var u=o(t);if(u&&!a.test(u))throw new TypeError("argument val is invalid");var c=e+"="+u;if(null!=r.maxAge){var s=r.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(s)}if(r.domain){if(!a.test(r.domain))throw new TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!a.test(r.path))throw new TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(c+="; HttpOnly");r.secure&&(c+="; Secure");if(r.sameSite){switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var r=decodeURIComponent,i=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(e,t){try{return t(e)}catch(n){return e}}},CiRD:function(e,t,n){"use strict";var r=n("aNYv"),i=n("mXGw"),o=n("Mthw");t.a=function(e){var t=function(e){var t=Object(i.useContext)(o.b);if(!t)throw new Error("Missing <CookiesProvider>");var n=t.getAll(),r=Object(i.useState)(n),a=r[0],u=r[1],c=Object(i.useRef)(a);return Object(i.useEffect)((function(){function n(){var n=t.getAll();(function(e,t,n){if(!e)return!0;for(var r=0,i=e;r<i.length;r++){var o=i[r];if(t[o]!==n[o])return!0}return!1})(e||null,n,c.current)&&u(n),c.current=n}return t.addChangeListener(n),function(){t.removeChangeListener(n)}}),[t]),[a,Object(i.useMemo)((function(){return t.set.bind(t)}),[t]),Object(i.useMemo)((function(){return t.remove.bind(t)}),[t])]}(["_garden_token"]),n=Object(r.a)(t,2),a=n[0],u=n[1];Object(i.useEffect)((function(){e.token&&u("_garden_token",e.token,{path:"/"})}),[u,e.token]);return{token:Object(i.useMemo)((function(){return a._garden_token||void 0}),[a,e.token]),removeCookie:function(){u("_garden_token",void 0,{path:"/",expires:new Date(3)})}}}},DORk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("mXGw"),i=n.n(r),o=n("ntO7"),a=n("gdji"),u=n("YbmN"),c=i.a.createElement;function s(e){e.name;var t=Object(u.a)(),n=t.isLoggedIn,s=t.userDisplayName,f=t.isSessionLoading,p=Object(o.a)({}),l=p.createUrl,d=p.createHeaders;return Object(r.useEffect)((function(){fetch(l("/api/notes"),{headers:d()}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})),c("div",null,f?c("div",null,"Loading"):c(i.a.Fragment,null,c("p",null,"Hi ",n?s:"Roy")),c(a.e,{tabs:[{title:"One",key:"1a",Render:function(){return c("div",null,"1")}}]}))}},Mthw:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("mXGw"),i=n("vj+v").a,o=r.createContext(new i),a=o.Provider;o.Consumer,t.b=o},TJjZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("YZeP");function i(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},YZeP:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},aNYv:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("TJjZ");function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},k5b2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hi",function(){return n("DORk")}])},ntO7:function(e,t,n){"use strict";function r(e){var t="https://digitalgardenbuilder.app",n="m3kEvEYCm7uI4SaWfI1Z9iWTiiSYu4LvGJ32mgrU3BF6p",r="".concat(t,"/login?publicKey=").concat(n);return{createUrl:function(e){return"".concat(t).concat(e,"?publicKey=").concat(n)},createHeaders:function(){return e.token?{"Content-Type":"application/json",Authorization:e.token,"x-garden-public":n}:{"Content-Type":"application/json","x-garden-public":n}},gardenServerUrl:t,loginLink:r,gardenServerPublicKey:n}}n.d(t,"a",(function(){return r}))},"vj+v":function(e,t,n){"use strict";var r=n("3vJe");function i(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(r){}return e}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?r.parse(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.parse(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=i(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var i;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.serialize(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}();t.a=a}},[["k5b2",0,1,2,3]]]);