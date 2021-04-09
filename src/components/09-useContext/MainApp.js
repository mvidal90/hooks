import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

    // const user = {
    //     id: 1234,
    //     name: 'Marcos',
    //     mail: 'marcos.vidal@gmail.com'
    // }
    
    return (
        <UserContext.Provider value ={{
            user,
            setUser,
            temporal: 1234
        }}>

            <AppRouter />

        </UserContext.Provider>
    )
}
