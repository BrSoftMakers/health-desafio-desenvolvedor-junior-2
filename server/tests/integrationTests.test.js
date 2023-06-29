const sinon = require('sinon');
const chai = require('chai');

const { app } = require('../index');
const { Pets } = require('../models/index');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Testes de integração Rota /pets-handler/read-all', () => {
  it('quando a requisição e bem sucedida', async () => {
    sinon.stub(Pets, 'findAll').resolves([]);

    const response = await chai.request(app)
      .get('/pets-handler/read-all');

    chai.expect(response.status).to.equal(200);
    chai.expect(Array.isArray(response.body)).to.be.equal(true);

    sinon.restore();
  });
});

describe('Testes de integração Rota /pets-handler/read', () => {
  it('quando a requisição e bem sucedida', async () => {
    sinon.stub(Pets, 'findOne').resolves({id:1});

    const response = await chai.request(app)
      .get('/pets-handler/read/1')
      .set('params', 'id');

    chai.expect(response.status).to.equal(200);
    chai.expect(response.body).to.have.property('id').to.be.equal(1);

    sinon.restore();
  });
});

describe('Testes de integração Rota /pets-handler/create', () => {
  it('quando a requisição e bem sucedida', async () => {
    sinon.stub(Pets, 'create').resolves({registred:true});

    const response = await chai.request(app)
      .post('/pets-handler/create')
      .send({
        nome: "rex", 
        idade: 15,
        eGatoOuCachorro: "gato", 
        raca: "budog",
        nomeDoDono: "ana", 
        telefoneDeContato: "(00)00000-0000"
      });
      
    chai.expect(response.status).to.equal(201);
    chai.expect(response.body).to.have.property('registred').to.be.equal(true);

    sinon.restore();
  });
});

describe('Testes de integração Rota /pets-handler/update', () => {
  it('quando a requisição e bem sucedida', async () => {
    sinon.stub(Pets, 'update').resolves({registred:true});

    const response = await chai.request(app)
      .put('/pets-handler/update/1')
      .send({
        nome: "rex", 
        idade: 10,
        eGatoOuCachorro: "cachorro", 
        raca: "budog",
        nomeDoDono: "ana", 
        telefoneDeContato: "(00)00000-0000"
      })
      .set('params', 'id');
      
    chai.expect(response.status).to.equal(201);
    chai.expect(response.body).to.have.property('registred').to.be.equal(true);

    sinon.restore();
  });
});

describe('Testes de integração Rota /pets-handler/delete', () => {
  it('quando a requisição e bem sucedida', async () => {
    sinon.stub(Pets, 'findOne').resolves({message:'Registro de pet deletado com sucesso'});

    const response = await chai.request(app)
      .delete('/pets-handler/delete/1')
      .set('params', 'id');

    chai.expect(response.status).to.equal(201);
    chai.expect(response.body).to.have.property('message').to.be.equal('Registro de pet deletado com sucesso');

    sinon.restore();
  });
});