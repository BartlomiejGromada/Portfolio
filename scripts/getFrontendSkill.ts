import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const frontendCategory = categories.find(c => c.category.en === "Frontend" || c.category.pl.includes("Frontend"));
  if (frontendCategory) {
    console.log(JSON.stringify({
      id: frontendCategory.id,
      items: frontendCategory.items.map(i => i.name)
    }, null, 2));
  } else {
    console.log("Frontend category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
