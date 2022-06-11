import mongoose from 'mongoose'; 
//Esquema de datos, que datos tiene mi modelo
const Schema = mongoose.Schema;
// creo el propio esquema
const Reserva=new Schema({
    
    idHabitacion:{
        type:String,
        required: true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        requited:true
    },
    telefono:{
        type:String,
        required:true
    },
    fecha_in:{
        type:Date,
        required:true
    },
    fecha_out:{
        type:Date,
        required:true
    },
    numero_Personas:{
        type:Number,
        required:true
    },
    costo:{
        type: Number,
        required: true
    },
   
    
})
//Se envía el modelo de datos
export const modeloReserva=mongoose.model('reservas', Reserva);



