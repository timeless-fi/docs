---
sidebar_position: 7
---

# Swapping

## Intro

In order for Timeless to build a liquid yield market, we need to ensure that users can swap between PYT, NYT, and the underlying asset with minimal price impact.

This presents a challenge, because nearly all existing decentralized exchanges (e.g. Uniswap) only support two-token liquidity pools, meaning if we naively use existing exchanges we have to split liquidity between two pools, increasing price impact for users. If we built our own exchange, we'd be giving up the benefits of using existing infrastructure.

Furthermore, the prices of PYT and NYT are known to be within a small range (0-1 in terms of the underlyin asset), so if we used a full-range exchange such as Sushiswap or Balancer, the capital efficiency will be extremely low.

Fortunately, we have a solution that avoids all of these issues.

## How it works

Timeless uses [Uniswap v3](https://uniswap.org/) as the underlying exchange. Liquidity providers provide xPYT⟷NYT liquidity.

When users initiate a swap, they interact with a [Swapper](/docs/smart-contracts/swapper/intro) contract.

When a user swaps from the underlying asset to xPYT / NYT, the Swapper uses the underlying to mint xPYT and NYT, and then sells the undesired token on the exchange.

When a user swaps from xPYT / NYT to the underlying asset, the Swapper does a swap on the exchange and then burn the xPYT and NYT together into the underlying asset.

## Benefits

- **Capital-efficient:** Uniswap v3 enables providing concentrated liquidity, meaning Timeless LPs can provide liquidity only to price ranges that can actually be reached.
- **Low price impact:** Minting/burning PYT & NYT has zero price impact, meaning the overall price impact of a swap is minimized (compared to directly using an exchange).
- **Uses existing infrastructure:** Not reinventing the wheel means Timeless can more easily fit into the existing DeFi landscape and not do unnecessary work.