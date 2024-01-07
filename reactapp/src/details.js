
import  {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const Details = () =>{
    let{userid} = useParams();
    // it use to capture value from browser url in react
    let[name, pickName] = useState("");
    let[email, pickemail] = useState("");
    let[mobile, pickmobile] = useState("");
    let[date, pickdate] = useState("");
   

    const getuserinfo = () =>{
        let url = "http://localhost:3333/user/"+userid;
        fetch(url)
        .then(response => response.json())
        .then(empinfo =>{
            pickName(empinfo.name);
            pickemail(empinfo.email);
            pickmobile(empinfo.mobile);
            pickdate(empinfo.date);
        })
    }

     useEffect(() =>{
        getuserinfo();
     },[1]);

    const back = () =>{
        window.location.href = "#/";
       };
     
       

   return(
     <div className="container mt-4">
        <div className="row">
            <div className="col-lg-3"> </div>
            <div className="col-lg-6 text-center border bg-light text-dark p-5 rounded mt-5"> 
              <h1 className=" text-primary mb-3"> User's Details </h1>

               <table className=' table '>
                   <thead>
                    <tr>
                    <th>User's Name :</th>
                    <td colSpan={2}>{name} </td>
                    </tr>

                    <tr>
                    <th>User's Email :</th>
                    <td colSpan={2}>{email} </td>
                    </tr>

                    <tr>
                    <th>User's mobile :</th>
                    <td colSpan={2}>{mobile} </td>
                    </tr>

                    <tr>
                    <th>Last modified :</th>
                    <td colSpan={2}>{date} </td>
                    </tr>

                    <tr>
                    <td colSpan={3}><button className="btn btn-danger" onClick={back}> Back </button></td>
                    </tr>
                   </thead>
               </table>
             </div> 

             <div className="col-lg-3"> </div>
             </div> 
        </div>  
   )
}


export default Details;
