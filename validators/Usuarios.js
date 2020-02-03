const { check, body } = require('express-validator')
const UsuarioDao = require('../models/Usuarios')

class Usuarios {

    static validacoes(){
        return[
            check('nome').isLength({min: 3, max: 100})
            .withMessage("campo nome deve ter entre 5 e 100 caracteres!"),

            check('email').isEmail()
            .withMessage("Deve ter um email valido!"),

            check('cpf').isNumeric()
            .withMessage("Deve ser apenas numeros!"),

            check('sexo').isLength({min: 1, max: 1})
            .withMessage("Deve ser apenas um caracter (M ou F)!"),
            
            check('senha').isLength({min: 6, max: 15})
            .withMessage("A senha deve ter de 6 a 15 caracteres!"),

            body('email').custom(email => {
               return UsuarioDao.buscarPorEmail(email)
                .then(retorno => {
                    if(retorno)
                        return Promise.reject('Email já cadastrado')
                    
                })
            })
        ]
    }
}

module.exports = Usuarios