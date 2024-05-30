---
title: Ethereum Deployments
hide_table_of_contents: true
sidebar_position: 1
---

# Ethereum Deployments

The latest version of the Bunni V2 contracts are deployed at the addresses listed below. Integrators should be extremely careful to cofirm address mappings below as we can not guarantee identical deployment addresses across chains.

### Core

| Contract | Sepolia Addresses |
| --------------- | --------------- |
| [BunniHub](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHub.sol) | `0xDED2E73F210E843C91FDA9A078A4CeA2c2F4Fa6E` |
| [BunniHook](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHook.sol) | `0x623e6b052eC79a4Cafa55Ba162744676567d36be` |
| [BunniZone](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniZone.sol) |  |

### Periphery

| Contract | Sepolia Addresses |
| --------------- | --------------- |
| [BunniQuoter](https://github.com/timeless-fi/bunni-hooks/blob/main/src/periphery/BunniQuoter.sol) | `0x5a8D3EDb81169b82848A8d8A4731995abD9C95b6` |
| BunniLens | `0x0aA27C503d6F09242040500F9aC81ce1b39eF640` |
| Uniswapper | `0x9c3639EB0a1AbaB1d98B14BbE25D73A8d9F53699` |


### Liquidity Density Functions

| Liquidity Density Function | Sepolia Addresses |
| --------------- | --------------- |
| [Uniform](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/UniformDistribution.sol) |  |
| [Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/GeometricDistribution.sol) | `0x3E9Cc998C63ad3Cd0629405E0Cf749a4349F89e2` |
| [Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/DoubleGeometricDistribution.sol) | `0xc01692f1c06b13397a91Ad7881b9241820bd9BDF` |
| [Carpeted Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedGeometricDistribution.sol) | `0xF6776eF352aF7A9798EeEfFc5AA95f1badC7C970` |
| [Carpeted Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedDoubleGeometricDistribution.sol) | `0x1D8C6e8c0a3c681760D669f5764BeDc174E3a576` |