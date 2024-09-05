const { join } = require("path");

module.exports = async function ({ session, definition, route }) {
    const { imports } = session.importMap;

    const bundleUrl = imports[join(definition.name, route.entry[0].importPath).replace(/\\/g, "/")];

    // HACK!!!!
    const url = bundleUrl.replace('src/index.js', 'index.html');

    const response = await fetch(url);
    const html = await response.text();

    return {
        contentType: "text/html",
        content: html,
    };
};
