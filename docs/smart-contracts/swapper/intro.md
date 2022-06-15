---
sidebar_position: 1
---

# Introduction

GitHub repo: [link](https://github.com/timeless-fi/swapper)

[Swapper](./swapper) is an abstract contract that defines the interface traders use to swap between xPYTs/PYTs/NYTs and their underlying assets. It also supports using [0x](https://0x.org) as an intermediate step during a swap.

Implementations of `Swapper` each support an underlying exchange protocol. Currently, only [UniswapV3Swapper](https://github.com/timeless-fi/swapper/blob/main/src/uniswap-v3/UniswapV3Swapper.sol) is implemented.

The only type of swap that's currently not supported is swapping between PYT⟷NYT, because swapping between xPYT⟷NYT is done directly using Uniswap, therefore we cannot include converting xPYT⟷PYT in the same transaction.

Furthermore, when swapping from xPYT/PYT/NYT to the underlying asset using `UniswapV3Swapper`, you need to use [UniswapV3Juggler](./uniswapv3juggler) to determine [`swapAmountIn`](https://github.com/timeless-fi/swapper/blob/main/src/uniswap-v3/UniswapV3Swapper.sol#L279=), which is the amount of input token to swap with using the Uniswap v3 such that the swapper ends up with an equal amount of PYT and NYT (which is then burnt to recover the underlying assets).