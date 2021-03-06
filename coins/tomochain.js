/**
 * @title TomoChain
 * @symbol TOMO
 * @ethContractAddr 0x8b353021189375591723e7384262f45709a3c3dc
 * @implementation Dynamic
 * @cmcId tomochain
 */

module.exports = (callback, request) => {
request('http://api.ethplorer.io/getTokenInfo/0x8b353021189375591723e7384262f45709a3c3dc?apiKey=freekey', (error, response, body) => {
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
