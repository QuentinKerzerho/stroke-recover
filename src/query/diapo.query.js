import prisma from "@/lib/prisma";

// Récupérer toutes les diapos
export const getLatestDiapo = async () => {
  const diapos = await prisma.diapo.findMany({
    include: {
      photos: true, // Inclure les données liées à 'photos'
    },
  });
  await prisma.$disconnect();
  return diapos;
};

// Créer une diapo
export const createDiapo = async (data) => {
  const createdDiapo = await prisma.diapo.create({
    data: {
      created_at: data && data.created_at ? data.created_at : "2022-01-01",
    },
  });
  await prisma.$disconnect();
  return createdDiapo;
};

// Supprimer une diapo
export const deleteDiapo = async (id) => {
  const deletedDiapo = await prisma.diapo.delete({
    where: {
      id: id,
    },
  });
  await prisma.$disconnect();
  return deletedDiapo;
};
