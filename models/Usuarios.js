const conexao = require('../config/conexao-db')

class Usuarios {
    lista(){
        return new Promise((resolve,reject) => {
            const sql = ' SELECT * FROM usuario '

            conexao.query(sql, (erro, retorno) => {
                if(erro){
                    reject("Erro ao consultar" + erro)
                    return
                } 
               
                console.log('consultado com sucesso')
                resolve(retorno)
            })
        })
    }

    insere(usuario){
        return new Promise((resolve,reject) => {
            const sql = " INSERT INTO usuario SET ? "

            conexao.query(sql, usuario, (erro, retorno) => {
                erro 
                    ?
                reject("Erro ao inserir:" + erro)
                    :
                resolve({id:retorno.insertId, ...usuario})
            })
        })
    }

    buscarPorEmail(email){
        return new Promise((resolve,reject) => {
            const sql = " SELECT * FROM usuario WHERE email = ? "

            conexao.query(sql, email, (erro, retorno) => {
                if(erro) reject("Erro no buscar por email: " + erro)
                else{
                    const usuario = retorno[0]
                    resolve(usuario)
                    // if(usuario){
                    //     console.log("email encontrado")
                    //     resolve(retorno)
                    // }else{
                    //     console.log("email não encontado")
                    //     reject({erro: "Usuario não encontado"})
                    // }
                }
              
            })
        })
    }
}

module.exports = new Usuarios