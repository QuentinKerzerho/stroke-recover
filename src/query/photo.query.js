import prisma from "@/lib/prisma";

export const getLatestPhoto = () =>
  prisma.photo.findMany({
    include: {
      name: true, // Inclure les données liées à 'photos'
      diapo: true, // Inclure les données liées à 'diapo'
    },
  });
