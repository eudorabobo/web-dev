import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";
const PostSummaryList = () => {
  return (
      <>
        {
          posts.map(post => {
            return (<PostSummaryItem post={post}/>);
          })
        }
      </>


  )
};
export default PostSummaryList;