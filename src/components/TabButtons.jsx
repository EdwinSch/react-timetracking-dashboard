const TabButtons = () => {
  const buttons = ["daily", "weekly", "monthly"];

  return (
    <div className="button-container">
      {buttons.map((btn, index) => {
        return (
          <button key={index} type="button" className="tab-btn">
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
