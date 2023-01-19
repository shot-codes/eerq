<script>
  import { Confetti } from "svelte-confetti";
</script>

<div class="fixed -top-10 w-screen flex justify-center">
  <Confetti
    x={[-3, 3]}
    y={[0, 0.1]}
    delay={[500, 2000]}
    infinite
    duration={5000}
    amount={200}
    fallDistance="100vh"
  />
</div>

<div class="fixed bottom-0 flex items-center justify-center w-full">
  <Confetti delay={[100, 100]} />
</div>
<div class="fixed bottom-20 flex w-full">
  <Confetti cone x={[1, 2.5]} y={[0.25, 0.75]} delay={[0, 100]} />
</div>

<div class="fixed bottom-20 right-0 flex">
  <Confetti cone x={[-1, -2.5]} y={[0.25, 0.75]} delay={[300, 100]} />
</div>
