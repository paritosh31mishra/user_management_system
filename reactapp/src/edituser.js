import  {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';

const Edituser = () =>{
    let{userid} = useParams();
    // it use to capture value from browser url in react
    let[name, pickName] = useState("");
    let[email, pickemail] = useState("");
    let[mobile, pickmobile] = useState("");
   

    const getuserinfo = () =>{
        let url = "http://localhost:3333/user/"+userid;
        fetch(url)
        .then(response => response.json())
        .then(empinfo =>{
            pickName(empinfo.name);
            pickemail(empinfo.email);
            pickmobile(empinfo.mobile);
           
        })
    }

     useEffect(() =>{
        getuserinfo();
     },[1]);

    const save = () =>{
        let finaldata = new Date().toLocaleString() ;
       let userdata = {
        "name": name,
        "email": email,
        "mobile": mobile,
        "date": finaldata,
        "id" : userid
       };
     
       let url= "http://localhost:3333/edituser";
       let postoption= {
        headers:{'Content-Type':'application/json'},
        method: "PUT",
        body: JSON.stringify(userdata)
       }
           
       fetch(url,postoption)
       .then(response => response.json())
       .then(userinfo =>{
        swal(name+"", "Updated Successfully !!", "success");
        window.location.href = "#/";
       })
    }

   return(
    //  <div className="container mt-4">
    //     <div className="row">
    //         <div className="col-lg-4"> </div>
    //         <div className="col-lg-4"> 
    //           <h1 className="text-center text-primary shadow"> Edit User Details </h1>

    //                 <div className= "mb-4">
    //                     <label> User Name </label>  
    //                     <input type="text" className="form-control" onChange={obj => pickName(obj.target.value)} value={name}/>  
    //                 </div>

    //                 <div className= "mb-4">
    //                     <label> User Email </label>  
    //                     <input type="email" className="form-control" onChange={obj=> pickemail(obj.target.value)} value={email}/>  
    //                 </div>

    //                 <div className= "mb-4">
    //                     <label> User mobile </label>  
    //                     <input type="number" className="form-control" onChange={obj=> pickmobile(obj.target.value)} value={mobile} />  
    //                 </div>

    //                 <div className="text-center">
    //                 <button className="btn btn-danger" onClick={save}> update user </button>
    //                 </div>
    //          </div> 

    //          <div className="col-lg-4"> </div>
    //          </div> 
    //     </div>  
   

   <div className="container mt-4">
   <div className="row">
       <div className="col-lg-3"> </div>
       <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
         <h1 className=" text-primary mb-3"> Edit User Details </h1>

          <table className=' table '>
              <thead>
               <tr>
               <th>User's Name :</th>
               <td colSpan={2}>  <input type="text" className="form-control" onChange={obj => pickName(obj.target.value)} value={name}/>   </td>
               </tr>

               <tr>
               <th>User's Email :</th>
               <td colSpan={2}><input type="email" className="form-control" onChange={obj=> pickemail(obj.target.value)} value={email}/> </td>
               </tr>

               <tr>
               <th>User's mobile :</th>
               <td colSpan={2}><input type="number" className="form-control" onChange={obj=> pickmobile(obj.target.value)} value={mobile} /></td>
               </tr>


               <tr>
               <td colSpan={3}><button className="btn btn-danger" onClick={save}> update user </button></td>
               </tr>
              </thead>
          </table>
        </div> 

        <div className="col-lg-3"> </div>
        </div> 
   </div>  
)
}


export default Edituser;
