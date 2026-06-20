import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const aiCategory = categories.find(c => c.category.en.includes("AI") || c.category.pl.includes("AI"));
  if (aiCategory) {
    console.log(JSON.stringify({
      id: aiCategory.id,
      items: aiCategory.items.map(i => i.name),
      subcats: Array.from(new Set(aiCategory.items.map(i => i.subcategory?.pl)))
    }, null, 2));
  } else {
    console.log("AI category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
