<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { totalCases, currentCase } from "../stores";

  $: {
    progress.set($currentCase / $totalCases);
  }

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<div class="fixed bottom-0 w-full p-4 px-6">
  <progress class="w-full h-full block h-2 rounded-full bg-neutral-800" value={$progress} />
</div>

<style>
  progress {
    color: #2563eb;
  }
  progress::-moz-progress-bar {
    border-radius: 10px;
    background: #2563eb;
  }

  progress::-webkit-progress-value {
    border-radius: 10px;
    background: #2563eb;
  }

  progress::-webkit-progress-bar {
    border-radius: 100%;
    background: #262626;
  }
</style>
