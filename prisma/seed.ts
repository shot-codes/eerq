import { PrismaClient, Case } from "@prisma/client";

const prisma = new PrismaClient();

const cases = [
  {
    id: "1",
    image_url: "bike.jpg",
    description:
      "The caller has just fallen off of their bicycle. They are complaining that their ankle is in a lot of pain, and they have a blistering headache.",
  },
  {
    id: "2",
    image_url: "man.jpg",
    description:
      "The caller has just witnessed their colleague collapse. They are reporting that they are responsive but dazed and confused.",
  },
  {
    id: "3",
    image_url: "gma.jpg",
    description:
      "An elderly woman is calling and explaining that she has a dull and deep pain in her chest. She says she just ate strange looking berries from her garden.",
  },
] satisfies Case[];

const runSeeders = async () => {
  // Create data
  await Promise.all(
    cases.map(async (x) =>
      prisma.case.upsert({
        where: { id: x.id },
        update: {},
        create: x,
      })
    )
  );
};
runSeeders()
  .then(async () => {
    console.log("database seeded");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
