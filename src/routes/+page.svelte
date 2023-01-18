<script lang="ts">
	import { cases } from '$lib/client/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		cases.set(data.cases);
		console.log($cases);
	});
</script>

<div class="flex flex-col justify-center items-center p-10">
	<div class="text-xl font-bold">ERPQ</div>
	<div>Emergency Room Prioritization Queue</div>

	<div class="mt-8 text-neutral-600 text-center">This is a protoype for...</div>
</div>

<div class="flex absolute bottom-12 w-full justify-center">
	<a
		href="/case"
		class="rounded-full bg-blue-600 h-14 p-6 text-white flex flex-shrink-0 items-center justify-center"
	>
		Try out the prototype!
	</a>
</div>
