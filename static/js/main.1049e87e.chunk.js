(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),o=n.n(r),a=(n(37),n(38),"412a49befa2cef4fa57ee4d68eb7c1fd"),s={fetchTrending:"/trending/all/week?api_key=".concat(a,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(a,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(a,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(a,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(a,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(a,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(a,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(a,"&with_genres=99")},l=n(5),d=n.n(l),u=n(8),j=n(3),b=n(23),h=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(58),n(13)),g=n(24),f=n.n(g),m=(n(67),n(0));var p=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),i=n[0],r=n[1],o="https://image.tmdb.org/t/p/original",a=e.movieObject.original_title||e.movieObject.original_name,s=e.isPoster?"".concat(o).concat(e.movieObject.poster_path):"".concat(o).concat(e.movieObject.backdrop_path);return Object(c.useEffect)((function(){i||f()(a).then((function(e){e&&r(e.split("v=")[1].substring(0,11))})).catch((function(e){console.log("Cannot fetch ".concat(a," trailer URL."))}))}),[]),Object(m.jsx)("div",{className:"Poster",onClick:function(){e.showMovieInfoOnClick(Object(v.a)(Object(v.a)({},e.movieObject),{},{trailerUrl:i,isPoster:e.isPoster}))},children:Object(m.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:a,src:s,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var w=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(!1),a=Object(j.a)(o,2),s=a[0],l=a[1],b=380,v=function(t){l(t),e.activeRowChangeHandler(e.title),e.setCurrentMovieRows(t)};Object(c.useEffect)((function(){(function(){var t=Object(u.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get(e.getUrl);case 2:return n=t.sent,r(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]);var g=function(e){return e.length<b?e:e.search("\\.")<b?"".concat(e.slice(0,e.slice(0,b).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,b).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("div",{className:"row_posters",children:i.map((function(t){return Object(m.jsx)(p,{movieObject:t,isPoster:e.isPoster,showMovieInfoOnClick:v},t.original_title||t.original_name)}))}),Object(m.jsx)("div",{className:"movie_info",style:{height:e.currentActiveRow==e.title?null:"0vw",display:window.innerWidth<=768?"none":null},children:e.currentActiveRow==e.title&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h1",{children:s.original_title||s.original_name}),Object(m.jsx)("p",{className:"overview",children:g("description"in s?s.description:s.overview)})]}),Object(m.jsx)("div",{className:"media",children:s.trailerUrl?Object(m.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/"+s.trailerUrl+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1",frameBorder:"0",allow:"autoplay"}):Object(m.jsx)("img",{alt:s.original_title||s.original_name,src:"".concat("https://image.tmdb.org/t/p/original").concat(s.backdrop_path),onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})]})})]})},O=n.p+"static/media/Rolling-1s-200px.a763c805.svg";n(69);var x=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(),o=Object(j.a)(r,2),a=o[0],l=o[1],d=Object(c.useRef)(),u=function(e){console.log("Active row :"+e),i(e)},b=function(e){l(e)},h=380,v=function(e){return e.length<h?e:e.search("\\.")<h?"".concat(e.slice(0,e.slice(0,h).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,h).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"Rows",children:[Object(m.jsx)(w,{title:"Trending Now",getUrl:s.fetchTrending,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"NETFLIX ORIGINALS",getUrl:s.fetchNetflixOriginals,isPoster:!0,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Top Rated",getUrl:s.fetchTopRated,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Action Movies",getUrl:s.fetchActionMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Comedy Movies",getUrl:s.fetchComedyMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Horror Movies",getUrl:s.fetchHorrorMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Romance Movies",getUrl:s.fetchRomanceMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b}),Object(m.jsx)(w,{title:"Documentaries",getUrl:s.fetchDocumentaries,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:u,setCurrentMovieRows:b})]}),a&&Object(m.jsx)("div",{className:"mobile_info",style:{transform:n?"translateY(0vh)":"translateY(200vh)",minHeight:"100vh",height:"100%"},onClick:function(){i(null)},children:Object(m.jsxs)("div",{className:"mobile_info_main",onClick:function(e){e.stopPropagation()},children:[Object(m.jsxs)("div",{className:"mobile_description",children:[Object(m.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(a.poster_path,"?").concat(1e6*Math.random()),onError:function(e){e.target.onerror=null,e.target.src=O},style:{maxHeight:"20vh",boxSizing:"fill"},ref:d}),a&&Object(m.jsx)("p",{style:{paddingLeft:"2vw",fontSize:"3.1vw"},children:v("description"in a?a.description:a.overview)})]}),Object(m.jsx)("iframe",{style:{maxHeight:"26vh",width:"100%",height:"100%"},src:a.trailerUrl?"https://www.youtube.com/embed/"+a.trailerUrl+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&".concat(1e6*Math.random()):"https://www.youtube.com/embed/_vECE5BJbA0"+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&".concat(1e6*Math.random()),frameBorder:"0",allow:"autoplay"})]})})]})},_=(n(70),n(71),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var y=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(l()),o=Object(j.a)(r,2),a=o[0],s=o[1];function l(){return.85*(window.innerHeight-window.innerHeight*(1-window.innerWidth/window.screen.width))}var d=function(){window.pageYOffset<a&&i(!1),window.pageYOffset>a&&i(!0)};return Object(c.useEffect)((function(){return l(),window.addEventListener("scroll",d),window.addEventListener("resize",(function(){s(l())})),function(){window.removeEventListener("scroll",d),window.removeEventListener("resize",(function(){s(l())}))}}),[]),Object(m.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null,opacity:"0.85"},children:[Object(m.jsx)("img",{className:"Nav_logo",src:_,alt:"Netflix logo"}),Object(m.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},R=(n(72),n(27)),N=n.n(R),k=n(25),C=n.n(k);n(73);var M=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(m.jsx)(e.icon,{}),e.label]})})};var P=function(e){var t=250,n=function(e){return e.length<t?e:e.search("\\.")<t?"".concat(e.slice(0,e.slice(0,t).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,t).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"HeaderInfo",children:[Object(m.jsx)("h1",{children:e.info.title}),Object(m.jsx)("p",{className:"overview",children:"description"in e.info?n(e.info.description):n(e.info.overview)}),Object(m.jsxs)("div",{className:"HeaderButtons",children:[Object(m.jsx)(M,{label:"Play",icon:C.a}),Object(m.jsx)(M,{label:"More Info",icon:N.a})]})]})},H="https://image.tmdb.org/t/p/original";var I=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(s.fetchTrending);case 2:return t=e.sent,i(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n);var r=null!=n?window.innerWidth<=768?'url("'.concat(H).concat(n.poster_path,'")'):'url("'.concat(H).concat(n.backdrop_path,'")'):null;return Object(m.jsxs)("div",{className:"header",style:{backgroundImage:"linear-gradient(to top, #141414 5% , transparent 30%), ".concat(r)},children:[Object(m.jsx)(y,{}),n&&Object(m.jsx)(P,{info:{title:n.original_title||n.original_name,description:n.overview}})]})},U=(n(79),n(31)),A=n.n(U),L=n.p+"static/media/reactjs-icon.6c1d44b8.svg",E=n(28),S=n(29),T=n(30);var F=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("p",{className:"icon_row",children:["Made with ",Object(m.jsx)(A.a,{className:"heart_icon",color:"secondary"}),"  ","using ","  ",Object(m.jsx)("img",{className:"react_icon",src:L,alt:"react_logo"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"contact_me",children:["Connect with me @"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/priyumagrawal",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:E.a,alt:"LinkedIn Logo"})}),Object(m.jsx)("a",{href:"mailto:priyumagrawal@gmail.com",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:T.a,alt:"Gmail Logo"})}),Object(m.jsx)("a",{href:"https://github.com/priyum7",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:S.a,alt:"Github Logo"})})]})]})};var B=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(I,{}),Object(m.jsx)(x,{}),Object(m.jsx)(F,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),z()}},[[81,1,2]]]);
//# sourceMappingURL=main.1049e87e.chunk.js.map