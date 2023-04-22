
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link, useNavigate } from 'react-router-dom';
import './forget.css'
function Password3(){
    const gate=useNavigate();

    function checkdata  (){
        let em=document.getElementById("femail").value;
        let fnp=document.getElementById("fnpass").value;
        let fmp=document.getElementById("fmpass").value;
        if(em===""){
            alert("please enter email");
        }
        
        else if(fnp===""){
            alert("please enter new password");
        }
        else if(fmp===""){
            alert("please enter confrim password");
        }
        else if(fnp!==fmp){
            alert("Password mismatch");
        }
        else{
            gate('/');
        }
    }
    return(
    <div id="resetback">
        <Link to="/"id='link1'><ArrowBackIcon/></Link>
        <div id="reseth">
            <h1>Reset Password</h1>
        </div>
    <form>
        <table>
            <p>
            <tr>
                <lable for="femail" id="mailh">Email</lable>
            </tr>
            </p>
            <p>
            <tr>
                 <td><input type="email" placeholder="Enter your email" id="femail" required/></td>
            </tr>
            </p>
            <p>
            <tr>
                <lable for="fnpass" id="npassh">New Password</lable>
            </tr>
            </p>
            <p>
            <tr>
                <td><input type="password" placeholder="New Password" id="fnpass"required/></td>
            </tr>
            </p>
            <p>
            <tr>
                <lable for="fmpass" id="cpassh">Confirm Password</lable>
            </tr>
            </p>
            <p>
            <tr>
                <td><input type="password" placeholder="Confrim Password" id="fmpass" required/></td>
            </tr>
            </p>
            <p>
        <button id="setbut" onClick={checkdata}>Set</button>
        </p>
        </table>
    </form>
    </div>
    )
}
export default Password3;