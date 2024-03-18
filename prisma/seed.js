// seed.js
const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  //_______________________________________________________________
  const users = [];
  const photos = [];

  for (let i = 0; i < 10; i++) {
    const user = {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
    };
    const dbUser = await prisma.name.create({ data: user }); // on push le db user car celui la a un id
    users.push(dbUser);

    for (let j = 0; j < 2; j++) {
      // Changez cette valeur pour le nombre de photos que vous voulez par utilisateur
      const photo = {
        url: faker.image.avatar(),
        name_id: dbUser.id, // Assurez-vous que votre modèle Photo a une relation avec le modèle Name
      };
      const dbPhoto = await prisma.photo.create({ data: photo });
      photos.push(dbPhoto);
    }
  }
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
