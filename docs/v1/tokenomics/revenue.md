---
sidebar_position: 6
---

# Protocol revenue

Bunni currently charges a 5% protocol fee on the swap fees generated by Bunni LPs. Governance has the power to increase the protocol fee to up to 50%.

## How is Bunni able to take a fee from Uniswap trades?

Bunni liquidity ultimately live on Uniswap v3, so how can Bunni take a protocol fee, given that Uniswap's fee switch isn't turned on?

Bunni LPs provide liquidity through Bunni's smart contract, which holds all liquidity positions. When swap fee is claimed from Uniswap, it first goes to the Bunni smart contract, where Bunni can take a protocol fee; then the remaining swap fee is given to the LP.

## Where does the protocol revenue go?

Currently, the revenue is directed to the protocol treasury. Governance can pass proposals on how to distribute the revenue.