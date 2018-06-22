/**
* @title Dragonchain
* @symbol DRGN
* @ethContractAddr 0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
