import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('src/components', import.meta.url)),
        },
        // 导入时想要省略的扩展名列表  不建议使用 .vue 影响IDE和类型支持
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    //启动服务配置
    server: {
        host: "0.0.0.0",
        cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
        open: true, // 服务启动时自动在浏览器中打开应用
        port: 1013,
        strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
        proxy: {
            '/api': {
                target: 'http://localhost:3000/', //代理接口
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, ''),
            },
        },
    },
    // 生产环境打包配置
    build: {
        target: 'modules',
        outDir: 'dist', // 指定输出路径
        emptyOutDir: true, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
        assetsDir: 'static', // 指定生成静态资源的存放路径
        minify: 'terser', // 混淆器 , terser 构建后文件体积更小
        reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
        terserOptions: {
            compress: {
                // 打包生产环境 去除 console 和 debug
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                //静态资源分类打包
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            }
        }
    }
})
