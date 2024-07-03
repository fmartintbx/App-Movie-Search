import { useState } from "react"

export  const MovieSearch = () => { 
    const[examine, setExamine] = useState("")
    const[movies, setMovies]= useState([])
   
    const handleInputChange = (e) => { 
        setExamine(e.target.value)
    }

    const handleSubmit = (e) => { 
      e.preventDefault()
      fetchMovies()
    }

    const fetchMovies = async() => { 
      try{ 
       const response = await fetch(``)
      }catch(error){ 

      }
    }

    return ( 

      <div className="container"> 

       <h1 className="title">Movie Search</h1>

       <form onSubmit = {handleSubmit}> 
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