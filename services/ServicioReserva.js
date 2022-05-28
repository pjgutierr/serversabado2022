//importamos el modelo de datos
import { modeloReserva } from "../models/modeloReserva.js";
import { ServicioHabitacion } from "./ServicioHabitacion.js";
//definición de los query

export class ServicioReserva{

    constructor(){}

    async registrar(datosPeticion){
        //garantizo que los datos que me llegan estan dentro de
        //los requeridos
        let servicio = new ServicioHabitacion();
        let habitacion= await servicio.buscarPorId(reserva.idHabitacion);
        let fechaInicio= new Date(reserva.fechaIn);
        let fechaFinal= new Date(reserva.fechaOut);

        let difference = Math.abs(fechaFinal-fechaInicio);
        let days=difference/(1000*3600*24);
        let costo= days * habitacion.precio;

        let modeloReserva = {
            idCliente:datosPeticion.idCliente,
            nombre:datosPeticion.nombre,
            apellido:datosPeticion.apellido,
            fechaInicio: datosPeticion.fechaIn,
            fechaFinal: datosPeticion.fechaOut,
            numeroPersonas:datosPeticion.numeroPersonas,
            costo: costo,
            idHabitacion: datosPeticion.idHabitacion

        };

        let habitacionAReservar=new modeloReserva(reserva)
        return await habitacionAReservar.save()
    }

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas
    }

    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }

    async editar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}