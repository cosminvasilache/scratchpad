import { UserConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

const config = {
  root: './src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
    modulePreload: {
      polyfill: false,
    },
    target: "esnext",
    rollupOptions: {

    },
  },
  server: {
    open: true,
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    viteSingleFile({}),
  ],

} satisfies UserConfig;

export default config;
