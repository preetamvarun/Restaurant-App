import Service from './Service';
import './About.css';
import img1 from '../About/1.jpg';
import img2 from '../About/2.jpg';
import img3 from '../About/3.jpg';
import img4 from '../About/4.jpg';
import img5 from '../About/5.jpg';
import img6 from '../About/6.jpg';
import img7 from '../About/7.jpg';
import img8 from '../About/8.jpg';

const About = () => {
  const services = [
    [
      'calendar',
      'UP TO 365 DAYS/YEAR',
      "Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.",
    ],

    [
      'clock',
      'READY IN 20 MINUTES',
      "You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.",
    ],

    [
      'carrot',
      '100% ORGANIC',
      'All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!',
    ],

    [
      'cart-shopping',
      'ORDER ANYTHING',
      "We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!",
    ],
  ];
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
          <div>
            <img src={img1} alt='img' />
          </div>
          <div>
            <img src={img2} alt='img' />
          </div>
          <div>
            <img src={img3} alt='img' />
          </div>
          <div>
            <img src={img4} alt='img' />
          </div>
        </div>
        <div className='Food-Images-2'>
          <div>
            <img src={img5} alt='img' />
          </div>
          <div>
            <img src={img6} alt='img' />
          </div>
          <div>
            <img src={img7} alt='img' />
          </div>
          <div>
            <img src={img8} alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
