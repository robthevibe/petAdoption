import express from "express"; 

const router = express.Router();

import pets from "./pets/api-pets.js"
router.use("/pets", pets); 


export default router; 

