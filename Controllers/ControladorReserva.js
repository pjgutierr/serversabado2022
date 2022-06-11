//CONTROLADOR RESERVA:
//1. Recibir peticiones
//2. Ejecutar logica de negocio
//3. LLamar a la capa de SERVICIOS


import { ServicioReserva } from "../services/ServicioReserva.js"
import { ServicioHabitacion, ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorReserva{

    constructor(){}

async buscarPorId(request,response){
        
        let servicioReserva= new ServicioReserva()
        
        let id=request.params.id
        console.log(id)
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos "+id,
                data:await servicioReserva.buscarPorId(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }

    }

async registrar(request,response){

        let servicioReserva= new ServicioReserva()
        let ServicioHabitacion = new ServicioHabitacion()
        //los datos vienen de la petición, van por el body de la aplicacion
        //datos de la reserva
        let datosPeticion=request.body

        try{

            //consultar cuanto vale por noche 1 habitación

            let habitacionConsultada=await ServicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
            let precioNoche=habitacionConsultada.precio

            //fecha de salida
            let fechaSalida=datos.fecha_out

            //fecha de ingreso
            let fechaEntrada=datos.fecha_in

            //restar las fechas de entrada_salida

            let diasTotales=fechaEntrada-fechaSalida

            //costo total de la reserva
            let costo=diasTotales*precioNoche

            //actualizar los valores
            datosPeticion.costo=costo


            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la Reserva",
                data:null,
                estado:true
            })

        }catch (error){
            response.status(400).json({
                mensaje:"Fallamos agregando la Reserva"+ error,
                data:[],
                estado:false
            })
        }
    }
async editar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id, datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la Reserva ",
                data:null,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos editando la Reserva "+error,
                data:[],
                estado:false
            })
        }
    }

async eliminar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        try{
           await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la Reserva ",
                data:null,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos eliminando la Reserva "+error,
                data:[],
                estado:false
            })
        }
    }

}