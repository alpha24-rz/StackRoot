import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    darkMode: 'class',
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/fonts/Logofont.ttf'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
