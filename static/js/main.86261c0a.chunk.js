(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(7),r=n.n(o),a=(n(33),n(34),"412a49befa2cef4fa57ee4d68eb7c1fd"),s={fetchTrending:"/trending/all/week?api_key=".concat(a,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(a,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(a,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(a,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(a,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(a,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(a,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(a,"&with_genres=99")},l=n(5),u=n.n(l),d=n(8),v=n(3),j=n(23),f=n.n(j).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(54),n(10)),g=n(24),h=n.n(g),p=(n(63),n(1));var O=function(e){var t=Object(c.useState)(""),n=Object(v.a)(t,2),i=n[0],o=n[1],r="https://image.tmdb.org/t/p/original",a=e.movieObject.original_title||e.movieObject.original_name,s=e.isPoster?"".concat(r).concat(e.movieObject.poster_path):"".concat(r).concat(e.movieObject.backdrop_path);return Object(c.useEffect)((function(){i||h()(a).then((function(e){e&&o(e.split("v=")[1].substring(0,11))})).catch((function(e){console.log("Cannot fetch ".concat(a," trailer URL."))}))}),[]),Object(p.jsx)("div",{className:"Poster",onClick:function(){console.log(i),e.showMovieInfoOnClick(Object(b.a)(Object(b.a)({},e.movieObject),{},{trailerUrl:i,isPoster:e.isPoster}))},children:Object(p.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:a,src:s,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var m=function(e){var t=Object(c.useState)([]),n=Object(v.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(!1),a=Object(v.a)(r,2),s=a[0],l=a[1],j=function(t){console.log(t),l(t),e.activeRowChangeHandler(e.title)};return Object(c.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get(e.getUrl);case 2:return n=t.sent,o(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsx)("div",{className:"row_posters",children:i.map((function(t){return Object(p.jsx)(O,{movieObject:t,isPoster:e.isPoster,showMovieInfoOnClick:j},t.original_title||t.original_name)}))}),Object(p.jsx)("div",{className:"movie_info",style:{height:e.currentActiveRow==e.title?null:"0vw"},children:e.currentActiveRow==e.title&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"description",children:[Object(p.jsx)("h1",{children:s.original_title||s.original_name}),Object(p.jsx)("p",{className:"overview",children:s.overview.length<400?s.overview:s.overview.search("\\.")>0?"".concat(s.overview.slice(0,s.overview.slice(0,400).lastIndexOf(".")+1)," "):"".concat(s.description.slice(0,400)," ...")})]}),Object(p.jsx)("div",{className:"media",children:s.trailerUrl?Object(p.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/"+s.trailerUrl+"?autoplay=1&mute=1&controls=0&loop=1",frameBorder:"0",allow:"autoplay"}):Object(p.jsx)("img",{alt:s.original_title||s.original_name,src:"".concat("https://image.tmdb.org/t/p/original").concat(s.backdrop_path),onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})]})})]})};n(65);var w=function(){var e=Object(c.useState)(),t=Object(v.a)(e,2),n=t[0],i=t[1],o=function(e){console.log("Active row :"+e),i(e)};return Object(p.jsxs)("div",{className:"Rows",children:[Object(p.jsx)(m,{title:"NETFLIX ORIGINALS",getUrl:s.fetchNetflixOriginals,isPoster:!0,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Trending Now",getUrl:s.fetchTrending,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Top Rated",getUrl:s.fetchTopRated,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Action Movies",getUrl:s.fetchActionMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Comedy Movies",getUrl:s.fetchComedyMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Horror Movies",getUrl:s.fetchHorrorMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Romance Movies",getUrl:s.fetchRomanceMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(p.jsx)(m,{title:"Documentaries",getUrl:s.fetchDocumentaries,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o})]})},x=(n(66),n(67),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var _=function(){var e=Object(c.useState)(!1),t=Object(v.a)(e,2),n=t[0],i=t[1],o=function(){window.pageYOffset<780&&i(!1),window.pageYOffset>780&&i(!0)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),Object(p.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null},children:[Object(p.jsx)("img",{className:"Nav_logo",src:x,alt:"Netflix logo"}),Object(p.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},R=(n(68),n(27)),N=n.n(R),y=n(25),k=n.n(y);n(69);var P=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(p.jsx)(e.icon,{}),e.label]})})};var C=function(e){return Object(p.jsxs)("div",{className:"HeaderInfo",children:[Object(p.jsx)("h1",{children:e.info.title}),Object(p.jsx)("p",{className:"overview",children:e.info.description.length<300?e.info.description:e.info.description.search("\\.")>0?"".concat(e.info.description.slice(0,e.info.description.slice(0,300).lastIndexOf(".")+1)," "):"".concat(e.info.description.slice(0,300)," ...")}),Object(p.jsxs)("div",{className:"HeaderButtons",children:[Object(p.jsx)(P,{label:"Play",icon:k.a}),Object(p.jsx)(P,{label:"More Info",icon:N.a})]})]})};var A=function(){var e=Object(c.useState)(null),t=Object(v.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(s.fetchTrending);case 2:return t=e.sent,i(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=null!=n?'url("'.concat("https://image.tmdb.org/t/p/original").concat(n.backdrop_path,'")'):null;return Object(p.jsxs)("div",{className:"header",style:{backgroundImage:o},children:[Object(p.jsx)(_,{}),n&&Object(p.jsx)(C,{info:{title:n.original_title||n.original_name,description:n.overview}})]})};var M=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(A,{}),Object(p.jsx)(w,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root")),U()}},[[76,1,2]]]);
//# sourceMappingURL=main.86261c0a.chunk.js.map