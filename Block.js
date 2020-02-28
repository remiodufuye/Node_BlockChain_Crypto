
class Block {
    constructor(timestamp,lastHash ,Hash,data) {
        this.timestamp = timestamp ;
        this.lastHash = lastHash ;
        this.Hash = Hash ;
        this.data = data ; 

    }

    toString() {
        return `Block -
        Timestamp: ${this.timestamp}
        lastHash : ${this.lastHash.substring(0,10)}
        Hash     : ${this.Hash.substring(0,10)}
        Data     : ${this.data}` ; 
    }
}  


module.exports = Block 