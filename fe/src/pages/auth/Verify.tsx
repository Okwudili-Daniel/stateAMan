import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { createAccount, verifyAccount } from '../../api/authApi';

export const Verify = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        token: yup.string().required("must be Filled"),
        email: yup.string().email().required("must be Filled"),
    })

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });

      const onHandleSubmit = handleSubmit((data) => {
        console.log(data);
    
        verifyAccount(data).then(() => {
          navigate("/signIn");
        });
      });
    
    


    
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='border rounded-md w-[500px] min-h-[200px]'>
        <div className='m-4 font-[400]'>Register</div>
      <form className='m-3'  onSubmit={onHandleSubmit}>
       
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="" placeholder='token'
        {...register("token")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.email?.message}</div>
        </div>
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="email" placeholder='email'
        {...register("email")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.email?.message}</div>
        </div>

        <button className='w-full bg-purple-700 h-[45px] rounded-md text-white' type="submit">
            Register
        </button>
        <div>
            Already have an account, 
            <Link to="/">
                <span className='ml-1 font-bold'>Login here</span>
            </Link>
        </div>
      </form>
        </div>
    </div>
  )
}

export default Verify
