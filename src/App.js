import { useState } from 'react';
import './App.css';
import Forminput from './components/Forminput';


const App = () => {


 const [values ,SetValues] = useState({ 
  username:"",
  email:"",
  date_of_birth:"",
  number:""
 });


 const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username must not contain spcial characters",
    label: "Username",
    pattern:"[A-Z a-z 0-9]*",
    maxlength: "16",
    required: true
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email address",
    errorMessage:"Entre valid Email address",
    label: "Email address",
    required: true
  },
  {
    id:3,
    name:"date_of_birth",
    type:"date",
    placeholder:"Date of Birth",
    errorMessage:"",
    label: "Date of birth",
    required: true
  },
  {
    id:4,
    name:"number",
    type:"text",
    placeholder:"Phone number",
    errorMessage:"Enter 10 digit valid Phone number",
    label: "Phone Number",
    pattern:"[0-9]*",
    maxlength:"10",
    required: true
  }
 ]

 
  console.log("re-rendered")

  const handle = (e) => {
    e.preventDefault();
  };


  const onChange = (e) => {
    SetValues({...values,[e.target.name]: e.target.values});
  };

  console.log(values)
  return(
    <div className='app'>
      <form onSubmit={handle}>
        <h2>Register Form</h2>
        {inputs.map((input) => (
          <Forminput key={input.id} {...input} value={values[inputs.name]} onChange={onChange}/>
        ))
        }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
