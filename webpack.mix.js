const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/app.js', 'vendor/sole-x/blog/resources/js/app.js'], 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
mix.sass('packages/blog/resources/css/blog.scss', 'css/blog.css')

mix.css('node_modules/highlight.js/styles/atom-one-light.css', 'css/markdown-theme/light.css')
mix.css('node_modules/highlight.js/styles/atom-one-dark.css', 'css/markdown-theme/dark.css')

mix.combine([
  'public/css/*.css',
], 'public/css/app.css')

if (mix.inProduction()) {
  mix.version()
} else {
  mix.browserSync({
    proxy: '127.0.0.1:8000',
    files: [
      'packages/blog/resources/**/*',
    ],
    notify: false,
    open: false,
  })
    .disableSuccessNotifications()
}
mix.webpackConfig({
  stats: {
    children: true,
  },
})
