/**
 * @title Gladius Token
 * @symbol GLA
 * @ethContractAddr 0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C
 * @implementation Dynamic
 * @cmcId gladius-token
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -8)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
