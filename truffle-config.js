const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
     host: "localhost",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*", 
    }
  },
  compilers: {
    solc: {
      version: "0.6.0",
    },
  }
};
