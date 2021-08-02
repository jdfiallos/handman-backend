const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario } = require('../controllers/auth-usuarios');
const { loginUsuario } = require('../controllers/auth-usuarios');
const { revalidarToken } = require('../controllers/auth-usuarios');
const { validarJWT } = require('../middlewares/validar-jwt-usuario');

const router = Router();

router.post('/new', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es obligatorio').not().isEmpty(),
    check('city', 'La ciudad es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('address', 'La direccion es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').isNumeric(),
    check('password', 'La direccion es obligatorio').not().isEmpty(),
    check('registerDate', 'El registerDate es obligatorio').isDate(),
    check('birthday', 'Fecha de nacimiento es obligatorio').isDate(),
    check('status', 'El status es obligatorio').isBoolean(),
    check('gender', 'El genero es obligatorio').isBoolean()
], crearUsuario);

router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').isLength({ max:10 })
], loginUsuario);

/* Validar token */
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;