import type { Case } from '@prisma/client';
import { writable } from 'svelte/store';

export const activeCase = writable<Case>();
export const cases = writable<Case[]>([
	{
		id: '1',
		image_url: 'bike.png',
		description:
			'The caller has just fallen of their bicycle. They are complaining that their ankle is in a lot of pain, and they have a blistering headache.'
	},
	{
		id: '2',
		image_url: 'man.png',
		description:
			'The caller has just witnessed their colleague collapse. They are reporting that they are responsive but dazed and confused.'
	},
	{
		id: '3',
		image_url: 'gma.png',
		description:
			'An elderly woman is calling and explaining that she has a dull and deep pain in her chest. She says she just ate strange looking berries from her garden.'
	}
]);
