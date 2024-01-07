import swal from "sweetalert";
import {useState} from 'react';

const Mylogin = () =>{
  let[useremail, pickemail] = useState("");
  let[password, pickpassword] = useState("");


  const login = () =>{
     let url = "http://localhost:3333/account";
     let flag = 0;
     fetch(url)
     .then(response => response.json())
     .then(userinfo => {
        userinfo.map((acntdata, index) =>{
            if(acntdata.email === useremail && acntdata.password === password)
             {
                flag = 1;
                localStorage.setItem("fullname", acntdata.name);
                window.location.href="http://localhost:3000/#/"
              window.location.reload();// Reload the page(app.js) after login is success
             }
        })
        if(flag === 0)
        swal("Error", "invalid Or Not Exists", "warning");
     })
  }

  const validation = () => {
    let status = true;
    // emailcheck
    if (useremail == "") {
    status = false;
      document.getElementById("emailerror").innerText =
        "Please fill email field ! ";
    } else {
      document.getElementById("emailerror").innerText = "";
    }


    // passwordcheck
   
    if (password == "") {
       status = false;
         document.getElementById("passworderror").innerText =
           "Please fill password field ! ";
       } else {
         document.getElementById("passworderror").innerText = "";
       }

    if(status) {login()}
  };

 
  return(
     <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 w-50 border bg-secondary text-white p-5">
                <div className="border p-4 rounded shadow">
                    <h3 className="text-center"> {console.log("paritosh")} User Login </h3>
                    <div className="mb-4">
                        <label>Email id</label>
                        <input type="email"  className="form-control"  value={useremail} onChange={obj=> pickemail(obj.target.value)}/> 
                        <i className="error " id="emailerror"></i>
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control"  value={password} onChange={obj=> pickpassword(obj.target.value)}/>
                        <i className="error " id="passworderror"></i>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-info" onClick={validation}>Login</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Mylogin;