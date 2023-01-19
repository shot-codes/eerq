<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { activeCase } from '$lib/client/stores';

	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col justify-center items-center p-10">
	<div class="text-xl font-bold">ERPQ</div>
	<div>Emergency Room Prioritization Queue</div>
	<div class="w-64 h-64 mt-10">
		<img
			src={$activeCase.image_url}
			class="rounded-xl w-64"
			alt="woman sitting on the pavement next to a broken bike."
		/>
	</div>

	<div class="mt-4 text-neutral-600 text-center">
		{$activeCase.description}
	</div>
</div>

<div class="flex fixed bottom-12 w-full justify-center">
	<button
		on:click={() => {
			dispatch('done');
		}}
		class="rounded-full bg-red-600 h-14 w-14 text-white flex flex-shrink-0 items-center justify-center"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M12 8q2.95 0 5.812 1.188q2.863 1.187 5.088 3.562q.3.3.3.7q0 .4-.3.7l-2.3 2.25q-.275.275-.637.3q-.363.025-.663-.2l-2.9-2.2q-.2-.15-.3-.35q-.1-.2-.1-.45v-2.85q-.95-.3-1.95-.475T12 10q-1.05 0-2.05.175q-1 .175-1.95.475v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.662.2q-.363-.025-.638-.3l-2.3-2.25q-.3-.3-.3-.7q0-.4.3-.7q2.2-2.375 5.075-3.562Q9.05 8 12 8Z"
			/></svg
		>
	</button>
</div>
