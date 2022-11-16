const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getLives = async() => {

    const lives = await prisma.live.findMany();

    return lives;
};

const liveService = {
    getLives
};

export default liveService;