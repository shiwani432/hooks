import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Api = () => {
    const[data,setData] = useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
          .then(res=>res.json())
          .then(json=>setData(json))
  },[])
  return (
    <div>
      <table border={'2'}style={{backgroundColor:"pink", width:"100%",}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td><img src={i.image} height={'150px'} width={'200px'}/></td>
                            <td>{i.title}</td>
                            <td>{i.category}</td>
                            <td>{i.price}</td>
                        </tr>
                    ) 
                })
            }
        </tbody>
        </table>
    </div>
  )
}

export default Api
