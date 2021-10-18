const NavigationSidebar = (active) => {

  return (`
      <div class="list-group">
        <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        <a id="home" href="../HomeScreen" class="list-group-item"><i class="fa fa-home"></i> Home</a>
        <a id="explore" href="../ExploreScreen" class="list-group-item"><i class="fa fa-hashtag"></i> Explore</a>
        <a id="notificaton" href="#" class="list-group-item"><i class="fa fa-bell"></i> Notifications</a>
        <a id="messages" href="#" class="list-group-item"><i class="fa fa-envelope"></i> Messages</a>
        <a id="bookmarks" href="#" class="list-group-item"><i class="fa fa-bookmark"></i> Bookmarks</a>
        <a id="lists" href="#" class="list-group-item"><i class="fa fa-list"></i> Lists</a>
        <a id="profile" href="#" class="list-group-item"><i class="fa fa-user"></i> Profile</a>
        
          
          <a href="#" class="list-group-item">
          <div class="fa-stack wd-nv-icon"> <i class="fa fa-circle fa-stack-1x wd-nv-icon"></i><i class="fa fa-ellipsis-h fa-inverse fa-stack-1x wd-nv-icon"></i></div>More
            </a>
            
          
        
        <button class="btn btn-primary rounded-pill w-100 mt-2">Tweet</button>
      </div>
        
  `)

}
export default NavigationSidebar;