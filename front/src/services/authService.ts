import api from "./api";

export interface User {
    id?: string;
    email: string;
    password: string;
}

export const signup = async (User: User): Promise<User> => {
    const response = await api.post<User>("/auth/signup", User)
    return response.data;
}

export const signin = async (User: User): Promise<User> => {
    const response = await api.post<User>("/auth/signin", User)
    return response.data;
}