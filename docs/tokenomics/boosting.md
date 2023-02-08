---
sidebar_position: 5
---

# Boosting

Boosting is a mechanic in LIT tokenomics where holding [veLIT](./velit) increases the rate at which you receive [oLIT](./olit) rewards from staking in a [gauge](./gauges).

## The Curve model

Curve modifies a liquidity provider's weight in a staking pool using the following formula:
$$
w = \min (l, 0.4l + 0.6L\frac{v}{V})
$$
Where $w$ is the weight, $l$ is the liquidity provided by the LP, $L$ is the total liquidity in the staking pool, $v$ is the amount of vetokens the LP has, $V$ is the total vetoken supply.

Basically, what this means is that if an LP has no vetokens, their liquidity is multiplied by 0.4x when deciding their weight in the staking pool. When they have enough vetokens (at least $\frac{b}{B}W$), their weight goes from 0.4x to 1x, which translates into $\frac{1}{0.4} = 2.5$x boost.

## The Bunni model

Bunni modifies the Curve model by changing the parameters, such that the formula becomes:
$$
w = \min (l, 0.1l + 0.9L\frac{v}{V})
$$
Which translates into increasing the max boost from 2.5x to 10x. This makes holding veLIT more attractive & powerful, and increases the veLIT holding rate amongst LPs.

## Why am I receiving max boost in one gauge but not another?

The amount of boost you receive depends not only on your veLIT balance, but also on the veLIT balances of everyone else in the gauge you're in. Remember: staking weight is ultimately relative, since all the stakers are competing for the same pie!

For instance, if you're staking in a gauge where you're the only one who owns veLIT, then your boost has a much more significant effect. If everyone else has a lot of veLIT, then your veLIT has less of an effect since everyone else is much more competitive.

## Extra reading: the FOO model

In the ideal tokenomics model described in [the FOO paper](https://blog.timelessfi.com/posts/foo/), we go even further than the Bunni model by giving 0 rewards to LPs with no veLIT. This makes the formula the following:
$$
w = \min (l, L\frac{v}{V})
$$
To illustrate the forumla better with some examples, let’s say that a farmer Alice has a 60% share of a liquidity pool and 10% share of the vetoken supply. Their weight in the staking pool is:
$$
w_{Alice} = \min(0.6L, 0.1L) = 0.1L
$$

Say that another farmer Bob has a 20% share of a same liquidity pool and 20% share of the vetoken supply. Their weight would be:
$$
w_{Bob} = \min(0.2L, 0.2L) = 0.2L
$$
So even though Alice has 3x the liquidity of Bob, she only gets half the rewards Bob gets, because she doesn’t have enough vetokens. She’s incentivized to either increase her vetoken balance or to decrease her liquidity balance, until the two share values are equal.

This modification forces the farmers to also be token holders and LPs for the token, which further disincentivizes farming-and-dumping.

Moreover, since all farmers are LPs and all LPs are probably farmers, the incentives going towards the farmers also incentivizes LPing, so the staking reward serves two purposes simultaneously: incentivize protocol usage and incentivize LPing.

Bunni did not adopt the FOO model at launch because FOO is more suited for when the protocol is more mature and has existing traction. As one can imagine, if only veLIT holders receive incentives, then onboarding farmers becomes extremely difficult since they need to be convinced to purchase LIT and lock them up to get veLIT.