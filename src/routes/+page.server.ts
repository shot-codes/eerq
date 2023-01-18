import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const load = (async () => {
	const cases = await db.case.findMany({});
	return {
		cases
	};
}) satisfies PageServerLoad;
