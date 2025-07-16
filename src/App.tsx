import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export default function App() {
  return (
    <>
      <Heading>
        Title
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed expedita,
        iusto consectetur et eos inventore alias! Ipsa expedita harum
        blanditiis! Officiis, harum animi odit eos provident dignissimos
        nesciunt quidem sapiente!
      </p>
    </>
  );
}
