const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")

router.get("/getdata",userController.getAllUsers)
router.post("/register",userController.addUser)
router.get("/getuser/:id",userController.getById)
router.put("/updateuser/:id",userController.userUpdate)
router.delete("/deleteuser/:id",userController.userDelete)




module.exports = router;