"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[413],{468:function(n,t,r){r.d(t,{ln:function(){return P},zx:function(){return y},dA:function(){return j},aX:function(){return Z},kG:function(){return h},oF:function(){return b},yt:function(){return w},tN:function(){return k},jJ:function(){return v},U3:function(){return m}});var e,a,u,i,c,o,s,f,p,d,l=r(168),x=r(867),g=r(87),m=x.ZP.h1(e||(e=(0,l.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n"]))),h=x.ZP.ul(a||(a=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  justify-items: center;\n  grid-gap: 20px;\n"]))),v=(0,x.ZP)(g.rU)(u||(u=(0,l.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),Z=x.ZP.li(i||(i=(0,l.Z)(["\n  height: 300px;\n\n  width: 350px;\n  transform: scale(1);\n  transition: transform 250ms linear;\n  text-align: center;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n  background-color: #fff;\n  &:is(:hover, :focus) {\n    transform: scale(1.03);\n  }\n"]))),b=x.ZP.p(c||(c=(0,l.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white;\n"]))),j=x.ZP.img(o||(o=(0,l.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 300px;\n  height: 169px;\n"]))),k=x.ZP.form(s||(s=(0,l.Z)(["\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n"]))),w=x.ZP.input(f||(f=(0,l.Z)(["\n  padding: 5px 20px;\n  border-radius: 5px;\n  margin-right: 20px;\n"]))),y=x.ZP.button(p||(p=(0,l.Z)(["\n  padding: 7px 20px;\n  border-radius: 5px;\n  border: none;\n  background-color: #fff;\n\n  cursor: pointer;\n\n  &:active {\n    scale: 0.9;\n  }\n"]))),P=x.ZP.div(d||(d=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"])))},936:function(n,t,r){var e=r(689),a=r(468),u=r(184);t.Z=function(n){var t=n.films,r=(0,e.TH)();return(0,u.jsx)(a.kG,{children:t.map((function(n){var t=n.id,e=n.title,i=n.name,c=n.backdrop_path,o=n.vote_count,s=n.vote_average;return(0,u.jsx)(a.aX,{children:(0,u.jsxs)(a.jJ,{to:"/movies/".concat(t),state:{from:r},children:[(0,u.jsx)(a.oF,{children:e||i}),(0,u.jsx)(a.dA,{src:c?"https://image.tmdb.org/t/p/w300".concat(c):"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:e||i}),(0,u.jsxs)(a.oF,{children:["Vote: ",o]}),(0,u.jsxs)(a.oF,{children:["Average rating: ",s]})]})},t)}))})}},413:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e=r(165),a=r(861),u=r(439),i=r(791),c=r(87),o=r(689),s=r(328),f=r(468),p=r(184),d=function(n){var t=n.handleFormSubmit,r=(0,i.useState)(""),e=(0,u.Z)(r,2),a=e[0],c=e[1];return(0,p.jsxs)(f.tN,{onSubmit:function(n){n.preventDefault(),""!==a.trim()&&t(a),c("")},children:[(0,p.jsx)(f.yt,{onChange:function(n){c(n.currentTarget.value)},value:a}),(0,p.jsx)(f.zx,{type:"submit",children:"Search"})]})},l=r(936);function x(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],f=t[1],x=(0,c.lr)(),g=(0,u.Z)(x,2),m=g[0],h=g[1];(0,i.useEffect)((function(){if(m.get("query")){var n=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.WK)(m.get("query"));case 3:t=n.sent,f(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[m]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{handleFormSubmit:function(n){h({query:n})}}),(0,p.jsx)(o.j3,{}),(0,p.jsx)(l.Z,{films:r})]})}},210:function(n,t,r){r.d(t,{Bg:function(){return s},WK:function(){return c},Y5:function(){return o},cX:function(){return i}});var e=r(165),a=r(861),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={language:"en-US",include_adult:!0,api_key:"c031fb300fb5fade2c7c769ccf51c6f2"};var i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t,r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/all/day",n.next=3,u.Z.get("trending/all/day");case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie?",n.next=3,u.Z.get("".concat("search/movie?","&query=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t,r){var a,i;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/").concat(r,"?&page=1"));case 2:return a=n.sent,i=a.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},328:function(n,t,r){r.d(t,{WK:function(){return e.WK},Y5:function(){return e.Y5},cX:function(){return e.cX}});var e=r(210)}}]);
//# sourceMappingURL=413.b9fcaaea.chunk.js.map