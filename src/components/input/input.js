import { useState } from 'react'
import './input.css'

function Input() {

    const [name, setName] = useState('shrukhal')

    return (

        <>
            <input type="text"
                placeholder='Enter the Input'
                className='input'
                onChange={(e) => { setName(e.target.value) }}
            />

            <h2>My name is {name}</h2>

        </>
    )
}

export default Input