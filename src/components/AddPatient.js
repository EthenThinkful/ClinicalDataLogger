import {React,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = "http://18.204.203.3:8080/api";

function AddPatient(){

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[age,setAge] = useState('')

    const handleSubmit=(event)=>{
        const data = {
                firstName:firstName,
                lastName:lastName,
                age:age
        }
        axios.post(`${BASE_URL}/patients`, data).then(res=>{
                toast("Patient added successfully")
                event.preventDefault();
        })
    }


        return (
        <div className="container addPatientContainer">
                <h2>Create Patient:</h2>
                <form  onSubmit={e => { e.preventDefault(); }}>
                First Name:<input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} align="left"/>
                Last Name:<input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} align="left"/>
                Age:<input type="text" name="age" onChange={e=>setAge(e.target.value)} align="left"/>
                <button className="buttonBackground addPatientButton" onClick={handleSubmit.bind(this)}>Confirm</button>
                </form>
                <Link to={'/'}>Go Back</Link>
        </div>)
    
}

export default AddPatient;






