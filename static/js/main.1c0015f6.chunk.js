(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(51)},4:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"g",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"h",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"j",function(){return d}),n.d(t,"f",function(){return s}),n.d(t,"i",function(){return p});var a="ADD_TODO",r="EDIT_TODO",o="CLOSE_TODO",c="NEWVALUE_TODO",i="CROSS_TODO",u="ACTIVE_TODO",l="COMPLETED_TODO",d="SHOWALL_TODO",s="DELETE_TODO",p="REQUEST_WEATHER"},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(27),u=(n(44),n(20)),l=n(21),d=n(23),s=n(22),p=n(24),O=n(26),f=n(10),h=(n(45),r.a.lazy(function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,138))})),m=r.a.lazy(function(){return n.e(4).then(n.bind(null,136))}),b=r.a.lazy(function(){return Promise.all([n.e(5),n.e(8)]).then(n.bind(null,137))}),E=r.a.lazy(function(){return n.e(6).then(n.bind(null,134))}),j=r.a.lazy(function(){return n.e(7).then(n.bind(null,135))}),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"loader"},"Loading...")},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:m}),r.a.createElement(f.a,{path:"/Portfolio2/",component:m}),r.a.createElement(f.a,{path:"/todolist/",component:b}),r.a.createElement(f.a,{path:"/landingpage1/",component:j}),r.a.createElement(f.a,{path:"/weatherApp/",component:h}),r.a.createElement(f.a,{component:E}))))}}]),t}(a.Component),y=n(8),v=n(32),T=n(33),D=n(3),g=n(4),_={},x=n(9),L=n(34),S=n.n(L),k=[],A=Object(y.combineReducers)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.b:return[].concat(Object(x.a)(e),[{id:S()(),text:t.payload.text,show:!0,crossed:!1}]);case g.g:return Object(x.a)(e).map(function(e){return e.id===t.payload.id?Object(D.a)({},e):e});case g.h:return""===t.payload.text.trim()?e.filter(function(e){return e.id!==t.payload.id}):Object(x.a)(e).map(function(e){return e.id===t.payload.id?Object(D.a)({},e,{text:t.payload.text,crossed:!1}):e});case g.e:return Object(x.a)(e).map(function(e){return e.id===t.payload.id?Object(D.a)({},e,{crossed:!e.crossed}):e});case g.a:return Object(x.a)(e).map(function(e,t,n){return!0===e.crossed?Object(D.a)({},e,{show:!1}):Object(D.a)({},e,{show:!0})});case g.d:return Object(x.a)(e).map(function(e,t,n){return!0===e.crossed?Object(D.a)({},e,{show:!0}):Object(D.a)({},e,{show:!1})});case g.j:return Object(x.a)(e).map(function(e,t,n){return e?Object(D.a)({},e,{show:!0}):e});case g.f:return e.filter(function(e){return e.id!==t.payload.id});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.i:return Object(D.a)({},e,t.payload);default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=function(e){var t=[v.a],n=[y.applyMiddleware.apply(void 0,t)],a=T.composeWithDevTools.apply(void 0,n);return Object(y.createStore)(A,e,a)}();c.a.render(r.a.createElement(i.a,{store:W},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.1c0015f6.chunk.js.map