import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycle from '../Cycles';
import DefaultButton from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export default function MainForm() {
  return (
    <div className={styles.container}>
      <DefaultInput
        labelText='Task'
        type='text'
        id='task'
        placeholder='Digite Algo'
      />
      <p>Próximo Ciclo é de 25 minutos</p>
      <Cycle />
      <DefaultButton color='red' icon={ <PlayCircleIcon /> } />
    </div>
  );
}
