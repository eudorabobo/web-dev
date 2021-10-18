const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-2">
          <img src="${who.avatarIcon}" alt="" class="rounded-circle" width="48" height="48">
        </div>
        <div class="col-7">
          ${who.userName} <i class="fas fa-check-circle"></i>
          <div>@${who.handle}</div>
        </div>
        <div class="col-3">
          <button class="btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  `)
}
export default WhoToFollowListItem;