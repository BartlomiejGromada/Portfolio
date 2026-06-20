import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const dbCategory = categories.find(c => c.category.en.includes("Database") || c.category.pl.includes("Baz"));
  if (dbCategory) {
    console.log(JSON.stringify({
      id: dbCategory.id,
      items: dbCategory.items.map(i => i.name),
      subcats: Array.from(new Set(dbCategory.items.map(i => i.subcategory?.pl)))
    }, null, 2));
  } else {
    console.log("Database category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
