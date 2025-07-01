const fetchMovies = async(req,res)=>{
    try{
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    }catch(error){
        console.error(error);
    }
}