import React, { useEffect, useState } from 'react'
import axios from 'axios';

export function MenuBar() {
    const [getMenu, setMenu] = useState([]);
    const [getHide, setHide] = useState(false)

    useEffect(() => {
        const menuData = async () => {
            const res = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories', {
                headers: {
                    projectId: 'f104bi07c490'
                }
            });
            setMenu(res.data.data);
            console.log("menu data");
            console.log(res);
        }
        menuData()
    }, [])
    return (
        <div>
            <button
                className='text-white font-bold'
                onClick={() => setHide(!getHide)}>Menu
                {getMenu.map((item) => (
                    <ul>
                        <li>{item}</li>
                    </ul>
                ))}
            </button>

        </div>
    )
}
