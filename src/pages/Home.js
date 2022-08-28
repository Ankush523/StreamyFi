import React from 'react'

const Home = () => {
  return (
    <div>
        <title>Home</title>
        <a href='/Subscription-creation'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>Continue to Subscribe</button></a>
            <a href='/Subscription-list'><button className='text-[20px] w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-purple-800 text-white'>View Subscribed List</button></a>
            
    </div>
  )
}

export default Home