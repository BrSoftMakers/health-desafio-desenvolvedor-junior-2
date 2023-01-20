export interface IOwner {
  id: string;
  name: string;
  phone_number: string;
  createdAt: Date;
}

export interface IOwnerRequest {
  name: string;
  phone_number: string;
}

export interface IOwnerResponse {
  id?: string;
  name?: string;
  phone_number?: string;
  createdAt?: Date;
}
