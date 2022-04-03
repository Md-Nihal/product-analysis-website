import React from 'react';
import Image from '../Image/best-headphone-in-bangladesh.jpg'
const Home = () => {
    return (
        <div className=' mt-5'>
            <div className='d-flex mt-5'>
            <div className='col-lg-7 p-5'>
                <h1 className='text-4xl'>Be The <span className='font-bold text-5xl font-serif text-emerald-600'>KING</span></h1>
                <h1 className='text-4xl'>Feel The <span className='font-bold text-5xl font-serif text-emerald-600'>SOUND</span></h1>
                <p>Are you looking for the best headphones in Bangladesh? Headphones are one of the most common hearing tools which require no further introduction. There are a variety of models currently available in the market to suit various uses. Furthermore, recent models have an excellent sound quality, yet comfort and design should consider when purchasing.To assist you in making your decision, we've put up a guide of the top products that shows you how to use and enjoy these audio devices.</p>
                <button className='bg-emerald-800 font-bold text-white py-2 px-3 rounded-md	'> See Products</button>
            </div >
            <div className='w-2/6 h-2/6 col-lg-5'>
                <img src={Image} alt="" />
            </div>
            </div>
            <div className='mt-5'>
                <h1>Clients review</h1>
                <div className='mt-3'>

                </div>
                <button className='bg-emerald-800 font-bold text-white py-2 px-3 rounded-md	'> View all review</button>
            </div>
        </div>
    );
};

export default Home;