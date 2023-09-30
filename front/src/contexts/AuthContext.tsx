import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../services/authService";

interface AuthContexProps {
    authenticated: boolean;
    user: User;
    login: (user: User) => void;
    logout: () => void;
    isLoading: boolean;
}

const AuthContex = createContext<AuthContexProps>({} as AuthContexProps);

export const useAuth = () => useContext(AuthContex);

export const AuthProvider: React.FC = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({} as User);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("key");
        if (storedUser) {
            setUser (JSON.parse(storedUser));
            setAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const login = (loggedInUser: User) => {
        setUser(loggedInUser);
        setAuthenticated(true);
        localStorage.setItem("key", JSON.stringify(loggedInUser));
    };

    const logout = () => {
        setUser({} as User);
        setAuthenticated(false);
        localStorage.removeItem("key");
    };

    return (
        <AuthContex.Provider value={{authenticated, user, login, logout, isLoading}}>{children}</AuthContex.Provider>
    );
} 