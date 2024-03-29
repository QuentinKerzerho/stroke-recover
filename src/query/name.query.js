import prisma from "@/lib/prisma";

// Récupérer tous les noms
export const createName = async (data) => {
  const { name } = data;
  const createdName = prisma.photo.create({
    data: {
      name: name,
    },
  });
  await prisma.$disconnect();
  return createdName;
};
