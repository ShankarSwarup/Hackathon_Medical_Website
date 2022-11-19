import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Patemaillogin = () => {
  const [name,setname] =useState("");
  const [password,setpassword] =useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventdefault();

    axios.post('http://localhost:3001/patlogemail',{
        name,
        password,
       }).then(res=>{
         if(res.data.message === 'ok'){
          alert(res.data.message);
          navigate("/");
         }
         else
         {
          alert(res.data.message);
         }
       })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="phn" value={name} onChange={event=>setname(event.target.value)}/>
        <input type="password" name="" id="password" value={password} onChange={event=>setpassword(event.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Patemaillogin