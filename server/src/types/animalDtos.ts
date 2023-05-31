export interface CreateAnimalRequestDto {
  ownerName: string;
  fone: string;
  animalName: string;
  animalAge: number;
  type: string;
  race: string;
}

export interface UpdateAnimalRequestDto {
  animalAge?: number;
  fone?: string;
}
