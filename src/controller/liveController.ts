import { Request, Response } from "express";
import { liveService } from "../service";

const getLives = async (req: Request, res: Response) => {

    const data = await liveService.getLives();

    return res.status(200).json({ "status": 200, "success": true, "message" : "TVON LIVE 리스트 조회뷰 조회 성공", data })
    
};

const liveController = {
    getLives,
};

export default liveController;