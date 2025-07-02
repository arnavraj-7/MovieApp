import axios from 'axios';
// const fetchMovies = async(req,res)=>{
//     try{
//         const movies = await Movie.find({});
//         res.status(200).json(movies);
//         console.log("Movies sent");
//     }catch(error){
//         console.log(error);
//     }
// }
// export default fetchMovies

const fetchTop = async (req,res) => {
    try {
        const anime = await axios.get('https://api.jikan.moe/v4/top/anime');
        console.log(anime.data);
        res.status(200).json(anime.data.data);
        // res.status(200).json({"message":"Success"})
    } catch (error) {
        res.status(500).json({"error":error.message})
        console.log(error);
    }
}
const fetchUpcoming = async (req,res) => {
    try {
        const anime = await axios.get('https://api.jikan.moe/v4/seasons/upcoming');
        console.log(anime.data);
        res.status(200).json(anime.data.data);
        // res.status(200).json({"message":"Success"})
    } catch (error) {
        res.status(500).json({"error":error.message})
        console.log(error);
    }
}
const fetchbyId = async (req,res) => {
  try {
    const {id} = req.params;
    console.log("id:",id);
    console.log("url:",`https://api.jikan.moe/v4/anime//full`);
      const anime = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
      console.log(anime.data);
      res.status(200).json(anime.data.data);
      // res.status(200).json({"message":"Success"})
  } catch (error) {
      res.status(500).json({"error":error.message})
      console.log(error.message);
  }
}




export  {fetchTop,fetchUpcoming,fetchbyId}