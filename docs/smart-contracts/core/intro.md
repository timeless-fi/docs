---
sidebar_position: 1
---

# Introduction

GitHub repo: [link](https://github.com/timeless-fi/timeless)

These are the core smart contracts of Timeless, responsible for deploying/minting/burning PYT/NYT as well as accruing yield to PYT holders.

[Gate](./gate) is the main contract that users interact with. It is important to note that `Gate` is an abstract contract, because we want to support different types of yield-earning protocols. Thus, we currently have two types of `Gate` contracts deployed:

- [YearnGate](https://github.com/timeless-fi/timeless/blob/main/src/gates/YearnGate.sol): Supports [Yearn](https://yearn.finance) v2 vaults
- [ERC4626Gate](https://github.com/timeless-fi/timeless/blob/main/src/gates/ERC4626Gate.sol): Supports [ERC4626](https://eips.ethereum.org/EIPS/eip-4626) vaults

By developing & deploying new `Gate` contracts, we can add support for more yield-earning protocols.

All of the `Gate` contracts share the same [Factory](./factory) contract, which handles deploying PYT & NYT contracts as well as storing protocol fee information.