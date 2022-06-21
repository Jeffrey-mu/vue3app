import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path') //必须要引入resolve 
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        UnoCSS({
            shortcuts: {
            },
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons(),
            ],
        }),
    ],
    resolve: {
        // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            '@': resolve(__dirname, 'src') //把src改为@
        }
    },
    server: {
        host: 'localhost',
        port: 3031,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3030', // 所要代理的目标地址
                rewrite: path => path.replace(/^\/api/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
                changeOrigin: true,  // true/false, Default: false - changes the origin of the host header to the target URL
            }
        },
    },
})
