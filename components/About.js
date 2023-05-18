import React from 'react';

const About = () => {
  return (
    <>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 my-20">
        <div className="px-7">
          <h5 class="mb-2 text-4xl font-bold   ">Know More About BURGERY maniac</h5>

          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Welcome to BURGERY maniac, the ultimate destination for foodies who love to indulge in their favorite meals at the comfort of 
          their home! Our website brings you a wide range of mouth-watering dishes from yours, all in one place. Whether you're craving 
          for burgers, a cheesy pizza, or a healthy salad, we've got you covered.

          At BURGERY maniac, we make food ordering a hassle-free and convenient experience for you. Simply browse through our menu, 
          select your desired dishes, and place your order with a few clicks. We offer flexible payment options, secure transactions,
          and timely delivery to ensure that you get your food hot and fresh at your doorstep.

          Our website is user-friendly and easy to navigate, with a responsive design that works seamlessly on all devices. We also 
          offer personalized recommendations based on your past orders, as well as exclusive deals and discounts that you won't find 
          anywhere else.

          So, what are you waiting for? Explore our website and treat yourself to a gastronomic experience that will leave you craving
          for more. Start ordering now!


          </p>
        </div>
        <div>
          <img src="/images/burger.png"></img>
        </div>
      </div>
    </>
  );
};

export default About;
