import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const testCategory = categories.find(c => c.category.en.includes("Test") || c.category.pl.includes("Test"));
  if (testCategory) {
    console.log(JSON.stringify({
      id: testCategory.id,
      items: testCategory.items.map(i => i.name),
      subcats: Array.from(new Set(testCategory.items.map(i => i.subcategory?.pl)))
    }, null, 2));
  } else {
    console.log("Testing category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
