const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
  },
  webpack(config) {
   config.module.rules.push({
      test: /\.scss$/,
      use: [
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['styles/common.scss'],
          },
        },
      ],
    });
    return config;
  },
})