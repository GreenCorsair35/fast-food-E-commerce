import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import auth from '../auth'
const ProtectedRoute = ({component:Component, ...rest}) => {
    return (
        <Routes>
            <Route {...rest} render={
                props=>{
                    if (auth.isAuthenticated()) {
                        return <Component {...props}/>
                    }else{
                        return <useNavigate to='/'/>
                    }
                }
            }/>
        </Routes>
    )
}

export default ProtectedRoute
