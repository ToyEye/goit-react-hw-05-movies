"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[724],{468:function(n,t,r){r.d(t,{ln:function(){return j},zx:function(){return P},dA:function(){return w},aX:function(){return v},kG:function(){return Z},oF:function(){return b},yt:function(){return y},tN:function(){return k},jJ:function(){return m},U3:function(){return h}});var e,a,u,i,o,c,s,f,p,d,l=r(168),x=r(867),g=r(87),h=x.ZP.h1(e||(e=(0,l.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 20px;\n"]))),Z=x.ZP.ul(a||(a=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  justify-items: center;\n  grid-gap: 20px;\n"]))),m=(0,x.ZP)(g.rU)(u||(u=(0,l.Z)(["\n  color: black;\n  text-decoration: none;\n"]))),v=x.ZP.li(i||(i=(0,l.Z)(["\n  height: 300px;\n\n  width: 350px;\n  transform: scale(1);\n  transition: transform 250ms linear;\n  text-align: center;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n\n  background-color: #fff;\n  &:is(:hover, :focus) {\n    transform: scale(1.03);\n  }\n"]))),b=x.ZP.p(o||(o=(0,l.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white;\n"]))),w=x.ZP.img(c||(c=(0,l.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  width: 300px;\n  height: 169px;\n"]))),k=x.ZP.form(s||(s=(0,l.Z)(["\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n"]))),y=x.ZP.input(f||(f=(0,l.Z)(["\n  padding: 5px 20px;\n  border-radius: 5px;\n  margin-right: 20px;\n"]))),P=x.ZP.button(p||(p=(0,l.Z)(["\n  padding: 7px 20px;\n  border-radius: 5px;\n  border: none;\n  background-color: #fff;\n\n  cursor: pointer;\n\n  &:active {\n    scale: 0.9;\n  }\n"]))),j=x.ZP.div(d||(d=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"])))},724:function(n,t,r){r.r(t),r.d(t,{default:function(){return p}});var e=r(165),a=r(861),u=r(439),i=r(791),o=r(689),c=r(210),s=r(468),f=r(184);function p(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],p=t[1],d=(0,o.UO)().moviesId;return(0,i.useEffect)((function(){var n=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Bg)(d,"reviews").then((function(n){return p(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[d]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(s.kG,{children:[0===r.length&&(0,f.jsx)(s.ln,{children:"We dont have any reviews for this movie"}),r.length>0&&r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)(s.oF,{children:"Author"}),(0,f.jsx)(s.oF,{children:r}),(0,f.jsx)(s.oF,{children:e})]},t)}))]}),")"]})}},210:function(n,t,r){r.d(t,{Bg:function(){return s},WK:function(){return o},Y5:function(){return c},cX:function(){return i}});var e=r(165),a=r(861),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={language:"en-US",include_adult:!0,api_key:"c031fb300fb5fade2c7c769ccf51c6f2"};var i=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var t,r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"trending/all/day",n.next=3,u.Z.get("trending/all/day");case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"search/movie?",n.next=3,u.Z.get("".concat("search/movie?","&query=").concat(t));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t){var r,a;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(t,r){var a,i;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/").concat(r,"?&page=1"));case 2:return a=n.sent,i=a.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=724.a1787585.chunk.js.map