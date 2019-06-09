const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nic-resume-pc/demo/'
  }
} : {}
module.exports = {
  mode: 'spa',
  ...routerBase,
  /*
  ** Headers of the page
  */
  head: {
    
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' },
      { name: 'viewport', content: 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'http://fangjiesong.top/css/iconfont/iconfont.css' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/animate.css/3.7.2/animate.min.css' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/css/iconfont.css',
    '~/assets/css/reset.css',
    '~/assets/css/main.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  

  

  /*
  ** Build configuration
  */
  build: {
    publicPath: '/static/',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
