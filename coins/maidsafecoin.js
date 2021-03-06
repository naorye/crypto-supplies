/**
 * @title MaidSafeCoin
 * @symbol MAID
 * @implementation Dynamic
 * @cmcId maidsafecoin
 */

module.exports = (callback, request) => {
    request({
        uri: 'https://api.omniexplorer.info/v1/property/3',
        rejectUnauthorized: false,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            callback({
                c: Number(body.totaltokens)
            })
        } else {
            callback(new Error('Request error ' + (typeof response !== 'undefined' ? response.statusCode : error.message)));
        }
    });
};
