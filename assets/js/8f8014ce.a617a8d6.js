"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[2048],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),f=n,m=p["".concat(s,".").concat(f)]||p[f]||h[f]||i;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},497:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:2},a="oLIT",l={unversionedId:"v1/tokenomics/olit",id:"v1/tokenomics/olit",title:"oLIT",description:"oLIT is a call option token for LIT that lets its holder purchase LIT at a discount to the market price. Unlike regular options, oLIT does not expire.",source:"@site/docs/v1/tokenomics/olit.md",sourceDirName:"v1/tokenomics",slug:"/v1/tokenomics/olit",permalink:"/docs/v1/tokenomics/olit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LIT",permalink:"/docs/v1/tokenomics/lit"},next:{title:"veLIT",permalink:"/docs/v1/tokenomics/velit"}},s={},c=[{value:"How to get oLIT",id:"how-to-get-olit",level:2},{value:"How to use oLIT",id:"how-to-use-olit",level:2},{value:"Why oLIT?",id:"why-olit",level:2},{value:"Links",id:"links",level:2}],u={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"olit"},"oLIT"),(0,n.kt)("p",null,"oLIT is a call option token for LIT that lets its holder purchase LIT at a discount to the market price. Unlike regular options, oLIT does not expire."),(0,n.kt)("p",null,"Currently the discount is set to 50%, but the value can be changed by governance."),(0,n.kt)("h2",{id:"how-to-get-olit"},"How to get oLIT"),(0,n.kt)("p",null,"oLIT is given to Bunni liquidity providers as incentive. Provide liquidity on Bunni and stake in ",(0,n.kt)("a",{parentName:"p",href:"./gauges"},"gauges")," to receive oLIT incentives."),(0,n.kt)("h2",{id:"how-to-use-olit"},"How to use oLIT"),(0,n.kt)("p",null,"You can use oLIT to buy LIT at a discount. Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://bunni.pro/options"},"oLIT page")," on the Bunni website to do so."),(0,n.kt)("h2",{id:"why-olit"},"Why oLIT?"),(0,n.kt)("p",null,"Instead of using LIT as the reward token, Bunni uses call option tokens for LIT as the reward token. This has the benefit of enabling the protocol to accumulate a large cash reserve regardless of market conditions, as well as letting loyal holders buy LIT at a discount."),(0,n.kt)("p",null,"It\u2019s best to illustrate this mechanism with an example. Let\u2019s say the price of LIT is ","$","100, and there is a call option token oLIT that gives its holder a perpetual right to buy LIT at 90% of the market price. The protocol issues 1 oLIT to a farmer Alice, who immediately exercises the option to buy 1 LIT for ","$","90 and sell it on a DEX for ","$","100. The tally of gains & losses are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The protocol: -1 LIT, +$90"),(0,n.kt)("li",{parentName:"ul"},"The farmer Alice: +$10"),(0,n.kt)("li",{parentName:"ul"},"The DEX LPs: +1 LIT, -$100")),(0,n.kt)("p",null,"Compare this to regular liquidity mining where the farmer doesn't pay anything to the protocol:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The protocol: -1 LIT"),(0,n.kt)("li",{parentName:"ul"},"The farmer Alice: +$100"),(0,n.kt)("li",{parentName:"ul"},"The DEX LPs: +1 LIT, -$100")),(0,n.kt)("p",null,"We have the following observations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reallocation of cash"),": Using oLIT instead of LIT as the reward token effectively transfers cash gains from the farmers to the protocol, and the LPs for the token are not affected."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trading off incentivization efficiency for protocol cashflow"),": In our example, for each LIT token issued by the protocol, the farmer Alice only gets ","$","10 of rewards instead of ","$","100 in the case of regular liquidity mining, which is less efficient. The higher the discount is, the more efficient the incentivization is, but the less cash the protocol gets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Effectively a continuous token sale"),": Instead of giving away tokens for free in regular liquidity mining, we effectively turn incentivization into a continuous token sale at the current market price, which enables the protocol to potentially capture a lot more cash compared to a one-off token sale since the protocol would be selling tokens at a higher price when the market price goes up.")),(0,n.kt)("p",null,"Furthermore, when option reward tokens are used in ",(0,n.kt)("a",{parentName:"p",href:"https://blog.timelessfi.com/posts/foo/"},"FOO")," where the farmers are the same people as the token LPs, the tally becomes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The protocol: -1 LIT, +$90"),(0,n.kt)("li",{parentName:"ul"},"The farmer-LP: +1 LIT, -$90")),(0,n.kt)("p",null,"which means that as the farmers receive oLIT rewards, they get the right to buy tokens from the protocol at a discount and increase their ownership. Over time, the protocol ownership will be transferred away from holders who aren\u2019t providing liquidity and to the farmers who are providing liquidity, which optimizes the protocol ownership."),(0,n.kt)("p",null,"The tally also stays the same regardless of whether the farmer dumps the LIT gained from excercising the option on the market, since the farmer and the LP are one and the same. Because of this, we can assume that a lot of the farmers will not sell the LIT but lock it into vetoken and improve their yield."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/timeless-fi/options-token"},"Source code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/token/0x627fee87d0d9d2c55098a06ac805db8f98b158aa"},"Etherscan"))))}h.isMDXComponent=!0}}]);