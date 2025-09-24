import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';

export default function MainForm() {
  return (
    <div className={styles.container}>
      <DefaultInput labelText='Task' type='text' id='task' placeholder='Digite Algo'/>
    </div>
  )
}