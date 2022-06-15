---
sidebar_position: 1
---

# Introduction

GitHub repo: [link](https://github.com/timeless-fi/xpyt)

[xPYT](./xpyt-contract) is an auto-compounding vault that compounds the yield earned by the PYT held by the vault (paid in the underlying asset) into more PYT.

`xPYT` is an abstract contract, and each implementation supports an underlying exchange protocol. Currently, only [UniswapV3xPYT](./UniswapV3xPYT) is implemented.

`xPYT` is permissionlessly deployed & managed. Permissionless management means anyone can call [`pound()`](./xPYT-Contract#pound-1) to trigger the yield compounding, and the caller will receive part of the compounded amount as reward. This decentralizes xPYT compounding, and practically this means MEV bots will handle the auto-compounding.

Permissionless management is possible because each `xPYT` vault uses a TWAP oracle as a benchmark for what is a fair price at which to compound its yield, and if the compounder tries to sandwich the swap made by xPYT, the swap will simply revert. Since we're currently using Uniswap v3 as the underlying exchange, the TWAP oracle is built in, so we simply query it.