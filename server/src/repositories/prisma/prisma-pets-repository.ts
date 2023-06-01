import { prisma } from '../../lib/prisma'

import { PetsRepository } from '../pets-repository'
import { PetsPropsRequest, PetsPropsResponse, UpdatePetsPropsRequest } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
    create = async (data: PetsPropsRequest): Promise<PetsPropsResponse> => {
        const customer = await prisma.pet.create({
            data
        })

        return customer
    }

    findById = async (id: string): Promise<PetsPropsResponse | null> => {
        const customer = await prisma.pet.findUnique({
            where: { id }
        })
        return customer
    }

    findMany = async (): Promise<PetsPropsResponse[]> => {
        const pets = await prisma.pet.findMany()
        return pets

    }

    update = async (data: UpdatePetsPropsRequest): Promise<PetsPropsResponse> => {
        const customer = await prisma.pet.update({
            where: {

                id: data.id
            },
            data
        })
        return customer
    }

    delete = async (id: string): Promise<void> => {
        await prisma.pet.delete({ where: { id } })
    }
}
