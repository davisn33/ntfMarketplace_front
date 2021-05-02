const ICollectibles = {
  "contractName": "ICollectibles",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "metadataURI",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getTokenIdsByOwner",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "getTokenURIsByIds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "buy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenIdsForSale",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "tokenIds",
          "type": "uint256[]"
        }
      ],
      "name": "getTokenPriceByIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.4+commit.c7e474f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"buy\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"getTokenIdsByOwner\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTokenIdsForSale\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"getTokenPriceByIds\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenIds\",\"type\":\"uint256[]\"}],\"name\":\"getTokenURIsByIds\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"metadataURI\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"sell\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the number of tokens in ``owner``'s account.\"},\"getApproved(uint256)\":{\"details\":\"Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.\"},\"isApprovedForAll(address,address)\":{\"details\":\"Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}\"},\"ownerOf(uint256)\":{\"details\":\"Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":\"ICollectibles\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol\":{\"keccak256\":\"0xc380a862e1925dd1e462218c448aa667df47a9c9b804e6d69b6510b52c9276b1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb2116e758e95ae0d5289f4dca0b12f64d5a04d51b877023a6487ac91fc0ec32\",\"dweb:/ipfs/QmZxocRR76dCvKyC1AB66Rb37ueBszDyBGCPQerNNgZpSk\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xc1c941ad1e580b4623007305921efe2f26fc7320a4edc226234dd707c658a428\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://473e11d739868e0d9f48254ccf84ba63290d6a2321d59a37b74c244a27f9cad7\",\"dweb:/ipfs/QmUGzDmecP936jzgM7SYyGwR1YgBGsveoHHJTbDfB8jbGF\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0xa28007762d9da9db878dd421960c8cb9a10471f47ab5c1b3309bfe48e9e79ff4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://796ab6e88af7bf0e78def0f059310c903af6a312b565344e0ff524a0f26e81c6\",\"dweb:/ipfs/QmcsVgLgzWdor3UnAztUkXKNGcysm1MPneWksF72AvnwBx\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^0.8.0;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC721/IERC721.sol\";\r\n\r\ninterface ICollectibles is IERC721 {\r\n    function mint(string memory metadataURI) external payable;\r\n    function getTokenIdsByOwner(address owner) external view returns(uint[] memory);\r\n    function getTokenURIsByIds(uint[] memory tokenIds) external view returns(string[] memory);\r\n    function sell(uint tokenId, uint price) external;\r\n    function buy(uint tokenId) external payable;\r\n    function getTokenIdsForSale() external view returns(uint[] memory);\r\n    function getTokenPriceByIds(uint[] memory tokenIds) external view returns(uint[] memory);\r\n}\r\n",
  "sourcePath": "C:/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
  "ast": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        477
      ],
      "IERC165": [
        2176
      ],
      "IERC721": [
        1414
      ]
    },
    "id": 478,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 424,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 425,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 478,
        "sourceUnit": 1415,
        "src": "60:58:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 426,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1414,
              "src": "149:7:1"
            },
            "id": 427,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:1"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 477,
        "linearizedBaseContracts": [
          477,
          1414,
          2176
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "d85d3d27",
            "id": 432,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 429,
                  "mutability": "mutable",
                  "name": "metadataURI",
                  "nameLocation": "192:11:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 432,
                  "src": "178:25:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 428,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:27:1"
            },
            "returnParameters": {
              "id": 431,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:0:1"
            },
            "scope": 477,
            "src": "164:58:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 440,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "237:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 434,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "264:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 440,
                  "src": "256:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "255:15:1"
            },
            "returnParameters": {
              "id": 439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 438,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 440,
                  "src": "293:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 436,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "293:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 437,
                    "nodeType": "ArrayTypeName",
                    "src": "293:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "292:15:1"
            },
            "scope": 477,
            "src": "228:80:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 449,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "323:17:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 443,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "355:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 449,
                  "src": "341:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 441,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "341:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 442,
                    "nodeType": "ArrayTypeName",
                    "src": "341:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "340:24:1"
            },
            "returnParameters": {
              "id": 448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 447,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 449,
                  "src": "387:15:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 445,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "387:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 446,
                    "nodeType": "ArrayTypeName",
                    "src": "387:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "386:17:1"
            },
            "scope": 477,
            "src": "314:90:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 456,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "419:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 451,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "429:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 456,
                  "src": "424:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 450,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 453,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "443:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 456,
                  "src": "438:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 452,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "423:26:1"
            },
            "returnParameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "458:0:1"
            },
            "scope": 477,
            "src": "410:49:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 461,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "474:3:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "483:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 461,
                  "src": "478:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "477:14:1"
            },
            "returnParameters": {
              "id": 460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:1"
            },
            "scope": 477,
            "src": "465:44:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "af73154d",
            "id": 467,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSale",
            "nameLocation": "524:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 462,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "542:2:1"
            },
            "returnParameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 465,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 467,
                  "src": "567:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 463,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "567:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 464,
                    "nodeType": "ArrayTypeName",
                    "src": "567:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "566:15:1"
            },
            "scope": 477,
            "src": "515:67:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "553b9816",
            "id": 476,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceByIds",
            "nameLocation": "597:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 470,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "630:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "616:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 468,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "616:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 469,
                    "nodeType": "ArrayTypeName",
                    "src": "616:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "615:24:1"
            },
            "returnParameters": {
              "id": 475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 474,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "662:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 472,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "662:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 473,
                    "nodeType": "ArrayTypeName",
                    "src": "662:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "661:15:1"
            },
            "scope": 477,
            "src": "588:89:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 478,
        "src": "122:558:1",
        "usedErrors": []
      }
    ],
    "src": "33:649:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Root/Documents/my_ethereum/NFT-Marketplace/contracts/ICollectibles.sol",
    "exportedSymbols": {
      "ICollectibles": [
        477
      ],
      "IERC165": [
        2176
      ],
      "IERC721": [
        1414
      ]
    },
    "id": 478,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 424,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/IERC721.sol",
        "id": 425,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 478,
        "sourceUnit": 1415,
        "src": "60:58:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 426,
              "name": "IERC721",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1414,
              "src": "149:7:1"
            },
            "id": 427,
            "nodeType": "InheritanceSpecifier",
            "src": "149:7:1"
          }
        ],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 477,
        "linearizedBaseContracts": [
          477,
          1414,
          2176
        ],
        "name": "ICollectibles",
        "nameLocation": "132:13:1",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "functionSelector": "d85d3d27",
            "id": 432,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "173:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 430,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 429,
                  "mutability": "mutable",
                  "name": "metadataURI",
                  "nameLocation": "192:11:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 432,
                  "src": "178:25:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 428,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "178:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "177:27:1"
            },
            "returnParameters": {
              "id": 431,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "221:0:1"
            },
            "scope": 477,
            "src": "164:58:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "6970bb0a",
            "id": 440,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsByOwner",
            "nameLocation": "237:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 434,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "264:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 440,
                  "src": "256:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 433,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "256:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "255:15:1"
            },
            "returnParameters": {
              "id": 439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 438,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 440,
                  "src": "293:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 436,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "293:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 437,
                    "nodeType": "ArrayTypeName",
                    "src": "293:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "292:15:1"
            },
            "scope": 477,
            "src": "228:80:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "a865bf6a",
            "id": 449,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenURIsByIds",
            "nameLocation": "323:17:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 443,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "355:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 449,
                  "src": "341:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 441,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "341:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 442,
                    "nodeType": "ArrayTypeName",
                    "src": "341:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "340:24:1"
            },
            "returnParameters": {
              "id": 448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 447,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 449,
                  "src": "387:15:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 445,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "387:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 446,
                    "nodeType": "ArrayTypeName",
                    "src": "387:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "386:17:1"
            },
            "scope": 477,
            "src": "314:90:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d79875eb",
            "id": 456,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sell",
            "nameLocation": "419:4:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 451,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "429:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 456,
                  "src": "424:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 450,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 453,
                  "mutability": "mutable",
                  "name": "price",
                  "nameLocation": "443:5:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 456,
                  "src": "438:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 452,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "423:26:1"
            },
            "returnParameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "458:0:1"
            },
            "scope": 477,
            "src": "410:49:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "d96a094a",
            "id": 461,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "buy",
            "nameLocation": "474:3:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 458,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "483:7:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 461,
                  "src": "478:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 457,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "478:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "477:14:1"
            },
            "returnParameters": {
              "id": 460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:1"
            },
            "scope": 477,
            "src": "465:44:1",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "af73154d",
            "id": 467,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenIdsForSale",
            "nameLocation": "524:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 462,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "542:2:1"
            },
            "returnParameters": {
              "id": 466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 465,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 467,
                  "src": "567:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 463,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "567:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 464,
                    "nodeType": "ArrayTypeName",
                    "src": "567:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "566:15:1"
            },
            "scope": 477,
            "src": "515:67:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "functionSelector": "553b9816",
            "id": 476,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getTokenPriceByIds",
            "nameLocation": "597:18:1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 470,
                  "mutability": "mutable",
                  "name": "tokenIds",
                  "nameLocation": "630:8:1",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "616:22:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 468,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "616:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 469,
                    "nodeType": "ArrayTypeName",
                    "src": "616:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "615:24:1"
            },
            "returnParameters": {
              "id": 475,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 474,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 476,
                  "src": "662:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 472,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "662:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 473,
                    "nodeType": "ArrayTypeName",
                    "src": "662:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "661:15:1"
            },
            "scope": 477,
            "src": "588:89:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "scope": 478,
        "src": "122:558:1",
        "usedErrors": []
      }
    ],
    "src": "33:649:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.4+commit.c7e474f2.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.3",
  "updatedAt": "2021-04-29T07:58:16.845Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the number of tokens in ``owner``'s account."
      },
      "getApproved(uint256)": {
        "details": "Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "isApprovedForAll(address,address)": {
        "details": "Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}"
      },
      "ownerOf(uint256)": {
        "details": "Returns the owner of the `tokenId` token. Requirements: - `tokenId` must exist."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event."
      },
      "setApprovalForAll(address,bool)": {
        "details": "Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event."
      },
      "supportsInterface(bytes4)": {
        "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers `tokenId` token from `from` to `to`. WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};
module.exports = ICollectibles;