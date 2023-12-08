import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { createAccount } from '../../api/authApi';

export const Register = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        userName: yup.string().required("must be Filled"),
        email: yup.string().email().required("must be Filled"),
        password: yup.string().required("must be Filled"),
        confirm: yup.string().oneOf([yup.ref("password")]),
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
    
        createAccount(data).then(() => {
          navigate("/verify");
        });
      });
    
    


    
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='border rounded-md w-[500px] min-h-[200px]'>
        <div className='m-4 font-[400]'>Register</div>
      <form className='m-3'  onSubmit={onHandleSubmit}>
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="text" placeholder='Username'
        {...register("userName")} 
        />
        <div className='text-red-700 text-12px text-right'>{errors.userName?.message}</div>
        </div>
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="email" placeholder='Email'
        {...register("email")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.email?.message}</div>
        </div>
        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="password" placeholder='password'
        {...register("password")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.password?.message}</div>
        </div>

        <div className='my-2'>
        <input className='w-full h-[35px] rounded-sm border outline-red-400 pl-2' 
        type="password" placeholder='confirm password'
        {...register("confirm")}
        />
        <div className='text-red-700 text-12px text-right'>{errors.confirm?.message}</div>
        </div>

        <button className='w-full bg-purple-700 h-[45px] rounded-md text-white' type="submit">
            Register
        </button>
        <div>
            Already have an account, 
            <Link to="/signIn">
                <span className='ml-1 font-bold'>Sign here</span>
            </Link>
        </div>
      </form>
        </div>
    </div>
  )
}

export default Register
