const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCustomItem = async () => {

    const customItems = await prisma.item.findMany({
        select: {
            catchphrase: true,
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
            "itemName": customItem.catchphrase,
		    "itemImage" : customItem.itemImage,
		    "itemPrice": customItem.itemPrice,
		    "discountRate": customItem.discountRate,
		    "itemId": customItem.itemId
        })
    }

    return new_customItems;
}

const customService = {
    getCustomItem,
};

export default customService;