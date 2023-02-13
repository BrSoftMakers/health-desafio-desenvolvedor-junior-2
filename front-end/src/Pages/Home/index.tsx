import { Header } from "../../components/Header";
import { HomeStyled } from "./style";
import dog from "../../img/dog.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HomeStyled>
      <Header />

      <main>
        <img src={dog} alt="Imagem cachorro" />
        <div className="main_content">
          <h1>
            O cuidado para seu <span>melhor amigo!</span>
          </h1>
          <p>
            Está esperando o que para fazer seu pet mais feliz? Aqui você
            encontra o cuidado que seu pet merece. Banho, tosa, ração e
            acessórios.
          </p>
          <Link to="/Register">Cadastre seu pet</Link>
        </div>
      </main>
    </HomeStyled>
  );
};
