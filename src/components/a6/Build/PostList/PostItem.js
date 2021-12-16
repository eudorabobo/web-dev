import React from "react";
import "../HomeScreen/home.css"
const PostItem = (
    {
      post = {
        avatarIcon: '../images/elon.jpeg',
        userName: 'Elon Musk',
        handle: '@elonmusk',
        time: '23h',
        content: 'Amazing show about @Inspiration4x mission!',
        image: '../images/inspiration4.jpeg',
        comment: '4.2K',
        retweet: '3.5K',
        like: '37.5K',
        share: '',
        link: {
          image: '../images/inspiration4.jpeg',
          title: 'Coundown: Inspiration4 Mission to Space | Netflix Official Site',
          text: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...',
          link: 'netflix.com'
        }
      }
    }) => {
  console.log(post)
  if (Object.keys(post.link).length === 0) {
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
                      className="wd-color-lightgray">{post.handle} - {post.time}</span>
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
                  <div className="col-3">
                    <i className='far fa-heart wd-icon-padding-right'></i> {post.like}
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
      <div className="list-group-item wd-background-black">
        <div className="row">
          <div className="col-1">
            <img src={post.avatarIcon} alt="" className="wd-avatar wd-margin-right"/>
          </div>
          <div className="col-11">
            <div className="wd-padding-left">
              {post.userName} <i className="fas fa-check-circle"></i>
              <span className="wd-color-lightgray">{post.handle} - {post.time}</span>
            </div>
            <i className="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
            <div className="wd-main-content mb-2 wd-padding-left">
              {post.content}
            </div>
            <div className="wd-border-thin">
              <img src={post.link.image} alt="" className="wd-link-pic"/>
            </div>
            <div className="wd-post-text">
              <p className="wd-post-text-color">
                {post.link.title}
              </p>
              <div className="wd-color-lightgray">
                {post.link.text}
              </div>
              <div className="wd-color-lightgray">
                <i className="fa fa-link"></i> {post.link.link}
              </div>
            </div>
            <div className="row wd-color-lightgray mt-2">
              <div className="col-3">
                <i className='far fa-comment wd-icon-padding-right'></i> {post.comment}
              </div>
              <div className="col-3">
                <i className='fas fa-retweet wd-icon-padding-right'></i> {post.retweet}
              </div>
              <div className="col-3">
                <i className='far fa-heart wd-icon-padding-right'></i> {post.like}
              </div>
              <div className="col-3">
                <i className='fas fa-arrow-up wd-icon-padding-right'></i> {post.share}
              </div>
            </div>

          </div>
        </div>
      </div>
  )
};
export default PostItem;