import PostSummaryList from "../PostSummaryList.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
                       <!-- search field and cog -->
               <div class="col-10 position-relative align-items-start">
                        <input type="text" class="ps-4 wd-search-bar input-group-lg form-control rounded-pill" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-icon"><i class="fa fa-search wd-search-icon2"></i></span>
               </div>
               <div class="col-2 wd-cog align-items-end">
                    <i class="fas fa-cog wd-cog fa-2x"></i>
               </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
