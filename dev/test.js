const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "23B2KB3KJ4224K3B42KB";
const currentBlockData = [
  {
    amount: 25,
    sender: "2K3JH42JHA34H6L3L6K",
    recepient: "675YUYNUKJKRKBKLYBE",
  },
  {
    amount: 50,
    sender: "34KJJK45B563KJKB",
    recepient: "89CV8C9BN8C9B8VCV89",
  },
  {
    amount: 5,
    sender: "234HB52H4B46KJH23",
    recepient: "G3F636HJD3645D564D36",
  },
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
