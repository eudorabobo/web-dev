import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
  return (`
     <div class="col-6">
      <div class="row mt-2">
        <div class="col-10">
          <div class="wd-input-group">
            <span class="wd-icon-inside">
              <i class="fa fa-search wd-icon-color-lightgray" aria-hidden="true"></i>
            </span>
            <input type="text" placeholder="Search Twitter" class="mb-2 wd-input-field"/>
          </div>
        </div>

        <div class="col-2"><a href="#"><i class="fa fa-cog fa-2x"></i></a></div>
      </div>
      <ul class="nav nav-tabs mt-2">
        <li class="nav nav-item">
          <a href="#" class="nav-link ">For you</a>
        </li>
        <li class="nav nav-item">
          <a href="#" class="nav-link">Trending</a>
        </li>
        <li class="nav nav-item">
          <a href="#" class="nav-link">News</a>
        </li>
        <li class="nav nav-item">
          <a href="#" class="nav-link">Sports</a>
        </li>
        <li class="nav nav-item">
          <a href="#" class="nav-link">Entertainment</a>
        </li>
      </ul>
      <div class="list-group">
        <div class="list-group-item">
          <img src="../images/starship.jpeg" alt="..." class="wd-full-width-height">
          <h5 class="card-title">SpaceX's StarShip</h5>
        </div>
        ${PostSummaryList()}
      </div>
    </div>
  `)
}
export default ExploreComponent;