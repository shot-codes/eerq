<script lang="ts">
	let radioSelected = false;
	const select = () => {
		radioSelected = true;
	};
</script>

<div class="flex flex-col h-full items-center p-10 pb-20">
	<div>
		<div>Please rank the priority of the call:</div>

		<div class="flex flex-col space-y-3 items-center mt-10">
			<label>
				<div class="absolute pl-14 pt-3 text-xs">Highest Priority</div>
				<input type="radio" name="1" on:click={select} />
				<span>1</span>
			</label>
			<label>
				<input type="radio" name="1" on:click={select} />
				<span>2</span>
			</label>
			<label>
				<input type="radio" name="1" on:click={select} />
				<span>3</span>
			</label>
			<label>
				<input type="radio" name="1" on:click={select} />
				<span>4</span>
			</label>
			<label>
				<input type="radio" name="1" on:click={select} />
				<span>5</span>
			</label>
			<label>
				<input type="radio" name="1" on:click={select} />
				<span>6</span>
			</label>
			<label>
				<div class="absolute pl-14 pt-3 text-xs">Lowest Priority</div>
				<input type="radio" name="1" on:click={select} />
				<span>7</span>
			</label>
		</div>
	</div>
</div>
{#if radioSelected}
	<div class="flex absolute bottom-12 w-full justify-center">
		<a
			href="/"
			class=" bg-blue-700 rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center"
		>
			<svg
				class="mr-[2px]"
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				><path
					fill="none"
					stroke="#ddd"
					stroke-dasharray="24"
					stroke-dashoffset="24"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 11L11 17L21 7"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.4s"
						values="24;0"
					/></path
				></svg
			>
		</a>
	</div>
{/if}

<style lang="postcss">
	input[type='radio'] {
		display: none;
	}

	:checked + span {
		@apply bg-neutral-400 text-black font-bold;
	}

	label span {
		@apply rounded-full border border-neutral-400 w-10 h-10 hover:border-neutral-500 active:bg-neutral-800 flex pt-[3px] pr-[1px];
		display: inline-block;
		line-height: 2em;
		text-align: center;
	}
</style>
