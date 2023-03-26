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
      <div className='Testimonials RestaurantWrapperDiv'>
        <h1>Customers sayings about my website </h1>
        <div className='Review-Wrapper'>
          <div className='Review'>
            <p>
              Omnifood is just awesome! I just launched a startup which leaves
              me with no time for cooking, so Omnifood is a life-saver. Now that
              I got used to it, I couldn't live without my daily meals!
            </p>
            <span>Alberto Duncan</span>
          </div>
          <div className='Review'>
            <p>
              Inexpensive, healthy and great-tasting meals, delivered right to
              my home. We have lots of food delivery here in Lisbon, but no one
              comes even close to Omifood. Me and my family are so in love!
            </p>
            <span>Joana Silva</span>
          </div>
          <div className='Review'>
            <p>
              I was looking for a quick and easy food delivery service in San
              Franciso. I tried a lot of them and ended up with Omnifood. Best
              food delivery service in the Bay Area. Keep up the great work!
            </p>
            <span>Milton Chapman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
