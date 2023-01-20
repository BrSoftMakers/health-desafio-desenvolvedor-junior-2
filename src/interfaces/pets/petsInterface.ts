export interface IPet {
  id: string;
  name: string;
  age: number;
  type: string;
  breed?: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IPetRequest {
  name: string;
  age: number;
  type: string;
  breed?: string;
}
