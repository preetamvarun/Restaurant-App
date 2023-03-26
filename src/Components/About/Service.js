import './Service.css';

const Service = ({ icon, title, content }) => {
  return (
    <div className='Service'>
      <i className={`fa-solid fa-${icon}`}></i>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Service;
