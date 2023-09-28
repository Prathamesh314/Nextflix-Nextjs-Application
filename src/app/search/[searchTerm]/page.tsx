"use client"
import Feed from '@/components/Feed/Feed';
import Loader from '@/components/Loader';
import { FetchFromApi } from '@/components/constants/FetchFromApi';
import category_ids from '@/components/data/category_ids';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const searchPage = ({params}:{params:any}) => {

  const [SearchResults, setSearchResults] = useState<any>([]);
  
    let title = params.searchTerm;

    const [posters, setposters] = useState<any>('');

      useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?t=${title}&apikey=de71f961`).then((data)=>setposters(data))
      },[title])
      
      let genre = posters.data
      let myarray = [];
      if(genre!=undefined){
        genre = genre.Genre;
        myarray = genre.split(",");
        genre = myarray[0]
      }else{
        genre = "Action";
      }

      let val = "12";

      for (const [key, value] of Object.entries(category_ids)) {
        if (genre === key) {
          val = value
          break;
        }
      }

      useEffect(()=>{
        FetchFromApi(val,"title","all",title).then((data)=>setSearchResults(data));
      })

      // console.log(SearchResults)
      

  return (
    <div className='text-black font-semibold'>
      {SearchResults.length==0?<Loader/>:<Feed videos={SearchResults} />}      
    </div>
  )
}

export default searchPage