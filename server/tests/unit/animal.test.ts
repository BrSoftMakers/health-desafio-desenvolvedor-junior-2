import { jest } from '@jest/globals';
import { beforeEach } from 'node:test';
import __animalDataFactory from '../factories/animalDataFactory';
import animalsService from '../../src/services/animalServices';
import animalsRepository from '../../src/models/animals';

jest.mock('../../src/models/animals.ts');

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe('Animals service suit test', () => {
  it('should successfully add an animal', async () => {
    const data = await __animalDataFactory();

    jest.spyOn(animalsRepository, 'add').mockImplementationOnce((): any => {
      return true;
    });

    await animalsService.insert(data);

    expect(animalsRepository.add).toBeCalled();
  });

  it('should return all registered animals', async () => {
    const responseData = [
      {
        id: 1,
        name: 'Arukinha',
        age: 3,
        type: 'Dog',
        race: 'Pinscher',
        ownerId: 1,
        owner: {
          name: 'Ryan',
          fone: '32323825',
        },
      },
      {
        id: 1,
        name: 'Pitucha',
        age: 7,
        type: 'Dog',
        race: 'Pinscher',
        ownerId: 1,
        owner: {
          name: 'Ryan',
          fone: '32323825',
        },
      },
    ];

    jest
      .spyOn(animalsRepository, 'getAnimals')
      .mockImplementationOnce((): any => {
        return responseData;
      });

    const result = await animalsService.listAll();

    expect(animalsRepository.getAnimals).toBeCalled();
    expect(result).toEqual(responseData);
  });

  it('should successfully update animal data', async () => {
    const data = {
      animalAge: 10,
    };

    jest
      .spyOn(animalsRepository, 'findById')
      .mockImplementationOnce((): any => {
        return true;
      });

    jest
      .spyOn(animalsRepository, 'updateData')
      .mockImplementationOnce((): any => {
        return true;
      });

    await animalsService.update(data, 1);

    expect(animalsRepository.findById).toBeCalled();
    expect(animalsRepository.updateData).toBeCalled();
  });

  it('should fail to update animal data', async () => {
    const data = {
      animalAge: 10,
    };

    jest
      .spyOn(animalsRepository, 'findById')
      .mockImplementationOnce((): any => {
        return false;
      });

    const result = animalsService.update(data, 1);

    expect(animalsRepository.findById).toBeCalled();
    expect(result).rejects.toEqual({
      status: 404,
      message: 'Animal not registered!',
    });
  });

  it('should successfully remove animal record', async () => {
    jest
      .spyOn(animalsRepository, 'findById')
      .mockImplementationOnce((): any => {
        return true;
      });

    await animalsService.removeById(1);

    expect(animalsRepository.findById).toBeCalled();
    expect(animalsRepository.removeById).toBeCalled();
  });

  it('should fail to remove animal record', async () => {
    jest
      .spyOn(animalsRepository, 'findById')
      .mockImplementationOnce((): any => {
        return false;
      });

    const result = animalsService.removeById(1);

    expect(animalsRepository.findById).toBeCalled();
    expect(result).rejects.toEqual({
      status: 404,
      message: 'Animal not registered!',
    });
  });
});

afterAll(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});
