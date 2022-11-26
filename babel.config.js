module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ["module-resolver",
                {
                    root: ["./src"],
                    extensions: ["ts", "tsx", "js", "jsx"],
                    alias: {
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@config": "./src/config",
                        "@hooks": "./src/hooks",
                        "@routes": "./src/routes",
                        "@screens": "./src/screens",
                        "@services": "./src/services",
                        "@styles": "./src/styles",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
