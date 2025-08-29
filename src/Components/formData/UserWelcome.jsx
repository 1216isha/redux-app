import React from 'react'
import { useSelector } from 'react-redux'

const UserWelcome = () => {
    const  name = useSelector((state) => state.user.name);
  return (
    <div>
      {name &&
        <div className='w-[40%] bg-gray-100 py-6 px-4 m-auto shadow-2xl rounded-lg mt-20 text-center font-semibold text-xl'>
            <h1>Welcome {name} ✨</h1>
        </div>
        }
    </div>
  )
}

export default UserWelcome



