"use strict";(self.webpackChunktimeless_docs=self.webpackChunktimeless_docs||[]).push([[4524],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,c=m["".concat(i,".").concat(k)]||m[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9168:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},o="Swapper",p={unversionedId:"smart-contracts/swapper/Swapper-Contract",id:"smart-contracts/swapper/Swapper-Contract",title:"Swapper",description:"GitHub: link",source:"@site/docs/smart-contracts/swapper/Swapper-Contract.md",sourceDirName:"smart-contracts/swapper",slug:"/smart-contracts/swapper/Swapper-Contract",permalink:"/docs/smart-contracts/swapper/Swapper-Contract",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/smart-contracts/swapper/intro"},next:{title:"UniswapV3Juggler",permalink:"/docs/smart-contracts/swapper/UniswapV3Juggler"}},i={},u=[{value:"Errors",id:"errors",level:2},{value:"Error_SameToken",id:"error_sametoken",level:3},{value:"Error_PastDeadline",id:"error_pastdeadline",level:3},{value:"Error_ZeroExSwapFailed",id:"error_zeroexswapfailed",level:3},{value:"Error_InsufficientOutput",id:"error_insufficientoutput",level:3},{value:"Error_ProtocolFeeRecipientIsZero",id:"error_protocolfeerecipientiszero",level:3},{value:"Events",id:"events",level:2},{value:"SetProtocolFee",id:"setprotocolfee",level:3},{value:"Structs",id:"structs",level:2},{value:"SwapArgs",id:"swapargs",level:3},{value:"ProtocolFeeInfo",id:"protocolfeeinfo",level:3},{value:"Immutable parameters",id:"immutable-parameters",level:2},{value:"zeroExProxy",id:"zeroexproxy",level:3},{value:"weth",id:"weth",level:3},{value:"State variables",id:"state-variables",level:2},{value:"protocolFeeInfo",id:"protocolfeeinfo-1",level:3},{value:"State-mutating functions",id:"state-mutating-functions",level:2},{value:"swapUnderlyingToNyt",id:"swapunderlyingtonyt",level:3},{value:"swapUnderlyingToXpyt",id:"swapunderlyingtoxpyt",level:3},{value:"swapNytToUnderlying",id:"swapnyttounderlying",level:3},{value:"swapXpytToUnderlying",id:"swapxpyttounderlying",level:3},{value:"doZeroExSwap",id:"dozeroexswap",level:3},{value:"wrapEthInput",id:"wrapethinput",level:3},{value:"Owner functions",id:"owner-functions",level:2},{value:"ownerSetProtocolFee",id:"ownersetprotocolfee",level:3}],s={toc:u};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"swapper"},"Swapper"),(0,r.kt)("p",null,"GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timeless-fi/swapper/blob/main/src/Swapper.sol"},"link")),(0,r.kt)("p",null,"Abstract contract for swapping between xPYTs/NYTs and their underlying asset by\nswapping via an external DEX and minting/burning xPYT/NYT."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Swapper supports two-hop swaps where one of the swaps is an 0x swap between two regular tokens,\nwhich enables swapping any supported token into any xPYT/NYT. Two-hop swaps are done by chaining\ntwo calls together via Multicall and setting the recipient of the first swap to the Swapper.")),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("h3",{id:"error_sametoken"},"Error_SameToken"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"error Error_SameToken()\n")),(0,r.kt)("h3",{id:"error_pastdeadline"},"Error_PastDeadline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"error Error_PastDeadline()\n")),(0,r.kt)("h3",{id:"error_zeroexswapfailed"},"Error_ZeroExSwapFailed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"error Error_ZeroExSwapFailed()\n")),(0,r.kt)("h3",{id:"error_insufficientoutput"},"Error_InsufficientOutput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"error Error_InsufficientOutput()\n")),(0,r.kt)("h3",{id:"error_protocolfeerecipientiszero"},"Error_ProtocolFeeRecipientIsZero"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"error Error_ProtocolFeeRecipientIsZero()\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"setprotocolfee"},"SetProtocolFee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event SetProtocolFee(struct Swapper.ProtocolFeeInfo protocolFeeInfo_)\n")),(0,r.kt)("h2",{id:"structs"},"Structs"),(0,r.kt)("h3",{id:"swapargs"},"SwapArgs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct SwapArgs {\n  contract Gate gate;\n  address vault;\n  contract ERC20 underlying;\n  contract ERC20 nyt;\n  contract ERC20 pyt;\n  contract IxPYT xPYT;\n  uint256 tokenAmountIn;\n  uint256 minAmountOut;\n  address recipient;\n  bool useSwapperBalance;\n  bool usePYT;\n  uint256 deadline;\n  bytes extraArgs;\n}\n")),(0,r.kt)("h3",{id:"protocolfeeinfo"},"ProtocolFeeInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct ProtocolFeeInfo {\n  uint8 fee;\n  address recipient;\n}\n")),(0,r.kt)("h2",{id:"immutable-parameters"},"Immutable parameters"),(0,r.kt)("h3",{id:"zeroexproxy"},"zeroExProxy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"address zeroExProxy\n")),(0,r.kt)("p",null,"The 0x proxy contract used for 0x swaps"),(0,r.kt)("h3",{id:"weth"},"weth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"contract WETH weth\n")),(0,r.kt)("p",null,"The Wrapped Ethereum contract"),(0,r.kt)("h2",{id:"state-variables"},"State variables"),(0,r.kt)("h3",{id:"protocolfeeinfo-1"},"protocolFeeInfo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"struct Swapper.ProtocolFeeInfo protocolFeeInfo\n")),(0,r.kt)("p",null,"The protocol fee and the fee recipient address."),(0,r.kt)("h2",{id:"state-mutating-functions"},"State-mutating functions"),(0,r.kt)("h3",{id:"swapunderlyingtonyt"},"swapUnderlyingToNyt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function swapUnderlyingToNyt(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)\n")),(0,r.kt)("p",null,"Swaps the underlying asset of an NYT into the NYT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"struct Swapper.SwapArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The input arguments (see SwapArgs definition)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token output")))),(0,r.kt)("h3",{id:"swapunderlyingtoxpyt"},"swapUnderlyingToXpyt"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function swapUnderlyingToXpyt(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)\n")),(0,r.kt)("p",null,"Swaps the underlying asset of an xPYT into the xPYT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"struct Swapper.SwapArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The input arguments (see SwapArgs definition)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token output")))),(0,r.kt)("h3",{id:"swapnyttounderlying"},"swapNytToUnderlying"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function swapNytToUnderlying(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)\n")),(0,r.kt)("p",null,"Swaps an NYT to its underlying asset"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"struct Swapper.SwapArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The input arguments (see SwapArgs definition)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token output")))),(0,r.kt)("h3",{id:"swapxpyttounderlying"},"swapXpytToUnderlying"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function swapXpytToUnderlying(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)\n")),(0,r.kt)("p",null,"Swaps an xPYT to its underlying asset"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"struct Swapper.SwapArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"The input arguments (see SwapArgs definition)")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token output")))),(0,r.kt)("h3",{id:"dozeroexswap"},"doZeroExSwap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function doZeroExSwap(contract ERC20 tokenIn, uint256 tokenAmountIn, contract ERC20 tokenOut, uint256 minAmountOut, address recipient, bool useSwapperBalance, bool requireApproval, uint256 deadline, bytes swapData) external virtual returns (uint256 tokenAmountOut)\n")),(0,r.kt)("p",null,"Swaps between two regular tokens using 0x."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Used in conjuction with the 0x API ",(0,r.kt)("a",{parentName:"em",href:"https://www.0x.org/docs/api"},"https://www.0x.org/docs/api"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,r.kt)("td",{parentName:"tr",align:null},"contract ERC20"),(0,r.kt)("td",{parentName:"tr",align:null},"The input token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountIn"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,r.kt)("td",{parentName:"tr",align:null},"contract ERC20"),(0,r.kt)("td",{parentName:"tr",align:null},"The output token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum acceptable token output amount, used for slippage checking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recipient"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The recipient of the token output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useSwapperBalance"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true to use the Swapper's token balance as token input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requireApproval"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true to approve tokenIn to zeroExProxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deadline"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The Unix timestamp (in seconds) after which the call will be reverted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"swapData"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The call data to zeroExProxy to execute the swap, obtained from the ",(0,r.kt)("a",{parentName:"td",href:"https://api.0x.org/swap/v1/quote"},"https://api.0x.org/swap/v1/quote")," endpoint")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tokenAmountOut"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of token output")))),(0,r.kt)("h3",{id:"wrapethinput"},"wrapEthInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function wrapEthInput() external payable\n")),(0,r.kt)("p",null,"Wraps the user's ETH input into WETH"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Should be used as part of a multicall to convert the user's ETH input into WETH\nso that it can be swapped into xPYT/NYT.")),(0,r.kt)("h2",{id:"owner-functions"},"Owner functions"),(0,r.kt)("h3",{id:"ownersetprotocolfee"},"ownerSetProtocolFee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function ownerSetProtocolFee(struct Swapper.ProtocolFeeInfo protocolFeeInfo_) external virtual\n")),(0,r.kt)("p",null,"Updates the protocol fee and/or the protocol fee recipient.\nOnly callable by the owner."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocolFeeInfo_"),(0,r.kt)("td",{parentName:"tr",align:null},"struct Swapper.ProtocolFeeInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"The new protocol fee info")))))}d.isMDXComponent=!0}}]);