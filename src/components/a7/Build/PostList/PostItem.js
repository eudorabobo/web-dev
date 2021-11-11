import React from "react";
import "../HomeScreen/home.css"
import {useDispatch} from "react-redux";
const PostItem = ({post}) => {
  const dispatch = useDispatch();
  const deleteTweetClickHandler = () => {
    console.log(post._id);
    dispatch({type: 'delete-tweet', post})
  };
  const likeClickHandler = () => {
    dispatch({type: 'like-tweet', post});
  }

  function isEmpty(post) {
    for (var key in post) {
      if (post.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  if (isEmpty(post.link)) {
    return (
        <>
          <div className="list-group-item wd-background-black">
            <div className="row">
              <div className="col-1">
                <img src={post.avatarIcon} alt="" className="wd-avatar"/>
              </div>
              <div className="col-11">
                <div className="wd-padding-left">
                  {post.userName} <i className="fas fa-check-circle"></i>
                  <span
                      className="wd-color-lightgray">{post.handle} - {post.time}
                  </span>
                  <i onClick={deleteTweetClickHandler}
                     className="fas fa-times fa-pull-right"></i>
                </div>

                <i className="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
                <div className="wd-main-content mb-2 wd-padding-left">
                  {post.content}
                </div>
                <img src={post.image} alt="" className="wd-rounded-corners-pic"/>
                <div className="row wd-color-lightgray mt-2">
                  <div className="col-3">
                    <i className='far fa-comment wd-icon-padding-right'></i> {post.comment}
                  </div>
                  <div className="col-3">
                    <i className='fas fa-retweet wd-icon-padding-right'></i> {post.retweet}
                  </div>
                  <div className="col-3"
                       onClick={likeClickHandler}>
                    {
                      post.liked && <i className="fas fa-heart me-2"
                                       style={{color: post.liked ? "red": "white"}}></i>
                    }
                    {
                      !post.liked && <i className="far fa-heart me-2"></i>
                    }
                    {post.like}
                  </div>

                  <div className="col-3">
                    <i className='fas fa-arrow-up wd-icon-padding-right'></i> {post.share}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
  }
  return (
      <div class="list-group-item wd-background-black">
        <div class="row">
          <div class="col-1">
            <img src={post.avatarIcon} alt="" class="wd-avatar wd-margin-right"/>
          </div>
          <div class="col-11">
            <div class="wd-padding-left">
              {post.userName} <i class="fas fa-check-circle"></i>
              <span class="wd-color-lightgray">{post.handle} - {post.time}</span>
              <i onClick={deleteTweetClickHandler}
                 className="fas fa-times fa-pull-right"></i>
            </div>
            <i class="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
            <div class="wd-main-content mb-2 wd-padding-left">
              {post.content}
            </div>
            <div class="wd-border-thin">
              <img src={post.link.image} alt="" class="wd-link-pic"/>
            </div>
            <div class="wd-post-text">
              <p class="wd-post-text-color">
                {post.link.title}
              </p>
              <div class="wd-color-lightgray">
                {post.link.text}
              </div>
              <div class="wd-color-lightgray">
                <i class="fa fa-link"></i> {post.link.link}
              </div>
            </div>
            <div class="row wd-color-lightgray mt-2">
              <div class="col-3">
                <i class='far fa-comment wd-icon-padding-right'></i> {post.comment}
              </div>
              <div class="col-3">
                <i class='fas fa-retweet wd-icon-padding-right'></i> {post.retweet}
              </div>
              <div className="col-3"
                   onClick={likeClickHandler}>
                {
                  post.liked && <i className="fas fa-heart me-2"
                                   style={{color: post.liked ? "red": "white"}}></i>
                }
                {
                  !post.liked && <i className="far fa-heart me-2"></i>
                }
                {post.like}
              </div>
              <div class="col-3">
                <i class='fas fa-arrow-up wd-icon-padding-right'></i> {post.share}
              </div>
            </div>

          </div>
        </div>
      </div>
  )
};
export default PostItem;