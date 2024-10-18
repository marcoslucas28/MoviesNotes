const { Router } = require("express")

const UsersControllers = require("../controllers/UsersController.js")

const usersControllers = new UsersControllers()

const usersRoutes = Router()

usersRoutes.post("/", usersControllers.create)
usersRoutes.put("/:id", usersControllers.update)

module.exports = usersRoutes

