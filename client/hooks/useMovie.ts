import axios from 'axios'




const useAnime = () => {
 
 const url='https://animeverse-awjb.onrender.com';
  //  url='http://192.168.29.210:8001';
  const fetchRandom = async () => {

    // console.log("hello");
    const response  = await axios.get(`${url}/random`);
    // console.log(response);
    return response.data;
  }
  const fetchTop = async () => {
    // console.log("hello");
    const response  = await axios.get(`${url}/top`);
    console.log("top fetched");
    return response.data;
  }
  const fetchUpcoming = async () => {
    // console.log("hello");
    const response  = await axios.get(`${url}/upcoming`);
    console.log("upcoming fetched");
    return response.data;
  }
  const fetchbyId = async (id:string) => {
    // console.log("hello");
    const response  = await axios.get(`${url}/anime/${id}`);
    // console.log(response);
    return response.data;
  }
  const fetchManga = async () => {
    // console.log("hello");
    const response  = await axios.get(`${url}/manga`);
    // console.log(response);
    return response.data;
  }
  const fetchMangabyId = async (id:string) => {
    // console.log("hello");
    const response  = await axios.get(`${url}/manga/${id}`);
    // console.log(response);
    return response.data;
  }

  return {fetchRandom,fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId}
}
export default useAnime