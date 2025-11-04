import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {plan, price, currency, description, features} = pricing;
    return (
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* card header */}
            <div>
                <h1 className='text-7xl'>{plan} Plan</h1>
                <h1 className='text-3xl'>{price}{currency}</h1>
            </div>
            {/* card Body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1 '>
                <p>{description}</p>
                {
                    features.map((feature, index) =>
                    <PricingFeature feature = {feature} key={index}></PricingFeature>)
                }
            </div>
            <button className='btn mt-4 w-full'>Subscribe</button>
        </div>
    );
};

export default PricingCard;