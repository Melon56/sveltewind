<script lang="ts">
 let count: number = 0
 const increment = () => {
  count += 1
 }
</script>
<button class="border rounded text-center w-[100px] bg-slate-800 hover:bg-slate-900 hover:border-slate-900 transition-all" on:click={increment}>count is {count}</button>