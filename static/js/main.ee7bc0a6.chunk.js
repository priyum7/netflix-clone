(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(7),r=n.n(o),s=(n(33),n(34),"412a49befa2cef4fa57ee4d68eb7c1fd"),a={fetchTrending:"/trending/all/week?api_key=".concat(s,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(s,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(s,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(s,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(s,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(s,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(s,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(s,"&with_genres=99")},l=n(5),j=n.n(l),u=n(8),d=n(4),f=n(23),b=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(54),n(10)),g=n(24),h=n.n(g),p=(n(63),n(1));var O=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),i=n[0],o=n[1],r="https://image.tmdb.org/t/p/original",s=e.movieObject.original_title||e.movieObject.original_name,a=e.isPoster?"".concat(r).concat(e.movieObject.poster_path):"".concat(r).concat(e.movieObject.backdrop_path);return Object(c.useEffect)((function(){i||h()(s).then((function(e){e&&o(e.split("v=")[1].substring(0,11))})).catch((function(e){console.log("Cannot fetch ".concat(s," trailer URL."))}))}),[]),Object(p.jsx)("div",{className:"Poster",onClick:function(){console.log(i),e.showMovieInfoOnClick(Object(v.a)(Object(v.a)({},e.movieObject),{},{trailerUrl:i,isPoster:e.isPoster}))},children:Object(p.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:s,src:a,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var m=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),a=s[0],l=s[1],f=function(e){console.log(e),l(e)};return Object(c.useEffect)((function(){(function(){var t=Object(u.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get(e.getUrl);case 2:return n=t.sent,o(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsx)("div",{className:"row_posters",children:i.map((function(t){return Object(p.jsx)(O,{movieObject:t,isPoster:e.isPoster,showMovieInfoOnClick:f},t.original_title||t.original_name)}))}),a&&Object(p.jsxs)("div",{className:"movie_info",children:[Object(p.jsxs)("div",{className:"description",children:[Object(p.jsx)("h1",{children:a.original_title||a.original_name}),Object(p.jsx)("p",{className:"overview",children:a.overview.length<400?a.overview:a.overview.search("\\.")>0?"".concat(a.overview.slice(0,a.overview.slice(0,400).lastIndexOf(".")+1)," "):"".concat(a.description.slice(0,400)," ...")})]}),Object(p.jsx)("div",{className:"media",children:a.trailerUrl?Object(p.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/"+a.trailerUrl+"?autoplay=1&mute=1&controls=0&loop=1",frameBorder:"0",allow:"autoplay"}):Object(p.jsx)("img",{alt:a.original_title||a.original_name,src:"".concat("https://image.tmdb.org/t/p/original").concat(a.backdrop_path),onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})]})]})};n(65);var x=function(){return Object(p.jsxs)("div",{className:"Rows",children:[Object(p.jsx)(m,{title:"NETFLIX ORIGINALS",getUrl:a.fetchNetflixOriginals,isPoster:!0}),Object(p.jsx)(m,{title:"Trending Now",getUrl:a.fetchTrending,isPoster:!1}),Object(p.jsx)(m,{title:"Top Rated",getUrl:a.fetchTopRated,isPoster:!1}),Object(p.jsx)(m,{title:"Action Movies",getUrl:a.fetchActionMovies,isPoster:!1}),Object(p.jsx)(m,{title:"Comedy Movies",getUrl:a.fetchComedyMovies,isPoster:!1}),Object(p.jsx)(m,{title:"Horror Movies",getUrl:a.fetchHorrorMovies,isPoster:!1}),Object(p.jsx)(m,{title:"Romance Movies",getUrl:a.fetchRomanceMovies,isPoster:!1}),Object(p.jsx)(m,{title:"Documentaries",getUrl:a.fetchDocumentaries,isPoster:!1})]})},w=(n(66),n(67),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var _=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],o=function(){window.pageYOffset<780&&i(!1),window.pageYOffset>780&&i(!0)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),Object(p.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null},children:[Object(p.jsx)("img",{className:"Nav_logo",src:w,alt:"Netflix logo"}),Object(p.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},N=(n(68),n(27)),y=n.n(N),k=n(25),P=n.n(k);n(69);var M=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(p.jsx)(e.icon,{}),e.label]})})};var U=function(e){return Object(p.jsxs)("div",{className:"HeaderInfo",children:[Object(p.jsx)("h1",{children:e.info.title}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"overview",children:e.info.description.length<400?e.info.description:e.info.description.search("\\.")>0?"".concat(e.info.description.slice(0,e.info.description.slice(0,400).lastIndexOf(".")+1)," "):"".concat(e.info.description.slice(0,400)," ...")}),Object(p.jsxs)("div",{className:"HeaderButtons",children:[Object(p.jsx)(M,{label:"Play",icon:P.a}),Object(p.jsx)(M,{label:"More Info",icon:y.a})]})]})};var I=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(a.fetchTrending);case 2:return t=e.sent,i(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=null!=n?'url("'.concat("https://image.tmdb.org/t/p/original").concat(n.backdrop_path,'")'):null;return Object(p.jsxs)("div",{className:"header",style:{backgroundImage:o},children:[Object(p.jsx)(_,{}),n&&Object(p.jsx)(U,{info:{title:n.original_title||n.original_name,description:n.overview}})]})};var C=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(I,{}),Object(p.jsx)(x,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),E()}},[[76,1,2]]]);
//# sourceMappingURL=main.ee7bc0a6.chunk.js.map