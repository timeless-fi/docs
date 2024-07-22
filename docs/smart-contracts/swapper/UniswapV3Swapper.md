# UniswapV3Swapper

GitHub: [link](https://github.com/timeless-fi/swapper/blob/main/src/uniswap-v3/UniswapV3Swapper.sol)

Swapper that uses Uniswap V3 to swap between xPYTs/NYTs

## Errors

### Error_SameToken

```solidity
error Error_SameToken()
```

### Error_PastDeadline

```solidity
error Error_PastDeadline()
```

### Error_ZeroExSwapFailed

```solidity
error Error_ZeroExSwapFailed()
```

### Error_InsufficientOutput

```solidity
error Error_InsufficientOutput()
```

### Error_ProtocolFeeRecipientIsZero

```solidity
error Error_ProtocolFeeRecipientIsZero()
```

### Error_NotUniswapV3Pool

```solidity
error Error_NotUniswapV3Pool()
```

### Error_BothTokenDeltasAreZero

```solidity
error Error_BothTokenDeltasAreZero()
```

## Events

### SetProtocolFee

```solidity
event SetProtocolFee(struct Swapper.ProtocolFeeInfo protocolFeeInfo_)
```

## Structs

### SwapArgs

```solidity
struct SwapArgs {
  contract Gate gate;
  address vault;
  contract ERC20 underlying;
  contract ERC20 nyt;
  contract ERC20 pyt;
  contract IxPYT xPYT;
  uint256 tokenAmountIn;
  uint256 minAmountOut;
  address recipient;
  bool useSwapperBalance;
  bool usePYT;
  uint256 deadline;
  bytes extraArgs;
}
```

### ProtocolFeeInfo

```solidity
struct ProtocolFeeInfo {
  uint8 fee;
  address recipient;
}
```

### SwapCallbackData

```solidity
struct SwapCallbackData {
  contract ERC20 tokenIn;
  contract ERC20 tokenOut;
  uint24 fee;
}
```

## Constants

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

### zeroExProxy

```solidity
address zeroExProxy
```

The 0x proxy contract used for 0x swaps

### weth

```solidity
contract WETH weth
```

The Wrapped Ethereum contract

### uniswapV3Factory

```solidity
address uniswapV3Factory
```

The official Uniswap V3 factory address

## State variables

### protocolFeeInfo

```solidity
struct Swapper.ProtocolFeeInfo protocolFeeInfo
```

The protocol fee and the fee recipient address.

## State-mutating functions

### swapUnderlyingToNyt

```solidity
function swapUnderlyingToNyt(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)
```

Swaps the underlying asset of an NYT into the NYT

_`extraArg = (uint24 fee)`_

_fee: The fee tier of the Uniswap V3 pool to use_

| Name | Type                    | Description                                   |
| ---- | ----------------------- | --------------------------------------------- |
| args | struct Swapper.SwapArgs | The input arguments (see SwapArgs definition) |

| Name           | Type    | Description                |
| -------------- | ------- | -------------------------- |
| tokenAmountOut | uint256 | The amount of token output |

### swapUnderlyingToXpyt

```solidity
function swapUnderlyingToXpyt(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)
```

Swaps the underlying asset of an xPYT into the xPYT

_`extraArg = (uint24 fee)`_

_fee: The fee tier of the Uniswap V3 pool to use_

| Name | Type                    | Description                                   |
| ---- | ----------------------- | --------------------------------------------- |
| args | struct Swapper.SwapArgs | The input arguments (see SwapArgs definition) |

| Name           | Type    | Description                |
| -------------- | ------- | -------------------------- |
| tokenAmountOut | uint256 | The amount of token output |

### swapNytToUnderlying

```solidity
function swapNytToUnderlying(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)
```

Swaps an NYT to its underlying asset

_`extraArg = (uint24 fee, uint256 swapAmountIn)`_

_fee: The fee tier of the Uniswap V3 pool to use_

_swapAmountIn: The amount of NYT to swap to xPYT_

| Name | Type                    | Description                                   |
| ---- | ----------------------- | --------------------------------------------- |
| args | struct Swapper.SwapArgs | The input arguments (see SwapArgs definition) |

| Name           | Type    | Description                |
| -------------- | ------- | -------------------------- |
| tokenAmountOut | uint256 | The amount of token output |

### swapXpytToUnderlying

```solidity
function swapXpytToUnderlying(struct Swapper.SwapArgs args) external virtual returns (uint256 tokenAmountOut)
```

Swaps an xPYT to its underlying asset

_`extraArg = (uint24 fee, uint256 swapAmountIn)`_

_fee: The fee tier of the Uniswap V3 pool to use_

_swapAmountIn: The amount of xPYT to swap to NYT_

| Name | Type                    | Description                                   |
| ---- | ----------------------- | --------------------------------------------- |
| args | struct Swapper.SwapArgs | The input arguments (see SwapArgs definition) |

| Name           | Type    | Description                |
| -------------- | ------- | -------------------------- |
| tokenAmountOut | uint256 | The amount of token output |

### doZeroExSwap

```solidity
function doZeroExSwap(contract ERC20 tokenIn, uint256 tokenAmountIn, contract ERC20 tokenOut, uint256 minAmountOut, address recipient, bool useSwapperBalance, bool requireApproval, uint256 deadline, bytes swapData) external virtual returns (uint256 tokenAmountOut)
```

Swaps between two regular tokens using 0x.

_Used in conjuction with the 0x API https://www.0x.org/docs/api_

| Name              | Type           | Description                                                                                                   |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| tokenIn           | contract ERC20 | The input token                                                                                               |
| tokenAmountIn     | uint256        | The amount of token input                                                                                     |
| tokenOut          | contract ERC20 | The output token                                                                                              |
| minAmountOut      | uint256        | The minimum acceptable token output amount, used for slippage checking.                                       |
| recipient         | address        | The recipient of the token output                                                                             |
| useSwapperBalance | bool           | Set to true to use the Swapper's token balance as token input                                                 |
| requireApproval   | bool           | Set to true to approve tokenIn to zeroExProxy                                                                 |
| deadline          | uint256        | The Unix timestamp (in seconds) after which the call will be reverted                                         |
| swapData          | bytes          | The call data to zeroExProxy to execute the swap, obtained from the https://api.0x.org/swap/v1/quote endpoint |

| Name           | Type    | Description                |
| -------------- | ------- | -------------------------- |
| tokenAmountOut | uint256 | The amount of token output |

### wrapEthInput

```solidity
function wrapEthInput() external payable
```

Wraps the user's ETH input into WETH

_Should be used as part of a multicall to convert the user's ETH input into WETH
so that it can be swapped into xPYT/NYT._

## Owner functions

### ownerSetProtocolFee

```solidity
function ownerSetProtocolFee(struct Swapper.ProtocolFeeInfo protocolFeeInfo_) external virtual
```

Updates the protocol fee and/or the protocol fee recipient.
Only callable by the owner.

| Name              | Type                           | Description               |
| ----------------- | ------------------------------ | ------------------------- |
| protocolFeeInfo\_ | struct Swapper.ProtocolFeeInfo | The new protocol fee info |
