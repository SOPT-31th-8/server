import { Router } from "express";
import { liveController } from "../controller";

const router: Router = Router();

router.get("/", liveController.getLives);

export default router;