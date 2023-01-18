import { PrismaClient, Case } from '@prisma/client';

const prisma = new PrismaClient();

const cases = [
	{
		id: '1',
		image_url: 'bike.png',
		description:
			'Caller one has just fallen of their bicyle. They are complaining that their ankle is in a lot of pain, and they have a blistering headache.'
	},
	{
		id: '2',
		image_url: 'man.png',
		description:
			'Caller two has just fallen of their bicyle. They are complaining that their ankle is in a lot of pain, and they have a blistering headache.'
	},
	{
		id: '3',
		image_url: 'gma.png',
		description:
			'Caller three has just fallen of their bicyle. They are complaining that their ankle is in a lot of pain, and they have a blistering headache.'
	}
] satisfies Case[];

const runSeeders = async () => {
	// Create data
	await Promise.all(
		cases.map(async (x) =>
			prisma.case.upsert({
				where: { id: x.id },
				update: {},
				create: x
			})
		)
	);
};
runSeeders()
	.then(async () => {
		console.log('database seeded');
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
