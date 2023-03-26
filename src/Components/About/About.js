import Service from './Service';
import './About.css';
import img1 from '../About/Images/1.jpg';
import img2 from '../About/Images/2.jpg';
import img3 from '../About/Images/3.jpg';
import img4 from '../About/Images/4.jpg';
import img5 from '../About/Images/5.jpg';
import img6 from '../About/Images/6.jpg';
import img7 from '../About/Images/7.jpg';
import img8 from '../About/Images/8.jpg';
import FoodItem from './FoodItem';
import { services } from '../../utils/Config';

const About = () => {
  const images1 = [img1, img2, img3, img4];
  const images2 = [img5, img6, img7, img8];

  return (
    <div className='About-Div'>
      <p className='About-Intro'>
        Hello We're Savor Bites. your new premium food delivery service. We know
        you are always busy. No time for cooking. So let us take care of that,
        we are really good at it, we promise!
      </p>
      <div className='Services'>
        {services.map((eachService) => (
          <Service
            icon={eachService[0]}
            title={eachService[1]}
            content={eachService[2]}
          />
        ))}
      </div>
      <div className='Food-Images'>
        <div className='Food-Images-1'>
          {images1.map((eachImage) => (
            <FoodItem img={eachImage} key={eachImage} />
          ))}
        </div>
        <div className='Food-Images-2'>
          {images2.map((eachImage) => (
            <FoodItem img={eachImage} key={eachImage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
