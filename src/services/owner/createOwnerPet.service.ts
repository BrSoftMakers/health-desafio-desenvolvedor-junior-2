import { AppDataSource } from '../../data-source';
import { Owner } from '../../entities/petOwner.entity';
import {
  IOwnerRequest,
  IOwnerResponse,
} from '../../interfaces/owner/ownerInterface';
import { responseOwnerSchema } from '../../schemas/owner/ownerSchema';

const createOwnerPetService = async (
  ownerData: IOwnerRequest
): Promise<IOwnerResponse> => {
  const ownerRepository = AppDataSource.getRepository(Owner);

  const createOwner = ownerRepository.create(ownerData);

  await ownerRepository.save(createOwner);

  const responseData = await responseOwnerSchema.validate(createOwner, {
    stripUnknown: true,
  });

  return responseData;
};

export default createOwnerPetService;
