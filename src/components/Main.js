import Search from "./Search";
import Rescard from "./Rescard";
import { restaurantsData } from "../utils/resMockData";

const Main = () => {
    return (
      <main className="main-container">
        <Search></Search>
        <div className="res-container">
          {restaurantsData.map((resItem) => (
            <Rescard resData={resItem} key={resItem.info.id}></Rescard>
          ))}
        </div>
      </main>
    );
  };

  export default Main;