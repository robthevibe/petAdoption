import express from "express"; 

import {
    createAdoption,
    retrieveAdoptions,
    retrieveAdoptionsById,
    retrieveAdoptionsByUser
  } from "../../../data/pets-dao.js";

  const router = express.Router(); 
  router.get("/", (req, res) => {
    const allAdoptions = retrieveAdoptions();
    return res.json(allAdoptions);
  });
  
  export default router; 