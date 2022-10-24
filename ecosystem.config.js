module.exports = {
  apps: [
    {
      name: "trs",
      cwd: "/projects/trscv",
      script: "npm run prod",
      autorestart: true,
      env: {
        HOST: "0.0.0.0",
        PORT: "8080",
        NODE_ENV: "production",
      },
    },
  ],
};
