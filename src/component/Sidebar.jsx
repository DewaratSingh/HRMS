import React from "react";


const Sidebar = ({page}) => {
  return (
    <div className="sidebar">
      <div className="logo"><center><h2>HR social Hub</h2></center></div>
      <hr />
      <div> 
        <div className={page==0 ?"option select":"option"}><span className="material-symbols-outlined">news</span><span className="value wdxl-lubrifont-tc-regular">News Feed</span></div>
        <div className={page==1 ?"option select":"option"}><span className="material-symbols-outlined">person</span><span className="value wdxl-lubrifont-tc-regular">Profiles</span></div>
        <div className={page==2 ?"option select":"option"}><span className="material-symbols-outlined">star</span><span className="value wdxl-lubrifont-tc-regular">Recognition</span></div>
        <div className={page==3 ?"option select":"option"}><span className="material-symbols-outlined">groups</span><span className="value wdxl-lubrifont-tc-regular">Groups</span></div>
        <div className={page==4 ?"option select":"option"}><span className="material-symbols-outlined">equalizer</span><span className="value wdxl-lubrifont-tc-regular">Polls</span></div>
        <div className={page==5 ?"option select":"option"}><span className="material-symbols-outlined">calendar_month</span><span className="value wdxl-lubrifont-tc-regular">Event</span></div>
        <div className={page==6 ?"option select":"option"}><span className="material-symbols-outlined">image</span><span className="value wdxl-lubrifont-tc-regular">Media</span></div>
      </div>
      <hr />
      <div>
        <div className={page==7 ?"option select":"option"}><span className="material-symbols-outlined">trophy</span><span className="value wdxl-lubrifont-tc-regular">Leaderboard</span></div>
        <div className={page==8 ?"option select":"option"}><span className="material-symbols-outlined">lightbulb</span><span className="value wdxl-lubrifont-tc-regular">Spotlight</span></div>
        <div className={page==9 ?"option select":"option"}><span className="material-symbols-outlined">library_books</span><span className="value wdxl-lubrifont-tc-regular">HR blog</span></div>
      </div>
    </div>
  );
};

export default Sidebar;
