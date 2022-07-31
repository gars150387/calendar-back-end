//todas tienes que pasar la validacion
const { Router } = require("express");
const router = Router();
const { validateJWT } = require("../middlewares/validate-jwt");
const { getEvents, createEvent, editEvent, deleteEvent } = require('../controllers/Events')



//obtener evento
router.get('/',validateJWT, getEvents )

//crear evento
router.post('/',validateJWT, createEvent)

//editar evento
router.put('/:id',validateJWT,  editEvent)

//eliminar evento
router.delete('/:id',validateJWT, deleteEvent)


module.exports = router