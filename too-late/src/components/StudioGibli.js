import {useState, useEffect} from 'react'
import './StudioGhibli.css';
export default function StudioGhibli(){
    
    //set these movies to a state
    //Render all movies by mapping through the array ul & li
    //Loading feature
    const [listOfMovies, setListOfMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        //Retrieve the list of movies from https://ghibliapi.herokuapp.com/films/
        fetch('https://ghibliapi.herokuapp.com/films/')
        .then((response)=>{
            //json the information received from the API
            return response.json();
        })
        .then((data)=>{
            //set these movies to a state
            setListOfMovies(data)
            setLoading(false)
            //We can't console log state after setting state
            //setState(setter) takes a while
        })
    }, [])
    const mappingOfData = listOfMovies.map((element)=>{
            return(
                <li><p>{element.title}</p><img className="imgSize" src={element.image}/></li>
            )
        })
    return(
        <div>
            <h2>Studio Ghibli Archive:</h2>
            {loading && <h2>Loading...</h2>}
            {listOfMovies.length > 0 && <ul>{mappingOfData}</ul>}
        </div>
    );
};