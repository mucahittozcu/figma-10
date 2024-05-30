"use client"
import { useState } from "react"
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
const App = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
    return (
  <div className="flex justify-center items-center overflow-hidden h-screen relative">
    
   <div className="flex w-1/2 h-full items-center justify-center bg-[#DC5B12]">
   <div className="pl-56 pr-56 flex flex-col ">
        <h2 className="text-7xl font-semibold text-white">Welcome Back</h2>
       <div className="opacity-70 text-xl text-white mt-10">
         <p>Sign in with your credentionals</p>
         <p>to enjoy our uninterupted services</p>
       </div>
        <p className="opacity-70 mt-10 text-xl">Dont have an account yet ?</p>
        <img src={"/image 4.png"} alt="market arabası" className=" mt-14 mb-10 w-[350px]" />
        <button className="text-white bg-[#DC5B12] hover:text-[#DC5B12] hover:border-[#DC5B12] hover:bg-white  border-white border w-[450px] h-[60px] rounded-full duration-300">CLICK HERE TO SIGN UP</button>
    </div>
   </div>
 
    <div className="w-1/2  h-full flex flex-col justify-center bg-[#ffffff]">
       <h1 className="text-8xl font-semibold flex justify-center ">SIGN IN TO SHEY</h1>
    <div className="pl-56 pr-56 p-10 flex flex-col bg-[#ffffff]">

       <div className="flex justify-center mt-8">
         <a href="#" className="pr-6"><FcGoogle size={50} /></a>
         <a href="#" className="pl-6 pr-2"><AiFillLinkedin size={50} color="blue" /></a>
         <a href="#" className="pl-7"><AiFillGithub size={50} color="darkblue" /></a>
       </div>

        <div className="flex items-center my-7 ">
            <hr className="flex flex-grow h-[2px] bg-slate-950"></hr>
            <span className="text-black text-xl mx-5">OR</span>
            <hr className="flex flex-grow h-[2px] bg-slate-950"></hr>
        </div>

      <div className="flex justify-center items-center flex-col">
        <p className="flex justify-center opacity-50 text-xl">use email and password</p>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          className="w-[500px] h-[70px] mt-8 pl-7 bg-opacity-50 bg-slate-300 rounded-full"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          className="w-[500px] h-[70px] pl-7 rounded-full bg-opacity-50 bg-slate-300 mt-7"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="bg-[#DC5B12] hover:text-[#DC5B12] border hover:bg-white hover:border-[#DC5B12] text-[#ffffff] w-[500px] text-xl font-semibold h-[60px] duration-300 rounded-full mt-10 ">LOGIN</button>
      </div>
      </div>
      

    </div>

  </div>
    )
}
export default App