"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[8389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Introduction",c={unversionedId:"smart-contracts/core/intro",id:"smart-contracts/core/intro",title:"Introduction",description:"GitHub repo: link",source:"@site/docs/smart-contracts/core/intro.md",sourceDirName:"smart-contracts/core",slug:"/smart-contracts/core/intro",permalink:"/docs/smart-contracts/core/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/smart-contracts/architecture"},next:{title:"Gate",permalink:"/docs/smart-contracts/core/Gate"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"GitHub repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timeless-fi/timeless"},"link")),(0,o.kt)("p",null,"These are the core smart contracts of Timeless, responsible for deploying/minting/burning PYT/NYT as well as accruing yield to PYT holders."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./gate"},"Gate")," is the main contract that users interact with. It is important to note that ",(0,o.kt)("inlineCode",{parentName:"p"},"Gate")," is an abstract contract, because we want to support different types of yield-earning protocols. Thus, we currently have two types of ",(0,o.kt)("inlineCode",{parentName:"p"},"Gate")," contracts deployed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/timeless-fi/timeless/blob/main/src/gates/YearnGate.sol"},"YearnGate"),": Supports ",(0,o.kt)("a",{parentName:"li",href:"https://yearn.finance"},"Yearn")," v2 vaults"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/timeless-fi/timeless/blob/main/src/gates/ERC4626Gate.sol"},"ERC4626Gate"),": Supports ",(0,o.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-4626"},"ERC4626")," vaults")),(0,o.kt)("p",null,"By developing & deploying new ",(0,o.kt)("inlineCode",{parentName:"p"},"Gate")," contracts, we can add support for more yield-earning protocols."),(0,o.kt)("p",null,"All of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gate")," contracts share the same ",(0,o.kt)("a",{parentName:"p",href:"./factory"},"Factory")," contract, which handles deploying PYT & NYT contracts as well as storing protocol fee information."))}u.isMDXComponent=!0}}]);