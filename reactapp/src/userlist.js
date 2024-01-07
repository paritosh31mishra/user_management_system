import {useState, useEffect } from 'react';
import React from 'react';
import Modalcontrol from "./modal";
import {  Link} from "react-router-dom";

const Userlist = () =>{
    let [userlist, picklist] = useState([]);
     let [keyword, updatekeyword] = useState("");
     let [field, pickfield] = useState("");


    const getusers = () =>{
        let url = "http://localhost:3333/retrieveuser";
        fetch(url)
        .then(responsedata => responsedata.json())
        .then(data => {    
            if(data.length == 0)
              {
                document.getElementById("message").innerHTML = "<h1>No Data Found !! </h1>";
              }
              else{
                const sortedData = () =>{
                     data.sort((a,b)=> new Date(b.date) - new Date(a.date));
                     picklist(data);
                 }
                 sortedData();
              }
        })
     }

     const deleteuser = (id) =>{
            let url = "http://localhost:3333/deleteuser/"+id;
            let postoption = {method: "DELETE"};
            fetch(url, postoption)
            .then(response => response.json())
            .then(Array =>{
               alert(Array.message);
               window.location.reload();
                 })    
     }

    
     

    useEffect(()=>{
        getusers();

    },[1])

    return(
   
    
    <div className='container mt-4'>
      <div className="row mb-4">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
          <div className="input-group mb-3">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
               <select id="search-type" onChange={obj=> pickfield(obj.target.value)}>
                  <option value="">Search By</option>
                  <option value="name"> Name</option>
                  <option value="email"> Email</option>
                  <option value="mobile"> mobile</option>
               </select>
                  </span>
              </div>
               <input type="text" className="form-control" placeholder="Select and search by category" onChange={obj=> updatekeyword(obj.target.value)}/>
         </div>
          </div>
          <div className="col-lg-3"></div>
        </div>

    <div className="row text-center" id="message">
        <div className='col-lg-12'>
            <table className='table mt-4 table-hover table-bordered rounded'>
               <thead>
                <tr>
                    <th>  S.No. </th>
                    <th>  Name </th>
                    <th> Email </th>
                    <th>  Mobile </th>
                    <th> Delete </th>
                    <th> Edit </th>
                    <th> View </th>
                    <th>Last modified</th>
                </tr>
               </thead>
               <tbody>
                {
                     userlist.map((user, index) =>{     
                    if(user.name.toLowerCase().includes(keyword.toLowerCase()))
                    {
                        return(
                            <tr key={index} >
                               <td> {++index} </td>
                               <td> {user.name} </td>
                               <td> {user.email} </td>
                               <td> {user.mobile} </td>
                               <td>  <i className="fa fa-trash text-dark  m-2" onClick={deleteuser.bind(this, user._id)}></i> </td>
                               <td>   <Link to={`/edituser/${user._id}`}> <i className='fa fa-pencil text-dark '></i> </Link> </td>
                               <td>   <Link to={`/details/${user._id}`} className='text-info'> <b>view details</b></Link> </td>
                                <td className="mb-3 text-secondary font-italic">  {user.date} </td>
                            </tr>



                        )
                     }
                  })
                }
               </tbody>
            </table>
        </div>

    </div>
</div>
    )
}

export default Userlist;