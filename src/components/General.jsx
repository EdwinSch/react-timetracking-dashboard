import avatar from "../assets/image-jeremy.png";

const General = () => {
  return (
    <section className="general-container">
      <div className="person">
        <img src={avatar} alt="profile picture" />
        <p>Report for</p>
        <h1>
          jeremy <br /> robson
        </h1>
      </div>
      {/* todo: button component */}
      <div className="button-container">
        <button>bla</button>
      </div>
    </section>
  );
};

export default General;
