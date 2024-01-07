
import React from 'react';
import {Link} from "react-router-dom";



const Header = () =>{
   
    const logout = () =>{
        localStorage.clear();
        window.location.href="http://localhost:3000/#/"; // it will go to dashboard
        window.location.reload(); // it will reload the app. js(window) file
        
        //other method - window.location.href="http://localhost:3000/#/";
    }

    return (   
          <section className=" p-3"  id="navbar" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <h2> User Management System</h2> 
                    </div>

                 
                    <div className="col-lg-8 text-end">
                        <ul>
                            <li>  <Link className=" text-light  link" to="/adduser"> <i className='fa fa-plus'></i>  Add User </Link> </li>
                      
                        <li> <span className="text-danger link" onClick={logout}>{ localStorage.getItem("fullname") } 
                        <b > Logout </b></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    
    );
    }

export default Header;