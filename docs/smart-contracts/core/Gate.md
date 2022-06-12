---
sidebar_position: 2
---

# Gate

Gate is the main contract users interact with to mint/burn NegativeYieldToken
and PerpetualYieldToken, as well as claim the yield earned by PYTs.

_Gate is an abstract contract that should be inherited from in order to support
a specific vault protocol (e.g. YearnGate supports YearnVault). Each Gate handles
all vaults & associated NYTs/PYTs of a specific vault protocol.
Vaults are yield-generating contracts used by Gate. Gate makes several assumptions about
a vault:
1) A vault has a single associated underlying token that is immutable.
2) A vault gives depositors yield denominated in the underlying token.
3) A vault depositor owns shares in the vault, which represents their deposit.
4) Vaults have a notion of "price per share", which is the amount of underlying tokens
   each vault share can be redeemed for.
5) If vault shares are represented using an ERC20 token, then the ERC20 token contract must be
   the vault contract itself._

## Errors

### Error_InvalidInput

```solidity
error Error_InvalidInput()
```

### Error_VaultSharesNotERC20

```solidity
error Error_VaultSharesNotERC20()
```

### Error_TokenPairNotDeployed

```solidity
error Error_TokenPairNotDeployed()
```

### Error_EmergencyExitNotActivated

```solidity
error Error_EmergencyExitNotActivated()
```

### Error_SenderNotPerpetualYieldToken

```solidity
error Error_SenderNotPerpetualYieldToken()
```

### Error_EmergencyExitAlreadyActivated

```solidity
error Error_EmergencyExitAlreadyActivated()
```

## Events

### EnterWithUnderlying

```solidity
event EnterWithUnderlying(address sender, address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 underlyingAmount)
```

### EnterWithVaultShares

```solidity
event EnterWithVaultShares(address sender, address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 vaultSharesAmount)
```

### ExitToUnderlying

```solidity
event ExitToUnderlying(address sender, address recipient, address vault, contract IxPYT xPYT, uint256 underlyingAmount)
```

### ExitToVaultShares

```solidity
event ExitToVaultShares(address sender, address recipient, address vault, contract IxPYT xPYT, uint256 vaultSharesAmount)
```

### ClaimYieldInUnderlying

```solidity
event ClaimYieldInUnderlying(address sender, address recipient, address vault, uint256 underlyingAmount)
```

### ClaimYieldInVaultShares

```solidity
event ClaimYieldInVaultShares(address sender, address recipient, address vault, uint256 vaultSharesAmount)
```

### ClaimYieldAndEnter

```solidity
event ClaimYieldAndEnter(address sender, address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 amount)
```

## Structs

### EmergencyExitStatus

```solidity
struct EmergencyExitStatus {
  bool activated;
  uint96 pytPriceInUnderlying;
}
```

## Constants

### PRECISION_DECIMALS

```solidity
uint256 PRECISION_DECIMALS
```

The decimals of precision used by yieldPerTokenStored and pricePerVaultShareStored

### PRECISION

```solidity
uint256 PRECISION
```

The precision used by yieldPerTokenStored and pricePerVaultShareStored

## Immutable parameters

### factory

```solidity
contract Factory factory
```

## State variables

### pricePerVaultShareStored

```solidity
mapping(address => uint256) pricePerVaultShareStored
```

The amount of underlying tokens each vault share is worth, at the time of the last update.
Uses PRECISION.

_vault => value_

### yieldPerTokenStored

```solidity
mapping(address => uint256) yieldPerTokenStored
```

The amount of yield each PYT has accrued, at the time of the last update.
Scaled by PRECISION.

_vault => value_

### userYieldPerTokenStored

```solidity
mapping(address => mapping(address => uint256)) userYieldPerTokenStored
```

The amount of yield each PYT has accrued, at the time when a user has last interacted
with the gate/PYT. Shifted by 1, so e.g. 3 represents 2, 10 represents 9.

_vault => user => value
The value is shifted to use 0 for representing uninitialized users._

