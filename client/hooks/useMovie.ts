import axios from 'axios'




const useAnime = () => {
  const fetchRandom = async () => {
    // console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/random');
    // console.log(response);
    return response.data;
  }
  const fetchTop = async () => {
    // console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/top');
    console.log("top fetched");
    return response.data;
  }
  const fetchUpcoming = async () => {
    // console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/upcoming');
    console.log("upcoming fetched");
    return response.data;
  }
  const fetchbyId = async (id:string) => {
    // console.log("hello");
    const response  = await axios.get(`http://192.168.29.210:8001/anime/${id}`);
    // console.log(response);
    return response.data;
  }
  const fetchManga = async () => {
    // console.log("hello");
    const response  = await axios.get(`http://192.168.29.210:8001/manga`);
    // console.log(response);
    return response.data;
  }
  const fetchMangabyId = async (id:string) => {
    // console.log("hello");
    const response  = await axios.get(`http://192.168.29.210:8001/manga/${id}`);
    // console.log(response);
    return response.data;
  }

  return {fetchRandom,fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId}
}
export default useAnime