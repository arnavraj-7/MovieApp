import axios from 'axios'



const useMovies = () => {
  const fetchMovies = async () => {
    console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/fetch');
    console.log(response);
    return response.data;
  }
  return {fetchMovies}
}
export default useMovies
