(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t){},110:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(54),l=a.n(s),o=a(15),m=a(7),i=a(5),u=a(55),A=a.n(u),E=(a(68),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),m=l[0],u=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("img",{src:A.a,alt:"close icon",className:"chatIcon"}),r.a.createElement("h1",null,"Welcome Back !"),r.a.createElement("h3",{className:"heading"},"Enter your name and room to Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(o.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In")),r.a.createElement("h2",null,"Created by Rishi Patel")))}),f=a(62),g=a(58),p=a.n(g),d=a(59),h=a.n(d),v=a(16),N=a.n(v),b=(a(110),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},t?r.a.createElement("div",null,r.a.createElement("h1",null,"People Online:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:N.a}))}))))):null)}),j=a(60),C=a.n(j),O=(a(144),a(30)),I=a.n(O),S=function(e){var t=e.message,a=t.text,n=t.user,c=e.name,s=!1,l=c?c.trim().toLowerCase():"";return n===l&&(s=!0),s?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},I.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},I.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},x=(a(145),function(e){var t=e.messages,a=e.name;return r.a.createElement(C.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(S,{message:e,name:a}))})))}),y=a(61),k=a.n(y),R=(a(146),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:N.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:k.a,alt:"close icon"}))))}),B=(a(147),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))}),M=(a(148),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),l=s[0],o=s[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),A=u[0],E=u[1],g=Object(c.useState)(""),d=Object(i.a)(g,2),v=d[0],N=d[1],j=Object(c.useState)(""),C=Object(i.a)(j,2),O=C[0],I=C[1],S=Object(c.useState)([]),y=Object(i.a)(S,2),k=y[0],M=y[1],U="https://react-chat-appplication.herokuapp.com/";Object(c.useEffect)((function(){var e=p.a.parse(t.search),a=e.name,c=e.room;return n=h()(U),o(a),E(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[U,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){M([].concat(Object(f.a)(k),[e]))})),n.on("roomData",(function(e){var t=e.users;N(t)}))}),[k]);return console.log(O,k),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(R,{room:A}),r.a.createElement(x,{messages:k,name:l}),r.a.createElement(B,{message:O,setMessage:I,sendMessage:function(e){e.preventDefault(),n.emit("sendMessage",O,(function(){return I("")}))}})),r.a.createElement(b,{users:v}))}),U=function(){return r.a.createElement(o.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:E}),r.a.createElement(m.a,{path:"/chat",component:M}))};l.a.render(r.a.createElement(U,null),document.querySelector("#root"))},16:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},55:function(e,t,a){e.exports=a.p+"static/media/chatIcon.aa43532c.svg"},61:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},63:function(e,t,a){e.exports=a(149)},68:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.275151bb.chunk.js.map