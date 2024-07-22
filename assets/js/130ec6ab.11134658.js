"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[4954],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(i),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return i?r.createElement(m,a(a({ref:t},p),{},{components:i})):r.createElement(m,a({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},276:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=i(7462),n=(i(7294),i(3905));const o={title:"Overview",description:"Overview of all LDFs",hide_table_of_contents:!0,sidebar_position:1},a="Overview",c={unversionedId:"v2/technical/ldf/overview",id:"v2/technical/ldf/overview",title:"Overview",description:"Overview of all LDFs",source:"@site/docs/v2/technical/ldf/overview.md",sourceDirName:"v2/technical/ldf",slug:"/v2/technical/ldf/overview",permalink:"/docs/v2/technical/ldf/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",description:"Overview of all LDFs",hide_table_of_contents:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Uniswapper",permalink:"/docs/v2/technical/periphery/uniswapper"},next:{title:"ILiquidityDensityFunction",permalink:"/docs/v2/technical/ldf/ildf"}},l={},s=[],p={toc:s};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Liquidity density functions (LDFs)")," are smart contracts that specify how liquidity is distributed across rounded ticks (ricks) and how it changes over time. Each Bunni v2 pool specifies the LDF it will use at deploy time, and cannot be changed later on."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The two most basic LDFs are ",(0,n.kt)("inlineCode",{parentName:"li"},"UniformDistribution")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"GeometricDistribution"),", describing uniform distributions and geometric distributions over ricks."),(0,n.kt)("li",{parentName:"ul"},"Two ",(0,n.kt)("inlineCode",{parentName:"li"},"GeometricDistributions")," are juxtaposed to create the ",(0,n.kt)("inlineCode",{parentName:"li"},"DoubleGeometricDistribution"),", which is useful for concentrated/bid-ask distributions."),(0,n.kt)("li",{parentName:"ul"},"For volatiles pairs, ",(0,n.kt)("inlineCode",{parentName:"li"},"CarpetedGeometricDistribution")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"CarpetedDoubleGeometricDistribution"),' were created that have uniform "carpet" liquidity outside of their main distributions, which ensures the TWAP oracle never gets stuck during volatile market conditions.'),(0,n.kt)("li",{parentName:"ul"},"For stable pairs with an asymmetric risk profile (e.g. eETH/ETH), ",(0,n.kt)("inlineCode",{parentName:"li"},"BuyTheDipGeometricDistribution")," optimizes capital efficiency via an asymmetric liquidity distribution and offers protection against depeg events.")),(0,n.kt)("p",null,"Developers should see ",(0,n.kt)("a",{parentName:"p",href:"./ildf"},(0,n.kt)("inlineCode",{parentName:"a"},"ILiquidityDensityFunction"))," to learn how to interact with LDF contracts."))}u.isMDXComponent=!0}}]);