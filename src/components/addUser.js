import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/actions/userAction';

export const AddUser = ()=>{
    const dispatch=useDispatch();
    
    const[profile,setProfile]=useState({
        name:'',
        email:'',
        gender:'',
        status:''
    })
    const changeProfile =(value,key) =>{
        let temp={...profile};
        temp[key]=value;
        setProfile(temp);
        console.log(temp);
    }
    const handleClick =()=>{
        let tempdata={
            name:profile.name,
            email:profile.email,
            gender:profile.gender,
            status:profile.status
        }
        console.log(tempdata)
        dispatch(addNewUser(tempdata));
    }
    return(
        <div>
          <h1>Register Form</h1> 
          <p>
                Name:<br></br>
                <input 
                type="text" 
                placeholder="enter your name" 
                value={profile.name}
                onChange={(e)=>changeProfile(e.target.value,"name")}/>
          </p>
          
          <p>
                Email:<br></br>
                <input 
                type="text" 
                placeholder="enter email"
                value={profile.email}
                onChange={(e)=>changeProfile(e.target.value,'email')}/>
          </p>
         
          <p>
                gender:<br></br>
                <input 
                type="radio"  
                name="gender"
                onClick={()=>changeProfile('male','gender')}/>Male
                <input 
                type="radio" 
                name="gender"
                onClick={()=>changeProfile('female','gender')}/>Female
          </p>
          <p>
                Status:<br></br>
                <select onChange={(e)=>changeProfile(e.target.value,'status')}>
                <option value="">Select your status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                </p>
                <p>
                    <button 
                    type="button" 
                    onClick={handleClick}
                    >
                        Submit
                    </button>
                </p>
        </div>
    )
}