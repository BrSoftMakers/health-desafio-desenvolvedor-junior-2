const express = require("express");

const animals = [{ nome: "Garfield", status: false }];
const animalsRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Rota para criar um animal de estimação

animalsRoutes.post("/animais", async (req, res) => {
  const { nome } = req.body;
  const animal = await prisma.animal.create({
    data: {
      nome,
      idade: 2,
      tipo: "Gato",
      raca: "Vira-lata",
      nomeDono: "Salomão",
      telefoneDono: "67992997279",
    },
  });
  // animals.push({name, status: false});

  return res.status(201).json(animal);
});

// Rota para ler os animais do banco de dados

animalsRoutes.get("/animais", async (req, res) => {
  const animals = await prisma.animal.findMany();
  return res.status(200).json(animals);
});

// Rota para atualizar os animais do banco de dados

animalsRoutes.put("/animais", async (req, res) => {
  const { id, nome, idade, tipo, raca, nomeDono, telefoneDono } = req.body;

  // Verifica se o ID foi passado na requisição

  if(!id) {
    return res.status(400).json("ID is mandatory");
  }

  const animalAlreadyExist = await prisma.animal.findUnique({ where: { id } });

  // Verifica se o animal com o ID passado existe

  if(!animalAlreadyExist) {
    return res.status(404).json("Animal not exist");
  }

  const animal = await prisma.animal.update({
    where: {
      id,
    },
    data: {
        nome,
        idade,
        tipo,
        raca,
        nomeDono,
        telefoneDono,
    }
  });

  return res.status(200).json(animal);
});

// Rota para deletar um animal do banco de dados

animalsRoutes.delete("/animais/:id", async (req, res) => {
  const { id } = req.params;

  const idInt = parseInt(id);

  if(!idInt) {
    return res.status(400).json("ID is mandatory");
  }

  const animalAlreadyExist = await prisma.animal.findUnique({ where: { id: idInt } });

  // Verifica se o animal com o ID passado existe

  if(!animalAlreadyExist) {
    return res.status(404).json("Animal not exist");
  }

  await prisma.animal.delete({ where: { id: idInt } });

  return res.status(200).send();
});

module.exports = animalsRoutes;