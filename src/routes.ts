import { Router } from "express";

import messageController from "./controllers/message";

const router = Router();

router.get("/", (request, response) => response.json("Hello World!"));

// Rotas de mensagens
router.post("/messages", messageController.create);

export default router;
