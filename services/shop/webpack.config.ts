import {
  BuildMode,
  BuildOptions,
  BuildPlatform,
  buildWebpack,
} from "@packages/build-config";
import path from "path";
import { Configuration, container } from "webpack";
import packageJson from "./package.json";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const options: BuildOptions = {
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
      src: path.resolve(__dirname, "src"),
      public: path.resolve(__dirname, "public"),
    },
    port: env.port ?? 3001,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  };

  const config: Configuration = buildWebpack(options);

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: "shop",
      filename: "remoteEntry.js",
      exposes: {
        "./Router": "./src/router/Router.tsx",
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          requiredVersion: packageJson.dependencies["react"],
        },
        "react-router-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-router-dom"],
        },
        "react-dom": {
          eager: true,
          requiredVersion: packageJson.dependencies["react-dom"],
        },
      },
    })
  );

  return config;
};
