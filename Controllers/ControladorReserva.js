//CONTROLADOR RESERVA:
//1. Recibir peticiones
//2. Ejecutar logica de negocio
//3. LLamar a la capa de SERVICIOS
//4. Enviar las respuestas al cliente
import { ServicioReserva} from "../services/ServicioReserva.js"

export class ControladorReserva{

    constructor(){}

async buscarTodas(request,response){

        let servicioReserva=new ServicioReserva()

        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:await servicioReserva.buscarTodas(),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: " +error,
                data:[],
                estado:false
            })
        }
    }

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

        let servicioReserva=new ServicioReserva
        //los datos vienen de la petición, van por el body de la aplicacion
        let datosPeticion=request.body

        try{
            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la reserva ",
                data:null,
                estado:true
            })

        }catch (error){
            response.status(400).json({
                mensaje:"Fallamos agregando la reserva "+ error,
                data:[],
                estado:false
            })
        }
    }
async editar(request,response){

        let servicioReserva=new ServicioReserva()

        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id, datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la reserva ",
                data:null,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos editando la reserva "+error,
                data:[],
                estado:false
            })
        }
    }

async eliminar(request,response){
        let servicioReserva=new ServicioReserva()
        let id=request.params.id
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminar la reserva ",
                data:null,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Fallamos eliminar la reserva "+error,
                data:[],
                estado:false
            })
        }
    }

}