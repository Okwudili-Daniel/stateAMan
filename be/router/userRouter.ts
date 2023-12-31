import { Router } from "express";
import {
  createUser,
  getOneUser,
  signInUser,
  verifyUser,
} from "../controller/userControlle";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/sign-in-user").post(signInUser);

router.route("/verify-user").patch(verifyUser);

router.route("/get-one-user/:userID").get(getOneUser);

export default router;