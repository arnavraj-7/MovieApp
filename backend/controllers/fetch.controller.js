import axios from 'axios';

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import dotenv from 'dotenv';
dotenv.config();


const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
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
    console.log("called by id");
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


const fetchManga = async (req,res) => {
  try {
      const manga = await axios.get('https://api.jikan.moe/v4/manga');
      console.log(manga.data);
      res.status(200).json(manga.data.data);
      // res.status(200).json({"message":"Success"})
  } catch (error) {
      res.status(500).json({"error":error.message})
      console.log(error);
  }
}

const fetchMangabyId = async (req,res) => {
  try {
    console.log("called by id");
    const {id} = req.params;
    console.log("id:",id);
    console.log("url:",`https://api.jikan.moe/v4/manga/${id}/full`);
    const response = await axios.get(`https://api.jikan.moe/v4/manga/${id}/full`);
    const mangaData = response.data.data;
    // console.log(mangaData);
    const recom = await axios.get(`https://api.jikan.moe/v4/manga/${id}/recommendations`);
        mangaData.recommendations = recom.data;
      res.status(200).json(mangaData);
      // res.status(200).json({"message":"Success"})
  } catch (error) {
      res.status(500).json({"error":error.message})
      console.log(error.message);
  }
}

const chat = async (req, res) => {
  try {
    const { messages } = req.body; 
    console.log("messages",messages);
    const formattedMessages = [new SystemMessage(
        "You are an anime expert and your job is to only answer questions related to anime. \
        Speak in a friendly, conversational tone like a fellow fan. \
        If the user asks anything unrelated to anime — including math, general knowledge, coding, science, or other topics — politely respond that you're only here to talk about anime and cannot help with anything else."
    )]
    messages.map((message) => {
        
        if(message.role === 'assistant'){
          console.log("pushing ai message",message.content);
            formattedMessages.push(new AIMessage(message.content));
        }else if(message.role==='user'){
            console.log("pushing human message",message.content);
            formattedMessages.push(new HumanMessage(message.content));
        }
    });
    console.log("called chat!",formattedMessages);
    const response = await model.invoke(
     formattedMessages
    );

    res.status(200).json({ response: response.content });
    console.log(response.content);
    return 
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};





export  {fetchTop,fetchUpcoming,fetchbyId,fetchManga,fetchMangabyId,chat}