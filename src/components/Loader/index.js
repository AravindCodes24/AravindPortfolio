import "./index.scss";
import "./loader";

import Canvas2 from "../Canvas/Canvas2";

const Loader = () => {
  return (
    <div className="preloader">
      <Canvas2 />
      <div className="inner">
       
        <span>
          {" "}
          <h1>Aravind is Coding</h1>
        </span>
        <div className="progress-bar">
          <div className="progress-bar_bg">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
