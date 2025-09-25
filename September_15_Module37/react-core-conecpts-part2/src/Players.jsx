import { useEffect, useState } from "react"

export default function Players(){
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])


    return (
        <div className="card">
            <h4>Player: {players.length}</h4>
            {
                players.milte
            }
        </div>
    )
}