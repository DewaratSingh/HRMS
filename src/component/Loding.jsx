import React from "react";

const Loding = () => {
  return (
    <div className="news flex" >
      <div style={{width:20+"%"}}>
        <div style={{height:40+"px",width:40+"px" ,borderRadius:50+"%"}} className="loading rounded"></div>
      </div>
      <div className="w-80" style={{ marginLeft: 5 + "px" }}>
        <span className="loading">dewarat singh</span><br />
        <span className="loading">I am good codder</span><br />
        <span className="loading">name is dewarat i am Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, sint!
        </span><br />
        <div className="loading" style={{height:400+"px",width:450+"px"}}>
          <center></center>
        </div>
      </div>
    </div>
  );
};

export default Loding;
