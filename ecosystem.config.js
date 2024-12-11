module.exports = {
  apps : [{
    name: "server",
    script: "./src/server.js",
    watch: true,
    exec_mode: "fork",
    instances: 1,
    env: {
      NODE_ENV: "development",
      PORT: process.env.PORT || 3333,
    },
    env_production: {
      NODE_ENV: "production",
      PORT: process.env.PORT || 3333,
    }
  }]
}