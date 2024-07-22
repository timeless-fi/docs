"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[6850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="Negative Yield Token (NYT)",l={unversionedId:"concepts/nyt",id:"concepts/nyt",title:"Negative Yield Token (NYT)",description:"Timeless negative yield token (NYT) is the byproduct of perpetual yield token (PYT). Whenever 1 PYT is minted, so is 1 NYT.",source:"@site/docs/concepts/nyt.md",sourceDirName:"concepts",slug:"/concepts/nyt",permalink:"/docs/concepts/nyt",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Perpetual Yield Token (PYT)",permalink:"/docs/concepts/pyt"},next:{title:"Compounded Perpetual Yield Token (xPYT)",permalink:"/docs/concepts/xpyt"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"negative-yield-token-nyt"},"Negative Yield Token (NYT)"),(0,o.kt)("p",null,"Timeless ",(0,o.kt)("strong",{parentName:"p"},"negative yield token (NYT)")," is the byproduct of ",(0,o.kt)("a",{parentName:"p",href:"./pyt"},"perpetual yield token (PYT)"),". Whenever 1 PYT is minted, so is 1 NYT."),(0,o.kt)("p",null,"NYT is used when getting back the underlying principal: burning 1 PYT and 1 NYT together gives you back 1 underlying asset."),(0,o.kt)("p",null,"NYT holders don't receive any of the yield generated by the underlying. NYT is useful because of the property that the price of 1 PYT and 1 NYT always add up to 1 in terms of the underlying asset, meaning the price of NYT always moves in the opposite direction as PYT, and thus in the opposite direction as the yield rate."),(0,o.kt)("p",null,"NYT is used for ",(0,o.kt)("a",{parentName:"p",href:"./yield-speculation"},"yield speculation"),", where you buy NYT to bet that the yield rate will go down in the future. It's also used for ",(0,o.kt)("a",{parentName:"p",href:"./yield-hedging"},"yield hedging"),", where you convert part of your portfolio into NYT to decrease the volatility of the yield you earn elsewhere."))}u.isMDXComponent=!0}}]);