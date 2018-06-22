/**
* @title bitqy
* @symbol BQ
* @ethContractAddr 0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5
* @implementation Dynamic
*/
var request = require('request');

module.exports = (callback) => {
request('http://api.ethplorer.io/getTokenInfo/0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -3)
        });
    } else {
        callback(new Error('Request error ' + response.statusCode));
    }
});
};
