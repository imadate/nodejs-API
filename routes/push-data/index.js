const router = require('express').Router({ mergeParams: true });
const MongoClient = require('./../../helper/initialize-database');
const config = require('./../../config')
const url = config.setting.url;
const database = config.setting.database;
module.exports = () => {
    router.post('/push', async (req, res) => {
        const collectionName = req.body.collection;
        try {
            MongoClient.connect(url, (err, db) => {
                if (err) throw err;
                const dbo = db.db(database);
                const obj = {
                    name: req.body.name,
                    user_id: req.body.user_id,
                    contact: req.body.contact,
                    address: req.body.address
                }
                dbo.collection(collectionName).findOne({
                    'user_id': obj.user_id
                }, (err, user) => {
                    if (err) throw err;
                    if (user) {
                        res.status(200).json({
                            success: true,
                            message: 'data already exist.'
                        });
                    } else {
                        dbo.collection(collectionName).insertOne(obj, (err) => {
                            if (err) throw err;
                            res.status(200).json({
                                success: true,
                                message: 'data added successfully.'
                            });
                            db.close();
                        });
                    }
                });
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Server side error.'
            });
        }


    });
    return router
}