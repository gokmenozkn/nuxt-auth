
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        body: true
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/materialize.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDCPIsJ0vUEVs_r1VlrPKpytJcH1MFo9eY",
          authDomain: "nuxt-auth-77da2.firebaseapp.com",
          databaseURL: "https://nuxt-auth-77da2.firebaseio.com",
          projectId: "nuxt-auth-77da2",
          storageBucket: "nuxt-auth-77da2.appspot.com",
          messagingSenderId: "181347911879",
          appId: "1:181347911879:web:b401bf3fcb9715712e96e2"
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChanged'
            },
            ssr: true
          }
        }
      }
    ]
  ],
  // firebase: {
  //   config: {
  //     apiKey: "AIzaSyDCPIsJ0vUEVs_r1VlrPKpytJcH1MFo9eY",
  //     authDomain: "nuxt-auth-77da2.firebaseapp.com",
  //     databaseURL: "https://nuxt-auth-77da2.firebaseio.com",
  //     projectId: "nuxt-auth-77da2",
  //     storageBucket: "nuxt-auth-77da2.appspot.com",
  //     messagingSenderId: "181347911879",
  //     appId: "1:181347911879:web:b401bf3fcb9715712e96e2"
  //   },
  //   services: {
  //     auth: {
  //       ssr: true
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
