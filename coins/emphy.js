/**
* @title Emphy
* @symbol EPY
* @ethContractAddr 0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
