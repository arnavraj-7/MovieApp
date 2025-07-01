// import Movie from "../models/movies.schema.js";

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

const fetchMovies = async () => {
    try {
        const res = await axios.get('https://api.jikan.moe/v4/anime');
        console.log(res.data);
        return res.data
    } catch (error) {
        console.log(error);
    }
}