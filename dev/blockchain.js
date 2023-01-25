function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    hash: hash,
    previousBlockHash: previousBlockHash,
    timestamp: Date.now(),
    nonce: nonce,
    transactions: this.newTransactions,
  };
  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.hashBlock = function (previousBlockHash, nonce, currentBlockData){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}



module.exports = Blockchain;