import {useState} from 'react';
import swal from 'sweetalert';

const Adduser = () =>{
let [username, pickname] = useState("");
let [useremail, pickemail] = useState("");
let [usermobile, pickmobile] = useState("");

const validate = () => {
    let status = true;

   //name check
    if(username == "") {
    status = false;
      document.getElementById("nameerror").innerText =
        "Please fill name field ! ";
    } else {
      document.getElementById("nameerror").innerText = "";
    }

    // emailcheck
    if(useremail == "") {
    status = false;
      document.getElementById("emailerror").innerText =
        "Please fill email field ! ";
    } else {
      document.getElementById("emailerror").innerText = "";
    }

       //mobilecheck
       if(usermobile == "") {
          status = false;
            document.getElementById("mobileerror").innerText =
              "Please fill mobile field ! ";
          } else {
            document.getElementById("mobileerror").innerText = "";
          }

    if(status) {Add();}
   
  };

   const Add = () => {
    let url = "http://localhost:3333/adduser";
    let finaldata =  new Date().toLocaleString() ;
    let userdata = 
    {
       name: username,
       email : useremail,
       mobile : usermobile,
       date: finaldata
    } 

    let postdata = 
    {
     headers : {'Content-type' : 'application/json'},
     method: "POST",
     body : JSON.stringify(userdata)
    }

    fetch(url, postdata)
    .then(responsedata => responsedata.json())
    .then(data => {
     swal("User Added Successfully !!", "", "success");
     window.location.href = "http://localhost:3000/#/";
   })
}

    return (
    <div className="container mt-4">
    <div className="row">
        <div className="col-lg-3"> </div>
        <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
          <h1 className=" text-primary mb-3"> Add User </h1>

           <table className=' table '>
               <thead>
                <tr >
                <th>User's Name :</th>
                <td colSpan={2} className='text-center'> <input type="text" placeholder="Enter User Name" className="form-control" value={username} onChange={obj=> pickname(obj.target.value)}/>  </td>
                </tr>
                <i id='nameerror' className='error'></i>

                <tr>
                <th>User's Email :</th>
                <td colSpan={2}><input type="email" placeholder="Enter User Email" className="form-control" value={useremail} onChange={obj=> pickemail(obj.target.value)}/>  </td>
                </tr>
                <i id='emailerror' className='error'></i>

                <tr>
                <th>User's mobile :</th>
                <td colSpan={2}> <input type="number" className="form-control" placeholder="Enter User Mobile" value={usermobile} onChange={obj=> pickmobile(obj.target.value)}/></td>
                </tr>
                <i id='mobileerror' className='error'></i>

                <tr className='mb-3'>
                <td colSpan={3}> <button className="btn btn-danger" onClick={validate}>Add user</button></td>
                </tr>
               </thead>
           </table>
         </div> 

         <div className="col-lg-3"> </div>
         </div> 
    </div>  
    )
}

export default Adduser;