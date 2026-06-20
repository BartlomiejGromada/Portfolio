import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const backendCategory = categories.find(c => c.category.en === "Backend" || c.category.pl.includes("Backend"));
  if (backendCategory) {
    console.log(JSON.stringify(backendCategory, null, 2));
  } else {
    console.log("Backend category not found. All categories:", categories.map(c => c.category));
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
