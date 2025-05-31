import React from "react";

const NewsPost = ({title, des, Like, comment, postImg, userImg, userName}) => {
  return (
    <div className="news flex w-20 post">
      <div>
        <img
          src={userImg}
          height={45}
          width={45}
          alt=""
          className="profileIcon rounded"
        />
      </div>
      <div className="w-80" style={{ marginLeft: "5px" }}>
        <div className="user-name">{userName}</div>
        <div className="user-time">{title}</div>
        <div className="ancizar-sans-italic ">
          {des && des.length > 80 ? des.slice(0, 80) + "..." : des}
        </div>
        <div>
          <center>
            <img src={postImg} height={400} width={450} alt="" />
          </center>
        </div>
        <div className="flex">
          <div>
            <div className="action-item">
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="action-count">{Like || 0}</span>
              <span className="action-label">Like</span>
            </div>
          </div>
          <div style={{ marginLeft: "5px" }}>
            <div className="action-item">
              <span className="material-symbols-outlined">comment</span>
              <span className="action-count">{comment || 0}</span>
              <span className="action-label">Comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
