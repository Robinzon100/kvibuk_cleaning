const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");

class Queries {
    //
    // ─── SAVE ───────────────────────────────────────────────────────────────────────
    //
    static save(collection, object) {
        const db = getDb();
        return db
            .collection(collection)
            .insertOne(object)
            .then(result => {
                const Result = result;
            })
            .catch(err => {
                console.log(err);
            });
    }


    //
    // ─── FIND ───────────────────────────────────────────────────────────────────────
    //
    static validateToke(token) {
        const db = getDb;
        return db
            .collection("Tokens")
            .findOne({
                token: token,
                expiration: { $gt: Date.now() }
            })
            .toArray()
            .then(token => {
                return token;
            })
            .catch(err => {
                console.log(err);
            });
    }


}


module.exports = Queries;