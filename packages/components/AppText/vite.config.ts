import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import react from '@vitejs/plugin-react';
import { env as NodeEnv } from "node:process";
import { resolve } from "node:path";

const libModeConfig: UserConfig = {
    mode: "production",
    plugins: [
        react()
    ],
    build: {
        outDir: "dist",
        lib: {
            entry: "./src/UI.tsx",
            name: "AppText",
            formats: ['es'],
            fileName: format => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    'react': "React"
                }
            }
        },
    }
}

const kitModeConfig: UserConfig = {
    plugins: [
        react({
            jsxRuntime: "automatic"
        })
    ],
    build: {
        outDir: "dist",
        lib: {
            entry: "./src/index.ts",
            name: "TextKit",
            formats: ['es'],
            fileName: format => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react"]
        },
    },
}

export default defineConfig(() => {
    return libModeConfig;
})
