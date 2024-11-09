import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {
  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="text" {...register("nickName")} className='block mb-3' placeholder='Enter your Nick name' />
        <input type="email" {...register("email")} className='block mb-3' placeholder='Enter your email' />
        <input type="password" required={true}  {...register("password")} className='block mb-3' placeholder='Enter your password' />

        <button className='bg-orange-400 text-white px-4 py-2 rounded-md'>Войти</button>

      </form>
    </div>
  )
}

export default Login