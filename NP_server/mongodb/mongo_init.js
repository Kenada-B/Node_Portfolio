var mgs = require('mongoose')

var databaseUrl = 'mongodb://localhost:27017/spots';

mgs.Promise = global.Promise;

var UserSchema;
var UserModel;

module.exports = {
    mongo_init() {
        mgs.connect(databaseUrl);

        UserSchema = mgs.Schema({
            spotname: { type: String, required: true, unique: true },
            spotaddress: { type: String, required: true },
            geometry: {
                type: { type: String, default: "Point" },
                coordinates: [{ type: Number }]
            }
        });

        UserSchema.index({ geometry: "2dsphere" });

        UserModel = mgs.model('spots', UserSchema);
    },
    insertSpot(spotname, spotaddress, spotlat, spotlng, callback) {
        var spot = new UserModel({
            spotname: spotname,
            spotaddress: spotaddress,
            geometry: {
                type: "Point",
                coordinates: [spotlng, spotlat]
            }
        });
        spot.save((err) => {
            callback(err);
        })
    },
    findAllSpot(callback) {
        UserModel.find({}, (err, results) => {
            callback(err, results);
        });
    },
    deleteSpot(spotname, callback) {
        UserModel.remove({ spotname: spotname }, (err) => {
            callback(err);
        })
    }

}

//module.exports.mongo_init();
/*module.exports.findAllSpot((err, result) => {
    console.dir(result);
});*/
/*
module.exports.insertSopt('정양삼한의원', '대한민국 부산광역시 연제구 거제3동 41-54', 35.184054, 129.0738083, (err) => {
    if (err) {
        console.log("ERR 있음");
        console.dir(err);
    }
});
*/