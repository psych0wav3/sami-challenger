module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }], // converte os .ENV
    "@babel/preset-typescript", // converte TS em JS
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@modules": "./src/modules", // declare o path finders
          "@config": "./src/config",
          "@shared": "./src/shared",
        },
      },
    ],
    "babel-plugin-transform-typescript-metadata", // habilite a conversão de metadata
    ["@babel/plugin-proposal-decorators", { legacy: true }], // habilita decorators usados pelo tsring
    ["@babel/plugin-proposal-class-properties", { loose: true }], // habilita conversão da classes TS
  ],
};