import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
  plugins: [Vue(), VueJsx(), DefineOptions()],
  optimizeDeps: {
    disabled: true
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    //setup 文件的路径。它们将运行在每个测试文件之前。
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: {
      web: [`/\.[jt]sx$/`]
    }
  }
})
