import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categoryId = "6a2d3d1605465e09aff1f78e"; // Backend
  
  const category = await prisma.skillCategory.findUnique({
    where: { id: categoryId }
  });

  if (!category) {
    console.error("Category not found");
    return;
  }

  const updatedItems = category.items.map(item => {
    // 1. Revert subcategory title
    if (item.subcategory?.pl?.includes("Dlaczego ich używam?")) {
      item.subcategory.pl = "Podejścia i Metodologie";
      item.subcategory.en = "Approaches and Methodologies";
    }

    return item;
  });

  await prisma.skillCategory.update({
    where: { id: categoryId },
    data: { items: updatedItems }
  });

  console.log("Successfully reverted subcategory names!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
