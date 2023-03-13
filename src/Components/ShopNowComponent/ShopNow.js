import './ShopNow.css';

const ShopNow = () => {
  return (
    <div className='Shop-Now'>
      <div className='shop_now_text'>
        <h1>See Every Thing With Clarity</h1>
        <p>
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, sunglasses, and contacts—we have got your eyes
          covered.
        </p>
        <a href='/#'>Shop Now</a>
      </div>
      <div className='Specs-Image'>
        <img src={require('../ShopNowComponent/specs.jpg')} alt='specs' />
      </div>
    </div>
  );
};

export default ShopNow;
