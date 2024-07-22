"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[5439],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(i),h=r,f=d["".concat(p,".").concat(h)]||d[h]||c[h]||n;return i?o.createElement(f,a(a({ref:t},u),{},{components:i})):o.createElement(f,a({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<n;l++)a[l]=i[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},2849:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=i(7462),r=(i(7294),i(3905));const n={sidebar_position:1},a="Providing Liquidity",s={unversionedId:"guides/lp",id:"guides/lp",title:"Providing Liquidity",description:"Timeless uses Uniswap v3 as the underlying exchange, and liquidity providers provide xPYT-NYT liquidity.",source:"@site/docs/guides/lp.md",sourceDirName:"guides",slug:"/guides/lp",permalink:"/docs/guides/lp",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Swapping",permalink:"/docs/concepts/swapping"},next:{title:"Creating Yield Tokens & Liquidity Pools",permalink:"/docs/guides/factory"}},p={},l=[{value:"How to get xPYT &amp; NYT to use for providing liquidity",id:"how-to-get-xpyt--nyt-to-use-for-providing-liquidity",level:2},{value:"How to view the pools to provide liquidity for",id:"how-to-view-the-pools-to-provide-liquidity-for",level:2},{value:"How to decide the price range to use",id:"how-to-decide-the-price-range-to-use",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"providing-liquidity"},"Providing Liquidity"),(0,r.kt)("p",null,"Timeless uses ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/"},"Uniswap v3")," as the underlying exchange, and liquidity providers provide xPYT-NYT liquidity."),(0,r.kt)("h2",{id:"how-to-get-xpyt--nyt-to-use-for-providing-liquidity"},"How to get xPYT & NYT to use for providing liquidity"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/swap"},"Swap page")," on the Timeless website to buy the exact amount of xPYT & NYT you want."),(0,r.kt)("p",null,"Alternatively, use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/mint"},"Mint page")," on the Timeless website to mint xPYT & NYT directly."),(0,r.kt)("h2",{id:"how-to-view-the-pools-to-provide-liquidity-for"},"How to view the pools to provide liquidity for"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/pool"},"Pool page")," on the TImeless website to view the list of liquidity pools and provide liquidity."),(0,r.kt)("h2",{id:"how-to-decide-the-price-range-to-use"},"How to decide the price range to use"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example liquidity position",src:i(4495).Z,width:"929",height:"865"})),(0,r.kt)("p",null,"First of all, the price of 1 xPYT should always be at least 1 NYT, thus the lower price bound should be >=1 NYT. (To understand why, please read ",(0,r.kt)("a",{parentName:"p",href:"../concepts/pyt"},"the PYT docs"),")"),(0,r.kt)("p",null,"Secondly, the price of xPYT can theoretically go up to infinite NYT, but practically speaking something like 99 NYT should be large enough for the upper price bound. 1 PYT = 99 NYT corresponds to 1 PYT = 0.99 in terms of the underlying asset (e.g. USDC), which is very close to the upper limit of 1."),(0,r.kt)("p",null,"If you increased the upper limit to 999 NYT (a factor of 10.09x), then it corresponds to 1 PYT = 0.999 underlying, a mere 0.9% increase."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Due to the auto-compounding of xPYT, it's usually the case that 1 xPYT > 1 PYT. You can check the exact conversion rate on the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/swap"},"Swap page"),". You should apply this conversion rate in your calculations."),(0,r.kt)("p",{parentName:"admonition"},"For example, if the price range you're using is 1 NYT/xPYT \u27f7 99 NYT/xPYT, and 1 xPYT = 2 PYT, then the price range in PYT is (1/2) NYT/PYT \u27f7 (99/2) NYT/PYT, which is 0.5 NYT/PYT \u27f7 49.5 NYT/PYT.")))}c.isMDXComponent=!0},4495:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/lp-example-9cf0f15b0be81526fccfd7616fbc716a.png"}}]);