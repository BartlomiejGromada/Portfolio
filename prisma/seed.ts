import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  console.log("Seeding is disabled because static portfolio data was removed.");
  console.log("Please manage your data directly in MongoDB Atlas.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
