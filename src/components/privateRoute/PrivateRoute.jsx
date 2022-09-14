import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PrivateRoute({children}) {
    const { user } = useSelector(state => state.user)

    if(!user) {
        return <Navigate to='/sign-in' replace />
    }
    return children
}

export default PrivateRoute