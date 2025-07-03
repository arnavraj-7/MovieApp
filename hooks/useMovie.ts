import axios from 'axios'



const useAnime = () => {
  const fetchTop = async () => {
    console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/top');
    console.log(response);
    return response.data;
  }
  const fetchUpcoming = async () => {
    console.log("hello");
    const response  = await axios.get('http://192.168.29.210:8001/upcoming');
    // console.log(response);
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

  return {fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId}
}
export default useAnime