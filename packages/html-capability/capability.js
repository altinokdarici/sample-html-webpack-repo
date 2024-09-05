import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    description: "Create html",
    implementations: {
        webpack: (config,options) => {
            config.plugins ??= [];
            config.plugins.push(new HtmlWebpackPlugin({
                template: options.template,
                inject: 'body',
                title: 'Minimal Webpack Project with EJS',
                templateParameters: {
                    message: 'Webpack and EJS!',
                },
            }));

            return config;
        },
    },
};