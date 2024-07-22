"use strict";(self.webpackChunkbunni_docs=self.webpackChunkbunni_docs||[]).push([[531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7},o="am-AMM",l={unversionedId:"v2/concepts/amamm",id:"v2/concepts/amamm",title:"am-AMM",description:"The Auction-Managed Automated Market Maker (am-AMM) is a key feature of Bunni v2 that addresses two critical challenges in AMM design: reducing losses to informed orderflow and maximizing revenue from uninformed orderflow. This mechanism, based on the work of Adams et al., allows Bunni v2 to recapture MEV (Miner Extractable Value) and optimize swap fee revenue.",source:"@site/docs/v2/concepts/amamm.md",sourceDirName:"v2/concepts",slug:"/v2/concepts/amamm",permalink:"/docs/v2/concepts/amamm",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Rehypothecation",permalink:"/docs/v2/concepts/rehypothication"},next:{title:"Volatility-based Swap Fee",permalink:"/docs/v2/concepts/fees"}},s={},m=[{value:"Key Components",id:"key-components",level:2},{value:"How am-AMM Works",id:"how-am-amm-works",level:2},{value:"MEV Recapture",id:"mev-recapture",level:3},{value:"Swap Fee Optimization",id:"swap-fee-optimization",level:3},{value:"Withdrawal Delay",id:"withdrawal-delay",level:3},{value:"Benefits",id:"benefits",level:2},{value:"Considerations for LPs",id:"considerations-for-lps",level:2},{value:"Interaction with Other Bunni v2 Features",id:"interaction-with-other-bunni-v2-features",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"am-amm"},"am-AMM"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Auction-Managed Automated Market Maker (am-AMM)")," is a key feature of Bunni v2 that addresses two critical challenges in AMM design: reducing losses to informed orderflow and maximizing revenue from uninformed orderflow. This mechanism, based on the work of ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2403.03367"},"Adams et al."),", allows Bunni v2 to recapture MEV (Miner Extractable Value) and optimize swap fee revenue."),(0,r.kt)("h2",{id:"key-components"},"Key Components"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MEV Recapture"),": Enables Bunni v2 to recapture MEV by giving a privileged position to a manager selected via competitive auction.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Swap Fee Optimization"),": Allows the am-AMM manager to set and adjust swap fees to maximize revenue.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Withdrawal Delay"),": Implements a mechanism to prevent strategic liquidity withdrawals that could harm the am-AMM manager's income."))),(0,r.kt)("h2",{id:"how-am-amm-works"},"How am-AMM Works"),(0,r.kt)("h3",{id:"mev-recapture"},"MEV Recapture"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A competitive auction is held to select the am-AMM manager for a pool."),(0,r.kt)("li",{parentName:"ol"},"The winning manager gets a privileged position in capturing MEV from arbitrages and rebalancing swaps."),(0,r.kt)("li",{parentName:"ol"},"LPs indirectly receive the MEV via the auction proceeds.")),(0,r.kt)("h3",{id:"swap-fee-optimization"},"Swap Fee Optimization"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The am-AMM manager receives all swap fee revenue from the pool."),(0,r.kt)("li",{parentName:"ol"},"The manager has the ability to set and adjust the swap fee value."),(0,r.kt)("li",{parentName:"ol"},"Bunni v2 allows for directional swap fees, where fees can differ based on the swap direction.")),(0,r.kt)("h3",{id:"withdrawal-delay"},"Withdrawal Delay"),(0,r.kt)("p",null,"To prevent strategic withdrawals that could harm the am-AMM manager's income, Bunni v2 implements a withdrawal delay:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When an LP initiates a withdrawal, it enters a queue."),(0,r.kt)("li",{parentName:"ol"},"The withdrawal is executed after a short delay (a few blocks)."),(0,r.kt)("li",{parentName:"ol"},"This delay allows the am-AMM manager to monitor withdrawal transactions and execute necessary arbitrages.")),(0,r.kt)("h2",{id:"benefits"},"Benefits"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MEV Recapture"),": LPs benefit from MEV that would otherwise be captured by external arbitrageurs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optimized Fees"),": The am-AMM manager is incentivized to set optimal fees, maximizing revenue for both the manager and LPs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Flexible Fee Structure"),": The ability to set directional fees allows for more nuanced and efficient pricing.")),(0,r.kt)("h2",{id:"considerations-for-lps"},"Considerations for LPs"),(0,r.kt)("p",null,"While the am-AMM mechanism provides significant benefits, LPs should be aware of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The effectiveness of the am-AMM depends on the competitiveness of the manager auction."),(0,r.kt)("li",{parentName:"ol"},"There is a short withdrawal delay when removing liquidity from the pool."),(0,r.kt)("li",{parentName:"ol"},"The am-AMM manager has significant control over the pool's fee structure and MEV capture strategies.")),(0,r.kt)("h2",{id:"interaction-with-other-bunni-v2-features"},"Interaction with Other Bunni v2 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./surge"},(0,r.kt)("strong",{parentName:"a"},"Surge Fees")),": The am-AMM manager of a pool may enable or disable surge fees based on their strategy and market conditions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./rebalancing"},(0,r.kt)("strong",{parentName:"a"},"Autonomous Rebalancing")),": The am-AMM manager is automatically whitelisted to execute rebalance swaps for their pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./shapeshifting"},(0,r.kt)("strong",{parentName:"a"},"Shapeshifting")),": The am-AMM mechanism can help protect against MEV losses that might occur during shapeshifting operations.")),(0,r.kt)("p",null,"By implementing the am-AMM mechanism, Bunni v2 creates a more efficient and profitable environment for LPs, aligning incentives between the protocol, LPs, and arbitrageurs."))}c.isMDXComponent=!0}}]);