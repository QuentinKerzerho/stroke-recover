import prisma from "@/lib/prisma";

// Création d'un nom
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

// Récupérer tous les noms
export const getAllNames = async () => {
  const names = await prisma.name.findMany({
    include: {
      photos: true, // Inclure les données liées à 'photos'
    },
  });
  await prisma.$disconnect();
  return names;
};
