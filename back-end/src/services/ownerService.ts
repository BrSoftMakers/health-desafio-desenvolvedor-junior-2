import { repository, createOnwerProps } from "../repositories/ownerRepository";

async function createOrUpdate(owner: createOnwerProps) {
    const isCPFInUse = !!(await repository.findByCPF(owner.CPF));

    if (isCPFInUse) {
        return await repository.update(owner);
    }

    return await repository.create(owner);
}

export const service = {
    createOrUpdate,
};
