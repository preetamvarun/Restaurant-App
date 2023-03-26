import './Help.css';
import Qa from './Qa';

const Qas = [
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
  [
    'How much comission will I charged by swiggy',
    'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    false,
  ],
];

const Help = () => {
  return (
    <div className='HelpWrapper'>
      <h1>Discover Our Restaurant Help Center</h1>
      <div className='Faqs'>
        {Qas.map((eachQa) => {
          <Qa />;
        })}
      </div>
    </div>
  );
};

export default Help;
