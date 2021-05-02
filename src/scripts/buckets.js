const {Buckets, PrivateKey} = require("@textile/hub");
const toBuffer = require("it-to-buffer");

const KEY = {key: process.env.REACT_APP_TEXTILE_KEY}

class Bucket {
    constructor(){
        this.buckets = null
        this.buckKey = null
    }

    initBuckets = async() => {

        if(this.buckets && this.buckKey) return
        const identity = PrivateKey.fromString(process.env.REACT_APP_IDENTITY)
        const buckets = await Buckets.withKeyInfo(KEY)
        await buckets.getToken(identity)
        const buck = await buckets.getOrCreate('nft')
        const buckKey = buck.root.key
        
        this.buckets = buckets
        this.buckKey = buckKey
    }

    pushBlob = async(fileName, blob) => {
        await this.initBuckets()
        const file = { path: fileName, content: blob }
        await this.buckets.pushPath(this.buckKey, fileName, file)
    }

    pullBlob = async(fileName) => {
        await this.initBuckets()
        const buf = await toBuffer(this.buckets.pullPath(this.buckKey, fileName))
        return buf
    }
    
    pushJSON = async(name, data) => {
        await this.initBuckets()
        const content = JSON.stringify(data)
        const file = { path: `/${name}.json`, content: Buffer.from(content) }
        await this.buckets.pushPath(this.buckKey, `/${name}.json`, file)
    }
    
    pullJSON = async(name) => {
        await this.initBuckets()
        const buf = await toBuffer(this.buckets.pullPath(this.buckKey, `${name}.json`))
        return JSON.parse(Buffer.from(buf).toString("utf-8"))
    }
    
    getIpnsLink = async() => {
        await this.initBuckets()
        const links = await this.buckets.links(this.buckKey)
        return links.ipns
    }
}

module.exports = Bucket