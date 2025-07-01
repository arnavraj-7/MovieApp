import axios from "axios";


const options = {
  method: "GET",
  url: "https://ott-details.p.rapidapi.com/advancedsearch",
  params: {
    start_year: "1970",
    end_year: "2025",
    min_imdb: "6",
    max_imdb: "10",
    genre: "action",
    language: "english",
    type: "movie",
    sort: "latest",
    page: "1",
  },
  headers: {
    "x-rapidapi-key": "fd44cbdd95msh5ca79868ff3c831p1e21afjsn4b688424d236",
    "x-rapidapi-host": "ott-details.p.rapidapi.com",
  },
};


const useMovies = ()=>{
 let data : any = []
  const fetchMovies = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      data = response.data;
    } catch (error) {
      console.error(error);
    }
  }
  return {
    fetchMovies,data
  }
};


export default useMovies;