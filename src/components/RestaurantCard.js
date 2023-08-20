import { LOGO_URL } from "../utlis/constant";

const ResturantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{backgroundColor: 'lightgray'}}>
      <img className="res-logo" src={LOGO_URL} alt="res-logo"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 mins</h4>
    </div>
  )
}

export default ResturantCard