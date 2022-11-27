import { HomePageContainer } from './styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <div>
        <h1>Bem vindo a SoftPets!</h1>
        <p>
          Essa é a minha solução para o desafio da vaga de Desenvolvedor
          Fullstack Junior 2 na Softmakers!
        </p>
        <h2>Back-end</h2>
        <p>
          O Back-end da aplicação foi desenvolvido utilizando{' '}
          <strong>
            NodeJS, TypeScript, ExpressJS, Express-Validator, TypeORM e
            PostgreSQL
          </strong>{' '}
          como banco de dados.
        </p>
        <h2>Front-end</h2>
        <p>
          O Front-end da aplicação foi desenvolvido utilizando{' '}
          <strong>ReactJS, TypeScript e Vite.</strong>
        </p>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
