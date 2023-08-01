import { useGlobalContext } from "../context";

const Datagrid = () => {
  console.log(useGlobalContext().data);

  return <p>datagrid</p>;
};

export default Datagrid;

/* <p>{timeframes[activeIndex].current}</p>
      <p>{timeframes[activeIndex].previous}</p> */
