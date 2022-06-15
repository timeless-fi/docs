# xPYTFactory

GitHub: [link](https://github.com/timeless-fi/xPYT/blob/main/src/xPYTFactory.sol)

Factory for deploying xPYT contracts

## Events

### DeployXPYT

```solidity
event DeployXPYT(contract ERC20 asset_, contract xPYT deployed)
```

## Immutable parameters

### uniswapV3Factory

```solidity
address uniswapV3Factory
```

### uniswapV3Quoter

```solidity
contract IQuoter uniswapV3Quoter
```

## State-mutating functions

### deployUniswapV3xPYT

```solidity
function deployUniswapV3xPYT(contract ERC20 asset_, string name_, string symbol_, uint256 pounderRewardMultiplier_, uint256 minOutputMultiplier_, uint24 uniswapV3PoolFee_, uint32 uniswapV3TwapSecondsAgo_) external returns (contract xPYT deployed)
```
