"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[1818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Deploying a gauge",l={unversionedId:"v1/guides/deploy-gauge",id:"v1/guides/deploy-gauge",title:"Deploying a gauge",description:"Deploying a Bunni gauge is permissionless. After a gauge is deployed, veLIT holders must approve a gauge via governance in order to enable distributing oLIT incentives to the gauge.",source:"@site/docs/v1/guides/deploy-gauge.md",sourceDirName:"v1/guides",slug:"/v1/guides/deploy-gauge",permalink:"/docs/v1/guides/deploy-gauge",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Providing Liquidity",permalink:"/docs/v1/guides/lp"},next:{title:"Killing an out-of-range gauge",permalink:"/docs/v1/guides/kill-gauge"}},p={},u=[{value:"Step 1: Add liquidity to desired pool &amp; range",id:"step-1-add-liquidity-to-desired-pool--range",level:2},{value:"Step 2: Deploy gauge contract",id:"step-2-deploy-gauge-contract",level:2}],s={toc:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-gauge"},"Deploying a gauge"),(0,r.kt)("p",null,"Deploying a Bunni ",(0,r.kt)("a",{parentName:"p",href:"../tokenomics/gauges"},"gauge")," is permissionless. After a gauge is deployed, ",(0,r.kt)("a",{parentName:"p",href:"../tokenomics/velit"},"veLIT")," holders must approve a gauge via governance in order to enable distributing oLIT incentives to the gauge."),(0,r.kt)("p",null,"The following are the steps for correctly deploying a gauge so that it can be approved by governance."),(0,r.kt)("h2",{id:"step-1-add-liquidity-to-desired-pool--range"},"Step 1: Add liquidity to desired pool & range"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7214).Z,width:"1261",height:"730"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://bunni.pro/pools"},"https://bunni.pro/pools")),(0,r.kt)("li",{parentName:"ol"},'Click "Add Pool"'),(0,r.kt)("li",{parentName:"ol"},"Select tokens and fee tier"),(0,r.kt)("li",{parentName:"ol"},"Select price range",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Keep in mind that Bunni does not support rebalancing, so you should be confident that the price won't go out of range any time soon. If the price does go out of range, your gauge will stop receiving incentives."))),(0,r.kt)("li",{parentName:"ol"},"Provide liquidity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The amount of liquidity can be small, e.g. $0.01")))),(0,r.kt)("h2",{id:"step-2-deploy-gauge-contract"},"Step 2: Deploy gauge contract"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7629).Z,width:"1246",height:"608"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://bunni.pro/pools"},"https://bunni.pro/pools")),(0,r.kt)("li",{parentName:"ol"},"Click the pool you want to deploy a gauge for"),(0,r.kt)("li",{parentName:"ol"},"Click the range you want to deploy a gauge for"),(0,r.kt)("li",{parentName:"ol"},'Go to the "Advanced" tab'),(0,r.kt)("li",{parentName:"ol"},"Click one of the deploy buttons",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploying a gauge with 2% emission cap can make it easier for you to convince governance to approve the gauge"))),(0,r.kt)("li",{parentName:"ol"},"Submit the transaction in your wallet")))}g.isMDXComponent=!0},7214:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-pool-c07ea4a6c51dbccb1435440f3a8cbd97.png"},7629:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploy-gauge-4a55d3204381326f04de6a0d4a49543d.png"}}]);