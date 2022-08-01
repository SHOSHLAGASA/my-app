import React,  { useState } from "react"

 import Home from "./views/Home"
 import Results from "./views/Results"
 import CheckOut from "./views/CheckOut"



const Main = () => {
const [tickets, setTickets] = useState(0);
const [showResults, setShowResults] = useState(false)

const purchase = () => {
    setTickets(tickets + 1);
 if(tickets === 10){
sold()
 }  
}
 function sold() { 
     alert('All tickets are sold out');

 }
 return (
        <main>
            <div className="Box">
            <p>Show in St.Louis MO it August 4  </p>
            <button onClick={purchase}>purchase</button>
            {tickets}
            if(showResults === )
            </div> 
        </main>
    )
    }

    

export default Main