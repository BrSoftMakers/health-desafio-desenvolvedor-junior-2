import prisma from "../database";
import { Request, Response } from "express";
import { validationResult } from "express-validator"
import { Ianimal } from "../schema/animalSchema";
import { stringify } from "querystring";

const newAnimal = async (req : Request, res : Response) => {
    const {
        name, 
        age,
        specie,
        breed,
        owner_name,
        owner_tel,
    } = req.body;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const animal = await prisma.animal.create({
            data: {
                name: name,
                age: age,
                specie: specie,
                breed: breed,
                owner_name: owner_name,
                owner_tel: owner_tel,
            },
        })

        return res.status(201).json(animal);
    } catch(error) {
        if (error instanceof Error) {
            return res.status(500).json("Message error: " + error.message);
        }
    }
}

const getAllAnimals = async (_req: Request, res : Response) => {
    const animals = await prisma.animal.findMany()
    return res.status(200).json(animals);
} 

const getAnimalById = async (req : Request, res : Response) => {
    const { id } = req.params;
    const animal = await prisma.animal.findUnique({
        where: {
            id : Number(id)
        },
    });
    if (!animal) {
        return res.status(404).json({Msg: "Animal not found"});    
    }
    return res.status(200).json(animal);
}

const updateAnimal = async (req : Request, res : Response) => {
    const { id } = req.params;
    const bodyData = req.body;

    try {
        const animalUpdate = await prisma.animal.update({
            where: {
                id: Number(id)
            },
            data: bodyData
        })
    } catch (error) {
        if (error instanceof Error) {
           return res.status(404).json("Error: animal not found!");
        }
    }

    res.status(200).json(bodyData)
    
}

const deleteAnimal = async (req : Request, res : Response) => {
    const { id } = req.params;

    try {
        const animalDelete = await prisma.animal.delete({
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json(animalDelete)
        
    } catch (error) {
        if (error instanceof Error) {
           return res.status(404).json("Error: animal not found!");
        }
    }
}

export default { newAnimal, getAllAnimals, getAnimalById, updateAnimal, deleteAnimal };