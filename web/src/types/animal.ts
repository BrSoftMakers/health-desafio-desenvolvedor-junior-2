export interface Animal {
  id: number
  name: string
  age: number
  type: string
  race: string
  ownerId: number
  owner: {
    name: string
    fone: string
  }
}