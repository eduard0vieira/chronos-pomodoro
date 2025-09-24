import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycle from '../Cycles';

export default function MainForm() {
  return (
    <div className={styles.container}>
      <DefaultInput
        labelText='Task'
        type='text'
        id='task'
        placeholder='Digite Algo'
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Cycle />
    </div>
  );
}
