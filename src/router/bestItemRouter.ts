import { Router } from "express";
import { bestController } from "../controller";

const router: Router = Router();

router.get("/", bestController.getBests);

export default router;