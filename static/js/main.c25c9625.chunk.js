(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(7),o=n.n(r),a=(n(37),n(38),"412a49befa2cef4fa57ee4d68eb7c1fd"),s={fetchTrending:"/trending/all/week?api_key=".concat(a,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(a,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(a,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(a,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(a,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(a,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(a,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(a,"&with_genres=99")},l=n(5),u=n.n(l),d=n(8),f=n(2),b=n(23),j=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(58),n(13)),v=n(24),g=n.n(v),m=(n(67),n(0));var p=function(e){var t=Object(i.useState)(""),n=Object(f.a)(t,2),c=n[0],r=n[1],o="https://image.tmdb.org/t/p/original",a=e.movieObject.original_title||e.movieObject.original_name,s=e.isPoster?"".concat(o).concat(e.movieObject.poster_path):"".concat(o).concat(e.movieObject.backdrop_path);return Object(i.useEffect)((function(){c||g()(a).then((function(e){e&&r(e.split("v=")[1].substring(0,11))})).catch((function(e){console.log("Cannot fetch ".concat(a," trailer URL."))}))}),[]),Object(m.jsx)("div",{className:"Poster",onClick:function(){e.showMovieInfoOnClick(Object(h.a)(Object(h.a)({},e.movieObject),{},{trailerUrl:c,isPoster:e.isPoster}))},children:Object(m.jsx)("img",{className:e.isPoster?"imgAsPoster":"",alt:a,src:s,onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})};var O=function(e){var t=Object(i.useState)([]),n=Object(f.a)(t,2),c=n[0],r=n[1],o=Object(i.useState)(!1),a=Object(f.a)(o,2),s=a[0],l=a[1],b=380,h=function(t){l(t),e.activeRowChangeHandler(e.title),e.setCurrentMovieRows(t)};Object(i.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get(e.getUrl);case 2:return n=t.sent,r(n.data.results),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.getUrl]);var v=function(e){return 0==e.length?"Description Unavailable :(":e.length<b?e:e.search("\\.")<b?"".concat(e.slice(0,e.slice(0,b).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,b).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("div",{className:"row_posters",children:c.map((function(t){return Object(m.jsx)(p,{movieObject:t,isPoster:e.isPoster,showMovieInfoOnClick:h},t.original_title||t.original_name)}))}),Object(m.jsx)("div",{className:"movie_info",style:{height:e.currentActiveRow==e.title?null:"0vw",display:window.innerWidth<=768?"none":null},children:e.currentActiveRow==e.title&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("h1",{children:s.original_title||s.original_name}),Object(m.jsx)("p",{className:"overview",children:v("description"in s?s.description:s.overview)})]}),Object(m.jsx)("div",{className:"media",children:s.trailerUrl?Object(m.jsx)("iframe",{style:{height:"100%",width:"100%"},src:"https://www.youtube.com/embed/"+s.trailerUrl+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1",frameBorder:"0",allow:"autoplay"}):Object(m.jsx)("img",{alt:s.original_title||s.original_name,src:"".concat("https://image.tmdb.org/t/p/original").concat(s.backdrop_path),onError:function(e){e.target.onerror=null,e.target.src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"}})})]})})]})},w=n.p+"static/media/Rolling.a763c805.svg",x=function(){var e=Object(i.useRef)(null),t=Object(i.useState)({fontSize:200,fontSizePrev:5,fontSizeMax:200,fontSizeMin:5}),n=Object(f.a)(t,2),c=n[0],r=n[1],o=c.fontSize,a=c.fontSizeMax,s=c.fontSizeMin,l=c.fontSizePrev;return Object(i.useEffect)((function(){var t=Math.abs(o-l)<=5,n=!!e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),i=o>l;if(t){n&&r({fontSize:l<o?l:o-(l-o),fontSizeMax:a,fontSizeMin:s,fontSizePrev:l})}else{var c,u=a,d=s;n?(c=i?l-o:s-o,u=Math.min(a,o)):(c=i?a-o:l-o,d=Math.max(s,o)),r({fontSize:o+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:o})}}),[o,a,s,l,e]),{fontSize:"".concat(o,"%"),ref:e}};n(69);var _=function(){var e=Object(i.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(),o=Object(f.a)(r,2),a=o[0],l=o[1],u=Object(i.useRef)(),d=Object(i.useRef)(),b=x(),j=b.fontSize,h=b.ref,v=function(e){console.log("Active row :"+e),c(e)},g=function(e){l(e)},p=380,_=function(e){return 0==e.length?"Description Unavailable :(":e.length<p?e:e.search("\\.")<p?"".concat(e.slice(0,e.slice(0,p).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,p).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"Rows",children:[Object(m.jsx)(O,{title:"Trending Now",getUrl:s.fetchTrending,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"NETFLIX ORIGINALS",getUrl:s.fetchNetflixOriginals,isPoster:!0,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Top Rated",getUrl:s.fetchTopRated,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Action Movies",getUrl:s.fetchActionMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Comedy Movies",getUrl:s.fetchComedyMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Horror Movies",getUrl:s.fetchHorrorMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Romance Movies",getUrl:s.fetchRomanceMovies,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g}),Object(m.jsx)(O,{title:"Documentaries",getUrl:s.fetchDocumentaries,isPoster:!1,currentActiveRow:n,activeRowChangeHandler:v,setCurrentMovieRows:g})]}),a&&Object(m.jsx)("div",{className:"mobile_info",style:{transform:n?"translateY(0vh)":"translateY(200vh)",minHeight:"100vh",height:"100%"},onClick:function(){c(null)},children:Object(m.jsxs)("div",{className:"mobile_info_main",onClick:function(e){e.stopPropagation()},children:[Object(m.jsxs)("div",{className:"mobile_description",style:{display:n?null:"none"},children:[Object(m.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original").concat(a.poster_path),onError:function(e){e.target.onerror=null,e.target.src=w},style:{minHeight:"20vh",maxHeight:"20vh",boxSizing:"fill",backgroundImage:'url("'.concat(w,'")'),backgroundSize:"contain"},ref:u}),a&&Object(m.jsx)("div",{style:{fontSize:j,paddingLeft:"2vw"},ref:h,children:_("description"in a?a.description:a.overview)})]}),Object(m.jsx)("iframe",{style:{maxHeight:"26vh",width:"100%",height:"100%"},ref:d,src:a.trailerUrl?"https://www.youtube.com/embed/"+a.trailerUrl+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&".concat(1e6*Math.random()):"https://www.youtube.com/embed/_vECE5BJbA0"+"?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&".concat(1e6*Math.random()),frameBorder:"0",allow:"autoplay"})]})})]})},y=(n(70),n(71),n.p+"static/media/Netflix-Logo-PNG3.a3092e10.png");var R=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(l()),o=Object(f.a)(r,2),a=o[0],s=o[1];function l(){return.85*(window.innerHeight-window.innerHeight*(1-window.innerWidth/window.screen.width))}var u=function(){window.pageYOffset<a&&c(!1),window.pageYOffset>a&&c(!0)};return Object(i.useEffect)((function(){return l(),window.addEventListener("scroll",u),window.addEventListener("resize",(function(){s(l())})),function(){window.removeEventListener("scroll",u),window.removeEventListener("resize",(function(){s(l())}))}}),[]),Object(m.jsxs)("div",{className:"Nav",style:{backgroundColor:n?"#141414":null,opacity:"0.85"},children:[Object(m.jsx)("img",{className:"Nav_logo",src:y,alt:"Netflix logo"}),Object(m.jsx)("img",{className:"Nav_icon",src:"https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png",alt:"Profile Icon"})]})},M=(n(72),n(27)),N=n.n(M),k=n(25),S=n.n(k);n(73);var C=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{style:{backgroundColor:"Play"==e.label?"white":"rgba(169, 169, 169, 0.5)",color:"Play"==e.label?"black":"white"},children:[Object(m.jsx)(e.icon,{}),e.label]})})};var P=function(e){var t=250,n=function(e){return e.length<t?e:e.search("\\.")<t?"".concat(e.slice(0,e.slice(0,t).lastIndexOf(".")+1)," "):"".concat(e.slice(0,e.slice(0,t).lastIndexOf(" ")+1),"...")};return Object(m.jsxs)("div",{className:"HeaderInfo",children:[Object(m.jsx)("h1",{children:e.info.title}),Object(m.jsx)("p",{className:"overview",children:"description"in e.info?n(e.info.description):n(e.info.overview)}),Object(m.jsxs)("div",{className:"HeaderButtons",children:[Object(m.jsx)(C,{label:"Play",icon:S.a}),Object(m.jsx)(C,{label:"More Info",icon:N.a})]})]})},z="https://image.tmdb.org/t/p/original";var H=function(){var e=Object(i.useState)(null),t=Object(f.a)(e,2),n=t[0],c=t[1];Object(i.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(s.fetchTrending);case 2:return t=e.sent,c(t.data.results[parseInt(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(n);var r=null!=n?window.innerWidth<=768?'url("'.concat(z).concat(n.poster_path,'")'):'url("'.concat(z).concat(n.backdrop_path,'")'):null;return Object(m.jsxs)("div",{className:"header",style:{backgroundImage:"linear-gradient(to top, #141414 5% , transparent 30%), ".concat(r)},children:[Object(m.jsx)(R,{}),n&&Object(m.jsx)(P,{info:{title:n.original_title||n.original_name,description:n.overview}})]})},U=(n(79),n(31)),I=n.n(U),A=n.p+"static/media/reactjs-icon.6c1d44b8.svg",E=n(28),L=n(29),T=n(30);var F=function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("p",{className:"icon_row",children:["Made with ",Object(m.jsx)(I.a,{className:"heart_icon",color:"secondary"}),"  ","using ","  ",Object(m.jsx)("img",{className:"react_icon",src:A,alt:"react_logo"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{className:"contact_me",children:["Connect with me @"," ",Object(m.jsx)("a",{href:"https://www.linkedin.com/in/priyumagrawal",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:E.a,alt:"LinkedIn Logo"})}),Object(m.jsx)("a",{href:"mailto:priyumagrawal@gmail.com",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:T.a,alt:"Gmail Logo"})}),Object(m.jsx)("a",{href:"https://github.com/priyum7",target:"_blank",children:Object(m.jsx)("img",{className:"contact_icons",src:L.a,alt:"Github Logo"})})]})]})};var B=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(H,{}),Object(m.jsx)(_,{}),Object(m.jsx)(F,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root")),D()}},[[81,1,2]]]);
//# sourceMappingURL=main.c25c9625.chunk.js.map