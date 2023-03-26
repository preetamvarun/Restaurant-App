import './FoodItem.css';

const FoodItem = ({ img }) => {
  return (
    <div className='Image-Div'>
      <img src={img} alt={img} />
    </div>
  );
};

export default FoodItem;
