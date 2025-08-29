import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/Slice';

const UserData = () => {

    const [data, setData] = useState({ name: '', email: '', password: '' })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser(data))
        console.log("User_Data: ", data)
    }



    return (
        <div className='w-full py-20 px-10'>

            <form className='w-[50%] h-[400px] bg-gray-100 shadow-2xl py-10 px-10  rounded-lg m-auto '>
                <label className='text-xl font-semibold mb-2'>Name: </label>
                <input type="text" name='name' onChange={handleChange} value={data.name} className='w-full border rounded-lg py-2 px-2 mb-4 mt-2' />

                <label className='text-xl font-semibold mb-2'>Email: </label>
                <input type="email" name='email' onChange={handleChange} value={data.email} className='w-full border rounded-lg py-2 px-2 mb-4 mt-2' />

                <label className='text-xl font-semibold mb-2'>Password: </label>
                <input type="password" name='password' onChange={handleChange} value={data.password} className='w-full border rounded-lg py-2 px-2 mb-4 mt-2' />

                <button onSubmit={handleSubmit} className='btn py-2 px-4 hover:bg-blue-700 bg-purple-600 text-white rounded-lg text-xl mt-1'>Submit</button>

            </form>

        </div>
    )
}

export default UserData