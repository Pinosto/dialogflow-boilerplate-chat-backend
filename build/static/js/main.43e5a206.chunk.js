(this["webpackJsonpboilerplate-chat"]=this["webpackJsonpboilerplate-chat"]||[]).push([[0],{24:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(17),i=c.n(a),s=(c(24),c(4)),r=c(3),l=c.n(r),u=c(18),p=c(19),b=c.n(p),j=c(55),h=c.p+"static/media/logo.6ce24c58.svg",d=(c(51),c(0)),g=function(){var e=Object(j.a)(),t=[{command:"*",callback:function(e){return k(e)}}],c=Object(r.useSpeechRecognition)({commands:t}),o=c.transcript,a=c.resetTranscript,i=Object(u.useSpeechSynthesis)().speak,p=Object(n.useState)(!1),g=Object(s.a)(p,2),O=g[0],f=g[1],m=Object(n.useState)(""),x=Object(s.a)(m,2),S=x[0],k=x[1],v=Object(n.useState)(""),C=Object(s.a)(v,2),w=C[0],A=C[1],L=Object(n.useState)(""),N=Object(s.a)(L,2),P=N[0],y=N[1];if(Object(n.useEffect)((function(){if(""!==S){a(),y(S),console.log("myPhrase: ".concat(S));var t={text:S,uuid:e};b.a.post("/api/dialogflow",t).then((function(e){return A(e.data)})).catch((function(){return A("Back end is taking break.")})),k("")}}),[S]),Object(n.useEffect)((function(){""!==w&&(y(w),console.log("botPhrase: ".concat(w)),i({text:w}),A(""))}),[w]),!l.a.browserSupportsSpeechRecognition())return Object(d.jsx)("div",{children:"Browser is not Support Speech Recognition."});return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[O?Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:h,className:"App-logo-run",alt:"logo",onClick:function(){l.a.stopListening(),a(),f(!O)}}),o?Object(d.jsx)("p",{children:o}):Object(d.jsx)("p",{children:P})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:h,className:"App-logo-stop",alt:"logo",onClick:function(){f(!O),A("What's on Your Mind?"),l.a.startListening({continuous:!0,language:"en-US"})}}),Object(d.jsx)("p",{children:"Click logo to start boilerplate chat..."})]}),Object(d.jsx)("a",{className:"App-link",href:"https://github.com/Pinosto/boilerplate-chat",target:"_blank",rel:"noopener noreferrer",onClick:function(e){A("Hey don't leave.")},children:"Learn React"})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}},[[53,1,2]]]);
//# sourceMappingURL=main.43e5a206.chunk.js.map