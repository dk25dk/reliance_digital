import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCategoryBar } from '../utils/getCategorebar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function CategoriesBar() {
  const [getNav, setNav] = useState([])

  useEffect(() => {
    const categorieData = async () => {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories', {
        headers: {

        }
      })
    }
  }, [])
  const arrayOfListItems = getCategoryBar();
  return (
    <div className='bg-blue-950'>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', listStyle: "none", color: 'white' }}>
        {arrayOfListItems.map(({ term, category }, index) => {
          return (
            <li key={index} id={category}
              style={{
                fontSize: '12px',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'center',
                gap: "5px",
                alignItems: " center",
                padding: "0.75rem",
                transform: "0.25s",
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(0.9) '}



            >
              {term}
              <KeyboardArrowDownIcon style={{ transform: "0.25s", color: 'white' }} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}



