var mgs = require('mongoose')

var databaseUrl = 'mongodb://localhost:27017/spots';

mgs.Promise = global.Promise;

var UserSchema;
var UserModel;

module.exports = {
    mongo_init() {
        mgs.connect(databaseUrl, { useNewUrlParser: true });

        UserSchema = mgs.Schema({
            spotname: { type: String, required: true, unique: true },
            spotaddress: { type: String, required: true },
            geometry: {
                type: { type: String, default: "Point" },
                coordinates: [{ type: Number }]
            }
        });

        UserSchema.index({ geometry: "2dsphere" });

        UserSchema.static('findNear', function(lat, lng, maxDistance, callback) {
            this.find().where('geometry').near({
                center: {
                    type: 'Point',
                    coordinates: [parseFloat(lng), parseFloat(lat)]
                },
                maxDistance: maxDistance
            }).limit(2).exec(callback);
        });

        UserSchema.static('findCircle', function(lat, lng, radius, callback) {
            this.find().where('geometry').within({
                center: [parseFloat(lng), parseFloat(lat)],
                radius: parseFloat(radius)
            }).exec(callback);
        })


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
    },
    findNear(lat, lng, maxDistance, callback) {
        UserModel.findNear(lat, lng, maxDistance, (err, results) => {
            callback(err, results);
        })
    },
    findCircle(lat, lng, radius, callback) {
        UserModel.findCircle(lat, lng, radius, (err, results) => {
            callback(err, results);
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
/*module.exports.findNear(35.1856649, 129.0732527, 900, (err, result) => {
    console.dir(result);
});*/
/*module.exports.findCircle(35.1856649, 129.0732527, 51 / 6371, (err, result) => {
    console.log(err);
    console.dir(result);
});*/