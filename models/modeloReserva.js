import mongoose from 'mongoose'; 
//Esquema de datos, que datos tiene mi modelo
const Schema = mongoose.Schema;
// creo el propio esquema
const Reserva=new Schema({
    idCliente:{
        type: Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        requited:true
    },
    fechaInicio:{
        type:Date,
        required:true
    },
    fechaFinal:{
        type:Date,
        required:true
    },
    numeroPersonas:{
        type:Number,
        required:true
    },
    costo:{
        type: Number,
        required: true
    },
    idHabitacion:{
        type: String,
        required:true
    }
    
})
//Se envía el modelo de datos
export const modeloReserva=mongoose.model('reservas', Reserva);



//Nombre cliente
//apellido
//fecha de inicio Reserva  Date
//fecha final reserva  Date
//número de personas
//costo Numero