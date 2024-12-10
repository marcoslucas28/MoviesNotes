module.exports = {
  apps : [{
    name: "server",
    script: "./src/server.js",
    watch: true,
    instances: 1,
    env: {
      NODE_ENV: "development",
      PORT: process.env.PORT || 3333,
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}