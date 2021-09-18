import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Login Screen</h1>
            <hr></hr>

            <button 
            onClick={ ()=> setUser({
                ...user,
                name: 'paco'
            })}
            className="btn btn-primary">
                Login
            </button>
        </div>
    )
}
