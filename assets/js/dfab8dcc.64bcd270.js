"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[4159],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,d=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=o(n),k=i,c=s["".concat(d,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,r(r({ref:e},p),{},{components:n})):a.createElement(c,r({ref:e},p))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,r=new Array(l);r[0]=s;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:i,r[1]=u;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(7462),i=(n(7294),n(3905));const l={title:"ILiquidityDensityFunction",hide_table_of_contents:!1,sidebar_position:2},r="ILiquidityDensityFunction",u={unversionedId:"v2/technical/ldf/ildf",id:"v2/technical/ldf/ildf",title:"ILiquidityDensityFunction",description:"ILiquidityDensityFunction is an interface for liquidity density functions (LDFs) that dictate how liquidity is distributed over a pool's rounded ticks. Each rounded tick is identified by its leftmost tick, which is a multiple of tickSpacing. The liquidity density of all rounded ticks should add up to 1, similar to probability density functions (PDFs). It enables arbitrary liquidity shapes, shifting liquidity across ticks, and switching from one liquidity shape to another.",source:"@site/docs/v2/technical/ldf/ildf.md",sourceDirName:"v2/technical/ldf",slug:"/v2/technical/ldf/ildf",permalink:"/docs/v2/technical/ldf/ildf",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"ILiquidityDensityFunction",hide_table_of_contents:!1,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/v2/technical/ldf/overview"},next:{title:"Parameter Formats",permalink:"/docs/v2/technical/ldf/params"}},d={},o=[{value:"Functions",id:"functions",level:2},{value:"query",id:"query",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"computeSwap",id:"computeswap",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values-1",level:4},{value:"isValidParams",id:"isvalidparams",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Return Value:",id:"return-value",level:4},{value:"cumulativeAmount0",id:"cumulativeamount0",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Return Value:",id:"return-value-1",level:4},{value:"cumulativeAmount1",id:"cumulativeamount1",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Return Value:",id:"return-value-2",level:4},{value:"Usage",id:"usage",level:2}],p={toc:o};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iliquiditydensityfunction"},"ILiquidityDensityFunction"),(0,i.kt)("p",null,"ILiquidityDensityFunction is an interface for liquidity density functions (LDFs) that dictate how liquidity is distributed over a pool's rounded ticks. Each rounded tick is identified by its leftmost tick, which is a multiple of ",(0,i.kt)("inlineCode",{parentName:"p"},"tickSpacing"),". The liquidity density of all rounded ticks should add up to 1, similar to probability density functions (PDFs). It enables arbitrary liquidity shapes, shifting liquidity across ticks, and switching from one liquidity shape to another."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"query"},"query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function query(\n    PoolKey calldata key,\n    int24 roundedTick,\n    int24 twapTick,\n    int24 spotPriceTick,\n    bytes32 ldfParams,\n    bytes32 ldfState\n) external view returns (\n    uint256 liquidityDensityX96,\n    uint256 cumulativeAmount0DensityX96,\n    uint256 cumulativeAmount1DensityX96,\n    bytes32 newLdfState,\n    bool shouldSurge\n)\n")),(0,i.kt)("p",null,"Queries the liquidity density function for the given pool and rounded tick."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"struct PoolKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the Uniswap v4 pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roundedTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The rounded tick to query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twapTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The TWAP tick. Is 0 if ",(0,i.kt)("inlineCode",{parentName:"td"},"twapSecondsAgo")," is 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spotPriceTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The spot price tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfParams")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameters for the liquidity density function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfState")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The current state of the liquidity density function")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"liquidityDensityX96")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The density of the rounded tick, scaled by Q96")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cumulativeAmount0DensityX96")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The cumulative token0 density in rounded ticks ","[roundedTick + tickSpacing, maxUsableTick]",", scaled by Q96")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cumulativeAmount1DensityX96")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The cumulative token1 density in rounded ticks ","[minUsableTick, roundedTick - tickSpacing]",", scaled by Q96")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"newLdfState")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The new state of the liquidity density function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"shouldSurge")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the pool should surge. Usually corresponds to whether the LDF has shifted / changed shape")))),(0,i.kt)("h3",{id:"computeswap"},"computeSwap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function computeSwap(\n    PoolKey calldata key,\n    uint256 inverseCumulativeAmountInput,\n    uint256 totalLiquidity,\n    bool zeroForOne,\n    bool exactIn,\n    int24 twapTick,\n    int24 spotPriceTick,\n    bytes32 ldfParams,\n    bytes32 ldfState\n) external view returns (\n    bool success,\n    int24 roundedTick,\n    uint256 cumulativeAmount,\n    uint256 swapLiquidity\n)\n")),(0,i.kt)("p",null,"Aggregates LDF queries used during a swap."),(0,i.kt)("p",null,"A Bunni swap uses the inverseCumulativeAmount function to compute the rounded tick for which the cumulativeAmount is the closest to ",(0,i.kt)("inlineCode",{parentName:"p"},"inverseCumulativeAmountInput")," and <= ",(0,i.kt)("inlineCode",{parentName:"p"},"inverseCumulativeAmountInput"),". This rounded tick is the starting point for swapping the remaining tokens, which is done via Uniswap math (not done in this function though). ",(0,i.kt)("inlineCode",{parentName:"p"},"cumulativeAmount")," is the closest to ",(0,i.kt)("inlineCode",{parentName:"p"},"inverseCumulativeAmountInput")," and <= ",(0,i.kt)("inlineCode",{parentName:"p"},"inverseCumulativeAmountInput"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"swapLiquidity")," is the liquidity used for the remainder swap."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"struct PoolKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the Uniswap v4 pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inverseCumulativeAmountInput")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The input to the inverseCumulativeAmount function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalLiquidity")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The total liquidity in the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zeroForOne")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the input token is token0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"exactIn")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether it's an exact input swap or an exact output swap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twapTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The TWAP tick. Is 0 if ",(0,i.kt)("inlineCode",{parentName:"td"},"twapSecondsAgo")," is 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spotPriceTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The spot price tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfParams")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameters for the liquidity density function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfState")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The current state of the liquidity density function")))),(0,i.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"success")),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the swap computation was successful")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roundedTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The rounded tick to start the remainder swap from")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cumulativeAmount")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The cumulative amount that's closest to ",(0,i.kt)("inlineCode",{parentName:"td"},"inverseCumulativeAmountInput")," and <= ",(0,i.kt)("inlineCode",{parentName:"td"},"inverseCumulativeAmountInput"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"swapLiquidity")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The liquidity used for the remainder swap")))),(0,i.kt)("h3",{id:"isvalidparams"},"isValidParams"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function isValidParams(\n    PoolKey calldata key,\n    uint24 twapSecondsAgo,\n    bytes32 ldfParams\n) external view returns (bool)\n")),(0,i.kt)("p",null,"Checks if the given LDF parameters are valid."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"struct PoolKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the Uniswap v4 pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twapSecondsAgo")),(0,i.kt)("td",{parentName:"tr",align:null},"uint24"),(0,i.kt)("td",{parentName:"tr",align:null},"The time window for the TWAP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfParams")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameters for the liquidity density function")))),(0,i.kt)("h4",{id:"return-value"},"Return Value:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the parameters are valid")))),(0,i.kt)("h3",{id:"cumulativeamount0"},"cumulativeAmount0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function cumulativeAmount0(\n    PoolKey calldata key,\n    int24 roundedTick,\n    uint256 totalLiquidity,\n    int24 twapTick,\n    int24 spotPriceTick,\n    bytes32 ldfParams,\n    bytes32 ldfState\n) external view returns (uint256)\n")),(0,i.kt)("p",null,"Computes the cumulative amount of token0 in the rounded ticks ","[roundedTick, maxUsableTick]","."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"struct PoolKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the Uniswap v4 pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roundedTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The rounded tick to query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalLiquidity")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The total liquidity in the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twapTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The TWAP tick. Is 0 if ",(0,i.kt)("inlineCode",{parentName:"td"},"twapSecondsAgo")," is 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spotPriceTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The spot price tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfParams")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameters for the liquidity density function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfState")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The current state of the liquidity density function")))),(0,i.kt)("h4",{id:"return-value-1"},"Return Value:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The cumulative amount of token0 in the rounded ticks ","[roundedTick, maxUsableTick]")))),(0,i.kt)("h3",{id:"cumulativeamount1"},"cumulativeAmount1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function cumulativeAmount1(\n    PoolKey calldata key,\n    int24 roundedTick,\n    uint256 totalLiquidity,\n    int24 twapTick,\n    int24 spotPriceTick,\n    bytes32 ldfParams,\n    bytes32 ldfState\n) external view returns (uint256)\n")),(0,i.kt)("p",null,"Computes the cumulative amount of token1 in the rounded ticks ","[minUsableTick, roundedTick]","."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"key")),(0,i.kt)("td",{parentName:"tr",align:null},"struct PoolKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The key of the Uniswap v4 pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roundedTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The rounded tick to query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalLiquidity")),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The total liquidity in the pool")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twapTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The TWAP tick. Is 0 if ",(0,i.kt)("inlineCode",{parentName:"td"},"twapSecondsAgo")," is 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"spotPriceTick")),(0,i.kt)("td",{parentName:"tr",align:null},"int24"),(0,i.kt)("td",{parentName:"tr",align:null},"The spot price tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfParams")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameters for the liquidity density function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ldfState")),(0,i.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,i.kt)("td",{parentName:"tr",align:null},"The current state of the liquidity density function")))),(0,i.kt)("h4",{id:"return-value-2"},"Return Value:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The cumulative amount of token1 in the rounded ticks ","[minUsableTick, roundedTick]")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The ILiquidityDensityFunction interface provides a standardized way to define and interact with liquidity density functions in the Bunni ecosystem. Here are some key points about its usage:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It allows for the creation of arbitrary liquidity shapes, enabling complex strategies for liquidity provision."),(0,i.kt)("li",{parentName:"ol"},"The interface supports shifting liquidity across ticks and switching between different liquidity shapes."),(0,i.kt)("li",{parentName:"ol"},"It provides functions for querying the liquidity density at specific ticks and computing cumulative amounts of tokens across tick ranges."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"computeSwap")," function is crucial for determining how a swap should be executed given the current liquidity distribution."),(0,i.kt)("li",{parentName:"ol"},"It uses a combination of parameters and state to allow for dynamic and stateful liquidity density functions.")),(0,i.kt)("p",null,"This interface is particularly useful for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implementing custom liquidity distribution strategies"),(0,i.kt)("li",{parentName:"ul"},"Integrating with Bunni's swap mechanism"),(0,i.kt)("li",{parentName:"ul"},"Analyzing the distribution of liquidity in a pool"),(0,i.kt)("li",{parentName:"ul"},"Creating advanced automated market-making strategies")),(0,i.kt)("p",null,"Developers implementing this interface should ensure that their implementation adheres to the expected behavior, particularly in terms of normalization (the sum of liquidity densities across all rounded ticks should equal 1) and the relationship between the query function and the cumulative amount functions."))}m.isMDXComponent=!0}}]);