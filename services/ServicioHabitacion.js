//importamos el modelo de datos
import { modeloHabitacion } from "../models/modeloHabitacion.js";
//definición de los query

export class ServicioHabitacion{

    constructor(){}

    async registrar(habitacion){
        //garantizo que los datos que me llegan estan dentro de
        //los requeridos
        let habitacionARegistrar=new modeloHabitacion(habitacion)
        return await habitacionARegistrar.save()
    }

    async buscarTodas(){
        let habitaciones=await modeloHabitacion.find()
        return habitaciones
    }

    async buscarPorId(id){
        let habitacion=await modeloHabitacion.findById(id)
        return habitacion
    }

    async editar(id, datos){
        return await modeloHabitacion.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }

}