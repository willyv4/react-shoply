import CardContainer from "./CardContainer";
import { useSelector } from "react-redux";
import Model from "./Model";

function App() {
  const cart = useSelector((st) => st.cart.length);

  return (
    <div className="">
      <div className="fixed right-0 m-10 z-20">
        <div className="indicator">
          <Model />

          <span className="indicator-item badge badge-secondary">{cart} +</span>
        </div>
      </div>
      <br></br>
      <br></br>
      <CardContainer />
    </div>
  );
}

export default App;
