import { Request, Response, Router } from "express";

import { TextController } from "./controllers/TextController";

const textController = new TextController();

const router = Router();

router.post("/text/reverse", textController.reverse);

export default router;