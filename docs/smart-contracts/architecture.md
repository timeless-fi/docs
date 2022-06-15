---
sidebar_position: 1
---

# Architecture

The Timeless smart contract system is made up of three components:

1. **[Core](smart-contracts/core/intro):** Handles yield tokenization, yield claiming, and deploying PYT & NYT.
2. **[Swapper](smart-contracts/swapper/intro):** Called by the user to swap between xPYT, NYT, and the underlying asset.
3. **[xPYT](smart-contracts/xpyt/intro):** Auto-compounding vaults for PYTs.

Furthermore, Swapper and xPYT both depend on an external decentralized exchange (Uniswap v3 is currently supported).