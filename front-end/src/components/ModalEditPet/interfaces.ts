export interface iPetData {
  name?: string;
  age?: number;
  species?: string;
  breed?: string;
  tutorName?: string;
  phoneNumber?: string;
  image?: string;
}

export type iKeys =
  | "name"
  | "age"
  | "species"
  | "breed"
  | "tutorName"
  | "phoneNumber"
  | "image";
