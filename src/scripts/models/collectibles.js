const {getCollectiblesContract} = require("../contracts/collectibles");
const ethers = require("ethers");

class Collectibles {
    constructor(provider, signer, collectiblesAddress) {
        this.provider = provider
        this.signer = signer
        this.collectiblesAddress = collectiblesAddress
        this.collectibles = null
    }

    initCollectibles = async() => {
        if(this.collectibles) return
        this.collectibles = await getCollectiblesContract(this.provider, this.signer, this.collectiblesAddress)
    }

    create = async(metadataURI) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.mint(metadataURI, {value: ethers.utils.parseEther("0.2")})
        return tx
    }

    getTokensByOwner = async(ownerAddress) => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokenIdsByOwner(ownerAddress);
        return tokenIds;
    }


    getTokenURIsByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenURIs = await this.collectibles.contract.getTokenURIsByIds(tokenIds);
        return tokenURIs;
    }

    // getMetadataByIds = async(tokenIds) => {
    //     await this.initCollectibles()
    //     const tokenURIs = await this.getTokenURIsByIds(tokenIds);
    //     const tokens = [];
    //     for(let i=0; i < tokenIds.length; i++){
    //         const metadata = await this.getMetadataByURI(tokenURIs[i]);
    //         tokens.push({
    //             id: tokenIds[i],
    //             ...metadata
    //         });
    //     }
    //     return tokens;
    // }

    // getMetadataByURI = async(tokenURI) => {
    //     await this.initCollectibles()
    //     const bufferedContents = await toBuffer(ipfs.cat(tokenURI)) // returns a Buffer
    //     const stringContents = bufferedContents.toString() // returns a string
    //     const metadata = JSON.parse(stringContents)
    //     return metadata
    // }

    sell = async(tokenId, price) => {
        await this.initCollectibles()
        const tx = await this.collectibles.signer.sell(tokenId, price)
        return tx
    }

    buy = async(tokenId, amount) => {
        // Make sure you include sellCharge in amount
        await this.initCollectibles()
        const tx = await this.collectibles.signer.buy(tokenId, {value: ethers.utils.parseEther(amount)})
        return tx
    }

    getTokenIdsForSale = async() => {
        await this.initCollectibles()
        const tokenIds = await this.collectibles.contract.getTokensForSale()
        return tokenIds
    }

    getTokenPriceByIds = async(tokenIds) => {
        await this.initCollectibles()
        const tokenPrices = await this.collectibles.contract.getTokenPriceByIds(tokenIds)
        return tokenPrices
    }
}

module.exports = Collectibles