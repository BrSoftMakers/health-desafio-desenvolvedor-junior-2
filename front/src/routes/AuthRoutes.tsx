import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Layout from "../components/layout";
import Pet from "../pages/Pet";
import Dashboard from "../pages/Dashboard";
import PetEdit from "../pages/Pet/PetEdit";

const AppRoutes: React.FC = () => {
    const {authenticated, isLoading} = useAuth();

    if(isLoading) {
        return <p>Carregando...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/login"/>;
    }

        return (
            <Layout>
                <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/pets" element={<Pet/>}/>
                <Route path="/pets/edit" element={<PetEdit title={'Editar Registro'}/>}/>
                </Routes>
            </Layout>
        );
    
};

export default AppRoutes;