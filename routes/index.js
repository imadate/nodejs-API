const routes = require('express').Router({ mergeParams: true });

module.exports = () => {
    console.log('in routes')
    routes.use('/pushData', require('./push-data')());
    routes.use('/pullData', require('./pull-data')());
    return routes;
};