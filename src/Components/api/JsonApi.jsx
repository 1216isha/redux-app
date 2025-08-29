import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const JsonApi = () => {

  const name = useSelector((state) => state.user.name)

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const productsData = data.data;
      setData(productsData.splice(1,20))
    }
    fetchData();
  }, [])          // dependency array


  return (
    <div>
{name && 
      <table className='w-[50%] m-auto mt-10'>
        <thead className='border-2'>
          <tr >
            <th className='border-2'>#</th>
            <th className='border-2'>ID</th>
            <th className='border-2'>Title</th>
            <th className='border-2'>User ID</th>
            <th className='border-2'>Completed</th>
          </tr>
        </thead>
        <tbody className='border-2'>
          {data.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='border p-2'>{index + 1}</td>
              <td className='border p-2'>{item.id}</td>
              <td className='border p-2'>{item.title}</td>
              <td className='border p-2'>{item.userId}</td>
              <td className='border p-2'>{item.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
}
    </div>
  )
}

export default JsonApi