### userAccruedYield

```solidity
mapping(address => mapping(address => uint256)) userAccruedYield
```

The amount of yield a user has accrued, at the time when they last interacted
with the gate/PYT (without calling claimYieldInUnderlying()).
Shifted by 1, so e.g. 3 represents 2, 10 represents 9.

_vault => user => value_

### emergencyExitStatusOfVault

```solidity
mapping(address => struct Gate.EmergencyExitStatus) emergencyExitStatusOfVault
```

Stores info relevant to emergency exits of a vault.

_vault => value_

## State-mutating functions

### enterWithUnderlying

```solidity
function enterWithUnderlying(address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 underlyingAmount) external virtual returns (uint256 mintAmount)
```

Converts underlying tokens into NegativeYieldToken and PerpetualYieldToken.
The amount of NYT and PYT minted will be equal to the underlying token amount.

_The underlying tokens will be immediately deposited into the specified vault.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
deploy them before proceeding, which will increase the gas cost significantly._

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytRecipient | address | The recipient of the minted NYT |
| pytRecipient | address | The recipient of the minted PYT |
| vault | address | The vault to mint NYT and PYT for |
| xPYT | contract IxPYT | The xPYT contract to deposit the minted PYT into. Set to 0 to receive raw PYT instead. |
| underlyingAmount | uint256 | The amount of underlying tokens to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| mintAmount | uint256 | The amount of NYT and PYT minted (the amounts are equal) |

### enterWithVaultShares

```solidity
function enterWithVaultShares(address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 vaultSharesAmount) external virtual returns (uint256 mintAmount)
```

Converts vault share tokens into NegativeYieldToken and PerpetualYieldToken.

_Only available if vault shares are transferrable ERC20 tokens.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
deploy them before proceeding, which will increase the gas cost significantly._

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytRecipient | address | The recipient of the minted NYT |
| pytRecipient | address | The recipient of the minted PYT |
| vault | address | The vault to mint NYT and PYT for |
| xPYT | contract IxPYT | The xPYT contract to deposit the minted PYT into. Set to 0 to receive raw PYT instead. |
| vaultSharesAmount | uint256 | The amount of vault share tokens to use |

| Name | Type | Description |
| ---- | ---- | ----------- |
| mintAmount | uint256 | The amount of NYT and PYT minted (the amounts are equal) |

### exitToUnderlying

```solidity
function exitToUnderlying(address recipient, address vault, contract IxPYT xPYT, uint256 underlyingAmount) external virtual returns (uint256 burnAmount)
```

Converts NegativeYieldToken and PerpetualYieldToken to underlying tokens.
The amount of NYT and PYT burned will be equal to the underlying token amount.

_The underlying tokens will be immediately withdrawn from the specified vault.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
revert._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient of the minted NYT and PYT |
| vault | address | The vault to mint NYT and PYT for |
| xPYT | contract IxPYT | The xPYT contract to use for burning PYT. Set to 0 to burn raw PYT instead. |
| underlyingAmount | uint256 | The amount of underlying tokens requested |

| Name | Type | Description |
| ---- | ---- | ----------- |
| burnAmount | uint256 | The amount of NYT and PYT burned (the amounts are equal) |

### exitToVaultShares

```solidity
function exitToVaultShares(address recipient, address vault, contract IxPYT xPYT, uint256 vaultSharesAmount) external virtual returns (uint256 burnAmount)
```

Converts NegativeYieldToken and PerpetualYieldToken to vault share tokens.
The amount of NYT and PYT burned will be equal to the underlying token amount.

_Only available if vault shares are transferrable ERC20 tokens.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
revert._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient of the minted NYT and PYT |
| vault | address | The vault to mint NYT and PYT for |
| xPYT | contract IxPYT | The xPYT contract to use for burning PYT. Set to 0 to burn raw PYT instead. |
| vaultSharesAmount | uint256 | The amount of vault share tokens requested |

