const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="row mt-2">
        <div class="col-10">
          <div class="wd-suggestion">${post.topic}</div>
          <div class="wd-author-title">${post.userName} <i class="fas fa-check-circle"></i> <span class="wd-time-passed">- ${post.time}</span></div>
          <div class="wd-author-title">
            ${post.title}
          </div>
        </div>
        <div class="col-2">
          <img src="${post.image}" alt="" class="rounded wd-margin-right" width="78" height="78">
        </div>
      </div>
    </li>
  `)
}
export default PostSummaryItem;