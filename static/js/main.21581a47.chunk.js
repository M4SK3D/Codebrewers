(this.webpackJsonpdynamicapp=this.webpackJsonpdynamicapp||[]).push([[0],{19:function(e,t,n){e.exports=n(45)},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),o=n.n(l),c=(n(24),n(2)),i=n.n(c),s=n(14),u=n(15),d=n(17),m=n(16),p=n(18),f=n(3),E=n.n(f),h=(n(44),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={prefs:[],login:0,roll:"",loginError:"",name:"",admin:0},n.getUsers=function(){var e,t,a,r;return i.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(1!==n.state.admin){l.next=9;break}return l.next=3,i.a.awrap(E.a.get("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/adminfetch"));case 3:e=l.sent,console.log("Fetched"),t=e.data,n.setState({prefs:t}),l.next=15;break;case 9:return l.next=11,i.a.awrap(E.a.post("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/fetch",{roll:n.state.roll}));case 11:a=l.sent,console.log("Fetched"),r=a.data,n.setState({prefs:r});case 15:case"end":return l.stop()}}))},n.handleChange=function(e){e.preventDefault(),n.setState({roll:e.target.value}),console.log(n.state.roll)},n.submitAction=function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(16!==n.state.roll.length&&5!==n.state.roll.length){t.next=8;break}return t.next=3,i.a.awrap(E.a.post("https://kxt4vjniid.execute-api.us-east-1.amazonaws.com/prod/verify",{roll:n.state.roll}));case 3:e=t.sent,console.log(e),0!==e.data.name.length?(n.setState({login:1}),n.setState({name:e.data.name}),"Administrator"===n.state.name&&n.setState({admin:1})):n.setState({loginError:"Enter a valid Roll Number!"}),t.next=9;break;case 8:n.setState({loginError:"Enter a valid Roll Number!"});case 9:case"end":return t.stop()}}))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderTableData",value:function(){var e=this;return this.state.prefs.map((function(t,n){return 1===e.state.admin?r.a.createElement("tr",{key:t.cid},r.a.createElement("td",null,t.sname),r.a.createElement("td",null,t.cid),r.a.createElement("td",null,t.cname),r.a.createElement("td",null,t.prefno)):r.a.createElement("tr",{key:t.cid},r.a.createElement("td",null,t.cid),r.a.createElement("td",null,t.cname),r.a.createElement("td",null,t.prefno))}))}},{key:"renderHeader",value:function(){return Object.keys(this.state.prefs[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}},{key:"logoutFunction",value:function(){this.setState({login:0,prefs:[],roll:"",loginError:"",name:"",admin:0})}},{key:"render",value:function(){var e=this;return 0===this.state.login?r.a.createElement("container",null,r.a.createElement("parahead",null,"Login to Continue"),r.a.createElement("p",{style:{paddingLeft:"25px"}},"Roll Number: (CB.EN.U4XYZ17ABC format)"),r.a.createElement("p",{style:{color:"Red"}},this.state.loginError),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),"\u2003\u2003\u2003",r.a.createElement("button",{onClick:function(){return e.submitAction()}},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null,0===this.state.prefs.length?r.a.createElement("div",null,r.a.createElement("topspace",null,r.a.createElement("p",null,"ELECTIVES MANAGEMENT SYSTEM")),r.a.createElement("w3sidebar",null,r.a.createElement("img",{src:"https://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png"}),r.a.createElement("p",{style:{fontSize:"30px",paddingLeft:"50px",color:"white"}},"Hello,"),r.a.createElement("nametag",null,this.state.name),r.a.createElement("navbar",null,r.a.createElement("logout",{onClick:function(){return e.logoutFunction()}},"Logout"))),r.a.createElement("button",{style:{marginLeft:"20%",width:"20%",display:"block"},onClick:function(){return e.getUsers()}},"Click to load!")):r.a.createElement("div",null,r.a.createElement("topspace",null,r.a.createElement("p",null,"ELECTIVES MANAGEMENT SYSTEM")),r.a.createElement("w3sidebar",null,r.a.createElement("img",{src:"https://www.advancedsec.com/wp-content/uploads/2018/11/profile-blank.png"}),r.a.createElement("p",{style:{fontSize:"30px",paddingLeft:"50px",color:"white"}},"Hello,"),r.a.createElement("nametag",null,this.state.name),r.a.createElement("navbar",null,r.a.createElement("logout",{onClick:function(){return e.logoutFunction()}},"Logout"))),r.a.createElement("table",{id:"students",style:{marginLeft:"20%"}},r.a.createElement("tbody",null,r.a.createElement("div",{style:{fontSize:"20px"}},"Your Preferences List:"),r.a.createElement("br",null),r.a.createElement("tr",null,this.renderHeader()),this.renderTableData())),r.a.createElement("button",{style:{marginLeft:"20%",width:"10%",display:"block"},onClick:function(){return e.getUsers()}},"Reload")))}}]),t}(r.a.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Codebrewers",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Codebrewers","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.21581a47.chunk.js.map