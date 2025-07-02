import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  // initializing
  
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,SetPhone]=useState("")
  const[password,setPassword]=useState("")

  // initializing other hooks
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,SetError]=useState("")

  // function to send data to api

  const submit=async(e)=>{

    e.preventDefault()

    setLoading('Loading...')
    try {

      const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      
      // calling api
      
      const response=await axios.post("http://crispus.alwaysdata.net/api/signup",data)

      setLoading("")
      
      setSuccess(response.data.message)

      // reset form
      setUsername('')
      setEmail('')
      setPassword('')
       SetPhone('')
      
    } catch (error) {
      setLoading("")
      SetError(error.message)

      
    }

    


  }



  return (
    <section className='row justify-content-center mt-4'>

      <div className='card shadow col-md-6'>

        <h1>SignUp</h1>
        <form action="" onSubmit={submit}>

          
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

        <input type="text" placeholder='Enter your username' className='form-control' required  value={username} onChange={(e)=>setUsername(e.target.value)}/>

        <br />
        <input type="email" placeholder='Enter your email' class='form-control'  value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <br />

         <input type="tel" placeholder='Enter phone number' class='form-control'  value={phone} onChange={(e)=>SetPhone(e.target.value)}/>
         <br />

         

        <input type="password" placeholder='Enter your password' class='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />

        <input  type="submit" value='SignUp' placeholder='SignUp' 
        className=' btn bg-success form-control text-white w-100 ' />

        

        <br />
        <p>Already have an account?  <Link to='/SignIn' >SignIn</Link></p>

        <br />
        </form>

      </div>


      



    </section>
  )
}

export default Signup