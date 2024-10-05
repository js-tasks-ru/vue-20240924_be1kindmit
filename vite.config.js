import { defineConfig } from 'vite'
import { createTaskbookViteConfig } from '@shgk/vue-course-taskbook/configs/vite.config.js'

const customConfig = defineConfig({
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '**/*.svg'],
  },
})

export default createTaskbookViteConfig({
  taskbookDir: __dirname,
  customConfig,
})
