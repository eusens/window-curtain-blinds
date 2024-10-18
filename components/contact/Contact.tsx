'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">Contact Us</h2>
        <div className='mb-6'>
          <label
            htmlFor='name'
            className='mb-2 block text-base font-medium text-gray-700'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            className='w-full rounded-lg border border-gray-300 bg-white py-4 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='mb-2 block text-base font-medium text-gray-700'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-lg border border-gray-300 bg-white py-4 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='message'
            className='mb-2 block text-base font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            rows={5}
            placeholder='Type your message'
            className='w-full rounded-lg border border-gray-300 bg-white py-4 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 resize-none'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div className="text-center">
          <button className='w-full rounded-lg bg-purple-600 py-4 px-8 text-base font-semibold text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
