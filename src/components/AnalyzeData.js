import React from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';



function AnalyzeData(){
    const [data,setData] = useState([])
    const {patientId} = useParams()
    const [isLoading,setLoading]=useState(true)


   
    useEffect(()=>{
        axios.get('http://localhost:8080/clinicalservices/api/patients/analyze/'+patientId).then(res=> {
            setData(res.data);
            setLoading(false);
        })
    },[]);

  
        return (<div className='container analyzeDataContainer'>
              <h3>Patient Details:</h3>
                First Name: {data.firstName}<br/>
                Last Name: {data.lastName}<br/>
                Age: {data.age}
              
            <h3>Clinical Report:</h3>
            <table className='container'>
                    {!isLoading?data.clinicalData.map(eachEntry=><RowCreator item={eachEntry} 
                    />):""}
                    </table>
            
            <Link to={'/'}>Go Back</Link>

        </div>)
    
}

function RowCreator(props){
        var eachEntry = props.item;
       
        return<div>
            <tr>
            <td>{eachEntry.componentName}</td>
            <td>{eachEntry.componentValue}</td>
            <td>{eachEntry.measuredDateTime}</td>

        </tr>
        </div>
    }




export default AnalyzeData;