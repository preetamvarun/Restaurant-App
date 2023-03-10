import './Navigator.css';

const Navigator = () => {
  return (
    <div className='Navigator'>
      {/*List Items in the navigator*/}
      <div className='Nav-Links'>
        <ul style={{ display: 'flex', justifyContent: 'center' }}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Offers</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Help</a>
          </li>
        </ul>
      </div>

      {/*Cart Icon*/}
      <div className='cart-icon'>
        <i className='fa-solid fa-cart-shopping'></i>
      </div>
    </div>
  );
};

export default Navigator;
