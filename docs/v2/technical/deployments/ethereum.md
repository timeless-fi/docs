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
| [BunniHub](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHub.sol) | `0x73c1731586EDe055f9052f0199eF31d4CB04A44a` |
| [BunniHook](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniHook.sol) | `0x730B5fEA5CE828ca7cBcc5ecEAc789d11E8A9888` |
| [BunniZone](https://github.com/timeless-fi/bunni-hooks/blob/main/src/BunniZone.sol) | `0xBe59b59D78643D2575EedeAD91524149cc0be984` |

### Periphery

| Contract | Sepolia Addresses |
| --------------- | --------------- |
| [BunniQuoter](https://github.com/timeless-fi/bunni-hooks/blob/main/src/periphery/BunniQuoter.sol) | `0xD1d662d3e3dd0B24fAd99b8264E2183Ee838C15e` |
| BunniLens | `0x28190e534814194198a9E8c70FD125fd1a3cD6a7` |
| Uniswapper | `0xD5AF63d8e0E23bbd254F04F86558F7F84d8F85eb` |


### Liquidity Density Functions

| Liquidity Density Function | Sepolia Addresses |
| --------------- | --------------- |
| [Uniform](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/UniformDistribution.sol) | `0xBFE60f5c04EA77a1BDf4Dd7EeEf8Ff8176F83941` |
| [Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/GeometricDistribution.sol) | `0xb4BCDbcF782ac2905232De29FaB24930623777bb` |
| [Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/DoubleGeometricDistribution.sol) | `0xc25F8F6E0867527b224d72084C5C4EcEd2f87244` |
| [Carpeted Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedGeometricDistribution.sol) | `0x44b55db96956d9a8c0c99bEdF3ED7a7fd890F586` |
| [Carpeted Double Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/CarpetedDoubleGeometricDistribution.sol) | `0xB8A94d7a3A63CD981E81C71170AF9b8F85D72434` |
| [Buy-the-dip Geometric](https://github.com/timeless-fi/bunni-hooks/blob/main/src/ldf/BuyTheDipGeometricDistribution.sol) | `0x3577AeF2A370ACFF196dB9c436310d1235Cb963C` |