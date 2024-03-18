import prisma from "@/lib/prisma";

export const getLatestPhoto = () =>
  prisma.photo.findMany({
    include: {
      name: true, // Inclure les données liées à 'photos'
      diapo: true, // Inclure les données liées à 'diapo'
    },
  });

export const createPhoto = (data) => {
  const { photoUrl, nameId, diapoId } = data;
  prisma.photo.create({
    data: {
      url: photoUrl,
      name: {
        connect: {
          id: nameId,
        },
      },
      diapo: {
        connect: {
          id: diapoId,
        },
      },
    },
  });
};
