import { Request, Response } from "express";
import { bestService } from "../service";

const getBests = async (req: Request, res: Response) => {

    const data = await bestService.getBestItem();

    console.log(data);

    if(!data) {
        return res.status(500).json({ "status": 500, "success": false, "message": "INTERNAL SERVER ERROR" })
    }

    return res.status(200).json({ "status": 200, "success": true, "message" : "베스트 상품 리스트 조회뷰 조회 성공", data })

};

const bestController = {
    getBests,
};

export default bestController;