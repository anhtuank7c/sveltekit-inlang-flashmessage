import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import inLangAdapter from '@inlang/sdk-js/adapter-sveltekit'

export default defineConfig({
	plugins: [inLangAdapter(), sveltekit()]
});
