const {
    override,
    fixBabelImports,
    addLessLoader,
    extendDefaultPlugins
} = require("customize-cra");
const theme = require("./package.json").theme;

const SVGO = require('svgo')

const configSelector = () => (config, env) => {
    const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
    config.module.rules[oneOf_loc].oneOf = [{
            test: /\.svg$/,
            use: [{
                    loader: 'svg-sprite-loader',
                    options: {}
                },
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [{
                            name: 'removeAttrs',
                            params: {
                                attrs: 'fill'
                            }
                        }]
                    }
                }
            ]
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]

    return config;
}
module.exports = override(
    configSelector(),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: theme
        }

    }),
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css' // change importing css to less
    })
);