# Factory

## Errors

### Error_ProtocolFeeRecipientIsZero

```solidity
error Error_ProtocolFeeRecipientIsZero()
```

## Events

### SetProtocolFee

```solidity
event SetProtocolFee(struct Factory.ProtocolFeeInfo protocolFeeInfo_)
```

### DeployYieldTokenPair

```solidity
event DeployYieldTokenPair(contract Gate gate, address vault, contract NegativeYieldToken nyt, contract PerpetualYieldToken pyt)
```

## Structs

### ProtocolFeeInfo

```solidity
struct ProtocolFeeInfo {
  uint8 fee;
  address recipient;
}
```

## State variables

### protocolFeeInfo

```solidity
struct Factory.ProtocolFeeInfo protocolFeeInfo
```

The protocol fee and the fee recipient address.

## State-mutating functions

### deployYieldTokenPair

```solidity
function deployYieldTokenPair(contract Gate gate, address vault) public virtual returns (contract NegativeYieldToken nyt, contract PerpetualYieldToken pyt)
```

Deploys the NegativeYieldToken and PerpetualYieldToken associated with a vault.

_Will revert if they have already been deployed._

| Name  | Type          | Description                            |
| ----- | ------------- | -------------------------------------- |
| gate  | contract Gate | The gate that will use the NYT and PYT |
| vault | address       | The vault to deploy NYT and PYT for    |

| Name | Type                         | Description                      |
| ---- | ---------------------------- | -------------------------------- |
| nyt  | contract NegativeYieldToken  | The deployed NegativeYieldToken  |
| pyt  | contract PerpetualYieldToken | The deployed PerpetualYieldToken |

## View functions

### getNegativeYieldToken

```solidity
function getNegativeYieldToken(contract Gate gate, address vault) public view virtual returns (contract NegativeYieldToken)
```

Returns the NegativeYieldToken associated with a gate & vault pair.

_Returns non-zero value even if the contract hasn't been deployed yet._

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| gate  | contract Gate | The gate to query  |
| vault | address       | The vault to query |

| Name | Type                        | Description                    |
| ---- | --------------------------- | ------------------------------ |
| [0]  | contract NegativeYieldToken | The NegativeYieldToken address |

### getPerpetualYieldToken

```solidity
function getPerpetualYieldToken(contract Gate gate, address vault) public view virtual returns (contract PerpetualYieldToken)
```

Returns the PerpetualYieldToken associated with a gate & vault pair.

_Returns non-zero value even if the contract hasn't been deployed yet._

| Name  | Type          | Description        |
| ----- | ------------- | ------------------ |
| gate  | contract Gate | The gate to query  |
| vault | address       | The vault to query |

| Name | Type                         | Description                     |
| ---- | ---------------------------- | ------------------------------- |
| [0]  | contract PerpetualYieldToken | The PerpetualYieldToken address |

## Owner functions

### ownerSetProtocolFee

```solidity
function ownerSetProtocolFee(struct Factory.ProtocolFeeInfo protocolFeeInfo_) external virtual
```

Updates the protocol fee and/or the protocol fee recipient.
Only callable by the owner.

| Name              | Type                           | Description               |
| ----------------- | ------------------------------ | ------------------------- |
| protocolFeeInfo\_ | struct Factory.ProtocolFeeInfo | The new protocol fee info |

## Internal functions

### \_computeYieldTokenAddress

```solidity
function _computeYieldTokenAddress(contract Gate gate, address vault, bool isPerpetualYieldToken) internal view virtual returns (address)
```

_Computes the address of PYTs and NYTs using CREATE2._
