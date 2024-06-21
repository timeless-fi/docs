---
title: BunniToken
hide_table_of_contents: false
sidebar_position: 3
---

# BunniToken

BunniToken is an ERC20 token contract that represents a user's LP position in the Bunni ecosystem. It inherits from ERC20Multicallable, Clone, and Ownable contracts.

## State Variables

### metadataURI

```solidity
string public metadataURI;
```

The URI for the token's metadata.

## Functions

### hub

```solidity
function hub() public pure returns (IBunniHub)
```

Returns the address of the BunniHub contract.

#### Return Value:

| Type      | Description                    |
| --------- | ------------------------------ |
| IBunniHub | The address of the BunniHub contract |

### token0

```solidity
function token0() public pure returns (IERC20)
```

Returns the address of the first token in the pair.

#### Return Value:

| Type   | Description                          |
| ------ | ------------------------------------ |
| IERC20 | The address of the first token (token0) |

### token1

```solidity
function token1() public pure returns (IERC20)
```

Returns the address of the second token in the pair.

#### Return Value:

| Type   | Description                           |
| ------ | ------------------------------------- |
| IERC20 | The address of the second token (token1) |

### name

```solidity
function name() public pure override(ERC20, IERC20) returns (string memory)
```

Returns the name of the token.

#### Return Value:

| Type   | Description         |
| ------ | ------------------- |
| string | The name of the token |

### symbol

```solidity
function symbol() public pure override(ERC20, IERC20) returns (string memory)
```

Returns the symbol of the token.

#### Return Value:

| Type   | Description           |
| ------ | --------------------- |
| string | The symbol of the token |

### initialize

```solidity
function initialize(address owner_, string calldata metadataURI_) external
```

Initializes the BunniToken contract. Can only be called by the BunniHub contract.

#### Parameters:

| Name           | Type    | Description                     |
| -------------- | ------- | ------------------------------- |
| `owner_`       | address | The address of the token owner  |
| `metadataURI_` | string  | The URI for the token's metadata |

### mint

```solidity
function mint(address to, uint256 amount) external
```

Mints new tokens. Can only be called by the BunniHub contract.

#### Parameters:

| Name     | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| `to`     | address | The address to mint the tokens to     |
| `amount` | uint256 | The amount of tokens to mint          |

### burn (from BunniHub)

```solidity
function burn(address from, uint256 amount) external
```

Burns tokens from a specified address. Can only be called by the BunniHub contract.

#### Parameters:

| Name     | Type    | Description                           |
| -------- | ------- | ------------------------------------- |
| `from`   | address | The address to burn the tokens from   |
| `amount` | uint256 | The amount of tokens to burn          |

### burn (from user)

```solidity
function burn(uint256 amount) external
```

Burns tokens from the caller's address.

#### Parameters:

| Name     | Type    | Description                  |
| -------- | ------- | ---------------------------- |
| `amount` | uint256 | The amount of tokens to burn |

### setMetadataURI

```solidity
function setMetadataURI(string calldata metadataURI_) external onlyOwner
```

Sets the metadata URI for the token. Can only be called by the owner.

#### Parameters:

| Name           | Type   | Description                     |
| -------------- | ------ | ------------------------------- |
| `metadataURI_` | string | The new URI for token metadata  |

## Events

### SetMetadataURI

```solidity
event SetMetadataURI(string metadataURI)
```

Emitted when the metadata URI is set.

#### Parameters:

| Name         | Type   | Description                    |
| ------------ | ------ | ------------------------------ |
| `metadataURI`| string | The new URI for token metadata |

## Usage

BunniToken is a crucial component of the Bunni ecosystem, representing users' LP positions as ERC20 tokens. Here are some key points about its usage:

1. It's deployed by the BunniHub contract for each new Bunni pool.
2. The token inherits from ERC20Multicallable, allowing for efficient batch calls.
3. It uses the Clone pattern with immutable arguments for gas-efficient deployment and operation.
4. Only the BunniHub contract can mint new tokens or burn tokens from users' addresses.
5. Users can directly burn their own tokens if they wish.
6. The contract owner can set the metadata URI, which can be used to provide additional information about the LP position.

This contract is particularly useful for:
- Representing LP positions in a standardized, transferable format
- Integrating Bunni liquidity positions with other DeFi protocols

Developers interacting with BunniToken should be aware that most state-changing operations (minting, burning from other addresses) are restricted to the BunniHub contract to ensure the integrity of the LP accounting system.