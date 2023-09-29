
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

const PopUpCard = async ({details,children}:{details:any,children:React.ReactNode}) => {
    console.log(details.data);
    const {Title, Year, Rated,Released, Runtime,Genre,Director,Writer,Actors,Plot,Language,Awards,Poster,Ratings,imdbRating,imdbVotes,BoxOffice} = await details.data;
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{Title}</DialogTitle>
          <DialogDescription>
            <div>
              <div>
                <Image src={Poster} alt="Movie Poster"/>
              </div>
              <div>
                <h2>Year: {Year}</h2>
                <h2>Duration: {Runtime}</h2>
                <h2>Released Date: {Released}</h2>
              </div>
              <div>
                <h2>Genre: {Genre}</h2>
                <h2>Rated: {Rated}</h2>
                <h2>Awards: {Awards}</h2>
                <div>
                  <h2>Director: {Director}</h2>
                  <h2>Writer: {Writer}</h2>
                </div>
                <h2>Languages: {Language}</h2>
              </div>
              <div>
                {Ratings.map((item:any,index:any)=>(
                  <div key={index}>
                    <h2>
                      Source: {item.Source}
                      Rating: {item.Value}
                    </h2>
                  </div>
                ))}
              </div>
              <div>
                <h2>Imdab Rating: {imdbRating}</h2>
                <h2>Total People Votes: {imdbVotes}</h2>
                <h2>Box Office: {BoxOffice}</h2>
              </div>
              <div>
                <h2>Actors: {Actors}</h2>
              </div>
              <div>
                <h2>Story: {Plot}</h2>
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
