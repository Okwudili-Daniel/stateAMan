import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { createAccount, signInAccount } from '../../api/authApi';
import { loginUser } from '../../global/ReduxState';
import { useDispatch } from "react-redux";

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const schema = yup.object({
        email: yup.string().email().required("must be Filled"),
        password: yup.string().required("must be Filled"),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

      const onHandleSubmit = handleSubmit((data:any) => {
        console.log(data);
    
        signInAccount(data).then((res) => {
          dispatch(loginUser(res.data))
          navigate("/");
        });
      });
    
    


    
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='border rounded-md w-[500px] min-h-[200px]'>
        <div className='m-4 font-[400]'>Sign In</div>
      <form className='m-3'  onSubmit={onHandleSubmit}>
       
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2 border-purple-200 placeholder:text-purple-300 mb-4' 
        type="email" placeholder='email'
        {...register("email")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.email?.message}</div>
        </div>
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2 border-purple-200 placeholder:text-purple-300' 
        type="password" placeholder='password'
        {...register("password")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.password?.message}</div>
        </div>

        <button className='w-full bg-purple-700 h-[45px] rounded-md text-white mt-4' type="submit">
            Sign In
        </button>
        <div className='w-full mt-6 flex items-center justify-center'>
            Don't have an account, 
            <Link to="/register">
                <span className='ml-1 font-bold text-purple-950'>Sign Up here</span>
            </Link>
        </div>
      </form>
        </div>
    </div>
  )
}

export default SignIn

