const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCustomItem = async () => {

    const customItems = await prisma.item.findMany({
        select: {
            itemName: true,
            itemImage: true,
            itemPrice: true,
            discountRate: true,
            itemId: true
        },
    });

    if (!customItems) {
        return null;
    }

    const new_customItems = [];

    for(const customItem of customItems) {
        new_customItems.push({
            "bestItemName": customItem.catchphrase,
		    "bestItemImage" : customItem.itemImage,
		    "bestItemPrice": customItem.itemPrice,
		    "bestDiscountRate": customItem.discountRate,
		    "bestItemId": customItem.itemId
        })
    }

    return new_customItems;
}

const customController = {
    getCustomItem
};

export default customController;