import express from "express"; 

const router = express.Router();

import pets from "./pets/api-pets.js"
router.use("/pets", pets); 

import adoptions from "./adoptions/api-adoptions.js"
router.use("/adoptions", adoptions); 


export default router; 

