import { Router } from "express";
import userRouter from "./userRouter";
import itemRouter from "./itemRouter";
import liveRouter from "./liveRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/item", itemRouter);
router.use("/live", liveRouter);

export default router;
