<script lang="ts">
	import { browser } from '$app/environment';
	let popupVisible = false;

	setTimeout(function () {
		popupVisible = true;
		if (browser) {
			window.navigator.vibrate(500);
		}
	}, 2000);
</script>

<div class="flex flex-col justify-center items-center p-10">
	<div class="text-xl font-bold">ERPQ</div>
	<div>Emergency Room Prioritization Queue</div>

	<div class="mt-8 text-neutral-600 text-center">
		In a moment you will receive a phoney phone call from a distressed individual who has an
		emergency. Please read their complaint before hanging up, and then assign a priority to the
		caller.
	</div>
</div>

{#if popupVisible}
	<div class="flex absolute bottom-12 w-full justify-center">
		<a
			href="/call"
			class="rounded-full bg-green-600 h-14 w-14 text-white flex flex-shrink-0 items-center justify-center"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19.95 21q-3.225 0-6.287-1.425q-3.063-1.425-5.425-3.8q-2.363-2.375-3.8-5.438Q3 7.275 3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038Q20.2 21 19.95 21Z"
				/></svg
			>
		</a>
	</div>
{/if}
