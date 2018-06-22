/**
* @title Fujinto
* @symbol NTO
* @ethContractAddr 0x8a99ed8a1b204903ee46e733f2c1286f6d20b177
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x8a99ed8a1b204903ee46e733f2c1286f6d20b177?apiKey=freekey', (error, response, body) => {
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
