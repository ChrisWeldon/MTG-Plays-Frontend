(this.webpackJsonpmtgclient=this.webpackJsonpmtgclient||[]).push([[0],{241:function(e,t,n){e.exports=n(546)},250:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(70),l=n(53),d=n(221),s=n(222),u=(n(250),n(578)),m=n(581),f=n(583),p=n(584),h=n(547),b=Object(u.a)((function(e){return{root:{minHeight:60},fancy:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:100,padding:"0 30px",margin:"10px 10px 10px 10px",flexGrow:1}}}));function E(e){var t=b();return r.a.createElement(m.a,{position:"sticky",className:t.root},r.a.createElement(f.a,null,r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(h.a,{variant:"h4"},"MTG Pro Plays Terminal"))))}var g=n(592),x=n(593),y=n(594),v=Object(u.a)((function(e){return{root:{flexGrow:1,marginTop:12}}}));var C=n(124),O=n.n(C),j=(n(251),function(e){return{type:"ADD_CARD",card:e}});var w=Object(l.b)((function(e){return{results:e.search}}),{fetchSearch:function(e){return function(t){return t(function(e){return{type:"REQUEST_SEARCH",term:e}}(e)),O()("http://mtgapi.chriswevans.com/search/cards/"+e).then((function(e){return e.json()})).then((function(e){return t((n=e,{type:"RECEIVE_SEARCH",receivedAt:Date.now(),list:n}));var n})).catch((function(e){console.error("Error:",e)}))}},addCard:j,fetchCardPlays:function(e){return function(t){return t(j(e)),t({type:"REQUEST_CARD_PLAYS",id:e.id}),O()("http://mtgapi.chriswevans.com/df/plays/"+e.id+"/standard").then((function(e){return e.json()})).then((function(n){return t(function(e,t){return{type:"RECEIVE_CARD_PLAYS",id:e,plays:t}}(e.id,n))})).catch((function(e){console.error("Error:",e)}))}}})((function(e){var t=e.fetchSearch,n=(e.addCard,e.fetchCardPlays),a=e.results,o=v();return r.a.createElement(p.a,null,r.a.createElement(x.a,{id:"combo-box-demo",onInputChange:function(e,n){t(n)},freeSolo:!0,className:o.root,onChange:function(e,t){t&&t.title.length>0&&n(t)},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,e.title))},getOptionSelected:function(e,t){return console.log(e)},options:a,getOptionLabel:function(e){return e.title},renderInput:function(e){return r.a.createElement(g.a,Object.assign({},e,{id:"outlined-basic",fullWidth:!0,label:"Standard Cards",variant:"outlined"}))}}),r.a.createElement(y.a,{severity:"info"}," If no data appears on graph, then the given card has never been played."))})),R=n(589),I=n(590),A=n(37),D=n(228),S=n(162),_=["#e00000","#e07000","#e0e000","#70e000","#00e000","#00e070"];function k(e){var t=[];return console.log(e),e.forEach((function(e){t=[].concat(Object(A.a)(t),Object(A.a)(e))})),t.filter((function(e,n){return t.indexOf(e)===n}))}var P=Object(l.b)((function(e){return{byId:e.plays.byId,allIds:e.plays.allIds,cards:e.cards}}),null)((function(e){var t=e.byId,n=e.allIds,a=e.cards,o={labels:k(n.map((function(e){return t[e].loading?[]:Object.keys(t[e].norm_occ)}))).map((function(e){return S.unix(e/1e3).format("MM/DD/YYYY")})),datasets:a.map((function(e){return!t.loading&&t[e.id].norm_occ?{label:e.title,backgroundColor:"rgba(0,0,0,0)",borderColor:_[a.indexOf(e)],borderWidth:2,data:Object.values(t[e.id].norm_occ)}:{label:e.title,backgroundColor:"rgba(0,0,0,0)",borderColor:_[a.indexOf(e)],borderWidth:2,data:[]}}))};return r.a.createElement(D.a,{data:o,height:250,options:{title:{display:!0,text:"Plays Per Day Per Deck",fontSize:20},legend:{display:!0,position:"top"}}})})),T=n(587),M=n(588),F=n(586),B=n(230),G=n.n(B),W=Object(u.a)((function(e){return{root:{},fancyorange:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:120,padding:"0 30px",margin:"10px 10px 10px 10px",flexGrow:1},mythic:{display:"flex",justifyContent:"space-between",background:"linear-gradient(0.13turn, #A23013, #D87E04, #A23013)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:120,padding:"5px 5px",margin:"10px 10px 10px 10px",flexGrow:1},rare:{display:"flex",justifyContent:"space-between",background:"linear-gradient(0.13turn, #D87E04, #CAB57B, #D87E04)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:120,padding:"5px 5px",margin:"10px 10px 10px 10px",flexGrow:1},set:{fontSize:14,marginBottom:0},title:{marginTop:0},controls:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end"},deletebutton:{}}}));function V(e){var t=Object.assign({},e),n=W();return r.a.createElement(T.a,{item:!0,className:"mythic-rare"===t.rarity?n.mythic:n.rare},r.a.createElement(M.a,null,r.a.createElement(h.a,{variant:"subtitle",className:n.set,gutterBottom:!0},"mythic-rare"===t.rarity?"Mythic-Rare":"Rare"," : ",t.set),r.a.createElement(h.a,{variant:"h4",className:n.title,gutterBottom:!0},t.title)),r.a.createElement("div",{className:n.controls},r.a.createElement(F.a,{className:n.deletebutton,onClick:function(){return t.removeCard(t.id)},"aria-label":"delete"},r.a.createElement(G.a,{fontSize:"large"}))))}var L=Object(u.a)((function(e){return{root:{flexGrow:1,minHeight:"110%"}}}));var N=Object(l.b)((function(e){return{Cards:e.cards}}),{fetchCard:function(e){return function(t){return t(function(e){return{type:"REQUEST_CARD",title:e}}(e)),O()("http://mtgapi.chriswevans.com/card/"+e).then((function(e){return e.json()})).then((function(n){return t(function(e,t){return{type:"RECEIVE_CARD",receivedAt:Date.now(),title:e,resp:t}}(e,n))})).catch((function(e){console.error("Error:",e)}))}},removeCard:function(e){return{type:"REMOVE_CARD",id:e}}})((function(e){var t=e.Cards,n=(e.fetchCard,e.removeCard);return L(),r.a.createElement(R.a,{container:!0,direction:"row-reverse",justify:"center",alignItems:"str"},r.a.createElement(R.a,{item:!0,xs:12,md:6},r.a.createElement(P,null)),r.a.createElement(R.a,{item:!0,xs:12,md:6},t.map((function(e){return e.loaded?r.a.createElement(V,Object.assign({},e,{removeCard:function(e){return n(e)}})):r.a.createElement(I.a,{color:"inherit",size:60})}))))})),Y=n(591),H=n(163),Q=n.n(H),U=n(231),z=n.n(U),J=Object(u.a)((function(e){return{root:{minHeight:100,background:"#9D9695",position:"sticky"},fancy:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:100,padding:"0 30px",margin:"10px 10px 10px 10px",flexGrow:1}}}));function q(e){var t=J();return r.a.createElement(m.a,{position:"sticky",className:t.root},r.a.createElement(p.a,{maxWidth:"md"},r.a.createElement(h.a,null," MTG Pro Plays Terminal - ",r.a.createElement(Y.a,{color:"inherit",href:"https://github.com/ChrisWeldon/MTG-Database-API"}," MTG API ")," "),r.a.createElement(h.a,null," ",r.a.createElement("span",{class:"iconify","data-icon":"cib:react","data-inline":"false"})," React + ",r.a.createElement("span",{class:"iconify","data-icon":"simple-icons:redux","data-inline":"false"})," Redux + ",r.a.createElement("span",{class:"iconify","data-icon":"cib:flask","data-inline":"false"})," Flask + ",r.a.createElement("span",{class:"iconify","data-icon":"whh:mysqltwo","data-inline":"false"})," MySQL"),r.a.createElement(h.a,null," \xa9 Christopher W. Evans, ",r.a.createElement(Y.a,{href:"https://github.com/ChrisWeldon/MTG-Plays-Frontend"}," MIT License ")),r.a.createElement(h.a,null,r.a.createElement(Y.a,{color:"inherit",href:"https://github.com/ChrisWeldon/MTG-Plays-Frontend"},r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{color:"inherit",href:"https://www.linkedin.com/in/chrisweldonevans/"},r.a.createElement(z.a,null)))))}n(545);var $=Object(u.a)((function(e){return{root:{}}}));var K=function(){return $(),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(w,null),r.a.createElement(N,null),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(31);var Z=n(82),ee={byId:{},allIds:[]};var te=Object(i.c)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CARD":return[].concat(Object(A.a)(e),[{title:t.title,loaded:!1}]);case"RECEIVE_CARD":return e.map((function(e){return e.title==t.title?Object(X.a)(Object(X.a)({},t.resp),{},{loaded:!0}):e}));case"ADD_CARD":return[].concat(Object(A.a)(e.filter((function(e){return e.id!=t.card.id}))),[Object(X.a)(Object(X.a)({},t.card),{},{loaded:!0})]);case"REMOVE_CARD":return e.filter((function(e){return e.id!=t.id}));default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SEARCH":return e;case"RECEIVE_SEARCH":return Object(A.a)(t.list);default:return e}},plays:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,n=e.byId,a=e.allIds;switch(t.type){case"REQUEST_CARD_PLAYS":return{byId:Object(X.a)(Object(X.a)({},n),{},Object(Z.a)({},t.id,{loading:!0})),allIds:[].concat(Object(A.a)(a),[t.id])};case"RECEIVE_CARD_PLAYS":return{byId:Object(X.a)(Object(X.a)({},n),{},Object(Z.a)({},t.id,Object(X.a)(Object(X.a)({},t.plays),{},{loading:!1}))),allIds:Object(A.a)(a)};case"REMOVE_CARD":return{byId:Object.assign({},n,Object(Z.a)({},t.id,void 0)),allIds:a.filter((function(e){return e!=t.id}))};default:return e}}}),ne=Object(s.createLogger)(),ae=Object(i.d)(te,Object(i.a)(d.a,ne));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:ae},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[241,1,2]]]);
//# sourceMappingURL=main.e44f0b4c.chunk.js.map