<script lang="ts">
 let count: number = 0
 const increment = () => {
  count += 1
 }
</script>
<button class=" border text-white rounded bg-gray-800" on:click={increment}>count is {count}</button>