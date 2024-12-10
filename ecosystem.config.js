module.exports = {
  apps : [{
    name: "server",
    script: "./src/server.js",
    watch: true,
    instances: 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}