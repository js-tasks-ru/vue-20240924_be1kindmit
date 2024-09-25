import { defineConfig } from 'vite'
import { createTaskbookViteConfig } from '@shgk/vue-course-taskbook/configs/vite.config.js'

const customConfig = defineConfig({
  // Здесь вы можете переопределять конфигурацию Vite
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
})

export default createTaskbookViteConfig({
  taskbookDir: __dirname,
  customConfig,
})
