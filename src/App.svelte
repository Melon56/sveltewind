<script lang="ts">
 import Counter from './components/Counter.svelte';
 import svelteLogo from "./resources/svelte.svg";
 import viteLogo from "./resources/vite.svg";
 import tailwindLogo from "./resources/tailwind.svg";
</script>

<div class="text-center">
 <div class="h-[18rem]" id="spacer"/>
 <div class=" text-center inline-flex">
  <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
   <img class="transition-all h-40 hover:drop-shadow-[0_0_2em_#646cff]" src={viteLogo} alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
   <img class="transition-all h-40 hover:drop-shadow-[0_0_2em_#ff3e00]" src={svelteLogo} alt="Svelte Logo" />
  </a>
  <a href="https://tailwindcss.com" target="_blank" rel="noreferrer"> 
   <img class="transition-all h-40 hover:drop-shadow-[0_0_2em_#38bdf8]" src={tailwindLogo} alt="Tailwind Logo" />
  </a>
 </div>
 <h1 class="text-2xl">Vite + Svelte + Tailwind</h1>
 <Counter />
 <p class="text-slate-500">Check out <a class="text-blue-600 underline" href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!</p>
 <p class="text-slate-500">Click on the Logos to learn more.</p>
 <p class="text-slate-700 italic">This took a long time to replicate in tailwind.</p>
</div>