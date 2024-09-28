import express from "express";

import {
  createPets,
  retrievePetsById,
  retrievePets,
  updatePets,
  deletePet
} from "../../../data/pets-dao.js";

const router = express.Router();


router.get("/", (req, res) => {
  const allPets = retrievePets(req.query);
  return res.json(allPets);
});


router.get("/:id", (req, res) => {
  const pet = retrievePetsById(req.params.id);
  if (!pet) return res.sendStatus(404);
  return res.json(pet);
});


router.post("/", (req, res) => {
  try {
    const newPet = createPets(req.body.title, req.body.age, req.body.breed, req.body.gender, req.body.medicalRecords);
    return res.status(201).location(`/api/pets/${newPet.id}`).json(newPet);
  } catch (err) {
    return res.status(422).json(err.errors);
  }
});


router.patch("/:id", (req, res) => {
  try {
    updatePets(req.params.id, req.body);
    return res.sendStatus(204);
  } catch (err) {
    if (err.errors) return res.status(422).json(err.errors);
    return res.sendStatus(404);
  }
});

router.delete("/:id", (req, res) => {
  deletePet(req.params.id);
  return res.sendStatus(204);
});

export default router