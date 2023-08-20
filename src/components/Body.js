import ResturantCard from "./RestaurantCard";
import resList from "../utlis/mockData";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          let filterList = data.filter((data) => data.resName === 'Res 1')
          setData(filterList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {data.map((res)=>{
          return(
            <ResturantCard key={res.id} resName={res.resName} cuisine={res.cuisine}/>
          )
        })}
      </div>
    </div>
  )
}

export default Body