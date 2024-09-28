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

/**
 * POST /api/todos - Creates a new todo item with the information contained in the request body.
 *
 * A 201 Created response will be returned, along with a Location header pointing to the new todo
 * item, and a JSON representation of that todo item.
 */
router.post("/", (req, res) => {
  try {
    const newPet = createPets(req.body.title, req.body.age, req.body.breed, req.body.gender, req.body.medicalRecords);
    return res.status(201).location(`/api/pets/${newPet.id}`).json(newPet);
  } catch (err) {
    return res.status(422).json(err.errors);
  }
});

/**
 * PATCH /api/todos/:id - Updates the todo with the matching id with the information in the request
 * body, if it exists. If so, returns a 204 No Content response.
 *
 * If the todo item with that id doesn't exist, a 404 Not Found response will be returned instead.
 */
router.patch("/:id", (req, res) => {
  try {
    updatePets(req.params.id, req.body);
    return res.sendStatus(204);
  } catch (err) {
    if (err.errors) return res.status(422).json(err.errors);
    return res.sendStatus(404);
  }
});

/**
 * DELETE /api/todos/:id - Deletes the todo item with the matching id, if it exists. Either way,
 * returns a 204 No Content response.
 */
router.delete("/:id", (req, res) => {
  deletePet(req.params.id);
  return res.sendStatus(204);
});

export default router