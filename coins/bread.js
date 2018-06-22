/**
* @title Bread
* @symbol BRD
* @ethContractAddr 0x558ec3152e2eb2174905cd19aea4e34a23de9ad6
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x558ec3152e2eb2174905cd19aea4e34a23de9ad6?apiKey=freekey', (error, response, body) => {
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
