import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../assets/styles/default';
import GlobalStyles from '../../assets/styles/global';

import { Header } from '../Header';
import { Content } from '../Content';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Content />
    </ThemeProvider>
  );
}
