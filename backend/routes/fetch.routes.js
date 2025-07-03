import { Router } from "express";
import {fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId,chat} from './../controllers/fetch.controller.js'
const router = Router();

router.get("/top",fetchTop);
router.get("/upcoming",fetchUpcoming)
router.get("/anime/:id",fetchbyId)
router.get("/manga",fetchManga)
router.get("/manga/:id",fetchMangabyId)
router.post("/chat",chat)


export default router