class Pet {
  constructor(id, nome, idade, especie, raca, nomeDono, telefoneDono, createdAt, updatedAt) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
    this.raca = raca;
    this.nomeDono = nomeDono;
    this.telefoneDono = telefoneDono;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Pet;
