import { useState } from "react"

export  const MovieSearch = () => { 
    const[examine, setExamine] = useState("")
    const handleInputChange = (e) => { 
        setExamine(e.target.value)
    }

    return ( 

      <div className="container"> 

       <h1 className="title">Movie Search</h1>

       <form> 
        <input
         type="text"
         placeholder="Write a movie"
         value={examine}
         onChange={handleInputChange}
         />
         <button type="submit" className="search-button">Search</button>
       </form>

      </div>
    )
}