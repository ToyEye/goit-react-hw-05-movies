"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[307],{307:function(n,t,r){r.r(t),r.d(t,{default:function(){return R}});var e,a,i,c,o,u,s,p,f,d,l=r(165),v=r(861),h=r(439),x=r(791),m=r(689),Z=r(328),g=r(168),w=r(87),j=r(867),b=j.ZP.section(e||(e=(0,g.Z)(["\n  display: flex;\n  margin-top: 15px;\n"]))),k=j.ZP.img(a||(a=(0,g.Z)(["\n  width: 400px;\n"]))),y=j.ZP.h2(i||(i=(0,g.Z)(["\n  font-size: 26px;\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),P=j.ZP.div(c||(c=(0,g.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: 15px;\n  background-color: #fff;\n"]))),_=j.ZP.div(o||(o=(0,g.Z)(["\n  margin-bottom: 15px;\n"]))),U=j.ZP.h3(u||(u=(0,g.Z)(["\n  margin-bottom: 20px;\n"]))),Y=j.ZP.h4(s||(s=(0,g.Z)(["\n  margin-bottom: 20px;\n"]))),q=j.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n"]))),C=j.ZP.li(f||(f=(0,g.Z)(["\n  font-weight: 600;\n  margin-right: 7px;\n"]))),K=(0,j.ZP)(w.OL)(d||(d=(0,g.Z)(["\n  text-decoration: none;\n  border: 1px solid white;\n  padding: 10px 40px;\n  color: white;\n  font-weight: 500;\n  border-radius: 5px;\n\n  &.active {\n    color: aqua;\n    border-color: aqua;\n  }\n  &:nth-child(1) {\n    margin-right: 15px;\n  }\n"]))),O=r(184),R=function(){var n,t,r=(0,x.useState)({title:"",vote_average:0,overview:"",genres:[],poster_path:""}),e=(0,h.Z)(r,2),a=e[0],i=e[1],c=(0,m.UO)().moviesId,o=(0,m.TH)(),u=null!==(n=null===o||void 0===o||null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";(0,x.useEffect)((function(){var n=function(){var n=(0,v.Z)((0,l.Z)().mark((function n(){return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Z.Y5)(c).then((function(n){i(n)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[c]);var s=a.title,p=a.vote_average,f=a.overview,d=a.genres,g=a.poster_path;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(K,{to:u,children:"Return to movies"}),(0,O.jsxs)(b,{children:[(0,O.jsx)(k,{src:g?"https://image.tmdb.org/t/p/w300".concat(g):"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:""}),(0,O.jsxs)(P,{children:[(0,O.jsx)(y,{children:s}),(0,O.jsxs)(_,{children:["User score: ",10*p,"%"]}),(0,O.jsx)(U,{children:"Overview "}),(0,O.jsx)(_,{children:f}),(0,O.jsx)(Y,{children:"Genres"}),(0,O.jsx)(q,{children:d.length>0&&d.map((function(n){var t=n.name;return(0,O.jsx)(C,{children:t},t)}))})]})]}),(0,O.jsxs)(b,{children:[(0,O.jsx)(K,{to:"/movies/".concat(c,"/cast"),state:{from:u},children:"Cast"}),(0,O.jsx)(K,{to:"/movies/".concat(c,"/reviews "),state:{from:u},children:"Reviews"})]}),(0,O.jsx)(b,{children:(0,O.jsx)(m.j3,{})})]})}},210:function(n,t,r){r.d(t,{Bg:function(){return s},WK:function(){return o},Y5:function(){return u},cX:function(){return c}});var e=r(165),a=r(861),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={language:"en-US",include_adult:!0,api_key:"c031fb300fb5fade2c7c769ccf51c6f2"};var c=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t,r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/all/day",n.next=3,i.Z.get("trending/all/day");case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie?",n.next=3,i.Z.get("".concat("search/movie?","&query=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t,r){var a,c;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/").concat(r,"?&page=1"));case 2:return a=n.sent,c=a.data,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},328:function(n,t,r){r.d(t,{WK:function(){return e.WK},Y5:function(){return e.Y5},cX:function(){return e.cX}});var e=r(210)}}]);
//# sourceMappingURL=307.431873bc.chunk.js.map