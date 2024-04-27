import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

function Navlink() {
    const naviagte = useNavigate()
    return (
        <div className=' list-none'>
            <ul className='flex  text-white gap-3 md'>
                <li className='ml-4 m-3 cursor-pointer' >
                    <LocationOnIcon />
                    Select your pin code
                </li>
                <li className='mr-3 m-3 cursor-pointer hover:text' >
                    <ShoppingCartIcon />
                    Cart
                </li>
                <li className='mr-3 m-3 cursor-pointer' onClick={() => naviagte('/login')} >
                    <PersonIcon />
                    Login
                </li>
            </ul>
        </div>
    )
}

export default Navlink;


//onClick={() => naviagte("/login")} onClick={() => naviagte('/cart')}