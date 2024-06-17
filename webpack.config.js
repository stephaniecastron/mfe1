const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'simulation',

  remotes: {
    resume: "http://localhost:4202/remoteEntry.js",
  },

  exposes: {
    "./Module": "./src/app/app.module.ts",
  },

  shared: {
    ...shareAll({ singleton: false, strictVersion: true, requiredVersion: 'auto' }),
  },

});
