/**
 * @title Aurora DAO
 * @symbol AURA
 * @ethContractAddr 0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814
 * @implementation Dynamic
 * @cmcId aurora-dao
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814?apiKey=freekey', (error, response, body) => {
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
