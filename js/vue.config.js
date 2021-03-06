chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
        config.output.filename('js/[name].js').end();
        config.output.chunkFilename('js/[name].js').end();

        config.plugin('extract-css').tap(args => [{
            filename: `css/[name].css`,
            chunkFilename: `css/[name].css`
        }])


    }
},