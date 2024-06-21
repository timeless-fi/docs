---
title: Parameter Formats
hide_table_of_contents: false
sidebar_position: 3
---

# Parameter Formats

Each LDF contract receives `bytes32 ldfParams` when called and has different formats for decoding the actual parameters. Below are how each LDF contract encodes its parameters.

## `GeometricDistribution`

### Parameter Encoding

The `ldfParams` are encoded differently depending on whether the distribution is dynamic (TWAP-based) or static.

#### Dynamic (TWAP-based) Distribution

When `useTwap` is true, the parameters are encoded as follows:

```
| offset (3 bytes) | length (2 bytes) | alpha (4 bytes) | shiftMode (1 byte) | unused (22 bytes) |
```

- **offset** (3 bytes): An `int24` value representing the offset applied to the TWAP tick to get the minTick.
- **length** (2 bytes): An `int16` value representing the length of the distribution in number of rounded ticks.
- **alpha** (4 bytes): A `uint32` value representing the alpha parameter of the geometric distribution.
- **shiftMode** (1 byte): A `uint8` value representing the shift mode (0 for BOTH, 1 for LEFT, 2 for RIGHT).
- **unused** (22 bytes): Unused bytes, should be set to zero.

#### Static Distribution

When `useTwap` is false, the parameters are encoded as follows:

```
| minTick (3 bytes) | length (2 bytes) | alpha (4 bytes) | unused (23 bytes) |
```

- **minTick** (3 bytes): An `int24` value representing the minimum tick of the distribution. Must be aligned to tickSpacing.
- **length** (2 bytes): An `int16` value representing the length of the distribution in number of rounded ticks.
- **alpha** (4 bytes): A `uint32` value representing the alpha parameter of the geometric distribution.
- **unused** (23 bytes): Unused bytes, should be set to zero.

### Important Notes

1. For dynamic distributions, the actual `minTick` is calculated as `roundTickSingle(twapTick + offset * tickSpacing, tickSpacing)`.
2. For static distributions, the `shiftMode` is always set to BOTH (0).
3. The `alpha` value is scaled by `Q96 / ALPHA_BASE` internally. `ALPHA_BASE` is `1e8`.
4. The distribution is bounded to be within the range of usable ticks. If `minTick` is outside this range, it will be adjusted accordingly.

### Example Usage

Here's an example of how to encode the parameters for a dynamic distribution:

```solidity
function encodeDynamicParams(
    int24 offset,
    int16 length,
    uint32 alpha,
    ShiftMode shiftMode
) pure returns (bytes32) {
    return abi.encodePacked(offset, length, alpha, uint8(shiftMode));
}
```

And for a static distribution:

```solidity
function encodeStaticParams(
    int24 minTick,
    int16 length,
    uint32 alpha
) pure returns (bytes32) {
    return abi.encodePacked(minTick, length, alpha);
}
```

Remember to ensure that all values are within their appropriate ranges and that `minTick` is aligned with `tickSpacing` for static distributions.

## `UniformDistribution`

### Parameter Encoding

The `ldfParams` for the UniformDistribution are encoded as follows:

```
| tickLower (3 bytes) | tickUpper (3 bytes) | unused (26 bytes) |
```

- **tickLower** (3 bytes): An `int24` value representing the lower tick of the distribution.
- **tickUpper** (3 bytes): An `int24` value representing the upper tick of the distribution.
- **unused** (26 bytes): Unused bytes, should be set to zero.

### Important Notes

1. Both `tickLower` and `tickUpper` must be within the range of valid ticks for the pool.
2. `tickLower` must be less than `tickUpper`.
3. Unlike the Geometric and DoubleGeometric distributions, the Uniform distribution does not use TWAP or have dynamic/static modes.
4. The ticks need to be aligned to the tick spacing.

### Example Usage

Here's an example of how to encode the parameters for a uniform distribution:

```solidity
function encodeParams(
    int24 tickLower,
    int24 tickUpper
) pure returns (bytes32) {
    return abi.encodePacked(tickLower, tickUpper);
}
```

Remember to ensure that `tickLower` and `tickUpper` are within the valid range of ticks for the pool, `tickLower` is less than `tickUpper` and they're both aligned to the tick spacing.

## `DoubleGeometricDistribution`

### Parameter Encoding

The `ldfParams` are encoded differently depending on whether the distribution is dynamic (TWAP-based) or static.

#### Dynamic (TWAP-based) Distribution

When `useTwap` is true, the parameters are encoded as follows:

```
| offset (3 bytes) | length0 (2 bytes) | alpha0 (4 bytes) | weight0 (4 bytes) | length1 (2 bytes) | alpha1 (4 bytes) | weight1 (4 bytes) | shiftMode (1 byte) | unused (8 bytes) |
```

- **offset** (3 bytes): An `int24` value representing the offset applied to the TWAP tick to get the minTick.
- **length0** (2 bytes): An `int16` value representing the length of the right distribution in number of rounded ticks.
- **alpha0** (4 bytes): A `uint32` value representing the alpha parameter of the right distribution.
- **weight0** (4 bytes): A `uint32` value representing the weight of the right distribution.
- **length1** (2 bytes): An `int16` value representing the length of the left distribution in number of rounded ticks.
- **alpha1** (4 bytes): A `uint32` value representing the alpha parameter of the left distribution.
- **weight1** (4 bytes): A `uint32` value representing the weight of the left distribution.
- **shiftMode** (1 byte): A `uint8` value representing the shift mode (0 for BOTH, 1 for LEFT, 2 for RIGHT).
- **unused** (8 bytes): Unused bytes, should be set to zero.

#### Static Distribution

When `useTwap` is false, the parameters are encoded as follows:

```
| minTick (3 bytes) | length0 (2 bytes) | alpha0 (4 bytes) | weight0 (4 bytes) | length1 (2 bytes) | alpha1 (4 bytes) | weight1 (4 bytes) | unused (9 bytes) |
```

- **minTick** (3 bytes): An `int24` value representing the minimum tick of the distribution. Must be aligned to tickSpacing.
- **length0** (2 bytes): An `int16` value representing the length of the right distribution in number of rounded ticks.
- **alpha0** (4 bytes): A `uint32` value representing the alpha parameter of the right distribution.
- **weight0** (4 bytes): A `uint32` value representing the weight of the right distribution.
- **length1** (2 bytes): An `int16` value representing the length of the left distribution in number of rounded ticks.
- **alpha1** (4 bytes): A `uint32` value representing the alpha parameter of the left distribution.
- **weight1** (4 bytes): A `uint32` value representing the weight of the left distribution.
- **unused** (9 bytes): Unused bytes, should be set to zero.

### Important Notes

1. For dynamic distributions, the actual `minTick` is calculated as `roundTickSingle(twapTick + offset * tickSpacing, tickSpacing)`.
2. For static distributions, the `shiftMode` is always set to BOTH (0).
3. The `alpha0` and `alpha1` values are scaled by `Q96 / ALPHA_BASE` internally. `ALPHA_BASE` is `1e8`.
4. The distribution is bounded to be within the range of usable ticks. If `minTick` is outside this range, it will be adjusted accordingly.
5. The total length of the distribution is `length0 + length1`.
6. `weight0` and `weight1` don't use any particular number of decimals, they're relative weights. For example, `weight0` can be `8` and `weight1` can be `2`, and the respective weights would be `8 / 10 = 80%` and `2 / 10 = 20%`.
7. The minimum liquidity density of each geometric part must be greater than `MIN_LIQUIDITY_DENSITY` (Q96 / 1e3).

### Example Usage

Here's an example of how to encode the parameters for a dynamic distribution:

```solidity
function encodeDynamicParams(
    int24 offset,
    int16 length0,
    uint32 alpha0,
    uint32 weight0,
    int16 length1,
    uint32 alpha1,
    uint32 weight1,
    ShiftMode shiftMode
) pure returns (bytes32) {
    return abi.encodePacked(offset, length0, alpha0, weight0, length1, alpha1, weight1, uint8(shiftMode));
}
```

And for a static distribution:

```solidity
function encodeStaticParams(
    int24 minTick,
    int16 length0,
    uint32 alpha0,
    uint32 weight0,
    int16 length1,
    uint32 alpha1,
    uint32 weight1
) pure returns (bytes32) {
    return abi.encodePacked(minTick, length0, alpha0, weight0, length1, alpha1, weight1);
}
```

Remember to ensure that all values are within their appropriate ranges and that `minTick` is aligned with `tickSpacing` for static distributions.

## `CarpetedGeometricDistribution`

### Parameter Encoding

The `ldfParams` are encoded differently depending on whether the distribution is dynamic (TWAP-based) or static.

#### Dynamic (TWAP-based) Distribution

When `useTwap` is true, the parameters are encoded as follows:

```
| offset (3 bytes) | length (2 bytes) | alpha (4 bytes) | weightMain (4 bytes) | shiftMode (1 byte) | unused (18 bytes) |
```

- **offset** (3 bytes): An `int24` value representing the offset applied to the TWAP tick to get the minTick.
- **length** (2 bytes): An `int16` value representing the length of the geometric distribution in number of rounded ticks.
- **alpha** (4 bytes): A `uint32` value representing the alpha parameter of the geometric distribution.
- **weightMain** (4 bytes): A `uint32` value representing the weight of the main (geometric) distribution.
- **shiftMode** (1 byte): A `uint8` value representing the shift mode (0 for BOTH, 1 for LEFT, 2 for RIGHT).
- **unused** (18 bytes): Unused bytes, should be set to zero.

#### Static Distribution

When `useTwap` is false, the parameters are encoded as follows:

```
| minTick (3 bytes) | length (2 bytes) | alpha (4 bytes) | weightMain (4 bytes) | unused (19 bytes) |
```

- **minTick** (3 bytes): An `int24` value representing the minimum tick of the distribution. Must be aligned to tickSpacing.
- **length** (2 bytes): An `int16` value representing the length of the geometric distribution in number of rounded ticks.
- **alpha** (4 bytes): A `uint32` value representing the alpha parameter of the geometric distribution.
- **weightMain** (4 bytes): A `uint32` value representing the weight of the main (geometric) distribution.
- **unused** (19 bytes): Unused bytes, should be set to zero.

### Important Notes

1. For dynamic distributions, the actual `minTick` is calculated as `roundTickSingle(twapTick + offset * tickSpacing, tickSpacing)`.
2. For static distributions, the `shiftMode` is always set to BOTH (0).
3. The `alpha` value is scaled by `Q96 / ALPHA_BASE` internally. `ALPHA_BASE` is `1e8`.
4. The `weightMain` value uses 9 decimals (i.e., a `weightMain` of 500000000 represents 0.5 or 50%).
5. The distribution is bounded to be within the range of usable ticks. If `minTick` is outside this range, it will be adjusted accordingly.
6. The `weightMain` must be non-zero and less than `WEIGHT_BASE` (1e9).
7. The minimum liquidity density of the geometric part must be greater than `MIN_LIQUIDITY_DENSITY` (Q96 / 1e3).

### Example Usage

Here's an example of how to encode the parameters for a dynamic distribution:

```solidity
function encodeDynamicParams(
    int24 offset,
    int16 length,
    uint32 alpha,
    uint32 weightMain,
    ShiftMode shiftMode
) pure returns (bytes32) {
    return abi.encodePacked(offset, length, alpha, weightMain, uint8(shiftMode));
}
```

And for a static distribution:

```solidity
function encodeStaticParams(
    int24 minTick,
    int16 length,
    uint32 alpha,
    uint32 weightMain
) pure returns (bytes32) {
    return abi.encodePacked(minTick, length, alpha, weightMain);
}
```

Remember to ensure that all values are within their appropriate ranges and that `minTick` is aligned with `tickSpacing` for static distributions.

## `CarpetedDoubleGeometricDistribution`

### Parameter Encoding

The `ldfParams` are encoded differently depending on whether the distribution is dynamic (TWAP-based) or static.

#### Dynamic (TWAP-based) Distribution

When `useTwap` is true, the parameters are encoded as follows:

```
| offset (3 bytes) | length0 (2 bytes) | alpha0 (4 bytes) | weight0 (4 bytes) | length1 (2 bytes) | alpha1 (4 bytes) | weight1 (4 bytes) | weightMain (4 bytes) | shiftMode (1 byte) | unused (4 bytes) |
```

- **offset** (3 bytes): An `int24` value representing the offset applied to the TWAP tick to get the minTick.
- **length0** (2 bytes): An `int16` value representing the length of the right distribution in number of rounded ticks.
- **alpha0** (4 bytes): A `uint32` value representing the alpha parameter of the right distribution.
- **weight0** (4 bytes): A `uint32` value representing the weight of the right distribution.
- **length1** (2 bytes): An `int16` value representing the length of the left distribution in number of rounded ticks.
- **alpha1** (4 bytes): A `uint32` value representing the alpha parameter of the left distribution.
- **weight1** (4 bytes): A `uint32` value representing the weight of the left distribution.
- **weightMain** (4 bytes): A `uint32` value representing the weight of the main (double geometric) distribution.
- **shiftMode** (1 byte): A `uint8` value representing the shift mode (0 for BOTH, 1 for LEFT, 2 for RIGHT).
- **unused** (4 bytes): Unused bytes, should be set to zero.

#### Static Distribution

When `useTwap` is false, the parameters are encoded as follows:

```
| minTick (3 bytes) | length0 (2 bytes) | alpha0 (4 bytes) | weight0 (4 bytes) | length1 (2 bytes) | alpha1 (4 bytes) | weight1 (4 bytes) | weightMain (4 bytes) | unused (5 bytes) |
```

- **minTick** (3 bytes): An `int24` value representing the minimum tick of the distribution. Must be aligned to tickSpacing.
- **length0** (2 bytes): An `int16` value representing the length of the right distribution in number of rounded ticks.
- **alpha0** (4 bytes): A `uint32` value representing the alpha parameter of the right distribution.
- **weight0** (4 bytes): A `uint32` value representing the weight of the right distribution.
- **length1** (2 bytes): An `int16` value representing the length of the left distribution in number of rounded ticks.
- **alpha1** (4 bytes): A `uint32` value representing the alpha parameter of the left distribution.
- **weight1** (4 bytes): A `uint32` value representing the weight of the left distribution.
- **weightMain** (4 bytes): A `uint32` value representing the weight of the main (double geometric) distribution.
- **unused** (5 bytes): Unused bytes, should be set to zero.

### Important Notes

1. For dynamic distributions, the actual `minTick` is calculated as `roundTickSingle(twapTick + offset * tickSpacing, tickSpacing)`.
2. For static distributions, the `shiftMode` is always set to BOTH (0).
3. The `alpha0` and `alpha1` values are scaled by `Q96 / ALPHA_BASE` internally. `ALPHA_BASE` is `1e8`.
4. The `weightMain` value use 9 decimals (i.e., a value of 500000000 represents 0.5 or 50%).
5. The distribution is bounded to be within the range of usable ticks. If `minTick` is outside this range, it will be adjusted accordingly.
6. The `weightMain` must be non-zero and less than `WEIGHT_BASE` (1e9).
7. The minimum liquidity density of each geometric part must be greater than `MIN_LIQUIDITY_DENSITY` (Q96 / 1e3).
8. The total length of the distribution is `length0 + length1`.
9. `weight0` and `weight1` don't use any particular number of decimals, they're relative weights. For example, `weight0` can be `8` and `weight1` can be `2`, and the respective weights would be `8 / 10 = 80%` and `2 / 10 = 20%`.

