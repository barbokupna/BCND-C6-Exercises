var HDWalletProvider = require("truffle-hdwallet-provider");

// Be sure to match this mnemonic with that in Ganache!
var mnemonic = "task entry unfold twice include fragile regular resemble dutch hamster weapon desk";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*"      // Any network (default: none)
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 10);
      },
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: { solc: {

    version: "0.4.25", // Fetch exact version from solc-bin (default: truffle's version)
    

    
    // docker: true, // Use "0.5.1" you've installed locally with docker (default: false)
    
    // settings: { // See the solidity docs for advice about optimization and evmVersion // optimizer: { // enabled: false, // runs: 200 // }, // evmVersion: "byzantium" //
   } }
};

