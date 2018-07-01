var passport = require('../passport/strategy');
var mgs = require('../../../mongodb/mongo_init');

module.exports = function(router) {
    router.route('/googlemap_mongodb/').get(function(req, res) {
        mgs.findAllSpot((err, result) => {
            context = {
                title: "googlemap_mongodb",
                spotlist: result,
                spotname: req.query.spotname || "서울특별시",
                spotaddress: req.query.spotaddress || "대한민국 서울특별시",
                spotlat: req.query.spotlat || 37.5665350,
                spotlng: req.query.spotlng || 126.9779690
            }
            res.render('GM_M', context, function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            })
        })
    });

    router.route('/save-spot').post(function(req, res) {
        mgs.insertSpot(req.body.spotname, req.body.spotaddress, req.body.spotlat, req.body.spotlng, (err) => {
            if (err) {
                res.render('OverlapFail', function(err, html) {
                    res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                    res.end(html);
                });
                return;
            }
            res.render('Back', function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            });
        });
    });

    router.route('/delete-spot/:spotName').post(function(req, res) {
        mgs.deleteSpot(req.params.spotName, (err) => {
            res.render('Back', function(err, html) {
                res.writeHead(200, { 'Content-type': 'text/html; utf8' });
                res.end(html);
            });
        });
    });

    router.route('/near-spot').post(function(req, res) {
        mgs.findNear(req.body.spotlat, req.body.spotlng, 1000000, (err, result) => {
            res.send(result);
            res.end();
        })
    });

    router.route('/circle-spot').post(function(req, res) {
        mgs.findCircle(req.body.spotlat, req.body.spotlng, 51 / 6371, (err, result) => {
            res.send(result);
            res.end();
        })
    });
}