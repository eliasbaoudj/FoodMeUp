module.exports = {
    entry: [
      "whatwg-fetch",
      "./src/index.jsx"
    ],
    output: {
        filename: "./static/bundle.js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval",

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.jsx?$/, loader: "babel-loader" }
        ]
    },
    
};