import { Request, Response } from "express";
import { customService } from "../service";

const getCustoms = async (req: Request, res: Response) => {

    const data = await customService.getCustomItem();

    if(!data) {
        return res.status(500).json({ "status": 500, "success": false, "message": "INTERNAL SERVER ERROR" }) 
    }

    return res.status(200).json({ "status":200, "success": true, "message": "맞춤 상품 리스트 조회뷰 조회 성공", data})
};

const customController = {
    getCustoms,
};

export default customController;