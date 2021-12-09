import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//aqui creo las rutas
 router.route('/borrarproducto').delete(productoCtrl.borrarProducto)


export default router
