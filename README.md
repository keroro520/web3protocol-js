# web3protocol

[![npm version](https://badge.fury.io/js/web3protocol.svg)](https://www.npmjs.com/package/web3protocol)

Parse and execute [ERC-4804](https://eips.ethereum.org/EIPS/eip-4804) web3:// URLs. Used by [EVM Browser](https://github.com/nand2/evm-browser) to browse web3:// on-chain websites.

RPCs used to make the calls are provided by [Viem.sh](https://viem.sh/) and [chainid.network](https://chainid.network/chains.json).

### fetchUrl(url, opts)

Fetch a web3:// URL, such as 

```web3://0xA5aFC9fE76a28fB12C60954Ed6e2e5f8ceF64Ff2/resourceName```

This calls ``parseUrl()`` then ``fetchParsedUrl()``

``opts`` is an object of options. 2 options : 

- useEmbeddedChainRPCs : A boolean indicating whether to use RPC URLs provided in this package. By setting it to false, nothing will work unless you specify chains RPCs with the ``chains`` option.
- chains: Contains an array of chain objects (``id``, ``rpcUrls`` members), which override existing chains, or add non-existing chains. Example:

```
{
  chains: [{
    id: 1,
    rpcUrls: ['https://cloudflare-eth.com']
  }]
}
```

### parseUrl(url, opts)

Parse an web3:// URL into its components.

### fetchParsedUrl(parsedUrl, opts)

Taking into argument the output of ``parseUrl()``, it will execute it and fetch the result. The result is the actual output, and the MIME type to use.

## Implemented features

- [ERC-4804](https://eips.ethereum.org/EIPS/eip-4804) : the base web3:// protocol with auto and manual mode, basic ENS support
- [ERC-6821](https://eips.ethereum.org/EIPS/eip-6821) (draft) : ENS resolution : support for the ``contentcontract`` TXT field to point to a contract in another chain
- [ERC-6944](https://eips.ethereum.org/EIPS/eip-6944) (draft) / [ERC-5219](https://eips.ethereum.org/EIPS/eip-5219) : New mode offloading some parsing processing on the browser side
- Not standard : Linagee .og domain names

## Upcoming features

- [ERC-7087](https://github.com/ethereum/EIPs/pull/7087) (pending) : Auto mode : Add more flexibility to specify the MIME type.