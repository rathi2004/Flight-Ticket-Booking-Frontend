
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './signup.css';
function Signup() {   
    return (
      <div className='signup'>
        <div id="back">
          <Link to="/" id='backsignarrow'><ArrowBackIcon/></Link>
        </div>
        <div className='top'>
          <h1>SIGN UP</h1>
          ALREADY HAVE ACCOUNT?
          <Link to="/">Login here</Link>
          </div>
        <form action='/Home'>
          <table>
            <tr>
              <p><th><lable for="name">Name</lable></th></p>
              <td><input type="text" placeholder='Enter your name' id="name" required/></td>
          </tr>
          <tr>
            <p><th><lable for="pass">Password</lable></th></p>
            <td><input type="password" placeholder='Enter your password' id='pass' required/></td> 
          </tr>
          <tr>
            <p><th><lable for="email">Email</lable></th></p>
            <td><input type="email" placeholder='Enter your email' id='email' required/></td>
          </tr>
            <tr>
              <p>

              <th><lable for="age">Age</lable></th>
              </p>
              <td><input type="number" placeholder='Enter/Select' id='age' required/></td>
           
            </tr>
            <tr>
              <p>

              <th><lable for="birth">Birth Date</lable></th>
              </p>
             
              <td><input type="date" placeholder='Enter your date of birth' id='birth' required/></td>
    
            </tr>
            <tr>
              <p>

                <th><label>Gender</label></th>
              </p>
      
                <td >
                  <select id="gen">
                    <option type="">Select</option>
                    <option type="radio" name="radio">Female</option>
                    <option type="radio" name="radio">Male</option>
                    <option type="radio" name="radio">other</option>
                  </select>
                </td>
    
            </tr>
          <tr>
             <p><th><label for="ph">Mobile No </label></th></p>
              <td>
                  <select id="sel">
                    <option type="">+91</option>
                    <option type="">+92</option>
                    <option type="">+93</option>
                    <option type="">+94</option>
                  </select>
                  <input type="tel" placeholder="Enter mobile no" id="ph" required/>
              </td>
            </tr>
          </table>
          <div id="cb">
            <input type="checkbox" value="ckeck"required />
            by signing up you agree to receive updates and special offers
          </div>
          <button id="but">Submit</button>
        </form>
      </div>
    );
  
}
 
export default Signup;