import React from 'react';
import './Tickets.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const navigate=useNavigate();


    function checkdata  (){
        

        var round="";
        var one="";
        var multi="";
        if(document.getElementById("name1").checked){
            round="Round Trip";
        }
        if(document.getElementById("name2").checked){
            one="One Trip";
        }
        if(document.getElementById("name3").checked){
            multi="Multi Trip";
        }
        let fr=document.getElementById("from").value;
        let to=document.getElementById("To").value;
        let dp=document.getElementById("depature").value;
        let rt=document.getElementById("return").value;
        let tk=document.getElementById("ticket").value;
        let cl=document.getElementById("class").value;
       
        if(round==="" && one==="" && multi===""){
            alert("please select Trip");
        }
        
        else if(fr===""){
            alert("please enter flying From");
        }
        
        else if(to===""){
            alert("please enter flying To");
        }
        else if(dp===""){
            alert("please enter Depature");
        }
        else if(rt===""){
            alert("please enter Returning");
        }
        else if(tk===""){
            alert("please select no of Ticket");
        }
        else if(cl===""){
            alert("please enter Class");
        }
        else{
            navigate('/Availableflights');
        }
    }
    return(
        <div className='all'>
            <Link to="/Home" id='link'><ArrowBackIcon/></Link>
            <h2 className='book55'>BOOK YOUR FLIGHT!!!</h2>
        <section>
            <div className='a'>
                <input style={{marginLeft:'40px'}} id="name1" type="radio" value="roundtrip" name="g" required></input>
                <label for=" ">Roundtrip</label>   
                <input style={{marginLeft:'40px'}} id="name2" type="radio" value="oneway"  name="g" required></input>
                <label for=" "> Oneway</label>   
                <input style={{marginLeft:'40px'}} id="name3" type="radio"value="multi"  name="g"  required></input>
                <label for=" "> Multi-way</label> 
            </div>
                <div class="b">
                    
                    <input className='one' id="from" type="text" placeholder="FLYING FROM" required/>
                    </div>  
                <div class="c">
                    <input className='one' id="To" type="text" placeholder="FLYING TO" required/>
                    </div>  
                <div class="d">
                    <label>DEPARTURE</label>
                    <input className='one' id="depature" type="date" placeholder="DEPARTURE" required/>
                    </div>  
                <div class="e">
                <label>RETURNING</label>
                    <input className='one' id="return"type="date" placeholder="RETURNING" required/>
                    </div>  
                <div class="f">
                    <input className='one' id="ticket" type="number" placeholder="NO OF TICKETS" required/>
                    </div>  
                <div class="g">
                    <input className='one' id="class" type="text" placeholder="TRAVEL CLASS" required/>
                    </div> 
                <div className='h'>    
                    <button className="butra" onClick={checkdata}>SHOW FLIGHTS</button>
                </div>
            </section>   
            
        </div>
    )       
}
export default RegistrationForm;