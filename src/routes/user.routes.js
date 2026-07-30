import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser)

export default router






// # MONGODB_URI=mongodb://youtubetest:Ahsan123@ac-wjyi2vz-shard-00-00.suv0cgc.mongodb.net:27017,ac-wjyi2vz-shard-00-01.suv0cgc.mongodb.net:27017,ac-wjyi2vz-shard-00-02.suv0cgc.mongodb.net:27017/?replicaSet=atlas-t4ppjz-shard-0&ssl=true&authSource=admin
// # MONGODB_URI=mongodb+srv://youtubetest:Ahsan123@cluster0.suv0cgc.mongodb.net