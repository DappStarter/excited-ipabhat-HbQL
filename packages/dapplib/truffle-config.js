require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth place around give drink fringe gasp'; 
let testAccounts = [
"0x053098215f22665c2242f7592c8421eaf3a9be2bf12d5c99da49c6ac8f0916e8",
"0x43dbb505bfa303d46ab029da958f0054a1d1dc80e16a0f12b3602b495c873b1d",
"0x975c074fa3ec254a5b458f3a8b62ee13388298261e19eba41a0205f90f87820c",
"0x933f0c76cd9598295c0bb5b7f59f71ee65834f5e9b65b5d782fca2b9b8a756f2",
"0x298f1288af55f1939f148752bb6ac06ad5176aee6651788c0e581286f86ebe94",
"0x37997c2582eb73c8631da437c64b272752221a23514cc84f4d91d4c68af7d6a4",
"0xf4cd9a4f626d9a87e4117260baf4c2bdd7cc1c8459286f6d4f30be3b929f0eb0",
"0x0e9c76eeddc1392690d16afd0d3a8fdb4ecb951682c1e3ee96cce76954c866e4",
"0x183fa85dce02dbd6a05a156f8e68bb02edcd9856dce86b042cf4ea96b9db0609",
"0xb6dc956c9e5cd16d9a50d2bdd9e73371680ba8c0e7773c848b4711a6427dfabd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


