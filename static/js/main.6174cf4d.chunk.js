(this.webpackJsonpishadow=this.webpackJsonpishadow||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(14),j=c.n(s),o=(c(21),c(22),c(6)),r=c(2),a=(c(23),c(0));var l=function(){return Object(a.jsx)("div",{className:"video-player",children:"Video player"})};c(25);var b=function(){return Object(a.jsx)("div",{className:"audio-player",children:"Audio player"})},d=(c(26),["1eAZvWm0gE0","d-HK6DFi3MA"]);var u=function(e){var t=e.match;return Object(a.jsxs)("div",{className:"youtube-player",children:[Object(a.jsx)("iframe",{width:"1120",height:"630",src:"https://www.youtube.com/embed/"+d[1],title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),"abd : ",t.url]})};c(27);var h=function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(o.b,{to:"/login",children:"Log in"})}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)(o.b,{to:"/signup",children:"Sign up"})})]})})};c(36);var x=function(){return Object(a.jsx)("dialog",{id:"input-url-dialog",className:"dialog",children:Object(a.jsxs)("form",{name:"youtube-form",method:"get",action:"",children:[Object(a.jsx)("input",{placeholder:"Youtube URL",name:"url"}),Object(a.jsxs)("div",{className:"baseline",children:[Object(a.jsx)("div",{className:"btn",children:Object(a.jsx)(o.b,{to:"/youtube",children:"\uc81c\ucd9c"})}),Object(a.jsx)("button",{value:"cancel",children:"\ucde8\uc18c"})]})]})})};c(37);function O(){var e=document.getElementById("input-url-dialog");"function"===typeof e.showModal&&e.showModal()}var m=function(){return Object(a.jsxs)("main",{children:[Object(a.jsxs)("div",{className:"menu-container",children:[Object(a.jsxs)("div",{className:"card",onClick:O,children:[Object(a.jsx)("h2",{children:"Youtube URL"}),Object(a.jsx)("p",{children:"\uc720\ud29c\ube0c URL\ub85c \uc190\uc27d\uac8c \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694."})]}),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("h2",{children:"File Upload"}),Object(a.jsx)("p",{children:"\uc601\uc0c1 \ub610\ub294 \uc74c\uc131 \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud574 \uc190\uc27d\uac8c \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694."}),Object(a.jsx)("input",{type:"file",accept:"audio/*, video/*"})]})]}),Object(a.jsx)(o.b,{to:"/video",children:"\ube44\ub514\uc624 \ud50c\ub808\uc774\uc5b4"}),Object(a.jsx)(o.b,{to:"/audio",children:"\uc624\ub514\uc624 \ud50c\ub808\uc774\uc5b4"}),Object(a.jsx)(o.b,{to:"/youtube",children:"\uc720\ud29c\ube0c \ud50c\ub808\uc774\uc5b4"}),Object(a.jsx)(x,{})]})},p=(c(38),c(16));var v=function(){return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h2",{children:"Sign in to I-Shadow"}),Object(a.jsx)("div",{className:"login-form",children:Object(a.jsxs)("form",{id:"login-form",action:"",method:"POST",children:[Object(a.jsx)("label",{htmlFor:"",children:"Email"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"",children:"Password"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn_submit",children:"Sign in"})]})}),Object(a.jsxs)("div",{className:"login-with-sns",children:[Object(a.jsx)(p.a,{id:"google-icon"}),Object(a.jsx)("button",{children:"sign in with google"})]})]})};c(39);var f=function(){return Object(a.jsxs)("div",{className:"signup",children:[Object(a.jsx)("h2",{children:"Sign up to I-Shadow"}),Object(a.jsx)("div",{className:"signup-form",children:Object(a.jsxs)("form",{action:"",method:"POST",children:[Object(a.jsx)("label",{htmlFor:"",children:"Email"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"email"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"",children:"Password"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password"})," ",Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"submit",className:"btn_submit",children:"Sign up"})]})})]})};var g=function(){return Object(a.jsxs)(o.a,{basename:"/for-deploy",children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{className:"wrap",children:Object(a.jsx)("div",{className:"player-container",children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:m}),Object(a.jsx)(r.a,{path:"/login",component:v}),Object(a.jsx)(r.a,{path:"/signup",component:f}),Object(a.jsx)(r.a,{path:"/video",component:l}),Object(a.jsx)(r.a,{path:"/audio",component:b}),Object(a.jsx)(r.a,{path:"/youtube",component:u}),Object(a.jsx)(r.a,{path:"/youtube/:url",component:u})]})})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),i(e),s(e),j(e)}))};j.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.6174cf4d.chunk.js.map