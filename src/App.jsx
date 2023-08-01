import { useState } from "react";
import trackingData from "./data.json";

function App() {
  const [data, setData] = useState(trackingData);
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <>
      <h2>hello world</h2>
      <div>
        {data.map((item, index) => {
          const { title, timeframes } = item;

          return (
            <div className="card" key={index}>
              <h4>{title}</h4>
              <p>{timeframes[activeIndex].current}</p>
              <p>{timeframes[activeIndex].previous}</p>

              {/* {console.log(timeframes)} */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
