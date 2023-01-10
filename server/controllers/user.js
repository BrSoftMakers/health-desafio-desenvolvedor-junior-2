//IMPORTANDO A CONFIGURAÇÃO FEITA DO DB
import { cliente } from "../db.js";
// import { defaultValueSchemable } from "sequelize/types/utils.js";

//EXPORTANDO CONST GET USER COM REQUISIÇÃO DE UMA QUERY DO DB
export const getUsers = (_, res) => {
    const q = "SELECT * FROM animal";
//VARIAVEL CLIENTE DO DB PASSANDO UMA REQUISIÇÃO E SOLICITANDO UM RES EM JASON
cliente.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data.rows);
});
}

export const addUser = (req, res) => {
    const q = 
        `INSERT INTO "animal" ("nome_anim", "idade_anim","especie_anim", "raca_anim", "nome_donoanim", "fone_donoanim") VALUES($1,$2,$3,$4,$5,$6)`;
    const values = [
        req.body.nome_anim,
        req.body.idade_anim,
        req.body.especie_anim,
        req.body.raca_anim,
        req.body.nome_donoanim,
        req.body.fone_donoanim,
    ];


    cliente.query(q, values, (err) => {
        if (err) return res.json(err);
        
        return res.status(200).json("Pet criado com sucesso!")
    });
};

export const updateUser = (req, res) => {
    const q =
        `UPDATE "animal" SET "nome_anim" = $1, "idade_anim" = $2, "especie_anim" = $3, "raca_anim" = $4, "nome_donoanim" = $5, "fone_donoanim" = $6 WHERE "id_anim" = $7`;
    const values = [
        req.body.nome_anim,
        req.body.idade_anim,
        req.body.especie_anim,
        req.body.raca_anim,
        req.body.nome_donoanim,
        req.body.fone_donoanim,
    ];

cliente.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet atualizado com sucesso.");
});
};

export const deleteUser = (req, res) => {
    const q = 
    `DELETE FROM "animal" WHERE "id_anim" = $1`;

cliente.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Pet deletado com sucesso.");
    });
};


