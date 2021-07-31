const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  target: "serverless",
  env: {
    PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
    BASE_DOMAIN: process.env.BASE_DOMAIN,
  },
  exclude: path.resolve(__dirname, "assets/svg/"),

  esModule: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader",
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true,
            svgo: {
              plugins: [
                {
                  cleanupIDs: {
                    prefix: {
                      toString() {
                        this.counter = this.counter || 0;
                        return `id-${this.counter++}`;
                      },
                    },
                  },
                },
                {
                  removeTitle: true,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
});
