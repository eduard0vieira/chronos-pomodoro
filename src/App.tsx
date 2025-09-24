import Container from './components/Container';
import Heading from './components/Heading';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';
import MainForm from './components/MainForm';

import './styles/global.css';
import './styles/theme.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>
          <Menu />
        </Heading>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
