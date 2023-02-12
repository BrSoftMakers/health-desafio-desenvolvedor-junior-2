export const Form = () => {
  return (
    <form>
      <h1>Cadastre seu pet</h1>

      <fieldset>
        <legend>Dados do pet</legend>

        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />

        <label htmlFor="age">Idade</label>
        <input type="number" id="age" />

        <label htmlFor="breed">Raça</label>
        <input type="text" id="breed" />

        <label htmlFor="image">Foto do animal</label>
        <input type="text" id="image" />

        <label htmlFor="select_specie">Selecione a especie:</label>
        <select id="select_specie">
          <option value="cat">Gato</option>
          <option value="dog">Cachorro</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Dados do Tutor</legend>

        <label htmlFor="tutor_name">Nome do tutor</label>
        <input type="text" id="tutor_name" />

        <label htmlFor="phone_number">Telefone para contato</label>
        <input type="text" id="phone_number" />
      </fieldset>
    </form>
  );
};
