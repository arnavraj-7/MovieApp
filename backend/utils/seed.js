import  connectDB  from "./db.js"
import Movie from '../models/movies.schema.js'
import axios from 'axios';

let movieData = [];
 const options = {
  method: "GET",
  url: "https://ott-details.p.rapidapi.com/advancedsearch",
  params: {
    start_year: "2015",
    end_year: "2025",
    min_imdb: "6",
    max_imdb: "10",
    genre: "action",
    language: "hindi",
    type: "movie",
    sort: "latest",
    page: "1",
  },
  headers: {
    "x-rapidapi-key": "fd44cbdd95msh5ca79868ff3c831p1e21afjsn4b688424d236",
    "x-rapidapi-host": "ott-details.p.rapidapi.com",
  },
};


try{
      const response = await axios.request(options);
      console.log(response.data);
         movieData = response.data;
    } catch (error) {
      console.error(error);
    }
  

const saveMovies = async () => {
  await connectDB();

  try {
    await Movie.insertMany(movieData.results);
    console.log("Movies saved successfully");
    process.exit();
  } catch (err) {
    console.error("Error saving movies:", err);
    process.exit(1);
  }
};

saveMovies();
