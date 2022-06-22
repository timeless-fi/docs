"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[3907],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(y,s(s({ref:t},c),{},{components:n})):o.createElement(y,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:4},u="Yield Boosting",l={unversionedId:"concepts/yield-boosting",id:"concepts/yield-boosting",title:"Yield Boosting",description:"Yield boosting refers to the strategy where instead of depositing your funds into a farm (e.g. Yearn USDC vault), you use your funds to purchase the corresponding PYT on the market (e.g. Yearn USDC vault PYT).",source:"@site/docs/concepts/yield-boosting.md",sourceDirName:"concepts",slug:"/concepts/yield-boosting",permalink:"/docs/concepts/yield-boosting",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Compounded Perpetual Yield Token (xPYT)",permalink:"/docs/concepts/xpyt"},next:{title:"Yield Hedging",permalink:"/docs/concepts/yield-hedging"}},c={},p=[{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"How do you do it?",id:"how-do-you-do-it",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yield-boosting"},"Yield Boosting"),(0,i.kt)("p",null,"Yield boosting refers to the strategy where instead of depositing your funds into a farm (e.g. Yearn USDC vault), you use your funds to purchase the corresponding ",(0,i.kt)("a",{parentName:"p",href:"./pyt"},"PYT")," on the market (e.g. Yearn USDC vault PYT)."),(0,i.kt)("h2",{id:"pros"},"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Because PYT trades at a price lower than the underlying asset (see ",(0,i.kt)("a",{parentName:"li",href:"https://blog.timelessfi.com/posts/pyt-pricing/#observations"},"this post"),"), using the yield boosting strategy can give you a 1-2x multiplier on the yield you earn."),(0,i.kt)("li",{parentName:"ul"},"If the yield rate goes up, your portfolio goes up.")),(0,i.kt)("h2",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the yield rate goes down, your portfolio goes down. This is the main risk of yield boosting.")),(0,i.kt)("h2",{id:"how-do-you-do-it"},"How do you do it?"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://timelessfi.com/boost"},"Boost page")," of our website to start using yield boosting."))}f.isMDXComponent=!0}}]);