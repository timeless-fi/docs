"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[4154],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return h}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return i?n.createElement(f,a(a({ref:t},l),{},{components:i})):n.createElement(f,a({ref:t},l))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3443:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=i(7462),o=i(3366),r=(i(7294),i(3905)),a=["components"],s={sidebar_position:8},p="Providing Liquidity",c={unversionedId:"concepts/lp",id:"concepts/lp",title:"Providing Liquidity",description:"Timeless uses Uniswap v3 as the underlying exchange, and liquidity providers provide xPYT-NYT liquidity.",source:"@site/docs/concepts/lp.md",sourceDirName:"concepts",slug:"/concepts/lp",permalink:"/docs/concepts/lp",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Swapping",permalink:"/docs/concepts/swapping"},next:{title:"Architecture",permalink:"/docs/smart-contracts/architecture"}},l={},u=[{value:"How to get xPYT &amp; NYT to use for providing liquidity",id:"how-to-get-xpyt--nyt-to-use-for-providing-liquidity",level:2},{value:"How to view the pools to provide liquidity for",id:"how-to-view-the-pools-to-provide-liquidity-for",level:2},{value:"How to decide the price range to use",id:"how-to-decide-the-price-range-to-use",level:2}],d={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"providing-liquidity"},"Providing Liquidity"),(0,r.kt)("p",null,"Timeless uses ",(0,r.kt)("a",{parentName:"p",href:"https://uniswap.org/"},"Uniswap v3")," as the underlying exchange, and liquidity providers provide xPYT-NYT liquidity."),(0,r.kt)("h2",{id:"how-to-get-xpyt--nyt-to-use-for-providing-liquidity"},"How to get xPYT & NYT to use for providing liquidity"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/swap"},"Swap page")," on the Timeless website to buy the exact amount of xPYT & NYT you want."),(0,r.kt)("p",null,"Alternatively, use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/mint"},"Mint page")," on the Timeless website to mint xPYT & NYT directly."),(0,r.kt)("h2",{id:"how-to-view-the-pools-to-provide-liquidity-for"},"How to view the pools to provide liquidity for"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/pool"},"Pool page")," on the TImeless website to view the list of liquidity pools and provide liquidity."),(0,r.kt)("h2",{id:"how-to-decide-the-price-range-to-use"},"How to decide the price range to use"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example liquidity position",src:i(7810).Z,width:"929",height:"865"})),(0,r.kt)("p",null,"First of all, the price of 1 xPYT should always be at least 1 NYT, thus the lower price bound should be >=1 NYT. (To understand why, please read ",(0,r.kt)("a",{parentName:"p",href:"https://blog.timelessfi.com/posts/pyt-pricing/"},"this post"),")"),(0,r.kt)("p",null,"Secondly, the price of xPYT can theoretically go up to infinite NYT, but practically speaking something like 99 NYT should be large enough for the upper price bound. 1 PYT = 99 NYT corresponds to 1 PYT = 0.99 in terms of the underlying asset (e.g. USDC), which is very close to the upper limit of 1."),(0,r.kt)("p",null,"If you increased the upper limit to 999 NYT (a factor of 10.09x), then it corresponds to 1 PYT = 0.999 underlying, a mere 0.9% increase."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Due to the auto-compounding of xPYT, it's usually the case that 1 xPYT > 1 PYT. You can check the exact conversion rate on the ",(0,r.kt)("a",{parentName:"p",href:"https://timelessfi.com/swap"},"Swap page"),". You should apply this conversion rate in your calculations."),(0,r.kt)("p",{parentName:"div"},"For example, if the price range you're using is 1 NYT/xPYT \u27f7 99 NYT/xPYT, and 1 xPYT = 2 PYT, then the price range in PYT is (1/2) NYT/PYT \u27f7 (99/2) NYT/PYT, which is 0.5 NYT/PYT \u27f7 49.5 NYT/PYT."))))}h.isMDXComponent=!0},7810:function(e,t,i){t.Z=i.p+"assets/images/lp-example-9cf0f15b0be81526fccfd7616fbc716a.png"}}]);