import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import path from "path";
import {
  ArcoResolver
} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: true,
      resolvers: [ArcoResolver()],
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView']
      }],
      include: [/\.vue$/, /\.vue\?vue/,],
      deep: true,
      allowOverrides: false,
      dirs: ['src/components', 'src/layouts'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      dts: "./auto-imports.d.ts"
    }),
    VueMacros({
      plugins: {
        vue: vue(),
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
