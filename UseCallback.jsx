import React, { useCallback, useState } from 'react'


const UseCallback = () => {
    const [data,setData] = useState({
        name:'',
        age:''
    })
 
    const [allData,setAllData] = useState([])
    const[id,setId]= useState("")
    const handleChange =(e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const saveData = useCallback((e)=>{
        console.log("function called...")
        e.preventDefault()
        if(id != ''){
            let res =allData.map((i,index)=>{
                if(index==id){
                    i.name = data.name
                    i.age = data.age
                }
                return i
            })
            setAllData(res)

        }else{
            setAllData([
                ...allData,
                data
            ])
            setId('')
        }
        
        // clear ke liye
        setData({
            name:"",
            age:""
        })
    })

    const delData = (id)=>{
        let res = allData.filter((i,index)=>{
            return index!=id
        })
        setAllData(res)
    }


    const editData = (id)=>{
        let res = allData.find((i,index)=>{
            return index==id
        })
        setData(res)
        setId(id)
        
    }

  return (
    <div>
      <form action='#' method='post' name='frm' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
<br/>
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange} />
        <br/>
        <input type="submit" value="Save Data" />
      </form>

      <br/>

      <table border={2}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
        </thead>
 
        <tbody>
            {
                allData.map((i,index)=>{
                 return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                            <button onClick={()=>delData(index)}>Delete</button>

                        </td>

                    </tr>
                 )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UseCallback
