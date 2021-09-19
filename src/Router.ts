import { Request, Response, Router } from "express";

import { reverse } from "./controllers/TextController";

const router = Router();

router.post("/text/reverse", reverse);

export default router;