const {providers} = require("ethers");

const getSignerAndProvider = async () => {
    if (!window.ethereum) {
        throw new Error(
            'Ethereum is not connected. Please download Metamask from https://metamask.io/download.html'
        );
    }

    console.debug('Initializing web3 provider...');
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return {provider, signer}
}

const getMetamask = async () => {
    const {signer, provider} = await getSignerAndProvider()
    // @ts-ignore
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    if (accounts.length === 0) {
        throw new Error('No account is provided. Please provide an account to this application.');
    }

    const address = accounts[0];

    return {address, provider, signer}
}

module.exports = {getMetamask}