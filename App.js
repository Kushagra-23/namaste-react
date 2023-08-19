import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const resList = [
  {
    resName: 'Res 1',
    cuisine: 'Fast Food',
    id: 1
  },
  {
    resName: 'Res 2',
    cuisine: 'Burger',
    id: 2
  },
];

const ResturantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{backgroundColor: 'lightgray'}}>
      <img className="res-logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="res-logo"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res)=>{
          return(
            <ResturantCard key={res.id} resName={res.resName} cuisine={res.cuisine}/>
          )
        })}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app">
            <Header/>
            <Body/>
          </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
