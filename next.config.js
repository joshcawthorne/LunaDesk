const path = require("path");
const withImages = require("next-images");

const withTM = require("next-transpile-modules")(["whatamesh"]);

module.exports = withImages(
  withTM({
    env: {
      PUBLIC_SUPABASE_URL: process.env.PUBLIC_SUPABASE_URL,
      PUBLIC_SUPABASE_ANON_KEY: process.env.PUBLIC_SUPABASE_ANON_KEY,
      BASE_DOMAIN: process.env.BASE_DOMAIN,
      API_BASE_URL: process.env.API_BASE_URL,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      BATTERY_SAVE: process.env.BATTERY_SAVE,
    },
    images: {
      disableStaticImages: true,
    },

    exclude: path.resolve(__dirname, "src/assets/svg/"),

    esModule: true,
    webpack: (config) => {
      module: {
        rules: [
          {
            test: /\.css$/,
            include: path.join(__dirname, "src"),
            use: [
              "style-loader",
              {
                loader: "typings-for-css-modules-loader",
                options: {
                  modules: true,
                  namedExport: true,
                },
              },
            ],
          },
        ];
      }
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
  })
);
