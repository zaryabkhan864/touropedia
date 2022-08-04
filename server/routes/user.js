import express from 'express';
const router = express.Router();
import {signup,signin,googleSignIn} from "../controllers/user.js";

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/googlesignin',googleSignIn)
export default router