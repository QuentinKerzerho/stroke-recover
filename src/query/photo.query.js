import prisma from "@/lib/prisma";

// Récupérer toutes les photos
export const getLatestPhoto = async () => {
  const photos = await prisma.photo.findMany({
    include: {
      name: true, // Inclure les données liées à 'photos'
      diapo: true, // Inclure les données liées à 'diapo'
    },
  });
  await prisma.$disconnect();
  return photos;
};

// Créer une photo
export const createPhoto = async (data) => {
  const { photoUrl, nameData } = data;
  const createdPhoto = await prisma.photo.create({
    data: {
      url: photoUrl,
      name: {
        create: nameData,
      },
    },
  });
  await prisma.$disconnect();
  return createdPhoto;
};
