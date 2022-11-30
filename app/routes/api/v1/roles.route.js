const router = require('express').Router();


module.exports = (function () {
    const { GetAllUsers } = require('../../../controllers/api/v1/users.controller');

    router.get('/', GetAllUsers);

    return router;
})();

