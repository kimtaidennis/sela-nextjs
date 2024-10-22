import React from 'react'

const Layout = ({ children}: { children: React.ReactNode}) => {
    return (
        <main className='min-h-screen w-full flex items-center justify-center bg-slate-100'>{ children }</main>
    )
}

export default Layout