import { pool } from "../db";

export const getPets = async (_req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM pets");
      return res.status(200).send(rows);
    } catch (err) {
      return res.status(400).send(err);
    }
};

export const addPets = (req, res) => {
  const q = "INSERT INTO pets(`nome`, `idade`, `tipo`, `raca`, `nome_dono`, `tel_dono`) VALUES(?)";

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

export const updatePets = (req, res) => {
  const q =
    "UPDATE pets SET `nome` = ?, `idade` = ?, `tipo` = ?, `raca` = ?, `nome_dono` = ?, `tel_dono` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.idade,
    req.body.tipo,
    req.body.raca,
    req.body.nome_dono,
    req.body.tel_dono,
  ];

  pool.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet atualizado com sucesso.");
  });
};

export const deletePet = (req, res) => {
  const q = "DELETE FROM pets WHERE `id` = ?";

  pool.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet deletado com sucesso.");
  });
};