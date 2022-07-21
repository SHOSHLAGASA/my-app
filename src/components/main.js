import React,  { useState } from "react";

const Main = () => {
const [tickets, setTickets] = useState(0);

const purchase = () => {
    setTickets(tickets + 1);
}
 return (
        <main>
            <div className="Box">
            <p>Show in St.Louis MO it August 4  </p>
            <button onClick={purchase}>purchase</button>
            {tickets}
            </div>
        </main>
    )
    }


export default Main