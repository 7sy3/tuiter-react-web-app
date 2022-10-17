const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" src="${post.avatar}" width="48px" height="48px">
                </div>

            <div class="col-11">
                <span><strong>${post.author}</strong></span>
                <i class="fas fa-check-circle"></i>
                <span class="text-dark">${post.handle}</span>
                <span class="text-dark"> · </span>
                <span class="text-dark">${post.time}</span>
                <div>${post.description}</div>
    
                <div class="border border-dark rounded">
                    <img class="border-bottom col-12" src="${post.image}" width="504px" height="264px">
                    <div>${post.imageTitle}</div>
                    <div class="text-dark">${post.imageContent}</div>
                </div>
                
                <div class="row">
                    <div class="col-3">
                        <i class="text-dark fa fa-comment"></i>
                        <span class="text-dark">${post.comments}</span>
                    </div>
                    
                    <div class="col-3">
                        <i class="text-dark fas fa-random"></i>
                        <span class="text-dark">${post.forward}</span>
                    </div>
                    
                    <div class="col-3">
                        <i class="text-dark fa fa-heart"></i>
                        <span class="text-dark">${post.likes}</span>
                    </div>
                    
                    <div class="col-3">
                        <i class="text-dark fa fa-upload"></i>
                    </div>
                </div>
            </div>
        </li>
 `);
}
export default PostItem;