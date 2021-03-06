/**
 * @title Crystal Clear
 * @symbol CCT
 * @ethContractAddr 0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22
 * @implementation Dynamic
 * @cmcId crystal-clear
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22?apiKey=freekey', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        body = JSON.parse(body);

        if (typeof body.price === 'undefined' || body.price === false || typeof body.price.availableSupply === 'undefined' || body.price.availableSupply === null) {
            return callback(new Error('Not Available'));
        }

        callback({
            c: Number(body.price.availableSupply),
            t: Number(body.totalSupply) * Math.pow(10, -18)
        });
    } else {
        callback(new Error('Request error ' + typeof response !== 'undefined' ? response.statusCode : error));
    }
});
};
