import './Qa.css';

const Qa = ({ question, answer, show, ToggleShow }) => {
  const handleClick = () => {
    ToggleShow(question);
  };

  return (
    <div className='QA'>
      <div className='question'>
        <p>{question}</p>
        {show ? (
          <i className='fa-solid fa-caret-down' onClick={handleClick}></i>
        ) : (
          <i className='fa-solid fa-caret-up' onClick={handleClick}></i>
        )}
      </div>
      <p style={{ display: `${show ? 'block' : 'none'}` }}>{answer}</p>
    </div>
  );
};

export default Qa;
