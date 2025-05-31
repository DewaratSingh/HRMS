import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { useState } from "react";

const Post = () => {
  const { slug } = useParams();
  const [Data, setData] = useState({
    postImg: "https://picsum.photos/400/300?random=101",
    userImg: "https://i.pravatar.cc/150?img=11",
    userName: "Ankit Rawat",
    title: "Exploring the Forest",
   // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci quidem libero nostrum cupiditate voluptas ipsa at dolore eaque rem dolores reprehenderit mollitia nobis unde tempore magni ex expedita doloribus corporis perferendis. Deleniti laboriosam ratione, a distinctio temporibus est, eveniet ex maiores libero, aut assumenda itaque ut quaerat nisi vitae.",
    Like: 143,
    comment: 23,
  });

  return (
    <div className="flex w-full">
      <div className=" w-20">
        <Sidebar page={1} />
      </div>
      <main className="w-80 left">
        <section className="post-card" style={{ margin: "auto" }}>
          <div className="post-header">
            <img src={Data.userImg} alt="" className="user-avatar" />
            <div>
              <div className="user-name">{Data.userName || slug}</div>
              <div className="post-time">2 hours ago</div>
            </div>
          </div>
          <h1 className="post-title">{Data.title || "Let's talk something"}</h1>
          <div className="post-description">
            {Data.des || (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, adipisci quidem libero nostrum cupiditate voluptas
                ipsa at dolore eaque rem dolores reprehenderit mollitia nobis
                unde tempore magni ex expedita doloribus corporis perferendis.
                Deleniti laboriosam ratione, a distinctio temporibus est,
                eveniet ex maiores libero, aut assumenda itaque ut quaerat nisi
                vitae.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                incidunt beatae quia fugiat pariatur sed, unde odio, delectus
                velit et expedita voluptate quos dolor doloribus similique
                repellendus culpa mollitia porro hic, dolorem soluta sint
                doloremque ad corrupti? Modi itaque iste nihil a vitae illum
                soluta nostrum et, voluptates nemo commodi. <br />
                lore30m ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, adipisci quidem libero nostrum cupiditate voluptas
                ipsa at dolore eaque rem dolores reprehenderit mollitia nobis
                unde tempore magni ex expedita doloribus corporis perferendis.
                Deleniti laboriosam ratione, a distinctio temporibus est,
                eveniet ex maiores libero, aut assumenda itaque ut quaerat nisi
                vitae.
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis, facilis! Alias voluptas eaque nostrum, tempore
                necessitatibus odit ipsa maxime aliquid! Facere cupiditate modi
                eius! Veniam magni repellat rem nobis molestias doloribus quis
                eum mollitia similique voluptate laboriosam laudantium, quod
                atque soluta officia quo rerum ad nisi neque sapiente maiores
                consequuntur eos. Vero assumenda asperiores recusandae quidem
                dignissimos. Dicta placeat excepturi itaque ullam perspiciatis
                explicabo quae, velit nisi culpa quaerat voluptatibus suscipit
                voluptates. Nesciunt vero perferendis et sunt possimus rem nam
                consequatur doloremque, blanditiis qui.
              </div>
            )}
          </div>
          {Data.postImg && (
            <div className="post-image-wrapper">
              <img src={Data.postImg} alt="" className="post-image" />
            </div>
          )}
          <div className="post-actions">
            <div className="action-item">
              <span className="material-symbols-outlined">thumb_up</span>
              <span className="action-count">{Data.Like || 0}</span>
              <span className="action-label">Like</span>
            </div>
            <div className="action-item">
              <span className="material-symbols-outlined">comment</span>
              <span className="action-count">{Data.comment || 0}</span>
              <span className="action-label">Comment</span>
            </div>
            <div className="action-item">
              <span className="material-symbols-outlined">share</span>
              <span className="action-label">Share</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Post;
