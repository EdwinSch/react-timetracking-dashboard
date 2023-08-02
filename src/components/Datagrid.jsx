import { useGlobalContext } from "../context";

const Datagrid = () => {
  // Deconstruct global context
  const { data } = useGlobalContext();

  return (
    <section className="grid-container">
      {data.map((tile, index) => {
        // Deconstruct from data
        const { title, timeframes } = tile;

        return (
          <div className="base-tile" key={index}>
            {title}
          </div>
        );
      })}
    </section>
  );
};

export default Datagrid;

/* <p>{timeframes[activeIndex].current}</p>
      <p>{timeframes[activeIndex].previous}</p> */
