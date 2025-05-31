import React from "react";


const Sidebar = ({page}) => {
  return (
    <div className="sidebar">
      <div className="logo"><center><h2>HR social Hub</h2></center></div>
      <hr />
      <div> 
        <div className={page==0 ?"option select":"option"}><span className="material-symbols-outlined">news</span>News Feed</div>
        <div className={page==1 ?"option select":"option"}><span className="material-symbols-outlined">person</span>Profiles</div>
        <div className={page==2 ?"option select":"option"}><span className="material-symbols-outlined">star</span>Recognition</div>
        <div className={page==3 ?"option select":"option"}><span className="material-symbols-outlined">groups</span>Groups</div>
        <div className={page==4 ?"option select":"option"}><span className="material-symbols-outlined">equalizer</span>Polls</div>
        <div className={page==5 ?"option select":"option"}><span className="material-symbols-outlined">calendar_month</span>Event</div>
        <div className={page==6 ?"option select":"option"}><span className="material-symbols-outlined">image</span>Media</div>
      </div>
      <hr />
      <div>
        <div className={page==7 ?"option select":"option"}><span className="material-symbols-outlined">trophy</span>Leaderboard</div>
        <div className={page==8 ?"option select":"option"}><span className="material-symbols-outlined">lightbulb</span>Spolight</div>
        <div className={page==9 ?"option select":"option"}><span className="material-symbols-outlined">library_books</span>HR blog</div>
      </div>
    </div>
  );
};

export default Sidebar;
