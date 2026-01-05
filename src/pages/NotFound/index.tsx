import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import MainTemplate from '../../templates/MainTemplate';
import Container from '../../components/Container';
import GenericHtml from '../../components/GenericHtml';

export default function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <main className={styles.main}>
            <h1>😅 404</h1>
            <h2>Ops... você se perdeu!</h2>

            <p>
              Parece que essa página resolveu sair de férias 🌴 ou talvez nunca
              tenha existido 🤔
            </p>

            <p>
              Não se preocupe, você pode voltar para a <Link to="/">home</Link> e
              continuar sua jornada 🚀
            </p>
          </main>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
