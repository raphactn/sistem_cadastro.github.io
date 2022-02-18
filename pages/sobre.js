import styles from '../styles/Home.module.css'
import { useState } from 'react';
export default function Sobre() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch('/api/users')
        const values = await response.json();
        setData(values)
    }
    return (
        <div>
            <h1>All About You</h1>
            <button onClick={getData}>Carregar</button>
            <ul>
                {data.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>

    )
}