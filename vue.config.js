module.exports = {
    chainWebpack: config => {
        config.module
            .rule()
            .test(/\.scss$/)
            .use(['vue-style-loader', 'css-loader'])
            .loader('sass-loader')
            .end()
    },
    publicPath: ''
}