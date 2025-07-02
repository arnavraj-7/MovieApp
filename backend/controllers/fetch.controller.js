import axios from 'axios';

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import dotenv from 'dotenv';
dotenv.config();


const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
});


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
    console.log("url:",`https://api.jikan.moe/v4/anime/full`);
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
    const animeData = response.data.data;
    // console.log(animeData);
    const recom = await axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`);
        animeData.recommendations = recom.data;
      res.status(200).json(animeData);
      // res.status(200).json({"message":"Success"})
  } catch (error) {
      res.status(500).json({"error":error.message})
      console.log(error.message);
  }
}

const chat = async (req,res)=>{
    try{
        const message = req.body;
        const response = await model.invoke(new HumanMessage("Hello world!"));
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({"error":error.message})
    }
}




export  {fetchTop,fetchUpcoming,fetchbyId}