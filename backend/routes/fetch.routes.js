import { Router } from "express";
import {fetchRandom,fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId,search,chat} from './../controllers/fetch.controller.js'
const router = Router();

router.get("/random",fetchRandom)
router.get("/top",fetchTop);
router.get("/upcoming",fetchUpcoming)
router.get("/anime/:id",fetchbyId)

router.get("/manga",fetchManga)
router.get("/manga/:id",fetchMangabyId)


router.get("/search/:query",search)

router.post("/chat",chat)


export default router