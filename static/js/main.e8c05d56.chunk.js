(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(7),r=n.n(o),a=(n(37),n(38),"412a49befa2cef4fa57ee4d68eb7c1fd"),s={fetchTrending:"/trending/all/week?api_key=".concat(a,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(a,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(a,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(a,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(a,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(a,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(a,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(a,"&with_genres=99")},l=n(5),d=n.n(l),u=n(8),j=n(3),h=n(23),v=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(58),n(13)),g=n(24),f=n.n(g),m=(n(67),n(0));var p=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),i=n[0],o=n[1],r="https://image.tmdb.org/t/p/original",a=e.movieObject.original_title||e.movieObject.original_name,s=e.isPoster?"".concat(r).concat(e.movieObject.poster_path):"".concat(r).concat(e.movieObject.backdrop_path);return Object(c.useEffect)((function(){i||f()(a).then((function(e){e&&o(e.split("v=")[1].substring(0,11))})).catch((function(e){console.log("Cannot fetch ".concat(a," trailer URL."))}))}),[]),Object(m.jsx)("div",{className:"Poster",onClick:function(){console.log(i),e.showMovieInfoOnClick(Object(b.a)(Object(b.a)({},e.movieObject),{},{trailerUrl:i,isPoster:e.isPoster}))},children:Object(m.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:a,src:s,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var w=function(e){var t=Object(c.useRef)(),n=Object(c.useState)([]),i=Object(j.a)(n,2),o=i[0],r=i[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),l=s[0],h=s[1],b=380,g="https://image.tmdb.org/t/p/original",f=function(t){console.log(t),h(t),e.activeRowChangeHandler(e.title)};Object(c.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get(e.getUrl);case 2:return n=t.sent,r(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]);var w=function(e){return e.length<b?e:e.search("\\.")<b?"".concat(e.slice(0,e.slice(0,b).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,b).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("div",{className:"row_posters",children:o.map((function(t){return Object(m.jsx)(p,{movieObject:t,isPoster:e.isPoster,showMovieInfoOnClick:f},t.original_title||t.original_name)}))}),Object(m.jsx)("div",{className:"movie_info",style:{height:e.currentActiveRow==e.title?null:"0vw",display:window.innerWidth<=768?"none":null},children:e.currentActiveRow==e.title&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h1",{children:l.original_title||l.original_name}),Object(m.jsx)("p",{className:"overview",children:l.overview.length<b?l.overview:l.overview.search("\\.")>0?"".concat(l.overview.slice(0,l.overview.slice(0,b).lastIndexOf(".")+1)," "):"".concat(l.overview.slice(0,b)," ...")})]}),Object(m.jsx)("div",{className:"media",children:l.trailerUrl?Object(m.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/"+l.trailerUrl+"?autoplay=1&mute=1&controls=0&loop=1",frameBorder:"0",allow:"autoplay"}):Object(m.jsx)("img",{alt:l.original_title||l.original_name,src:"".concat(g).concat(l.backdrop_path),onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})]})}),Object(m.jsx)("div",{className:"mobile_info",style:{transform:e.currentActiveRow==e.title?"translateY(0vh)":"translateY(200vh)",minHeight:"100vh",height:"100%"},onClick:function(){e.activeRowChangeHandler(null)},children:Object(m.jsxs)("div",{className:"mobile_info_main",onClick:function(e){e.stopPropagation()},children:[Object(m.jsxs)("div",{className:"mobile_description",children:[Object(m.jsx)("img",{src:"".concat(g).concat(l.poster_path),onError:function(e){e.target.onerror=null,e.target.src="https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"},style:{maxHeight:"20vh",boxSizing:"fill"},ref:t}),l&&Object(m.jsx)("p",{style:{paddingLeft:"2vw",fontSize:"3.1vw"},children:w("description"in l?l.description:l.overview)})]}),Object(m.jsx)("iframe",{style:{maxHeight:"26vh",width:"100%",height:"100%"},src:l.trailerUrl?"https://www.youtube.com/embed/"+l.trailerUrl+"?autoplay=1&mute=1&controls=0&playsinline=1":"https://www.youtube.com/embed/_vECE5BJbA0?autoplay=1&mute=1&controls=0&playsinline=1",frameBorder:"0",allow:"autoplay"})]})})]})};n(69);var O=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],i=t[1],o=function(e){console.log("Active row :"+e),i(e)};return Object(m.jsxs)("div",{className:"Rows",children:[Object(m.jsx)(w,{title:"Trending Now",getUrl:s.fetchTrending,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"NETFLIX ORIGINALS",getUrl:s.fetchNetflixOriginals,isPoster:!0,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Top Rated",getUrl:s.fetchTopRated,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Action Movies",getUrl:s.fetchActionMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Comedy Movies",getUrl:s.fetchComedyMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Horror Movies",getUrl:s.fetchHorrorMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Romance Movies",getUrl:s.fetchRomanceMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o}),Object(m.jsx)(w,{title:"Documentaries",getUrl:s.fetchDocumentaries,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:o})]})},x=(n(70),n(71),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var _=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],o=.9*(window.innerHeight-window.innerHeight*(1-window.innerWidth/window.screen.width)),r=function(){window.pageYOffset<o&&i(!1),window.pageYOffset>o&&i(!0)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[]),Object(m.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null,opacity:"0.85"},children:[Object(m.jsx)("img",{className:"Nav_logo",src:x,alt:"Netflix logo"}),Object(m.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},y=(n(72),n(27)),N=n.n(y),k=n(25),R=n.n(k);n(73);var C=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(m.jsx)(e.icon,{}),e.label]})})};var P=function(e){var t=250,n=function(e){return e.length<t?e:e.search("\\.")<t?"".concat(e.slice(0,e.slice(0,t).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,t).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"HeaderInfo",children:[Object(m.jsx)("h1",{children:e.info.title}),Object(m.jsx)("p",{className:"overview",children:"description"in e.info?n(e.info.description):n(e.info.overview)}),Object(m.jsxs)("div",{className:"HeaderButtons",children:[Object(m.jsx)(C,{label:"Play",icon:R.a}),Object(m.jsx)(C,{label:"More Info",icon:N.a})]})]})},H="https://image.tmdb.org/t/p/original";var A=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(s.fetchTrending);case 2:return t=e.sent,i(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n);var o=null!=n?window.innerWidth<=768?'url("'.concat(H).concat(n.poster_path,'")'):'url("'.concat(H).concat(n.backdrop_path,'")'):null;return Object(m.jsxs)("div",{className:"header",style:{backgroundImage:"linear-gradient(to top, #141414 5% , transparent 30%), ".concat(o)},children:[Object(m.jsx)(_,{}),n&&Object(m.jsx)(P,{info:{title:n.original_title||n.original_name,description:n.overview}})]})},U=(n(79),n(31)),I=n.n(U),M=n.p+"static/media/reactjs-icon.6c1d44b8.svg",L=n(28),E=n(29),S=n(30);var T=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("p",{className:"icon_row",children:["Made with ",Object(m.jsx)(I.a,{className:"heart_icon",color:"secondary"}),"  ","using ","  ",Object(m.jsx)("img",{className:"react_icon",src:M,alt:"react_logo"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"contact_me",children:["Connect with me @"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/priyumagrawal",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:L.a,alt:"LinkedIn Logo"})}),Object(m.jsx)("a",{href:"mailto:priyumagrawal@gmail.com",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:S.a,alt:"Gmail Logo"})}),Object(m.jsx)("a",{href:"https://github.com/priyum7",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:E.a,alt:"Github Logo"})})]})]})};var B=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(A,{}),Object(m.jsx)(O,{}),Object(m.jsx)(T,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),F()}},[[81,1,2]]]);
//# sourceMappingURL=main.e8c05d56.chunk.js.map