const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      hash: "0",
      previousBlockHash: "0",
      timestamp: 1684334511159,
      nonce: 100,
      transactions: [],
    },
    {
      index: 2,
      hash: "00003c43180f21c02659b010eec71d5f49eb24a3768b7b6ebd3a08dc84067152",
      previousBlockHash: "0",
      timestamp: 1684334564538,
      nonce: 44045,
      transactions: [
        {
          amount: 10,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "05c649e0f4c111ed8ebae54386322ecc",
        },
        {
          amount: 20,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "0a1be860f4c111ed8ebae54386322ecc",
        },
        {
          amount: 30,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "0d2aaf00f4c111ed8ebae54386322ecc",
        },
      ],
    },
    {
      index: 3,
      hash: "00003b5b858eb9ee8287b161e75d6a7aba71eaaecb9f346c104b4e147dabb3bf",
      previousBlockHash:
        "00003c43180f21c02659b010eec71d5f49eb24a3768b7b6ebd3a08dc84067152",
      timestamp: 1684334610051,
      nonce: 78099,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "f5b5e470f4c011ed8ebae54386322ecc",
          transactionId: "15881a20f4c111ed8ebae54386322ecc",
        },
        {
          amount: 40,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "21189cc0f4c111ed8ebae54386322ecc",
        },
        {
          amount: 50,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "23a4ecf0f4c111ed8ebae54386322ecc",
        },
        {
          amount: 60,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "26a7ccb0f4c111ed8ebae54386322ecc",
        },
        {
          amount: 70,
          recipient: "X98CVS7DGH97SFD9870Z9",
          transactionId: "297e1e30f4c111ed8ebae54386322ecc",
        },
      ],
    },
    {
      index: 4,
      hash: "00000a6114e8dd464a4995d948c2a9967e62d231d33ebcd096f33f76e64f8b11",
      previousBlockHash:
        "00003b5b858eb9ee8287b161e75d6a7aba71eaaecb9f346c104b4e147dabb3bf",
      timestamp: 1684334617688,
      nonce: 121719,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "f5b5e470f4c011ed8ebae54386322ecc",
          transactionId: "30a81260f4c111ed8ebae54386322ecc",
        },
      ],
    },
    {
      index: 5,
      hash: "0000d35019d5ed121de03bce45582b008b4e1a8099688c784f122f3f2c10178e",
      previousBlockHash:
        "00000a6114e8dd464a4995d948c2a9967e62d231d33ebcd096f33f76e64f8b11",
      timestamp: 1684334618636,
      nonce: 18909,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "f5b5e470f4c011ed8ebae54386322ecc",
          transactionId: "35353ba0f4c111ed8ebae54386322ecc",
        },
      ],
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "f5b5e470f4c011ed8ebae54386322ecc",
      transactionId: "35c5e2e0f4c111ed8ebae54386322ecc",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};
console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
