---
sidebar_position: 5
---

# Yield Hedging

Yield hedging refers to the strategy where:

- Part of your portfolio is earning yield directly, from platforms such as [Aave](https://aave.com)
- You buy some [NYT](./nyt) corresponding to the same yield source

Because the price of NYT moves in the opposite direction as the yield rate,

- When the yield rate goes down, your NYT goes up in price, offsetting the rate decrease
- When the yield rate goes up, your NYT goes down in price, offsetting the rate increase

In short, **holding NYT as part of your portfolio decreases the volatility of the yield rate you earn in both directions**.

However, it's important to note that the price of NYT moves more when the yield rate goes down than when it goes up (see [this post](https://blog.timelessfi.com/posts/pyt-pricing/#observations)), meaning the benefit of yield hedging outweights the downside risks.

Another way to do yield hedging is by simply holding a portfolio of PYT & NYT, with more NYT than PYT. The PYT combines with an equal amount of NYT to be equivalent to directly depositing into the underlying yield source, and the remaining NYT decreases the yield volatility. By adjusting the PYT:NYT ratio, you can adjust how much you want to decrease the yield volatility.