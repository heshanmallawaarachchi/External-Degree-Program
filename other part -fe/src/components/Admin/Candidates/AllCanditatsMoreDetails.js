import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import {useState} from "react";
import { Link } from 'react-router-dom';
function AllCanditatsMoreDetails() {
    const [candidateList,setCandidateDetails]=useState([]);

  
    const {id}=useParams();
 

    useEffect(()=>{

   axios.get(`http://localhost:3001/CandidatesDetailsId/${id}`).then((response)=>
        {
            setCandidateDetails(response.data);
        });

 });

 //Delete Candidates//
const deleteCandidates = (id) =>{
    axios.delete(`http://localhost:3001/delete_candidate/${id}`).then((response)=>{
        setCandidateDetails(candidateList.filter((val)=>{
            return val.id!==id;
        }));
    })
 }
 //Delete Candidates//
 

    return (
        <div className="container border mt-4" style={{
            width:"800px",
            height:"1000px",
            backgroundColor:"#D6D6D6",
            marginBottom:"20px",
            textAlign:'center'
            
        }}>
            
            <h1>Candidates Details</h1>
          {candidateList.map((val,key)=>{
              return(
                       <div key={val.ID}>
                        <div style={{
                            marginRight:"800px",
                            
                        }}>
                        <Link to={"/AllCandidates/"+val.AccadamicYear}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                         alt='back'
                         style={{
                            width:"40px",
                            height:"40px"
                        }}></img></button></Link>
                       
                        </div>
                        <div style={{
                            marginTop:"30px"
                        }}>
                        <p className="border border-dark">Name In Tamil:{val.full_name_tamil}</p>
                        <p className="border border-dark">Name In English:{val.full_name_eng}</p>
                        <p className="border border-dark">NIC:{val.nic}</p>
                        <p className="border border-dark">Addres:{val.address}</p>
                        <p className="border border-dark">Email:{val.Email}</p>
                        <p className="border border-dark">Phone No:{val.phone_no}</p>
                        </div>
                        <div className="row">
                            <div className="col" style={{
                                marginTop:"25px"
                            }}>
                            <h5>INFORMATION ABOUT G.C.E(A/L)</h5>
                            <p className="border border-dark">Year:{val.year}</p>
                            <p className="border border-dark">Section:{val.section}</p>
                            <p className="border border-dark">{val.subject_1}:{val.result_1}</p>
                            
                            <p className="border border-dark">{val.subject_2}:{val.result_2}</p>
                            <p className="border border-dark">{val.subject_3}:{val.result_3}</p>
                            <p className="border border-dark">General English result:{val.english_result}</p>
                            <p className="border border-dark">Common General Test:{val.common_general_test_result}</p>
                            </div>
                            <div className="col">
                            <h5>INFORMATION ABOUT OTHER QUALIFICATION</h5>
                            <p className="border border-dark">Qalification Name:{val.other_qualification_name}</p>
                            <p className="border border-dark">Provider:{val.qualification_provider}</p>
                            <p className="border border-dark">Duration:{val.duration_of_course}</p>
                            <p className="border border-dark">Valididty:{val.validity_date}</p>
                            <h5>INFORMATION ABOUT CAREER QUALIFICATION</h5>
                            <p className="border border-dark">Position:{val.position}</p>
                            <p className="border border-dark">Company:{val.company}</p>
                            <p className="border border-dark">Status:{val.status}</p>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div className="d-flex justify-content-around" style={{
                            marginTop:"50px"
                        }}>
                        <Link   to="/AllCandidates"><button style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#8B0000",
                            width:"175px"
                            
                        }} onClick={()=>deleteCandidates(val.ID)} type="button">Delete</button></Link>
                        <Link to={"/UpdateAllCandidate/"+val.ID}><button 
                        type="button"
                        style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#FFA500",
                            width:"175px"
                            
                        }}  >EDIT</button></Link>
                        <Link to={"/AcceptAndSendMail/"+val.ID}><button type="button" 
                        
                        style={{
                            borderRadius:"25px",
                            color:"#ffff",
                            backgroundColor:"#03411C",
                            width:"175px"
                            
                        }}>ACCEPT STUDENT</button></Link>
                        </div>
                        <div style={{
                            marginRight:"800px",
                            marginTop:"50px"
                        }}>
                        <Link to={"/AllCandidates/"+val.AccadamicYear}><button type="button" ><img 
                        src="https://th.bing.com/th/id/Rb18b22c21a8a4f0930d330bc7e6a1bec?rik=H%2fVyB0r8ZjEfUA&pid=ImgRaw"
                         alt='back'
                         style={{
                            width:"40px",
                            height:"40px"
                        }}></img></button></Link>
                       
                        </div>
                  </div>
              )
          })}
          
        </div>
    )
}

export default AllCanditatsMoreDetails
