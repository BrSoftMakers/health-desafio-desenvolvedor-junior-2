import { useContext } from 'react';
import Header from '../components/Header/style';
import OptionsPet from '../components/OptionsPet';
import { DashboardContext } from '../contexts/DashboarContext';
import Container from '../styles/Container';

const Dashboard = () => {
  const { list } = useContext(DashboardContext);

  return (
    <>
      <Header>
        <h1>Dashboard</h1>
      </Header>
      <Container>
        <section className='container__Pets'>
          <OptionsPet list={list} />
        </section>
        <section className='search__Pets'>
          <h1>Aqui será a rota de GET</h1>
        </section>
        <section className='search__PetsById'>
          <h1>Aqui será a rota de GET/:id</h1>
        </section>
        <section className='update__Pet'>
          <h1>Aqui será a rota de PATCH/:id</h1>
        </section>
        <section className='delete__Pet'>
          <h1>Aqui será a rota de DELETE/:id</h1>
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
