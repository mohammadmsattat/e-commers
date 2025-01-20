import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UseProtectedRoute = ({auth,children}) => {

    if(auth===false)
    {
        return <Navigate to="/" replace />
    }

  return children? children: <Outlet/>

}

export default UseProtectedRoute