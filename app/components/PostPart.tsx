import React, { useEffect, useState } from "react";
import Content from "../content";
import PostCompnent from "../PostCompnent";

const PostPart = () => {
  const [post, setPost] = useState<Array<{}>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPost = async () => {
    return await fetch("/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["posts"],
      },
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((data) => setPost(data.data))
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  console.log("reading Post: ", post);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <Content />
      {isLoading ? (
        <div className="border rounded-md mt-3 bg-zinc-400 animate-pulse border-neutral-300 h-[500px]" />
      ) : (
        <div>
          {post.map((post: any) => (
            <PostCompnent key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostPart;
