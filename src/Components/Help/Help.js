import { useState } from 'react';
import './Help.css';
import Qa from './Qa';
import { qas } from '../../utils/Config';

const Help = () => {
  const [Qas, setQas] = useState(qas);

  const ToggleShow = (question) => {
    let newQas = [];
    Qas.forEach((eachQa) => {
      eachQa[2] = eachQa[0] === question ? !eachQa[2] : false;
      newQas.push(eachQa);
    });
    setQas(newQas);
  };

  return (
    <div className='HelpWrapper'>
      <h1>Discover Our Restaurant Help Center</h1>
      <div className='Faqs'>
        {Qas.map((eachQa) => (
          <Qa
            question={eachQa[0]}
            answer={eachQa[1]}
            show={eachQa[2]}
            ToggleShow={ToggleShow}
            key={eachQa}
          />
        ))}
      </div>
    </div>
  );
};

export default Help;
