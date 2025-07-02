import { Router } from "express";
import {fetchTop,fetchUpcoming,fetchbyId} from './../controllers/fetch.controller.js'
const router = Router();

router.get("/top",fetchTop);
router.get("/upcoming",fetchUpcoming)
router.get("/:id",fetchbyId)


export default router