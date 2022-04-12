import sylas from "./sylas.png";
import summonersRift from "./SummonersRift.jpg";

const Banner = () => {
  return (
    <section className="banner__container">
      <img className="sylas" src={sylas} alt="sylas" />
      <img className="summonersRift" src={summonersRift} alt="sylas" />
    </section>
  );
};

export default Banner;
