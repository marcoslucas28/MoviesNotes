module.exports = {
  apps : [{
    name: "app",
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