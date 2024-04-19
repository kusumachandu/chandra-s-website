import React from 'react'

const EmailTemplate = ({ email, subject, message }) => {
  return (
    <div className='flex justify-center items-center'>
    <div className='text-center'>
      <h1>{subject}</h1>
      <p>You have received mail from {email}</p>
      <p>{message}</p>
    </div>
    </div>
  )
}

export default EmailTemplate