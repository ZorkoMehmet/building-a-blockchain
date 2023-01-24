function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (nonce, hash, previousBlockHash){
    const newBlock = {
        index: this.chain.length + 1,
        hash: hash,
        previousBlockHash: previousBlockHash,
        timestamp: Date.now(),
        nonce: nonce,
        transactions: this.newTransactions
    }
    this.newTransactions = [];
    this.chain.push(newBlock)

    return newBlock;
}