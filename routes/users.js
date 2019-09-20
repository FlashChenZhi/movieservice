var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.js')

var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' })

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/login', usersController.login);
router.post('/register', usersController.register);
router.get('/verify', usersController.verify);
router.get('/getUser', usersController.getUser);
router.get('/logout', usersController.logout);
router.post('/findPassword', usersController.findPassword);
router.get('/verifyImg', usersController.verifyImg);
router.post('/uploadUserHead', upload.single('file'), usersController.uploadUserHead);

module.exports = router;