import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'node',
        include: ['src/**/*.test.ts'],
        coverage: {
            reporter: ['text', 'html'], // text no terminal, html no navegador
            exclude: ['**/node_modules/**', '**/dist/**', 'vitest.config.ts'],
        },
    },
});
