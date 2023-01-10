const { PrismaClient } = require("@prisma/client");
const { response } = require("express");

const prisma = new PrismaClient();

module.exports =

{
    async Create(request, response){
        const { name, age, animal, race, ownerName, tel } = request.body
        
        if(!animal){
            return response.status(400).json("Animal is mandatory")
        }
    
        if(!ownerName){
            return response.status(400).json("ownerName is mandatory")
        }
    
        if(!tel){
            return response.status(400).json("tel is mandatory")
        }
        const pet = await prisma.pet.create({
            data: {
                name,
                age,
                animal,
                race,
                ownerName,
                tel,
            },
        });
    
        return response.status(201).json(pet);
    },

    async Get(request, response){
        const pets = await prisma.pet.findMany()
        return response.status(200).json(pets)
    },

    async Put(request, response){
        const { name, age, animal, race, ownerName, tel, Id, status} = request.body
        if(!Id){
            return response.status(400).json("Id is mandatory")
        }
    
        const petAlreadyExist = await prisma.pet.findUnique({where: { Id }})
    
        if(!petAlreadyExist){
            return response.status(404).json("pet does not exist")
        }
        const pet = await prisma.pet.update({
            
            where: {
                Id,
            },
            data: {
                name,
                status,
                age,
                animal,
                race,
                ownerName,
                tel,
            },
        })
        return response.status(200).json(pet)
    },

    async Delete(request, response){
   
        const {Id} = request.params
        const intId = parseInt(Id)
        if(!intId){
            return response.status(400).json("Id is mandatory")
        }
    
        const petAlreadyExist = await prisma.pet.findUnique({where: { Id: intId }})
        
        if(!petAlreadyExist){
            return response.status(404).json("pet does not exist")
        }
    
        await prisma.pet.delete({where: { Id: intId }})
    
        return response.status(200).send()
    }


    

}