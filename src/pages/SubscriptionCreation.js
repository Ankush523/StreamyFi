import React, { useState } from 'react'
import GetContract from '../hooks/GetContract'

const SubscriptionCreation = () => {

  const[planId,setPlanId] = useState(0)

  const contract = GetContract()

  const subscribe = async() => {
    await contract.subscribe(planId);
  }

  return (
    <div>
            <div className='text-[55px] text-purple-800 font-montserrat'>
                <h1>WELCOME TO SUBACRIPTION PORTAL</h1>
            </div>
            <div className='p-4'>
                <div className='flex flex-col items-center justify-center w-[100vw] p-[20px] h-[fit-content] px-20'>
                    <div className='flex flex-col w-[60%] h-[fit-content] shadow-xl rounded-md bg-slate-100 p-[30px]'>
                        <label className="font-montserrat text-[30px] mb-10 text-purple-900">Enter Your Details</label>
                        <div className="flex flex-row p-5  justify-between">
                            <label className="font-montserrat  w-[fit-content] px-2 py-2 text-[20px] text-purple-600">Name : </label>
                            <input className="rounded-xl shadow-xl w-[250px]" required type="text" name="name" onChange={(e) => setPlanId(e.target.value)}/>
                        </div>
                        <div className='pt-8'>
                            <button className=" font-montserrat text-[20px] text-purple-900 w-[fit-content] h-[fit-content] rounded-md hover:shadow-xl p-[8px] bg-white" onClick={()=>subscribe()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SubscriptionCreation