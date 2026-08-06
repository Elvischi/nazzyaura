import React from 'react';


function Welcome() {
    return (<>
      <div className="w-screen h-screen bg-gray-950 flex items-center justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/20 max-w-4xl w-full'>
                <div className="bg-gray-800 p-10">
                    <h1 className="text-3xl font-bold text-white mb-4">Hi,Welcome to Nazzy Aura Scents</h1>
                    <p className="text-gray-400">
                        Discover the perfect scent that defines you.
                    </p>
                </div>
                <div className="bg-gray-900 p-10">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Our Story</h2>
                    <p className="text-gray-400">
                        At Nazzy Aura Scents, we believe that fragrance is a powerful expression of personality and emotion.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}



export default Welcome
