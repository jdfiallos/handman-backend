const { Router } = require('express')
const Servicio = require('../models/servicios');

const router = Router();

router.get('/all', function( req, res ){
    Servicio.find()
    .then( result =>{
        res.send(result);
        res.end();
    })
    .catch( error =>{
        res.send(error);
        res.end();
    });
});


router.get('/:id', function( req, res ){
    let id =  req.params.id;
    Servicio.find({ _id: id })
    .then( result =>{
        res.send(result);
        res.end();
    })
    .catch( error =>{
        res.send(error);
        res.end();
    });
});

module.exports = router;