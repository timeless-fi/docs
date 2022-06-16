"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},l="What is Timeless?",p={unversionedId:"intro",id:"intro",title:"What is Timeless?",description:"Timeless is a yield tokenization protocol where the yield tokens never expire.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Yield Tokenization",permalink:"/docs/concepts/yield-tokenization"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-is-timeless"},"What is Timeless?"),(0,i.kt)("p",null,"Timeless is a yield tokenization protocol where the yield tokens never expire."),(0,i.kt)("p",null,"Timeless splits user deposits into two types of yield tokens: ",(0,i.kt)("a",{parentName:"p",href:"concepts/pyt"},"Perpetual Yield Token (PYT)"),", whose holders receive the yield generated by the user deposits, and ",(0,i.kt)("a",{parentName:"p",href:"concepts/nyt"},"Negative Yield Token (NYT)"),", whose market price moves in the opposite direction as PYT."),(0,i.kt)("p",null,"Timeless enables the following use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yield boosting"),": Boost the yield you earn from any supported farm by 1x-2x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yield hedging"),": Decrease the volatility of the yield you earn"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yield speculation"),": Speculate on whether yield rates are going up or down")),(0,i.kt)("p",null,"Timeless is built on the Ethereum Virtual Machine (EVM) and deployed to EVM-compatible blockchains."),(0,i.kt)("p",null,"Timeless is ",(0,i.kt)("em",{parentName:"p"},"permissionless"),", meaning you do not need permission from anyone to use any part of Timeless."),(0,i.kt)("p",null,"Timeless is ",(0,i.kt)("em",{parentName:"p"},"immutable"),", meaning its business logic can never be arbitrarily modified even by the team."),(0,i.kt)("p",null,"Timeless is ",(0,i.kt)("em",{parentName:"p"},"composable"),", meaning it uses common standards (ERC20, ERC4626) and thus can fit into other protocols like Lego pieces."))}d.isMDXComponent=!0}}]);