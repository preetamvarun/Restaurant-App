import { useState } from 'react';
import './Help.css';
import Qa from './Qa';

const Help = () => {
  const [Qas, setQas] = useState([
    [
      'How much comission will I charged by swiggy',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      false,
    ],
    [
      'How much comission will I charged by swiggy1',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      false,
    ],
    [
      'How much comission will I charged by swiggy2',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      false,
    ],
    [
      'How much comission will I charged by swiggy23',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      true,
    ],
    [
      'How much comission will I charged by swiggy4',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      false,
    ],
    [
      'How much comission will I charged by swiggy5',
      'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
      false,
    ],
  ]);

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
