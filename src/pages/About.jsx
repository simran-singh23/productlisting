import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">

      <section className="relative h-[70vh] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop"alt="shopping"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">

    
         <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Discover Fashion, Style & Everything You Love
          </h1>

          <p className="text-gray-200 text-lg
          md:text-xl mt-6 leading-8">
            We are more than just a shopping website. We create an experience
            where quality products, modern trends, and customer satisfaction

            come together in one place.
          </p>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
     alt="about"
              className="rounded-3xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About Our Store
            </h2>

     <p className="text-gray-600 leading-9 text-lg mb-6">
              Our journey started with one simple goal — to make online
              shopping easy, affordable, and exciting for everyone. We believe
              shopping should not only be about buying products, but also about
              enjoying the experience, discovering new styles, and finding
              things that truly match your personality.
            </p>
 <p className="text-gray-600 leading-9 text-lg mb-6">
              From fashion collections and trending accessories to lifestyle
              essentials and premium products, we carefully select every item
              to ensure quality and 
              customer satisfaction. Our team constantly
              works to bring fresh collections, modern designs, and the latest
              trends directly to your screen.
            </p>

            <p className="text-gray-600 leading-9 text-lg mb-8">
              Thousands of customers trust us because we focus on quality,
              secure shopping, fast delivery, and excellent customer support.
              We want every customer to feel confident and happy while shopping
              with us.
            </p>  <button className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Customers Love Us
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Trusted by thousands of happy shoppers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
<div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-5xl font-bold mb-4">10K+</h3>
              <p className="text-gray-600 text-lg">
                Happy Customers
              </p>
            </div>
<div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-5xl font-bold mb-4">500+</h3>
              <p className="text-gray-600 text-lg">
                Premium Products
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-5xl font-bold mb-4">24/7</h3>
              <p className="text-gray-600 text-lg">
                Customer Support
                
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-5xl font-bold mb-4">100%</h3>
              <p className="text-gray-600 text-lg">
                Secure Payments
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Our Mission
        </h2>

        <p className="text-gray-600 text-lg leading-10 max-w-4xl mx-auto">
          Our mission is to provide customers with high-quality products at the
          best prices while delivering a smooth and enjoyable shopping
          experience. We aim to build a trusted online store where people can
          explore modern trends, discover amazing products, and shop with
          confidence anytime and anywhere.
        </p>
      </section>

    </div>
  );
};

export default About;