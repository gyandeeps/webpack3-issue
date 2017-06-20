var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: { 
        filename: "./dist/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.join(__dirname, "src"),
                ],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["es2015", {"modules": false}]]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    }
};
