import { Router } from "express"
import express from "express"
// import userBL from "../bl/usersBL"

const router = express.Router();

router.get("/users", async (req, res, next) => {
  // let data = await userBL.getAllUsers();
  let data = ['TEST TEST TEST TEST TEST TEST']
  return res.json(data);
});

export default router;
