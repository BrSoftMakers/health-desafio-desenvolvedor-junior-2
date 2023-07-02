import Page from './components/template/page';
import { PetProvider } from './context/petContext';
import { Router } from './routes/routes';

function App() {
  return (
    <Page>
      <PetProvider>
        <Router />
      </PetProvider>
    </Page>
  );
}

export default App;
