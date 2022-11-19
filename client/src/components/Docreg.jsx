import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Docreg = () => {
  const [docname,setdocname] = useState("");
  const [email,setemail] =useState("");
  const [phn,setphn] =useState("");
  const [hospitalname,sethospitalname] =useState("");
  const [spec,setspec] =useState([]);
  const [country,setcountry] =useState("");
  const [state,setstate] =useState("");
  const [city,setcity] =useState("");
  const [start,setstart] = useState("");
  const [end,setend] = useState("");
  const navigate = useNavigate();
  const opd = [{name:'Basic'},{name:'Heart'},{name:'Brain'},{name:'Nerve'},{name:'Physio'},{name:'Infectious'},{name:'STD'},{name:'Eye and Ear'},{name:'Paediatric'},{name:'Gynacelogy'}];
  const [checkedState, setCheckedState] = useState(
    new Array(opd.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }

  const handlesubmit = (e) => {
    e.preventDefault();

    checkedState.map((item,index)=>{
      if(item === true)
      {
        spec.push(opd[index]["name"]);
      }
    }
    )
    // console.log(spec);



    axios.post('http://localhost:3001/docreg',{
        docname,
        email,
        phn,
        hospitalname,
        spec,
        country,
        state,
        city,
        start,
        end
       }).then(res=>{
         if(res.data.message === 'ok'){
          alert(res.data.message);
          setspec([]);
          navigate("/");
         }
         else
         {
          alert(res.data.message);
          setspec([]);
         }
       })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" id="" value={docname} onChange={event => setdocname(event.target.value)} placeholder="Enter docName:"/>
        <input type="text" id="" value={email} onChange={event => setemail(event.target.value)} placeholder="Enter Email:"/>
        <input type="text" id="" value={phn} onChange={event => setphn(event.target.value)} placeholder="Enter Phone number:"/>
        <input type="text" id="" value={hospitalname} onChange={event => sethospitalname(event.target.value)} placeholder="Enter hospital name:"/>
        <label htmlFor="">Specialization:</label>
        {opd.map(({name},index)=>{
          return(
          <li key={index}>
          <input
           type="checkbox"
           id={`custom-checkbox-${index}`}
           name={name}
           value={name}
           checked={checkedState[index]}
           onChange={() => handleOnChange(index)}
           />
          <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
           </li>
          )
        })}
        <input type="text" id="" value={country} onChange={event => setcountry(event.target.value)} placeholder="Enter country:"/>
        <input type="text" id="" value={state} onChange={event => setstate(event.target.value)} placeholder="Enter state:"/>
        <input type="text" id="" value={city} onChange={event => setcity(event.target.value)} placeholder="Enter city:"/>
        <label htmlFor="">Start:</label>
        <input type="time" id="" value={start} onChange={event => setstart(event.target.value)} />
        <label htmlFor="">End:</label>
        <input type="time" id="" value={end} onChange={event => setend(event.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Docreg