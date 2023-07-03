import Page from './components/template/page';
import { PetProvider } from './context/petContext';
import { Router } from './routes/routes';

function App() {
  return (
    <PetProvider>
      <Page>
        <Router />
      </Page>
    </PetProvider>
  );
}

export default App;
