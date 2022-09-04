import React from 'react'
import "./Feed.css"
import write from "../images/write.svg"
import NewPostOption from "./NewPostOption"
import Post from "./Post"
import image from "../images/image.svg"
import video from "../images/video.svg"
import event from "../images/event.svg"
import article from "../images/article.svg"
import { useEffect, useState } from 'react'
import {db} from "../firebase"

function Feed() {

  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    db.collection("posts")
  }, [])

  return (
    <div className='feed'>
      <div className="newPost">
        <div className="newPostInput">
            <img src={write} alt="" />
            <form action="">
            <input type="text" placeholder="Post a picture from school or work"/>
            <button type="submit">Send</button>
            </form>
        </div>
        <div className='postOptions'>
            <NewPostOption Icon={image} title="Photo"/>
            <NewPostOption Icon={video} title="Video"/>
            <NewPostOption Icon={event} title="Event"/>
            <NewPostOption Icon={article} title="Write article"/>
        </div>
      </div>

      <Post />
    </div>
  )
}

export default Feed
