import Post from "../Post";
import {useEffect, useState} from "react";
import { Provider, LikeButton } from "@lyket/react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://zenith-traveling-duke.glitch.me/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
      
    </>
  );
}