<script lang="ts">
	import { cases } from '$lib/client/stores';

	cases.set([
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
