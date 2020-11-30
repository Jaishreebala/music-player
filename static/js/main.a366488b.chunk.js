(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(1),o=c(2),p=c.n(o),i=c(10),l=c.n(i),s=c(3),h=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:t.cover,alt:t.name}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},n=c(9),r=c(5),d=c(4),m=function(e){var t=e.currentSong,c=e.isPlaying,p=e.setIsPlaying,i=Object(o.useRef)(null),l=Object(o.useState)({currentTime:0,duration:0}),h=Object(s.a)(l,2),m=h[0],b=h[1],u=function(e){var t={currentTime:e.target.currentTime,duration:e.target.duration};b(t)},v=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},j=function(e){b(Object(n.a)(Object(n.a)({},m),{},{currentTime:e.target.value})),i.current.currentTime=m.currentTime};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:v(m.currentTime)}),Object(a.jsx)("input",{min:0,max:m.duration,value:m.currentTime,onChange:j,onClick:j,type:"range"}),Object(a.jsx)("p",{children:v(m.duration)})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(r.a,{icon:d.c,className:"back",size:"2x"}),Object(a.jsx)(r.a,{onClick:function(){c?(i.current.pause(),p(!c)):(i.current.play(),p(!c))},icon:c?d.a:d.b,className:"play",size:"2x"}),Object(a.jsx)(r.a,{icon:d.d,className:"next",size:"2x"})]}),Object(a.jsx)("audio",{onLoadedMetadata:u,onTimeUpdate:u,ref:i,src:t.audio})]})},b=(c(21),c(24));var u=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!1},{name:"Going Back",cover:"https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=10310",color:["#233136","#394964"],id:Object(b.a)(),active:!1},{name:"Slim Bobby",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10448",color:["#3D78BA","#C668B2"],id:Object(b.a)(),active:!1},{name:"Deeper",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10460",color:["#3D78BA","#C668B2"],id:Object(b.a)(),active:!1},{name:"Creswick",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10454",color:["#3D78BA","#C668B2"],id:Object(b.a)(),active:!1},{name:"Magenta Forever",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10458",color:["#3D78BA","#C668B2"],id:Object(b.a)(),active:!1},{name:"Flushing the Stairs",cover:"https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",artist:"Leavv",audio:"https://mp3.chillhop.com/serve.php/?mp3=9917",color:["#033A47","#3C9262"],id:Object(b.a)(),active:!1},{name:"Les Mouvements d'Hiver",cover:"https://chillhop.com/wp-content/uploads/2020/10/d2898bc0ef36b5d67d6793062d588d208a90421c-1024x1024.jpg",artist:"sadtoi, L'Ind\xe9cis",audio:"https://mp3.chillhop.com/serve.php/?mp3=10351",color:["#DB9CB9","#6B6EA5"],id:Object(b.a)(),active:!1},{name:"Bliss",cover:"https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",artist:" Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=9248",color:["#E87F86","#5182B1"],id:Object(b.a)(),active:!1},{name:"Serendipity",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:" Philanthrope, The Field Tapes ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10249",color:["#DA8768","#6D4433"],id:Object(b.a)(),active:!1},{name:"Wildlife",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:" Philanthrope, Chromonicci ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10263",color:["#DA8768","#6D4433"],id:Object(b.a)(),active:!1},{name:"Anemone",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:" Philanthrope, Dotlights ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10259",color:["#DA8768","#6D4433"],id:Object(b.a)(),active:!1},{name:"Habitat",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:" Philanthrope, Kendall Miles ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10265",color:["#DA8768","#6D4433"],id:Object(b.a)(),active:!1},{name:"Plants",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:" Philanthrope, Ian Ewing, Sleepy Fish ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10255",color:["#DA8768","#6D4433"],id:Object(b.a)(),active:!1},{name:"Mirage",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:" Nymano, j'san ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10136",color:["#5A5482","#F1AFA6"],id:Object(b.a)(),active:!1},{name:"Cold Outside",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:" Nymano",audio:"https://mp3.chillhop.com/serve.php/?mp3=10150",color:["#5A5482","#F1AFA6"],id:Object(b.a)(),active:!1},{name:"Ur Ok",cover:"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",artist:"Aso",audio:"https://mp3.chillhop.com/serve.php/?mp3=7912",color:["#6C354C","#F3DCCF"],id:Object(b.a)(),active:!1},{name:"Never Felt The Same",cover:"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=7810",color:["#6C354C","#F3DCCF"],id:Object(b.a)(),active:!1},{name:"Caught In The Rain",cover:"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",artist:"Aso",audio:"https://mp3.chillhop.com/serve.php/?mp3=8776",color:["#6C354C","#F3DCCF"],id:Object(b.a)(),active:!1}]};var v=function(){var e=Object(o.useState)(u()),t=Object(s.a)(e,2),c=t[0],p=(t[1],Object(o.useState)(c[0])),i=Object(s.a)(p,2),l=i[0],n=(i[1],Object(o.useState)(!1)),r=Object(s.a)(n,2),d=r[0],b=r[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{currentSong:l}),Object(a.jsx)(m,{currentSong:l,isPlaying:d,setIsPlaying:b})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,o=t.getFCP,p=t.getLCP,i=t.getTTFB;c(e),a(e),o(e),p(e),i(e)}))};l.a.render(Object(a.jsx)(p.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),j()}},[[22,1,2]]]);
//# sourceMappingURL=main.a366488b.chunk.js.map