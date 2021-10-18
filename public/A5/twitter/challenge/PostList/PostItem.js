const PostItem = (post) => {
  if ($.isEmptyObject(post.link)) {
    return (`
  <div class="list-group-item wd-background-black">
    <div class="row">
      <div class="col-1">
        <img src="${post.avatarIcon}" class="wd-avatar">
      </div>
      <div class="col-11">
        <div class="wd-padding-left">
          ${post.userName} <i class="fas fa-check-circle"></i> 
          <span class="wd-color-lightgray">${post.handle} - ${post.time}</span>        
        </div>
        
        <i class="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
        <div class="wd-main-content mb-2 wd-padding-left">
          ${post.content}
        </div>
        <img src="${post.image}" class="wd-rounded-corners-pic">
        <div class="row wd-color-lightgray mt-2">
          <div class="col-3">
            <i class='far fa-comment wd-icon-padding-right'></i> ${post.comment}
          </div>
          <div class="col-3">
            <i class='fas fa-retweet wd-icon-padding-right'></i> ${post.retweet}
          </div>
          <div class="col-3">
            <i class='far fa-heart wd-icon-padding-right'></i> ${post.like}
          </div>
          <div class="col-3">
            <i class='fas fa-arrow-up wd-icon-padding-right'></i> ${post.share}
          </div>
        </div>

      </div>
    </div>
  </div>
  `)
  }
  return (`
  <div class="list-group-item wd-background-black">
    <div class="row">
      <div class="col-1">
        <img src="${post.avatarIcon}" class="wd-avatar wd-margin-right">
      </div>
      <div class="col-11">
        <div class="wd-padding-left">
          ${post.userName} <i class="fas fa-check-circle"></i>
          <span class="wd-color-lightgray">${post.handle} - ${post.time}</span>        
        </div>
        <i class="fas fa-ellipsis-h wd-right-align wd-color-lightgray"></i>
        <div class="wd-main-content mb-2 wd-padding-left">
          ${post.content}
        </div>
        <div class="wd-border-thin">
          <img src="${post.link.image}" class="wd-link-pic">
        </div>
          <div class="wd-post-text">
            <p class="wd-post-text-color">
              ${post.link.title}
            </p>
            <div class="wd-color-lightgray">
              ${post.link.text}
            </div>  
            <div class="wd-color-lightgray">
              <i class="fa fa-link"></i> ${post.link.link}
            </div>  
        </div>
        <div class="row wd-color-lightgray mt-2">
          <div class="col-3">
            <i class='far fa-comment wd-icon-padding-right'></i> ${post.comment}
          </div>
          <div class="col-3">
            <i class='fas fa-retweet wd-icon-padding-right'></i> ${post.retweet}
          </div>
          <div class="col-3">
            <i class='far fa-heart wd-icon-padding-right'></i> ${post.like}
          </div>
          <div class="col-3">
            <i class='fas fa-arrow-up wd-icon-padding-right'></i> ${post.share}
          </div>
        </div>

      </div>
    </div>
  </div>
  `)
}
export default PostItem;