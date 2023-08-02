import avatar from "../assets/image-jeremy.png";
import TabButtons from "./TabButtons.jsx";

const General = () => {
  return (
    <section className="general-container">
      <div className="person">
        <img src={avatar} alt="profile picture" />
        <header>
          <p>Report for</p>
          <h1>
            jeremy <br /> robson
          </h1>
        </header>
      </div>
      <TabButtons />
    </section>
  );
};

export default General;
