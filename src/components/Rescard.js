import { cloudinaryImage_URL as CIMG_URL  } from "../utils/config";

const Rescard = ({ resData }) => {
    console.log(resData);
    const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
    return (
      <div className="res-card">
        <img
          width="250px"
          height="300px"
          alt="res-img"
          src={
            CIMG_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4 className="cusine">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating + " Ratings"}</h4>
        <h4 className="eta">{sla.deliveryTime + " mins"}</h4>
      </div>
    );
  };

  export default Rescard;