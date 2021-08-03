// 这个js文件是自己新疆的，最后会与公共的哪些文件有一个合并
module.exports = {
    // 准备配置Webpackconfigure
    configureWebpack: {
        // 配置路径的一些问题
        resolve: {
            // extensions:[] 此处里面写一些后缀名，以后在文档里的后缀名就可以省略
            // 别名
            alias: {
                // vue3中@已经自动配置成src了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}