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

// Supprimer une photo
export const deletePhoto = async (id) => {
  const deletedPhoto = await prisma.photo.delete({
    where: {
      id: id,
    },
  });
  await prisma.$disconnect();
  return deletedPhoto;
};

// ajouter une photo à une diapo
export const addPhotoToDiapo = async (photoId, diapoId) => {
  const updatedPhoto = await prisma.photo.update({
    where: {
      id: photoId,
    },
    data: {
      diapo: {
        connect: {
          id: diapoId,
        },
      },
    },
  });
  await prisma.$disconnect();
  return updatedPhoto;
};

// enlever une photo d'une diapo
export const removePhotoFromDiapo = async (photoId) => {
  const updatedPhoto = await prisma.photo.update({
    where: {
      id: photoId,
    },
    data: {
      diapo: {
        disconnect: true,
      },
    },
  });
  await prisma.$disconnect();
  return updatedPhoto;
};
