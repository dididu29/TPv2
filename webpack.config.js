const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js", // Point d'entrée
  output: {
    filename: "bundle.js", // Nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Répertoire de sortie
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
