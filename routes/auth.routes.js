const { Router } = require('express');
const router = Router();
const AuthController = require('../controllers/auth.controller');


router.post('/registration',AuthController.registration);

router.post('/login',AuthController.login);
router.post('/logout',AuthController.logout);

module.exports=router;