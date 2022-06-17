"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[165],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s="Introduction",p={unversionedId:"smart-contracts/xpyt/intro",id:"smart-contracts/xpyt/intro",title:"Introduction",description:"GitHub repo: link",source:"@site/docs/smart-contracts/xpyt/intro.md",sourceDirName:"smart-contracts/xpyt",slug:"/smart-contracts/xpyt/intro",permalink:"/docs/smart-contracts/xpyt/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"UniswapV3Swapper",permalink:"/docs/smart-contracts/swapper/UniswapV3Swapper"},next:{title:"UniswapV3xPYT",permalink:"/docs/smart-contracts/xpyt/UniswapV3xPYT"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"GitHub repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/timeless-fi/xpyt"},"link")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./xpyt-contract"},"xPYT")," is an auto-compounding vault that compounds the yield earned by the PYT held by the vault (paid in the underlying asset) into more PYT."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"xPYT")," is an abstract contract, and each implementation supports an underlying exchange protocol. Currently, only ",(0,o.kt)("a",{parentName:"p",href:"./UniswapV3xPYT"},"UniswapV3xPYT")," is implemented."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"xPYT")," is permissionlessly deployed & managed. Permissionless management means anyone can call ",(0,o.kt)("a",{parentName:"p",href:"./xPYT-Contract#pound-1"},(0,o.kt)("inlineCode",{parentName:"a"},"pound()"))," to trigger the yield compounding, and the caller will receive part of the compounded amount as reward. This decentralizes xPYT compounding, and practically this means MEV bots will handle the auto-compounding."),(0,o.kt)("p",null,"Permissionless management is possible because each ",(0,o.kt)("inlineCode",{parentName:"p"},"xPYT")," vault uses a TWAP oracle as a benchmark for what is a fair price at which to compound its yield, and if the compounder tries to sandwich the swap made by xPYT, the swap will simply revert. Since we're currently using Uniswap v3 as the underlying exchange, the TWAP oracle is built in, so we simply query it."))}d.isMDXComponent=!0}}]);