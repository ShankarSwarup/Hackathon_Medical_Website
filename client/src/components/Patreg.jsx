import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Patreg = () => {
  const [name,setname] = useState("");
  const [email,setemail] =useState("");
  const [phn,setphn] =useState("");
  const [bg,setbg] =useState("");
  const [gender,setgender] =useState("");
  const [dob,setdob] =useState("");
  const [country,setcountry] =useState("");
  const [state,setstate] =useState("");
  const [city,setcity] =useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/patreg',{
        name,
        email,
        phn,
        bg,
        gender,
        dob,
        country,
        state,
        city
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
      <form onSubmit={handlesubmit}>
        <input type="text" id="" value={name} onChange={event => setname(event.target.value)} placeholder="Enter Name:"/>
        <input type="text" id="" value={email} onChange={event => setemail(event.target.value)} placeholder="Enter Email:"/>
        <input type="text" id="" value={phn} onChange={event => setphn(event.target.value)} placeholder="Enter Phone number:"/>
        <input type="text" id="" value={bg} onChange={event => setbg(event.target.value)} placeholder="Enter bloodgroup:"/>
        <input type="text" id="" value={gender} onChange={event => setgender(event.target.value)} placeholder="Enter gender:"/>
        <input type="text" id="" value={dob} onChange={event => setdob(event.target.value)} placeholder="Enter dob:"/>
        <input type="text" id="" value={country} onChange={event => setcountry(event.target.value)} placeholder="Enter country:"/>
        <input type="text" id="" value={state} onChange={event => setstate(event.target.value)} placeholder="Enter state:"/>
        <input type="text" id="" value={city} onChange={event => setcity(event.target.value)} placeholder="Enter city:"/>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Patreg