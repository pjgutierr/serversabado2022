//Importar mongoose
import mongoose from 'mongoose'; 
//Esquema de datos, que datos tiene mi modelo
const Schema = mongoose.Schema;
// creo el propio esquema
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    capacidad:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    }
})
//Se envía el modelo de datos
export const modeloHabitacion=mongoose.model('habitaciones', Habitacion);