"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[8219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},i="Compounded Perpetual Yield Token (xPYT)",c={unversionedId:"concepts/xpyt",id:"concepts/xpyt",title:"Compounded Perpetual Yield Token (xPYT)",description:"Intro",source:"@site/docs/concepts/xpyt.md",sourceDirName:"concepts",slug:"/concepts/xpyt",permalink:"/docs/concepts/xpyt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Negative Yield Token (NYT)",permalink:"/docs/concepts/nyt"},next:{title:"Yield Boosting",permalink:"/docs/concepts/yield-boosting"}},s={},l=[{value:"Intro",id:"intro",level:2},{value:"Why?",id:"why",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compounded-perpetual-yield-token-xpyt"},"Compounded Perpetual Yield Token (xPYT)"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"xPYTs are auto-compounding vaults that compound the yield generated by PYTs (which is paid in the underlying asset) into more PYTs."),(0,o.kt)("p",null,"xPYTs are permissionlessly managed, meaning anyone can trigger the auto-compounding and earn a fee for doing so. In practice, this means xPYTs rely on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm"},"MEV bots")," to handle the auto-compounding. Thus, xPYTs do not rely on any centralized infrastructure for auto-compounding, it is done in the most decentralized way."),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"There are three reasons why xPYT was introduced:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Composability:")," PYT attributes accrued yield to the current holder, and the yield stays with the holder even when the PYT is transferred. This means if PYT is used in another protocol that's not aware of Timeless (e.g. Uniswap), the yield accrued to their smart contracts may be locked forever. xPYT abstracts away the yield claiming, and thus can be used in any another protocol without needing to worry about the accrued yield being stuck."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Efficiency:")," Spreading the cost of compounding yield into PYT across all xPYT holders means the cost to each holder is much less."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Simplicity:")," The experience of holding xPYT is much simpler than having to regularly claim the accrued yield.")))}d.isMDXComponent=!0}}]);