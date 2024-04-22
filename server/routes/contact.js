import express from 'express';
import {sendemail} from '../controllers/contact.js';
const router=express.Router()
router.post('/sendemail',sendemail)
export default router;