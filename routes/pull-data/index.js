const router = require('express').Router({ mergeParams: true });
const MongoClient = require('./../../helper/initialize-database');
const config = require('./../../config')
const url = config.setting.url;
const database = config.setting.database;
module.exports = () => {
    router.get('/pull', async (req, res) => {
        const collectionName = req.body.collection;
        try {
            MongoClient.connect(url, (err, db) => {
                if (err) throw err;
                const dbo = db.db(database);
                dbo.collection(collectionName).findOne({
                    'user_id': req.body.user_id
                }, (err, user) => {
                    if (err) throw err;
                    if (user) {
                        res.status(200).json({
                            success: true,
                            message: 'data pull successfully.',
                            data: user
                        })
                    } else {
                        res.status(200).json({
                            success: true,
                            message: 'data not exist'
                        })
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