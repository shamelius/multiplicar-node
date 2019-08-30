
const colors = require('colors');


/// ejemplo de la destructuracion ////
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const  argvYargs  =  require('./config/yargs').argvYargs;
//const { listarTabla }  = require('./multiplicar/multiplicar');

//console.log(argvYargs);

let comando = argvYargs._[0];

switch (comando) {
    case 'crear':
        //console.log(comando);
        crearArchivo(argvYargs.base, argvYargs.limite)
                .then(archivo =>{
                    console.log(`archivo creado : ${archivo}`.gray);
                })
                .catch((err=>{
        
                    console.log(err);
        
                }));
        break;

    case 'listar':
        //console.log(comando);
        listarTabla(argvYargs.base,  argvYargs.limite)
        break;   

    default:
        console.log('comando no reconocido');
        break;
}

// let argv = process.argv;
// console.log(argvYargs.base);
// console.log(argv);





// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log( base[1]);
