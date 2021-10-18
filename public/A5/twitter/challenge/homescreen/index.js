import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import posts from "../PostList/posts.js";
import PostList from "../PostList/PostList.js";
(function ($) {
  $('#wd-explore').append(`
    <div class="row mt-2 mb-5">
      <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar()}
      </div>
      <div class="col-6 ">
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
          
         ${PostList()}
      </div>
      <div class="col-4 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       ${PostSummaryList()}
      </div>
    </div>
  `)
  $('#home').attr('class', 'list-group-item active');
})($);