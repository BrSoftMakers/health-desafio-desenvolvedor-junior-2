export interface iPetRequest {
  name: string;
  age: number;
  species: string;
  breed: string;
  tutorName: string;
  phoneNumber: string;
  image?: string;
}

export interface iPetUpdate {
  name?: string;
  age?: number;
  species?: string;
  breed?: string;
  tutorName?: string;
  phoneNumber?: string;
  image?: string;
}
