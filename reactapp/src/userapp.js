import {Link} from "react-router-dom";


const UserModule = () => {
  

  return (
      <section className=" p-3" id="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2> User Management System</h2> 
                    </div>

                    <div className="col-lg-6 text-end">
                        <ul>
                  <li>  <Link className="  text-light m-1 link" to="/register" ><i className='fa fa-user-plus'></i> Create Account</Link></li>
                  
                  <li>   <Link className="text-light link m-1" to="/login"> <i className='fa fa-lock'></i> Login</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    
  
  );
};

export default UserModule;
