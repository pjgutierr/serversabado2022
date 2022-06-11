import express from 'express'

//Importo el controlador de Habitaciones
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReserva.js'
//Creo un objeto de la clase ControladorHabitacion y controladorReserva
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()
//UTILIZO el metodo Router() de express
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/sabado', controladorHabitacion.registrar)
rutas.put('/api/v1/sabado/:id', controladorHabitacion.editar)
rutas.delete('/api/v1/sabado/:id',controladorHabitacion.eliminar)

//reservas

rutas.get('/api/v1/reserva/:id', controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva', controladorReserva.registrar)
rutas.put('/api/v1/reserva/:id', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id',controladorReserva.eliminar)