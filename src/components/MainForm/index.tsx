import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycle from '../Cycles';
import DefaultButton from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export default function MainForm() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <DefaultInput
          labelText='Task'
          type='text'
          id='task'
          placeholder='Digite sua tarefa aqui...'
        />
        <p className={styles.nextCycleInfo}>Próximo Ciclo é de 25 minutos</p>
        <Cycle />
        <DefaultButton color='green' icon={<PlayCircleIcon />} />
      </div>
    </div>
  );
}
