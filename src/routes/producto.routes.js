import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//aqui creo las rutas
router
  .route("/")
  .delete(productoCtrl.borrarProducto)
  .post(productoCtrl.nuevoProducto);

export default router;
