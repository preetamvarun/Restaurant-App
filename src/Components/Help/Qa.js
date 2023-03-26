import './Qa.css';

const Qa = ({ question, answer, show }) => {
  return (
    <div className='QA'>
      <div className='question'>
        <p>{question}</p>
        {show ? (
          <i class='fa-solid fa-caret-down'></i>
        ) : (
          <i class='fa-solid fa-caret-up'></i>
        )}
      </div>
      <p style={{ display: `${show ? 'block' : 'none'}` }}>{answer}</p>
    </div>
  );
};

export default Qa;
