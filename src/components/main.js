// import React,  { useState } from "react"

import { Route, NavLink, HashRouter} from "react-router-dom"; 
import Home from "./views/Home"
import Results from "./views/Results"
import CheckOut from "./views/CheckOut"


const Main = () => {
    return (
        <HashRouter>
            <div>
<ul className="pages">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/Results">Results</NavLink></li>
    <li><NavLink to="/CheckOut">CheckOut</NavLink></li>
</ul>
<div>
    <Route path="/" views={Home}/>
    <Route path="/Results" views={Results}/>
    <Route path="/CheckOut" views={CheckOut}/>

</div>
</div>

        </HashRouter>
    )
    }
    

// const Main = () => {
// const [tickets, setTickets] = useState(0);

// const purchase = () => {
//     setTickets(tickets + 1);
//  if(tickets === 10){
// sold()
//  }  
// }
//  function sold() { 
//      alert('All tickets are sold out');

//  }
//  return (
//         <main>
//             <div className="Box">
//             <p>Show in St.Louis MO it August 4  </p>
//             <button onClick={purchase}>purchase</button>
//             {tickets}
//             </div> 
//         </main>
//     )
//     }

    

export default Main