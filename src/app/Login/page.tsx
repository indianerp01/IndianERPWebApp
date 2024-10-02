"use client"

import React from "react";
import {FaFacebookF,FaLinkedinIn,FaGoogle,FaRegEnvelope} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
const page = () => {
  return (
    <>
    <main className=" py-20 flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                  <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                        <span className="text-black">Indian</span> 
                        <span className="text-orange-500">E</span>
                        <span className="text-blue-400">R</span>
                        <span className="text-green-500">P</span>
                        
                    </div >
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-orange-500 mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-orange-500 inline-block mb-2"></div>
                        
                        <div className="flex justify-center my-2">
                            <a href="#" className="border border-gray-200 rounded-full p-3 mx-1">
                            <FaFacebookF className="text-sm" />
                            </a>
                            <a href="#" className="border border-gray-200 rounded-full p-3 mx-1">
                            <FaLinkedinIn className="text-sm" />
                            </a>
                            <a href="#" className="border border-gray-200 rounded-full p-3 mx-1">
                            <FaGoogle className="text-sm" />
                            </a>

                        </div>
                        <p className="text-gray-400 mb-2">or use your email account</p>

                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className="text-gray-400 m-2"/>
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none flex-1"  />
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none flex-1" />
                            </div>
                            
                            <div className="flex w-64 mb-5 justify-between">
                                <label className="flex items-center text-xs">
                                    <input type="checkbox" name="remember" className="mr-1" />
                                    Remember
                                </label>
                                <a href="" className="text-xs">Forgot Password?</a>
                            </div>

                            <a className="bg-orange-500 font-semibold text-white border-2 rounded-full py-2 px-12 hover:text-orange-400 hover:bg-white duration-200" >Login</a>

                        </div>
                        
                    </div>
                    
                    
                  </div>
                  <div className="w-2/5 bg-orange-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-2">Fill up personal information and start journey with us.</p>
                    <a href="#" className="border-2 rounded-full px-12 py-2 inline-block font-semibold hover:text-orange-400 hover:bg-white duration-200">Signup</a>
                  </div> 
        </div>
        
    </main>
    

    </>
  )
}

export default page