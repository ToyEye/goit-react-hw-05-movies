"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{468:function(n,t,r){r.d(t,{zx:function(){return w},dA:function(){return b},aX:function(){return v},kG:function(){return m},oF:function(){return Z},l0:function(){return k},yt:function(){return y},jJ:function(){return h},U3:function(){return g}});var e,a,c,i,u,o,s,p,f,d=r(168),l=r(31),x=r(501),g=l.ZP.h1(e||(e=(0,d.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n"]))),m=l.ZP.ul(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n"]))),h=(0,l.ZP)(x.rU)(c||(c=(0,d.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),v=l.ZP.li(i||(i=(0,d.Z)(["\n  height: 300px;\n  margin-bottom: 15px;\n  width: 350px;\n  transform: scale(1);\n  transition: transform 250ms linear;\n  text-align: center;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n  :hover,\n  :focus {\n    transform: scale(1.03);\n  }\n"]))),Z=l.ZP.p(u||(u=(0,d.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),b=l.ZP.img(o||(o=(0,d.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 300px;\n  height: 169px;\n"]))),k=l.ZP.form(s||(s=(0,d.Z)(["\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n"]))),y=l.ZP.input(p||(p=(0,d.Z)(["\n  padding: 5px 20px;\n  border-radius: 5px;\n  margin-right: 20px;\n"]))),w=l.ZP.button(f||(f=(0,d.Z)(["\n  padding: 7px 20px;\n  border-radius: 5px;\n  border: none;\n  background-color: #fff;\n\n  &:active {\n    scale: 0.9;\n  }\n"])))},660:function(n,t,r){var e=r(871),a=r(468),c=r(184);t.Z=function(n){var t=n.films,r=(0,e.TH)();return(0,c.jsx)(a.kG,{children:t.map((function(n){var t=n.id,e=n.title,i=n.name,u=n.backdrop_path,o=n.vote_count,s=n.vote_average;return(0,c.jsx)(a.aX,{children:(0,c.jsxs)(a.jJ,{to:"/movies/".concat(t),state:{from:r},children:[(0,c.jsx)(a.oF,{children:e||i}),(0,c.jsx)(a.dA,{src:u?"https://image.tmdb.org/t/p/w300".concat(u):"https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-",alt:""}),(0,c.jsxs)(a.oF,{children:["Vote: ",o]}),(0,c.jsxs)(a.oF,{children:["Average rating: ",s]})]})},t)}))})}},795:function(n,t,r){r.r(t),r.d(t,{default:function(){return d}});var e=r(861),a=r(885),c=r(687),i=r.n(c),u=r(791),o=r(328),s=r(660),p=r(468),f=r(184);function d(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,e.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.cX)().then((function(n){return c(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("article",{children:[(0,f.jsx)(p.U3,{children:"Trending today"}),(0,f.jsx)(p.kG,{children:(0,f.jsx)(s.Z,{films:r})})]})}},210:function(n,t,r){r.d(t,{Bg:function(){return l},WK:function(){return f},Y5:function(){return d},cX:function(){return p}});var e=r(861),a=r(687),c=r.n(a),i=r(665),u=r(7),o=r.n(u);i.Z.defaults.baseURL="https://api.themoviedb.org/";var s="c031fb300fb5fade2c7c769ccf51c6f2",p=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"3/trending/all/day?api_key=",n.next=3,i.Z.get("".concat("3/trending/all/day?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"3/search/movie?language=en-US&include_adult=false&api_key=",n.next=3,i.Z.get("".concat("3/search/movie?language=en-US&include_adult=false&api_key=").concat(s,"&query=").concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();f.propTypes={search:o().string.isRequired};var d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();d.propTypes={id:o().number.isRequired};var l=function(){var n=(0,e.Z)(c().mark((function n(t,r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("3/movie/".concat(t,"/").concat(r,"?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}();l.propTypes={id:o().number.isRequired,about:o().string.isRequired}},328:function(n,t,r){r.d(t,{WK:function(){return e.WK},Y5:function(){return e.Y5},cX:function(){return e.cX}});var e=r(210)}}]);
//# sourceMappingURL=795.d15daf74.chunk.js.map