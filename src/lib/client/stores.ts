import type { Case } from '@prisma/client';
import { writable } from 'svelte/store';

export const cases = writable<Case[]>();
export const activeCase = writable<Case>();
