(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},53:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(7),r=n.n(o),s=(n(32),n(33),"412a49befa2cef4fa57ee4d68eb7c1fd"),a={fetchTrending:"/trending/all/week?api_key=".concat(s,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(s,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(s,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(s,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(s,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(s,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(s,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(s,"&with_genres=99")},l=n(5),u=n.n(l),f=n(8),d=n(4),j=n(22),b=n.n(j).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(53),n(23)),g=n.n(v),h=(n(62),n(1));var m=function(e){var t,n=Object(c.useState)(!1),i=Object(d.a)(n,2),o=i[0],r=i[1],s=Object(c.useState)(""),a=Object(d.a)(s,2),l=a[0],u=a[1],f=function(){l&&r(!0)};return Object(c.useEffect)((function(){g()(e.movieName).then((function(e){e&&u(e.split("v=")[1].substring(0,11))})).catch((function(t){console.log("Cannot fetch ".concat(e.movieName," trailer URL."))}))}),[]),Object(h.jsx)("div",{className:"Poster",onMouseOver:function(){return e.movieName,void(t=setTimeout(f,800))},onMouseOut:function(){clearTimeout(t),r(!1)},children:o?Object(h.jsx)("div",{className:"posterOnHover",style:{backgroundImage:"url(".concat(e.src,")")},children:Object(h.jsx)("iframe",{style:{height:"100%"},src:"https://www.youtube.com/embed/"+l+"?autoplay=1&mute=1&controls=0&loop=1",frameBorder:"0",allow:"autoplay"})}):Object(h.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:e.movieName,src:e.src,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var p=function(e){var t="https://image.tmdb.org/t/p/original",n=Object(c.useState)([]),i=Object(d.a)(n,2),o=i[0],r=i[1];return Object(c.useEffect)((function(){(function(){var t=Object(f.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get(e.getUrl);case 2:return n=t.sent,r(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{className:"row_posters",children:o.map((function(n){return Object(h.jsx)(m,{movieName:n.original_title||n.original_name,src:e.isPoster?"".concat(t).concat(n.poster_path):"".concat(t).concat(n.backdrop_path),isPoster:e.isPoster},n.original_title||n.original_name)}))})]})};n(64);var O=function(){return Object(h.jsxs)("div",{className:"Rows",children:[Object(h.jsx)(p,{title:"NETFLIX ORIGINALS",getUrl:a.fetchNetflixOriginals,isPoster:!0}),Object(h.jsx)(p,{title:"Trending Now",getUrl:a.fetchTrending,isPoster:!1}),Object(h.jsx)(p,{title:"Top Rated",getUrl:a.fetchTopRated,isPoster:!1}),Object(h.jsx)(p,{title:"Action Movies",getUrl:a.fetchActionMovies,isPoster:!1}),Object(h.jsx)(p,{title:"Comedy Movies",getUrl:a.fetchComedyMovies,isPoster:!1}),Object(h.jsx)(p,{title:"Horror Movies",getUrl:a.fetchHorrorMovies,isPoster:!1}),Object(h.jsx)(p,{title:"Romance Movies",getUrl:a.fetchRomanceMovies,isPoster:!1}),Object(h.jsx)(p,{title:"Documentaries",getUrl:a.fetchDocumentaries,isPoster:!1})]})},x=(n(65),n(66),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var w=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],o=function(){window.pageYOffset<780&&i(!1),window.pageYOffset>780&&i(!0)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),Object(h.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null},children:[Object(h.jsx)("img",{className:"Nav_logo",src:x,alt:"Netflix logo"}),Object(h.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},N=(n(67),n(26)),_=n.n(N),y=n(24),k=n.n(y);n(68);var P=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(h.jsx)(e.icon,{}),e.label]})})};var M=function(e){return console.log(e.info),Object(h.jsxs)("div",{className:"HeaderInfo",children:[Object(h.jsx)("h1",{children:e.info.title}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{className:"overview",children:e.info.description.length<400?e.info.description:e.info.description.search("\\.")>0?"".concat(e.info.description.slice(0,e.info.description.slice(0,400).lastIndexOf(".")+1)," "):"".concat(e.info.description.slice(0,400)," ...")}),Object(h.jsxs)("div",{className:"HeaderButtons",children:[Object(h.jsx)(P,{label:"Play",icon:k.a}),Object(h.jsx)(P,{label:"More Info",icon:_.a})]})]})};var U=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){(function(){var e=Object(f.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(a.fetchTrending);case 2:return t=e.sent,i(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=null!=n?'url("'.concat("https://image.tmdb.org/t/p/original").concat(n.backdrop_path,'")'):null;return Object(h.jsxs)("div",{className:"header",style:{backgroundImage:o},children:[Object(h.jsx)(w,{}),n&&Object(h.jsx)(M,{info:{title:n.original_title||n.original_name,description:n.overview}})]})};var I=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(U,{}),Object(h.jsx)(O,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),T()}},[[75,1,2]]]);
//# sourceMappingURL=main.3c32ff75.chunk.js.map