//  require's
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base , limite)=>{

//return console.log(`Si entre con limite ${limite} y base ${base}`);
    console.log('========================='.green)
    console.log(`=== Tabla del ${base} ===`.green)
    console.log('========================='.green)

for (let i = 1; i <= limite; i++) {
    

    console.log(`${base} * ${i} = ${base * i}`)
    
};

}


let crearArchivo = (base, limite)=>{

    return new Promise((resolve, reject)=>{

        if (!Number(base))
           return reject(`la base "${base}" no es numero `);
            
        let data = '';

        for(let i = 1; i <= limite; i++){
        
            data += `${base} * ${i} = ${base * i}\n`;
        
        
        }
        
        fs.writeFile('./tablas/tabla-'+ base +'.txt', data ,(err)=>{
        
            if (err) {
                
                reject(err)}
            
            else
            {
               resolve(`tabla-${base}.txt`.green) 
            }

        
            console.log('todo bien, se grabo');
            
        } )



});


}

module.exports = {
    crearArchivo ,
    listarTabla
}