| Name | Type | Description |
| ---- | ---- | ----------- |
| burnAmount | uint256 | The amount of NYT and PYT burned (the amounts are equal) |

### claimYieldInUnderlying

```solidity
function claimYieldInUnderlying(address recipient, address vault) external virtual returns (uint256 yieldAmount)
```

Claims the yield earned by the PerpetualYieldToken balance of msg.sender, in the underlying token.

_If the NYT and PYT for the specified vault haven't been deployed yet, this call will
revert._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient of the yield |
| vault | address | The vault to claim yield from |

| Name | Type | Description |
| ---- | ---- | ----------- |
| yieldAmount | uint256 | The amount of yield claimed, in underlying tokens |

### claimYieldInVaultShares

```solidity
function claimYieldInVaultShares(address recipient, address vault) external virtual returns (uint256 yieldAmount)
```

Claims the yield earned by the PerpetualYieldToken balance of msg.sender, in vault shares.

_Only available if vault shares are transferrable ERC20 tokens.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
revert._

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient of the yield |
| vault | address | The vault to claim yield from |

| Name | Type | Description |
| ---- | ---- | ----------- |
| yieldAmount | uint256 | The amount of yield claimed, in vault shares |

### claimYieldAndEnter

```solidity
function claimYieldAndEnter(address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT) external virtual returns (uint256 yieldAmount)
```

Claims the yield earned by the PerpetualYieldToken balance of msg.sender, and immediately
use the yield to mint NYT and PYT.

_Introduced to save gas for xPYT compounding, since it avoids vault withdraws/transfers.
If the NYT and PYT for the specified vault haven't been deployed yet, this call will
revert._

| Name | Type | Description |
| ---- | ---- | ----------- |
| nytRecipient | address | The recipient of the minted NYT |
| pytRecipient | address | The recipient of the minted PYT |
| vault | address | The vault to claim yield from |
| xPYT | contract IxPYT | The xPYT contract to deposit the minted PYT into. Set to 0 to receive raw PYT instead. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| yieldAmount | uint256 | The amount of yield claimed, in underlying tokens |

## View functions

### getNegativeYieldTokenForVault

```solidity
function getNegativeYieldTokenForVault(address vault) public view virtual returns (contract NegativeYieldToken)
```

Returns the NegativeYieldToken associated with a vault.

_Returns non-zero value even if the contract hasn't been deployed yet._

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract NegativeYieldToken | The NegativeYieldToken address |

### getPerpetualYieldTokenForVault

```solidity
function getPerpetualYieldTokenForVault(address vault) public view virtual returns (contract PerpetualYieldToken)
```

Returns the PerpetualYieldToken associated with a vault.

_Returns non-zero value even if the contract hasn't been deployed yet._

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract PerpetualYieldToken | The PerpetualYieldToken address |

### getClaimableYieldAmount

```solidity
function getClaimableYieldAmount(address vault, address user) external view virtual returns (uint256 yieldAmount)
```

Returns the amount of yield claimable by a PerpetualYieldToken holder from a vault.
Accounts for protocol fees.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |
| user | address | The PYT holder to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| yieldAmount | uint256 | The amount of yield claimable |

### computeYieldPerToken

```solidity
function computeYieldPerToken(address vault) external view virtual returns (uint256)
```

Computes the latest yieldPerToken value for a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The latest yieldPerToken value |

### getUnderlyingOfVault

```solidity
function getUnderlyingOfVault(address vault) public view virtual returns (contract ERC20)
```

Returns the underlying token of a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract ERC20 | The underlying token |

### getPricePerVaultShare

```solidity
function getPricePerVaultShare(address vault) public view virtual returns (uint256)
```

Returns the amount of underlying tokens each share of a vault is worth.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The pricePerVaultShare value |

### getVaultShareBalance

```solidity
function getVaultShareBalance(address vault) public view virtual returns (uint256)
```

Returns the amount of vault shares owned by the gate.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | The gate's vault share balance |

