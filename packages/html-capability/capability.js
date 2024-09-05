import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    description: "Create html",
    implementations: {
        webpack: (config,options) => {
            config.plugins ??= [];
            config.plugins.push(new HtmlWebpackPlugin(options));

            return config;
        },
    },
};