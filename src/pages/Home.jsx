import HeroVideo from "../components/HeroVideo";

import {
  ShoppingBag,
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Modern Hoodie",
    price: "$89",
    image:
      "https://i.pinimg.com/736x/ce/66/c7/ce66c71137f666d7ccbe8d9d11b22fba.jpg",

  },
  {
    id: 2,
    title: "Premium Shoes",
    price: "$120",
    image:
      "https://i.pinimg.com/736x/a7/ab/2d/a7ab2db21b120f2847e095a1f4399c14.jpg",
  },
  {
    id: 3,
    title: "Cool Jacket",
    
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
   

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         

          <div>
            <span className="bg-lime-300 px-5 py-2 rounded-full font-semibold inline-block mb-6">
              New Collection 2026
            </span>

            <h1 className="text-6xl md:text-7xl font-black leading-tight text-black">
              Elevate Your
              <span className="block text-lime-500">Style Today</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              Discover premium fashion with modern vibes. Build your perfect
              outfit with trendy collections and luxury comfort.
            </p>

            <div className="flex gap-5 mt-10">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 duration-300">
                Shop Now
                <ArrowRight size={20} />
              </button>

              <button className="border-2 border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white duration-300">
                Explore
              </button>
            </div>



            <div className="flex gap-10 mt-14 flex-wrap">
              <div>
                <h2 className="text-4xl font-black">10k+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-4xl font-black">500+</h2>
         <p className="text-gray-500">Premium Products</p>
              </div>

              <div>
                <h2 className="text-4xl font-black">4.9</h2>
                <p className="text-gray-500">Customer Rating</p>
              </div>
            </div>
          </div>



          <div className="relative">
            <div className="absolute -top-8 -left-8 bg-lime-300 w-40 h-40 rounded-full blur-3xl opacity-40"></div>

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl object-cover h-[700px] w-full"
            />

            <div className="absolute bottom-6 left-6 bg-white p-5 rounded-3xl shadow-xl w-64">
              <div className="flex items-center gap-3">
        <div className="bg-black text-white p-3 rounded-full">

                  <ShoppingBag />
                </div>

                <div>
                  <h3 className="font-bold">Summer Sale</h3>
           <p className="text-gray-500 text-sm">Up to 50% Off</p>
                </div>
               </div>
              </div>
          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-lime-500 font-semibold mb-2">BEST PRODUCTS</p>

            <h2 className="text-5xl font-black">Trending Collection</h2>
          </div>

          <button className="border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white duration-300">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[35px] overflow-hidden shadow-lg hover:-translate-y-2 duration-300"
            >
              <div className="overflow-hidden">
                <img src={item.image}
                  alt=""
                  className="h-[350px] w-full object-cover hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star size={18} fill="black" />

                  <Star size={18} fill="black" />


               <Star size={18} fill="black" />

                  <Star size={18} fill="black" />
          <Star size={18} fill="black" />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-500 mt-1">{item.price}</p>
                  </div>

                  <button className="bg-black text-white p-4 rounded-full hover:scale-110 duration-300">
     <ShoppingBag />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

   

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-black rounded-[40px] text-white p-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <Truck className="mb-5" size={40} />

            <h3 className="text-2xl font-bold mb-3">Free Shipping</h3>
            <p className="text-gray-300">
              Fast and secure delivery for every order worldwide.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <ShieldCheck

             className="mb-5" size={40} />
   <h3 className="text-2xl font-bold mb-3">Secure Payment</h3>
            <p className="text-gray-300">

              100% safe transactions with trusted payment methods.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md">
            <Headphones className="mb-5" size={40} />

            <h3 className="text-2xl font-bold mb-3">24/7 Support</h3>

            <p className="text-gray-300">
              Friendly support team always ready to help you anytime.
            </p>
          </div>
        </div>
      </section>
           <HeroVideo />
    </div>
  );
}