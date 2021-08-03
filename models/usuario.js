const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
    },
    birthday: {
        type: Date,
    },
    status: {
        type: Boolean,
        required: true,
    },
    gender: {
        type: Boolean,
        required: true,
    },
});

module.exports = model('usuarios', UsuarioSchema );