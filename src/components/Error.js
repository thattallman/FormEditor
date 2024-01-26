import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    const {status,statusText}= err;
  return (
    <>
    <h1>Oops something went Wrong </h1>
    <p>{status + " : " + statusText}</p>
    
    </>
  )
}

export default Error