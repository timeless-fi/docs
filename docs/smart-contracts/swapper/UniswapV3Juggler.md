# UniswapV3Juggler

Given xPYT/NYT input, computes how much to swap to result in
an equal amount of PYT & NYT.

_Used in conjunction with UniswapV3Swapper::swapNytToUnderlying() and
UniswapV3Swapper::swapXpytToUnderlying(). Should only be called offchain since
the gas cost is too high to be called onchain._

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

### MAX_BINARY_SEARCH_ITERATIONS

```solidity
uint256 MAX_BINARY_SEARCH_ITERATIONS
```

_The maximum number of binary search iterations to find swapAmountIn_

## Immutable parameters

### factory

```solidity
address factory
```

The official Uniswap V3 factory address

### quoter

```solidity
contract IQuoter quoter
```

The Uniswap V3 Quoter deployment

## Public functions

### juggleXpytInput

```solidity
function juggleXpytInput(contract ERC20 nyt, contract ERC4626 xPYT, uint24 fee, uint256 tokenAmountIn, uint256 maxError) external returns (uint256 swapAmountIn)
```

Given xPYT input, compute how much xPYT to swap into NYT to result in
an equal amount of PYT & NYT.

| Name | Type | Description |
| ---- | ---- | ----------- |
| nyt | contract ERC20 | The NYT contract |
| xPYT | contract ERC4626 | The xPYT contract |
| fee | uint24 | The fee tier of the Uniswap V3 pool to use |
| tokenAmountIn | uint256 | The amount of token input |
| maxError | uint256 | The maximum acceptable difference between the resulting PYT & NYT balances. Might not be achieved if MAX_BINARY_SEARCH_ITERATIONS is reached. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| swapAmountIn | uint256 | The amount of xPYT to swap into NYT |

### juggleNytInput

```solidity
function juggleNytInput(contract ERC20 nyt, contract ERC4626 xPYT, uint24 fee, uint256 tokenAmountIn, uint256 maxError) external returns (uint256 swapAmountIn)
```

Given NYT input, compute how much NYT to swap into xPYT to result in
an equal amount of PYT & NYT.

| Name | Type | Description |
| ---- | ---- | ----------- |
| nyt | contract ERC20 | The NYT contract |
| xPYT | contract ERC4626 | The xPYT contract |
| fee | uint24 | The fee tier of the Uniswap V3 pool to use |
| tokenAmountIn | uint256 | The amount of token input |
| maxError | uint256 | The maximum acceptable difference between the resulting PYT & NYT balances. Might not be achieved if MAX_BINARY_SEARCH_ITERATIONS is reached. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| swapAmountIn | uint256 | The amount of NYT to swap into xPYT |

