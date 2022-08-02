const mix = require("laravel-mix")

require("laravel-mix-nunjucks")
// require("laravel-mix-replace-in-file")

// const CssoWebpackPlugin = require('csso-webpack-plugin').default
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const SVGSpritemapPlugin       = require( 'svg-spritemap-webpack-plugin' )
// const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' )
const manifestRemove = require('./manifestRemove.cjs')

const PROD_DIR = './prod'
const SRC_DIR = './src'

mix.disableNotifications()

// mix.options({
// 	autoprefixer: {
// 		enabled: true,
// 	}
// })

mix.njk(`${SRC_DIR}/`, './prod/', {
	path: `${SRC_DIR}/_njk/`,
})
mix.copy(`${SRC_DIR}/**/*.html`, './prod/')
mix.js(`${SRC_DIR}/js/index.js`, `${PROD_DIR}/assets/js/bundle.js`).extract()
mix.sass(`${SRC_DIR}/scss/style.scss`, `${PROD_DIR}/assets/css/style.css`)
// mix.replaceInFile({
// 	files: `${PROD_DIR}/assets/css/style.css`,
// 	from: /margin/g,
// 	to: 'sardins',
// });

mix.browserSync({
	server: 'prod',
	open: false,
})

// Удаляем файл mix-manifest.json
mix.after(() => { manifestRemove() })