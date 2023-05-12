import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home(){
 
    const [patientData,setPatientData] = useState([])
    const [isLoading,setLoading]=useState(true)


    useEffect(()=>{
      axios.get('http://localhost:8080/clinicalservices/api/patients').then(res=> {
        setPatientData(res.data);
        setLoading(false);
      })
    },[])

        return (<div>
            <div className='headingContainer container'>
            <h2>Patients:</h2>
            <div className='buttonBackground goToAddPatientButton'>Register Patient<Link  to={'/addPatient'}><i class="uil uil-user-plus logoAddPatient"></i></Link></div>
            </div>
            <table className='container'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Add Data</th>
                        <th>Analyze</th>
                    </tr>
                </thead>
                <tbody>
{!isLoading?patientData.map(patient=><RowCreator item={patient}/>):""}

                </tbody>
            </table>
            <br/>
        </div>)
}

function RowCreator(props){
  
        var patient = props.item;
        return <tr>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'/patientDetails/'+patient.id}><i class="uil uil-upload-alt tableLogos"></i></Link></td>
            <td><Link to={'/analyze/'+patient.id}><i class="uil uil-eye tableLogos"></i></Link></td>
        </tr>
    
}

export default Home;