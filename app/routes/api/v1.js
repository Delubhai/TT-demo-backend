const router = require('express').Router();

module.exports = (function () {
    const usersRoute = require('./v1/users.route')

    router.use('/users', usersRoute);

    return router;
})()
