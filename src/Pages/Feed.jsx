import React from "react";
import PostContent from "../Components/ContentPost/PostContent";
import CreatePost from "../Components/CreatePost/CreatePost";

function Feed() {
  return (
    <div className="w-full mx-auto">
      <CreatePost />
      <PostContent />
    </div>
  );
}

export default Feed;
