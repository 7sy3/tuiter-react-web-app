import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                       <!-- search field and cog -->
               <div class="col-11 position-relative align-items-start">
                    <input type="text" class="ps-5 wd-search-bar input-group-lg form-control rounded-pill" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-icon"><i class="fa fa-search wd-search-icon2"></i></span>
               </div>
               <div class="col-1 wd-cog align-items-end">
                    <i class="fas fa-cog wd-cog fa-2x"></i>
               </div>
           </div>
           </br>
           <ul class="nav mb-2 nav-tabs">
               <li class="nav-item">
                    <a class="nav-link wd-nav-color active" href="for-you.html">For You</a>
               </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-color" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-color" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link wd-nav-color" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link wd-nav-color wd-active" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../images/starship.png" width="100%">
                <h1 class="position-absolute bottom-0 left-0 text-dark bg-transparent">
                    SpaceX's Starship
                </h1>
           </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