### vaultSharesIsERC20

```solidity
function vaultSharesIsERC20() public pure virtual returns (bool)
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | True if the vaults supported by this gate use transferrable ERC20 tokens to represent shares, false otherwise. |

### negativeYieldTokenName

```solidity
function negativeYieldTokenName(address vault) external view virtual returns (string)
```

Computes the ERC20 name of the NegativeYieldToken of a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The ERC20 name |

### negativeYieldTokenSymbol

```solidity
function negativeYieldTokenSymbol(address vault) external view virtual returns (string)
```

Computes the ERC20 symbol of the NegativeYieldToken of a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The ERC20 symbol |

### perpetualYieldTokenName

```solidity
function perpetualYieldTokenName(address vault) external view virtual returns (string)
```

Computes the ERC20 name of the PerpetualYieldToken of a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The ERC20 name |

### perpetualYieldTokenSymbol

```solidity
function perpetualYieldTokenSymbol(address vault) external view virtual returns (string)
```

Computes the ERC20 symbol of the NegativeYieldToken of a vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to query |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | string | The ERC20 symbol |

### beforePerpetualYieldTokenTransfer

```solidity
function beforePerpetualYieldTokenTransfer(address from, address to, uint256 amount, uint256 fromBalance, uint256 toBalance) external virtual
```

SHOULD NOT BE CALLED BY USERS, ONLY CALLED BY PERPETUAL YIELD TOKEN CONTRACTS

_Called by PYT contracts deployed by this gate before each token transfer, in order to
accrue the yield earned by the from & to accounts_

| Name | Type | Description |
| ---- | ---- | ----------- |
| from | address | The token transfer from account |
| to | address | The token transfer to account |
| amount | uint256 |  |
| fromBalance | uint256 | The token balance of the from account before the transfer |
| toBalance | uint256 | The token balance of the to account before the transfer |

## Emergency exit functions

### ownerActivateEmergencyExitForVault

```solidity
function ownerActivateEmergencyExitForVault(address vault, uint96 pytPriceInUnderlying) external virtual
```

Activates the emergency exit mode for a certain vault. Only callable by owner.

_Activating emergency exit allows PYT/NYT holders to do single-sided burns to redeem the underlying
collateral. This is to prevent cases where a large portion of PYT/NYT is locked up in a buggy/malicious contract
and locks up the underlying collateral forever._

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to activate emergency exit for |
| pytPriceInUnderlying | uint96 | The amount of underlying asset burning each PYT can redeem. Scaled by PRECISION. |

### ownerDeactivateEmergencyExitForVault

```solidity
function ownerDeactivateEmergencyExitForVault(address vault) external virtual
```

Deactivates the emergency exit mode for a certain vault. Only callable by owner.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to deactivate emergency exit for |

### emergencyExitNegativeYieldToken

```solidity
function emergencyExitNegativeYieldToken(address vault, uint256 amount, address recipient) external virtual returns (uint256 underlyingAmount)
```

Emergency exit NYTs into the underlying asset. Only callable when emergency exit has
been activated for the vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to exit NYT for |
| amount | uint256 | The amount of NYT to exit |
| recipient | address | The recipient of the underlying asset |

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlyingAmount | uint256 | The amount of underlying asset exited |

### emergencyExitPerpetualYieldToken

```solidity
function emergencyExitPerpetualYieldToken(address vault, contract IxPYT xPYT, uint256 amount, address recipient) external virtual returns (uint256 underlyingAmount)
```

Emergency exit PYTs into the underlying asset. Only callable when emergency exit has
been activated for the vault.

| Name | Type | Description |
| ---- | ---- | ----------- |
| vault | address | The vault to exit PYT for |
| xPYT | contract IxPYT | The xPYT contract to use for burning PYT. Set to 0 to burn raw PYT instead. |
| amount | uint256 | The amount of PYT to exit |
| recipient | address | The recipient of the underlying asset |

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlyingAmount | uint256 | The amount of underlying asset exited |

## Internal functions

### _accrueYield

```solidity
function _accrueYield(address vault, contract PerpetualYieldToken pyt, address user, uint256 updatedPricePerVaultShare) internal virtual
```

_Updates the yield earned globally and for a particular user._

### _enter

```solidity
function _enter(address nytRecipient, address pytRecipient, address vault, contract IxPYT xPYT, uint256 underlyingAmount, uint256 updatedPricePerVaultShare) internal virtual
```

_Mints PYTs and NYTs to the recipient given the amount of underlying deposited._

### _exit

```solidity
function _exit(address vault, contract IxPYT xPYT, uint256 underlyingAmount, uint256 updatedPricePerVaultShare) internal virtual
```

_Burns PYTs and NYTs from msg.sender given the amount of underlying withdrawn._

### _claimYield

```solidity
function _claimYield(address vault, uint256 updatedPricePerVaultShare) internal virtual returns (uint256 yieldAmount)
```

_Updates storage variables for when a PYT holder claims the accrued yield._

### _getClaimableYieldAmount

```solidity
function _getClaimableYieldAmount(address vault, address user, uint256 updatedYieldPerToken, uint256 userYieldPerTokenStored_, uint256 userPYTBalance) internal view virtual returns (uint256 yieldAmount)
```

_Returns the amount of yield claimable by a PerpetualYieldToken holder from a vault.
Assumes userYieldPerTokenStored_ != 0. Does not account for protocol fees._

### _depositIntoVault

```solidity
function _depositIntoVault(contract ERC20 underlying, uint256 underlyingAmount, address vault) internal virtual
```

_Deposits underlying tokens into a vault_

| Name | Type | Description |
| ---- | ---- | ----------- |
| underlying | contract ERC20 | The underlying token to deposit |
| underlyingAmount | uint256 | The amount of tokens to deposit |
| vault | address | The vault to deposit into |

### _withdrawFromVault

```solidity
function _withdrawFromVault(address recipient, address vault, uint256 underlyingAmount, uint256 pricePerVaultShare, bool checkBalance) internal virtual returns (uint256 withdrawnUnderlyingAmount)
```

_Withdraws underlying tokens from a vault_

| Name | Type | Description |
| ---- | ---- | ----------- |
| recipient | address | The recipient of the underlying tokens |
| vault | address | The vault to withdraw from |
| underlyingAmount | uint256 | The amount of tokens to withdraw |
| pricePerVaultShare | uint256 | The latest price per vault share value |
| checkBalance | bool | Set to true to withdraw the entire balance if we're trying to withdraw more than the balance (due to rounding errors) |

| Name | Type | Description |
| ---- | ---- | ----------- |
| withdrawnUnderlyingAmount | uint256 | The amount of underlying tokens withdrawn |

### _vaultSharesAmountToUnderlyingAmount

```solidity
function _vaultSharesAmountToUnderlyingAmount(address vault, uint256 vaultSharesAmount, uint256 pricePerVaultShare) internal view virtual returns (uint256)
```

_Converts a vault share amount into an equivalent underlying asset amount_

### _vaultSharesAmountToUnderlyingAmountRoundingUp

```solidity
function _vaultSharesAmountToUnderlyingAmountRoundingUp(address vault, uint256 vaultSharesAmount, uint256 pricePerVaultShare) internal view virtual returns (uint256)
```

_Converts a vault share amount into an equivalent underlying asset amount, rounding up_

### _underlyingAmountToVaultSharesAmount

```solidity
function _underlyingAmountToVaultSharesAmount(address vault, uint256 underlyingAmount, uint256 pricePerVaultShare) internal view virtual returns (uint256)
```

_Converts an underlying asset amount into an equivalent vault shares amount_

### _computeYieldPerToken

```solidity
function _computeYieldPerToken(address vault, contract PerpetualYieldToken pyt, uint256 updatedPricePerVaultShare) internal view virtual returns (uint256)
```

_Computes the latest yieldPerToken value for a vault._

