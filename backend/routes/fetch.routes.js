import { Router } from "express";
import {fetchTop,fetchUpcoming,fetchbyId,chat} from './../controllers/fetch.controller.js'
const router = Router();

router.get("/top",fetchTop);
router.get("/upcoming",fetchUpcoming)
router.get("/anime/:id",fetchbyId)
router.post("/chat",chat)


export default router