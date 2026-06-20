import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.skillCategory.findMany();
  const devOpsCategory = categories.find(c => c.category.en.includes("DevOps") || c.category.pl.includes("DevOps"));
  if (devOpsCategory) {
    console.log(JSON.stringify({
      id: devOpsCategory.id,
      items: devOpsCategory.items.map(i => i.name)
    }, null, 2));
  } else {
    console.log("DevOps category not found");
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
