import kebabicon from "../assets/icon-ellipsis.svg";
import { useGlobalContext } from "../context";

const Datagrid = () => {
  // Deconstruct global context
  const { data, currentIndex } = useGlobalContext();

  return (
    <section className="grid-container">
      {data.map((tile, index) => {
        // Deconstruct from data
        const { title, timeframes } = tile;

        return (
          <article className="base-tile" key={index}>
            <figure className="icon">{/* CSS Dynamic */}</figure>
            <div className="timetrack-container">
              {/* inner header */}
              <div className="flex-row-utility">
                <h2>{title}</h2>
                <img src={kebabicon} alt="kebab icon" className="kebab" />
              </div>
              {/* dynamic info */}
              <h3>{timeframes[currentIndex].current}hrs</h3>
              <p className="previous">
                Last week - {timeframes[currentIndex].previous}hrs
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Datagrid;
