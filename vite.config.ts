import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import tailwindcss from 'tailwindcss'
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [svelte({
  preprocess: sveltePreprocess({
   postcss: {
    plugins: [tailwindcss('./tailwind.config.cjs')],
}})})]})
