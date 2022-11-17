import { Router } from "express";
import itemRouter from "./itemRouter";
import liveRouter from "./liveRouter";
import bestItemRouter from "./bestItemRouter";
import customRouter from "./customRouter";


const router: Router = Router();

router.use("/item", itemRouter);
router.use("/live", liveRouter);
router.use("/best-item", bestItemRouter);
router.use("/custom", customRouter);

export default router;
