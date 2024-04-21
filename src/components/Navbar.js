import React from 'react'
import { Logo } from '../components/Logo'
import Navlink from './Navlink'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

// import { MenuBar } from '../components/MenuBar'
export function Navbar() {
    return (
        <div className='bg-red-600 flex justify-between w-full md:xl'>
            <Logo />
            {/* <MenuBar /> */}
            <div>
                <Paper component="form"
                    onSubmit={() => { }}
                    sx={{
                        borderRadius: 18,
                        border: "1px solid #e3e3e3",
                        pl: 2,
                        boxShadow: 'none',
                        m: 1.2,
                        width: "400px"
                    }}
                >
                    <input
                        placeholder='Find your product...'
                        value=''

                    />
                    <IconButton type='submit' sx={{ p: '9px', color: 'black' }}>
                        <Search
                            style={{
                                position: 'relative', left: '150px'
                            }}
                            onClick={() => {
                                alert('Search')
                            }} />
                    </IconButton>
                </Paper>

            </div>


            <Navlink />
        </div>
    )
}

