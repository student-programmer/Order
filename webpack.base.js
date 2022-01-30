const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const project = require('./project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'


//const config = {
//      devtool: project.sourcemaps ? 'source-map' : false,
//      output: {
//        path: inProject(project.outDir),
//        filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
//        publicPath: project.publicPath,
//      },
//      resolve: {
//        modules: [
//          inProject(project.srcDir),
//          'node_modules',
//        ],
//        extensions: ['*', '.js', '.jsx', '.json'],
//      },
//      externals: project.externals,
//      module: {
//        rules: [],
//      },
//      plugins: [
//        new webpack.DefinePlugin(Object.assign({
//          'process.env': { NODE_ENV: JSON.stringify(project.env) },
//          __DEV__,
//          __TEST__,
//          __PROD__,
//        }, project.globals))
//      ],
//}


const config = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
                    ],
                    plugins: [
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            }
        ]
    },
    plugins: []
};

// Styles
// ------------------------------------
const extractStyles = new MiniCssExtractPlugin({
    filename: 'styles/[name].css',
    chunkFilename: '[name].css',
    disable: __DEV__,
})

config.module.rules.push({
    test: /\.(css)$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: process.env.NODE_ENV === 'development',
                minimize: {
                autoprefixer: {
                  add: true,
                  remove: true,
                  browsers: ['last 2 versions'],
                },
                discardComments: {
                  removeAll : true,
                },
                discardUnused: false,
                mergeIdents: false,
                reduceIdents: false,
                safe: true,
                sourcemap: project.sourcemaps,
              },
            },
        },
        'css-loader'
    ]
})

config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
    ],
})

config.module.rules.push({
    test: /\.(less)$/,
    use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader"
    ]
})

config.plugins.push(extractStyles)

// Images
// ------------------------------------
config.module.rules.push({
    test    : /\.(png|jpg|gif)$/,
    loader  : 'url-loader',
    options : {
        limit : 8192,
    }
})

// Fonts
// ------------------------------------
;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
].forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]

    config.module.rules.push({
        test    : new RegExp(`\\.${extension}$`),
        loader  : 'url-loader',
        options : {
            name  : '/fonts/[name].[ext]',
            limit : 10000,
            mimetype,
            
        },
    })
})

module.exports = config