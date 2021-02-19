// babel.config.js
module.exports = api => {
    const isTest = api.env("test");
    return {
        presets: ["@babel/preset-env", "@babel/preset-react"]
    };
};
