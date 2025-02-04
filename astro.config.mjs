// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: '/',
    build: {
        format: 'file',
    },
    output: 'static',
});
