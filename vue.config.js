module.exports = {
    publicPath: '',
    css: {
        extract: {filename: '[name].css'}
    },
    outputDir: 'dist',
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'VueJS form'
        }
    }
}