const mix = require("laravel-mix");
const path = require("path");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
});

if (mix.inProduction()) {
    mix.disableNotifications().sourceMaps();
}

mix.ts("src/index.ts", "dist");
