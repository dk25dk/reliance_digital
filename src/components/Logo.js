import React from 'react'
import { useNavigate } from 'react-router-dom'
export function Logo() {
    const navagte = useNavigate();
    return (
        <div onClick={() => navagte('/')}>
            <img className="w-40 cursor-pointer m-[2px] p-[2px] relative-left-2.5" src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' alt='logo' />
        </div>
    )
}




