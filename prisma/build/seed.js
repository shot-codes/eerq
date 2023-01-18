var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
import { PrismaClient } from '@prisma/client';
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
];
const runSeeders = () =>
	__awaiter(void 0, void 0, void 0, function* () {
		// Create data
		yield Promise.all(
			cases.map((x) =>
				__awaiter(void 0, void 0, void 0, function* () {
					return prisma.case.upsert({
						where: { id: x.id },
						update: {},
						create: x
					});
				})
			)
		);
	});
runSeeders()
	.then(() =>
		__awaiter(void 0, void 0, void 0, function* () {
			console.log('database seeded');
			yield prisma.$disconnect();
		})
	)
	.catch((e) =>
		__awaiter(void 0, void 0, void 0, function* () {
			console.error(e);
			yield prisma.$disconnect();
			process.exit(1);
		})
	);
