import { useContext } from 'react';
import Header from '../components/Header/style';
import OptionsPet from '../components/OptionsPet';
import { DashboardContext } from '../contexts/DashboardContext';
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
      </Container>
    </>
  );
};

export default Dashboard;
