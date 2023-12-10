import express from "express";
import userController from "../controllers/user-controller.js";
import { authHandler } from "../middleware/auth-middleware.js";

const router = express.Router();

router.get("/", authHandler, userController.getAllUsers);

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

router.post("/logout", userController.logoutUser);

router.delete('/', authHandler, userController.deleteUser);

router.put('/', authHandler, userController.updateUser);


export default router;