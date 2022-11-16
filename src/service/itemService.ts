const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getItemById = async (itemId: number) => {
    const foundItem = await prisma.item.findUnique({
        where: {
            itemId: itemId
        },
    });

    if (!foundItem) {
        return null;
    }

    return {
        "detailItemName": foundItem.itemName,
		"detailItemImage" : foundItem.itemImage,
		"supplierName": foundItem.supplierName,
		"detailItemPrice": foundItem.itemPrice,
		"starCount": foundItem.starCount,
		"commentCount" : foundItem.commentCount,
		"benefitInfo" : foundItem.benefitInfo,
		"deliveryInfo" : foundItem.deliveryInfo,
		"detailItemId" : foundItem.itemId
    }
    
}

const itemController = {
    getItemById
};

export default itemController;