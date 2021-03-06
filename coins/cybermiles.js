/**
 * @title CyberMiles
 * @symbol CMT
 * @ethContractAddr 0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f
 * @implementation Dynamic
 * @cmcId cybermiles
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f?apiKey=freekey', (error, response, body) => {
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
