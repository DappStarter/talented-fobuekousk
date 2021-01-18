require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain social give private food task'; 
let testAccounts = [
"0x60a0350644e70f5995088c244e6b8e78eb0b93f312f65d1285234e29c6b56a50",
"0xb5c8dcb1a024bdd053ba2558a046f6b7a8e787748a5007704a34b26ec6867daf",
"0x1f93b1cb3a2d43c676fb21f9fc764b17c28541f3658d32458f6739bcfe20e69b",
"0x1d2a55e59b3ad86645a11f93c8e1620643cc21e27498388a4f6e07655c8f46b4",
"0xdc3ded5322c3136cfe8cfea3640223bf58c6e322e67055c707ecca44bb37e464",
"0xb6efbf515b2ba415d25e4ee6f6a6c36ccc3b03ca7b59dbfb0f691efd1f624277",
"0x1d1f19b17313722258ab973da480401623cd3b994f8340b60f7c399518deb8f2",
"0x3be82d06029ae842c63b63784923cf68a72ceb9d7bdf9d8ee370dbbd7ca59a9e",
"0x13fb5c012942570384d8a19cc461bc04442474b2daca7b74c00e0eebd940272a",
"0x4e63bde2de31f1cc3e66f22c9e0e59db6390000a287daa61ba2dccdb2777a179"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
