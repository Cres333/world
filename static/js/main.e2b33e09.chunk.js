(this.webpackJsonpworld=this.webpackJsonpworld||[]).push([[0],{160:function(e,t,r){},274:function(e,t,r){"use strict";r.r(t);var i=r(0),c=r.n(i),n=r(12),o=r.n(n),s=r(51),l=r(14),a=(r(160),r(74)),j=r(36),d=r(312),p=r(306),u=r(310),m=r(311),h=r(76),b=r(141),x=r.n(b),O={maps:{title:"JE\u7248 \u914d\u5e03\u30de\u30c3\u30d7\u4e00\u89a7",path:"/world"},color:{title:"\u30ab\u30e9\u30fc\u30c4\u30fc\u30eb",path:"/world/color"}},y=r(6),v=function(){var e,t,r=Object(i.useContext)(R),c=r.store,n=r.dispatch,o=null!==(e=null===O||void 0===O||null===(t=O[c.scene])||void 0===t?void 0:t.title)&&void 0!==e?e:"";return Object(y.jsx)(p.a,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(m.a,{style:{marginRight:8},onClick:function(){n({type:"menuToggle"})},children:Object(y.jsx)(x.a,{})}),Object(y.jsx)(h.a,{style:{marginRight:16},variant:"h6",color:"inherit",children:"Keiduki Minecraft World"}),Object(y.jsx)(h.a,{variant:"h6",color:"inherit",children:o})]})})},w=function(){return Object(y.jsx)(p.a,{position:"fixed",style:{top:"auto",bottom:0},children:Object(y.jsx)(h.a,{children:"Copyright \xa9 2021 Keiduki"})})},f=r(326),g=r(313),A=r(314),B=r(315),C=r(316),k=r(317),N=r(318),z=r(143),S=r.n(z),E=r(142),I=r.n(E),F=r(144),q=r.n(F),T=Object(d.a)((function(e){return{icon:{justifyContent:"flex-end"},item:{marginRight:8}}})),_=function(){var e=T(),t=Object(i.useContext)(R),r=t.store,c=t.dispatch,n=Object(i.useCallback)((function(){c({type:"menuToggle"})}),[c]);return Object(y.jsxs)(f.a,{open:r.menu,children:[Object(y.jsxs)(m.a,{className:e.icon,onClick:n,children:[Object(y.jsx)(h.a,{children:"Menu"}),Object(y.jsx)(I.a,{})]}),Object(y.jsx)(g.a,{}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(B.a,{component:"div",children:"Information"}),Object(y.jsxs)(C.a,{button:!0,component:s.b,to:O.maps.path,replace:!0,onClick:n,children:[Object(y.jsx)(k.a,{children:Object(y.jsx)(S.a,{})}),Object(y.jsx)(N.a,{primary:O.maps.title})]})]}),Object(y.jsx)(g.a,{}),Object(y.jsxs)(A.a,{children:[Object(y.jsx)(B.a,{component:"div",children:"Tools"}),Object(y.jsxs)(C.a,{button:!0,component:s.b,to:O.color.path,replace:!0,onClick:n,children:[Object(y.jsx)(k.a,{children:Object(y.jsx)(q.a,{})}),Object(y.jsx)(N.a,{primary:O.color.title})]})]})]})},R=c.a.createContext(),P=Object(d.a)((function(e){return{root:{flexDirection:"column",justifyContent:"center",alignItems:"center",width:"95%",textAlign:"center",paddingTop:100,paddingBottom:50},container:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}})),W={menu:!1,scene:""},Z=function(e,t){switch(t.type){case"menuToggle":return Object(j.a)(Object(j.a)({},e),{},{menu:!e.menu});case"scene":return Object(j.a)(Object(j.a)({},e),{},{scene:t.payload});default:return e}},J=function(e){var t=e.children,r=P(),c=Object(i.useReducer)(Z,W),n=Object(a.a)(c,2),o=n[0],s=n[1];return Object(y.jsx)(R.Provider,{value:{store:o,dispatch:s},children:Object(y.jsxs)("div",{className:r.root,children:[Object(y.jsx)(v,{}),Object(y.jsx)(_,{}),Object(y.jsx)("div",{className:r.container,children:t}),Object(y.jsx)(w,{})]})})},M=r(319),V=r(327),D=r(320),G=r(321),H=r(322),K=r(323),U=[{title:"\u5f85\u30c1\u5de5\u5834",version:"1.16.5",junre:"\u8b0e\u89e3\u304d\u30fb\u8131\u51fa",player:"1\u4eba\u5c02\u7528",time:"1\u6642\u9593",description:"\u6c17\u304c\u3064\u3044\u305f\u3089\u6abb\u306e\u4e2d\u3002\u3053\u306e\u307e\u307e\u3067\u306f\u6eb6\u5ca9\u306b\u771f\u3063\u9006\u3055\u307e\u306b\u843d\u3061\u3066\u3044\u3063\u3066\u3057\u307e\u3046\uff01\u305d\u3053\u306e\u3042\u306a\u305f\uff01\u79c1\u3092\u52a9\u3051\u3066\uff01",url:"https://www.dropbox.com/s/5vj1j1qlxm7sxzq/%E5%BE%85%E3%83%81%E5%B7%A5%E5%A0%B4_1.07.zip?dl=1",first:!0},{title:"\u30de\u30a4\u30af\u30e9\u30b9\u30dd\u30fc\u30c4\u30d5\u30a7\u30b9",version:"1.16.x",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"1\uff5e32\u4eba",time:"-",description:"\u30de\u30a4\u30af\u30e9\u306e\u4e16\u754c\u3067\u30c6\u30c3\u30da\u30f3\u3092\u7372\u308c\uff01",url:"https://ux.getuploader.com/je_map/download/7",popular:!0},{title:"\u602a\u76d71911",version:"1.15.2",junre:"\u30b9\u30c6\u30eb\u30b9\u30a2\u30af\u30b7\u30e7\u30f3RPG",player:"1\u4eba\u5c02\u7528",time:"1\u6642\u9593",description:"\u540d\u753b\u300c\u30e2\u30ca\u30fb\u30ea\u30b6\u300d\u3092\u30eb\u30fc\u30f4\u30eb\u7f8e\u8853\u9928\u304b\u3089\u76d7\u307f\u51fa\u305b\uff01",url:"https://ux.getuploader.com/je_map/download/3"},{title:"\u5efa\u7bc9\u4f1d\u8a00\u30b2\u30fc\u30e0 / Builders \u2162",version:"1.14.4",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"3\uff5e12\u4eba",time:"-",description:"\u307f\u3093\u306a\u306b\u4f1d\u308f\u308b\u3088\u3046\u306b\u5efa\u7bc9\u3057\u3066\u3001\u9811\u5f35\u3063\u3066\u4f55\u304c\u4f5c\u3089\u308c\u305f\u306e\u304b\u5bdf\u3057\u3088\u3046\uff01(\u7b2c\u4e09\u5f3e)",url:"https://www.dropbox.com/s/obuz3a7qwzxfpi2/Builders_III_ver1.11.zip?dl=1",popular:!0},{title:"\u5b78\u5e7d\u8b5a",version:"1.14.4",junre:"\u30db\u30e9\u30fc",player:"2\u4eba\u5c02\u7528",time:"1.5\u6642\u9593",description:"\u4e0d\u601d\u8b70\u306a\u5c0f\u8aac\u306e\u771f\u5b9f\u3092\u8abf\u3079\u306b\u3001\u5ec3\u308c\u305f\u6821\u820e\u3078\u4e8c\u4eba\u3067\u6311\u3080\uff01",url:"https://www.dropbox.com/s/9lt6vcclnavl39x/Gakuyuutan_ver1.12.zip?dl=1"},{title:"\u602a\u76d7V",version:"1.12.1",junre:"\u30b9\u30c6\u30eb\u30b9\u30a2\u30af\u30b7\u30e7\u30f3RPG",player:"1\u4eba\u5c02\u7528",time:"1.5\u6642\u9593",description:"\u6700\u65b0\u92ed\u306e\u6a5f\u5668\u3067\u76e3\u8996\u3055\u308c\u305f\u9280\u884c\u304b\u3089\u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u3092\u76d7\u307f\u51fa\u305b\uff01",url:"https://www.dropbox.com/s/0paskd61h5jzekc/%E6%80%AA%E7%9B%97V.zip?dl=1"},{title:"\u5c0f\u3055\u306a\u7d75\u672c\u306e\u540d\u3082\u7121\u304d\u4e16\u754c",version:"1.11.2",junre:"\u8b0e\u89e3\u304d",player:"1\uff5e3\u4eba",time:"1\u6642\u9593",description:"\u5fd8\u308c\u53bb\u3089\u308c\u305f\u7d75\u672c\u306e\u5185\u5bb9\u3092\u601d\u3044\u51fa\u3059\u65c5\u306b\u51fa\u308b\u3001\u307b\u306e\u307c\u306e\u521d\u5fc3\u8005\u5411\u3051\u30de\u30c3\u30d7",url:"https://www.dropbox.com/sh/1z1tg0gzxmm69vg/AAA0DPJ5HgjX7M5qThFSWcdxa?dl=1",first:!0},{title:"\u5efa\u7bc9\u4f1d\u8a00\u30b2\u30fc\u30e0 / Builders-Ex",version:"1.11.x\uff5e1.12.x",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"3\uff5e12\u4eba",time:"-",description:"\u307f\u3093\u306a\u306b\u4f1d\u308f\u308b\u3088\u3046\u306b\u5efa\u7bc9\u3057\u3066\u3001\u9811\u5f35\u3063\u3066\u4f55\u304c\u4f5c\u3089\u308c\u305f\u306e\u304b\u5bdf\u3057\u3088\u3046\uff01(\u7b2c\u4e8c\u5f3e)",url:"http://world-minecraft.com/archives/54084394.html"},{title:"\u30b5\u30f3\u30bf\u304c\u304f\u308b\u307e\u3067",version:"1.10.2",junre:"\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc",player:"1\u4eba\u5c02\u7528",time:"2.5\u6642\u9593",description:"\u4eca\u65e5\u306f\u30af\u30ea\u30b9\u30de\u30b9\u30a4\u30f4\u3002\u30b5\u30f3\u30bf\u3055\u3093\u306b\u30d7\u30ec\u30bc\u30f3\u30c8\u3092\u8cb0\u3046\u305f\u3081\u306b\u3001\u8857\u306e\u4eba\u9054\u306e\u304a\u624b\u4f1d\u3044\u3092\u3057\u3088\u3046\uff01",url:"http://world-minecraft.com/archives/88908544.html"},{title:"\u56da\u308f\u308c\u306e\u5c55\u89a7\u4f1a",version:"1.10.2",junre:"\u30df\u30b9\u30c6\u30ea\u30fc\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc",player:"1\u4eba\u5c02\u7528",time:"14\u6642\u9593",description:"\u773c\u304c\u899a\u3081\u305f\u3089\u7f8e\u8853\u9928\u3060\u3063\u305f\u3002\u3053\u3053\u304b\u3089\u51fa\u308b\u306b\u306f\u3069\u3046\u3059\u308c\u3070\uff1f\u2026",url:"http://world-minecraft.com/archives/511975849.html"},{title:"\u30de\u30a4\u30af\u30e9\u9678\u4e0a",version:"1.8.x",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"1\uff5e64\u4eba",time:"-",description:"\u30de\u30a4\u30af\u30e9\u306e\u4e16\u754c\u3067\u9678\u4e0a\u7af6\u6280\u3067\u30c6\u30c3\u30da\u30f3\u3092\u7372\u308c\uff01",url:"https://www.dropbox.com/s/u94mj2vm0pzgq7c/MinecraftAthleticSports_ver1.01.zip?dl=1"},{title:"\u77e5\u6075\u306e\u5199\u3057\u93e1",version:"1.8.7",junre:"\u8b0e\u89e3\u304d",player:"2\u4eba\u5c02\u7528",time:"5\u6642\u9593",description:"\u4e8c\u4eba\u3067\u77e5\u6075\u3092\u51fa\u3057\u5408\u3044\u3001\u7269\u304c\u5f90\u3005\u306b\u5897\u3048\u3066\u3044\u304f\u90e8\u5c4b\u304b\u3089\u8131\u51fa\u3059\u308b\u30de\u30c3\u30d7",url:"https://www.dropbox.com/sh/j5eh6itnzvjlg2l/AACZhL6WBy55mYxKZZ8Lg4WXa?dl=1"},{title:"\u30b2\u30fc\u30e0\u30b7\u30a2\u30bf\u30fc",version:"1.8.x",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"2\uff5e60\u4eba",time:"-",description:"\u30b7\u30f3\u30d7\u30eb\u306a\u30df\u30cb\u30b2\u30fc\u30e0\u96c6\n(\u30d0\u30b0\u591a\u3081\u306e\u305f\u3081\u6ce8\u610f)",url:"https://www.dropbox.com/sh/egok6jgl3ck0e7t/AABhoiQ_Wn9TYOf9Llji0PGZa?dl=1",bug:!0},{title:"\u5c0f\u5b66\u6821\u304b\u3089\u306e\u8131\u51fa",version:"1.8.4",junre:"\u8b0e\u89e3\u304d\u30fb\u8131\u51fa",player:"1\uff5e81\u4eba",time:"1\u6642\u9593",description:"\u5c0f\u5b66\u6821\u306e\u69d8\u3005\u306a\u5834\u6240\u306b\u96a0\u3055\u308c\u305f\u8b0e\u3092\u89e3\u304d\u3001\u6388\u696d\u304c\u7d42\u308f\u308b\u524d\u306b\u8131\u51fa\u3059\u308b\u521d\u5fc3\u8005\u5411\u3051\u30de\u30c3\u30d7",url:"https://www.dropbox.com/sh/1r0fesnojxcnxl9/AAByOvUtwu7KIAk7v8gA3gVea?dl=1",first:!0},{title:"\u4e95\u6238\u306820\u306e\u6249",version:"1.8.3",junre:"\u8b0e\u89e3\u304d",player:"1\u4eba\u5c02\u7528",time:"2.5\u6642\u9593",description:"\u4e95\u6238\u306b\u843d\u3061\u3066\u6b7b\u306b\u305d\u3046\u306a\u4e2d\u3001\u751f\u304d\u308b\u610f\u5fd7\u3092\uff16\u3064\u306e\u529b\u3067\u793a\u3059\u306e\u3060\uff01",url:"https://www.dropbox.com/sh/jtlbqv3ggmgp05d/AACFtw4fYsEu1m0FxEjhWSqBa?dl=1"},{title:"\u5efa\u7bc9\u4f1d\u8a00\u30b2\u30fc\u30e0(\u65e7) / Builders",version:"1.8.x",junre:"\u30df\u30cb\u30b2\u30fc\u30e0",player:"3\uff5e12\u4eba",time:"-",description:"\u307f\u3093\u306a\u306b\u4f1d\u308f\u308b\u3088\u3046\u306b\u5efa\u7bc9\u3057\u3066\u3001\u9811\u5f35\u3063\u3066\u4f55\u304c\u4f5c\u3089\u308c\u305f\u306e\u304b\u5bdf\u3057\u3088\u3046\uff01",url:"https://www.dropbox.com/sh/qi1mv6dm9e9jgyp/AACTYS5HVxhFukB3rUeUVgWFa?dl=1"},{title:"\u7d46\u306e\u6abb",version:"1.8.x",junre:"\u8b0e\u89e3\u304d",player:"2\u4eba\u5c02\u7528",time:"3\u6642\u9593",description:"\u4e8c\u4eba\u306e\u7d46\u3092\u6df1\u3081\u3001\u6642\u306b\u306f\u50b7\u3064\u3051\u5408\u3044\u3001\u8b0e\u3092\u6b21\u3005\u3068\u89e3\u3044\u3066\u3044\u3051\uff01",url:"https://www.dropbox.com/sh/5kgfc4ipwmpi1yp/AABPgjZgFHg-2oSlfNou2B1ua?dl=1"},{title:"\u30d5\u30bf\u30ea\u30a2\u30bd\u30d3",version:"1.8.1",junre:"\u30db\u30e9\u30fc",player:"1\u4eba\u5c02\u7528",time:"2\u6642\u9593",description:"\u81ea\u5206\u306e\u904e\u53bb\u3092\u77e5\u308b\u305f\u3081\u306b\u3001\u4e45\u3005\u306b\u5b9f\u5bb6\u306b\u3084\u3063\u3066\u304d\u305f\u3002\u3053\u3053\u306b\u4f55\u304b\u304c\u3042\u308b\u304b\u3082\u3057\u308c\u306a\u3044",url:"https://www.dropbox.com/sh/41z2dgknwh6gyu7/AAAff6oy9at-eufMtsisusIqa?dl=1"},{title:"Answers 8",version:"1.8",junre:"\u8b0e\u89e3\u304d",player:"1\uff5e4\u4eba",time:"3\u6642\u9593",description:"\u69d8\u3005\u306a\u304a\u984c\u306b\u5bfe\u3057\u3066\u3001\uff18\u3064\u306e\u8b0e\u3092\u89e3\u3051\uff01(\u30d0\u30b0\u591a\u3081\u306e\u305f\u3081\u6ce8\u610f)",url:"https://www.dropbox.com/sh/nfqk0hbw9v99wtd/AABqU_PB1NXH_O1XcNIyQZJ_a?dl=1",bug:!0},{title:"\u8131\u51fa\u8ff7\u5bae",version:"1.4.x\uff5e1.6.2",junre:"\u8b0e\u89e3\u304d",player:"2\u4eba\u5c02\u7528",time:"3\u6642\u9593",description:"\u4e8c\u4eba\u3067\u5354\u529b\u3057\u3066\u4e38\u77f3\u306b\u56f2\u307e\u308c\u305f\u8ff7\u5bae\u304b\u3089\u8131\u51fa\u305b\u3088\uff01",url:"https://www.dropbox.com/sh/sz1k40wq8gmm8ll/AABB5BuT334dJVyZy9BRbBC3a?dl=1"}],X=Object(d.a)({card:{width:300,height:200,backgroundColor:"#ccddff"},version:{fontSize:14},title:{marginTop:4,marginBottom:8,fontSize:22},info:{fontSize:14,textAlign:"left"},description:{marginTop:8,textAlign:"left"},chip:{marginRight:4}}),Y=c.a.memo((function(e){var t=Object(i.useCallback)((function(){window.open(e.url)}),[e.url]);return Object(y.jsxs)(M.a,{item:!0,children:[Object(y.jsx)(V.a,{className:e.styles.chip,label:"\u30d0\u30fc\u30b8\u30e7\u30f3: ".concat(e.version),color:"primary"}),(null===e||void 0===e?void 0:e.first)&&Object(y.jsx)(V.a,{className:e.styles.chip,label:"\u521d\u5fc3\u8005\u5411\u3051",color:"secondary"}),(null===e||void 0===e?void 0:e.popular)&&Object(y.jsx)(V.a,{className:e.styles.chip,label:"\u5927\u4eba\u6c17\u4f01\u753b",color:"secondary"}),(null===e||void 0===e?void 0:e.bug)&&Object(y.jsx)(V.a,{className:e.styles.chip,label:"\u30d0\u30b0\u591a\u3081"}),Object(y.jsxs)(D.a,{children:[Object(y.jsxs)(G.a,{className:e.styles.card,children:[Object(y.jsx)(h.a,{className:e.styles.title,children:e.title}),Object(y.jsx)(h.a,{className:e.styles.info,color:"textSecondary",gutterBottom:!0,children:"- \u30b8\u30e3\u30f3\u30eb: "+e.junre}),Object(y.jsx)(h.a,{className:e.styles.info,color:"textSecondary",gutterBottom:!0,children:"- \u30d7\u30ec\u30a4\u4eba\u6570: "+e.player}),Object(y.jsx)(h.a,{className:e.styles.info,color:"textSecondary",gutterBottom:!0,children:"- \u63a8\u5b9a\u30d7\u30ec\u30a4\u6642\u9593: "+e.time}),Object(y.jsx)(h.a,{className:e.styles.description,children:e.description})]}),Object(y.jsx)(H.a,{children:Object(y.jsx)(K.a,{size:"small",color:"primary",onClick:t,children:"\u5225\u30b5\u30a4\u30c8\u3067\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]})]},"card-".concat(e.index))})),L=function(){var e=X(),t=Object(i.useContext)(R).dispatch;Object(i.useEffect)((function(){t({type:"scene",payload:"maps"})}),[t]);var r=U.map((function(t,r){return Object(y.jsx)(Y,Object(j.a)(Object(j.a)({},t),{},{index:r,styles:e}))}));return Object(y.jsx)(M.a,{container:!0,spacing:2,direction:"row",justifyContent:"center",alignItems:"center",children:r})},Q=r(149),$=r(324),ee=r(150),te=Object(d.a)({root:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},field:{margin:16}}),re=function(){var e=te(),t=Object(i.useContext)(R).dispatch,r=Object(i.useState)("#FFFFFF"),c=Object(a.a)(r,2),n=c[0],o=c[1],s=parseInt(n.replace("#",""),16);Object(i.useEffect)((function(){t({type:"scene",payload:"color"})}),[t]);var l=Object(i.useCallback)((function(e){o(e.hex)}),[]),j=Object(i.useCallback)((function(e){var t=parseInt(e.target.value,10);o("#"+(0<=t&&t<=16777215?t:0).toString(16).padStart(6,"0"))}),[]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(h.a,{variant:"h6",color:"textSecondary",children:"\u30d0\u30a4\u30aa\u30fc\u30e0\u306e\u8272\u306b\u5909\u63db\u3057\u3066\u304f\u308c\u308b\u3084\u3064(\u9069\u5f53\u7248)"}),Object(y.jsx)($.a,{className:e.field,label:"Biome Color",variant:"filled",value:s,onChange:j}),Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(Q.a,{color:n,onChange:l}),Object(y.jsx)(ee.a,{elevation:3,style:{margin:8,width:256,height:256,backgroundColor:n}})]})]})},ie=function(){return Object(y.jsx)(s.a,{children:Object(y.jsx)(J,{children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:O.maps.path,component:L}),Object(y.jsx)(l.a,{exact:!0,path:O.color.path,component:re})]})})})};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("body",{className:"App-body",children:Object(y.jsx)(ie,{})})})}),document.getElementById("app"))}},[[274,1,2]]]);
//# sourceMappingURL=main.e2b33e09.chunk.js.map