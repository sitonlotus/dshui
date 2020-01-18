module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '董事惠商城（DSHUI）- 中国领创一站式品质生活购物服务平台【官网】',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // loaders:[
    //   {
    //     test:/\.(png|jpe?g|gif|svg)$/,
    //     loader:"url-loader",
    //     query:{
    //       limit:10240,
    //       name:"img/[name].[ext]"
    //     }
    //   }
    // ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

