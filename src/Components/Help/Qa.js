import './Qa.css';

const Qa = ({ question, answer, show, ToggleShow }) => {
  const handleClick = () => {
    ToggleShow(question);
  };

  let cls = show ? 'show' : 'hide';

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
      <div className='ans'>
        <p className={cls}>{answer}</p>
      </div>
    </div>
  );
};

export default Qa;
