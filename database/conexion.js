//importar mongoose librería paquete o dependencia para conectar a la base.

import mongoose from 'mongoose';

// necesito usar esta función desde otro módulo

export async function conectarConBD(){
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandonos a BD")
    }
    catch(error){
        console.log("UPSS..."+error)
    }

}