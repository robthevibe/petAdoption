import express from "express"; 

const router = express.Router(); 

import apis from "./api/api.js"
router.use("/api",apis); 

export default router; 