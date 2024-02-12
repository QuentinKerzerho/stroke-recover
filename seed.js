// seed.js

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Créer des noms
  const name1 = await prisma.name.create({
    data: {
      name: "John Doe",
    },
  });

  const name2 = await prisma.name.create({
    data: {
      name: "Jane Doe",
    },
  });

  // Créer des photos liées aux noms
  const photo1 = await prisma.photo.create({
    data: {
      url: "https://img.freepik.com/photos-gratuite/portrait-taille-beau-homme-serieux-mal-rase-garde-mains-jointes-vetu-chemise-bleu-fonce-parle-interlocuteur-se-tient-contre-mur-blanc-freelance-homme-confiant_273609-16320.jpg?w=996&t=st=1706706912~exp=1706707512~hmac=050992a053996f3ea6c0c51ae05eae844a672e7f93bc4dace1f99b6ceec7559e",
      name: {
        connect: { id: name1.id },
      },
    },
  });

  const photo2 = await prisma.photo.create({
    data: {
      url: "https://img.freepik.com/photos-gratuite/jeune-homme-barbu-chemise-rayee_273609-5677.jpg?w=996&t=st=1706706988~exp=1706707588~hmac=c27412de75643a892501b69e57b025ce3c0fd3708a54929609a638b2c9e04ccd",
      name: {
        connect: { id: name1.id },
      },
    },
  });

  const photo3 = await prisma.photo.create({
    data: {
      url: "https://img.freepik.com/photos-gratuite/plan-interieur-femme-parisienne-sympathique-large-sourire-pointe-cote-gauche_273609-17138.jpg?w=996&t=st=1706706861~exp=1706707461~hmac=38f552751108fa440426413f1391a000bfab23009d998383d8a7e851b967d8d7",
      name: {
        connect: { id: name2.id },
      },
    },
  });

  console.log("Seed data created successfully.");
}

seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
