import { useGlobalContext } from "../context";

const TabButtons = () => {
  // deconstruct from global context
  const { currentIndex, setCurrentIndex } = useGlobalContext();

  const buttons = ["daily", "weekly", "monthly"];

  return (
    <div className="button-container">
      {buttons.map((btn, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={
              currentIndex === index ? "tab-btn btn-active" : "tab-btn"
            }
            // className="tab-btn"
            type="button"
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
