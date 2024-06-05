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
| [BunniHub](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHub.sol) | `0xAe186fdB6c547B5CCF041507E4Ce5a4EC2b174F9` |
| [BunniHook](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHook.sol) | `0x2199c73F63A1c1F68cf4E7f8a72DeC94d2ea1888` |
| [BunniZone](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniZone.sol) | `0xFfE152101056244Cad3C1EeA14B8747326ea152c` |

### Periphery

| Contract | Sepolia Addresses |
| --------------- | --------------- |
| [BunniQuoter](https://github.com/timeless-fi/bunni-hooks/blob/main/src/periphery/BunniQuoter.sol) | `0x559Cc4B0185ea2a4193347257D044E371Dac7118` |
| BunniLens | `0xbE24a7357F13d831a4ff806E6C0cB4D5EfF625f4` |
| Uniswapper | `0xD5AF63d8e0E23bbd254F04F86558F7F84d8F85eb` |


### Liquidity Density Functions

| Liquidity Density Function | Sepolia Addresses |
| --------------- | --------------- |
| [Uniform](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/UniformDistribution.sol) | `0x112600019348210269B9257951dE5C2AED2B7Aae` |
| [Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/GeometricDistribution.sol) | `0xdB1C65407BA191bE5deD5b541d00a1857253A015` |
| [Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/DoubleGeometricDistribution.sol) | `0xd1B62B664b97861c5bF06706EED447D9fDC35231` |
| [Carpeted Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedGeometricDistribution.sol) | `0xbEc14b6A62f43D34bF6a476adbDa9767634c6Bbe` |
| [Carpeted Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedDoubleGeometricDistribution.sol) | `0x9219f226351eCcd505936543d256A3Ed195eed58` |