### Example Usage

Here's an example of how to encode the parameters for a dynamic distribution:

```solidity
function encodeDynamicParams(
    int24 offset,
    int16 length0,
    uint32 alpha0,
    uint32 weight0,
    int16 length1,
    uint32 alpha1,
    uint32 weight1,
    uint32 weightMain,
    ShiftMode shiftMode
) pure returns (bytes32) {
    return abi.encodePacked(offset, length0, alpha0, weight0, length1, alpha1, weight1, weightMain, uint8(shiftMode));
}
```

And for a static distribution:

```solidity
function encodeStaticParams(
    int24 minTick,
    int16 length0,
    uint32 alpha0,
    uint32 weight0,
    int16 length1,
    uint32 alpha1,
    uint32 weight1,
    uint32 weightMain
) pure returns (bytes32) {
    return abi.encodePacked(minTick, length0, alpha0, weight0, length1, alpha1, weight1, weightMain);
}
```

Remember to ensure that all values are within their appropriate ranges and that `minTick` is aligned with `tickSpacing` for static distributions.

## `BuyTheDipGeometricDistribution`

### Parameter Encoding

The `ldfParams` are encoded as follows:

```
| minTick (3 bytes) | length (2 bytes) | alpha (4 bytes) | unused (1 byte) | altAlpha (4 bytes) | altThreshold (3 bytes) | altThresholdDirection (1 byte) | unused (14 bytes) |
```

- **minTick** (3 bytes): An `int24` value representing the minimum tick of the distribution. Must be aligned to tickSpacing.
- **length** (2 bytes): An `int16` value representing the length of the distribution in number of rounded ticks.
- **alpha** (4 bytes): A `uint32` value representing the alpha parameter of the geometric distribution.
- **unused** (1 byte): An unused byte, should be set to zero.
- **altAlpha** (4 bytes): A `uint32` value representing the alternative alpha parameter.
- **altThreshold** (3 bytes): An `int24` value representing the threshold for switching between alpha and altAlpha.
- **altThresholdDirection** (1 byte): A `uint8` value (0 or 1) indicating the direction of the threshold comparison.
- **unused** (14 bytes): Unused bytes, should be set to zero.

### Important Notes

1. This distribution always uses TWAP, so there's no dynamic/static distinction like in other distributions.
2. The `alpha` and `altAlpha` values are scaled by `Q96 / ALPHA_BASE` internally. `ALPHA_BASE` is `1e8`.
3. The distribution switches between `alpha` and `altAlpha` based on the TWAP tick and `altThreshold`.
4. If `altThresholdDirection` is true, `altAlpha` is used when `twapTick <= altThreshold`. If false, `altAlpha` is used when `twapTick >= altThreshold`.
5. The `alpha` and `altAlpha` must be on different sides of 1 (i.e., one < 1 and one > 1).
6. The `altThreshold` must be within the range `(minTick, minTick + length * tickSpacing)`.
7. The distribution is bounded to be within the range of usable ticks.
8. TWAP must be enabled for this distribution to work properly.

### Example Usage

Here's an example of how to encode the parameters:

```solidity
function encodeParams(
    int24 minTick,
    int16 length,
    uint32 alpha,
    uint32 altAlpha,
    int24 altThreshold,
    bool altThresholdDirection
) pure returns (bytes32) {
    return abi.encodePacked(
        minTick,
        length,
        alpha,
        bytes1(0), // unused byte
        altAlpha,
        altThreshold,
        altThresholdDirection ? uint8(1) : uint8(0)
    );
}
```

Remember to ensure that all values are within their appropriate ranges and that `minTick` is aligned with `tickSpacing`.