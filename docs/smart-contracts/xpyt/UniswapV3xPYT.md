# UniswapV3xPYT

GitHub: [link](https://github.com/timeless-fi/xPYT/blob/main/src/uniswap-v3/UniswapV3xPYT.sol)

xPYT implementation using Uniswap V3 to swap NYT into PYT

## Errors

### Error_InsufficientOutput

```solidity
error Error_InsufficientOutput()
```

### Error_InvalidMultiplierValue

```solidity
error Error_InvalidMultiplierValue()
```

### Error_ConsultTwapOracleFailed

```solidity
error Error_ConsultTwapOracleFailed()
```

### Error_NotUniswapV3Pool

```solidity
error Error_NotUniswapV3Pool()
```

### Error_BothTokenDeltasAreZero

```solidity
error Error_BothTokenDeltasAreZero()
```

## Structs

### SwapCallbackData

```solidity
struct SwapCallbackData {
  contract ERC20 tokenIn;
  contract ERC20 tokenOut;
  uint24 fee;
}
```

## Events

### Pound

```solidity
event Pound(address sender, address pounderRewardRecipient, uint256 yieldAmount, uint256 pytCompounded, uint256 pounderReward)
```

## Enums

### PreviewPoundErrorCode

```solidity
enum PreviewPoundErrorCode {
  OK,
  TWAP_FAIL,
  INSUFFICIENT_OUTPUT
}
```

## Constants

### ONE

```solidity
uint256 ONE
```

The base unit for fixed point decimals.

### MIN_SQRT_RATIO_PLUS_ONE

```solidity
uint160 MIN_SQRT_RATIO_PLUS_ONE
```

_The minimum value that can be returned from #getSqrtRatioAtTick + 1. Equivalent to getSqrtRatioAtTick(MIN_TICK) + 1
Copied from v3-core/libraries/TickMath.sol_

### MAX_SQRT_RATIO_MINUS_ONE

```solidity
uint160 MAX_SQRT_RATIO_MINUS_ONE
```

_The maximum value that can be returned from #getSqrtRatioAtTick - 1. Equivalent to getSqrtRatioAtTick(MAX_TICK) - 1
Copied from v3-core/libraries/TickMath.sol_

## Immutable parameters

### gate

```solidity
contract Gate gate
```

The Gate associated with the PYT.

### vault

```solidity
address vault
```

The vault associated with the PYT.

### nyt

```solidity
contract NegativeYieldToken nyt
```

The NYT associated with the PYT.

### minOutputMultiplier

```solidity
uint256 minOutputMultiplier
```

The minimum acceptable ratio between the NYT output in pound() and the expected NYT output
based on the TWAP. Scaled by ONE.

### pounderRewardMultiplier

```solidity
uint256 pounderRewardMultiplier
```

The proportion of the yield claimed in pound() to give to the caller as reward. Scaled by ONE.

### uniswapV3Factory

```solidity
address uniswapV3Factory
```

The official Uniswap V3 factory address

### uniswapV3Quoter

```solidity
contract IQuoter uniswapV3Quoter
```

The Uniswap V3 Quoter deployment

### uniswapV3PoolFee

```solidity
uint24 uniswapV3PoolFee
```

The fee used by the Uniswap V3 pool used for swapping

### uniswapV3Quoter

```solidity
uint32 uniswapV3TwapSecondsAgo
```

The number of seconds in the past from which to take the TWAP of the Uniswap V3 pool

## State variables

### assetBalance

```solidity
uint256 assetBalance
```

The recorded balance of the deposited asset.

_This is used instead of asset.balanceOf(address(this)) to prevent attackers from
atomically increasing the vault share value and thus exploiting integrated lending protocols._

## Public functions

### pound

```solidity
function pound(address pounderRewardRecipient) external virtual returns (uint256 yieldAmount, uint256 pytCompounded, uint256 pounderReward)
```

Claims the yield earned by the PYT held and sells the claimed NYT into more PYT.

_Part of the claimed yield is given to the caller as reward, which incentivizes MEV bots
to perform the auto-compounding for us._

| Name | Type | Description |
| ---- | ---- | ----------- |
| pounderRewardRecipient | address | The address that will receive the caller reward |

| Name | Type | Description |
| ---- | ---- | ----------- |
| yieldAmount | uint256 | The amount of PYT & NYT claimed as yield |
| pytCompounded | uint256 | The amount of PYT distributed to xPYT holders |
| pounderReward | uint256 | The amount of caller reward given, in PYT |

### previewPound

```solidity
function previewPound() external returns (enum xPYT.PreviewPoundErrorCode errorCode, uint256 yieldAmount, uint256 pytCompounded, uint256 pounderReward)
```

Previews the result of calling pound()

| Name | Type | Description |
| ---- | ---- | ----------- |
| errorCode | enum xPYT.PreviewPoundErrorCode | The end state of pound() |
| yieldAmount | uint256 | The amount of PYT & NYT claimed as yield |
| pytCompounded | uint256 | The amount of PYT distributed to xPYT holders |
| pounderReward | uint256 | The amount of caller reward given, in PYT |

### sweep

```solidity
function sweep(address receiver) external virtual returns (uint256 shares)
```

Uses the extra asset balance of the xPYT contract to mint shares

| Name | Type | Description |
| ---- | ---- | ----------- |
| receiver | address | The recipient of the minted shares |

| Name | Type | Description |
| ---- | ---- | ----------- |
| shares | uint256 | The amount of shares minted |

### totalAssets

```solidity
function totalAssets() public view virtual returns (uint256)
```

### beforeWithdraw

```solidity
function beforeWithdraw(uint256 assets, uint256) internal virtual
```

### afterDeposit

```solidity
function afterDeposit(uint256 assets, uint256) internal virtual
```

## Internal functions

### _getTwapQuote

```solidity
function _getTwapQuote(uint256 nytAmountIn) internal view virtual returns (bool success, uint256 xPytAmountOut)
```

_Consults the TWAP oracle to get a quote for how much xPYT will be received from swapping
`nytAmountIn` NYT._

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytAmountIn | uint256 | The amount of NYT to swap |

| Name | Type | Description |
| ---- | ---- | ----------- |
| success | bool | True if the call to the TWAP oracle was successful, false otherwise |
| xPytAmountOut | uint256 | The amount of xPYT that will be received from the swap |

### _swap

```solidity
function _swap(uint256 nytAmountIn) internal virtual returns (uint256 xPytAmountOut)
```

_Swaps `nytAmountIn` NYT into xPYT using the underlying DEX_

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytAmountIn | uint256 | The amount of NYT to swap |

| Name | Type | Description |
| ---- | ---- | ----------- |
| xPytAmountOut | uint256 | The amount of xPYT received from the swap |

### _quote

```solidity
function _quote(uint256 nytAmountIn) internal virtual returns (uint256 xPytAmountOut)
```

_Gets a quote from the underlying DEX for swapping `nytAmountIn` NYT into xPYT_

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytAmountIn | uint256 | The amount of NYT to swap |

| Name | Type | Description |
| ---- | ---- | ----------- |
| xPytAmountOut | uint256 | The amount of xPYT that will be received from the swap |

