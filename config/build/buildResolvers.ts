import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
