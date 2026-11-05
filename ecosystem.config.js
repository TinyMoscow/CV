module.exports = {
  apps: [
    {
      name: "trs",
      cwd: process.env.TRS_RELEASE_DIR || __dirname,
      script: "node_modules/serve/build/main.js",
      interpreter: "/root/.nvm/versions/node/v22.23.4/bin/node",
      args: "-s build",
      autorestart: true,
      env: {
        HOST: "0.0.0.0",
        PORT: "8080",
        NODE_ENV: "production",
      },
    },
  ],
};
