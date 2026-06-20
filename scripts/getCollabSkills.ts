import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const collabCategory = categories.find(c => c.category.pl.includes("Zarządzanie") || c.category.pl.includes("Współpraca") || c.category.en.includes("Management"));
  if (collabCategory) {
    console.log(JSON.stringify({
      id: collabCategory.id,
      items: collabCategory.items.map(i => i.name)
    }, null, 2));
  } else {
    console.log("Category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
