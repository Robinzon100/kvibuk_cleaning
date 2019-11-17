//
// ─── BASE IMPORTS ───────────────────────────────────────────────────────────────
//
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

//
// ─── MY IMPORTS ─────────────────────────────────────────────────────────────────
//

let _db;

const mongoConnect = cb => {
    MongoClient.connect("mongodb+srv://robinzon:robinzon100@kvibuk-cleaning-xka3f.mongodb.net/kvibuk-cleaning?retryWrites=true&w=majority", { useUnifiedTopology: true })
        .then(client => {
            _db = client.db();
            cb(client);
        })
        .catch(err => console.log(err));
};


const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "no database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;




