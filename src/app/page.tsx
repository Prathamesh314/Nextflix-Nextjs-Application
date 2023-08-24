import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";


export default function Home() {
  return (
    <div>
      <h2>
        <div className="flex">
          <div className="w-60 mr-5 border-r border-gray-600 mt-1">
            <SideBar/>
          </div>
          <div>
            <Feed/>
          </div>
        </div>
      </h2>
    </div>
  )
}
