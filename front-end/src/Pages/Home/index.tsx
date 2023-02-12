import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <div className="main_content">
          <h1>
            O cuidado para seu <span>melhor amigo</span>
          </h1>
          <p>
            Está esperando o que para fazer seu pet mais feliz? Aqui você
            encontra o cuidado que seu pet merece. Banho, tosa, ração e
            acessórios.
          </p>
          <button>Cadastre seu pet</button>
        </div>
      </main>
    </>
  );
};
