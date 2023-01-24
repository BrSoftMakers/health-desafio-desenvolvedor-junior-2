import { owners } from "@prisma/client";

import { repository, createOnwerProps } from "../repositories/ownerRepository";
import { error } from "../utils/errorTypes";

async function post(owner: createOnwerProps) {
    const isCPFInUse = !!(await repository.findByCPF(owner.CPF));

    if (isCPFInUse) {
        throw error.conflict();
    }

    await repository.create(owner);
}

export const service = {
    post,
};
