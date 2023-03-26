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
import customer1 from '../About/Images/customer-1.jpg';
import customer2 from '../About/Images/customer-2.jpg';
import customer3 from '../About/Images/customer-3.jpg';

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
            key={eachService[0]}
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
      <div className='Testimonials RestaurantWrapperDiv'>
        <h1> HERE IS WHAT OUR CUSTOMERS THINK ABOUT US </h1>
        <div className='Review-Wrapper'>
          <div className='Review' key='Review-1'>
            <p>
              &quot; Savor Bites is just awesome! I just launched a startup
              which leaves me with no time for cooking, so Savor Bites is a
              life-saver. Now that I got used to it, I couldn't live without my
              daily meals! &quot;
            </p>
            <div className='Profile'>
              <img src={customer1} alt={customer1} />
              <span>Alberto Duncan</span>
            </div>
          </div>
          <div className='Review' key='Review-2'>
            <p>
              &quot; Inexpensive, healthy and great-tasting meals, delivered
              right to my home. We have lots of food delivery here in Lisbon,
              but no one comes even close to Savor Bites. Me and my family are
              so in love!&quot;
            </p>
            <div className='Profile'>
              <img src={customer2} alt={customer2} />
              <span>Joana Silva</span>
            </div>
          </div>
          <div className='Review' key='Review-3'>
            <p>
              &quot; I was looking for a quick and easy food delivery service in
              San Franciso. I tried a lot of them and ended up with SavorBites.
              Best food delivery service in the Bay Area. Keep up the great
              work!&quot;
            </p>
            <div className='Profile'>
              <img src={customer3} alt={customer3} />
              <span>Milton Chapman</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
