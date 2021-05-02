const {Contract} = require('ethers');
const ICollectibles = require("./abi/ICollectibles");

async function getCollectiblesContract(provider, signer, collectiblesAddress) {
    const collectiblesContract = new Contract(collectiblesAddress, ICollectibles.abi, provider)
    const collectiblesSigner = collectiblesContract.connect(signer)
    return {contract: collectiblesContract, signer: collectiblesSigner}
}

module.exports = {
    getCollectiblesContract
}
