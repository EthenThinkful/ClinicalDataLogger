import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';

const BASE_URL = "http://18.117.236.81:8080/api";

function AnalyzeData(){
    const [data,setData] = useState([])
    const {patientId} = useParams()
    const [isLoading,setLoading]=useState(true)


   
    useEffect(()=>{
        axios.get(`${BASE_URL}/patients/analyze/`+patientId).then(res=> {
            setData(res.data);
            setLoading(false);
        })
    },[]);

  
        return (<div className='container addPatientContainer'>
            <i class="uil uil-eye tableLogos"></i>
            <div className='patientData'>
              <h2>Patient Details:</h2>
              <div className='alignContent'>
                First Name: {data.firstName}<br/>
                Last Name: {data.lastName}<br/>
                Age: {data.age}
              </div>
            </div>
            <h2>Clinical Report:</h2>
            <div className="analyzeTable">
            <table className="analyzeTable">
                <tbody>
                    {!isLoading?data.clinicalData.map(eachEntry=><RowCreator item={eachEntry} 
                    />):""}
                    </tbody>
                    </table>
                    </div>            
            <Link to={'/'}>Go Back</Link>
            
        </div>)
    
}

function RowCreator(props){
        var eachEntry = props.item;
       
        return<tr>
            <td>{eachEntry.componentName}</td>
            <td>{eachEntry.componentValue}</td>
            <td>{eachEntry.measuredDateTime}</td>
        </tr>   
    }




export default AnalyzeData;