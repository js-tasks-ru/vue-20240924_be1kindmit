import { defineConfig } from 'vite'
import { createTaskbookViteConfig } from '@shgk/vue-course-taskbook/configs/vite.config.js'
import svgLoader from 'vite-svg-loader'

const customConfig = defineConfig({
  plugins: [svgLoader()],
})

export default createTaskbookViteConfig({
  taskbookDir: __dirname,
  customConfig,
})
