_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{pqbc:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return g}));var o=n("mXGw"),u=n.n(o),c=n("PZKW"),r=n("1XCU"),i=n("Yh15"),a=n("YbmN"),l=n("1+V+"),s=n("dAGg"),d=u.a.createElement,b=function(t){var e=t.note,n=e.content?e.content.substring(0,240):"",o=Object(i.c)().authorName;return d(l.b,{title:e.title,description:n,openGraph:{title:e.title,description:"Notes about ".concat(e.title," ").concat(o?"by ".concat(o):"")}})},g=!0;e.default=function(t){var e=t.note,n=t.slug,l=Object(a.a)().isLoggedIn,g=Object(s.useRouter)().query,_=Object(i.c)().defaultNote,w=Object(o.useMemo)((function(){var t;return n||(null!==(t=g.slug)&&void 0!==t?t:_)}),[g,n]),p=Object(o.useMemo)((function(){var t;return null!==(t=g.noteTwo)&&void 0!==t?t:void 0}),[g]),f=Object(o.useMemo)((function(){var t;return null!==(t=g.noteThree)&&void 0!==t?t:void 0}),[g]);return d(u.a.Fragment,null,e&&d(b,{note:e}),d(u.a.Fragment,null,d(r.a,{noteSlug:w},d(c.a,{isLoggedIn:l,noteOneSlug:w,noteTwoSlug:p,noteThreeSlug:f}))))}},s3Ec:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[slug]",function(){return n("pqbc")}])}},[["s3Ec",0,1,2,4,3,5,8,6]]]);