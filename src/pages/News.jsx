"use client";
import React from "react";
import NewsPost from "../component/NewsPost";
import { useState, useEffect, useRef } from "react";
import Loding from "../component/Loding";
import Sidebar from "../component/Sidebar";

const News = () => {
  const [Data, setData] = useState([
    {
      title: "Exploring the Forest",
      des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa magnam dolorum ex hic. Animi, numquam? Distinctio laborum accusamus doloremque? Vel ab doloribus sequi facilis est consequatur, nemo labore, placeat omnis, soluta dolor iusto deserunt minus perferendis beatae tempora reiciendis. Impedit rerum beatae iusto earum tenetur pariatur rem, repellendus vitae. Found this hidden trail deep in the woods.",
      Like: 143,
      comment: 23,
      postImg: "https://picsum.photos/400/300?random=101",
      userImg: "https://i.pravatar.cc/150?img=11",
      userName: "Ankit Rawat",
    },
    {
      title: "Road Trip Diaries",
 des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit culpa magnam dolorum ex hic. Animi, numquam? Distinctio laborum accusamus doloremque? Vel ab doloribus sequi facilis est consequatur, nemo labore, placeat omnis, soluta dolor iusto deserunt minus perferendis beatae tempora reiciendis. Impedit rerum beatae iusto earum tenetur pariatur rem, repellendus vitae. Found this hidden trail deep in the woods.",
      Like: 132,
      comment: 15,
      postImg: "https://picsum.photos/400/300?random=108",
      userImg: "https://i.pravatar.cc/150?img=18",
      userName: "Megha Sinha",
    },
  ]);

  const scrollerRef = useRef(null);

  async function GetNextFiveNews(length) {
    setTimeout(() => {
      setData([
        ...Data,
        {
          title: "Exploring the Forest",
          des: "Found this hidden trail deep in the woods.",
          Like: 143,
          comment: 23,
          postImg: "https://picsum.photos/400/300?random=101",
          userImg: "https://i.pravatar.cc/150?img=11",
          userName: "Ankit Rawat",
        },
        {
          title: "Road Trip Diaries",
          des: "Every mile has a memory.",
          Like: 132,
          comment: 15,
          postImg: "https://picsum.photos/400/300?random=108",
          userImg: "https://i.pravatar.cc/150?img=18",
          userName: "Megha Sinha",
        },
        {
          title: "Workout Done",
          des: "Feeling strong and focused 💪",
          Like: 119,
          comment: 13,
          postImg: "https://picsum.photos/400/300?random=109",
          userImg: "https://i.pravatar.cc/150?img=19",
          userName: "Abhay Thakur",
        },
        {
          title: "Festival Vibes",
          des: "Celebrating colors and culture!",
          Like: 245,
          comment: 33,
          postImg: "https://picsum.photos/400/300?random=110",
          userImg: "https://i.pravatar.cc/150?img=20",
          userName: "Ritika Malhotra",
        },
      ]);
    }, 10);
  }

  useEffect(() => {
    const scroller = scrollerRef.current;

    const handleScroll = () => {
      console.log("Scroll position:", scroller.scrollTop);
      const scrollTop = scroller.scrollTop;
      const maxScroll = scroller.scrollHeight - scroller.clientHeight;

      if (scrollTop >= maxScroll - 500) {
        GetNextFiveNews(Data.length);
      }
    };

    scroller.addEventListener("scroll", handleScroll);
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [Data]);

  return (
    <div className="flex w-full ">
      <div className="w-20">
        <Sidebar page={0} />
      </div>
      <div className="w-80 left" ref={scrollerRef}>
        <div className="post">
          <h3>What's happening today ?</h3>
          <center>
            <textarea
              name="description"
              id="description"
              placeholder="Share,update and achivement or shout out..."
            ></textarea>
          </center>
          <div className="flex space-between">
            <div className="flex action-item">
              <span className="material-symbols-outlined">Image</span>
              <span className="material-symbols-outlined">video_file</span>
              <span className="material-symbols-outlined">link</span>
            </div>
            <div>
              <button>Post</button>
            </div>
          </div>
        </div>
        {Data.map((ele, i) => {
          return (
            <NewsPost
              key={i}
              title={ele.title}
              des={ele.des}
              Like={ele.Like}
              comment={ele.comment}
              postImg={ele.postImg}
              userImg={ele.userImg}
              userName={ele.userName}
            />
          );
        })}
        <Loding />
      </div>
    </div>
  );
};

export default News;
