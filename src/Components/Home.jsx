import React, { useEffect, useState } from 'react';
import axios from "axios";
export const Table = () => {
    const [row, setRow] = useState([]);

    useEffect(() => {
        getResponse()
    }, [])

    const getResponse = () => {
        axios.get('http://localhost:8080/city').then((res) => {
            setRow([...res.data]);
        })
    }

    const sorting = (e) => {
        if (e === 'asc') {
            let ans = row.sort((a, b) => a.population - b.population)
            setRow([...ans])
        }
        else {
            let ans = row.sort((a, b) => b.population - a.population)
            setRow([...ans])
        }
    }

    const filter = (e) => {
        let ans = row.filter((el) => {
            return el.country === e.target.value;
        })
        console.log(ans)
        // setRow([...ans])
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/city/${id}`)
        getResponse();
    }

    return (
        <>
            <input type="text" onChange={filter} />
            <button onClick={() => { filter() }} >Filter by Country</button>
            <button onClick={() => { sorting('asc') }}>Sort Asc</button>
            <button onClick={() => { sorting('desc') }}>Sort Desc</button>
           

            <table style={{ border: '1px solid black', margin: '50px' }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <body>
                    {row.map((row) => (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.country}</td>
                            <td>{row.city}</td>
                            <td>{row.population}</td>
                            {/* <td>{row.edit}</td>
                        <td>{row.delete}</td> */}
                            {/* <td>button onClick={(handleDelete(row.id))}>Delete</button></td>  */}
                            <td><button>Edit</button></td>
                            <td><button onClick={() => { handleDelete(row.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </body>
            </table>
        </>



    )

}
