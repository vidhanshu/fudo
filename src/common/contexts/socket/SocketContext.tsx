import React, { FC, createContext, useState, Dispatch } from 'react'

interface ISocketConetxt {
    socket: any,
    setSocket: React.SetStateAction<Dispatch<any>>
}
export const SocketContext = createContext<ISocketConetxt>({} as ISocketConetxt);

const SocketProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [socket, setSocket] = useState<any>(null);

    return (
        <SocketContext.Provider value={{
            socket, setSocket
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider