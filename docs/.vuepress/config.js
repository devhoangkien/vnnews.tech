const path = require('path')

module.exports = {
  title: 'VNodeJS.Tech',

  description: 'VNodeJS.Tech lập trình nodejs',

  locales: {
    '/': {
      lang: 'vi',
    },
    '/en': {
      lang: 'en-US',
    },
  },

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-132770851-2',
    }],
    ['@limdongjin/vuepress-plugin-simple-seo', {
      default_image: '/images/nodejs.png',
      root_url: 'https://vnodejs.tech',
      default_site_name: 'Blog lập trình NodeJS',
    }],
  ],

  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vssue)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all',
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all',
          },
        },
      })
    }
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    lang: 'vi',

    personalInfo: {
      nickname: 'VNodeJS',
      description: 'Happy Coding<br/>Happy Life',
      email: 'VNodeJS.Tech@gmail.com',
      location: 'Hà Nội, Việt Nam',
      organization: 'NodeJS',

      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/devhoangkien/vnodejs',
        },
        facebook: {
          account: '',
          link: 'https://www.facebook.com/devhoangkien',
        },

        medium: {
          account: 'vnodejs.tech',
          link: 'https://medium.com/@vnodejs.tech',
        },

        gitlab: {
          account: 'devhoangkien',
          link: 'https://gitlab.com/devhoangkien',
        },

      },
    },

    header: {
      background: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2020 <a href="https://github.com/devhoangkien/vnodejs" target="_blank">VNodeJS.Tech</a>',
    },

    infoCard: {
      headerBackground: {
        // url: '/assets/img/header-image-01.jpg',
        useGeo: true,
      },
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Github', link: 'https://github.com/devhoangkien/vnodejs' },
      { text: 'Medium', link: 'https://medium.com/@vnodejs.tech' },
    ],

    comments: {
      platform: 'github',
      owner: 'devhoangkien',
      repo: 'vnode',
      clientId: '6000395549ef64ad69b7',
      clientSecret: '544fa95476ed29319ee24802954826c6c41b5e5e',
      // autoCreateIssue: true,
      autoCreateIssue: process.env.NODE_ENV !== 'development',

    },

    pagination: {
      perPage: 5,
    },

  },
}
