//--------------------------------//
let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite:{
        default: 10,
        alias: 'l'
    }
}

const argvYargs = require('yargs')
            .command('listar', 'Imprime en consola la tabla de multiplicar',opts)
            .command('crear', 'Crear tabla de multiplicar en archivo .txt', opts)
            .help()
            .argv;


module.exports = {

    argvYargs

}