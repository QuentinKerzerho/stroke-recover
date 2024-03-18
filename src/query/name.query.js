import prisma from "@/lib/prisma";

export const createName = (data) => {
  const { name } = data;
  prisma.photo.create({
    data: {
      name: name,
    },
  });
};
