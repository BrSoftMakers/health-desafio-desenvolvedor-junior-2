import { IOwnerRequest } from '../owner/ownerInterface';

export interface IPet {
  id: string;
  name: string;
  age: number;
  type: string;
  breed?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface IPetRequest {
  name: string;
  age: number;
  type: string;
  breed?: string;
  owner_id: IOwnerRequest;
}

export interface IUpdatePet {
  name?: string;
  age?: number;
  type?: string;
  breed?: string;
}

export interface IPetResponse {
  id: string;
  name: string;
  age: number;
  type: string;
  breed?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
