const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration', [
    check('username', 'cannot be empty').notEmpty(),
    check('password', 'password must be more than 4 and less than 10 characters').isLength({min: 4, max: 10})
], controller.registration);
router.post('/login', controller.login);
router.get('/users', authMiddleware, controller.getUsers);

module.exports = router;

