"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[8563],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},s="Yield Hedging",c={unversionedId:"concepts/yield-hedging",id:"concepts/yield-hedging",title:"Yield Hedging",description:"Yield hedging refers to the strategy where:",source:"@site/docs/concepts/yield-hedging.md",sourceDirName:"concepts",slug:"/concepts/yield-hedging",permalink:"/docs/concepts/yield-hedging",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Yield Boosting",permalink:"/docs/concepts/yield-boosting"},next:{title:"Yield Speculation",permalink:"/docs/concepts/yield-speculation"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"yield-hedging"},"Yield Hedging"),(0,i.kt)("p",null,"Yield hedging refers to the strategy where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Part of your portfolio is earning yield directly, from platforms such as ",(0,i.kt)("a",{parentName:"li",href:"https://aave.com"},"Aave")),(0,i.kt)("li",{parentName:"ul"},"You buy some ",(0,i.kt)("a",{parentName:"li",href:"./nyt"},"NYT")," corresponding to the same yield source")),(0,i.kt)("p",null,"Because the price of NYT moves in the opposite direction as the yield rate,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the yield rate goes down, your NYT goes up in price, offsetting the rate decrease"),(0,i.kt)("li",{parentName:"ul"},"When the yield rate goes up, your NYT goes down in price, offsetting the rate increase")),(0,i.kt)("p",null,"In short, ",(0,i.kt)("strong",{parentName:"p"},"holding NYT as part of your portfolio decreases the volatility of the yield rate you earn in both directions"),"."),(0,i.kt)("p",null,"However, it's important to note that the price of NYT moves more when the yield rate goes down than when it goes up (see ",(0,i.kt)("a",{parentName:"p",href:"https://blog.timelessfi.com/posts/pyt-pricing/#observations"},"this post"),"), meaning the benefit of yield hedging outweights the downside risks."),(0,i.kt)("p",null,"Another way to do yield hedging is by simply holding a portfolio of PYT & NYT, with more NYT than PYT. The PYT combines with an equal amount of NYT to be equivalent to directly depositing into the underlying yield source, and the remaining NYT decreases the yield volatility. By adjusting the PYT:NYT ratio, you can adjust how much you want to decrease the yield volatility."))}f.isMDXComponent=!0}}]);