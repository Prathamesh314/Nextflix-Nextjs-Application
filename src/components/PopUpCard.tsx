import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import Image from "next/image";

const PopUpCard = ({details,children}:{details:any,children:React.ReactNode}) => {
    console.log(details);

    const {Title, Year, Rated,Released, Runtime,Genre,Director,Writer,Actors,Plot,Language,Awards,Poster,Ratings,imdbRating,imdbVotes,BoxOffice} = details;
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-black">{Title}</DialogTitle>
          <DialogDescription>
          <div className="text-black">
              <div className="relative w-50 aspect-video">
                <Image src={Poster} alt="Movie Poster" fill className="object-contain object-center"/>
              </div>
              <div>
                <h2><span className="font-semibold">Year: </span>{Year}</h2>
                <h2><span className="font-semibold">Duration: </span>{Runtime}</h2>
                <h2><span className="font-semibold">Released Date: </span>{Released}</h2>
              </div>
              <div>
                <h2><span className="font-semibold">Genre: </span>{Genre}</h2>
                <h2><span className="font-semibold">Rated: </span>{Rated}</h2>
                <h2><span className="font-semibold">Awards: </span>{Awards}</h2>
                <div>
                  <h2><span className="font-semibold">Director: </span>{Director}</h2>
                  <h2><span className="font-semibold">Writer: </span>{Writer}</h2>
                </div>
                <h2><span className="font-semibold">Languages: </span>{Language}</h2>
              </div>
              <div>
                {Ratings?.map((item:any,index:any)=>(
                  <div key={index}>
                    <h2>
                    <span className="font-semibold">Source: </span>{item.Source}
                    <span className="font-semibold">Rating: </span>{item.Value}
                    </h2>
                  </div>
                ))}
              </div>
              <div>
                <h2><span className="font-semibold">IMDB Rating: </span>{imdbRating}</h2>
                <h2><span className="font-semibold">Total People Vote on IMDB: </span>{imdbVotes}</h2>
                <h2><span className="font-semibold">BoxOffice Collection: </span>{BoxOffice}</h2>
              </div>
              <div>
                <h2><span className="font-semibold">Actors: </span>{Actors}</h2>
              </div>
              <div>
                <h2><span className="font-semibold">Storyline: </span>{Plot}</h2>
              </div>
            </div>
            
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogTrigger>
                <Button type="submit">Close</Button>
            </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PopUpCard
{/*  */}