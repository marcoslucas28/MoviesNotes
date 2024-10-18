const sqlConnection = require("../../sqlite")

const createUsers = require("./CreateUsers.js")

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join()

    sqlConnection().then(db => db.exec(schemas)).catch(error => console.log(error))
}

module.exports = migrationsRun