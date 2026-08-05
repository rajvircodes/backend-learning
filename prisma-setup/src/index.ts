import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const user = await prisma.user.create({
        data:{
        email:'Rajvirsinh@gmail.com',
        name:'Rajvir'
        }
    })

    console.log(user);
    console.log("User created!");
    const users = await prisma.user.findMany();

        console.log("\nAll Users:");
        console.table(users);
}

main()
    .catch((err)=>{
        console.log(err);
        
    }).finally(async ()=>{
        await prisma.$disconnect()
    });