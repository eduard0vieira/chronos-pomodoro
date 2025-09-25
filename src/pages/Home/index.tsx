import '../../styles/global.css';
import '../../styles/theme.css';

import MainTemplate from '../../templates/MainTemplate';
import CountDown from '../../components/CountDown';
import MainForm from '../../components/MainForm';

export default function Home() {
  return (
    <>
      <MainTemplate>
          <CountDown />
          <MainForm />
      </MainTemplate>
    </>
  );
}
