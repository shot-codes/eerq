<script lang="ts">
  import { fade } from "svelte/transition";
  import Call from "$lib/client/components/Call.svelte";
  import Calling from "$lib/client/components/Calling.svelte";
  import Prioritize from "$lib/client/components/Prioritize.svelte";
  import Thanks from "$lib/client/components/Thanks.svelte";
  import { currentCase } from "$lib/client/stores";

  currentCase.set(-1);

  let showCalling = true;
  let showCall = false;
  let showPrioritize = false;
  let showThanks = false;
</script>

{#if showCalling}
  <div class="absolute h-full" in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <Calling
      on:done={() => {
        showCalling = false;
        showCall = true;
      }}
      on:thanks={() => {
        showCalling = false;
        showThanks = true;
      }}
    />
  </div>
{/if}

{#if showCall}
  <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <Call
      on:done={() => {
        showCall = false;
        showPrioritize = true;
      }}
    />
  </div>
{/if}

{#if showPrioritize}
  <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <Prioritize
      on:done={() => {
        showPrioritize = false;
        showCalling = true;
      }}
      on:thanks={() => {
        showPrioritize = false;
        showThanks = true;
      }}
    />
  </div>
{/if}

{#if showThanks}
  <div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <Thanks />
  </div>
{/if}
