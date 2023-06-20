const express = require("express");
const { animal } = require("./models");
const router = express.Router();

router.get("/", async (req, res) => {
  const animals = await animal.findAll({ order: [["id", "ASC"]] });
  res.status(200).json(animals);
});

router.post("/", async (req, res) => {
  try {
    const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body;
    console.log(req.body);

    const newAnimal = await animal.create({
      nome,
      idade,
      tipo,
      raca,
      nome_dono,
      telefone_dono,
    });

    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(500).json({ error: "Failed to create animal" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, tipo, raca, nome_dono, telefone_dono } = req.body;

    // Verificar se o animal existe no banco de dados
    const existingAnimal = await animal.findByPk(id);

    if (!existingAnimal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    // Atualizar o animal com os novos dados
    await existingAnimal.update({
      nome,
      idade,
      tipo,
      raca,
      nome_dono,
      telefone_dono,
    });

    res.status(200).json(existingAnimal);
  } catch (error) {
    console.error("Error updating animal:", error);
    res.status(500).json({ error: "Failed to update animal" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAnimal = await animal.destroy({
      where: { id: req.params.id },
    });
    if (deletedAnimal === 1) {
      res.status(200).json({ message: "Animal deleted successfully" });
    } else {
      res.status(404).json({ error: "Animal not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete animal" });
  }
});

module.exports = router;
