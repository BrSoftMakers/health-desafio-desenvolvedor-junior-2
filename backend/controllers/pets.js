import { pool } from "../db";

export const getPets = (_req, res) => {
  const q = "SELECT * FROM pets";

  pool.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addPets = (req, res) => {
  const q = "INSERT INTO pets(`nome`, `idade`, `tipo`, `raça`, `nome_dono`, `tel_dono`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.tipo,
    req.body.raça,
    req.body.nome_dono,
    req.body.tel_dono,
  ];

  pool.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet cadastrado com sucesso !");
  })
}