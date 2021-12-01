import React from "react";
const PostSummaryItem = (
    {
      post = {
        topic: "Web Development",
        userName: 'ReactJS',
        time: '2h',
        title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
        image: '../images/react.png'
      }
    }) => {
  return (
      <>
        <li className="list-group-item">
          <div className="row mt-2">
            <div className="col-10">
              <div className="wd-suggestion">{post.topic}</div>
              <div className="wd-author-title">{post.userName} <i
                  className="fas fa-check-circle"></i> <span
                  className="wd-time-passed">- {post.time}</span></div>
              <div className="wd-author-title">
                {post.title}
              </div>
            </div>
            <div className="col-2">
              <img src={post.image} alt=""
                   className="rounded wd-margin-right" width="58" height="58"/>
            </div>
          </div>
        </li>
      </>

  )
}
export default PostSummaryItem;