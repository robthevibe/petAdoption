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
  
  router.get("/:id", (req, res) => {
    const adoptionsId = retrieveAdoptionsById(req.params.id);
    if (!adoptionsId) return res.sendStatus(404);
    return res.json(adoptionsId);
  });

  router.get("/user/:userName", (req, res) => {
    const adoptionsUser = retrieveAdoptionsByUser(req.params.userName);
    if (!adoptionsUser) return res.sendStatus(404);
    return res.json(adoptionsUser);
  });



  router.post("/", (req, res) => {
    try {
      const newAdoption = createAdoption(req.body.userName, req.body.petID);
      return res.status(201).location(`/api/adoptions/${newAdoption.id}`).json(newAdoption);
    } catch (err) {
      return res.status(422).json(err.errors);
    }
  });
  export default router; 