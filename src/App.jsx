import { useGlobalContext } from "./context.jsx";

function App() {
  console.log(useGlobalContext().data);

  return <p>hoi</p>;
}

/* <p>{timeframes[activeIndex].current}</p>
      <p>{timeframes[activeIndex].previous}</p> */

export default App;
