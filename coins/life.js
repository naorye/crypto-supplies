/**
 * @title LIFE
 * @symbol LIFE
 * @ethContractAddr 0xff18dbc487b4c2e3222d115952babfda8ba52f5f
 * @implementation Dynamic
 * @cmcId life
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xff18dbc487b4c2e3222d115952babfda8ba52f5f?apiKey=freekey', (error, response, body) => {
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
