const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { createUser, loginUser, renewToken } = require("../controllers/auth");
const validateFields = require("../middlewares/validate-field");
const { validateJWT } = require('../middlewares/validate-jwt')

router.post(
        "/new", 
    [ //middelwares para validar 
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es debe ser superior a 6 caracteres').isLength({ min: 6}),
        validateFields
    ], 
        createUser);

router.post("/", 
[ //middelwares para validar 
        check('email', 'el email es obligatorio').isEmail(),
        check('password', 'el password es debe ser superior a 6 caracteres').isLength({ min: 6}),
        validateFields
    ], 
 loginUser);

router.get("/renew", validateJWT , renewToken);

module.exports = router;
