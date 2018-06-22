/**
* @title Ethos
* @symbol ETHOS
* @ethContractAddr 0x5af2be193a6abca9c8817001f45744777db30756
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0x5af2be193a6abca9c8817001f45744777db30756?apiKey=freekey', (error, response, body) => {
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
