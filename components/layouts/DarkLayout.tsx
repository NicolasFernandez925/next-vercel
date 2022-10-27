import React, { ReactNode } from 'react'

export const DarkLayout = ({children} : {children: ReactNode}) => {
  return (
    <div style={{
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'
        
    }}>
        <h1>Dark layout</h1>
        {children}
    </div>
  )
}
