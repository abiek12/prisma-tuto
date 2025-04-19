import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient()

const main = async () => {
    try {
        const data = {
            email: "sample@gmail.com",
            userName: "sample user"
        }
        // check if the user is already exists
        const existingUser = await prisma.user.findFirst({
            where: { email: data.email }
        })
        console.log("existing user:", existingUser)

        if (existingUser) {
            console.log("User is already exists!")
            return
        }
        let user = await prisma.user.create({
            data: {
                email: "sample@gmail.com",
                userName: "sample user"
            }
        })
        console.log(user);
        return;
    } catch (error) {
        console.log("Error while db operations!");
        throw error;
    }
}

console.log("Start")
main();
console.log("End")
