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
}


module.exports = Queries;