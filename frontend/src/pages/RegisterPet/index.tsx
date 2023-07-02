export default function RegisterPet() {
  return (
    <form>
      <h1>Register Pet</h1>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Idade" />
      <input type="text" placeholder="Raça" />
      <select name="" id="">
        <option value="">Cachorro</option>
        <option value="">Gato</option>
      </select>
      <input type="text" placeholder="None do dono" />
      <input type="text" placeholder="CPF do dono" />
      <input type="text" placeholder="Telefone para contato" />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
