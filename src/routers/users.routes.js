const { Router } = require("express")
const multer = require("multer")

const UsersControllers = require("../controllers/UsersController.js")
const UserAvatarController = require("../controllers/UserAvatarController.js")

const usersControllers = new UsersControllers()
const userAvatarController = new UserAvatarController()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated.js")

const uploadConfig = require("../configs/upload.js")
const upload = multer(uploadConfig.MULTER)

const usersRoutes = Router()

usersRoutes.post("/", usersControllers.create)
usersRoutes.put("/", ensureAuthenticated, usersControllers.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes

