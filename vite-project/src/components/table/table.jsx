import { useEffect, useState } from 'react'
import './table.css'

function Table(){
    const [newsData, setNewsData] = useState([]);
 
    useEffect(() => {
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://chroniclingamerica.loc.gov/newspapers.json';
        fetch(corsProxy + url)
            .then(response => response.json())
            .then(data => setNewsData(data.newspapers));
    }, []);
return (
        <table>
            <thead>
                <tr>
                    <th>Iccn</th>
                    <th>Url</th>
                    <th>State</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {newsData.map((item, id) => (
                    <tr key={id}>
                        <td>{item.iccn}</td>
                        <td>{item.url}</td>
                        <td>{item.state}</td>
                        <td>{item.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table