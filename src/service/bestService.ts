const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBestItem = async () => {

    const bestItems = await prisma.item.findMany({
        select: {
            itemName: true,
            itemImage: true,
            itemPrice: true,
            discountRate: true,
            itemId: true
        },
    });
     
    if (!bestItems) {
        return null;
    }

    const new_bestItems = [];

    for(const bestItem of bestItems) {
        new_bestItems.push({
            "bestItemName": bestItem.itemName,
		    "bestItemImage" : bestItem.itemImage,
		    "bestItemPrice": bestItem.itemPrice,
		    "bestDiscountRate": bestItem.discountRate,
		    "bestItemId": bestItem.itemId
        })
    }

    return new_bestItems;
}

const bestController = {
    getBestItem
};

export default bestController;