import prisma from "@/lib/prisma";

export const getLatestDiapo = () =>
  prisma.diapo.findMany({
    include: {
      photos: true, // Inclure les données liées à 'photos'
    },
  });

export const createDiapo = (data) =>
  prisma.diapo.create({
    data: {
      created_at: data && data.created_at ? data.created_at : "2022-01-01",
    },
  });
