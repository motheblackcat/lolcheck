(this.webpackJsonplolcheck=this.webpackJsonplolcheck||[]).push([[0],{13:function(e,n,a){e.exports={main:"main-component_main__3WasA",banner:"main-component_banner__1A4bB",content:"main-component_content__3mIBk",error:"main-component_error__2zJqf"}},18:function(e,n,a){e.exports=a.p+"static/media/unranked.eec1564a.png"},29:function(e,n,a){e.exports={selector:"selector-component_selector__MQbBU"}},30:function(e,n,a){e.exports={loader:"loader-component_loader__2dBr4",rotate:"loader-component_rotate__9t7So"}},31:function(e,n,a){e.exports=a.p+"static/media/iron.1a6b4669.png"},32:function(e,n,a){e.exports=a.p+"static/media/bronze.39964f7f.png"},33:function(e,n,a){e.exports=a.p+"static/media/silver.3a4aa1a5.png"},34:function(e,n,a){e.exports=a.p+"static/media/gold.19be519b.png"},35:function(e,n,a){e.exports=a.p+"static/media/platinum.86ac5170.png"},36:function(e,n,a){e.exports=a.p+"static/media/diamond.c9018327.png"},37:function(e,n,a){e.exports=a.p+"static/media/master.4156f1c1.png"},38:function(e,n,a){e.exports=a.p+"static/media/grandmaster.d0d4b62f.png"},39:function(e,n,a){e.exports=a.p+"static/media/challenger.4aaf9754.png"},40:function(e,n,a){e.exports={league:"league-component_league__3-SI6"}},43:function(e,n,a){e.exports=a(71)},70:function(e,n,a){},71:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(14),s=a.n(r),u=a(5),m=a(6),c=a(10),i=a(7),l=a(11),p=a(12),d=a.n(p),g="RGAPI-daf80488-49fe-430a-9703-b410736c938d",h="RANKED_FLEX_TT",f="RANKED_SOLO_5x5",v="RANKED_FLEX_SR",E=function(e){return{type:"SET_CHAMPION_DATA",payload:e}},_=function(e){return function(n){d.a.get("https://".concat(e.sumRegion,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(e.sumId,"?api_key=").concat(g)).then((function(a){var t=a.data;e.sumLeague=[],t.length>0&&t.forEach((function(n){if(n.queueType!==h){var a={queueType:n.queueType,wins:n.wins,losses:n.losses,tier:n.tier,rank:n.rank,leaguePoints:n.leaguePoints};e.sumLeague.push(a)}})),n(b(e))}))}},b=function(e){return function(n,a){d.a.get("https://".concat(e.sumRegion,".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/").concat(e.sumId,"?api_key=").concat(g)).then((function(t){var o=t.data.shift();if(o){var r=o.championId.toString(),s=a().champions.find((function(e){return e.key===r})),u=s.name.replace(/[^a-zA-Z]/g,""),m="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(u,"_0.jpg");e.sumSplash=m,e.sumChamp=s.name,n(L(e))}else n(L(e))}))}},y=function(){return{type:"LOADING_SUM_INFO"}},L=function(e){return{type:"SUCCESS_SUM_INFO",payload:e}},O=function(e){return{type:"ERROR_SUM_INFO",payload:e}},S=a(9),N=a(29),I=a.n(N),j=function(e){function n(){var e,a;Object(u.a)(this,n);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).state={sumName:""},a}return Object(l.a)(n,e),Object(m.a)(n,[{key:"getSummonerNameHandler",value:function(e){var n=e.target;this.setState({sumName:n.value})}},{key:"getSummonerRegionHandler",value:function(e){var n=e.target;pe.dispatch({type:"GET_SUM_REGION",payload:n.value})}},{key:"getSummonerInfoHandler",value:function(){this.state.sumName.match(/\S+/)&&(pe.dispatch({type:"GET_SUM_NAME",payload:this.state.sumName}),pe.dispatch((function(e,n){e(y());var a=n().summoner.sumName,t=n().summoner.sumRegion,o=n().summoner.sumLeague;d.a.get("https://".concat(t,".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(a,"?api_key=").concat(g)).then((function(n){var a=n.data,r={sumName:a.name,sumLevel:a.summonerLevel,sumIcon:"http://ddragon.leagueoflegends.com/cdn/9.24.2/img/profileicon/".concat(n.data.profileIconId,".png"),sumId:a.id,sumRegion:t,sumSplash:"",sumChamp:"",sumLeague:o};e(_(r))}),(function(n){var a,t;switch(console.error("[API Call] Error on get Summoner api call:",null===(a=n.response)||void 0===a?void 0:a.status),null===(t=n.response)||void 0===t?void 0:t.status){case 404:return e(O("Summoner not found."));default:return e(O("Unknown error."))}}))})))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:I.a.selector},o.a.createElement("label",{htmlFor:"sumname"},"Summoner Name:"),o.a.createElement("input",{type:"text",name:"sumname",id:"sumname",onChange:function(n){return e.getSummonerNameHandler(n)},onKeyDown:function(n){return 13!==n.keyCode||e.props.isLoading?null:e.getSummonerInfoHandler()}}),o.a.createElement("button",{disabled:this.props.isLoading,onClick:function(){return e.getSummonerInfoHandler()}},this.props.isLoading?"Loading...":"Check"),o.a.createElement("label",{htmlFor:"sumregion"},"Server:"),o.a.createElement("select",{name:"sumregion",id:"sumregion",onChange:function(n){return e.getSummonerRegionHandler(n)}},o.a.createElement("option",{value:"euw1"},"EUW"),o.a.createElement("option",{value:"na1"},"NA")))}}]),n}(o.a.Component),k=Object(S.b)((function(e){return{isLoading:e.isLoading}}))(j),C=a(30),R=a.n(C),A=function(){return t.createElement("div",{className:R.a.loader},t.createElement("div",null,t.createElement("div",null,t.createElement("div",null))))},w=a(18),x=a.n(w),M=a(31),U=a.n(M),T=a(32),D=a.n(T),F=a(33),G=a.n(F),H=a(34),P=a.n(H),q=a(35),B=a.n(q),W=a(36),z=a.n(W),K=a(37),J=a.n(K),X=a(38),Q=a.n(X),Z=a(39),$=a.n(Z),V=a(40),Y=a.n(V),ee=function(e){var n={unrankedLogo:x.a,ironLogo:U.a,bronzeLogo:D.a,silverLogo:G.a,goldLogo:P.a,platinumLogo:B.a,diamondLogo:z.a,masterLogo:J.a,grandmasterLogo:Q.a,challengerLogo:$.a};return o.a.createElement("div",{className:Y.a.league},o.a.createElement("span",null,e.title),o.a.createElement("img",{src:e.league?n[e.league.tier.toLowerCase()+"Logo"]:x.a,alt:"league emblem"}),o.a.createElement("span",null,e.league?"".concat(e.league.tier," ").concat(e.league.rank):"Unranked"),e.league?o.a.createElement("span",null,e.league.leaguePoints," LP ",e.league.wins,"W / ",e.league.losses,"L"):null)},ne=a(13),ae=a.n(ne),te=function(e){function n(){return Object(u.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e={backgroundImage:"url('".concat(this.props.sumSplash,"')")},n=this.props.sumLeague.find((function(e){return e.queueType===f})),a=this.props.sumLeague.find((function(e){return e.queueType===v}));return this.props.isLoading?o.a.createElement(A,null):this.props.error.isError?o.a.createElement("div",{className:ae.a.error},this.props.error.message):this.props.sumName?o.a.createElement("div",{className:ae.a.main},o.a.createElement("div",{className:ae.a.banner,style:e},o.a.createElement("img",{src:this.props.sumIcon,alt:"summoner icon"}),o.a.createElement("div",null,o.a.createElement("div",null,this.props.sumName," - Level ",this.props.sumLevel),this.props.sumChamp?o.a.createElement("div",null,this.props.sumChamp):null)),o.a.createElement("div",{className:ae.a.content},o.a.createElement(ee,{title:"Solo/Duo Rank",league:n}),o.a.createElement(ee,{title:"Flex Rank",league:a}))):null}}]),n}(o.a.Component),oe=Object(S.b)((function(e){return{sumName:e.summoner.sumName,sumIcon:e.summoner.sumIcon,sumLevel:e.summoner.sumLevel,sumRegion:e.summoner.sumRegion,sumSplash:e.summoner.sumSplash,sumChamp:e.summoner.sumChamp,sumLeague:e.summoner.sumLeague,isLoading:e.isLoading,error:e.error}}))(te),re=(a(70),function(e){function n(){return Object(u.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(l.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){pe.dispatch((function(e){d.a.get("http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json").then((function(n){var a=Object.values(n.data.data);e(E(a))}))}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"LoL Check"),o.a.createElement(k,null),o.a.createElement(oe,null))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(8),ue=a(41),me=a(42),ce=a(2),ie={summoner:{sumName:"",sumIcon:"",sumLevel:0,sumRegion:"euw1",sumId:"",sumSplash:"",sumLeague:[],sumChamp:""},champions:[],isLoading:!1,error:{isError:!1,message:""}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_SUM_NAME":return Object(ce.a)({},e,{summoner:Object(ce.a)({},e.summoner,{sumName:n.payload})});case"GET_SUM_REGION":return Object(ce.a)({},e,{summoner:Object(ce.a)({},e.summoner,{sumRegion:n.payload})});case"LOADING_SUM_INFO":return Object(ce.a)({},e,{isLoading:!0});case"SUCCESS_SUM_INFO":return Object(ce.a)({},e,{isLoading:!1,error:Object(ce.a)({},e.error,{isError:!1,message:""}),summoner:Object(ce.a)({},e.summoner,{sumName:n.payload.sumName,sumLevel:n.payload.sumLevel,sumIcon:n.payload.sumIcon,sumId:n.payload.sumId,sumSplash:n.payload.sumSplash,sumChamp:n.payload.sumChamp,sumLeague:n.payload.sumLeague})});case"ERROR_SUM_INFO":return Object(ce.a)({},e,{isLoading:!1,error:Object(ce.a)({},e.error,{isError:!0,message:n.payload})});case"SET_CHAMPION_DATA":return Object(ce.a)({},e,{champions:n.payload});default:return e}};a.d(n,"store",(function(){return pe}));var pe=Object(se.createStore)(le,Object(me.composeWithDevTools)(Object(se.applyMiddleware)((function(e){return function(e){return function(n){return e(n)}}}),ue.a)));s.a.render(o.a.createElement(S.a,{store:pe},o.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.47adf85d.chunk.js.map